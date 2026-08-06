
/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com', // 👈 อนุญาตโดเมนของ Google
      },
      {
        protocol: 'https',
        hostname: '**',       // 👈 อนุญาต Unsplash (สำหรับรูปการ์ดใบที่ 1 และ 3)
      },
    ],
  },
};

export default nextConfig;