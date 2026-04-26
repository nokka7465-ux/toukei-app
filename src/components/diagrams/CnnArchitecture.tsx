import { SVG_W, SVG_H, SvgFrame } from "./primitives";

/** CNN の典型的なアーキテクチャ図(入力→畳み込み→プーリング→FC→出力) */
export function CnnArchitecture() {
  // ブロック描画ヘルパー
  type Block = {
    x: number;
    yCenter: number;
    w: number;
    h: number;
    color: string;
    label: string;
    sublabel?: string;
  };

  const blocks: Block[] = [
    // 入力(画像)
    { x: 14, yCenter: 110, w: 36, h: 50, color: "var(--page-border-strong)", label: "入力", sublabel: "32×32×3" },
    // Conv 1
    { x: 60, yCenter: 110, w: 26, h: 60, color: "#3b82f6", label: "Conv", sublabel: "30×30×16" },
    // Pool 1
    { x: 92, yCenter: 110, w: 22, h: 50, color: "#f59e0b", label: "Pool", sublabel: "15×15×16" },
    // Conv 2
    { x: 120, yCenter: 110, w: 18, h: 70, color: "#3b82f6", label: "Conv", sublabel: "13×13×32" },
    // Pool 2
    { x: 144, yCenter: 110, w: 14, h: 60, color: "#f59e0b", label: "Pool", sublabel: "6×6×32" },
    // Flatten
    { x: 164, yCenter: 110, w: 6, h: 80, color: "var(--accent-strong)", label: "Flatten" },
    // FC1
    { x: 178, yCenter: 110, w: 5, h: 90, color: "#dc2626", label: "FC", sublabel: "128" },
    // FC2 (output)
    { x: 192, yCenter: 110, w: 5, h: 50, color: "#dc2626", label: "FC", sublabel: "10" },
    // Softmax label
    { x: 206, yCenter: 110, w: 0, h: 0, color: "transparent", label: "→ Softmax" },
  ];

  // ブロックを矢印でつなぐ
  const arrows: { x1: number; x2: number }[] = [];
  for (let i = 0; i < blocks.length - 1; i++) {
    const a = blocks[i];
    const b = blocks[i + 1];
    if (b.color === "transparent") break;
    arrows.push({ x1: a.x + a.w + 1, x2: b.x - 1 });
  }

  return (
    <SvgFrame>
      {/* タイトル */}
      <text
        x={SVG_W / 2}
        y={20}
        fontSize="11"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        CNN(畳み込みニューラルネット)の典型構成
      </text>

      {/* ブロック群 */}
      {blocks.map((b, i) => {
        if (b.color === "transparent") {
          return (
            <text
              key={i}
              x={b.x}
              y={b.yCenter + 4}
              fontSize="10"
              fill="var(--accent-strong)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {b.label}
            </text>
          );
        }
        return (
          <g key={i}>
            <rect
              x={b.x}
              y={b.yCenter - b.h / 2}
              width={b.w}
              height={b.h}
              fill={b.color}
              opacity={0.7}
              stroke="var(--foreground)"
              strokeWidth={0.6}
            />
            <text
              x={b.x + b.w / 2}
              y={b.yCenter - b.h / 2 - 4}
              fontSize="8"
              textAnchor="middle"
              fill="var(--foreground)"
              fontFamily="var(--font-noto-sans-jp)"
            >
              {b.label}
            </text>
            {b.sublabel && (
              <text
                x={b.x + b.w / 2}
                y={b.yCenter + b.h / 2 + 10}
                fontSize="7"
                textAnchor="middle"
                fill="var(--muted)"
                fontFamily="var(--font-noto-sans-jp)"
              >
                {b.sublabel}
              </text>
            )}
          </g>
        );
      })}

      {/* 矢印 */}
      {arrows.map((a, i) => (
        <line
          key={i}
          x1={a.x1}
          x2={a.x2}
          y1={110}
          y2={110}
          stroke="var(--muted)"
          strokeWidth={0.8}
          markerEnd="url(#arrowhead)"
        />
      ))}

      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 6 3, 0 6" fill="var(--muted)" />
        </marker>
      </defs>

      {/* 凡例 */}
      <g transform="translate(20, 195)">
        <rect x={0} y={0} width={10} height={10} fill="#3b82f6" opacity={0.7} />
        <text x={14} y={9} fontSize="8" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">畳み込み層</text>
        <rect x={70} y={0} width={10} height={10} fill="#f59e0b" opacity={0.7} />
        <text x={84} y={9} fontSize="8" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">プーリング</text>
        <rect x={140} y={0} width={10} height={10} fill="#dc2626" opacity={0.7} />
        <text x={154} y={9} fontSize="8" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">全結合(FC)</text>
      </g>
    </SvgFrame>
  );
}
