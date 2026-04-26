import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** AR(1) (φ=0.7) の自己相関(ACF)。ラグごとに φ^k で減衰 */
export function AcfPlot() {
  const phi = 0.7;
  const lags = Array.from({ length: 16 }, (_, k) => k);
  const xToPx = (k: number) => PAD.l + (k / 16) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - (y + 0.2) / 1.4) * PLOT_H;

  // 95% 信頼区間 ±2/√n (n=100)
  const ci = 2 / Math.sqrt(100);

  return (
    <SvgFrame>
      <Axes
        xLabel="ラグ k"
        yLabel="ACF"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 5, label: "5" },
          { value: 10, label: "10" },
          { value: 15, label: "15" },
        ]}
        yTicks={[
          { value: -0.2, label: "-0.2" },
          { value: 0, label: "0" },
          { value: 0.5, label: "0.5" },
          { value: 1.0, label: "1.0" },
        ]}
      />
      {/* 95% CI */}
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(ci)}
        y2={yToPx(ci)}
        stroke="var(--muted)"
        strokeDasharray="3 2"
      />
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(-ci)}
        y2={yToPx(-ci)}
        stroke="var(--muted)"
        strokeDasharray="3 2"
      />
      {/* y=0 線 */}
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(0)}
        y2={yToPx(0)}
        stroke="var(--page-border-strong)"
      />

      {lags.map((k) => {
        const v = Math.pow(phi, k);
        const significant = Math.abs(v) > ci;
        return (
          <g key={k}>
            <line
              x1={xToPx(k)}
              x2={xToPx(k)}
              y1={yToPx(0)}
              y2={yToPx(v)}
              stroke={significant ? "var(--link)" : "var(--muted)"}
              strokeWidth={2}
            />
            <circle
              cx={xToPx(k)}
              cy={yToPx(v)}
              r={2.5}
              fill={significant ? "var(--link)" : "var(--muted)"}
            />
          </g>
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
        AR(1), φ=0.7
      </text>
      <text
        x={PAD.l + PLOT_W - 6}
        y={yToPx(ci) - 3}
        fontSize="8"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ±2/√n(95% CI)
      </text>
    </SvgFrame>
  );
}
