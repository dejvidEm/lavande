import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  images: {
    qualities: [90],
    formats: ["image/avif", "image/webp"],
    // Zdrojové fotky majú max. 1024 px — väčšie w= by Next len upscaloval.
    // 512 a 750 sedí na mobilný 2×/3× DPR pri kartách a half-width layoute.
    deviceSizes: [384, 512, 640, 750, 828, 1080],
    imageSizes: [32, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lavande.sk" }],
        destination: "https://lavande.sk/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
    ];
  },
};

export default nextConfig;
