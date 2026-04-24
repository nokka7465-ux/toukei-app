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
            {
              type: "p",
              text: "前節で「いい不偏推定量(UMVUE)」を作る道具を学びました。本節は実務でも理論でも主役となる別系統の推定法 ─ 最尤推定(MLE) ─ と、その性能の限界を与えるフィッシャー情報量 / クラメル・ラオの下限を扱います。",
            },
            { type: "h3", text: "尤度関数と最尤推定量" },
            {
              type: "def",
              title: "定義 ─ 尤度と最尤推定量",
              body: "観測データ $X_1, \\ldots, X_n \\stackrel{\\text{iid}}{\\sim} f(x; \\theta)$ に対し、$\\theta$ の関数として\n\n$\\;L(\\theta) = \\prod_{i=1}^{n} f(X_i; \\theta)\\;$\n\nを尤度関数という。$L(\\theta)$ を最大にする $\\theta$ を最尤推定量(MLE)と呼び、$\\hat{\\theta}_{\\mathrm{MLE}}$ で表す。実用上は対数尤度 $\\ell(\\theta) = \\log L(\\theta) = \\sum \\log f(X_i; \\theta)$ を最大化する。",
            },
            {
              type: "p",
              text: "「データを最も『もっともらしく』説明するパラメータを選ぶ」というシンプルな考え方。多くの分布で、$\\partial \\ell / \\partial \\theta = 0$(スコア方程式)を解くだけで $\\hat{\\theta}_{\\mathrm{MLE}}$ が求まります。",
            },
            {
              type: "ex",
              title: "例題 1.3 ─ 正規分布の MLE",
              body: "$X_1, \\ldots, X_n \\stackrel{\\text{iid}}{\\sim} N(\\mu, \\sigma^2)$ のとき、$(\\mu, \\sigma^2)$ の MLE を求めよ。\n\n**解** : 対数尤度を $\\mu, \\sigma^2$ で微分してゼロとおくと、$\\hat{\\mu} = \\bar{X}$、$\\hat{\\sigma}^2 = \\dfrac{1}{n}\\sum(X_i - \\bar{X})^2$。$\\hat{\\sigma}^2$ は $n - 1$ ではなく **$n$ で割る**(MLE は不偏ではない例)。",
            },
            { type: "h3", text: "スコア関数とフィッシャー情報量" },
            {
              type: "def",
              title: "定義 ─ スコアとフィッシャー情報量",
              body: "1 観測あたりのスコア関数 $\\;U(\\theta) = \\dfrac{\\partial}{\\partial \\theta} \\log f(X; \\theta)\\;$。\n\nフィッシャー情報量\n\n$\\;I(\\theta) = E\\!\\left[U(\\theta)^2\\right] = -E\\!\\left[\\dfrac{\\partial^2}{\\partial \\theta^2}\\log f(X; \\theta)\\right]\\;$\n\n($n$ 観測なら $nI(\\theta)$、独立なので情報は加法的)。",
            },
            {
              type: "p",
              text: "フィッシャー情報量は、文字どおり「データが $\\theta$ について持っている情報の量」。情報量が大きいほど $\\theta$ を精密に推定できる、という直感どおりの量です。",
            },
            { type: "h3", text: "クラメル・ラオの下限" },
            {
              type: "def",
              title: "定理 ─ クラメル・ラオの下限",
              body: "正則条件のもとで、任意の不偏推定量 $\\hat{\\theta}$ について\n\n$\\;V[\\hat{\\theta}] \\;\\geq\\; \\dfrac{1}{n\\, I(\\theta)}\\;$\n\nが成り立つ。等号を達成する不偏推定量は有効推定量と呼ばれる。",
            },
            {
              type: "p",
              text: "つまり、不偏推定量の精度には絶対的な「下限」があり、それより精密な不偏推定量は存在しない、ということ。指数型分布族の十分統計量から作る不偏推定量は、しばしばこの下限を達成します。",
            },
            { type: "h3", text: "MLE の性質(規則条件下)" },
            {
              type: "def",
              title: "定理 ─ MLE の漸近性質",
              body: "1. **一致性**: $\\hat{\\theta}_{\\mathrm{MLE}} \\xrightarrow{p} \\theta_0$($n \\to \\infty$ で真値に確率収束)。\n\n2. **漸近正規性**: $\\;\\sqrt{n}(\\hat{\\theta}_{\\mathrm{MLE}} - \\theta_0) \\xrightarrow{d} N(0,\\, I(\\theta_0)^{-1})\\;$\n\n3. **漸近有効性**: 漸近的にクラメル・ラオの下限を達成する。",
            },
            {
              type: "p",
              text: "「サンプルが十分大きければ、MLE は『考えうる中で最も精度の良い』不偏推定量に収束していく」 ─ これが MLE の理論的優位性です。実務でも、特に理由がなければまず MLE を試す、というのが定石。",
            },
            { type: "h3", text: "最尤法の弱点" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**有限標本では不偏でない**: 例 1.3 の $\\hat{\\sigma}^2$ のように、バイアスを持つことがある。",
                "**規則条件が必要**: 一様分布 $U(0, \\theta)$ など、台がパラメータに依存する分布(非正則族)では性質が崩れる。",
                "**閉じた解がない場合がある**: ロジスティック回帰など、数値計算が必要。",
                "**MAP 推定との関係**: 事前分布が一様なベイズ MAP = MLE。事前分布を入れることで正則化付き MLE になる。",
              ],
            },
          ],
        },
        {
          id: "ch1-sec3",
          number: "1.3",
          title: "漸近理論 ─ デルタ法とスラツキー",
          blocks: [
            {
              type: "p",
              text: "前節で「MLE は漸近的に正規分布」「分散はフィッシャー情報量の逆数」までを学びました。本節では、その漸近正規性を**変換した量**にも持ち越したいときに使う、デルタ法とスラツキーの定理を扱います。1 級でも準1級でも、計算問題で頻出する道具です。",
            },
            { type: "h3", text: "確率収束 と 分布収束(復習)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**$X_n \\xrightarrow{p} c$**(確率収束): 任意の $\\varepsilon > 0$ に対し $P(|X_n - c| > \\varepsilon) \\to 0$。",
                "**$X_n \\xrightarrow{d} X$**(分布収束): $X_n$ の累積分布関数が $X$ の累積分布関数の連続点で各点収束。",
              ],
            },
            { type: "h3", text: "スラツキーの定理" },
            {
              type: "def",
              title: "定理 ─ スラツキー(Slutsky)",
              body: "$X_n \\xrightarrow{d} X$、$Y_n \\xrightarrow{p} c$(定数)のとき、\n\n$\\;X_n + Y_n \\xrightarrow{d} X + c,\\quad X_n Y_n \\xrightarrow{d} c\\, X,\\quad X_n / Y_n \\xrightarrow{d} X / c\\;$($c \\neq 0$)。",
            },
            {
              type: "p",
              text: "「分布収束する量と、確率収束する定数を足したり掛けたりしても、分布収束は保たれる」。$\\sigma$ を $\\hat{\\sigma}$ で置き換えても漸近分布が同じ、と言いたいときに頻出します。",
            },
            {
              type: "ex",
              title: "応用例 ─ t 統計量の漸近分布",
              body: "$\\sqrt{n}(\\bar{X} - \\mu)/\\sigma \\xrightarrow{d} N(0, 1)$、$\\hat{\\sigma}/\\sigma \\xrightarrow{p} 1$。スラツキーの定理より、$\\sqrt{n}(\\bar{X} - \\mu)/\\hat{\\sigma} \\xrightarrow{d} N(0, 1)$。「$\\sigma$ を $\\hat{\\sigma}$ で置き換えても漸近分布は変わらない」ことが、これで理論的に正当化される。",
            },
            { type: "h3", text: "デルタ法" },
            {
              type: "def",
              title: "定理 ─ デルタ法",
              body: "$\\sqrt{n}(\\hat{\\theta} - \\theta) \\xrightarrow{d} N(0, \\sigma^2)$、$g$ が $\\theta$ で微分可能で $g'(\\theta) \\neq 0$ のとき、\n\n$\\;\\sqrt{n}(g(\\hat{\\theta}) - g(\\theta)) \\xrightarrow{d} N(0,\\, g'(\\theta)^2\\, \\sigma^2)\\;$",
            },
            {
              type: "p",
              text: "「推定量を変換しても、漸近正規性は保たれる(分散は微分の 2 乗倍)」というシンプルかつ強力な道具。導出はテイラー展開 $g(\\hat{\\theta}) \\approx g(\\theta) + g'(\\theta)(\\hat{\\theta} - \\theta)$ から一発です。",
            },
            {
              type: "ex",
              title: "例題 1.4 ─ ロジット変換の漸近分散",
              body: "$\\sqrt{n}(\\hat{p} - p) \\xrightarrow{d} N(0, p(1 - p))$ のとき、ロジット $g(p) = \\log(p/(1 - p))$ の漸近分散を求めよ。\n\n**解** : $g'(p) = 1/(p(1 - p))$。デルタ法より\n\n$\\;\\sqrt{n}(g(\\hat{p}) - g(p)) \\xrightarrow{d} N\\!\\left(0,\\, \\dfrac{1}{p(1 - p)}\\right)\\;$\n\nしたがって $\\hat{g}$ の分散は約 $\\dfrac{1}{n\\, p(1 - p)}$。",
            },
            { type: "h3", text: "応用 ─ 信頼区間の作り直し" },
            {
              type: "p",
              text: "デルタ法のもう一つの大事な使いみち: 元の母数の信頼区間が出ているとき、それを変換した量(オッズ比、寿命の対数、など)の信頼区間を導く ─ ような操作。「$\\theta$ の区間」から「$g(\\theta)$ の区間」に翻訳する、と覚えると応用範囲が見えてきます。",
            },
            {
              type: "p",
              text: "次章では、これらの漸近理論を仮説検定の文脈で使い、1 級の主役 ─ 尤度比検定・ワルド検定・スコア検定の三者 ─ をまとめて統一的に扱います。",
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
