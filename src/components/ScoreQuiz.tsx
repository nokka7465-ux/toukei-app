"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MixedText } from "@/components/MixedText";

type ScoreQuestion = {
  id: string;
  /** 4=入門, 3=基礎, 2=応用, 1=発展(難易度バンド) */
  level: 4 | 3 | 2 | 1;
  category: "記述統計" | "確率" | "推定" | "検定" | "回帰" | "ML";
  question: string;
  choices: string[];
  correctIndex: number;
  explanation: string;
};

const QUESTIONS: ScoreQuestion[] = [
  // === 入門レベル(4級相当) — easy ===
  {
    id: "s-q1",
    level: 4,
    category: "記述統計",
    question: "5 個のデータ 3, 5, 7, 9, 11 の平均値はいくらか。",
    choices: ["5", "6", "7", "8"],
    correctIndex: 2,
    explanation: "(3+5+7+9+11)/5 = 35/5 = 7。",
  },
  {
    id: "s-q2",
    level: 4,
    category: "確率",
    question: "サイコロ 1 個を振って偶数の目が出る確率はいくらか。",
    choices: ["1/6", "1/3", "1/2", "2/3"],
    correctIndex: 2,
    explanation: "偶数の目は 2,4,6 の 3 通り。3/6 = 1/2。",
  },
  {
    id: "s-q3",
    level: 4,
    category: "記述統計",
    question:
      "外れ値の影響を受けにくい代表値として最も適切なのは次のうちどれか。",
    choices: ["平均値", "中央値", "標準偏差", "分散"],
    correctIndex: 1,
    explanation:
      "中央値は順序統計量で外れ値の影響を受けない。年収など歪んだ分布で代表値として使う。",
  },

  // === 3級レベル — easy-medium ===
  {
    id: "s-q4",
    level: 3,
    category: "記述統計",
    question:
      "データ 2, 4, 6, 8, 10 の標本分散(n で割る) はいくらか。",
    choices: ["4", "6", "8", "10"],
    correctIndex: 2,
    explanation:
      "平均 6。偏差 -4,-2,0,2,4。2 乗和 16+4+0+4+16=40。40/5=8。",
  },
  {
    id: "s-q5",
    level: 3,
    category: "確率",
    question:
      "二項分布 $X \\sim B(10, 0.3)$ の期待値はいくらか。",
    choices: ["3", "5", "7", "10"],
    correctIndex: 0,
    explanation: "二項分布の期待値は np = 10 × 0.3 = 3。",
  },
  {
    id: "s-q6",
    level: 3,
    category: "推定",
    question:
      "母平均 95% 信頼区間の幅を半分にしたい。標本サイズはどうするか。",
    choices: ["2 倍", "3 倍", "4 倍", "10 倍"],
    correctIndex: 2,
    explanation:
      "信頼区間幅は $\\sigma/\\sqrt n$ に比例。幅を半分に → $\\sqrt n$ を 2 倍 → $n$ を 4 倍。",
  },
  {
    id: "s-q7",
    level: 3,
    category: "検定",
    question:
      "両側 5% の z 検定における棄却条件として正しいものはどれか。",
    choices: [
      "$|Z| \\geq 1.645$",
      "$|Z| \\geq 1.96$",
      "$|Z| \\geq 2.576$",
      "$Z \\geq 1.96$",
    ],
    correctIndex: 1,
    explanation: "両側 5% は両裾各 2.5%。$z_{0.025} = 1.96$。",
  },

  // === 2級レベル — medium ===
  {
    id: "s-q8",
    level: 2,
    category: "検定",
    question:
      "p 値の正しい解釈はどれか。",
    choices: [
      "帰無仮説が正しい確率",
      "対立仮説が正しい確率",
      "帰無仮説のもとで観測値以上に極端な値が出る確率",
      "標本平均が母平均と一致する確率",
    ],
    correctIndex: 2,
    explanation:
      "p 値は条件付き確率 P(極端なデータ | H₀)。『H₀ が正しい確率』ではない。",
  },
  {
    id: "s-q9",
    level: 2,
    category: "回帰",
    question:
      "決定係数 $R^2$ について正しい記述はどれか。",
    choices: [
      "$R^2$ は -1 から 1 の範囲",
      "$R^2$ が 1 に近いほど当てはまりが良い",
      "$R^2$ は説明変数を増やすと必ず減る",
      "$R^2$ は p 値と等価",
    ],
    correctIndex: 1,
    explanation:
      "$R^2 = 1 -$ 残差平方和/総平方和。0〜1 で 1 に近いほど当てはまり良。説明変数を増やすと単調に増える(調整 R² で罰則)。",
  },
  {
    id: "s-q10",
    level: 2,
    category: "検定",
    question:
      "Welch の t 検定が等分散仮定の Student t 検定より望ましいのはなぜか。",
    choices: [
      "計算が速いから",
      "分散が異なる場合でも妥当な結果を出すから",
      "標本サイズが小さくて済むから",
      "正規分布を仮定しないから",
    ],
    correctIndex: 1,
    explanation:
      "Welch は等分散を仮定しない。等分散下でも Student と近い結果。だから現代では Welch を最初に使う流派が一般的。",
  },
  {
    id: "s-q11",
    level: 2,
    category: "回帰",
    question:
      "ロジスティック回帰の係数 $\\beta_i$ について正しい解釈はどれか。",
    choices: [
      "$\\beta_i$ がそのままオッズ比",
      "$\\exp(\\beta_i)$ がオッズ比",
      "$\\beta_i$ が確率の変化量",
      "$\\beta_i$ が予測確率",
    ],
    correctIndex: 1,
    explanation:
      "$\\mathrm{logit}(p) = \\beta_0 + \\beta_1 x$ より、$x$ が 1 増えると対数オッズが $\\beta_1$ 増 ⇔ オッズが $\\exp(\\beta_1)$ 倍。",
  },

  // === 準1級〜1級 — hard ===
  {
    id: "s-q12",
    level: 1,
    category: "ML",
    question:
      "PCA(主成分分析) の主成分を求める方法として正しいものはどれか。",
    choices: [
      "目的変数を最小二乗法で回帰",
      "共分散行列の固有値分解",
      "ロジット関数で確率変換",
      "勾配降下法でパラメータ最適化",
    ],
    correctIndex: 1,
    explanation:
      "PCA は共分散行列(または相関行列)のスペクトル分解。固有値の大きい順が主成分。",
  },
  {
    id: "s-q13",
    level: 1,
    category: "確率",
    question:
      "ベイズの定理 $P(H|E) = P(E|H)P(H)/P(E)$ について正しい記述はどれか。",
    choices: [
      "事前確率 $P(H)$ と事後確率 $P(H|E)$ が常に等しい",
      "事前確率 $P(H)$ をデータ $E$ で更新したのが事後確率 $P(H|E)$",
      "$P(H|E) = P(E|H)$ が常に成り立つ",
      "尤度 $P(E|H)$ は確率分布",
    ],
    correctIndex: 1,
    explanation:
      "ベイズ更新の本質: 事前 P(H) → 観測 E → 事後 P(H|E)。確率変数としてパラメータを扱うのがベイズ統計の特徴。",
  },
  {
    id: "s-q14",
    level: 1,
    category: "ML",
    question:
      "Lasso 回帰(L1 正則化)が Ridge 回帰(L2 正則化)と比べて持つ特徴的性質はどれか。",
    choices: [
      "計算が常に速い",
      "係数を完全に 0 にする(=特徴選択)",
      "多重共線性に強い",
      "正則化項がない",
    ],
    correctIndex: 1,
    explanation:
      "L1 は原点で角を持つので最適解が原点付近に張り付き、係数がゼロに。これが特徴選択の効果。多重共線性には Ridge の方が強い。",
  },
  {
    id: "s-q15",
    level: 1,
    category: "ML",
    question:
      "深層学習の学習で SGD・Adam が用いられる主な理由は次のうちどれか。",
    choices: [
      "閉形式解が存在するから",
      "勾配降下法のミニバッチ近似が大規模学習で効率的だから",
      "ベイズ推定の事後分布だから",
      "決定木の分岐基準だから",
    ],
    correctIndex: 1,
    explanation:
      "数億パラメータでは 2 階情報(ヘッセ行列)は計算困難。1 階勾配 + ミニバッチで確率的に降下させる SGD/Adam が現代の標準。",
  },
];

