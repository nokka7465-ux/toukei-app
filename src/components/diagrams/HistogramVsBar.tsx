import { PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** 量的データのヒストグラム vs カテゴリ棒グラフ(隣接する/しないの違い) */
export function HistogramVsBar() {
  // 左半分: ヒストグラム
  const halfW = (PLOT_W - 16) / 2;
  const histX0 = PAD.l;
  const barX0 = PAD.l + halfW + 16;
  const baselineY = PAD.t + PLOT_H;

  const histData = [4, 9, 14, 11, 6, 2];
  const barData = [10, 7, 13, 4];
  const barLabels = ["A", "B", "C", "D"];

  const maxH = 16;
  const valueToHeight = (v: number) => (v / maxH) * (PLOT_H - 24);

  const histBarW = halfW / histData.length;
  const barW = (halfW - (barData.length + 1) * 6) / barData.length;

  return (
    <SvgFrame>
      {/* タイトル */}
      <text
        x={histX0 + halfW / 2}
        y={PAD.t + 8}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ヒストグラム(隣接)
      </text>
      <text
        x={barX0 + halfW / 2}
        y={PAD.t + 8}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        棒グラフ(隙間あり)
      </text>

      {/* ヒストグラム */}
      {histData.map((v, i) => {
        const h = valueToHeight(v);
        return (
          <rect
            key={`h-${i}`}
            x={histX0 + i * histBarW}
            y={baselineY - h}
            width={histBarW - 0.5}
            height={h}
            fill="var(--link)"
            opacity={0.7}
          />
        );
      })}
      <line
        x1={histX0}
        x2={histX0 + halfW}
        y1={baselineY}
        y2={baselineY}
        stroke="var(--page-border-strong)"
      />
      <text
        x={histX0 + halfW / 2}
        y={baselineY + 16}
        fontSize="9"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        点数(連続量)
      </text>

      {/* 棒グラフ */}
      {barData.map((v, i) => {
        const h = valueToHeight(v);
        return (
          <g key={`b-${i}`}>
            <rect
              x={barX0 + 6 + i * (barW + 6)}
              y={baselineY - h}
              width={barW}
              height={h}
              fill="var(--accent)"
              opacity={0.85}
            />
            <text
              x={barX0 + 6 + i * (barW + 6) + barW / 2}
              y={baselineY + 12}
              fontSize="9"
              textAnchor="middle"
              fill="var(--muted)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {barLabels[i]}
            </text>
          </g>
        );
      })}
      <line
        x1={barX0}
        x2={barX0 + halfW}
        y1={baselineY}
        y2={baselineY}
        stroke="var(--page-border-strong)"
      />
      <text
        x={barX0 + halfW / 2}
        y={baselineY + 24}
        fontSize="9"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        カテゴリ(質的)
      </text>
    </SvgFrame>
  );
}
