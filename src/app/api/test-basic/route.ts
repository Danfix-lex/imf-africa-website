import { NextResponse } from 'next/server';

export async function GET() {
  console.log('Basic test endpoint called');
  
  // Log all environment variables for debugging
  console.log('=== ENVIRONMENT VARIABLES DEBUG ===');
  console.log('All env vars:');
  Object.keys(process.env)
    .filter(key => key.includes('CLOUDINARY'))
    .forEach(key => {
      console.log(`${key}: ${process.env[key] ? 'SET' : 'NOT SET'}`);
    });
  console.log('==================================');
  
  return NextResponse.json({ 
    success: true, 
    message: 'Basic test endpoint working',
    timestamp: new Date().toISOString(),
    envVars: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? 'SET' : 'NOT SET',
      CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY ? 'SET' : 'NOT SET',
      CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET ? 'SET' : 'NOT SET',
    }
  });
}