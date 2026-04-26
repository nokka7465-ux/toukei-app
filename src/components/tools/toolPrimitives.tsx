"use client";

export function Field({
  label,
  unit,
  children,
}: {
  label: string;
  unit?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block ui-sans">
      <span className="text-xs text-[var(--muted-strong)] mb-1 block">
        {label} {unit && <span className="text-[var(--muted)]">({unit})</span>}
      </span>
      {children}
    </label>
  );
}

export function NumberInput({
  value,
  onChange,
  step = 0.01,
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
}) {
  return (
    <input
      type="number"
      value={value}
      step={step}
      min={min}
      max={max}
      onChange={(e) => {
        const v = parseFloat(e.target.value);
        if (Number.isFinite(v)) onChange(v);
      }}
      className="w-full px-3 py-2 border border-[var(--page-border-strong)] rounded text-sm bg-[var(--page)] focus:outline-none focus:border-[var(--link)] tabular-nums"
    />
  );
}

export function Result({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="paper rounded p-3 mt-4">
      <div className="text-xs text-[var(--muted-strong)] ui-sans mb-1">
        {label}
      </div>
      <div className="text-xl font-bold tabular-nums">{value}</div>
      {hint && <div className="text-xs text-[var(--muted)] ui-sans mt-1">{hint}</div>}
    </div>
  );
}

// ============ 数値関数 ============

export function phi(z: number): number {
  return Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
}

/** 標準正規 CDF(A&S 26.2.17 近似) */
export function normCdf(z: number): number {
  if (Number.isNaN(z)) return NaN;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = phi(z);
  const p =
    d *
    (0.319381530 * t -
      0.356563782 * t * t +
      1.781477937 * t * t * t -
      1.821255978 * t * t * t * t +
      1.330274429 * t * t * t * t * t);
  return z >= 0 ? 1 - p : p;
}

/** 標準正規 CDF の逆関数(Beasley-Springer-Moro 近似) */
export function normInv(p: number): number {
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  // Acklam の近似
  const a = [
    -3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
    1.38357751867269e2, -3.066479806614716e1, 2.506628277459239,
  ];
  const b = [
    -5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
    6.680131188771972e1, -1.328068155288572e1,
  ];
  const c = [
    -7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];
  const d = [
    7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996,
    3.754408661907416,
  ];
  const pLow = 0.02425;
  const pHigh = 1 - pLow;
  let q: number, r: number;
  if (p < pLow) {
    q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  } else if (p <= pHigh) {
    q = p - 0.5;
    r = q * q;
    return (
      ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) *
        q) /
      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
    );
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return (
      -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
}

/** ガンマ関数の log(Lanczos) */
export function lgamma(x: number): number {
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
}

/** 不完全ガンマ関数 P(a,x) = ∫₀ˣ t^(a-1) e^(-t) dt / Γ(a) */
function gammaP(a: number, x: number): number {
  if (x < 0 || a <= 0) return NaN;
  if (x === 0) return 0;
  if (x < a + 1) {
    // 級数展開
    let ap = a;
    let sum = 1 / a;
    let del = sum;
    for (let i = 1; i < 200; i++) {
      ap += 1;
      del *= x / ap;
      sum += del;
      if (Math.abs(del) < Math.abs(sum) * 3e-12) break;
    }
    return sum * Math.exp(-x + a * Math.log(x) - lgamma(a));
  } else {
    // 連分数(Lentz)
    const fpmin = 1e-300;
    let b = x + 1 - a;
    let c = 1 / fpmin;
    let d = 1 / b;
    let h = d;
    for (let i = 1; i < 200; i++) {
      const an = -i * (i - a);
      b += 2;
      d = an * d + b;
      if (Math.abs(d) < fpmin) d = fpmin;
      c = b + an / c;
      if (Math.abs(c) < fpmin) c = fpmin;
      d = 1 / d;
      const del = d * c;
      h *= del;
      if (Math.abs(del - 1) < 3e-12) break;
    }
    return 1 - Math.exp(-x + a * Math.log(x) - lgamma(a)) * h;
  }
}

/** カイ二乗 CDF */
export function chiSqCdf(x: number, df: number): number {
  return gammaP(df / 2, x / 2);
}

/** Student t CDF(漸化的 Beta 関数を使う簡易実装) */
export function tCdf(t: number, df: number): number {
  // x = df / (df + t²)
  const x = df / (df + t * t);
  // 不完全ベータ関数 I_x(df/2, 1/2)
  const Ix = incompleteBeta(x, df / 2, 0.5);
  if (t >= 0) return 1 - 0.5 * Ix;
  return 0.5 * Ix;
}

/** 不完全ベータ関数(連分数) */
function incompleteBeta(x: number, a: number, b: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const lbeta =
    lgamma(a + b) -
    lgamma(a) -
    lgamma(b) +
    a * Math.log(x) +
    b * Math.log(1 - x);
  const bt = Math.exp(lbeta);
  if (x < (a + 1) / (a + b + 2)) {
    return (bt * betaCf(x, a, b)) / a;
  } else {
    return 1 - (bt * betaCf(1 - x, b, a)) / b;
  }
}

function betaCf(x: number, a: number, b: number): number {
  const fpmin = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < fpmin) d = fpmin;
  d = 1 / d;
  let h = d;
  for (let m = 1; m < 200; m++) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin) d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin) c = fpmin;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin) d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin) c = fpmin;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 3e-12) break;
  }
  return h;
}
