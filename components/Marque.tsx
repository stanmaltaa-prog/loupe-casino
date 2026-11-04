import type { Casino } from '@/lib/casinos';
import { logoCasino } from '@/lib/logos';

/** Logo officiel du casino (fourni par l'espace affilié) ; à défaut, une tuile avec l'initiale. */
export default function Marque({ casino, petite = false }: { casino: Casino; petite?: boolean }) {
  const logo = logoCasino(casino.id);
  const taille = petite ? 36 : 56;
  if (logo) {
    return (
      <img
        src={logo}
        alt={`Logo ${casino.nom}`}
        width={taille}
        height={taille}
        className={petite ? 'logo-casino logo-casino-petit' : 'logo-casino'}
        loading="lazy"
        decoding="async"
      />
    );
  }
  return (
    <span className={petite ? 'marque marque-petite' : 'marque'} style={{ background: casino.couleur }} aria-hidden="true">
      {casino.initiale}
    </span>
  );
}
