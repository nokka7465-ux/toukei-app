import type { ComponentType } from "react";
import { SampleSizeCalc } from "@/components/tools/SampleSizeCalc";
import { ConfidenceIntervalCalc } from "@/components/tools/ConfidenceIntervalCalc";
import { PValueCalc } from "@/components/tools/PValueCalc";
import { PowerCalc } from "@/components/tools/PowerCalc";
import { TwoProportionTest } from "@/components/tools/TwoProportionTest";
import { CorrelationTest } from "@/components/tools/CorrelationTest";
import { AnovaCalc } from "@/components/tools/AnovaCalc";
import { ChiSquareTest } from "@/components/tools/ChiSquareTest";
import { WilcoxonSignedRank } from "@/components/tools/WilcoxonSignedRank";
import { MannWhitneyU } from "@/components/tools/MannWhitneyU";
import { McnemarTest } from "@/components/tools/McnemarTest";
import { EffectSizeCalc } from "@/components/tools/EffectSizeCalc";
import { DescriptiveStats } from "@/components/tools/DescriptiveStats";
import { OddsRatioCalc } from "@/components/tools/OddsRatioCalc";
import { TTestCalc } from "@/components/tools/TTestCalc";
import { BayesUpdateCalc } from "@/components/tools/BayesUpdateCalc";
import { MultipleRegressionCalc } from "@/components/tools/MultipleRegressionCalc";

export type ToolDifficulty = "basic" | "standard" | "advanced";

export type ToolEntry = {
  slug: string;
  title: string;
  shortName: string;
  description: string;
  longDescription: string;
  category: string;
  /** 学習レベルの目安。/tools のグリッドでバッジ表示 */
  difficulty: ToolDifficulty;
  /** 1 文字の絵文字。/tools のカード視認性向上に */
  icon: string;
  /** Search keywords for SEO copy */
  keywords: string[];
  /** Related glossary terms (term key) */
  relatedTerms: string[];
  /** Related tool slugs */
  relatedTools: string[];
  Component: ComponentType;
};

/** カテゴリ表示順 (索引ページのセクション順を制御) */
export const CATEGORY_ORDER: string[] = [
  "実験計画",
  "区間推定",
  "仮説検定",
  "分散分析",
  "回帰",
  "ノンパラメトリック",
  "効果量",
  "ベイズ",
  "記述統計",
];

export const DIFFICULTY_LABEL: Record<ToolDifficulty, string> = {
  basic: "★☆☆ 基礎",
  standard: "★★☆ 標準",
  advanced: "★★★ 応用",
};

