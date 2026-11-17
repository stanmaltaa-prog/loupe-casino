import type { PageGuide } from './types';
import { CASINOS, cheminCasino, miseTexte, type Casino } from '@/lib/casinos';
import { dernier } from '@/lib/tests';

/**
 * Avis PowerPlay (17 novembre 2026). Marque sans entente avec nous pour l'instant : aucun lien vers elle,
 * nos casinos en haut de page. Tout vient de ses pages officielles, relues le 17 novembre 2026.
 */
const MAJ = '2026-11-17';

const PP = {
  sport: { titre: 'PowerPlay : bonus sport de 100 % jusqu’à 500 $ (conditions)', url: 'https://www.powerplay.com/promotions/500-sports' },
  casino: { titre: 'PowerPlay : bonus de bienvenue casino de 100 % jusqu’à 200 $ (conditions)', url: 'https://www.powerplay.com/promotions/casino-welcome-bonus' },
  paiements: { titre: 'PowerPlay : aide aux dépôts et retraits (limites et délais)', url: 'https://www.powerplay.com/payment-options' },
  conditions: { titre: 'PowerPlay : conditions générales (pays exclus, âge, comptes dormants)', url: 'https://www.powerplay.com/documents/terms-and-conditions' },
  apropos: { titre: 'PowerPlay : à propos (licence, lancement en 2018, Ontario)', url: 'https://www.powerplay.com/about/' }
};

const PAR_ID = (id: string) => CASINOS.find((c) => c.id === id);
const NOS = ['velobet', 'rolletto', 'betportal'].map(PAR_ID).filter((c): c is Casino => Boolean(c));
const heures = (n?: number | null) => (n === null || n === undefined ? 'non mesuré' : `${n} h`);
const lien = (c: Casino) => `[${c.nom}](${cheminCasino(c)})`;

