import { NextResponse } from 'next/server';
import { isCloudinaryConfigured } from '@/lib/env-utils';

export async function GET() {
  // Log environment variables for debugging
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
  });
}