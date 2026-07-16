import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hero uses unoptimized original; other photos stay at max quality when optimized.
    qualities: [100, 90, 75],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
