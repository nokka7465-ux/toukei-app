"use client";

const STORAGE_KEY = "toukei-app:recent:v1";
export const RECENT_EVENT = "toukei-recent-update";
const MAX_ITEMS = 20;
/** 同一ページへの連続訪問は無視する間隔(ms)。連続クリックで履歴が埋まるのを防ぐ */
const DEDUPE_WINDOW_MS = 30_000;

export type RecentEntry = {
  /** 履歴上の一意 ID。通常は path と等価 */
  id: string;
  /** 表示用タイトル */
  title: string;
  /** リンク先 path */
  href: string;
  /** 種別タグ。表示でフィルタ用 */
  kind?: "blog" | "textbook" | "tool" | "glossary" | "page";
  /** カテゴリ等の補助コンテキスト */
  context?: string;
  /** 訪問時刻 (ms since epoch) */
  ts: number;
};

type StorageShape = {
  items: RecentEntry[];
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
    window.dispatchEvent(new Event(RECENT_EVENT));
  } catch {
    /* quota — ignore */
  }
}

/** ページ訪問を記録(同一 ID なら先頭へ移動)。連続訪問はデバウンスする */
export function recordVisit(entry: Omit<RecentEntry, "ts">): void {
  const data = read();
  const now = Date.now();
  const existing = data.items.find((it) => it.id === entry.id);
  if (existing && now - existing.ts < DEDUPE_WINDOW_MS) {
    // 直近の同一訪問は無視(履歴が一瞬で埋まらないように)
    return;
  }
  const filtered = data.items.filter((it) => it.id !== entry.id);
  filtered.unshift({ ...entry, ts: now });
  data.items = filtered.slice(0, MAX_ITEMS);
  write(data);
}

export function listRecent(): RecentEntry[] {
  return read().items;
}

export function clearRecent(): void {
  write(empty());
}
