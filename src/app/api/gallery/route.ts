import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

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
    console.log('=== GALLERY API TEST ===');
    
    // Test importing the Cloudinary library
    console.log('Attempting to import cloudinary library...');
    const cloudinaryModule = await import('@/lib/cloudinary');
    console.log('Cloudinary module imported successfully');
    console.log('Available functions:', Object.keys(cloudinaryModule));
    
    // Test the getGalleryImages function specifically
    console.log('Testing getGalleryImages function...');
    const galleryItems = await cloudinaryModule.getGalleryImages();
    console.log('getGalleryImages executed successfully, items count:', galleryItems.length);
    
    return NextResponse.json({ 
      success: true, 
      message: 'API working',
      count: galleryItems.length,
      sample: galleryItems.slice(0, 3)
    });
  } catch (error: any) {
    console.error('=== GALLERY API ERROR ===');
    console.error('Error in gallery API route:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json({ 
      success: false,
      error: error.message || 'Unknown error occurred',
      stack: error.stack
    }, { status: 500 });
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