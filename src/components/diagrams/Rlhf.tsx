export function Rlhf() {
  const box = (x: number, y: number, w: number, h: number, label: string, fill: string, fg = "white") => (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={fill} stroke="#1f2937" strokeWidth="1" />
      <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize="10" fill={fg} fontWeight="bold">
        {label}
      </text>
    </g>
  );

  const arrow = (x1: number, y1: number, x2: number, y2: number, label?: string) => (
    <g>
      <defs>
        <marker id="rlhf-ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
          <path d="M0,0 L7,3.5 L0,7 z" fill="#374151" />
        </marker>
      </defs>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#374151" strokeWidth="1.5" markerEnd="url(#rlhf-ah)" />
      {label && (
        <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 6} textAnchor="middle" fontSize="9" fill="currentColor">
          {label}
        </text>
      )}
    </g>
  );

  return (
    <svg viewBox="0 0 360 280" className="w-full max-w-md h-auto" role="img" aria-label="RLHF 概念図">
      <text x="180" y="18" fontSize="11" textAnchor="middle" fontWeight="bold" fill="currentColor">
        RLHF: 人間フィードバックによる強化学習
      </text>
      {box(20, 40, 80, 36, "SFT モデル", "#3b82f6")}
      {box(140, 40, 80, 36, "応答 A / B", "#a5b4fc", "#1f2937")}
      {box(260, 40, 80, 36, "人間ラベラ", "#f59e0b")}
      {arrow(100, 58, 140, 58)}
      {arrow(220, 58, 260, 58)}

      {box(140, 110, 80, 36, "選好データ", "#fef3c7", "#7c2d12")}
      {arrow(300, 76, 200, 110, "A>B")}

      {box(140, 170, 80, 36, "報酬モデル", "#10b981")}
      {arrow(180, 146, 180, 170, "学習")}

      {box(20, 230, 80, 36, "PPO 更新", "#8b5cf6")}
      {box(260, 230, 80, 36, "最終 LLM", "#1e40af")}
      {arrow(140, 188, 100, 238, "報酬")}
      {arrow(60, 230, 60, 76)}
      {arrow(100, 248, 260, 248, "デプロイ")}
    </svg>
  );
}
