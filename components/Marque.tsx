import type { Casino } from '@/lib/casinos';

/** Marque texte du casino (aucun logo officiel n'est reproduit). */
export default function Marque({ casino, petite = false }: { casino: Casino; petite?: boolean }) {
  return (
    <span className={petite ? 'marque marque-petite' : 'marque'} style={{ background: casino.couleur }} aria-hidden="true">
      {casino.initiale}
    </span>
  );
}
