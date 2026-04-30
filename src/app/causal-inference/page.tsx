import type { Metadata } from "next";
import Link from "next/link";
import type { TextbookBlock } from "@/types/content";
import { TextbookBody } from "@/components/TextbookBody";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "因果推論 入門ミニ教科書 ─ DAG・傾向スコア・DID・操作変数法",
  description:
    "AI エンジニアのための因果推論ミニ教科書。相関と因果の違い、DAG・バックドア基準・傾向スコアマッチング・差分の差分(DID)・操作変数法までを 5 章でコンパクトに学ぶ。",
  alternates: { canonical: "/causal-inference" },
  openGraph: {
    title: "因果推論 入門ミニ教科書",
    description: "DAG・傾向スコア・DID・操作変数法を 5 章で。",
    type: "article",
  },
};

const CHAPTERS: { id: string; number: string; title: string; blocks: TextbookBlock[] }[] = [
  {
    id: "ch1",
    number: "1",
    title: "相関と因果はどう違うのか",
    blocks: [
      {
        type: "p",
        text: "「アイスの売上が上がるとプールの溺死者も増える」── これは相関ですが、アイスを禁じても溺死は減りません。**真の原因は気温**(交絡因子)であり、アイスと溺死は同じ原因を共有しているだけ。因果推論はこの「一見相関だが因果ではない」を見抜くための学問です。",
      },
      { type: "h3", text: "ポテンシャルアウトカム枠組み" },
      {
        type: "p",
        text: "個体 $i$ について、処置を受けた場合の結果 $Y_i(1)$ と受けなかった場合の結果 $Y_i(0)$ を考えます。実際に観測できるのはどちらか一方だけ ── これが**因果推論の基本問題**(Fundamental Problem of Causal Inference)。",
      },
      { type: "math", tex: "\\text{ATE} = \\mathbb{E}[Y_i(1) - Y_i(0)]" },
      {
        type: "intuition",
        title: "💡 なぜ難しいか",
        body: "1 人の人について「薬を飲んだ自分」と「飲まなかった自分」を同時には観測できない。だから集団レベルで、似た特性を持つ人どうしを比較するか、何らかの仮定で欠損部分を補う必要がある。",
      },
    ],
  },
  {
    id: "ch2",
    number: "2",
    title: "DAG とバックドア基準",
    blocks: [
      {
        type: "p",
        text: "因果関係を表すグラフが **DAG**(有向非巡回グラフ)。ノードは変数、矢印は因果の向き。Pearl らが整備した枠組みで、どの変数を調整すれば交絡を除去できるかを **バックドア基準** で判定できます。",
      },
      { type: "h3", text: "3 つの基本構造" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Chain**: $X \\to Z \\to Y$ ─ $Z$ で条件付けると関連が消える",
          "**Fork**: $X \\leftarrow Z \\to Y$ ─ $Z$ が交絡因子。調整すべし",
          "**Collider**: $X \\to Z \\leftarrow Y$ ─ $Z$ で条件付けると **偽の関連** が生まれる(調整してはいけない)",
        ],
      },
      {
        type: "practical",
        title: "🛠 実務でのよくある罠",
        body: "「とりあえず手元にある変数を全部 control」は危険。Collider を調整すると本来ない関連が生まれる(Berkson のパラドクス)。DAG を書いてから調整変数を選ぶのが正攻法。",
      },
    ],
  },
  {
    id: "ch3",
    number: "3",
    title: "傾向スコアマッチング",
    blocks: [
      {
        type: "p",
        text: "RCT(無作為化比較試験)が無理な観測データで、処置群と対照群を「似た者同士」で比較する手法。**傾向スコア** $e(x) = P(T=1|X=x)$ が同じならば、観測共変量に関する分布が揃うことを利用。",
      },
      { type: "math", tex: "e(x) = P(T=1 \\mid X=x)" },
      { type: "h3", text: "手順" },
      {
        type: "list",
        style: "number",
        items: [
          "ロジスティック回帰などで $e(x)$ を推定",
          "処置群の各個体に、似た $e(x)$ を持つ対照群個体をマッチング",
          "マッチ後の群間で結果を比較 → ATT(処置群への平均処置効果)を推定",
        ],
      },
      {
        type: "code",
        title: "Python: 傾向スコアマッチング",
        python:
          "from sklearn.linear_model import LogisticRegression\nfrom sklearn.neighbors import NearestNeighbors\nimport numpy as np\n\n# X: 共変量, T: 処置(0/1), Y: 結果\nps = LogisticRegression().fit(X, T).predict_proba(X)[:, 1]\n\ntreat_idx = np.where(T == 1)[0]\nctrl_idx = np.where(T == 0)[0]\n\nnn = NearestNeighbors(n_neighbors=1).fit(ps[ctrl_idx].reshape(-1, 1))\n_, match = nn.kneighbors(ps[treat_idx].reshape(-1, 1))\nmatched_ctrl = ctrl_idx[match.ravel()]\n\natt = (Y[treat_idx] - Y[matched_ctrl]).mean()\nprint(f'ATT = {att:.3f}')",
      },
    ],
  },
  {
    id: "ch4",
    number: "4",
    title: "差分の差分(DID)",
    blocks: [
      {
        type: "p",
        text: "ある時点で **政策が片方の地域だけに導入された** ような自然実験で使う手法。処置群と対照群、それぞれの **前後差** を取り、さらにその差を取ることで、共通の時間トレンドを除去します。",
      },
      { type: "math", tex: "\\text{DID} = (\\bar{Y}_{T,\\text{post}} - \\bar{Y}_{T,\\text{pre}}) - (\\bar{Y}_{C,\\text{post}} - \\bar{Y}_{C,\\text{pre}})" },
      {
        type: "intuition",
        title: "💡 平行トレンド仮定",
        body: "DID が成立する鍵は『政策がなければ両群は平行に動いていたはず』という仮定。pre 期間のグラフを描いて、本当に平行かを目で確認することが大切。",
      },
      {
        type: "practical",
        title: "🛠 最低賃金の影響(Card & Krueger 1994)",
        body: "ニュージャージー州が最賃を引き上げ、隣接ペンシルベニア州は据え置き。両州のファストフード店舗の雇用前後差を比較し『最賃引き上げで雇用は減らない』と主張した古典的論文。",
      },
    ],
  },
  {
    id: "ch5",
    number: "5",
    title: "操作変数法(IV)",
    blocks: [
      {
        type: "p",
        text: "未観測の交絡があるとき、**処置に影響するが結果には直接影響しない外部変数 Z(操作変数)** を使って因果効果を識別する手法。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**関連性**: $Z$ は処置 $T$ と相関する",
          "**外生性**: $Z$ は誤差項と無相関(他経路で $Y$ に影響しない)",
        ],
      },
      { type: "h3", text: "2 段階最小二乗法(2SLS)" },
      {
        type: "list",
        style: "number",
        items: [
          "1 段階目: $T$ を $Z$ に回帰し、予測値 $\\hat{T}$ を得る",
          "2 段階目: $Y$ を $\\hat{T}$ に回帰 → 係数が因果効果",
        ],
      },
      {
        type: "practical",
        title: "🛠 教育年数 → 賃金(Angrist & Krueger 1991)",
        body: "「生まれ月」を IV に使った有名研究。米国の学校開始年齢ルールにより、生まれ月が義務教育の終わり方を左右し、結果として教育年数に影響。生まれ月自体は賃金には直接無関係 → IV として有効。",
      },
      { type: "h3", text: "次に学ぶこと" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[相関と因果はどう違うか(ブログ)](/blog/causal-inference-introduction)",
          "回帰不連続デザイン(RDD)/ Synthetic Control / DML",
          "[ベイズ統計](/textbook/grade-pre1) ─ 因果推論との接続",
        ],
      },
    ],
  },
];

