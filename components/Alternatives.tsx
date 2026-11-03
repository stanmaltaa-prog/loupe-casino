import Link from 'next/link';
import { autres, cheminCasino, noteGlobale, noteTexte, paires, type Casino } from '@/lib/casinos';

/** Liens vers les autres casinos et vers les comparatifs directs (maillage interne). */
export default function Alternatives({ casino }: { casino: Casino }) {
  const duels = paires().filter((p) => p.a.id === casino.id || p.b.id === casino.id);
  return (
    <section>
      <h2>Alternatives à {casino.nom}</h2>
      <ul className="grille-liens">
        {autres(casino).map((c) => {
          const duel = duels.find((d) => d.a.id === c.id || d.b.id === c.id);
          return (
            <li key={c.id}>
              <Link href={duel ? `/comparatif/${duel.slug}/` : cheminCasino(c)}>
                <strong>
                  {casino.nom} ou {c.nom} ?
                </strong>
                <span>
                  {c.nom} : {noteTexte(noteGlobale(c))} / 10. {c.offre.titre}.
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
