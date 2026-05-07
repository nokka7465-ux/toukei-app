/**
 * ベイズ更新の純粋な計算ロジック。
 *
 *   P(H | E) = P(E | H) · P(H) / [ P(E | H) · P(H) + P(E | ¬H) · (1 − P(H)) ]
 *
 * 入力はすべて 0〜1 の確率(感度・偽陽性率も含む)で受け取る。
 * UI 側で % ↔ 比率の変換を行う。
 */

export type BayesInput = {
  /** 事前確率 P(H) (0〜1) */
  prior: number;
  /** 感度 P(E|H) = 真陽性率 (0〜1) */
  sensitivity: number;
  /** 偽陽性率 P(E|¬H) = 1 − 特異度 (0〜1) */
  falsePositiveRate: number;
};

export type BayesResult = {
  /** 事後確率 P(H|E) (0〜1) */
  posterior: number;
  /** 周辺尤度 P(E) (0〜1) */
  marginal: number;
  /** 尤度比 (sensitivity / falsePositiveRate) */
  likelihoodRatio: number;
  /** 仮想 cohortSize 人想定での内訳 */
  breakdown: {
    cohort: number;
    truePositive: number;
    falsePositive: number;
    trueNegative: number;
    falseNegative: number;
  };
  /** 入力エラー(あれば) */
  error?: string;
};

export type BayesPreset = {
  id: string;
  label: string;
  description: string;
  prior: number;
  sensitivity: number;
  falsePositiveRate: number;
};

export const BAYES_PRESETS: readonly BayesPreset[] = [
  {
    id: "rare-disease",
    label: "希少疾患検査",
    description: "有病率 1%、感度 99%、特異度 95% の検査",
    prior: 0.01,
    sensitivity: 0.99,
    falsePositiveRate: 0.05,
  },
  {
    id: "spam-filter",
    label: "迷惑メールフィルタ",
    description: "全メールの 30% がスパム、検出率 95%、誤検出 2%",
    prior: 0.3,
    sensitivity: 0.95,
    falsePositiveRate: 0.02,
  },
  {
    id: "machine-fault",
    label: "機械の故障診断",
    description: "故障率 5%、診断器の感度 90%、偽陽性 8%",
    prior: 0.05,
    sensitivity: 0.9,
    falsePositiveRate: 0.08,
  },
] as const;

export function validateBayesInput(input: BayesInput): string | null {
  const { prior, sensitivity, falsePositiveRate } = input;
  const inRange = (v: number) =>
    Number.isFinite(v) && v >= 0 && v <= 1;
  if (!inRange(prior)) return "事前確率は 0〜100% の範囲で入力してください。";
  if (!inRange(sensitivity)) return "感度は 0〜100% の範囲で入力してください。";
  if (!inRange(falsePositiveRate))
    return "偽陽性率は 0〜100% の範囲で入力してください。";
  return null;
}

export function computeBayes(
  input: BayesInput,
  cohort: number = 10000,
): BayesResult {
  const error = validateBayesInput(input);
  const { prior, sensitivity, falsePositiveRate } = input;

  // 入力エラー時はゼロで返す
  if (error) {
    return {
      posterior: NaN,
      marginal: NaN,
      likelihoodRatio: NaN,
      breakdown: {
        cohort,
        truePositive: 0,
        falsePositive: 0,
        trueNegative: 0,
        falseNegative: 0,
      },
      error,
    };
  }

  const marginal =
    sensitivity * prior + falsePositiveRate * (1 - prior);

  const posterior =
    marginal === 0 ? 0 : (sensitivity * prior) / marginal;

  const likelihoodRatio =
    falsePositiveRate === 0
      ? Number.POSITIVE_INFINITY
      : sensitivity / falsePositiveRate;

  const positives = cohort * prior;
  const negatives = cohort - positives;
  const truePositive = positives * sensitivity;
  const falseNegative = positives - truePositive;
  const falsePositive = negatives * falsePositiveRate;
  const trueNegative = negatives - falsePositive;

  return {
    posterior,
    marginal,
    likelihoodRatio,
    breakdown: {
      cohort,
      truePositive,
      falsePositive,
      trueNegative,
      falseNegative,
    },
  };
}
