import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

// Simple in-memory cache
const cache: { data: any; timestamp: number } = { data: null, timestamp: 0 };
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request: Request) {
  try {
    // Check if we have valid cached data
    const now = Date.now();
    if (cache.data && (now - cache.timestamp) < CACHE_DURATION) {
      return NextResponse.json(cache.data);
    }

    const galleryItems = await getGalleryImages();
    
    // Update cache
    cache.data = galleryItems;
    cache.timestamp = now;
    
    return NextResponse.json(galleryItems);
  } catch (error) {
    console.error('Error in gallery API route:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery items' }, { status: 500 });
  }
}