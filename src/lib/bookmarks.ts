"use client";

const STORAGE_KEY = "toukei-app:bookmarks:v1";
export const BOOKMARK_EVENT = "toukei-bookmark-update";

export type BookmarkKind = "question" | "formula" | "glossary";

export type BookmarkRef = {
  kind: BookmarkKind;
  /** Stable identifier within the kind. For glossary this is the term string. */
  id: string;
  /** Optional context for display (track key, level, etc.). */
  context?: string;
  /** Time of bookmark (ms since epoch). */
  ts: number;
  /** Free-form user memo. */
  note?: string;
  /** Time the memo was last edited (ms since epoch). */
  noteAt?: number;
};

type StorageShape = {
  items: BookmarkRef[];
};

const empty = (): StorageShape => ({ items: [] });

function read(): StorageShape {
  if (typeof window === "undefined") return empty();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as StorageShape;
    if (!parsed || !Array.isArray(parsed.items)) return empty();
    return parsed;
  } catch {
    return empty();
  }
}

function write(data: StorageShape) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    window.dispatchEvent(new Event(BOOKMARK_EVENT));
  } catch {
    /* ignore quota */
  }
}

function key(kind: BookmarkKind, id: string): string {
  return `${kind}:${id}`;
}

export function isBookmarked(kind: BookmarkKind, id: string): boolean {
  const k = key(kind, id);
  return read().items.some((b) => key(b.kind, b.id) === k);
}

export function toggleBookmark(
  kind: BookmarkKind,
  id: string,
  context?: string,
): boolean {
  const data = read();
  const k = key(kind, id);
  const idx = data.items.findIndex((b) => key(b.kind, b.id) === k);
  if (idx >= 0) {
    data.items.splice(idx, 1);
    write(data);
    return false;
  }
  data.items.unshift({ kind, id, context, ts: Date.now() });
  // Cap to a reasonable size to avoid runaway growth.
  data.items = data.items.slice(0, 500);
  write(data);
  return true;
}

export function listBookmarks(): BookmarkRef[] {
  return read().items;
}

const MAX_NOTE_LENGTH = 4000;

/** Add or update a memo on a bookmark. Creates the bookmark if missing. */
export function setBookmarkNote(
  kind: BookmarkKind,
  id: string,
  note: string,
  context?: string,
): void {
  const data = read();
  const k = key(kind, id);
  const trimmed = note.slice(0, MAX_NOTE_LENGTH);
  const idx = data.items.findIndex((b) => key(b.kind, b.id) === k);
  if (idx >= 0) {
    const existing = data.items[idx];
    data.items[idx] = {
      ...existing,
      note: trimmed.length === 0 ? undefined : trimmed,
      noteAt: trimmed.length === 0 ? undefined : Date.now(),
    };
  } else {
    if (trimmed.length === 0) return;
    data.items.unshift({
      kind,
      id,
      context,
      ts: Date.now(),
      note: trimmed,
      noteAt: Date.now(),
    });
    data.items = data.items.slice(0, 500);
  }
  write(data);
}

export function getBookmarkNote(
  kind: BookmarkKind,
  id: string,
): string | undefined {
  const k = key(kind, id);
  return read().items.find((b) => key(b.kind, b.id) === k)?.note;
}

export function listBookmarkKeys(): Set<string> {
  return new Set(read().items.map((b) => key(b.kind, b.id)));
}
