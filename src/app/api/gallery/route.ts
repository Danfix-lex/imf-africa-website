import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

export async function GET(request: Request) {
  try {
    console.log('=== SIMPLE GALLERY API CALLED ===');
    
    // Get gallery images directly without caching
    const galleryItems = await getGalleryImages();
    console.log('Fetched', galleryItems.length, 'items from Cloudinary');
    
    // Return data directly
    return NextResponse.json(galleryItems);
  } catch (error: any) {
    console.error('=== SIMPLE GALLERY API ERROR ===');
    console.error('Error in gallery API route:', error);
    console.error('Error stack:', error.stack);
    
    return NextResponse.json({ 
      error: 'Failed to fetch gallery items', 
      details: error.message || 'Unknown error occurred',
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
