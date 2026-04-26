import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** カプラン・マイヤー法による生存曲線(2 群比較) */
export function SurvivalKm() {
  // 階段関数のステップ
  // グループ A(対照群)
  const stepsA: { t: number; s: number }[] = [
    { t: 0, s: 1.0 },
    { t: 2, s: 0.95 },
    { t: 4, s: 0.85 },
    { t: 6, s: 0.72 },
    { t: 8, s: 0.6 },
    { t: 10, s: 0.5 },
    { t: 12, s: 0.4 },
    { t: 14, s: 0.32 },
    { t: 16, s: 0.25 },
    { t: 18, s: 0.18 },
    { t: 20, s: 0.12 },
  ];
  // グループ B(治療群)— 同じ時刻でより高い生存率
  const stepsB: { t: number; s: number }[] = [
    { t: 0, s: 1.0 },
    { t: 3, s: 0.97 },
    { t: 5, s: 0.92 },
    { t: 8, s: 0.85 },
    { t: 10, s: 0.78 },
    { t: 13, s: 0.7 },
    { t: 15, s: 0.62 },
    { t: 17, s: 0.55 },
    { t: 20, s: 0.48 },
  ];

  const xMax = 20;
  const xToPx = (t: number) => PAD.l + (t / xMax) * PLOT_W;
  const yToPx = (s: number) => PAD.t + (1 - s) * PLOT_H;

  const stepPath = (steps: { t: number; s: number }[]) => {
    let d = `M ${xToPx(steps[0].t)} ${yToPx(steps[0].s)}`;
    for (let i = 1; i < steps.length; i++) {
      d += ` L ${xToPx(steps[i].t)} ${yToPx(steps[i - 1].s)}`;
      d += ` L ${xToPx(steps[i].t)} ${yToPx(steps[i].s)}`;
    }
    return d;
  };

  // 打ち切り(censoring)マーク
  const censoredA = [3, 7, 11];
  const censoredB = [4, 9, 14, 18];
  const interpolate = (
    steps: { t: number; s: number }[],
    t: number,
  ): number => {
    let s = 1;
    for (const step of steps) {
      if (step.t <= t) s = step.s;
      else break;
    }
    return s;
  };

  return (
    <SvgFrame>
      <Axes
        xLabel="時間(月)"
        yLabel="生存率"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 5, label: "5" },
          { value: 10, label: "10" },
          { value: 15, label: "15" },
          { value: 20, label: "20" },
        ]}
        yTicks={[
          { value: 0, label: "0" },
          { value: 0.5, label: "0.5" },
          { value: 1.0, label: "1.0" },
        ]}
      />
      <path d={stepPath(stepsA)} stroke="#dc2626" strokeWidth={1.6} fill="none" />
      <path d={stepPath(stepsB)} stroke="var(--link)" strokeWidth={1.6} fill="none" />

      {/* 打ち切りマーク */}
      {censoredA.map((t, i) => {
        const s = interpolate(stepsA, t);
        return (
          <line
            key={`cA-${i}`}
            x1={xToPx(t)}
            x2={xToPx(t)}
            y1={yToPx(s) - 4}
            y2={yToPx(s) + 4}
            stroke="#dc2626"
            strokeWidth={1}
          />
        );
      })}
      {censoredB.map((t, i) => {
        const s = interpolate(stepsB, t);
        return (
          <line
            key={`cB-${i}`}
            x1={xToPx(t)}
            x2={xToPx(t)}
            y1={yToPx(s) - 4}
            y2={yToPx(s) + 4}
            stroke="var(--link)"
            strokeWidth={1}
          />
        );
      })}

      <g transform={`translate(${PAD.l + 8}, ${PAD.t + 8})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">治療群</text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#dc2626" strokeWidth={2} />
        <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">対照群</text>
        <text x={0} y={28} fontSize="8" fill="var(--muted)" fontFamily="var(--font-noto-sans-jp)">小縦線 = 打ち切り</text>
      </g>
    </SvgFrame>
  );
}
