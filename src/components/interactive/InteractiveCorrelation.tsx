"use client";

import { useMemo, useState } from "react";
import { Slider } from "./Slider";
import { InteractiveCard } from "./InteractiveCard";

const W = 320,
  H = 320,
  PAD = 28;
const PLOT = W - PAD * 2;

/** Box-Muller standard normals from a deterministic seed. */
function* gaussians(seed: number): Generator<number> {
  let s = seed | 0;
  function rand(): number {
    // mulberry32
    s = (s + 0x6d2b79f5) | 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  }
  while (true) {
    let u = rand();
    let v = rand();
    if (u < 1e-7) u = 1e-7;
    const r = Math.sqrt(-2 * Math.log(u));
    yield r * Math.cos(2 * Math.PI * v);
    yield r * Math.sin(2 * Math.PI * v);
  }
}

export function InteractiveCorrelation() {
  const [r, setR] = useState(0.7);
  const [n, setN] = useState(60);
  const [seed, setSeed] = useState(42);

  const points = useMemo(() => {
    const gen = gaussians(seed);
    const pts: { x: number; y: number }[] = [];
    const a = r;
    const b = Math.sqrt(Math.max(0, 1 - r * r));
    for (let i = 0; i < n; i++) {
      const z1 = gen.next().value as number;
      const z2 = gen.next().value as number;
      pts.push({ x: z1, y: a * z1 + b * z2 });
    }
    return pts;
  }, [r, n, seed]);

  // Map standardised coordinates ([-3, 3]) into the plot area.
  const toPx = (v: number) => PAD + ((v + 3) / 6) * PLOT;

  // Compute observed sample correlation as a sanity check.
  const sampleR = useMemo(() => {
    if (points.length < 2) return 0;
    const mx = points.reduce((a, p) => a + p.x, 0) / points.length;
    const my = points.reduce((a, p) => a + p.y, 0) / points.length;
    let sxx = 0,
      syy = 0,
      sxy = 0;
    for (const p of points) {
      sxx += (p.x - mx) * (p.x - mx);
      syy += (p.y - my) * (p.y - my);
      sxy += (p.x - mx) * (p.y - my);
    }
    return sxx > 0 && syy > 0 ? sxy / Math.sqrt(sxx * syy) : 0;
  }, [points]);

  // Best-fit line endpoints (in standardised space, slope ≈ r).
  const x1 = -3,
    y1 = sampleR * x1;
  const x2 = 3,
    y2 = sampleR * x2;

  return (
    <InteractiveCard
      title="相関係数 r を動かす"
      description="2 変数の散布図を相関係数 r でコントロールします。r = 0 に近いほど雲状に、|r| → 1 で直線に集まります。サンプルサイズを変えると、同じ r でも見え方がどう変わるか体感できます。"
    >
      <div className="flex justify-center mb-4">
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ maxWidth: 360 }}>
          {/* axes */}
          <line
            x1={PAD}
            x2={W - PAD}
            y1={H / 2}
            y2={H / 2}
            stroke="var(--page-border)"
          />
          <line
            x1={W / 2}
            x2={W / 2}
            y1={PAD}
            y2={H - PAD}
            stroke="var(--page-border)"
          />
          <rect
            x={PAD}
            y={PAD}
            width={PLOT}
            height={PLOT}
            fill="none"
            stroke="var(--page-border-strong)"
          />
          {/* points */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={toPx(p.x)}
              cy={H - toPx(p.y)}
              r={2.4}
              fill="var(--accent)"
              opacity={0.7}
            />
          ))}
          {/* fit line */}
          <line
            x1={toPx(x1)}
            y1={H - toPx(y1)}
            x2={toPx(x2)}
            y2={H - toPx(y2)}
            stroke="var(--link)"
            strokeWidth={1.5}
            strokeDasharray="3 3"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Slider
          label="r(目標相関)"
          value={r}
          min={-1}
          max={1}
          step={0.05}
          onChange={setR}
          format={(v) => v.toFixed(2)}
        />
        <Slider
          label="n(サンプルサイズ)"
          value={n}
          min={10}
          max={300}
          step={5}
          onChange={(v) => setN(Math.round(v))}
          format={(v) => Math.round(v).toString()}
        />
      </div>
      <div className="mt-3 flex items-center justify-between gap-3 ui-sans text-xs flex-wrap">
        <p className="text-[var(--muted)]">
          目標 r = {r.toFixed(2)} / 標本 r ≈{" "}
          <span className="font-bold text-[var(--foreground)]">
            {sampleR.toFixed(3)}
          </span>{" "}
          / R² = {(sampleR * sampleR).toFixed(3)}
        </p>
        <button
          type="button"
          onClick={() => setSeed((s) => (s + 1) | 0)}
          className="px-2.5 py-1 rounded border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
        >
          別のサンプルを生成
        </button>
      </div>
    </InteractiveCard>
  );
}
