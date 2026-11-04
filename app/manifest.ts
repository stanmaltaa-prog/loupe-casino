import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

/** Fiche d'application : icône et couleurs quand le site est ajouté à l'écran d'accueil d'un téléphone. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.nom,
    short_name: SITE.nom,
    description: SITE.slogan,
    lang: SITE.langue,
    start_url: '/',
    display: 'browser',
    background_color: '#EEF3F2',
    theme_color: '#10212B',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' }
    ]
  };
}
