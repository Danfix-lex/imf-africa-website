import { NextResponse } from 'next/server';
import { getGalleryImages } from '@/lib/cloudinary';

export async function GET() {
  try {
    console.log('=== GALLERY TEST API CALLED ===');
    
    // Get gallery images
    const galleryItems = await getGalleryImages();
    
    console.log('Gallery items count:', galleryItems.length);
    console.log('First item:', JSON.stringify(galleryItems[0], null, 2));
    
    // Return a small sample for testing
    return NextResponse.json({
      success: true,
      count: galleryItems.length,
      sample: galleryItems.slice(0, 3), // Return first 3 items
      message: 'Gallery data fetched successfully'
    });
  } catch (error: any) {
    console.error('Error in gallery test API route:', error);
    return NextResponse.json({ 
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}