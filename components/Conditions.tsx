import { absent, depotMinTexte, miseTexte, type Casino } from '@/lib/casinos';

/** Les conditions essentielles, toujours affichées à côté de l'offre. */
export default function Conditions({ casino }: { casino: Casino }) {
  const o = casino.offre;
  return (
    <dl className="conditions">
      <div>
        <dt>Mise à compléter</dt>
        <dd>{miseTexte(casino)}</dd>
      </div>
      <div>
        <dt>Dépôt minimum</dt>
        <dd>{depotMinTexte(casino)}</dd>
      </div>
      <div>
        <dt>Mise maximale</dt>
        <dd>{o.miseMax || absent(casino, 'f')}</dd>
      </div>
    </dl>
  );
}
