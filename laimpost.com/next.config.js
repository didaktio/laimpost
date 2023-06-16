/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // experimental: {
  //   turbotrace: {
  //     logAll: true,
  //     memoryLimit: process.env.CI ? 6000 : 12000,
  //     cont
  //   }
  // },
  devIndicators: {
    buildActivity: true,
  },
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
