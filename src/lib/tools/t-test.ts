/**
 * t 検定の純粋計算ロジック。
 *
 * 種類:
 *   - one-sample        : x̄ と帰無仮説 μ₀ の比較
 *   - two-sample        : 対応なし(Welch の近似式)
 *   - paired            : 対応あり(差の検定)
 *
 * t 分布 CDF は toolPrimitives の tCdf を再利用する。
 */

import { tCdf, normInv } from "@/components/tools/toolPrimitives";

export type TestKind = "one-sample" | "two-sample" | "paired";
export type TestSide = "two" | "right" | "left";

export type OneSampleInput = {
  kind: "one-sample";
  mean: number;
  sd: number;
  n: number;
  mu0: number;
  alpha: number;
  side: TestSide;
};

export type TwoSampleInput = {
  kind: "two-sample";
  mean1: number;
  sd1: number;
  n1: number;
  mean2: number;
  sd2: number;
  n2: number;
  alpha: number;
  side: TestSide;
};

export type PairedInput = {
  kind: "paired";
  meanDiff: number;
  sdDiff: number;
  n: number;
  alpha: number;
  side: TestSide;
};

export type TTestInput = OneSampleInput | TwoSampleInput | PairedInput;

export type TTestResult = {
  /** 検定統計量 t */
  t: number;
  /** 自由度 */
  df: number;
  /** p 値(side に応じた) */
  pValue: number;
  /** 効果の点推定値(差) */
  estimate: number;
  /** 標準誤差 */
  stdError: number;
  /** 1-α 信頼区間 [lo, hi] */
  ci: [number, number];
  /** 棄却の判断 */
  rejected: boolean;
  /** 人間向けの結論文 */
  conclusion: string;
  error?: string;
};

export type TTestPreset = {
  id: string;
  label: string;
  description: string;
  input: TTestInput;
};

export const T_TEST_PRESETS: readonly TTestPreset[] = [
  {
    id: "one-sample-iq",
    label: "IQ が 100 と異なるか?",
    description: "標本平均 105、SD 15、n = 30、帰無仮説 μ₀ = 100。",
    input: {
      kind: "one-sample",
      mean: 105,
      sd: 15,
      n: 30,
      mu0: 100,
      alpha: 0.05,
      side: "two",
    },
  },
  {
    id: "two-sample-class",
    label: "授業 A と B の点数差",
    description: "A: μ̂=72, SD=10, n=25 / B: μ̂=68, SD=12, n=28",
    input: {
      kind: "two-sample",
      mean1: 72,
      sd1: 10,
      n1: 25,
      mean2: 68,
      sd2: 12,
      n2: 28,
      alpha: 0.05,
      side: "two",
    },
  },
  {
    id: "paired-bp",
    label: "投薬前後の血圧変化",
    description: "差の平均 -8 mmHg、差の SD 12、n = 20",
    input: {
      kind: "paired",
      meanDiff: -8,
      sdDiff: 12,
      n: 20,
      alpha: 0.05,
      side: "two",
    },
  },
] as const;

// ---------- 計算 ----------

export function runTTest(input: TTestInput): TTestResult {
  const validation = validate(input);
  if (validation) {
    return errorResult(validation);
  }

  if (input.kind === "one-sample") return oneSample(input);
  if (input.kind === "paired") return paired(input);
  return twoSampleWelch(input);
}

function validate(input: TTestInput): string | null {
  if (input.alpha <= 0 || input.alpha >= 0.5) {
    return "有意水準 α は 0 < α < 0.5 で入力してください。";
  }
  if (input.kind === "one-sample") {
    if (input.n < 2) return "サンプルサイズは 2 以上が必要です。";
    if (input.sd <= 0) return "標準偏差は正の値を入力してください。";
  } else if (input.kind === "paired") {
    if (input.n < 2) return "サンプルサイズは 2 以上が必要です。";
    if (input.sdDiff <= 0) return "差の標準偏差は正の値を入力してください。";
  } else {
    if (input.n1 < 2 || input.n2 < 2)
      return "各群のサンプルサイズは 2 以上が必要です。";
    if (input.sd1 <= 0 || input.sd2 <= 0)
      return "標準偏差は両群とも正の値を入力してください。";
  }
  return null;
}

