"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PROGRESS_EVENT } from "@/lib/progress";
import { getTrackStats, type TrackStats } from "@/lib/progress-stats";

function bandColor(pct: number): string {
  if (pct >= 80) return "bg-emerald-500 dark:bg-emerald-400";
  if (pct >= 60) return "bg-sky-500 dark:bg-sky-400";
  if (pct >= 40) return "bg-amber-500 dark:bg-amber-400";
  return "bg-rose-500 dark:bg-rose-400";
}

function ProgressBar({ pct, dim }: { pct: number; dim?: boolean }) {
  return (
    <div className="h-1.5 w-full bg-[var(--page-border)] rounded-full overflow-hidden">
      <div
        className={`${bandColor(pct)} h-full transition-all ${dim ? "opacity-50" : ""}`}
        style={{ width: `${Math.max(2, Math.min(100, pct))}%` }}
      />
    </div>
  );
}

export function TrackStatsDashboard() {
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<TrackStats[]>([]);
  const [openKey, setOpenKey] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setStats(getTrackStats());
    const handler = () => setStats(getTrackStats());
    window.addEventListener(PROGRESS_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  if (!mounted) return null;

  if (stats.length === 0) {
    return (
      <section className="paper rounded-lg p-5 text-sm text-[var(--muted-strong)] leading-relaxed">
        まだ演習履歴がありません。1 問でも解くとここに単元別の達成率が表示されます。
      </section>
    );
  }

  return (
    <section>
      <header className="mb-4 flex items-baseline justify-between gap-2 flex-wrap">
        <div>
          <div className="chapter-eyebrow mb-1">Stats</div>
          <h2 className="text-xl font-bold">トラック・単元別の達成度</h2>
        </div>
        <p className="text-[11px] text-[var(--muted)] ui-sans">
          着手済みのトラックのみ表示。トラックをクリックで単元別の正答率が開きます。
        </p>
      </header>
      <ul className="space-y-2">
        {stats.map((t) => {
          const open = openKey === t.trackKey;
          return (
            <li key={t.trackKey}>
              <button
                type="button"
                onClick={() => setOpenKey(open ? null : t.trackKey)}
                aria-expanded={open}
                className="w-full text-left paper rounded-lg p-4 hover:bg-[var(--background)] transition"
              >
                <div className="flex items-baseline justify-between gap-3 flex-wrap">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold">{t.trackLabel}</span>
                    <span className="text-[11px] text-[var(--muted)] ui-sans tabular-nums">
                      {t.attempted}/{t.total} 着手 ・ {t.correct} 正解
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold tabular-nums">
                      正答率 {t.accuracy}%
                    </span>
                    <span
                      className="text-xs ui-sans text-[var(--muted)]"
                      aria-hidden="true"
                    >
                      {open ? "▴" : "▾"}
                    </span>
                  </div>
                </div>
                <div className="mt-2">
                  <ProgressBar pct={t.accuracy} />
                </div>
              </button>
              {open && (
                <div className="mt-1 paper rounded-lg p-4 ui-sans text-xs">
                  {t.categories.length > 0 && (
                    <div className="mb-4">
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-bold mb-2">
                        単元別(正答率の低い順)
                      </div>
                      <ul className="space-y-2">
                        {t.categories.map((c) => (
                          <li key={c.category}>
                            <div className="flex items-baseline justify-between gap-3">
                              <span className="font-bold">{c.category}</span>
                              <span className="tabular-nums text-[var(--muted-strong)]">
                                {c.attempted === 0
                                  ? "未着手"
                                  : `${c.correct}/${c.attempted} ・ ${c.accuracy}%`}
                              </span>
                            </div>
                            <ProgressBar
                              pct={c.attempted === 0 ? 0 : c.accuracy}
                              dim={c.attempted === 0}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {t.difficulties.length > 0 && (
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] font-bold mb-2">
                        難易度別
                      </div>
                      <ul className="space-y-2">
                        {t.difficulties.map((d) => (
                          <li key={d.difficulty}>
                            <div className="flex items-baseline justify-between gap-3">
                              <span className="font-bold">{d.difficulty}</span>
                              <span className="tabular-nums text-[var(--muted-strong)]">
                                {d.attempted === 0
                                  ? "未着手"
                                  : `${d.correct}/${d.attempted} ・ ${d.accuracy}%`}
                              </span>
                            </div>
                            <ProgressBar
                              pct={d.attempted === 0 ? 0 : d.accuracy}
                              dim={d.attempted === 0}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="mt-4 flex justify-end">
                    <Link
                      href={t.trackHref}
                      className="text-[var(--link)] hover:underline"
                    >
                      このトラックの問題へ →
                    </Link>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
