import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

export function ScatterRegression() {
  // 簡易な合成データ(再現性のため固定値)
  const points: { x: number; y: number }[] = [
    { x: 1, y: 2.3 }, { x: 1.4, y: 3.0 }, { x: 1.9, y: 3.5 },
    { x: 2.3, y: 4.4 }, { x: 2.7, y: 4.9 }, { x: 3.2, y: 5.0 },
    { x: 3.5, y: 5.6 }, { x: 4.0, y: 6.4 }, { x: 4.4, y: 7.1 },
    { x: 4.9, y: 7.4 }, { x: 5.3, y: 8.2 }, { x: 5.8, y: 8.5 },
    { x: 6.2, y: 9.1 }, { x: 6.6, y: 9.6 }, { x: 7.0, y: 10.1 },
  ];

  // OLS で直線を計算
  const n = points.length;
  const meanX = points.reduce((s, p) => s + p.x, 0) / n;
  const meanY = points.reduce((s, p) => s + p.y, 0) / n;
  const sxx = points.reduce((s, p) => s + (p.x - meanX) ** 2, 0);
  const sxy = points.reduce((s, p) => s + (p.x - meanX) * (p.y - meanY), 0);
  const slope = sxy / sxx;
  const intercept = meanY - slope * meanX;
  const yhat = (x: number) => intercept + slope * x;

  const xMin = 0,
    xMax = 8,
    yMin = 0,
    yMax = 12;
  const xToPx = (x: number) => PAD.l + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  return (
    <SvgFrame>
      <Axes
        xLabel="x"
        yLabel="y"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 2, label: "2" },
          { value: 4, label: "4" },
          { value: 6, label: "6" },
        ]}
        yTicks={[
          { value: 4, label: "4" },
          { value: 8, label: "8" },
          { value: 12, label: "12" },
        ]}
      />
      {/* 残差線 */}
      {points.map((p, i) => (
        <line
          key={`r-${i}`}
          x1={xToPx(p.x)}
          x2={xToPx(p.x)}
          y1={yToPx(p.y)}
          y2={yToPx(yhat(p.x))}
          stroke="#dc2626"
          strokeWidth={0.7}
          opacity={0.6}
          strokeDasharray="2 1.5"
        />
      ))}
      {/* 回帰直線 */}
      <line
        x1={xToPx(xMin)}
        x2={xToPx(xMax)}
        y1={yToPx(yhat(xMin))}
        y2={yToPx(yhat(xMax))}
        stroke="var(--link)"
        strokeWidth={1.6}
      />
      {/* 散布点 */}
      {points.map((p, i) => (
        <circle
          key={`p-${i}`}
          cx={xToPx(p.x)}
          cy={yToPx(p.y)}
          r={2.6}
          fill="var(--foreground)"
        />
      ))}
      <text
        x={xToPx(7)}
        y={yToPx(yhat(7)) - 6}
        fontSize="9"
        fill="var(--link)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ŷ = {intercept.toFixed(2)} + {slope.toFixed(2)}x
      </text>
      <text
        x={xToPx(2)}
        y={yToPx(2) + 14}
        fontSize="9"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        赤線 = 残差
      </text>
    </SvgFrame>
  );
}
