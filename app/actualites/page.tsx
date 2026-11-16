import Link from 'next/link';
import Guide from '@/components/Guide';
import { meta } from '@/lib/seo';
import { dateLongue } from '@/lib/site';
import { pageParChemin } from '@/lib/contenu/pages';
import { ARTICLES_RECENTS } from '@/lib/contenu/pages/actualites';

const DESCRIPTION =
  'Actualités du jeu en ligne au Québec : Loto-Québec, Kahnawà:ke, Ontario et règles du marché. Des analyses courtes, chiffres officiels et sources à l’appui.';

const base = meta({ titre: 'Actualités du jeu en ligne au Québec', description: DESCRIPTION, chemin: '/actualites/' });
export const metadata = {
  ...base,
  alternates: { ...base.alternates, types: { 'application/rss+xml': '/actualites/rss.xml' } }
};

/** Index de la rubrique Actualités, du plus récent au plus ancien. */
export default function PageActualites() {
  const articles = ARTICLES_RECENTS.map((a) => pageParChemin(a.chemin) ?? a);
  return (
    <Guide
      nom="Actualités"
      chemin="/actualites/"
      h1="Actualités du jeu en ligne au Québec"
      chapeau="Ce qui bouge dans le jeu en ligne au Québec, expliqué simplement : chiffres officiels, décisions et règles du marché, toujours avec leurs sources."
      description={DESCRIPTION}
      modifie={ARTICLES_RECENTS[0].modifie}
      emplacement="actualites"
      sansOffre
    >
      {articles.map((a) => (
        <article key={a.chemin}>
          <h2>
            <Link href={a.chemin}>{a.h1}</Link>
          </h2>
          <p>
            <time dateTime={a.modifie}>{dateLongue(a.modifie)}</time> — {a.resume}
          </p>
        </article>
      ))}
      <p>
        Pour suivre la rubrique : <a href="/actualites/rss.xml">fil RSS</a>. Tous les chiffres du secteur sont réunis sur{' '}
        <Link href="/statistiques-jeu-en-ligne-quebec/">le jeu en ligne au Québec en chiffres</Link>.
      </p>
    </Guide>
  );
}
