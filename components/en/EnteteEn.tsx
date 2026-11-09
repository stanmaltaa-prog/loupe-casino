import Link from 'next/link';
import { LogoLoupe } from '../Icones';
import LienLangue from '../LienLangue';
import { SITE } from '@/lib/site';

const LIENS = [
  { nom: 'Rankings', href: '/en-ca/#rankings' },
  { nom: 'Bonuses', href: '/en-ca/casino-bonuses/' },
  { nom: 'Fast withdrawals', href: '/en-ca/fast-withdrawal-casinos/' },
  { nom: 'Crypto', href: '/en-ca/crypto-casinos/' },
  { nom: 'Is it legal?', href: '/en-ca/is-online-gambling-legal-in-canada/' },
  { nom: 'How we rate', href: '/en-ca/how-we-rate/' }
];

export default function EnteteEn() {
  return (
    <>
      <a href="#contenu" className="evitement" lang="en-CA">
        Skip to content
      </a>
      <div className="bandeau-age" lang="en-CA">
        <div className="conteneur">
          <span>
            <span className="pastille-age">19+</span>
            <span className="masque-mobile">Adults only (18+ in Manitoba and Quebec). Not for Ontario or Alberta.</span>
          </span>
          <span>
            <span className="masque-mobile">Need help? </span>
            <Link href="/en-ca/responsible-gambling/">Help lines by province</Link> · <LienLangue />
          </span>
        </div>
      </div>
      <header className="entete" lang="en-CA">
        <div className="conteneur">
          <Link href="/en-ca/" className="logo" aria-label={`${SITE.nom}, home`}>
            <LogoLoupe />
            <span>{SITE.nom}</span>
          </Link>
          <nav className="nav-principale" aria-label="Main navigation">
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
            <nav aria-label="Mobile navigation">
              <ul>
                {LIENS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.nom}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/en-ca/responsible-gambling/">Responsible gambling</Link>
                </li>
              </ul>
            </nav>
          </details>
        </div>
      </header>
    </>
  );
}