type Result = {
  totalCorrect: number;
  totalQuestions: number;
  byLevel: { 4: { correct: number; total: number }; 3: { correct: number; total: number }; 2: { correct: number; total: number }; 1: { correct: number; total: number } };
  byCategory: Record<string, { correct: number; total: number }>;
  /** 統計偏差値 (50 = 平均、+10/σ) */
  hensachi: number;
  /** 結果を表す称号 */
  rank: { label: string; emoji: string; color: string };
  /** 推奨される次のステップ */
  recommendation: string;
  /** 推奨ルートの級スラッグ */
  recommendedLevel: string;
};

function computeResult(answers: number[]): Result {
  let weightedScore = 0;
  let maxWeight = 0;
  const byLevel = {
    4: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    1: { correct: 0, total: 0 },
  };
  const byCategory: Record<string, { correct: number; total: number }> = {};
  let totalCorrect = 0;

  // 重みづけ: 4 級 = 1, 3 級 = 2, 2 級 = 3, 1 級 = 4
  const levelWeight = { 4: 1, 3: 2, 2: 3, 1: 4 } as const;

  QUESTIONS.forEach((q, i) => {
    const correct = answers[i] === q.correctIndex;
    const w = levelWeight[q.level];
    maxWeight += w;
    if (correct) {
      weightedScore += w;
      totalCorrect += 1;
      byLevel[q.level].correct += 1;
    }
    byLevel[q.level].total += 1;
    if (!byCategory[q.category]) byCategory[q.category] = { correct: 0, total: 0 };
    byCategory[q.category].total += 1;
    if (correct) byCategory[q.category].correct += 1;
  });

  // 割合 [0, 1] → 偏差値: 平均 50、標準偏差 10
  // 経験的キャリブレーション: 50% で偏差値 50、80% で偏差値 65、100% で偏差値 75
  const ratio = weightedScore / Math.max(maxWeight, 1);
  let hensachi: number;
  if (ratio <= 0.5) {
    // 0%-50% を偏差値 30-50 に線形マップ
    hensachi = 30 + (ratio / 0.5) * 20;
  } else {
    // 50%-100% を偏差値 50-75 に線形マップ
    hensachi = 50 + ((ratio - 0.5) / 0.5) * 25;
  }
  hensachi = Math.round(hensachi * 10) / 10;

  // ランク決定
  let rank: Result["rank"];
  if (hensachi >= 70) rank = { label: "上級者", emoji: "🏆", color: "from-rose-500 to-amber-500" };
  else if (hensachi >= 60) rank = { label: "実務レベル", emoji: "🎯", color: "from-violet-500 to-sky-500" };
  else if (hensachi >= 50) rank = { label: "標準レベル", emoji: "📚", color: "from-emerald-500 to-sky-500" };
  else if (hensachi >= 40) rank = { label: "学習中", emoji: "🌱", color: "from-emerald-400 to-emerald-600" };
  else rank = { label: "入門レベル", emoji: "🎈", color: "from-sky-400 to-emerald-400" };

  // 推奨ルート
  let recommendedLevel: string;
  let recommendation: string;
  if (hensachi >= 65) {
    recommendedLevel = "grade-pre1";
    recommendation =
      "統計検定 2 級は十分なレベルです。準 1 級・1 級・E 資格などの上位資格や、専門領域(因果推論・時系列・ベイズ)への挑戦をおすすめします。";
  } else if (hensachi >= 55) {
    recommendedLevel = "grade-2";
    recommendation =
      "統計検定 2 級の合格圏内です。回帰分析・分散分析・ロジスティック回帰など、実務で使える手法をしっかり身につけましょう。";
  } else if (hensachi >= 45) {
    recommendedLevel = "grade-3";
    recommendation =
      "統計検定 3 級レベル。t 検定・信頼区間・カイ二乗検定など、推測統計の中核を体系化すれば 2 級も射程に入ります。";
  } else if (hensachi >= 35) {
    recommendedLevel = "grade-4";
    recommendation =
      "統計検定 4 級レベル。確率分布・標準偏差・期待値などの基礎を、入門編教科書から段階的に固めていくのがおすすめです。";
  } else {
    recommendedLevel = "intro";
    recommendation =
      "入門編から始めるのが最適です。難しい数式は使わず、グラフ・割合・平均などの基本から、ゆっくり統計に慣れていきましょう。";
  }

  return {
    totalCorrect,
    totalQuestions: QUESTIONS.length,
    byLevel,
    byCategory,
    hensachi,
    rank,
    recommendation,
    recommendedLevel,
  };
}

