'use client';

export const FAVORITES_KEY = 'charity_favorites';

export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const favorites = localStorage.getItem(FAVORITES_KEY);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.error('Error Getting Favorites:', error);
    return [];
  }
}

export function addFavorite(charityId: string): void {
  const favorites = getFavorites();
  if (!favorites.includes(charityId)) {
    favorites.push(charityId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
}

export function removeFavorite(charityId: string): void {
  const favorites = getFavorites();
  const updated = favorites.filter(id => id !== charityId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export function isFavorite(charityId: string): boolean {
  return getFavorites().includes(charityId);
}

export function toggleFavorite(charityId: string): boolean {
  const favorites = getFavorites();
  const isFav = favorites.includes(charityId);
  if (isFav) {
    removeFavorite(charityId);
  } else {
    addFavorite(charityId);
  }
  return !isFav;
}
