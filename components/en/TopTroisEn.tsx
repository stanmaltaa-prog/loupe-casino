import Link from 'next/link';
import Marque from '../Marque';
import NoteLoupe from '../NoteLoupe';
import BoutonCasino from '../BoutonCasino';
import { CASINOS, noteGlobale, type Casino } from '@/lib/casinos';
import { cheminEn, en } from '@/lib/en/casinos';

/** Compact "top 3" block placed right under the intro of English guides. */
export default function TopTroisEn({
  casinos,
  emplacement,
  titre = 'Our current top 3'
}: {
  casinos?: Casino[];
  emplacement: string;
  titre?: string;
}) {
  const liste = (casinos?.length ? casinos : CASINOS).slice(0, 3);
  if (!liste.length) return null;
  return (
    <div className="podium podium-guide" role="region" aria-label={titre}>
      <p className="podium-titre">{titre}</p>
      <ol>
        {liste.map((c, i) => (
          <li key={c.id}>
            <span className="podium-rang">{i + 1}</span>
            <Marque casino={c} petite />
            <span className="podium-texte">
              <Link href={cheminEn(c)}>{c.nom}</Link>
              <span>{en(c).offre.titre}</span>
            </span>
            <NoteLoupe note={noteGlobale(c)} taille={38} legende={false} lang="en" />
            <BoutonCasino casino={c} emplacement={emplacement} texte="Get it" />
          </li>
        ))}
      </ol>
      <p className="podium-mention">
        19+ (18+ in Manitoba and Quebec). Casino terms apply. Commercial links.{' '}
        <Link href="/en-ca/#rankings">See the full ranking</Link>
      </p>
    </div>
  );
}
