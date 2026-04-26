"use client";

import { useState } from "react";
import { Field, NumberInput, Result, normInv } from "./toolPrimitives";

export function SampleSizeCalc() {
  const [type, setType] = useState<"mean" | "proportion">("mean");
  const [delta, setDelta] = useState(0.5); // 効果量(平均差 / 比率差)
  const [sigma, setSigma] = useState(1);
  const [p, setP] = useState(0.5);
  const [alpha, setAlpha] = useState(0.05);
  const [power, setPower] = useState(0.8);

  const za = normInv(1 - alpha / 2);
  const zb = normInv(power);

  let n = 0;
  let formula = "";
  if (type === "mean") {
    n = (2 * Math.pow(za + zb, 2) * sigma * sigma) / (delta * delta);
    formula = "n = 2(z_{α/2} + z_β)² σ² / δ²";
  } else {
    // 比率比較
    const pBar = p;
    const variance = 2 * pBar * (1 - pBar);
    n = (Math.pow(za + zb, 2) * variance) / (delta * delta);
    formula = "n = (z_{α/2} + z_β)² · 2p(1-p) / δ²";
  }
  const nCeil = Math.ceil(n);

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">サンプルサイズ計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          検出したい効果量・有意水準・検出力から、各群に必要な標本数を計算します。
        </p>
      </header>
      <div className="flex gap-2 ui-sans text-xs mb-4">
        {(["mean", "proportion"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`px-3 py-1 rounded border transition ${
              type === t
                ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {t === "mean" ? "平均差" : "比率差"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {type === "mean" ? (
          <>
            <Field label="検出したい平均差 δ">
              <NumberInput value={delta} onChange={setDelta} step={0.05} min={0.01} />
            </Field>
            <Field label="想定する標準偏差 σ">
              <NumberInput value={sigma} onChange={setSigma} step={0.1} min={0.01} />
            </Field>
          </>
        ) : (
          <>
            <Field label="検出したい比率差 δ" unit="例: 0.05 = 5pt 差">
              <NumberInput value={delta} onChange={setDelta} step={0.01} min={0.001} max={0.5} />
            </Field>
            <Field label="想定する平均比率 p" unit="0〜1">
              <NumberInput value={p} onChange={setP} step={0.05} min={0.01} max={0.99} />
            </Field>
          </>
        )}
        <Field label="有意水準 α(両側)" unit="例: 0.05">
          <NumberInput value={alpha} onChange={setAlpha} step={0.01} min={0.001} max={0.5} />
        </Field>
        <Field label="検出力 1−β" unit="例: 0.8">
          <NumberInput value={power} onChange={setPower} step={0.05} min={0.5} max={0.99} />
        </Field>
      </div>
      <Result
        label="必要な標本サイズ(各群)"
        value={`n ≥ ${nCeil}`}
        hint={`${formula}  /  z_{α/2}=${za.toFixed(3)}, z_β=${zb.toFixed(3)}`}
      />
    </article>
  );
}
