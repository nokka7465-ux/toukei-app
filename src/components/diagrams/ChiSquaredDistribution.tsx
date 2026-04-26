import { Axes, PAD, PLOT_H, PLOT_W, range, SvgFrame } from "./primitives";

/** カイ二乗分布(自由度 k=2, 5, 10) */
export function ChiSquaredDistribution() {
  // ガンマ関数の log(Lanczos)
  const lgamma = (x: number): number => {
    const g = 7;
    const c = [
      0.99999999999980993, 676.5203681218851, -1259.1392167224028,
      771.32342877765313, -176.61502916214059, 12.507343278686905,
      -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
    ];
    if (x < 0.5) {
      return Math.log(Math.PI / Math.sin(Math.PI * x)) - lgamma(1 - x);
    }
    x -= 1;
    let a = c[0];
    const t = x + g + 0.5;
    for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
    return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
  };

  const chiSqPdf = (x: number, k: number): number => {
    if (x <= 0) return 0;
    const log =
      (k / 2 - 1) * Math.log(x) -
      x / 2 -
      (k / 2) * Math.log(2) -
      lgamma(k / 2);
    return Math.exp(log);
  };

  const xs = range(0.05, 22, 0.1);
  const xToPx = (x: number) => PAD.l + (x / 22) * PLOT_W;

  const yMax = 0.5;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;

  const path = (k: number) =>
    xs
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(chiSqPdf(x, k))}`)
      .join(" ");

  return (
    <SvgFrame>
      <Axes
        xLabel="x"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 5, label: "5" },
          { value: 10, label: "10" },
          { value: 15, label: "15" },
          { value: 20, label: "20" },
        ]}
      />
      <path d={path(2)} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      <path d={path(5)} stroke="#f59e0b" strokeWidth={1.6} fill="none" />
      <path d={path(10)} stroke="#dc2626" strokeWidth={1.6} fill="none" />

      <g transform={`translate(${PAD.l + PLOT_W - 80}, ${PAD.t + 8})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">k = 2</text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#f59e0b" strokeWidth={2} />
        <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">k = 5</text>
        <line x1={0} x2={14} y1={24} y2={24} stroke="#dc2626" strokeWidth={2} />
        <text x={18} y={27} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">k = 10</text>
      </g>
    </SvgFrame>
  );
}
