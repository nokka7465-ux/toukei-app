import { Axes, PAD, PLOT_H, PLOT_W, range, SvgFrame } from "./primitives";

/** 事前 Beta(2,2) → 観測 9 成功 / 1 失敗 → 事後 Beta(11,3) のベイズ更新 */
export function BayesUpdate() {
  const xs = range(0, 1, 0.005);
  const xToPx = (x: number) => PAD.l + x * PLOT_W;

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

  const betaPdf = (x: number, a: number, b: number): number => {
    if (x <= 0 || x >= 1) return 0;
    const log =
      (a - 1) * Math.log(x) +
      (b - 1) * Math.log(1 - x) +
      lgamma(a + b) -
      lgamma(a) -
      lgamma(b);
    return Math.exp(log);
  };

  const prior = (x: number) => betaPdf(x, 2, 2);
  const likelihoodScaled = (x: number) => 8 * Math.pow(x, 9) * Math.pow(1 - x, 1); // 比例で十分(描画用にスケール)
  const posterior = (x: number) => betaPdf(x, 11, 3);

  const yMax = Math.max(...xs.map(posterior)) * 1.1;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;

  const path = (fn: (x: number) => number) =>
    xs
      .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fn(x))}`)
      .join(" ");

  return (
    <SvgFrame>
      <Axes
        xLabel="θ(成功確率)"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 0.5, label: "0.5" },
          { value: 1, label: "1" },
        ]}
      />
      <path d={path(prior)} stroke="var(--muted)" strokeWidth={1.5} fill="none" strokeDasharray="3 2" />
      <path d={path(likelihoodScaled)} stroke="#f59e0b" strokeWidth={1.5} fill="none" />
      <path d={path(posterior)} stroke="var(--link)" strokeWidth={1.8} fill="none" />

      <g transform={`translate(${PAD.l + 8}, ${PAD.t + 8})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--muted)" strokeDasharray="3 2" strokeWidth={1.5} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">事前 Beta(2,2)</text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#f59e0b" strokeWidth={1.5} />
        <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">尤度(9成功 1失敗)</text>
        <line x1={0} x2={14} y1={24} y2={24} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={27} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">事後 Beta(11,3)</text>
      </g>
    </SvgFrame>
  );
}
