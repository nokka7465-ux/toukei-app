"use client";

import { useEffect, useState } from "react";
import {
  BOOKMARK_EVENT,
  isBookmarked,
  toggleBookmark,
  type BookmarkKind,
} from "@/lib/bookmarks";

export function BookmarkButton({
  kind,
  id,
  context,
  size = "sm",
  className,
}: {
  kind: BookmarkKind;
  id: string;
  context?: string;
  size?: "sm" | "md";
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMounted(true);
    setActive(isBookmarked(kind, id));
    const handler = () => setActive(isBookmarked(kind, id));
    window.addEventListener(BOOKMARK_EVENT, handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener(BOOKMARK_EVENT, handler);
      window.removeEventListener("storage", handler);
    };
  }, [kind, id]);

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const next = toggleBookmark(kind, id, context);
    setActive(next);
  }

  const dim = size === "md" ? "w-9 h-9 text-base" : "w-7 h-7 text-sm";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={active ? "ブックマークを解除" : "ブックマークに追加"}
      title={active ? "ブックマーク済み" : "ブックマーク"}
      className={`${dim} ui-sans rounded border transition flex items-center justify-center print-hide ${
        active
          ? "border-yellow-500 bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
          : "border-[var(--page-border-strong)] text-[var(--muted)] hover:bg-[var(--background)]"
      } ${className ?? ""}`}
      // Avoid hydration mismatch flash: render unstyled state until mounted.
      style={!mounted ? { opacity: 0.4 } : undefined}
    >
      {active ? "★" : "☆"}
    </button>
  );
}
