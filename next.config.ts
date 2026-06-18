import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Hostinger-compatible: avoids native sharp dependency issues on some Node hosts.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
