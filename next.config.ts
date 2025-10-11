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
    // Add image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
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
    // Enable Turbopack for faster builds
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
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
        // Split MUI components for better caching
        mui: {
          test: /[\\/]node_modules[\\/]@mui[\\/]/,
          name: 'mui',
          chunks: 'all',
          priority: 20,
          reuseExistingChunk: true,
        },
      };
      
      // Minimize bundle size
      config.optimization.minimize = true;
    }
    
    return config;
  },
  // Add headers for caching
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif|gif|ico|woff|woff2|ttf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;