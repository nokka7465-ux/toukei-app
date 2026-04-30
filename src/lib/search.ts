import type { TextbookBlock } from "@/types/content";
import { introTextbook } from "@/data/textbooks/intro";
import { gradeFourTextbook } from "@/data/textbooks/grade-4";
import { gradeThreeTextbook } from "@/data/textbooks/grade-3";
import { gradeTwoTextbook } from "@/data/textbooks/grade-2";
import { gradePre1Textbook } from "@/data/textbooks/grade-pre1";
import { gradeOneTextbook } from "@/data/textbooks/grade-1";
import { dsBasicTextbook } from "@/data/textbooks/ds-basic";
import { surveyTextbook } from "@/data/textbooks/survey";
import { mathBasicsTextbook } from "@/data/textbooks/math";
import { gTestTextbook } from "@/data/textbooks/g-test";
import { dsLiteracyTextbook } from "@/data/textbooks/ds-literacy";
import { eShikakuTextbook } from "@/data/textbooks/e-shikaku";
import { qcKenteiTextbook } from "@/data/textbooks/qc-kentei";
import { surveySpecialistTextbook } from "@/data/textbooks/survey-specialist";
import { glossary } from "@/data/glossary";
import { blogPosts } from "@/data/blog";
import { introFormulas } from "@/data/formulas/intro";
import { gradeFourFormulas } from "@/data/formulas/grade-4";
import { gradeThreeFormulas } from "@/data/formulas/grade-3";
import { gradeTwoFormulas } from "@/data/formulas/grade-2";
import { gradePre1Formulas } from "@/data/formulas/grade-pre1";
import { gradeOneFormulas } from "@/data/formulas/grade-1";
import { levels } from "@/data/levels";

export type SearchSource =
  | "textbook"
  | "glossary"
  | "blog"
  | "formula";

export type SearchItem = {
  id: string;
  source: SearchSource;
  title: string;
  context: string; // breadcrumb-like ("4級 教科書 > 第1章")
  text: string; // searchable body text (kept short)
  url: string;
};

function blockToText(b: TextbookBlock): string {
  switch (b.type) {
    case "p":
      return b.text;
    case "math":
      return b.tex;
    case "def":
      return `${b.title} ${b.body}`;
    case "ex":
      return `${b.title} ${b.body}`;
    case "list":
      return b.items.join(" ");
    case "h3":
    case "h4":
      return b.text;
    case "intuition":
      return `${b.title ?? "直感"} ${b.body}`;
    case "practical":
      return `${b.title ?? "実務"} ${b.body}`;
    case "figure":
      return b.caption ?? "";
    case "code":
      return `${b.title ?? "コード"} ${b.python ?? ""} ${b.r ?? ""} ${b.caption ?? ""}`;
  }
}

function trimText(s: string, max = 1200): string {
  if (s.length <= max) return s;
  return s.slice(0, max);
}

function levelTitle(slug: string): string {
  return levels.find((l) => l.slug === slug)?.title ?? slug;
}

