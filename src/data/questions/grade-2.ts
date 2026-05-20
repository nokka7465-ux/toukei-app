import type { Question } from "@/types/content";

export const gradeTwoQuestions: Question[] = [
  {
    id: "g2-q1",
    difficulty: 1,
    category: "記述統計・推定量",
    question:
      "標本 $2,\\ 4,\\ 6,\\ 8,\\ 10$ から求めた不偏分散として最も適切なものを選びなさい。",
    choices: ["$6$", "$8$", "$10$", "$12$"],
    correctIndex: 2,
    explanation:
      "平均は $6$、偏差の2乗和は $(-4)^2 + (-2)^2 + 0 + 2^2 + 4^2 = 40$。不偏分散 $= 40/(5-1) = 10$。",
  },
  {
    id: "g2-q2",
    difficulty: 3,
    category: "確率分布",
    question:
      "あるコールセンターに1時間あたり平均 $\\lambda = 3$ 件の電話がかかるとき、1時間に $2$ 件かかってくる確率として最も近いものを選びなさい(ポアソン分布を仮定)。",
    choices: ["約 $0.22$", "約 $0.27$", "約 $0.45$", "約 $0.50$"],
    correctIndex: 0,
    explanation:
      "$P(X = 2) = \\dfrac{3^2 e^{-3}}{2!} = \\dfrac{9 e^{-3}}{2} \\approx \\dfrac{9 \\times 0.0498}{2} \\approx 0.224$。",
  },
  {
    id: "g2-q3",
    difficulty: 1,
    category: "確率分布",
    question:
      "成功確率 $p = 0.2$ のベルヌーイ試行を繰り返すとき、初めて成功するまでの試行回数 $X$(幾何分布)の期待値として最も適切なものを選びなさい。",
    choices: ["$2$", "$3$", "$4$", "$5$"],
    correctIndex: 3,
    explanation:
      "幾何分布の期待値は $E[X] = 1/p = 1/0.2 = 5$。",
  },
  {
    id: "g2-q4",
    difficulty: 2,
    category: "確率分布",
    question:
      "指数分布 $f(x) = 2 e^{-2x}$ に従う確率変数 $X$ の期待値として最も適切なものを選びなさい。",
    choices: ["$0.25$", "$0.5$", "$1$", "$2$"],
    correctIndex: 1,
    explanation:
      "指数分布 $\\lambda e^{-\\lambda x}$ の期待値は $1/\\lambda$。ここでは $\\lambda = 2$ なので $E[X] = 1/2 = 0.5$。",
  },
  {
    id: "g2-q5",
    difficulty: 1,
    category: "標本分布",
    question:
      "独立な標準正規乱数 $Z_1, Z_2, \\ldots, Z_{10}$ について、$\\sum_{i=1}^{10} Z_i^2$ が従う分布として最も適切なものを選びなさい。",
    choices: [
      "標準正規分布 $N(0,1)$",
      "自由度 $10$ のカイ二乗分布",
      "自由度 $9$ のカイ二乗分布",
      "自由度 $10$ の t 分布",
    ],
    correctIndex: 1,
    explanation:
      "独立な標準正規変数の2乗和は自由度がその個数と一致するカイ二乗分布に従う。",
  },
  {
    id: "g2-q6",
    difficulty: 3,
    category: "推定",
    question:
      "正規母集団から $n = 16$ の標本をとったところ標本平均 $\\bar{x} = 50$、不偏分散 $s^2 = 64$ であった。母平均の $95\\%$ 信頼区間として最も近いものを選びなさい。ただし $t_{0.025}(15) \\approx 2.131$ とする。",
    choices: [
      "$[45.74,\\ 54.26]$",
      "$[46.08,\\ 53.92]$",
      "$[48.00,\\ 52.00]$",
      "$[34.00,\\ 66.00]$",
    ],
    correctIndex: 0,
    explanation:
      "標準誤差 $s/\\sqrt{n} = 8/4 = 2$。幅 $2.131 \\times 2 = 4.262$。区間は $50 \\pm 4.262$、約 $[45.74,\\ 54.26]$。",
  },
  {
    id: "g2-q7",
    difficulty: 2,
    category: "仮説検定",
    question:
      "母分散既知($\\sigma^2 = 25$)の母集団から $n = 25$ の標本をとり標本平均 $\\bar{x} = 52$ を得た。$H_0: \\mu = 50$ を有意水準 $5\\%$ の両側検定で検定するときの Z 値として最も適切なものを選びなさい。",
    choices: ["$1.0$", "$2.0$", "$2.5$", "$5.0$"],
    correctIndex: 1,
    explanation:
      "$Z = (52 - 50)/(\\sqrt{25}/\\sqrt{25}) = 2/1 = 2.0$。$|Z| = 2 > 1.96$ なので有意。",
  },
  {
    id: "g2-q8",
    difficulty: 3,
    category: "仮説検定",
    question:
      "カイ二乗適合度検定で $3$ つのカテゴリに対し観測度数と期待度数から得た統計量が $\\chi^2 = 7.8$ であった。自由度 $2$ の上側 $5\\%$ 点は $5.99$、上側 $1\\%$ 点は $9.21$ である。検定結果として最も適切なものを選びなさい。",
    choices: [
      "有意水準 $5\\%$ でも棄却できない",
      "有意水準 $5\\%$ で棄却、有意水準 $1\\%$ では棄却できない",
      "有意水準 $1\\%$ で棄却できる",
      "判定できない",
    ],
    correctIndex: 1,
    explanation:
      "$\\chi^2 = 7.8$ は $5.99 < 7.8 < 9.21$。したがって $5\\%$ 水準では棄却、$1\\%$ 水準では棄却できない。",
  },
  {
    id: "g2-q9",
    difficulty: 2,
    category: "仮説検定",
    question:
      "$n = 400$ の標本から比率 $\\hat{p} = 0.55$ を得た。$H_0: p = 0.5$ を検定するときの検定統計量 $Z$ として最も近いものを選びなさい。",
    choices: ["$1.00$", "$1.50$", "$2.00$", "$2.50$"],
    correctIndex: 2,
    explanation:
      "$Z = (0.55 - 0.5) / \\sqrt{0.5 \\times 0.5 / 400} = 0.05 / 0.025 = 2.0$。",
  },
  {
    id: "g2-q10",
    difficulty: 1,
    category: "仮説検定",
    question:
      "2×2 分割表のカイ二乗独立性検定における自由度として最も適切なものを選びなさい。",
    choices: ["$1$", "$2$", "$3$", "$4$"],
    correctIndex: 0,
    explanation:
      "自由度 $= (r-1)(c-1) = (2-1)(2-1) = 1$。",
  },
  {
    id: "g2-q11",
    difficulty: 2,
    category: "回帰分析",
    question:
      "単回帰モデル $y = \\alpha + \\beta x + \\varepsilon$ について、$s_x^2 = 4$, $s_{xy} = 6$ のとき回帰係数 $\\hat{\\beta}$ の値として最も適切なものを選びなさい。",
    choices: ["$0.67$", "$1.0$", "$1.5$", "$2.0$"],
    correctIndex: 2,
    explanation:
      "$\\hat{\\beta} = s_{xy}/s_x^2 = 6/4 = 1.5$。",
  },
  {
    id: "g2-q12",
    difficulty: 1,
    category: "回帰分析",
    question:
      "ある単回帰分析で相関係数が $r = 0.8$ であった。決定係数 $R^2$ として最も適切なものを選びなさい。",
    choices: ["$0.40$", "$0.64$", "$0.80$", "$0.90$"],
    correctIndex: 1,
    explanation:
      "単回帰では $R^2 = r^2 = 0.8^2 = 0.64$。応答変数の分散の $64\\%$ を説明できることを示す。",
  },
  {
    id: "g2-q13",
    difficulty: 2,
    category: "標本分布",
    question:
      "平均 $\\mu$、分散 $\\sigma^2$ の母集団からサイズ $n$ の無作為標本を取ったときの標本平均 $\\bar{X}$ の分散として最も適切なものを選びなさい(母集団が有限でない場合)。",
    choices: [
      "$\\sigma^2$",
      "$\\sigma^2 / n$",
      "$\\sigma / \\sqrt{n}$",
      "$n \\sigma^2$",
    ],
    correctIndex: 1,
    explanation:
      "$V[\\bar{X}] = \\sigma^2 / n$。標準誤差はこの平方根 $\\sigma/\\sqrt{n}$。",
  },
  {
    id: "g2-q14",
    difficulty: 1,
    category: "仮説検定",
    question:
      "第 1 種の誤り(第一種過誤)の説明として最も適切なものを選びなさい。",
    choices: [
      "帰無仮説が正しいのに棄却してしまう誤り",
      "対立仮説が正しいのに棄却できない誤り",
      "検定統計量の計算ミス",
      "サンプルサイズ不足による誤り",
    ],
    correctIndex: 0,
    explanation:
      "第1種の誤りは「$H_0$ 真のときに $H_0$ を棄却」する誤り。確率は有意水準 $\\alpha$ で制御する。",
  },
  {
    id: "g2-q15",
    difficulty: 2,
    category: "推定",
    question:
      "$n = 100$ の標本で標本比率 $\\hat{p} = 0.40$ を得た。母比率 $p$ の $95\\%$ 信頼区間として最も近いものを選びなさい($z_{0.025} \\approx 1.96$)。",
    choices: [
      "$[0.304,\\ 0.496]$",
      "$[0.320,\\ 0.480]$",
      "$[0.380,\\ 0.420]$",
      "$[0.200,\\ 0.600]$",
    ],
    correctIndex: 0,
    explanation:
      "標準誤差 $\\sqrt{0.4 \\times 0.6 / 100} \\approx 0.049$。幅 $1.96 \\times 0.049 \\approx 0.096$。区間は $0.40 \\pm 0.096$、約 $[0.304,\\ 0.496]$。",
  },
  {
    id: "g2-q16",
    difficulty: 2,
    category: "推定理論",
    question:
      "標本サイズ $n = 25$ の標本から計算した不偏分散の自由度として最も適切なものを選びなさい。",
    choices: ["$24$", "$25$", "$26$", "$50$"],
    correctIndex: 0,
    explanation:
      "不偏分散 $\\hat{s}^2 = \\dfrac{1}{n-1}\\sum (X_i - \\bar{X})^2$ の分母 $n - 1$ がそのまま自由度。$n - 1 = 25 - 1 = 24$。",
  },
  {
    id: "g2-q17",
    difficulty: 3,
    category: "仮説検定",
    question:
      "対立仮説が真であるにもかかわらず、帰無仮説を棄却できない誤りの説明として最も適切なものを選びなさい。",
    choices: [
      "第 1 種の誤り(有意水準 $\\alpha$)",
      "第 2 種の誤り(確率 $\\beta$)",
      "標本誤差",
      "データ収集ミス",
    ],
    correctIndex: 1,
    explanation:
      "対立仮説が真なのに棄却できない = 第 2 種の誤り(確率 $\\beta$)。検出力は $1 - \\beta$。第 1 種の誤りは「$H_0$ が真なのに棄却してしまう」誤り。",
  },
  {
    id: "g2-q18",
    difficulty: 2,
    category: "回帰分析",
    question:
      "単回帰分析で残差平方和 $\\mathrm{RSS}$ と全平方和 $\\mathrm{TSS}$ について $\\mathrm{RSS}/\\mathrm{TSS} = 0.4$ であった。決定係数 $R^2$ として最も適切なものを選びなさい。",
    choices: ["$0.40$", "$0.60$", "$0.80$", "$1.40$"],
    correctIndex: 1,
    explanation:
      "決定係数の定義 $R^2 = 1 - \\mathrm{RSS}/\\mathrm{TSS}$ より $R^2 = 1 - 0.4 = 0.6$。応答変数の分散の $60\\%$ を説明できることを示す。",
  },
  {
    id: "g2-q19",
    difficulty: 2,
    category: "推定",
    question:
      "正規母集団から $n = 9$ の標本をとり、$\\bar{X} = 20$, 不偏分散 $\\hat{s}^2 = 36$ を得た。母平均の $95\\%$ 信頼区間として最も近いものを選びなさい($t_{0.025}(8) \\approx 2.306$)。",
    choices: [
      "$[14.39,\\ 25.61]$",
      "$[16.08,\\ 23.92]$",
      "$[18.04,\\ 21.96]$",
      "$[8.00,\\ 32.00]$",
    ],
    correctIndex: 0,
    explanation:
      "標準誤差 $\\hat{s}/\\sqrt{n} = 6/3 = 2$。誤差幅 $2.306 \\times 2 = 4.612$。区間は $20 \\pm 4.612$、約 $[15.39,\\ 24.61]$。最も近い選択肢は $[14.39,\\ 25.61]$。",
  },
  {
    id: "g2-q20",
    difficulty: 3,
    category: "仮説検定",
    question:
      "正規母集団から $n = 25$ の標本を取り、$\\bar{X} = 102$、不偏分散 $\\hat{s}^2 = 100$ を得た。$H_0: \\mu = 100$ を有意水準 $5\\%$ の両側検定で検定するときの t 値として最も適切なものを選びなさい。",
    choices: ["$0.5$", "$1.0$", "$2.0$", "$5.0$"],
    correctIndex: 1,
    explanation:
      "$T = (102 - 100)/(\\sqrt{100}/\\sqrt{25}) = 2/(10/5) = 2/2 = 1.0$。$|T| = 1.0 < t_{0.025}(24) \\approx 2.064$ なので $H_0$ は棄却できない。",
  },
  {
    id: "g2-q21",
    difficulty: 2,
    category: "仮説検定",
    question:
      "$2 \\times 3$ 分割表のカイ二乗独立性検定における自由度として最も適切なものを選びなさい。",
    choices: ["$1$", "$2$", "$5$", "$6$"],
    correctIndex: 1,
    explanation:
      "$2 \\times 3$ 分割表の自由度 $= (r-1)(c-1) = (2-1)(3-1) = 1 \\times 2 = 2$。",
  },
  {
    id: "g2-q22",
    difficulty: 2,
    category: "回帰分析",
    question:
      "単回帰モデルの最小二乗推定量について、回帰直線が必ず通る点として最も適切なものを選びなさい。",
    choices: [
      "$(0, 0)$",
      "$(\\bar{x}, 0)$",
      "$(\\bar{x}, \\bar{y})$",
      "$(0, \\bar{y})$",
    ],
    correctIndex: 2,
    explanation:
      "切片の式 $\\hat{\\alpha} = \\bar{y} - \\hat{\\beta}\\bar{x}$ を回帰直線 $y = \\hat{\\alpha} + \\hat{\\beta}x$ に代入すると、$x = \\bar{x}$ で $y = \\bar{y}$。回帰直線は必ず点 $(\\bar{x}, \\bar{y})$ を通る。",
  },
  {
    id: "g2-q23",
    difficulty: 3,
    category: "推定",
    question:
      "$95\\%$ 信頼区間の正しい解釈として最も適切なものを選びなさい。",
    choices: [
      "真の母平均がこの区間に含まれる確率が $95\\%$",
      "標本の $95\\%$ がこの区間に含まれる",
      "同じ手続きを多数繰り返したとき、得られる区間の約 $95\\%$ が真の母平均を含む",
      "母分散が $95\\%$ の確率で正しく推定される",
    ],
    correctIndex: 2,
    explanation:
      "頻度主義の信頼区間の厳密な解釈は「同じ手続きを繰り返すと得られる区間のうち約 95% が真の母数を含む」。「真の母数がこの区間に入る確率」と直感的に解釈する人が多いが、これは厳密には正しくない(ベイズの信用区間の解釈に近い)。",
  },
  {
    id: "g2-q24",
    difficulty: 2,
    category: "標本分布",
    question:
      "標本平均 $\\bar{X}$ の標準誤差 $\\sigma/\\sqrt{n}$ を半分にしたいとき、標本サイズ $n$ を何倍にすればよいか。",
    choices: ["$2$ 倍", "$3$ 倍", "$4$ 倍", "$8$ 倍"],
    correctIndex: 2,
    explanation:
      "標準誤差は $\\sigma/\\sqrt{n}$。これを半分にするには $\\sqrt{n}$ を $2$ 倍にする必要があり、$n$ は $4$ 倍。「精度を 2 倍にするには標本を 4 倍」が大原則。",
  },
  {
    id: "g2-q25",
    difficulty: 2,
    category: "推定理論",
    question:
      "推定量の良さを判断する基準として、適切でないものを選びなさい。",
    choices: [
      "不偏性($E[\\hat{\\theta}] = \\theta$)",
      "一致性($n \\to \\infty$ で真値に確率収束)",
      "効率性(分散がクラメル・ラオ下限を達成)",
      "正規性(必ず正規分布に従うこと)",
    ],
    correctIndex: 3,
    explanation:
      "推定量の良さの基準は **不偏性・一致性・効率性** が代表。「正規性」自体は性質の一つだが、必須ではない(MLE は漸近正規性をもつだけで、有限標本での正規性は要件ではない)。",
  },
  {
    id: "g2-q26",
    difficulty: 3,
    category: "仮説検定",
    question:
      "有意水準 $\\alpha = 0.05$ の両側検定で、検定統計量 $|Z| = 1.5$ を得た。判定として最も適切なものを選びなさい($z_{0.025} = 1.96$)。",
    choices: [
      "帰無仮説を棄却する",
      "帰無仮説を棄却しない",
      "対立仮説が真と確定する",
      "サンプル不足で判定不能",
    ],
    correctIndex: 1,
    explanation:
      "$|Z| = 1.5 < 1.96 = z_{0.025}$ なので棄却域に入らず、$H_0$ を棄却しない。「棄却しない」と「$H_0$ が真」は別の意味なので注意 ─ 「証拠不十分」が正確。",
  },
  {
    id: "g2-q27",
    difficulty: 2,
    category: "回帰分析",
    question:
      "回帰直線 $y = 2x + 5$ のとき、$x = 3$ における予測値 $\\hat{y}$ として最も適切なものを選びなさい。",
    choices: ["$5$", "$8$", "$11$", "$15$"],
    correctIndex: 2,
    explanation:
      "$\\hat{y} = 2 \\times 3 + 5 = 6 + 5 = 11$。回帰直線への代入は単純な四則計算。",
  },
  {
    id: "g2-q28",
    difficulty: 3,
    category: "確率分布",
    question:
      "ある電話相談センターには 1 時間あたり平均 $\\lambda = 4$ 件かかってくる(ポアソン分布)。10 分間に $1$ 件もかかってこない確率として最も近いものを選びなさい。",
    choices: ["約 $0.18$", "約 $0.51$", "約 $0.67$", "約 $0.82$"],
    correctIndex: 1,
    explanation:
      "10 分 = 1/6 時間なので、10 分あたりの平均は $\\lambda' = 4/6 \\approx 0.667$ 件。$P(X = 0) = e^{-\\lambda'} = e^{-0.667} \\approx 0.513$。",
  },
  {
    id: "g2-q29",
    difficulty: 2,
    category: "仮説検定",
    question:
      "母分散 **未知** で母平均の検定を行うとき、使うべき検定統計量と分布として最も適切なものを選びなさい。",
    choices: [
      "$Z = (\\bar{X}-\\mu_0)/(\\sigma/\\sqrt{n})$、$N(0,1)$",
      "$T = (\\bar{X}-\\mu_0)/(\\hat{s}/\\sqrt{n})$、自由度 $n-1$ の t 分布",
      "$\\chi^2 = \\sum (O-E)^2/E$、自由度 $n$ のカイ二乗分布",
      "$F = s_1^2/s_2^2$、F 分布",
    ],
    correctIndex: 1,
    explanation:
      "母分散未知のときは不偏分散 $\\hat{s}^2$ を使うので、検定統計量は t、分布は自由度 $n-1$ の t 分布。$\\sigma$ 既知なら z 検定、2 群の分散比較なら F、適合度・独立性ならカイ二乗。",
  },
  {
    id: "g2-q30",
    difficulty: 2,
    category: "回帰分析",
    question:
      "重回帰分析で説明変数を 1 つ追加したとき、決定係数 $R^2$ はどう変化するか。最も適切なものを選びなさい。",
    choices: [
      "必ず増加する(または同じ)",
      "必ず減少する",
      "増減はランダム",
      "標本サイズによる",
    ],
    correctIndex: 0,
    explanation:
      "重回帰では、無関係な説明変数を追加しても $R^2$ は **必ず** 増加(少なくとも減らない)する。これが「変数を増やすほど見かけ上のフィットが良くなる」問題で、自由度調整済み $R^2_{\\mathrm{adj}}$ で補正する。",
  },
  {
    id: "g2-q31",
    difficulty: 2,
    category: "母分散の検定",
    question:
      "母分散 $\\sigma_0^2$ の検定で使う統計量として最も適切なものを選びなさい($n$ は標本サイズ、$\\hat{s}^2$ は不偏分散)。",
    choices: [
      "$\\dfrac{(n-1)\\hat{s}^2}{\\sigma_0^2}$ で自由度 $n-1$ のカイ二乗分布",
      "$\\dfrac{\\hat{s}^2 - \\sigma_0^2}{\\sigma_0/\\sqrt{n}}$ で標準正規分布",
      "$\\dfrac{n \\hat{s}^2}{\\sigma_0^2}$ で自由度 $n$ のカイ二乗分布",
      "$\\dfrac{\\hat{s}^2}{\\sigma_0^2}$ で F 分布",
    ],
    correctIndex: 0,
    explanation:
      "正規母集団のもとで $(n-1)\\hat{s}^2/\\sigma^2 \\sim \\chi^2_{n-1}$。母分散の検定はこの統計量を使う。標準誤差を使うのは平均の検定で、こちらは自由度 $n-1$ のカイ二乗が正解。",
  },
  {
    id: "g2-q32",
    difficulty: 2,
    category: "二標本検定",
    question:
      "対応のない 2 群の平均比較で「等分散の仮定が成り立つかどうか分からない」とき、最も推奨される検定はどれか。",
    choices: [
      "Welch の t 検定",
      "Student の t 検定(等分散仮定)",
      "対応のある t 検定",
      "F 検定で等分散性を確認してから選ぶ",
    ],
    correctIndex: 0,
    explanation:
      "現代の実務では迷ったら Welch の t 検定が安全。Student の t は等分散が満たされるときには検出力で僅かに勝るが、満たされないと Type I エラーが膨らむ。F 検定で等分散性を事前検定する流儀は、検定の多重性問題を生むので近年は推奨されない。",
  },
  {
    id: "g2-q33",
    difficulty: 2,
    category: "二標本検定",
    question:
      "ダイエットプログラム前後で同じ20人の体重を測ったデータがある。前後の平均差を検定するとき適切な方法はどれか。",
    choices: [
      "対応のある t 検定",
      "Welch の t 検定",
      "Student の独立 2 群 t 検定",
      "F 検定",
    ],
    correctIndex: 0,
    explanation:
      "「同じ個人で前後を測る」のは典型的な対応データ。差 $D_i = X_i - Y_i$ について 1 標本 t 検定を行う。個人差を相殺できるので、独立 2 群より検出力が高い。",
  },
  {
    id: "g2-q34",
    difficulty: 1,
    category: "ANOVA",
    question:
      "一元配置分散分析で「3 群以上の平均を一気に比較する」ことの最大の利点は何か。",
    choices: [
      "個別の t 検定を繰り返すと多重比較で全体の Type I エラー率が膨らむのを避けられる",
      "個別の t 検定より計算が簡単",
      "サンプルサイズが小さくても有意差が出やすい",
      "正規性の仮定が不要になる",
    ],
    correctIndex: 0,
    explanation:
      "$\\alpha = 0.05$ で 3 群のペア比較を 3 回行うと全体エラー率は $\\approx 14\\%$ に膨らむ。ANOVA は群全体に差があるかを 1 回の F 検定で判定するので、この多重比較問題を避けられる。",
  },
  {
    id: "g2-q35",
    difficulty: 2,
    category: "ANOVA",
    question:
      "一元配置 ANOVA で群が 4 つ、各群 10 標本($n = 40$)、群間平方和 $S_A = 60$、誤差平方和 $S_E = 144$ のとき、F 統計量はおよそいくらか。",
    choices: ["$2.5$", "$5.0$", "$7.5$", "$10.0$"],
    correctIndex: 1,
    explanation:
      "$F = (S_A/(g-1))/(S_E/(n-g)) = (60/3)/(144/36) = 20/4 = 5.0$。自由度は $(g-1, n-g) = (3, 36)$。",
  },
  {
    id: "g2-q36",
    difficulty: 2,
    category: "多重比較",
    question:
      "群が 5 つあり、すべてのペア比較を Bonferroni 補正で行うとき、各 t 検定で使う有意水準は(全体 $\\alpha = 0.05$)。",
    choices: ["$0.05$", "$0.025$", "$0.01$", "$0.005$"],
    correctIndex: 3,
    explanation:
      "ペアの数は ${}_5 C_2 = 10$。Bonferroni では $\\alpha / m = 0.05/10 = 0.005$ で各検定を行う。",
  },
  {
    id: "g2-q37",
    difficulty: 3,
    category: "ANOVA",
    question:
      "二元配置 ANOVA(交互作用あり)で「A の主効果は有意でない、B の主効果は有意、A×B 交互作用が有意」のとき、最も適切な解釈はどれか。",
    choices: [
      "A 単独の効果は弱いが、B の水準ごとに A の効果が違う可能性がある",
      "A は完全に無関係なので除外してよい",
      "B のみが結果を完全に決めている",
      "交互作用が有意なら主効果は無視してよい",
    ],
    correctIndex: 0,
    explanation:
      "A×B 交互作用が有意なら、「A の効果は B の水準で異なる」という意味。A の主効果が有意でない(平均的には A の効果がない)のは、ある B の水準では A が正、別の水準では A が負に効いて打ち消し合っている可能性が高い。",
  },
  {
    id: "g2-q38",
    difficulty: 2,
    category: "重回帰",
    question:
      "重回帰モデル $y = \\beta_0 + \\beta_1 x_1 + \\beta_2 x_2 + \\varepsilon$ で「$\\hat{\\beta}_1$ の意味」として最も適切な説明はどれか。",
    choices: [
      "$x_2$ を一定に保ったまま $x_1$ を 1 増やしたとき、$y$ が平均的に変化する量",
      "$x_1$ と $y$ の単純相関係数",
      "$x_1$ が 1 増えると常に $y$ が必ず $\\hat{\\beta}_1$ 増える保証",
      "$x_2$ も $x_1$ と一緒に動かしたときの $y$ への影響",
    ],
    correctIndex: 0,
    explanation:
      "重回帰の偏回帰係数は「他の説明変数を固定したときの効果」を表す。これが単回帰の係数と異なる場合があり、「混じった関係」を分離するのが重回帰の目的。",
  },
  {
    id: "g2-q39",
    difficulty: 3,
    category: "重回帰",
    question:
      "重回帰で多重共線性(multicollinearity)が強いとき発生しやすい現象として最も適切なものはどれか。",
    choices: [
      "個々の係数 $\\hat{\\beta}_j$ の標準誤差が大きくなり、t 検定で個別には有意でないのに F 検定で全体は有意になる",
      "決定係数 $R^2$ が著しく低下する",
      "残差が常に正規分布から外れる",
      "観測値が増えるほど係数が不安定になる",
    ],
    correctIndex: 0,
    explanation:
      "多重共線性は説明変数同士が強く相関している状態。$\\hat{\\beta}_j$ の標準誤差が膨張するため、個別の t 値が小さくなる。一方で予測力 $R^2$ や F 統計量は損なわれにくい、というのが典型症状。VIF で診断する。",
  },
  {
    id: "g2-q40",
    difficulty: 2,
    category: "重回帰",
    question:
      "VIF (Variance Inflation Factor) について最も適切な説明はどれか。",
    choices: [
      "$\\mathrm{VIF}_j = 1/(1 - R_j^2)$ で計算され、5 や 10 を超えると多重共線性の疑いが強い",
      "残差の正規性を測る指標",
      "回帰係数の分散を直接推定する",
      "サンプルサイズに反比例する",
    ],
    correctIndex: 0,
    explanation:
      "VIF は「他の説明変数で $x_j$ を回帰したときの $R_j^2$」から計算される。すべての $x$ が独立なら VIF = 1。VIF が大きいほど $\\hat{\\beta}_j$ の分散が膨張する。",
  },
  {
    id: "g2-q41",
    difficulty: 2,
    category: "残差診断",
    question:
      "残差プロット(横軸: 予測値、縦軸: 残差)が「ラッパ型」(右に行くほど縦のばらつきが大きい)になっているとき、最も疑われる仮定違反はどれか。",
    choices: [
      "等分散性の崩れ(不均一分散)",
      "正規性の崩れ",
      "線形性の崩れ",
      "独立性の崩れ",
    ],
    correctIndex: 0,
    explanation:
      "ラッパ型のパターンは典型的な不均一分散(heteroscedasticity)の兆候。$y$ の対数変換、加重最小二乗(WLS)、ロバスト標準誤差などで対処する。",
  },
  {
    id: "g2-q42",
    difficulty: 2,
    category: "残差診断",
    question:
      "Cook の距離が 1 を大きく超える観測点について、最も適切な対応はどれか。",
    choices: [
      "影響が強い観測なので、データの妥当性(入力ミス・特殊事情)を再確認した上で残すか除外するかを判断",
      "自動的に除外する",
      "そのまま無視する",
      "回帰係数を 0 に固定する",
    ],
    correctIndex: 0,
    explanation:
      "Cook の距離が大きい点はモデル全体に強く影響する観測。入力ミスなら除外、自然な観測なら残してロバスト回帰など別アプローチに。「邪魔だから消す」は研究の信頼性を損なう。",
  },
  {
    id: "g2-q43",
    difficulty: 1,
    category: "確率分布",
    question:
      "F 分布 $F_{m, n}$ の自由度について、$m$ と $n$ がそれぞれ何を表すか最も適切に答えなさい。",
    choices: [
      "$m$ は分子の自由度、$n$ は分母の自由度",
      "$m$ はサンプル数、$n$ は群の数",
      "$m, n$ ともに分子の自由度",
      "$m$ は試行数、$n$ は成功数",
    ],
    correctIndex: 0,
    explanation:
      "F 分布は 2 つの独立カイ二乗を自由度で割った比なので、$F = (\\chi^2_m/m)/(\\chi^2_n/n)$。$m$ が分子(回帰や処理)、$n$ が分母(残差)の自由度。",
  },
  {
    id: "g2-q44",
    difficulty: 2,
    category: "信頼区間",
    question:
      "サンプル $n = 25$、不偏分散 $\\hat{s}^2 = 16$ のとき、母分散 $\\sigma^2$ の 95% 信頼区間を計算するために必要なのは(自由度 24 の $\\chi^2$ で $\\chi^2_{24, 0.025} = 39.36$、$\\chi^2_{24, 0.975} = 12.40$)。",
    choices: [
      "$[24 \\times 16/39.36,\\; 24 \\times 16/12.40] = [9.76,\\; 30.97]$",
      "$[16/39.36,\\; 16/12.40]$",
      "$[24 \\times 16/12.40,\\; 24 \\times 16/39.36]$",
      "$[16 - 1.96 \\times 4/5,\\; 16 + 1.96 \\times 4/5]$",
    ],
    correctIndex: 0,
    explanation:
      "母分散の 95% CI は $[(n-1)\\hat{s}^2/\\chi^2_{0.025},\\; (n-1)\\hat{s}^2/\\chi^2_{0.975}]$。分母の大小に注意(大きい $\\chi^2$ で割ると下側、小さい $\\chi^2$ で割ると上側)。",
  },
  {
    id: "g2-q45",
    difficulty: 3,
    category: "ANOVA",
    question:
      "ANOVA の前提が崩れていないか確認する手順として最も適切なものはどれか。",
    choices: [
      "各群の正規性を Q-Q プロットで、等分散性を Levene 検定で、独立性を実験計画から確認",
      "F 統計量だけで自動的に判断",
      "サンプルサイズが大きければ前提は気にしなくてよい",
      "ANOVA の結果が有意なら前提は満たされている",
    ],
    correctIndex: 0,
    explanation:
      "ANOVA は正規性・等分散性・独立性を仮定する。正規性は Q-Q プロットや Shapiro-Wilk、等分散性は Levene や Brown-Forsythe、独立性は実験計画から判断。仮定が崩れていれば Welch ANOVA や Kruskal-Wallis などへ。",
  },

  // === Ch5 分割表とロジスティック回帰 ===
  {
    id: "g2-cont1",
    difficulty: 2,
    category: "分割表分析",
    question:
      "$2 \\times 3$ 分割表でカイ二乗独立性検定を行うときの自由度として正しいものはどれか。",
    choices: ["$df = 6$", "$df = 5$", "$df = 2$", "$df = 1$"],
    correctIndex: 2,
    explanation:
      "独立性検定の自由度は $(r-1)(c-1)$。$2 \\times 3$ なら $(2-1)(3-1) = 2$。$r$ は行数・$c$ は列数。",
  },
  {
    id: "g2-cont2",
    difficulty: 2,
    category: "分割表分析",
    question:
      "$2 \\times 2$ 分割表 $\\begin{pmatrix}30 & 50 \\\\ 40 & 30\\end{pmatrix}$ のオッズ比 OR の値はいくらか(行: 曝露 ±、列: 結果 ±)。",
    choices: ["$0.45$", "$0.563$", "$1.78$", "$2.50$"],
    correctIndex: 0,
    explanation:
      "$\\mathrm{OR} = ad/bc = (30 \\times 30)/(50 \\times 40) = 900/2000 = 0.45$。OR < 1 なので曝露があると結果 + のオッズが下がる関係。",
  },
  {
    id: "g2-cont3",
    difficulty: 2,
    category: "分割表分析",
    question:
      "Cramér's V について正しい記述はどれか。",
    choices: [
      "値が大きいほど 2 変数が独立",
      "0〜1 の範囲を取り、値が大きいほど 2 変数の関連が強い",
      "値が負になることがある",
      "サンプルサイズに比例する",
    ],
    correctIndex: 1,
    explanation:
      "$V = \\sqrt{\\chi^2/(N \\cdot \\min(r-1, c-1))}$ で 0〜1 の標準化指標。$V \\approx 0.1$ で弱、$0.3$ で中、$0.5$ で強。p 値とセットで報告するのが推奨。",
  },
  {
    id: "g2-cont4",
    difficulty: 3,
    category: "分割表分析",
    question:
      "Fisher の正確検定が推奨されるのはどんな状況か。",
    choices: [
      "サンプルサイズが極端に大きい場合",
      "**期待度数 $E_{ij} < 5$** のセルが多くカイ二乗近似が破綻しそうな場合",
      "連続データの 2 群比較",
      "回帰分析の係数検定",
    ],
    correctIndex: 1,
    explanation:
      "Fisher の正確検定は超幾何分布に基づく厳密計算で、**小標本・期待度数 < 5** で標準。R では `fisher.test()`、Python では `scipy.stats.fisher_exact()`。計算コストは大標本で重い。",
  },
  {
    id: "g2-logit1",
    difficulty: 2,
    category: "ロジスティック回帰",
    question:
      "ロジスティック回帰の係数 $\\beta_i$ の解釈として正しいものはどれか。",
    choices: [
      "$\\beta_i$ そのものがオッズ比",
      "$\\exp(\\beta_i)$ がオッズ比 ─ $x_i$ が 1 単位増えたときのオッズの倍率",
      "$\\beta_i$ は確率の変化量",
      "$\\beta_i$ は予測確率そのもの",
    ],
    correctIndex: 1,
    explanation:
      "ロジット = 対数オッズ。$\\mathrm{logit}(p) = \\beta_0 + \\beta_1 x$ より、$x$ が 1 増えると対数オッズが $\\beta_1$ 増える ⇔ オッズが $\\exp(\\beta_1)$ 倍。これが係数の自然な解釈。",
  },
  {
    id: "g2-logit2",
    difficulty: 3,
    category: "ロジスティック回帰",
    question:
      "ロジスティック回帰モデルのパラメータ推定で使われる手法はどれか。",
    choices: [
      "最小二乗法(OLS)",
      "最尤推定法(MLE)",
      "主成分分析",
      "クラスタリング",
    ],
    correctIndex: 1,
    explanation:
      "二値結果のロジスティック回帰は誤差項が等分散正規でないため OLS は使えない。**ベルヌーイ分布の尤度** $\\prod p^y(1-p)^{1-y}$ を最大化する MLE で推定。Newton-Raphson 法で反復計算するのが定番。",
  },
  {
    id: "g2-mh1",
    difficulty: 3,
    category: "層別分析",
    question:
      "マンテル-ヘンツェル法について正しい記述はどれか。",
    choices: [
      "標本サイズを増やすだけのテクニック",
      "層別された複数の $2 \\times 2$ 表を統合して 1 つのオッズ比を出す手法。シンプソンのパラドックス回避に有効",
      "ベイズ推定の一手法",
      "回帰係数の検定",
    ],
    correctIndex: 1,
    explanation:
      "Mantel-Haenszel 法は交絡因子で層別したオッズ比を統合する古典手法。$\\mathrm{OR}_{\\mathrm{MH}} = \\sum a_k d_k/n_k \\,/\\, \\sum b_k c_k/n_k$。各層の OR が共通かは Breslow-Day 検定で確認。現代ではロジスティック回帰の方が柔軟。",
  },
  { id: "g2-q53", category: "確率分布", difficulty: 3, question: "**正規分布 $N(0, 1)$** に従う $Z$ について **$P(Z \\geq 1.96)$** に最も近いものを選びなさい。", choices: ["0.025", "0.05", "0.10", "0.50"], correctIndex: 0, explanation: "**両側 5% の上側確率 = 2.5%**。$z = 1.96$ は信頼区間 95% の代表値。$z = 1.645$ で片側 5%。" },
  { id: "g2-q54", category: "確率分布", difficulty: 3, question: "**標本平均 $\\bar{X}$** が $N(\\mu, \\sigma^2)$ から **$n$ 個の標本** を取って計算されるとき、$\\bar{X}$ の分布として正しいものを選びなさい。", choices: ["$N(\\mu, \\sigma^2/n)$", "$N(\\mu, \\sigma^2)$", "$N(n\\mu, \\sigma^2)$", "$N(\\mu, n\\sigma^2)$"], correctIndex: 0, explanation: "**標本平均の分散 = $\\sigma^2/n$**($n$ 増で精度向上)。**SE = $\\sigma/\\sqrt{n}$**。CI / 検定の基礎。" },
  { id: "g2-q55", category: "推定", difficulty: 3, question: "**母平均の 95% 信頼区間** で $n = 25$、$\\bar{x} = 50$、$s = 10$ のとき幅が **約 4** になる根拠として正しいものを選びなさい。", choices: ["$t_{24, 0.025} \\cdot s/\\sqrt{n} \\approx 2.064 \\cdot 2 \\approx 4.13$", "ランダム", "$z \\cdot s$", "$s$ のみ"], correctIndex: 0, explanation: "**n が小さく σ 未知 → t 分布**。$t_{24} \\approx 2.064$。**$50 \\pm 4.13$ が 95% CI**。$n$ 大なら $z = 1.96$ で十分。" },
  { id: "g2-q56", category: "検定", difficulty: 3, question: "**両側 $t$ 検定** の p 値が **0.03** のとき、有意水準 **5%** での結論として正しいものを選びなさい。", choices: ["有意差あり(H_0 棄却)", "有意差なし", "判定不能", "再検定"], correctIndex: 0, explanation: "**p < α = 0.05** → H_0 棄却 = 有意差あり。**p > 0.05** で『棄却できない』(支持ではない)。" },
  { id: "g2-q57", category: "検定", difficulty: 3, question: "**第 2 種の過誤 β** を **減らす** 方法として **誤っているもの** を選びなさい。", choices: ["サンプルサイズ増", "効果量大", "α 緩和", "p 値固定"], correctIndex: 3, explanation: "**β を減らす(検出力 1-β を上げる)**: n 増 ・ 効果量大 ・ 分散減 ・ α 緩和。**p 値固定は意味不明**(計算結果であり操作変数ではない)。" },
  { id: "g2-q58", category: "ノンパラ", difficulty: 3, question: "**Mann-Whitney U 検定** が **t 検定** より適切な場面として最も適切なものを選びなさい。", choices: ["正規性 ・ 等分散性が満たされない / 順序尺度", "n 大 ・ 正規分布", "回帰分析", "因果推論"], correctIndex: 0, explanation: "**Mann-Whitney U**: 2 群の中央値差検定。順位ベース → ロバスト。**正規性 ・ 等分散の不安があれば優先**。" },
  { id: "g2-q59", category: "ANOVA", difficulty: 3, question: "**一元配置 ANOVA** で **F 値** が大きいときの意味として最も適切なものを選びなさい。", choices: ["群間分散 >> 群内分散 → 群差あり", "群間 = 群内", "ばらつき小", "計算誤差"], correctIndex: 0, explanation: "**F = MS_between / MS_within**。**F 大 + p 小** → 群差あり。**Post-hoc**(Tukey HSD / Bonferroni)で特定群間比較。" },
  { id: "g2-q60", category: "回帰", difficulty: 3, question: "**重相関係数 $R$** と **決定係数 $R^2$** の関係として正しいものを選びなさい。", choices: ["$R^2 = R^2$、$R \\in [0, 1]$、$R^2 \\in [0, 1]$", "$R$ は負も取る", "両者無関係", "$R^2 = -R$"], correctIndex: 0, explanation: "**$R$**: 観測値と予測値の相関、回帰では非負。**$R^2$**: モデルの説明力。**$R^2 = 1$ で完全フィット、$0$ で平均と同じ**。" },
  { id: "g2-q61", category: "回帰", difficulty: 3, question: "**重回帰の VIF**(Variance Inflation Factor)が **5 を超える** ときの解釈として最も適切なものを選びなさい。", choices: ["多重共線性の懸念あり", "問題なし", "高 R²", "過学習"], correctIndex: 0, explanation: "**VIF = 1/(1-R_j²)**(他の説明変数で X_j を回帰した R²)。**VIF > 5 注意、> 10 で深刻**。除去 / 主成分 / Ridge で対処。" },
  { id: "g2-q62", category: "回帰", difficulty: 3, question: "**残差プロット** が **漏斗状(分散不均一)** のとき採用すべき対策として最も適切なものを選びなさい。", choices: ["WLS(加重最小二乗)or 変数変換(log / Box-Cox)", "サンプル削除", "p 値強調", "回帰打切"], correctIndex: 0, explanation: "**Heteroscedasticity 対策**: WLS / Robust SE(White / HC3)/ 変数変換(log / Box-Cox)/ Generalized Least Squares(GLS)。" },
  { id: "g2-q63", category: "相関", difficulty: 3, question: "**Spearman 順位相関** が **Pearson** より頑健な場面として最も適切なものを選びなさい。", choices: ["外れ値 + 非線形だが単調な関係", "厳密に線形", "正規分布の n=1000", "1 変量"], correctIndex: 0, explanation: "**Spearman**: 順位ベース → 外れ値耐性 + 単調関係を捉える。**Pearson は線形性 + 正規性前提**。" },
  { id: "g2-q64", category: "クロス集計", difficulty: 3, question: "**$\\chi^2$ 適合度検定** の **自由度** として正しいものを選びなさい。", choices: ["カテゴリ数 - 1 - 推定パラメータ数", "n - 1", "k - 1 のみ", "n - 2"], correctIndex: 0, explanation: "**適合度 $\\chi^2$ 自由度 = 階級数 - 1 - 推定パラメータ数**。**独立性検定** は (行 - 1)(列 - 1)。" },
  { id: "g2-q65", category: "確率分布", difficulty: 3, question: "**指数分布 Exp($\\lambda$)** の **無記憶性** の意味として最も適切なものを選びなさい。", choices: ["$P(X > s+t | X > s) = P(X > t)$", "確率積分", "対称性", "正規性"], correctIndex: 0, explanation: "**Memoryless Property**: 過去経過に依存しない。**指数分布 ・ 幾何分布** のみが持つ特性。Poisson プロセスの待ち時間 = 指数分布。" },
  { id: "g2-q66", category: "時系列", difficulty: 3, question: "**自己相関関数(ACF)** の **ラグ 1** の値が **0.9** のとき、データの性質として正しいものを選びなさい。", choices: ["強い時系列依存(連続値の連続関係)", "ランダム", "周期性なし", "正規分布"], correctIndex: 0, explanation: "**ACF ラグ 1 大** → 隣接値が強く相関 → 時系列依存。**白色雑音は ACF が全て 0**(ラグ 0 除く)。" },
  { id: "g2-q67", category: "実験計画", difficulty: 3, question: "**RCT(無作為化比較試験)** の主目的として最も適切なものを選びなさい。", choices: ["処置以外の交絡を期待値的にバランス → 因果効果推定", "サンプルサイズ削減", "コスト削減", "ランダム化不要"], correctIndex: 0, explanation: "**RCT**: 無作為割り当てで観察 / 未観察交絡を期待値的にバランス。**因果推論のゴールドスタンダード**。製薬 / 経済 / マーケで活用。" },
  { id: "g2-q68", category: "サンプル", difficulty: 3, question: "**有限母集団修正** が必要となる条件として最も適切なものを選びなさい。", choices: ["サンプルサイズが母集団の 5% 以上", "n < 30", "正規分布", "n = N"], correctIndex: 0, explanation: "**FPC = $\\sqrt{(N-n)/(N-1)}$**: $n/N$ が大きいときに分散を縮小。**目安 n/N > 0.05** で考慮。電話帳調査 ・ 専門職集団等で重要。" },
  { id: "g2-q69", category: "ベイズ", difficulty: 3, question: "**ベイズの定理** で **事前 ・ 尤度 ・ 周辺尤度 ・ 事後** の関係として正しいものを選びなさい。", choices: ["事後 = 尤度 × 事前 / 周辺尤度", "事後 = 事前", "尤度 = 事後", "周辺尤度 = 1"], correctIndex: 0, explanation: "**Bayes**: $P(\\theta|D) = P(D|\\theta) P(\\theta) / P(D)$。**事前**: $P(\\theta)$、**尤度**: $P(D|\\theta)$、**周辺尤度**: $P(D)$。" },
  { id: "g2-q70", category: "次のステップ", difficulty: 1, question: "統計検定 2 級合格後の次のステップとして最も適切なものを選びなさい。", choices: ["準 1 級(多変量 ・ ベイズ ・ 時系列)or DS 検定 / G 検定", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**2 級 → 準 1 級 → 1 級(数理深掘り)** が王道。並行で **DS 検定 / G 検定 / E 資格 / Python データ分析** で応用力向上。**三大クラウド ML** で実装力も。" },
  { id: "g2-q71", category: "推定", difficulty: 3, question: "**母比率 $p$ の 95% 信頼区間**(正規近似)として最も適切なものを選びなさい。", choices: ["$\\hat{p} \\pm 1.96 \\sqrt{\\hat{p}(1-\\hat{p})/n}$", "$\\hat{p} \\pm 1.96 \\sqrt{n}$", "$\\hat{p} \\pm 1.96 \\sqrt{\\hat{p}/n}$", "$\\hat{p} \\pm n/1.96$"], correctIndex: 0, explanation: "**母比率 CI**: $\\hat{p} \\pm z \\sqrt{\\hat{p}(1-\\hat{p})/n}$。**$n\\hat{p} \\geq 5$ かつ $n(1-\\hat{p}) \\geq 5$** が近似条件。**Wilson 法**(小標本に頑健)もあり。" },
  { id: "g2-q72", category: "推定", difficulty: 3, question: "**標本サイズ設計** で **誤差 $\\epsilon$** を一定にする場合、**$n$ と $\\epsilon$** の関係として正しいものを選びなさい。", choices: ["$n \\propto 1 / \\epsilon^2$(誤差半減 → サンプル 4 倍)", "$n \\propto \\epsilon$", "$n \\propto 1 / \\epsilon$", "無関係"], correctIndex: 0, explanation: "**$\\epsilon = z \\sigma / \\sqrt{n}$** → $n = (z\\sigma/\\epsilon)^2 \\propto 1/\\epsilon^2$。**精度を 2 倍にするには 4 倍のサンプル**が必要 → サンプル設計の鉄則。" },
  { id: "g2-q73", category: "検定", difficulty: 3, question: "**2 標本 t 検定(等分散仮定)** のプールド分散 $s_p^2$ として正しいものを選びなさい。", choices: ["$\\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}$", "$s_1^2 + s_2^2$", "$\\max(s_1^2, s_2^2)$", "$(s_1 + s_2)/2$"], correctIndex: 0, explanation: "**Pooled Variance**: 自由度で加重平均。検定統計量: $t = (\\bar{x_1} - \\bar{x_2}) / (s_p \\sqrt{1/n_1 + 1/n_2})$、自由度 $n_1 + n_2 - 2$。**等分散が疑わしいなら Welch の t 検定**。" },
  { id: "g2-q74", category: "検定", difficulty: 3, question: "**$\\chi^2$ 独立性検定** の自由度として正しいものを選びなさい($r$ 行 $c$ 列の分割表)。", choices: ["$(r-1)(c-1)$", "$rc$", "$r + c$", "$rc - 1$"], correctIndex: 0, explanation: "**独立性検定**: $\\chi^2 = \\sum (O - E)^2 / E$、自由度 $(r-1)(c-1)$。**期待度数 5 以上**が条件、満たさないなら Fisher の正確検定。" },
  { id: "g2-q75", category: "回帰", difficulty: 3, question: "**最小二乗法** で **回帰係数 $\\hat{\\beta}$** の最小二乗推定量(OLS)の式として正しいものを選びなさい。", choices: ["$\\hat{\\beta} = (X^T X)^{-1} X^T y$", "$\\hat{\\beta} = X y$", "$\\hat{\\beta} = X^T y / n$", "$\\hat{\\beta} = y^T X$"], correctIndex: 0, explanation: "**OLS**: 残差平方和 $\\|y - X\\beta\\|^2$ を最小化 → 正規方程式 $X^T X \\hat{\\beta} = X^T y$ → $\\hat{\\beta} = (X^T X)^{-1} X^T y$。**$X^T X$ が正則**(多重共線性なし)が条件。" },
  { id: "g2-q76", category: "回帰", difficulty: 3, question: "**決定係数 $R^2$** の解釈として最も適切なものを選びなさい。", choices: ["説明変数で説明できる目的変数の分散の割合(0〜1)", "予測誤差", "標準偏差", "サンプルサイズ"], correctIndex: 0, explanation: "**$R^2 = 1 - SS_{res}/SS_{tot}$**。**自由度調整済 $R^2$**: 変数追加のペナルティ込み($\\bar{R}^2 = 1 - (1-R^2)(n-1)/(n-p-1)$)。多重回帰でモデル比較に。" },
  { id: "g2-q77", category: "回帰", difficulty: 3, question: "**多重共線性(Multicollinearity)** の診断指標として最も適切なものを選びなさい。", choices: ["VIF(Variance Inflation Factor)≥ 10 で要注意", "$R^2$ のみ", "p 値のみ", "GPU 数"], correctIndex: 0, explanation: "**VIF = 1/(1-R_j^2)**($X_j$ を他の説明変数で回帰した $R^2$)。**VIF > 10** で共線性強。対策: 変数削除 / PCA / Ridge / Elastic Net。" },
  { id: "g2-q78", category: "分散分析", difficulty: 3, question: "**一元配置分散分析(One-way ANOVA)** の検定統計量 F の構成として最も適切なものを選びなさい。", choices: ["群間分散 / 群内分散", "群内 / 群間", "全分散 / 群間", "サンプルサイズ"], correctIndex: 0, explanation: "**F = MS_between / MS_within**($k-1$, $n-k$ 自由度の F 分布)。**Between 大 / Within 小 → 群間差が顕著**。**事後解析**: Tukey HSD / Bonferroni。" },
  { id: "g2-q79", category: "ノンパラメ", difficulty: 3, question: "**Wilcoxon 順位和検定** の用途として最も適切なものを選びなさい。", choices: ["2 群の中央値比較の非パラメトリック検定(t 検定の代替)", "正規性検定", "ペア比較限定", "回帰"], correctIndex: 0, explanation: "**Wilcoxon 順位和**(= Mann-Whitney U): 正規性 ・ 等分散性なしの 2 群比較。**ペア標本**には **Wilcoxon 符号付順位検定**。**Kruskal-Wallis** は 3 群以上の非パラメ。" },
  { id: "g2-q80", category: "実務", difficulty: 3, question: "統計検定 2 級で重視される **実務統合能力** として最も適切なものを選びなさい。", choices: ["記述 + 推定 + 検定 + 回帰 + 分散分析 + 確率分布 + 実データ解釈の総合", "数学公式のみ", "GUI 操作のみ", "Excel 操作のみ"], correctIndex: 0, explanation: "**2 級試験範囲**: ① 記述統計 ② 確率分布 ③ 推定 ・ 検定 ④ 回帰 ・ 相関 ⑤ 分散分析 ⑥ ノンパラメトリック ⑦ 実データ解釈。**実務 ・ 大学初級〜中級レベル**の総合判定。受験者数最多の本命級。" },
  { id: "g2-q81", category: "確率分布", difficulty: 3, question: "**ポアソン分布 Poisson(λ)** の平均と分散の関係として正しいものを選びなさい。", choices: ["平均 = 分散 = λ", "平均 = λ, 分散 = λ²", "平均 = λ², 分散 = λ", "両者ともゼロ"], correctIndex: 0, explanation: "**Poisson(λ)**: $E[X] = Var[X] = \\lambda$。**稀な事象の発生回数**(コール / アクセス / 故障 / 感染等)。**$n$ 大 / $p$ 小の二項分布の極限** が Poisson(=$n p$)。" },
  { id: "g2-q82", category: "確率分布", difficulty: 3, question: "**$n$ 大の場合の二項分布 B(n, p) の正規近似** $N(?, ?)$ のパラメータとして正しいものを選びなさい。", choices: ["$N(np, np(1-p))$", "$N(p, np)$", "$N(np, p)$", "$N(0, 1)$"], correctIndex: 0, explanation: "**De Moivre-Laplace**: $n \\to \\infty$ で $B(n, p) \\to N(np, np(1-p))$。**$np \\geq 5$ かつ $n(1-p) \\geq 5$** が目安。**連続性補正**(±0.5)で精度向上。" },
  { id: "g2-q83", category: "推定", difficulty: 3, question: "**母分散の信頼区間** の検定統計量として使う分布として正しいものを選びなさい。", choices: ["$\\chi^2$ 分布", "$t$ 分布", "$F$ 分布", "正規分布"], correctIndex: 0, explanation: "**母分散 CI**: $(n-1)s^2 / \\sigma^2 \\sim \\chi^2(n-1)$。**母平均 CI**(正規 ・ $\\sigma$ 既知): 標準正規。**母平均 CI**($\\sigma$ 未知): t 分布。**2 母分散の比**: F 分布。" },
  { id: "g2-q84", category: "検定", difficulty: 3, question: "**Welch の t 検定** の特徴として最も適切なものを選びなさい。", choices: ["2 標本 t 検定で **等分散仮定が不要**(Behrens-Fisher 問題)", "等分散必須", "ペア標本専用", "ノンパラメ"], correctIndex: 0, explanation: "**Welch**: 自由度を Satterthwaite で調整 → 等分散性を仮定せず適用可。**R では `t.test(x, y)` の既定動作**。Student の t と並ぶ標準的 2 標本検定。" },
  { id: "g2-q85", category: "回帰", difficulty: 3, question: "**残差プロット** で検出できる回帰モデルの問題として **誤っているもの** を選びなさい。", choices: ["非線形性(残差にパターン)", "等分散性違反(残差の広がり変化)", "外れ値(離れた点)", "サンプルサイズ不足"], correctIndex: 3, explanation: "**残差プロット**: 残差 vs 予測値 / X / Time で **非線形 / Heteroscedasticity / 外れ値 / 自己相関**を診断。**Sample Size はプロットからは見えない**。**Q-Q プロットで正規性**も併用。" },
  { id: "g2-q86", category: "回帰", difficulty: 3, question: "**Cook 距離** の用途として最も適切なものを選びなさい。", choices: ["影響度の大きい観測値(High Leverage + Outlier)を検出", "GPU 監視", "認証", "Cost"], correctIndex: 0, explanation: "**Cook's D**: 観測 i を除いた時の回帰係数変化を測定。**D > 1 や D > 4/n** で要注意。**Leverage(hat 値)・ DFFITS / DFBETAS** も影響度診断の標準指標。" },
  { id: "g2-q87", category: "分散分析", difficulty: 3, question: "**二元配置分散分析**(Two-way ANOVA)で **誤っているもの** を選びなさい。", choices: ["主効果 A / 主効果 B / 交互作用 A×B の 3 つを検定", "Sum of Squares = SSA + SSB + SSAB + SSE", "交互作用が有意なら主効果単独の解釈は慎重に", "GPU 効果も検定"], correctIndex: 3, explanation: "**Two-way ANOVA**: 2 要因 + 交互作用。**交互作用が有意なら主効果単独で結論せず、各水準組合せで議論**。**Repeated Measures ANOVA**(被験者内要因)もあり。" },
  { id: "g2-q88", category: "ノンパラメ", difficulty: 3, question: "**符号付順位検定(Wilcoxon Signed-Rank)** の用途として最も適切なものを選びなさい。", choices: ["対応のある 2 標本(ペア)の中央値比較 ・ 正規性不要", "独立 2 標本", "回帰", "GPU"], correctIndex: 0, explanation: "**Wilcoxon Signed-Rank**: ペア標本(前後 / 兄弟 等)に t 検定の代替。**独立 2 標本は Mann-Whitney(順位和)**、**3 群以上は Friedman**(対応あり)/ **Kruskal-Wallis**(独立)。" },
  { id: "g2-q89", category: "実践", difficulty: 3, question: "**p 値 0.05** の **誤った解釈** として最も該当するものを選びなさい。", choices: ["『帰無仮説が真である確率が 5%』", "帰無仮説下で観測以上に極端な結果が出る確率が 5%", "α = 5% で棄却される境界値", "効果量とは独立の指標"], correctIndex: 0, explanation: "**p 値の正しい定義**: 帰無仮説下で観測以上の極端さの確率。**よくある誤解**: ① 帰無仮説が真の確率 ② 効果量 ③ 結果の再現性。**ASA 統計学会 2016 声明** で正しい理解の重要性が強調されました。" },
  { id: "g2-q90", category: "実践", difficulty: 3, question: "**Multiple Comparisons(多重比較)** の補正手法として **誤っているもの** を選びなさい。", choices: ["Bonferroni 補正(p ≤ α/m)", "Holm 補正(Bonferroni の改良)", "Benjamini-Hochberg(FDR 制御)", "GPU 補正"], correctIndex: 3, explanation: "**多重検定問題**: 検定数 m 増で第 1 種誤りが累積。**Bonferroni**(保守的)・ **Holm**(段階的)・ **BH / Storey q-value**(FDR 制御 ・ ゲノム / 大規模実験で標準)。GPU は無関係。" },
  { id: "g2-q91", category: "回帰診断", difficulty: 3, question: "**残差プロットでファン状(漏斗状)の広がり** が観察された場合、**最も該当する仮定違反** を選びなさい。", choices: ["等分散性 (Homoscedasticity) の違反", "線形性の違反", "正規性の違反", "独立性の違反"], correctIndex: 0, explanation: "**ファン状 = 残差の分散が x で変化** = 不等分散 (Heteroscedasticity)。**対策**: ① 対数変換 / 平方根変換、② 加重最小二乗 (WLS)、③ ロバスト標準誤差 (Huber-White)。" },
  { id: "g2-q92", category: "ロジスティック回帰", difficulty: 3, question: "**ロジスティック回帰の係数 $\\beta = 0.7$** の解釈として最も適切なものを選びなさい。", choices: ["説明変数を 1 上げると **オッズ比** が $e^{0.7} \\approx 2.0$ 倍", "確率が 0.7 増", "y が 0.7 増", "p 値が 0.7"], correctIndex: 0, explanation: "**ロジスティック回帰**: $\\log \\frac{p}{1-p} = X\\beta$ → 係数 $\\beta$ は **対数オッズ比**。$e^\\beta$ が **オッズ比**。$\\beta=0.7$ → オッズ比 $e^{0.7} \\approx 2.01$ 倍。" },
  { id: "g2-q93", category: "時系列", difficulty: 3, question: "**ホワイトノイズ** の定義として最も適切なものを選びなさい。", choices: ["平均 0・分散一定・自己相関 0 の系列", "正規分布に従う", "増加トレンドあり", "周期性あり"], correctIndex: 0, explanation: "**ホワイトノイズ**: 平均 0、分散 $\\sigma^2$ 一定、$\\text{Cov}(\\epsilon_t, \\epsilon_s)=0$ ($t \\neq s$)。**iid 仮定の理想形**。Ljung-Box 検定で残差がホワイトノイズか確認。" },
  { id: "g2-q94", category: "時系列", difficulty: 3, question: "**ARIMA(p, d, q) モデル** の **d パラメータ** の意味として最も適切なものを選びなさい。", choices: ["差分の回数 (定常化)", "AR 次数", "MA 次数", "周期"], correctIndex: 0, explanation: "**ARIMA**: AR(p) + Integrated(d) + MA(q)。**d = 差分回数** で非定常を定常化 (トレンド除去)。ADF / KPSS 検定で d 決定。季節調整は **SARIMA(p,d,q)(P,D,Q,s)**。" },
  { id: "g2-q95", category: "ベイズ", difficulty: 3, question: "**ベイズ推定** で **事前分布 → 観測 → 事後分布** の流れの中、**事後分布が事前分布と同じ族に属する性質** を選びなさい。", choices: ["共役性 (Conjugacy)", "独立性", "MLE", "正規性"], correctIndex: 0, explanation: "**共役事前分布**: 事後が同族 → 解析計算可。**例**: 二項尤度 + ベータ事前 → ベータ事後、正規 + 正規 → 正規。実用 MCMC ではあまり要らないが教科書頻出。" },
  { id: "g2-q96", category: "実験計画", difficulty: 3, question: "**ランダム化比較試験 (RCT)** の最大の利点として最も適切なものを選びなさい。", choices: ["観測されない交絡変数も平均的にバランス取れる", "サンプルサイズが小さくて済む", "計算が早い", "結果が必ず有意"], correctIndex: 0, explanation: "**RCT**: 処置をランダム割付 → 観測 / 未観測の交絡を確率的に均等化 → **因果効果の不偏推定**。観察研究では DAG + 傾向スコア / IV / DiD などで対応。" },
  { id: "g2-q97", category: "標本調査", difficulty: 3, question: "**層化抽出法** が **単純無作為抽出** より優れる場面として最も適切なものを選びなさい。", choices: ["群内分散が小さく群間分散が大きい場合", "全て同質な母集団", "計算が複雑な場合", "標本サイズが小さい場合"], correctIndex: 0, explanation: "**層化**: 母集団を分けて各層から抽出 → 群内分散小・群間分散大の場合に推定分散縮小。**比例配分**: 各層を母集団比で抽出。**最適配分 (ネイマン配分)**: 標準偏差大の層を多く。" },
  { id: "g2-q98", category: "ノンパラメ", difficulty: 3, question: "**Kruskal-Wallis 検定** の用途として最も適切なものを選びなさい。", choices: ["独立 3 群以上の中央値比較 (順位検定・正規性不要)", "対応のある 2 標本", "回帰係数の検定", "分散の検定"], correctIndex: 0, explanation: "**Kruskal-Wallis**: 一元配置 ANOVA のノンパラメ版。**順位平均の差を検定**。有意なら **Dunn 検定** で多重比較。**正規性 ・ 等分散性 不要** で外れ値にロバスト。" },
  { id: "g2-q99", category: "効果量", difficulty: 3, question: "**Cohen's d = 0.8** の解釈として最も適切なものを選びなさい。", choices: ["大きい効果 (Large effect size)", "中くらい", "小さい", "ゼロ"], correctIndex: 0, explanation: "**Cohen 基準**: d = 0.2 (小)、0.5 (中)、0.8 (大)。**効果量は p 値とは独立** で、サンプルサイズに依らず効果の実質的大きさを表す。論文には必須報告。" },
  { id: "g2-q100", category: "実践", difficulty: 3, question: "**統計検定 2 級合格後** の最も推奨される次ステップを選びなさい。", choices: ["統計検定準 1 級 (応用統計の全領域)", "1 級に直接", "DS エキスパートに直接", "再受験"], correctIndex: 0, explanation: "**2 級 → 準 1 級** が王道。準 1 級は多変量・ベイズ・時系列・実験計画など応用統計の全領域を網羅。**実務派なら 2 級 → DS 発展 → DS エキスパート** の並行ルートも有効。" },
];
