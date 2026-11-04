import { Main } from './Illustrations';

/** Exemples de mains pour expliquer les règles du blackjack. */
function BjMains() {
  return (
    <figure className="figure-guide">
      <div className="mains-ligne">
        <Main titre="Blackjack !" cartes={[{ v: 'A', c: '♠' }, { v: 'K', c: '♥' }]} total="As + Roi = 21, payé 3 contre 2" ton="bon" />
        <Main titre="Main dépassée" cartes={[{ v: 'K', c: '♣' }, { v: '7', c: '♦' }, { v: '6', c: '♠' }]} total="10 + 7 + 6 = 23 : perdu" ton="alerte" />
        <Main titre="Le croupier" cartes={[{ v: '9', c: '♥' }, { cachee: true }]} total="Une carte visible, une cachée" />
      </div>
      <figcaption>Les figures valent 10 et l&apos;as vaut 1 ou 11. Au-delà de 21, la main est perdue.</figcaption>
    </figure>
  );
}

type Decision = 'T' | 'R' | 'D';
const CROUPIER = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A'];
const LIGNES: [string, Decision[]][] = [
  ['8 ou moins', ['T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T']],
  ['9', ['T', 'D', 'D', 'D', 'D', 'T', 'T', 'T', 'T', 'T']],
  ['10', ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'T', 'T']],
  ['11', ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'T']],
  ['12', ['T', 'T', 'R', 'R', 'R', 'T', 'T', 'T', 'T', 'T']],
  ['13 à 16', ['R', 'R', 'R', 'R', 'R', 'T', 'T', 'T', 'T', 'T']],
  ['17 et plus', ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R']]
];
const LIBELLE: Record<Decision, string> = { T: 'Tirer', R: 'Rester', D: 'Doubler' };

/** Tableau de stratégie de base (totaux « durs », plusieurs paquets, croupier qui reste à 17). */
function BjStrategie() {
  return (
    <figure className="figure-guide">
      <div className="tableau-defilant">
        <table className="strategie">
          <caption>Stratégie de base : votre total (lignes) contre la carte visible du croupier (colonnes)</caption>
          <thead>
            <tr>
              <th scope="col">Vous</th>
              {CROUPIER.map((c) => (
                <th scope="col" key={c}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LIGNES.map(([total, d]) => (
              <tr key={total}>
                <th scope="row">{total}</th>
                {d.map((x, i) => (
                  <td key={i} className={`dec-${x}`} title={`${LIBELLE[x]} contre ${CROUPIER[i]}`}>
                    {x}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption>
        <span className="pastille dec-T">T</span> Tirer · <span className="pastille dec-R">R</span> Rester ·{' '}
        <span className="pastille dec-D">D</span> Doubler (si la table l&apos;interdit, tirer). Mains sans as compté 11, plusieurs paquets, croupier
        qui reste à 17.
      </figcaption>
    </figure>
  );
}

/** Comparaison du paiement d'un blackjack en 3:2 et en 6:5. */
function BjPaiement() {
  return (
    <figure className="figure-guide">
      <div className="mains-ligne">
        <Main titre="Table 3:2 (bonne)" cartes={[{ v: 'A', c: '♦' }, { v: 'Q', c: '♠' }]} total="Mise de 10 $ : vous gagnez 15 $" ton="bon" />
        <Main titre="Table 6:5 (à éviter)" cartes={[{ v: 'A', c: '♦' }, { v: 'Q', c: '♠' }]} total="Mise de 10 $ : vous gagnez 12 $" ton="alerte" />
      </div>
      <figcaption>Même main, même mise : la table 6:5 vous paie 3 $ de moins à chaque blackjack.</figcaption>
    </figure>
  );
}

export const ILLUSTRATIONS_GUIDES = {
  'bj-mains': BjMains,
  'bj-strategie': BjStrategie,
  'bj-paiement': BjPaiement
} as const;

export type NomIllustration = keyof typeof ILLUSTRATIONS_GUIDES;
