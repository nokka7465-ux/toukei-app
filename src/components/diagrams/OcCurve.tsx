import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** OC 曲線(Operating Characteristic Curve)
 * 抜取検査の性能を示す曲線。横軸=ロット不良率、縦軸=合格確率。
 */
export function OcCurve() {
  // 二項分布で OC 曲線を計算
  // 計画 1: n=50, c=2 (抜取 50, 不合格判定 3 個以上)
  // 計画 2: n=100, c=4
  const oc = (n: number, c: number, p: number): number => {
    let prob = 0;
    for (let k = 0; k <= c; k++) {
      let comb = 1;
      for (let i = 0; i < k; i++) comb = (comb * (n - i)) / (i + 1);
      prob += comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
    }
    return prob;
  };

  const ps: number[] = [];
  for (let p = 0; p <= 0.2; p += 0.005) ps.push(p);
  const xToPx = (p: number) => PAD.l + (p / 0.2) * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y) * PLOT_H;

  const path1 = ps
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xToPx(p)} ${yToPx(oc(50, 2, p))}`)
    .join(" ");
  const path2 = ps
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xToPx(p)} ${yToPx(oc(100, 4, p))}`)
    .join(" ");

  // AQL=0.01 (1%)、LTPD=0.10 のマーキング
  const aql = 0.01,
    ltpd = 0.1;

  return (
    <SvgFrame>
      <Axes
        xLabel="ロット不良率 p"
        yLabel="合格確率"
        xToPx={xToPx}
        yToPx={yToPx}
        xTicks={[
          { value: 0, label: "0" },
          { value: 0.05, label: "5%" },
          { value: 0.1, label: "10%" },
          { value: 0.15, label: "15%" },
        ]}
        yTicks={[
          { value: 0, label: "0" },
          { value: 0.5, label: "0.5" },
          { value: 1, label: "1.0" },
        ]}
      />
      <path d={path1} stroke="var(--link)" strokeWidth={1.6} fill="none" />
      <path d={path2} stroke="#dc2626" strokeWidth={1.6} fill="none" />

      {/* AQL/LTPD のマーキング */}
      <line
        x1={xToPx(aql)}
        x2={xToPx(aql)}
        y1={PAD.t}
        y2={PAD.t + PLOT_H}
        stroke="var(--accent-strong)"
        strokeDasharray="2 2"
        strokeWidth={0.8}
      />
      <text
        x={xToPx(aql) + 3}
        y={PAD.t + 12}
        fontSize="9"
        fill="var(--accent-strong)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        AQL=1%
      </text>
      <line
        x1={xToPx(ltpd)}
        x2={xToPx(ltpd)}
        y1={PAD.t}
        y2={PAD.t + PLOT_H}
        stroke="#dc2626"
        strokeDasharray="2 2"
        strokeWidth={0.8}
      />
      <text
        x={xToPx(ltpd) + 3}
        y={PAD.t + 12}
        fontSize="9"
        fill="#dc2626"
        fontFamily="var(--font-noto-sans-jp)"
      >
        LTPD=10%
      </text>

      <g transform={`translate(${PAD.l + PLOT_W - 90}, ${PAD.t + 30})`}>
        <line x1={0} x2={14} y1={0} y2={0} stroke="var(--link)" strokeWidth={2} />
        <text x={18} y={3} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">n=50, c=2</text>
        <line x1={0} x2={14} y1={12} y2={12} stroke="#dc2626" strokeWidth={2} />
        <text x={18} y={15} fontSize="9" fill="var(--foreground)" fontFamily="var(--font-noto-sans-jp)">n=100, c=4</text>
      </g>
    </SvgFrame>
  );
}
