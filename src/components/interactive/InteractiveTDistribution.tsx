"use client";

import { useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";
import { lgamma } from "@/components/tools/toolPrimitives";

const W = 460,
  H = 240,
  PAD_L = 36,
  PAD_R = 14,
  PAD_T = 14,
  PAD_B = 28;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

function tPdf(x: number, df: number): number {
  const log =
    lgamma((df + 1) / 2) -
    lgamma(df / 2) -
    0.5 * Math.log(df * Math.PI) -
    ((df + 1) / 2) * Math.log(1 + (x * x) / df);
  return Math.exp(log);
}

function normalPdf(x: number): number {
  return Math.exp(-(x * x) / 2) / Math.sqrt(2 * Math.PI);
}

export function InteractiveTDistribution() {
  const [df, setDf] = useState(5);

  const xs = Array.from({ length: 201 }, (_, i) => -5 + (i / 200) * 10);
  const tYs = xs.map((x) => tPdf(x, df));
  const nYs = xs.map((x) => normalPdf(x));
  const maxY = 0.45;

  const xToPx = (x: number) => PAD_L + ((x + 5) / 10) * PLOT_W;
  const yToPx = (y: number) => PAD_T + (1 - y / maxY) * PLOT_H;

  const path = (ys: number[]) =>
    ys.map((y, i) => `${i === 0 ? "M" : "L"}${xToPx(xs[i])},${yToPx(y)}`).join(" ");

  return (
    <InteractiveCard
      title="t 分布 vs 標準正規分布"
      description="自由度を動かすと、t 分布の裾(テール)の厚さが変化。df → ∞ で正規分布に一致。"
    >
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          <line
            x1={xToPx(0)}
            x2={xToPx(0)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border)"
            strokeDasharray="2 2"
          />
          <path d={path(nYs)} fill="none" stroke="var(--muted)" strokeWidth={1.5} strokeDasharray="4 3" />
          <path d={path(tYs)} fill="none" stroke="var(--accent)" strokeWidth={2.5} />

          {[-4, -2, 0, 2, 4].map((t) => (
            <text
              key={t}
              x={xToPx(t)}
              y={PAD_T + PLOT_H + 16}
              fontSize="9"
              textAnchor="middle"
              fill="var(--muted)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {t}
            </text>
          ))}

          <text x={PAD_L + 8} y={PAD_T + 16} fontSize="9" fill="var(--muted)" fontFamily="var(--font-noto-sans-jp)">
            ─ ─ N(0,1) / ── t(df={df})
          </text>
        </svg>
      </div>
      <Slider
        label="自由度 df"
        value={df}
        min={1}
        max={50}
        step={1}
        onChange={(v) => setDf(Math.round(v))}
        format={(v) => Math.round(v).toString()}
      />
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        df=1(コーシー分布)は裾が極端に厚く外れ値に頑健。df → ∞ で N(0,1) に収束。実務では **df ≥ 30** で正規近似 OK というのが慣習。
      </p>
    </InteractiveCard>
  );
}
