export function VaeArchitecture() {
  return (
    <svg
      viewBox="0 0 480 220"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="VAE アーキテクチャ"
    >
      {/* Input */}
      <rect x="20" y="80" width="60" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="4" />
      <text x="50" y="115" textAnchor="middle" fontSize="12" fill="#1e40af" fontWeight="bold">
        x
      </text>
      <text x="50" y="160" textAnchor="middle" fontSize="9" fill="currentColor">
        入力
      </text>

      {/* Encoder */}
      <polygon
        points="100,80 160,90 160,130 100,140"
        fill="#fef3c7"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text x="130" y="115" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">
        Encoder
      </text>

      {/* Mu and Sigma */}
      <rect x="180" y="60" width="60" height="40" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" rx="4" />
      <text x="210" y="84" textAnchor="middle" fontSize="11" fill="#9f1239" fontWeight="bold">
        μ
      </text>
      <rect x="180" y="120" width="60" height="40" fill="#fce7f3" stroke="#ec4899" strokeWidth="1.5" rx="4" />
      <text x="210" y="144" textAnchor="middle" fontSize="11" fill="#9f1239" fontWeight="bold">
        σ
      </text>

      {/* Reparam trick: z = μ + σ * ε */}
      <rect x="270" y="80" width="60" height="60" fill="#e9d5ff" stroke="#a855f7" strokeWidth="2" rx="4" />
      <text x="300" y="110" textAnchor="middle" fontSize="11" fill="#6b21a8" fontWeight="bold">
        z
      </text>
      <text x="300" y="125" textAnchor="middle" fontSize="9" fill="#6b21a8">
        =μ+σε
      </text>
      <text x="300" y="160" textAnchor="middle" fontSize="9" fill="currentColor">
        潜在変数
      </text>

      {/* Decoder */}
      <polygon
        points="350,90 410,80 410,140 350,130"
        fill="#fef3c7"
        stroke="#f59e0b"
        strokeWidth="2"
      />
      <text x="380" y="115" textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">
        Decoder
      </text>

      {/* Output */}
      <rect x="430" y="80" width="40" height="60" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" rx="4" />
      <text x="450" y="115" textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
        x'
      </text>
      <text x="450" y="160" textAnchor="middle" fontSize="9" fill="currentColor">
        再構成
      </text>

      {/* Arrows */}
      <path d="M 80 110 L 100 110" stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 160 100 L 180 80" stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 160 120 L 180 140" stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 240 80 L 270 100" stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 240 140 L 270 120" stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 330 110 L 350 110" stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M 410 110 L 430 110" stroke="#1f2937" strokeWidth="1.5" markerEnd="url(#arrow)" />

      {/* KL divergence label */}
      <text x="210" y="200" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7">
        Loss = 再構成誤差 + KL 発散
      </text>

      <defs>
        <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#1f2937" />
        </marker>
      </defs>
    </svg>
  );
}
