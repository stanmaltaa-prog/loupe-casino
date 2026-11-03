import { noteGlobale, type Casino } from '@/lib/casinos';
import NoteLoupe from './NoteLoupe';
import Conditions from './Conditions';
import BoutonCasino, { MentionCta } from './BoutonCasino';
import Tampon from './Tampon';

/** Encadré de l'offre, affiché en haut de chaque page d'un casino. */
export default function FicheBoite({ casino, emplacement }: { casino: Casino; emplacement: string }) {
  return (
    <aside className="fiche-boite" aria-label={`Offre de bienvenue ${casino.nom}`}>
      <NoteLoupe note={noteGlobale(casino)} />
      <p className="offre-titre">{casino.offre.titre}</p>
      <p className="offre-sous-titre">{casino.offre.sousTitre}</p>
      <Conditions casino={casino} />
      <div style={{ marginTop: 16 }}>
        <BoutonCasino casino={casino} emplacement={emplacement} large />
        <MentionCta />
      </div>
      <div style={{ marginTop: 12 }}>
        <Tampon date={casino.offre.verifieLe} texte="Offre vérifiée le" />
      </div>
    </aside>
  );
}
