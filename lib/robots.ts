/** Robots connus : moteurs de recherche, vérificateurs de liens, outils SEO, navigateurs sans écran, scripts. */
export const ROBOTS =
  /bot|crawl|spider|slurp|scan|check|monitor|preview|fetch|curl|wget|python|java\/|go-http|axios|node-fetch|headless|phantom|lighthouse|pagespeed|semrush|ahrefs|mj12|dataforseo|ubersuggest|screaming|facebookexternalhit|whatsapp|telegram|discord|slack|linkedin|skype/i;

export function appareilDe(agent: string): 'mobile' | 'ordinateur' {
  return /Mobi|Android|iPhone|iPad/i.test(agent) ? 'mobile' : 'ordinateur';
}
