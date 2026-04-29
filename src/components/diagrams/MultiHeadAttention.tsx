export function MultiHeadAttention() {
  const heads = 4;
  const headWidth = 70;
  const headGap = 12;
  const startX = 30;
  const yMid = 110;
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <svg
      viewBox="0 0 400 240"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="Multi-Head Attention"
    >
      {/* Input X */}
      <rect x="20" y="200" width="80" height="24" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" rx="4" />
      <text x="60" y="216" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
        Input X
      </text>

      {/* Concat output */}
      <rect x="290" y="200" width="100" height="24" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" rx="4" />
      <text x="340" y="216" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">
        Concat + W_O
      </text>

      {/* Heads */}
      {Array.from({ length: heads }).map((_, i) => {
        const x = startX + i * (headWidth + headGap);
        const color = colors[i];
        return (
          <g key={i}>
            {/* Q K V boxes */}
            <rect x={x} y={40} width={headWidth} height={20} fill="white" stroke={color} strokeWidth="1.5" rx="2" />
            <text x={x + headWidth / 2} y={54} textAnchor="middle" fontSize="9" fill={color} fontWeight="bold">
              Q · K^⊤
            </text>

            <rect x={x} y={68} width={headWidth} height={20} fill="white" stroke={color} strokeWidth="1.5" rx="2" />
            <text x={x + headWidth / 2} y={82} textAnchor="middle" fontSize="9" fill={color} fontWeight="bold">
              softmax
            </text>

            <rect x={x} y={96} width={headWidth} height={20} fill="white" stroke={color} strokeWidth="1.5" rx="2" />
            <text x={x + headWidth / 2} y={110} textAnchor="middle" fontSize="9" fill={color} fontWeight="bold">
              · V
            </text>

            <rect x={x} y={130} width={headWidth} height={26} fill={color} opacity="0.85" stroke={color} strokeWidth="1.5" rx="2" />
            <text x={x + headWidth / 2} y={148} textAnchor="middle" fontSize="11" fill="white" fontWeight="bold">
              Head {i + 1}
            </text>

            {/* Lines from input to head */}
            <path
              d={`M 60 200 Q 60 180, ${x + headWidth / 2} 156 Z`}
              stroke={color}
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
            {/* Lines from head to concat */}
            <path
              d={`M ${x + headWidth / 2} 130 Q ${x + headWidth / 2} 180, 340 200 Z`}
              stroke={color}
              strokeWidth="0.8"
              fill="none"
              opacity="0.5"
            />
          </g>
        );
      })}

      <text x="200" y="20" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="bold">
        Multi-Head Self-Attention
      </text>
      <text x="200" y="180" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7">
        各 head が独立に Q ・ K ・ V を計算 → 並列実行 → 結合
      </text>
    </svg>
  );
}
