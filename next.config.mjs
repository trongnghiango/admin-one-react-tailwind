/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/dash',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dash',
        basePath: false,
        permanent: false,
      },
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig
