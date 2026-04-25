import type { Metadata } from "next";
import Link from "next/link";
import type { DiagramKind } from "@/types/content";
import { Diagram } from "@/components/diagrams/Diagram";

export const metadata: Metadata = {
  title: "図解で学ぶ統計 ─ 直感を養う 16 種の SVG 図",
  description:
    "正規分布・中心極限定理・回帰直線・ROC 曲線・ベイズ更新・尤度関数まで、統計検定と機械学習で頻出のキー概念を SVG 図解で網羅。明朝体の本文と合わせて『直感』を養えます。",
  openGraph: {
    title: "図解で学ぶ統計 ─ 16 種の SVG 図",
    description:
      "統計検定 4 級〜1 級と関連検定のキー概念を SVG 図解で。",
    type: "article",
  },
};

type FigureEntry = {
  kind: DiagramKind;
  title: string;
  level: string;
  category: string;
  insight: string;
  link: string;
  linkLabel: string;
};

const FIGURES: FigureEntry[] = [
  {
    kind: "histogram-vs-bar",
    title: "ヒストグラム vs 棒グラフ",
    level: "入門・4 級",
    category: "可視化",
    insight: "連続量(隣接)と質的データ(隙間)で形を変える理由。",
    link: "/textbook/grade-4#ch1-sec2",
    linkLabel: "4 級 教科書を読む",
  },
  {
    kind: "boxplot-anatomy",
    title: "箱ひげ図の解剖",
    level: "4 級",
    category: "可視化",
    insight: "5 数要約 + 外れ値が一目でわかる。",
    link: "/textbook/grade-4#ch1-sec2",
    linkLabel: "4 級 教科書を読む",
  },
  {
    kind: "binomial-shape",
    title: "二項分布の形",
    level: "3 級",
    category: "確率分布",
    insight: "$\\mathrm{Bin}(20, 0.4)$ は平均 $np$ あたりに山。",
    link: "/textbook/grade-3#ch3-sec1",
    linkLabel: "3 級 教科書を読む",
  },
  {
    kind: "normal-curve",
    title: "標準正規分布",
    level: "3 級",
    category: "確率分布",
    insight: "±1σ ≒ 68%・±2σ ≒ 95% の経験則。",
    link: "/textbook/grade-3#ch3-sec2",
    linkLabel: "3 級 教科書を読む",
  },
  {
    kind: "clt-convergence",
    title: "中心極限定理の収束",
    level: "3 級",
    category: "推測統計",
    insight: "もとの分布がいびつでも、標本平均は正規型に。",
    link: "/textbook/grade-3#ch3-sec3",
    linkLabel: "3 級 教科書を読む",
  },
  {
    kind: "confidence-interval",
    title: "95% 信頼区間",
    level: "3 級",
    category: "推測統計",
    insight: "繰り返し作った区間の 95% が母平均を含む。",
    link: "/textbook/grade-3#ch3-sec3",
    linkLabel: "3 級 教科書を読む",
  },
  {
    kind: "t-vs-normal",
    title: "t 分布 vs 標準正規",
    level: "2 級",
    category: "確率分布",
    insight: "自由度が小さいほど裾が厚い。",
    link: "/textbook/grade-2#ch2-sec2",
    linkLabel: "2 級 教科書を読む",
  },
  {
    kind: "normal-rejection-region",
    title: "両側 5% の棄却域",
    level: "2 級",
    category: "仮説検定",
    insight: "$|z| > 1.96$ なら $H_0$ を棄却。",
    link: "/textbook/grade-2#ch2-sec3",
    linkLabel: "2 級 教科書を読む",
  },
  {
    kind: "p-value-area",
    title: "p 値の面積イメージ",
    level: "2 級",
    category: "仮説検定",
    insight: "観測 z* より外側の面積が p 値。",
    link: "/textbook/grade-2#ch2-sec3",
    linkLabel: "2 級 教科書を読む",
  },
  {
    kind: "type-i-ii-errors",
    title: "第 1 種・第 2 種の誤り",
    level: "2 級",
    category: "仮説検定",
    insight: "閾値を動かすと α と β はトレードオフ。",
    link: "/textbook/grade-2#ch2-sec3",
    linkLabel: "2 級 教科書を読む",
  },
  {
    kind: "scatter-regression",
    title: "散布図と回帰直線",
    level: "2 級",
    category: "回帰",
    insight: "残差(赤線)の 2 乗和を最小化する直線。",
    link: "/textbook/grade-2#ch3-sec1",
    linkLabel: "2 級 教科書を読む",
  },
  {
    kind: "bayes-update",
    title: "ベイズ更新",
    level: "準 1 級",
    category: "ベイズ",
    insight: "事前 × 尤度 = 事後。データで信念が更新。",
    link: "/textbook/grade-pre1#ch2-sec1",
    linkLabel: "準 1 級 教科書を読む",
  },
  {
    kind: "likelihood-mle",
    title: "尤度関数と MLE",
    level: "1 級",
    category: "推定理論",
    insight: "尤度の山頂が最尤推定値。山が鋭いほど精度が高い。",
    link: "/textbook/grade-1#ch1-sec2",
    linkLabel: "1 級 教科書を読む",
  },
  {
    kind: "roc-curve",
    title: "ROC 曲線",
    level: "DS / G 検定",
    category: "機械学習",
    insight: "AUC が大きいほど良い分類器。0.5 はランダム。",
    link: "/certs/ds-literacy/textbook",
    linkLabel: "DS 検定 教科書を読む",
  },
  {
    kind: "bias-variance",
    title: "バイアス・バリアンスのトレードオフ",
    level: "DS / G 検定",
    category: "機械学習",
    insight: "最適な複雑度で総合誤差が最小。",
    link: "/certs/ds-literacy/textbook",
    linkLabel: "DS 検定 教科書を読む",
  },
  {
    kind: "learning-curve",
    title: "学習曲線(過学習)",
    level: "DS / G 検定",
    category: "機械学習",
    insight: "検証誤差が再上昇する手前が早期終了の理想点。",
    link: "/certs/ds-literacy/textbook",
    linkLabel: "DS 検定 教科書を読む",
  },
];

