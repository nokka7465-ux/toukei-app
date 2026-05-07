/**
 * 重回帰分析の純粋計算ロジック(最大 3 説明変数想定)。
 *
 * 正規方程式  β = (X'X)^{-1} X'y  を素朴に解く。
 * 最大 4 列(切片+3変数)までの 4×4 行列なので、ガウス・ジョルダン法で十分。
 */

import { tCdf } from "@/components/tools/toolPrimitives";

export type RegressionInput = {
  /** 説明変数の名前(順序が列順) */
  names: string[];
  /** 行 = サンプル、列 = [x1, x2, ..., y] (末尾が目的変数) */
  rows: number[][];
};

export type CoefficientResult = {
  name: string;
  estimate: number;
  stdError: number;
  tValue: number;
  pValue: number;
  /** VIF: 切片では NaN */
  vif: number;
};

export type RegressionResult = {
  coefficients: CoefficientResult[];
  /** 決定係数 R² */
  rSquared: number;
  /** 自由度調整 R² */
  adjustedRSquared: number;
  /** 残差標準誤差(σ̂) */
  residualStdError: number;
  /** F 統計量(回帰の有意性) */
  fStatistic: number;
  /** F の p 値(近似) */
  fPValue: number;
  /** サンプル数 */
  n: number;
  /** 説明変数の数(切片を含まず) */
  k: number;
  error?: string;
};

/** CSV / TSV テキストからデータ行列をパースする */
export function parseCsv(text: string): number[][] {
  if (!text.trim()) return [];
  const rows: number[][] = [];
  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const cells = line.split(/[\s,;\t]+/).filter(Boolean);
    const nums = cells.map((c) => Number(c));
    if (nums.every((v) => Number.isFinite(v)) && nums.length > 0) {
      rows.push(nums);
    }
  }
  return rows;
}

// ---------- 行列演算(素朴実装) ----------

function transpose(M: number[][]): number[][] {
  const r = M.length;
  const c = M[0].length;
  const T: number[][] = Array.from({ length: c }, () => new Array(r).fill(0));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) T[j][i] = M[i][j];
  }
  return T;
}

function matMul(A: number[][], B: number[][]): number[][] {
  const ra = A.length;
  const ca = A[0].length;
  const cb = B[0].length;
  const C: number[][] = Array.from({ length: ra }, () => new Array(cb).fill(0));
  for (let i = 0; i < ra; i++) {
    for (let k = 0; k < ca; k++) {
      const a = A[i][k];
      for (let j = 0; j < cb; j++) {
        C[i][j] += a * B[k][j];
      }
    }
  }
  return C;
}

function matVec(A: number[][], v: number[]): number[] {
  const r = A.length;
  const c = A[0].length;
  const out = new Array(r).fill(0);
  for (let i = 0; i < r; i++) {
    let s = 0;
    for (let j = 0; j < c; j++) s += A[i][j] * v[j];
    out[i] = s;
  }
  return out;
}

/** ガウス・ジョルダンによる逆行列。特異の場合は null。 */
function invert(M: number[][]): number[][] | null {
  const n = M.length;
  // [M | I] を作る
  const A: number[][] = M.map((row, i) => {
    const r = row.slice();
    for (let j = 0; j < n; j++) r.push(i === j ? 1 : 0);
    return r;
  });
  for (let col = 0; col < n; col++) {
    // ピボット選択(部分ピボット)
    let pivot = col;
    let maxAbs = Math.abs(A[col][col]);
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(A[r][col]) > maxAbs) {
        maxAbs = Math.abs(A[r][col]);
        pivot = r;
      }
    }
    if (maxAbs < 1e-12) return null;
    if (pivot !== col) [A[col], A[pivot]] = [A[pivot], A[col]];
    const piv = A[col][col];
    for (let j = 0; j < 2 * n; j++) A[col][j] /= piv;
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const factor = A[r][col];
      if (factor === 0) continue;
      for (let j = 0; j < 2 * n; j++) {
        A[r][j] -= factor * A[col][j];
      }
    }
  }
  return A.map((row) => row.slice(n));
}

