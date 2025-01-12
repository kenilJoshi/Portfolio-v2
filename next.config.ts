import type { NextConfig } from 'next';
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  ...withMDX(),
};

export default nextConfig;
