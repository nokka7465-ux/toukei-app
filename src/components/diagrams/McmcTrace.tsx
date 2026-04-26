import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** MCMC のトレースプロット(2 つの異なる初期値からの収束) */
export function McmcTrace() {
  const n = 200;
  // 擬似ランダム生成(再現性のためのシード)
  const seedRand = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  };
  // ガウス用ボックス・ミュラー
  const gauss = (rand: () => number) => {
    const u = Math.max(rand(), 1e-9);
    const v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  // ターゲット: 平均 1 のガウス的事後分布
  const buildChain = (start: number, seed: number) => {
    const rand = seedRand(seed);
    const xs: number[] = [start];
    let cur = start;
    for (let i = 1; i < n; i++) {
      const proposal = cur + gauss(rand) * 0.5;
      // 採択確率(ガウス事後 N(1, 0.5²) を仮定)
      const targetCur = Math.exp(-((cur - 1) ** 2) / (2 * 0.25));
      const targetProp = Math.exp(-((proposal - 1) ** 2) / (2 * 0.25));
      const r = Math.min(1, targetProp / targetCur);
      if (rand() < r) cur = proposal;
      xs.push(cur);
    }
    return xs;
  };

  const chainA = buildChain(-2, 17);
  const chainB = buildChain(4, 31);

  const xToPx = (i: number) => PAD.l + (i / (n - 1)) * PLOT_W;
  const yToPx = (v: number) => PAD.t + (1 - (v + 3) / 8) * PLOT_H;

  const path = (xs: number[]) =>
    xs
      .map((v, i) => `${i === 0 ? "M" : "L"} ${xToPx(i)} ${yToPx(v)}`)
      .join(" ");

  return (
    <SvgFrame>
      <Axes
        xLabel="反復"
        yLabel="θ"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 100, label: "100" },
          { value: 200, label: "200" },
        ]}
        yTicks={[
          { value: -2, label: "-2" },
          { value: 1, label: "真の平均" },
          { value: 4, label: "4" },
        ]}
      />
      {/* 真値ライン */}
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(1)}
        y2={yToPx(1)}
        stroke="var(--page-border-strong)"
        strokeDasharray="3 2"
      />
      {/* バーンイン領域 */}
      <rect
        x={PAD.l}
        y={PAD.t}
        width={xToPx(40) - PAD.l}
        height={PLOT_H}
        fill="var(--muted)"
        opacity={0.08}
      />
      <text
        x={PAD.l + 8}
        y={PAD.t + 12}
        fontSize="9"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        burn-in
      </text>
      <path d={path(chainA)} stroke="var(--link)" strokeWidth={1} fill="none" />
      <path d={path(chainB)} stroke="#dc2626" strokeWidth={1} fill="none" />
      <text
        x={PAD.l + PLOT_W - 6}
        y={PAD.t + 12}
        fontSize="9"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        2 本の連鎖が同じ分布に収束
      </text>
    </SvgFrame>
  );
}
