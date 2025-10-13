import { v2 as cloudinary } from 'cloudinary';
import { getCloudinaryEnvVars, isCloudinaryConfigured } from './env-utils';

// We'll configure Cloudinary when needed instead of at module import time
let isCloudinaryConfiguredFlag = false;

function configureCloudinary() {
  if (!isCloudinaryConfiguredFlag) {
    try {
      console.log('=== CONFIGURING CLOUDINARY ===');
      
      // Get environment variables using our utility
      const { cloudName, apiKey, apiSecret } = getCloudinaryEnvVars();
      
      // Log the environment variables for debugging (without exposing secrets)
      console.log('Configuring Cloudinary with:');
      console.log('- Cloud name:', cloudName ? 'SET' : 'NOT SET');
      console.log('- API key:', apiKey ? 'SET' : 'NOT SET');
      console.log('- API secret:', apiSecret ? 'SET' : 'NOT SET');
      
      // Additional debugging for environment variables
      if (cloudName) {
        console.log('- Cloud name value length:', cloudName.length);
      }
      if (apiKey) {
        console.log('- API key value length:', apiKey.length);
      }
      
      // Check if we're in a server environment
      const isServer = typeof window === 'undefined';
      console.log('Running in server environment:', isServer);
      
      // Validate configuration
      if (isServer) {
        // In server environment, we need all three variables
        if (!cloudName || !apiKey || !apiSecret) {
          console.error('Missing required Cloudinary environment variables in server environment');
          console.error('- Cloud name:', cloudName || 'MISSING');
          console.error('- API key:', apiKey ? 'SET' : 'MISSING');
          console.error('- API secret:', apiSecret ? 'SET' : 'MISSING');
          throw new Error('Cloudinary environment variables are not properly configured for server environment');
        }
      } else {
        // In browser environment, we only need the cloud name
        if (!cloudName) {
          console.error('Missing NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in browser environment');
          throw new Error('Cloudinary cloud name is not properly configured for browser environment');
        }
      }
      
      cloudinary.config({
        cloud_name: cloudName,
        api_key: apiKey,
        api_secret: apiSecret,
      });
      
      console.log('Cloudinary configured with cloud name:', cloudName);
      isCloudinaryConfiguredFlag = true;
    } catch (error: any) {
      console.error('Error configuring Cloudinary:', error);
      console.error('Error stack:', error.stack);
      throw new Error(`Failed to configure Cloudinary: ${error.message || 'Unknown error'}`);
    }
  }
}

// Enhanced in-memory cache for gallery images with LRU eviction
class LRUCache<T> {
  private cache: Map<string, { value: T; timestamp: number }> = new Map();
  private maxSize: number;
  private ttl: number; // Time to live in milliseconds

  constructor(maxSize: number = 100, ttl: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.ttl = ttl;
  }

  get(key: string): T | null {
    const item = this.cache.get(key);
    if (!item) return null;

    // Check if item has expired
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    // Move to front (most recently used)
    this.cache.delete(key);
    this.cache.set(key, { value: item.value, timestamp: item.timestamp });
    return item.value;
  }

  set(key: string, value: T): void {
    // Remove oldest items if we're at max size
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }

    this.cache.set(key, { value, timestamp: Date.now() });
  }

  clear(): void {
    this.cache.clear();
  }
}

// Create cache instances with optimized settings for production
const galleryCache = new LRUCache<any[]>(100, 10 * 60 * 1000); // 100 items, 10 minutes TTL
const thumbnailCache = new LRUCache<string>(500, 15 * 60 * 1000); // 500 items, 15 minutes TTL

