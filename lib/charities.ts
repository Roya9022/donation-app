import { charities as charitiesData } from '../data/charities';

export interface Charity {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  website: string;
  donateLink: string;
}

export const charities: Charity[] = charitiesData;

// Allowed charity domains
const ALLOWED_DOMAINS = [
  'stjude.org',
  'doctorswithoutborders.org',
  'feedingamerica.org',
  'nature.org',
  'alz.org',
  'habitat.org',
  'worldwildlife.org',
  'unitedway.org',
  'bgca.org',
  'redcross.org',
  'directrelief.org',
  'savethechildren.org',
  'pcrf.net',
  'si.edu',
  'lls.org',
  'wikimedia.org',
  'donate.wikimedia.org',
  'aspca.org',
  'wish.org',
  'plannedparenthood.org',
  'weareplannedparenthood.org',
  'heart.org',
  'care.org',
  'aclu.org',
  'cityofhope.org',
  'good360.org',
  'grameenfoundation.org',
  'water.org',
  'npr.org',
  'nationalgeographic.org',
  'edf.org',
  'canine.org',
  'teachforamerica.org',
  'hrw.org',
  'wck.org',
  'michaeljfox.org',
  'firstbook.org',
  'rescue.org',
  'goodwill.org',
  'kiva.org',
  'nami.org',
  'malariaconsortium.org',
  'bbbs.org',
  'peta.org',
  'tpl.org',
  'eji.org',
  'thetrevorproject.org',
  'shrinerschildrens.org',
  'covenanthouse.org',
  'rainforest-alliance.org',
  'americares.org',
  'wildanimalsanctuary.org',
  'unrwa.org',
  'unrwausa.org',
  'map.org.uk',
  'icrc.org',
  'syriarelief.org.uk',
  'unicef.org',
  'unicefusa.org',
  'mercycorps.org',
  'wfp.org',
  'nationalbreastcancer.org',
  'cattales.org',
  'give-usa.keela.co',
];

//  Validates if a URL belongs to an allowed charity domain
export function validateCharityUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return ALLOWED_DOMAINS.some(
      domain => urlObj.hostname === domain || urlObj.hostname.endsWith(`.${domain}`),
    );
  } catch {
    return false;
  }
}

//  Safely get a charity's donate link (returns null if invalid)
export function getSafeDonateLink(charity: Charity): string | null {
  if (validateCharityUrl(charity.donateLink)) {
    return charity.donateLink;
  }
  console.warn(`Invalid donate link for ${charity.title}: ${charity.donateLink}`);
  return null;
}

export function getAllCharities(): Charity[] {
  return charities;
}

export function getCharityById(id: string): Charity | undefined {
  return charities.find(charity => charity.id === id);
}

export function getCharitiesByCategory(category: string): Charity[] {
  return charities.filter(charity => charity.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(charities.map(charity => charity.category))];
}
