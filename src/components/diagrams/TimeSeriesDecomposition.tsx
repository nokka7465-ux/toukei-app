import { PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** 時系列分解: 原系列 = トレンド + 季節 + 残差 */
export function TimeSeriesDecomposition() {
  const n = 48; // 4 年 × 12 ヶ月
  const xs = Array.from({ length: n }, (_, i) => i);

  // 各成分
  const trend = (t: number) => 50 + t * 0.6;
  const seasonal = (t: number) => 8 * Math.sin((t / 12) * 2 * Math.PI);
  const noise = [
    1.2, -0.8, 0.5, -1.4, 0.3, 1.0, -0.6, 0.9, -0.3, 0.7, -1.1, 0.4,
    1.0, -0.5, 0.8, -1.0, 0.2, 0.9, -0.7, 1.1, -0.4, 0.6, -0.9, 0.3,
    0.7, -1.0, 0.4, -0.8, 0.5, 1.2, -0.5, 0.6, -0.6, 0.9, -1.0, 0.5,
    0.8, -0.6, 1.1, -1.3, 0.4, 0.7, -0.5, 1.0, -0.3, 0.5, -0.8, 0.6,
  ];
  const observed = (t: number) => trend(t) + seasonal(t) + noise[t] * 2;

  // 4 つの行で並べる
  const rowH = (PLOT_H - 8) / 4;
  const labels = ["原系列", "トレンド", "季節", "残差"];
  const lineFns = [
    observed,
    trend,
    seasonal,
    (t: number) => noise[t] * 2,
  ];
  const colors = [
    "var(--foreground)",
    "var(--link)",
    "#f59e0b",
    "var(--muted)",
  ];

  // y 範囲をそれぞれ計算
  const ranges: { min: number; max: number }[] = lineFns.map((fn) => {
    const ys = xs.map(fn);
    return { min: Math.min(...ys), max: Math.max(...ys) };
  });

  const xToPx = (t: number) => PAD.l + (t / (n - 1)) * PLOT_W;

  return (
    <SvgFrame>
      {labels.map((label, row) => {
        const rowTop = PAD.t + row * rowH;
        const { min, max } = ranges[row];
        const span = max - min || 1;
        const yToPx = (v: number) =>
          rowTop + (1 - (v - min) / span) * (rowH - 8) + 4;
        const path = xs
          .map(
            (t, i) =>
              `${i === 0 ? "M" : "L"} ${xToPx(t)} ${yToPx(lineFns[row](t))}`,
          )
          .join(" ");
        return (
          <g key={row}>
            {/* baseline 0 */}
            {row >= 2 && min < 0 && max > 0 && (
              <line
                x1={PAD.l}
                x2={PAD.l + PLOT_W}
                y1={yToPx(0)}
                y2={yToPx(0)}
                stroke="var(--page-border)"
                strokeDasharray="2 2"
              />
            )}
            <path d={path} stroke={colors[row]} strokeWidth={1.4} fill="none" />
            <text
              x={PAD.l + 4}
              y={rowTop + 10}
              fontSize="9"
              fill={colors[row]}
              fontFamily="var(--font-noto-sans-jp)"
            >
              {label}
            </text>
          </g>
        );
      })}
      <text
        x={PAD.l + PLOT_W / 2}
        y={PAD.t + PLOT_H + 16}
        fontSize="9"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        月(48 ヶ月)
      </text>
    </SvgFrame>
  );
}
