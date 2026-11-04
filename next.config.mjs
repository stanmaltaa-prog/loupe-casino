/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: true,
  compress: true,
  async redirects() {
    return [
      // www.loupecasino.com renvoie définitivement vers loupecasino.com (une seule adresse pour Google)
      { source: '/', has: [{ type: 'host', value: 'www.loupecasino.com' }], destination: 'https://loupecasino.com/', permanent: true },
      { source: '/:fichier(.+\\.\\w+)', has: [{ type: 'host', value: 'www.loupecasino.com' }], destination: 'https://loupecasino.com/:fichier', permanent: true },
      { source: '/:path+', has: [{ type: 'host', value: 'www.loupecasino.com' }], destination: 'https://loupecasino.com/:path+/', permanent: true },
      { source: '/fournisseurs/', destination: '/machines-a-sous/#fournisseurs', permanent: false }
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      },
      {
        source: '/go/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]
      }
    ];
  }
};

export default nextConfig;
