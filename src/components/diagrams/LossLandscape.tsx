export function LossLandscape() {
  // Draw a stylized 2D loss landscape with concentric "level curves",
  // a global minimum, a local minimum, and a saddle.
  return (
    <svg
      viewBox="0 0 360 280"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="損失関数のランドスケープ"
    >
      {/* Background */}
      <rect x="20" y="20" width="320" height="240" fill="rgba(248,250,252,1)" stroke="#94a3b8" strokeWidth="1" />

      {/* Global min: ellipses around (250, 180) */}
      {[60, 50, 38, 26, 14].map((r, i) => (
        <ellipse
          key={`g-${i}`}
          cx="250"
          cy="180"
          rx={r * 1.2}
          ry={r}
          fill="none"
          stroke="#1d4ed8"
          strokeOpacity={0.15 + i * 0.08}
          strokeWidth="1.2"
        />
      ))}
      <circle cx="250" cy="180" r="5" fill="#1d4ed8" />
      <text x="250" y="170" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontWeight="bold">
        Global min
      </text>

      {/* Local min: ellipses around (110, 100) */}
      {[40, 30, 22, 14].map((r, i) => (
        <ellipse
          key={`l-${i}`}
          cx="110"
          cy="100"
          rx={r * 1.1}
          ry={r * 0.9}
          fill="none"
          stroke="#a855f7"
          strokeOpacity={0.15 + i * 0.1}
          strokeWidth="1.2"
        />
      ))}
      <circle cx="110" cy="100" r="4" fill="#a855f7" />
      <text x="110" y="92" textAnchor="middle" fontSize="9" fill="#a855f7" fontWeight="bold">
        Local min
      </text>

      {/* Saddle: hyperbola-ish */}
      <g transform="translate(180, 60)">
        <path d="M -25 0 Q -10 -10 0 0 Q 10 10 25 0" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
        <path d="M 0 -25 Q -10 -10 0 0 Q 10 10 0 25" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
        <circle cx="0" cy="0" r="3" fill="#f59e0b" />
      </g>
      <text x="180" y="50" textAnchor="middle" fontSize="9" fill="#f59e0b" fontWeight="bold">
        Saddle point
      </text>

      {/* Optimization path: from (50, 210) snaking to global min */}
      <path
        d="M 50 210 Q 80 180, 110 160 T 170 130 T 220 160 T 250 180"
        stroke="#10b981"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3 3"
      />
      <circle cx="50" cy="210" r="4" fill="#10b981" />
      <text x="40" y="225" textAnchor="middle" fontSize="9" fill="#10b981" fontWeight="bold">
        Start
      </text>

      {/* Arrow heads on path */}
      <circle cx="170" cy="130" r="2" fill="#10b981" />
      <circle cx="220" cy="160" r="2" fill="#10b981" />

      <text x="180" y="275" textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7">
        勾配降下のパス(緑)・ 局所最適 / 鞍点 / 大域最適
      </text>
    </svg>
  );
}
