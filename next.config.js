/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  distDir: 'dist',
  optimizeFonts: true,
  eslint: {
    dirs: ['pages/**/*'],
  },
  swcMinify: false,
};

module.exports = nextConfig;
