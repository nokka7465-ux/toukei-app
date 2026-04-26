"use client";

import { useState } from "react";
import { Field, NumberInput, Result, normInv } from "./toolPrimitives";

export function ConfidenceIntervalCalc() {
  const [type, setType] = useState<"mean" | "proportion">("mean");
  const [xbar, setXbar] = useState(50);
  const [sigma, setSigma] = useState(10);
  const [p, setP] = useState(0.4);
  const [n, setN] = useState(100);
  const [level, setLevel] = useState(0.95);

  const z = normInv(1 - (1 - level) / 2);

  let lo = 0,
    hi = 0,
    se = 0,
    formula = "";
  if (type === "mean") {
    se = sigma / Math.sqrt(n);
    lo = xbar - z * se;
    hi = xbar + z * se;
    formula = "x̄ ± z · σ/√n";
  } else {
    se = Math.sqrt((p * (1 - p)) / n);
    lo = p - z * se;
    hi = p + z * se;
    formula = "p̂ ± z · √(p̂(1-p̂)/n)";
  }

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">信頼区間計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          母平均または母比率の信頼区間を計算します(母分散既知 / 大標本近似)。
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
            {t === "mean" ? "母平均" : "母比率"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {type === "mean" ? (
          <>
            <Field label="標本平均 x̄">
              <NumberInput value={xbar} onChange={setXbar} step={0.1} />
            </Field>
            <Field label="標準偏差 σ">
              <NumberInput value={sigma} onChange={setSigma} step={0.1} min={0.01} />
            </Field>
          </>
        ) : (
          <Field label="標本比率 p̂" unit="0〜1">
            <NumberInput value={p} onChange={setP} step={0.01} min={0} max={1} />
          </Field>
        )}
        <Field label="標本サイズ n">
          <NumberInput value={n} onChange={(v) => setN(Math.max(2, Math.round(v)))} step={1} min={2} />
        </Field>
        <Field label="信頼水準" unit="例: 0.95">
          <NumberInput value={level} onChange={setLevel} step={0.01} min={0.5} max={0.9999} />
        </Field>
      </div>
      <Result
        label={`${(level * 100).toFixed(0)}% 信頼区間`}
        value={`[${lo.toFixed(4)}, ${hi.toFixed(4)}]`}
        hint={`${formula} / z=${z.toFixed(3)} / SE=${se.toFixed(4)}`}
      />
    </article>
  );
}
