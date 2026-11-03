import { typoProfond } from '@/lib/typo';

export type Duel = {
  resume: string;
  verdict: string[];
  choisirA: string[];
  choisirB: string[];
};

/** Clé = adresse de la page (ordre du fichier de données). */
export const DUELS: Record<string, Duel> = typoProfond<Record<string, Duel>>({
  'rolletto-vs-celsius': {
    resume: "Rolletto l'emporte sur la transparence et la taille du bonus ; Celsius sur le délai de mise et le catalogue.",
    verdict: [
      "Rolletto affiche son exploitant et un numéro de licence vérifiable, ce que Celsius ne fait qu'à moitié (licence d'Anjouan sans numéro). Son pack monte jusqu'à 5 500 $, alors que Celsius n'affiche pas de plafond.",
      "Sur la mise, les deux sont exigeants mais différemment : Rolletto demande 30 fois (dépôt + bonus) en 5 jours, Celsius 50 fois (dépôt + bonus) en 20 jours. Pour 100 de dépôt au premier palier, c'est 7 500 à miser en 5 jours chez Rolletto contre 10 000 en 20 jours chez Celsius. Le joueur intensif préférera Rolletto ; le joueur plus lent trouvera le délai de Celsius moins stressant, mais la somme à miser reste plus élevée."
    ],
    choisirA: ['Vous voulez un exploitant et une licence vérifiables', 'Vous jouez aux machines à sous plusieurs jours de suite', 'Vous visez le plus gros pack de bienvenue'],
    choisirB: ['Vous voulez le plus grand choix de jeux en direct', 'Vous préférez connaître les limites de retrait à l’avance', 'Vous voulez plus de temps pour compléter la mise']
  },
  'rolletto-vs-betportal': {
    resume: 'BetPortal a le bonus le plus facile à débloquer ; Rolletto, la transparence et le plus gros montant.',
    verdict: [
      "C'est le duel le plus intéressant du comparatif. BetPortal calcule la mise sur le bonus seulement (30 fois), ce qui réduit fortement la somme à miser : 4 500 pour un dépôt de 100 au premier palier, contre 7 500 chez Rolletto.",
      "Mais Rolletto affiche son exploitant et son numéro de licence, alors que BetPortal n'affiche ni l'un ni l'autre. Si la sécurité de vos fonds passe avant tout, Rolletto est le choix logique ; si vous cherchez un bonus réaliste et acceptez de commencer petit, BetPortal est plus avantageux."
    ],
    choisirA: ['La transparence de l’exploitant est votre priorité', 'Vous visez un gros pack sur trois dépôts', 'Vous jouez aussi aux esports'],
    choisirB: ['Vous voulez la mise la plus légère', 'Vous aimez les remises en argent quotidiennes', 'Vous acceptez de tester avec un petit dépôt']
  },
  'rolletto-vs-1win': {
    resume: 'Rolletto est vérifiable de bout en bout ; 1win mise sur le volume mais reste à confirmer.',
    verdict: [
      "Rolletto publie ses conditions de mise, son exploitant et sa licence. Pour 1win, nous n'avons pas pu confirmer ces trois éléments. À offre comparable, c'est ce qui fait toute la différence dans notre grille.",
      "1win garde un avantage : plus de 11 000 jeux annoncés et un bonus étalé sur quatre dépôts avec 500 tours gratuits. Il conviendra au joueur expérimenté qui lira les conditions lui-même."
    ],
    choisirA: ['Vous voulez des conditions publiées et vérifiables', 'Vous voulez un exploitant identifiable', 'Vous jouez aux paris sportifs et aux esports'],
    choisirB: ['Vous voulez le plus grand catalogue possible', 'Vous préférez un bonus étalé sur quatre dépôts', 'Vous lirez vous-même les conditions de mise']
  },
  'celsius-vs-betportal': {
    resume: 'BetPortal gagne nettement sur le bonus ; Celsius sur la transparence de l’exploitant et des retraits.',
    verdict: [
      "Sur le bonus, il n'y a pas de match : BetPortal demande 30 fois le bonus, Celsius 50 fois le dépôt plus le bonus. Pour un dépôt de 100 au premier palier, cela fait 4 500 à miser chez BetPortal contre 10 000 chez Celsius.",
      "Celsius reprend l'avantage sur la transparence : il nomme son exploitant et publie ses limites de retrait (2 500 € par semaine). BetPortal n'affiche ni exploitant ni numéro de licence, et nous n'avons pas trouvé ses règles de retrait."
    ],
    choisirA: ['Vous voulez connaître les règles de retrait avant de jouer', 'Vous voulez un exploitant nommé', 'Vous jouez sans bonus ou avec un petit dépôt'],
    choisirB: ['Vous voulez débloquer un bonus réaliste', 'Vous aimez les promotions récurrentes', 'Vous voulez des tours gratuits dès le premier dépôt']
  },
  'celsius-vs-1win': {
    resume: 'Deux catalogues géants : Celsius est plus transparent, 1win plus généreux en apparence.',
    verdict: [
      "Les deux casinos misent sur le volume de jeux. Celsius l'emporte sur la transparence : exploitant nommé, conditions de mise publiées et limites de retrait chiffrées. Pour 1win, ces informations n'ont pas pu être confirmées.",
      "1win propose plus de tours gratuits (500 sur quatre dépôts) et un bonus étalé sur plus de dépôts. Mais sans conditions de mise confirmées, impossible de dire s'il est plus facile à débloquer que celui de Celsius."
    ],
    choisirA: ['Vous voulez des règles écrites et chiffrées', 'Vous payez par portefeuille électronique ou par carte', 'Vous préférez un délai de mise connu (20 jours)'],
    choisirB: ['Vous voulez beaucoup de tours gratuits', 'Vous déposez en USDT', 'Vous voulez un bonus sur quatre dépôts']
  },
  'betportal-vs-1win': {
    resume: 'BetPortal a des conditions de mise publiées et légères ; 1win reste à vérifier.',
    verdict: [
      "Les deux sites ont un point faible commun : l'exploitant et la licence ne sont pas confirmés. La différence se fait sur le bonus : BetPortal publie une condition de mise de 30 fois le bonus, l'une des plus légères du marché, alors que celle de 1win n'a pas pu être vérifiée.",
      "1win annonce un catalogue plus large (plus de 11 000 jeux contre plus de 7 000) et davantage de tours gratuits (500 contre 250)."
    ],
    choisirA: ['Vous voulez une condition de mise connue et légère', 'Vous aimez la remise en argent quotidienne', 'Vous jouez aux jeux de crash'],
    choisirB: ['Vous voulez le catalogue le plus large', 'Vous voulez un maximum de tours gratuits', 'Vous déposez en USDT']
  }
});
