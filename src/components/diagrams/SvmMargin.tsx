export function SvmMargin() {
  // Class +1 (blue) on left, Class -1 (red) on right
  const positive = [
    [60, 80],
    [80, 110],
    [50, 140],
    [90, 70],
    [70, 160],
  ];
  const negative = [
    [240, 90],
    [220, 130],
    [260, 70],
    [230, 170],
    [270, 140],
  ];

  return (
    <svg
      viewBox="0 0 320 240"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="SVM のマージン最大化"
    >
      {/* Margin bands */}
      <rect x="120" y="20" width="80" height="200" fill="#a5b4fc" opacity="0.18" />
      {/* Decision boundary */}
      <line x1="160" y1="20" x2="160" y2="220" stroke="#1f2937" strokeWidth="2" />
      {/* Margin lines */}
      <line x1="120" y1="20" x2="120" y2="220" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 4" />
      <line x1="200" y1="20" x2="200" y2="220" stroke="#6b7280" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Margin double arrow */}
      <line x1="120" y1="200" x2="200" y2="200" stroke="#374151" strokeWidth="1" />
      <text x="160" y="215" textAnchor="middle" fontSize="10" fill="currentColor">
        マージン
      </text>

      {/* Points */}
      {positive.map(([x, y], i) => (
        <circle key={`p${i}`} cx={x} cy={y} r="6" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
      ))}
      {negative.map(([x, y], i) => (
        <rect
          key={`n${i}`}
          x={x - 5}
          y={y - 5}
          width="10"
          height="10"
          fill="#ef4444"
          stroke="white"
          strokeWidth="1.5"
        />
      ))}

      {/* Support vectors highlighted */}
      <circle cx="120" cy="80" r="9" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <circle cx="120" cy="160" r="9" fill="none" stroke="#3b82f6" strokeWidth="2" />
      <rect x="195" y="85" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="2" />

      <text x="40" y="35" fontSize="10" fill="#3b82f6" fontWeight="bold">
        ● Class +1
      </text>
      <text x="240" y="35" fontSize="10" fill="#ef4444" fontWeight="bold">
        ■ Class -1
      </text>
      <text x="160" y="13" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7">
        決定境界 (w·x + b = 0)
      </text>
    </svg>
  );
}
