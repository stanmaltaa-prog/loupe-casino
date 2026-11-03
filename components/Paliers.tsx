import { montant } from '@/lib/site';
import type { Casino } from '@/lib/casinos';

/** Tableau des paliers du bonus de bienvenue. */
export default function Paliers({ casino }: { casino: Casino }) {
  const o = casino.offre;
  const devise = o.devise === '%' ? '' : o.devise;
  return (
    <>
      <div className="tableau-defilant">
        <table>
          <caption>
            Bonus de bienvenue {casino.nom}, d&apos;après{' '}
            <a href={o.source} rel="nofollow noopener" target="_blank">
              la page officielle
            </a>
          </caption>
          <thead>
            <tr>
              <th scope="col">Dépôt</th>
              <th scope="col">Bonus</th>
              <th scope="col">Plafond</th>
              <th scope="col">Tours gratuits</th>
            </tr>
          </thead>
          <tbody>
            {o.paliers.map((p) => (
              <tr key={p.depot}>
                <th scope="row">{p.depot === 1 ? '1er dépôt' : `${p.depot}e dépôt`}</th>
                <td>{p.pourcentage} %</td>
                <td>{p.plafond !== null && devise ? montant(p.plafond, devise) : 'Non affiché'}</td>
                <td>{p.tours ? p.tours : 'Aucun'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {o.noteDevise ? <p className="petit">{o.noteDevise}</p> : null}
      {o.toursDetail ? <p className="petit">{o.toursDetail}</p> : null}
    </>
  );
}