export const toolsRegistry: ToolEntry[] = [
  {
    slug: "sample-size",
    title: "サンプルサイズ計算機",
    shortName: "サンプルサイズ",
    description:
      "目標精度・有意水準・検出力からサンプルサイズを逆算。母平均・母比率・2 群比較に対応。",
    longDescription:
      "実験計画やアンケート調査の前に、必要な標本サイズを正規近似で計算します。許容誤差(margin of error)・有意水準 α・検出力 1-β を入れるだけで、母平均推定・母比率推定・2 群の差の検定の各シーンに必要な n を瞬時に算出。",
    category: "実験計画",
    difficulty: "standard",
    icon: "🎯",
    keywords: [
      "サンプルサイズ 計算",
      "標本サイズ 計算",
      "サンプル数 計算",
      "n 必要数",
    ],
    relatedTerms: ["検出力", "有意水準", "標本誤差"],
    relatedTools: ["confidence-interval", "power"],
    Component: SampleSizeCalc,
  },
  {
    slug: "confidence-interval",
    title: "信頼区間計算機",
    shortName: "信頼区間",
    description:
      "母平均または母比率の信頼区間を z 分布近似で算出。標本平均・SD・n・信頼水準を入れるだけ。",
    longDescription:
      "標本データから母数の取りうる範囲を区間推定します。信頼水準 95%・99% などを切り替え可能で、母分散既知の z 区間と大標本近似の比率区間に対応。標本サイズが小さく分散未知の場合は別途 t 区間が必要です。",
    category: "区間推定",
    difficulty: "basic",
    icon: "📏",
    keywords: [
      "信頼区間 計算",
      "信頼区間 95",
      "母平均 区間推定",
      "母比率 区間推定",
    ],
    relatedTerms: ["信頼区間", "標準誤差", "t分布"],
    relatedTools: ["sample-size", "p-value"],
    Component: ConfidenceIntervalCalc,
  },
  {
    slug: "p-value",
    title: "p 値計算機",
    shortName: "p 値",
    description:
      "z 検定・t 検定・カイ二乗検定の p 値を瞬時に算出。両側/片側にも対応。",
    longDescription:
      "検定統計量と自由度から p 値を計算します。標準正規・t 分布・カイ二乗分布の累積分布関数を用いた数値計算で、有意水準との比較がすぐに行えます。論文・レポートの数値確認や統計検定の演習チェックに。",
    category: "仮説検定",
    difficulty: "basic",
    icon: "📐",
    keywords: ["p値 計算", "p-value calculator", "z検定 p値", "t検定 p値"],
    relatedTerms: ["p値", "仮説検定", "有意水準"],
    relatedTools: ["confidence-interval", "power"],
    Component: PValueCalc,
  },
  {
    slug: "power",
    title: "検出力計算機",
    shortName: "検出力",
    description:
      "効果量・サンプルサイズ・有意水準から検出力(1-β)を計算。研究設計の事前検討に。",
    longDescription:
      "「この実験で本当に効果があれば検出できる確率」を見積もります。Cohen の効果量・α・n を入れると検出力が出力。実験前の設計、論文 reviewer への応答、メタ分析の感度分析などに。",
    category: "実験計画",
    difficulty: "standard",
    icon: "🔋",
    keywords: ["検出力 計算", "Power analysis", "Type II Error"],
    relatedTerms: ["検出力", "効果量", "Type II Error"],
    relatedTools: ["sample-size", "effect-size"],
    Component: PowerCalc,
  },
  {
    slug: "ab-test",
    title: "A/B テスト計算機(2 群比率の差の検定)",
    shortName: "A/B テスト",
    description:
      "コンバージョン率など 2 群の比率を比較。z 検定 + 信頼区間 + 必要サンプルの 3 点同時に。",
    longDescription:
      "Web 広告の CTR・サイトの CVR・ボタン色 A/B など、2 群の比率比較を 1 画面で実行。Pooled / Unpooled の z 検定、リフト率、95% 信頼区間、必要サンプルサイズまで網羅。",
    category: "仮説検定",
    difficulty: "standard",
    icon: "🆎",
    keywords: ["AB テスト 計算", "比率の差 検定", "コンバージョン率 検定"],
    relatedTerms: ["仮説検定", "信頼区間"],
    relatedTools: ["sample-size", "p-value"],
    Component: TwoProportionTest,
  },
  {
    slug: "correlation",
    title: "相関係数の検定",
    shortName: "相関係数検定",
    description:
      "ピアソン相関係数 r とサンプルサイズから無相関の検定統計量と p 値を算出。",
    longDescription:
      "$r$ と $n$ から自由度 $n-2$ の t 統計量 $t = r\\sqrt{(n-2)/(1-r^2)}$ を計算し、両側 p 値を出します。Fisher の z 変換による信頼区間も合わせて表示。",
    category: "仮説検定",
    difficulty: "standard",
    icon: "🔗",
    keywords: ["相関係数 検定", "ピアソン相関 p値", "r 有意性"],
    relatedTerms: ["相関係数", "t検定", "Fisher Z 変換"],
    relatedTools: ["p-value", "descriptive"],
    Component: CorrelationTest,
  },
  {
    slug: "anova",
    title: "一元配置 ANOVA 計算機",
    shortName: "ANOVA",
    description:
      "3 群以上のグループ別データから F 統計量・p 値・群間/群内平方和を瞬時に算出。",
    longDescription:
      "カンマやスペース区切りで群ごとのデータを入れるだけで、$\\bar{X}_{i.}$、$S_A$、$S_E$、F、p、自由度を計算。多重比較問題を回避する一元配置 ANOVA の基本ツール。",
    category: "分散分析",
    difficulty: "standard",
    icon: "📊",
    keywords: ["ANOVA 計算", "一元配置 分散分析", "F検定 計算"],
    relatedTerms: ["一元配置分散分析", "F比", "多重比較"],
    relatedTools: ["effect-size", "p-value"],
    Component: AnovaCalc,
  },
  {
    slug: "chi-square",
    title: "カイ二乗独立性検定",
    shortName: "χ² 独立性検定",
    description:
      "クロス表を入力し、独立性のカイ二乗検定 + 期待度数 + 残差を確認。",
    longDescription:
      "$2 \\times 2$ から $r \\times c$ までのクロス表を入れて、$\\chi^2 = \\sum (O - E)^2/E$ を計算。期待度数と Pearson 残差も合わせて確認できるため、どのセルがズレに寄与しているかが見えます。",
    category: "仮説検定",
    difficulty: "standard",
    icon: "🧮",
    keywords: ["カイ二乗 独立性検定", "クロス表 χ²", "適合度検定"],
    relatedTerms: ["カイ二乗分布", "独立性検定", "適合度検定"],
    relatedTools: ["odds-ratio", "p-value"],
    Component: ChiSquareTest,
  },
  {
    slug: "wilcoxon",
    title: "Wilcoxon 符号順位検定",
    shortName: "Wilcoxon",
    description:
      "対応ある 2 標本のノンパラ検定。差の対称性のみを仮定した中央値の検定。",
    longDescription:
      "対応のある t 検定の正規性が崩れているとき、差 $D_i$ の符号と順位だけを使うノンパラ手法。Wilcoxon の W 統計量と漸近的な z 統計量・両側 p 値を算出。",
    category: "ノンパラメトリック",
    difficulty: "advanced",
    icon: "🪜",
    keywords: ["Wilcoxon 検定", "符号順位検定 計算", "ノンパラ 対応"],
    relatedTerms: ["Wilcoxon の符号順位検定"],
    relatedTools: ["mann-whitney", "p-value"],
    Component: WilcoxonSignedRank,
  },
  {
    slug: "mann-whitney",
    title: "Mann-Whitney U 検定",
    shortName: "Mann-Whitney U",
    description:
      "対応なし 2 群のノンパラ検定。t 検定の正規性が崩れたときの代替。",
    longDescription:
      "2 群のサンプルを 1 列に並べて順位を付け、片群の順位和から U 統計量を算出。t 検定よりも外れ値に頑健。Wilcoxon の順位和検定と等価。",
    category: "ノンパラメトリック",
    difficulty: "advanced",
    icon: "↕️",
    keywords: ["Mann-Whitney 検定", "U検定 計算", "ノンパラ 独立"],
    relatedTerms: [],
    relatedTools: ["wilcoxon", "p-value"],
    Component: MannWhitneyU,
  },
  {
    slug: "mcnemar",
    title: "McNemar 検定",
    shortName: "McNemar",
    description:
      "対応のある 2 値データ($2 \\times 2$ 対応表)の差の検定。前後比較に。",
    longDescription:
      "「介入前は陽性 / 後は陰性」のような対応のある不一致セルだけを使う検定。連続修正版・不連続版のどちらの統計量も出力。",
    category: "ノンパラメトリック",
    difficulty: "advanced",
    icon: "🔁",
    keywords: ["McNemar 検定", "対応 2x2 検定", "前後比較 二値"],
    relatedTerms: [],
    relatedTools: ["chi-square", "p-value"],
    Component: McnemarTest,
  },
  {
    slug: "effect-size",
    title: "効果量計算機(Cohen's d / Hedges' g)",
    shortName: "効果量",
    description:
      "2 群平均比較の効果量を Cohen's d と Hedges' g(小標本補正)で算出。",
    longDescription:
      "p 値だけでは『効果の大きさ』が見えないため、効果量を併記するのが現代の標準。プールされた SD で標準化した Cohen's d、$n$ が小さいときの Hedges' g、目安(small/medium/large)も同時表示。",
    category: "効果量",
    difficulty: "standard",
    icon: "📈",
    keywords: ["Cohen d 計算", "効果量 統計", "Hedges g"],
    relatedTerms: ["効果量"],
    relatedTools: ["sample-size", "power"],
    Component: EffectSizeCalc,
  },
  {
    slug: "descriptive",
    title: "記述統計まとめ計算機",
    shortName: "記述統計",
    description:
      "数値データを貼り付けるだけで平均・SD・四分位・歪度・尖度を一括算出。",
    longDescription:
      "カンマ・スペース・改行のいずれの区切りにも対応。$N$、平均、中央値、SD、SE、分散、最小/最大、Q1/Q3、IQR、歪度、尖度の 15 項目を表示。",
    category: "記述統計",
    difficulty: "basic",
    icon: "📋",
    keywords: ["記述統計 計算", "平均 標準偏差 計算", "歪度 尖度 計算"],
    relatedTerms: ["平均値", "標準偏差", "歪度", "尖度"],
    relatedTools: ["confidence-interval"],
    Component: DescriptiveStats,
  },
  {
    slug: "odds-ratio",
    title: "オッズ比 / 相対リスク計算機",
    shortName: "オッズ比/RR",
    description:
      "2×2 分割表から OR・RR・リスク差を 95% CI 付きで算出。コホート/ケースコントロール研究に。",
    longDescription:
      "$2 \\times 2$ 分割表のセル数を入れるだけで、対数正規近似によるオッズ比 OR・相対リスク RR・リスク差 RD を 95% 信頼区間付きで計算。0 セル時は Haldane-Anscombe 補正を自動適用。",
    category: "効果量",
    difficulty: "advanced",
    icon: "⚖️",
    keywords: [
      "オッズ比 計算",
      "相対リスク 計算",
      "リスク比 信頼区間",
    ],
    relatedTerms: [],
    relatedTools: ["chi-square"],
    Component: OddsRatioCalc,
  },
  {
    slug: "t-test",
    title: "t 検定計算機",
    shortName: "t 検定",
    description:
      "1 標本・対応なし(Welch)・対応ありの t 検定を 1 画面で。t 値・自由度・p 値・95% 信頼区間まで網羅。",
    longDescription:
      "$x$ と帰無仮説 $\\mu_0$ の比較、Welch の近似式による異分散 2 標本、対応のある差の検定 ─ 主要 3 種の t 検定をプリセット付きで実行できます。両側・片側の切替、信頼区間の同時表示で、論文・レポートでの結果記載がそのまま行えます。",
    category: "仮説検定",
    difficulty: "basic",
    icon: "🅣",
    keywords: ["t検定 計算", "Welchのt検定", "対応のあるt検定", "1標本 t検定"],
    relatedTerms: ["t検定", "自由度", "Welchのt検定"],
    relatedTools: ["p-value", "effect-size", "confidence-interval"],
    Component: TTestCalc,
  },
  {
    slug: "bayes-update",
    title: "ベイズ更新計算機",
    shortName: "ベイズ更新",
    description:
      "事前確率・感度・偽陽性率からベイズの定理で事後確率を更新。仮想 1 万人の内訳も同時表示。",
    longDescription:
      "$P(H \\mid E) = P(E \\mid H)\\,P(H) / P(E)$ を用いて、検査・診断・スパム判定など二値仮説の更新計算を直感化。陽性的中率(PPV) のジレンマを内訳の数値で確認できるため、ベイズ初学者の感覚づくりにも最適です。",
    category: "ベイズ",
    difficulty: "standard",
    icon: "🎲",
    keywords: ["ベイズ更新", "事後確率 計算", "陽性的中率 PPV", "尤度比"],
    relatedTerms: ["ベイズの定理", "事後確率", "尤度"],
    relatedTools: ["odds-ratio", "p-value"],
    Component: BayesUpdateCalc,
  },
  {
    slug: "multiple-regression",
    title: "重回帰分析計算機",
    shortName: "重回帰分析",
    description:
      "最大 3 説明変数の重回帰。係数・標準誤差・t 値・R² ・F 統計量を CSV 入力で瞬時に算出。",
    longDescription:
      "正規方程式 $\\boldsymbol{\\beta} = (X'X)^{-1}X'y$ をブラウザ内で解いて、回帰係数・標準誤差・t 値・p 値・$R^2$ ・調整済 $R^2$ ・F 検定までを表形式で出力。サンプル CSV つきで、貼り付けるだけですぐ動かせます。",
    category: "回帰",
    difficulty: "advanced",
    icon: "📉",
    keywords: ["重回帰分析 計算", "OLS 計算", "回帰係数 標準誤差", "決定係数"],
    relatedTerms: ["重回帰分析", "決定係数", "最小二乗法"],
    relatedTools: ["correlation", "p-value"],
    Component: MultipleRegressionCalc,
  },
];

export function getToolBySlug(slug: string): ToolEntry | undefined {
  return toolsRegistry.find((t) => t.slug === slug);
}

/** カテゴリ別にツールをグループ化(/tools 索引ページで使用) */
export function groupToolsByCategory(): { category: string; tools: ToolEntry[] }[] {
  const groups = new Map<string, ToolEntry[]>();
  for (const tool of toolsRegistry) {
    const list = groups.get(tool.category) ?? [];
    list.push(tool);
    groups.set(tool.category, list);
  }
  const ordered: { category: string; tools: ToolEntry[] }[] = [];
  for (const cat of CATEGORY_ORDER) {
    const tools = groups.get(cat);
    if (tools && tools.length > 0) ordered.push({ category: cat, tools });
  }
  // CATEGORY_ORDER に未登録のカテゴリは末尾に
  for (const [cat, tools] of groups) {
    if (!CATEGORY_ORDER.includes(cat)) ordered.push({ category: cat, tools });
  }
  return ordered;
}
