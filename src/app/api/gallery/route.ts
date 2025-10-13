import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

export async function GET(request: Request) {
  try {
    console.log('=== GALLERY API CALLED ===');
    
    console.log('Fetching gallery images...');
    const galleryItems = await getGalleryImages();
    console.log('Successfully fetched', galleryItems.length, 'items');
    
    // Create response with caching headers for production
    const response = NextResponse.json(galleryItems);
    
    // Set cache headers for production (10 minutes)
    response.headers.set('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=300');
    response.headers.set('Expires', new Date(Date.now() + 600000).toUTCString());
    
    return response;
  } catch (error: any) {
    console.error('=== GALLERY API ERROR ===');
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
      'Cache-Control': 'public, max-age=300', // Cache OPTIONS requests for 5 minutes
    },
  });
}