const powerplay: PageGuide = {
  chemin: '/powerplay-casino/',
  nomFil: 'PowerPlay',
  titre: 'PowerPlay Casino au Québec : avis, bonus et retraits 2026',
  description:
    'PowerPlay au Québec : bonus casino de 200 $ et bonus sport de 500 $ décortiqués, retraits Interac et crypto annoncés en 0 à 4 h, licence de Curaçao.',
  h1: 'PowerPlay Casino : notre avis pour les joueurs du Québec',
  chapeau:
    'PowerPlay est un site de casino et de paris pensé pour le Canada, en français et en anglais. Nous avons lu ses offres, ses limites de retrait et ses conditions générales : voici ce qu’il faut savoir avant de déposer.',
  modifie: MAJ,
  titreTop: 'Avant PowerPlay : nos 3 casinos les mieux notés',
  resume: 'PowerPlay décortiqué : bonus casino et sport, retraits, licence et comptes dormants.',
  sections: [
    {
      id: 'en-bref',
      titre: 'PowerPlay en bref',
      blocs: [
        {
          type: 'tableau',
          legende: 'Informations relevées sur les pages officielles de PowerPlay le 17 novembre 2026.',
          entetes: ['', 'PowerPlay'],
          lignes: [
            ['Exploitant', 'Deck Entertainment B.V., Curaçao (société no 144851)'],
            ['Licence', 'Autorité des jeux de Curaçao, licence OGL/2024/999/0482'],
            ['En ligne depuis', '2018, selon sa page « À propos »'],
            ['Âge minimum', 'Plus de 18 ans, ou l’âge de la majorité du pays, selon ses conditions générales'],
            ['Produits', 'Casino, casino en direct et paris sportifs'],
            ['Bonus casino', '100 % jusqu’à 200 $, mise de 35 fois le bonus en 30 jours'],
            ['Bonus sport', '100 % jusqu’à 500 $, mise de 20 fois le bonus en 30 jours'],
            ['Dépôts', 'Interac, Mastercard, crypto, MuchBetter, Paysafecard : de 10 $ à 5 000 $, sans frais'],
            ['Retraits', 'Interac, crypto, MuchBetter, carte : traités en 0 à 4 h selon PowerPlay, 24 h au plus'],
            ['Service client', 'En français et en anglais, 24 h sur 24, par clavardage, courriel et téléphone']
          ]
        },
        {
          type: 'p',
          texte:
            'Nous n’avons pas d’entente commerciale avec PowerPlay et nous n’y avons pas ouvert de compte : cette page s’appuie sur ses pages officielles. Les casinos de notre comparatif, eux, font l’objet de [tests réels de dépôt et de retrait](/delais-de-retrait-casino/), répétés environ tous les 3 jours.'
        }
      ]
    },
    {
      id: 'legal',
      titre: 'PowerPlay est-il légal au Québec ?',
      blocs: [
        {
          type: 'p',
          texte:
            'PowerPlay.com accepte les joueurs du reste du Canada avec une licence de Curaçao. L’Ontario figure dans sa liste des territoires exclus : les Ontariens passent par un site distinct, enregistré auprès d’iGaming Ontario et de la CAJO depuis 2023, selon sa page « À propos ».'
        },
        {
          type: 'p',
          texte:
            'Au Québec, seul Loto-Québec est autorisé par la province à offrir des jeux d’argent en ligne. Une licence de Curaçao encadre le casino depuis l’étranger : en cas de litige, votre recours passe par l’autorité de Curaçao, pas par un organisme québécois. Le détail est sur notre page [casino en ligne légal au Québec ?](/casino-en-ligne-legal-quebec/).'
        }
      ]
    },
    {
      id: 'bonus-casino',
      titre: 'Le bonus casino : 100 % jusqu’à 200 $',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Offre** : 100 % de votre premier dépôt, jusqu’à 200 $, dès 10 $ de dépôt. Une seule fois.',
            '**Activation** : choisissez l’onglet « UP TO $200 CASINO BONUS » avant de déposer. Si vous sautez cette étape, l’offre n’est plus disponible.',
            '**Mise** : 35 fois le montant du bonus, en 30 jours.',
            '**Mise maximale** : 25 $ par partie ; au-delà, la mise ne compte pas.',
            '**Jeux** : tous les jeux, mais les machines à jackpot progressif ne comptent pas, ni Avalon, Bridesmaids et Sure Win.',
            '**Gain maximal** : 4 000 $ convertis en argent réel.'
          ]
        },
        {
          type: 'encadre',
          titre: 'Exemple : dépôt de 100 $',
          texte:
            'Bonus : 100 $. Mise à atteindre : 35 × 100 $ = **3 500 $ de mises** en 30 jours, soit environ 117 $ par jour, à 25 $ par partie au plus.'
        },
        {
          type: 'p',
          texte: `À titre de comparaison, la mise de nos casinos : ${NOS.map((c) => `${lien(c)} ${miseTexte(c)}`).join(' ; ')}. Le détail de chaque offre est dans notre [comparatif des bonus casino](/bonus-casino-quebec/).`
        }
      ]
    },
    {
      id: 'bonus-sport',
      titre: 'Le bonus sport : 100 % jusqu’à 500 $',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Offre** : 100 % de votre premier dépôt, jusqu’à 500 $, dès 10 $ de dépôt, à choisir avant de déposer.',
            '**Mise** : 20 fois le montant du bonus, en 30 jours, à une cote de 1,5 (-200) ou plus.',
            '**Mise maximale** : 250 $ par pari comptent pour la mise ; parier sur les deux issues d’un même match est interdit.',
            '**Gain maximal** : 4 000 $.'
          ]
        },
        {
          type: 'encadre',
          titre: 'Exemple : dépôt de 100 $',
          texte:
            'Bonus : 100 $. Mise à atteindre : 20 × 100 $ = **2 000 $ de paris** en 30 jours, à une cote de 1,5 ou plus. Les paris simples sont permis, contrairement aux bonus qui imposent des combinés.'
        },
        {
          type: 'p',
          texte: 'Les autres offres sport sont comparées sur notre page [bonus paris sportifs](/bonus-paris-sportifs/).'
        }
      ]
    },
    {
      id: 'retraits',
      titre: 'Dépôts et retraits chez PowerPlay',
      blocs: [
        {
          type: 'tableau',
          legende: 'Limites et délais affichés sur la page d’aide aux paiements de PowerPlay le 17 novembre 2026.',
          entetes: ['Retrait', 'Minimum', 'Maximum par 24 h', 'Traitement par PowerPlay', 'Puis'],
          lignes: [
            ['Interac', '10 $', '3 000 $', '0 à 4 h (24 h au plus)', 'Instantané'],
            ['Crypto', '10 $', '9 999 $', '0 à 4 h (24 h au plus)', '60 minutes'],
            ['MuchBetter', '10 $', '3 000 $', '0 à 4 h', '0 à 4 h'],
            ['Carte', '10 $', '9 999 $', '0 à 4 h (24 h au plus)', 'Instantané']
          ]
        },
        {
          type: 'p',
          texte: `Ce sont des délais annoncés, pas mesurés par nous. PowerPlay précise qu’un retrait peut prendre plus de temps s’il doit d’abord vérifier votre identité. Lors de nos derniers tests, les retraits en crypto sont arrivés en ${NOS.map((c) => `${heures(dernier(c, 'crypto')?.delaiHeures)} chez ${c.nom}`).join(', ')} : tous nos délais sont dans le [classement des casinos à retrait rapide](/casino-retrait-rapide/).`
        }
      ]
    },
    {
      id: 'dormant',
      titre: 'Attention aux comptes dormants',
      blocs: [
        {
          type: 'encadre',
          ton: 'alerte',
          titre: 'Six mois sans transaction suffisent',
          texte:
            'Selon les conditions générales de PowerPlay, un compte sans dépôt, retrait ni pari pendant **6 mois** est considéré comme dormant. Le joueur a alors **14 jours** pour rejouer ou retirer son solde ; ensuite, le compte est fermé et le solde restant est perdu. Retirez votre argent avant de faire une longue pause.'
        }
      ]
    },
    {
      id: 'comparaison',
      titre: 'PowerPlay ou nos casinos ?',
      blocs: [
        {
          type: 'tableau',
          legende: 'Offres relevées sur les pages officielles ; délais de nos casinos mesurés lors de nos tests de novembre 2026.',
          entetes: ['Casino', 'Bonus de bienvenue casino', 'Mise', 'Retrait crypto'],
          lignes: [
            ['PowerPlay', '100 % jusqu’à 200 $', '35 fois le bonus en 30 jours', '0 à 4 h annoncées, 24 h au plus'],
            ...NOS.map((c) => [lien(c), c.offre.titre, miseTexte(c), `${heures(dernier(c, 'crypto')?.delaiHeures)} (notre test)`])
          ]
        },
        {
          type: 'p',
          texte:
            '**Ce que PowerPlay fait bien** : Interac et crypto, des retraits annoncés en quelques heures, un service client en français à toute heure et un bonus sport qui accepte les paris simples. **Ce que nos casinos font mieux** : des bonus de bienvenue plus gros, avec des tours gratuits, et des retraits que nous avons mesurés nous-mêmes.'
        }
      ]
    }
  ],
  faq: [
    {
      q: 'PowerPlay est-il fiable ?',
      r: 'PowerPlay est en ligne depuis 2018. Il est exploité par Deck Entertainment B.V. avec une licence de l’Autorité des jeux de Curaçao (OGL/2024/999/0482) et publie ses limites et délais de retrait. Nous n’y avons pas ouvert de compte : ses délais de retrait sont ceux qu’il annonce.'
    },
    {
      q: 'PowerPlay est-il légal au Québec ?',
      r: 'PowerPlay accepte les joueurs du Québec avec une licence de Curaçao, pas avec une autorisation du gouvernement du Québec. Au Québec, seul Loto-Québec est autorisé par la province à offrir des jeux d’argent en ligne.'
    },
    {
      q: 'Quel est le bonus de bienvenue de PowerPlay ?',
      r: 'En casino : 100 % jusqu’à 200 $, à miser 35 fois le bonus en 30 jours. En sport : 100 % jusqu’à 500 $, à miser 20 fois le bonus en 30 jours à une cote de 1,5 ou plus. Dans les deux cas, choisissez l’offre avant votre premier dépôt de 10 $ minimum.'
    },
    {
      q: 'Combien de temps prend un retrait chez PowerPlay ?',
      r: 'PowerPlay annonce un traitement en 0 à 4 heures, 24 heures au plus. L’argent arrive ensuite instantanément par Interac ou par carte, et en environ 60 minutes en crypto, selon sa page d’aide aux paiements.'
    },
    {
      q: 'Quel est le retrait maximum chez PowerPlay ?',
      r: 'Par 24 heures : 3 000 $ par Interac ou MuchBetter, 9 999 $ en crypto ou par carte, selon sa page d’aide aux paiements.'
    },
    {
      q: 'Que se passe-t-il si je n’utilise plus mon compte PowerPlay ?',
      r: 'Après 6 mois sans dépôt, retrait ni pari, le compte est dormant. PowerPlay laisse 14 jours pour revenir ou retirer ; ensuite, le compte est fermé et le solde restant est perdu, selon ses conditions générales.'
    }
  ],
  sources: [PP.casino, PP.sport, PP.paiements, PP.conditions, PP.apropos],
  connexes: ['/casino-retrait-rapide/', '/bonus-casino-quebec/', '/casino-interac/', '/casino-crypto-quebec/']
};

export default [powerplay];
