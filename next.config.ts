import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static exports for maximum performance
  output: 'export',
  
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  
  // Image configuration for static exports
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    unoptimized: true, // Required for static exports
  },
  
  // Production optimizations
  poweredByHeader: false,
  
  // Enable static page generation and optimizations
  experimental: {
    optimizePackageImports: ['lucide-react'],
  }
};

export default nextConfig;
