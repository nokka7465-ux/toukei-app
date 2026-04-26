import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** ブラウン運動の入り口: ランダムウォーク 3 本のサンプルパス */
export function RandomWalk() {
  const n = 200;
  const seedRand = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  };
  const gauss = (rand: () => number) => {
    const u = Math.max(rand(), 1e-9);
    const v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  const buildPath = (seed: number): number[] => {
    const rand = seedRand(seed);
    const xs = [0];
    let cur = 0;
    for (let i = 1; i < n; i++) {
      cur += gauss(rand) * 0.5;
      xs.push(cur);
    }
    return xs;
  };

  const paths = [buildPath(11), buildPath(29), buildPath(53)];
  const colors = ["var(--link)", "#dc2626", "#f59e0b"];

  const xToPx = (i: number) => PAD.l + (i / (n - 1)) * PLOT_W;

  // 縦軸範囲
  const allY = paths.flat();
  const yMin = Math.min(...allY) - 1;
  const yMax = Math.max(...allY) + 1;
  const yToPx = (y: number) =>
    PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  return (
    <SvgFrame>
      <Axes
        xLabel="t"
        yLabel="W(t)"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 100, label: "100" },
          { value: 200, label: "200" },
        ]}
      />
      {/* y=0 線 */}
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(0)}
        y2={yToPx(0)}
        stroke="var(--page-border-strong)"
        strokeDasharray="2 2"
      />
      {paths.map((path, idx) => {
        const d = path
          .map((y, i) => `${i === 0 ? "M" : "L"} ${xToPx(i)} ${yToPx(y)}`)
          .join(" ");
        return (
          <path key={idx} d={d} stroke={colors[idx]} strokeWidth={1} fill="none" />
        );
      })}
      <text
        x={PAD.l + PLOT_W - 6}
        y={PAD.t + 12}
        fontSize="9"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ランダムウォーク 3 サンプルパス
      </text>
    </SvgFrame>
  );
}
