import Link from 'next/link';
import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import TopTrois from '@/components/TopTrois';
import { meta } from '@/lib/seo';
import { CASINOS, cheminCasino, type Casino } from '@/lib/casinos';

function phraseLicence(c: Casino): string {
  const l = c.licence;
  switch (l.statut) {
    case 'numero-affiche':
      return `affiche une licence de la ${l.autorite} avec son numéro`;
    case 'sans-numero':
      return `mentionne la licence suivante, sans numéro : ${l.autorite}`;
    case 'non-affichee':
      return c.operateur.nom ? "n'affiche pas de numéro de licence" : "n'affiche ni exploitant ni numéro de licence";
    default:
      return "n'a pas pu être vérifié : nous n'avons pas pu consulter ses mentions légales";
  }
}

const CHEMIN = '/casino-en-ligne-legal-quebec/';
const MAJ = '2026-11-09';
const DESCRIPTION =
  "Loto-Québec, sites étrangers, loi 74 sur le blocage, projet d'encadrement : ce que dit vraiment la loi sur le casino en ligne au Québec, expliqué simplement.";

export const metadata = meta({ titre: 'Casino en ligne légal au Québec ? La loi expliquée (2026)', description: DESCRIPTION, chemin: CHEMIN, type: 'article' });

const SOMMAIRE = [
  { id: 'reponse', titre: 'La réponse courte' },
  { id: 'code-criminel', titre: 'Ce que dit le Code criminel' },
  { id: 'sites-etrangers', titre: 'Le cas des sites étrangers' },
  { id: 'loi-74', titre: 'La loi 74 sur le blocage' },
  { id: 'joueur', titre: 'Ce que cela change pour vous' },
  { id: 'avenir', titre: 'Un cadre qui pourrait changer' },
  { id: 'impots', titre: 'Gains et impôt' },
  { id: 'sources', titre: 'Sources' }
];

