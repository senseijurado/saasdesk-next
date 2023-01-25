/** @type {import('next').NextConfig} */
/* Setting up the next.js configuration. */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true
  }

};

module.exports = nextConfig;
