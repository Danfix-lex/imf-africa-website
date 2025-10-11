import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:10000',
  },
  // Enable compression
  compress: true,
  // Optimize images
  images: {
    domains: ['res.cloudinary.com'],
  },
  // Enable React strict mode
  reactStrictMode: true,
};

export default nextConfig;