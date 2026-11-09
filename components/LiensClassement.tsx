import Link from 'next/link';
import { typo } from '@/lib/typo';

/** Textes de lien vers le classement, variés d'une page à l'autre. */
const ANCRES = [
  'notre classement des casinos en ligne au Québec',
  'notre comparatif des meilleurs casinos en ligne au Québec',
  'notre classement des meilleurs casinos en ligne'
];

/**
 * Phrase de maillage interne placée avant la liste des casinos (fiches de jeux) :
 * renvoie vers le classement de l'accueil et vers la page sur la légalité au Québec.
 */
export default function LiensClassement({ cle }: { cle: string }) {
  const n = [...cle].reduce((s, ch) => s + ch.charCodeAt(0), 0) % ANCRES.length;
  return (
    <p>
      {typo('Les casinos ci-dessous suivent l’ordre de ')}
      <Link href="/#classement">{typo(ANCRES[n])}</Link>
      {typo('. Aucun n’est autorisé par le gouvernement du Québec : ')}
      <Link href="/casino-en-ligne-legal-quebec/">ce que dit la loi</Link>.
    </p>
  );
}
