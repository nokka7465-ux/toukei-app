import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

export function BiasVariance() {
  // x = モデル複雑度
  const xToPx = (x: number) => PAD.l + (x / 10) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / 1.0) * PLOT_H;

  const bias = (x: number) => 0.85 / (x + 0.5);
  const variance = (x: number) => 0.06 + 0.025 * x ** 1.4;
  const total = (x: number) => bias(x) + variance(x);

  const xs = Array.from({ length: 41 }, (_, i) => (i * 10) / 40);
  const path = (fn: (x: number) => number) =>
    xs
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fn(x))}`)
      .join(" ");

  // 最適点
  let bestX = 0,
    bestY = Infinity;
  for (const x of xs) {
    const t = total(x);
    if (t < bestY) {
      bestY = t;
      bestX = x;
    }
  }

  return (
    <SvgFrame>
      <Axes
        xLabel="モデル複雑度"
        yLabel="誤差"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 1, label: "単純" },
          { value: 9, label: "複雑" },
        ]}
      />
      <path d={path(bias)} stroke="var(--link)" strokeWidth={1.5} fill="none" />
      <path d={path(variance)} stroke="#f59e0b" strokeWidth={1.5} fill="none" />
      <path
        d={path(total)}
        stroke="#dc2626"
        strokeWidth={1.8}
        fill="none"
      />
      <circle cx={xToPx(bestX)} cy={yToPx(bestY)} r={3} fill="#dc2626" />
      <text
        x={xToPx(bestX)}
        y={yToPx(bestY) - 6}
        fontSize="9"
        textAnchor="middle"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        最適点
      </text>

      {/* 凡例 */}
      <g transform={`translate(${PAD.l + PLOT_W - 110}, ${PAD.t + 4})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text
          x={18}
          y={3}
          fontSize="9"
          fill="var(--foreground)"
          fontFamily="var(--font-noto-sans-jp)"
        >
          バイアス²
        </text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#f59e0b" strokeWidth={2} />
        <text
          x={18}
          y={15}
          fontSize="9"
          fill="var(--foreground)"
          fontFamily="var(--font-noto-sans-jp)"
        >
          バリアンス
        </text>
        <line x1={0} x2={14} y1={24} y2={24} stroke="#dc2626" strokeWidth={2} />
        <text
          x={18}
          y={27}
          fontSize="9"
          fill="var(--foreground)"
          fontFamily="var(--font-noto-sans-jp)"
        >
          合計誤差
        </text>
      </g>
    </SvgFrame>
  );
}
