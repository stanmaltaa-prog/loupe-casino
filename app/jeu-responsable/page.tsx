import Guide from '@/components/Guide';
import Faq from '@/components/Faq';
import { AIDE } from '@/lib/site';
import { meta } from '@/lib/seo';

const CHEMIN = '/jeu-responsable/';
const MAJ = '2026-11-03';
const DESCRIPTION =
  "Jeu responsable au Québec : signes d'alerte, limites et autoexclusion, et où trouver de l'aide 24 h sur 24, pour les joueurs comme pour leurs proches.";

export const metadata = meta({ titre: 'Jeu responsable : garder le contrôle, trouver de l’aide', description: DESCRIPTION, chemin: CHEMIN });

export default function PageJeuResponsable() {
  return (
    <Guide
      nom="Jeu responsable"
      chemin={CHEMIN}
      h1="Jeu responsable : garder le contrôle, et savoir où trouver de l'aide"
      chapeau="Le casino est un divertissement payant, pas une façon de gagner de l'argent. Voici comment garder le contrôle, et à qui parler si ça devient difficile."
      description={DESCRIPTION}
      modifie={MAJ}
      emplacement="jeu-responsable"
      type="WebPage"
      sansOffre
    >
      <div className="encadre encadre-bon">
        <p className="encadre-titre">Besoin de parler à quelqu&apos;un maintenant ?</p>
        <p>
          <strong>{AIDE.nom}</strong> : <a href="tel:18004610140">{AIDE.telephone}</a> partout au Québec, ou{' '}
          <a href="tel:5145270140">{AIDE.telephoneMontreal}</a> à Montréal. Ligne sans frais, 24 h sur 24, 7 jours sur 7, en français et en anglais, par téléphone ou par clavardage.
          Site :{' '}
          <a href={AIDE.site} rel="noopener" target="_blank">
            aidejeu.ca
          </a>
          .
        </p>
      </div>

      <h2>Ce qu&apos;il faut garder en tête</h2>
      <ul>
        <li>Les jeux de casino sont conçus pour que la maison gagne sur le long terme. Perdre fait partie du jeu.</li>
        <li>Chaque partie est indépendante : une série de pertes n&apos;annonce pas un gain.</li>
        <li>Un bonus vous oblige à miser davantage ; il n&apos;améliore pas vos chances.</li>
        <li>Il faut avoir 18 ans ou plus pour jouer au Québec.</li>
      </ul>

      <h2>Les bonnes habitudes</h2>
      <ol>
        <li>Fixez un budget mensuel que vous pouvez perdre sans conséquence, et n&apos;y ajoutez rien.</li>
        <li>Fixez aussi une durée de jeu, et arrêtez-vous quand elle est écoulée.</li>
        <li>Ne jouez jamais avec de l&apos;argent emprunté ni pour rembourser une dette.</li>
        <li>Ne cherchez pas à « vous refaire » après une perte.</li>
        <li>Évitez de jouer pour gérer le stress, la tristesse ou l&apos;ennui.</li>
      </ol>

      <h2>Les signes qui doivent alerter</h2>
      <ul>
        <li>Vous jouez plus longtemps ou plus d&apos;argent que prévu.</li>
        <li>Vous cachez vos habitudes de jeu à vos proches.</li>
        <li>Vous empruntez ou vendez des biens pour jouer.</li>
        <li>Vous pensez au jeu même quand vous ne jouez pas.</li>
        <li>Vous vous sentez irritable quand vous essayez d&apos;arrêter.</li>
      </ul>
      <p>
        Si vous vous reconnaissez dans un ou plusieurs de ces signes, parlez-en. {AIDE.nom} peut vous écouter et vous orienter
        vers des ressources adaptées.
      </p>

      <h2>Les outils proposés par les casinos</h2>
      <p>La plupart des casinos en ligne permettent, depuis votre compte ou par le service à la clientèle :</p>
      <ul>
        <li>de fixer des limites de dépôt par jour, par semaine ou par mois ;</li>
        <li>de limiter vos pertes ou la durée de vos sessions ;</li>
        <li>de faire une pause temporaire ;</li>
        <li>de vous autoexclure pour une longue période.</li>
      </ul>
      <p>
        Une autoexclusion ne vaut en général que pour le site concerné. Si vous voulez arrêter, faites-la sur chaque site où
        vous avez un compte.
      </p>

      <h2>Pour les proches</h2>
      <p>
        Si un proche joue trop, {AIDE.nom} s&apos;adresse aussi à l&apos;entourage des joueurs : vous pouvez appeler pour
        être écouté et orienté.
      </p>

      <Faq
        questions={[
          {
            q: 'Où trouver de l’aide pour un problème de jeu au Québec ?',
            r: `Appelez ${AIDE.nom} au ${AIDE.telephone} (Montréal : ${AIDE.telephoneMontreal}), ligne sans frais ouverte 24 h sur 24, ou visitez aidejeu.ca.`
          },
          {
            q: 'Comment s’autoexclure d’un casino en ligne ?',
            r: "Cherchez la section « Jeu responsable » de votre compte, ou demandez-le au service à la clientèle. L'autoexclusion vaut en général pour ce site seulement."
          }
        ]}
      />
    </Guide>
  );
}
