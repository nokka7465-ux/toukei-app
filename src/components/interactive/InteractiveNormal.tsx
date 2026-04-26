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

function normalPdf(x: number, mu: number, sigma: number): number {
  const z = (x - mu) / sigma;
  return Math.exp(-(z * z) / 2) / (sigma * Math.sqrt(2 * Math.PI));
}

export function InteractiveNormal() {
  const [mu, setMu] = useState(0);
  const [sigma, setSigma] = useState(1);

  const xMin = -8,
    xMax = 8;
  const xToPx = (x: number) => PAD_L + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  // y を 1.0 までスケール(σ=0.5 でピーク 0.8 程度)
  const yMax = 0.85;
  const yToPx = (y: number) => PAD_T + (1 - y / yMax) * PLOT_H;

  const xs: number[] = [];
  for (let x = xMin; x <= xMax; x += 0.1) xs.push(x);
  const linePath = xs
    .map(
      (x, i) =>
        `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(normalPdf(x, mu, sigma))}`,
    )
    .join(" ");

  const shade = (a: number, b: number, opacity: number) => {
    const inside = xs.filter((x) => x >= a && x <= b);
    if (inside.length === 0) return null;
    const top = inside
      .map(
        (x, i) =>
          `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(normalPdf(x, mu, sigma))}`,
      )
      .join(" ");
    const bottom = `L ${xToPx(b)} ${yToPx(0)} L ${xToPx(a)} ${yToPx(0)} Z`;
    return <path d={`${top} ${bottom}`} fill="var(--accent)" opacity={opacity} />;
  };

  return (
    <InteractiveCard
      title="正規分布 N(μ, σ²) を動かす"
      description="μ で中心が動き、σ で幅が変わる。±σ・±2σ の帯は常に 68% / 95% を占めるのを確認しよう。"
    >
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 480 }}>
          {shade(mu - 2 * sigma, mu - sigma, 0.3)}
          {shade(mu - sigma, mu + sigma, 0.55)}
          {shade(mu + sigma, mu + 2 * sigma, 0.3)}
          <path d={linePath} stroke="var(--link)" strokeWidth={1.6} fill="none" />
          {/* x axis */}
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {/* tick marks */}
          {[-6, -4, -2, 0, 2, 4, 6].map((t) => (
            <g key={t}>
              <line
                x1={xToPx(t)}
                x2={xToPx(t)}
                y1={PAD_T + PLOT_H}
                y2={PAD_T + PLOT_H + 4}
                stroke="var(--page-border-strong)"
              />
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
          {/* μ line */}
          <line
            x1={xToPx(mu)}
            x2={xToPx(mu)}
            y1={PAD_T}
            y2={yToPx(normalPdf(mu, mu, sigma))}
            stroke="var(--foreground)"
            strokeDasharray="2 2"
          />
          <text
            x={xToPx(mu)}
            y={yToPx(normalPdf(mu, mu, sigma)) - 4}
            fontSize="10"
            textAnchor="middle"
            fill="var(--foreground)"
            fontFamily="var(--font-noto-sans-jp)"
          >
            μ = {mu.toFixed(1)}
          </text>
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Slider
          label="μ(平均)"
          value={mu}
          min={-3}
          max={3}
          step={0.1}
          onChange={setMu}
          format={(v) => v.toFixed(1)}
        />
        <Slider
          label="σ(標準偏差)"
          value={sigma}
          min={0.5}
          max={3}
          step={0.1}
          onChange={setSigma}
          format={(v) => v.toFixed(1)}
        />
      </div>
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans leading-relaxed">
        確率密度関数:{" "}
        <code className="text-[11px]">
          {"f(x) = (1 / (σ√(2π))) · exp(−(x−μ)² / (2σ²))"}
        </code>
      </p>
    </InteractiveCard>
  );
}
