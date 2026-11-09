import Link from 'next/link';
import { noteGlobale, type Casino } from '@/lib/casinos';
import { cheminEn, en } from '@/lib/en/casinos';
import NoteLoupe from '../NoteLoupe';
import Marque from '../Marque';
import BoutonCasino from '../BoutonCasino';
import ConditionsEn from './ConditionsEn';
import MentionEn from './MentionEn';

export default function CarteOffreEn({ casino, rang, emplacement }: { casino: Casino; rang: number; emplacement: string }) {
  const t = en(casino);
  const premiere = rang === 1;
  const titreId = `offer-${casino.id}`;
  return (
    <article className={premiere ? 'offre offre-premiere' : 'offre'} aria-labelledby={titreId}>
      {premiere ? <span className="offre-ruban">Top score in our comparison</span> : null}
      <div className="offre-rang" aria-label={`Rank ${rang}`}>
        {rang}
      </div>
      <div className="offre-tete">
        <Marque casino={casino} />
        <div>
          <h3 className="offre-nom" id={titreId}>
            <Link href={cheminEn(casino)}>{casino.nom}</Link>
          </h3>
          <p className="offre-accroche">{t.accroche}</p>
        </div>
      </div>
      <div className="offre-conditions">
        <p className="offre-titre">{t.offre.titre}</p>
        <p className="offre-sous-titre">{t.offre.sousTitre}</p>
        <ConditionsEn casino={casino} />
        <ul className="puces-courtes">
          {t.pointsForts.slice(0, 2).map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
      <div className="offre-action">
        <NoteLoupe note={noteGlobale(casino)} lang="en" />
        <BoutonCasino casino={casino} emplacement={emplacement} texte="Get the bonus" large />
        <Link href={cheminEn(casino)} className="cta-secondaire">
          Read the full review
        </Link>
        <MentionEn />
      </div>
    </article>
  );
}
