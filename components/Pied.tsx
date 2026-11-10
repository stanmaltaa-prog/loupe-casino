import Link from 'next/link';
import { LogoLoupe } from './Icones';
import { CASINOS, cheminCasino } from '@/lib/casinos';
import { AIDE, SITE, dateLongue } from '@/lib/site';
import { LIENS_MARQUES } from '@/lib/contenu/marques';

export default function Pied() {
  return (
    <footer className="pied">
      <div className="conteneur">
        <div className="pied-grille">
          <div>
            <Link href="/" className="logo">
              <LogoLoupe />
              <span>{SITE.nom}</span>
            </Link>
            <p style={{ marginTop: 12 }}>
              Comparatif indépendant des casinos en ligne accessibles au Québec. Chaque offre est relue sur le site officiel
              du casino et datée. Dernière vérification générale : {dateLongue(SITE.derniereVerification)}.
            </p>
          </div>
          <div>
            <h2>Avis casinos</h2>
            <ul>
              {CASINOS.map((c) => (
                <li key={c.id}>
                  <Link href={cheminCasino(c)}>Avis {c.nom}</Link>
                </li>
              ))}
              {LIENS_MARQUES.map((m) => (
                <li key={m.fr}>
                  <Link href={m.fr}>Avis {m.nom}</Link>
                </li>
              ))}
              <li>
                <Link href="/comparatif/">Tous les comparatifs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Guides</h2>
            <ul>
              <li>
                <Link href="/casino-en-ligne-legal-quebec/">Est-ce légal au Québec ?</Link>
              </li>
              <li>
                <Link href="/bonus-casino-quebec/">Bonus de casino</Link>
              </li>
              <li>
                <Link href="/casino-crypto-quebec/">Casino crypto</Link>
              </li>
              <li>
                <Link href="/casino-interac/">Casino Interac</Link>
              </li>
              <li>
                <Link href="/casino-retrait-rapide/">Casino à retrait rapide</Link>
              </li>
              <li>
                <Link href="/delais-de-retrait-casino/">Délais de retrait testés</Link>
              </li>
              <li>
                <Link href="/casino-depot-minimum/">Casino à dépôt minimum</Link>
              </li>
              <li>
                <Link href="/casino-en-ligne-le-plus-payant/">Casino le plus payant</Link>
              </li>
              <li>
                <Link href="/casino-en-ligne-fiable/">Casino en ligne fiable</Link>
              </li>
              <li>
                <Link href="/casino-bonus-sans-depot/">Bonus sans dépôt</Link>
              </li>
              <li>
                <Link href="/nouveau-casino-en-ligne/">Nouveau casino en ligne</Link>
              </li>
              <li>
                <Link href="/loto-quebec-casino-en-ligne/">Loto-Québec en ligne</Link>
              </li>
              <li>
                <Link href="/casino-en-ligne-canada/">Casino en ligne au Canada</Link>
              </li>
              <li>
                <Link href="/conditions-de-mise/">Calculateur de mise</Link>
              </li>
              <li>
                <Link href="/jeu-responsable/">Jeu responsable</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Jeux et paris</h2>
            <ul>
              <li>
                <Link href="/jeux/">Jeux de casino</Link>
              </li>
              <li>
                <Link href="/machines-a-sous/">Machines à sous</Link>
              </li>
              <li>
                <Link href="/machines-a-sous-gratuites/">Machines à sous gratuites</Link>
              </li>
              <li>
                <Link href="/casino-en-direct/">Casino en direct</Link>
              </li>
              <li>
                <Link href="/jeux-de-crash/">Jeux de crash</Link>
              </li>
              <li>
                <Link href="/paris-sportifs-quebec/">Paris sportifs</Link>
              </li>
              <li>
                <Link href="/sites-paris-sportifs-canada/">Sites de paris au Canada</Link>
              </li>
              <li>
                <Link href="/bonus-paris-sportifs/">Bonus paris sportifs</Link>
              </li>
              <li>
                <Link href="/mise-o-jeu/">Mise-o-jeu</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Le site</h2>
            <ul>
              <li>
                <Link href="/notre-methode/">Notre méthode</Link>
              </li>
              <li>
                <Link href="/a-propos/">À propos</Link>
              </li>
              <li>
                <Link href="/divulgation-affiliation/">Divulgation d&apos;affiliation</Link>
              </li>
              <li>
                <Link href="/confidentialite/">Confidentialité</Link>
              </li>
              <li>
                <Link href="/conditions-utilisation/">Conditions d&apos;utilisation</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pied-aide">
          <strong>18+ seulement.</strong> Les jeux d&apos;argent comportent des risques de perte et de dépendance. Si le jeu
          cesse d&apos;être un plaisir, appelez {AIDE.nom} au <a href="tel:18004610140">{AIDE.telephone}</a> (Montréal :{' '}
          <a href="tel:5145270140">{AIDE.telephoneMontreal}</a>), ligne sans frais ouverte 24 h sur 24.
        </div>
        <p className="pied-bas">
          {SITE.nom} reçoit une commission lorsque vous vous inscrivez sur un casino par nos liens. Cela ne change ni nos notes
          ni l&apos;ordre du classement, qui suivent notre grille publique. Les casinos présentés sont exploités depuis
          l&apos;étranger et ne sont pas autorisés par le gouvernement du Québec. © {new Date().getFullYear()} {SITE.nom}.
        </p>
      </div>
    </footer>
  );
}
