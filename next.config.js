/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: 'https://grammy-hotel-api-server.fly.dev/api/v1/:path*',
      },
      {
        source: '/(.*)/api/v1/:path*',
        destination: 'https://grammy-hotel-api-server.fly.dev/api/v1/:path*',
      },
      // {
      //   source: '/api/v1/:path*',
      //   destination: 'http://localhost:8080/api/v1/:path*',
      // },
      // {
      //   source: '/(.*)/api/v1/:path*',
      //   destination: 'http://localhost:8080/api/v1/:path*',
      // },
    ];
  },
  trailingSlash: false,
  images:  {
    domains: ["storage.googleapis.com", "*"],
    formats: ['image/avif', 'image/webp'],
  },
};
  

module.exports = nextConfig
