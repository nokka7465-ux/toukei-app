/**
 * 図解用の共通プリミティブ。CSS 変数で色を指定し、ダークモードに自動追従。
 * 数値計算は描画時に閉じる(クライアント JS 不要 — SSR で完結)。
 */

export const SVG_W = 360;
export const SVG_H = 220;
export const PAD = { l: 36, r: 14, t: 14, b: 28 };

export const PLOT_W = SVG_W - PAD.l - PAD.r;
export const PLOT_H = SVG_H - PAD.t - PAD.b;

/** 標準正規分布の確率密度 φ(z) */
export function phi(z: number): number {
  return Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
}

/** 任意平均・分散の正規分布の確率密度 */
export function normalPdf(x: number, mu: number, sigma: number): number {
  const z = (x - mu) / sigma;
  return phi(z) / sigma;
}

export function range(start: number, end: number, step: number): number[] {
  const out: number[] = [];
  for (let v = start; v <= end + 1e-9; v += step) out.push(v);
  return out;
}

export function SvgFrame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox={`0 0 ${SVG_W} ${SVG_H}`}
      width="100%"
      style={{ maxWidth: 460 }}
      role="img"
      className="text-[var(--foreground)]"
    >
      {children}
    </svg>
  );
}

export function Axes({
  xLabel,
  yLabel,
  xTicks,
  yTicks,
  xToPx,
  yToPx,
}: {
  xLabel?: string;
  yLabel?: string;
  xTicks: { value: number; label: string }[];
  yTicks?: { value: number; label: string }[];
  xToPx: (v: number) => number;
  yToPx: (v: number) => number;
}) {
  const stroke = "var(--page-border-strong)";
  const muted = "var(--muted)";
  const baselineY = PAD.t + PLOT_H;

  return (
    <g>
      {/* x 軸 */}
      <line
        x1={PAD.l}
        x2={PAD.l + PLOT_W}
        y1={baselineY}
        y2={baselineY}
        stroke={stroke}
        strokeWidth={1}
      />
      {/* y 軸 */}
      <line
        x1={PAD.l}
        x2={PAD.l}
        y1={PAD.t}
        y2={baselineY}
        stroke={stroke}
        strokeWidth={1}
      />
      {/* x 目盛 */}
      {xTicks.map((t, i) => {
        const x = xToPx(t.value);
        return (
          <g key={`xt-${i}`}>
            <line
              x1={x}
              x2={x}
              y1={baselineY}
              y2={baselineY + 4}
              stroke={stroke}
              strokeWidth={1}
            />
            <text
              x={x}
              y={baselineY + 16}
              fontSize="9"
              textAnchor="middle"
              fill={muted}
              fontFamily="var(--font-noto-sans-jp)"
            >
              {t.label}
            </text>
          </g>
        );
      })}
      {/* y 目盛 */}
      {yTicks?.map((t, i) => {
        const y = yToPx(t.value);
        return (
          <g key={`yt-${i}`}>
            <line
              x1={PAD.l - 4}
              x2={PAD.l}
              y1={y}
              y2={y}
              stroke={stroke}
              strokeWidth={1}
            />
            <text
              x={PAD.l - 6}
              y={y + 3}
              fontSize="9"
              textAnchor="end"
              fill={muted}
              fontFamily="var(--font-noto-sans-jp)"
            >
              {t.label}
            </text>
          </g>
        );
      })}
      {xLabel && (
        <text
          x={PAD.l + PLOT_W}
          y={baselineY - 4}
          fontSize="10"
          textAnchor="end"
          fill={muted}
          fontFamily="var(--font-noto-sans-jp)"
        >
          {xLabel}
        </text>
      )}
      {yLabel && (
        <text
          x={PAD.l + 2}
          y={PAD.t + 8}
          fontSize="10"
          fill={muted}
          fontFamily="var(--font-noto-sans-jp)"
        >
          {yLabel}
        </text>
      )}
    </g>
  );
}