export async function getGalleryImages() {
  try {
    console.log('=== GETTING GALLERY IMAGES ===');
    
    // Check if we have valid cached data
    const cacheKey = 'gallery_images';
    const cachedData = galleryCache.get(cacheKey);
    if (cachedData) {
      console.log('Returning cached gallery images');
      return cachedData;
    }

    // Configure Cloudinary when needed
    console.log('Configuring Cloudinary...');
    configureCloudinary();

    // Double-check configuration
    if (!isCloudinaryConfigured()) {
      const { cloudName, apiKey, apiSecret } = getCloudinaryEnvVars();
      const missingVars = [];
      if (!cloudName) missingVars.push('NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME');
      if (!apiKey) missingVars.push('CLOUDINARY_API_KEY');
      if (!apiSecret) missingVars.push('CLOUDINARY_API_SECRET');
      
      console.error('Cloudinary environment variables are not properly configured. Missing:', missingVars.join(', '));
      throw new Error(`Cloudinary service is not properly configured. Missing environment variables: ${missingVars.join(', ')}. Please check environment variables.`);
    }

    console.log('Fetching images from Cloudinary gallery folder');
    // Get all images and videos from Cloudinary with specific tags or folder
    let result;
    try {
      result = await cloudinary.search
        .expression('folder:gallery') // Change this to your folder name
        .sort_by('created_at', 'desc')
        .max_results(500)
        .with_field('context')
        .execute();
    } catch (searchError: any) {
      console.error('Error searching Cloudinary folder:', searchError);
      console.error('Search error stack:', searchError.stack);
      // If the folder doesn't exist, try a more general search
      if (searchError.message && searchError.message.includes('folder')) {
        console.log('Trying general search instead of folder-specific search');
        result = await cloudinary.search
          .expression('resource_type:image OR resource_type:video')
          .sort_by('created_at', 'desc')
          .max_results(100)
          .with_field('context')
          .execute();
      } else {
        throw searchError;
      }
    }

    console.log('Cloudinary search returned', result.total_count, 'items');
    
    // Transform the data to match our gallery item structure
    const galleryItems = result.resources.map((resource: any) => {
      // Generate proper thumbnail URL using Cloudinary's transformation
      let thumbnailUrl = resource.secure_url;
      
      // Check thumbnail cache first
      const thumbnailCacheKey = `${resource.public_id}_thumb`;
      const cachedThumbnail = thumbnailCache.get(thumbnailCacheKey);
      
      if (cachedThumbnail) {
        thumbnailUrl = cachedThumbnail;
      } else if (resource.resource_type === 'image' && resource.format !== 'pdf') {
        // For images, generate a thumbnail
        thumbnailUrl = cloudinary.url(resource.public_id, {
          width: 400,
          height: 220,
          crop: "fill",
          format: 'webp',
          quality: 'auto',
        });
        // Cache the thumbnail URL
        thumbnailCache.set(thumbnailCacheKey, thumbnailUrl);
      } else if (resource.resource_type === 'video') {
        // For videos, generate a thumbnail from the middle of the video
        thumbnailUrl = cloudinary.url(resource.public_id, {
          width: 400,
          height: 220,
          crop: "fill",
          format: 'webp',
          quality: 'auto',
          resource_type: 'video',
          transformation: [
            { start_offset: 'auto' }
          ]
        });
        // Cache the thumbnail URL
        thumbnailCache.set(thumbnailCacheKey, thumbnailUrl);
      } else {
        // For documents and other resource types, we'll handle them differently in the UI
        // So we don't need a thumbnail URL
        thumbnailUrl = '';
      }
      
      // Determine the type based on resource_type
      let itemType: 'image' | 'video' | 'document' = 'image';
      const documentFormats = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'rtf', 'odt', 'ods', 'odp'];
      
      // More robust document detection
      if (resource.resource_type === 'video') {
        itemType = 'video';
      } else if (resource.resource_type === 'raw') {
        // Raw files are always documents
        itemType = 'document';
      } else if (resource.resource_type === 'image' && documentFormats.includes((resource.format || '').toLowerCase())) {
        // Image resources that are actually documents (like PDFs uploaded as images)
        itemType = 'document';
      }
      
      return {
        id: resource.asset_id,
        type: itemType,
        title: resource.context?.custom?.title || resource.public_id.split('/').pop() || 'Untitled',
        description: resource.context?.custom?.alt || 'No description available',
        url: resource.secure_url,
        thumbnail: thumbnailUrl,
        downloadUrl: resource.secure_url, // Direct download URL
        category: resource.context?.custom?.category || 'General',
        date: resource.created_at,
        duration: resource.duration, // Video duration in seconds
        format: resource.format, // File format
      };
    });

    console.log('Transformed', galleryItems.length, 'gallery items');

    // Update cache
    galleryCache.set(cacheKey, galleryItems);

    return galleryItems;
  } catch (error: any) {
    console.error('=== ERROR IN GET GALLERY IMAGES ===');
    console.error('Error fetching images from Cloudinary:', error);
    console.error('Error stack:', error.stack);
    // Provide more specific error information
    let errorMessage = error.message || 'Unknown error occurred';
    if (errorMessage.includes('folder') && errorMessage.includes('not found')) {
      errorMessage += '. Please make sure you have created a "gallery" folder in your Cloudinary account and uploaded some media to it.';
    }
    throw new Error(`Failed to fetch gallery items from Cloudinary: ${errorMessage}. Please check Cloudinary configuration and folder permissions.`);
  }
}

// Function to upload media to Cloudinary
export async function uploadMedia(file: Buffer, options: any) {
  try {
    // Ensure Cloudinary is configured
    configureCloudinary();
    
    const result = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error) {
            console.error('Error uploading to Cloudinary:', error);
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      
      // Write file buffer to upload stream
      uploadStream.end(file);
    });
    
    return result as any;
  } catch (error: any) {
    console.error('Error in uploadMedia function:', error);
    return null;
  }
}

// Function to generate a download URL for a resource
export function getDownloadUrl(publicId: string, resourceType: string = 'image') {
  try {
    // Ensure Cloudinary is configured
    configureCloudinary();
    
    const { cloudName } = getCloudinaryEnvVars();
    return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/fl_attachment/${publicId}`;
  } catch (error: any) {
    console.error('Error in getDownloadUrl function:', error);
    return '';
  }
}

export default cloudinary;