import Link from 'next/link';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import CalculateurMise, { type Prereglage } from '@/components/CalculateurMise';
import { CASINOS, cheminCasino } from '@/lib/casinos';
import { SITE } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/conditions-de-mise/';
const DESCRIPTION =
  'Calculateur de conditions de mise (wager) : combien miser pour débloquer un bonus de casino, par jour, en nombre de tours, et ce que le bonus vaut vraiment.';

export const metadata = meta({ titre: 'Calculateur de conditions de mise (wager) de casino', description: DESCRIPTION, chemin: CHEMIN });

export default function PageMise() {
  const prereglages: Prereglage[] = CASINOS.filter((c) => c.offre.mise && c.offre.paliers[0]).map((c) => ({
    nom: c.nom,
    pourcentage: c.offre.paliers[0].pourcentage,
    plafond: c.offre.paliers[0].plafond,
    multiplicateur: c.offre.mise!.multiplicateur,
    base: c.offre.mise!.base,
    delai: c.offre.mise!.delaiJours
  }));
  return (
    <Guide
      nom="Calculateur de mise"
      chemin={CHEMIN}
      h1="Calculateur de conditions de mise : ce que votre bonus vous demande vraiment"
      chapeau="Entrez votre dépôt et les conditions du bonus, ou choisissez un casino : le calculateur affiche la somme à miser, l'effort par jour et la valeur théorique du bonus."
      description={DESCRIPTION}
      modifie={SITE.derniereVerification}
      emplacement="calculateur"
      type="WebPage"
    >
      <CalculateurMise prereglages={prereglages} />
      <p className="petit">
        Les boutons remplissent le calculateur avec le premier palier de chaque offre, tel que relevé sur les sites officiels.
        Les casinos dont la condition de mise n&apos;est pas confirmée n&apos;apparaissent pas.
      </p>

      <h2>La formule</h2>
      <p>
        <strong>Somme à miser = assiette × nombre de fois</strong>, où l&apos;assiette est soit le bonus seul, soit le dépôt
        plus le bonus, selon les conditions du casino.
      </p>
      <p>
        Exemple : 100 $ de dépôt, bonus de 150 %, mise de 30 fois sur le dépôt plus le bonus. Le bonus est de 150 $,
        l&apos;assiette de 250 $, et la somme à miser de 7 500 $. Avec une mise sur le bonus seulement, elle tomberait à
        4 500 $.
      </p>

      <h2>Pourquoi la « perte moyenne théorique » ?</h2>
      <p>
        Chaque jeu de casino rend en moyenne un peu moins que ce qu&apos;on y mise. Une machine à sous avec un taux de retour
        de 96 % garde en moyenne 4 % des mises sur le long terme. Miser 7 500 $ sur ce type de jeu coûte donc en moyenne
        environ 300 $.
      </p>
      <p>
        Comparer cette perte moyenne au bonus reçu donne une idée de la valeur réelle de l&apos;offre. Un bonus de 150 $ qui
        demande 7 500 $ de mises a une valeur théorique négative ; le même bonus avec 4 500 $ de mises reste négatif, mais
        nettement moins. Ce n&apos;est pas une prédiction : la variance fait qu&apos;une session peut finir très au-dessus ou
        très en dessous.
      </p>

      <h2>Les règles que le calcul ne montre pas</h2>
      <ul>
        <li>
          <strong>La contribution des jeux</strong> : certains jeux ne comptent pas, ou seulement en partie. Chez Rolletto, seules
          les machines à sous comptent.
        </li>
        <li>
          <strong>La mise maximale</strong> : souvent 5 $ par tour pendant le bonus.
        </li>
        <li>
          <strong>Le délai</strong> : si vous ne terminez pas à temps, le bonus et ses gains sont perdus.
        </li>
      </ul>
      <p>
        Pour comprendre chaque offre en détail, lisez notre guide des <Link href="/bonus-casino-quebec/">bonus de casino au Québec</Link>{' '}
        ou les pages bonus de{' '}
        {CASINOS.filter((c) => c.sousPages.includes('bonus')).map((c, i, t) => (
          <span key={c.id}>
            <Link href={cheminCasino(c, 'bonus')}>{c.nom}</Link>
            {i < t.length - 2 ? ', ' : i === t.length - 2 ? ' et ' : '.'}
          </span>
        ))}
      </p>

      <Faq
        questions={[
          {
            q: 'Qu’est-ce que le wager d’un bonus de casino ?',
            r: "Le wager, ou condition de mise, est le nombre de fois qu'il faut miser une somme donnée (le bonus, ou le dépôt plus le bonus) avant de pouvoir retirer l'argent issu d'un bonus."
          },
          {
            q: 'Comment calculer une condition de mise ?',
            r: "Multipliez l'assiette (bonus seul, ou dépôt plus bonus selon les conditions) par le nombre de fois indiqué. Exemple : 30 fois un bonus de 150 $ donne 4 500 $ à miser."
          },
          {
            q: 'Qu’est-ce qu’une bonne condition de mise ?',
            r: "Plus elle est basse, mieux c'est. Une mise de 30 fois le bonus seulement est nettement plus accessible qu'une mise de 30 ou 50 fois le dépôt plus le bonus. Le délai et la mise maximale comptent aussi."
          }
        ]}
      />
    </Guide>
  );
}
