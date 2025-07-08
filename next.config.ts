import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images: {
  //   domains: ['images.pexels.com',
  //     'randomuser.me', // ✅ Add this line
  //   ], // ✅ Add your actual image domains here
  // },
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.pexels.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'source.unsplash.com',
      pathname: '/**',
    },
    {
      protocol: 'https',
      hostname: 'randomuser.me',
      pathname: '/**',
    },
  ],
},
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
