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
      { source: '/fournisseurs/', destination: '/machines-a-sous/#fournisseurs', permanent: false },
      // Pages retrait et fiabilité des marques Casino Rewards fondues dans l'avis de chaque marque (16 novembre 2026)
      { source: '/:marque(yukon-gold-casino|zodiac-casino|luxury-casino|captain-cooks-casino|grand-mondial-casino)/:sous(retrait|fiable)/', destination: '/:marque/', permanent: true },
      { source: '/en-ca/:marque(yukon-gold-casino|zodiac-casino|luxury-casino|captain-cooks-casino|grand-mondial-casino)/:sous(withdrawal|legit)/', destination: '/en-ca/:marque/', permanent: true }
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
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Le site n'existe qu'en https : le navigateur ne repasse plus par http (une redirection de moins).
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' }
        ]
      },
      {
        // Images des jeux et logos : gardées 30 jours par le navigateur au lieu d'être revérifiées à chaque visite
        source: '/:dossier(jeux|logos)/:fichier*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' }]
      },
      {
        // Section anglaise : langue déclarée aussi dans l'en-tête HTTP (lue par Bing).
        source: '/en-ca/:path*',
        headers: [{ key: 'Content-Language', value: 'en-CA' }]
      },
      {
        source: '/go/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]
      }
    ];
  }
};

export default nextConfig;
