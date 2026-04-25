import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** 同じ母集団から 20 回標本を取り、そのうち 19 回(=95%)が母平均を含むイメージ */
export function ConfidenceInterval() {
  // 横軸 = 値、縦軸 = 試行番号(下から上)
  const xMin = -3,
    xMax = 3,
    nTrials = 18;
  const trueMean = 0;
  const xToPx = (v: number) =>
    PAD.l + ((v - xMin) / (xMax - xMin)) * PLOT_W;
  const yToPx = (i: number) =>
    PAD.t + (1 - i / nTrials) * PLOT_H;

  // 疑似乱数(再現性のため固定シード相当の固定パターン)
  const trials = [
    -0.4, 0.3, -0.7, 0.5, 0.1, -0.2, 0.8, -0.5, 0.2, 0.0,
    -0.3, 0.6, -0.1, 0.4, -0.6, 0.7, 1.6, -0.4,
  ].slice(0, nTrials);
  const ciHalfWidth = 1.2;

  return (
    <SvgFrame>
      <Axes
        xLabel="推定値"
        yLabel="試行 #"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -2, label: "-2" },
          { value: 0, label: "0(母平均)" },
          { value: 2, label: "2" },
        ]}
      />
      {/* true mean line */}
      <line
        x1={xToPx(trueMean)}
        x2={xToPx(trueMean)}
        y1={PAD.t}
        y2={PAD.t + PLOT_H}
        stroke="var(--link)"
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      {trials.map((center, i) => {
        const lo = center - ciHalfWidth;
        const hi = center + ciHalfWidth;
        const containsTruth = lo <= trueMean && trueMean <= hi;
        const color = containsTruth ? "var(--accent-strong)" : "#dc2626";
        const y = yToPx(i + 0.5);
        return (
          <g key={i}>
            <line
              x1={xToPx(lo)}
              x2={xToPx(hi)}
              y1={y}
              y2={y}
              stroke={color}
              strokeWidth={1.6}
            />
            <circle cx={xToPx(center)} cy={y} r={2} fill={color} />
            <line
              x1={xToPx(lo)}
              x2={xToPx(lo)}
              y1={y - 3}
              y2={y + 3}
              stroke={color}
            />
            <line
              x1={xToPx(hi)}
              x2={xToPx(hi)}
              y1={y - 3}
              y2={y + 3}
              stroke={color}
            />
          </g>
        );
      })}
      <text
        x={PAD.l + PLOT_W - 4}
        y={PAD.t + 12}
        fontSize="9"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        赤 = 母平均を含まない区間
      </text>
    </SvgFrame>
  );
}
