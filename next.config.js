/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcPlugins: [['typewind/swc', {}]],
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
};

module.exports = nextConfig;
