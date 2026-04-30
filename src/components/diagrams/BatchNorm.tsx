export function BatchNorm() {
  const layerH = 60;
  const W = 360;
  return (
    <svg viewBox="0 0 360 240" className="w-full max-w-md h-auto" role="img" aria-label="Batch Normalization">
      <text x={W / 2} y="20" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">
        Batch Normalization
      </text>
      <rect x="30" y="40" width="120" height={layerH} rx="4" fill="#3b82f6" stroke="#1f2937" />
      <text x="90" y="76" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">活性化(σ²,μ大)</text>

      <text x="170" y="76" fontSize="14" fill="currentColor" textAnchor="middle">→</text>

      <rect x="190" y="40" width="140" height={layerH} rx="4" fill="#10b981" stroke="#1f2937" />
      <text x="260" y="68" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">標準化</text>
      <text x="260" y="84" fontSize="9" fill="white" textAnchor="middle">μ=0, σ²=1</text>

      <text x={W / 2} y="120" fontSize="9" fill="currentColor" textAnchor="middle">↓ 学習可能なスケール γ・シフト β</text>

      <rect x="100" y="135" width="160" height={layerH} rx="4" fill="#8b5cf6" stroke="#1f2937" />
      <text x="180" y="163" fontSize="11" fill="white" textAnchor="middle" fontWeight="bold">y = γ·x̂ + β</text>
      <text x="180" y="180" fontSize="9" fill="white" textAnchor="middle">次の層へ</text>

      <text x={W / 2} y="220" fontSize="9" fill="currentColor" textAnchor="middle" opacity="0.7">
        各ミニバッチで標準化 → 内部共変量シフトを抑制 → 学習が高速・安定
      </text>
    </svg>
  );
}
