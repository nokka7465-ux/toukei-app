export function QLearningGrid() {
  // 4x4 grid; each cell has its 4-direction Q-values shown as small triangles.
  const size = 60;
  const ox = 40;
  const oy = 30;
  // Hard-coded Q values per cell (0..15) and direction (up, right, down, left).
  // Higher near goal (cell 15, bottom-right).
  const q: number[][] = [
    [0.1, 0.2, 0.0, 0.0], // 0
    [0.1, 0.3, 0.0, 0.1], // 1
    [0.2, 0.4, 0.0, 0.2], // 2
    [0.2, 0.0, 0.5, 0.3], // 3
    [0.0, 0.3, 0.0, 0.0], // 4
    [0.2, 0.4, 0.1, 0.2], // 5
    [0.3, 0.5, 0.2, 0.3], // 6
    [0.4, 0.0, 0.6, 0.4], // 7
    [0.0, 0.4, 0.0, 0.0], // 8
    [0.3, 0.5, 0.2, 0.3], // 9
    [0.4, 0.6, 0.3, 0.4], // 10
    [0.5, 0.0, 0.8, 0.5], // 11
    [0.0, 0.5, 0.0, 0.0], // 12
    [0.4, 0.6, 0.0, 0.0], // 13
    [0.5, 0.8, 0.0, 0.0], // 14
    [0.0, 0.0, 0.0, 0.0], // 15: goal
  ];
  const heatColor = (v: number) => {
    const t = Math.min(Math.max(v, 0), 1);
    return `rgba(59, 130, 246, ${0.15 + t * 0.55})`;
  };
  return (
    <svg
      viewBox="0 0 320 300"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="Q-Learning のグリッド"
    >
      {q.map((qs, idx) => {
        const r = Math.floor(idx / 4);
        const c = idx % 4;
        const x = ox + c * size;
        const y = oy + r * size;
        const isGoal = idx === 15;
        const isStart = idx === 0;
        return (
          <g key={idx}>
            {/* Up triangle */}
            <polygon
              points={`${x + size / 2},${y + 4} ${x + size / 2 - 8},${y + 18} ${x + size / 2 + 8},${y + 18}`}
              fill={heatColor(qs[0])}
              stroke="#94a3b8"
              strokeWidth="0.5"
            />
            {/* Right triangle */}
            <polygon
              points={`${x + size - 4},${y + size / 2} ${x + size - 18},${y + size / 2 - 8} ${x + size - 18},${y + size / 2 + 8}`}
              fill={heatColor(qs[1])}
              stroke="#94a3b8"
              strokeWidth="0.5"
            />
            {/* Down triangle */}
            <polygon
              points={`${x + size / 2},${y + size - 4} ${x + size / 2 - 8},${y + size - 18} ${x + size / 2 + 8},${y + size - 18}`}
              fill={heatColor(qs[2])}
              stroke="#94a3b8"
              strokeWidth="0.5"
            />
            {/* Left triangle */}
            <polygon
              points={`${x + 4},${y + size / 2} ${x + 18},${y + size / 2 - 8} ${x + 18},${y + size / 2 + 8}`}
              fill={heatColor(qs[3])}
              stroke="#94a3b8"
              strokeWidth="0.5"
            />
            {/* Cell border */}
            <rect
              x={x}
              y={y}
              width={size}
              height={size}
              fill={isGoal ? "rgba(34,197,94,0.2)" : "none"}
              stroke="#1f2937"
              strokeWidth="1"
            />
            {isGoal && (
              <text x={x + size / 2} y={y + size / 2 + 4} textAnchor="middle" fontSize="14">
                🏁
              </text>
            )}
            {isStart && (
              <text x={x + size / 2} y={y + size / 2 + 4} textAnchor="middle" fontSize="14">
                🚶
              </text>
            )}
          </g>
        );
      })}
      <text x="40" y="20" fontSize="11" fill="currentColor">
        4×4 グリッドの Q 値(濃い青 = 高 Q)
      </text>
      <text x="40" y="290" fontSize="9" fill="currentColor" opacity="0.7">
        各セル内の 4 三角 = 上 / 右 / 下 / 左 の Q 値
      </text>
    </svg>
  );
}
