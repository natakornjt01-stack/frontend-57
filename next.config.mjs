
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', //
      },
      {
        protocol: 'https',
        hostname: '**',       // 
      },
    ],
  },
};

export default nextConfig;