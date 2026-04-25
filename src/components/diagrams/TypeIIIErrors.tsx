import { Axes, PAD, PLOT_H, PLOT_W, normalPdf, range, SvgFrame } from "./primitives";

/** H0(平均0)と H1(平均2)の重なり、α(第1種)と β(第2種)を可視化 */
export function TypeIIIErrors() {
  const xs = range(-3, 6, 0.05);
  const mu0 = 0,
    mu1 = 2.5,
    sigma = 1;
  const yMax = normalPdf(0, 0, sigma) * 1.1;
  const xToPx = (x: number) => PAD.l + ((x + 3) / 9) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;

  // 棄却閾値(α=0.05 の右片側) z = 1.645 → x = mu0 + 1.645*sigma
  const zCrit = 1.645;
  const xCrit = mu0 + zCrit * sigma;

  const buildArea = (
    fn: (x: number) => number,
    a: number,
    b: number,
  ): string => {
    const inside = xs.filter((x) => x >= a && x <= b);
    if (inside.length === 0) return "";
    const top = inside
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fn(x))}`)
      .join(" ");
    return `${top} L ${xToPx(b)} ${yToPx(0)} L ${xToPx(a)} ${yToPx(0)} Z`;
  };

  const f0 = (x: number) => normalPdf(x, mu0, sigma);
  const f1 = (x: number) => normalPdf(x, mu1, sigma);

  const pathLine = (fn: (x: number) => number) =>
    xs
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fn(x))}`)
      .join(" ");

  return (
    <SvgFrame>
      {/* α : H0 の右側(棄却域) */}
      <path d={buildArea(f0, xCrit, 6)} fill="#dc2626" opacity={0.55} />
      {/* β : H1 の左側(採択してしまう領域) */}
      <path d={buildArea(f1, -3, xCrit)} fill="#f59e0b" opacity={0.55} />

      <path d={pathLine(f0)} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      <path d={pathLine(f1)} stroke="var(--accent-strong)" strokeWidth={1.6} fill="none" />

      {/* 閾値 */}
      <line
        x1={xToPx(xCrit)}
        x2={xToPx(xCrit)}
        y1={PAD.t}
        y2={PAD.t + PLOT_H}
        stroke="var(--foreground)"
        strokeDasharray="2 2"
      />

      <Axes
        xLabel="検定統計量"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "μ₀" },
          { value: xCrit, label: "閾値" },
          { value: mu1, label: "μ₁" },
        ]}
      />

      <text x={xToPx(0)} y={PAD.t + 14} fontSize="10" textAnchor="middle" fill="var(--link)" fontFamily="var(--font-noto-sans-jp)">H₀</text>
      <text x={xToPx(mu1)} y={PAD.t + 14} fontSize="10" textAnchor="middle" fill="var(--accent-strong)" fontFamily="var(--font-noto-sans-jp)">H₁</text>
      <text x={xToPx(xCrit + 0.7)} y={yToPx(f0(xCrit + 0.4)) + 8} fontSize="9" fill="#dc2626" fontFamily="var(--font-noto-sans-jp)">α(第1種)</text>
      <text x={xToPx(xCrit - 1.0)} y={yToPx(f1(xCrit - 0.6)) + 8} fontSize="9" fill="#b45309" fontFamily="var(--font-noto-sans-jp)">β(第2種)</text>
    </SvgFrame>
  );
}
