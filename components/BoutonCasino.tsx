import { lienSortie, type Casino } from '@/lib/casinos';

/**
 * Bouton de sortie vers le casino. Passe par /go/ (suivi des clics),
 * marqué « sponsored » pour Google, ouvert dans un nouvel onglet.
 */
export default function BoutonCasino({
  casino,
  emplacement,
  texte,
  large = false
}: {
  casino: Casino;
  emplacement: string;
  texte?: string;
  large?: boolean;
}) {
  return (
    <a
      href={lienSortie(casino, emplacement)}
      className={large ? 'cta cta-large' : 'cta'}
      rel="sponsored nofollow noopener"
      target="_blank"
      data-casino={casino.id}
      data-emplacement={emplacement}
    >
      {texte || `Obtenir le bonus ${casino.nom}`}
    </a>
  );
}

export function MentionCta() {
  return <p className="mention-cta">18+. Les conditions du casino s&apos;appliquent. Lien commercial.</p>;
}
