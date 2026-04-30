"use client";

import { useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";
import { chiSqCdf } from "@/components/tools/toolPrimitives";

const W = 460,
  H = 260,
  PAD_L = 36,
  PAD_R = 14,
  PAD_T = 14,
  PAD_B = 36;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

const CATEGORY_COUNT = 4;

export function InteractiveChiSquare() {
  const [observed, setObserved] = useState<number[]>([28, 22, 25, 25]);

  const total = observed.reduce((a, b) => a + b, 0);
  const expected = total / CATEGORY_COUNT;
  const chi = observed.reduce((s, o) => s + (o - expected) ** 2 / expected, 0);
  const df = CATEGORY_COUNT - 1;
  const pValue = 1 - chiSqCdf(chi, df);

  const maxBar = Math.max(...observed, expected) * 1.15;
  const xToPx = (i: number) => PAD_L + ((i + 0.5) / CATEGORY_COUNT) * PLOT_W;
  const yToPx = (v: number) => PAD_T + (1 - v / maxBar) * PLOT_H;
  const barW = (PLOT_W / CATEGORY_COUNT) * 0.55;

  const updateAt = (i: number, v: number) => {
    setObserved((prev) => prev.map((x, j) => (i === j ? Math.round(v) : x)));
  };

  return (
    <InteractiveCard
      title="カイ二乗適合度検定 ─ 観測度数を動かす"
      description="4 カテゴリで「均等」が帰無仮説。観測度数を偏らせると χ² が大きく・p 値が小さくなる様子を体感。"
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
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={yToPx(expected)}
            y2={yToPx(expected)}
            stroke="var(--link)"
            strokeDasharray="3 3"
          />
          <text
            x={PAD_L + PLOT_W - 4}
            y={yToPx(expected) - 4}
            fontSize="9"
            textAnchor="end"
            fill="var(--link)"
            fontFamily="var(--font-noto-sans-jp)"
          >
            期待度数 E={expected.toFixed(1)}
          </text>
          {observed.map((o, i) => {
            const x = xToPx(i);
            const top = yToPx(o);
            const baseline = PAD_T + PLOT_H;
            return (
              <g key={i}>
                <rect
                  x={x - barW / 2}
                  y={top}
                  width={barW}
                  height={baseline - top}
                  fill="var(--accent)"
                  opacity={0.85}
                />
                <text
                  x={x}
                  y={top - 4}
                  fontSize="10"
                  textAnchor="middle"
                  fill="var(--foreground)"
                  fontFamily="var(--font-noto-sans-jp)"
                  fontWeight="bold"
                >
                  {o}
                </text>
                <text
                  x={x}
                  y={baseline + 16}
                  fontSize="10"
                  textAnchor="middle"
                  fill="var(--muted)"
                  fontFamily="var(--font-noto-sans-jp)"
                >
                  カテゴリ {String.fromCharCode(65 + i)}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {observed.map((v, i) => (
          <Slider
            key={i}
            label={`カテゴリ ${String.fromCharCode(65 + i)}`}
            value={v}
            min={0}
            max={80}
            step={1}
            onChange={(nv) => updateAt(i, nv)}
            format={(nv) => Math.round(nv).toString()}
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-3 text-xs ui-sans">
        <div className="paper rounded p-2">
          <div className="text-[var(--muted)] mb-1">χ² 統計量</div>
          <div className="font-bold tabular-nums">{chi.toFixed(3)}</div>
        </div>
        <div className="paper rounded p-2">
          <div className="text-[var(--muted)] mb-1">自由度</div>
          <div className="font-bold tabular-nums">{df}</div>
        </div>
        <div
          className="paper rounded p-2"
          style={{
            borderLeft: `3px solid ${pValue < 0.05 ? "var(--accent)" : "var(--page-border-strong)"}`,
          }}
        >
          <div className="text-[var(--muted)] mb-1">p 値</div>
          <div className="font-bold tabular-nums">
            {pValue < 1e-4 ? pValue.toExponential(2) : pValue.toFixed(4)}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        p &lt; 0.05 で「均等」の帰無仮説を棄却。観測の合計 N={total}、期待値 E=N/4={expected.toFixed(1)}。
      </p>
    </InteractiveCard>
  );
}
