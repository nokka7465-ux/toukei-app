import { Axes, PAD, PLOT_H, PLOT_W, phi, range, SvgFrame } from "./primitives";

/** p 値のイメージ:観測された統計量より外側の面積 = p 値 */
export function PValueArea() {
  const xs = range(-3.5, 3.5, 0.05);
  const yMax = phi(0) * 1.05;
  const xToPx = (z: number) => PAD.l + ((z + 3.5) / 7) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;
  const zObs = 1.7;

  const linePath = xs
    .map((z, i) => `${i === 0 ? "M" : "L"} ${xToPx(z)} ${yToPx(phi(z))}`)
    .join(" ");

  const shade = (a: number, b: number, fill: string, opacity: number) => {
    const inside = xs.filter((z) => z >= a && z <= b);
    if (inside.length === 0) return null;
    const top = inside
      .map((z, i) => `${i === 0 ? "M" : "L"} ${xToPx(z)} ${yToPx(phi(z))}`)
      .join(" ");
    const bottom = `L ${xToPx(b)} ${yToPx(0)} L ${xToPx(a)} ${yToPx(0)} Z`;
    return <path d={`${top} ${bottom}`} fill={fill} opacity={opacity} />;
  };

  return (
    <SvgFrame>
      {/* 観測値より外側の面積 (両側) */}
      {shade(zObs, 3.5, "#dc2626", 0.5)}
      {shade(-3.5, -zObs, "#dc2626", 0.5)}
      <path d={linePath} stroke="var(--link)" strokeWidth={1.6} fill="none" />

      {/* 観測値の縦線 */}
      <line
        x1={xToPx(zObs)}
        x2={xToPx(zObs)}
        y1={PAD.t}
        y2={yToPx(0)}
        stroke="var(--foreground)"
        strokeDasharray="2 2"
      />
      <circle cx={xToPx(zObs)} cy={yToPx(0)} r={3} fill="var(--foreground)" />

      <Axes
        xLabel="z"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -zObs, label: "-z*" },
          { value: 0, label: "0" },
          { value: zObs, label: "z* (観測)" },
        ]}
      />
      <text
        x={xToPx(zObs + 0.5)}
        y={yToPx(phi(zObs + 0.5)) + 12}
        fontSize="9"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        p 値 / 2
      </text>
      <text
        x={xToPx(0)}
        y={PAD.t + 14}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        H₀ のもとでの分布
      </text>
      <text
        x={xToPx(0)}
        y={PAD.t + PLOT_H + 24}
        fontSize="9"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        観測 z* より外側の面積(両側)= p 値
      </text>
    </SvgFrame>
  );
}
