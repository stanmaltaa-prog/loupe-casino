import donnees from '@/donnees/demos.json';

type Demos = { pragmatic: Record<string, string>; playngo: Record<string, string>; liens: Record<string, string> };
const D = donnees as unknown as Demos;

/** url : version ordinateur ; urlMobile : version téléphone quand l'éditeur en sert une distincte. */
export type Demo = { mode: 'integree' | 'lien'; url: string; urlMobile?: string };

/** Démo gratuite officielle d'un jeu : intégrée à la page si l'éditeur le permet, sinon lien vers son site. */
export function demoJeu(slug: string): Demo | null {
  const pp = D.pragmatic[slug];
  if (pp) {
    const p = new URLSearchParams({
      gameSymbol: pp,
      websiteUrl: 'https://demogamesfree.pragmaticplay.net',
      jurisdiction: '99',
      lobby_url: 'https://www.pragmaticplay.com/en/',
      lang: 'fr',
      cur: 'USD'
    });
    return { mode: 'integree', url: `https://demogamesfree.pragmaticplay.net/gs2c/openGame.do?${p.toString()}` };
  }
  const png = D.playngo[slug];
  if (png) {
    const lien = (channel: 'desktop' | 'mobile') =>
      `https://released.playngonetwork.com/casino/ContainerLauncher?${new URLSearchParams({ pid: '2', gid: png, lang: 'fr_FR', practice: '1', channel, demo: '2' }).toString()}`;
    return { mode: 'integree', url: lien('desktop'), urlMobile: lien('mobile') };
  }
  const lien = D.liens[slug];
  return lien ? { mode: 'lien', url: lien } : null;
}
