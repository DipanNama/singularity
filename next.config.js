/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  swcMinify: true,
  images: { domains: ["images.example.com"] },
};
module.exports = nextConfig;