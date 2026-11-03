import Link from 'next/link';
import {
  cheminCasino,
  depotMinTexte,
  licenceTexte,
  miseTexte,
  noteGlobale,
  noteTexte,
  retraitsTexte,
  type Casino
} from '@/lib/casinos';
import Marque from './Marque';
import BoutonCasino from './BoutonCasino';

export default function TableauComparatif({ casinos, emplacement, legende }: { casinos: Casino[]; emplacement: string; legende?: string }) {
  const lignes: { nom: string; valeur: (c: Casino) => React.ReactNode }[] = [
    { nom: 'Note Loupe', valeur: (c) => <strong>{noteTexte(noteGlobale(c))} / 10</strong> },
    { nom: 'Offre de bienvenue', valeur: (c) => c.offre.titre },
    { nom: 'Mise à compléter', valeur: (c) => miseTexte(c) },
    { nom: 'Dépôt minimum', valeur: (c) => depotMinTexte(c) },
    { nom: 'Tours gratuits', valeur: (c) => (c.offre.toursTotal ? `${c.offre.toursTotal}` : 'Aucun dans l’offre') },
    { nom: 'Licence', valeur: (c) => licenceTexte(c) },
    { nom: 'Retraits', valeur: (c) => retraitsTexte(c) }
  ];
  return (
    <div className="tableau-defilant">
      <table className="tableau-comparatif">
        {legende ? <caption>{legende}</caption> : null}
        <thead>
          <tr>
            <th scope="col">Critère</th>
            {casinos.map((c) => (
              <th scope="col" key={c.id}>
                <span className="cellule-casino">
                  <Marque casino={c} petite />
                  <Link href={cheminCasino(c)}>{c.nom}</Link>
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
              <span className="sr-only">Lien</span>
            </th>
            {casinos.map((c) => (
              <td key={c.id}>
                <BoutonCasino casino={c} emplacement={emplacement} texte={`Aller sur ${c.nom}`} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
