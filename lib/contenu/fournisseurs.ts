import type { Question } from '@/components/Faq';
import { typoProfond } from '@/lib/typo';

export type Fournisseur = {
  id: string;
  nom: string;
  /** Recherches mensuelles au Canada sur le nom du fournisseur (Ubersuggest, novembre 2026). */
  volume: number;
  titre: string;
  description: string;
  h1: string;
  chapeau: string;
  /** Paragraphes en texte riche ([lien](/chemin/) et **gras**). */
  presentation: string[];
  aSavoir: string[];
  faq: Question[];
  sources: { titre: string; url: string }[];
  modifie: string;
  /** Rubrique parente dans le fil d'Ariane (par défaut : Machines à sous). */
  parent?: { nom: string; chemin: string };
};

const M = '2026-11-04';
const SC = { titre: 'SlotCatalog, fiches des jeux cités', url: 'https://slotcatalog.com/en/' };

const BRUT: Fournisseur[] = [
  {
    id: 'pragmatic-play',
    nom: 'Pragmatic Play',
    volume: 8100,
    titre: 'Pragmatic Play : démos gratuites, RTP et jeux en direct',
    description:
      'Pragmatic Play : démos gratuites de Gates of Olympus, Sweet Bonanza, Big Bass… Leurs vrais RTP, leurs versions, et ses jeux en direct comme Mega Wheel.',
    h1: 'Pragmatic Play : ses machines à sous et leurs vrais chiffres',
    chapeau:
      "C'est le fournisseur le plus recherché au Canada, et plus de la moitié des machines de notre sélection viennent de son catalogue. Voici ce qui distingue ses jeux, et le piège à connaître.",
    presentation: [
      "Avec environ **8 100 recherches par mois au Canada** sur son seul nom, Pragmatic Play domine notre étude. Selon le pied de page de son site officiel, la société se présente comme un investissement de Veridian (Gibraltar) Limited.",
      "Sa marque de fabrique : le **paiement partout** combiné à des multiplicateurs, popularisé par [Gates of Olympus](/machines-a-sous/gates-of-olympus/) et [Sweet Bonanza](/machines-a-sous/sweet-bonanza/). Le fournisseur décline ensuite ses succès en séries : versions « 1000 » aux multiplicateurs plus hauts, version Super Scatter, ou suites de [Big Bass Bonanza](/machines-a-sous/big-bass-bonanza/), un jeu du studio Reel Kingdom qu'il distribue.",
      "Pragmatic Play propose aussi des jeux Megaways, un système créé par [Big Time Gaming](/fournisseurs/big-time-gaming/) : [Buffalo King Megaways](/machines-a-sous/buffalo-king-megaways/), [5 Lions Megaways](/machines-a-sous/5-lions-megaways/), [Great Rhino Megaways](/machines-a-sous/great-rhino-megaways/) et [Madame Destiny Megaways](/machines-a-sous/madame-destiny-megaways/).",
      "La plupart de ses machines de notre sélection ont une **démo gratuite officielle**, jouable directement sur leur fiche, sans inscription, en plein écran sur téléphone.",
      "Pragmatic Play a aussi son propre casino en direct, **Pragmatic Play Live** : [Mega Wheel](/casino-en-direct/mega-wheel/), sa roue de jeu télévisé, [Sweet Bonanza CandyLand](/casino-en-direct/sweet-bonanza-candyland/), la version en direct de Sweet Bonanza, [Mega Roulette](/roulette-en-ligne/mega-roulette/) et sa version de [Free Bet Blackjack](/blackjack-en-ligne/free-bet-blackjack/)."
    ],
    aSavoir: [
      '**Trois réglages de RTP coexistent souvent**, autour de 96,5 %, 95,5 % et 94,5 % sur les jeux de notre sélection. Le casino choisit la version installée : vérifiez le RTP dans l’écran d’aide du jeu.',
      '**La mise « ante »** (+25 % par tour sur plusieurs jeux) augmente les chances de déclencher les tours gratuits, mais aussi le coût de chaque tour.',
      '**L’achat de bonus**, souvent à 100 fois la mise, n’est pas proposé partout : il dépend du pays et du casino.',
      '**La plupart de ses jeux phares sont à volatilité élevée** : prévoyez un budget qui tient au moins une centaine de tours.'
    ],
    faq: [
      {
        q: 'Quel est le jeu Pragmatic Play le plus recherché au Canada ?',
        r: 'Sweet Bonanza, avec environ 1 600 recherches par mois au Canada selon Ubersuggest, devant Gates of Olympus et Big Bass Bonanza (environ 1 000 chacun).'
      },
      {
        q: 'Les jeux Pragmatic Play ont-ils tous le même RTP ?',
        r: 'Non. Chaque jeu a son propre RTP, et la plupart existent en plusieurs versions. Sur les jeux de notre sélection, on trouve souvent une version autour de 96,5 %, une autour de 95,5 % et une autour de 94,5 %.'
      },
      {
        q: 'Peut-on jouer gratuitement aux jeux Pragmatic Play ?',
        r: 'Oui pour les machines à sous : la plupart de celles de notre sélection ont une démo officielle jouable sur leur fiche, avec des crédits fictifs et sans inscription. Les jeux en direct de Pragmatic Play Live se jouent uniquement en argent réel.'
      },
      {
        q: 'Où trouver beaucoup de jeux Pragmatic Play ?',
        r: 'Celsius affiche 675 jeux Pragmatic Play selon l’opérateur. Vérifiez la disponibilité du jeu voulu dans le lobby après inscription.'
      }
    ],
    sources: [
      { titre: 'Pragmatic Play, site officiel', url: 'https://www.pragmaticplay.com/en/' },
      { titre: 'Pragmatic Play, jeux en direct', url: 'https://www.pragmaticplay.com/en/live-casino/' },
      SC
    ],
    modifie: M
  },
  {
    id: 'evolution',
    nom: 'Evolution',
    volume: 1900,
    parent: { nom: 'Casino en direct', chemin: '/casino-en-direct/' },
    titre: 'Evolution : Crazy Time, Lightning Roulette et jeux en direct',
    description:
      'Evolution, le géant du casino en direct : Crazy Time, Monopoly Live, Lightning Roulette, ses marques (NetEnt, Nolimit City), ses licences et ses RTP.',
    h1: 'Evolution : le studio de Crazy Time, Lightning Roulette et Monopoly Live',
    chapeau:
      "Evolution est derrière la plupart des jeux en direct que vous croiserez dans un casino en ligne. Voici ses jeux phares, les marques qu'il possède et ce qu'il faut savoir avant de miser.",
    presentation: [
      "Avec environ **1 900 recherches par mois au Canada** sur son nom, Evolution est la référence du casino en direct. Dans notre sélection, il signe [Crazy Time](/casino-en-direct/crazy-time/), [MONOPOLY Live](/casino-en-direct/monopoly-live/), [Funky Time](/casino-en-direct/funky-time/), [Lightning Roulette](/roulette-en-ligne/lightning-roulette/) et [Auto Roulette](/roulette-en-ligne/auto-roulette/). Son site officiel présente Crazy Time comme son jeu télévisé le plus populaire.",
      "Evolution est aussi un groupe : selon la page « Marques » de son site, il réunit NetEnt, Red Tiger, Big Time Gaming, Nolimit City, Ezugi, Sneaky Slots et DigiWheel. Nos pages [NetEnt](/fournisseurs/netent/), [Big Time Gaming](/fournisseurs/big-time-gaming/) et [Nolimit City](/fournisseurs/nolimit-city/) détaillent leurs machines à sous.",
      "Sa gamme **First Person** propose des versions numériques de ses classiques, sans croupier, comme [First Person Blackjack](/blackjack-en-ligne/first-person-blackjack/), dont Evolution offre une démo gratuite sur son site selon votre pays. Le groupe indique être agréé par la Malta Gaming Authority (licence MGA/B2B/187/2010) et par la Gambling Commission de Grande-Bretagne."
    ],
    aSavoir: [
      '**Les jeux télévisés rendent moins que les jeux de table** : 96,08 % pour Crazy Time selon Evolution, contre 97,30 % pour la roulette européenne et plus de 99 % pour un blackjack bien joué.',
      '**Chaque mise a son propre RTP** : l’aide de chaque table indique le taux de la mise que vous jouez.',
      '**Les bonus de bienvenue comptent rarement** sur les jeux en direct : lisez les conditions avant d’accepter une offre.',
      '**Les statistiques et historiques** des sites de suivi ne prédisent rien : chaque tour est indépendant, comme Evolution le rappelle sur sa page Crazy Time.'
    ],
    faq: [
      {
        q: 'Evolution est-il un fournisseur fiable ?',
        r: 'Evolution indique être agréé notamment par la Malta Gaming Authority (licence MGA/B2B/187/2010) et par la Gambling Commission britannique. Cela concerne le fournisseur : la fiabilité du casino qui propose ses jeux reste à vérifier séparément.'
      },
      {
        q: 'Peut-on jouer gratuitement aux jeux Evolution ?',
        r: 'Les jeux en direct se jouent en argent réel. Evolution propose des démos de certains jeux numériques sur son site, comme First Person Blackjack, selon votre pays.'
      },
      {
        q: 'Quelles marques appartiennent à Evolution ?',
        r: 'Selon son site officiel : NetEnt, Red Tiger, Big Time Gaming, Nolimit City, Ezugi, Sneaky Slots et DigiWheel, en plus de la marque Evolution elle-même.'
      },
      {
        q: 'Quel est le jeu Evolution le plus recherché au Canada ?',
        r: 'Crazy Time, avec environ 720 recherches par mois sur son nom selon Ubersuggest, et davantage encore sur « Crazy Time stats ».'
      }
    ],
    sources: [
      { titre: 'Evolution, page officielle des marques du groupe', url: 'https://www.evolution.com/brands' },
      { titre: 'Evolution Games, site officiel des jeux (licences en pied de page)', url: 'https://games.evolution.com/live-casino/game-shows/crazy-time/' }
    ],
    modifie: M
  },
  {
    id: 'nolimit-city',
    nom: 'Nolimit City',
    volume: 1900,
    titre: 'Nolimit City : San Quentin, Mental, Tombstone, RTP et démos',
    description:
      'Nolimit City : San Quentin, Mental, Tombstone R.I.P., Duck Hunters… Leurs vrais RTP, leurs gains max record, les mécaniques xWays et xNudge, et les démos.',
    h1: 'Nolimit City : les machines à sous les plus extrêmes du marché',
    chapeau:
      "Nolimit City s'est fait un nom avec des jeux à volatilité extrême et des gains maximaux de plusieurs centaines de milliers de fois la mise. Voici ses jeux phares, leurs vrais chiffres et ce qu'il faut savoir avant d'y jouer.",
    presentation: [
      "Avec environ **1 900 recherches par mois au Canada** sur son nom, Nolimit City est l'un des studios les plus suivis. Selon la page « Marques » d'[Evolution](/fournisseurs/evolution/), il fait aujourd'hui partie du groupe Evolution, aux côtés de NetEnt et de Big Time Gaming.",
      "Ses jeux sont connus pour leurs **gains maximaux record** : 300 000 fois la mise pour [Tombstone R.I.P.](/machines-a-sous/tombstone-rip/), 150 000 fois pour [San Quentin xWays](/machines-a-sous/san-quentin/), 66 666 fois pour [Mental](/machines-a-sous/mental/), selon les fiches officielles. En contrepartie, la plupart des tours rapportent peu ou rien.",
      "Le studio a déposé ses propres mécaniques, signalées par le préfixe « x » : **xWays** (un symbole qui en révèle plusieurs identiques), **xNudge** (un wild qui glisse et augmente son multiplicateur), **xSplit** (qui coupe les symboles en deux), **xBomb** (un wild qui explose) ou **xRIP**, qui ne paie pas un tour dont le gain est inférieur à la mise."
    ],
    aSavoir: [
      '**La volatilité est extrême** sur ses jeux phares : prévoyez un budget qui tient plusieurs centaines de tours, ou jouez de très petites mises.',
      '**Les fiches officielles affichent des chiffres rares** : fréquence des tours gratuits, probabilité du gain maximal, fréquence de gain. Nous les reprenons sur chaque fiche.',
      '**L’achat de bonus (Nolimit Bonus)** peut coûter de 70 à 3 000 fois la mise, et Nolimit City précise qu’il est retiré dans certains marchés réglementés.',
      '**Les démos officielles** s’ouvrent sur le site de Nolimit City (plateforme Playin), avec confirmation de l’âge : l’éditeur n’autorise pas leur intégration ailleurs.'
    ],
    faq: [
      {
        q: 'Nolimit City appartient-il à Evolution ?',
        r: 'Oui : Nolimit City figure parmi les marques du groupe Evolution sur la page officielle des marques d’Evolution.'
      },
      {
        q: 'Quel est le jeu Nolimit City qui paie le plus ?',
        r: 'Dans notre sélection, Tombstone R.I.P., avec un gain maximal de 300 000 fois la mise selon Nolimit City, et une probabilité d’environ 1 sur 130 millions.'
      },
      {
        q: 'Les jeux Nolimit City ont-ils un bon RTP ?',
        r: 'Leurs RTP officiels tournent autour de 96 % (96,03 % à 96,08 % sur les jeux de notre sélection). C’est la volatilité, très élevée, qui les distingue.'
      }
    ],
    sources: [
      { titre: 'Nolimit City, site officiel des jeux', url: 'https://www.nolimitcity.com/games' },
      { titre: 'Evolution, page officielle des marques du groupe', url: 'https://www.evolution.com/brands' }
    ],
    modifie: M
  },
  {
    id: 'hacksaw-gaming',
    nom: 'Hacksaw Gaming',
    volume: 2900,
    titre: 'Hacksaw Gaming : machines à sous, RTP et volatilité',
    description:
      'Hacksaw Gaming : Wanted Dead or a Wild, Chaos Crew… Des jeux très volatils, des bonus à acheter et des écarts de RTP à connaître avant de jouer.',
    h1: 'Hacksaw Gaming : des machines à sous à très forte volatilité',
    chapeau:
      "Hacksaw Gaming est le deuxième fournisseur le plus recherché de notre étude. Ses jeux visent les gros multiplicateurs, avec le risque qui va avec.",
    presentation: [
      "Environ **2 900 recherches par mois au Canada** portent sur Hacksaw Gaming, loin devant la plupart des studios historiques. Ses jeux de notre sélection partagent le même format : grilles de 5 × 5, 15 lignes, des wilds multiplicateurs et des bonus que l'on peut acheter dans certains pays.",
      "Ses deux titres de notre sélection résument son style : [Wanted Dead or a Wild](/machines-a-sous/wanted-dead-or-a-wild/), avec ses wilds « VS » jusqu'à 100× et un gain maximal de 12 500× la mise, et [Chaos Crew](/machines-a-sous/chaos-crew/), dont le bonus repart à 3 tours à chaque symbole multiplicateur."
    ],
    aSavoir: [
      '**La volatilité est élevée sur tous ses jeux de notre sélection** : de longues séries sans gain sont normales.',
      '**Les écarts de RTP sont importants** : de 96,38 % à 88,42 % selon la version pour Wanted Dead or a Wild, d’après SlotCatalog.',
      '**L’achat de bonus coûte cher** : 80 à 400 fois la mise sur Wanted Dead or a Wild, 129 fois sur Chaos Crew. Et, sur Chaos Crew, SlotCatalog indique un RTP plus bas quand le bonus est acheté.'
    ],
    faq: [
      {
        q: 'Hacksaw Gaming est-il réservé aux gros budgets ?',
        r: 'Ses jeux sont très volatils : avec un petit budget, il vaut mieux réduire la mise pour tenir au moins une centaine de tours, et éviter l’achat de bonus.'
      },
      {
        q: 'Quel est le jeu Hacksaw Gaming le plus connu ?',
        r: 'Wanted Dead or a Wild est le plus recherché de notre étude, avec environ 170 recherches par mois au Canada.'
      }
    ],
    sources: [SC],
    modifie: M
  },
  {
    id: 'games-global',
    nom: 'Games Global (ex-Microgaming)',
    volume: 470,
    titre: 'Games Global (ex-Microgaming) : machines à sous et RTP',
    description:
      'Games Global a repris les jeux de Microgaming : Mega Moolah, Immortal Romance, Book of Oz… Leurs vrais RTP et ce que change le jackpot progressif.',
    h1: 'Games Global, l’héritier des jeux Microgaming',
    chapeau:
      "Si vous cherchez Microgaming, c'est désormais Games Global qu'il faut connaître. Le fournisseur a repris ses jeux, dont le célèbre Mega Moolah.",
    presentation: [
      "En mai 2022, Games Global a finalisé l'achat du portefeuille de jeux et de l'activité de distribution de Microgaming. Les grands classiques de Microgaming sont donc aujourd'hui distribués par Games Global, même si beaucoup de casinos et de joueurs utilisent encore l'ancien nom (environ 470 recherches par mois au Canada sur les deux noms réunis).",
      "Le catalogue réunit des jeux maison et des jeux de studios partenaires. Dans notre sélection : [Mega Moolah](/machines-a-sous/mega-moolah/) et son jackpot progressif, [Immortal Romance](/machines-a-sous/immortal-romance/), mais aussi [Book of Oz](/machines-a-sous/book-of-oz/) (Triple Edge Studios) et [9 Masks of Fire](/machines-a-sous/9-masks-of-fire/) (Gameburger Studios)."
    ],
    aSavoir: [
      '**Mega Moolah rend moins en moyenne** : son RTP de 88,12 % selon SlotCatalog inclut la part qui alimente les jackpots.',
      '**Immortal Romance** a l’un des RTP les plus hauts de notre sélection (96,86 %), mais ses meilleurs bonus se débloquent au fil des visites.',
      '**Le nom affiché varie** : selon le casino, le même jeu peut être classé sous Microgaming, Games Global ou le nom du studio partenaire.'
    ],
    faq: [
      {
        q: 'Microgaming existe-t-il encore ?',
        r: 'Les jeux et l’activité de distribution de Microgaming ont été repris par Games Global en mai 2022. Les anciens titres de Microgaming sont désormais distribués sous la bannière Games Global.'
      },
      {
        q: 'Mega Moolah est-il un jeu Games Global ?',
        r: 'Oui. SlotCatalog classe aujourd’hui Mega Moolah sous Games Global.'
      }
    ],
    sources: [
      {
        titre: 'Yogonet, Games Global finalise l’achat du portefeuille de Microgaming (mai 2022)',
        url: 'https://www.yogonet.com/international/news/2022/05/05/62492-games-global-completes-acquisition-of-microgaming-39s-igaming-portfolio--distribution-business'
      },
      SC
    ],
    modifie: M
  },
  {
    id: 'push-gaming',
    nom: 'Push Gaming',
    volume: 260,
    titre: 'Push Gaming : Razor Shark, Jammin’ Jars, RTP et avis',
    description:
      'Push Gaming : Razor Shark, Jammin’ Jars… Des mécaniques originales, des multiplicateurs sans plafond et plusieurs versions de RTP à vérifier.',
    h1: 'Push Gaming : des mécaniques originales et des multiplicateurs sans plafond',
    chapeau:
      "Push Gaming est moins recherché que Pragmatic Play ou Hacksaw Gaming, mais deux de ses jeux figurent parmi les machines les plus recherchées au Canada.",
    presentation: [
      "Environ **260 recherches par mois au Canada** portent sur Push Gaming. Le studio mise sur des fonctions qu'on ne retrouve pas ailleurs : les piles mystère de [Razor Shark](/machines-a-sous/razor-shark/), qui révèlent des multiplicateurs jusqu'à 2 500×, ou les pots de confiture de [Jammin' Jars](/machines-a-sous/jammin-jars/), des wilds qui se déplacent et dont le multiplicateur augmente à chaque gain.",
      "Point commun : des multiplicateurs qui peuvent grimper très haut, et donc une volatilité élevée."
    ],
    aSavoir: [
      '**Plusieurs versions de RTP** : 96,7 %, 95,05 % et 90,52 % pour Razor Shark ; 96,83 %, 95,25 % et 94,24 % pour Jammin’ Jars.',
      '**Les gains maximaux annoncés varient selon les sources** : nous n’affichons un plafond que lorsqu’il est cohérent.',
      '**La volatilité est élevée** : adaptez la mise pour tenir au moins une centaine de tours.'
    ],
    faq: [
      {
        q: 'Quel est le RTP de Razor Shark ?',
        r: '96,7 % dans sa meilleure version, avec des versions à 95,05 % et 90,52 % recensées par SlotCatalog.'
      },
      {
        q: 'Push Gaming est-il un bon fournisseur ?',
        r: 'Ses jeux sont appréciés pour leurs mécaniques originales. Comme pour tout fournisseur, le plus important est la version de RTP installée par le casino : vérifiez-la dans l’aide du jeu.'
      }
    ],
    sources: [SC, { titre: "OLBG, fiche Jammin' Jars", url: 'https://www.olbg.com/slots/games/jammin-jars' }],
    modifie: M
  },
  {
    id: 'play-n-go',
    nom: "Play'n GO",
    volume: 210,
    titre: "Play'n GO : Book of Dead, Reactoonz, RTP et versions",
    description:
      "Play'n GO : Book of Dead, Legacy of Dead, Reactoonz… Jusqu'à cinq versions de RTP par jeu : le fournisseur où vérifier le RTP compte le plus.",
    h1: "Play'n GO : le fournisseur où vérifier le RTP compte le plus",
    chapeau:
      "Book of Dead est la deuxième machine la plus recherchée au Canada. Mais chez Play'n GO, le même jeu peut rendre 12 points de moins selon le casino.",
    presentation: [
      "Environ **210 recherches par mois au Canada** portent sur Play'n GO, mais ses jeux sont bien plus recherchés que son nom : [Book of Dead](/machines-a-sous/book-of-dead/) atteint à lui seul environ 1 300 recherches mensuelles. Le studio est aussi derrière [Legacy of Dead](/machines-a-sous/legacy-of-dead/), [Reactoonz](/machines-a-sous/reactoonz/), [Rise of Olympus](/machines-a-sous/rise-of-olympus/) et [Fire Joker](/machines-a-sous/fire-joker/).",
      "Le point le plus important : sur quatre de ces cinq jeux, SlotCatalog recense **cinq réglages de RTP**, du meilleur (de 96,21 % à 96,58 % selon le jeu) au plus bas (de 84,18 % à 84,55 %). C'est le casino qui choisit. Sur 1 000 $ misés, l'écart de retour théorique atteint environ 120 $."
    ],
    aSavoir: [
      '**Vérifiez toujours le RTP dans l’aide du jeu** : c’est sur les jeux Play’n GO que l’écart entre versions est le plus grand de notre sélection.',
      '**Les jeux « Book »** (Book of Dead, Legacy of Dead) reposent sur un symbole tiré au hasard qui s’étend pendant les tours gratuits.',
      '**Reactoonz et Fire Joker n’ont pas de tours gratuits** : leurs fonctions se déclenchent en jeu de base.'
    ],
    faq: [
      {
        q: "Pourquoi le RTP des jeux Play'n GO varie-t-il autant ?",
        r: "Le fournisseur propose plusieurs réglages aux casinos, qui choisissent celui qu'ils installent. Pour Book of Dead, SlotCatalog recense des versions de 96,21 % à 84,18 %."
      },
      {
        q: "Comment savoir quelle version d'un jeu Play'n GO est installée ?",
        r: "Ouvrez l'écran d'aide ou d'information du jeu : le RTP de la version installée y est en général indiqué."
      }
    ],
    sources: [{ titre: "Play'n GO, fiche officielle Book of Dead", url: 'https://www.playngo.com/games/book-of-dead' }, SC],
    modifie: M
  },
  {
    id: 'netent',
    nom: 'NetEnt',
    volume: 170,
    titre: 'NetEnt : Starburst, Gonzo’s Quest, RTP et histoire',
    description:
      'NetEnt, propriété d’Evolution depuis 2020 : Starburst, Gonzo’s Quest et les avalanches. Leurs vrais RTP, leur volatilité et ce qu’ils valent encore.',
    h1: 'NetEnt : les classiques Starburst et Gonzo’s Quest',
    chapeau:
      "NetEnt a créé deux des machines à sous les plus connues du jeu en ligne. Elles restent très recherchées, pour de bonnes raisons et quelques limites.",
    presentation: [
      "Depuis décembre 2020, NetEnt appartient au groupe Evolution, spécialiste du [casino en direct](/casino-en-direct/). Environ **170 recherches par mois au Canada** portent sur son nom.",
      "Ses deux titres de notre sélection ont marqué le secteur : [Gonzo's Quest](/machines-a-sous/gonzos-quest/), sorti en 2011, a popularisé les avalanches, ces cascades qui augmentent le multiplicateur à chaque gain ; [Starburst](/machines-a-sous/starburst/), à volatilité faible, reste une référence pour faire durer un petit budget."
    ],
    aSavoir: [
      '**Starburst est peu volatil**, mais son gain maximal est limité à 800 fois la mise.',
      '**Gonzo’s Quest existe en plusieurs versions** : une version Megaways a été créée par Red Tiger, studio du même groupe.',
      '**Les RTP sont proches de 96 %** : 96,08 % pour Starburst et 95,97 % pour Gonzo’s Quest, selon les fiches officielles de NetEnt.'
    ],
    faq: [
      {
        q: 'NetEnt appartient-il à Evolution ?',
        r: 'Oui. Evolution a finalisé l’achat de NetEnt en décembre 2020.'
      },
      {
        q: 'Quel est le jeu NetEnt le plus recherché au Canada ?',
        r: 'Starburst, avec environ 210 recherches mensuelles pour « starburst slot », devant Gonzo’s Quest (environ 170).'
      }
    ],
    sources: [
      {
        titre: 'Yogonet, Evolution finalise l’achat de NetEnt (décembre 2020)',
        url: 'https://www.yogonet.com/international/news/2020/12/02/55655-evolution-completes-acquisition-of-netent-starts-total-integration'
      },
      { titre: "Wikipédia (anglais), Gonzo's Quest", url: 'https://en.wikipedia.org/wiki/Gonzo%27s_Quest' },
      SC
    ],
    modifie: M
  },
  {
    id: 'novomatic',
    nom: 'Novomatic',
    volume: 110,
    titre: 'Novomatic : Book of Ra, Sizzling Hot, RTP et versions',
    description:
      'Novomatic et Greentube : Book of Ra Deluxe et Sizzling Hot Deluxe, les classiques des salles de jeu. Leurs vrais RTP et leurs versions plus basses.',
    h1: 'Novomatic : les classiques des salles de jeu, en ligne',
    chapeau:
      "Book of Ra et Sizzling Hot viennent des salles de jeu européennes. En ligne, ils sont distribués par Greentube, la branche numérique du groupe autrichien Novomatic.",
    presentation: [
      "Environ **110 recherches par mois au Canada** portent sur Novomatic. Ses jeux en ligne sont publiés par **Greentube**, que SlotCatalog présente comme propulsé par Novomatic.",
      "Leur style est volontairement simple : peu de lignes, peu de fonctions, et un « quitte ou double » après les gains. [Book of Ra](/machines-a-sous/book-of-ra/) a lancé la mode des jeux « Book », reprise ensuite par [Book of Dead](/machines-a-sous/book-of-dead/) ; [Sizzling Hot Deluxe](/machines-a-sous/sizzling-hot/) est une machine à fruits sans wild ni tours gratuits."
    ],
    aSavoir: [
      '**Des RTP plus bas que la moyenne** : 95,1 % pour Book of Ra Deluxe et 95,66 % pour Sizzling Hot Deluxe selon SlotCatalog, qui cite aussi des versions à 92,28 % et 90,02 % pour Sizzling Hot.',
      '**Le « quitte ou double »** ne change pas vos chances à long terme : il augmente seulement les écarts.',
      '**Peu de fonctions bonus** : les gains dépendent surtout des combinaisons de base.'
    ],
    faq: [
      {
        q: 'Quelle différence entre Novomatic et Greentube ?',
        r: 'Novomatic est le groupe. Greentube est la marque qui publie ses jeux en ligne, comme Book of Ra Deluxe et Sizzling Hot Deluxe.'
      },
      {
        q: 'Book of Ra est-il le premier jeu « Book » ?',
        r: 'C’est le jeu qui a popularisé le genre : un symbole tiré au hasard s’étend pendant les tours gratuits. De nombreux jeux, comme Book of Dead, ont repris ce principe.'
      }
    ],
    sources: [SC],
    modifie: M
  },
  {
    id: 'big-time-gaming',
    nom: 'Big Time Gaming',
    volume: 70,
    titre: 'Big Time Gaming : le créateur des Megaways, Bonanza',
    description:
      'Big Time Gaming a créé le système Megaways et Bonanza. Ce que sont les Megaways, qui les utilise et ce qu’il faut savoir sur leur volatilité.',
    h1: 'Big Time Gaming, le studio qui a inventé les Megaways',
    chapeau:
      "Le nom vous est peut-être inconnu, mais son invention est partout : les Megaways, ces rouleaux dont la hauteur change à chaque tour.",
    presentation: [
      "Big Time Gaming (BTG) a créé le système **Megaways** : à chaque tour, chaque rouleau affiche un nombre différent de symboles, ce qui fait varier le nombre de façons de gagner, jusqu'à 117 649 sur [Bonanza](/machines-a-sous/bonanza/). Le studio appartient au groupe Evolution depuis 2021.",
      "Le système est aujourd'hui utilisé par d'autres fournisseurs, dont [Pragmatic Play](/fournisseurs/pragmatic-play/) avec [Buffalo King Megaways](/machines-a-sous/buffalo-king-megaways/) ou [Great Rhino Megaways](/machines-a-sous/great-rhino-megaways/). Environ **70 recherches par mois au Canada** portent sur le nom du studio."
    ],
    aSavoir: [
      '**Les Megaways sont en général très volatils** : tous les jeux de ce type dans notre sélection sont classés à volatilité élevée.',
      '**Le nombre de façons de gagner change à chaque tour** : un chiffre comme « 117 649 » est un maximum, pas une moyenne.',
      '**Sur Bonanza, le multiplicateur des tours gratuits ne redescend jamais** : il augmente de 1 à chaque gain.'
    ],
    faq: [
      {
        q: 'Qu’est-ce qu’un jeu Megaways ?',
        r: 'Un jeu dont chaque rouleau affiche un nombre variable de symboles à chaque tour, ce qui change le nombre de façons de gagner. Le système a été créé par Big Time Gaming.'
      },
      {
        q: 'Big Time Gaming appartient-il à Evolution ?',
        r: 'Oui. Evolution a finalisé l’achat de Big Time Gaming en 2021.'
      }
    ],
    sources: [
      {
        titre: 'PR Newswire, Evolution finalise l’achat de Big Time Gaming (2021)',
        url: 'https://prnewswire.com/news-releases/evolution-completes-acquisition-of-big-time-gaming-and-issues-shares-to-the-sellers-301323385.html'
      },
      SC
    ],
    modifie: M
  }
];

for (const f of BRUT) {
  if (f.titre.length > 62) throw new Error(`Titre trop long (${f.titre.length}) : fournisseur ${f.id}`);
  if (f.description.length > 158 || f.description.length < 70) throw new Error(`Description hors limites (${f.description.length}) : fournisseur ${f.id}`);
}

export const FOURNISSEURS: Fournisseur[] = typoProfond(BRUT);

export function fournisseur(id: string): Fournisseur | undefined {
  return FOURNISSEURS.find((f) => f.id === id);
}

export function cheminFournisseur(f: Pick<Fournisseur, 'id'>): string {
  return `/fournisseurs/${f.id}/`;
}
