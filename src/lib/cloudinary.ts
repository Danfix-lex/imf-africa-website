import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary server-side
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Simple in-memory cache for gallery images
const galleryCache: { data: any; timestamp: number } = { data: null, timestamp: 0 };
const GALLERY_CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function getGalleryImages() {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (galleryCache.data && (now - galleryCache.timestamp) < GALLERY_CACHE_DURATION) {
      return galleryCache.data;
    }

    // Get all images from Cloudinary with specific tags or folder
    const result = await cloudinary.search
      .expression('folder:gallery') // Change this to your folder name
      .sort_by('created_at', 'desc')
      .max_results(500)
      .with_field('context')
      .execute();

    // Transform the data to match our gallery item structure
    const galleryItems = result.resources.map((resource: any) => ({
      id: resource.asset_id,
      type: resource.resource_type === 'video' ? 'video' : 'image',
      title: resource.context?.custom?.title || resource.public_id.split('/').pop() || 'Untitled',
      description: resource.context?.custom?.alt || 'No description available',
      url: resource.secure_url,
      thumbnail: resource.secure_url.replace('/upload/', '/upload/c_scale,w_300/'),
      downloadUrl: resource.secure_url, // Direct download URL
      category: resource.context?.custom?.category || 'General',
      date: resource.created_at,
    }));

    // Update cache
    galleryCache.data = galleryItems;
    galleryCache.timestamp = now;

    return galleryItems;
  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return [];
  }
}

// Function to upload media to Cloudinary
export async function uploadMedia(file: Buffer, options: any) {
  try {
    const result = await cloudinary.uploader.upload_stream(
      options,
      (error, result) => {
        if (error) {
          console.error('Error uploading to Cloudinary:', error);
          return null;
        }
        return result;
      }
    );
    return result;
  } catch (error) {
    console.error('Error in uploadMedia function:', error);
    return null;
  }
}

// Function to generate a download URL for a resource
export function getDownloadUrl(publicId: string, resourceType: string = 'image') {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  return `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/fl_attachment/${publicId}`;
}

export default cloudinary;