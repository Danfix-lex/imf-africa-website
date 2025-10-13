import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('=== COMPREHENSIVE CLOUDINARY TEST ===');
    
    // Test importing cloudinary directly
    console.log('Attempting to import cloudinary...');
    const { v2: cloudinary } = await import('cloudinary');
    console.log('Cloudinary imported successfully');
    
    // Test importing our cloudinary library
    console.log('Attempting to import our cloudinary lib...');
    const ourCloudinary = await import('@/lib/cloudinary');
    console.log('Our cloudinary lib imported successfully');
    console.log('Available functions:', Object.keys(ourCloudinary));
    
    // Test the getCloudinaryEnvVars function
    console.log('Testing getCloudinaryEnvVars...');
    const envUtils = await import('@/lib/env-utils');
    const envVars = envUtils.getCloudinaryEnvVars();
    console.log('Environment variables:', envVars);
    
    // Test isCloudinaryConfigured
    console.log('Testing isCloudinaryConfigured...');
    const isConfigured = envUtils.isCloudinaryConfigured();
    console.log('Cloudinary configured:', isConfigured);
    
    // If configured, try to get gallery images
    if (isConfigured) {
      console.log('Testing getGalleryImages...');
      const galleryItems = await ourCloudinary.getGalleryImages();
      console.log('Gallery items fetched successfully, count:', galleryItems.length);
      
      return NextResponse.json({ 
        success: true, 
        message: 'All Cloudinary functions working',
        envVars,
        isConfigured,
        galleryItemsCount: galleryItems.length,
        sampleItems: galleryItems.slice(0, 3)
      });
    } else {
      return NextResponse.json({ 
        success: true, 
        message: 'Cloudinary library imports working but not configured',
        envVars,
        isConfigured
      });
    }
  } catch (error: any) {
    console.error('=== COMPREHENSIVE CLOUDINARY TEST ERROR ===');
    console.error('Error:', error);
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