import Link from 'next/link';
import Guide from '@/components/Guide';
import { SITE } from '@/lib/site';
import { meta } from '@/lib/seo';
import { AUTEUR } from '@/lib/auteur';

const CHEMIN = '/a-propos/';
const DESCRIPTION = `${SITE.nom} compare les casinos en ligne accessibles au Québec à partir de leurs conditions officielles. Notre mission, nos engagements, nous joindre.`;

export const metadata = meta({ titre: `À propos de ${SITE.nom}`, description: DESCRIPTION, chemin: CHEMIN });

export default function PageAPropos() {
  return (
    <Guide
      nom="À propos"
      chemin={CHEMIN}
      h1={`À propos de ${SITE.nom}`}
      chapeau="Un comparatif né d'un constat simple : la plupart des sites affichent le montant des bonus en gros, et les conditions en tout petit. Nous faisons l'inverse."
      description={DESCRIPTION}
      modifie="2026-11-04"
      emplacement="a-propos"
      type="AboutPage"
      sansOffre
    >
      <h2>Notre mission</h2>
      <p>
        Aider les joueurs adultes du Québec à comparer les casinos en ligne sur ce qui compte vraiment : qui exploite le site,
        ce qu&apos;il faut miser pour débloquer un bonus, en combien de temps, et comment se passent les retraits.
      </p>

      <h2>Qui écrit {SITE.nom}</h2>
      <p>
        Le site est dirigé par <Link href={AUTEUR.chemin}>{AUTEUR.nom}</Link>, {AUTEUR.role.toLowerCase()}. {AUTEUR.bio[0]}
      </p>

      <h2>Ce qui nous distingue</h2>
      <ul>
        <li>
          <strong>Les conditions à côté de l&apos;offre</strong> : la mise à compléter, le dépôt minimum et la mise maximale
          sont affichés avec chaque bonus, jamais cachés.
        </li>
        <li>
          <strong>Des faits datés et sourcés</strong> : chaque fiche indique la page officielle consultée et la date de
          vérification.
        </li>
        <li>
          <strong>L&apos;honnêteté sur ce qui manque</strong> : quand un casino ne publie pas une information, nous le disons au
          lieu d&apos;inventer un chiffre.
        </li>
        <li>
          <strong>Une grille publique</strong> : le classement suit une note calculée selon <Link href="/notre-methode/">notre
          méthode</Link>, et rien d&apos;autre.
        </li>
      </ul>

      <h2>Comment le site est financé</h2>
      <p>
        {SITE.nom} est gratuit pour vous. Nous recevons une commission des casinos lorsque vous vous inscrivez par nos liens.
        Tous les détails sont dans notre <Link href="/divulgation-affiliation/">divulgation d&apos;affiliation</Link>.
      </p>

      <h2>Nos engagements</h2>
      <ul>
        <li>Le site s&apos;adresse uniquement aux personnes de 18 ans et plus.</li>
        <li>Nous ne présentons jamais le jeu comme une source de revenus.</li>
        <li>Chaque page rappelle où trouver de l&apos;aide en cas de problème de jeu.</li>
      </ul>

      <h2>Nous joindre</h2>
      <p>
        Une erreur, une question, une offre qui a changé ? Passez par notre <Link href="/contact/">page contact</Link>.
      </p>
    </Guide>
  );
}
