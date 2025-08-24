/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  images: {
    // Enable Next/Image optimization on Vercel
    unoptimized: false,
    // Allow any external hosts you actually use with <Image />
    remotePatterns: [
      { protocol: 'https', hostname: 'kokonutui.com' },
      // add more as needed:
      // { protocol: 'https', hostname: 'images.unsplash.com' },
      // { protocol: 'https', hostname: 'your-cms.example.com' },
    ],
  },
};

export default nextConfig;