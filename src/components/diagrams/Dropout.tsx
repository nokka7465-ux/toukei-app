export function Dropout() {
  const layerX = [60, 180, 300];
  const inLayer = [50, 95, 140, 185];
  const hidden = [40, 90, 140, 190];
  const drop = new Set([0, 2]);
  const out = [80, 150];

  const lineProps = (active: boolean) => ({
    stroke: active ? "#3b82f6" : "#d1d5db",
    strokeOpacity: active ? 0.55 : 0.35,
    strokeWidth: 1,
  });

  return (
    <svg viewBox="0 0 360 240" className="w-full max-w-md h-auto" role="img" aria-label="Dropout">
      {inLayer.map((y, i) =>
        hidden.map((y2, j) => (
          <line
            key={`l1-${i}-${j}`}
            x1={layerX[0]}
            y1={y}
            x2={layerX[1]}
            y2={y2}
            {...lineProps(!drop.has(j))}
          />
        )),
      )}
      {hidden.map((y, j) =>
        out.map((y2, k) => (
          <line
            key={`l2-${j}-${k}`}
            x1={layerX[1]}
            y1={y}
            x2={layerX[2]}
            y2={y2}
            {...lineProps(!drop.has(j))}
          />
        )),
      )}
      {inLayer.map((y, i) => (
        <circle key={`i${i}`} cx={layerX[0]} cy={y} r="9" fill="#3b82f6" stroke="white" strokeWidth="1.5" />
      ))}
      {hidden.map((y, j) => (
        <g key={`h${j}`}>
          <circle
            cx={layerX[1]}
            cy={y}
            r="11"
            fill={drop.has(j) ? "#9ca3af" : "#a5b4fc"}
            stroke="white"
            strokeWidth="1.5"
            opacity={drop.has(j) ? 0.45 : 1}
          />
          {drop.has(j) && (
            <g stroke="#dc2626" strokeWidth="2">
              <line x1={layerX[1] - 7} y1={y - 7} x2={layerX[1] + 7} y2={y + 7} />
              <line x1={layerX[1] - 7} y1={y + 7} x2={layerX[1] + 7} y2={y - 7} />
            </g>
          )}
        </g>
      ))}
      {out.map((y, k) => (
        <circle key={`o${k}`} cx={layerX[2]} cy={y} r="9" fill="#10b981" stroke="white" strokeWidth="1.5" />
      ))}
      <text x={layerX[0]} y="220" fontSize="10" textAnchor="middle" fill="currentColor">入力層</text>
      <text x={layerX[1]} y="220" fontSize="10" textAnchor="middle" fill="currentColor">隠れ層 (p=0.5)</text>
      <text x={layerX[2]} y="220" fontSize="10" textAnchor="middle" fill="currentColor">出力層</text>
      <text x="180" y="20" fontSize="10" textAnchor="middle" fill="currentColor" opacity="0.7">
        学習時に確率 p で各ニューロンを脱落 → アンサンブル効果で過学習抑制
      </text>
    </svg>
  );
}
