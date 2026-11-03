import Link from 'next/link';
import Guide from '@/components/Guide';
import { SITE } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/confidentialite/';
const DESCRIPTION = `Politique de confidentialité de ${SITE.nom} : aucun témoin de suivi, données techniques minimales, vos droits selon la Loi 25 du Québec.`;

export const metadata = meta({ titre: 'Politique de confidentialité', description: DESCRIPTION, chemin: CHEMIN });

export default function PageConfidentialite() {
  return (
    <Guide
      nom="Confidentialité"
      chemin={CHEMIN}
      h1="Politique de confidentialité"
      chapeau="Nous collectons le moins de renseignements possible. Voici exactement lesquels, pourquoi, et comment exercer vos droits."
      description={DESCRIPTION}
      modifie="2026-11-03"
      emplacement="confidentialite"
      type="WebPage"
      sansOffre
    >
      <h2>Responsable de la protection des renseignements personnels</h2>
      <p>
        {SITE.responsableDonnees
          ? `${SITE.responsableDonnees}.`
          : 'Les coordonnées de la personne responsable seront publiées ici.'}{' '}
        {SITE.courriel ? (
          <>
            Pour toute question ou demande : <a href={`mailto:${SITE.courriel}`}>{SITE.courriel}</a>.
          </>
        ) : null}
      </p>

      <h2>Ce que nous collectons</h2>
      <ul>
        <li>
          <strong>Aucun témoin (cookie) de suivi ou publicitaire.</strong> Le site ne dépose pas de témoin pour vous suivre.
        </li>
        <li>
          <strong>Clics vers les casinos</strong> : lorsque vous cliquez sur un lien vers un casino, nous enregistrons le nom
          du casino, l&apos;emplacement du bouton, la page d&apos;origine et l&apos;heure. Nous n&apos;enregistrons ni votre adresse
          IP ni aucun renseignement qui vous identifie.
        </li>
        <li>
          <strong>Journaux techniques de l&apos;hébergeur</strong> : comme tout site Web, notre hébergeur peut conserver
          temporairement des journaux techniques (par exemple l&apos;adresse IP et le navigateur) pour assurer la sécurité et le
          bon fonctionnement du service.
        </li>
        <li>
          <strong>Courriels</strong> : si vous nous écrivez, nous utilisons votre adresse uniquement pour vous répondre.
        </li>
      </ul>

      <h2>Ce que nous ne faisons pas</h2>
      <ul>
        <li>Nous ne vendons ni ne louons aucun renseignement personnel.</li>
        <li>Nous ne créons pas de profil publicitaire.</li>
        <li>Nous ne transmettons aucun renseignement personnel aux casinos.</li>
      </ul>

      <h2>Quand vous quittez notre site</h2>
      <p>
        Les casinos vers lesquels nous renvoyons ont leurs propres politiques de confidentialité, sur lesquelles nous
        n&apos;avons aucun contrôle. Lisez-les avant de vous inscrire.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément à la Loi sur la protection des renseignements personnels dans le secteur privé du Québec (modifiée par la
        Loi 25), vous pouvez demander l&apos;accès aux renseignements vous concernant, leur rectification ou leur suppression, et
        retirer votre consentement. Adressez votre demande à la personne responsable ci-dessus. Vous pouvez aussi porter
        plainte auprès de la Commission d&apos;accès à l&apos;information du Québec.
      </p>

      <h2>Modifications</h2>
      <p>
        Nous indiquerons ici toute modification de cette politique, avec sa date. Pour toute question, consultez la{' '}
        <Link href="/contact/">page contact</Link>.
      </p>
    </Guide>
  );
}
