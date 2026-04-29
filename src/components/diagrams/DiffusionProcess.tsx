export function DiffusionProcess() {
  // Show 5 image placeholders going from clear to noise (forward) and back.
  const stages = 5;
  const width = 60;
  const gap = 20;
  const startX = 30;
  const yTop = 40;
  const yBot = 130;

  // Generate noise dots for each stage.
  const noisePerStage = (stage: number) => {
    // stage 0 = clear, stage stages-1 = pure noise
    const t = stage / (stages - 1);
    const count = Math.floor(t * 30 + 5);
    return Array.from({ length: count }, (_, i) => ({
      x: 5 + Math.random() * (width - 10),
      y: 5 + Math.random() * (width - 10),
      key: `${stage}-${i}`,
    }));
  };

  return (
    <svg
      viewBox="0 0 460 220"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="拡散モデルの順過程と逆過程"
    >
      <text x="230" y="20" textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="bold">
        順過程(forward, ノイズ追加)
      </text>

      {/* Top row: forward */}
      {Array.from({ length: stages }).map((_, i) => {
        const x = startX + i * (width + gap);
        const fade = i / (stages - 1);
        return (
          <g key={`top-${i}`}>
            <rect
              x={x}
              y={yTop}
              width={width}
              height={width}
              fill={`rgba(96, 165, 250, ${1 - fade * 0.85})`}
              stroke="#1f2937"
              strokeWidth="1"
            />
            {noisePerStage(i).map((n) => (
              <circle
                key={n.key}
                cx={x + n.x}
                cy={yTop + n.y}
                r={1.5}
                fill="rgba(0,0,0,0.5)"
              />
            ))}
            <text
              x={x + width / 2}
              y={yTop + width + 14}
              textAnchor="middle"
              fontSize="10"
              fill="currentColor"
            >
              x{i === 0 ? "₀" : i === stages - 1 ? "ₜ" : `${i}`}
            </text>
            {i < stages - 1 && (
              <path
                d={`M ${x + width + 2} ${yTop + width / 2} L ${x + width + gap - 2} ${yTop + width / 2}`}
                stroke="#3b82f6"
                strokeWidth="1.5"
                markerEnd="url(#arrowFwd)"
              />
            )}
          </g>
        );
      })}

      <text x="230" y={yBot - 10} textAnchor="middle" fontSize="11" fill="currentColor" fontWeight="bold">
        逆過程(reverse, ノイズ除去 = 学習)
      </text>

      {/* Bottom row: reverse */}
      {Array.from({ length: stages }).map((_, i) => {
        const x = startX + i * (width + gap);
        const fade = i / (stages - 1);
        return (
          <g key={`bot-${i}`}>
            <rect
              x={x}
              y={yBot}
              width={width}
              height={width}
              fill={`rgba(168, 85, 247, ${1 - fade * 0.85})`}
              stroke="#1f2937"
              strokeWidth="1"
            />
            {noisePerStage(i).map((n) => (
              <circle
                key={`b${n.key}`}
                cx={x + n.x}
                cy={yBot + n.y}
                r={1.5}
                fill="rgba(0,0,0,0.5)"
              />
            ))}
            {i > 0 && (
              <path
                d={`M ${x - 2} ${yBot + width / 2} L ${x - gap + 2} ${yBot + width / 2}`}
                stroke="#a855f7"
                strokeWidth="1.5"
                markerEnd="url(#arrowRev)"
              />
            )}
          </g>
        );
      })}

      <defs>
        <marker
          id="arrowFwd"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
        </marker>
        <marker
          id="arrowRev"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#a855f7" />
        </marker>
      </defs>
    </svg>
  );
}
