export function PrCurve() {
  const W = 360, H = 260;
  const padL = 50, padB = 40, padT = 30, padR = 20;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;

  // PR curve sample points: realistic shape — Precision drops as Recall increases
  const goodPts: [number, number][] = [
    [0.0, 1.0], [0.1, 0.98], [0.2, 0.97], [0.3, 0.95], [0.4, 0.92],
    [0.5, 0.88], [0.6, 0.82], [0.7, 0.74], [0.8, 0.62], [0.9, 0.45], [1.0, 0.20],
  ];
  const baselinePts: [number, number][] = [[0.0, 0.3], [1.0, 0.3]];

  const x = (r: number) => padL + r * plotW;
  const y = (p: number) => padT + (1 - p) * plotH;

  const path = (pts: [number, number][]) =>
    pts.map(([r, p], i) => `${i === 0 ? "M" : "L"}${x(r)},${y(p)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md h-auto" role="img" aria-label="Precision-Recall Curve">
      <text x={W / 2} y="18" fontSize="11" fontWeight="bold" fill="currentColor" textAnchor="middle">
        PR 曲線(Precision-Recall)
      </text>

      {/* Axes */}
      <line x1={padL} y1={padT + plotH} x2={padL + plotW} y2={padT + plotH} stroke="#6b7280" />
      <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="#6b7280" />

      {/* Tick labels */}
      {[0, 0.5, 1].map((v) => (
        <g key={`x-${v}`}>
          <text x={x(v)} y={padT + plotH + 14} fontSize="9" fill="currentColor" textAnchor="middle">{v}</text>
        </g>
      ))}
      {[0, 0.5, 1].map((v) => (
        <g key={`y-${v}`}>
          <text x={padL - 6} y={y(v) + 3} fontSize="9" fill="currentColor" textAnchor="end">{v}</text>
        </g>
      ))}

      {/* Axis labels */}
      <text x={padL + plotW / 2} y={H - 8} fontSize="10" fill="currentColor" textAnchor="middle">Recall</text>
      <text x={14} y={padT + plotH / 2} fontSize="10" fill="currentColor" textAnchor="middle" transform={`rotate(-90 14 ${padT + plotH / 2})`}>Precision</text>

      {/* Baseline */}
      <path d={path(baselinePts)} stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      <text x={x(0.95)} y={y(0.3) - 5} fontSize="9" fill="#6b7280" textAnchor="end">ランダム(=陽性率)</text>

      {/* PR curve */}
      <path d={path(goodPts)} stroke="#3b82f6" strokeWidth="2.5" fill="none" />

      {/* AP marker */}
      <text x={x(0.4)} y={y(0.92) - 6} fontSize="9" fill="#3b82f6" fontWeight="bold">良い分類器(高 AP)</text>

      <text x={W / 2} y={H - 24} fontSize="9" fill="currentColor" textAnchor="middle" opacity="0.7">
        不均衡データの評価には ROC より PR が適切
      </text>
    </svg>
  );
}
