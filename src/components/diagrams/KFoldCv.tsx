export function KFoldCv() {
  const K = 5;
  const cellW = 50;
  const cellH = 24;
  const startX = 30;
  const startY = 40;
  return (
    <svg viewBox="0 0 360 220" className="w-full max-w-md h-auto" role="img" aria-label="K-Fold Cross-Validation">
      <text x="180" y="20" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">
        K-Fold Cross-Validation (K=5)
      </text>
      {Array.from({ length: K }, (_, fold) => (
        <g key={fold}>
          <text x={startX - 8} y={startY + fold * 32 + cellH * 0.7} fontSize="10" fill="currentColor" textAnchor="end">
            fold {fold + 1}
          </text>
          {Array.from({ length: K }, (_, i) => {
            const isTest = i === fold;
            return (
              <g key={i}>
                <rect
                  x={startX + i * cellW}
                  y={startY + fold * 32}
                  width={cellW - 4}
                  height={cellH}
                  fill={isTest ? "#ef4444" : "#3b82f6"}
                  opacity={isTest ? 0.85 : 0.45}
                  stroke="#1f2937"
                  strokeWidth="0.5"
                />
                {isTest && (
                  <text
                    x={startX + i * cellW + (cellW - 4) / 2}
                    y={startY + fold * 32 + cellH * 0.7}
                    fontSize="9"
                    fill="white"
                    textAnchor="middle"
                    fontWeight="bold"
                  >
                    test
                  </text>
                )}
              </g>
            );
          })}
        </g>
      ))}
      <text x={startX + (K * cellW) / 2} y={startY + K * 32 + 12} fontSize="9" fill="currentColor" textAnchor="middle">
        各 fold の test スコアを平均 → 汎化性能の推定
      </text>
      <g transform="translate(30, 200)">
        <rect x="0" y="0" width="14" height="10" fill="#3b82f6" opacity="0.45" />
        <text x="20" y="9" fontSize="9" fill="currentColor">train</text>
        <rect x="60" y="0" width="14" height="10" fill="#ef4444" opacity="0.85" />
        <text x="80" y="9" fontSize="9" fill="currentColor">test</text>
      </g>
    </svg>
  );
}
