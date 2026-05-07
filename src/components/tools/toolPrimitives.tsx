"use client";

import { useState } from "react";

/** ブラウザでテキストファイルをダウンロード */
function triggerDownload(filename: string, text: string, mime: string) {
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

/** 配列のオブジェクトを CSV 文字列に変換(セル内のカンマ・改行をエスケープ) */
export function toCsv(rows: Record<string, unknown>[]): string {
  if (rows.length === 0) return "";
  const headers = Array.from(
    rows.reduce<Set<string>>((acc, r) => {
      Object.keys(r).forEach((k) => acc.add(k));
      return acc;
    }, new Set()),
  );
  const escape = (v: unknown): string => {
    if (v === null || v === undefined) return "";
    const s = typeof v === "string" ? v : String(v);
    if (s.includes(",") || s.includes("\n") || s.includes('"')) {
      return `"${s.replace(/"/g, '""')}"`;
    }
    return s;
  };
  const lines = [headers.join(",")];
  for (const r of rows) {
    lines.push(headers.map((h) => escape(r[h])).join(","));
  }
  return lines.join("\n");
}

/** ツール結果を CSV / JSON でダウンロードするためのボタン群 */
export function DownloadButtons({
  baseFilename,
  csv,
  json,
}: {
  /** 拡張子なしのベース名(例: "regression") */
  baseFilename: string;
  /** CSV 文字列。指定時のみ CSV ボタン表示 */
  csv?: string;
  /** JSON 化対象の任意オブジェクト。指定時のみ JSON ボタン表示 */
  json?: unknown;
}) {
  const stamp = new Date().toISOString().slice(0, 10);

  const onCsv = () => {
    if (!csv) return;
    triggerDownload(`${baseFilename}-${stamp}.csv`, csv, "text/csv");
  };
  const onJson = () => {
    if (json === undefined) return;
    triggerDownload(
      `${baseFilename}-${stamp}.json`,
      JSON.stringify(json, null, 2),
      "application/json",
    );
  };

  if (!csv && json === undefined) return null;
  return (
    <div className="flex flex-wrap gap-2 ui-sans">
      {csv !== undefined && (
        <button
          type="button"
          onClick={onCsv}
          className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-[var(--page-border-strong)] bg-[var(--page)] hover:bg-[var(--background)] hover:text-[var(--link)] transition flex items-center gap-1.5 whitespace-nowrap"
          aria-label="結果を CSV でダウンロード"
        >
          📄 CSV
        </button>
      )}
      {json !== undefined && (
        <button
          type="button"
          onClick={onJson}
          className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-[var(--page-border-strong)] bg-[var(--page)] hover:bg-[var(--background)] hover:text-[var(--link)] transition flex items-center gap-1.5 whitespace-nowrap"
          aria-label="結果を JSON でダウンロード"
        >
          📦 JSON
        </button>
      )}
    </div>
  );
}

/** ツールの現在の入力状態を共有 URL として渡すボタン。`useToolUrlState` の getShareUrl と組み合わせる */
export function ShareStateButton({
  getUrl,
}: {
  getUrl: () => string;
}) {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    const url = getUrl();
    if (!url) return;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };
  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="現在の入力状態を含む共有 URL をコピー"
      title="この設定で開ける URL をコピー"
      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-[var(--page-border-strong)] bg-[var(--page)] hover:bg-[var(--background)] hover:text-[var(--link)] transition flex items-center gap-1.5 whitespace-nowrap"
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
          リンクをコピー済
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
          リンクをコピー
        </>
      )}
    </button>
  );
}

export function CopyButton({
  text,
  label = "コピー",
}: {
  text: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for non-secure contexts
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // 失敗時は何もしない(ブラウザが拒否したケース)
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`結果をコピー: ${text}`}
      className="ui-sans text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded border border-[var(--page-border-strong)] bg-[var(--page)] hover:bg-[var(--background)] hover:text-[var(--link)] transition flex items-center gap-1.5 whitespace-nowrap"
    >
      {copied ? (
        <>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
          コピー済
        </>
      ) : (
        <>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
          {label}
        </>
      )}
    </button>
  );
}

export function Field({
  label,
  unit,
  children,
}: {
  label: string;
  unit?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block ui-sans">
      <span className="text-xs text-[var(--muted-strong)] mb-1 block">
        {label} {unit && <span className="text-[var(--muted)]">({unit})</span>}
      </span>
      {children}
    </label>
  );
}

export function NumberInput({
  value,
  onChange,
  step = 0.01,
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <input
      type="number"
      value={value}
      step={step}
      min={min}
      max={max}
      onChange={(e) => {
        const v = parseFloat(e.target.value);
        if (Number.isFinite(v)) onChange(v);
      }}
      className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums"
    />
  );
}

