import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [90],
    formats: ["image/avif", "image/webp"],
    // Zdrojové fotky majú max. 1024 px — väčšie w= by Next len upscaloval.
    // 512 a 750 sedí na mobilný 2×/3× DPR pri kartách a half-width layoute.
    deviceSizes: [384, 512, 640, 750, 828, 1080],
    imageSizes: [32, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