export default function CausalInferencePage() {
  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "因果推論", href: "/causal-inference" },
        ]}
      />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>因果推論 入門ミニ教科書</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Causal Inference</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          因果推論 入門ミニ教科書
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose">
          「相関は因果ではない」── でも、ビジネスでも研究でも欲しいのは **因果効果** です。本ミニ教科書は AI エンジニア・データサイエンティスト向けに、{" "}
          <strong>DAG・傾向スコア・DID・操作変数法</strong>{" "}
          の 4 大手法を 5 章でコンパクトに学べる構成。
        </p>
      </header>

      <nav className="paper rounded-lg p-5 mb-10" aria-label="目次">
        <h2 className="text-sm font-bold ui-sans mb-3 chapter-eyebrow">目次</h2>
        <ol className="space-y-1 text-sm ui-sans">
          {CHAPTERS.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="text-[var(--link)] hover:underline">
                第 {c.number} 章 ─ {c.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-12">
        {CHAPTERS.map((ch) => (
          <section key={ch.id} id={ch.id} className="scroll-mt-20">
            <header className="mb-5 pb-3 border-b border-[var(--page-border)]">
              <div className="chapter-eyebrow mb-1">Chapter {ch.number}</div>
              <h2 className="text-2xl font-bold tracking-wide">{ch.title}</h2>
            </header>
            <TextbookBody blocks={ch.blocks} />
          </section>
        ))}
      </div>

      <section className="mt-16 paper rounded-lg p-6">
        <header className="mb-3">
          <div className="chapter-eyebrow mb-1">Next</div>
          <h2 className="text-xl font-bold">関連ページ</h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ui-sans">
          <li>
            <Link href="/blog/causal-inference-introduction" className="text-[var(--link)] hover:underline">
              ブログ: 因果推論 入門
            </Link>
          </li>
          <li>
            <Link href="/textbook/grade-pre1" className="text-[var(--link)] hover:underline">
              準 1 級 教科書 → 多変量解析
            </Link>
          </li>
          <li>
            <Link href="/glossary" className="text-[var(--link)] hover:underline">
              用語集 → 因果推論カテゴリ
            </Link>
          </li>
          <li>
            <Link href="/roadmap" className="text-[var(--link)] hover:underline">
              AIエンジニア・ロードマップ
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
