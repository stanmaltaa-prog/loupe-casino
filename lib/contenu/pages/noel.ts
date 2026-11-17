import type { PageGuide } from './types';
import { MACHINES, cheminMachine, pct, fois, type Machine } from '@/lib/contenu/machines';

/**
 * Page de saison (17 novembre 2026) : les machines à sous de Noël de notre sélection.
 * Tout est calculé à partir des fiches machines (RTP officiels, versions réduites, gain max).
 */
const SLUGS = ['christmas-big-bass-bonanza', 'big-bass-christmas-bash', 'sugar-rush-xmas', 'sweet-bonanza-xmas'];
const NOEL: Machine[] = SLUGS.map((s) => MACHINES.find((m) => m.slug === s)).filter((m): m is Machine => Boolean(m));
const PAR_RTP = [...NOEL].sort((a, b) => b.rtp - a.rtp || b.gainMax! - a.gainMax!);
const pire = (m: Machine) => Math.min(m.rtp, ...m.rtpAutres);
const lien = (m: Machine) => `[${m.nom}](${cheminMachine(m)})`;
const ORIGINAL: Record<string, string> = {
  'christmas-big-bass-bonanza': '[Big Bass Bonanza](/machines-a-sous/big-bass-bonanza/)',
  'big-bass-christmas-bash': 'la série Big Bass',
  'sugar-rush-xmas': '[Sugar Rush](/machines-a-sous/sugar-rush/)',
  'sweet-bonanza-xmas': '[Sweet Bonanza](/machines-a-sous/sweet-bonanza/)'
};
const existe = (slug: string) => MACHINES.some((m) => m.slug === slug);
const original = (m: Machine) => {
  const o = ORIGINAL[m.slug] || '';
  const cible = o.match(/\/machines-a-sous\/([^/]+)\//)?.[1];
  return cible && !existe(cible) ? o.replace(/\[([^\]]+)\]\([^)]+\)/, '$1') : o;
};
const MEILLEUR = PAR_RTP[0];

