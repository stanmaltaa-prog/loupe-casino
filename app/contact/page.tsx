import Link from 'next/link';
import Guide from '@/components/Guide';
import { AIDE, SITE } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/contact/';
const DESCRIPTION = `Contacter ${SITE.nom} : signaler une erreur, une offre qui a changé ou poser une question sur notre comparatif.`;

export const metadata = meta({ titre: 'Nous contacter', description: DESCRIPTION, chemin: CHEMIN });

export default function PageContact() {
  return (
    <Guide
      nom="Contact"
      chemin={CHEMIN}
      h1="Nous contacter"
      chapeau="Une offre a changé ? Une information vous semble fausse ? Dites-le-nous : nous vérifions chaque signalement."
      description={DESCRIPTION}
      modifie="2026-11-03"
      emplacement="contact"
      type="ContactPage"
      sansOffre
    >
      <h2>Par courriel</h2>
      {SITE.courriel ? (
        <p>
          Écrivez-nous à <a href={`mailto:${SITE.courriel}`}>{SITE.courriel}</a>. Pour un signalement, indiquez la page concernée
          et, si possible, le lien vers la page officielle du casino qui montre le changement.
        </p>
      ) : (
        <p>Notre adresse de contact sera publiée ici très bientôt.</p>
      )}

      <h2>Ce que nous ne pouvons pas faire</h2>
      <ul>
        <li>
          Nous ne sommes pas un casino : nous n&apos;avons pas accès à votre compte, à vos dépôts ni à vos retraits. Pour ces
          questions, contactez le service à la clientèle du casino.
        </li>
        <li>Nous ne pouvons pas intervenir dans un litige entre vous et un casino.</li>
      </ul>

      <h2>Besoin d&apos;aide avec le jeu ?</h2>
      <p>
        {AIDE.nom} répond 24 h sur 24 au <a href="tel:18004610140">{AIDE.telephone}</a>. Consultez aussi notre page{' '}
        <Link href="/jeu-responsable/">jeu responsable</Link>.
      </p>
    </Guide>
  );
}
