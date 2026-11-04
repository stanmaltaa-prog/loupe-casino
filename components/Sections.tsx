import type { Section } from '@/lib/contenu/types';
import TexteRiche from './TexteRiche';

export default function Sections({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.titre}>
          <h2>{s.titre}</h2>
          {s.paragraphes.map((p) => (
            <p key={p.slice(0, 50)}>
              <TexteRiche texte={p} />
            </p>
          ))}
          {s.liste?.length ? (
            <ul>
              {s.liste.map((l) => (
                <li key={l}>
                  <TexteRiche texte={l} />
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </>
  );
}
