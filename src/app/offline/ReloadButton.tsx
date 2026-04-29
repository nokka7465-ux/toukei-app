"use client";

export function ReloadButton() {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") window.location.reload();
      }}
      className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
    >
      再読み込み
    </button>
  );
}
