"use client";

import { useMemo, useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";

const W = 360;
const H = 360;
const PAD = 36;
const PLOT_W = W - PAD * 2;
const PLOT_H = H - PAD * 2;

/** Build SVG path for an ellipse defined by sigma_x, sigma_y, rho at level k σ. */
function ellipsePath(
  cx: number,
  cy: number,
  sx: number,
  sy: number,
  rho: number,
  k: number,
  toX: (v: number) => number,
  toY: (v: number) => number,
): string {
  const N = 80;
  // (X, Y) ∼ N₂ contour at squared Mahalanobis distance k²:
  // (x/σx)² - 2ρ(x/σx)(y/σy) + (y/σy)² = (1 - ρ²) k²
  // Parametrise with t ∈ [0, 2π].
  const a = k * Math.sqrt(1 - rho * rho);
  const pts: string[] = [];
  for (let i = 0; i <= N; i++) {
    const t = (2 * Math.PI * i) / N;
    const u = a * Math.cos(t);
    const v = a * Math.sin(t);
    const x = sx * (u + rho * v / Math.sqrt(1 - rho * rho));
    const y = sy * v / Math.sqrt(1 - rho * rho);
    pts.push(`${i === 0 ? "M" : "L"} ${toX(cx + x).toFixed(2)} ${toY(cy + y).toFixed(2)}`);
  }
  return pts.join(" ");
}

export function InteractiveBivariateNormal() {
  const [rho, setRho] = useState(0.6);
  const [sigmaX, setSigmaX] = useState(1.0);
  const [sigmaY, setSigmaY] = useState(1.0);

  // Plot range: ±3.5 × max σ
  const range = 3.5 * Math.max(sigmaX, sigmaY);
  const toX = (v: number) => PAD + ((v + range) / (2 * range)) * PLOT_W;
  const toY = (v: number) => H - PAD - ((v + range) / (2 * range)) * PLOT_H;

  const conditionalSlope = useMemo(
    () => rho * (sigmaY / sigmaX),
    [rho, sigmaX, sigmaY],
  );

  return (
    <InteractiveCard
      title="2 変量正規分布の等高線"
      description="平均 0 を共有する 2 変量正規分布の確率密度を等高線で表示。相関係数 ρ で楕円の傾きと細さが変わります。条件付き分布(回帰直線)の傾きも視覚的に体感できます。"
    >
      <div className="flex justify-center mb-3">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 360 }}>
          {/* Axes */}
          <line
            x1={toX(0)}
            x2={toX(0)}
            y1={PAD}
            y2={H - PAD}
            stroke="var(--page-border)"
          />
          <line
            x1={PAD}
            x2={W - PAD}
            y1={toY(0)}
            y2={toY(0)}
            stroke="var(--page-border)"
          />
          <rect
            x={PAD}
            y={PAD}
            width={PLOT_W}
            height={PLOT_H}
            fill="none"
            stroke="var(--page-border-strong)"
          />
          {/* Equal-density contour ellipses at k = 1, 2, 3 σ */}
          {[3, 2, 1].map((k) => (
            <path
              key={k}
              d={ellipsePath(0, 0, sigmaX, sigmaY, rho, k, toX, toY)}
              fill="var(--accent)"
              fillOpacity={0.15}
              stroke="var(--accent)"
              strokeOpacity={0.7}
              strokeWidth={1}
            />
          ))}
          {/* E[Y | X = x] = ρ * σy/σx * x */}
          {(() => {
            const x1 = -range;
            const y1 = conditionalSlope * x1;
            const x2 = range;
            const y2 = conditionalSlope * x2;
            return (
              <line
                x1={toX(x1)}
                y1={toY(y1)}
                x2={toX(x2)}
                y2={toY(y2)}
                stroke="var(--link)"
                strokeWidth={1.5}
                strokeDasharray="3 3"
              />
            );
          })()}
          <text
            x={W - PAD - 4}
            y={toY(conditionalSlope * range) - 4}
            fontSize="9"
            fill="var(--link)"
            textAnchor="end"
            fontFamily="var(--font-noto-sans-jp)"
          >
            E[Y | X = x] = {conditionalSlope.toFixed(2)} x
          </text>
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Slider
          label="相関 ρ"
          value={rho}
          min={-0.95}
          max={0.95}
          step={0.05}
          onChange={setRho}
          format={(v) => v.toFixed(2)}
        />
        <Slider
          label="σ_x"
          value={sigmaX}
          min={0.4}
          max={2.5}
          step={0.05}
          onChange={setSigmaX}
          format={(v) => v.toFixed(2)}
        />
        <Slider
          label="σ_y"
          value={sigmaY}
          min={0.4}
          max={2.5}
          step={0.05}
          onChange={setSigmaY}
          format={(v) => v.toFixed(2)}
        />
      </div>
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans leading-relaxed">
        条件付き期待値 E[Y | X = x] = ρ · (σ_y / σ_x) · x = {conditionalSlope.toFixed(3)} · x。
        ρ → ±1 で楕円が直線に潰れ、ρ = 0 で軸並行の円(σ_x = σ_y のとき)。
      </p>
    </InteractiveCard>
  );
}
