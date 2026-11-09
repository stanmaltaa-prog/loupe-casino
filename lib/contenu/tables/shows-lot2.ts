import type { TableJeu } from './types';

/**
 * Jeux en direct, lot 2 (novembre 2026) : pages officielles d'Evolution (games.evolution.com)
 * et SlotCatalog pour les taux de retour. Les probabilités du Sic Bo sont calculées
 * sur les 216 combinaisons possibles de trois dés.
 */
const V = '2026-11-05';
const EVO = (chemin: string, nom: string) => ({ titre: `Evolution, page officielle ${nom}`, url: `https://games.evolution.com/live-casino/${chemin}/` });
const SC = (slug: string, nom: string) => ({ titre: `SlotCatalog, fiche ${nom}`, url: `https://slotcatalog.com/en/slots/${slug}` });

const showsLot2: TableJeu[] = [
  {
    slug: 'super-sic-bo',
    nom: 'Super Sic Bo',
    famille: 'show',
    fournisseur: 'Evolution',
    format: 'Jeu de dés en direct, avec croupier',
    annee: 2019,
    volume: 590,
    rtp: 97.22,
    rtpSource: 'base',
    rtpNote:
      'Evolution ne publie pas le RTP sur sa page. SlotCatalog indique 97,22 %. Chaque type de mise a son propre taux de retour, affiché dans l’aide du jeu.',
    gainMax: 'Multiplicateurs jusqu’à 1 000×',
    titre: 'Sic Bo en ligne : règles, probabilités et Super Sic Bo',
    description:
      'Le Sic Bo expliqué : chaque mise des trois dés, ses vraies chances sur les 216 combinaisons et les multiplicateurs jusqu’à 1 000× de Super Sic Bo.',
    h1: 'Sic Bo en ligne : les mises, les vraies probabilités et Super Sic Bo',
    chapeau:
      'Le Sic Bo est un jeu de dés chinois très ancien : on parie sur le résultat de trois dés. Voici les règles de la version en direct d’Evolution, Super Sic Bo, et la probabilité exacte de chaque mise, calculée sur toutes les combinaisons possibles.',
    principe: [
      'Le croupier secoue trois dés ordinaires, de 1 à 6. Avant le lancer, vous placez vos mises sur la table : le total des trois dés, un chiffre précis, une paire, un triple ou une combinaison de deux chiffres.',
      'Super Sic Bo, la version d’Evolution, ajoute à chaque partie des multiplicateurs tirés au hasard, jusqu’à 1 000×. Une fois les mises fermées, zéro, une ou plusieurs cases de la table reçoivent un multiplicateur : si votre mise gagnante est sur l’une d’elles, son paiement est multiplié d’autant.'
    ],
    etapes: [
      'Placez vos mises sur une ou plusieurs cases de la table pendant le temps de mise.',
      'Les mises se ferment ; des multiplicateurs sont attribués au hasard à certaines cases.',
      'Le croupier secoue les trois dés ; le résultat s’affiche sur la table.',
      'Chaque mise gagnante est payée selon son taux, multiplié si sa case a reçu un multiplicateur.'
    ],
    particularites: [
      {
        nom: 'Petit, Grand, Pair et Impair',
        texte: 'Petit gagne si le total va de 4 à 10, Grand de 11 à 17. Pair et Impair portent sur le total. Ces quatre mises perdent toutes contre un triple : c’est ce qui donne l’avantage au casino.'
      },
      {
        nom: 'Total, Simple, Double et Triple',
        texte: 'Le Total se joue sur un nombre de 4 à 17. La mise Simple gagne si votre chiffre sort sur un, deux ou trois dés, et paie davantage s’il sort plusieurs fois. Le Double demande deux dés identiques (un triple compte aussi), le Triple trois dés identiques.'
      },
      {
        nom: 'N’importe quel triple et Combinaison',
        texte: 'La mise « n’importe quel triple » couvre les six triples à la fois. La Combinaison gagne si deux chiffres précis, différents, sortent parmi les trois dés : il en existe 15.'
      }
    ],
    tableau: {
      legende: 'Probabilité de chaque mise à chaque partie (calcul sur les 216 combinaisons de trois dés)',
      entetes: ['Mise', 'Chance par partie', 'En moyenne, 1 fois tous les'],
      lignes: [
        ['Petit (4 à 10) ou Grand (11 à 17), hors triples', '48,61 %', '2,1 parties'],
        ['Pair ou Impair, hors triples', '48,61 %', '2,1 parties'],
        ['Simple : un chiffre précis sort au moins une fois', '42,13 %', '2,4 parties'],
        ['Combinaison de deux chiffres précis', '13,89 %', '7,2 parties'],
        ['Total de 10 ou total de 11 (les plus fréquents)', '12,50 %', '8 parties'],
        ['Double précis (au moins deux fois le même chiffre)', '7,41 %', '13,5 parties'],
        ['N’importe quel triple', '2,78 %', '36 parties'],
        ['Total de 4 ou total de 17 (les plus rares)', '1,39 %', '72 parties'],
        ['Triple précis', '0,46 %', '216 parties']
      ],
      note: 'Sans les triples, Petit et Grand auraient exactement 50 % de chances. Les taux de paiement de chaque mise sont affichés dans l’aide du jeu : comparez-les à ces probabilités avant de miser.'
    },
    analyse: [
      'Le Sic Bo paraît compliqué à cause de sa grande table, mais chaque mise se résume à une question simple sur trois dés. Les mises Petit, Grand, Pair et Impair sont les plus proches d’un pile ou face : 48,61 % de chances, parce qu’elles perdent contre les six triples.',
      'Les grosses cotes (triple précis, total de 4 ou de 17) sortent très rarement : une fois tous les 216 ou 72 parties en moyenne. Les multiplicateurs de Super Sic Bo rendent ces mises plus spectaculaires, sans changer leur probabilité de sortir. Chaque partie est indépendante : les résultats précédents ne disent rien de la suivante.'
    ],
    pourQui: 'Pour les joueurs qui aiment les jeux rapides et les tables avec beaucoup de choix de mises, en direct avec un vrai croupier.',
    attention: 'Les mises à grosse cote perdent la grande majorité du temps : misez-y de petits montants, et gardez la plus grande part de votre budget pour les mises simples.',
    faq: [
      {
        q: 'Comment jouer au Sic Bo ?',
        r: 'Vous pariez sur le résultat de trois dés : le total (Petit, Grand, un nombre précis), un chiffre, une paire, un triple ou une combinaison de deux chiffres. Le croupier secoue les dés, et chaque mise gagnante est payée selon son taux.'
      },
      {
        q: 'Quelle est la meilleure mise au Sic Bo ?',
        r: 'Les mises Petit et Grand sont celles qui gagnent le plus souvent : 48,61 % de chances à chaque partie. Elles perdent contre les triples, ce qui donne l’avantage au casino.'
      },
      {
        q: 'Quel est le RTP de Super Sic Bo ?',
        r: 'Evolution ne le publie pas sur sa page. SlotCatalog indique 97,22 %. Le taux de chaque mise est affiché dans l’aide du jeu.'
      },
      {
        q: 'À quoi servent les multiplicateurs de Super Sic Bo ?',
        r: 'À chaque partie, des cases de la table reçoivent au hasard un multiplicateur, jusqu’à 1 000× selon Evolution. Si votre mise gagnante est sur l’une d’elles, son paiement est multiplié.'
      }
    ],
    similaires: ['crazy-time', 'mega-ball', 'lightning-roulette', 'dream-catcher'],
    sources: [EVO('live-baccarat/super-sic-bo', 'Super Sic Bo'), SC('Super-Sic-Bo-Evolution-Gaming', 'Super Sic Bo')],
    verifieLe: V
  },
  {
    slug: 'mega-ball',
    nom: 'Mega Ball',
    famille: 'show',
    fournisseur: 'Evolution',
    format: 'Bingo en direct, avec présentateur',
    annee: 2020,
    volume: 390,
    rtp: 95,
    rtpSource: 'base',
    rtpNote: 'Evolution ne publie pas le RTP sur sa page. SlotCatalog indique 95 % ; le taux exact est affiché dans l’aide du jeu.',
    gainMax: null,
    titre: 'Mega Ball : règles, multiplicateurs et RTP du bingo en direct',
    description:
      'Mega Ball d’Evolution expliqué : achat des cartes, tirage de 20 boules sur 51, multiplicateurs de 5× à 100× de la Mega Ball, RTP et conseils avant de jouer.',
    h1: 'Mega Ball : le bingo en direct d’Evolution, ses règles et ses multiplicateurs',
    chapeau:
      'Mega Ball reprend le principe du bingo dans un studio en direct, avec un tirage très rapide et une boule bonus qui multiplie les gains. Voici les règles officielles d’Evolution et ce qu’il faut savoir avant d’acheter vos cartes.',
    principe: [
      'Vous achetez des cartes de bingo et choisissez leur valeur, de 0,10 $ à 100 $ selon Evolution. Une fois les achats fermés, la machine tire 20 boules sur 51 à grande vitesse. Chaque numéro tiré qui figure sur une de vos cartes y est coché automatiquement, et une ligne complète rapporte un gain.',
      'Après le tirage principal viennent une ou deux manches Mega Ball. Un multiplicateur de 5× à 100× est d’abord généré à l’écran, puis une dernière boule est tirée : si elle complète une ligne sur une de vos cartes, le gain de cette carte est multiplié.'
    ],
    etapes: [
      'Choisissez la valeur de vos cartes, puis achetez-en 1, 10, 25 ou 100 d’un clic, jusqu’à 400 cartes selon les règles d’Evolution.',
      'Le tirage de 20 boules sur 51 commence ; vos numéros sont cochés automatiquement.',
      'Les boules qui vous manquent pour gagner s’affichent en doré, avec le gain possible.',
      'Une ou deux manches Mega Ball suivent : multiplicateur de 5× à 100×, puis tirage de la Mega Ball.'
    ],
    particularites: [
      {
        nom: 'La Mega Ball',
        texte: 'Elle ne multiplie un gain que si elle complète une ligne sur une carte. Sinon, elle compte comme une boule ordinaire. Si deux Mega Balls touchent les lignes gagnantes d’une même carte, seul le plus fort multiplicateur s’applique.'
      },
      {
        nom: 'Beaucoup de cartes, beaucoup de mise',
        texte: 'Acheter 100 cartes à 1 $ revient à miser 100 $ sur une seule partie. Le nombre de cartes augmente vos chances d’avoir une ligne, mais aussi la somme engagée.'
      }
    ],
    tableau: {
      legende: 'Le déroulement d’une partie de Mega Ball, d’après les règles d’Evolution',
      entetes: ['Étape', 'Ce qui se passe'],
      lignes: [
        ['Achat', 'Cartes de 0,10 $ à 100 $ chacune, jusqu’à 400 cartes'],
        ['Tirage principal', '20 boules tirées sur 51'],
        ['Multiplicateur', 'De 5× à 100×, généré avant chaque Mega Ball'],
        ['Mega Ball', 'Une ou deux boules bonus ; multiplient la carte si elles complètent une ligne'],
        ['Résultat', 'Les cartes gagnantes sont triées, de la plus forte à la plus faible']
      ],
      note: 'Montants indiqués par Evolution ; votre casino peut afficher d’autres limites.'
    },
    analyse: [
      'Mega Ball est présenté par Evolution comme un jeu « super rapide » : les boules sont tirées à vive allure et le résultat est calculé automatiquement. Le bingo se comprend tout de suite, ce qui le rend accessible même sans connaître les jeux de casino.',
      'Le revers de cette vitesse est la somme engagée : avec beaucoup de cartes, on mise vite plusieurs dizaines de dollars par partie. Evolution montre dans ses vidéos un gain de 25 000 fois la mise, mais ces gros multiplicateurs restent exceptionnels.'
    ],
    pourQui: 'Pour les amateurs de bingo et de tirages rapides, qui veulent un jeu simple avec une petite chance de gros multiplicateur.',
    attention: 'Fixez le nombre de cartes avant de jouer : c’est lui, plus que la valeur de chaque carte, qui fait grimper la mise totale de chaque partie.',
    faq: [
      {
        q: 'Comment jouer à Mega Ball ?',
        r: 'Choisissez la valeur de vos cartes et leur nombre, puis regardez le tirage de 20 boules sur 51. Une ligne complète rapporte un gain, et la Mega Ball peut le multiplier de 5× à 100×.'
      },
      {
        q: 'Combien de cartes peut-on acheter à Mega Ball ?',
        r: 'Jusqu’à 400 cartes par partie selon les règles d’Evolution, par paquets de 1, 10, 25 ou 100.'
      },
      { q: 'Quel est le RTP de Mega Ball ?', r: 'Evolution ne le publie pas sur sa page. SlotCatalog indique 95 %. Vérifiez le taux dans l’aide du jeu.' },
      {
        q: 'La Mega Ball multiplie-t-elle tous les gains ?',
        r: 'Non. Elle ne multiplie le gain d’une carte que si elle complète une ligne sur cette carte. Sinon, elle compte comme une boule ordinaire.'
      }
    ],
    similaires: ['monopoly-big-baller', 'crazy-time', 'super-sic-bo', 'dream-catcher'],
    sources: [EVO('game-shows/mega-ball', 'Mega Ball'), SC('Mega-Ball-Evolution-Gaming', 'Mega Ball (Evolution)')],
    verifieLe: V
  },
  {
    slug: 'dream-catcher',
    nom: 'Dream Catcher',
    famille: 'show',
    fournisseur: 'Evolution',
    format: 'Roue de fortune en direct, avec présentateur',
    annee: null,
    volume: 40,
    rtp: 96.58,
    rtpSource: 'base',
    rtpNote:
      'Evolution ne publie pas le RTP sur sa page. Selon SlotCatalog, il va de 90,81 % à 96,58 % selon le chiffre joué ; 96,58 % correspond à la mise sur le 10.',
    gainMax: null,
    titre: 'Dream Catcher : probabilités de chaque case et vrai RTP',
    description:
      'Dream Catcher d’Evolution : la roue de 54 cases, les multiplicateurs 2× et 7×, la probabilité de chaque chiffre et pourquoi le RTP change selon la mise.',
    h1: 'Dream Catcher : la roue d’Evolution, ses probabilités et son RTP par mise',
    chapeau:
      'Dream Catcher est la roue de fortune en direct d’Evolution, celle dont s’inspirent Crazy Time et MONOPOLY Live. Le principe tient en une phrase, mais toutes les mises ne se valent pas : voici la probabilité de chaque case et le taux de retour de chaque chiffre.',
    principe: [
      'Un présentateur fait tourner une grande roue de 54 cases : 52 cases portent un chiffre (1, 2, 5, 10, 20 ou 40), et 2 cases portent un multiplicateur, 2× argent et 7× or. Vous misez sur un ou plusieurs chiffres avant le lancer.',
      'Si la roue s’arrête sur votre chiffre, il paie sa valeur : 1 pour 1, 2 pour 1, jusqu’à 40 pour 1. Si elle s’arrête sur un multiplicateur, les mises restent en place, la roue est relancée et le gain suivant est multiplié. Les multiplicateurs se cumulent s’ils sortent plusieurs fois de suite.'
    ],
    etapes: [
      'Misez sur un ou plusieurs chiffres : 1, 2, 5, 10, 20 ou 40.',
      'Le présentateur lance la roue ; le clapet en haut indique la case gagnante.',
      'Chiffre joué : vous êtes payé selon sa valeur.',
      'Case 2× ou 7× : la roue est relancée et le prochain gain est multiplié.'
    ],
    particularites: [
      {
        nom: 'Les multiplicateurs 2× et 7×',
        texte: 'Ils ne paient rien eux-mêmes : ils multiplient le gain du tour suivant. S’ils sortent plusieurs fois d’affilée, ils se multiplient entre eux, ce qui explique les très gros gains possibles.'
      },
      {
        nom: 'Un RTP différent pour chaque chiffre',
        texte: 'Le nombre de cases de chaque chiffre ne suit pas exactement sa valeur. Résultat : selon SlotCatalog, la mise sur le 10 rend en moyenne 96,58 %, celle sur le 40 seulement 90,81 %.'
      }
    ],
    tableau: {
      legende: 'Les 54 cases de Dream Catcher, leur probabilité et le taux de retour de chaque mise (répartition et RTP : SlotCatalog)',
      entetes: ['Case', 'Cases', 'Chance par tour', 'RTP de la mise'],
      lignes: [
        ['1 (paie 1 pour 1)', '23', '42,59 %', '95,34 %'],
        ['2 (paie 2 pour 1)', '15', '27,78 %', '95,51 %'],
        ['5 (paie 5 pour 1)', '7', '12,96 %', '91,24 %'],
        ['10 (paie 10 pour 1)', '4', '7,41 %', '96,58 %'],
        ['20 (paie 20 pour 1)', '2', '3,70 %', '92,74 %'],
        ['40 (paie 40 pour 1)', '1', '1,85 %', '90,81 %'],
        ['Multiplicateur 2×', '1', '1,85 %', '—'],
        ['Multiplicateur 7×', '1', '1,85 %', '—']
      ],
      note: 'Chance par tour : nombre de cases divisé par 54. Le 40 ne sort qu’une fois tous les 54 tours en moyenne. Les taux de retour viennent de SlotCatalog ; vérifiez-les dans l’aide du jeu de votre casino.'
    },
    analyse: [
      'Dream Catcher est le plus simple des jeux télévisés d’Evolution : pas de bonus, pas de règle cachée, seulement une roue. C’est aussi celui où le choix de la mise compte le plus, parce que chaque chiffre a son propre taux de retour.',
      'Les chiffres 10, 2 et 1 rendent le plus, les chiffres 40 et 5 le moins. Miser sur le 40 parce qu’il paie gros revient à accepter un taux de retour plus faible, en plus d’une case sur 54 seulement. Les multiplicateurs 2× et 7× donnent du piquant, sans changer ces écarts.'
    ],
    pourQui: 'Pour découvrir les jeux télévisés en direct avec les règles les plus simples possibles.',
    attention: 'Évitez de répartir votre budget sur tous les chiffres : vous perdez à coup sûr une partie de vos mises à chaque tour, et les chiffres 5 et 40 ont les taux de retour les plus faibles.',
    faq: [
      {
        q: 'Combien de cases compte la roue de Dream Catcher ?',
        r: '54 cases : 52 chiffres et 2 multiplicateurs, 2× et 7×, selon Evolution. D’après SlotCatalog, le 1 occupe 23 cases, le 2 en occupe 15, le 5 sept, le 10 quatre, le 20 deux et le 40 une seule.'
      },
      {
        q: 'Quelle est la meilleure mise à Dream Catcher ?',
        r: 'Selon SlotCatalog, la mise sur le 10 a le meilleur taux de retour (96,58 %), devant le 2 (95,51 %) et le 1 (95,34 %). Le 40 a le plus faible (90,81 %).'
      },
      {
        q: 'À quoi servent les cases 2× et 7× ?',
        r: 'Elles ne paient rien directement : la roue est relancée et le gain suivant est multiplié par 2 ou par 7. Plusieurs multiplicateurs de suite se cumulent.'
      },
      { q: 'Quel est le RTP de Dream Catcher ?', r: 'De 90,81 % à 96,58 % selon le chiffre joué, d’après SlotCatalog. Evolution ne le publie pas sur sa page.' }
    ],
    similaires: ['crazy-time', 'monopoly-live', 'mega-wheel', 'funky-time'],
    sources: [EVO('game-shows/dream-catcher', 'Dream Catcher'), SC('Dream-Catcher-Evolution-Gaming', 'Dream Catcher')],
    verifieLe: V
  }
];

export default showsLot2;
