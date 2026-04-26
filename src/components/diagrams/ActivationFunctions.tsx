import { Axes, PAD, PLOT_H, PLOT_W, range, SvgFrame } from "./primitives";

/** 活性化関数の比較: Sigmoid / Tanh / ReLU / Leaky ReLU */
export function ActivationFunctions() {
  const xs = range(-3, 3, 0.05);
  const xMin = -3,
    xMax = 3;
  const xToPx = (x: number) => PAD.l + ((x - xMin) / (xMax - xMin)) * PLOT_W;
  const yMax = 1.2,
    yMin = -1.1;
  const yToPx = (y: number) =>
    PAD.t + (1 - (y - yMin) / (yMax - yMin)) * PLOT_H;

  const sigmoid = (x: number) => 1 / (1 + Math.exp(-x));
  const tanh = (x: number) => Math.tanh(x);
  const relu = (x: number) => Math.max(0, x);
  const leakyRelu = (x: number) => (x >= 0 ? x : 0.1 * x);

  const path = (fn: (x: number) => number) =>
    xs
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fn(x))}`)
      .join(" ");

  return (
    <SvgFrame>
      <Axes
        xLabel="x"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -2, label: "-2" },
          { value: 0, label: "0" },
          { value: 2, label: "2" },
        ]}
        yTicks={[
          { value: -1, label: "-1" },
          { value: 0, label: "0" },
          { value: 1, label: "1" },
        ]}
      />
      {/* y=0 線 */}
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={yToPx(0)}
        y2={yToPx(0)}
        stroke="var(--page-border)"
        strokeDasharray="2 2"
      />
      <path d={path(sigmoid)} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      <path d={path(tanh)} stroke="#f59e0b" strokeWidth={1.6} fill="none" />
      <path d={path(relu)} stroke="#dc2626" strokeWidth={1.6} fill="none" />
      <path d={path(leakyRelu)} stroke="var(--accent-strong)" strokeWidth={1.4} strokeDasharray="3 2" fill="none" />

      <g transform={`translate(${PAD.l + 6}, ${PAD.t + 6})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">Sigmoid</text>
        <line x1={0} x2={14} y1={11} y2={11} stroke="#f59e0b" strokeWidth={2} />
        <text x={18} y={14} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">Tanh</text>
        <line x1={0} x2={14} y1={22} y2={22} stroke="#dc2626" strokeWidth={2} />
        <text x={18} y={25} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">ReLU</text>
        <line x1={0} x2={14} y1={33} y2={33} stroke="var(--accent-strong)" strokeDasharray="3 2" strokeWidth={2} />
        <text x={18} y={36} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">Leaky ReLU</text>
      </g>
    </SvgFrame>
  );
}
