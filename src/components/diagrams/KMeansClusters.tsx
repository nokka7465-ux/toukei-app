export function KMeansClusters() {
  // Hard-coded cluster points and centroids for illustration.
  const clusters = [
    {
      color: "#3b82f6",
      points: [
        [80, 90],
        [100, 110],
        [120, 80],
        [90, 130],
        [110, 100],
        [70, 110],
      ],
      cx: 95,
      cy: 105,
    },
    {
      color: "#ef4444",
      points: [
        [220, 70],
        [240, 100],
        [260, 80],
        [230, 110],
        [250, 60],
        [270, 95],
      ],
      cx: 245,
      cy: 85,
    },
    {
      color: "#10b981",
      points: [
        [160, 200],
        [180, 220],
        [200, 195],
        [170, 235],
        [195, 210],
        [155, 215],
      ],
      cx: 175,
      cy: 213,
    },
  ] as const;

  return (
    <svg
      viewBox="0 0 360 280"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="k-means クラスタリング"
    >
      <rect x="30" y="20" width="320" height="240" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      {clusters.map((c, i) => (
        <g key={i}>
          {c.points.map(([x, y], j) => (
            <circle key={j} cx={x} cy={y} r="5" fill={c.color} opacity="0.7" />
          ))}
          <circle cx={c.cx} cy={c.cy} r="9" fill={c.color} stroke="white" strokeWidth="2.5" />
          <text x={c.cx} y={c.cy + 4} textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">
            ✕
          </text>
        </g>
      ))}
      <text x="40" y="40" fontSize="11" fill="currentColor" opacity="0.7">
        k=3 クラスタ
      </text>
      <text x="40" y="55" fontSize="9" fill="currentColor" opacity="0.55">
        ✕ = 重心(centroid)
      </text>
    </svg>
  );
}
