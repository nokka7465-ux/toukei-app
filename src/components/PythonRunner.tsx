"use client";

import { useRef, useState } from "react";

const PYODIDE_VERSION = "0.26.4";
const PYODIDE_URL = `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/pyodide.js`;

declare global {
  interface Window {
    loadPyodide?: (config?: { indexURL?: string }) => Promise<PyodideInterface>;
    __pyodidePromise?: Promise<PyodideInterface>;
  }
}

type PyodideInterface = {
  runPythonAsync: (code: string) => Promise<unknown>;
  setStdout: (cfg: { batched: (s: string) => void }) => void;
  setStderr: (cfg: { batched: (s: string) => void }) => void;
  loadPackagesFromImports: (code: string) => Promise<void>;
};

function loadPyodide(): Promise<PyodideInterface> {
  if (typeof window === "undefined") return Promise.reject(new Error("SSR"));
  if (window.__pyodidePromise) return window.__pyodidePromise;

  const promise = new Promise<PyodideInterface>((resolve, reject) => {
    const existing = document.querySelector(`script[src="${PYODIDE_URL}"]`);
    const start = () => {
      if (!window.loadPyodide) {
        reject(new Error("Pyodide が読み込めませんでした"));
        return;
      }
      window
        .loadPyodide({ indexURL: `https://cdn.jsdelivr.net/pyodide/v${PYODIDE_VERSION}/full/` })
        .then(resolve)
        .catch(reject);
    };
    if (existing) {
      if (window.loadPyodide) start();
      else existing.addEventListener("load", start, { once: true });
      return;
    }
    const script = document.createElement("script");
    script.src = PYODIDE_URL;
    script.async = true;
    script.onload = start;
    script.onerror = () => reject(new Error("Pyodide CDN への接続に失敗しました"));
    document.head.appendChild(script);
  });

  window.__pyodidePromise = promise;
  return promise;
}

type Props = {
  code: string;
  onChangeCode?: (next: string) => void;
};

export function PythonRunner({ code, onChangeCode }: Props) {
  const [editable, setEditable] = useState(code);
  const [output, setOutput] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "loading" | "running" | "error">("idle");
  const [error, setError] = useState<string>("");
  const outRef = useRef<string>("");

  const run = async () => {
    setOutput("");
    setError("");
    outRef.current = "";
    try {
      setStatus("loading");
      const py = await loadPyodide();
      py.setStdout({ batched: (s) => (outRef.current += s + "\n") });
      py.setStderr({ batched: (s) => (outRef.current += s + "\n") });
      setStatus("running");
      try {
        await py.loadPackagesFromImports(editable);
      } catch {
        // import が解決できなくても続行(エラーは exec 側で出る)
      }
      await py.runPythonAsync(editable);
      setOutput(outRef.current.trimEnd() || "(出力なし)");
      setStatus("idle");
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
      setOutput(outRef.current);
      setStatus("error");
    }
  };

  const reset = () => {
    setEditable(code);
    setOutput("");
    setError("");
    setStatus("idle");
    onChangeCode?.(code);
  };

  return (
    <div className="mt-2 space-y-2">
      <textarea
        value={editable}
        onChange={(e) => {
          setEditable(e.target.value);
          onChangeCode?.(e.target.value);
        }}
        spellCheck={false}
        rows={Math.min(Math.max(editable.split("\n").length, 4), 20)}
        className="w-full font-mono text-[12px] leading-relaxed p-3 rounded border border-[var(--page-border-strong)] bg-[var(--page)] focus:outline-none focus:border-[var(--link)] resize-y"
      />
      <div className="flex items-center gap-2 ui-sans text-xs">
        <button
          type="button"
          onClick={run}
          disabled={status === "loading" || status === "running"}
          className="px-3 py-1 rounded bg-[var(--accent)] text-[var(--accent-fg)] font-bold disabled:opacity-60"
        >
          {status === "loading" ? "Pyodide 読込中..." : status === "running" ? "実行中..." : "▶ 実行"}
        </button>
        <button
          type="button"
          onClick={reset}
          className="px-3 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
        >
          リセット
        </button>
        <span className="text-[10px] text-[var(--muted)] ml-auto">
          初回のみ Pyodide(~10MB)を CDN から読み込みます
        </span>
      </div>
      {(output || error) && (
        <div
          className="rounded border p-3 text-[12px] font-mono whitespace-pre-wrap leading-relaxed"
          style={{
            borderColor: error ? "#dc2626" : "var(--page-border-strong)",
            background: "var(--background)",
          }}
        >
          {output && <div>{output}</div>}
          {error && (
            <div className="text-[#dc2626] mt-1">
              <strong>Error:</strong> {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
