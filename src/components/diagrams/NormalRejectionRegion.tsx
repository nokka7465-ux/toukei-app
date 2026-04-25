import { Axes, PAD, PLOT_H, PLOT_W, phi, range, SvgFrame } from "./primitives";

/** 両側 5% 棄却域(|z| > 1.96) */
export function NormalRejectionRegion() {
  const xs = range(-3.5, 3.5, 0.05);
  const yMax = phi(0) * 1.05;
  const xToPx = (z: number) => PAD.l + ((z + 3.5) / 7) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;
  const z975 = 1.96;

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
      {shade(-3.5, -z975, "#dc2626", 0.55)}
      {shade(z975, 3.5, "#dc2626", 0.55)}
      {shade(-z975, z975, "var(--accent)", 0.4)}
      <path d={linePath} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      <Axes
        xLabel="z"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -1.96, label: "-1.96" },
          { value: 0, label: "0" },
          { value: 1.96, label: "1.96" },
        ]}
      />
      <text
        x={xToPx(0)}
        y={yToPx(phi(0) / 2)}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        採択域 95%
      </text>
      <text
        x={xToPx(-2.5)}
        y={yToPx(phi(2.5)) - 6}
        fontSize="9"
        textAnchor="middle"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        棄却 2.5%
      </text>
      <text
        x={xToPx(2.5)}
        y={yToPx(phi(2.5)) - 6}
        fontSize="9"
        textAnchor="middle"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        棄却 2.5%
      </text>
    </SvgFrame>
  );
}
