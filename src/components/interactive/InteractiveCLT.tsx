"use client";

import { useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";

const W = 460,
  H = 240,
  PAD_L = 36,
  PAD_R = 14,
  PAD_T = 14,
  PAD_B = 28;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

type Dist = "uniform" | "exponential" | "bimodal";

/**
 * 各分布の理論的な平均と分散を返す
 */
function distMeanVar(dist: Dist): { mean: number; variance: number } {
  if (dist === "uniform") return { mean: 0.5, variance: 1 / 12 };
  if (dist === "exponential") return { mean: 1, variance: 1 };
  // bimodal: 0.5 で {0.2, 0.8} の混合 (各 N(0.2, 0.05²) + N(0.8, 0.05²))
  const mean = 0.5;
  const variance = 0.5 * (0.05 * 0.05 + 0.2 * 0.2) + 0.5 * (0.05 * 0.05 + 0.2 * 0.2);
  return { mean, variance };
}

function distPdf(dist: Dist, x: number): number {
  if (dist === "uniform") {
    return x >= 0 && x <= 1 ? 1 : 0;
  }
  if (dist === "exponential") {
    return x >= 0 ? Math.exp(-x) : 0;
  }
  // bimodal
  const sigma = 0.08;
  const g = (mu: number) =>
    Math.exp(-((x - mu) ** 2) / (2 * sigma * sigma)) /
    (sigma * Math.sqrt(2 * Math.PI));
  return 0.5 * g(0.2) + 0.5 * g(0.8);
}

function normalPdf(x: number, mu: number, sigma: number): number {
  const z = (x - mu) / sigma;
  return Math.exp(-(z * z) / 2) / (sigma * Math.sqrt(2 * Math.PI));
}

export function InteractiveCLT() {
  const [n, setN] = useState(5);
  const [dist, setDist] = useState<Dist>("uniform");

  const xMin = dist === "exponential" ? -0.5 : -0.2;
  const xMax = dist === "exponential" ? 4 : 1.2;
  const xToPx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yMax = 5;
  const yToPx = (y: number) => PAD_T + (1 - y / yMax) * PLOT_H;

  const xs: number[] = [];
  for (let x = xMin; x <= xMax; x += 0.01) xs.push(x);

  // 元分布
  const origPath = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(distPdf(dist, x))}`)
    .join(" ");

  // CLT による標本平均の近似分布(中心極限定理)
  const { mean, variance } = distMeanVar(dist);
  const sigmaMean = Math.sqrt(variance / n);
  const cltPath = xs
    .map(
      (x, i) =>
        `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(normalPdf(x, mean, sigmaMean))}`,
    )
    .join(" ");

  return (
    <InteractiveCard
      title="中心極限定理を体感する"
      description="どの分布(一様・指数・二峰)も、標本平均は n が大きいと正規型に近づく。スライダーで n を増やしてみよう。"
    >
      <div className="flex gap-2 ui-sans text-xs mb-3">
        {(["uniform", "exponential", "bimodal"] as Dist[]).map((d) => (
          <button
            key={d}
            type="button"
            onClick={() => setDist(d)}
            className={`px-3 py-1 rounded border transition ${
              dist === d
                ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {d === "uniform" ? "一様" : d === "exponential" ? "指数" : "二峰"}
          </button>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          <path d={origPath} stroke="var(--muted)" strokeWidth={1} fill="none" strokeDasharray="3 2" />
          <path d={cltPath} stroke="var(--link)" strokeWidth={1.8} fill="none" />
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {/* 平均線 */}
          <line
            x1={xToPx(mean)}
            x2={xToPx(mean)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--foreground)"
            strokeDasharray="1 2"
          />
          {/* 凡例 */}
          <g transform={`translate(${PAD_L + 8}, ${PAD_T + 8})`}>
            <line x1={0} x2={14} y1={0} y2={0} stroke="var(--muted)" strokeDasharray="3 2" />
            <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">元の分布</text>
            <line x1={0} x2={14} y1={12} y2={12} stroke="var(--link)" strokeWidth={2} />
            <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">標本平均の分布(CLT)</text>
          </g>
        </svg>
      </div>
      <Slider
        label="n(標本サイズ)"
        value={n}
        min={1}
        max={100}
        step={1}
        onChange={(v) => setN(Math.round(v))}
        format={(v) => Math.round(v).toString()}
      />
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans leading-relaxed">
        標本平均の標準誤差 = σ / √n = {sigmaMean.toFixed(3)}。n が大きいほど分布は鋭くなる。
      </p>
    </InteractiveCard>
  );
}
