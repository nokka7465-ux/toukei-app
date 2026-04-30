"use client";

import { useState } from "react";
import { Result, normCdf } from "./toolPrimitives";

function parseList(s: string): number[] {
  return s
    .split(/[,\s]+/)
    .map((x) => parseFloat(x))
    .filter((x) => Number.isFinite(x));
}

export function WilcoxonSignedRank() {
  const [a, setA] = useState("8.2, 7.5, 9.1, 6.8, 8.5, 7.9, 8.7, 6.5, 9.0, 7.3");
  const [b, setB] = useState("7.8, 7.2, 8.9, 6.5, 8.0, 7.5, 8.4, 6.7, 8.6, 7.0");

  const xs = parseList(a);
  const ys = parseList(b);
  const n0 = Math.min(xs.length, ys.length);

  // 差分(0 を除く)
  const diffs: { d: number; abs: number; sign: number }[] = [];
  for (let i = 0; i < n0; i++) {
    const d = xs[i] - ys[i];
    if (d !== 0) diffs.push({ d, abs: Math.abs(d), sign: Math.sign(d) });
  }
  const n = diffs.length;

  // 絶対値で順位付け(同順位は平均ランク)
  const sorted = [...diffs].sort((p, q) => p.abs - q.abs);
  const ranks: Map<number, number> = new Map();
  let i = 0;
  while (i < sorted.length) {
    let j = i;
    while (j + 1 < sorted.length && sorted[j + 1].abs === sorted[i].abs) j++;
    const avgRank = (i + 1 + (j + 1)) / 2;
    for (let k = i; k <= j; k++) ranks.set(k, avgRank);
    i = j + 1;
  }

  let wPos = 0, wNeg = 0;
  for (let k = 0; k < sorted.length; k++) {
    const r = ranks.get(k)!;
    if (sorted[k].sign > 0) wPos += r;
    else wNeg += r;
  }
  const W = Math.min(wPos, wNeg);

  // 正規近似(同順位補正は省略)
  const mean = (n * (n + 1)) / 4;
  const sd = Math.sqrt((n * (n + 1) * (2 * n + 1)) / 24);
  const z = sd > 0 ? (W - mean) / sd : 0;
  const p = sd > 0 ? 2 * Math.min(normCdf(z), 1 - normCdf(z)) : 1;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">ウィルコクソン符号順位検定</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          対応のある 2 群の中央値の差に対するノンパラメトリック検定。正規性を仮定しない t 検定の代替。
        </p>
      </header>
      <div className="space-y-3">
        <label className="block ui-sans">
          <span className="text-xs text-[var(--muted-strong)] mb-1 block">A 群(カンマ/空白区切り)</span>
          <textarea
            value={a}
            onChange={(e) => setA(e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums font-mono"
          />
        </label>
        <label className="block ui-sans">
          <span className="text-xs text-[var(--muted-strong)] mb-1 block">B 群(同じ要素数)</span>
          <textarea
            value={b}
            onChange={(e) => setB(e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums font-mono"
          />
        </label>
      </div>
      <Result
        label="両側 p 値(正規近似)"
        value={n < 5 ? "n が小さすぎる" : p < 1e-4 ? p.toExponential(2) : p.toFixed(4)}
        hint={`W = ${W.toFixed(1)} / 有効 n = ${n} / W+ = ${wPos.toFixed(1)} / W- = ${wNeg.toFixed(1)} / z ≈ ${z.toFixed(3)} / ${n >= 5 && p < 0.05 ? "α=5% で有意差あり" : "α=5% で有意差なし(または n 不足)"}`}
      />
    </article>
  );
}