export const searchIndex: SearchItem[] = (() => {
  const items: SearchItem[] = [];

  // Textbook sections (1 entry per section, body text concatenated)
  const textbookSets: {
    book: typeof gradeFourTextbook;
    urlBase: string;
    displayTitle: string;
  }[] = [
    { book: introTextbook, urlBase: "/textbook/intro", displayTitle: levelTitle("intro") },
    { book: gradeFourTextbook, urlBase: "/textbook/grade-4", displayTitle: levelTitle("grade-4") },
    { book: gradeThreeTextbook, urlBase: "/textbook/grade-3", displayTitle: levelTitle("grade-3") },
    { book: gradeTwoTextbook, urlBase: "/textbook/grade-2", displayTitle: levelTitle("grade-2") },
    { book: gradePre1Textbook, urlBase: "/textbook/grade-pre1", displayTitle: levelTitle("grade-pre1") },
    { book: gradeOneTextbook, urlBase: "/textbook/grade-1", displayTitle: levelTitle("grade-1") },
    { book: dsBasicTextbook, urlBase: "/certs/ds-basic/textbook", displayTitle: "DS基礎" },
    { book: surveyTextbook, urlBase: "/certs/survey/textbook", displayTitle: "統計調査士" },
    { book: mathBasicsTextbook, urlBase: "/math/textbook", displayTitle: "数学基礎" },
    { book: gTestTextbook, urlBase: "/certs/g-test/textbook", displayTitle: "G検定" },
    { book: dsLiteracyTextbook, urlBase: "/certs/ds-literacy/textbook", displayTitle: "DS検定" },
    { book: eShikakuTextbook, urlBase: "/certs/e-shikaku/textbook", displayTitle: "E資格" },
    { book: qcKenteiTextbook, urlBase: "/certs/qc-kentei/textbook", displayTitle: "QC検定" },
    { book: surveySpecialistTextbook, urlBase: "/certs/survey-specialist/textbook", displayTitle: "専門統計調査士" },
  ];
  for (const { book, urlBase, displayTitle } of textbookSets) {
    for (const ch of book.chapters) {
      for (const sec of ch.sections) {
        const text = trimText(sec.blocks.map(blockToText).join(" "));
        items.push({
          id: `tb-${book.levelSlug}-${sec.id}`,
          source: "textbook",
          title: `${sec.number} ${sec.title}`,
          context: `${displayTitle}教科書 · 第${ch.number}章 ${ch.title}`,
          text,
          url: `${urlBase}#${sec.id}`,
        });
      }
    }
  }

  // Glossary terms
  for (const t of glossary) {
    items.push({
      id: `gl-${t.term}`,
      source: "glossary",
      title: t.term,
      context: `用語集 · ${t.level}級 · ${t.category}`,
      text: `${t.reading} ${t.english ?? ""} ${t.definition}`,
      url: t.link ?? `/glossary#level-${t.level}`,
    });
  }

  // Blog posts
  for (const post of blogPosts) {
    const text = trimText(
      `${post.description} ${post.body.map(blockToText).join(" ")}`,
    );
    items.push({
      id: `bl-${post.slug}`,
      source: "blog",
      title: post.title,
      context: `ブログ · ${post.category}`,
      text,
      url: `/blog/${post.slug}`,
    });
  }

  // Standalone mini-textbooks (programming, causal inference)
  const standalone: { url: string; title: string; context: string; text: string }[] = [
    {
      url: "/programming#ch1",
      title: "Python 基礎 ─ データ型・関数・制御構造",
      context: "プログラミング入門 · 第 1 章",
      text: "Python 変数 リスト 辞書 関数 if for 制御構造 リスト内包表記 print f-string scores grade",
    },
    {
      url: "/programming#ch2",
      title: "NumPy ─ ベクトル演算で 100 倍速くする",
      context: "プログラミング入門 · 第 2 章",
      text: "NumPy ベクトル演算 ブロードキャスト 配列 arange 平均 標準偏差 percentile 正規分布 random",
    },
    {
      url: "/programming#ch3",
      title: "Pandas ─ 表データ処理のデファクト",
      context: "プログラミング入門 · 第 3 章",
      text: "Pandas DataFrame groupby query merge filter sort describe SQL 対応 集計",
    },
    {
      url: "/programming#ch4",
      title: "SQL ─ データを問い合わせる共通言語",
      context: "プログラミング入門 · 第 4 章",
      text: "SQL SELECT WHERE GROUP BY JOIN ORDER BY LIMIT HAVING ウィンドウ関数 RANK PARTITION sqlite3",
    },
    {
      url: "/programming#ch5",
      title: "scikit-learn ─ 30 分で機械学習デビュー",
      context: "プログラミング入門 · 第 5 章",
      text: "scikit-learn fit predict iris LogisticRegression train_test_split StandardScaler GridSearchCV Pipeline KMeans 交差検証 cross_val_score",
    },
    {
      url: "/causal-inference#ch1",
      title: "相関と因果はどう違うのか",
      context: "因果推論ミニ教科書 · 第 1 章",
      text: "ポテンシャルアウトカム ATE 因果効果 交絡 相関 因果 反事実",
    },
    {
      url: "/causal-inference#ch2",
      title: "DAG とバックドア基準",
      context: "因果推論ミニ教科書 · 第 2 章",
      text: "DAG 有向非巡回グラフ バックドア基準 Chain Fork Collider 交絡 Berkson",
    },
    {
      url: "/causal-inference#ch3",
      title: "傾向スコアマッチング",
      context: "因果推論ミニ教科書 · 第 3 章",
      text: "傾向スコア マッチング ATT ロジスティック回帰 NearestNeighbors Propensity Score",
    },
    {
      url: "/causal-inference#ch4",
      title: "差分の差分(DID)",
      context: "因果推論ミニ教科書 · 第 4 章",
      text: "DID 差分の差分 平行トレンド 自然実験 Card Krueger 最低賃金",
    },
    {
      url: "/causal-inference#ch5",
      title: "操作変数法(IV)",
      context: "因果推論ミニ教科書 · 第 5 章",
      text: "操作変数法 IV 2SLS Angrist Krueger 教育年数 賃金 関連性 外生性",
    },
    {
      url: "/causal-inference#ch6",
      title: "回帰不連続デザイン(RDD)",
      context: "因果推論ミニ教科書 · 第 6 章",
      text: "RDD 回帰不連続 cutoff Sharp Fuzzy 局所線形回帰 McCrary Lee 現職効果",
    },
    {
      url: "/time-series#ch1",
      title: "時系列データの特徴",
      context: "時系列分析ミニ教科書 · 第 1 章",
      text: "時系列 トレンド 季節 周期 残差 定常性 ADF検定 ランダムウォーク ホワイトノイズ",
    },
    {
      url: "/time-series#ch2",
      title: "自己相関と ACF / PACF",
      context: "時系列分析ミニ教科書 · 第 2 章",
      text: "自己相関 ACF PACF AR MA ARMA ラグ オーダー判定",
    },
    {
      url: "/time-series#ch3",
      title: "AR / MA / ARIMA モデル",
      context: "時系列分析ミニ教科書 · 第 3 章",
      text: "AR MA ARIMA SARIMA ARIMAX 自己回帰 移動平均 差分 季節差分",
    },
    {
      url: "/time-series#ch4",
      title: "Prophet ─ ビジネス向け汎用ツール",
      context: "時系列分析ミニ教科書 · 第 4 章",
      text: "Prophet トレンド 季節性 休日効果 changepoint 変化点 Meta",
    },
    {
      url: "/time-series#ch5",
      title: "状態空間モデルとカルマンフィルタ",
      context: "時系列分析ミニ教科書 · 第 5 章",
      text: "状態空間 カルマンフィルタ 局所水準 局所線形トレンド 動的線形 粒子フィルタ",
    },
    {
      url: "/time-series#ch6",
      title: "予測精度の評価とバックテスト",
      context: "時系列分析ミニ教科書 · 第 6 章",
      text: "MAE RMSE MAPE SMAPE MASE TimeSeriesSplit ローリング交差検証 予測区間 バックテスト",
    },
    {
      url: "/deep-learning-basics#ch1",
      title: "ニューラルネットの仕組み",
      context: "ディープラーニング基礎ミニ教科書 · 第 1 章",
      text: "ニューラルネット MLP 活性化関数 ReLU Sigmoid Softmax 順伝播 パーセプトロン",
    },
    {
      url: "/deep-learning-basics#ch2",
      title: "誤差逆伝播法と最適化",
      context: "ディープラーニング基礎ミニ教科書 · 第 2 章",
      text: "誤差逆伝播 backpropagation SGD Adam Momentum RMSprop AdamW 学習率 Warmup Cosine Annealing",
    },
    {
      url: "/deep-learning-basics#ch3",
      title: "CNN ─ 画像処理の標準",
      context: "ディープラーニング基礎ミニ教科書 · 第 3 章",
      text: "CNN 畳み込み プーリング ResNet VGG AlexNet EfficientNet ViT スキップ接続",
    },
    {
      url: "/deep-learning-basics#ch4",
      title: "RNN・LSTM・Transformer ─ 系列データ",
      context: "ディープラーニング基礎ミニ教科書 · 第 4 章",
      text: "RNN LSTM GRU Transformer Self-Attention Multi-Head Attention",
    },
    {
      url: "/deep-learning-basics#ch5",
      title: "正則化と過学習対策",
      context: "ディープラーニング基礎ミニ教科書 · 第 5 章",
      text: "Dropout BatchNorm LayerNorm Weight Decay Data Augmentation Early Stopping LoRA 転移学習 ファインチューニング",
    },
  ];
  for (const s of standalone) {
    items.push({
      id: `st-${s.url}`,
      source: "textbook",
      title: s.title,
      context: s.context,
      text: s.text,
      url: s.url,
    });
  }

  // Formulas
  const formulaSets: { slug: string; formulas: typeof gradeFourFormulas }[] = [
    { slug: "intro", formulas: introFormulas },
    { slug: "grade-4", formulas: gradeFourFormulas },
    { slug: "grade-3", formulas: gradeThreeFormulas },
    { slug: "grade-2", formulas: gradeTwoFormulas },
    { slug: "grade-pre1", formulas: gradePre1Formulas },
    { slug: "grade-1", formulas: gradeOneFormulas },
  ];
  for (const { slug, formulas } of formulaSets) {
    const lvl = levelTitle(slug);
    for (const f of formulas) {
      items.push({
        id: `fo-${slug}-${f.id}`,
        source: "formula",
        title: f.name,
        context: `${lvl}公式集 · ${f.category}`,
        text: `${f.tex} ${f.description}`,
        url: `/formulas/${slug}`,
      });
    }
  }

  return items;
})();

