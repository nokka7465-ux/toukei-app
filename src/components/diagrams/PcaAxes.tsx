import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** 2 次元データに対する PCA: 第1主成分(分散最大方向)と第2主成分の表示 */
export function PcaAxes() {
  // 楕円状に分布する点群(共分散構造あり)
  const points: { x: number; y: number }[] = [];
  // 主軸方向を 30 度に傾けた相関 0.85 程度のサンプル
  const angle = (30 * Math.PI) / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  // 既知の生成ノイズで再現性確保
  const seedRand = (seed: number) => {
    let s = seed;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280 - 0.5;
    };
  };
  const r1 = seedRand(7);
  const r2 = seedRand(13);
  for (let i = 0; i < 60; i++) {
    // 主軸方向に分散大、垂直方向に分散小
    const u = (r1() + r1() + r1()) * 2.0;
    const v = (r2() + r2() + r2()) * 0.6;
    const x = u * cos - v * sin;
    const y = u * sin + v * cos;
    points.push({ x, y });
  }

  const xMin = -3.5,
    xMax = 3.5,
    yMin = -2.2,
    yMax = 2.2;
  const xToPx = (x: number) => PAD.l + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  // 第1主成分(楕円の長軸方向)
  const pc1Len = 3.0;
  const pc1End = { x: pc1Len * cos, y: pc1Len * sin };
  // 第2主成分(垂直方向)
  const pc2Len = 1.0;
  const pc2End = { x: -pc2Len * sin, y: pc2Len * cos };

  return (
    <SvgFrame>
      <Axes
        xLabel="x₁"
        yLabel="x₂"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -2, label: "-2" },
          { value: 0, label: "0" },
          { value: 2, label: "2" },
        ]}
        yTicks={[
          { value: -2, label: "-2" },
          { value: 0, label: "0" },
          { value: 2, label: "2" },
        ]}
      />
      {/* 散布点 */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={xToPx(p.x)}
          cy={yToPx(p.y)}
          r={2}
          fill="var(--foreground)"
          opacity={0.55}
        />
      ))}
      {/* 第1主成分軸 */}
      <line
        x1={xToPx(-pc1End.x)}
        y1={yToPx(-pc1End.y)}
        x2={xToPx(pc1End.x)}
        y2={yToPx(pc1End.y)}
        stroke="var(--link)"
        strokeWidth={2}
      />
      <text
        x={xToPx(pc1End.x) + 4}
        y={yToPx(pc1End.y) - 4}
        fontSize="10"
        fill="var(--link)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        PC1
      </text>
      {/* 第2主成分軸 */}
      <line
        x1={xToPx(-pc2End.x)}
        y1={yToPx(-pc2End.y)}
        x2={xToPx(pc2End.x)}
        y2={yToPx(pc2End.y)}
        stroke="#f59e0b"
        strokeWidth={2}
      />
      <text
        x={xToPx(pc2End.x) + 4}
        y={yToPx(pc2End.y) + 10}
        fontSize="10"
        fill="#f59e0b"
        fontFamily="var(--font-noto-sans-jp)"
      >
        PC2
      </text>
      <text
        x={PAD.l + PLOT_W - 6}
        y={PAD.t + 12}
        fontSize="9"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        PC1 = 分散最大方向
      </text>
    </SvgFrame>
  );
}
