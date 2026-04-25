import { Axes, PAD, PLOT_H, PLOT_W, range, SvgFrame } from "./primitives";

/** 尤度関数の形と最尤推定点の図示。
 * ベルヌーイ尤度 L(p) = p^k (1-p)^(n-k) の正規化された形を描画。
 * n=10, k=7 → MLE = 0.7
 */
export function LikelihoodMle() {
  const n = 10,
    k = 7;
  const xs = range(0.01, 0.99, 0.01);
  const xToPx = (p: number) => PAD.l + p * PLOT_W;

  // 対数尤度を計算し、最大値で正規化(描画スケーリング)
  const logL = (p: number) => k * Math.log(p) + (n - k) * Math.log(1 - p);
  const mle = k / n;
  const logLMax = logL(mle);
  const L = (p: number) => Math.exp(logL(p) - logLMax);

  const yToPx = (y: number) => PAD.t + (1 - y) * PLOT_H;

  const path = xs
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xToPx(p)} ${yToPx(L(p))}`)
    .join(" ");

  // 95% 尤度区間: L(p)/L(mle) ≥ exp(-1.92) (= χ²(1)/2)
  const threshold = Math.exp(-1.92);
  const inRegion = xs.filter((p) => L(p) >= threshold);
  const lo = inRegion[0];
  const hi = inRegion[inRegion.length - 1];

  return (
    <SvgFrame>
      <Axes
        xLabel="θ(成功確率)"
        yLabel="尤度(正規化)"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 0.5, label: "0.5" },
          { value: mle, label: "MLE" },
          { value: 1, label: "1" },
        ]}
      />
      {/* 尤度曲線 */}
      <path d={path} stroke="var(--link)" strokeWidth={1.8} fill="none" />

      {/* 尤度区間 (95%) */}
      {lo !== undefined && hi !== undefined && (
        <line
          x1={xToPx(lo)}
          x2={xToPx(hi)}
          y1={yToPx(threshold)}
          y2={yToPx(threshold)}
          stroke="#f59e0b"
          strokeWidth={2}
          strokeDasharray="3 2"
        />
      )}

      {/* MLE 縦線 */}
      <line
        x1={xToPx(mle)}
        x2={xToPx(mle)}
        y1={PAD.t}
        y2={yToPx(0)}
        stroke="#dc2626"
        strokeWidth={1}
        strokeDasharray="2 2"
      />
      <circle cx={xToPx(mle)} cy={yToPx(1)} r={3} fill="#dc2626" />
      <text
        x={xToPx(mle)}
        y={yToPx(1) - 6}
        fontSize="9"
        textAnchor="middle"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        最尤推定点
      </text>
      <text
        x={xToPx(0.5)}
        y={PAD.t + PLOT_H - 4}
        fontSize="9"
        fill="#b45309"
        fontFamily="var(--font-noto-sans-jp)"
      >
        ── 95% 尤度区間
      </text>

      <text
        x={xToPx(0.05)}
        y={PAD.t + 14}
        fontSize="9"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        n=10, k=7 のベルヌーイ尤度
      </text>
    </SvgFrame>
  );
}
