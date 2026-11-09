import type { Metadata } from 'next';
import { SITE, absolu } from '@/lib/site';
import { AUTEUR, ID_AUTEUR } from './auteur';
import { versionAnglaise, versionFrancaise } from './langues';
import { EN } from './en/site';

export function meta({
  titre,
  description,
  chemin,
  type = 'website',
  titreAbsolu = false
}: {
  titre: string;
  description: string;
  chemin: string;
  type?: 'website' | 'article';
  titreAbsolu?: boolean;
}): Metadata {
  const url = absolu(chemin);
  const en = versionAnglaise(chemin);
  // La marque n'est ajoutée au titre que si l'ensemble reste lisible en entier dans Google (62 caractères max).
  const avecMarque = `${titre} | ${SITE.nom}`;
  const absoluFinal = titreAbsolu || avecMarque.length > 62;
  const image = { url: '/og.png', width: 1200, height: 630, alt: `${SITE.nom} : ${SITE.slogan}` };
  return {
    title: absoluFinal ? { absolute: titre } : titre,
    description,
    alternates: { canonical: url, languages: { 'fr-CA': url, ...(en ? { 'en-CA': absolu(en) } : {}), 'x-default': url } },
    openGraph: {
      title: titre,
      description,
      url,
      siteName: SITE.nom,
      locale: SITE.locale,
      type,
      images: [image]
    },
    twitter: { card: 'summary_large_image', title: titre, description, images: [image.url] }
  };
}

/** Métadonnées des pages anglaises (/en-ca/) : hreflang vers la version française quand elle existe. */
export function metaEn({
  titre,
  description,
  chemin,
  type = 'website',
  titreAbsolu = false
}: {
  titre: string;
  description: string;
  chemin: string;
  type?: 'website' | 'article';
  titreAbsolu?: boolean;
}): Metadata {
  const url = absolu(chemin);
  const fr = versionFrancaise(chemin);
  const avecMarque = `${titre} | ${SITE.nom}`;
  const absoluFinal = titreAbsolu || avecMarque.length > 62;
  const image = { url: '/og.png', width: 1200, height: 630, alt: `${SITE.nom}: ${EN.slogan}` };
  return {
    title: absoluFinal ? { absolute: titre } : titre,
    description,
    alternates: {
      canonical: url,
      languages: { 'en-CA': url, ...(fr ? { 'fr-CA': absolu(fr), 'x-default': absolu(fr) } : { 'x-default': url }) }
    },
    openGraph: { title: titre, description, url, siteName: SITE.nom, locale: EN.locale, type, images: [image] },
    twitter: { card: 'summary_large_image', title: titre, description, images: [image.url] }
  };
}

export const ID_ORGANISATION = `${SITE.url}/#organisation`;
export const ID_SITE = `${SITE.url}/#site`;

export function schemaOrganisation() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': ID_ORGANISATION,
        name: SITE.nom,
        url: `${SITE.url}/`,
        logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png`, width: 512, height: 512 },
        ...(SITE.courriel ? { email: SITE.courriel } : {})
      },
      {
        '@type': 'Person',
        '@id': ID_AUTEUR,
        name: AUTEUR.nom,
        jobTitle: AUTEUR.role,
        url: absolu(AUTEUR.chemin),
        worksFor: { '@id': ID_ORGANISATION }
      },
      {
        '@type': 'WebSite',
        '@id': ID_SITE,
        name: SITE.nom,
        alternateName: ['Loupe', 'loupecasino.com'],
        url: `${SITE.url}/`,
        inLanguage: [SITE.langue, EN.langue],
        publisher: { '@id': ID_ORGANISATION }
      }
    ]
  };
}

export function schemaFil(elements: { nom: string; chemin: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: elements.map((e, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: e.nom,
      item: absolu(e.chemin)
    }))
  };
}

export function schemaPage({
  titre,
  description,
  chemin,
  publie,
  modifie,
  type = 'WebPage',
  langue = SITE.langue
}: {
  titre: string;
  description: string;
  chemin: string;
  publie: string;
  modifie: string;
  type?: 'WebPage' | 'Article' | 'CollectionPage' | 'AboutPage' | 'ContactPage';
  langue?: string;
}) {
  const url = absolu(chemin);
  const base = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#page`,
    url,
    name: titre,
    headline: titre,
    description,
    inLanguage: langue,
    isPartOf: { '@id': ID_SITE },
    datePublished: publie,
    dateModified: modifie
  };
  if (type === 'Article') {
    return { ...base, author: { '@type': 'Person', '@id': ID_AUTEUR, name: AUTEUR.nom, url: absolu(AUTEUR.chemin) }, publisher: { '@id': ID_ORGANISATION }, mainEntityOfPage: url };
  }
  return base;
}

export function schemaFaq(questions: { q: string; r: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((x) => ({
      '@type': 'Question',
      name: x.q,
      acceptedAnswer: { '@type': 'Answer', text: x.r }
    }))
  };
}
