import Link from 'next/link';
import { typo } from '@/lib/typo';

/** Textes de lien vers le classement, variés d'une page à l'autre. */
const ANCRES = [
  'notre classement des casinos en ligne au Québec',
  'notre comparatif des meilleurs casinos en ligne au Québec',
  'notre classement des meilleurs casinos en ligne'
];

/** Textes de lien vers la page sur la légalité, variés eux aussi. */
const ANCRES_LOI = [
  'ce que dit la loi sur le casino en ligne au Québec',
  'la légalité du casino en ligne au Québec',
  'casino en ligne légal au Québec : la loi expliquée'
];

/** Textes de lien vers la page « casino le plus payant ». */
const ANCRES_PAYANT = [
  'le casino en ligne le plus payant au Québec',
  'les casinos en ligne qui paient le plus',
  'le casino le plus payant, retraits testés à l’appui'
];

/**
 * Phrase de maillage interne placée avant la liste des casinos (fiches de jeux) :
 * renvoie vers le classement de l'accueil, la page sur la légalité au Québec
 * et la page sur le casino le plus payant.
 */
export default function LiensClassement({ cle }: { cle: string }) {
  const n = [...cle].reduce((s, ch) => s + ch.charCodeAt(0), 0);
  return (
    <p>
      {typo('Les casinos ci-dessous suivent l’ordre de ')}
      <Link href="/#classement">{typo(ANCRES[n % ANCRES.length])}</Link>
      {typo('. Aucun n’est autorisé par le gouvernement du Québec : ')}
      <Link href="/casino-en-ligne-legal-quebec/">{typo(ANCRES_LOI[(n + 1) % ANCRES_LOI.length])}</Link>
      {typo('. Pour savoir lequel paie le plus vite, voyez ')}
      <Link href="/casino-en-ligne-le-plus-payant/">{typo(ANCRES_PAYANT[(n + 2) % ANCRES_PAYANT.length])}</Link>.
    </p>
  );
}
