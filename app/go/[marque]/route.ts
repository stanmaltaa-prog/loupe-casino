import { NextResponse, type NextRequest } from 'next/server';
import { parId } from '@/lib/casinos';
import { SITE } from '@/lib/site';

export const dynamic = 'force-dynamic';

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
  console.log(JSON.stringify({ evenement: 'clic', casino: casino.id, emplacement, page, date: new Date().toISOString() }));
  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: casino.lien,
      'Cache-Control': 'no-store, max-age=0',
      'X-Robots-Tag': 'noindex, nofollow'
    }
  });
}
