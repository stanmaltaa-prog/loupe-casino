import JsonLd from './JsonLd';
import { schemaFaq } from '@/lib/seo';

export type Question = { q: string; r: string };

export default function Faq({ questions, titre = 'Questions fréquentes', id = 'faq' }: { questions: Question[]; titre?: string; id?: string }) {
  if (!questions.length) return null;
  return (
    <section aria-labelledby={`${id}-titre`}>
      <h2 id={`${id}-titre`}>{titre}</h2>
      <div className="faq">
        {questions.map((x, i) => (
          <details key={x.q} open={i === 0}>
            <summary>{x.q}</summary>
            <div className="reponse">
              {x.r.split('\n\n').map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
      <JsonLd donnees={schemaFaq(questions)} />
    </section>
  );
}
