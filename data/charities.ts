import charitiesData from './charities.json';

export interface Charity {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  website: string;
  donateLink: string
}

export const charities: Charity[] = charitiesData;

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
