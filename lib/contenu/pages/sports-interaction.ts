import type { PageGuide } from './types';
import { CASINOS, cheminCasino, miseTexte, type Casino } from '@/lib/casinos';
import { dernier } from '@/lib/tests';
import { CTA_BETPORTAL, CTA_ROLLETTO, CTA_VELOBET } from './canada-sport';

/**
 * Avis Sports Interaction (17 novembre 2026). Marque sans entente avec nous : aucun lien vers elle,
 * nos casinos en haut de page. Tout vient de ses pages officielles, relues le 17 novembre 2026.
 */
const MAJ = '2026-11-17';

const SI = {
  sport: { titre: 'Sports Interaction : offres de bienvenue sport (page promotions)', url: 'https://www.sportsinteraction.com/fr/p/promotions/sports/welcome-dual' },
  casino: { titre: 'Sports Interaction : bonus de bienvenue casino de 100 % jusqu’à 3 000 $', url: 'https://www.sportsinteraction.com/fr/p/promotions/casino/welcome-3000-dual-cta' },
  conditions: { titre: 'Sports Interaction : conditions générales (licence, âge, inactivité)', url: 'https://help.sportsinteraction.com/fr/general-information/legal-matters/general-terms-and-conditions/general' },
  interac: { titre: 'Sports Interaction : aide Interac e-Transfer (dépôts et retraits)', url: 'https://help.sportsinteraction.com/fr/general-information/payments/payment-methods/interacetransfer' },
  interacEn: { titre: 'Sports Interaction : aide Interac e-Transfer, version anglaise (8 heures après approbation)', url: 'https://help.sportsinteraction.com/en-CA/general-information/payments/payment-methods/interacetransfer' },
  moyens: { titre: 'Sports Interaction : moyens de paiement (centre d’aide)', url: 'https://help.sportsinteraction.com/fr/general-information/payments/payment-methods' },
  rachat: { titre: 'Covers : Entain rachète Avid Gaming, propriétaire de Sports Interaction (février 2022)', url: 'https://www.covers.com/industry/entain-sports-interaction-acquisition-february-2022' },
  app: { titre: 'App Store : fiche de l’application Sports Interaction', url: 'https://apps.apple.com/ca/app/id6444409687' }
};

const PAR_ID = (id: string) => CASINOS.find((c) => c.id === id);
const SPORT = ['velobet', 'rolletto', 'betportal'].map(PAR_ID).filter((c): c is Casino => Boolean(c));
const heures = (n?: number | null) => (n === null || n === undefined ? 'non mesuré' : `${n} h`);
const lien = (c: Casino) => `[${c.nom}](${cheminCasino(c)})`;
const retraitTeste = (c: Casino) => `Crypto : ${heures(dernier(c, 'crypto')?.delaiHeures)} ; carte : ${heures(dernier(c, 'carte')?.delaiHeures)} (notre test)`;
const VELO = PAR_ID('velobet');
const CRYPTO_VELO = VELO ? dernier(VELO, 'crypto')?.delaiHeures : undefined;

