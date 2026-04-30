export function Bootstrap() {
  const original = [40, 90, 60, 130, 80, 170, 110, 200, 150, 240];
  const samples = [
    [60, 60, 130, 80, 170, 200, 150, 240, 90, 110],
    [40, 90, 90, 130, 110, 110, 170, 200, 240, 150],
    [80, 80, 60, 130, 170, 110, 200, 150, 240, 90],
  ];

  const dotY = (i: number) => 40 + i * 50;

  return (
    <svg viewBox="0 0 360 240" className="w-full max-w-md h-auto" role="img" aria-label="ブートストラップ法">
      <text x="20" y="22" fontSize="11" fontWeight="bold" fill="currentColor">原データ</text>
      {original.map((x, i) => (
        <circle key={`o${i}`} cx={x + 10} cy={dotY(0)} r="6" fill="#3b82f6" stroke="white" strokeWidth="1" />
      ))}
      {samples.map((s, si) => (
        <g key={`s${si}`}>
          <text x="20" y={dotY(si + 1) - 18} fontSize="10" fill="currentColor" opacity="0.75">
            復元抽出 #{si + 1}
          </text>
          {s.map((x, i) => (
            <circle key={i} cx={x + 10} cy={dotY(si + 1)} r="5" fill="#a5b4fc" stroke="white" strokeWidth="1" />
          ))}
        </g>
      ))}
      <line x1="20" y1={dotY(0) + 12} x2="340" y2={dotY(0) + 12} stroke="#9ca3af" strokeDasharray="3 3" />
      <text x="340" y={dotY(0) + 24} textAnchor="end" fontSize="9" fill="currentColor" opacity="0.6">
        各リサンプルから統計量 → 分布化
      </text>
    </svg>
  );
}
