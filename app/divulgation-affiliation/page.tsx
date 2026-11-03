import Link from 'next/link';
import Guide from '@/components/Guide';
import { SITE } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/divulgation-affiliation/';
const DESCRIPTION = `Comment ${SITE.nom} est rémunéré : commissions d'affiliation des casinos, liens commerciaux identifiés, et pourquoi elles ne changent pas notre classement.`;

export const metadata = meta({ titre: 'Divulgation d’affiliation', description: DESCRIPTION, chemin: CHEMIN });

export default function PageDivulgation() {
  return (
    <Guide
      nom="Divulgation d'affiliation"
      chemin={CHEMIN}
      h1="Divulgation d'affiliation"
      chapeau="En clair : comment nous gagnons de l'argent, et ce que cela change, ou ne change pas, pour vous."
      description={DESCRIPTION}
      modifie="2026-11-03"
      emplacement="divulgation"
      type="WebPage"
      sansOffre
    >
      <h2>Nous recevons des commissions</h2>
      <p>
        Les boutons qui mènent vers un casino (« Obtenir le bonus », « Aller sur… ») sont des liens d&apos;affiliation. Si vous
        vous inscrivez par l&apos;un de ces liens, le casino peut nous verser une commission. Selon les accords, elle peut être
        un montant fixe par nouveau joueur ou une part des revenus que le casino tire de ce joueur.
      </p>
      <p>Cela ne vous coûte rien de plus, et l&apos;offre que vous recevez est celle du casino.</p>

      <h2>Ce que la commission ne change pas</h2>
      <ul>
        <li>
          <strong>Le classement</strong> suit uniquement la note calculée avec notre <Link href="/notre-methode/">grille
          publique</Link>.
        </li>
        <li>
          <strong>Les faits</strong> (bonus, conditions, licence) sont relevés sur les sites officiels, que le casino nous
          rémunère ou non.
        </li>
        <li>
          <strong>Les points faibles</strong> sont publiés pour chaque casino, y compris ceux qui nous rémunèrent.
        </li>
      </ul>

      <h2>Comment reconnaître un lien commercial</h2>
      <p>
        Les liens d&apos;affiliation passent par une adresse de redirection de notre site (qui commence par /go/) et sont
        accompagnés de la mention « Lien commercial ». Ils sont signalés aux moteurs de recherche comme liens commerciaux.
      </p>

      <h2>Une question ?</h2>
      <p>
        Écrivez-nous depuis la <Link href="/contact/">page contact</Link>.
      </p>
    </Guide>
  );
}
