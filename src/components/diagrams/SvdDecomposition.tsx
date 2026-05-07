import { SvgFrame, PAD } from "./primitives";

/**
 * SVD A = UΣV^⊤ の幾何的解釈:
 * 任意の線形変換は『回転 → 軸方向の伸縮 → 回転』に分解できる。
 * 単位円 → 楕円(回転後)→ さらに回転、を 4 段階で並べて表示。
 */
export function SvdDecomposition() {
  // 単純な変換: A = [[2, 1], [1, 2]] の特異値は約 3 と 1
  // V^⊤ で 45 度回転、Σ で x 方向 3 倍 / y 方向 1 倍、U でさらに -45 度回転
  const stages = [
    { label: "単位円", rotation: 0, sx: 1, sy: 1 },
    { label: "V^⊤ で回転", rotation: -45, sx: 1, sy: 1 },
    { label: "Σ で伸縮", rotation: -45, sx: 3, sy: 1 },
    { label: "U で再回転", rotation: 0, sx: 3, sy: 1 },
  ];

  const W = 360;
  const H = 220;
  const cellW = (W - 16) / 4;
  const radius = 28;

  return (
    <SvgFrame>
      {stages.map((stage, i) => {
        const cx = 8 + cellW / 2 + i * cellW;
        const cy = H / 2 - 10;
        return (
          <g key={i}>
            {/* 単位円(基準) */}
            <circle
              cx={cx}
              cy={cy}
              r={radius}
              fill="none"
              stroke="var(--muted)"
              strokeWidth={1}
              strokeDasharray="3 3"
              opacity={0.4}
            />
            {/* 変換後の楕円 */}
            <g transform={`translate(${cx} ${cy}) rotate(${stage.rotation})`}>
              <ellipse
                cx={0}
                cy={0}
                rx={radius * stage.sx}
                ry={radius * stage.sy}
                fill="var(--link)"
                fillOpacity={0.12}
                stroke="var(--link)"
                strokeWidth={2}
              />
              {/* x 軸 */}
              <line
                x1={0}
                y1={0}
                x2={radius * stage.sx}
                y2={0}
                stroke="var(--link)"
                strokeWidth={2}
              />
              {/* y 軸 */}
              <line
                x1={0}
                y1={0}
                x2={0}
                y2={-radius * stage.sy}
                stroke="#f59e0b"
                strokeWidth={2}
              />
            </g>
            <text
              x={cx}
              y={cy + radius + 30}
              textAnchor="middle"
              fontSize="10"
              fill="var(--foreground)"
              fontFamily="var(--font-noto-sans-jp)"
              fontWeight="bold"
            >
              {stage.label}
            </text>
            {/* 矢印(次のステージへ) */}
            {i < stages.length - 1 && (
              <text
                x={cx + cellW / 2}
                y={cy + 4}
                textAnchor="middle"
                fontSize="14"
                fill="var(--muted)"
                fontFamily="var(--font-noto-sans-jp)"
              >
                →
              </text>
            )}
          </g>
        );
      })}
      <text
        x={W / 2}
        y={20}
        textAnchor="middle"
        fontSize="11"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
        fontWeight="bold"
      >
        SVD: A = U Σ V^⊤ ─ 任意の線形変換 = 回転 → 伸縮 → 回転
      </text>
      <text
        x={W / 2}
        y={H - 6}
        textAnchor="middle"
        fontSize="9"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        例: σ₁ = 3, σ₂ = 1 ─ 第一特異値の方向に 3 倍、垂直方向は等倍
      </text>
    </SvgFrame>
  );
}
