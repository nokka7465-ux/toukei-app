"use client";

import { useState } from "react";
import { Field, NumberInput, Result, normCdf, normInv } from "./toolPrimitives";

export function PowerCalc() {
  const [delta, setDelta] = useState(0.5);
  const [sigma, setSigma] = useState(1);
  const [n, setN] = useState(30);
  const [alpha, setAlpha] = useState(0.05);

  // 平均差 t 検定の検出力(正規近似 / 両側)
  const za = normInv(1 - alpha / 2);
  const ncp = (delta * Math.sqrt(n)) / (sigma * Math.sqrt(2));
  const power = 1 - normCdf(za - ncp) + normCdf(-za - ncp);

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">検出力計算機(2 標本平均差 t 検定)</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          指定した効果量・標本サイズ・有意水準で、2 標本 t 検定がどれくらい検出できるかを推定します。
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="検出したい平均差 δ">
          <NumberInput value={delta} onChange={setDelta} step={0.05} min={0.01} />
        </Field>
        <Field label="想定する標準偏差 σ">
          <NumberInput value={sigma} onChange={setSigma} step={0.1} min={0.01} />
        </Field>
        <Field label="標本サイズ(各群)">
          <NumberInput
            value={n}
            onChange={(v) => setN(Math.max(2, Math.round(v)))}
            step={1}
            min={2}
          />
        </Field>
        <Field label="有意水準 α(両側)">
          <NumberInput value={alpha} onChange={setAlpha} step={0.01} min={0.001} max={0.5} />
        </Field>
      </div>
      <Result
        label="検出力 1−β"
        value={`${(power * 100).toFixed(1)}%`}
        hint={`実務目安: 80% 以上が望ましい / 効果量 d = δ/σ = ${(delta / sigma).toFixed(
          2,
        )}`}
      />
    </article>
  );
}
