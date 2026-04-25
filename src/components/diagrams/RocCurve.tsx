import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

export function RocCurve() {
  // 3 つの分類器: ランダム / 普通 / 強い分類器
  const xToPx = (x: number) => PAD.l + x * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y) * PLOT_H;

  // 強分類器: 上に凸の曲線(AUC ≒ 0.92)
  const strongCurve: { x: number; y: number }[] = [];
  for (let i = 0; i <= 50; i++) {
    const x = i / 50;
    const y = 1 - Math.pow(1 - x, 4);
    strongCurve.push({ x, y });
  }
  const strongPath = strongCurve
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xToPx(p.x)} ${yToPx(p.y)}`)
    .join(" ");

  // 普通の分類器(AUC ≒ 0.75)
  const okCurve: { x: number; y: number }[] = [];
  for (let i = 0; i <= 50; i++) {
    const x = i / 50;
    const y = Math.pow(x, 0.45);
    okCurve.push({ x, y });
  }
  const okPath = okCurve
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xToPx(p.x)} ${yToPx(p.y)}`)
    .join(" ");

  return (
    <SvgFrame>
      <Axes
        xLabel="偽陽性率 FPR"
        yLabel="真陽性率 TPR"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 0.5, label: "0.5" },
          { value: 1, label: "1" },
        ]}
        yTicks={[
          { value: 0.5, label: "0.5" },
          { value: 1, label: "1" },
        ]}
      />
      {/* ランダム分類器 = 対角線 */}
      <line
        x1={xToPx(0)}
        x2={xToPx(1)}
        y1={yToPx(0)}
        y2={yToPx(1)}
        stroke="var(--muted)"
        strokeDasharray="3 3"
        strokeWidth={1}
      />
      <path d={okPath} stroke="#f59e0b" strokeWidth={1.6} fill="none" />
      <path d={strongPath} stroke="var(--link)" strokeWidth={1.8} fill="none" />

      {/* 凡例 */}
      <g transform={`translate(${PAD.l + 8}, ${PAD.t + 110})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text
          x={18}
          y={3}
          fontSize="9"
          fill="var(--foreground)"
          fontFamily="var(--font-noto-sans-jp)"
        >
          強い分類器(AUC≈0.92)
        </text>
        <line x1={0} x2={14} y1={14} y2={14} stroke="#f59e0b" strokeWidth={2} />
        <text
          x={18}
          y={17}
          fontSize="9"
          fill="var(--foreground)"
          fontFamily="var(--font-noto-sans-jp)"
        >
          普通(AUC≈0.75)
        </text>
        <line
          x1={0}
          x2={14}
          y1={28}
          y2={28}
          stroke="var(--muted)"
          strokeDasharray="3 3"
          strokeWidth={1}
        />
        <text
          x={18}
          y={31}
          fontSize="9"
          fill="var(--muted)"
          fontFamily="var(--font-noto-sans-jp)"
        >
          ランダム(AUC=0.5)
        </text>
      </g>
    </SvgFrame>
  );
}
