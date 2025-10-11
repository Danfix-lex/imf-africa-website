'use client';

import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

// Create a Cloudinary instance
const cloudinary = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dprrsr08j'
  }
});

// Create a provider component
export const CloudinaryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

// Helper function to create Cloudinary images
export const createCloudinaryImage = (publicId: string) => {
  return cloudinary.image(publicId);
};

export default CloudinaryProvider;