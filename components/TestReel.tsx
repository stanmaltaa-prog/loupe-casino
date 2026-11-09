import Link from 'next/link';
import { AUTEUR } from '@/lib/auteur';
import type { Casino } from '@/lib/casinos';
import { typo } from '@/lib/typo';

const MOIS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

function moisLong(iso: string): string {
  const [a, m] = iso.split('-').map(Number);
  return `${MOIS[m - 1]} ${a}`;
}

function heures(n: number): string {
  return `${n} heure${n > 1 ? 's' : ''}`;
}

/** Délais de retrait constatés lors du test réel, en une phrase. */
export function delaisTest(c: Casino): string | null {
  const t = c.test;
  if (!t) return null;
  const morceaux = [
    t.retraitCryptoHeures !== null ? `retrait en crypto reçu en ${heures(t.retraitCryptoHeures)}` : null,
    t.retraitCarteHeures !== null ? `retrait par carte en ${heures(t.retraitCarteHeures)}` : null
  ].filter(Boolean) as string[];
  return morceaux.length ? morceaux.join(', ') : null;
}

/** Encadré « Testé par… » : le test réel de l'auteur, avec les délais de retrait constatés. */
export default function TestReel({ casino: c }: { casino: Casino }) {
  const t = c.test;
  if (!t) return null;
  const delais = delaisTest(c);
  return (
    <aside className="encadre encadre-bon" aria-label="Notre test">
      <p className="encadre-titre">
        Testé par <Link href={AUTEUR.chemin}>{AUTEUR.nom}</Link>
      </p>
      <p>
        {typo(
          `J'ai testé ${c.nom} en deux fois : un dépôt minimum suivi d'un retrait, puis un dépôt de 1 000 $ CA, pour comparer avec deux soldes différents.${
            delais ? ` Résultat : ${delais}.` : ''
          } Dépôts, jeux et retraits ont fonctionné comme l'annoncent les conditions.`
        )}
      </p>
      <p className="petit">
        {typo(
          `Je rejoue sur ${c.nom} environ tous les ${t.frequenceJours} jours, et plus souvent si le service se dégrade. Dernier test : ${moisLong(t.mois)}. Vos délais peuvent varier selon la vérification d'identité et le moyen de paiement.`
        )}
      </p>
    </aside>
  );
}
