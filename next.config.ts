import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  ...(process.env.PAGES_BUILD === "1" ? {
    output: "export",
    trailingSlash: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
