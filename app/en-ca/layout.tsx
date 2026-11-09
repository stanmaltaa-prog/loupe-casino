import type { Metadata } from 'next';
import LangueDocument from '@/components/LangueDocument';
import { EN } from '@/lib/en/site';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: { default: `${SITE.nom}: online casinos in Canada under the magnifying glass`, template: `%s | ${SITE.nom}` },
  description: EN.slogan,
  openGraph: { siteName: SITE.nom, locale: EN.locale, type: 'website', images: [{ url: '/og.png', width: 1200, height: 630 }] }
};

/** Section anglaise : la langue est déclarée sur le contenu, dans l'en-tête HTTP (next.config) et sur le document. */
export default function MiseEnPageEn({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en-CA">
      <LangueDocument langue="en-CA" />
      {children}
    </div>
  );
}
