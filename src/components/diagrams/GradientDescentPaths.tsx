import { PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** 異なる最適化手法の収束経路を、楕円形の損失関数面上で描く */
export function GradientDescentPaths() {
  // 損失関数: 楕円形 (x²/4 + y²) で minimum at origin
  // 等高線を描く
  const xMin = -3,
    xMax = 3,
    yMin = -2,
    yMax = 2;
  const xToPx = (x: number) => PAD.l + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  // 等高線 (3 つ)
  const ellipses = [0.5, 1.5, 3].map((c) => ({
    rx: xToPx(2 * Math.sqrt(c)) - xToPx(0),
    ry: yToPx(0) - yToPx(Math.sqrt(c)),
  }));

  // SGD vanilla(ジグザグ)
  const sgdPath: { x: number; y: number }[] = [{ x: -2.5, y: 1.7 }];
  let cx = -2.5,
    cy = 1.7;
  const lr = 0.15;
  for (let i = 0; i < 20; i++) {
    // 勾配: ∂/∂x = x/2, ∂/∂y = 2y
    const gx = cx / 2;
    const gy = 2 * cy;
    cx -= lr * gx + (i % 2 === 0 ? 0.1 : -0.1) * Math.abs(cx); // 振動を加える
    cy -= lr * gy;
    sgdPath.push({ x: cx, y: cy });
  }

  // Momentum(勢いがついて滑らか)
  const momentumPath: { x: number; y: number }[] = [{ x: -2.5, y: 1.7 }];
  let mx = -2.5,
    my = 1.7,
    vx = 0,
    vy = 0;
  const beta = 0.85;
  for (let i = 0; i < 20; i++) {
    const gx = mx / 2;
    const gy = 2 * my;
    vx = beta * vx - 0.1 * gx;
    vy = beta * vy - 0.1 * gy;
    mx += vx;
    my += vy;
    momentumPath.push({ x: mx, y: my });
  }

  // Adam(より直接的)
  const adamPath: { x: number; y: number }[] = [{ x: -2.5, y: 1.7 }];
  let ax = -2.5,
    ay = 1.7;
  let mxA = 0,
    myA = 0,
    vxA = 0,
    vyA = 0;
  const b1 = 0.9,
    b2 = 0.999,
    epsA = 1e-8;
  for (let i = 1; i <= 20; i++) {
    const gx = ax / 2;
    const gy = 2 * ay;
    mxA = b1 * mxA + (1 - b1) * gx;
    myA = b1 * myA + (1 - b1) * gy;
    vxA = b2 * vxA + (1 - b2) * gx * gx;
    vyA = b2 * vyA + (1 - b2) * gy * gy;
    const mhx = mxA / (1 - Math.pow(b1, i));
    const mhy = myA / (1 - Math.pow(b1, i));
    const vhx = vxA / (1 - Math.pow(b2, i));
    const vhy = vyA / (1 - Math.pow(b2, i));
    ax -= (0.3 * mhx) / (Math.sqrt(vhx) + epsA);
    ay -= (0.3 * mhy) / (Math.sqrt(vhy) + epsA);
    adamPath.push({ x: ax, y: ay });
  }

  const renderPath = (
    path: { x: number; y: number }[],
    color: string,
  ) =>
    path
      .map(
        (p, i) =>
          `${i === 0 ? "M" : "L"} ${xToPx(p.x)} ${yToPx(p.y)}`,
      )
      .join(" ");

  return (
    <SvgFrame>
      {/* 等高線 */}
      {ellipses.map((e, i) => (
        <ellipse
          key={i}
          cx={xToPx(0)}
          cy={yToPx(0)}
          rx={e.rx}
          ry={e.ry}
          stroke="var(--muted)"
          strokeWidth={0.6}
          fill="none"
          strokeDasharray="1 2"
        />
      ))}
      {/* 最適点 */}
      <circle cx={xToPx(0)} cy={yToPx(0)} r={3} fill="var(--accent-strong)" />
      {/* 経路 */}
      <path d={renderPath(sgdPath, "#dc2626")} stroke="#dc2626" strokeWidth={1.4} fill="none" />
      <path d={renderPath(momentumPath, "#f59e0b")} stroke="#f59e0b" strokeWidth={1.4} fill="none" />
      <path d={renderPath(adamPath, "var(--link)")} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      {/* 開始点 */}
      <circle cx={xToPx(-2.5)} cy={yToPx(1.7)} r={3} fill="var(--foreground)" />
      <text
        x={xToPx(-2.5) - 4}
        y={yToPx(1.7) - 6}
        fontSize="9"
        textAnchor="end"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        開始
      </text>

      <g transform={`translate(${PAD.l + 8}, ${PAD.t + PLOT_H - 38})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="#dc2626" strokeWidth={2} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">SGD(振動)</text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#f59e0b" strokeWidth={2} />
        <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">Momentum</text>
        <line x1={0} x2={14} y1={24} y2={24} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={27} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">Adam</text>
      </g>
    </SvgFrame>
  );
}
