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

function logChoose(n: number, k: number): number {
  // log(n!) を Stirling 近似 + 対数空間で安定計算
  const lgammaInt = (m: number): number => {
    let s = 0;
    for (let i = 2; i <= m; i++) s += Math.log(i);
    return s;
  };
  return lgammaInt(n) - lgammaInt(k) - lgammaInt(n - k);
}

function binomPmf(n: number, k: number, p: number): number {
  if (p === 0) return k === 0 ? 1 : 0;
  if (p === 1) return k === n ? 1 : 0;
  const log = logChoose(n, k) + k * Math.log(p) + (n - k) * Math.log(1 - p);
  return Math.exp(log);
}

export function InteractiveBinomial() {
  const [n, setN] = useState(20);
  const [p, setP] = useState(0.4);

  const ks = Array.from({ length: n + 1 }, (_, i) => i);
  const probs = ks.map((k) => binomPmf(n, k, p));
  const maxP = Math.max(...probs, 0.01);

  const xToPx = (k: number) => PAD_L + (k / Math.max(n, 1)) * PLOT_W;
  const yToPx = (y: number) => PAD_T + (1 - y / (maxP * 1.1)) * PLOT_H;
  const barW = PLOT_W / Math.max(n + 1, 2);

  const mean = n * p;
  const variance = n * p * (1 - p);

  return (
    <InteractiveCard
      title="二項分布 Bin(n, p) を動かす"
      description="n を増やすと釣鐘型に。p が 0.5 から離れるほど歪む。np と n(1-p) が両方 5 以上だと正規近似可。"
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
          {[0, Math.round(n / 4), Math.round(n / 2), Math.round((3 * n) / 4), n].map(
            (t, i) => (
              <g key={i}>
                <text
                  x={xToPx(t)}
                  y={PAD_T + PLOT_H + 16}
                  fontSize="9"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontFamily="var(--font-noto-sans-jp)"
                >
                  {t}
                </text>
              </g>
            ),
          )}
          {/* 平均位置 */}
          <line
            x1={xToPx(mean)}
            x2={xToPx(mean)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--link)"
            strokeDasharray="2 2"
          />
          <text
            x={xToPx(mean)}
            y={PAD_T + 12}
            fontSize="9"
            textAnchor="middle"
            fill="var(--link)"
            fontFamily="var(--font-noto-sans-jp)"
          >
            np = {mean.toFixed(1)}
          </text>
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Slider
          label="n(試行回数)"
          value={n}
          min={2}
          max={60}
          step={1}
          onChange={(v) => setN(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
        <Slider
          label="p(成功確率)"
          value={p}
          min={0.05}
          max={0.95}
          step={0.05}
          onChange={setP}
          format={(v) => v.toFixed(2)}
        />
      </div>
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        平均 np = {mean.toFixed(2)} / 分散 np(1−p) = {variance.toFixed(2)} / 標準偏差 ={" "}
        {Math.sqrt(variance).toFixed(2)}
      </p>
    </InteractiveCard>
  );
}
