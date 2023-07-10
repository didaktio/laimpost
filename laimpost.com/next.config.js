/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NEXT_OUTPUT
    ? {
        output: process.env.NEXT_OUTPUT,
      }
    : false),
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd29zsecmza10zv.cloudfront.net',
      },
    ],
  },
};

module.exports = nextConfig;
