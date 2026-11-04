import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Entete from '@/components/Entete';
import Pied from '@/components/Pied';
import JsonLd from '@/components/JsonLd';
import { SITE } from '@/lib/site';
import { schemaOrganisation } from '@/lib/seo';

const titre = localFont({
  src: './polices/bricolage.woff2',
  weight: '200 800',
  display: 'swap',
  variable: '--police-titre',
  fallback: ['Segoe UI', 'system-ui', 'sans-serif']
});

const texte = localFont({
  src: [
    { path: './polices/instrument.woff2', weight: '400 700', style: 'normal' },
    { path: './polices/instrument-italique.woff2', weight: '400 700', style: 'italic' }
  ],
  display: 'swap',
  variable: '--police-texte',
  fallback: ['Segoe UI', 'system-ui', 'sans-serif']
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.nom} : casinos en ligne au Québec passés à la loupe`, template: `%s | ${SITE.nom}` },
  description: SITE.slogan,
  applicationName: SITE.nom,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32 48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' }
    ],
    apple: '/apple-touch-icon.png'
  },
  openGraph: { siteName: SITE.nom, locale: SITE.locale, type: 'website', images: [{ url: '/og.png', width: 1200, height: 630 }] }
};

export const viewport: Viewport = {
  themeColor: '#10212B',
  width: 'device-width',
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.langue} className={`${titre.variable} ${texte.variable}`}>
      <body>
        <Entete />
        <main id="contenu">{children}</main>
        <Pied />
        <JsonLd donnees={schemaOrganisation()} />
      </body>
    </html>
  );
}
