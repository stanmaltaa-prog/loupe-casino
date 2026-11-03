import Link from 'next/link';
import { Fragment } from 'react';

const MOTIF = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;

/** Rend un texte contenant des liens [texte](adresse) et du gras **texte**. */
export default function TexteRiche({ texte }: { texte: string }) {
  const morceaux: React.ReactNode[] = [];
  let dernier = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  MOTIF.lastIndex = 0;
  while ((m = MOTIF.exec(texte))) {
    if (m.index > dernier) morceaux.push(<Fragment key={i++}>{texte.slice(dernier, m.index)}</Fragment>);
    if (m[1] && m[2]) {
      const href = m[2];
      morceaux.push(
        href.startsWith('/') ? (
          <Link key={i++} href={href}>
            {m[1]}
          </Link>
        ) : (
          <a key={i++} href={href} rel="noopener" target="_blank">
            {m[1]}
          </a>
        )
      );
    } else if (m[3]) {
      morceaux.push(<strong key={i++}>{m[3]}</strong>);
    }
    dernier = m.index + m[0].length;
  }
  if (dernier < texte.length) morceaux.push(<Fragment key={i++}>{texte.slice(dernier)}</Fragment>);
  return <>{morceaux}</>;
}
