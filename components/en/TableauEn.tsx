import Link from 'next/link';
import { noteGlobale, type Casino } from '@/lib/casinos';
import { cheminEn, depotMinEn, en, licenceEn, miseEn, retraitsEn } from '@/lib/en/casinos';
import { noteEn } from '@/lib/en/site';
import Marque from '../Marque';
import BoutonCasino from '../BoutonCasino';

export default function TableauEn({ casinos, emplacement, legende }: { casinos: Casino[]; emplacement: string; legende?: string }) {
  const lignes: { nom: string; valeur: (c: Casino) => React.ReactNode }[] = [
    { nom: 'Loupe score', valeur: (c) => <strong>{noteEn(noteGlobale(c))} / 10</strong> },
    { nom: 'Welcome offer', valeur: (c) => en(c).offre.titre },
    { nom: 'Wagering', valeur: (c) => miseEn(c) },
    { nom: 'Minimum deposit', valeur: (c) => depotMinEn(c) },
    { nom: 'Free spins', valeur: (c) => (c.offre.toursTotal ? `${c.offre.toursTotal}` : 'None in the offer') },
    { nom: 'Licence', valeur: (c) => licenceEn(c) },
    { nom: 'Withdrawals', valeur: (c) => retraitsEn(c) }
  ];
  return (
    <div className="tableau-defilant">
      <table className="tableau-comparatif">
        {legende ? <caption>{legende}</caption> : null}
        <thead>
          <tr>
            <th scope="col">Criterion</th>
            {casinos.map((c) => (
              <th scope="col" key={c.id}>
                <span className="cellule-casino">
                  <Marque casino={c} petite />
                  <Link href={cheminEn(c)}>{c.nom}</Link>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lignes.map((l) => (
            <tr key={l.nom}>
              <th scope="row">{l.nom}</th>
              {casinos.map((c) => (
                <td key={c.id}>{l.valeur(c)}</td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row">
              <span className="sr-only">Link</span>
            </th>
            {casinos.map((c) => (
              <td key={c.id}>
                <BoutonCasino casino={c} emplacement={emplacement} texte={`Visit ${c.nom}`} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
