import Link from 'next/link';
import { autres, noteGlobale, paires, type Casino } from '@/lib/casinos';
import { cheminEn, en, miseEn } from '@/lib/en/casinos';
import { DUELS_EN } from '@/lib/en/duels';
import { noteEn } from '@/lib/en/site';

/** Links to the other casinos and to the head-to-head comparisons (internal linking). */
export default function AlternativesEn({ casino }: { casino: Casino }) {
  const duels = paires().filter((p) => (p.a.id === casino.id || p.b.id === casino.id) && DUELS_EN[p.slug]);
  return (
    <section>
      <h2>Alternatives to {casino.nom}</h2>
      <ul className="grille-liens">
        {autres(casino).map((c) => {
          const duel = duels.find((d) => d.a.id === c.id || d.b.id === c.id);
          return (
            <li key={c.id}>
              <Link href={duel ? `/en-ca/compare/${duel.slug}/` : cheminEn(c)}>
                <strong>
                  {casino.nom} or {c.nom}?
                </strong>
                <span>
                  {c.nom}: {noteEn(noteGlobale(c))} / 10. {en(c).offre.titre}. Wagering: {miseEn(c)}.
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="petit">
        <Link href="/en-ca/compare/">All head-to-head comparisons</Link>
      </p>
    </section>
  );
}
