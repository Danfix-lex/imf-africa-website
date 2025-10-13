import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { getCloudinaryEnvVars, isCloudinaryConfigured } from '@/lib/env-utils';

export async function GET() {
  try {
    console.log('=== Cloudinary Test Endpoint ===');
    
    // Log environment variables
    const { cloudName, apiKey, apiSecret } = getCloudinaryEnvVars();
    console.log('Cloudinary Environment Variables:');
    console.log('- Cloud name:', cloudName ? 'SET' : 'NOT SET');
    console.log('- API key:', apiKey ? 'SET' : 'NOT SET');
    console.log('- API secret:', apiSecret ? 'SET' : 'NOT SET');
    
    // Check if configured
    const configured = isCloudinaryConfigured();
    console.log('Cloudinary configured:', configured);
    
    if (!configured) {
      return NextResponse.json({
        success: false,
        error: 'Cloudinary not properly configured',
        envVars: {
          cloudName: !!cloudName,
          apiKey: !!apiKey,
          apiSecret: !!apiSecret
        }
      }, { status: 500 });
    }
    
    // Configure Cloudinary
    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
    });
    
    console.log('Testing Cloudinary connection...');
    
    // Test the connection with a simple ping
    const pingResult = await cloudinary.api.ping();
    console.log('Cloudinary ping result:', pingResult);
    
    // Try to list folders (this will help us see if the gallery folder exists)
    try {
      const folders = await cloudinary.api.root_folders();
      console.log('Available folders:', folders);
    } catch (folderError) {
      console.log('Error listing folders:', folderError);
    }
    
    return NextResponse.json({
      success: true,
      message: 'Cloudinary connection successful',
      ping: pingResult,
      configured: true,
      envVars: {
        cloudName: !!cloudName,
        apiKey: !!apiKey,
        apiSecret: !!apiSecret
      }
    });
    
  } catch (error: any) {
    console.error('Cloudinary test error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
      stack: error.stack
    }, { status: 500 });
  }
}