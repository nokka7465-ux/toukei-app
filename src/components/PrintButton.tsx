"use client";

export function PrintButton({ label = "🖨 印刷する" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") window.print();
      }}
      className="px-3 py-1.5 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
    >
      {label}
    </button>
  );
}
