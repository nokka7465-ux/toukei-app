"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { tracks } from "@/lib/all-questions";
import {
  PROGRESS_EVENT,
  getProgress,
  summarizeTrack,
  clearProgress,
  getStreak,
  type ProgressData,
} from "@/lib/progress";

const groupOrder: Array<{
  key: "main" | "math" | "cert";
  label: string;
}> = [
  { key: "main", label: "統計検定本体" },
  { key: "math", label: "学習サポート" },
  { key: "cert", label: "関連検定" },
];

export function ProgressDashboard() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<ProgressData>({ questions: {} });

  useEffect(() => {
    setMounted(true);
    setData(getProgress());
    const handler = () => setData(getProgress());
    window.addEventListener(PROGRESS_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  if (!mounted) return null;

  const totals = tracks.reduce(
    (acc, t) => {
      const s = summarizeTrack(
        t.questions.map((q) => q.id),
        data,
      );
      acc.total += s.total;
      acc.correct += s.correct;
      acc.wrong += s.wrong;
      return acc;
    },
    { total: 0, correct: 0, wrong: 0 },
  );

  const overallPct =
    totals.total === 0 ? 0 : Math.round((totals.correct / totals.total) * 100);
  const hasAnyAttempt = totals.correct + totals.wrong > 0;

  if (!hasAnyAttempt) {
    return (
      <section className="mb-12 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">Your Progress</div>
        <h2 className="text-2xl font-bold mb-3">学習進捗トラッキング</h2>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-4">
          演習問題を解くと、ここに <strong>級ごとの正答率</strong> と
          <strong> 苦手問題リスト</strong>{" "}
          が自動で記録されます。サーバーには送信されず、お使いのブラウザだけに保存されます。
        </p>
        <Link
          href="/quiz"
          className="inline-block px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold text-sm hover:bg-[var(--accent-strong)] ui-sans"
        >
          演習問題を見る →
        </Link>
      </section>
    );
  }

  return (
    <section className="mb-12 paper rounded-lg p-6 md:p-7">
      <div className="flex items-baseline justify-between mb-2 gap-3 flex-wrap">
        <div>
          <div className="chapter-eyebrow mb-1">Your Progress</div>
          <h2 className="text-2xl font-bold">学習進捗</h2>
        </div>
        {totals.wrong > 0 && (
          <Link
            href="/review"
            className="text-xs px-3 py-1.5 bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200 rounded font-bold hover:bg-red-200 dark:hover:bg-red-900/60 ui-sans"
          >
            苦手問題 {totals.wrong} 問を復習 →
          </Link>
        )}
      </div>

      {/* Streak / activity */}
      {(() => {
        const s = getStreak(data);
        return (
          <div className="grid grid-cols-3 gap-3 mb-5 text-center">
            <div className="paper rounded p-3 border border-[var(--page-border)]">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans">
                連続学習
              </div>
              <div className="text-2xl font-bold mt-0.5 tabular-nums">
                {s.current}
                <span className="text-xs text-[var(--muted)] ml-0.5">日</span>
                {s.current >= 3 && (
                  <span aria-hidden="true" className="ml-1">
                    🔥
                  </span>
                )}
              </div>
            </div>
            <div className="paper rounded p-3 border border-[var(--page-border)]">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans">
                最長記録
              </div>
              <div className="text-2xl font-bold mt-0.5 tabular-nums">
                {s.best}
                <span className="text-xs text-[var(--muted)] ml-0.5">日</span>
              </div>
            </div>
            <div className="paper rounded p-3 border border-[var(--page-border)]">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans">
                学習日数
              </div>
              <div className="text-2xl font-bold mt-0.5 tabular-nums">
                {s.totalActiveDays}
                <span className="text-xs text-[var(--muted)] ml-0.5">日</span>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Overall progress */}
      <div className="mb-5">
        <div className="flex items-baseline justify-between text-xs ui-sans mb-1.5">
          <span className="text-[var(--muted)]">全体</span>
          <span className="text-[var(--muted-strong)]">
            <span className="text-base font-bold text-[var(--foreground)]">
              {totals.correct}
            </span>
            <span className="text-[var(--muted)]"> / {totals.total} 問正解</span>
            <span className="ml-2 text-[var(--muted)]">({overallPct}%)</span>
          </span>
        </div>
        <div className="h-2 rounded-full bg-[var(--background)] border border-[var(--page-border)] overflow-hidden">
          <div
            className="h-full bg-[var(--accent)] transition-all"
            style={{ width: `${overallPct}%` }}
            aria-label={`全体の正答率 ${overallPct}%`}
          />
        </div>
      </div>

      {/* Per-track */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
        {groupOrder.map((group) => {
          const groupTracks = tracks.filter((t) => t.group === group.key);
          const groupAttempted = groupTracks.some((t) => {
            const s = summarizeTrack(
              t.questions.map((q) => q.id),
              data,
            );
            return s.attempted > 0;
          });
          if (!groupAttempted) return null;
          return (
            <div key={group.key} className="space-y-2">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans pt-1">
                {group.label}
              </div>
              {groupTracks.map((t) => {
                const s = summarizeTrack(
                  t.questions.map((q) => q.id),
                  data,
                );
                if (s.attempted === 0) return null;
                return (
                  <Link
                    key={t.key}
                    href={t.href}
                    className="block group hover:bg-[var(--background)] -mx-2 px-2 py-1 rounded transition"
                  >
                    <div className="flex items-baseline justify-between text-xs ui-sans mb-1">
                      <span className="font-bold text-[var(--foreground)] group-hover:text-[var(--link)]">
                        {t.label}
                      </span>
                      <span className="text-[var(--muted)] tabular-nums">
                        {s.correct}/{s.total}{" "}
                        <span className="text-[var(--muted)]">({s.pct}%)</span>
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--background)] border border-[var(--page-border)] overflow-hidden">
                      <div
                        className="h-full bg-[var(--accent)]"
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="mt-5 pt-4 border-t border-[var(--page-border)] flex items-center justify-between gap-3 ui-sans text-xs">
        <span className="text-[var(--muted)]">
          進捗データはこのブラウザにのみ保存されます
        </span>
        <button
          type="button"
          onClick={() => {
            if (
              typeof window !== "undefined" &&
              window.confirm("学習進捗をすべてクリアしますか？")
            ) {
              clearProgress();
            }
          }}
          className="text-[var(--muted)] hover:text-red-600 dark:hover:text-red-400 underline"
        >
          進捗をクリア
        </button>
      </div>
    </section>
  );
}
