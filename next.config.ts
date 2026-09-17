import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/projects/data-science", destination: "/projects/ai", permanent: true },
      { source: "/projects/automation", destination: "/projects/software", permanent: true },
    ];
  },
};

export default nextConfig;
