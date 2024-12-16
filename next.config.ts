import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Required for static export
  images: {
    unoptimized: true,
  },
  // Disable server components for static export
  experimental: {
    appDir: true,
  },
};

export default nextConfig;