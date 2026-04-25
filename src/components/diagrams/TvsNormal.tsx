import { Axes, PAD, PLOT_H, PLOT_W, phi, range, SvgFrame } from "./primitives";

/** t 分布(自由度 3 と 30)と標準正規分布の比較 */
export function TvsNormal() {
  const xs = range(-4, 4, 0.05);
  const yMax = phi(0) * 1.1;
  const xToPx = (z: number) => PAD.l + ((z + 4) / 8) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;

  // ガンマ関数の近似(Stirling・小整数 + 半整数)
  const lgamma = (x: number): number => {
    // Lanczos 近似
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

  const tPdf = (x: number, nu: number): number => {
    const log =
      lgamma((nu + 1) / 2) -
      lgamma(nu / 2) -
      0.5 * Math.log(nu * Math.PI) -
      ((nu + 1) / 2) * Math.log(1 + (x * x) / nu);
    return Math.exp(log);
  };

  const path = (fn: (x: number) => number) =>
    xs
      .map((z, i) => `${i === 0 ? "M" : "L"} ${xToPx(z)} ${yToPx(fn(z))}`)
      .join(" ");

  return (
    <SvgFrame>
      <Axes
        xLabel="t / z"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: -3, label: "-3" },
          { value: 0, label: "0" },
          { value: 3, label: "3" },
        ]}
      />
      <path d={path((x) => tPdf(x, 3))} stroke="#dc2626" strokeWidth={1.5} fill="none" />
      <path d={path((x) => tPdf(x, 30))} stroke="#f59e0b" strokeWidth={1.5} fill="none" />
      <path d={path(phi)} stroke="var(--link)" strokeWidth={1.6} fill="none" />

      <g transform={`translate(${PAD.l + PLOT_W - 110}, ${PAD.t + 4})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">標準正規 N(0,1)</text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#f59e0b" strokeWidth={2} />
        <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">t(自由度 30)</text>
        <line x1={0} x2={14} y1={24} y2={24} stroke="#dc2626" strokeWidth={2} />
        <text x={18} y={27} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">t(自由度 3)</text>
      </g>
    </SvgFrame>
  );
}
