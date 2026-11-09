import Link from 'next/link';
import { autres, noteGlobale, type Casino } from '@/lib/casinos';
import { cheminEn, en, miseEn } from '@/lib/en/casinos';
import { noteEn } from '@/lib/en/site';

/** Links to the other casinos (internal linking). */
export default function AlternativesEn({ casino }: { casino: Casino }) {
  return (
    <section>
      <h2>Alternatives to {casino.nom}</h2>
      <ul className="grille-liens">
        {autres(casino).map((c) => (
          <li key={c.id}>
            <Link href={cheminEn(c)}>
              <strong>
                {c.nom}: {noteEn(noteGlobale(c))} / 10
              </strong>
              <span>
                {en(c).offre.titre}. Wagering: {miseEn(c)}.
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