const SOURCE_LABEL: Record<SearchSource, string> = {
  textbook: "教科書",
  glossary: "用語集",
  blog: "ブログ",
  formula: "公式集",
};

export function sourceLabel(src: SearchSource): string {
  return SOURCE_LABEL[src];
}

function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((t) => t.trim())
    .filter((t) => t.length > 0);
}

export type SearchResult = {
  item: SearchItem;
  score: number;
  /** Snippet around the first match. */
  snippet: string;
};

function makeSnippet(text: string, query: string, max = 140): string {
  if (!text) return "";
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  const i = lower.indexOf(q);
  if (i === -1) return text.slice(0, max);
  const start = Math.max(0, i - 30);
  const end = Math.min(text.length, i + q.length + max - 30);
  const ellipsisStart = start > 0 ? "…" : "";
  const ellipsisEnd = end < text.length ? "…" : "";
  return `${ellipsisStart}${text.slice(start, end)}${ellipsisEnd}`;
}

export type Suggestion = {
  title: string;
  context: string;
  source: SearchSource;
  url: string;
};

/**
 * 「もしかして候補」用のサジェスト。タイトル先頭一致・部分一致・部分文字一致で
 * 候補を返す。検索結果がゼロのとき、または入力の途中段階で「これかな?」を
 * ユーザーに提示するために使う。
 */
