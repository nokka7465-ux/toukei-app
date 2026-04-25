import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** 訓練誤差(下がり続ける)と検証誤差(U 字)の典型形 */
export function LearningCurve() {
  // x = 学習エポック相当(モデル複雑度でも可)
  const xToPx = (x: number) => PAD.l + (x / 10) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / 1.0) * PLOT_H;

  // 訓練誤差: 単調減少
  const trainErr = (x: number) => 0.55 * Math.exp(-0.3 * x) + 0.05;
  // 検証誤差: U 字
  const valErr = (x: number) => 0.6 * Math.exp(-0.5 * x) + 0.04 * x ** 1.4 + 0.1;

  const xs = Array.from({ length: 41 }, (_, i) => (i * 10) / 40);
  const path = (fn: (x: number) => number) =>
    xs
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fn(x))}`)
      .join(" ");

  // 過学習の境界点(検証誤差の最小)
  let bestX = 0,
    bestY = Infinity;
  for (const x of xs) {
    const v = valErr(x);
    if (v < bestY) {
      bestY = v;
      bestX = x;
    }
  }

  return (
    <SvgFrame>
      <Axes
        xLabel="学習量(エポック / 複雑度)"
        yLabel="誤差"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 5, label: "中" },
          { value: 10, label: "多" },
        ]}
      />
      <path d={path(trainErr)} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      <path d={path(valErr)} stroke="#dc2626" strokeWidth={1.6} fill="none" />

      {/* 過学習領域 */}
      <line
        x1={xToPx(bestX)}
        x2={xToPx(bestX)}
        y1={PAD.t}
        y2={PAD.t + PLOT_H}
        stroke="var(--muted)"
        strokeDasharray="2 2"
      />
      <text
        x={xToPx(bestX)}
        y={PAD.t + 12}
        fontSize="9"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        早期終了の理想点
      </text>
      <text
        x={xToPx(bestX + 1.5)}
        y={PAD.t + PLOT_H - 14}
        fontSize="9"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        過学習の領域 →
      </text>

      <g transform={`translate(${PAD.l + 8}, ${PAD.t + 8})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">訓練誤差</text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#dc2626" strokeWidth={2} />
        <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">検証誤差</text>
      </g>
    </SvgFrame>
  );
}
