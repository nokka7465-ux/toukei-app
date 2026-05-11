"use client";

import { useEffect, useRef, useState } from "react";

type ThemeChoice = "light" | "dark" | "sepia" | "system";

const STORAGE_KEY = "theme";

function getStoredChoice(): ThemeChoice {
  if (typeof window === "undefined") return "system";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark" || stored === "sepia") return stored;
  return "system";
}

function resolveSystem(): "light" | "dark" {
  return typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(choice: ThemeChoice) {
  if (typeof document === "undefined") return;
  const effective = choice === "system" ? resolveSystem() : choice;
  document.documentElement.setAttribute("data-theme", effective);
}

const ICON: Record<ThemeChoice, string> = {
  light: "☀",
  dark: "☾",
  sepia: "📖",
  system: "🖥",
};

const LABEL: Record<ThemeChoice, string> = {
  light: "ライト",
  dark: "ダーク",
  sepia: "セピア",
  system: "OSに合わせる",
};

export function ThemeToggle() {
  const [choice, setChoice] = useState<ThemeChoice | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setChoice(getStoredChoice());
  }, []);

  // Re-apply on system changes when in "system" mode.
  useEffect(() => {
    if (choice !== "system" || typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [choice]);

  // Close menu on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(next: ThemeChoice) {
    try {
      if (next === "system") window.localStorage.removeItem(STORAGE_KEY);
      else window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    applyTheme(next);
    setChoice(next);
    setOpen(false);
  }

  if (!choice) {
    return (
      <button
        type="button"
        aria-label="Theme"
        className="w-7 h-7 rounded border border-[var(--page-border-strong)] opacity-50"
      />
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`配色テーマ: ${LABEL[choice]}`}
        title={`配色テーマ: ${LABEL[choice]}`}
        className="w-7 h-7 rounded border border-[var(--page-border-strong)] flex items-center justify-center hover:bg-[var(--background)] transition text-sm"
      >
        <span aria-hidden="true">{ICON[choice]}</span>
      </button>
      {open && (
        <div
          role="menu"
          className="absolute right-0 mt-2 w-44 paper rounded-md border border-[var(--page-border-strong)] shadow-lg ui-sans text-xs py-1 z-20"
        >
          {(["light", "dark", "sepia", "system"] as ThemeChoice[]).map((c) => (
            <button
              key={c}
              role="menuitemradio"
              aria-checked={choice === c}
              type="button"
              onClick={() => pick(c)}
              className={`w-full text-left px-3 py-2 flex items-center gap-2 hover:bg-[var(--background)] ${
                choice === c ? "font-bold text-[var(--link)]" : ""
              }`}
            >
              <span aria-hidden="true" className="w-4 text-center">
                {ICON[c]}
              </span>
              <span>{LABEL[c]}</span>
              {choice === c && (
                <span aria-hidden="true" className="ml-auto">
                  ✓
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* Site is fixed to sepia — force the attribute and clear any stored preference. */
export const themeInitScript = `
(function(){
  try {
    document.documentElement.setAttribute('data-theme', 'sepia');
    localStorage.removeItem('theme');
  } catch(e) {}
})();
`;
