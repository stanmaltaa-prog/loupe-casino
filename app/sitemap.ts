import type { MetadataRoute } from 'next';
import { CASINOS, cheminCasino, paires } from '@/lib/casinos';
import { DUELS } from '@/lib/contenu/duels';
import { PAGES } from '@/lib/contenu/pages';
import { MACHINES, cheminMachine } from '@/lib/contenu/machines';
import { FOURNISSEURS, cheminFournisseur } from '@/lib/contenu/fournisseurs';
import { SITE, absolu } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const maj = new Date(SITE.derniereVerification);
  const page = (chemin: string, priority: number, lastModified: Date = maj): MetadataRoute.Sitemap[number] => ({
    url: absolu(chemin),
    lastModified,
    changeFrequency: 'weekly',
    priority
  });

  const casinos = CASINOS.flatMap((c) => [
    page(cheminCasino(c), 0.9, new Date(c.offre.verifieLe)),
    ...c.sousPages.map((s) => page(cheminCasino(c, s), 0.8, new Date(c.offre.verifieLe)))
  ]);

  const duels = paires()
    .filter((p) => DUELS[p.slug])
    .map((p) => page(`/comparatif/${p.slug}/`, 0.7));

  const lancement = new Date('2026-11-03');
  return [
    page('/', 1),
    ...casinos,
    page('/comparatif/', 0.7),
    ...duels,
    ...PAGES.map((p) => page(p.chemin, 0.8, new Date(p.modifie))),
    ...MACHINES.map((m) => page(cheminMachine(m), 0.7, new Date('2026-11-04'))),
    ...FOURNISSEURS.map((f) => page(cheminFournisseur(f), 0.6, new Date(f.modifie))),
    page('/casino-en-ligne-legal-quebec/', 0.8, lancement),
    page('/bonus-casino-quebec/', 0.8),
    page('/casino-crypto-quebec/', 0.7),
    page('/conditions-de-mise/', 0.7),
    page('/jeu-responsable/', 0.5, lancement),
    page('/notre-methode/', 0.5),
    page('/a-propos/', 0.3, lancement),
    page('/auteur/kenzo-fitzeral/', 0.3),
    page('/divulgation-affiliation/', 0.3, lancement),
    page('/contact/', 0.3, lancement),
    page('/confidentialite/', 0.2, lancement),
    page('/conditions-utilisation/', 0.2, lancement)
  ];
}