const SECTIONS: { title: string; eyebrow: string; figures: FigureEntry[] }[] = [
  {
    eyebrow: "Visualization",
    title: "可視化の基礎",
    figures: FIGURES.filter((f) => f.category === "可視化"),
  },
  {
    eyebrow: "Distributions",
    title: "確率分布",
    figures: FIGURES.filter((f) => f.category === "確率分布"),
  },
  {
    eyebrow: "Inference",
    title: "推測統計と検定",
    figures: FIGURES.filter(
      (f) => f.category === "推測統計" || f.category === "仮説検定",
    ),
  },
  {
    eyebrow: "Regression",
    title: "回帰",
    figures: FIGURES.filter((f) => f.category === "回帰"),
  },
  {
    eyebrow: "Bayesian & Theory",
    title: "ベイズと数理統計",
    figures: FIGURES.filter(
      (f) => f.category === "ベイズ" || f.category === "推定理論",
    ),
  },
  {
    eyebrow: "Machine Learning",
    title: "機械学習",
    figures: FIGURES.filter((f) => f.category === "機械学習"),
  },
];

function FigureCard({ figure }: { figure: FigureEntry }) {
  return (
    <article className="paper rounded-lg p-5">
      <header className="mb-3 pb-2 border-b border-[var(--page-border)] flex items-baseline gap-2 flex-wrap">
        <h3 className="text-base font-bold flex-1">{figure.title}</h3>
        <span className="text-[10px] font-bold text-[var(--accent-fg)] bg-[var(--accent)] px-1.5 py-0.5 rounded ui-sans">
          {figure.level}
        </span>
      </header>
      <div className="flex justify-center mb-3">
        <Diagram kind={figure.kind} />
      </div>
      <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-3">
        {figure.insight}
      </p>
      <Link
        href={figure.link}
        className="text-xs text-[var(--link)] hover:underline ui-sans"
      >
        {figure.linkLabel} →
      </Link>
    </article>
  );
}

export default function FiguresPage() {
  return (
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>図解で学ぶ統計</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Figures</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          図解で学ぶ統計
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定 4 級〜1 級と関連検定のキー概念を{" "}
          <strong>SVG 図 {FIGURES.length} 種</strong>{" "}
          にまとめました。「数式だけだとピンと来ない」「全体像を 1
          ページで掴みたい」というときに使ってください。各図から関連する教科書ページへ飛べます。
        </p>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4 leading-relaxed">
          ※ すべての図はサイト内で生成されており、ダークモードに自動追従・印刷も可能です。
        </p>
      </header>

      <div className="space-y-14">
        {SECTIONS.filter((s) => s.figures.length > 0).map((section) => (
          <section key={section.title}>
            <header className="mb-5">
              <div className="chapter-eyebrow mb-1">{section.eyebrow}</div>
              <h2 className="text-2xl font-bold tracking-wide">
                {section.title}
              </h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {section.figures.map((f) => (
                <FigureCard key={f.kind} figure={f} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
