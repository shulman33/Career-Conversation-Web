import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Device sizes for responsive image breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for smaller images (icons, thumbnails)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Supported image formats (WebP for modern browsers with automatic fallback)
    formats: ['image/webp'],
    // Minimum cache time for optimized images (60 seconds)
    minimumCacheTTL: 60,
    // Remote image patterns for Sanity CDN
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
  // Content Security Policy headers for Gradio embed (Phase 5)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://*.hf.space https://*.gradio.live;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