function oneSample(i: OneSampleInput): TTestResult {
  const se = i.sd / Math.sqrt(i.n);
  const estimate = i.mean - i.mu0;
  const t = se === 0 ? 0 : estimate / se;
  const df = i.n - 1;
  const p = pValueFromT(t, df, i.side);
  const ci = confidenceInterval(estimate, se, df, i.alpha);
  const rejected = p < i.alpha;
  return {
    t,
    df,
    pValue: p,
    estimate,
    stdError: se,
    ci,
    rejected,
    conclusion: makeConclusion(rejected, i.alpha, i.side, "1標本"),
  };
}

function paired(i: PairedInput): TTestResult {
  const se = i.sdDiff / Math.sqrt(i.n);
  const t = se === 0 ? 0 : i.meanDiff / se;
  const df = i.n - 1;
  const p = pValueFromT(t, df, i.side);
  const ci = confidenceInterval(i.meanDiff, se, df, i.alpha);
  const rejected = p < i.alpha;
  return {
    t,
    df,
    pValue: p,
    estimate: i.meanDiff,
    stdError: se,
    ci,
    rejected,
    conclusion: makeConclusion(rejected, i.alpha, i.side, "対応あり"),
  };
}

function twoSampleWelch(i: TwoSampleInput): TTestResult {
  const v1 = (i.sd1 * i.sd1) / i.n1;
  const v2 = (i.sd2 * i.sd2) / i.n2;
  const se = Math.sqrt(v1 + v2);
  const estimate = i.mean1 - i.mean2;
  const t = se === 0 ? 0 : estimate / se;
  // Welch-Satterthwaite の自由度
  const num = (v1 + v2) ** 2;
  const den = (v1 * v1) / (i.n1 - 1) + (v2 * v2) / (i.n2 - 1);
  const df = den > 0 ? num / den : i.n1 + i.n2 - 2;
  const p = pValueFromT(t, df, i.side);
  const ci = confidenceInterval(estimate, se, df, i.alpha);
  const rejected = p < i.alpha;
  return {
    t,
    df,
    pValue: p,
    estimate,
    stdError: se,
    ci,
    rejected,
    conclusion: makeConclusion(rejected, i.alpha, i.side, "対応なし2標本"),
  };
}

function pValueFromT(t: number, df: number, side: TestSide): number {
  if (!Number.isFinite(t) || df <= 0) return NaN;
  if (side === "two") return 2 * (1 - tCdf(Math.abs(t), df));
  if (side === "right") return 1 - tCdf(t, df);
  return tCdf(t, df);
}

/**
 * 1-α 両側信頼区間。t の分位点が必要だが、df が大きければ正規近似で十分。
 * df ≤ 30 のときは二分法で逆関数を求める。
 */
function confidenceInterval(
  estimate: number,
  se: number,
  df: number,
  alpha: number,
): [number, number] {
  const tCrit = tInverse(1 - alpha / 2, df);
  return [estimate - tCrit * se, estimate + tCrit * se];
}

function tInverse(p: number, df: number): number {
  if (!Number.isFinite(df) || df <= 0) return NaN;
  if (df > 100) {
    // 正規近似で十分
    return normInv(p);
  }
  // 二分法: p ∈ (0,1) を満たす t を探す
  let lo = -50;
  let hi = 50;
  for (let i = 0; i < 80; i++) {
    const mid = (lo + hi) / 2;
    const cdf = tCdf(mid, df);
    if (cdf < p) lo = mid;
    else hi = mid;
    if (hi - lo < 1e-7) break;
  }
  return (lo + hi) / 2;
}

function makeConclusion(
  rejected: boolean,
  alpha: number,
  side: TestSide,
  kindLabel: string,
): string {
  const sideLabel =
    side === "two" ? "両側" : side === "right" ? "右片側" : "左片側";
  const a = `${kindLabel} t 検定(${sideLabel}, α=${alpha})`;
  if (rejected) {
    return `${a}: 帰無仮説を棄却。差は統計的に有意。`;
  }
  return `${a}: 帰無仮説を棄却できない。差は有意ではない。`;
}

function errorResult(message: string): TTestResult {
  return {
    t: NaN,
    df: NaN,
    pValue: NaN,
    estimate: NaN,
    stdError: NaN,
    ci: [NaN, NaN],
    rejected: false,
    conclusion: message,
    error: message,
  };
}
