import Link from 'next/link';
import { LogoLoupe } from './Icones';
import LienLangue from './LienLangue';
import { AIDE, SITE } from '@/lib/site';

const LIENS = [
  { nom: 'Classement', href: '/#classement' },
  { nom: 'Jeux', href: '/jeux/' },
  { nom: 'Machines à sous', href: '/machines-a-sous/' },
  { nom: 'Bonus', href: '/bonus-casino-quebec/' },
  { nom: 'Paris sportifs', href: '/paris-sportifs-quebec/' },
  { nom: 'Légalité', href: '/casino-en-ligne-legal-quebec/' },
  { nom: 'Calculateur', href: '/conditions-de-mise/' }
];

export default function Entete() {
  return (
    <>
      <a href="#contenu" className="evitement">
        Aller au contenu
      </a>
      <div className="bandeau-age">
        <div className="conteneur">
          <span>
            <span className="pastille-age">18+</span>
            <span className="masque-mobile">Réservé aux adultes. Jouez avec modération.</span>
          </span>
          <span>
            <span className="masque-mobile">Besoin d&apos;aide ? </span>
            {AIDE.nom}
            <span className="masque-mobile">, 24 h sur 24</span> : <a href="tel:18004610140">{AIDE.telephone}</a> · <LienLangue />
          </span>
        </div>
      </div>
      <header className="entete">
        <div className="conteneur">
          <Link href="/" className="logo" aria-label={`${SITE.nom}, accueil`}>
            <LogoLoupe />
            <span>{SITE.nom}</span>
          </Link>
          <nav className="nav-principale" aria-label="Navigation principale">
            <ul>
              {LIENS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.nom}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <details className="nav-mobile">
            <summary>Menu</summary>
            <nav aria-label="Navigation mobile">
              <ul>
                {LIENS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.nom}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/jeu-responsable/">Jeu responsable</Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
