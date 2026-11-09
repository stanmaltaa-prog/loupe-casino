import type { Casino } from '@/lib/casinos';
import { en, rangDepot } from '@/lib/en/casinos';
import { montantEn } from '@/lib/en/site';

/** Welcome bonus tiers. */
export default function PaliersEn({ casino }: { casino: Casino }) {
  const o = casino.offre;
  const t = en(casino).offre;
  const devise = o.devise === '%' ? '' : o.devise;
  return (
    <>
      <div className="tableau-defilant">
        <table>
          <caption>
            {casino.nom} welcome bonus, from{' '}
            <a href={o.source} rel="nofollow noopener" target="_blank">
              the official page
            </a>
          </caption>
          <thead>
            <tr>
              <th scope="col">Deposit</th>
              <th scope="col">Bonus</th>
              <th scope="col">Cap</th>
              <th scope="col">Free spins</th>
            </tr>
          </thead>
          <tbody>
            {o.paliers.map((p) => (
              <tr key={p.depot}>
                <th scope="row">{rangDepot(p.depot)} deposit</th>
                <td>{p.pourcentage}%</td>
                <td>{p.plafond !== null && devise ? montantEn(p.plafond, devise) : 'Not displayed'}</td>
                <td>{p.tours ? p.tours : 'None'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {t.noteDevise ? <p className="petit">{t.noteDevise}</p> : null}
      {t.toursDetail ? <p className="petit">{t.toursDetail}</p> : null}
    </>
  );
}
