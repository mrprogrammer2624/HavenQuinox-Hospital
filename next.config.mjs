/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  output: "export",
  images: {
    domains: ["images.wsj.net", "picsum.photos"],
  },
  swcMinify: true,
};

export default nextConfig;
