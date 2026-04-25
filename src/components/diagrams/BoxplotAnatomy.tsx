import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

export function BoxplotAnatomy() {
  // データ: 0..100 にマッピングされた架空テスト点
  const min = 22,
    q1 = 48,
    med = 60,
    q3 = 72,
    max = 88,
    outlier = 12;

  const xToPx = (v: number) => PAD.l + (v / 100) * PLOT_W;
  const cy = PAD.t + PLOT_H / 2 - 10;
  const boxH = 36;

  return (
    <SvgFrame>
      <Axes
        xLabel="点数"
        xToPx={xToPx}
        yToPx={() => 0}
        xTicks={[
          { value: 0, label: "0" },
          { value: 25, label: "25" },
          { value: 50, label: "50" },
          { value: 75, label: "75" },
          { value: 100, label: "100" },
        ]}
      />
      {/* whiskers */}
      <line
        x1={xToPx(min)}
        x2={xToPx(q1)}
        y1={cy}
        y2={cy}
        stroke="var(--foreground)"
      />
      <line
        x1={xToPx(q3)}
        x2={xToPx(max)}
        y1={cy}
        y2={cy}
        stroke="var(--foreground)"
      />
      <line
        x1={xToPx(min)}
        x2={xToPx(min)}
        y1={cy - 7}
        y2={cy + 7}
        stroke="var(--foreground)"
      />
      <line
        x1={xToPx(max)}
        x2={xToPx(max)}
        y1={cy - 7}
        y2={cy + 7}
        stroke="var(--foreground)"
      />
      {/* box */}
      <rect
        x={xToPx(q1)}
        y={cy - boxH / 2}
        width={xToPx(q3) - xToPx(q1)}
        height={boxH}
        fill="var(--accent)"
        opacity={0.7}
        stroke="var(--foreground)"
      />
      {/* median */}
      <line
        x1={xToPx(med)}
        x2={xToPx(med)}
        y1={cy - boxH / 2}
        y2={cy + boxH / 2}
        stroke="var(--link)"
        strokeWidth={2}
      />
      {/* outlier */}
      <circle cx={xToPx(outlier)} cy={cy} r={3} fill="#dc2626" />

      {/* labels */}
      {[
        { v: outlier, t: "外れ値", color: "#dc2626", dy: -16 },
        { v: min, t: "最小", color: "var(--muted)", dy: -16 },
        { v: q1, t: "Q1", color: "var(--foreground)", dy: -28 },
        { v: med, t: "中央値", color: "var(--link)", dy: -28 },
        { v: q3, t: "Q3", color: "var(--foreground)", dy: -28 },
        { v: max, t: "最大", color: "var(--muted)", dy: -16 },
      ].map((label, i) => (
        <text
          key={i}
          x={xToPx(label.v)}
          y={cy + label.dy}
          fontSize="9"
          textAnchor="middle"
          fill={label.color}
          fontFamily="var(--font-noto-sans-jp)"
        >
          {label.t}
        </text>
      ))}
    </SvgFrame>
  );
}
