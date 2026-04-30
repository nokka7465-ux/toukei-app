"use client";

import { useState } from "react";
import { Result, normCdf } from "./toolPrimitives";

function parseList(s: string): number[] {
  return s
    .split(/[,\s]+/)
    .map((x) => parseFloat(x))
    .filter((x) => Number.isFinite(x));
}

export function MannWhitneyU() {
  const [a, setA] = useState("5, 8, 12, 15, 18, 22, 25");
  const [b, setB] = useState("3, 6, 7, 10, 14, 17, 20, 24");

  const xs = parseList(a);
  const ys = parseList(b);
  const n1 = xs.length;
  const n2 = ys.length;

  // 全要素を結合してランク付け
  const all = [
    ...xs.map((v) => ({ v, group: 0 })),
    ...ys.map((v) => ({ v, group: 1 })),
  ];
  all.sort((p, q) => p.v - q.v);

  // 平均ランク(同順位対応)
  const ranks: number[] = new Array(all.length);
  let i = 0;
  while (i < all.length) {
    let j = i;
    while (j + 1 < all.length && all[j + 1].v === all[i].v) j++;
    const avgRank = (i + 1 + (j + 1)) / 2;
    for (let k = i; k <= j; k++) ranks[k] = avgRank;
    i = j + 1;
  }

  let R1 = 0;
  for (let k = 0; k < all.length; k++) {
    if (all[k].group === 0) R1 += ranks[k];
  }
  const U1 = R1 - (n1 * (n1 + 1)) / 2;
  const U2 = n1 * n2 - U1;
  const U = Math.min(U1, U2);

  // 正規近似
  const mean = (n1 * n2) / 2;
  const sd = Math.sqrt((n1 * n2 * (n1 + n2 + 1)) / 12);
  const z = sd > 0 ? (U - mean) / sd : 0;
  const p = sd > 0 ? 2 * Math.min(normCdf(z), 1 - normCdf(z)) : 1;

  const small = n1 < 4 || n2 < 4;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">マン・ホイットニーの U 検定</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          独立 2 群の中央値の差をノンパラメトリックに検定。Wilcoxon 順位和検定とも呼ばれる。
        </p>
      </header>
      <div className="space-y-3">
        <label className="block ui-sans">
          <span className="text-xs text-[var(--muted-strong)] mb-1 block">A 群</span>
          <textarea
            value={a}
            onChange={(e) => setA(e.target.value)}
            rows={2}
            className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums font-mono"
          />
        </label>
        <label className="block ui-sans">
          <span className="text-xs text-[var(--muted-strong)] mb-1 block">B 群(要素数は違ってよい)</span>
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
        value={small ? "n が小さすぎる" : p < 1e-4 ? p.toExponential(2) : p.toFixed(4)}
        hint={`U = ${U.toFixed(1)} / U₁ = ${U1.toFixed(1)} / U₂ = ${U2.toFixed(1)} / n₁=${n1}, n₂=${n2} / z ≈ ${z.toFixed(3)} / ${!small && p < 0.05 ? "α=5% で有意差あり" : "α=5% で有意差なし(または n 不足)"}`}
      />
    </article>
  );
}
