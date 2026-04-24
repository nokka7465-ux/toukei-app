import type { Textbook } from "@/types/content";

export const gradePre1Textbook: Textbook = {
  levelSlug: "grade-pre1",
  title: "準1級 教科書",
  intro:
    "準1級は、現代統計学の主要トピックを横断的に扱う応用級です。特定の分布の性質を深く知り、ベイズ的なものの見方を取り入れ、多変量データや時系列データを扱う ─ 統計検定の最終目的が「数理統計学の理論」(1級)なら、準1級は「実務で使える統計学のフルセット」と言えます。なお、本級は出題範囲が広く、ワークブック(学術図書出版社)を軸に学ぶのが事実上の標準ルートです。本サイトはその補助教材として活用してください。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "確率分布の応用",
      overview:
        "ポアソン・指数・幾何といった離散・連続分布の役割を整理し、多変量正規分布へと進みます。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "ポアソン・指数・幾何分布",
          blocks: [
            {
              type: "p",
              text: "二項分布と正規分布は 3 級で学んだ「主役分布」でしたが、現実の現象を数式で表現するには、それ以外にもいくつか重要な仲間が必要です。本節では、稀な事象の発生回数(ポアソン)、待ち時間(指数)、初成功までの試行回数(幾何)─ 3 つの分布を整理して扱います。",
            },
            { type: "h3", text: "ポアソン分布" },
            {
              type: "def",
              title: "定義 ─ ポアソン分布",
              body: "単位時間(または単位空間)あたり平均 $\\lambda$ 回起こる稀な事象の発生回数 $X$ は、ポアソン分布 $\\mathrm{Po}(\\lambda)$ に従う。\n\n$\\;P(X = k) = \\dfrac{\\lambda^k\\, e^{-\\lambda}}{k!}\\quad(k = 0, 1, 2, \\ldots)\\;$\n\n$E[X] = \\lambda,\\ V[X] = \\lambda$。",
            },
            {
              type: "p",
              text: "「平均と分散が等しい」という強い特徴があります。コールセンターへの 1 時間あたりの着信数、Web サイトの 1 分あたりのアクセス数、商店の 1 日の客数 ─ こうしたものはたいていポアソン分布で近似できます。",
            },
            {
              type: "p",
              text: "もう一つ重要な事実: 二項分布 $\\mathrm{Bin}(n, p)$ で「$n$ が大きく $p$ が小さく、$np = \\lambda$ が一定」のとき、ポアソン分布 $\\mathrm{Po}(\\lambda)$ で近似できる(ポアソンの極限定理)。「$n$ がたくさんあり、それぞれ稀にしか起こらない事象」を扱う際の典型的な近似です。",
            },
            { type: "h3", text: "指数分布 ─ ポアソン現象の待ち時間" },
            {
              type: "def",
              title: "定義 ─ 指数分布",
              body: "ポアソン過程(平均 $\\lambda$ のポアソン分布で発生する事象列)において、隣り合う事象の間隔(待ち時間)$T$ は指数分布 $\\mathrm{Exp}(\\lambda)$ に従う。\n\n$\\;f(t) = \\lambda\\, e^{-\\lambda t}\\quad(t \\geq 0)\\;$\n\n$E[T] = 1/\\lambda,\\ V[T] = 1/\\lambda^2$。",
            },
            {
              type: "p",
              text: "「平均 $\\lambda$ 件 / 単位時間」起こる現象の隙間は、平均 $1/\\lambda$ 単位時間。直感どおりです。指数分布は **無記憶性** という不思議な性質をもち、$P(T > s + t \\mid T > s) = P(T > t)$ が成り立ちます ─ 「待った時間がどれだけあっても、これからの待ち時間の分布は変わらない」。",
            },
            { type: "h3", text: "幾何分布 ─ 初めて成功するまで" },
            {
              type: "def",
              title: "定義 ─ 幾何分布",
              body: "成功確率 $p$ のベルヌーイ試行を独立に繰り返したとき、初めて成功するまでの試行回数 $X$ は幾何分布に従う。\n\n$\\;P(X = k) = (1 - p)^{k - 1} p\\quad(k = 1, 2, \\ldots)\\;$\n\n$E[X] = 1/p,\\ V[X] = (1 - p)/p^2$。",
            },
            {
              type: "p",
              text: "「あたりの確率が $p = 1/5$ のくじを引き続けるとき、初めてあたるまで平均 $5$ 回」 ─ これも直感に合います。幾何分布も指数分布同様、無記憶性をもつ離散版の典型です。",
            },
            { type: "h3", text: "分布の使い分け早見表" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**二項 $\\mathrm{Bin}(n, p)$**: $n$ 回中の成功回数。回数固定。",
                "**幾何 $\\mathrm{Geo}(p)$**: 初成功までの試行回数。回数が確率変数。",
                "**ポアソン $\\mathrm{Po}(\\lambda)$**: 単位時間の発生回数。$n \\to \\infty, p \\to 0$ の二項極限。",
                "**指数 $\\mathrm{Exp}(\\lambda)$**: ポアソン現象の待ち時間。連続分布。",
                "**正規 $N(\\mu, \\sigma^2)$**: 中心極限定理で多くの平均量に登場。",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "多変量正規分布",
          blocks: [
            {
              type: "p",
              text: "「身長と体重」のように複数の正規分布的な量が同時に揺れているとき、その**結合分布**を扱う枠組みが多変量正規分布です。準1級・1級ともに最重要分布の一つで、主成分分析・回帰分析・判別分析など多くの応用に登場します。",
            },
            { type: "h3", text: "多変量正規分布の定義" },
            {
              type: "def",
              title: "定義 ─ 多変量正規分布",
              body: "$k$ 次元確率ベクトル $\\mathbf{X} = (X_1, \\ldots, X_k)^{\\top}$ が、平均ベクトル $\\boldsymbol{\\mu}$、分散共分散行列 $\\Sigma$(正定値対称)の多変量正規分布 $N_k(\\boldsymbol{\\mu}, \\Sigma)$ に従うとは、確率密度関数が\n\n$\\;f(\\mathbf{x}) = \\dfrac{1}{(2\\pi)^{k/2}\\, |\\Sigma|^{1/2}} \\exp\\!\\left(-\\dfrac{1}{2} (\\mathbf{x} - \\boldsymbol{\\mu})^{\\top} \\Sigma^{-1} (\\mathbf{x} - \\boldsymbol{\\mu})\\right)\\;$\n\nで与えられること。",
            },
            { type: "h3", text: "性質" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**周辺分布も正規**: $X_i$ それぞれは 1 次元正規分布に従う。",
                "**線形変換は正規**: $\\mathbf{Y} = A\\mathbf{X} + \\mathbf{b}$ も多変量正規分布($\\mathbf{Y} \\sim N(A\\boldsymbol{\\mu} + \\mathbf{b},\\ A \\Sigma A^{\\top})$)。",
                "**条件付き分布も正規**: $X_2 = x_2$ で条件付けた $X_1$ の分布も正規。",
                "**無相関 ⟺ 独立**: 一般の確率変数では無相関と独立は別だが、多変量正規分布のときは「相関 0」なら独立が成り立つ。",
              ],
            },
            { type: "h3", text: "2 変数正規分布の例" },
            {
              type: "p",
              text: "$k = 2$ のとき、$(X, Y) \\sim N_2(\\boldsymbol{\\mu}, \\Sigma)$ の分散共分散行列は次のように書けます。",
            },
            {
              type: "math",
              tex: "\\Sigma = \\begin{pmatrix} \\sigma_X^2 & \\rho \\sigma_X \\sigma_Y \\\\ \\rho \\sigma_X \\sigma_Y & \\sigma_Y^2 \\end{pmatrix}",
            },
            {
              type: "p",
              text: "$\\rho$ は $X$ と $Y$ の相関係数。$\\rho = 0$ なら $X$ と $Y$ は独立(無相関 ⇔ 独立、上記性質)。$|\\rho|$ が大きいほど $\\Sigma$ の楕円が細長くなり、データが直線的なパターンを描きます。",
            },
            { type: "h3", text: "条件付き期待値 ─ 回帰の本質" },
            {
              type: "def",
              title: "公式 ─ 2 変数正規分布の条件付き期待値",
              body: "$(X, Y) \\sim N_2(\\boldsymbol{\\mu}, \\Sigma)$ のとき、$X = x$ で条件付けた $Y$ の期待値は\n\n$\\;E[Y \\mid X = x] = \\mu_Y + \\rho \\dfrac{\\sigma_Y}{\\sigma_X} (x - \\mu_X)\\;$\n\nつまり $x$ の線形関数。これがまさに**回帰直線**!",
            },
            {
              type: "p",
              text: "$Y$ を $X$ で予測する最良(最小二乗の意味で)の予測子は、多変量正規分布のもとでは線形 ─ つまり回帰直線そのものになる、というのがこの公式の意味するところです。「なぜ最小二乗法は線形回帰を導くのか」の理論的背景がここにあります。",
            },
            { type: "h3", text: "応用への橋渡し" },
            {
              type: "p",
              text: "多変量正規分布は、本章以降の主成分分析・判別分析・多変量回帰、さらにはベイズ統計の事後分布の議論など、準1級の主要トピックすべての土台になります。「複数次元の正規分布は 1 次元の正規分布の素直な拡張」という感覚をしっかり身につけておくと、後の学習がぐっと楽になります。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "ベイズ統計",
      overview:
        "「データを見たあとに信念をどう更新するか」 ─ ベイズの定理を出発点に、事前分布・事後分布・共役分布までを扱います。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "ベイズの定理と事後分布",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "事前分布 $P(\\theta)$、尤度 $P(D \\mid \\theta)$、事後分布 $P(\\theta \\mid D) \\propto P(D \\mid \\theta) P(\\theta)$ という枠組みを扱う節です。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "共役分布と MAP 推定",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "ベータ-二項、正規-正規などの共役関係と、MAP 推定の考え方を扱う節です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "多変量解析の入口",
      overview:
        "重回帰、ロジスティック回帰、主成分分析という、多変量解析の三本柱を扱います。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "重回帰モデル",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "$y = \\beta_0 + \\beta_1 x_1 + \\cdots + \\beta_k x_k + \\varepsilon$ を行列表現 $\\mathbf{y} = X \\boldsymbol{\\beta} + \\boldsymbol{\\varepsilon}$ で扱い、最小二乗推定量 $\\hat{\\boldsymbol{\\beta}} = (X^{\\top} X)^{-1} X^{\\top} \\mathbf{y}$ を導く節です。",
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "ロジスティック回帰",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "二値応答変数を扱うため、ロジット関数 $\\log(p/(1-p))$ を線形に表すモデルを扱う節です。",
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "主成分分析(PCA)",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "分散共分散行列の固有値・固有ベクトルから主成分を求め、次元削減と寄与率の解釈を扱う節です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "時系列解析",
      overview:
        "時系列データ特有の概念(自己相関・定常性)と、AR・MA・ARIMA といった基本モデルに触れます。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "AR・MA・ARIMA モデル",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "$X_t = \\phi_1 X_{t-1} + \\cdots + \\phi_p X_{t-p} + \\varepsilon_t$ などの基本モデルと、定常性・差分・モデル次数の判定法を扱う節です。",
            },
          ],
        },
      ],
    },
  ],
};
