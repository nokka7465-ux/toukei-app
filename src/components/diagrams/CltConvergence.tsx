import { Axes, PAD, PLOT_H, PLOT_W, SvgFrame } from "./primitives";

/** n=1 / 5 / 30 で標本平均の分布が正規に近づくことの図解。
 * シミュレーションの代わりに、コインの和(離散一様 0/1)の分布を解析的に描画。
 */
export function CltConvergence() {
  // 横は 0..1 (標本平均の値)
  const xToPx = (x: number) => PAD.l + x * PLOT_W;
  const yToPx = (y: number) => PAD.t + (1 - y) * PLOT_H;

  // n=1: 一様分布
  const n1Bars = [
    { x: 0.0, w: 0.5, h: 0.5 },
    { x: 0.5, w: 0.5, h: 0.5 },
  ];
  // n=5: 二項分布(成功確率 0.5, n=5)を 0.2 刻みで描画
  const choose = (n: number, k: number): number => {
    let r = 1;
    for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
    return r;
  };
  const binom = (n: number, k: number, p = 0.5) =>
    choose(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);

  const n5Bars = Array.from({ length: 6 }, (_, k) => ({
    x: k / 5,
    w: 1 / 5,
    h: binom(5, k),
  }));

  // n=30: 正規近似(平均0.5, 分散 0.25/30)
  const sigma = Math.sqrt(0.25 / 30);
  const xs = Array.from({ length: 81 }, (_, i) => i / 80);
  const pdf = (x: number) =>
    Math.exp(-((x - 0.5) ** 2) / (2 * sigma ** 2)) /
    (sigma * Math.sqrt(2 * Math.PI));
  const maxPdf = pdf(0.5);
  // 正規化(高さを 0..1 に揃える)
  const n30Path = xs
    .map(
      (x, i) =>
        `${i === 0 ? "M" : "L"} ${xToPx(x)} ${yToPx(pdf(x) / maxPdf * 0.95)}`,
    )
    .join(" ");

  // 3つの小さなサブプロットとして描画(横並び)
  const subW = (PLOT_W - 16) / 3;

  function renderBars(bars: { x: number; w: number; h: number }[], x0: number) {
    const localXToPx = (x: number) => x0 + x * subW;
    return bars.map((b, i) => {
      const h = b.h * (PLOT_H - 30);
      return (
        <rect
          key={i}
          x={localXToPx(b.x) + 1}
          y={PAD.t + (PLOT_H - 30 - h) + 12}
          width={(b.w * subW) - 2}
          height={h}
          fill="var(--accent)"
          opacity={0.85}
        />
      );
    });
  }

  return (
    <SvgFrame>
      {/* n=1 */}
      <text
        x={PAD.l + subW / 2}
        y={PAD.t + 8}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        n = 1
      </text>
      {renderBars(n1Bars, PAD.l)}

      {/* n=5 */}
      <text
        x={PAD.l + subW + 8 + subW / 2}
        y={PAD.t + 8}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        n = 5
      </text>
      {renderBars(n5Bars, PAD.l + subW + 8)}

      {/* n=30 */}
      <text
        x={PAD.l + 2 * (subW + 8) + subW / 2}
        y={PAD.t + 8}
        fontSize="10"
        textAnchor="middle"
        fill="var(--foreground)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        n = 30(正規型)
      </text>
      <path
        d={n30Path
          .replace(/M\s\S+\s\S+/, (m) => {
            const [, x, y] = m.match(/M\s(\S+)\s(\S+)/) || [];
            return `M ${(parseFloat(x) - PAD.l) / PLOT_W * subW + PAD.l + 2 * (subW + 8)} ${y}`;
          })}
        stroke="transparent"
      />
      {/* シンプルに正規曲線を直接描画 */}
      {(() => {
        const x0 = PAD.l + 2 * (subW + 8);
        const local = xs
          .map(
            (x, i) =>
              `${i === 0 ? "M" : "L"} ${x0 + x * subW} ${yToPx(pdf(x) / maxPdf * 0.95)}`,
          )
          .join(" ");
        return (
          <path d={local} stroke="var(--link)" strokeWidth={1.6} fill="none" />
        );
      })()}

      {/* baseline 線 */}
      {[0, 1, 2].map((i) => (
        <line
          key={`bl-${i}`}
          x1={PAD.l + i * (subW + 8)}
          x2={PAD.l + i * (subW + 8) + subW}
          y1={PAD.t + PLOT_H - 18}
          y2={PAD.t + PLOT_H - 18}
          stroke="var(--page-border-strong)"
        />
      ))}
      <text
        x={PAD.l + PLOT_W / 2}
        y={PAD.t + PLOT_H + 8}
        fontSize="9"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--font-noto-sans-jp)"
      >
        n が大きいほど、標本平均の分布は正規分布に近づく(中心極限定理)
      </text>
    </SvgFrame>
  );
}
