import type { Formula } from "@/types/content";

/**
 * QC 検定(品質管理検定)頻出公式集。
 * - 管理図・工程能力・抜取検査・実験計画法・信頼性工学。
 */
export const qcKenteiFormulas: Formula[] = [
  // === 管理図(Ch2) ===
  {
    id: "x-bar-r-control-limits",
    name: "X̄ 管理図の管理限界",
    category: "管理図",
    tex: "\\mathrm{UCL/LCL} = \\bar{\\bar X} \\pm A_2 \\bar R",
    description:
      "群サイズに依存する係数 $A_2$ の表値を用いる。例: 群サイズ 5 で $A_2 = 0.577$。理論的には $\\pm 3 \\sigma_{\\bar X}$ に対応。",
  },
  {
    id: "r-control-limits",
    name: "R 管理図の管理限界",
    category: "管理図",
    tex: "\\mathrm{UCL}_R = D_4 \\bar R, \\quad \\mathrm{LCL}_R = D_3 \\bar R",
    description:
      "群サイズ別の係数 $D_3, D_4$ を表から引く。$n \\leq 6$ では $D_3 = 0$(下限なし)。",
  },
  {
    id: "p-control-limits",
    name: "p 管理図の管理限界(不良率)",
    category: "管理図",
    tex: "\\mathrm{UCL/LCL} = \\bar p \\pm 3 \\sqrt{\\frac{\\bar p (1 - \\bar p)}{n}}",
    description:
      "計数値(不良率)用の管理図。サンプルサイズ $n$ が変動可能。$\\bar p$ は全期間の平均不良率。",
  },
  {
    id: "c-control-limits",
    name: "c 管理図の管理限界(欠陥数)",
    category: "管理図",
    tex: "\\mathrm{UCL/LCL} = \\bar c \\pm 3 \\sqrt{\\bar c}",
    description:
      "1 サンプル(単位)あたりの欠陥数を扱う管理図。ポアソン分布前提。$\\sqrt{\\bar c}$ がポアソンの SD。",
  },

  // === 工程能力(Ch2) ===
  {
    id: "cp-formula",
    name: "工程能力指数 Cp",
    category: "工程能力",
    tex: "C_p = \\frac{\\mathrm{USL} - \\mathrm{LSL}}{6\\sigma}",
    description:
      "規格幅と工程ばらつき(±3σ = 6σ)の比。中心ずれを考慮しない『潜在能力』。1.33 以上で十分、1.67 以上でシックスシグマ目標。",
  },
  {
    id: "cpk-formula",
    name: "工程能力指数 Cpk",
    category: "工程能力",
    tex: "C_{pk} = \\min\\!\\left(\\frac{\\mathrm{USL} - \\mu}{3\\sigma},\\ \\frac{\\mu - \\mathrm{LSL}}{3\\sigma}\\right)",
    description:
      "中心ずれも反映した『現在能力』。$C_p = C_{pk}$ なら中心ずれなし。$C_p > C_{pk}$ なら中心ずれが残っている。",
  },
  {
    id: "cpm-formula",
    name: "Cpm(田口指数)",
    category: "工程能力",
    tex: "C_{pm} = \\frac{\\mathrm{USL} - \\mathrm{LSL}}{6\\sqrt{\\sigma^2 + (\\mu - T)^2}}",
    description:
      "目標値 $T$ からの逸脱を二乗誤差として組み込む。ばらつきだけでなく中心ずれにもペナルティ。$T = (\\mathrm{USL} + \\mathrm{LSL})/2$ なら $\\mu = T$ で $C_{pm} = C_p$。",
  },

  // === 抜取検査(Ch3) ===
  {
    id: "lot-acceptance-prob",
    name: "ロット合格確率(計数規準型)",
    category: "抜取検査",
    tex: "L(p) = \\sum_{x=0}^{c} \\binom{n}{x} p^x (1-p)^{n-x}",
    description:
      "サンプル $n$、判定数 $c$、ロット不良率 $p$。$L(p)$ が OC 曲線の縦軸。$x \\leq c$ で合格判定。",
  },

  // === 分散分析(Ch5) ===
  {
    id: "anova-one-way",
    name: "一元配置 ANOVA の F 統計量",
    category: "実験計画法",
    tex: "F = \\frac{S_A / (a-1)}{S_E / (a(n-1))}",
    description:
      "$a$ 群・各群 $n$ 反復。群間平方和 $S_A$ を群内平方和 $S_E$ で割って自由度比で除した量。$F$ 分布で検定。",
  },
  {
    id: "anova-two-way-interaction",
    name: "二元配置 ANOVA の分解",
    category: "実験計画法",
    tex: "S_T = S_A + S_B + S_{A \\times B} + S_E",
    description:
      "総平方和 = 主効果 A + 主効果 B + 交互作用 + 誤差。$S_{A \\times B}$ で『因子の組合せが単純合算で説明できないか』を検定。",
  },
  {
    id: "sum-of-squares-between",
    name: "群間平方和",
    category: "実験計画法",
    tex: "S_A = \\sum_{i=1}^{a} n_i (\\bar y_{i\\cdot} - \\bar y_{\\cdot\\cdot})^2",
    description:
      "各群平均と総平均の差の重み付き 2 乗和。群間の『平均の散らばり』を測る。",
  },
  {
    id: "sum-of-squares-within",
    name: "群内平方和",
    category: "実験計画法",
    tex: "S_E = \\sum_{i=1}^{a} \\sum_{j=1}^{n_i} (y_{ij} - \\bar y_{i\\cdot})^2",
    description:
      "各群の中での観測値の散らばり。誤差項に対応。$S_E / (N - a)$ が誤差分散の不偏推定量。",
  },

  // === 田口メソッド(Ch5) ===
  {
    id: "sn-ratio-nominal",
    name: "SN 比(望目特性)",
    category: "田口メソッド",
    tex: "\\mathrm{SN} = 10 \\log_{10} \\frac{\\bar y^2}{s^2} \\quad [\\mathrm{dB}]",
    description:
      "目標値に合わせる場合の SN 比。信号(平均)を雑音(分散)で割って対数化。最大化する制御因子の組合せがロバスト設計。",
  },
  {
    id: "sn-ratio-larger",
    name: "SN 比(望大特性)",
    category: "田口メソッド",
    tex: "\\mathrm{SN} = -10 \\log_{10} \\!\\left(\\frac{1}{n} \\sum_{i=1}^{n} \\frac{1}{y_i^2}\\right)",
    description:
      "大きいほどよい特性(強度・寿命など)用。マイナス符号 + 逆数の平均で『小さな値が混ざるとペナルティ』を表現。",
  },
  {
    id: "sn-ratio-smaller",
    name: "SN 比(望小特性)",
    category: "田口メソッド",
    tex: "\\mathrm{SN} = -10 \\log_{10} \\!\\left(\\frac{1}{n} \\sum_{i=1}^{n} y_i^2\\right)",
    description:
      "小さいほどよい特性(振動・誤差・公害物質など)用。$y$ 自体の二乗の平均を最小化する方向で SN 比を最大化。",
  },
  {
    id: "taguchi-loss-function",
    name: "田口の損失関数",
    category: "田口メソッド",
    tex: "L(y) = k(y - T)^2",
    description:
      "目標値 $T$ からの逸脱を二乗誤差で損失定義。『規格内ならゼロ損失』の旧来発想を否定し、規格内でも逸脱に応じて損失が出るとする。",
  },

  // === 信頼性工学(Ch6) ===
  {
    id: "reliability-function",
    name: "信頼性関数",
    category: "信頼性工学",
    tex: "R(t) = P(T > t) = 1 - F(t)",
    description:
      "時刻 $t$ までに故障しない確率。$F(t)$ は故障時刻の累積分布。生存解析の生存関数と同概念。",
  },
  {
    id: "hazard-rate",
    name: "故障率(瞬間故障率)",
    category: "信頼性工学",
    tex: "\\lambda(t) = \\frac{f(t)}{R(t)}",
    description:
      "時刻 $t$ まで生存した個体が次の瞬間に故障する条件付き確率密度。$R(t) = \\exp(-\\int_0^t \\lambda(u)\\,du)$。",
  },
  {
    id: "exponential-distribution",
    name: "指数分布の信頼性関数",
    category: "信頼性工学",
    tex: "R(t) = e^{-\\lambda t}, \\quad \\mathrm{MTTF} = \\frac{1}{\\lambda}",
    description:
      "故障率一定 $\\lambda(t) = \\lambda$ から導出。メモリーレス性が特徴で、偶発故障期の標準モデル。",
  },
  {
    id: "weibull-distribution",
    name: "ワイブル分布の信頼性関数",
    category: "信頼性工学",
    tex: "R(t) = \\exp\\!\\left(-\\left(\\frac{t}{\\eta}\\right)^m\\right)",
    description:
      "形状 $m$、尺度 $\\eta$。$m<1$(初期故障)・$m=1$(指数=偶発)・$m>1$(摩耗)。1 つの族でバスタブ曲線を表現。",
  },
  {
    id: "weibull-hazard",
    name: "ワイブル分布の故障率",
    category: "信頼性工学",
    tex: "\\lambda(t) = \\frac{m}{\\eta} \\left(\\frac{t}{\\eta}\\right)^{m-1}",
    description:
      "$m > 1$ で時間と共に増加(摩耗故障期)、$m < 1$ で減少(初期故障期)。両対数プロットで直線になる。",
  },
  {
    id: "mtbf-availability",
    name: "MTBF とアベイラビリティ",
    category: "信頼性工学",
    tex: "A = \\frac{\\mathrm{MTBF}}{\\mathrm{MTBF} + \\mathrm{MTTR}}",
    description:
      "可用性 = 平均故障間隔 ÷(MTBF + 平均修理時間)。SLA でのファイブナイン(99.999% = 年 5 分以下停止)の根拠数式。",
  },
  {
    id: "series-system-reliability",
    name: "直列系の信頼度",
    category: "信頼性工学",
    tex: "R_{\\text{直列}} = \\prod_{i=1}^{n} R_i",
    description:
      "どれか 1 つでも壊れたら全体故障。部品数が増えると指数的に低下する。$R_i = 0.99$ 部品 10 個直列で $\\approx 0.904$。",
  },
  {
    id: "parallel-system-reliability",
    name: "並列系(冗長系)の信頼度",
    category: "信頼性工学",
    tex: "R_{\\text{並列}} = 1 - \\prod_{i=1}^{n} (1 - R_i)",
    description:
      "全部壊れて初めて全体故障。冗長化で信頼度が劇的に向上。$R = 0.9$ 部品 3 個並列で $0.999$。航空機・サーバの安全設計の基本。",
  },
  {
    id: "fmea-rpn",
    name: "FMEA のリスク優先数",
    category: "信頼性工学",
    tex: "\\mathrm{RPN} = \\mathrm{O} \\times \\mathrm{S} \\times \\mathrm{D}",
    description:
      "発生度 × 影響度 × 検知容易性(各 1〜10)。最大 1000。RPN が大きいほど対策優先度が高い。設計段階の予防分析。",
  },
];
