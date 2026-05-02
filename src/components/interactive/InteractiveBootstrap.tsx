"use client";

import { useMemo, useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";

const W = 460;
const H = 240;
const PAD_L = 36;
const PAD_R = 14;
const PAD_T = 14;
const PAD_B = 28;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

/** mulberry32 PRNG for reproducible bootstrap. */
function makeRng(seed: number): () => number {
  let s = seed | 0;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FIXED_SAMPLE = [12, 14, 14, 15, 17, 18, 18, 19, 20, 22, 23, 24, 26, 28, 31];

function median(xs: number[]): number {
  const a = [...xs].sort((p, q) => p - q);
  const m = Math.floor(a.length / 2);
  return a.length % 2 === 0 ? (a[m - 1] + a[m]) / 2 : a[m];
}

function mean(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

export function InteractiveBootstrap() {
  const [B, setB] = useState(800);
  const [statistic, setStatistic] = useState<"mean" | "median">("mean");
  const [seed, setSeed] = useState(42);

  const result = useMemo(() => {
    const rng = makeRng(seed);
    const stat = statistic === "mean" ? mean : median;
    const original = stat(FIXED_SAMPLE);
    const replicates: number[] = [];
    for (let b = 0; b < B; b++) {
      const sample: number[] = [];
      for (let i = 0; i < FIXED_SAMPLE.length; i++) {
        sample.push(FIXED_SAMPLE[Math.floor(rng() * FIXED_SAMPLE.length)]);
      }
      replicates.push(stat(sample));
    }
    const sorted = [...replicates].sort((a, b) => a - b);
    const ci = [
      sorted[Math.floor(0.025 * sorted.length)],
      sorted[Math.floor(0.975 * sorted.length)],
    ];
    const se = Math.sqrt(
      replicates.reduce(
        (acc, x) => acc + (x - mean(replicates)) ** 2,
        0,
      ) / (replicates.length - 1),
    );
    return { original, replicates, ci, se };
  }, [B, statistic, seed]);

  // Build histogram
  const bins = 24;
  const lo = Math.min(...result.replicates);
  const hi = Math.max(...result.replicates);
  const binWidth = (hi - lo) / bins;
  const counts = Array.from({ length: bins }, () => 0);
  for (const r of result.replicates) {
    const idx = Math.min(bins - 1, Math.max(0, Math.floor((r - lo) / binWidth)));
    counts[idx] += 1;
  }
  const maxCount = Math.max(...counts, 1);

  const xToPx = (x: number) =>
    PAD_L + ((x - lo) / Math.max(hi - lo, 1e-9)) * PLOT_W;
  const yToPx = (y: number) => PAD_T + (1 - y / maxCount) * PLOT_H;

  return (
    <InteractiveCard
      title="ブートストラップ標本分布"
      description={`観測データから復元抽出を ${B} 回繰り返し、統計量(平均または中央値)の分布を構築。理論分布に頼らず信頼区間を作る現代統計学の基本ツール。`}
    >
      <div className="flex justify-center mb-3">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {counts.map((c, i) => (
            <rect
              key={i}
              x={xToPx(lo + i * binWidth)}
              y={yToPx(c)}
              width={Math.max(PLOT_W / bins - 1, 1)}
              height={Math.max(PAD_T + PLOT_H - yToPx(c), 0)}
              fill="var(--accent)"
              opacity={0.75}
            />
          ))}
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {/* CI lines */}
          {result.ci.map((c, i) => (
            <line
              key={i}
              x1={xToPx(c)}
              x2={xToPx(c)}
              y1={PAD_T}
              y2={PAD_T + PLOT_H}
              stroke="var(--link)"
              strokeDasharray="3 3"
            />
          ))}
          {/* Original statistic */}
          <line
            x1={xToPx(result.original)}
            x2={xToPx(result.original)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="#dc2626"
            strokeWidth={1.6}
          />
          <text
            x={xToPx(result.original)}
            y={PAD_T + 12}
            fontSize="9"
            textAnchor="middle"
            fill="#dc2626"
            fontFamily="var(--font-noto-sans-jp)"
          >
            観測値 {result.original.toFixed(2)}
          </text>
          {[lo, (lo + hi) / 2, hi].map((t, i) => (
            <text
              key={i}
              x={xToPx(t)}
              y={PAD_T + PLOT_H + 16}
              fontSize="9"
              textAnchor="middle"
              fill="var(--muted)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {t.toFixed(2)}
            </text>
          ))}
        </svg>
      </div>
      <div className="flex flex-wrap items-center gap-3 ui-sans text-xs mb-3">
        <div className="flex items-center gap-2">
          <span className="text-[var(--muted)]">統計量</span>
          <div className="flex border border-[var(--page-border-strong)] rounded overflow-hidden">
            {(["mean", "median"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatistic(s)}
                className={`px-2.5 py-1 ${statistic === s ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold" : "hover:bg-[var(--background)]"}`}
              >
                {s === "mean" ? "平均" : "中央値"}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setSeed((s) => (s + 1) | 0)}
          className="ml-auto px-2.5 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
        >
          再サンプル
        </button>
      </div>
      <Slider
        label="ブートストラップ反復回数 B"
        value={B}
        min={100}
        max={3000}
        step={100}
        onChange={(v) => setB(Math.round(v))}
        format={(v) => Math.round(v).toString()}
      />
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans leading-relaxed">
        観測値: <span className="font-bold">{result.original.toFixed(3)}</span>{" "}
        / 標準誤差(SE): {result.se.toFixed(3)} / 95% パーセンタイル CI:{" "}
        <span className="font-bold">[{result.ci[0].toFixed(3)}, {result.ci[1].toFixed(3)}]</span>
      </p>
    </InteractiveCard>
  );
}
