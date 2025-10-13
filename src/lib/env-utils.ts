// Utility functions to ensure environment variables are properly loaded
export function getCloudinaryEnvVars() {
  try {
    // Log current environment for debugging
    console.log('getCloudinaryEnvVars called in environment:', typeof window === 'undefined' ? 'server' : 'browser');
    
    // Try to get environment variables
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;
    
    console.log('Environment variables in getCloudinaryEnvVars:');
    console.log('- NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:', cloudName ? 'SET' : 'NOT SET');
    console.log('- CLOUDINARY_API_KEY:', apiKey ? 'SET' : 'NOT SET');
    console.log('- CLOUDINARY_API_SECRET:', apiSecret ? 'SET' : 'NOT SET');
    
    return {
      cloudName,
      apiKey,
      apiSecret,
    };
  } catch (error: any) {
    console.error('Error in getCloudinaryEnvVars:', error);
    throw new Error(`Failed to get Cloudinary environment variables: ${error.message}`);
  }
}

export function isCloudinaryConfigured() {
  try {
    const { cloudName, apiKey, apiSecret } = getCloudinaryEnvVars();
    const isServer = typeof window === 'undefined';
    
    if (isServer) {
      // In server environment, we need all three variables
      return !!(cloudName && apiKey && apiSecret);
    } else {
      // In browser environment, we only need the cloud name
      return !!cloudName;
    }
  } catch (error: any) {
    console.error('Error in isCloudinaryConfigured:', error);
    return false;
  }
}