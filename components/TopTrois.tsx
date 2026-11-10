import Link from 'next/link';
import Marque from './Marque';
import NoteLoupe from './NoteLoupe';
import BoutonCasino from './BoutonCasino';
import { CASINOS, cheminCasino, noteGlobale, type Casino } from '@/lib/casinos';

/**
 * Bloc compact « top 3 » placé juste sous l'introduction des guides :
 * le lecteur voit les meilleures offres sans faire défiler la page.
 */
export default function TopTrois({
  casinos,
  emplacement,
  titre = 'Notre top 3 du moment'
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
              <Link href={cheminCasino(c)}>{c.nom}</Link>
              <span>{c.offre.titre}</span>
            </span>
            <NoteLoupe note={noteGlobale(c)} taille={38} legende={false} />
            <BoutonCasino casino={c} emplacement={emplacement} texte="Obtenir" />
          </li>
        ))}
      </ol>
      <p className="podium-mention">
        18+. Les conditions du casino s&apos;appliquent. Liens commerciaux.{' '}
        <Link href="/#classement">Voir le classement complet</Link>
      </p>
    </div>
  );
}
