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

function lnFact(n: number): number {
  let s = 0;
  for (let i = 2; i <= n; i++) s += Math.log(i);
  return s;
}

function poissonPmf(k: number, lambda: number): number {
  if (lambda <= 0) return k === 0 ? 1 : 0;
  return Math.exp(-lambda + k * Math.log(lambda) - lnFact(k));
}

export function InteractivePoisson() {
  const [lambda, setLambda] = useState(4);

  // Show 0..K where K is large enough that we capture > 99.5%.
  const kMax = Math.max(15, Math.ceil(lambda + 4 * Math.sqrt(lambda)));
  const ks = Array.from({ length: kMax + 1 }, (_, i) => i);
  const probs = ks.map((k) => poissonPmf(k, lambda));
  const maxP = Math.max(...probs, 0.01);

  const xToPx = (k: number) => PAD_L + (k / Math.max(kMax, 1)) * PLOT_W;
  const yToPx = (y: number) => PAD_T + (1 - y / (maxP * 1.1)) * PLOT_H;
  const barW = PLOT_W / Math.max(kMax + 1, 2);

  return (
    <InteractiveCard
      title="ポアソン分布 Po(λ) を動かす"
      description="単位時間に起こる「まれな事象の回数」のモデル。λ を増やすと右にずれて釣鐘型に近づき、λ ≥ 10 程度で正規近似が効きはじめます。平均と分散はどちらも λ。"
    >
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {ks.map((k) => {
            const h = PAD_T + PLOT_H - yToPx(probs[k]);
            return (
              <rect
                key={k}
                x={xToPx(k) - barW * 0.4}
                y={yToPx(probs[k])}
                width={Math.max(barW * 0.8, 1)}
                height={Math.max(h, 0)}
                fill="var(--accent)"
                opacity={0.85}
              />
            );
          })}
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {[0, Math.round(kMax / 4), Math.round(kMax / 2), Math.round((3 * kMax) / 4), kMax].map(
            (t, i) => (
              <text
                key={i}
                x={xToPx(t)}
                y={PAD_T + PLOT_H + 16}
                fontSize="9"
                textAnchor="middle"
                fill="var(--muted)"
                fontFamily="var(--font-noto-sans-jp)"
              >
                {t}
              </text>
            ),
          )}
          <line
            x1={xToPx(lambda)}
            x2={xToPx(lambda)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--link)"
            strokeDasharray="2 2"
          />
          <text
            x={xToPx(lambda)}
            y={PAD_T + 12}
            fontSize="9"
            textAnchor="middle"
            fill="var(--link)"
            fontFamily="var(--font-noto-sans-jp)"
          >
            λ = {lambda.toFixed(1)}
          </text>
        </svg>
      </div>
      <Slider
        label="λ(平均発生回数)"
        value={lambda}
        min={0.5}
        max={20}
        step={0.5}
        onChange={setLambda}
        format={(v) => v.toFixed(1)}
      />
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        平均 = 分散 = λ = {lambda.toFixed(2)} / 標準偏差 = √λ ≈{" "}
        {Math.sqrt(lambda).toFixed(2)} / モード = ⌊λ⌋ ={" "}
        {Math.floor(lambda)}
      </p>
    </InteractiveCard>
  );
}
