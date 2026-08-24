import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.doxopromo.com",
          },
        ],
        destination: "https://doxopromo.com/:path*/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
