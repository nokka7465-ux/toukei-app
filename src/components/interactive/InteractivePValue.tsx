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

function phi(z: number): number {
  return Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
}

// 標準正規 CDF(Abramowitz & Stegun の近似)
function normCdf(z: number): number {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = phi(z);
  const p =
    d *
    (0.319381530 * t -
      0.356563782 * t * t +
      1.781477937 * t * t * t -
      1.821255978 * t * t * t * t +
      1.330274429 * t * t * t * t * t);
  return z >= 0 ? 1 - p : p;
}

type Side = "two" | "right" | "left";

export function InteractivePValue() {
  const [zObs, setZObs] = useState(1.7);
  const [side, setSide] = useState<Side>("two");

  const xMin = -4,
    xMax = 4;
  const xToPx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yMax = phi(0) * 1.05;
  const yToPx = (y: number) => PAD_T + (1 - y / yMax) * PLOT_H;

  const xs: number[] = [];
  for (let x = xMin; x <= xMax; x += 0.05) xs.push(x);
  const linePath = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(phi(x))}`)
    .join(" ");

  const shade = (a: number, b: number) => {
    const inside = xs.filter((x) => x >= a && x <= b);
    if (inside.length === 0) return null;
    const top = inside
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(phi(x))}`)
      .join(" ");
    const bottom = `L ${xToPx(b)} ${yToPx(0)} L ${xToPx(a)} ${yToPx(0)} Z`;
    return <path d={`${top} ${bottom}`} fill="#dc2626" opacity={0.55} />;
  };

  let pValue = 0;
  let regions: React.ReactNode[] = [];
  const absZ = Math.abs(zObs);
  if (side === "two") {
    pValue = 2 * (1 - normCdf(absZ));
    regions = [
      <g key="r">{shade(absZ, xMax)}</g>,
      <g key="l">{shade(xMin, -absZ)}</g>,
    ];
  } else if (side === "right") {
    pValue = 1 - normCdf(zObs);
    regions = [<g key="r">{shade(zObs, xMax)}</g>];
  } else {
    pValue = normCdf(zObs);
    regions = [<g key="l">{shade(xMin, zObs)}</g>];
  }

  const isSignif = pValue < 0.05;

  return (
    <InteractiveCard
      title="p 値の面積を動かす"
      description="z* を動かすと面積(p 値)が変わる。両側 / 片側を切り替えて違いを見よう。"
    >
      <div className="flex gap-2 ui-sans text-xs mb-3">
        {(["two", "right", "left"] as Side[]).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSide(s)}
            className={`px-3 py-1 rounded border transition ${
              side === s
                ? "bg-[var(--accent)] text-[var(--accent-fg)] border-[var(--accent)] font-bold"
                : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
            }`}
          >
            {s === "two" ? "両側" : s === "right" ? "右側" : "左側"}
          </button>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {regions}
          <path d={linePath} stroke="var(--link)" strokeWidth={1.6} fill="none" />
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {[-3, -2, -1, 0, 1, 2, 3].map((t) => (
            <g key={t}>
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
          ))}
          {/* 観測値 */}
          <line
            x1={xToPx(zObs)}
            x2={xToPx(zObs)}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--foreground)"
            strokeDasharray="2 2"
          />
          <text
            x={xToPx(zObs)}
            y={PAD_T + 12}
            fontSize="10"
            textAnchor="middle"
            fill="var(--foreground)"
            fontFamily="var(--font-noto-sans-jp)"
          >
            z* = {zObs.toFixed(2)}
          </text>
        </svg>
      </div>
      <Slider
        label="観測した z* の値"
        value={zObs}
        min={-3.5}
        max={3.5}
        step={0.05}
        onChange={setZObs}
        format={(v) => v.toFixed(2)}
      />
      <div className="mt-3 text-sm font-bold ui-sans">
        p 値 = <span className="tabular-nums">{pValue.toFixed(4)}</span>{" "}
        <span
          className={`text-xs px-2 py-0.5 rounded ${
            isSignif
              ? "bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200"
              : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
          }`}
        >
          {isSignif ? "α=0.05 で棄却" : "α=0.05 では棄却できず"}
        </span>
      </div>
    </InteractiveCard>
  );
}
