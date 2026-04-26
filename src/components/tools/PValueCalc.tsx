"use client";

import { useState } from "react";
import {
  Field,
  NumberInput,
  Result,
  normCdf,
  tCdf,
  chiSqCdf,
} from "./toolPrimitives";

type DistKind = "z" | "t" | "chi2";

export function PValueCalc() {
  const [kind, setKind] = useState<DistKind>("z");
  const [stat, setStat] = useState(1.7);
  const [df, setDf] = useState(10);
  const [side, setSide] = useState<"two" | "right" | "left">("two");

  let p = NaN;
  let formula = "";
  if (kind === "z") {
    if (side === "two") p = 2 * (1 - normCdf(Math.abs(stat)));
    else if (side === "right") p = 1 - normCdf(stat);
    else p = normCdf(stat);
    formula = "標準正規分布";
  } else if (kind === "t") {
    if (side === "two") p = 2 * (1 - tCdf(Math.abs(stat), df));
    else if (side === "right") p = 1 - tCdf(stat, df);
    else p = tCdf(stat, df);
    formula = `t(df=${df})`;
  } else {
    // カイ二乗 = 右片側のみ
    p = 1 - chiSqCdf(stat, df);
    formula = `χ²(df=${df})`;
  }

  const isSignif = p < 0.05;

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">p 値計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          検定統計量(z / t / χ²)から p 値を計算します。
        </p>
      </header>
      <div className="flex gap-2 ui-sans text-xs mb-4 flex-wrap">
        {(["z", "t", "chi2"] as DistKind[]).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => {
              setKind(k);
              if (k === "chi2") setSide("right");
            }}
            className={`px-3 py-1 rounded border transition ${
              kind === k
                ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {k === "z" ? "z 検定" : k === "t" ? "t 検定" : "χ² 検定"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field label={kind === "chi2" ? "観測 χ² 値" : kind === "t" ? "観測 t 値" : "観測 z 値"}>
          <NumberInput value={stat} onChange={setStat} step={0.01} />
        </Field>
        {(kind === "t" || kind === "chi2") && (
          <Field label="自由度 df">
            <NumberInput value={df} onChange={(v) => setDf(Math.max(1, Math.round(v)))} step={1} min={1} />
          </Field>
        )}
        {kind !== "chi2" && (
          <div className="ui-sans">
            <span className="text-xs text-[var(--muted-strong)] mb-1 block">検定の方向</span>
            <div className="flex gap-2 mt-1">
              {(["two", "right", "left"] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSide(s)}
                  className={`px-3 py-1 rounded text-xs border transition ${
                    side === s
                      ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                      : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                  }`}
                >
                  {s === "two" ? "両側" : s === "right" ? "右側" : "左側"}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <Result
        label="p 値"
        value={p.toFixed(6)}
        hint={`${formula} / ${
          isSignif ? "α=0.05 で有意" : "α=0.05 では有意でない"
        }`}
      />
    </article>
  );
}
