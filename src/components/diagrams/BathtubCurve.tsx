import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/**
 * バスタブ曲線(故障率 λ(t) の時間変化):
 * - 初期故障期(減少): バーンインで除去可能
 * - 偶発故障期(一定): 製品の有効寿命
 * - 摩耗故障期(増加): 経年劣化、予防保守の対象
 */
export function BathtubCurve() {
  const xMin = 0,
    xMax = 10,
    yMin = 0,
    yMax = 1.4;
  const xToPx = (x: number) =>
    PAD.l + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yToPx = (y: number) =>
    PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  // バスタブ曲線: 3 つの段階を関数で合成
  // λ(t) = a/(t+0.3) + b + c*max(0, t-7)^2
  const lambda = (t: number) => {
    const decay = 1.0 / (t + 0.5);
    const baseline = 0.25;
    const wear = 0.06 * Math.max(0, t - 7) ** 2;
    return decay + baseline + wear;
  };

  const points: { x: number; y: number }[] = [];
  for (let t = 0; t <= 10; t += 0.1) {
    points.push({ x: t, y: lambda(t) });
  }

  const path = points
    .map(
      (p, i) => `${i === 0 ? "M" : "L"} ${xToPx(p.x)} ${yToPx(Math.min(p.y, yMax))}`,
    )
    .join(" ");

  // 3 つの段階の境界
  const phase1End = 2.5;
  const phase2End = 7.0;

  return (
    <SvgFrame>
      <Axes
        xLabel="時間 t"
        yLabel="故障率 λ(t)"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 5, label: "5" },
          { value: 10, label: "10" },
        ]}
        yTicks={[
          { value: 0, label: "0" },
          { value: 0.5, label: "0.5" },
          { value: 1, label: "1" },
        ]}
      />
      {/* 3 段階の背景帯 */}
      <rect
        x={xToPx(0)}
        y={PAD.t}
        width={xToPx(phase1End) - xToPx(0)}
        height={PLOT_H}
        fill="#f59e0b"
        fillOpacity={0.08}
      />
      <rect
        x={xToPx(phase1End)}
        y={PAD.t}
        width={xToPx(phase2End) - xToPx(phase1End)}
        height={PLOT_H}
        fill="#10b981"
        fillOpacity={0.08}
      />
      <rect
        x={xToPx(phase2End)}
        y={PAD.t}
        width={xToPx(xMax) - xToPx(phase2End)}
        height={PLOT_H}
        fill="#ef4444"
        fillOpacity={0.08}
      />
      {/* 曲線 */}
      <path d={path} fill="none" stroke="var(--link)" strokeWidth={2.5} />
      {/* 段階ラベル */}
      <text
        x={xToPx(phase1End / 2)}
        y={PAD.t + 14}
        textAnchor="middle"
        fontSize="9"
        fill="#d97706"
        fontFamily="var(--font-noto-sans-jp)"
        fontWeight="bold"
      >
        初期故障期
      </text>
      <text
        x={xToPx(phase1End / 2)}
        y={PAD.t + 26}
        textAnchor="middle"
        fontSize="8"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        減少
      </text>
      <text
        x={xToPx((phase1End + phase2End) / 2)}
        y={PAD.t + 14}
        textAnchor="middle"
        fontSize="9"
        fill="#059669"
        fontFamily="var(--font-noto-sans-jp)"
        fontWeight="bold"
      >
        偶発故障期
      </text>
      <text
        x={xToPx((phase1End + phase2End) / 2)}
        y={PAD.t + 26}
        textAnchor="middle"
        fontSize="8"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ほぼ一定(指数分布)
      </text>
      <text
        x={xToPx((phase2End + xMax) / 2)}
        y={PAD.t + 14}
        textAnchor="middle"
        fontSize="9"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
        fontWeight="bold"
      >
        摩耗故障期
      </text>
      <text
        x={xToPx((phase2End + xMax) / 2)}
        y={PAD.t + 26}
        textAnchor="middle"
        fontSize="8"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        増加
      </text>
    </SvgFrame>
  );
}
