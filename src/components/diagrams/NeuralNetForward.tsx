export function NeuralNetForward() {
  // 3 input -> 4 hidden -> 2 output
  const inputY = [60, 110, 160];
  const hiddenY = [40, 90, 140, 190];
  const outputY = [85, 135];

  const inputX = 50;
  const hiddenX = 180;
  const outputX = 310;

  return (
    <svg
      viewBox="0 0 360 230"
      className="w-full max-w-md h-auto"
      role="img"
      aria-label="ニューラルネットワーク順伝播"
    >
      {/* Connections input -> hidden */}
      {inputY.map((y1, i) =>
        hiddenY.map((y2, j) => (
          <line
            key={`ih-${i}-${j}`}
            x1={inputX}
            y1={y1}
            x2={hiddenX}
            y2={y2}
            stroke="#6b7280"
            strokeWidth="0.8"
            opacity="0.4"
          />
        )),
      )}
      {/* Connections hidden -> output */}
      {hiddenY.map((y1, i) =>
        outputY.map((y2, j) => (
          <line
            key={`ho-${i}-${j}`}
            x1={hiddenX}
            y1={y1}
            x2={outputX}
            y2={y2}
            stroke="#6b7280"
            strokeWidth="0.8"
            opacity="0.4"
          />
        )),
      )}

      {/* Input neurons */}
      {inputY.map((y, i) => (
        <g key={`i-${i}`}>
          <circle cx={inputX} cy={y} r="14" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
          <text x={inputX} y={y + 4} textAnchor="middle" fontSize="11" fill="#1e40af" fontWeight="bold">
            x{i + 1}
          </text>
        </g>
      ))}
      {/* Hidden neurons */}
      {hiddenY.map((y, i) => (
        <g key={`h-${i}`}>
          <circle cx={hiddenX} cy={y} r="14" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" />
          <text x={hiddenX} y={y + 4} textAnchor="middle" fontSize="11" fill="#92400e" fontWeight="bold">
            h{i + 1}
          </text>
        </g>
      ))}
      {/* Output neurons */}
      {outputY.map((y, i) => (
        <g key={`o-${i}`}>
          <circle cx={outputX} cy={y} r="14" fill="#d1fae5" stroke="#10b981" strokeWidth="2" />
          <text x={outputX} y={y + 4} textAnchor="middle" fontSize="11" fill="#065f46" fontWeight="bold">
            y{i + 1}
          </text>
        </g>
      ))}

      <text x={inputX} y={20} textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">
        入力層
      </text>
      <text x={hiddenX} y={20} textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">
        隠れ層 (ReLU)
      </text>
      <text x={outputX} y={20} textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">
        出力層
      </text>

      <text x={180} y={220} textAnchor="middle" fontSize="9" fill="currentColor" opacity="0.7">
        z = Wx + b → 活性化 → 次の層へ
      </text>
    </svg>
  );
}
