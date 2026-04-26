"use client";

import { useState } from "react";
import { Field, NumberInput, Result, normCdf } from "./toolPrimitives";

export function TwoProportionTest() {
  const [x1, setX1] = useState(120);
  const [n1, setN1] = useState(1000);
  const [x2, setX2] = useState(150);
  const [n2, setN2] = useState(1000);

  const p1 = x1 / n1;
  const p2 = x2 / n2;
  const pPool = (x1 + x2) / (n1 + n2);
  const se = Math.sqrt(pPool * (1 - pPool) * (1 / n1 + 1 / n2));
  const z = (p1 - p2) / se;
  const pValue = 2 * (1 - normCdf(Math.abs(z)));
  const isSignif = pValue < 0.05;
  const lift = ((p2 - p1) / p1) * 100;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">A/B テスト計算機(2 比率検定)</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          A 群・B 群のクリック数や CV 数から、両者に統計的に意味のある差があるかを判定します。
        </p>
      </header>
      <div className="grid grid-cols-2 gap-3">
        <Field label="A 群: 成功数">
          <NumberInput value={x1} onChange={(v) => setX1(Math.max(0, Math.round(v)))} step={1} min={0} />
        </Field>
        <Field label="A 群: 試行数">
          <NumberInput value={n1} onChange={(v) => setN1(Math.max(1, Math.round(v)))} step={1} min={1} />
        </Field>
        <Field label="B 群: 成功数">
          <NumberInput value={x2} onChange={(v) => setX2(Math.max(0, Math.round(v)))} step={1} min={0} />
        </Field>
        <Field label="B 群: 試行数">
          <NumberInput value={n2} onChange={(v) => setN2(Math.max(1, Math.round(v)))} step={1} min={1} />
        </Field>
      </div>
      <div className="mt-3 text-xs text-[var(--muted-strong)] ui-sans space-y-0.5">
        <div>A 群比率: <strong className="tabular-nums">{(p1 * 100).toFixed(2)}%</strong></div>
        <div>B 群比率: <strong className="tabular-nums">{(p2 * 100).toFixed(2)}%</strong></div>
        <div>相対変化(B vs A): <strong className="tabular-nums">{lift > 0 ? "+" : ""}{lift.toFixed(1)}%</strong></div>
      </div>
      <Result
        label="p 値(両側)"
        value={pValue.toFixed(6)}
        hint={`z = ${z.toFixed(3)} / ${
          isSignif ? "α=0.05 で有意な差あり" : "α=0.05 では有意な差なし"
        }`}
      />
    </article>
  );
}
