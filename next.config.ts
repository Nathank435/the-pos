import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Friendly aliases people may guess at.
      { source: "/compare", destination: "/compare-pos-systems", permanent: false },
      { source: "/calculator", destination: "/card-machine-fee-calculator", permanent: false },
      { source: "/quotes", destination: "/get-pos-quotes", permanent: false },
    ];
  },
};

export default nextConfig;
