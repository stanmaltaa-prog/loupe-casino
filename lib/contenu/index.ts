import rolletto from './rolletto';
import celsius from './celsius';
import betportal from './betportal';
import onewin from './onewin';
import type { ContenuCasino } from './types';
import { typoProfond } from '@/lib/typo';

export const CONTENU: Record<string, ContenuCasino> = typoProfond({
  rolletto,
  celsius,
  betportal,
  '1win': onewin
});

export function contenuDe(id: string): ContenuCasino {
  const c = CONTENU[id];
  if (!c) throw new Error(`Aucun contenu rédigé pour le casino « ${id} ».`);
  return c;
}
