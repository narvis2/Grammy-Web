/** @type {import('next').NextConfig} */
const nextConfig = {
        async rewrites() {
            return [
                {
                    source: '/api/v1/:path*',
                    destination: 'https://grammy-hotel-api-server.fly.dev/api/v1/:path*',
                },
            ];
          },
      trailingSlash: false,
      images:  {
        formats: ['image/avif', 'image/webp'],
      },
};
  

module.exports = nextConfig
