import type { Question } from "@/types/content";

export const gradeThreeQuestions: Question[] = [
  {
    id: "g3-q1",
    difficulty: 1,
    category: "記述統計",
    question:
      "次の5個のデータの平均値として最も適切なものを選びなさい: $3,\\ 5,\\ 7,\\ 9,\\ 11$",
    choices: ["$5$", "$6$", "$7$", "$8$"],
    correctIndex: 2,
    explanation:
      "平均値は $(3+5+7+9+11)/5 = 35/5 = 7$。等差数列なので中央の値がそのまま平均になる。",
  },
  {
    id: "g3-q2",
    difficulty: 1,
    category: "記述統計",
    question:
      "次の7個のデータの中央値として最も適切なものを選びなさい: $2,\\ 4,\\ 4,\\ 6,\\ 8,\\ 10,\\ 15$",
    choices: ["$4$", "$6$", "$7$", "$8$"],
    correctIndex: 1,
    explanation:
      "データはすでに昇順。$n = 7$(奇数)なので中央値は $4$ 番目の値、すなわち $6$。",
  },
  {
    id: "g3-q3",
    difficulty: 2,
    category: "記述統計",
    question:
      "データ $2,\\ 4,\\ 6,\\ 8,\\ 10$ の分散として最も適切なものを選びなさい。",
    choices: ["$4$", "$6$", "$8$", "$10$"],
    correctIndex: 2,
    explanation:
      "平均は $6$。偏差は $-4, -2, 0, 2, 4$、2乗和は $16+4+0+4+16 = 40$。分散 $= 40/5 = 8$。",
  },
  {
    id: "g3-q4",
    difficulty: 2,
    category: "記述統計",
    question:
      "次のデータの四分位範囲 $\\mathrm{IQR}$ として最も適切なものを選びなさい: $1,\\ 3,\\ 5,\\ 7,\\ 9,\\ 11,\\ 13,\\ 15$",
    choices: ["$4$", "$6$", "$7$", "$8$"],
    correctIndex: 3,
    explanation:
      "下半分 $1,3,5,7$ の中央値 $Q_1 = 4$、上半分 $9,11,13,15$ の中央値 $Q_3 = 12$。$\\mathrm{IQR} = 12 - 4 = 8$。",
  },
  {
    id: "g3-q5",
    difficulty: 1,
    category: "2変数データ",
    question:
      "2変数データの相関係数が $r = -0.85$ のとき、散布図の特徴として最も適切なものを選びなさい。",
    choices: [
      "直線的な関連はほとんどない",
      "弱い正の相関がある",
      "強い負の相関があり、右下がりの傾向",
      "完全な負の比例関係にある",
    ],
    correctIndex: 2,
    explanation:
      "$|r| = 0.85$ は 1 に近く強い相関を示し、符号が負なので右下がり。$r = -1$ でないので完全な比例ではない。",
  },
  {
    id: "g3-q6",
    difficulty: 1,
    category: "確率",
    question:
      "サイコロを1回投げたとき、偶数の目が出ない確率として最も適切なものを選びなさい。",
    choices: ["$\\dfrac{1}{6}$", "$\\dfrac{1}{3}$", "$\\dfrac{1}{2}$", "$\\dfrac{2}{3}$"],
    correctIndex: 2,
    explanation:
      "偶数が出る確率は $3/6 = 1/2$。余事象より「偶数が出ない確率」$= 1 - 1/2 = 1/2$。",
  },
  {
    id: "g3-q7",
    difficulty: 2,
    category: "確率",
    question:
      "袋に赤玉3個、白玉2個が入っている。2個を同時に取り出すとき、2個とも赤玉である確率として最も適切なものを選びなさい。",
    choices: [
      "$\\dfrac{3}{25}$",
      "$\\dfrac{3}{10}$",
      "$\\dfrac{2}{5}$",
      "$\\dfrac{9}{25}$",
    ],
    correctIndex: 1,
    explanation:
      "$\\dfrac{\\binom{3}{2}}{\\binom{5}{2}} = \\dfrac{3}{10}$。順に引く解釈なら $\\dfrac{3}{5} \\times \\dfrac{2}{4} = \\dfrac{3}{10}$。",
  },
  {
    id: "g3-q8",
    difficulty: 3,
    category: "確率",
    question:
      "ある検査で、病気にかかっている人が陽性と判定される確率は $0.9$、かかっていない人が陽性と判定される確率は $0.05$ である。有病率が $0.01$ のとき、無作為に選んだ人が陽性である確率として最も近いものを選びなさい。",
    choices: ["約 $0.009$", "約 $0.05$", "約 $0.059$", "約 $0.15$"],
    correctIndex: 2,
    explanation:
      "全確率の法則より $P(陽性) = 0.01 \\times 0.9 + 0.99 \\times 0.05 = 0.009 + 0.0495 = 0.0585 \\approx 0.059$。",
  },
  {
    id: "g3-q9",
    difficulty: 2,
    category: "確率変数",
    question:
      "確率変数 $X$ の分布が $P(X=0) = 0.2,\\ P(X=1) = 0.5,\\ P(X=2) = 0.3$ であるとき、$E[X]$ として最も適切なものを選びなさい。",
    choices: ["$0.8$", "$1.0$", "$1.1$", "$1.5$"],
    correctIndex: 2,
    explanation:
      "$E[X] = 0 \\times 0.2 + 1 \\times 0.5 + 2 \\times 0.3 = 0 + 0.5 + 0.6 = 1.1$。",
  },
  {
    id: "g3-q10",
    difficulty: 2,
    category: "確率変数",
    question:
      "確率変数 $X$ が $E[X] = 10,\\ V[X] = 4$ のとき、$Y = 3X + 2$ の分散 $V[Y]$ として最も適切なものを選びなさい。",
    choices: ["$4$", "$12$", "$14$", "$36$"],
    correctIndex: 3,
    explanation:
      "線形変換の分散則より $V[aX + b] = a^2 V[X]$。$V[Y] = 3^2 \\times 4 = 36$。定数 $+2$ は分散に影響しない。",
  },
  {
    id: "g3-q11",
    difficulty: 2,
    category: "確率分布",
    question:
      "公正なコインを5回投げたとき、ちょうど3回表が出る確率として最も適切なものを選びなさい。",
    choices: [
      "$\\dfrac{3}{16}$",
      "$\\dfrac{5}{16}$",
      "$\\dfrac{3}{8}$",
      "$\\dfrac{1}{2}$",
    ],
    correctIndex: 1,
    explanation:
      "二項分布より $P(X=3) = \\binom{5}{3} \\left(\\dfrac{1}{2}\\right)^3 \\left(\\dfrac{1}{2}\\right)^2 = 10 \\times \\dfrac{1}{32} = \\dfrac{10}{32} = \\dfrac{5}{16}$。",
  },
  {
    id: "g3-q12",
    difficulty: 2,
    category: "確率分布",
    question:
      "$X \\sim B(100,\\, 0.3)$ のとき、$E[X]$ と $V[X]$ の組み合わせとして最も適切なものを選びなさい。",
    choices: [
      "$E[X] = 30,\\ V[X] = 30$",
      "$E[X] = 30,\\ V[X] = 21$",
      "$E[X] = 100,\\ V[X] = 21$",
      "$E[X] = 70,\\ V[X] = 21$",
    ],
    correctIndex: 1,
    explanation:
      "二項分布 $B(n, p)$ は $E[X] = np = 30$、$V[X] = np(1-p) = 100 \\times 0.3 \\times 0.7 = 21$。",
  },
  {
    id: "g3-q13",
    difficulty: 2,
    category: "確率分布",
    question:
      "確率変数 $X$ が平均 $50$、標準偏差 $10$ の正規分布に従うとき、$X \\leq 60$ となる確率として最も近いものを選びなさい。",
    choices: ["約 $0.50$", "約 $0.68$", "約 $0.84$", "約 $0.95$"],
    correctIndex: 2,
    explanation:
      "標準化すると $Z = (60-50)/10 = 1$。標準正規分布表より $P(Z \\leq 1) \\approx 0.8413$ なので約 $0.84$。",
  },
  {
    id: "g3-q14",
    difficulty: 2,
    category: "確率分布",
    question:
      "$X \\sim N(100,\\, 15^2)$ のとき、$85 \\leq X \\leq 115$ となる確率として最も近いものを選びなさい。",
    choices: ["約 $0.50$", "約 $0.68$", "約 $0.95$", "約 $0.99$"],
    correctIndex: 1,
    explanation:
      "区間は「平均 $\\pm$ 1標準偏差」。正規分布では $P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 0.6827$ なので約 $0.68$。",
  },
  {
    id: "g3-q15",
    difficulty: 3,
    category: "推定",
    question:
      "母標準偏差 $\\sigma = 20$ の母集団から $n = 100$ の標本をとったところ標本平均が $50$ であった。母平均の $95\\%$ 信頼区間として最も近いものを選びなさい。",
    choices: [
      "$46.1,\\ 53.9$",
      "$48.0,\\ 52.0$",
      "$30.4,\\ 69.6$",
      "$49.8,\\ 50.2$",
    ],
    correctIndex: 0,
    explanation:
      "標準誤差 $\\sigma/\\sqrt{n} = 20/10 = 2$。$z_{0.025} \\approx 1.96$ より幅は $1.96 \\times 2 = 3.92$。区間は $50 \\pm 3.92$、約 $[46.1,\\ 53.9]$。",
  },
  {
    id: "g3-q16",
    difficulty: 2,
    category: "確率",
    question:
      "袋に赤玉 $2$ 個、白玉 $3$ 個が入っている。1 個取り出した玉が赤であったとき、次に取り出した玉も赤である条件付き確率として最も適切なものを選びなさい(取り出した玉はもとに戻さない)。",
    choices: [
      "$\\dfrac{1}{5}$",
      "$\\dfrac{1}{4}$",
      "$\\dfrac{2}{5}$",
      "$\\dfrac{1}{2}$",
    ],
    correctIndex: 1,
    explanation:
      "1 個目に赤を取った後、袋には赤 1、白 3 の計 4 個。よって 2 個目が赤の条件付き確率は $1/4$。",
  },
  {
    id: "g3-q17",
    difficulty: 2,
    category: "確率分布",
    question:
      "$X \\sim N(70,\\, 10^2)$ のとき、$X \\leq 80$ となる確率として最も近いものを選びなさい。",
    choices: ["約 $0.50$", "約 $0.68$", "約 $0.84$", "約 $0.97$"],
    correctIndex: 2,
    explanation:
      "$Z = (80 - 70)/10 = 1$。$P(Z \\leq 1) \\approx 0.8413$ なので約 $0.84$。",
  },
  {
    id: "g3-q18",
    difficulty: 3,
    category: "推定",
    question:
      "ある母集団から $n = 400$ の標本をとり、標本比率 $\\hat{p} = 0.20$ を得た。母比率 $p$ の $95\\%$ 信頼区間として最も近いものを選びなさい($z_{0.025} \\approx 1.96$)。",
    choices: [
      "$[0.18,\\ 0.22]$",
      "$[0.16,\\ 0.24]$",
      "$[0.10,\\ 0.30]$",
      "$[0.19,\\ 0.21]$",
    ],
    correctIndex: 1,
    explanation:
      "標準誤差 $\\sqrt{0.2 \\times 0.8 / 400} = \\sqrt{0.0004} = 0.02$。幅 $1.96 \\times 0.02 \\approx 0.04$。区間は $0.20 \\pm 0.04$、約 $[0.16,\\ 0.24]$。",
  },
  {
    id: "g3-q19",
    difficulty: 2,
    category: "記述統計",
    question:
      "あるテストの平均が $60$ 点、標準偏差が $10$ 点であった。$80$ 点をとった人の偏差値として最も適切なものを選びなさい。",
    choices: ["$60$", "$65$", "$70$", "$75$"],
    correctIndex: 2,
    explanation:
      "z スコア $= (80 - 60)/10 = 2$。偏差値 $T = 50 + 10z = 50 + 20 = 70$。",
  },
  {
    id: "g3-q20",
    difficulty: 2,
    category: "確率分布",
    question:
      "$X \\sim \\mathrm{Bin}(20, 0.4)$ のとき、$E[X]$ と標準偏差 $\\sigma$ の組として最も近いものを選びなさい。",
    choices: [
      "$E[X] = 8,\\ \\sigma \\approx 2.19$",
      "$E[X] = 8,\\ \\sigma \\approx 4.8$",
      "$E[X] = 12,\\ \\sigma \\approx 2.19$",
      "$E[X] = 12,\\ \\sigma \\approx 4.8$",
    ],
    correctIndex: 0,
    explanation:
      "$E[X] = np = 20 \\times 0.4 = 8$、$V[X] = np(1-p) = 20 \\times 0.4 \\times 0.6 = 4.8$、$\\sigma = \\sqrt{4.8} \\approx 2.19$。",
  },
  {
    id: "g3-q21",
    difficulty: 2,
    category: "確率変数",
    question:
      "確率変数 $X$ が $E[X] = 5,\\ V[X] = 9$ のとき、$Y = -2X + 10$ について正しい組を選びなさい。",
    choices: [
      "$E[Y] = 0,\\ V[Y] = 9$",
      "$E[Y] = 0,\\ V[Y] = 36$",
      "$E[Y] = 20,\\ V[Y] = 9$",
      "$E[Y] = -10,\\ V[Y] = -18$",
    ],
    correctIndex: 1,
    explanation:
      "線形変換則より $E[Y] = -2 \\times 5 + 10 = 0$、$V[Y] = (-2)^2 \\times 9 = 36$。分散は係数の符号によらず常に正($a^2$ 倍)。",
  },
  {
    id: "g3-q22",
    difficulty: 2,
    category: "2変数データ",
    question:
      "2 変数データの相関係数が $r = -0.95$ のとき、散布図の特徴として最も適切なものを選びなさい。",
    choices: [
      "ほぼ無相関(直線関係なし)",
      "弱い正の相関、右上がり",
      "強い負の相関、右下がり",
      "完全な比例関係",
    ],
    correctIndex: 2,
    explanation:
      "$|r| = 0.95$ は 1 に近く強い相関、符号が負なので右下がり。完全な比例は $r = -1$ でないので該当しない。",
  },
  {
    id: "g3-q23",
    difficulty: 3,
    category: "確率",
    question:
      "ある検査が、病気にかかっている人を陽性と判定する確率(感度)が $0.95$、かかっていない人を陽性と判定する確率(偽陽性率)が $0.10$ のとき、有病率 $0.02$ の集団から無作為に選んだ人が陽性となる確率として最も近いものを選びなさい。",
    choices: ["約 $0.019$", "約 $0.098$", "約 $0.117$", "約 $0.95$"],
    correctIndex: 2,
    explanation:
      "全確率の法則: $P(陽性) = 0.02 \\times 0.95 + 0.98 \\times 0.10 = 0.019 + 0.098 = 0.117$。",
  },
  {
    id: "g3-q24",
    difficulty: 2,
    category: "確率分布",
    question:
      "$X \\sim \\mathrm{Bin}(10, 0.3)$ のとき、$P(X = 0)$ として最も近いものを選びなさい。",
    choices: ["$0.028$", "$0.121$", "$0.300$", "$0.700$"],
    correctIndex: 0,
    explanation:
      "$P(X = 0) = \\binom{10}{0} \\cdot 0.3^0 \\cdot 0.7^{10} = 1 \\cdot 1 \\cdot 0.7^{10}$。$0.7^{10} \\approx 0.0282$。",
  },
  {
    id: "g3-q25",
    difficulty: 2,
    category: "記述統計",
    question:
      "データ $1,\\ 3,\\ 5,\\ 7,\\ 9$ の不偏分散として最も適切なものを選びなさい。",
    choices: ["$5$", "$8$", "$10$", "$25$"],
    correctIndex: 2,
    explanation:
      "平均 $\\bar{x} = 5$。偏差平方和 $= (-4)^2+(-2)^2+0^2+2^2+4^2 = 40$。不偏分散 $= 40/(5-1) = 10$。標本分散($/n$)なら $40/5 = 8$ になるので注意。",
  },
  {
    id: "g3-q26",
    difficulty: 3,
    category: "確率分布",
    question:
      "$X \\sim N(0,\\, 1)$ のとき、$P(X \\leq 1.96)$ の値として最も近いものを選びなさい。",
    choices: ["約 $0.84$", "約 $0.90$", "約 $0.95$", "約 $0.975$"],
    correctIndex: 3,
    explanation:
      "標準正規分布表の頻出値: $P(Z \\leq 1.96) \\approx 0.975$、両側 $P(|Z| \\leq 1.96) \\approx 0.95$。95% 信頼区間で $z = 1.96$ を使う根拠。",
  },
  {
    id: "g3-q27",
    difficulty: 2,
    category: "推定",
    question:
      "母分散既知で母平均の信頼区間を作るとき、信頼度を $95\\%$ から $99\\%$ に上げると区間の幅はどう変化するか。",
    choices: [
      "狭くなる",
      "変わらない",
      "広くなる($1.96 \\to 2.576$ の比 ≈ 1.31 倍)",
      "標本サイズによる",
    ],
    correctIndex: 2,
    explanation:
      "幅は $z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n}$。信頼度を上げる($\\alpha$ を小さくする)と $z_{\\alpha/2}$ が大きくなり、幅は広がる。$2.576/1.96 \\approx 1.31$ 倍。「より確実にしたい → より広い区間」の感覚。",
  },
  {
    id: "g3-q28",
    difficulty: 1,
    category: "確率分布",
    question:
      "正規分布 $N(\\mu, \\sigma^2)$ のおよそ 68% の値が含まれる範囲として最も適切なものはどれか。",
    choices: [
      "$\\mu \\pm \\sigma$",
      "$\\mu \\pm 2\\sigma$",
      "$\\mu \\pm 3\\sigma$",
      "$\\mu \\pm 0.5\\sigma$",
    ],
    correctIndex: 0,
    explanation:
      "正規分布の 68-95-99.7 ルール。$\\mu \\pm \\sigma$ で 68%、$\\mu \\pm 2\\sigma$ で 95%、$\\mu \\pm 3\\sigma$ で 99.7%。",
  },
  {
    id: "g3-q29",
    difficulty: 2,
    category: "標本分布",
    question:
      "母分散 $\\sigma^2 = 100$ の母集団から $n = 25$ の標本をとるとき、標本平均 $\\bar{X}$ の標準誤差はいくらか。",
    choices: ["$2$", "$4$", "$10$", "$20$"],
    correctIndex: 0,
    explanation:
      "$\\mathrm{SE}(\\bar{X}) = \\sigma/\\sqrt{n} = \\sqrt{100}/\\sqrt{25} = 10/5 = 2$。",
  },
  {
    id: "g3-q30",
    difficulty: 1,
    category: "確率",
    question:
      "事象 $A$ と $B$ が排反のとき、$P(A \\cup B)$ として最も適切なものはどれか。",
    choices: [
      "$P(A) + P(B)$",
      "$P(A) \\times P(B)$",
      "$P(A) - P(B)$",
      "$P(A \\mid B)$",
    ],
    correctIndex: 0,
    explanation:
      "排反 = 同時に起こらない($A \\cap B = \\emptyset$)とき、加法定理より $P(A \\cup B) = P(A) + P(B)$。",
  },
  {
    id: "g3-q31",
    difficulty: 2,
    category: "二項分布",
    question:
      "$X \\sim B(10, 0.3)$ の期待値と分散として最も適切なものはどれか。",
    choices: [
      "$E[X] = 3,\\ V[X] = 2.1$",
      "$E[X] = 3,\\ V[X] = 3$",
      "$E[X] = 0.3,\\ V[X] = 0.21$",
      "$E[X] = 10,\\ V[X] = 7$",
    ],
    correctIndex: 0,
    explanation:
      "二項分布: $E[X] = np = 10 \\times 0.3 = 3$、$V[X] = np(1-p) = 10 \\times 0.3 \\times 0.7 = 2.1$。",
  },
  {
    id: "g3-q32",
    difficulty: 2,
    category: "相関",
    question:
      "相関係数 $r$ が $-1 \\leq r \\leq 1$ の範囲を取る理由として最も適切な記述はどれか。",
    choices: [
      "コーシー・シュワルツ不等式により共分散の絶対値が標準偏差の積以下に抑えられるため",
      "経験則で決まったから",
      "計算の都合でそうなる",
      "サンプル数に依存する",
    ],
    correctIndex: 0,
    explanation:
      "$r = \\mathrm{Cov}(X, Y)/(\\sigma_X \\sigma_Y)$。$|\\mathrm{Cov}(X, Y)| \\leq \\sigma_X \\sigma_Y$ がコーシー・シュワルツから直ちに従う。完全線形のとき等号。",
  },

  // === Ch5 仮説検定の基礎 ===
  {
    id: "g3-q33",
    difficulty: 1,
    category: "仮説検定",
    question:
      "両側 5% の z 検定における棄却域として最も適切なものを選びなさい。",
    choices: [
      "$|Z| \\geq 1.645$",
      "$|Z| \\geq 1.96$",
      "$|Z| \\geq 2.576$",
      "$Z \\geq 1.645$",
    ],
    correctIndex: 1,
    explanation:
      "両側 5% の場合、各裾 2.5% で $z_{0.025} = 1.96$。$1.645$ は片側 5%、$2.576$ は両側 1%。",
  },
  {
    id: "g3-q34",
    difficulty: 1,
    category: "仮説検定",
    question:
      "p 値の解釈として最も適切なものを選びなさい。",
    choices: [
      "帰無仮説が正しい確率",
      "対立仮説が正しい確率",
      "帰無仮説が正しいと仮定したとき、観測データ以上に極端な値が得られる確率",
      "標本平均が母平均と等しくなる確率",
    ],
    correctIndex: 2,
    explanation:
      "p 値は条件付き確率 $P(\\text{極端なデータ} \\mid H_0)$。『$H_0$ が正しい確率』ではないので注意。$p < \\alpha$ で $H_0$ を棄却。",
  },
  {
    id: "g3-q35",
    difficulty: 2,
    category: "仮説検定",
    question:
      "母分散 $\\sigma^2 = 100$ の母集団から $n = 25$ の標本を取り、標本平均が $\\bar X = 105$ だった。$H_0: \\mu = 100$ に対する両側 z 検定の検定統計量 $Z$ を求めよ。",
    choices: [
      "$Z = 0.5$",
      "$Z = 1.0$",
      "$Z = 2.5$",
      "$Z = 5.0$",
    ],
    correctIndex: 2,
    explanation:
      "$Z = (\\bar X - \\mu_0)/(\\sigma/\\sqrt n) = (105 - 100)/(10/\\sqrt{25}) = 5/2 = 2.5$。$|Z|=2.5 \\geq 1.96$ なので両側 5% で棄却。",
  },
  {
    id: "g3-q36",
    difficulty: 2,
    category: "仮説検定",
    question:
      "第一種の誤り $\\alpha$ と第二種の誤り $\\beta$ の関係について、最も適切なものを選びなさい。",
    choices: [
      "$\\alpha$ を厳しく(小さく)すると、$\\beta$ も小さくなる",
      "$\\alpha$ を厳しく(小さく)すると、$\\beta$ は大きくなる(検出力が下がる)",
      "$\\alpha$ と $\\beta$ は独立で、互いに影響しない",
      "$\\alpha + \\beta = 1$ が常に成り立つ",
    ],
    correctIndex: 1,
    explanation:
      "$\\alpha$ と $\\beta$ はトレードオフ。$\\alpha$ を厳しくすると棄却しにくくなるので、真の差を見逃す確率 $\\beta$ が増える。両者を同時に下げるには標本サイズを増やすしかない。",
  },
  {
    id: "g3-q37",
    difficulty: 2,
    category: "仮説検定",
    question:
      "200 人にアンケートしたところ 72 人が支持した。標本支持率 $\\hat p = 0.36$。$H_0: p = 0.30$ に対する両側 z 検定統計量を求めよ。",
    choices: [
      "$Z \\approx 0.93$",
      "$Z \\approx 1.85$",
      "$Z \\approx 2.50$",
      "$Z \\approx 3.27$",
    ],
    correctIndex: 1,
    explanation:
      "$Z = (0.36 - 0.30)/\\sqrt{0.30 \\cdot 0.70/200} = 0.06/\\sqrt{0.00105} \\approx 0.06/0.0324 \\approx 1.85$。両側 5% で $|Z|=1.85 < 1.96$ なので棄却できない。",
  },
  {
    id: "g3-q38",
    difficulty: 2,
    category: "仮説検定",
    question:
      "サイコロを 60 回振り、各目の出現回数が $8, 13, 9, 11, 7, 12$ だった。期待度数 $E_i = 10$ としてカイ二乗統計量を求めよ。",
    choices: [
      "$\\chi^2 = 1.4$",
      "$\\chi^2 = 2.8$",
      "$\\chi^2 = 4.2$",
      "$\\chi^2 = 11.07$",
    ],
    correctIndex: 1,
    explanation:
      "$\\chi^2 = \\sum (O_i - E_i)^2/E_i = (4+9+1+1+9+4)/10 = 28/10 = 2.8$。自由度 5 の右側 5% 点は 11.07 なので棄却できない(サイコロが偏っているとはいえない)。",
  },
  {
    id: "g3-q39",
    difficulty: 3,
    category: "仮説検定",
    question:
      "信頼区間と仮説検定の関係について、最も適切なものを選びなさい(同じ標本に基づく)。",
    choices: [
      "95% 信頼区間に $\\mu_0$ が含まれる ⇔ 両側 5% で $H_0: \\mu = \\mu_0$ を棄却",
      "95% 信頼区間に $\\mu_0$ が含まれない ⇔ 両側 5% で $H_0: \\mu = \\mu_0$ を棄却",
      "両者は別物で対応関係はない",
      "片側検定の場合のみ対応する",
    ],
    correctIndex: 1,
    explanation:
      "信頼区間と両側検定は表裏一体。$1-\\alpha$ 信頼区間に帰無値が含まれない ⇔ 両側 $\\alpha$ で棄却。これを覚えると検定の感覚がぐっとつかめる。",
  },
  {
    id: "g3-q40",
    difficulty: 3,
    category: "仮説検定",
    question:
      "対立仮説 $H_1: \\mu > 100$(右片側)で z 検定。有意水準 $\\alpha = 0.05$ の棄却条件として正しいものを選びなさい。",
    choices: [
      "$Z \\geq 1.96$",
      "$Z \\geq 1.645$",
      "$|Z| \\geq 1.645$",
      "$Z \\leq -1.645$",
    ],
    correctIndex: 1,
    explanation:
      "右片側 5% は $z_{0.05} = 1.645$。$Z \\geq 1.645$ で棄却。両側ではないので絶対値ではなく $Z$ 自体を見る。$1.96$ は両側 5% の値。",
  },
  { id: "g3-q41", category: "確率", difficulty: 2, question: "**$P(A) = 0.3$、$P(B) = 0.5$、$P(A \\cap B) = 0.15$** のとき A と B は **独立** か。", choices: ["独立", "従属", "排反", "判定不能"], correctIndex: 0, explanation: "**独立条件**: $P(A \\cap B) = P(A) \\cdot P(B) = 0.3 \\times 0.5 = 0.15$。一致するので独立。" },
  { id: "g3-q42", category: "確率分布", difficulty: 3, question: "**ポアソン分布 Poisson(λ)** の **分散** として正しいものを選びなさい。", choices: ["λ", "$\\lambda^2$", "$1/\\lambda$", "$\\sqrt{\\lambda}$"], correctIndex: 0, explanation: "**ポアソン**: $E[X] = Var[X] = \\lambda$(平均 = 分散)。**離散 ・ 稀な事象の発生回数**(電話 / 事故 / 不良品)。" },
  { id: "g3-q43", category: "標本分布", difficulty: 3, question: "**中心極限定理(CLT)** が保証することとして最も適切なものを選びなさい。", choices: ["独立同分布な標本平均は $n$ 大で漸近的に正規分布", "全データが正規", "母集団が正規必須", "標本誤差ゼロ"], correctIndex: 0, explanation: "**CLT**: $\\bar{X} \\to N(\\mu, \\sigma^2/n)$(母集団分布によらず)。**信頼区間 ・ 検定の根幹**。一般に $n \\geq 30$ で実用。" },
  { id: "g3-q44", category: "推定", difficulty: 3, question: "**95% 信頼区間** が **広い** ときの主な要因として **誤っているもの** を選びなさい。", choices: ["標本サイズが小さい", "標本標準偏差が大きい", "信頼度を上げた(90% → 99%)", "推定値が中央値"], correctIndex: 3, explanation: "**CI 幅**: $\\bar{x} \\pm z_{\\alpha/2} \\cdot s / \\sqrt{n}$。**$n$ 小 ・ $s$ 大 ・ 信頼度高** で広くなる。推定値が中央値かどうかは関係ない。" },
  { id: "g3-q45", category: "回帰", difficulty: 3, question: "**最小二乗法** で **損失関数** として正しいものを選びなさい。", choices: ["$\\sum (y_i - \\hat{y}_i)^2$", "$\\sum |y_i - \\hat{y}_i|$", "$\\sum y_i^2$", "$\\max y_i$"], correctIndex: 0, explanation: "**OLS**: 残差二乗和最小化。**MAE($L_1$)** は外れ値耐性、**Huber Loss** は両者の折衷。" },
  { id: "g3-q46", category: "相関", difficulty: 2, question: "**Pearson 相関係数 r = 0.92** の解釈として最も適切なものを選びなさい。", choices: ["強い正の線形関係", "弱い相関", "負の相関", "因果関係あり"], correctIndex: 0, explanation: "**r = 0.92**: 強い正の線形関係(r > 0.7 で強相関)。**ただし因果は別途検証必要**(交絡 / 逆因果)。" },
  { id: "g3-q47", category: "クロス集計", difficulty: 3, question: "**カイ二乗検定(独立性)** の帰無仮説として正しいものを選びなさい。", choices: ["2 つのカテゴリ変数は独立", "等分散", "正規分布", "標本平均"], correctIndex: 0, explanation: "**$\\chi^2$ 独立性検定**: H_0 = 2 変数独立(クロス表の期待度数 = 観測度数)。**自由度 = (行-1)(列-1)**。" },
  { id: "g3-q48", category: "誤差", difficulty: 2, question: "**第 1 種の過誤(α)** の意味として正しいものを選びなさい。", choices: ["真は H_0 だが棄却(False Positive)", "H_1 を見逃す", "標本誤差", "計算誤差"], correctIndex: 0, explanation: "**α(Type I)= 偽陽性率**。**β(Type II)= 偽陰性率 = 1 - 検出力**。両者はトレードオフ。**$\\alpha = 0.05$** が慣習。" },
  { id: "g3-q49", category: "サンプル", difficulty: 3, question: "**SE** を **半分** にするのに必要なサンプルサイズの倍率として正しいものを選びなさい。", choices: ["4 倍", "2 倍", "1/2 倍", "10 倍"], correctIndex: 0, explanation: "**SE = $\\sigma/\\sqrt{n}$** → SE を 1/2 にするには $\\sqrt{n}$ を 2 倍、つまり **$n$ を 4 倍**。" },
  { id: "g3-q50", category: "次のステップ", difficulty: 1, question: "統計検定 3 級合格後の次のステップとして最も適切なものを選びなさい。", choices: ["2 級 → 準 1 級(実務 ・ 高度統計)", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**3 級 → 2 級(実務統計の主力)→ 準 1 級(多変量 ・ ベイズ ・ 時系列)→ 1 級(数理深掘り)** が王道。並行で DS / AI 系も。" },
  { id: "g3-q51", category: "代表値", difficulty: 2, question: "データ {3, 5, 5, 7, 9, 11, 11, 11, 13} の **中央値** を選びなさい。", choices: ["7", "9", "11", "5"], correctIndex: 1, explanation: "9 個のデータで中央 = 5 番目 = 9。**偶数個なら中央 2 値の平均**。" },
  { id: "g3-q52", category: "ばらつき", difficulty: 3, question: "**変動係数(CV)** の定義として正しいものを選びなさい。", choices: ["SD / 平均(無次元化したばらつき)", "SD × 平均", "平均 / SD", "SD - 平均"], correctIndex: 0, explanation: "**CV = $\\sigma / \\mu$** または $s / \\bar{x}$。**単位が異なるデータの相対ばらつき** を比較可。経済 ・ 生物統計で頻用。" },
  { id: "g3-q53", category: "確率分布", difficulty: 3, question: "**二項分布 B(10, 0.3)** の **期待値** を選びなさい。", choices: ["3", "0.3", "7", "10"], correctIndex: 0, explanation: "**B(n, p) の期待値 = np = 10 × 0.3 = 3**。**分散 = np(1-p) = 2.1**。" },
  { id: "g3-q54", category: "確率分布", difficulty: 2, question: "**標準正規分布** の **平均** と **分散** として正しいものを選びなさい。", choices: ["μ=0, σ²=1", "μ=1, σ²=0", "μ=1, σ²=1", "μ=0, σ²=0"], correctIndex: 0, explanation: "**標準正規 $N(0, 1)$**: 任意の正規 $N(\\mu, \\sigma^2)$ から $Z = (X - \\mu)/\\sigma$ で標準化可能。表でも確認しやすい。" },
  { id: "g3-q55", category: "推定", difficulty: 3, question: "**点推定** と **区間推定** の違いとして最も適切なものを選びなさい。", choices: ["点: 1 値で推定 / 区間: 範囲で示し精度を表現", "両者同じ", "点推定のみ正確", "区間推定は誤り"], correctIndex: 0, explanation: "**点推定**: $\\hat{\\mu} = \\bar{x}$ など 1 値。**区間推定**: CI(信頼区間)で範囲 + 信頼度。**精度を伝えるには区間推定**。" },
  { id: "g3-q56", category: "回帰", difficulty: 3, question: "**単回帰式 $y = 2x + 3$** で **x = 4 のときの予測 y** を選びなさい。", choices: ["8", "11", "14", "10"], correctIndex: 1, explanation: "$y = 2 \\cdot 4 + 3 = 11$。**回帰直線で予測値計算**。残差は実測値との差。" },
  { id: "g3-q57", category: "相関", difficulty: 3, question: "**相関係数 r = -0.8** の意味として最も適切なものを選びなさい。", choices: ["強い負の線形関係", "強い正の線形関係", "無相関", "判定不能"], correctIndex: 0, explanation: "**r < 0**: 負の相関(片方増 → 他方減)。**|r| ≧ 0.7 強相関、0.4-0.7 中相関、< 0.4 弱相関** が目安。" },
  { id: "g3-q58", category: "確率", difficulty: 3, question: "**条件付き確率 $P(A|B) = 0.6$、$P(B) = 0.4$** のとき **$P(A \\cap B)$** を選びなさい。", choices: ["0.24", "1.0", "0.20", "0.40"], correctIndex: 0, explanation: "$P(A \\cap B) = P(A|B) \\cdot P(B) = 0.6 \\times 0.4 = 0.24$。乗法定理の基本。" },
  { id: "g3-q59", category: "確率", difficulty: 3, question: "**3 枚のコイン投げで表が 2 枚出る確率** を選びなさい。", choices: ["1/8", "3/8", "1/4", "1/2"], correctIndex: 1, explanation: "**$_3C_2 \\cdot (1/2)^3 = 3/8$**。**二項分布 B(3, 0.5) で X = 2 の確率**。" },
  { id: "g3-q60", category: "サンプル", difficulty: 3, question: "**標本誤差** を **半分** にするには標本サイズを **何倍** すれば良いか。", choices: ["2 倍", "4 倍", "1/2 倍", "10 倍"], correctIndex: 1, explanation: "**SE = $\\sigma / \\sqrt{n}$** → 半分にするには $\\sqrt{n}$ を 2 倍 → $n$ を **4 倍**。" },
  { id: "g3-q61", category: "クロス集計", difficulty: 3, question: "**$\\chi^2$ 検定** の使い分けで **独立性** と **適合度** の違いとして最も適切なものを選びなさい。", choices: ["独立性: 2 変数の関連 / 適合度: 観測度数と理論度数の差", "両者同じ", "独立性は廃止", "適合度のみ正確"], correctIndex: 0, explanation: "**独立性**: 2 つのカテゴリ変数の関連を判定(クロス表)。**適合度**: 観測 vs 理論分布の差(コイン公平性等)。" },
  { id: "g3-q62", category: "推定", difficulty: 3, question: "**標本サイズ n = 100、不偏分散 s² = 16** のとき母平均の SE として正しいものを選びなさい。", choices: ["0.4", "1.6", "4", "16"], correctIndex: 0, explanation: "$SE = s/\\sqrt{n} = 4/10 = 0.4$。**$\\sqrt{16} = 4$ が標本標準偏差**、SE はその $1/\\sqrt{n}$。" },
  { id: "g3-q63", category: "検定", difficulty: 3, question: "**両側検定 vs 片側検定** で **両側を使うべき** 場面として最も適切なものを選びなさい。", choices: ["差の方向が事前に決まらない時", "片側のみ知りたい時", "標本小", "正規分布"], correctIndex: 0, explanation: "**両側 H_1: μ ≠ μ_0**(方向不明)、**片側 H_1: μ > μ_0** または $μ < μ_0$(事前に決定)。**p 値計算が異なる**(片側は両側の半分)。" },
  { id: "g3-q64", category: "実生活", difficulty: 2, question: "**選挙の出口調査** で **小サンプル + 大誤差** が起こる場面として **誤っているもの** を選びなさい。", choices: ["接戦の選挙区", "サンプル偏り(年齢 / 地域)", "回答拒否率高", "n = 10000 の大規模調査"], correctIndex: 3, explanation: "**大規模調査(n 大)で SE は小**。誤差が問題になるのは **接戦 ・ サンプル偏り ・ 回答拒否 ・ Mode Effect** など。" },
  { id: "g3-q65", category: "応用", difficulty: 2, question: "**統計学を学ぶことで得られるスキル** として **誤っているもの** を選びなさい。", choices: ["データに基づく合理的判断", "誤情報 ・ 詐欺の見抜き", "不確実性の定量化", "全てを 100% 確実にする"], correctIndex: 3, explanation: "**統計学は不確実性を扱う**。100% 確実にはできないが、**確信度を定量化 + データ根拠の意思決定** で大きな価値。" },
];
