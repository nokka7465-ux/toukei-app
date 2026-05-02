"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { tracks, type EnrichedQuestion, getQuestionsById } from "@/lib/all-questions";
import {
  PROGRESS_EVENT,
  getProgress,
  type ProgressData,
} from "@/lib/progress";
import { MixedText } from "./MixedText";

type Recommendation = {
  question: EnrichedQuestion;
  reason: string;
  weight: number;
};

/**
 * Score-based recommendation:
 * - SRS-due wrong questions (highest priority, but already shown on /review)
 * - Questions in the user's weakest category
 * - Random questions from tracks the user is currently working on
 * - Brand-new tracks the user hasn't attempted yet (introduction)
 */
function buildRecommendations(data: ProgressData): Recommendation[] {
  const lookup = getQuestionsById();
  const allQuestions = [...lookup.values()];
  const seen = new Set(Object.keys(data.questions));

  // Compute per-category wrong/total counts.
  const categoryStats = new Map<string, { wrong: number; attempted: number }>();
  for (const q of allQuestions) {
    if (!categoryStats.has(q.category)) {
      categoryStats.set(q.category, { wrong: 0, attempted: 0 });
    }
  }
  for (const [id, r] of Object.entries(data.questions)) {
    const q = lookup.get(id);
    if (!q) continue;
    const s = categoryStats.get(q.category);
    if (!s) continue;
    s.attempted += 1;
    if (!r.correct) s.wrong += 1;
  }

  // Find weakest categories (highest wrong rate, must have ≥ 1 attempt).
  const weakest = Array.from(categoryStats.entries())
    .filter(([, s]) => s.attempted > 0 && s.wrong > 0)
    .sort((a, b) => b[1].wrong / b[1].attempted - a[1].wrong / a[1].attempted)
    .slice(0, 3)
    .map(([cat]) => cat);

  const recs: Recommendation[] = [];
  const used = new Set<string>();

  // Strategy 1: weakest category, prefer untried questions
  for (const cat of weakest) {
    const candidate = allQuestions.find(
      (q) => q.category === cat && !seen.has(q.id) && !used.has(q.id),
    );
    if (candidate) {
      recs.push({
        question: candidate,
        reason: `苦手分野「${cat}」の未挑戦問題`,
        weight: 100,
      });
      used.add(candidate.id);
    }
  }

  // Strategy 2: tracks the user has been working on but hasn't completed
  const activeTrackKeys = new Set<string>();
  for (const id of seen) {
    const q = lookup.get(id);
    if (q) activeTrackKeys.add(q.trackKey);
  }
  for (const track of tracks) {
    if (!activeTrackKeys.has(track.key)) continue;
    const next = track.questions.find(
      (q) => !seen.has(q.id) && !used.has(q.id),
    );
    if (next) {
      const enriched = lookup.get(next.id);
      if (enriched) {
        recs.push({
          question: enriched,
          reason: `${track.label} の続きから`,
          weight: 50,
        });
        used.add(next.id);
      }
    }
    if (recs.length >= 5) break;
  }

  // Strategy 3: introduction track for total newcomers
  if (recs.length < 3 && seen.size === 0) {
    const intro = tracks.find((t) => t.key === "intro");
    if (intro) {
      for (let i = 0; i < Math.min(3, intro.questions.length); i++) {
        const q = intro.questions[i];
        const enriched = lookup.get(q.id);
        if (enriched && !used.has(q.id)) {
          recs.push({
            question: enriched,
            reason: "入門編からスタート",
            weight: 10,
          });
          used.add(q.id);
        }
      }
    }
  }

  // Cap at 5 cards
  return recs.slice(0, 5);
}

export function RecommendedQuestions() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<ProgressData>({ questions: {} });

  useEffect(() => {
    setMounted(true);
    setData(getProgress());
    const handler = () => setData(getProgress());
    window.addEventListener(PROGRESS_EVENT, handler);
    return () => window.removeEventListener(PROGRESS_EVENT, handler);
  }, []);

  const recs = useMemo(() => buildRecommendations(data), [data]);

  if (!mounted) return null;
  if (recs.length === 0) return null;

  return (
    <section className="mb-12 paper rounded-lg p-5 md:p-6">
      <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
        <div>
          <div className="chapter-eyebrow mb-1">For You</div>
          <h2 className="text-base font-bold">あなたへのおすすめ問題</h2>
          <p className="text-[10px] text-[var(--muted)] ui-sans mt-0.5">
            学習履歴をもとに自動レコメンド
          </p>
        </div>
      </div>
      <ul className="space-y-2">
        {recs.map((r) => (
          <li key={r.question.id}>
            <Link
              href={r.question.trackHref}
              className="block paper rounded-lg p-3 hover:bg-[var(--background)] transition border border-[var(--page-border)] hover:border-[var(--accent)] group"
            >
              <div className="flex items-baseline justify-between gap-3 flex-wrap text-xs ui-sans mb-1">
                <span className="text-[var(--muted-strong)]">
                  {r.question.trackLabel} · {r.question.category}
                </span>
                <span className="text-[10px] text-[var(--accent)] font-bold">
                  {r.reason}
                </span>
              </div>
              <div className="text-sm leading-snug line-clamp-2 group-hover:text-[var(--link)]">
                <MixedText text={r.question.question} />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
