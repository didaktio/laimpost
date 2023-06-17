/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.CLOUD_PROVIDER === 'AZURE'
    ? {
        output: 'standalone',
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
