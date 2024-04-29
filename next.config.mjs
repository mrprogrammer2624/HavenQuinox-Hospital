/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: "dist",
  output: "export",
  images: {
    unoptimized: false,
    domains: ["images.wsj.net", "picsum.photos"],
  },
  swcMinify: true,
};

export default nextConfig;
