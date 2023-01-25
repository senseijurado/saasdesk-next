/** @type {import('next').NextConfig} */
/* Setting up the next.js configuration. */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  env: {
    NODE_ENV: 'production',
    STRIPE_API_PK: '0.0.0',
  }

};

module.exports = nextConfig;
