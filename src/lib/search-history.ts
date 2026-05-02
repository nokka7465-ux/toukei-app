"use client";

const STORAGE_KEY = "toukei-app:search-history:v1";
const MAX = 8;

export function getRecentSearches(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((x): x is string => typeof x === "string").slice(0, MAX);
  } catch {
    return [];
  }
}

export function addRecentSearch(query: string): void {
  if (typeof window === "undefined") return;
  const trimmed = query.trim();
  if (!trimmed || trimmed.length < 2) return;
  const current = getRecentSearches().filter((q) => q !== trimmed);
  current.unshift(trimmed);
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(current.slice(0, MAX)));
  } catch {
    /* ignore */
  }
}

export function clearRecentSearches(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
}