export function Result({
  label,
  value,
  hint,
  copyText,
}: {
  label: string;
  value: string;
  hint?: string;
  /** コピー時のテキスト。省略時は value を使用 */
  copyText?: string;
}) {
  return (
    <div className="rounded-lg p-5 mt-4 border-2 border-[var(--accent)] bg-[var(--highlight)]">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="text-[11px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans font-bold">
          {label}
        </div>
        <CopyButton text={copyText ?? value} />
      </div>
      <div className="text-3xl md:text-4xl font-bold tabular-nums text-[var(--foreground)] break-words leading-tight">
        {value}
      </div>
      {hint && (
        <div className="text-xs text-[var(--muted-strong)] ui-sans mt-3 leading-relaxed break-words">
          {hint}
        </div>
      )}
    </div>
  );
}

// ============ 数値関数 ============

export function phi(z: number): number {
  return Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
}

/** 標準正規 CDF(A&S 26.2.17 近似) */
export function normCdf(z: number): number {
  if (Number.isNaN(z)) return NaN;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = phi(z);
  const p =
    d *
    (0.319381530 * t -
      0.356563782 * t * t +
      1.781477937 * t * t * t -
      1.821255978 * t * t * t * t +
      1.330274429 * t * t * t * t * t);
  return z >= 0 ? 1 - p : p;
}

/** 標準正規 CDF の逆関数(Beasley-Springer-Moro 近似) */
export function normInv(p: number): number {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  // Acklam の近似
  const a = [
    -3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
    1.38357751867269e2, -3.066479806614716e1, 2.506628277459239,
  ];
  const b = [
    -5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
    6.680131188771972e1, -1.328068155288572e1,
  ];
  const c = [
    -7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];
  const d = [
    7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996,
    3.754408661907416,
  ];
  const pLow = 0.02425;
  const pHigh = 1 - pLow;
  let q: number, r: number;
  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  } else if (p <= pHigh) {
    q = p - 0.5;
    r = q * q;
    return (
      ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) *
        q) /
      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
    );
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return (
      -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
}

/** ガンマ関数の log(Lanczos) */
export function lgamma(x: number): number {
  const g = 7;
  const c = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];
  if (x < 0.5) {
    return Math.log(Math.PI / Math.sin(Math.PI * x)) - lgamma(1 - x);
  }
  x -= 1;
  let a = c[0];
  const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
}

/** 不完全ガンマ関数 P(a,x) = ∫₀ˣ t^(a-1) e^(-t) dt / Γ(a) */
function gammaP(a: number, x: number): number {
  if (x < 0 || a <= 0) return NaN;
  if (x === 0) return 0;
  if (x < a + 1) {
    // 級数展開
    let ap = a;
    let sum = 1 / a;
    let del = sum;
    for (let i = 1; i < 200; i++) {
      ap += 1;
      del *= x / ap;
      sum += del;
      if (Math.abs(del) < Math.abs(sum) * 3e-12) break;
    }
    return sum * Math.exp(-x + a * Math.log(x) - lgamma(a));
  } else {
    // 連分数(Lentz)
    const fpmin = 1e-300;
    let b = x + 1 - a;
    let c = 1 / fpmin;
    let d = 1 / b;
    let h = d;
    for (let i = 1; i < 200; i++) {
      const an = -i * (i - a);
      b += 2;
      d = an * d + b;
      if (Math.abs(d) < fpmin) d = fpmin;
      c = b + an / c;
      if (Math.abs(c) < fpmin) c = fpmin;
      d = 1 / d;
      const del = d * c;
      h *= del;
      if (Math.abs(del - 1) < 3e-12) break;
    }
    return 1 - Math.exp(-x + a * Math.log(x) - lgamma(a)) * h;
  }
}

/** カイ二乗 CDF */
export function chiSqCdf(x: number, df: number): number {
  return gammaP(df / 2, x / 2);
}

/** F 分布 CDF: P(F ≤ x | d1, d2) = I_{d1·x/(d1·x+d2)}(d1/2, d2/2) */
export function fCdf(x: number, d1: number, d2: number): number {
  if (x <= 0) return 0;
  const t = (d1 * x) / (d1 * x + d2);
  return incompleteBeta(t, d1 / 2, d2 / 2);
}

/** Student t CDF(漸化的 Beta 関数を使う簡易実装) */
export function tCdf(t: number, df: number): number {
  // x = df / (df + t²)
  const x = df / (df + t * t);
  // 不完全ベータ関数 I_x(df/2, 1/2)
  const Ix = incompleteBeta(x, df / 2, 0.5);
  if (t >= 0) return 1 - 0.5 * Ix;
  return 0.5 * Ix;
}

/** 不完全ベータ関数(連分数) */
function incompleteBeta(x: number, a: number, b: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const lbeta =
    lgamma(a + b) -
    lgamma(a) -
    lgamma(b) +
    a * Math.log(x) +
    b * Math.log(1 - x);
  const bt = Math.exp(lbeta);
  if (x < (a + 1) / (a + b + 2)) {
    return (bt * betaCf(x, a, b)) / a;
  } else {
    return 1 - (bt * betaCf(1 - x, b, a)) / b;
  }
}

function betaCf(x: number, a: number, b: number): number {
  const fpmin = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < fpmin) d = fpmin;
  d = 1 / d;
  let h = d;
  for (let m = 1; m < 200; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin) d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin) c = fpmin;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin) d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin) c = fpmin;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 3e-12) break;
  }
  return h;
}
