export function GbdtTree() {
  const node = (cx: number, cy: number, label: string, fill: string, fg = "white") => (
    <g>
      <rect x={cx - 38} y={cy - 14} width="76" height="28" rx="4" fill={fill} stroke="#1f2937" strokeWidth="1" />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="10" fill={fg} fontWeight="bold">
        {label}
      </text>
    </g>
  );
  const link = (x1: number, y1: number, x2: number, y2: number, label?: string) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6b7280" strokeWidth="1.5" />
      {label && (
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 4}
          textAnchor="middle"
          fontSize="9"
          fill="currentColor"
          opacity="0.7"
        >
          {label}
        </text>
      )}
    </g>
  );

  return (
    <svg viewBox="0 0 360 260" className="w-full max-w-md h-auto" role="img" aria-label="GBDT 分割木">
      {link(180, 36, 100, 100, "x₁ ≤ 5")}
      {link(180, 36, 260, 100, "x₁ > 5")}
      {link(100, 116, 50, 200, "x₂ ≤ 3")}
      {link(100, 116, 150, 200, "x₂ > 3")}
      {link(260, 116, 220, 200, "x₂ ≤ 7")}
      {link(260, 116, 310, 200, "x₂ > 7")}
      {node(180, 22, "x₁ ?", "#1e40af")}
      {node(100, 102, "x₂ ?", "#3b82f6")}
      {node(260, 102, "x₂ ?", "#3b82f6")}
      {node(50, 214, "−0.4", "#fef3c7", "#7c2d12")}
      {node(150, 214, "+0.2", "#fef3c7", "#7c2d12")}
      {node(220, 214, "+0.5", "#fef3c7", "#7c2d12")}
      {node(310, 214, "+0.9", "#fef3c7", "#7c2d12")}
      <text x="20" y="248" fontSize="9" fill="currentColor" opacity="0.7">
        葉の値 = 残差を最小化する更新量(学習率 η を掛けて加算)
      </text>
    </svg>
  );
}
