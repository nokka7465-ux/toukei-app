"use client";

import { useEffect, useState } from "react";
import { PROGRESS_EVENT, getProgress, type ProgressData } from "@/lib/progress";
import { evaluateAchievements } from "@/lib/achievements";

export function AchievementsPanel() {
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

  const achievements = evaluateAchievements(data);
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const total = achievements.length;
  const hasAny = unlockedCount > 0 || data.questions && Object.keys(data.questions).length > 0;
  if (!hasAny) return null;

  return (
    <section className="mb-12 paper rounded-lg p-6 md:p-7">
      <div className="flex items-baseline justify-between mb-4 gap-3 flex-wrap">
        <div>
          <div className="chapter-eyebrow mb-1">Achievements</div>
          <h2 className="text-2xl font-bold">バッジ</h2>
        </div>
        <span className="text-xs text-[var(--muted)] ui-sans">
          獲得{" "}
          <span className="font-bold text-[var(--foreground)] tabular-nums">
            {unlockedCount}
          </span>
          <span className="text-[var(--muted)]"> / {total}</span>
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {achievements.map((a) => (
          <div
            key={a.id}
            className={`relative paper rounded-lg p-3 text-center border ${
              a.unlocked
                ? "border-[var(--accent)]"
                : "border-[var(--page-border)] opacity-60"
            }`}
            title={a.description}
          >
            <div
              className={`text-3xl mb-1 ${a.unlocked ? "" : "grayscale"}`}
              aria-hidden="true"
            >
              {a.icon}
            </div>
            <div className="text-xs font-bold leading-tight">{a.title}</div>
            <div className="text-[10px] text-[var(--muted)] leading-snug mt-1 ui-sans">
              {a.description}
            </div>
            {!a.unlocked && a.progress && (
              <div className="text-[10px] text-[var(--muted)] mt-1 ui-sans tabular-nums">
                {a.progress.current}/{a.progress.target}
              </div>
            )}
            {a.unlocked && (
              <div
                aria-hidden="true"
                className="absolute top-1 right-1 text-[10px] text-[var(--accent)]"
              >
                ✓
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