export default function PageLegalite() {
  return (
    <Guide
      nom="Légalité au Québec"
      chemin={CHEMIN}
      h1="Le casino en ligne est-il légal au Québec ?"
      chapeau="La réponse honnête, sans jargon : qui a le droit d'offrir des jeux en ligne au Québec, où se situent les sites étrangers, et ce que cela change concrètement pour vous."
      description={DESCRIPTION}
      modifie={MAJ}
      sommaire={SOMMAIRE}
      emplacement="guide-legalite"
    >
      <h2 id="reponse">La réponse courte</h2>
      <p>
        Au Québec, <strong>Loto-Québec est le seul exploitant de jeux d&apos;argent en ligne autorisé par le gouvernement</strong>.
        Les casinos privés exploités depuis l&apos;étranger, comme ceux de notre comparatif, ne détiennent pas d&apos;autorisation
        québécoise. Ils acceptent pourtant des joueurs du Québec, sous des licences délivrées ailleurs (Curaçao, Anjouan ou
        autres).
      </p>
      <p>
        C&apos;est ce qu&apos;on appelle souvent une « zone grise » : ces sites ne sont pas encadrés par le Québec, et le Québec
        n&apos;a pas réussi à les bloquer. Pour vous, la conséquence principale est pratique : en cas de problème, vos recours
        passent par le régulateur étranger, pas par un organisme québécois.
      </p>
      <TopTrois emplacement="guide-legalite-top3" titre="Les casinos étrangers les mieux notés de notre comparatif" />

      <h2 id="code-criminel">Ce que dit le Code criminel</h2>
      <p>
        Au Canada, les jeux d&apos;argent relèvent du Code criminel. Son article 207 prévoit que le gouvernement d&apos;une
        province peut « mettre sur pied et exploiter » des loteries, ce qui comprend les jeux offerts en ligne. Chaque province
        organise donc son propre marché.
      </p>
      <p>
        Le Québec a confié ce rôle à Loto-Québec, une société d&apos;État, que le gouvernement a autorisée à offrir le jeu en
        ligne. L&apos;Ontario a choisi une autre voie en 2022 : il délivre des autorisations à des exploitants privés, qui
        doivent respecter ses règles. L&apos;Alberta a suivi le 13 juillet 2026. Le Québec, lui, n&apos;a pas ouvert son
        marché aux exploitants privés. Le détail par province est dans notre guide{' '}
        <Link href="/casino-en-ligne-canada/">casino en ligne au Canada</Link>.
      </p>

      <h2 id="sites-etrangers">Le cas des sites étrangers</h2>
      <p>
        Les casinos privés que vous trouvez en ligne sont exploités par des sociétés établies hors du Canada. Ils détiennent
        parfois une licence étrangère, dont la valeur varie beaucoup d&apos;une autorité à l&apos;autre. Dans notre comparatif :
      </p>
      <ul>
        {CASINOS.map((c, i) => (
          <li key={c.id}>
            <Link href={c.sousPages.includes('fiable') ? cheminCasino(c, 'fiable') : cheminCasino(c)}>{c.nom}</Link>{' '}
            {phraseLicence(c)}
            {i === CASINOS.length - 1 ? '.' : ' ;'}
          </li>
        ))}
      </ul>
      <p>
        Aucune de ces licences n&apos;équivaut à une autorisation du Québec. C&apos;est pour cette raison que la transparence
        pèse 25 % de notre <Link href="/notre-methode/">grille de notation</Link>.
      </p>

      <h2 id="loi-74">La loi 74 sur le blocage des sites</h2>
      <p>
        En 2016, le Québec a adopté des dispositions (la loi 74) qui obligeaient les fournisseurs d&apos;accès Internet à
        bloquer les sites de jeu en ligne non autorisés. L&apos;Association canadienne des télécommunications sans fil les a
        contestées.
      </p>
      <ul>
        <li>
          <strong>2018 :</strong> la Cour supérieure du Québec les déclare inconstitutionnelles, car elles empiètent sur des
          compétences fédérales.
        </li>
        <li>
          <strong>2021 :</strong> la Cour d&apos;appel du Québec confirme ce jugement.
        </li>
        <li>
          <strong>Mars 2022 :</strong> la Cour suprême du Canada refuse d&apos;entendre l&apos;appel du gouvernement du Québec.
        </li>
      </ul>
      <p>Résultat : aucun blocage des sites de jeu étrangers n&apos;est en vigueur au Québec.</p>

      <h2 id="joueur">Ce que cela change pour vous</h2>
      <p>
        Les dispositions du Code criminel sur les jeux d&apos;argent visent d&apos;abord l&apos;exploitation de jeux non
        autorisés. Pour un joueur, le risque le plus concret est ailleurs : si un site étranger refuse de payer ou ferme votre
        compte, vous ne pouvez pas vous tourner vers un organisme québécois. Vos protections dépendent du régulateur étranger
        et du sérieux de l&apos;exploitant.
      </p>
      <p>C&apos;est pourquoi nous vous conseillons de :</p>
      <ul>
        <li>privilégier un exploitant identifiable, avec un numéro de licence vérifiable ;</li>
        <li>lire les conditions de retrait avant de déposer ;</li>
        <li>commencer par un petit dépôt et tester un premier retrait ;</li>
        <li>conserver des captures d&apos;écran des conditions du bonus au moment où vous l&apos;acceptez.</li>
      </ul>
      <p>
        Ce sont les critères de notre <Link href="/#classement">classement des casinos en ligne au Québec</Link> : chaque
        avis indique l&apos;exploitant, la licence et les règles de retrait, avec la date de vérification.
      </p>
      <p>
        Il faut avoir <strong>18 ans</strong> pour jouer à des jeux d&apos;argent au Québec. Ce guide est une vulgarisation,
        pas un avis juridique : pour une situation particulière, consultez un avocat.
      </p>

      <h2 id="avenir">Un cadre qui pourrait changer</h2>
      <p>
        Le débat sur l&apos;ouverture du marché est relancé. Pendant la campagne électorale de 2026, le Parti libéral du Québec a
        proposé de confier à la Régie des alcools, des courses et des jeux l&apos;accréditation et la surveillance des sites de
        jeu en ligne. Le Parti québécois, élu le 5 octobre 2026, s&apos;est dit favorable à un marché encadré, sans en préciser
        les modalités.
      </p>
      <p>
        Si le Québec adopte un modèle d&apos;autorisation comme celui de l&apos;Ontario, la liste des sites accessibles et les
        règles de publicité pourraient changer. Nous mettrons ce guide et notre classement à jour dès qu&apos;un projet de loi
        sera connu.
      </p>

      <h2 id="impots">Gains et impôt</h2>
      <p>
        En règle générale, les gains de jeu d&apos;un joueur qui joue pour se divertir ne sont pas imposables au Canada, car ils
        ne proviennent pas d&apos;une source de revenus. Ils peuvent l&apos;être si le jeu constitue une activité professionnelle.
        Attention aussi aux cryptomonnaies : leur utilisation peut avoir des conséquences fiscales distinctes. En cas de doute,
        consultez un fiscaliste.
      </p>

      <Faq
        questions={[
          {
            q: 'Est-ce illégal de jouer sur un casino en ligne étranger au Québec ?',
            r: "Les sites étrangers ne sont pas autorisés par le Québec, qui n'a toutefois pas pu les bloquer. Les dispositions du Code criminel visent d'abord l'exploitation de jeux non autorisés. Le principal risque pour vous est l'absence de recours québécois en cas de litige. Ce n'est pas un avis juridique."
          },
          {
            q: 'Quel est le seul casino en ligne autorisé par le gouvernement du Québec ?',
            r: "Celui de Loto-Québec, la société d'État chargée des jeux d'argent au Québec."
          },
          {
            q: 'Le Québec bloque-t-il les sites de casino étrangers ?',
            r: "Non. La loi 74, qui prévoyait ce blocage, a été jugée inconstitutionnelle par la Cour supérieure en 2018, décision confirmée par la Cour d'appel en 2021. La Cour suprême a refusé d'entendre l'appel en 2022."
          },
          {
            q: 'Quel âge faut-il avoir pour jouer en ligne au Québec ?',
            r: '18 ans.'
          },
          {
            q: 'Pourquoi un casino en ligne refuse-t-il mon inscription ?',
            r: "Plusieurs raisons sont possibles : le site n'accepte pas votre pays ou votre province (certains casinos étrangers excluent l'Ontario et l'Alberta, où seuls les sites autorisés par la province peuvent offrir leurs jeux), vous n'avez pas l'âge minimum, ou votre compte attend une vérification d'identité. Le formulaire d'inscription ou le service à la clientèle vous dira laquelle s'applique."
          },
          {
            q: 'Les gains de casino en ligne sont-ils imposables au Québec ?',
            r: "En règle générale, non : les gains d'une personne qui joue pour se divertir ne sont pas imposables au Canada, car ils ne proviennent pas d'une source de revenus. Ils peuvent l'être si le jeu constitue une activité professionnelle. En cas de doute, consultez un fiscaliste."
          }
        ]}
      />

      <h2 id="sources">Sources</h2>
      <ul className="source">
        <li>
          <a href="https://laws-lois.justice.gc.ca/fra/lois/c-46/section-207.html" rel="noopener" target="_blank">
            Code criminel, article 207 (Loteries autorisées)
          </a>
        </li>
        <li>
          <a href="https://igamingbusiness.com/legal-compliance/quebec-anti-gambling-websites-law-collapses-in-court/" rel="noopener" target="_blank">
            iGaming Business : la Cour supérieure invalide la loi 74 (juillet 2018)
          </a>
        </li>
        <li>
          <a href="https://cartt.ca/government-of-quebec-appeals-quebec-appeal-court-decision-on-site-blocking/" rel="noopener" target="_blank">
            Cartt.ca : la Cour d&apos;appel confirme, le Québec demande l&apos;autorisation d&apos;appeler (2021)
          </a>
        </li>
        <li>
          <a href="https://decisions.scc-csc.ca/scc-csc/scc-l-csc-a/en/19249/1/document.do" rel="noopener" target="_blank">
            Cour suprême du Canada : demande d&apos;autorisation rejetée (24 mars 2022)
          </a>
        </li>
        <li>
          <a href="https://www.lavoixdelest.ca/elections-provinciales-2026/2026/09/09/milliard-veut-sattaquer-aux-plateformes-de-jeux-et-paris-en-ligne-WYDJOWYNZ5BC3LSWFRLDXTFDRM/" rel="noopener" target="_blank">
            La Voix de l&apos;Est : la proposition du Parti libéral du Québec (9 septembre 2026)
          </a>
        </li>
        <li>
          <a href="https://pokerfuse.com/latest-news/2026/9/qubecs-two-leading-parties-back-regulated-online/" rel="noopener" target="_blank">
            Pokerfuse : la position du Parti québécois (21 septembre 2026)
          </a>
        </li>
        <li>
          <a href="https://www.blg.com/fr/insights/2023/07/texas-hold-em-or-taxes-hold-em-taxes-and-gambling-in-canada" rel="noopener" target="_blank">
            BLG : l&apos;imposition des gains de jeu au Canada
          </a>
        </li>
      </ul>
    </Guide>
  );
}
