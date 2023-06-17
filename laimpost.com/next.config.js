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
        hostname: 'laimgroupbc20.blob.core.windows.net',
      },
    ],
  },
};

module.exports = nextConfig;
