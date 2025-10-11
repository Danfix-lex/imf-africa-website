import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

// Simple in-memory cache
const cache: { data: any; timestamp: number } = { data: null, timestamp: 0 };
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request: Request) {
  try {
    console.log('Gallery API called');
    
    // Check if we have valid cached data
    const now = Date.now();
    if (cache.data && (now - cache.timestamp) < CACHE_DURATION) {
      console.log('Returning cached data');
      return NextResponse.json(cache.data);
    }

    console.log('Fetching fresh data from Cloudinary');
    const galleryItems = await getGalleryImages();
    console.log('Fetched', galleryItems.length, 'items from Cloudinary');
    
    // Update cache
    cache.data = galleryItems;
    cache.timestamp = now;
    
    return NextResponse.json(galleryItems);
  } catch (error: any) {
    console.error('Error in gallery API route:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery items', details: error.message }, { status: 500 });
  }
}