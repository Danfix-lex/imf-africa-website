import { NextResponse } from 'next/server';

export async function GET() {
  try {
    console.log('Testing imports...');
    
    // Test importing cloudinary
    const cloudinaryModule = await import('@/lib/cloudinary');
    console.log('Cloudinary module imported successfully');
    
    // Test importing env-utils
    const envUtilsModule = await import('@/lib/env-utils');
    console.log('Env utils module imported successfully');
    
    return NextResponse.json({ 
      success: true, 
      message: 'All imports working',
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    console.error('Import test failed:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}