import { Axes, PAD, PLOT_H, PLOT_W, phi, range, SvgFrame } from "./primitives";

export function NormalCurve() {
  const xs = range(-3.5, 3.5, 0.05);
  const yMax = phi(0) * 1.05;
  const xToPx = (z: number) => PAD.l + ((z + 3.5) / 7) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;

  const linePath = xs
    .map((z, i) => `${i === 0 ? "M" : "L"} ${xToPx(z)} ${yToPx(phi(z))}`)
    .join(" ");

  // ±1σ shading
  const shade = (a: number, b: number, fill: string, opacity: number) => {
    const inside = xs.filter((z) => z >= a && z <= b);
    const top = inside
      .map((z, i) => `${i === 0 ? "M" : "L"} ${xToPx(z)} ${yToPx(phi(z))}`)
      .join(" ");
    const bottom = `L ${xToPx(b)} ${yToPx(0)} L ${xToPx(a)} ${yToPx(0)} Z`;
    return <path d={`${top} ${bottom}`} fill={fill} opacity={opacity} />;
  };

  return (
    <SvgFrame>
      {shade(-1, 1, "var(--accent)", 0.55)}
      {shade(-2, -1, "var(--accent)", 0.3)}
      {shade(1, 2, "var(--accent)", 0.3)}
      <path
        d={linePath}
        stroke="var(--link)"
        strokeWidth={1.6}
        fill="none"
      />
      <Axes
        xLabel="z"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -3, label: "-3" },
          { value: -2, label: "-2" },
          { value: -1, label: "-1" },
          { value: 0, label: "0" },
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" },
        ]}
      />
      <text
        x={xToPx(0)}
        y={yToPx(phi(0)) + 14}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ±1σ ≒ 68%
      </text>
      <text
        x={xToPx(-1.5)}
        y={yToPx(phi(1.5)) - 6}
        fontSize="9"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ±2σ ≒ 95%
      </text>
    </SvgFrame>
  );
}
