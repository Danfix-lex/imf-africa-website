import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';
import { getCloudinaryEnvVars, isCloudinaryConfigured } from '@/lib/env-utils';

// Enhanced cache with size limit and TTL
class APICache {
  private cache: Map<string, { data: any; timestamp: number; etag: string }> = new Map();
  private maxSize: number;
  private ttl: number;

  constructor(maxSize: number = 50, ttl: number = 5 * 60 * 1000) {
    this.maxSize = maxSize;
    this.ttl = ttl;
  }

  get(key: string): { data: any; etag: string } | null {
    const item = this.cache.get(key);
    if (!item) return null;

    // Check if item has expired
    if (Date.now() - item.timestamp > this.ttl) {
      this.cache.delete(key);
      return null;
    }

    return { data: item.data, etag: item.etag };
  }

  set(key: string, data: any, etag: string): void {
    // Remove oldest items if we're at max size
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) this.cache.delete(firstKey);
    }

    this.cache.set(key, { data, timestamp: Date.now(), etag });
  }

  clear(): void {
    this.cache.clear();
  }
}

// Create cache instance
const apiCache = new APICache(50, 5 * 60 * 1000); // 50 items, 5 minutes TTL

export async function GET(request: Request) {
  try {
    console.log('=== GALLERY API CALLED ===');
    
    // Log environment variables status for debugging using our utility
    console.log('Checking Cloudinary environment variables...');
    const { cloudName, apiKey, apiSecret } = getCloudinaryEnvVars();
    console.log('Environment variables status in API route (using utility):');
    console.log('- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:', cloudName ? 'SET' : 'NOT SET');
    console.log('- CLOUDINARY_API_KEY:', apiKey ? 'SET' : 'NOT SET');
    console.log('- CLOUDINARY_API_SECRET:', apiSecret ? 'SET' : 'NOT SET');
    
    // Additional debugging
    if (cloudName) {
      console.log('- Cloud name value length:', cloudName.length);
    }
    
    // Check configuration using our utility
    const configured = isCloudinaryConfigured();
    console.log('Cloudinary configured (using utility):', configured);
    
    // Generate ETag based on request
    const url = new URL(request.url);
    const cacheKey = `gallery_${url.search}`;
    
    // Check if client has cached version
    const ifNoneMatch = request.headers.get('If-None-Match');
    
    // Check our cache
    const cached = apiCache.get(cacheKey);
    if (cached && ifNoneMatch === cached.etag) {
      console.log('Returning 304 Not Modified');
      return new NextResponse(null, { 
        status: 304,
        headers: {
          'ETag': cached.etag,
          'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
        }
      });
    }

    console.log('Fetching fresh data from Cloudinary');
    const galleryItems = await getGalleryImages();
    console.log('Fetched', galleryItems.length, 'items from Cloudinary');
    
    // Generate ETag based on data
    const dataString = JSON.stringify(galleryItems);
    const etag = `"${Buffer.from(dataString).toString('base64')}"`;
    
    // If client has this version, return 304
    if (ifNoneMatch === etag) {
      console.log('Returning 304 Not Modified (after fetch)');
      return new NextResponse(null, { 
        status: 304,
        headers: {
          'ETag': etag,
          'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
        }
      });
    }
    
    // Update cache
    apiCache.set(cacheKey, galleryItems, etag);
    
    // Return data with caching headers
    return new NextResponse(JSON.stringify(galleryItems), {
      headers: {
        'Content-Type': 'application/json',
        'ETag': etag,
        'Cache-Control': 'public, max-age=300, stale-while-revalidate=600',
        'Last-Modified': new Date().toUTCString(),
      },
    });
  } catch (error: any) {
    console.error('=== GALLERY API ERROR ===');
    console.error('Error in gallery API route:', error);
    console.error('Error stack:', error.stack);
    
    // Determine the appropriate HTTP status code
    let statusCode = 500;
    let errorMessage = error.message || 'Unknown error occurred';
    
    // Handle specific error cases
    if (errorMessage.includes('Cloudinary environment variables are not properly configured')) {
      statusCode = 500;
      errorMessage = 'Cloudinary environment variables are not properly configured. Please check your Render dashboard settings.';
    } else if (errorMessage.includes('Failed to fetch gallery items from Cloudinary')) {
      statusCode = 502; // Bad Gateway - issue with upstream service (Cloudinary)
      errorMessage = 'Failed to connect to Cloudinary service. Please check Cloudinary configuration and folder permissions.';
    }
    
    // Return a more detailed error response
    return new NextResponse(JSON.stringify({ 
      error: 'Failed to fetch gallery items', 
      details: errorMessage,
      stack: error.stack, // Include stack trace for debugging
      // Add more specific error information for debugging
      timestamp: new Date().toISOString(),
      cloudinaryConfigured: isCloudinaryConfigured(),
      envVars: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'SET' : 'NOT SET',
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET',
        CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET',
      }
    }), { 
      status: statusCode,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

// Add OPTIONS method for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, If-None-Match',
    },
  });
}