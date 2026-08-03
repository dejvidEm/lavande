import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [90, 75, 65],
    formats: ["image/avif", "image/webp"],
    // Zdrojové fotky majú max. 1024 px, väčšie varianty by boli len
    // duplicitné transformácie s rovnakým počtom bajtov.
    deviceSizes: [384, 640, 828, 1080],
    imageSizes: [32, 64, 128, 256],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