export function suggestTerms(query: string, max = 6): Suggestion[] {
  const q = query.trim().toLowerCase();
  if (q.length === 0) return [];

  const scored: { item: SearchItem; score: number }[] = [];
  for (const item of searchIndex) {
    const t = item.title.toLowerCase();
    let s = 0;

    if (t === q) s += 100;
    else if (t.startsWith(q)) s += 60;
    else if (t.includes(q)) s += 30;
    else if (q.length >= 2 && t.length >= 2 && q.includes(t)) s += 25;

    // タイトル一致しない場合のみ、文字重なりで救済(タイポ・表記ゆれ向け)
    if (s === 0) {
      let chars = 0;
      for (const c of q) if (t.includes(c)) chars++;
      if (chars >= Math.min(2, q.length)) s += chars;
    }

    if (s > 0) {
      // 用語集を上位に
      if (item.source === "glossary") s += 5;
      scored.push({ item, score: s });
    }
  }

  // タイトル重複は除く(教科書と用語集で同名タイトルがある場合など)
  const seen = new Set<string>();
  const out: Suggestion[] = [];
  for (const s of scored.sort((a, b) => b.score - a.score)) {
    if (seen.has(s.item.title)) continue;
    seen.add(s.item.title);
    out.push({
      title: s.item.title,
      context: s.item.context,
      source: s.item.source,
      url: s.item.url,
    });
    if (out.length >= max) break;
  }
  return out;
}

export function search(query: string, max = 30): SearchResult[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const results: SearchResult[] = [];
  for (const item of searchIndex) {
    const titleLower = item.title.toLowerCase();
    const contextLower = item.context.toLowerCase();
    const textLower = item.text.toLowerCase();
    let score = 0;
    let firstMatchToken = "";

    for (const token of tokens) {
      let tokenHit = false;
      if (titleLower.includes(token)) {
        score += 8;
        tokenHit = true;
      }
      if (contextLower.includes(token)) {
        score += 3;
        tokenHit = true;
      }
      if (textLower.includes(token)) {
        score += 1;
        tokenHit = true;
      }
      if (tokenHit && !firstMatchToken) firstMatchToken = token;
    }

    if (score > 0) {
      const snippet = firstMatchToken
        ? makeSnippet(item.text, firstMatchToken)
        : item.text.slice(0, 140);
      results.push({ item, score, snippet });
    }
  }

  return results.sort((a, b) => b.score - a.score).slice(0, max);
}
