import { NextResponse, type NextRequest } from 'next/server';
import { parId } from '@/lib/casinos';
import { SITE } from '@/lib/site';

export const dynamic = 'force-dynamic';

/** Robots connus : moteurs de recherche, vérificateurs de liens, outils SEO, navigateurs sans écran, scripts. */
const ROBOTS =
  /bot|crawl|spider|slurp|scan|check|monitor|preview|fetch|curl|wget|python|java\/|go-http|axios|node-fetch|headless|phantom|lighthouse|pagespeed|semrush|ahrefs|mj12|dataforseo|ubersuggest|screaming|facebookexternalhit|whatsapp|telegram|discord|slack|linkedin|skype/i;

/**
 * Redirection vers le casino. Le lien d'affiliation est utilisé tel quel, sans modification.
 * Chaque clic est écrit dans les journaux (Railway > Deployments > Logs), sans adresse IP
 * ni donnée personnelle : seulement le casino, l'emplacement du bouton et la page d'origine.
 */
export function GET(requete: NextRequest, { params }: { params: { marque: string } }) {
  const casino = parId(params.marque);
  if (!casino) {
    return NextResponse.redirect(new URL('/', SITE.url), 302);
  }
  const emplacement = (requete.nextUrl.searchParams.get('src') || 'inconnu').slice(0, 60).replace(/[^\w-]/g, '');
  let page = '';
  try {
    const ref = requete.headers.get('referer');
    if (ref) page = new URL(ref).pathname.slice(0, 120);
  } catch {
    page = '';
  }
  // Les robots (moteurs, vérificateurs de liens, outils SEO) sont redirigés aussi, mais ne sont pas comptés comme des clics.
  const agent = requete.headers.get('user-agent') || '';
  const robot = !agent || ROBOTS.test(agent) || requete.headers.get('purpose') === 'prefetch' || requete.headers.get('sec-purpose')?.includes('prefetch');
  if (!robot) {
    const appareil = /Mobi|Android|iPhone|iPad/i.test(agent) ? 'mobile' : 'ordinateur';
    // Pays transmis par Cloudflare s'il est placé devant le site ; vide sinon.
    const pays = (requete.headers.get('cf-ipcountry') || '').slice(0, 2);
    // Un vrai clic de navigateur envoie « Sec-Fetch-User: ?1 » ; la plupart des robots ne l'envoient pas.
    const humain = requete.headers.get('sec-fetch-user') === '?1';
    console.log(JSON.stringify({ evenement: 'clic', casino: casino.id, emplacement, page, appareil, pays, humain, date: new Date().toISOString() }));
  }
  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: casino.lien,
      'Cache-Control': 'no-store, max-age=0',
      'X-Robots-Tag': 'noindex, nofollow'
    }
  });
}
