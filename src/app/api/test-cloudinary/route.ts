import { NextResponse } from 'next/server';
import { isCloudinaryConfigured } from '@/lib/env-utils';

export async function GET() {
  // Log environment variables for debugging
  console.log('=== TEST-CLOUDINARY ENDPOINT DEBUG ===');
  console.log('All environment variables with CLOUDINARY:');
  Object.keys(process.env)
    .filter(key => key.includes('CLOUDINARY'))
    .forEach(key => {
      console.log(`${key}: ${process.env[key] ? 'SET' : 'NOT SET'}`);
      if (process.env[key]) {
        console.log(`  Value length: ${process.env[key]?.length}`);
      }
    });
  console.log('=====================================');
  
  console.log('Test endpoint - Environment variables:');
  console.log('- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:', process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'SET' : 'NOT SET');
  console.log('- CLOUDINARY_API_KEY:', process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET');
  console.log('- CLOUDINARY_API_SECRET:', process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET');

  return NextResponse.json({
    message: 'Environment variables check',
    cloudinaryConfigured: isCloudinaryConfigured(),
    envVars: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'SET' : 'NOT SET',
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET',
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET',
    },
    timestamp: new Date().toISOString(),
    // Add detailed debugging info
    debugInfo: {
      hasEnvVars: Object.keys(process.env).filter(key => key.includes('CLOUDINARY')).length > 0,
      allEnvKeys: Object.keys(process.env).filter(key => key.includes('CLOUDINARY')),
    }
  });
}