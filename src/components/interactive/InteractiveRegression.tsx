"use client";

import { useState } from "react";
import { InteractiveCard } from "./InteractiveCard";

const W = 460,
  H = 280,
  PAD_L = 40,
  PAD_R = 14,
  PAD_T = 20,
  PAD_B = 32;
const PLOT_W = W - PAD_L - PAD_R;
const PLOT_H = H - PAD_T - PAD_B;

type Pt = { x: number; y: number };

const INITIAL: Pt[] = [
  { x: 1, y: 2 },
  { x: 2, y: 3.5 },
  { x: 3, y: 4 },
  { x: 4, y: 5.5 },
  { x: 5, y: 6 },
  { x: 6, y: 7 },
  { x: 7, y: 8.5 },
  { x: 8, y: 9 },
];

function fit(pts: Pt[]) {
  const n = pts.length;
  const mx = pts.reduce((s, p) => s + p.x, 0) / n;
  const my = pts.reduce((s, p) => s + p.y, 0) / n;
  let sxy = 0,
    sxx = 0,
    syy = 0;
  for (const p of pts) {
    sxy += (p.x - mx) * (p.y - my);
    sxx += (p.x - mx) ** 2;
    syy += (p.y - my) ** 2;
  }
  const slope = sxy / sxx;
  const intercept = my - slope * mx;
  const r = sxy / Math.sqrt(sxx * syy);
  const sse = pts.reduce((s, p) => {
    const yhat = slope * p.x + intercept;
    return s + (p.y - yhat) ** 2;
  }, 0);
  return { slope, intercept, r, sse };
}

const X_MIN = 0,
  X_MAX = 10,
  Y_MIN = 0,
  Y_MAX = 12;

const xToPx = (x: number) => PAD_L + ((x - X_MIN) / (X_MAX - X_MIN)) * PLOT_W;
const yToPx = (y: number) => PAD_T + (1 - (y - Y_MIN) / (Y_MAX - Y_MIN)) * PLOT_H;
const pxToX = (px: number) => X_MIN + ((px - PAD_L) / PLOT_W) * (X_MAX - X_MIN);
const pxToY = (py: number) => Y_MIN + (1 - (py - PAD_T) / PLOT_H) * (Y_MAX - Y_MIN);

export function InteractiveRegression() {
  const [pts, setPts] = useState<Pt[]>(INITIAL);
  const [drag, setDrag] = useState<number | null>(null);

  const { slope, intercept, r, sse } = fit(pts);

  const onMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (drag === null) return;
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const sx = ((e.clientX - rect.left) / rect.width) * W;
    const sy = ((e.clientY - rect.top) / rect.height) * H;
    const nx = Math.max(X_MIN, Math.min(X_MAX, pxToX(sx)));
    const ny = Math.max(Y_MIN, Math.min(Y_MAX, pxToY(sy)));
    setPts((prev) => prev.map((p, i) => (i === drag ? { x: nx, y: ny } : p)));
  };

  const reset = () => setPts(INITIAL);

  return (
    <InteractiveCard
      title="散布図と回帰直線 ─ 点をドラッグして動かす"
      description="点をドラッグすると、最小二乗法で回帰直線が即座に再計算される。外れ値が傾きと相関係数にどう効くか体感。"
    >
      <div className="flex justify-center mb-4">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ maxWidth: 480, touchAction: "none", cursor: drag !== null ? "grabbing" : "default" }}
          onPointerMove={onMove}
          onPointerUp={() => setDrag(null)}
          onPointerLeave={() => setDrag(null)}
        >
          <line
            x1={PAD_L}
            x2={PAD_L + PLOT_W}
            y1={PAD_T + PLOT_H}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          <line
            x1={PAD_L}
            x2={PAD_L}
            y1={PAD_T}
            y2={PAD_T + PLOT_H}
            stroke="var(--page-border-strong)"
          />
          {[0, 2, 4, 6, 8, 10].map((t) => (
            <text
              key={`xt${t}`}
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
          {[0, 4, 8, 12].map((t) => (
            <text
              key={`yt${t}`}
              x={PAD_L - 6}
              y={yToPx(t) + 3}
              fontSize="9"
              textAnchor="end"
              fill="var(--muted)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {t}
            </text>
          ))}
          <line
            x1={xToPx(X_MIN)}
            y1={yToPx(slope * X_MIN + intercept)}
            x2={xToPx(X_MAX)}
            y2={yToPx(slope * X_MAX + intercept)}
            stroke="var(--accent)"
            strokeWidth={2}
          />
          {pts.map((p, i) => {
            const yhat = slope * p.x + intercept;
            return (
              <line
                key={`r${i}`}
                x1={xToPx(p.x)}
                x2={xToPx(p.x)}
                y1={yToPx(p.y)}
                y2={yToPx(yhat)}
                stroke="var(--link)"
                strokeWidth={1}
                opacity={0.5}
              />
            );
          })}
          {pts.map((p, i) => (
            <circle
              key={i}
              cx={xToPx(p.x)}
              cy={yToPx(p.y)}
              r={7}
              fill="var(--accent)"
              stroke="var(--page)"
              strokeWidth={2}
              style={{ cursor: "grab" }}
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                setDrag(i);
              }}
            />
          ))}
        </svg>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs ui-sans">
        <div className="paper rounded p-2">
          <div className="text-[var(--muted)] mb-1">傾き β₁</div>
          <div className="font-bold tabular-nums">{slope.toFixed(3)}</div>
        </div>
        <div className="paper rounded p-2">
          <div className="text-[var(--muted)] mb-1">切片 β₀</div>
          <div className="font-bold tabular-nums">{intercept.toFixed(3)}</div>
        </div>
        <div className="paper rounded p-2">
          <div className="text-[var(--muted)] mb-1">相関係数 r</div>
          <div className="font-bold tabular-nums">{r.toFixed(3)}</div>
        </div>
        <div className="paper rounded p-2">
          <div className="text-[var(--muted)] mb-1">残差平方和</div>
          <div className="font-bold tabular-nums">{sse.toFixed(2)}</div>
        </div>
      </div>
      <button
        type="button"
        onClick={reset}
        className="mt-3 text-xs ui-sans px-3 py-1 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
      >
        点をリセット
      </button>
      <p className="mt-3 text-xs text-[var(--muted)] ui-sans">
        ヒント: 1 つの点を大きく外すと r が劇的に下がる。これが「外れ値の影響」。
      </p>
    </InteractiveCard>
  );
}
