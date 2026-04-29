"use client";

import { useRef, useState } from "react";
import { exportProgress, importProgress } from "@/lib/progress";

export function ProgressBackup() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  function handleExport() {
    const json = exportProgress();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const today = new Date().toISOString().slice(0, 10);
    a.download = `toukei-app-progress-${today}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setMessage({ kind: "success", text: "ダウンロードしました" });
  }

  function handleImportClick() {
    inputRef.current?.click();
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (
      !window.confirm(
        "現在の学習進捗を上書きします。よろしいですか？\n(事前にエクスポートでバックアップを取ることを推奨)",
      )
    ) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result ?? "");
      const result = importProgress(text);
      if (result.ok) {
        setMessage({
          kind: "success",
          text: `インポート成功: 問題 ${result.counts.questions} · 模試 ${result.counts.mocks} · 既読 ${result.counts.readSections} · 学習日 ${result.counts.activeDays}`,
        });
      } else {
        setMessage({ kind: "error", text: `インポート失敗: ${result.error}` });
      }
    };
    reader.onerror = () => {
      setMessage({ kind: "error", text: "ファイル読み込みに失敗しました" });
    };
    reader.readAsText(file);
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 ui-sans text-xs">
        <button
          type="button"
          onClick={handleExport}
          className="px-3 py-1.5 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
        >
          ⬇ 進捗をエクスポート
        </button>
        <button
          type="button"
          onClick={handleImportClick}
          className="px-3 py-1.5 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
        >
          ⬆ 進捗をインポート
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="application/json,.json"
          onChange={handleFile}
          className="hidden"
          aria-hidden="true"
        />
      </div>
      {message && (
        <div
          role="status"
          className={`text-xs ui-sans ${
            message.kind === "success"
              ? "text-green-700 dark:text-green-400"
              : "text-red-700 dark:text-red-400"
          }`}
        >
          {message.text}
        </div>
      )}
      <p className="text-[11px] text-[var(--muted)] ui-sans leading-relaxed">
        進捗データを JSON でダウンロード / 別端末で復元できます。
      </p>
    </div>
  );
}
