/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
