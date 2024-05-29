/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // distDir: "dist",
  // output: "export",
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "havenquinox-hospital-backend.onrender.com",
        pathname: "/uploads/**",
      },
    ],
    domains: [
      "images.wsj.net",
      "picsum.photos",
      "i.pravatar.cc",
      "avatars.githubusercontent.com",
      "192.168.134.166",
    ],
  },
  swcMinify: true,
};

export default nextConfig;
