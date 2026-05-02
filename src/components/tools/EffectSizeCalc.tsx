"use client";

import { useState } from "react";
import { Field, NumberInput, Result } from "./toolPrimitives";

/**
 * Cohen's d (independent), Hedges' g (small-sample correction), and
 * pooled SD for two-group mean comparison.
 */
export function EffectSizeCalc() {
  const [m1, setM1] = useState(105);
  const [m2, setM2] = useState(100);
  const [sd1, setSd1] = useState(15);
  const [sd2, setSd2] = useState(15);
  const [n1, setN1] = useState(30);
  const [n2, setN2] = useState(30);

  const df = Math.max(2, n1 + n2 - 2);
  const pooledVar =
    ((n1 - 1) * sd1 * sd1 + (n2 - 1) * sd2 * sd2) / df;
  const pooledSd = Math.sqrt(pooledVar);
  const d = pooledSd > 0 ? (m1 - m2) / pooledSd : 0;
  // Hedges' correction factor J ≈ 1 - 3/(4·df - 1)
  const J = 1 - 3 / (4 * df - 1);
  const g = J * d;

  const interpret =
    Math.abs(d) < 0.2
      ? "ごく小さい(目に見えにくい)"
      : Math.abs(d) < 0.5
        ? "小さい(small)"
        : Math.abs(d) < 0.8
          ? "中程度(medium)"
          : "大きい(large)";

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">効果量計算機(Cohen&apos;s d / Hedges&apos; g)</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          2 群の平均差の効果量を、プールされた標準偏差で標準化して算出します。サンプルが小さいときは Hedges&apos; g
          を参照してください。
        </p>
      </header>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Field label="平均 M₁">
          <NumberInput value={m1} onChange={setM1} step={0.1} />
        </Field>
        <Field label="標準偏差 SD₁">
          <NumberInput value={sd1} onChange={setSd1} step={0.1} min={0.01} />
        </Field>
        <Field label="標本 n₁">
          <NumberInput
            value={n1}
            onChange={(v) => setN1(Math.max(2, Math.round(v)))}
            step={1}
            min={2}
          />
        </Field>
        <Field label="平均 M₂">
          <NumberInput value={m2} onChange={setM2} step={0.1} />
        </Field>
        <Field label="標準偏差 SD₂">
          <NumberInput value={sd2} onChange={setSd2} step={0.1} min={0.01} />
        </Field>
        <Field label="標本 n₂">
          <NumberInput
            value={n2}
            onChange={(v) => setN2(Math.max(2, Math.round(v)))}
            step={1}
            min={2}
          />
        </Field>
      </div>
      <Result
        label="Cohen's d"
        value={d.toFixed(3)}
        hint={`Hedges' g = ${g.toFixed(3)} / プール SD = ${pooledSd.toFixed(3)} / 解釈: ${interpret} (Cohen 1988 目安: 0.2/0.5/0.8)`}
      />
    </article>
  );
}
