import { AIDE } from '@/lib/site';

export default function EncadreAide() {
  return (
    <aside className="encadre" aria-label="Aide pour les joueurs">
      <p className="encadre-titre">Le jeu doit rester un divertissement</p>
      <p>
        Fixez-vous un budget que vous pouvez perdre, ne jouez jamais pour rembourser une dette et arrêtez si ce n&apos;est
        plus agréable. Besoin de parler à quelqu&apos;un ? <strong>{AIDE.nom}</strong> répond 24 h sur 24, aux joueurs
        comme à leurs proches : <a href="tel:18004610140">{AIDE.telephone}</a> (Montréal :{' '}
        <a href="tel:5145270140">{AIDE.telephoneMontreal}</a>), ou sur{' '}
        <a href={AIDE.site} rel="noopener" target="_blank">
          aidejeu.ca
        </a>
        .
      </p>
    </aside>
  );
}
