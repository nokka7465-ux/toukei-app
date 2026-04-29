"use client";

const STORAGE_KEY = "toukei-app:preferences:v1";
export const PREFS_EVENT = "toukei-prefs-update";

export type Preferences = {
  /** Track key the user prefers for the daily problem. null = any. */
  dailyTrack?: string | null;
};

const empty = (): Preferences => ({});

function read(): Preferences {
  if (typeof window === "undefined") return empty();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    return JSON.parse(raw) as Preferences;
  } catch {
    return empty();
  }
}

function write(p: Preferences) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    window.dispatchEvent(new Event(PREFS_EVENT));
  } catch {
    /* ignore */
  }
}

export function getPreferences(): Preferences {
  return read();
}

export function setDailyTrack(trackKey: string | null): void {
  const p = read();
  p.dailyTrack = trackKey;
  write(p);
}
