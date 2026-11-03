import Link from 'next/link';
import { CASINOS, cheminCasino } from '@/lib/casinos';

export const metadata = { title: 'Page introuvable', robots: { index: false, follow: true } };

export default function Introuvable() {
  return (
    <section className="heros conteneur">
      <h1>Cette page est introuvable</h1>
      <p className="chapeau">Elle a peut-être été déplacée, ou l&apos;adresse contient une erreur. Voici où aller :</p>
      <ul className="grille-liens">
        <li>
          <Link href="/">
            <strong>Le classement</strong>
            <span>Les casinos en ligne au Québec, notés et comparés.</span>
          </Link>
        </li>
        {CASINOS.map((c) => (
          <li key={c.id}>
            <Link href={cheminCasino(c)}>
              <strong>Avis {c.nom}</strong>
              <span>{c.offre.titre}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
