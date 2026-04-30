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

function lgammaInt(m: number): number {
  let s = 0;
  for (let i = 2; i <= m; i++) s += Math.log(i);
  return s;
}

function logBeta(a: number, b: number): number {
  return lgammaInt(a - 1) + lgammaInt(b - 1) - lgammaInt(a + b - 1);
}

function betaPdf(x: number, a: number, b: number): number {
  if (x <= 0 || x >= 1) return 0;
  const log = (a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x) - logBeta(a, b);
  return Math.exp(log);
}

export function InteractiveBayes() {
  const [priorA, setPriorA] = useState(2);
  const [priorB, setPriorB] = useState(2);
  const [successes, setSuccesses] = useState(7);
  const [failures, setFailures] = useState(3);

  const postA = priorA + successes;
  const postB = priorB + failures;

  const xs = Array.from({ length: 101 }, (_, i) => i / 100);
  const priorYs = xs.map((x) => betaPdf(x, priorA, priorB));
  const postYs = xs.map((x) => betaPdf(x, postA, postB));
  const maxY = Math.max(...priorYs, ...postYs, 0.5);

  const xToPx = (x: number) => PAD_L + x * PLOT_W;
  const yToPx = (y: number) => PAD_T + (1 - y / (maxY * 1.05)) * PLOT_H;

  const path = (ys: number[]) =>
    ys.map((y, i) => `${i === 0 ? "M" : "L"}${xToPx(xs[i])},${yToPx(y)}`).join(" ");

  const priorMean = priorA / (priorA + priorB);
  const postMean = postA / (postA + postB);

  return (
    <InteractiveCard
      title="ベイズ更新 ─ 事前 × 尤度 = 事後"
      description="コインの表が出る確率 θ をベイズ推定。Beta(a,b) を事前分布として、観測データで分布が更新される様子を体感。"
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
          <path
            d={path(priorYs)}
            fill="none"
            stroke="var(--muted)"
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />
          <path d={path(postYs)} fill="none" stroke="var(--accent)" strokeWidth={2.5} />
          {[0, 0.25, 0.5, 0.75, 1].map((t) => (
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
          <line
            x1={xToPx(postMean)}
            x2={xToPx(postMean)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--link)"
            strokeDasharray="2 2"
          />
          <text
            x={xToPx(postMean)}
            y={PAD_T + 12}
            fontSize="9"
            textAnchor="middle"
            fill="var(--link)"
            fontFamily="var(--font-noto-sans-jp)"
          >
            事後平均={postMean.toFixed(2)}
          </text>
          <text x={PAD_L + 8} y={PAD_T + 24} fontSize="9" fill="var(--muted)" fontFamily="var(--font-noto-sans-jp)">
            ─ ─ 事前  ── 事後
          </text>
        </svg>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Slider
          label="事前 a"
          value={priorA}
          min={1}
          max={20}
          step={1}
          onChange={(v) => setPriorA(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
        <Slider
          label="事前 b"
          value={priorB}
          min={1}
          max={20}
          step={1}
          onChange={(v) => setPriorB(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
        <Slider
          label="観測 表"
          value={successes}
          min={0}
          max={50}
          step={1}
          onChange={(v) => setSuccesses(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
        <Slider
          label="観測 裏"
          value={failures}
          min={0}
          max={50}
          step={1}
          onChange={(v) => setFailures(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
      </div>
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        事前 Beta({priorA},{priorB}) 平均={priorMean.toFixed(3)} → 事後 Beta({postA},{postB}) 平均={postMean.toFixed(3)} / データが多いほど事前の影響は小さくなる。
      </p>
    </InteractiveCard>
  );
}
