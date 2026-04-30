export function ConfusionMatrix() {
  const cell = (x: number, y: number, w: number, h: number, label: string, val: string, fill: string) => (
    <g>
      <rect x={x} y={y} width={w} height={h} fill={fill} stroke="#1f2937" strokeWidth="1" />
      <text x={x + w / 2} y={y + 18} fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">
        {label}
      </text>
      <text x={x + w / 2} y={y + 38} fontSize="14" fill="white" textAnchor="middle" fontWeight="bold">
        {val}
      </text>
    </g>
  );
  return (
    <svg viewBox="0 0 360 260" className="w-full max-w-md h-auto" role="img" aria-label="Confusion Matrix">
      <text x="180" y="20" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">
        混同行列(Confusion Matrix)
      </text>
      {/* Predicted labels (top) */}
      <text x="170" y="50" fontSize="10" fill="currentColor" textAnchor="middle">予測: Positive</text>
      <text x="270" y="50" fontSize="10" fill="currentColor" textAnchor="middle">予測: Negative</text>
      {/* Actual labels (left, vertical) */}
      <text x="30" y="100" fontSize="10" fill="currentColor" transform="rotate(-90 30 100)" textAnchor="middle">
        実: Positive
      </text>
      <text x="30" y="170" fontSize="10" fill="currentColor" transform="rotate(-90 30 170)" textAnchor="middle">
        実: Negative
      </text>

      {/* TP */}
      {cell(120, 60, 100, 70, "TP", "85", "#10b981")}
      {/* FN */}
      {cell(220, 60, 100, 70, "FN", "15", "#f59e0b")}
      {/* FP */}
      {cell(120, 130, 100, 70, "FP", "10", "#ef4444")}
      {/* TN */}
      {cell(220, 130, 100, 70, "TN", "90", "#10b981")}

      {/* Metrics */}
      <text x="180" y="225" fontSize="9" fill="currentColor" textAnchor="middle" opacity="0.85">
        Precision = TP/(TP+FP) = 85/95 ≈ 0.89
      </text>
      <text x="180" y="240" fontSize="9" fill="currentColor" textAnchor="middle" opacity="0.85">
        Recall = TP/(TP+FN) = 85/100 = 0.85   /   Accuracy = 175/200 = 0.875
      </text>
    </svg>
  );
}
