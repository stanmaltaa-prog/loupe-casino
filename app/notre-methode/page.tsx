import Link from 'next/link';
import Guide from '@/components/Guide';
import { CASINOS, CRITERES, cheminCasino, noteGlobale, noteTexte } from '@/lib/casinos';
import { SITE, dateLongue } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/notre-methode/';
const DESCRIPTION =
  'Comment Loupe Casino note les casinos en ligne : grille publique à 5 critères pondérés, sources officielles datées, règles en cas d’information manquante.';

export const metadata = meta({ titre: 'Notre méthode : comment nous notons les casinos', description: DESCRIPTION, chemin: CHEMIN });

export default function PageMethode() {
  return (
    <Guide
      nom="Notre méthode"
      chemin={CHEMIN}
      h1="Notre méthode : comment nous notons les casinos"
      chapeau="Une grille publique, des sources officielles datées, et une règle simple : ce que nous ne pouvons pas vérifier, nous le disons."
      description={DESCRIPTION}
      modifie={SITE.derniereVerification}
      emplacement="methode"
      type="WebPage"
    >
      <h2>D&apos;où viennent nos informations</h2>
      <p>
        Chaque information affichée (bonus, condition de mise, licence, exploitant, limites de retrait, moyens de paiement)
        est relevée sur le site officiel du casino : page des promotions, conditions générales, conditions des bonus, pied de
        page. Nous notons l&apos;adresse de la page et la date de la vérification, visibles sur chaque fiche.
      </p>
      <p>
        Nous ne recopions pas les chiffres d&apos;autres sites de comparaison. Si un montant circule ailleurs mais n&apos;apparaît
        pas sur la page officielle, nous ne l&apos;affichons pas. C&apos;est le cas, par exemple, du plafond du bonus de Celsius.
      </p>

      <p>
        <strong>Tous les montants sont en dollars canadiens.</strong> Certains casinos publient leurs conditions en euros.
        Lors de nos tests avec un compte en dollars canadiens (novembre 2026), les mêmes chiffres s&apos;appliquaient tels
        quels en CAD, sans conversion : un dépôt minimum de 10 € correspond à un dépôt minimum de 10 $. Nous les affichons
        donc directement en dollars.
      </p>
      <p>
        Nous testons aussi chaque casino en conditions réelles : un dépôt minimum suivi d&apos;un retrait, puis un dépôt de
        1 000 $, environ tous les 3 jours. Les délais de retrait indiqués sur le site viennent de ces tests.
      </p>
      <h2>La grille de notation</h2>
      <p>Chaque casino reçoit une note de 0 à 10 pour cinq critères. La note finale est la moyenne pondérée :</p>
      <div className="tableau-defilant">
        <table>
          <thead>
            <tr>
              <th scope="col">Critère</th>
              <th scope="col">Poids</th>
              <th scope="col">Question posée</th>
            </tr>
          </thead>
          <tbody>
            {CRITERES.map((c) => (
              <tr key={c.id}>
                <th scope="row">{c.nom}</th>
                <td>{c.poids} %</td>
                <td>{c.question}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        <strong>Pourquoi ces poids ?</strong> La transparence et les conditions du bonus pèsent le plus, parce que ce sont les
        deux points qui décident si vous pourrez retirer votre argent. Le nombre de jeux compte moins : au-delà de quelques
        milliers, la différence se voit peu.
      </p>

      <h2>Quand une information manque</h2>
      <ul>
        <li>Nous l&apos;indiquons clairement, dans la section « Ce que nous n&apos;avons pas pu confirmer » de chaque avis.</li>
        <li>
          Le critère concerné reçoit une note prudente (5 ou 6 sur 10 quand l&apos;information est simplement absente, moins
          quand l&apos;absence pose un vrai problème, comme une licence introuvable).
        </li>
        <li>Nous ne calculons pas d&apos;exemple chiffré si la condition de mise n&apos;est pas confirmée.</li>
      </ul>

      <h2>Le classement actuel</h2>
      <div className="tableau-defilant">
        <table>
          <thead>
            <tr>
              <th scope="col">Rang</th>
              <th scope="col">Casino</th>
              {CRITERES.map((c) => (
                <th scope="col" key={c.id}>
                  {c.nom}
                </th>
              ))}
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            {CASINOS.map((c, i) => (
              <tr key={c.id}>
                <td>{i + 1}</td>
                <th scope="row">
                  <Link href={cheminCasino(c)}>{c.nom}</Link>
                </th>
                {CRITERES.map((cr) => (
                  <td key={cr.id}>{noteTexte(c.notes[cr.id].note)}</td>
                ))}
                <td>
                  <strong>{noteTexte(noteGlobale(c))}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="petit">Notes au {dateLongue(SITE.derniereVerification)}.</p>

      <h2>Les chiffres des jeux</h2>
      <p>
        Pour chaque <Link href="/machines-a-sous/">machine à sous</Link> analysée, nous relevons le RTP, ses autres versions,
        la volatilité, le gain maximal et les règles du bonus :
      </p>
      <ul>
        <li>
          d&apos;abord sur la fiche officielle du fournisseur, quand elle publie ces chiffres ;
        </li>
        <li>
          sinon dans la base de données SlotCatalog, en le précisant sur la fiche du jeu ;
        </li>
        <li>
          quand deux sources se contredisent, par exemple sur un gain maximal, nous n&apos;affichons pas de chiffre plutôt que
          de choisir le plus flatteur.
        </li>
      </ul>
      <p>
        Le RTP affiché est celui de la meilleure version publiée. Le casino peut installer une version plus basse : chaque
        fiche explique comment vérifier le RTP réellement appliqué dans l&apos;écran d&apos;aide du jeu. Les jeux sont classés
        par nombre de recherches mensuelles au Canada (Ubersuggest), pas par préférence ni par accord commercial.
      </p>

      <h2>Ce que nous ne faisons pas</h2>
      <ul>
        <li>Nous ne vendons pas de place dans le classement : l&apos;ordre suit uniquement la note.</li>
        <li>Nous ne promettons aucun gain et ne présentons jamais le jeu comme un moyen de gagner de l&apos;argent.</li>
        <li>Nous n&apos;affichons pas de compte à rebours ni de fausse urgence pour vous pousser à vous inscrire.</li>
        <li>Nous ne nous adressons pas aux moins de 18 ans.</li>
      </ul>

      <h2>Mises à jour et corrections</h2>
      <p>
        Les offres changent souvent. Nous revérifions chaque casino au moins une fois par mois, et chaque fiche affiche la date
        de sa dernière vérification. Si vous constatez une erreur, écrivez-nous depuis la page{' '}
        <Link href="/contact/">contact</Link> : nous corrigeons et mettons la date à jour.
      </p>
      <p>
        Pour savoir comment nous sommes rémunérés, lisez notre <Link href="/divulgation-affiliation/">divulgation d&apos;affiliation</Link>.
      </p>
    </Guide>
  );
}
