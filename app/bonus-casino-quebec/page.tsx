import Link from 'next/link';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import BoutonCasino from '@/components/BoutonCasino';
import { CASINOS, cheminCasino, depotMinTexte, exempleMise, miseTexte } from '@/lib/casinos';
import { SITE, dateLongue, montant } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/bonus-casino-quebec/';
const MAJ = SITE.derniereVerification;
const DESCRIPTION =
  'Bonus de casino au Québec : offres de bienvenue comparées, condition de mise expliquée, bonus sans dépôt et tours gratuits. Les pièges à éviter, chiffrés.';

export const metadata = meta({ titre: 'Bonus casino Québec : offres de bienvenue comparées', description: DESCRIPTION, chemin: CHEMIN, type: 'article' });

const SOMMAIRE = [
  { id: 'offres', titre: 'Les offres du moment' },
  { id: 'fonctionnement', titre: 'Comment fonctionne un bonus' },
  { id: 'mise', titre: 'La condition de mise' },
  { id: 'regles', titre: 'Les autres règles' },
  { id: 'sans-depot', titre: 'Bonus sans dépôt' },
  { id: 'tours', titre: 'Tours gratuits' },
  { id: 'refuser', titre: 'Faut-il accepter le bonus ?' }
];

export default function PageBonus() {
  return (
    <Guide
      nom="Bonus de casino"
      chemin={CHEMIN}
      h1="Bonus de casino au Québec : les offres comparées et expliquées"
      chapeau="Un bonus de 5 500 $ peut valoir moins qu'un bonus de 500 $. Voici comment lire une offre de bienvenue, et ce que valent vraiment celles des casinos accessibles au Québec."
      description={DESCRIPTION}
      modifie={MAJ}
      sommaire={SOMMAIRE}
      emplacement="guide-bonus"
    >
      <h2 id="offres">Les offres de bienvenue du moment</h2>
      <p>Toutes les offres ci-dessous ont été relevées sur les sites officiels le {dateLongue(MAJ)}.</p>
      <div className="tableau-defilant">
        <table>
          <thead>
            <tr>
              <th scope="col">Casino</th>
              <th scope="col">Offre</th>
              <th scope="col">Mise à compléter</th>
              <th scope="col">Dépôt min.</th>
              <th scope="col">
                <span className="sr-only">Lien</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {CASINOS.map((c) => (
              <tr key={c.id}>
                <th scope="row">
                  <Link href={c.sousPages.includes('bonus') ? cheminCasino(c, 'bonus') : cheminCasino(c)}>{c.nom}</Link>
                </th>
                <td>{c.offre.titre}</td>
                <td>{miseTexte(c)}</td>
                <td>{depotMinTexte(c)}</td>
                <td>
                  <BoutonCasino casino={c} emplacement="guide-bonus-tableau" texte="Obtenir" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="petit">18+. Les conditions de chaque casino s&apos;appliquent. Liens commerciaux.</p>

      <h2 id="fonctionnement">Comment fonctionne un bonus de bienvenue</h2>
      <p>
        La plupart des bonus de bienvenue sont des <strong>bonus de dépôt</strong> : le casino ajoute un pourcentage de votre
        dépôt, jusqu&apos;à un plafond. Avec 150 % jusqu&apos;à 500 $, un dépôt de 100 $ donne 150 $ de bonus, et un dépôt de
        400 $ donne 500 $ (le plafond).
      </p>
      <p>
        Beaucoup d&apos;offres sont réparties sur plusieurs dépôts : trois chez Rolletto et BetPortal, quatre chez 1win. Le
        montant annoncé (« jusqu&apos;à 5 500 $ », « jusqu&apos;à 600 % ») est le total de tous les paliers, que peu de joueurs
        atteignent réellement.
      </p>

      <h2 id="mise">La condition de mise, le chiffre qui compte</h2>
      <p>
        L&apos;argent du bonus n&apos;est pas retirable tout de suite. Il faut d&apos;abord miser un certain nombre de fois une
        somme donnée. Deux formules existent, et la différence est énorme :
      </p>
      <ul>
        <li>
          <strong>Mise sur le bonus</strong> : 30 fois un bonus de 150 $ = 4 500 $ à miser.
        </li>
        <li>
          <strong>Mise sur le dépôt + bonus</strong> : 30 fois (100 $ + 150 $) = 7 500 $ à miser.
        </li>
      </ul>
      <p>Voici ce que donne un dépôt de 50 au premier palier chez chaque casino du comparatif :</p>
      <div className="tableau-defilant">
        <table>
          <thead>
            <tr>
              <th scope="col">Casino</th>
              <th scope="col">Bonus</th>
              <th scope="col">À miser</th>
              <th scope="col">Délai</th>
            </tr>
          </thead>
          <tbody>
            {CASINOS.map((c) => {
              const ex = exempleMise(c, 50);
              return (
                <tr key={c.id}>
                  <th scope="row">{c.nom}</th>
                  <td>{ex ? montant(ex.bonus, ex.devise) : 'Non confirmé'}</td>
                  <td>{ex ? montant(ex.aMiser, ex.devise) : 'Non confirmé'}</td>
                  <td>{c.offre.mise?.delaiJours ? `${c.offre.mise.delaiJours} jours` : 'Non publié'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p>
        Faites le calcul avec vos propres montants dans notre <Link href="/conditions-de-mise/">calculateur de conditions de mise</Link>.
      </p>

      <h2 id="regles">Les autres règles qui font perdre un bonus</h2>
      <ul>
        <li>
          <strong>Le délai</strong> : 5 jours chez Rolletto, 20 jours chez Celsius. Passé ce délai, le bonus et ses gains sont
          perdus.
        </li>
        <li>
          <strong>La mise maximale</strong> : souvent 5 $ par tour pendant le bonus. Une seule mise au-dessus peut suffire à
          annuler vos gains.
        </li>
        <li>
          <strong>Les jeux admissibles</strong> : le bonus de Rolletto ne compte que sur les machines à sous. Jouer à la
          roulette ne fait pas avancer la mise.
        </li>
        <li>
          <strong>L&apos;activation</strong> : chez Rolletto, le bonus s&apos;active à la main dans l&apos;onglet BONUS, avant de
          jouer.
        </li>
        <li>
          <strong>Le cumul</strong> : en général, un seul bonus peut être actif à la fois.
        </li>
      </ul>

      <h2 id="sans-depot">Bonus sans dépôt au Québec : ce qu&apos;il faut savoir</h2>
      <p>
        Un bonus sans dépôt vous donne un petit montant ou des tours gratuits sans avoir à déposer. Le {dateLongue(MAJ)}, nous
        n&apos;avons trouvé <strong>aucun bonus sans dépôt actif</strong> pour les nouveaux joueurs chez les casinos de notre
        comparatif.
      </p>
      <p>
        Quand ces offres existent, leurs gains sont presque toujours plafonnés. Chez Celsius, par exemple, les conditions
        limitent à 100 € les gains tirés d&apos;un bonus sans dépôt ou de tours gratuits. Méfiez-vous des sites qui annoncent
        un bonus sans dépôt sans renvoyer aux conditions officielles du casino.
      </p>

      <h2 id="tours">Tours gratuits : bien les utiliser</h2>
      <p>
        Les tours gratuits (ou <em>free spins</em>) sont des parties offertes sur une machine à sous précise. Ils ont leurs
        propres règles : chez Rolletto, 50 tours arrivent au premier dépôt, puis 30 par jour pendant 5 jours de connexion
        consécutifs, valables 72 heures sur le jeu Rolletto Luck Bonus Buy. Chez BetPortal, jusqu&apos;à 200 tours
        accompagnent le premier dépôt et 50 le deuxième. 1win en distribue 500 au total sur quatre dépôts.
      </p>
      <p>Avant de les jouer, vérifiez leur durée de validité, le jeu imposé et la mise à compléter sur les gains.</p>

      <h2 id="refuser">Faut-il toujours accepter le bonus ?</h2>
      <p>
        Non. Si vous jouez peu, aimez les jeux de table ou avez un petit budget, jouer <strong>sans bonus</strong> est souvent
        le meilleur choix : vos gains sont retirables immédiatement, sans condition de mise. Le bonus a du sens si vous jouez
        régulièrement aux machines à sous et que la somme à miser est réaliste pour vous.
      </p>
      <p>
        Les promotions récurrentes peuvent aussi valoir plus que le bonus de départ : BetPortal annonce par exemple une remise
        en argent quotidienne pouvant atteindre 25 %.
      </p>

      <Faq
        questions={[
          {
            q: 'Quel est le plus gros bonus de casino au Québec ?',
            r: `Dans notre comparatif, le pack de Rolletto est le plus élevé : jusqu'à 5 500 $ sur trois dépôts, plus 200 tours gratuits. Il demande toutefois de miser 30 fois le dépôt et le bonus en 5 jours.`
          },
          {
            q: 'Quel bonus est le plus facile à débloquer ?',
            r: "Celui de BetPortal, dont la mise (30 fois) porte sur le bonus seulement. Pour un même dépôt au premier palier, il faut miser 40 % de moins que chez Rolletto."
          },
          {
            q: 'Existe-t-il un bonus sans dépôt au Québec ?',
            r: "Nous n'en avons trouvé aucun d'actif chez les casinos de notre comparatif. Quand il en existe, les gains sont généralement plafonnés."
          },
          {
            q: 'Peut-on retirer un bonus de casino ?',
            r: "Pas directement. Il faut d'abord compléter la condition de mise dans le délai prévu, en respectant la mise maximale. Ensuite seulement, le solde devient retirable."
          }
        ]}
      />
    </Guide>
  );
}
