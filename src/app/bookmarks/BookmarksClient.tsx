"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  BOOKMARK_EVENT,
  listBookmarks,
  setBookmarkNote,
  toggleBookmark,
  type BookmarkKind,
  type BookmarkRef,
} from "@/lib/bookmarks";

function downloadFile(filename: string, text: string, mime = "text/plain") {
  if (typeof window === "undefined") return;
  const blob = new Blob([text], { type: `${mime};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
import { MixedText } from "@/components/MixedText";
import { Math } from "@/components/Math";

type QuestionEntry = {
  id: string;
  question: string;
  category: string;
  trackKey: string;
  trackLabel: string;
  trackHref: string;
};

type FormulaEntry = {
  id: string;
  name: string;
  tex: string;
  description: string;
  category: string;
  level: string;
};

type GlossaryEntry = {
  term: string;
  reading: string;
  definition: string;
  level: string;
  category: string;
  link?: string;
};

export function BookmarksClient({
  questions,
  formulas,
  terms,
}: {
  questions: QuestionEntry[];
  formulas: FormulaEntry[];
  terms: GlossaryEntry[];
}) {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<BookmarkRef[]>([]);

  useEffect(() => {
    setMounted(true);
    setItems(listBookmarks());
    const handler = () => setItems(listBookmarks());
    window.addEventListener(BOOKMARK_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(BOOKMARK_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const questionById = useMemo(() => {
    const m = new Map<string, QuestionEntry>();
    for (const q of questions) m.set(q.id, q);
    return m;
  }, [questions]);

  const formulaById = useMemo(() => {
    const m = new Map<string, FormulaEntry>();
    for (const f of formulas) m.set(f.id, f);
    return m;
  }, [formulas]);

  const termByName = useMemo(() => {
    const m = new Map<string, GlossaryEntry>();
    for (const t of terms) m.set(t.term, t);
    return m;
  }, [terms]);

  if (!mounted) {
    return (
      <p className="text-sm text-[var(--muted)] ui-sans">読み込み中…</p>
    );
  }

  if (items.length === 0) {
    return (
      <div className="paper rounded-lg p-8 text-center">
        <div className="text-5xl mb-3">☆</div>
        <h2 className="text-xl font-bold mb-2">ブックマークはまだありません</h2>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-5">
          演習問題の各カード右上、公式集や用語集の各項目に
          <br />☆ ボタンが付いています。タップして保存してみましょう。
        </p>
        <div className="flex flex-wrap gap-2 justify-center ui-sans text-sm">
          <Link
            href="/quiz"
            className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            演習問題を見る →
          </Link>
          <Link
            href="/glossary"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
          >
            用語集を見る
          </Link>
        </div>
      </div>
    );
  }

  const grouped: Record<BookmarkRef["kind"], BookmarkRef[]> = {
    question: [],
    formula: [],
    glossary: [],
    blog: [],
    textbook: [],
    tool: [],
  };
  for (const it of items) grouped[it.kind].push(it);

  function buildMarkdown(): string {
    const lines: string[] = [];
    lines.push("# 統計ロードマップ ─ ブックマーク エクスポート");
    lines.push("");
    lines.push(
      `エクスポート日時: ${new Date().toISOString().slice(0, 19).replace("T", " ")}`,
    );
    lines.push(`合計 ${items.length} 件`);
    lines.push("");

    if (grouped.question.length > 0) {
      lines.push(`## 演習問題 (${grouped.question.length} 件)`);
      lines.push("");
      for (const b of grouped.question) {
        const q = questionById.get(b.id);
        if (!q) continue;
        lines.push(`### ${q.trackLabel} · ${q.category}`);
        lines.push(`- ID: \`${q.id}\``);
        lines.push(`- 問題: ${q.question}`);
        lines.push(`- リンク: ${q.trackHref}`);
        if (b.note) {
          lines.push("- メモ:");
          for (const ln of b.note.split("\n")) lines.push(`  > ${ln}`);
        }
        lines.push("");
      }
    }

    if (grouped.formula.length > 0) {
      lines.push(`## 公式 (${grouped.formula.length} 件)`);
      lines.push("");
      for (const b of grouped.formula) {
        const f = formulaById.get(b.id);
        if (!f) continue;
        lines.push(`### ${f.name} (${f.level} ・ ${f.category})`);
        lines.push("```math");
        lines.push(f.tex);
        lines.push("```");
        lines.push(f.description);
        if (b.note) {
          lines.push("- メモ:");
          for (const ln of b.note.split("\n")) lines.push(`  > ${ln}`);
        }
        lines.push("");
      }
    }

    if (grouped.glossary.length > 0) {
      lines.push(`## 用語 (${grouped.glossary.length} 件)`);
      lines.push("");
      for (const b of grouped.glossary) {
        const t = termByName.get(b.id);
        if (!t) continue;
        lines.push(`### ${t.term} (${t.reading}) ─ ${t.level}級 ${t.category}`);
        lines.push(t.definition);
        if (b.note) {
          lines.push("- メモ:");
          for (const ln of b.note.split("\n")) lines.push(`  > ${ln}`);
        }
        lines.push("");
      }
    }

    const writeSelfResolving = (heading: string, list: BookmarkRef[]) => {
      if (list.length === 0) return;
      lines.push(`## ${heading} (${list.length} 件)`);
      lines.push("");
      for (const b of list) {
        const title = b.title ?? b.id;
        const href = b.href ?? "";
        lines.push(`### ${title}`);
        if (b.context) lines.push(`- 区分: ${b.context}`);
        if (href) lines.push(`- リンク: ${href}`);
        if (b.note) {
          lines.push("- メモ:");
          for (const ln of b.note.split("\n")) lines.push(`  > ${ln}`);
        }
        lines.push("");
      }
    };
    writeSelfResolving("ブログ記事", grouped.blog);
    writeSelfResolving("教科書セクション", grouped.textbook);
    writeSelfResolving("計算ツール", grouped.tool);

    return lines.join("\n");
  }

  function buildJson(): string {
    const data = {
      exportedAt: new Date().toISOString(),
      schema: "toukei-app:bookmarks-export:v1",
      items: items.map((b) => {
        if (b.kind === "question") {
          const q = questionById.get(b.id);
          return { ...b, resolved: q ? { ...q } : null };
        }
        if (b.kind === "formula") {
          const f = formulaById.get(b.id);
          return { ...b, resolved: f ? { ...f } : null };
        }
        const t = termByName.get(b.id);
        return { ...b, resolved: t ? { ...t } : null };
      }),
    };
    return JSON.stringify(data, null, 2);
  }

  function exportMarkdown() {
    const stamp = new Date().toISOString().slice(0, 10);
    downloadFile(`bookmarks-${stamp}.md`, buildMarkdown(), "text/markdown");
  }

  function exportJson() {
    const stamp = new Date().toISOString().slice(0, 10);
    downloadFile(`bookmarks-${stamp}.json`, buildJson(), "application/json");
  }

  return (
    <div className="space-y-10"><div className="paper rounded-lg p-3 ui-sans text-xs flex flex-wrap gap-2 print-hide">
        <span className="text-[var(--muted)] mr-1 self-center">エクスポート:</span>
        <button
          type="button"
          onClick={exportMarkdown}
          className="px-3 py-1.5 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)] hover:text-[var(--link)]"
        >
          📝 Markdown (.md)
        </button>
        <button
          type="button"
          onClick={exportJson}
          className="px-3 py-1.5 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)] hover:text-[var(--link)]"
        >
          📦 JSON (.json)
        </button>
        <span className="text-[var(--muted)] self-center ml-auto">
          メモ付きでダウンロードされます
        </span>
      </div>
      {grouped.question.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-xl font-bold">演習問題 ({grouped.question.length})</h2>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {grouped.question.map((b) => {
              const q = questionById.get(b.id);
              if (!q) return null;
              return (
                <li key={b.id} className="paper rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans mb-1">
                        {q.trackLabel} · {q.category}
                      </div>
                      <Link
                        href={q.trackHref}
                        className="text-sm leading-relaxed hover:underline"
                      >
                        <MixedText text={q.question} />
                      </Link>
                    </div>
                    <BookmarkRemove kind="question" id={b.id} />
                  </div>
                  <NoteEditor kind="question" id={b.id} initialNote={b.note} />
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {grouped.formula.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-xl font-bold">公式 ({grouped.formula.length})</h2>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {grouped.formula.map((b) => {
              const f = formulaById.get(b.id);
              if (!f) return null;
              return (
                <li key={b.id} className="paper rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans mb-1">
                        {f.level} · {f.category}
                      </div>
                      <Link
                        href={`/formulas/${f.level}#${f.id}`}
                        className="font-bold hover:underline"
                      >
                        {f.name}
                      </Link>
                      <div className="my-1.5 overflow-x-auto">
                        <Math tex={f.tex} block />
                      </div>
                      <div className="text-xs text-[var(--muted-strong)] leading-relaxed">
                        <MixedText text={f.description} />
                      </div>
                    </div>
                    <BookmarkRemove kind="formula" id={b.id} />
                  </div>
                  <NoteEditor kind="formula" id={b.id} initialNote={b.note} />
                </li>
              );
            })}
          </ul>
        </section>
      )}

      <SelfResolvingSection
        heading="ブログ記事"
        items={grouped.blog}
        kind="blog"
      />
      <SelfResolvingSection
        heading="教科書セクション"
        items={grouped.textbook}
        kind="textbook"
      />
      <SelfResolvingSection
        heading="計算ツール"
        items={grouped.tool}
        kind="tool"
      />

      {grouped.glossary.length > 0 && (
        <section>
          <div className="flex items-baseline justify-between mb-3">
            <h2 className="text-xl font-bold">用語 ({grouped.glossary.length})</h2>
          </div>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {grouped.glossary.map((b) => {
              const t = termByName.get(b.id);
              if (!t) return null;
              return (
                <li key={b.id} className="paper rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans mb-1">
                        {t.level} 級 · {t.category}
                      </div>
                      <div className="font-bold">
                        {t.term}{" "}
                        <span className="text-xs text-[var(--muted)] font-normal">
                          ({t.reading})
                        </span>
                      </div>
                      <div className="text-xs text-[var(--muted-strong)] leading-relaxed mt-1">
                        {t.definition}
                      </div>
                      {t.link && (
                        <Link
                          href={t.link}
                          className="text-xs text-[var(--link)] hover:underline mt-1 inline-block ui-sans"
                        >
                          関連節へ →
                        </Link>
                      )}
                    </div>
                    <BookmarkRemove kind="glossary" id={b.id} />
                  </div>
                  <NoteEditor kind="glossary" id={b.id} initialNote={b.note} />
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

function SelfResolvingSection({
  heading,
  items,
  kind,
}: {
  heading: string;
  items: BookmarkRef[];
  kind: BookmarkKind;
}) {
  if (items.length === 0) return null;
  return (
    <section>
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="text-xl font-bold">
          {heading} ({items.length})
        </h2>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {items.map((b) => {
          const title = b.title ?? b.id;
          const href = b.href ?? "#";
          return (
            <li key={b.id} className="paper rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  {b.context && (
                    <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans mb-1">
                      {b.context}
                    </div>
                  )}
                  <Link
                    href={href}
                    className="text-sm leading-relaxed hover:underline font-bold"
                  >
                    {title}
                  </Link>
                </div>
                <BookmarkRemove kind={kind} id={b.id} />
              </div>
              <NoteEditor kind={kind} id={b.id} initialNote={b.note} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function BookmarkRemove({
  kind,
  id,
}: {
  kind: BookmarkRef["kind"];
  id: string;
}) {
  return (
    <button
      type="button"
      onClick={() => toggleBookmark(kind, id)}
      aria-label="ブックマークを解除"
      className="text-yellow-600 dark:text-yellow-400 hover:text-red-600 dark:hover:text-red-400 text-lg leading-none w-7 h-7 flex items-center justify-center"
      title="ブックマークを解除"
    >
      ★
    </button>
  );
}

export function NoteEditor({
  kind,
  id,
  initialNote,
}: {
  kind: BookmarkKind;
  id: string;
  initialNote?: string;
}) {
  const [open, setOpen] = useState(Boolean(initialNote));
  const [draft, setDraft] = useState(initialNote ?? "");
  const [savedNote, setSavedNote] = useState(initialNote ?? "");
  const [savedAt, setSavedAt] = useState<number | null>(null);

  // Sync external changes (e.g. another tab) when the underlying value changes.
  useEffect(() => {
    setDraft(initialNote ?? "");
    setSavedNote(initialNote ?? "");
    if (initialNote && !open) setOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialNote]);

  const dirty = draft !== savedNote;

  function handleSave() {
    setBookmarkNote(kind, id, draft);
    setSavedNote(draft);
    setSavedAt(Date.now());
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-[var(--link)] hover:underline ui-sans mt-2"
      >
        + メモを追加
      </button>
    );
  }

  return (
    <div className="mt-3 ui-sans">
      <textarea
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="覚え書き、間違えた理由、次に注意することなど…"
        rows={3}
        maxLength={4000}
        className="w-full text-xs p-2 border border-[var(--page-border-strong)] rounded bg-[var(--background)] resize-y leading-relaxed"
      />
      <div className="flex items-center gap-2 mt-1.5 text-[10px] text-[var(--muted)]">
        <button
          type="button"
          onClick={handleSave}
          disabled={!dirty}
          className="px-2.5 py-1 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600"
        >
          保存
        </button>
        {dirty ? (
          <span className="text-amber-700 dark:text-amber-400">未保存</span>
        ) : savedAt ? (
          <span>保存済み</span>
        ) : savedNote ? (
          <span>保存済み</span>
        ) : null}
        <span className="ml-auto tabular-nums">{draft.length}/4000</span>
      </div>
    </div>
  );
}
