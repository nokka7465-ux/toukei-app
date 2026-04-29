export function AttentionHeatmap() {
  const tokens = ["The", "cat", "sat", "on", "mat"];
  // Hard-coded attention weights (each row sums to 1).
  const weights = [
    [0.5, 0.2, 0.1, 0.1, 0.1],
    [0.1, 0.5, 0.2, 0.1, 0.1],
    [0.1, 0.3, 0.4, 0.1, 0.1],
    [0.1, 0.1, 0.2, 0.4, 0.2],
    [0.1, 0.4, 0.1, 0.1, 0.3],
  ];

  const cell = 40;
  const offsetX = 60;
  const offsetY = 30;

  return (
    <svg
      viewBox="0 0 280 280"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="Self-Attention の重み行列"
    >
      {/* Header tokens (Keys) */}
      {tokens.map((tok, j) => (
        <text
          key={`k-${j}`}
          x={offsetX + j * cell + cell / 2}
          y={offsetY - 6}
          textAnchor="middle"
          fontSize="11"
          fill="currentColor"
          fontWeight="bold"
        >
          {tok}
        </text>
      ))}
      {/* Row labels (Queries) */}
      {tokens.map((tok, i) => (
        <text
          key={`q-${i}`}
          x={offsetX - 8}
          y={offsetY + i * cell + cell / 2 + 4}
          textAnchor="end"
          fontSize="11"
          fill="currentColor"
          fontWeight="bold"
        >
          {tok}
        </text>
      ))}
      {/* Cells */}
      {weights.map((row, i) =>
        row.map((w, j) => {
          const intensity = Math.round(255 - w * 510); // softer mapping
          const fill = `rgb(${Math.max(intensity, 30)}, ${Math.max(intensity + 30, 60)}, ${Math.max(intensity + 80, 200)})`;
          return (
            <g key={`c-${i}-${j}`}>
              <rect
                x={offsetX + j * cell}
                y={offsetY + i * cell}
                width={cell}
                height={cell}
                fill={fill}
                stroke="white"
                strokeWidth="1"
              />
              <text
                x={offsetX + j * cell + cell / 2}
                y={offsetY + i * cell + cell / 2 + 4}
                textAnchor="middle"
                fontSize="10"
                fill={w > 0.35 ? "white" : "#1f2937"}
                fontWeight="bold"
              >
                {w.toFixed(1)}
              </text>
            </g>
          );
        }),
      )}
      <text x={20} y={offsetY + 2 * cell + cell / 2} fontSize="9" fill="currentColor" opacity="0.7" transform="rotate(-90, 20, 130)">
        Query
      </text>
      <text x={offsetX + 2 * cell} y={20} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7">
        Key
      </text>
    </svg>
  );
}
