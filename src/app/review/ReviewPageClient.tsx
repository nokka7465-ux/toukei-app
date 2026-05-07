"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Quiz } from "@/components/Quiz";
import { TrackStatsDashboard } from "@/components/TrackStatsDashboard";
import {
  PROGRESS_EVENT,
  getDueQuestionIds,
  getProgress,
  getScheduledQuestionIds,
  getSrsStats,
  getWrongQuestionIds,
  type SrsStats,
} from "@/lib/progress";
import { getQuestionsById, type EnrichedQuestion } from "@/lib/all-questions";

type Tab = "due" | "wrong" | "scheduled";

const TABS: { key: Tab; label: string; description: string }[] = [
  {
    key: "due",
    label: "今日復習",
    description: "間隔反復(SRS)で今日が復習日になっている問題です。",
  },
  {
    key: "wrong",
    label: "間違い全件",
    description: "これまでに最後に間違えた問題をすべて表示します。",
  },
  {
    key: "scheduled",
    label: "今後の予定",
    description: "正解できた問題も含む、SRSで予定されている復習日の一覧です。",
  },
];

type SnapshotState =
  | { kind: "loading" }
  | { kind: "empty"; emptyVariant: Tab }
  | { kind: "ready"; questions: EnrichedQuestion[]; total: number };

