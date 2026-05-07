"use client";

import { useState } from "react";
import {
  Field,
  NumberInput,
  Result,
  fCdf,
  DownloadButtons,
  toCsv,
} from "./toolPrimitives";

type Group = { mean: number; sd: number; n: number };

export function AnovaCalc() {
  const [groups, setGroups] = useState<Group[]>([
    { mean: 50, sd: 8, n: 20 },
    { mean: 55, sd: 9, n: 20 },
    { mean: 58, sd: 8, n: 20 },
  ]);

  const update = (i: number, key: keyof Group, v: number) => {
    setGroups((prev) => prev.map((g, j) => (i === j ? { ...g, [key]: v } : g)));
  };

  const k = groups.length;
  const N = groups.reduce((s, g) => s + g.n, 0);
  const grandMean =
    groups.reduce((s, g) => s + g.mean * g.n, 0) / Math.max(N, 1);
  const ssb = groups.reduce((s, g) => s + g.n * (g.mean - grandMean) ** 2, 0);
  const ssw = groups.reduce((s, g) => s + (g.n - 1) * g.sd * g.sd, 0);
  const dfB = k - 1;
  const dfW = N - k;
  const msB = dfB > 0 ? ssb / dfB : 0;
  const msW = dfW > 0 ? ssw / dfW : 0;
  const F = msW > 0 ? msB / msW : 0;
  const p = dfB > 0 && dfW > 0 ? 1 - fCdf(F, dfB, dfW) : 1;

  const addGroup = () =>
    setGroups((prev) => [...prev, { mean: 50, sd: 8, n: 20 }]);
  const removeGroup = () =>
    setGroups((prev) => (prev.length > 2 ? prev.slice(0, -1) : prev));

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">一元配置分散分析(ANOVA)</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          各群の平均・標準偏差・サンプルサイズから F 統計量と p 値を計算。3 群以上の平均差検定に。
        </p>
      </header>
      <div className="space-y-3">
        {groups.map((g, i) => (
          <div key={i} className="grid grid-cols-3 gap-2">
            <Field label={`群 ${i + 1} 平均`}>
              <NumberInput
                value={g.mean}
                onChange={(v) => update(i, "mean", v)}
                step={0.1}
              />
            </Field>
            <Field label="標準偏差">
              <NumberInput
                value={g.sd}
                onChange={(v) => update(i, "sd", v)}
                step={0.1}
                min={0.001}
              />
            </Field>
            <Field label="n">
              <NumberInput
                value={g.n}
                onChange={(v) => update(i, "n", Math.max(2, Math.round(v)))}
                step={1}
                min={2}
              />
            </Field>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-3 ui-sans text-xs">
        <button
          type="button"
          onClick={addGroup}
          className="px-3 py-1 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
        >
          + 群を追加
        </button>
        <button
          type="button"
          onClick={removeGroup}
          className="px-3 py-1 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          disabled={groups.length <= 2}
        >
          − 群を削除
        </button>
      </div>
      <Result
        label="p 値"
        value={p < 1e-4 ? p.toExponential(2) : p.toFixed(4)}
        hint={`F = MSB/MSW = ${F.toFixed(3)} / df=(${dfB}, ${dfW}) / ${p < 0.05 ? "α=5% で群間差あり(H₀ 棄却)" : "α=5% で群間差は有意でない"}`}
      />
      <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
        <div className="text-xs text-[var(--muted)] ui-sans tabular-nums">
          SSB={ssb.toFixed(2)} / SSW={ssw.toFixed(2)} / 総平均=
          {grandMean.toFixed(2)}
        </div>
        <DownloadButtons
          baseFilename="anova"
          csv={toCsv([
            ...groups.map((g, i) => ({
              row: `group${i + 1}`,
              mean: g.mean,
              sd: g.sd,
              n: g.n,
            })),
            { row: "between", df: dfB, ss: ssb, ms: msB, F: F, p: p },
            { row: "within", df: dfW, ss: ssw, ms: msW },
          ])}
          json={{
            groups,
            grandMean,
            ssb,
            ssw,
            dfB,
            dfW,
            msB,
            msW,
            F,
            pValue: p,
          }}
        />
      </div>
    </article>
  );
}
