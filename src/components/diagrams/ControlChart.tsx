import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** Shewhart の X̄ 管理図 */
export function ControlChart() {
  // 30 日分の標本平均(管理状態 → 後半に異常)
  const data = [
    50.2, 49.8, 50.5, 50.1, 49.9, 50.3, 49.7, 50.6, 50.0, 49.5,
    50.4, 50.2, 49.8, 50.1, 50.3, 49.6, 50.5, 50.2, 49.9, 50.4,
    51.5, 51.2, 51.8, 52.1, 51.6, 52.4, 52.8, 53.0, 52.7, 53.2,
  ];
  const n = data.length;
  const cl = 50; // 中心線
  const ucl = 52.5;
  const lcl = 47.5;

  const xToPx = (i: number) => PAD.l + (i / (n - 1)) * PLOT_W;
  const yMin = 47,
    yMax = 53.5;
  const yToPx = (y: number) => PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  const linePath = data
    .map((v, i) => `${i === 0 ? "M" : "L"} ${xToPx(i)} ${yToPx(v)}`)
    .join(" ");

  return (
    <SvgFrame>
      <Axes
        xLabel="サンプル番号(日)"
        yLabel="X̄"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 10, label: "10" },
          { value: 20, label: "20" },
          { value: n - 1, label: "30" },
        ]}
        yTicks={[
          { value: 48, label: "48" },
          { value: 50, label: "50" },
          { value: 52, label: "52" },
        ]}
      />
      {/* UCL / LCL */}
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(ucl)}
        y2={yToPx(ucl)}
        stroke="#dc2626"
        strokeWidth={1.2}
        strokeDasharray="3 2"
      />
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(lcl)}
        y2={yToPx(lcl)}
        stroke="#dc2626"
        strokeWidth={1.2}
        strokeDasharray="3 2"
      />
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(cl)}
        y2={yToPx(cl)}
        stroke="var(--accent-strong)"
        strokeWidth={1}
      />
      {/* データ */}
      <path d={linePath} stroke="var(--link)" strokeWidth={1.2} fill="none" />
      {data.map((v, i) => {
        const out = v > ucl || v < lcl;
        return (
          <circle
            key={i}
            cx={xToPx(i)}
            cy={yToPx(v)}
            r={out ? 3 : 1.8}
            fill={out ? "#dc2626" : "var(--link)"}
            stroke={out ? "var(--foreground)" : "none"}
            strokeWidth={0.8}
          />
        );
      })}

      <text x={PAD.l + PLOT_W - 4} y={yToPx(ucl) - 3} fontSize="9" textAnchor="end" fill="#dc2626" fontFamily="var(--font-noto-sans-jp)">UCL = 52.5</text>
      <text x={PAD.l + PLOT_W - 4} y={yToPx(cl) - 3} fontSize="9" textAnchor="end" fill="var(--accent-strong)" fontFamily="var(--font-noto-sans-jp)">CL = 50</text>
      <text x={PAD.l + PLOT_W - 4} y={yToPx(lcl) - 3} fontSize="9" textAnchor="end" fill="#dc2626" fontFamily="var(--font-noto-sans-jp)">LCL = 47.5</text>
    </SvgFrame>
  );
}
