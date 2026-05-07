import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/**
 * 固有ベクトルの可視化:
 * - 行列 A に対して、ふつうのベクトル v は A v で「方向が変わる」
 * - 固有ベクトル w は A w = λ w で「方向は変わらず長さだけ λ 倍」
 *   が一目で分かる図。
 */
export function Eigenvectors() {
  const xMin = -3,
    xMax = 3,
    yMin = -2,
    yMax = 2;
  const xToPx = (x: number) =>
    PAD.l + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yToPx = (y: number) =>
    PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  // A = [[2, 1], [0, 3]] とすると固有値は 2, 3、固有ベクトル (1, 0), (1, 1)
  // 別案: 対称な例で A = [[2, 1], [1, 2]] だと λ = 1, 3 で v = (1, -1)/√2, (1, 1)/√2

  // 固有ベクトル w = (1, 1) を 1/√2 倍したもの。Aw = 3w で長さ 3 倍
  const w = { x: 1 / Math.SQRT2, y: 1 / Math.SQRT2 };
  const Aw = { x: 3 * w.x, y: 3 * w.y };

  // 一般のベクトル v = (1.5, 0.3) → Av = (2*1.5 + 0.3, 1*1.5 + 2*0.3) = (3.3, 2.1) で
  // 方向(角度)が変わる
  const v = { x: 1.5, y: 0.3 };
  const Av = { x: 2 * v.x + v.y, y: v.x + 2 * v.y };

  const arrow = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    color: string,
    label: string,
    labelOffset: { dx: number; dy: number } = { dx: 6, dy: -4 },
    dashed = false,
  ) => (
    <g key={label}>
      <line
        x1={xToPx(p1.x)}
        y1={yToPx(p1.y)}
        x2={xToPx(p2.x)}
        y2={yToPx(p2.y)}
        stroke={color}
        strokeWidth={2}
        strokeDasharray={dashed ? "4 3" : undefined}
        markerEnd={`url(#arrow-${color.replace(/[^a-zA-Z0-9]/g, "")})`}
      />
      <text
        x={xToPx(p2.x) + labelOffset.dx}
        y={yToPx(p2.y) + labelOffset.dy}
        fontSize="10"
        fill={color}
        fontFamily="var(--font-noto-sans-jp)"
      >
        {label}
      </text>
    </g>
  );

  return (
    <SvgFrame>
      <defs>
        <marker
          id="arrow-varlink"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="var(--link)" />
        </marker>
        <marker
          id="arrow-f59e0b"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="#f59e0b" />
        </marker>
        <marker
          id="arrow-varmuted"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M0,0 L10,5 L0,10 Z" fill="var(--muted)" />
        </marker>
      </defs>
      <Axes
        xLabel="x"
        yLabel="y"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -2, label: "-2" },
          { value: 0, label: "0" },
          { value: 2, label: "2" },
        ]}
        yTicks={[
          { value: -1, label: "-1" },
          { value: 0, label: "0" },
          { value: 1, label: "1" },
        ]}
      />
      {/* ふつうのベクトル v(灰色) → Av で方向が変わる */}
      {arrow({ x: 0, y: 0 }, v, "var(--muted)", "v", { dx: 4, dy: 12 })}
      {arrow(
        { x: 0, y: 0 },
        Av,
        "#f59e0b",
        "Av",
        { dx: 4, dy: -4 },
        true,
      )}
      {/* 固有ベクトル w(青) → Aw は同じ方向で 3 倍 */}
      {arrow({ x: 0, y: 0 }, w, "var(--link)", "w", { dx: -16, dy: -4 })}
      {arrow(
        { x: 0, y: 0 },
        Aw,
        "var(--link)",
        "Aw = 3w",
        { dx: 6, dy: -4 },
        true,
      )}
      <text
        x={PAD.l + PLOT_W - 6}
        y={PAD.t + 14}
        fontSize="9"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        A = [[2,1],[1,2]] / 固有値 λ = 1, 3
      </text>
      <text
        x={PAD.l + PLOT_W - 6}
        y={PAD.t + 28}
        fontSize="9"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        固有ベクトル: 方向不変・長さ λ 倍
      </text>
    </SvgFrame>
  );
}
