import Link from 'next/link';
import CarteOffre from '@/components/CarteOffre';
import TableauComparatif from '@/components/TableauComparatif';
import Tampon from '@/components/Tampon';
import Faq, { type Question } from '@/components/Faq';
import EncadreAide from '@/components/EncadreAide';
import CtaCollant from '@/components/CtaCollant';
import JsonLd from '@/components/JsonLd';
import Marque from '@/components/Marque';
import BoutonCasino from '@/components/BoutonCasino';
import NoteLoupe from '@/components/NoteLoupe';
import GrilleJeux from '@/components/GrilleJeux';
import GrilleTables from '@/components/GrilleTables';
import { ILLUSTRATIONS } from '@/components/Illustrations';
import { MACHINES } from '@/lib/contenu/machines';
import { TABLES } from '@/lib/contenu/tables';
import { CASINOS, CRITERES, cheminCasino, exempleMise, miseTexte, noteGlobale, parId, type Casino } from '@/lib/casinos';
import { SITE, absolu, dateLongue, moisAnnee, montant } from '@/lib/site';
import { meta, schemaPage } from '@/lib/seo';

const MAJ = SITE.derniereVerification;

export const metadata = meta({
  titre: `Meilleur casino en ligne au Québec : comparatif ${moisAnnee(MAJ)}`,
  description: `Casinos en ligne au Québec comparés : bonus, conditions de mise, licences et retraits vérifiés sur les sites officiels. Mis à jour le ${dateLongue(MAJ)}.`,
  chemin: '/',
  titreAbsolu: true
});

function choix(): { titre: string; casino: Casino; raison: string }[] {
  const liste: { titre: string; id: string; raison: string }[] = [
    { titre: 'Meilleur dans l’ensemble', id: CASINOS[0].id, raison: `La meilleure note de notre grille. ${CASINOS[0].accroche}` },
    { titre: 'Bonus le plus facile à débloquer', id: 'betportal', raison: 'Mise de 30 fois le bonus seulement : pour un même dépôt au premier palier, 40 % de moins à miser que chez Rolletto.' },
    { titre: 'Limites de retrait publiées', id: 'celsius', raison: 'Règles de retrait chiffrées et très grand choix de jeux en direct.' },
    { titre: 'Plus grand catalogue', id: '1win', raison: 'Plus de 11 000 jeux annoncés et 500 tours gratuits sur quatre dépôts.' }
  ];
  return liste
    .map((l) => ({ titre: l.titre, casino: parId(l.id), raison: l.raison }))
    .filter((l): l is { titre: string; casino: Casino; raison: string } => Boolean(l.casino));
}

const FAQ: Question[] = [
  {
    q: 'Quel est le meilleur casino en ligne au Québec ?',
    r: `Selon notre grille, mise à jour le ${dateLongue(MAJ)}, ${CASINOS[0].nom} obtient la meilleure note. Le meilleur choix dépend toutefois de votre façon de jouer : si vous voulez surtout débloquer un bonus, une mise calculée sur le bonus seulement est plus avantageuse.`
  },
  {
    q: 'Est-ce légal de jouer au casino en ligne au Québec ?',
    r: "Loto-Québec est le seul exploitant autorisé par le gouvernement du Québec à offrir des jeux d'argent en ligne. Les casinos de ce comparatif sont exploités depuis l'étranger, sous licence étrangère. Notre guide sur la légalité explique ce que cela implique pour vous."
  },
  {
    q: 'Quel âge faut-il avoir pour jouer au casino en ligne au Québec ?',
    r: '18 ans. Tous les casinos sérieux vérifient votre âge et votre identité, en général avant le premier retrait.'
  },
  {
    q: 'Les gains de casino sont-ils imposables au Canada ?',
    r: "En règle générale, les gains d'un joueur qui joue pour se divertir ne sont pas imposables au Canada. La situation peut être différente si le jeu constitue une activité professionnelle. En cas de doute, consultez un fiscaliste."
  },
  {
    q: 'Peut-on payer avec Interac sur ces casinos ?',
    r: "Nous n'avons pas pu confirmer Interac pour les casinos de ce comparatif sur leurs pages officielles. Les cryptomonnaies sont acceptées chez Rolletto, Celsius et 1win. Vérifiez toujours la caisse du casino avant votre premier dépôt."
  },
  {
    q: 'Existe-t-il un bonus sans dépôt au Québec ?',
    r: "Nous n'avons trouvé aucun bonus sans dépôt actif pour les nouveaux joueurs chez les casinos de ce comparatif. Quand une telle offre existe, ses gains sont souvent plafonnés : chez Celsius, par exemple, les gains de bonus sans dépôt sont limités à 100 $."
  },
  {
    q: `Comment ${SITE.nom} gagne-t-il de l’argent ?`,
    r: "Nous recevons une commission quand vous vous inscrivez sur un casino par nos liens. Le classement suit uniquement notre grille de notation publique : la commission ne change ni les notes ni l'ordre."
  }
];

