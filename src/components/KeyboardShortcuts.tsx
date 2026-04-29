"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const SHORTCUTS: Array<{ keys: string; description: string }> = [
  { keys: "?", description: "ショートカット一覧" },
  { keys: "/", description: "サイト内検索を開く" },
  { keys: "\\", description: "用語クイックルックアップ" },
  { keys: "Cmd K", description: "用語クイックルックアップ" },
  { keys: "g h", description: "ホームへ" },
  { keys: "g t", description: "教科書一覧へ" },
  { keys: "g q", description: "演習問題一覧へ" },
  { keys: "g m", description: "模試一覧へ" },
  { keys: "g r", description: "苦手問題の復習へ" },
  { keys: "g p", description: "ランダム練習へ" },
  { keys: "g b", description: "ブックマーク一覧へ" },
  { keys: "g g", description: "用語集へ" },
  { keys: "Esc", description: "ダイアログを閉じる" },
];

const ROUTE_MAP: Record<string, string> = {
  h: "/",
  t: "/textbook",
  q: "/quiz",
  m: "/mock",
  r: "/review",
  p: "/practice",
  b: "/bookmarks",
  g: "/glossary",
};

function isTypingTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  if (target.isContentEditable) return true;
  return false;
}

export function KeyboardShortcuts() {
  const router = useRouter();
  const [helpOpen, setHelpOpen] = useState(false);
  const [pendingG, setPendingG] = useState(false);

  useEffect(() => {
    let gTimer: ReturnType<typeof setTimeout> | null = null;

    function onKey(e: KeyboardEvent) {
      // Ignore when modifier keys are pressed (preserve native shortcuts)
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      // Always allow Escape
      if (e.key === "Escape") {
        setHelpOpen(false);
        setPendingG(false);
        if (gTimer) clearTimeout(gTimer);
        return;
      }

      // Skip when the user is typing in an input/textarea
      if (isTypingTarget(e.target)) return;

      // ? opens help
      if (e.key === "?") {
        e.preventDefault();
        setHelpOpen((open) => !open);
        return;
      }

      // / focuses the search link (navigate to /search)
      if (e.key === "/" && !pendingG) {
        e.preventDefault();
        router.push("/search");
        return;
      }

      // g + letter style navigation
      if (!pendingG && e.key === "g") {
        e.preventDefault();
        setPendingG(true);
        if (gTimer) clearTimeout(gTimer);
        gTimer = setTimeout(() => setPendingG(false), 1500);
        return;
      }

      if (pendingG) {
        const target = ROUTE_MAP[e.key.toLowerCase()];
        if (target) {
          e.preventDefault();
          router.push(target);
        }
        setPendingG(false);
        if (gTimer) clearTimeout(gTimer);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (gTimer) clearTimeout(gTimer);
    };
  }, [router, pendingG]);

  return (
    <>
      {pendingG && (
        <div
          aria-hidden="true"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[var(--page)] border border-[var(--page-border-strong)] rounded px-3 py-1.5 text-xs ui-sans shadow-lg"
        >
          g + ? (h/t/q/m/r/p/b/g)
        </div>
      )}
      {helpOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="キーボードショートカット"
          onClick={() => setHelpOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative paper rounded-lg p-6 max-w-md w-full"
          >
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <div className="chapter-eyebrow mb-1">Shortcuts</div>
                <h2 className="text-xl font-bold">キーボードショートカット</h2>
              </div>
              <button
                type="button"
                onClick={() => setHelpOpen(false)}
                className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] ui-sans"
              >
                Esc で閉じる
              </button>
            </div>
            <dl className="space-y-1.5 text-sm">
              {SHORTCUTS.map((s) => (
                <div
                  key={s.keys}
                  className="flex items-center justify-between gap-3 py-1 ui-sans"
                >
                  <dt>
                    <kbd className="px-2 py-0.5 bg-[var(--background)] border border-[var(--page-border-strong)] rounded text-xs font-mono">
                      {s.keys}
                    </kbd>
                  </dt>
                  <dd className="text-[var(--muted-strong)] text-xs">
                    {s.description}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[11px] text-[var(--muted)] ui-sans leading-relaxed">
              ※ 入力欄にフォーカスがあるときは無効。Cmd / Ctrl 系の組み合わせはブラウザ標準を優先します。
            </p>
          </div>
        </div>
      )}
    </>
  );
}
