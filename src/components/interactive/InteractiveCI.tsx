"use client";

import { useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";

const W = 460,
  H = 280,
  PAD_L = 40,
  PAD_R = 14,
  PAD_T = 14,
  PAD_B = 28;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

// z 値の表(信頼水準 → z)
function zForLevel(level: number): number {
  // 90%, 95%, 99%
  if (level >= 0.99) return 2.576;
  if (level >= 0.95) return 1.96;
  return 1.645;
}

// 擬似乱数
function seedRand(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280 - 0.5;
  };
}

function gauss(rand: () => number) {
  // 簡易ボックス・ミュラー
  const u1 = Math.max(rand() + 0.5, 1e-9);
  const u2 = rand() + 0.5;
  return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
}

export function InteractiveCI() {
  const [n, setN] = useState(20);
  const [level, setLevel] = useState(0.95);
  const [seed, setSeed] = useState(7);

  const trueMean = 0;
  const sigma = 1;
  const trials = 24;
  const z = zForLevel(level);

  // 24 回の試行
  const rand = seedRand(seed);
  const intervals: { center: number; covered: boolean }[] = [];
  for (let i = 0; i < trials; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) sum += gauss(rand);
    const xbar = sum / n;
    const half = (z * sigma) / Math.sqrt(n);
    const covered = Math.abs(xbar - trueMean) <= half;
    intervals.push({ center: xbar, covered });
  }

  const xMin = -1.5,
    xMax = 1.5;
  const xToPx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yToPx = (i: number) => PAD_T + (i / trials) * (PLOT_H - 4) + 2;

  const half = (z * sigma) / Math.sqrt(n);
  const coveredCount = intervals.filter((iv) => iv.covered).length;

  return (
    <InteractiveCard
      title="信頼区間を 24 回作って眺める"
      description="標本サイズ n と信頼水準を変えると、区間の幅と『母平均を含む区間の数』が変化する。"
    >
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {/* 真値 */}
          <line
            x1={xToPx(trueMean)}
            x2={xToPx(trueMean)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--link)"
            strokeWidth={1}
            strokeDasharray="2 2"
          />
          <text
            x={xToPx(trueMean)}
            y={PAD_T + PLOT_H + 16}
            fontSize="9"
            textAnchor="middle"
            fill="var(--link)"
            fontFamily="var(--font-noto-sans-jp)"
          >
            母平均
          </text>
          {[-1, 1].map((t) => (
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
          {intervals.map((iv, i) => {
            const lo = iv.center - half;
            const hi = iv.center + half;
            const color = iv.covered ? "var(--accent-strong)" : "#dc2626";
            const y = yToPx(i + 0.5);
            return (
              <g key={i}>
                <line
                  x1={xToPx(lo)}
                  x2={xToPx(hi)}
                  y1={y}
                  y2={y}
                  stroke={color}
                  strokeWidth={1.6}
                />
                <line x1={xToPx(lo)} x2={xToPx(lo)} y1={y - 3} y2={y + 3} stroke={color} />
                <line x1={xToPx(hi)} x2={xToPx(hi)} y1={y - 3} y2={y + 3} stroke={color} />
                <circle cx={xToPx(iv.center)} cy={y} r={1.8} fill={color} />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <Slider
          label="n(標本サイズ)"
          value={n}
          min={5}
          max={100}
          step={1}
          onChange={(v) => setN(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
        <div className="ui-sans">
          <label className="text-xs text-[var(--muted-strong)]">信頼水準</label>
          <div className="flex gap-2 mt-1">
            {[0.9, 0.95, 0.99].map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLevel(l)}
                className={`px-3 py-1 rounded text-xs border transition ${
                  level === l
                    ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                    : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                }`}
              >
                {(l * 100).toFixed(0)}%
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-[var(--muted-strong)] ui-sans">
          区間幅 = ±{half.toFixed(3)}({(level * 100).toFixed(0)}% × σ/√n)
        </div>
        <button
          type="button"
          onClick={() => setSeed((s) => s + 1)}
          className="text-xs ui-sans px-3 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
        >
          ↻ 別の標本で試す
        </button>
      </div>
      <p className="mt-3 text-sm font-bold ui-sans">
        {trials} 回中{" "}
        <span className="tabular-nums">{coveredCount}</span>{" "}
        本が母平均を含んだ(理論値: 約{" "}
        {Math.round(trials * level)} 本)
      </p>
    </InteractiveCard>
  );
}