export function ReviewPageClient() {
  const [tab, setTab] = useState<Tab>("due");
  const [version, setVersion] = useState(0);
  const [stats, setStats] = useState<SrsStats | null>(null);
  const [scheduledRows, setScheduledRows] = useState<
    { question: EnrichedQuestion; dueAt: number }[]
  >([]);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    const handler = () => setVersion((v) => v + 1);
    window.addEventListener(PROGRESS_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(PROGRESS_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  useEffect(() => {
    setStats(getSrsStats());
    setWrongCount(getWrongQuestionIds().length);
    const lookup = getQuestionsById();
    setScheduledRows(
      getScheduledQuestionIds()
        .map(({ id, dueAt }) => {
          const q = lookup.get(id);
          return q ? { question: q, dueAt } : null;
        })
        .filter((r): r is { question: EnrichedQuestion; dueAt: number } => Boolean(r)),
    );
  }, [version]);

  // Build the quiz session for the active tab. We snapshot when the tab opens
  // and re-snapshot only when the user explicitly switches tabs — answering
  // mid-session shouldn't shrink the active list.
  const session: SnapshotState = useMemo(() => {
    if (typeof window === "undefined") return { kind: "loading" };
    const data = getProgress();
    if (Object.keys(data.questions).length === 0) {
      return { kind: "empty", emptyVariant: tab };
    }
    const lookup = getQuestionsById();
    let ids: string[];
    if (tab === "due") ids = getDueQuestionIds();
    else if (tab === "wrong") ids = getWrongQuestionIds();
    else ids = getScheduledQuestionIds().map((r) => r.id);

    const questions = ids
      .map((id) => lookup.get(id))
      .filter((q): q is EnrichedQuestion => Boolean(q));
    if (questions.length === 0) return { kind: "empty", emptyVariant: tab };
    return { kind: "ready", questions, total: questions.length };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  const renderTabBar = (
    <div className="paper rounded-lg p-2 ui-sans text-xs flex flex-wrap gap-1">
      {TABS.map((t) => {
        const display =
          t.key === "due"
            ? (stats?.dueNow ?? 0) + (stats?.legacyWrong ?? 0)
            : t.key === "wrong"
              ? wrongCount
              : scheduledRows.length;
        const active = tab === t.key;
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`px-3 py-1.5 rounded transition ${
              active
                ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold"
                : "hover:bg-[var(--background)] text-[var(--muted-strong)]"
            }`}
          >
            {t.label}
            <span
              className={`ml-1.5 ${active ? "" : "text-[var(--muted)]"}`}
            >
              ({display})
            </span>
          </button>
        );
      })}
    </div>
  );

  const statsStrip = stats ? (
    <div className="paper rounded-lg p-4 ui-sans text-xs grid grid-cols-2 sm:grid-cols-4 gap-3">
      <Stat label="今日が期限" value={stats.dueNow + stats.legacyWrong} accent />
      <Stat label="明日" value={stats.dueTomorrow} />
      <Stat label="今週合計" value={stats.dueThisWeek + stats.legacyWrong} />
      <Stat label="スケジュール済" value={stats.scheduled} />
    </div>
  ) : null;

  const activeDescription = TABS.find((t) => t.key === tab)?.description;

  return (
    <div className="space-y-5">
      {statsStrip}
      <TrackStatsDashboard />
      {renderTabBar}
      {activeDescription && (
        <p className="text-xs text-[var(--muted)] ui-sans leading-relaxed">
          {activeDescription}
        </p>
      )}

      {session.kind === "loading" && (
        <div className="text-center py-16 text-[var(--muted)] ui-sans text-sm">
          読み込み中…
        </div>
      )}

      {session.kind === "empty" && <EmptyState variant={session.emptyVariant} />}

      {session.kind === "ready" && tab !== "scheduled" && (
        <Quiz questions={session.questions} />
      )}

      {session.kind === "ready" && tab === "scheduled" && (
        <ScheduledList rows={scheduledRows} />
      )}
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div className="text-center">
      <div className="text-[10px] text-[var(--muted)] mb-1">{label}</div>
      <div
        className={`text-2xl font-bold ${accent ? "text-[var(--accent)]" : "text-[var(--foreground)]"}`}
      >
        {value}
      </div>
    </div>
  );
}

function EmptyState({ variant }: { variant: Tab }) {
  const messages: Record<Tab, { emoji: string; title: string; body: string }> = {
    due: {
      emoji: "🎉",
      title: "今日復習する問題はありません",
      body: "今日が復習予定の問題はありません。新しい演習問題に挑戦しましょう。",
    },
    wrong: {
      emoji: "💯",
      title: "間違えた問題はありません",
      body: "これまでに解いた問題はすべて正解しています。",
    },
    scheduled: {
      emoji: "📅",
      title: "予定されている復習はありません",
      body: "演習問題を解くと、SRSが次の復習日を自動で計算します。",
    },
  };
  const m = messages[variant];
  return (
    <div className="paper rounded-lg p-8 text-center">
      <div className="text-5xl mb-3">{m.emoji}</div>
      <h2 className="text-xl font-bold mb-2">{m.title}</h2>
      <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-5">
        {m.body}
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

function ScheduledList({
  rows,
}: {
  rows: { question: EnrichedQuestion; dueAt: number }[];
}) {
  const now = Date.now();
  const buckets = new Map<string, typeof rows>();
  for (const r of rows) {
    const key = bucketLabel(r.dueAt, now);
    const arr = buckets.get(key) ?? [];
    arr.push(r);
    buckets.set(key, arr);
  }
  return (
    <div className="space-y-5">
      {Array.from(buckets.entries()).map(([label, items]) => (
        <div key={label} className="paper rounded-lg p-4">
          <div className="ui-sans text-xs font-bold text-[var(--muted-strong)] mb-3">
            {label} <span className="text-[var(--muted)]">({items.length})</span>
          </div>
          <ul className="space-y-1.5 text-sm">
            {items.slice(0, 30).map(({ question, dueAt }) => (
              <li
                key={question.id}
                className="flex items-baseline gap-3 leading-snug"
              >
                <span className="text-[10px] text-[var(--muted)] ui-sans whitespace-nowrap shrink-0">
                  {formatDate(dueAt)}
                </span>
                <Link
                  href={question.trackHref}
                  className="text-[var(--link)] hover:underline truncate"
                  title={question.question}
                >
                  {question.trackLabel}
                </Link>
                <span className="text-[var(--muted)] truncate">
                  · {question.question}
                </span>
              </li>
            ))}
            {items.length > 30 && (
              <li className="text-xs text-[var(--muted)] ui-sans pt-1">
                …ほか {items.length - 30} 問
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

function bucketLabel(dueAt: number, now: number): string {
  const day = 24 * 60 * 60 * 1000;
  const startOfToday = (() => {
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    return d.getTime();
  })();
  if (dueAt < startOfToday) return "期限超過";
  if (dueAt < startOfToday + day) return "今日";
  if (dueAt < startOfToday + 2 * day) return "明日";
  if (dueAt < startOfToday + 7 * day) return "今週中";
  if (dueAt < startOfToday + 30 * day) return "今月中";
  return "それ以降";
}

function formatDate(ts: number): string {
  const d = new Date(ts);
  return `${d.getMonth() + 1}/${d.getDate()}`;
}
