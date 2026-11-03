import Link from 'next/link';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import { CASINOS, cheminCasino } from '@/lib/casinos';
import { SITE, dateLongue } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/casino-crypto-quebec/';
const MAJ = SITE.derniereVerification;
const DESCRIPTION =
  'Casino crypto au Québec : quels casinos acceptent Bitcoin, Ethereum ou USDT, bonus crypto, erreurs de réseau à éviter et règles fiscales à connaître.';

export const metadata = meta({ titre: 'Casino crypto au Québec : Bitcoin, USDT et bonus crypto', description: DESCRIPTION, chemin: CHEMIN, type: 'article' });

const SOMMAIRE = [
  { id: 'casinos', titre: 'Les casinos qui acceptent la crypto' },
  { id: 'pourquoi', titre: 'Avantages et limites' },
  { id: 'choisir', titre: 'Quelle crypto choisir ?' },
  { id: 'depot', titre: 'Déposer sans erreur' },
  { id: 'fiscalite', titre: 'Crypto et impôt' }
];

export default function PageCrypto() {
  const avecCrypto = CASINOS.filter((c) => c.paiements.crypto.length);
  return (
    <Guide
      nom="Casino crypto"
      chemin={CHEMIN}
      h1="Casino crypto au Québec : déposer en Bitcoin ou en USDT, mode d'emploi"
      chapeau="La plupart des casinos accessibles au Québec acceptent les cryptomonnaies. Voici lesquelles, les bonus réservés à la crypto, et les erreurs qui coûtent cher."
      description={DESCRIPTION}
      modifie={MAJ}
      sommaire={SOMMAIRE}
      emplacement="guide-crypto"
    >
      <h2 id="casinos">Les casinos qui acceptent la crypto</h2>
      <p>Relevé sur les sites officiels le {dateLongue(MAJ)} :</p>
      <div className="tableau-defilant">
        <table>
          <thead>
            <tr>
              <th scope="col">Casino</th>
              <th scope="col">Cryptomonnaies affichées</th>
            </tr>
          </thead>
          <tbody>
            {avecCrypto.map((c) => (
              <tr key={c.id}>
                <th scope="row">
                  <Link href={cheminCasino(c)}>{c.nom}</Link>
                </th>
                <td>{c.paiements.crypto.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        Rolletto propose en plus un <Link href="/rolletto-casino/bonus/">bonus crypto</Link> distinct : 100 % jusqu&apos;à 1 000 $
        + 200 tours gratuits, dès 20 $ de dépôt. Comme un seul bonus peut être actif à la fois, il faut choisir entre ce bonus
        et le pack casino classique.
      </p>

      <h2 id="pourquoi">Avantages et limites de la crypto au casino</h2>
      <h3>Les avantages</h3>
      <ul>
        <li>Un moyen de paiement très répandu chez les casinos étrangers, y compris quand Interac n&apos;est pas proposé.</li>
        <li>Des transferts qui ne dépendent pas des horaires bancaires.</li>
      </ul>
      <h3>Les limites</h3>
      <ul>
        <li>La valeur du Bitcoin ou de l&apos;Ethereum peut varier fortement entre votre dépôt et votre retrait.</li>
        <li>Une erreur d&apos;adresse ou de réseau est le plus souvent irréversible.</li>
        <li>
          La crypto ne vous dispense pas de la vérification d&apos;identité : les casinos sous licence la demandent en général
          avant le premier retrait.
        </li>
        <li>Les frais de réseau varient selon la cryptomonnaie et le moment.</li>
      </ul>

      <h2 id="choisir">Quelle crypto choisir ?</h2>
      <p>
        Pour jouer, les <strong>cryptomonnaies stables</strong> comme le Tether (USDT) ou l&apos;USD Coin (USDC) évitent les
        variations de valeur : un dépôt de 100 USDT vaut à peu près 100 dollars américains au retrait. Le Bitcoin et
        l&apos;Ethereum restent les plus répandus, mais leur prix bouge. Le Litecoin, le Tron ou le XRP ont souvent des frais
        de réseau plus bas.
      </p>

      <h2 id="depot">Déposer sans erreur, étape par étape</h2>
      <ol>
        <li>Dans la caisse du casino, choisissez la cryptomonnaie et notez le réseau indiqué.</li>
        <li>Copiez l&apos;adresse de dépôt (ne la retapez jamais à la main).</li>
        <li>Dans votre portefeuille, choisissez exactement le même réseau que celui du casino.</li>
        <li>Envoyez d&apos;abord un petit montant pour tester, puis le reste.</li>
        <li>Si vous voulez un bonus, vérifiez qu&apos;il s&apos;applique aux dépôts en crypto, et activez-le si nécessaire.</li>
      </ol>
      <div className="encadre encadre-alerte">
        <p className="encadre-titre">L&apos;erreur la plus coûteuse</p>
        <p>
          Envoyer de l&apos;USDT sur un autre réseau que celui demandé par le casino. Les fonds peuvent être perdus
          définitivement. Vérifiez toujours le réseau avant d&apos;envoyer.
        </p>
      </div>

      <h2 id="fiscalite">Crypto et impôt : à savoir</h2>
      <p>
        Les gains de jeu d&apos;un joueur récréatif ne sont généralement pas imposables au Canada. La crypto ajoute toutefois
        une couche : selon l&apos;Agence du revenu du Canada, échanger un cryptoactif contre des biens ou des services est une
        disposition, qui peut entraîner un gain ou une perte en capital. Gardez une trace de vos achats et de vos dépôts, et
        consultez un fiscaliste si les montants sont importants.
      </p>
      <p className="source">
        Source :{' '}
        <a
          href="https://www.canada.ca/fr/agence-revenu/programmes/a-propos-agence-revenu-canada-arc/observation/cryptomonnaies-guide/cryptoactifs-obligations-fiscales.html"
          rel="noopener"
          target="_blank"
        >
          Agence du revenu du Canada, Comprendre les cryptoactifs et vos obligations fiscales
        </a>
        .
      </p>

      <Faq
        questions={[
          {
            q: 'Quel casino accepte le plus de cryptomonnaies au Québec ?',
            r: 'Dans notre comparatif, Celsius en affiche neuf et Rolletto huit, dont le Bitcoin, l’Ethereum, le Litecoin et le Tether (USDT).'
          },
          {
            q: 'Faut-il vérifier son identité dans un casino crypto ?',
            r: "En général, oui : les casinos sous licence demandent une pièce d'identité et une preuve d'adresse, au plus tard avant le premier retrait."
          },
          {
            q: 'Y a-t-il un bonus spécial pour les dépôts en crypto ?',
            r: "Rolletto propose un bonus crypto de 100 % jusqu'à 1 000 $ + 200 tours gratuits. Il ne se cumule pas avec le pack casino."
          }
        ]}
      />
    </Guide>
  );
}
