"use client";

import { useState } from "react";
import { Field, NumberInput, Result, tCdf } from "./toolPrimitives";

export function CorrelationTest() {
  const [r, setR] = useState(0.4);
  const [n, setN] = useState(30);

  const safeR = Math.max(-0.999999, Math.min(0.999999, r));
  const df = Math.max(1, n - 2);
  const t = (safeR * Math.sqrt(df)) / Math.sqrt(1 - safeR * safeR);
  const pTwo = 2 * (1 - tCdf(Math.abs(t), df));

  const reject = pTwo < 0.05;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">相関係数の有意性検定</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          標本相関係数 r と標本サイズ n から、母相関 ρ=0 の帰無仮説に対する両側 t 検定。
        </p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label="標本相関係数 r" unit="-1〜1">
          <NumberInput value={r} onChange={setR} step={0.01} min={-0.9999} max={0.9999} />
        </Field>
        <Field label="標本サイズ n">
          <NumberInput
            value={n}
            onChange={(v) => setN(Math.max(3, Math.round(v)))}
            step={1}
            min={3}
          />
        </Field>
      </div>
      <Result
        label="両側 p 値"
        value={pTwo < 1e-4 ? pTwo.toExponential(2) : pTwo.toFixed(4)}
        hint={`t = r·√((n−2)/(1−r²)) = ${t.toFixed(3)} / df = ${df} / ${reject ? "α=5% で H₀:ρ=0 を棄却" : "α=5% で H₀:ρ=0 を棄却できない"}`}
      />
    </article>
  );
}