export default function Accueil() {
  const exemples = CASINOS.map((c) => ({ c, ex: exempleMise(c) }));
  return (
    <>
      <section className="accueil-heros">
        <div className="conteneur accueil-heros-grille">
          <div>
            <p className="surtitre">Comparatif indépendant · Québec · 18+</p>
            <h1>Meilleurs casinos en ligne au Québec, passés à la loupe</h1>
            <p className="chapeau">
              Bonus, mise à compléter, licence et retraits : nous relisons les conditions officielles de chaque casino et
              datons chaque vérification. Voici le classement, avec les chiffres qui comptent vraiment.
            </p>
            <ul className="confiance">
              <li>✓ Conditions relues sur les sites officiels</li>
              <li>✓ Joueurs du Québec acceptés, confirmé par écrit</li>
              <li>✓ Grille de notation publique</li>
            </ul>
            <div className="heros-meta heros-meta-clair">
              <Tampon date={MAJ} texte="Classement vérifié le" />
              <Link href="/notre-methode/">Comment nous notons</Link>
            </div>
          </div>
          <div className="podium" aria-label="Le top 3 du moment">
            <p className="podium-titre">Le top 3 du moment</p>
            <ol>
              {CASINOS.slice(0, 3).map((c, i) => (
                <li key={c.id}>
                  <span className="podium-rang">{i + 1}</span>
                  <Marque casino={c} petite />
                  <span className="podium-texte">
                    <Link href={cheminCasino(c)}>{c.nom}</Link>
                    <span>{c.offre.titre}</span>
                  </span>
                  <NoteLoupe note={noteGlobale(c)} taille={38} legende={false} />
                  <BoutonCasino casino={c} emplacement="accueil-podium" texte="Obtenir" />
                </li>
              ))}
            </ol>
            <p className="podium-mention">18+. Les conditions du casino s&apos;appliquent. Liens commerciaux.</p>
          </div>
        </div>
      </section>

      <section className="conteneur" id="classement" aria-labelledby="titre-classement">
        <h2 id="titre-classement" className="sr-only">
          Classement des casinos en ligne au Québec
        </h2>
        <ol className="classement">
          {CASINOS.map((c, i) => (
            <li key={c.id}>
              <CarteOffre casino={c} rang={i + 1} emplacement="accueil-classement" />
            </li>
          ))}
        </ol>
        <p className="petit" style={{ marginTop: 14 }}>
          Lien commercial : nous recevons une commission si vous vous inscrivez par nos liens. L&apos;ordre suit uniquement
          notre <Link href="/notre-methode/">grille de notation publique</Link>.{' '}
          <Link href="/divulgation-affiliation/">En savoir plus</Link>.
        </p>
      </section>

      <section className="conteneur">
        <div className="titre-section">
          <h2>Les machines à sous les plus jouées au Canada</h2>
          <Link href="/machines-a-sous/">Voir les {MACHINES.length} jeux →</Link>
        </div>
        <GrilleJeux jeux={MACHINES.slice(0, 8)} />
        <p className="petit">Images officielles des éditeurs de jeux. RTP de la meilleure version publiée.</p>
      </section>

      <section className="conteneur accueil-direct">
        <div className="titre-section">
          <h2>Les jeux en direct les plus recherchés</h2>
          <Link href="/jeux/#tables">Voir les {TABLES.length} jeux →</Link>
        </div>
        <GrilleTables jeux={TABLES.slice(0, 6)} />
        <p className="petit">Roulettes, blackjacks et jeux télévisés : règles officielles des éditeurs et RTP publié.</p>
      </section>

      <section className="conteneur">
        <h2>Explorer par type de jeu</h2>
        <ul className="grille-categories">
          {(
            [
              ['machine', 'Machines à sous', '/machines-a-sous/', `RTP, volatilité et ${MACHINES.length} jeux analysés`],
              ['roulette', 'Roulette', '/roulette-en-ligne/', 'Européenne, française ou américaine'],
              ['blackjack', 'Blackjack', '/blackjack-en-ligne/', 'Règles et stratégie de base'],
              ['direct', 'Casino en direct', '/casino-en-direct/', 'Tables avec croupier en vidéo'],
              ['crash', 'Jeux de crash', '/jeux-de-crash/', 'Aviator, Chicken Road, Plinko'],
              ['sport', 'Paris sportifs', '/paris-sportifs-quebec/', 'Hockey, soccer et bonus sport']
            ] as const
          ).map(([cle, nom, href, texte]) => {
            const Illus = ILLUSTRATIONS[cle];
            return (
              <li key={cle}>
                <Link href={href} className="carte-categorie">
                  <Illus />
                  <strong>{nom}</strong>
                  <span>{texte}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="conteneur">
        <h2>Les offres côte à côte</h2>
        <p className="lecture">
          Le montant du bonus ne dit presque rien à lui seul. Ce qui compte, c&apos;est ce qu&apos;il faut miser avant de pouvoir
          retirer, en combien de temps, et qui est derrière le site.
        </p>
        <TableauComparatif casinos={CASINOS} emplacement="accueil-tableau" legende={`Données relevées sur les sites officiels, vérifiées le ${dateLongue(MAJ)}.`} />
      </section>

      <section className="conteneur">
        <h2>Le meilleur casino selon votre profil</h2>
        <ul className="grille-liens">
          {choix().map((x) => (
            <li key={x.titre}>
              <Link href={cheminCasino(x.casino)}>
                <strong>
                  {x.titre} : {x.casino.nom}
                </strong>
                <span>{x.raison}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="conteneur lecture prose">
        <h2>Ce que « jusqu&apos;à 5 500 $ » veut vraiment dire</h2>
        <p>
          Un bonus de casino n&apos;est pas de l&apos;argent que vous pouvez retirer tout de suite. Pour le transformer en argent
          réel, il faut miser un certain nombre de fois une somme donnée : c&apos;est la condition de mise. Deux bonus au même
          pourcentage peuvent donc avoir une valeur très différente.
        </p>
        <p>Voici ce que représente un dépôt de 100 au premier palier, chez chaque casino du comparatif :</p>
        <div className="tableau-defilant">
          <table>
            <thead>
              <tr>
                <th scope="col">Casino</th>
                <th scope="col">Bonus reçu</th>
                <th scope="col">Condition</th>
                <th scope="col">Total à miser</th>
              </tr>
            </thead>
            <tbody>
              {exemples.map(({ c, ex }) => (
                <tr key={c.id}>
                  <th scope="row">
                    <Link href={c.sousPages.includes('bonus') ? cheminCasino(c, 'bonus') : cheminCasino(c)}>{c.nom}</Link>
                  </th>
                  <td>{ex ? montant(ex.bonus, ex.devise) : 'Non confirmé'}</td>
                  <td>{miseTexte(c)}</td>
                  <td>{ex ? <strong>{montant(ex.aMiser, ex.devise)}</strong> : 'Non confirmé'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Une mise calculée sur le bonus seulement demande nettement moins de jeu qu&apos;une mise calculée sur le dépôt plus
          le bonus. Le délai compte aussi : 7 500 à miser en 5 jours, c&apos;est 1 500 par jour. Pour tester votre propre
          montant, utilisez notre <Link href="/conditions-de-mise/">calculateur de conditions de mise</Link>, ou lisez notre
          guide des <Link href="/bonus-casino-quebec/">bonus de casino au Québec</Link>.
        </p>

        <h2>Est-ce légal de jouer en ligne au Québec ?</h2>
        <p>
          Au Québec, Loto-Québec est le seul exploitant autorisé par le gouvernement à offrir des jeux d&apos;argent en ligne.
          Les casinos de ce comparatif sont exploités depuis l&apos;étranger, sous des licences de Curaçao ou d&apos;Anjouan
          quand elles sont affichées. Ils ne sont donc pas autorisés par le gouvernement du Québec, et vous ne bénéficiez pas
          des mêmes recours qu&apos;avec un site québécois.
        </p>
        <p>
          En 2016, le Québec a tenté d&apos;obliger les fournisseurs Internet à bloquer les sites de jeu non autorisés. La loi a
          été jugée inconstitutionnelle par la Cour supérieure en 2018, puis par la Cour d&apos;appel en 2021, et la Cour
          suprême du Canada a refusé d&apos;entendre l&apos;appel en 2022. Tous les détails sont dans notre guide :{' '}
          <Link href="/casino-en-ligne-legal-quebec/">le casino en ligne est-il légal au Québec ?</Link>
        </p>

        <h2>Comment nous classons les casinos</h2>
        <p>
          Chaque casino reçoit une note sur 10 pour cinq critères, pondérés selon leur importance pour vous. La note finale est
          une moyenne pondérée, et le classement suit cette note, sans exception.
        </p>
        <div className="tableau-defilant">
          <table>
            <thead>
              <tr>
                <th scope="col">Critère</th>
                <th scope="col">Poids</th>
                <th scope="col">Ce que nous regardons</th>
              </tr>
            </thead>
            <tbody>
              {CRITERES.map((c) => (
                <tr key={c.id}>
                  <th scope="row">{c.nom}</th>
                  <td>{c.poids} %</td>
                  <td>{c.question}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Quand une information n&apos;est pas publiée par le casino, nous ne l&apos;inventons pas : nous l&apos;indiquons et la
          note en tient compte. Détails complets sur la page <Link href="/notre-methode/">notre méthode</Link>.
        </p>

        <h2>Paiements : Interac, cartes et crypto</h2>
        <p>
          Les joueurs québécois cherchent souvent Interac. Sur les pages officielles consultées, aucun des casinos du
          comparatif ne le confirme clairement. Les cryptomonnaies sont plus répandues : huit chez Rolletto, neuf chez
          Celsius, et le Tether (USDT) chez 1win. Celsius affiche aussi les cartes Visa et Mastercard, Apple Pay, Google Pay, Skrill, PayPal et
          Paysafecard. Pour bien choisir, lisez nos guides <Link href="/casino-interac/">casino Interac</Link>,{' '}
          <Link href="/casino-crypto-quebec/">casino crypto au Québec</Link>,{' '}
          <Link href="/casino-retrait-rapide/">casino à retrait rapide</Link> et{' '}
          <Link href="/casino-depot-minimum/">casino à dépôt minimum</Link>.
        </p>
        <p>
          Vous pariez aussi sur le sport ? Notre guide des <Link href="/paris-sportifs-quebec/">paris sportifs au Québec</Link>{' '}
          compare les bonus sport de Velobet, Rolletto et BetPortal, conditions comprises.
        </p>

        <h2>Loto-Québec ou casino étranger : les vraies différences</h2>
        <div className="tableau-defilant">
          <table>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Point de comparaison</span>
                </th>
                <th scope="col">Loto-Québec</th>
                <th scope="col">Casinos de ce comparatif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Autorisation</th>
                <td>Autorisé par le gouvernement du Québec</td>
                <td>Licence étrangère (Curaçao, Anjouan) ou non affichée</td>
              </tr>
              <tr>
                <th scope="row">Recours en cas de litige</th>
                <td>Au Québec</td>
                <td>Auprès du régulateur étranger, quand il est connu</td>
              </tr>
              <tr>
                <th scope="row">Bonus de bienvenue</th>
                <td>Selon les promotions de Loto-Québec</td>
                <td>Jusqu&apos;à 5&nbsp;500&nbsp;$ selon le casino, avec condition de mise</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Il n&apos;y a pas de bon ou de mauvais choix universel : un site québécois offre plus de recours, un site étranger des
          offres plus agressives. Si vous choisissez un site étranger, privilégiez un exploitant identifiable et lisez les
          conditions de retrait avant de déposer.
        </p>

        <h2>Comment choisir votre casino en ligne en 5 questions</h2>
        <ol>
          <li>
            <strong>Qui exploite le site ?</strong> Un nom de société et un numéro de licence vérifiables valent mieux
            qu&apos;un logo de régulateur sans lien.
          </li>
          <li>
            <strong>Combien faudra-t-il miser ?</strong> Calculez la somme à miser avant d&apos;accepter un bonus, pas seulement
            son montant.
          </li>
          <li>
            <strong>En combien de temps ?</strong> 5 jours et 20 jours, ce n&apos;est pas du tout le même effort.
          </li>
          <li>
            <strong>Comment retirer ?</strong> Cherchez les limites de retrait par semaine ou par mois et les moyens de
            paiement acceptés au retrait.
          </li>
          <li>
            <strong>Quels outils pour garder le contrôle ?</strong> Limites de dépôt, pause et autoexclusion doivent être
            faciles à trouver.
          </li>
        </ol>

        <h2>Nos conseils avant de vous inscrire</h2>
        <ol>
          <li>Fixez un budget de divertissement que vous pouvez perdre, et ne le dépassez pas.</li>
          <li>Lisez la condition de mise, le délai et la mise maximale avant d&apos;accepter un bonus.</li>
          <li>Si vous jouez peu, refusez le bonus : vos gains seront retirables sans condition.</li>
          <li>Faites vérifier votre identité tôt pour ne pas attendre au moment du retrait.</li>
          <li>Testez un premier retrait modeste avant de déposer davantage.</li>
        </ol>

        <Faq questions={FAQ} />
        <EncadreAide />
      </div>

      <CtaCollant casino={CASINOS[0]} emplacement="accueil-collant" />
      <JsonLd
        donnees={[
          schemaPage({
            titre: 'Meilleurs casinos en ligne au Québec',
            description: SITE.slogan,
            chemin: '/',
            publie: '2026-11-03',
            modifie: MAJ,
            type: 'CollectionPage'
          }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Classement des casinos en ligne au Québec',
            itemListOrder: 'https://schema.org/ItemListOrderDescending',
            numberOfItems: CASINOS.length,
            itemListElement: CASINOS.map((c, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: c.nom,
              url: absolu(cheminCasino(c))
            }))
          }
        ]}
      />
    </>
  );
}
