import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('=== SIMPLE CLOUDINARY TEST ===');
    
    // Test importing cloudinary directly
    console.log('Attempting to import cloudinary...');
    const { v2: cloudinary } = await import('cloudinary');
    console.log('Cloudinary imported successfully');
    
    // Test importing our cloudinary library
    console.log('Attempting to import our cloudinary lib...');
    const ourCloudinary = await import('@/lib/cloudinary');
    console.log('Our cloudinary lib imported successfully');
    console.log('Available functions:', Object.keys(ourCloudinary));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Imports working'
    });
  } catch (error: any) {
    console.error('=== SIMPLE CLOUDINARY TEST ERROR ===');
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