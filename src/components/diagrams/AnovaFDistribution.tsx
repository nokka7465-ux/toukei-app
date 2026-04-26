import { Axes, PAD, PLOT_H, PLOT_W, range, SvgFrame } from "./primitives";

/** F 分布(d1=4, d2=20)と棄却域(α=0.05) */
export function AnovaFDistribution() {
  // ガンマ関数の log
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

  // F 分布の確率密度
  const fPdf = (x: number, d1: number, d2: number): number => {
    if (x <= 0) return 0;
    const log =
      lgamma((d1 + d2) / 2) -
      lgamma(d1 / 2) -
      lgamma(d2 / 2) +
      (d1 / 2) * Math.log(d1) +
      (d2 / 2) * Math.log(d2) +
      (d1 / 2 - 1) * Math.log(x) -
      ((d1 + d2) / 2) * Math.log(d1 * x + d2);
    return Math.exp(log);
  };

  const d1 = 4,
    d2 = 20;
  const xs = range(0.01, 5, 0.02);
  const xToPx = (x: number) => PAD.l + (x / 5) * PLOT_W;

  const ys = xs.map((x) => fPdf(x, d1, d2));
  const yMax = Math.max(...ys) * 1.1;
  const yToPx = (y: number) => PAD.t + (1 - y / yMax) * PLOT_H;

  // F(0.05, 4, 20) ≒ 2.87
  const fCrit = 2.87;

  const linePath = xs
    .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fPdf(x, d1, d2))}`)
    .join(" ");

  // 棄却域(右側)
  const tail = xs.filter((x) => x >= fCrit);
  const tailPath = tail
    .map((x, i) => `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(fPdf(x, d1, d2))}`)
    .join(" ");
  const tailFill = `${tailPath} L ${xToPx(5)} ${yToPx(0)} L ${xToPx(fCrit)} ${yToPx(0)} Z`;

  return (
    <SvgFrame>
      <Axes
        xLabel="F"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 1, label: "1" },
          { value: fCrit, label: "2.87" },
          { value: 4, label: "4" },
        ]}
      />
      <path d={tailFill} fill="#dc2626" opacity={0.55} />
      <path d={linePath} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      <line
        x1={xToPx(fCrit)}
        x2={xToPx(fCrit)}
        y1={PAD.t}
        y2={yToPx(0)}
        stroke="var(--foreground)"
        strokeDasharray="2 2"
      />
      <text
        x={xToPx(fCrit + 0.5)}
        y={yToPx(fPdf(fCrit + 0.3, d1, d2)) - 6}
        fontSize="9"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        棄却域(α=0.05)
      </text>
      <text
        x={PAD.l + PLOT_W - 6}
        y={PAD.t + 12}
        fontSize="9"
        textAnchor="end"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        F(d₁=4, d₂=20)
      </text>
    </SvgFrame>
  );
}
