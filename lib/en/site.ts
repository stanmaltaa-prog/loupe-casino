/**
 * English Canada section (/en-ca/). Shared settings, formatting and the help lines by province.
 * Ontario and Alberta are excluded: both provinces license private online casinos,
 * and the casinos we compare are not registered there.
 */
export const EN = {
  langue: 'en-CA',
  locale: 'en_CA',
  racine: '/en-ca/',
  slogan: 'Online casinos in Canada, under the magnifying glass',
  /** Date of the last full check of the English pages (YYYY-MM-DD). */
  verification: '2026-11-09',
  publication: '2026-11-09'
};

export const HORS_ZONE = 'Not for residents of Ontario or Alberta';

export const MESSAGE_ZONE =
  'Loupe Casino does not cover Ontario or Alberta. Both provinces license private online casinos, and the casinos we compare are not registered with their regulators. If you live there, use a site licensed in your province.';

/** Help lines by province, from the Canadian Centre on Substance Use and Addiction (gamblingguidelines.ca). */
export const AIDE_PROVINCES: { province: string; nom: string; tel: string }[] = [
  { province: 'British Columbia', nom: 'BC Problem Gambling Help Line', tel: '1-888-795-6111' },
  { province: 'Saskatchewan', nom: 'Saskatchewan Problem Gambling Helpline', tel: '1-800-306-6789' },
  { province: 'Manitoba', nom: 'Manitoba Addictions Help Line (problem gambling)', tel: '1-800-463-1554' },
  { province: 'Quebec', nom: 'Gambling: Help and Referral', tel: '1-800-461-0140' },
  { province: 'New Brunswick', nom: 'New Brunswick Gambling Information Line', tel: '1-800-461-1234' },
  { province: 'Nova Scotia', nom: 'Mental Health and Addictions Intake', tel: '1-855-922-1122' },
  { province: 'Prince Edward Island', nom: 'PEI Problem Gambling Help Line', tel: '1-855-255-4255' },
  { province: 'Newfoundland and Labrador', nom: 'Newfoundland Problem Gambling Help Line', tel: '1-888-899-4357' },
  { province: 'Yukon', nom: 'Mental Wellness and Substance Use Services', tel: '1-866-456-3838' },
  { province: 'Northwest Territories', nom: 'NWT Help Line', tel: '1-800-661-0844' },
  { province: 'Nunavut', nom: 'Kamatsiaqtut Help Line', tel: '1-800-265-3333' }
];

export const SOURCE_AIDE = {
  titre: 'Canadian Centre on Substance Use and Addiction: gambling treatment helplines in Canada',
  url: 'https://gamblingguidelines.ca/getting-help/'
};

export const SOURCE_AIDE_NS = {
  titre: 'Government of Nova Scotia: addiction services important numbers',
  url: 'https://www.novascotia.ca/dhw/addictions/important-numbers.asp'
};

export function telHref(tel: string): string {
  return `tel:${tel.replace(/[^\d]/g, '')}`;
}

const MOIS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** "2026-11-09" → "November 9, 2026" */
export function dateEn(iso: string): string {
  const [a, m, j] = iso.split('-');
  return `${MOIS[Number(m) - 1]} ${Number(j)}, ${a}`;
}

/** "2026-11-09" → "November 2026" */
export function moisEn(iso: string): string {
  const [a, m] = iso.split('-');
  return `${MOIS[Number(m) - 1]} ${a}`;
}

/** English amounts: $5,500 · €2,000 · 10 USDT */
export function montantEn(valeur: number, devise: string): string {
  const n = valeur.toLocaleString('en-CA');
  if (devise === '$') return `$${n}`;
  if (devise === '€') return `€${n}`;
  if (devise === '£') return `£${n}`;
  return `${n} ${devise}`;
}

/** 7.3 → "7.3" */
export function noteEn(n: number): string {
  return n.toFixed(1);
}
