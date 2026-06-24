import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - this is a new config option for local dev testing
  allowedDevOrigins: ['192.168.1.17', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
};

export default nextConfig;