// ---------- メイン ----------

export function fitMultipleRegression(
  input: RegressionInput,
): RegressionResult {
  const { names, rows } = input;
  const n = rows.length;
  const k = names.length; // 説明変数の数

  if (k < 1 || k > 3) {
    return regressionError("説明変数は 1〜3 個まで対応します。", names);
  }
  if (n < k + 2) {
    return regressionError(
      `サンプル数が不足しています(最低 ${k + 2} 行必要)。`,
      names,
    );
  }
  const expectedCols = k + 1;
  if (rows.some((r) => r.length !== expectedCols)) {
    return regressionError(
      `各行は ${expectedCols} 列(説明変数 ${k} 個 + 目的変数)で入力してください。`,
      names,
    );
  }

  // 設計行列 X (切片列を先頭に)、目的変数 y
  const X: number[][] = rows.map((r) => [1, ...r.slice(0, k)]);
  const y: number[] = rows.map((r) => r[k]);

  const Xt = transpose(X);
  const XtX = matMul(Xt, X);
  const XtXInv = invert(XtX);
  if (!XtXInv) {
    return regressionError(
      "X'X が特異行列です(説明変数間に強い線形従属があります)。",
      names,
    );
  }
  const Xty = matVec(Xt, y);
  const beta = matVec(XtXInv, Xty);

  // 当てはめ値・残差
  const yHat = matVec(X, beta);
  const residuals = y.map((yi, i) => yi - yHat[i]);
  const meanY = y.reduce((s, v) => s + v, 0) / n;
  const ssTotal = y.reduce((s, v) => s + (v - meanY) ** 2, 0);
  const ssRes = residuals.reduce((s, v) => s + v * v, 0);
  const ssReg = Math.max(0, ssTotal - ssRes);

  const dfRes = n - (k + 1);
  const dfReg = k;
  const sigma2 = dfRes > 0 ? ssRes / dfRes : 0;
  const residualStdError = Math.sqrt(sigma2);

  const rSquared = ssTotal > 0 ? 1 - ssRes / ssTotal : 0;
  const adjustedRSquared =
    dfRes > 0 && ssTotal > 0
      ? 1 - (ssRes / dfRes) / (ssTotal / (n - 1))
      : 0;

  // 各係数の標準誤差・t・p
  const coefSE = XtXInv.map((row, i) => Math.sqrt(Math.max(0, row[i] * sigma2)));
  const coefT = beta.map((b, i) =>
    coefSE[i] === 0 ? 0 : b / coefSE[i],
  );
  const coefP = coefT.map((t) =>
    dfRes > 0 ? 2 * (1 - tCdf(Math.abs(t), dfRes)) : NaN,
  );

  // 多重共線性の VIF: 各説明変数 x_j を他の説明変数で回帰した R²_j を求め
  // VIF_j = 1 / (1 − R²_j)
  const vifs: number[] = [NaN]; // 切片用
  for (let j = 0; j < k; j++) {
    vifs.push(computeVif(rows, j, k));
  }

  // 回帰の F 検定
  const msReg = dfReg > 0 ? ssReg / dfReg : 0;
  const msRes = dfRes > 0 ? ssRes / dfRes : 0;
  const fStatistic = msRes > 0 ? msReg / msRes : 0;
  const fPValue =
    dfReg > 0 && dfRes > 0 ? 1 - approxFCdf(fStatistic, dfReg, dfRes) : NaN;

  const labels = ["(切片)", ...names];
  const coefficients: CoefficientResult[] = beta.map((b, i) => ({
    name: labels[i],
    estimate: b,
    stdError: coefSE[i],
    tValue: coefT[i],
    pValue: coefP[i],
    vif: vifs[i],
  }));

  return {
    coefficients,
    rSquared,
    adjustedRSquared,
    residualStdError,
    fStatistic,
    fPValue,
    n,
    k,
  };
}