const sportsInteraction: PageGuide = {
  chemin: '/sports-interaction/',
  nomFil: 'Sports Interaction',
  parent: { nom: 'Paris sportifs', chemin: '/paris-sportifs-quebec/' },
  titre: 'Sports Interaction au Québec : avis, bonus et retraits 2026',
  description:
    'Sports Interaction au Québec : bonus sport de 125 % jusqu’à 750 $, bonus casino de 3 000 $, délais de retrait Interac, licence de Kahnawake. Notre avis.',
  h1: 'Sports Interaction : notre avis pour les joueurs du Québec',
  chapeau:
    'Sports Interaction est l’un des sites de paris les plus cherchés au Canada. Nous avons lu ses offres, ses conditions et son centre d’aide pour vous dire ce qu’il exige vraiment, et quand nos sites de paris font mieux.',
  modifie: MAJ,
  offresHaut: SPORT.map((c) => c.id),
  resume: 'Sports Interaction décortiqué : bonus sport et casino, retraits, licence et alternatives.',
  sections: [
    {
      id: 'en-bref',
      titre: 'Sports Interaction en bref',
      blocs: [
        {
          type: 'tableau',
          legende: 'Informations relevées sur les pages officielles de Sports Interaction le 17 novembre 2026.',
          entetes: ['', 'Sports Interaction'],
          lignes: [
            ['Exploitant', 'ElectraWorks Limited, Gibraltar (pied de page du site)'],
            ['Licence', 'Commission des jeux de Kahnawake, référence 899 (conditions générales)'],
            ['Groupe', 'Entain, qui a annoncé le rachat d’Avid Gaming, propriétaire de la marque, le 7 février 2022'],
            ['Âge minimum', '19 ans ou plus, selon ses conditions générales'],
            ['Produits', 'Paris sportifs et casino en ligne'],
            ['Bonus sport', 'Au choix : pari sans souci jusqu’à 500 $ ou 125 % jusqu’à 750 $'],
            ['Bonus casino', '100 % jusqu’à 3 000 $, mise de 30 fois le bonus en 14 jours'],
            ['Paiements', 'Interac e-Transfer, Visa, Mastercard, Apple Pay, virement bancaire'],
            ['Cryptomonnaies', 'Absentes de la liste des moyens de paiement de son centre d’aide'],
            ['Langue', 'Site et centre d’aide en français']
          ]
        },
        {
          type: 'p',
          texte:
            'Nous n’avons pas d’entente commerciale avec Sports Interaction et nous n’y avons pas ouvert de compte : cette page s’appuie sur ses pages officielles. Les sites de notre comparatif, eux, font l’objet de [tests réels de dépôt et de retrait](/delais-de-retrait-casino/), répétés environ tous les 3 jours.'
        }
      ]
    },
    {
      id: 'legal',
      titre: 'Sports Interaction est-il légal au Québec ?',
      blocs: [
        {
          type: 'p',
          texte:
            'Sports Interaction est autorisé par la **Commission des jeux de Kahnawake**, sur le territoire mohawk de Kahnawà:ke, près de Montréal (licence 899 selon ses conditions générales). En 2022, Covers expliquait que la marque est exploitée au Canada par une entité du Conseil mohawk de Kahnawà:ke, avec les services d’Avid Gaming.'
        },
        {
          type: 'p',
          texte:
            'Ce n’est pas une autorisation du gouvernement du Québec : dans la province, seul Loto-Québec est autorisé à offrir des paris sportifs, avec [Mise-o-jeu](/mise-o-jeu/). En cas de litige avec Sports Interaction, votre recours passe par la Commission des jeux de Kahnawake, pas par un organisme québécois. Le détail de la loi est sur notre page [paris sportifs au Québec](/paris-sportifs-quebec/).'
        }
      ]
    },
    {
      id: 'bonus-sport',
      titre: 'Le bonus sport : deux offres au choix',
      blocs: [
        {
          type: 'p',
          texte: 'Les nouveaux clients choisissent une seule des deux offres, sans code, au moment de l’inscription. Les deux sont annoncées jusqu’au 31 décembre 2026.'
        },
        {
          type: 'tableau',
          legende: 'Conditions lues sur la page promotions sport de Sports Interaction le 17 novembre 2026.',
          entetes: ['', 'Pari sans souci de 500 $', 'Bonus de 125 % jusqu’à 750 $'],
          lignes: [
            ['Dépôt minimum', '10 $', '10 $'],
            ['Principe', 'Si votre premier pari avec le jeton perd, vous recevez un pari bonus du même montant, jusqu’à 500 $', '125 % de votre premier dépôt en bonus, jusqu’à 750 $'],
            ['Condition', 'Pari bonus à utiliser en 7 jours, à une cote de 1,5 minimum ; le gain n’inclut pas la mise', 'Miser 6 fois (dépôt + bonus) en 60 jours, à une cote de 1,5 minimum'],
            ['Argent bloqué', 'Les paris bonus ne peuvent pas être retirés', 'Dépôt, bonus et gains restent bloqués jusqu’à la fin des mises'],
            ['À réclamer', 'Dans les 10 jours après l’ouverture du compte', 'Dans les 10 jours ; bonus valable 60 jours']
          ]
        },
        {
          type: 'encadre',
          titre: 'Exemple avec le bonus de 125 % : dépôt de 100 $',
          texte:
            'Bonus : 125 $. Mise à atteindre : 6 × (100 $ + 125 $) = **1 350 $ de paris** en 60 jours, à une cote de 1,5 ou plus. Votre dépôt de 100 $ reste bloqué avec le bonus jusqu’à la fin. Si vous retirez avant, le bonus et ses gains sont annulés.'
        },
        {
          type: 'p',
          texte:
            'Sur le papier, c’est moins exigeant que les bonus sport de [Velobet](/velobet-casino/) et [Rolletto](/rolletto-casino/) (15 fois dépôt + bonus, en paris combinés). Mais le pari sans souci ne rembourse qu’en pari bonus, jamais en argent retirable : sa vraie valeur est bien inférieure à 500 $. Notre comparatif de tous les [bonus paris sportifs](/bonus-paris-sportifs/) donne les autres offres.'
        }
      ]
    },
    {
      id: 'bonus-casino',
      titre: 'Le bonus casino de 3 000 $',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Offre** : 100 % de votre premier dépôt, jusqu’à 3 000 $, dès 10 $ de dépôt.',
            '**Mise** : 30 fois le montant du bonus, en 14 jours, sur les jeux qualifiants seulement.',
            '**Jeux qualifiants** : une liste de machines à sous (dont Gates of Olympus, Sweet Bonanza, Big Bass Bonanza), les machines à jackpot, le blackjack et le blackjack en direct.',
            '**Délai** : dépôt à faire dans les 10 jours suivant l’ouverture du compte.',
            '**Argent bloqué** : dépôt, bonus et gains restent « restreints » jusqu’à la fin des mises.'
          ]
        },
        {
          type: 'encadre',
          titre: 'Exemple : dépôt de 100 $',
          texte:
            'Bonus : 100 $. Mise à atteindre : 30 × 100 $ = **3 000 $ de mises** en 14 jours, soit environ 215 $ par jour. Le plafond de 3 000 $ ne compte que si vous déposez 3 000 $ : la mise grimpe alors à 90 000 $ dans le même délai.'
        },
        {
          type: 'p',
          texte: `À titre de comparaison, la mise de nos casinos : ${SPORT.map((c) => `${lien(c)} ${miseTexte(c)}`).join(' ; ')}. Le détail de chaque offre est dans notre [comparatif des bonus casino](/bonus-casino-quebec/).`
        }
      ]
    },
    {
      id: 'retraits',
      titre: 'Dépôts et retraits chez Sports Interaction',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Moyens affichés** : Interac e-Transfer, Visa, Mastercard, Apple Pay, virement bancaire et virement bancaire rapide. Tout se fait en dollars canadiens.',
            '**Dépôt Interac** : instantané, ou jusqu’à 15 minutes selon la banque, sans frais.',
            '**Retrait Interac** : chaque retrait est d’abord approuvé par son équipe de contrôle, en **jusqu’à 2 jours ouvrés**. Pour recevoir l’argent ensuite, la version française de son centre d’aide annonce **1 à 3 jours ouvrés**, la version anglaise **8 heures au plus**. Pas de frais.',
            '**Vérification d’identité** : obligatoire pour confirmer votre âge et votre identité.'
          ]
        },
        {
          type: 'p',
          texte: `Au pire, un retrait Interac peut donc prendre jusqu’à 5 jours ouvrés selon la version française de son centre d’aide.${CRYPTO_VELO ? ` Lors de notre dernier test, un retrait en crypto chez Velobet est arrivé en ${CRYPTO_VELO} h.` : ''} Tous nos délais mesurés sont dans le [classement des casinos à retrait rapide](/casino-retrait-rapide/).`
        }
      ]
    },
    {
      id: 'comparaison',
      titre: 'Sports Interaction ou nos sites de paris ?',
      blocs: [
        {
          type: 'tableau',
          legende: 'Offres sport relevées sur les pages promotions (Sports Interaction le 17 novembre 2026, nos sites le 4 et le 9 novembre 2026).',
          entetes: ['Site', 'Bonus sport', 'Condition', 'Retrait', 'Crypto'],
          lignes: [
            ['Sports Interaction', '125 % jusqu’à 750 $ ou pari sans souci de 500 $', '6 fois (dépôt + bonus), cote de 1,5 minimum', 'Jusqu’à 2 jours ouvrés d’approbation, puis de 8 h à 3 jours ouvrés selon son aide (Interac)', 'Non'],
            ...SPORT.map((c) => {
              const cta = [CTA_VELOBET, CTA_ROLLETTO, CTA_BETPORTAL].find((x) => x.casino === c.id);
              return [
                lien(c),
                cta ? cta.titre : 'Paris sportifs proposés',
                c.id === 'betportal' ? 'Combiné d’avant-match de 3 à 10 sélections, cote totale de 3,00 à 10,00' : '15 fois (dépôt + bonus), combinés de 3 sélections ou plus',
                retraitTeste(c),
                c.paiements.crypto.length || dernier(c, 'crypto') ? 'Oui' : 'Non'
              ];
            })
          ]
        },
        {
          type: 'p',
          texte:
            '**Ce que Sports Interaction fait mieux** : un bonus sport moins exigeant, un site connu au Canada et des paiements Interac en dollars canadiens. **Ce que nos sites font mieux** : la crypto, des retraits mesurés en heures lors de nos tests, et des bonus de bienvenue casino avec des tours gratuits.'
        },
        CTA_VELOBET,
        CTA_ROLLETTO,
        CTA_BETPORTAL
      ]
    },
    {
      id: 'a-savoir',
      titre: 'À savoir avant de s’inscrire',
      blocs: [
        {
          type: 'liste',
          items: [
            '**Compte inactif** : sans connexion, pari ni dépôt pendant 365 jours, le compte devient inactif et des frais administratifs peuvent être prélevés tous les 30 jours. Après 18 mois d’inactivité, le compte peut être fermé et son solde retenu ; il reste possible de le réclamer en contactant le service client.',
            '**Application** : la fiche App Store que nous avons consultée renvoie aux règles de l’Ontario et de l’Alberta. Nous n’avons pas confirmé d’application pour le Québec : le site s’ouvre aussi dans le navigateur du téléphone.',
            '**Ontario et Alberta** : le site sépare l’Ontario du « reste du Canada ». Cette page concerne le reste du Canada, hors Ontario et Alberta, comme tout notre site.',
            '**Jeu responsable** : fixez une limite de dépôt dès l’ouverture du compte. Notre page [jeu responsable](/jeu-responsable/) liste les outils et l’aide gratuite au Québec.'
          ]
        }
      ]
    }
  ],
  faq: [
    {
      q: 'Sports Interaction est-il fiable ?',
      r: 'Il est exploité par ElectraWorks Limited et appartient au groupe britannique Entain. Il détient une licence de la Commission des jeux de Kahnawake. Son centre d’aide annonce des retraits Interac approuvés en jusqu’à 2 jours ouvrés.'
    },
    {
      q: 'Sports Interaction est-il légal au Québec ?',
      r: 'Il est autorisé par la Commission des jeux de Kahnawake, pas par le gouvernement du Québec. Au Québec, seul Loto-Québec est autorisé à offrir des paris sportifs, avec Mise-o-jeu.'
    },
    {
      q: 'Quel est le bonus de bienvenue de Sports Interaction ?',
      r: 'En sport, au choix : un pari sans souci jusqu’à 500 $ (remboursé en pari bonus si votre pari perd) ou 125 % de votre premier dépôt jusqu’à 750 $, à miser 6 fois (dépôt + bonus) en 60 jours. En casino : 100 % jusqu’à 3 000 $, à miser 30 fois le bonus en 14 jours.'
    },
    {
      q: 'Faut-il un code promo Sports Interaction ?',
      r: 'Non, pas pour l’offre de bienvenue : vous la choisissez sur sa page promotions au moment de l’inscription. Nous n’avons pas de code exclusif.'
    },
    {
      q: 'Combien de temps prend un retrait chez Sports Interaction ?',
      r: 'Selon son centre d’aide, un retrait Interac est approuvé en jusqu’à 2 jours ouvrés. L’argent arrive ensuite en 1 à 3 jours ouvrés selon la version française de l’aide, en 8 heures au plus selon la version anglaise. Pas de frais.'
    },
    {
      q: 'À qui appartient Sports Interaction ?',
      r: 'Au groupe britannique Entain, qui a annoncé le 7 février 2022 le rachat d’Avid Gaming, propriétaire de la marque. Le site est exploité par ElectraWorks Limited, à Gibraltar.'
    },
    {
      q: 'Quel âge faut-il avoir pour jouer chez Sports Interaction ?',
      r: 'Ses conditions générales demandent 19 ans ou plus. Au Québec, l’âge légal pour jouer est de 18 ans, mais c’est la règle du site qui s’applique chez lui.'
    }
  ],
  sources: [SI.sport, SI.casino, SI.conditions, SI.interac, SI.interacEn, SI.moyens, SI.rachat, SI.app],
  connexes: ['/paris-sportifs-quebec/', '/sites-paris-sportifs-canada/', '/bonus-paris-sportifs/', '/mise-o-jeu/']
};

export default [sportsInteraction];
