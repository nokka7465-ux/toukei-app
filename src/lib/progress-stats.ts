"use client";

import { tracks } from "@/lib/all-questions";
import { getProgress } from "@/lib/progress";

export type CategoryStat = {
  category: string;
  total: number;
  attempted: number;
  correct: number;
  /** 達成率 = correct / total (%) */
  pct: number;
  /** 正答率 = correct / attempted (%, attempted=0 のとき 0) */
  accuracy: number;
};

export type DifficultyStat = {
  difficulty: string;
  total: number;
  attempted: number;
  correct: number;
  pct: number;
  accuracy: number;
};

export type TrackStats = {
  trackKey: string;
  trackLabel: string;
  trackHref: string;
  total: number;
  attempted: number;
  correct: number;
  pct: number;
  accuracy: number;
  categories: CategoryStat[];
  difficulties: DifficultyStat[];
};

/** すべてのトラックについて、カテゴリ別・難易度別の集計を返す。`attempted=0` のトラックは省略。 */
export function getTrackStats(): TrackStats[] {
  const data = getProgress();
  const out: TrackStats[] = [];

  for (const t of tracks) {
    const byCat = new Map<string, { total: number; correct: number; attempted: number }>();
    const byDiff = new Map<string, { total: number; correct: number; attempted: number }>();
    let total = 0;
    let correct = 0;
    let attempted = 0;

    for (const q of t.questions) {
      total += 1;
      const r = data.questions[q.id];
      const wasAttempted = Boolean(r);
      const wasCorrect = r?.correct === true;
      if (wasAttempted) attempted += 1;
      if (wasCorrect) correct += 1;

      const c = byCat.get(q.category) ?? { total: 0, correct: 0, attempted: 0 };
      c.total += 1;
      if (wasAttempted) c.attempted += 1;
      if (wasCorrect) c.correct += 1;
      byCat.set(q.category, c);

      const diffKey = String(q.difficulty);
      const d = byDiff.get(diffKey) ?? { total: 0, correct: 0, attempted: 0 };
      d.total += 1;
      if (wasAttempted) d.attempted += 1;
      if (wasCorrect) d.correct += 1;
      byDiff.set(diffKey, d);
    }

    if (attempted === 0) continue;

    const categories: CategoryStat[] = [...byCat.entries()]
      .map(([category, v]) => ({
        category,
        total: v.total,
        attempted: v.attempted,
        correct: v.correct,
        pct: v.total === 0 ? 0 : Math.round((v.correct / v.total) * 100),
        accuracy:
          v.attempted === 0 ? 0 : Math.round((v.correct / v.attempted) * 100),
      }))
      // 苦手単元を見つけやすく: 着手済み中で正答率が低い順 → 未着手は末尾
      .sort((a, b) => {
        if (a.attempted === 0 && b.attempted > 0) return 1;
        if (a.attempted > 0 && b.attempted === 0) return -1;
        return a.accuracy - b.accuracy;
      });

    const difficulties: DifficultyStat[] = [...byDiff.entries()]
      .map(([difficulty, v]) => ({
        difficulty,
        total: v.total,
        attempted: v.attempted,
        correct: v.correct,
        pct: v.total === 0 ? 0 : Math.round((v.correct / v.total) * 100),
        accuracy:
          v.attempted === 0 ? 0 : Math.round((v.correct / v.attempted) * 100),
      }))
      .sort((a, b) => a.difficulty.localeCompare(b.difficulty));

    out.push({
      trackKey: t.key,
      trackLabel: t.label,
      trackHref: t.href,
      total,
      attempted,
      correct,
      pct: total === 0 ? 0 : Math.round((correct / total) * 100),
      accuracy: attempted === 0 ? 0 : Math.round((correct / attempted) * 100),
      categories,
      difficulties,
    });
  }
  // 着手量が多い順
  return out.sort((a, b) => b.attempted - a.attempted);
}
