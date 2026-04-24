"use client";

import { useState } from "react";
import Link from "next/link";

type Question = {
  id: string;
  prompt: string;
  choices: { label: string; score: number }[];
};

const QUESTIONS: Question[] = [
  {
    id: "q1",
    prompt: "Q1. これまでの統計学の学習経験はどのくらいですか?",
    choices: [
      { label: "ほぼ初めて学ぶ", score: 3 },
      { label: "高校で平均・確率を学んだ程度", score: 2 },
      { label: "大学で統計学の入門を受けた", score: 1 },
      { label: "推定・検定・回帰などを既に学んだ", score: 0 },
    ],
  },
  {
    id: "q2",
    prompt: "Q2. 数式・数学への慣れはどのくらいですか?",
    choices: [
      { label: "数式が並ぶと身構える", score: 3 },
      { label: "高校数学Ⅰの範囲なら平気", score: 2 },
      { label: "数学ⅡB・微積分まで使える", score: 1 },
      { label: "線形代数・解析もある程度わかる", score: 0 },
    ],
  },
  {
    id: "q3",
    prompt: "Q3. 統計を学ぶ目的は何ですか?",
    choices: [
      { label: "データの読み方の基礎を固めたい", score: 3 },
      { label: "仕事や趣味でデータを活用したい", score: 2 },
      { label: "実務で推定・検定・回帰を使いたい", score: 1 },
      { label: "数理統計学を本格的に学びたい", score: 0 },
    ],
  },
];

type Recommendation = {
  level: string;
  title: string;
  description: string;
  rationale: string;
};

const RECS: Recommendation[] = [
  {
    level: "grade-4",
    title: "4級",
    description: "高校基礎レベル。データの基本・確率の初歩",
    rationale:
      "まずは基本のキ。代表値・確率・場合の数などをやさしい例で身につけ、統計学の地図を描くところから始めましょう。",
  },
  {
    level: "grade-3",
    title: "3級",
    description: "大学基礎レベル。記述統計と確率分布の基本",
    rationale:
      "分散・標準偏差・確率分布など「統計らしい道具」が一気に登場する級。3級が解ければ、データに関するニュースの読み解きも一段深くなります。",
  },
  {
    level: "grade-2",
    title: "2級",
    description: "推定・検定・回帰など実務でよく使う内容",
    rationale:
      "実務でも研究でも、データ分析の中心になる級です。t 検定・カイ二乗検定・回帰分析まで一通り扱えるようになります。",
  },
  {
    level: "grade-pre1",
    title: "準1級",
    description: "多変量解析・ベイズ・時系列など発展領域",
    rationale:
      "現代的な統計手法が一気に視野に入る級です。ワークブックを軸に学ぶと、データサイエンスの実務にもつながります。",
  },
];

function recommendFromScore(total: number): Recommendation {
  if (total >= 7) return RECS[0]; // 4級
  if (total >= 5) return RECS[1]; // 3級
  if (total >= 2) return RECS[2]; // 2級
  return RECS[3]; // 準1級
}

export function Diagnose() {
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(QUESTIONS.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const allAnswered = answers.every((a) => a !== null);
  const total = answers.reduce<number>((sum, a, i) => {
    if (a === null) return sum;
    return sum + QUESTIONS[i].choices[a].score;
  }, 0);

  const handleSelect = (qIdx: number, cIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qIdx] = cIdx;
      return next;
    });
  };

  const handleReset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    const rec = recommendFromScore(total);
    return (
      <div className="paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Result</div>
        <h2 className="text-2xl font-bold mb-2">
          あなたへのおすすめは <span className="text-[var(--link)]">{rec.title}</span> です
        </h2>
        <p className="text-sm text-[var(--muted)] mb-4 ui-sans">
          {rec.description}
        </p>
        <p className="text-[var(--muted-strong)] leading-loose mb-6">
          {rec.rationale}
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm mb-6">
          <Link
            href={`/textbook/${rec.level}`}
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            {rec.title} の教科書を読む →
          </Link>
          <Link
            href={`/formulas/${rec.level}`}
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            公式集
          </Link>
          <Link
            href={`/quiz/${rec.level}`}
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="text-xs ui-sans text-[var(--link)] hover:underline"
        >
          ← もう一度診断する
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {QUESTIONS.map((q, qIdx) => (
        <div key={q.id} className="paper rounded-lg p-5">
          <div className="font-bold mb-3">{q.prompt}</div>
          <div className="space-y-2 ui-sans text-sm">
            {q.choices.map((choice, cIdx) => {
              const isSelected = answers[qIdx] === cIdx;
              return (
                <button
                  key={cIdx}
                  type="button"
                  onClick={() => handleSelect(qIdx, cIdx)}
                  className={`w-full text-left px-4 py-2.5 rounded border transition cursor-pointer ${
                    isSelected
                      ? "bg-blue-50 border-blue-500 dark:bg-blue-950/40"
                      : "border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                  }`}
                >
                  {choice.label}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-4 pt-2 ui-sans">
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className="px-6 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded hover:bg-[var(--accent-strong)] disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-gray-600 font-bold"
        >
          診断結果を見る
        </button>
      </div>
    </div>
  );
}
