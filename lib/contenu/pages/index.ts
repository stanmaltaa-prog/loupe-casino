import type { Metadata } from 'next';
import type { PageGuide } from './types';
import { typoProfond } from '@/lib/typo';
import { meta } from '@/lib/seo';
import jeux from './jeux';
import canadaSport from './canada-sport';
import rtp from './rtp';
import opportunites from './opportunites';

/**
 * Registre de toutes les pages guides. Ajouter un fichier de bloc ici
 * suffit pour que ses pages entrent dans le plan du site et le contrôle.
 */
const BRUT: PageGuide[] = [...jeux, ...canadaSport, ...rtp, ...opportunites];

// Garde-fou : bloque le build si un titre ou une description dépasse ce que Google affiche.
for (const p of BRUT) {
  if (p.titre.length > 62) throw new Error(`Titre trop long (${p.titre.length}) : ${p.chemin}`);
  if (p.description.length > 158 || p.description.length < 70) throw new Error(`Description hors limites (${p.description.length}) : ${p.chemin}`);
  if (!p.resume) throw new Error(`Résumé manquant : ${p.chemin}`);
}
const chemins = new Set<string>();
for (const p of BRUT) {
  if (chemins.has(p.chemin)) throw new Error(`Adresse en double : ${p.chemin}`);
  chemins.add(p.chemin);
}

export const PAGES: PageGuide[] = typoProfond(BRUT);

export function pageParChemin(chemin: string): PageGuide | undefined {
  return PAGES.find((p) => p.chemin === chemin);
}

export function page(chemin: string): PageGuide {
  const p = pageParChemin(chemin);
  if (!p) throw new Error(`Page guide introuvable : ${chemin}`);
  return p;
}

export function metaPage(p: PageGuide): Metadata {
  return meta({ titre: p.titre, description: p.description, chemin: p.chemin, type: 'article' });
}
