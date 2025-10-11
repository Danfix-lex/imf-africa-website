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
  // Production optimizations
  poweredByHeader: false, // Remove "X-Powered-By" header for security
  // Enable browser source map in development only
  productionBrowserSourceMaps: false,
  // Experimental optimizations
  experimental: {
    // Optimize CSS processing
    optimizeCss: true,
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Reduce bundle size by excluding unnecessary modules
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        // Split vendor chunks for better caching
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
        },
      };
    }
    
    return config;
  },
};

export default nextConfig;