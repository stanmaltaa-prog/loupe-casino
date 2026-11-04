import type { PageGuide } from './types';
import { MACHINES, cheminMachine, pct, fois, type Machine } from '@/lib/contenu/machines';

/** Classement par RTP le plus élevé publié, puis par volume de recherche. */
const PAR_RTP: Machine[] = [...MACHINES].sort((a, b) => b.rtp - a.rtp || b.volume - a.volume);
const TOP = PAR_RTP.slice(0, 25);
const pire = (m: Machine) => Math.min(m.rtp, ...m.rtpAutres);
const ECARTS = [...MACHINES]
  .filter((m) => m.rtpAutres.length)
  .sort((a, b) => b.rtp - pire(b) - (a.rtp - pire(a)))
  .slice(0, 6);
const premier = PAR_RTP[0];
const virgule = (n: number) => n.toLocaleString('fr-CA', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const rtp: PageGuide[] = [
  {
    chemin: '/machines-a-sous-meilleur-rtp/',
    nomFil: 'Meilleur RTP',
    parent: { nom: 'Machines à sous', chemin: '/machines-a-sous/' },
    titre: 'Machines à sous au meilleur RTP au Canada (2026)',
    description:
      'Les machines à sous au RTP le plus élevé, classées avec leurs chiffres officiels. Le piège des versions à RTP réduit, et comment vérifier avant de jouer.',
    h1: 'Les machines à sous au meilleur RTP, chiffres officiels à l’appui',
    chapeau:
      'Le RTP est le seul chiffre qui dit ce qu’une machine rend en moyenne. Voici les jeux de notre sélection qui affichent le plus élevé, d’où vient chaque chiffre, et le piège qui peut vous faire perdre plusieurs points sans le savoir.',
    modifie: '2026-11-04',
    resume: 'Les machines à sous classées par RTP officiel, et le piège des versions à RTP réduit.',
    offresHaut: [],
    sections: [
      {
        id: 'classement',
        titre: `Les ${TOP.length} machines au RTP le plus élevé`,
        blocs: [
          {
            type: 'p',
            texte: `Nous avons classé les ${MACHINES.length} machines à sous de notre sélection selon le meilleur RTP publié. Quand le fournisseur publie son chiffre, nous prenons sa fiche officielle ; sinon, celui de la base de données SlotCatalog. La dernière colonne donne la version la plus basse que nous avons trouvée : c'est celle que vous risquez de jouer si le casino a choisi un autre réglage.`
          },
          { type: 'grille-jeux', slugs: TOP.slice(0, 8).map((m) => m.slug) },
          {
            type: 'tableau',
            legende: 'Classées par meilleur RTP publié, puis par nombre de recherches au Canada',
            entetes: ['Jeu', 'Meilleur RTP', 'Source', 'Version la plus basse recensée', 'Volatilité', 'Gain max'],
            lignes: TOP.map((m) => [
              `[${m.nom}](${cheminMachine(m)})`,
              pct(m.rtp),
              m.rtpSource === 'officiel' ? `Fiche officielle ${m.fournisseur}` : 'SlotCatalog',
              m.rtpAutres.length ? pct(pire(m)) : 'Aucune autre recensée',
              m.volatilite,
              m.gainMax ? fois(m.gainMax) : 'Non confirmé'
            ])
          },
          {
            type: 'p',
            texte:
              "« Aucune autre recensée » ne veut pas dire qu'il n'en existe pas : seulement que nos sources n'en mentionnent pas. Les écarts entre ces jeux sont faibles en haut du classement ; la version réellement installée par votre casino compte souvent davantage."
          }
        ]
      },
      {
        id: 'sens',
        titre: 'Ce que le RTP veut dire, et ce qu’il ne promet pas',
        blocs: [
          {
            type: 'p',
            texte:
              'Le RTP (retour au joueur) est la part des mises qu’une machine rend en moyenne, calculée sur des millions de tours. Un RTP de 96 % signifie que, sur le très long terme, le jeu garde environ 4 % de tout ce qui est misé. Sur une session de quelques centaines de tours, tout peut arriver : le RTP ne dit rien de ce que vous gagnerez ou perdrez ce soir.'
          },
          {
            type: 'tableau',
            legende: 'Coût moyen théorique pour 1 000 $ misés au total (somme de toutes vos mises)',
            entetes: ['RTP', 'Part gardée par le jeu', 'Coût moyen pour 1 000 $ misés'],
            lignes: [
              ['96,71 %', '3,29 %', '32,90 $'],
              ['96,00 %', '4,00 %', '40,00 $'],
              ['94,50 %', '5,50 %', '55,00 $'],
              ['92,30 %', '7,70 %', '77,00 $']
            ]
          },
          {
            type: 'encadre',
            ton: 'info',
            titre: 'Un RTP élevé ne garantit aucun gain',
            texte:
              'Le RTP réduit le coût moyen du jeu, il ne le supprime pas. Toutes les machines à sous gardent une part des mises sur la durée. Fixez votre budget à l’avance et considérez-le comme le prix d’un divertissement.'
          }
        ]
      },
      {
        id: 'versions',
        titre: 'Le piège : le même jeu, plusieurs RTP',
        blocs: [
          {
            type: 'p',
            texte:
              'La plupart des fournisseurs proposent plusieurs réglages du même jeu, et c’est le casino qui choisit lequel installer. Le nom, les graphismes et les bonus sont identiques : seul le RTP change. Voici les jeux de notre sélection où l’écart recensé est le plus grand.'
          },
          {
            type: 'tableau',
            entetes: ['Jeu', 'Meilleure version', 'Version la plus basse', 'Écart'],
            lignes: ECARTS.map((m) => [
              `[${m.nom}](${cheminMachine(m)})`,
              pct(m.rtp),
              pct(pire(m)),
              `${virgule(m.rtp - pire(m))} point${m.rtp - pire(m) >= 2 ? 's' : ''}`
            ])
          },
          {
            type: 'encadre',
            ton: 'alerte',
            titre: 'Vérifiez toujours avant de miser',
            texte:
              'Le RTP affiché sur un site d’avis, y compris le nôtre, est le meilleur publié. Seule l’aide du jeu, dans votre casino, vous dit quelle version vous jouez vraiment.'
          }
        ]
      },
      {
        id: 'verifier',
        titre: 'Comment vérifier le RTP en 30 secondes',
        blocs: [
          {
            type: 'liste',
            ordonnee: true,
            items: [
              'Lancez le jeu dans votre casino (en démo ou en argent réel).',
              'Ouvrez le menu du jeu : l’icône « i », « ? » ou les trois traits, puis « Règles » ou « Aide ».',
              'Cherchez « RTP », « retour théorique au joueur » ou « taux de redistribution ».',
              'Comparez avec la fiche du jeu sur notre site. Si le chiffre est plus bas, cherchez un autre casino ou un autre jeu.'
            ]
          },
          {
            type: 'p',
            texte:
              'Certains jeux affichent deux RTP : celui du jeu normal et celui de l’achat de bonus. C’est normal ; regardez celui qui correspond à votre façon de jouer.'
          }
        ]
      },
      {
        id: 'volatilite',
        titre: 'RTP et volatilité : deux chiffres différents',
        blocs: [
          {
            type: 'p',
            texte:
              'Le RTP dit combien un jeu rend en moyenne ; la volatilité dit comment il le rend. Deux jeux à 96,50 % peuvent se jouer très différemment : l’un paie souvent de petits montants, l’autre reste longtemps silencieux avant un gros bonus. Avec un budget serré, une volatilité moyenne réduit le risque de le vider en quelques minutes. Notre [guide des machines à sous](/machines-a-sous/) explique les deux notions plus en détail.'
          }
        ]
      },
      {
        id: 'ou-jouer',
        titre: 'Où jouer à ces machines',
        blocs: [
          {
            type: 'p',
            texte:
              'Les lobbies changent d’un casino à l’autre et nous n’avons pas pu vérifier la version installée de chaque jeu. Une fois inscrit, cherchez le jeu par son nom, puis vérifiez son RTP dans l’aide du jeu avant de miser.'
          },
          { type: 'offres' }
        ]
      }
    ],
    faq: [
      {
        q: 'Quelle machine à sous a le meilleur RTP ?',
        r: `Dans notre sélection, ${premier.nom} arrive en tête avec ${pct(premier.rtp)} (${premier.rtpSource === 'officiel' ? `fiche officielle ${premier.fournisseur}` : 'selon SlotCatalog'}). Mais votre casino peut proposer une version plus basse : vérifiez l’aide du jeu.`
      },
      { q: 'Un RTP élevé garantit-il de gagner ?', r: 'Non. Le RTP est une moyenne sur des millions de tours. Sur une session, vous pouvez perdre même avec un jeu à 97 %.' },
      {
        q: 'Le RTP est-il le même dans tous les casinos ?',
        r: 'Pas forcément. Beaucoup de jeux existent en plusieurs réglages, et chaque casino choisit le sien. Le nom et les graphismes restent identiques.'
      },
      { q: 'Où voir le RTP d’une machine à sous ?', r: 'Dans le menu du jeu, rubrique « Règles » ou « Aide ». Cherchez « RTP » ou « retour théorique au joueur ».' }
    ],
    sources: [
      { titre: 'Pragmatic Play, fiches officielles des jeux', url: 'https://www.pragmaticplay.com/en/games/' },
      { titre: 'SlotCatalog, base de données des machines à sous', url: 'https://slotcatalog.com/en' }
    ],
    connexes: ['/machines-a-sous/', '/jeux/']
  }
];

export default rtp;
