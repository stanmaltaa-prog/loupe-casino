import fs from 'node:fs';
import path from 'node:path';
import donnees from '@/donnees/images.json';

type Entree = { credit: string; page: string; vignette?: string; bandeau?: string };
const JEUX = (donnees as { jeux: Record<string, Entree> }).jeux;

export type ImageJeu = { src: string; credit: string; page: string };

function locale(nom: string): string | null {
  return fs.existsSync(path.join(process.cwd(), 'public', 'jeux', nom)) ? `/jeux/${nom}` : null;
}

/** Vignette officielle d'un jeu : copie locale en WebP si elle existe, sinon l'adresse d'origine. */
export function vignetteJeu(slug: string): ImageJeu | null {
  const e = JEUX[slug];
  if (!e?.vignette) return null;
  return { src: locale(`${slug}.webp`) || e.vignette, credit: e.credit, page: e.page };
}

/** Grande image de bandeau si le fournisseur en publie une, sinon la vignette. */
export function bandeauJeu(slug: string): ImageJeu | null {
  const e = JEUX[slug];
  if (!e) return null;
  if (e.bandeau) return { src: locale(`${slug}-bandeau.webp`) || e.bandeau, credit: e.credit, page: e.page };
  return vignetteJeu(slug);
}

