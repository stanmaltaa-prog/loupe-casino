import Link from 'next/link';
import { cheminCasino, noteGlobale, type Casino } from '@/lib/casinos';
import NoteLoupe from './NoteLoupe';
import Marque from './Marque';
import Conditions from './Conditions';
import BoutonCasino, { MentionCta } from './BoutonCasino';

export default function CarteOffre({ casino, rang, emplacement }: { casino: Casino; rang: number; emplacement: string }) {
  const premiere = rang === 1;
  const titreId = `offre-${casino.id}`;
  return (
    <article className={premiere ? 'offre offre-premiere' : 'offre'} aria-labelledby={titreId}>
      {premiere ? <span className="offre-ruban">Meilleure note du comparatif</span> : null}
      <div className="offre-rang" aria-label={`Rang ${rang}`}>
        {rang}
      </div>
      <div className="offre-tete">
        <Marque casino={casino} />
        <div>
          <h3 className="offre-nom" id={titreId}>
            <Link href={cheminCasino(casino)}>{casino.nom}</Link>
          </h3>
          <p className="offre-accroche">{casino.accroche}</p>
        </div>
      </div>
      <div className="offre-conditions">
        <p className="offre-titre">{casino.offre.titre}</p>
        <p className="offre-sous-titre">{casino.offre.sousTitre}</p>
        <Conditions casino={casino} />
        <ul className="puces-courtes">
          {casino.pointsForts.slice(0, 2).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="offre-action">
        <NoteLoupe note={noteGlobale(casino)} />
        <BoutonCasino casino={casino} emplacement={emplacement} texte="Obtenir le bonus" large />
        <Link href={cheminCasino(casino)} className="cta-secondaire">
          Lire l&apos;avis complet
        </Link>
        <MentionCta />
      </div>
    </article>
  );
}
