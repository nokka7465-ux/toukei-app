import type { Textbook } from "@/types/content";

export const gradeOneTextbook: Textbook = {
  levelSlug: "grade-1",
  title: "1級 教科書",
  intro:
    "1級は数理統計学そのものを問う最上位の級です。「統計数理」では十分統計量・最尤推定・漸近理論などの理論を、「統計応用」では人文/社会/医療/理工/データサイエンスの中から選択した分野での応用力を問います。本サイトでは「統計数理」側を中心に、定理の意味を式の意図から丁寧にたどり直す ─ 教科書を読み込む前後の補助として活用してください。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "推定理論の基礎",
      overview:
        "十分統計量・指数型分布族・推定量の性質といった、現代数理統計の基本道具を整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "指数型分布族と十分統計量",
          blocks: [
            {
              type: "p",
              text: "1 級の出題範囲を見渡すと、ほとんどの「いい性質」が指数型分布族と十分統計量という 2 つの概念のまわりで議論されていることに気づきます。本節ではこの 2 つを丁寧に整理し、続く章の最尤推定・漸近理論への基礎とします。",
            },
            { type: "h3", text: "指数型分布族" },
            {
              type: "def",
              title: "定義 ─ 指数型分布族",
              body: "確率密度(または確率質量)関数が次の形に書ける分布の族を指数型分布族(exponential family)という:\n\n$\\;f(x;\\, \\theta) = h(x)\\, \\exp\\!\\left(\\sum_{j=1}^{k} \\eta_j(\\theta)\\, T_j(x) - A(\\theta)\\right)\\;$\n\n$\\eta_j$ を自然パラメータ、$T_j$ を十分統計量、$A(\\theta)$ をキュムラント関数(対数正規化定数)、$h(x)$ をベースメジャー(基底関数)という。",
            },
            {
              type: "p",
              text: "「指数の中身がパラメータと観測値の積に分解される」というのが本質。具体例は驚くほど多く、正規分布・ベルヌーイ分布・二項分布・ポアソン分布・指数分布・ガンマ分布・ベータ分布など、よく使う分布の大半が指数型分布族に属します。",
            },
            {
              type: "ex",
              title: "例 1.1 ─ ポアソン分布が指数型分布族",
              body: "$\\mathrm{Po}(\\lambda)$ の確率質量は $P(X = x) = \\dfrac{\\lambda^x e^{-\\lambda}}{x!}$。これを変形すると\n\n$\\;P(X = x) = \\dfrac{1}{x!} \\exp(\\log\\lambda \\cdot x - \\lambda) = h(x) \\exp(\\eta(\\lambda) T(x) - A(\\lambda))\\;$\n\nここで $h(x) = 1/x!$、$\\eta(\\lambda) = \\log\\lambda$、$T(x) = x$、$A(\\lambda) = \\lambda$。確かに指数型分布族の形に書ける。",
            },
            { type: "h3", text: "なぜ指数型分布族が大切か" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**十分統計量がきれいに見える**: $T(x)$ がそのまま十分統計量。",
                "**最尤推定がたいてい解析的に解ける**: スコア方程式が線形に近い形になる。",
                "**共役事前分布が体系的に存在**: ベイズ推論との相性も抜群。",
                "**漸近正規性などの一般定理が適用しやすい**: 規則性の条件が自然と満たされる。",
              ],
            },
            { type: "h3", text: "十分統計量" },
            {
              type: "def",
              title: "定義 ─ 十分統計量",
              body: "統計量 $T(\\mathbf{X})$ が母数 $\\theta$ の十分統計量であるとは、$T(\\mathbf{X}) = t$ が与えられたときの $\\mathbf{X}$ の条件付き分布が $\\theta$ に依存しないこと。直感的に「$T$ さえ知っていれば、$\\mathbf{X}$ の細かい値はもう $\\theta$ について追加情報をもたない」。",
            },
            { type: "h3", text: "フィッシャー・ネイマンの分解定理" },
            {
              type: "def",
              title: "定理 ─ 分解定理",
              body: "$T(\\mathbf{X})$ が $\\theta$ の十分統計量であるための必要十分条件は、同時密度が\n\n$\\;f(\\mathbf{x};\\,\\theta) = g(T(\\mathbf{x});\\,\\theta)\\, h(\\mathbf{x})\\;$\n\nの形に分解できること($g$ は $T$ と $\\theta$ にだけ依存、$h$ は $\\theta$ に依存しない)。",
            },
            {
              type: "ex",
              title: "例題 1.2 ─ 正規分布の十分統計量",
              body: "$X_1, \\ldots, X_n \\stackrel{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)$ のとき、$(\\mu, \\sigma^2)$ の十分統計量は?\n\n**解** : 同時密度の対数を取ると、$\\mu$ と $\\sigma^2$ への依存は $\\sum X_i$ と $\\sum X_i^2$ のみを通して入る。よって $\\left(\\sum X_i,\\ \\sum X_i^2\\right)$ あるいは同等に $\\left(\\bar{X},\\ \\sum X_i^2\\right)$ が $(\\mu, \\sigma^2)$ の十分統計量。",
            },
            { type: "h3", text: "完備十分統計量と UMVUE" },
            {
              type: "def",
              title: "定理 ─ レーマン・シェッフェの定理",
              body: "$T$ が完備十分統計量で、$\\hat{\\theta}(T)$ が $\\theta$ の不偏推定量なら、$\\hat{\\theta}(T)$ は一様最小分散不偏推定量(UMVUE)である。",
            },
            {
              type: "p",
              text: "「ある条件のもとで、これがいちばんいい不偏推定量」と理論的に保証してくれる強力な定理。指数型分布族では完備十分統計量が自然と存在するため、UMVUE を体系的に構成できます。",
            },
            { type: "h3", text: "ラオ・ブラックウェルの定理" },
            {
              type: "def",
              title: "定理 ─ ラオ・ブラックウェルの定理",
              body: "$\\hat{\\theta}$ が $\\theta$ の不偏推定量、$T$ が十分統計量のとき、$\\;\\tilde{\\theta} = E[\\hat{\\theta} \\mid T]\\;$ は不偏で、$V[\\tilde{\\theta}] \\leq V[\\hat{\\theta}]$ を満たす。",
            },
            {
              type: "p",
              text: "「不偏推定量を十分統計量で条件付ければ、必ず分散を下げる(または現状維持)」という、推定量改良の機械的な手順を与えます。完備性を加えれば、得られた $\\tilde{\\theta}$ は UMVUE になる ─ レーマン・シェッフェへの架け橋です。",
            },
            {
              type: "p",
              text: "ここまでが 1 級の理論の出発点。次節以降ではこの土台のうえに、最尤推定・漸近理論・尤度比検定といった「統計学を統計学たらしめる」道具立てを積み重ねていきます。",
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "最尤推定とフィッシャー情報量",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "最尤推定量の定義、フィッシャー情報量 $I(\\theta) = E[(\\partial \\log f / \\partial \\theta)^2]$、クラメル・ラオの下限 $V(\\hat{\\theta}) \\geq 1/(n I(\\theta))$ を扱う節です。",
            },
          ],
        },
        {
          id: "ch1-sec3",
          number: "1.3",
          title: "漸近理論 ─ デルタ法とスラツキー",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "デルタ法 $\\sqrt{n}(g(\\hat{\\theta}) - g(\\theta)) \\xrightarrow{d} N(0, g'(\\theta)^2 \\sigma^2)$ とスラツキーの定理を扱う節です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "仮説検定の理論",
      overview:
        "ネイマン・ピアソンの補題、尤度比検定・ワルド検定・スコア検定の三種を理論的に整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "ネイマン・ピアソンの補題",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "単純対単純仮説の検定における最強力検定 = 尤度比検定、を扱う節です。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "尤度比・ワルド・スコア検定",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "ウィルクスの定理 $-2\\log\\Lambda \\xrightarrow{d} \\chi^2(r)$、Wald 検定、スコア(ラオ)検定の三者の漸近的等価性を扱う節です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "計算統計学",
      overview:
        "EM アルゴリズム・MCMC・ブートストラップなど、現代統計の計算手法に触れます。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "EM アルゴリズム",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "潜在変数モデルにおける反復最尤推定。E ステップで $Q$ 関数を計算し、M ステップで最大化、を扱う節です。",
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "MCMC とブートストラップ",
          blocks: [
            { type: "h3", text: "執筆中" },
            {
              type: "p",
              text: "メトロポリス・ヘイスティングス、ギブスサンプリング、ブートストラップによる推定量の標準誤差推定を扱う節です。",
            },
          ],
        },
      ],
    },
  ],
};
