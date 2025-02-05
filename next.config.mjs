/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'watracz.com',
        protocol: 'https',
      },
    ],
  },
}

export default nextConfig