const noel: PageGuide[] = NOEL.length
  ? [
      {
        chemin: '/machines-a-sous-noel/',
        nomFil: 'Machines à sous de Noël',
        parent: { nom: 'Machines à sous', chemin: '/machines-a-sous/' },
        titre: `Machines à sous de Noël : les ${NOEL.length} meilleures en 2026 (RTP)`,
        description:
          'Machines à sous de Noël : Big Bass, Sweet Bonanza et Sugar Rush en version des fêtes, comparées par RTP officiel, volatilité et gain maximal.',
        h1: 'Machines à sous de Noël : les versions des fêtes comparées',
        chapeau:
          'Chaque hiver, les grandes séries de machines à sous ressortent leur version de Noël. Mêmes règles ou presque, nouveau décor : voici ce qui change vraiment, chiffres officiels à l’appui, et celle qui rend le plus en moyenne.',
        modifie: '2026-11-17',
        resume: 'Les machines à sous de Noël comparées par RTP, volatilité et gain maximal.',
        sections: [
          {
            id: 'comparatif',
            titre: `Les ${NOEL.length} machines à sous de Noël de notre sélection`,
            blocs: [
              { type: 'grille-jeux', slugs: PAR_RTP.map((m) => m.slug) },
              {
                type: 'tableau',
                legende: 'Classées par meilleur RTP publié. RTP officiel du fournisseur ; versions plus basses et gain maximal selon SlotCatalog.',
                entetes: ['Jeu', 'Meilleur RTP', 'Version la plus basse recensée', 'Volatilité', 'Gain max', 'Sortie'],
                lignes: PAR_RTP.map((m) => [
                  lien(m),
                  pct(m.rtp),
                  m.rtpAutres.length ? pct(pire(m)) : 'Aucune autre recensée',
                  m.volatilite,
                  m.gainMax ? fois(m.gainMax) : 'Non confirmé',
                  String(m.annee)
                ])
              },
              {
                type: 'p',
                texte: `**Le meilleur RTP** : ${PAR_RTP.filter((m) => m.rtp === MEILLEUR.rtp)
                  .map(lien)
                  .join(' et ')}, à ${pct(MEILLEUR.rtp)} selon la fiche officielle de ${MEILLEUR.fournisseur}. Mais l’écart avec les autres reste faible : la version installée par votre casino compte davantage (voir plus bas).`
              }
            ]
          },
          {
            id: 'choisir',
            titre: 'Laquelle choisir ?',
            blocs: [
              {
                type: 'liste',
                items: PAR_RTP.map((m) => `${lien(m)} (volatilité ${m.volatilite.toLowerCase()}) : ${m.pourQui.charAt(0).toLowerCase()}${m.pourQui.slice(1)}${original(m) ? ` L’original : ${original(m)}.` : ''}`)
              },
              {
                type: 'p',
                texte:
                  'Une volatilité élevée veut dire des gains plus rares mais plus gros : avec un petit budget, la session risque d’être courte. Notre guide des [machines à sous au meilleur RTP](/machines-a-sous-meilleur-rtp/) compare toute notre sélection.'
              }
            ]
          },
          {
            id: 'pieges',
            titre: 'Les pièges des versions de Noël',
            blocs: [
              {
                type: 'liste',
                items: [
                  '**Même mécanique, même avantage pour la maison.** Une version de Noël ne paie pas plus que l’original : seuls le décor et parfois le gain maximal changent.',
                  '**Plusieurs réglages de RTP.** Le fournisseur publie un RTP, mais le casino peut installer une version plus basse. Ouvrez l’aide du jeu (le « i » ou le menu) et lisez le RTP affiché avant de jouer.',
                  '**Deux Big Bass de Noël différents.** Christmas Big Bass Bonanza (2021) et Big Bass Christmas Bash (2023) n’ont pas les mêmes règles ni la même volatilité.',
                  '**Les fêtes coûtent déjà cher.** Fixez votre budget de jeu à l’avance, à part de celui des cadeaux, et arrêtez-vous quand il est dépensé.'
                ]
              },
              {
                type: 'encadre',
                ton: 'info',
                titre: 'Jouer pour s’amuser, pas pour gagner',
                texte:
                  'Aucune machine à sous ne permet de gagner à coup sûr : le RTP est une moyenne calculée sur des millions de tours. Si le jeu cesse d’être un plaisir, Jeu : aide et référence répond 24 h sur 24 au 1 800 461-0140, gratuitement. Plus d’outils sur notre page [jeu responsable](/jeu-responsable/).'
              }
            ]
          }
        ],
        faq: [
          {
            q: 'Quelle est la meilleure machine à sous de Noël ?',
            r: `Par le RTP officiel, ${PAR_RTP.filter((m) => m.rtp === MEILLEUR.rtp)
              .map((m) => m.nom)
              .join(' et ')} (${pct(MEILLEUR.rtp)}). Le choix dépend aussi de la volatilité : ${PAR_RTP.filter((m) => /lev/i.test(m.volatilite) && !/Moyenne/.test(m.volatilite))
              .map((m) => m.nom)
              .join(' et ')} sont les plus volatiles de cette liste.`
          },
          {
            q: 'Les machines à sous de Noël paient-elles plus que les originales ?',
            r: 'Non. Leurs règles sont les mêmes ou presque, et leur RTP officiel est très proche de celui de l’original. Seuls le décor et parfois le gain maximal changent.'
          },
          {
            q: 'Comment vérifier le RTP d’une machine à sous de Noël ?',
            r: 'Ouvrez l’aide du jeu dans le casino : le RTP de la version installée y est indiqué. S’il est plus bas que le chiffre officiel, cherchez le jeu chez un autre casino.'
          },
          {
            q: 'Quel est le gain maximal des machines à sous de Noël ?',
            r: `Selon SlotCatalog : ${PAR_RTP.filter((m) => m.gainMax)
              .map((m) => `${m.nom}, ${fois(m.gainMax!)} la mise`)
              .join(' ; ')}.`
          }
        ],
        sources: PAR_RTP.flatMap((m) => m.sources).filter((s, i, a) => a.findIndex((x) => x.url === s.url) === i),
        connexes: ['/machines-a-sous/', '/machines-a-sous-meilleur-rtp/', '/machines-a-sous-gratuites/', '/jeu-responsable/']
      }
    ]
  : [];

export default noel;
