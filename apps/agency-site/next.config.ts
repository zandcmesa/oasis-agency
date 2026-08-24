import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  basePath: "/oasis-agency",
  assetPrefix: "/oasis-agency",
  trailingSlash: true,
};

export default nextConfig;
