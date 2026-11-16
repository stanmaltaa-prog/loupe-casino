import { ARTICLES_RECENTS } from '@/lib/contenu/pages/actualites';
import { SITE, absolu } from '@/lib/site';

/** Fil RSS de la rubrique Actualités (généré au build). */
export const dynamic = 'force-static';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function GET() {
  const items = ARTICLES_RECENTS.map(
    (a) =>
      `<item><title>${esc(a.h1)}</title><link>${absolu(a.chemin)}</link><guid isPermaLink="true">${absolu(a.chemin)}</guid>` +
      `<pubDate>${new Date(`${a.modifie}T12:00:00Z`).toUTCString()}</pubDate><description>${esc(a.chapeau)}</description></item>`
  ).join('');
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>` +
    `<title>${esc(SITE.nom)} : actualités du jeu en ligne au Québec</title><link>${absolu('/actualites/')}</link>` +
    `<atom:link href="${SITE.url}/actualites/flux-rss/" rel="self" type="application/rss+xml"/>` +
    `<description>Analyses courtes et sourcées sur le jeu en ligne au Québec.</description><language>fr-ca</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