function regressionError(msg: string, names: string[]): RegressionResult {
  return {
    coefficients: [
      { name: "(切片)", estimate: NaN, stdError: NaN, tValue: NaN, pValue: NaN, vif: NaN },
      ...names.map((nm) => ({
        name: nm,
        estimate: NaN,
        stdError: NaN,
        tValue: NaN,
        pValue: NaN,
        vif: NaN,
      })),
    ],
    rSquared: NaN,
    adjustedRSquared: NaN,
    residualStdError: NaN,
    fStatistic: NaN,
    fPValue: NaN,
    n: 0,
    k: names.length,
    error: msg,
  };
}

/** 説明変数 j を残りの説明変数で回帰し、その R² から VIF を計算する */
function computeVif(rows: number[][], j: number, k: number): number {
  if (k <= 1) return 1; // 説明変数が 1 つだけなら定義上 1
  const otherCols: number[] = [];
  for (let c = 0; c < k; c++) if (c !== j) otherCols.push(c);

  const X: number[][] = rows.map((r) => [1, ...otherCols.map((c) => r[c])]);
  const y: number[] = rows.map((r) => r[j]);
  const Xt = transpose(X);
  const XtX = matMul(Xt, X);
  const inv = invert(XtX);
  if (!inv) return Number.POSITIVE_INFINITY;
  const beta = matVec(inv, matVec(Xt, y));
  const yHat = matVec(X, beta);
  const meanY = y.reduce((s, v) => s + v, 0) / y.length;
  const ssTot = y.reduce((s, v) => s + (v - meanY) ** 2, 0);
  const ssRes = y.reduce((s, v, i) => s + (v - yHat[i]) ** 2, 0);
  const r2 = ssTot > 0 ? 1 - ssRes / ssTot : 0;
  if (r2 >= 0.9999) return Number.POSITIVE_INFINITY;
  return 1 / (1 - r2);
}

/**
 * F 分布 CDF の近似(Wilson-Hilferty 経由)。
 * toolPrimitives の fCdf に依存させると循環依存になりやすいため、ここでは独立な
 * 近似として実装している(p 値が概ね分かれば十分の用途)。
 */
function approxFCdf(F: number, d1: number, d2: number): number {
  if (!Number.isFinite(F) || F <= 0) return 0;
  // Paulson 近似 (Wilson-Hilferty 拡張): z = numerator / denominator
  const n1 = (1 - 2 / (9 * d2)) * Math.cbrt(F) - (1 - 2 / (9 * d1));
  const d = Math.sqrt(
    (2 / (9 * d2)) * Math.cbrt(F * F) + 2 / (9 * d1),
  );
  if (d === 0) return F >= 1 ? 1 : 0;
  const z = n1 / d;
  return stdNormalCdf(z);
}

function stdNormalCdf(z: number): number {
  // Abramowitz & Stegun 26.2.17
  if (Number.isNaN(z)) return NaN;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const phi = Math.exp(-(z * z) / 2) / Math.sqrt(2 * Math.PI);
  const p =
    phi *
    (0.319381530 * t -
      0.356563782 * t * t +
      1.781477937 * t * t * t -
      1.821255978 * t * t * t * t +
      1.330274429 * t * t * t * t * t);
  return z >= 0 ? 1 - p : p;
}

/** UI から呼びやすいよう、サンプル CSV(広告費 / 季節 / 売上) */
export const SAMPLE_REGRESSION_CSV = [
  "# 広告費(万円), 季節指数, 価格(円), 売上(万円)",
  "10, 1.0, 980, 32",
  "12, 1.1, 980, 38",
  "15, 1.2, 980, 45",
  "20, 1.3, 950, 58",
  "8,  0.9, 1000, 26",
  "25, 1.4, 950, 70",
  "18, 1.2, 980, 52",
  "22, 1.3, 950, 64",
  "14, 1.1, 1000, 40",
  "30, 1.5, 920, 82",
  "11, 1.0, 990, 34",
  "16, 1.2, 970, 48",
].join("\n");

export const SAMPLE_REGRESSION_NAMES: [string, string, string] = [
  "広告費",
  "季節指数",
  "価格",
];
