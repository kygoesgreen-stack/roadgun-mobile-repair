import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Every internal link, canonical, and sitemap URL uses a trailing slash to match.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
