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
const N_POINTS = 200;

export function InteractiveExponential() {
  const [rate, setRate] = useState(1.0);
  const [showCdf, setShowCdf] = useState(false);

  const xMax = Math.max(5, 5 / rate);
  const xs = Array.from({ length: N_POINTS }, (_, i) => (i / (N_POINTS - 1)) * xMax);
  const ys = xs.map((x) => (showCdf ? 1 - Math.exp(-rate * x) : rate * Math.exp(-rate * x)));
  const yMax = showCdf ? 1.05 : Math.max(...ys, 0.01) * 1.1;

  const xToPx = (x: number) => PAD_L + (x / xMax) * PLOT_W;
  const yToPx = (y: number) => PAD_T + (1 - y / yMax) * PLOT_H;

  const path = ys
    .map((y, i) => `${i === 0 ? "M" : "L"} ${xToPx(xs[i]).toFixed(2)} ${yToPx(y).toFixed(2)}`)
    .join(" ");

  // Fill under curve for PDF view
  const fill = !showCdf
    ? path + ` L ${xToPx(xMax)} ${yToPx(0)} L ${xToPx(0)} ${yToPx(0)} Z`
    : "";

  const mean = 1 / rate;
  const median = Math.log(2) / rate;

  return (
    <InteractiveCard
      title="指数分布 Exp(λ) を動かす"
      description="次のイベントまでの待ち時間の分布。λ(発生率) が高いほど短時間に集中します。記憶喪失性(memoryless)があり、過去の経過時間に依存しません。ポアソン過程の到着間隔と表裏一体。"
    >
      <div className="flex justify-end mb-2">
        <button
          type="button"
          onClick={() => setShowCdf((v) => !v)}
          className="ui-sans text-xs px-2.5 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
        >
          {showCdf ? "PDF を表示" : "CDF を表示"}
        </button>
      </div>
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {fill && <path d={fill} fill="var(--accent)" opacity={0.2} />}
          <path
            d={path}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={2}
          />
          {/* Mean line */}
          {!showCdf && (
            <>
              <line
                x1={xToPx(mean)}
                x2={xToPx(mean)}
                y1={PAD_T}
                y2={PAD_T + PLOT_H}
                stroke="var(--link)"
                strokeDasharray="2 2"
              />
              <text
                x={xToPx(mean) + 4}
                y={PAD_T + 12}
                fontSize="9"
                fill="var(--link)"
                fontFamily="var(--font-noto-sans-jp)"
              >
                μ = 1/λ = {mean.toFixed(2)}
              </text>
            </>
          )}
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {[0, xMax / 4, xMax / 2, (3 * xMax) / 4, xMax].map((t, i) => (
            <text
              key={i}
              x={xToPx(t)}
              y={PAD_T + PLOT_H + 16}
              fontSize="9"
              textAnchor="middle"
              fill="var(--muted)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {t.toFixed(1)}
            </text>
          ))}
        </svg>
      </div>
      <Slider
        label="λ(発生率)"
        value={rate}
        min={0.1}
        max={3}
        step={0.05}
        onChange={setRate}
        format={(v) => v.toFixed(2)}
      />
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        平均 = 1/λ = {mean.toFixed(3)} / 中央値 = ln(2)/λ = {median.toFixed(3)} / 標準偏差 = 1/λ
      </p>
    </InteractiveCard>
  );
}
