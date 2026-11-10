import Link from 'next/link';
import { LogoLoupe } from '../Icones';
import { CASINOS } from '@/lib/casinos';
import { cheminEn } from '@/lib/en/casinos';
import { EN, dateEn } from '@/lib/en/site';
import { SITE } from '@/lib/site';
import { LIENS_MARQUES } from '@/lib/contenu/marques';

export default function PiedEn() {
  return (
    <footer className="pied" lang="en-CA">
      <div className="conteneur">
        <div className="pied-grille">
          <div>
            <Link href="/en-ca/" className="logo">
              <LogoLoupe />
              <span>{SITE.nom}</span>
            </Link>
            <p style={{ marginTop: 12 }}>
              Independent comparison of online casinos available in Canada, outside Ontario and Alberta. Every offer is
              checked on the casino&apos;s official site and dated. Last full check: {dateEn(EN.verification)}.
            </p>
          </div>
          <div>
            <h2>Casino reviews</h2>
            <ul>
              {CASINOS.map((c) => (
                <li key={c.id}>
                  <Link href={cheminEn(c)}>{c.nom} review</Link>
                </li>
              ))}
              {LIENS_MARQUES.map((m) => (
                <li key={m.en}>
                  <Link href={m.en}>{m.nom} review</Link>
                </li>
              ))}
              <li>
                <Link href="/en-ca/compare/">All comparisons</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Guides</h2>
            <ul>
              <li>
                <Link href="/en-ca/is-online-gambling-legal-in-canada/">Is online gambling legal in Canada?</Link>
              </li>
              <li>
                <Link href="/en-ca/casino-bonuses/">Casino bonuses</Link>
              </li>
              <li>
                <Link href="/en-ca/fast-withdrawal-casinos/">Fast withdrawal casinos</Link>
              </li>
              <li>
                <Link href="/en-ca/casino-withdrawal-times/">Withdrawal times tested</Link>
              </li>
              <li>
                <Link href="/en-ca/interac-casinos/">Interac casinos</Link>
              </li>
              <li>
                <Link href="/en-ca/minimum-deposit-casinos/">Minimum deposit casinos</Link>
              </li>
              <li>
                <Link href="/en-ca/crypto-casinos/">Crypto casinos</Link>
              </li>
              <li>
                <Link href="/en-ca/responsible-gambling/">Responsible gambling</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>About the site</h2>
            <ul>
              <li>
                <Link href="/en-ca/how-we-rate/">How we rate</Link>
              </li>
              <li>
                <Link href="/en-ca/about/">About and contact</Link>
              </li>
              <li>
                <Link href="/confidentialite/" hrefLang="fr-CA">
                  Privacy policy (in French)
                </Link>
              </li>
              <li>
                <Link href="/conditions-utilisation/" hrefLang="fr-CA">
                  Terms of use (in French)
                </Link>
              </li>
              <li>
                <Link href="/" hrefLang="fr-CA" lang="fr-CA">
                  Version française
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pied-aide">
          <strong>Adults only: 19+ (18+ in Manitoba and Quebec).</strong> Gambling involves a risk of loss and addiction. If
          it stops being fun, call your province&apos;s toll-free help line: see{' '}
          <Link href="/en-ca/responsible-gambling/">help lines by province</Link>.
        </div>
        <p className="pied-bas">
          {SITE.nom} earns a commission when you sign up at a casino through our links. It changes neither our scores nor the
          order of the rankings, which follow our public rating grid. The casinos listed operate from outside Canada and are
          not authorized by any Canadian province. We do not cover Ontario or Alberta. © {new Date().getFullYear()} {SITE.nom}.
        </p>
      </div>
    </footer>
  );
}
