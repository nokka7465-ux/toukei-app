"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Quiz } from "@/components/Quiz";
import {
  PROGRESS_EVENT,
  getProgress,
  getWrongQuestionIds,
  type ProgressData,
} from "@/lib/progress";
import { getQuestionsById, type EnrichedQuestion } from "@/lib/all-questions";

type SessionState =
  | { kind: "loading" }
  | { kind: "empty"; data: ProgressData }
  | { kind: "ready"; questions: EnrichedQuestion[]; total: number };

export function ReviewPageClient() {
  const [state, setState] = useState<SessionState>({ kind: "loading" });
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const handler = () => setVersion((v) => v + 1);
    window.addEventListener(PROGRESS_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  // Take a snapshot of wrong questions ONLY when the user (re-)opens the page.
  // Once the session is "ready", we don't shrink the list as they answer
  // correctly mid-session — that would be jarring. They can re-enter to refresh.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initial = useMemo(() => buildInitial(), []);

  useEffect(() => {
    setState(initial);
  }, [initial]);

  // If user manually clears progress while page is open, reset to empty.
  useEffect(() => {
    if (version === 0) return;
    const data = getProgress();
    const stillHasWrong = Object.values(data.questions).some((r) => !r.correct);
    if (!stillHasWrong) {
      setState({ kind: "empty", data });
    }
  }, [version]);

  if (state.kind === "loading") {
    return (
      <div className="text-center py-16 text-[var(--muted)] ui-sans text-sm">
        読み込み中…
      </div>
    );
  }

  if (state.kind === "empty") {
    return (
      <div className="paper rounded-lg p-8 text-center">
        <div className="text-5xl mb-3">🎉</div>
        <h2 className="text-xl font-bold mb-2">復習する問題はありません</h2>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-5">
          これまでに解いた問題はすべて正解しています。
          <br />
          演習問題を解くと、間違えた問題がここに自動で集まります。
        </p>
        <div className="flex flex-wrap gap-2 justify-center ui-sans text-sm">
          <Link
            href="/quiz"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            演習問題一覧へ →
          </Link>
          <Link
            href="/"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            ホームへ戻る
          </Link>
        </div>
      </div>
    );
  }

  // Group by track for display
  const byTrack = new Map<string, { label: string; href: string; count: number }>();
  for (const q of state.questions) {
    const cur = byTrack.get(q.trackKey);
    if (cur) cur.count += 1;
    else
      byTrack.set(q.trackKey, {
        label: q.trackLabel,
        href: q.trackHref,
        count: 1,
      });
  }

  return (
    <div className="space-y-6">
      <div className="paper rounded-lg p-5">
        <div className="text-xs text-[var(--muted)] ui-sans mb-2">
          内訳({state.total} 問)
        </div>
        <div className="flex flex-wrap gap-2 text-xs ui-sans">
          {Array.from(byTrack.entries()).map(([key, info]) => (
            <Link
              key={key}
              href={info.href}
              className="px-2.5 py-1 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
            >
              {info.label}{" "}
              <span className="text-[var(--muted)]">×{info.count}</span>
            </Link>
          ))}
        </div>
      </div>

      <Quiz questions={state.questions} />
    </div>
  );
}

function buildInitial(): SessionState {
  if (typeof window === "undefined") return { kind: "loading" };
  const ids = getWrongQuestionIds();
  if (ids.length === 0) return { kind: "empty", data: getProgress() };
  const lookup = getQuestionsById();
  const questions = ids
    .map((id) => lookup.get(id))
    .filter((q): q is EnrichedQuestion => Boolean(q));
  if (questions.length === 0) return { kind: "empty", data: getProgress() };
  return { kind: "ready", questions, total: questions.length };
}
