import { lienSortie, type Casino } from '@/lib/casinos';

/** Barre fixe en bas de l'écran sur mobile, sur les pages d'un casino. */
export default function CtaCollant({ casino, emplacement }: { casino: Casino; emplacement: string }) {
  return (
    <>
      <div className="collant-espace" aria-hidden="true" />
      <div className="collant" role="complementary" aria-label={`Offre ${casino.nom}`}>
        <div className="collant-texte">
          <strong>{casino.offre.titre}</strong>
          <span>{casino.nom}. 18+, conditions applicables.</span>
        </div>
        <a href={lienSortie(casino, emplacement)} className="cta" rel="sponsored nofollow noopener" target="_blank">
          Obtenir
        </a>
      </div>
    </>
  );
}
