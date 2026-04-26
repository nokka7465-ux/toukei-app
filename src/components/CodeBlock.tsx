"use client";

import { useState } from "react";

type Lang = "python" | "r";

type Props = {
  title?: string;
  python?: string;
  r?: string;
  caption?: string;
};

export function CodeBlock({ title, python, r, caption }: Props) {
  const langs: Lang[] = [];
  if (python) langs.push("python");
  if (r) langs.push("r");
  const [active, setActive] = useState<Lang>(langs[0] ?? "python");

  if (langs.length === 0) return null;

  const code = active === "python" ? python : r;

  const copy = () => {
    if (!code) return;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
  };

  return (
    <div className="my-5 not-prose">
      <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-t border border-[var(--page-border-strong)] bg-[var(--background)]">
        <div className="flex items-center gap-2 ui-sans text-xs">
          <span className="font-bold text-[var(--muted-strong)]">
            {title ?? "コード"}
          </span>
          {langs.length > 1 && (
            <div className="flex gap-1 ml-2">
              {langs.map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setActive(l)}
                  className={`px-2 py-0.5 rounded text-[11px] transition ${
                    active === l
                      ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold"
                      : "border border-[var(--page-border-strong)] hover:bg-[var(--page)]"
                  }`}
                >
                  {l === "python" ? "Python" : "R"}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={copy}
          className="text-[10px] ui-sans px-2 py-0.5 rounded border border-[var(--page-border-strong)] hover:bg-[var(--page)]"
          aria-label="コードをコピー"
        >
          コピー
        </button>
      </div>
      <pre className="rounded-b border border-t-0 border-[var(--page-border-strong)] bg-[var(--page)] p-3 text-[12px] leading-relaxed overflow-x-auto">
        <code className="font-mono">{code}</code>
      </pre>
      {caption && (
        <p className="text-[11px] text-[var(--muted)] ui-sans mt-1 leading-relaxed">
          {caption}
        </p>
      )}
    </div>
  );
}
