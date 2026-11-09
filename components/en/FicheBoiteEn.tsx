import { noteGlobale, type Casino } from '@/lib/casinos';
import { en } from '@/lib/en/casinos';
import NoteLoupe from '../NoteLoupe';
import BoutonCasino from '../BoutonCasino';
import Tampon from '../Tampon';
import ConditionsEn from './ConditionsEn';
import MentionEn from './MentionEn';

/** Offer box at the top of each casino page. */
export default function FicheBoiteEn({ casino, emplacement }: { casino: Casino; emplacement: string }) {
  const t = en(casino);
  return (
    <aside className="fiche-boite" aria-label={`${casino.nom} welcome offer`}>
      <NoteLoupe note={noteGlobale(casino)} lang="en" />
      <p className="offre-titre">{t.offre.titre}</p>
      <p className="offre-sous-titre">{t.offre.sousTitre}</p>
      <ConditionsEn casino={casino} />
      <div style={{ marginTop: 16 }}>
        <BoutonCasino casino={casino} emplacement={emplacement} texte={`Get the ${casino.nom} bonus`} large />
        <MentionEn />
      </div>
      <div style={{ marginTop: 12 }}>
        <Tampon lang="en" date={casino.offre.verifieLe} texte="Offer checked on" />
      </div>
    </aside>
  );
}