const STORAGE_KEY = "toukei-app:score-history:v1";

type HistoryEntry = {
  date: string;
  hensachi: number;
  totalCorrect: number;
  totalQuestions: number;
};

function saveHistory(result: Result) {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const list: HistoryEntry[] = raw ? JSON.parse(raw) : [];
    list.unshift({
      date: new Date().toISOString(),
      hensachi: result.hensachi,
      totalCorrect: result.totalCorrect,
      totalQuestions: result.totalQuestions,
    });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(list.slice(0, 20)));
  } catch {
    /* noop */
  }
}

function loadHistory(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function ScoreQuiz() {
  const [stage, setStage] = useState<"intro" | "quiz" | "result">("intro");
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUESTIONS.length).fill(null),
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setHistory(loadHistory());
  }, []);

  const result =
    stage === "result"
      ? computeResult(answers.map((a) => (a === null ? -1 : a)))
      : null;

  const goNext = () => {
    if (currentIdx < QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setShowExplanation(false);
    } else {
      // 最終問題後 → 結果へ
      const r = computeResult(answers.map((a) => (a === null ? -1 : a)));
      saveHistory(r);
      setHistory(loadHistory());
      setStage("result");
    }
  };

  const goPrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
      setShowExplanation(false);
    }
  };

  const onSelect = (idx: number) => {
    const next = [...answers];
    next[currentIdx] = idx;
    setAnswers(next);
    setShowExplanation(true);
  };

  const restart = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setCurrentIdx(0);
    setShowExplanation(false);
    setStage("intro");
  };

  if (stage === "intro") {
    return (
      <div className="space-y-6">
        <div className="paper rounded-xl p-7">
          <div className="chapter-eyebrow mb-2">Stat 偏差値診断</div>
          <h2 className="text-2xl font-bold mb-3">
            あなたの統計力を 5 分で数値化
          </h2>
          <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-5">
            <strong>{QUESTIONS.length} 問</strong>
            の段階的な問題に答えるだけで、あなたの統計力を{" "}
            <strong>偏差値</strong>{" "}
            として可視化します。記述統計・確率・推定・検定・回帰・ML までを横断的にカバー。
            終わったら、現在のレベルに合った教科書や検定が自動で推奨されます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 text-xs ui-sans">
            <div className="paper rounded p-3">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] mb-1 font-bold">
                難易度バンド
              </div>
              <div className="leading-relaxed">
                4 級(基礎) / 3 級(標準) / 2 級(応用) / 1 級(発展)
                を バランスよく出題
              </div>
            </div>
            <div className="paper rounded p-3">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] mb-1 font-bold">
                結果の使い方
              </div>
              <div className="leading-relaxed">
                偏差値・カテゴリ別正答率・推奨教科書を表示。履歴は端末内に最大 20 件保存。
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setStage("quiz")}
            className="px-7 py-3 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded-xl font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] shadow-sm transition ui-sans text-sm"
          >
            診断を開始する({QUESTIONS.length} 問・約 5 分) →
          </button>
        </div>

        {history.length > 0 && (
          <div className="paper rounded-xl p-5">
            <div className="chapter-eyebrow mb-2">History</div>
            <h3 className="text-sm font-bold mb-3 ui-sans">過去の診断履歴</h3>
            <ul className="text-xs ui-sans space-y-1.5">
              {history.slice(0, 5).map((h, i) => (
                <li
                  key={i}
                  className="flex items-baseline justify-between gap-3 py-1 border-b border-[var(--page-border)] last:border-0"
                >
                  <span className="text-[var(--muted)] tabular-nums">
                    {h.date.slice(0, 10)}
                  </span>
                  <span className="tabular-nums">
                    {h.totalCorrect}/{h.totalQuestions} 問正解
                  </span>
                  <span className="font-bold text-[var(--link)] tabular-nums">
                    偏差値 {h.hensachi}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  if (stage === "quiz") {
    const q = QUESTIONS[currentIdx];
    const userAnswer = answers[currentIdx];
    const allAnswered = answers.every((a) => a !== null);

    return (
      <div className="space-y-5">
        {/* プログレス */}
        <div className="ui-sans text-xs">
          <div className="flex items-baseline justify-between mb-2">
            <span className="text-[var(--muted)]">
              問題 {currentIdx + 1} / {QUESTIONS.length}
            </span>
            <span className="text-[var(--muted)]">
              {q.level === 4
                ? "★☆☆☆ 基礎"
                : q.level === 3
                  ? "★★☆☆ 標準"
                  : q.level === 2
                    ? "★★★☆ 応用"
                    : "★★★★ 発展"}{" "}
              · {q.category}
            </span>
          </div>
          <div className="h-1.5 bg-[var(--page-border)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--accent)] transition-all"
              style={{
                width: `${((currentIdx + 1) / QUESTIONS.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* 設問 */}
        <article className="paper rounded-xl p-6">
          <div className="text-base leading-relaxed mb-4">
            <MixedText text={q.question} />
          </div>
          <div className="space-y-2">
            {q.choices.map((c, i) => {
              const isSelected = userAnswer === i;
              const isCorrect = i === q.correctIndex;
              const showResult = showExplanation && userAnswer !== null;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => onSelect(i)}
                  disabled={showResult}
                  className={`w-full text-left px-4 py-3 rounded-lg border-2 transition ui-sans text-sm ${
                    showResult && isCorrect
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 dark:border-emerald-600"
                      : showResult && isSelected && !isCorrect
                        ? "border-rose-500 bg-rose-50 dark:bg-rose-900/30 dark:border-rose-600"
                        : isSelected
                          ? "border-[var(--accent)] bg-[var(--highlight)]"
                          : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                  }`}
                >
                  <span
                    className="font-mono text-[10px] mr-2 text-[var(--muted)]"
                    aria-hidden="true"
                  >
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <MixedText text={c} />
                </button>
              );
            })}
          </div>
          {showExplanation && userAnswer !== null && (
            <div className="mt-4 p-4 rounded-lg bg-[var(--background)] border border-[var(--page-border)] text-xs ui-sans leading-relaxed">
              <span className="font-bold text-[var(--link)]">解説: </span>
              <MixedText text={q.explanation} />
            </div>
          )}
        </article>

        {/* ナビゲーション */}
        <div className="flex justify-between gap-3">
          <button
            type="button"
            onClick={goPrev}
            disabled={currentIdx === 0}
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded-lg text-sm ui-sans hover:bg-[var(--page)] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← 戻る
          </button>
          {currentIdx === QUESTIONS.length - 1 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!allAnswered}
              className="px-6 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded-lg font-bold text-sm hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] disabled:opacity-40 disabled:cursor-not-allowed ui-sans"
            >
              結果を見る →
            </button>
          ) : (
            <button
              type="button"
              onClick={goNext}
              disabled={userAnswer === null}
              className="px-6 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded-lg font-bold text-sm hover:bg-[var(--accent)] hover:text-[var(--accent-fg)] disabled:opacity-40 disabled:cursor-not-allowed ui-sans"
            >
              次の問題 →
            </button>
          )}
        </div>
      </div>
    );
  }

  // === 結果画面 ===
  if (!result) return null;
  const accuracy = Math.round((result.totalCorrect / result.totalQuestions) * 100);

  return (
    <div className="space-y-6">
      <article className={`rounded-xl p-7 text-white bg-gradient-to-br ${result.rank.color}`}>
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] opacity-90 mb-1 ui-sans">
              Your Stat 偏差値
            </div>
            <div className="text-6xl font-bold tabular-nums leading-none">
              {result.hensachi}
            </div>
            <div className="text-sm opacity-90 mt-2 ui-sans">
              {result.rank.emoji} {result.rank.label}
            </div>
          </div>
          <div className="text-right ui-sans">
            <div className="text-3xl font-bold tabular-nums">
              {result.totalCorrect} / {result.totalQuestions}
            </div>
            <div className="text-xs opacity-90 mt-1">{accuracy}% 正解</div>
          </div>
        </div>
      </article>

      <article className="paper rounded-xl p-5">
        <div className="chapter-eyebrow mb-2">Recommendation</div>
        <h3 className="text-lg font-bold mb-3">あなたへのおすすめ</h3>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-4">
          {result.recommendation}
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href={`/textbook/${result.recommendedLevel}`}
            className="px-5 py-2.5 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded-lg font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]"
          >
            推奨教科書を読む →
          </Link>
          <Link
            href={`/quiz/${result.recommendedLevel}`}
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            演習問題で練習
          </Link>
          <Link
            href="/roadmap"
            className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
          >
            学習ロードマップ
          </Link>
        </div>
      </article>

      <article className="paper rounded-xl p-5">
        <div className="chapter-eyebrow mb-3">Breakdown</div>
        <h3 className="text-lg font-bold mb-4 ui-sans">難易度別の正答率</h3>
        <ul className="space-y-3 text-sm ui-sans">
          {([4, 3, 2, 1] as const).map((lv) => {
            const stats = result.byLevel[lv];
            if (stats.total === 0) return null;
            const pct = Math.round((stats.correct / stats.total) * 100);
            const color =
              pct >= 70 ? "bg-emerald-500" : pct >= 40 ? "bg-amber-500" : "bg-rose-500";
            return (
              <li key={lv}>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span>
                    <strong>
                      {lv === 4 ? "★☆☆☆ 基礎(4 級相当)" : lv === 3 ? "★★☆☆ 標準(3 級相当)" : lv === 2 ? "★★★☆ 応用(2 級相当)" : "★★★★ 発展(準 1〜1 級)"}
                    </strong>
                  </span>
                  <span className="tabular-nums text-[var(--muted)]">
                    {stats.correct} / {stats.total} ({pct}%)
                  </span>
                </div>
                <div className="h-2 bg-[var(--page-border)] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${color}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>

        <h3 className="text-lg font-bold mt-6 mb-4 ui-sans">カテゴリ別の正答率</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs ui-sans">
          {Object.entries(result.byCategory).map(([cat, s]) => {
            const pct = Math.round((s.correct / s.total) * 100);
            const tone =
              pct >= 70
                ? "border-emerald-300 bg-emerald-50 dark:bg-emerald-900/20"
                : pct >= 40
                  ? "border-amber-300 bg-amber-50 dark:bg-amber-900/20"
                  : "border-rose-300 bg-rose-50 dark:bg-rose-900/20";
            return (
              <li
                key={cat}
                className={`paper rounded p-3 border ${tone}`}
              >
                <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--muted)] font-bold mb-1">
                  {cat}
                </div>
                <div className="text-base font-bold tabular-nums">{pct}%</div>
                <div className="text-[10px] text-[var(--muted)] mt-0.5 tabular-nums">
                  {s.correct} / {s.total}
                </div>
              </li>
            );
          })}
        </ul>
      </article>

      <div className="flex flex-wrap gap-2 ui-sans text-sm">
        <button
          type="button"
          onClick={restart}
          className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
        >
          もう一度診断する
        </button>
        <Link
          href="/diagnose"
          className="px-5 py-2.5 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
        >
          級診断(3 問)も試す
        </Link>
      </div>
    </div>
  );
}
