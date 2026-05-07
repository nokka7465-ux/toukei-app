"use client";

import { useMemo, useState } from "react";
import { DownloadButtons, toCsv } from "./toolPrimitives";

const SAMPLE = "12, 14, 14, 15, 17, 18, 18, 19, 20, 22, 23, 24, 26, 28, 31";

function parseInput(text: string): number[] {
  if (!text) return [];
  return text
    .split(/[\s,;\t\n]+/)
    .map((t) => t.trim())
    .filter(Boolean)
    .map((t) => Number(t))
    .filter((v) => Number.isFinite(v));
}

function quantile(sorted: number[], q: number): number {
  if (sorted.length === 0) return NaN;
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] !== undefined) {
    return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
  }
  return sorted[base];
}

export function DescriptiveStats() {
  const [text, setText] = useState(SAMPLE);

  const stats = useMemo(() => {
    const xs = parseInput(text);
    const n = xs.length;
    if (n === 0) return null;
    const sum = xs.reduce((a, b) => a + b, 0);
    const mean = sum / n;
    const sorted = [...xs].sort((a, b) => a - b);
    const min = sorted[0];
    const max = sorted[n - 1];
    const median = quantile(sorted, 0.5);
    const q1 = quantile(sorted, 0.25);
    const q3 = quantile(sorted, 0.75);
    const variance =
      n > 1
        ? xs.reduce((acc, x) => acc + (x - mean) * (x - mean), 0) / (n - 1)
        : 0;
    const sd = Math.sqrt(variance);
    const skew =
      n > 2 && sd > 0
        ? (n / ((n - 1) * (n - 2))) *
          xs.reduce((a, x) => a + Math.pow((x - mean) / sd, 3), 0)
        : 0;
    const kurt =
      n > 3 && sd > 0
        ? ((n * (n + 1)) / ((n - 1) * (n - 2) * (n - 3))) *
            xs.reduce((a, x) => a + Math.pow((x - mean) / sd, 4), 0) -
          (3 * (n - 1) * (n - 1)) / ((n - 2) * (n - 3))
        : 0;
    return {
      n,
      sum,
      mean,
      min,
      max,
      median,
      q1,
      q3,
      iqr: q3 - q1,
      range: max - min,
      sd,
      variance,
      se: sd / Math.sqrt(n),
      skew,
      kurt,
    };
  }, [text]);

  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">記述統計計算機</h3>
        <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
          数値データを貼り付けて、平均・中央値・SD・四分位・歪度・尖度をまとめて確認します。区切りはカンマ・スペース・改行のいずれでも OK。
        </p>
      </header>
      <label className="block ui-sans">
        <span className="text-xs text-[var(--muted-strong)] mb-1 block">
          データ
        </span>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums font-mono leading-relaxed"
        />
      </label>
      {stats ? (
        <>
          <div className="rounded-lg p-5 mt-4 border-2 border-[var(--accent)] bg-[var(--highlight)] grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm tabular-nums ui-sans">
            <Stat label="N" value={String(stats.n)} />
            <Stat label="平均" value={stats.mean.toFixed(4)} />
            <Stat label="中央値" value={stats.median.toFixed(4)} />
            <Stat label="標準偏差(SD)" value={stats.sd.toFixed(4)} />
            <Stat label="標準誤差(SE)" value={stats.se.toFixed(4)} />
            <Stat label="分散" value={stats.variance.toFixed(4)} />
            <Stat label="最小" value={stats.min.toFixed(4)} />
            <Stat label="最大" value={stats.max.toFixed(4)} />
            <Stat label="範囲" value={stats.range.toFixed(4)} />
            <Stat label="Q1" value={stats.q1.toFixed(4)} />
            <Stat label="Q3" value={stats.q3.toFixed(4)} />
            <Stat label="IQR" value={stats.iqr.toFixed(4)} />
            <Stat label="歪度" value={stats.skew.toFixed(4)} />
            <Stat label="尖度" value={stats.kurt.toFixed(4)} />
            <Stat label="合計" value={stats.sum.toFixed(4)} />
          </div>
          <div className="mt-3 flex justify-end">
            <DownloadButtons
              baseFilename="descriptive-stats"
              csv={toCsv([
                { metric: "N", value: stats.n },
                { metric: "mean", value: stats.mean },
                { metric: "median", value: stats.median },
                { metric: "sd", value: stats.sd },
                { metric: "se", value: stats.se },
                { metric: "variance", value: stats.variance },
                { metric: "min", value: stats.min },
                { metric: "max", value: stats.max },
                { metric: "range", value: stats.range },
                { metric: "q1", value: stats.q1 },
                { metric: "q3", value: stats.q3 },
                { metric: "iqr", value: stats.iqr },
                { metric: "skew", value: stats.skew },
                { metric: "kurt", value: stats.kurt },
                { metric: "sum", value: stats.sum },
              ])}
              json={stats}
            />
          </div>
        </>
      ) : (
        <p className="text-xs text-[var(--muted)] mt-4">
          数値データを入力してください。
        </p>
      )}
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] text-[var(--muted)]">{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}
