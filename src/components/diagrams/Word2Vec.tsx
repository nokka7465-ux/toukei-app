export function Word2Vec() {
  const words: { label: string; x: number; y: number; group: number }[] = [
    { label: "king", x: 80, y: 70, group: 0 },
    { label: "queen", x: 100, y: 110, group: 0 },
    { label: "man", x: 220, y: 70, group: 1 },
    { label: "woman", x: 240, y: 110, group: 1 },
    { label: "Tokyo", x: 90, y: 180, group: 2 },
    { label: "Japan", x: 130, y: 200, group: 2 },
    { label: "Paris", x: 250, y: 180, group: 2 },
    { label: "France", x: 290, y: 200, group: 2 },
  ];
  const colors = ["#3b82f6", "#ef4444", "#10b981"];

  const arrow = (x1: number, y1: number, x2: number, y2: number, c: string) => (
    <g>
      <defs>
        <marker
          id={`ah-${c.slice(1)}`}
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 z" fill={c} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={c}
        strokeWidth="1.5"
        markerEnd={`url(#ah-${c.slice(1)})`}
        opacity="0.7"
      />
    </g>
  );

  return (
    <svg viewBox="0 0 360 240" className="w-full max-w-md h-auto" role="img" aria-label="Word2Vec 埋め込み空間">
      {arrow(80, 70, 220, 70, "#6b7280")}
      {arrow(100, 110, 240, 110, "#6b7280")}
      {arrow(90, 180, 250, 180, "#6b7280")}
      {arrow(130, 200, 290, 200, "#6b7280")}
      {words.map((w, i) => (
        <g key={i}>
          <circle cx={w.x} cy={w.y} r="6" fill={colors[w.group]} stroke="white" strokeWidth="1.5" />
          <text x={w.x + 10} y={w.y + 4} fontSize="11" fill="currentColor" fontWeight="bold">
            {w.label}
          </text>
        </g>
      ))}
      <text x="180" y="20" fontSize="10" textAnchor="middle" fill="currentColor" opacity="0.75">
        king − man + woman ≈ queen / Tokyo : Japan = Paris : France
      </text>
      <text x="180" y="232" fontSize="9" textAnchor="middle" fill="currentColor" opacity="0.6">
        意味的な関係がベクトル空間の方向として現れる
      </text>
    </svg>
  );
}
