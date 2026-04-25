import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** 二項分布の形が n が増えると正規型に近づくことを示す。 */
export function BinomialShape() {
  const choose = (n: number, k: number): number => {
    let r = 1;
    for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
    return r;
  };
  const binom = (n: number, k: number, p = 0.4) =>
    choose(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);

  const n = 20;
  const p = 0.4;
  const ks = Array.from({ length: n + 1 }, (_, i) => i);
  const probs = ks.map((k) => binom(n, k, p));
  const maxP = Math.max(...probs);

  const xToPx = (k: number) => PAD.l + (k / n) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y / (maxP * 1.1)) * PLOT_H;
  const barW = PLOT_W / (n + 1);

  return (
    <SvgFrame>
      <Axes
        xLabel="成功回数 k"
        yLabel="P(X=k)"
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
      {ks.map((k) => {
        const h = PAD.t + PLOT_H - yToPx(probs[k]);
        return (
          <rect
            key={k}
            x={xToPx(k) - barW * 0.4}
            y={yToPx(probs[k])}
            width={barW * 0.8}
            height={h}
            fill="var(--accent)"
            opacity={0.85}
          />
        );
      })}
      <text
        x={PAD.l + PLOT_W - 8}
        y={PAD.t + 14}
        fontSize="10"
        textAnchor="end"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        n=20, p=0.4
      </text>
      <text
        x={xToPx(n * p)}
        y={yToPx(maxP) - 6}
        fontSize="9"
        textAnchor="middle"
        fill="var(--link)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        平均 np = 8
      </text>
    </SvgFrame>
  );
}
