import { lienSortie, type Casino } from '@/lib/casinos';
import { en } from '@/lib/en/casinos';

/** Fixed bar at the bottom of the screen on mobile, on a casino's pages. */
export default function CollantEn({ casino, emplacement }: { casino: Casino; emplacement: string }) {
  return (
    <>
      <div className="collant-espace" aria-hidden="true" />
      <div className="collant" role="complementary" aria-label={`${casino.nom} offer`}>
        <div className="collant-texte">
          <strong>{en(casino).offre.titre}</strong>
          <span>{casino.nom}. 19+, terms apply.</span>
        </div>
        <a href={lienSortie(casino, emplacement)} className="cta" rel="sponsored nofollow noopener" target="_blank">
          Get it
        </a>
      </div>
    </>
  );
}
