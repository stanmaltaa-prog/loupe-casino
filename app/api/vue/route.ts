import { NextResponse, type NextRequest } from 'next/server';
import { ROBOTS, appareilDe } from '@/lib/robots';

export const dynamic = 'force-dynamic';

/**
 * Compteur de visites réelles. Le navigateur n'envoie ce signal qu'après un geste du visiteur
 * (défilement, toucher, clic ou touche du clavier) : les robots qui ne font que télécharger la page
 * ne sont pas comptés. Aucune adresse IP ni donnée personnelle : la page, l'appareil et le pays.
 */
export async function POST(requete: NextRequest) {
  const agent = requete.headers.get('user-agent') || '';
  if (agent && !ROBOTS.test(agent)) {
    let page = '';
    try {
      const corps = JSON.parse((await requete.text()).slice(0, 500)) as { page?: unknown };
      if (typeof corps.page === 'string') page = corps.page.slice(0, 120).replace(/[^\w\-/.%]/g, '');
    } catch {
      page = '';
    }
    const pays = (requete.headers.get('cf-ipcountry') || '').slice(0, 2);
    console.log(JSON.stringify({ evenement: 'vue', page, appareil: appareilDe(agent), pays, date: new Date().toISOString() }));
  }
  return new NextResponse(null, { status: 204, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' } });
}
