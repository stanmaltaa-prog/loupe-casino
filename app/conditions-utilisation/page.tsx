import Link from 'next/link';
import Guide from '@/components/Guide';
import { AIDE, SITE } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/conditions-utilisation/';
const DESCRIPTION = `Conditions d'utilisation de ${SITE.nom} : site d'information réservé aux 18 ans et plus, nature des informations, liens vers des sites tiers.`;

export const metadata = meta({ titre: 'Conditions d’utilisation', description: DESCRIPTION, chemin: CHEMIN });

export default function PageConditions() {
  return (
    <Guide
      nom="Conditions d'utilisation"
      chemin={CHEMIN}
      h1="Conditions d'utilisation"
      chapeau={`En utilisant ${SITE.nom}, vous acceptez les conditions ci-dessous.`}
      description={DESCRIPTION}
      modifie="2026-11-03"
      emplacement="conditions"
      type="WebPage"
      sansOffre
    >
      <h2>Un site d&apos;information pour adultes</h2>
      <p>
        {SITE.nom} est un site d&apos;information et de comparaison. Il s&apos;adresse uniquement aux personnes de 18 ans et
        plus. Nous n&apos;exploitons aucun jeu d&apos;argent et ne recevons aucun dépôt.
      </p>

      <h2>Nature des informations</h2>
      <p>
        Les offres, conditions et caractéristiques des casinos sont relevées sur leurs sites officiels et datées. Elles peuvent
        changer sans préavis. Les conditions affichées sur le site du casino au moment de votre inscription sont les seules
        qui font foi : lisez-les avant de déposer.
      </p>
      <p>
        Nos notes et avis sont des opinions fondées sur notre <Link href="/notre-methode/">méthode publique</Link>. Ils ne
        constituent ni un conseil financier, ni un avis juridique, ni un conseil fiscal.
      </p>

      <h2>Responsabilité de l&apos;utilisateur</h2>
      <p>
        Il vous appartient de vérifier que vous avez le droit de jouer, compte tenu de votre âge et des règles qui
        s&apos;appliquent à vous. Les casinos présentés sont exploités depuis l&apos;étranger et ne sont pas autorisés par le
        gouvernement du Québec ; notre guide sur la{' '}
        <Link href="/casino-en-ligne-legal-quebec/">légalité du casino en ligne au Québec</Link> explique ce que cela implique.
      </p>
      <p>
        Les jeux d&apos;argent comportent un risque de perte et de dépendance. Si vous avez besoin d&apos;aide : {AIDE.nom},{' '}
        {AIDE.telephone}.
      </p>

      <h2>Liens vers des sites tiers</h2>
      <p>
        Le site contient des liens vers des casinos et d&apos;autres sites. Nous ne contrôlons pas ces sites et ne sommes pas
        responsables de leur contenu, de leurs conditions ni de leurs pratiques.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, la grille de notation et le design de {SITE.nom} nous appartiennent. Les noms des casinos appartiennent à
        leurs propriétaires respectifs et sont utilisés uniquement pour les désigner.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question sur ces conditions, consultez la <Link href="/contact/">page contact</Link>.
      </p>
    </Guide>
  );
}
