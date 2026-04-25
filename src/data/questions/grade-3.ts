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
];
