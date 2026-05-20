import type { Question } from "@/types/content";

export const qcKenteiQuestions: Question[] = [
  {
    id: "qc-q1",
    difficulty: 1,
    category: "品質管理思想",
    question:
      "PDCA サイクルの 4 段階として正しい組合せはどれか。",
    choices: [
      "Plan-Do-Check-Act",
      "Plan-Do-Conclude-Adjust",
      "Predict-Develop-Check-Apply",
      "Plan-Define-Compute-Act",
    ],
    correctIndex: 0,
    explanation:
      "PDCA = Plan(計画)→ Do(実行)→ Check(確認)→ Act(処置)。Deming サイクルとも呼ばれる、改善活動の基本枠組み。",
  },
  {
    id: "qc-q2",
    difficulty: 2,
    category: "SQC",
    question:
      "工程のばらつきを『偶然原因』と『異常原因』に分けるとき、異常原因の例として正しいものを選びなさい。",
    choices: [
      "原料の微小な分子的揺らぎ",
      "工具の摩耗・原料ロットの違い・作業者の交代",
      "測定誤差の最小限度",
      "気温の毎秒の自然変動",
    ],
    correctIndex: 1,
    explanation:
      "異常原因(special cause)= 特定可能でコントロール可能なばらつき。工具摩耗・ロット違い・作業者交代が典型。偶然原因はそれ以外の常時存在する微小なばらつき。",
  },
  {
    id: "qc-q3",
    difficulty: 2,
    category: "管理図",
    question:
      "X̄-R 管理図と p 管理図の主な違いは何か。",
    choices: [
      "前者は計量値、後者は計数値(不良率)を扱う",
      "前者は時系列、後者は累積分布",
      "前者は工場用、後者は研究用",
      "両者とも同じ用途で名前だけ違う",
    ],
    correctIndex: 0,
    explanation:
      "X̄-R は計量値(連続量、寸法・重量等)、p 管理図は計数値(離散値、不良率)を扱う。データの性質で使い分ける。",
  },
  {
    id: "qc-q4",
    difficulty: 2,
    category: "管理図",
    question:
      "X̄ 管理図の管理限界 UCL/LCL は中心線から ±3σ/√n に設定されるが、この理論的根拠として最も適切なのは?",
    choices: [
      "計算が簡単だから",
      "正規分布のもとで管理状態にある工程では、外れる確率が約 0.27% と十分小さい",
      "Shewhart の好みだった",
      "国際標準で決まっているから",
    ],
    correctIndex: 1,
    explanation:
      "正規分布で ±3σ の範囲に 99.73%(= 1-0.0027)が入る。外れたら 1000 回に 3 回未満の偶然なので『異常がある』と判定して妥当。",
  },
  {
    id: "qc-q5",
    difficulty: 2,
    category: "工程能力",
    question:
      "規格 USL = 60、LSL = 40 の工程で $\\mu = 50$, $\\sigma = 2$ のとき、$C_p$ の値はいくらか。",
    choices: ["0.83", "1.00", "1.67", "3.33"],
    correctIndex: 2,
    explanation:
      "$C_p = (USL - LSL)/(6\\sigma) = (60-40)/(6 \\times 2) = 20/12 \\approx 1.67$。中心が真ん中なら工程能力は十分。",
  },
  {
    id: "qc-q6",
    difficulty: 3,
    category: "工程能力",
    question:
      "$C_p = 1.5$, $C_{pk} = 1.0$ の工程について、最も適切な改善方針はどれか。",
    choices: [
      "ばらつきの低減",
      "中心ずれの調整(設備の校正など)",
      "規格そのものを緩める",
      "サンプルサイズを増やす",
    ],
    correctIndex: 1,
    explanation:
      "$C_p > C_{pk}$ は中心ずれが原因。$C_p = 1.5$ あるなら工程の潜在能力は十分なので、まず中心調整が改善のレバー。",
  },
  {
    id: "qc-q7",
    difficulty: 1,
    category: "工程能力",
    question:
      "シックスシグマ運動が目指す不良率は何 PPM(parts per million)か。",
    choices: ["3,400", "100,000", "270,000", "1,000,000"],
    correctIndex: 0,
    explanation:
      "シックスシグマは 100 万個に **3.4 個** の不良率(3.4 PPM)を狙う。$C_{pk} = 2.0$ に相当。",
  },
  {
    id: "qc-q8",
    difficulty: 2,
    category: "検査",
    question:
      "全数検査が望ましいケースとして適切でないものを 1 つ選びなさい。",
    choices: [
      "医薬品・航空機部品など重大な品質保証が必要",
      "破壊検査が必要(検査で製品が使えなくなる)",
      "不良 1 つで巨額の損失が発生",
      "検査自体に多大なコストがかかる",
    ],
    correctIndex: 1,
    explanation:
      "破壊検査が必要なケースこそ **抜取検査** が望ましい。全数検査だと製品が全部破壊される。",
  },
  {
    id: "qc-q9",
    difficulty: 2,
    category: "抜取検査",
    question:
      "OC 曲線について正しい説明はどれか。",
    choices: [
      "横軸=サンプルサイズ、縦軸=不良数",
      "横軸=ロット不良率、縦軸=ロット合格確率",
      "横軸=時間、縦軸=不良率",
      "横軸=コスト、縦軸=精度",
    ],
    correctIndex: 1,
    explanation:
      "OC 曲線(Operating Characteristic Curve)は、横軸=ロット不良率 p、縦軸=その p のときに合格と判定される確率。抜取検査計画の性能評価に使う。",
  },
  {
    id: "qc-q10",
    difficulty: 2,
    category: "抜取検査",
    question:
      "AQL と LTPD の関係について、最も正確な説明はどれか。",
    choices: [
      "AQL > LTPD であり、AQL では合格させたい、LTPD では不合格にしたい",
      "AQL < LTPD であり、AQL では合格させたい、LTPD では不合格にしたい",
      "AQL = LTPD で、検査計画ごとに同じ値",
      "両者とも検査回数を表す",
    ],
    correctIndex: 1,
    explanation:
      "AQL(合格品質水準、低い不良率)< LTPD(ロット許容不良率、高い不良率)。AQL ではほぼ常に合格、LTPD ではほぼ常に不合格、というのが理想的な検査計画の性能。",
  },
  {
    id: "qc-q11",
    difficulty: 1,
    category: "QC 7 つ道具",
    question:
      "QC 7 つ道具に含まれないものを 1 つ選びなさい。",
    choices: [
      "パレート図",
      "特性要因図(フィッシュボーン)",
      "ヒストグラム",
      "PDPC 法",
    ],
    correctIndex: 3,
    explanation:
      "PDPC 法は **新 QC 7 つ道具** の 1 つ。QC 7 つ道具は数値データ向け、新 QC 7 つ道具は言語データ向け。",
  },
  {
    id: "qc-q12",
    difficulty: 2,
    category: "QC 7 つ道具",
    question:
      "パレート図と特性要因図を組合せた改善ステップとして最も適切な順序は?",
    choices: [
      "特性要因図で原因を洗う → パレート図で重点を絞る → 対策",
      "パレート図で重点を絞る → 特性要因図で根本原因を分解 → 対策",
      "両者とも同時に作って結論を出す",
      "対策 → パレート図 → 特性要因図",
    ],
    correctIndex: 1,
    explanation:
      "**まず Pareto で『どこに集中すべきか』を可視化** → そのうえで特性要因図で『なぜ起きるか』を分解。これが QC ストーリーの基本フロー。",
  },
  {
    id: "qc-q13",
    difficulty: 1,
    category: "QC 7 つ道具",
    question:
      "特性要因図で『原因の分類』として伝統的に使われる 4M とは何か。",
    choices: [
      "Money / Method / Material / Manpower",
      "Man / Machine / Method / Material",
      "Map / Measurement / Mass / Method",
      "Mind / Movement / Material / Mark",
    ],
    correctIndex: 1,
    explanation:
      "4M = Man(人)・Machine(機械)・Method(方法)・Material(材料)。これに Measurement(測定)・Environment(環境)を加えて 5M / 6M に拡張することも。",
  },
  {
    id: "qc-q14",
    difficulty: 2,
    category: "新 QC 7 つ道具",
    question:
      "新 QC 7 つ道具の中で、**多くのアイデアをグループ化して全体構造を発見** するのに使うのは?",
    choices: ["親和図(KJ 法)", "PDPC 法", "アローダイアグラム", "マトリクス図"],
    correctIndex: 0,
    explanation:
      "親和図(KJ 法)は、ブレインストーミングで集めた多数のアイデアを似ているもの同士で集約する手法。**ボトムアップで全体構造を発見**。",
  },
  {
    id: "qc-q15",
    difficulty: 2,
    category: "新 QC 7 つ道具",
    question:
      "アローダイアグラム(PERT 図)の主な用途として最も適切なのは?",
    choices: [
      "原因の絡みを矢印で可視化",
      "プロジェクトの工程順序と所要時間を矢印で表す。クリティカルパスを発見",
      "目的と手段を階層的に整理",
      "アンケート結果を集計",
    ],
    correctIndex: 1,
    explanation:
      "アローダイアグラム = PERT/CPM。プロジェクトの工程依存関係を可視化し、最長経路(クリティカルパス)を見つけて工期を短縮する。",
  },
  {
    id: "qc-q16",
    difficulty: 2,
    category: "管理図",
    question:
      "$\\bar{X}$-R 管理図で「上方管理限界線(UCL)」が中心線から $3\\sigma$ 離れている理由として最も適切なものはどれか。",
    choices: [
      "正規分布のもとで管理外と判定する確率を約 0.27% に抑え、誤検知を減らすため",
      "計算が簡単だから",
      "経験則で決まったから",
      "$\\sigma$ の値が常に 3 だから",
    ],
    correctIndex: 0,
    explanation:
      "$3\\sigma$ ルールは正規分布のもとで両側合計約 0.27% の外れ確率になる。誤って『管理外』と判定するリスクを抑える設計上の選択。Shewhart の管理図の基本。",
  },
  {
    id: "qc-q17",
    difficulty: 2,
    category: "QC 7 つ道具",
    question:
      "QC 7 つ道具のうち、原因と結果の関係を体系的に整理するために最も適した手法はどれか。",
    choices: [
      "特性要因図(フィッシュボーンチャート)",
      "ヒストグラム",
      "散布図",
      "管理図",
    ],
    correctIndex: 0,
    explanation:
      "特性要因図は『1 つの結果(特性)に対して、4M(Man・Machine・Material・Method)などの観点で要因を体系化』する手法。Ishikawa diagram とも。原因分析の出発点。",
  },
  {
    id: "qc-q18",
    difficulty: 1,
    category: "工程能力",
    question:
      "工程能力指数 $C_p$ について、$C_p \\geq 1.33$ が一般に意味する状態はどれか。",
    choices: [
      "工程能力は十分にあると評価される",
      "工程能力は不足している",
      "工程能力は計算不能",
      "規格中心からのずれが大きい",
    ],
    correctIndex: 0,
    explanation:
      "$C_p = (\\text{規格幅})/(6\\sigma)$。$C_p < 1$ は不足、$1 \\leq C_p < 1.33$ は不十分、$1.33 \\leq C_p < 1.67$ は十分、$C_p \\geq 1.67$ は余裕あり、というのが一般的な目安。",
  },
  {
    id: "qc-q19",
    difficulty: 3,
    category: "実験計画",
    question:
      "直交配列表(直交表)を使った実験の利点として最も適切なものはどれか。",
    choices: [
      "少ない実験回数で複数因子の主効果を効率的に評価できる",
      "全ての交互作用を完全に推定できる",
      "総当たり実験と全く同等の情報量を保証する",
      "標本数を最大化する",
    ],
    correctIndex: 0,
    explanation:
      "直交配列表(L8、L18 など)は田口メソッドの中核ツール。総当たり(完全配置)では数百回必要な実験を 8〜32 回程度に圧縮しながら、各因子の主効果を直交的に推定できる。交互作用は混同(交絡)するリスクがある。",
  },
  {
    id: "qc-q20",
    difficulty: 2,
    category: "サンプリング検査",
    question:
      "「OC 曲線(Operating Characteristic Curve)」が表すものとして最も適切な説明はどれか。",
    choices: [
      "ロットの不良率と合格確率の関係",
      "工程の管理状態の遷移",
      "クレーム発生件数の時系列",
      "品質コストの内訳",
    ],
    correctIndex: 0,
    explanation:
      "OC 曲線は横軸 = ロット不良率 $p$、縦軸 = 合格確率 $L(p)$。サンプリング検査の判定基準を可視化する。生産者危険(α)と消費者危険(β)を読み取れる。",
  },

  // === Ch5 実験計画法 ===
  {
    id: "qc-doe1",
    difficulty: 1,
    category: "実験計画法",
    question:
      "Fisher の実験計画法 3 原則の組合せとして正しいものはどれか。",
    choices: [
      "反復・無作為化・局所管理",
      "観察・記録・推定",
      "計画・実行・確認",
      "サンプリング・分析・公表",
    ],
    correctIndex: 0,
    explanation:
      "**反復**(誤差を見積もる)・**無作為化**(系統的影響の平均化)・**局所管理**(ばらつきの大きい外乱をブロック化)。観察データだけでは因果が特定しづらいため、これらが導入された。",
  },
  {
    id: "qc-doe2",
    difficulty: 2,
    category: "実験計画法",
    question:
      "二元配置 ANOVA における **交互作用** の意味として最も適切なものはどれか。",
    choices: [
      "2 つの因子の効果が線形に足し算で表せる現象",
      "因子の組合せが各主効果の単純合算で説明できない現象",
      "誤差項が小さくなる現象",
      "標本サイズが大きくなる効果",
    ],
    correctIndex: 1,
    explanation:
      "交互作用 = 因子の組合せ効果が単純合算で説明できない。例: 触媒 B + 80℃ だけ収率が極端に高い。$S_{A \\times B}$ で検定。見落とすと因子の真の効果を取り違える。",
  },
  {
    id: "qc-doe3",
    difficulty: 2,
    category: "実験計画法",
    question:
      "$L_8(2^7)$ 直交表の特徴として正しいものはどれか。",
    choices: [
      "8 因子を 7 試行で実験できる",
      "7 因子 2 水準を 8 試行で実験でき、任意 2 列の水準組合せが同回数現れる",
      "16 試行で 7 因子を扱う",
      "因子が連続値である必要がある",
    ],
    correctIndex: 1,
    explanation:
      "$L_n(s^k)$ 表記: $n$ 行(=試行数)・$k$ 列(=最大因子数)・$s$ 水準。$L_8(2^7)$ は 8 試行で 7 因子 2 水準。直交性により少数試行で多因子の主効果を独立に推定できる。",
  },
  {
    id: "qc-doe4",
    difficulty: 3,
    category: "実験計画法",
    question:
      "田口メソッドの **SN 比**(望目特性)の式として正しいものはどれか。",
    choices: [
      "$\\mathrm{SN} = 10 \\log_{10} (\\bar y^2 / s^2)$",
      "$\\mathrm{SN} = \\bar y / s$",
      "$\\mathrm{SN} = \\bar y - s$",
      "$\\mathrm{SN} = s^2 / \\bar y^2$",
    ],
    correctIndex: 0,
    explanation:
      "望目特性(目標値に合わせる)の SN 比: $10 \\log_{10}(\\bar y^2/s^2)$ [dB]。信号(平均)を雑音(分散)で割った無次元量を対数化。SN 比を最大化する制御因子の組合せがロバスト設計。",
  },

  // === Ch6 信頼性工学 ===
  {
    id: "qc-rel1",
    difficulty: 1,
    category: "信頼性工学",
    question:
      "**バスタブ曲線** が表すものとして最も適切なものはどれか。",
    choices: [
      "製造原価の時間変化",
      "故障率 $\\lambda(t)$ の典型的な時間変化(初期故障期 → 偶発故障期 → 摩耗故障期)",
      "売上の累積",
      "製品ロットの直径分布",
    ],
    correctIndex: 1,
    explanation:
      "故障率 $\\lambda(t)$ が U 字型の 3 段階を示す典型パターン: ①初期故障期(減少、欠陥品の淘汰)②偶発故障期(一定、設計通りの寿命)③摩耗故障期(増加、経年劣化)。バーンインと予防保守で各段階に対応。",
  },
  {
    id: "qc-rel2",
    difficulty: 2,
    category: "信頼性工学",
    question:
      "故障率 $\\lambda(t) = \\lambda$(定数)に対応する寿命分布として正しいものはどれか。",
    choices: [
      "正規分布",
      "指数分布",
      "ワイブル分布(形状 $m=2$)",
      "対数正規分布",
    ],
    correctIndex: 1,
    explanation:
      "$\\lambda(t) = \\lambda$ から $R(t) = \\exp(-\\lambda t)$ ─ これは指数分布の信頼性関数。**メモリーレス性**(残寿命の分布が経過時間に依存しない)が特徴で、偶発故障期の標準モデル。",
  },
  {
    id: "qc-rel3",
    difficulty: 2,
    category: "信頼性工学",
    question:
      "ワイブル分布の形状パラメータ $m$ について正しい記述はどれか。",
    choices: [
      "$m < 1$ で摩耗故障、$m > 1$ で初期故障",
      "$m < 1$ で初期故障、$m = 1$ で偶発故障(指数分布)、$m > 1$ で摩耗故障",
      "$m$ は常に 1 でなければならない",
      "$m$ は分布の中央値を表す",
    ],
    correctIndex: 1,
    explanation:
      "ワイブル分布 $\\lambda(t) = (m/\\eta)(t/\\eta)^{m-1}$。$m<1$(故障率減少→初期故障)/ $m=1$(一定→指数分布) / $m>1$(増加→摩耗故障)。1 つの分布族でバスタブ曲線の各段階を表現可能。",
  },
  {
    id: "qc-rel4",
    difficulty: 3,
    category: "信頼性工学",
    question:
      "信頼度 $R = 0.9$ の独立部品 3 個の **並列(冗長)系** の信頼度はいくらか。",
    choices: [
      "$0.729$",
      "$0.9$",
      "$0.999$",
      "$1.0$",
    ],
    correctIndex: 2,
    explanation:
      "並列系: $R_{並列} = 1 - \\prod (1 - R_i) = 1 - 0.1^3 = 1 - 0.001 = 0.999$。冗長化で信頼度が劇的に改善。直列なら $0.9^3 = 0.729$ で逆に低下。航空機・サーバの安全設計の基本原理。",
  },
  { id: "qc-q29", category: "管理図", difficulty: 3, question: "**$\\bar{X}$-R 管理図** で **$\\bar{X}$ 管理図の中心線** として最も適切なものを選びなさい。", choices: ["群平均の総平均 $\\bar{\\bar{X}}$", "範囲 R", "標準偏差 σ", "中央値"], correctIndex: 0, explanation: "**$\\bar{X}$ 管理図 CL** = 群平均の総平均 $\\bar{\\bar{X}}$。**UCL/LCL = $\\bar{\\bar{X}} \\pm A_2 \\bar{R}$**($A_2$ は群サイズ依存の係数)。プロセス平均の安定性監視。" },
  { id: "qc-q30", category: "管理図", difficulty: 3, question: "管理図で **異常パターン** として **誤っているもの** を選びなさい。", choices: ["連続 9 点が中心線の片側", "連続 6 点上昇 ・ 下降", "管理限界外", "群平均が中心線上"], correctIndex: 3, explanation: "**異常パターン(JIS Z 9020-2)**: 限界外 / 連続 9 点片側 / 連続 6 点上昇 ・ 下降 / 連続 14 点交互 / 連続 15 点中心線近傍 等の **8 ルール**。群平均が中心線上は正常。" },
  { id: "qc-q31", category: "QC 7 つ道具", difficulty: 2, question: "**QC 7 つ道具** に **含まれない** ものを選びなさい。", choices: ["特性要因図", "パレート図", "ヒストグラム", "PERT 図"], correctIndex: 3, explanation: "**QC 7 つ道具**: 特性要因図(魚骨)・ パレート図 ・ ヒストグラム ・ 散布図 ・ チェックシート ・ グラフ ・ 管理図。PERT はプロジェクト管理。" },
  { id: "qc-q32", category: "新 QC 7 つ道具", difficulty: 3, question: "**新 QC 7 つ道具** の **言語データ整理** に該当するものを選びなさい。", choices: ["親和図法 / 連関図法 / 系統図法", "管理図", "ヒストグラム", "散布図"], correctIndex: 0, explanation: "**新 QC 7 つ道具**(言語データ): 親和図 / 連関図 / 系統図 / マトリックス図 / マトリックスデータ解析 / アローダイアグラム / PDPC。**旧 QC 7 つ道具は数値データ用**。" },
  { id: "qc-q33", category: "工程能力", difficulty: 3, question: "工程能力指数 **$C_p = 1.33$** の解釈として最も適切なものを選びなさい。", choices: ["プロセス能力『十分』(規格幅 / 6σ = 4σ 余裕)", "プロセス能力『不足』", "正規分布ではない", "管理外れ"], correctIndex: 0, explanation: "**$C_p$**: 1.0 = 最低限 / 1.33 = 十分 / 1.67 = 余裕 / > 2.0 = Six Sigma。**$C_{pk}$** は中心ずれを考慮した実質能力。" },
  { id: "qc-q34", category: "サンプリング", difficulty: 3, question: "**OC 曲線(Operating Characteristic Curve)** の意味として最も適切なものを選びなさい。", choices: ["ロットの不良率 p と合格確率 L(p) の関係", "管理図", "ヒストグラム", "回帰直線"], correctIndex: 0, explanation: "**OC 曲線**: ロット不良率 vs 合格確率。**AQL(消費者リスク α)・ LTPD(生産者リスク β)** を設定して n / c(サンプル数 / 合格判定数)決定。" },
  { id: "qc-q35", category: "DOE", difficulty: 3, question: "実験計画法の **直交表 $L_8(2^7)$** の意味として最も適切なものを選びなさい。", choices: ["8 回実験で最大 7 因子(2 水準)を独立評価", "8 因子", "7 回実験", "効率不明"], correctIndex: 0, explanation: "**$L_8(2^7)$**: 8 行 ・ 7 列 ・ 各因子 2 水準。**直交配列**で交互作用を分離。**$L_{16}$ / $L_{32}$** などスケールアップ可。Taguchi メソッド。" },
  { id: "qc-q36", category: "DOE", difficulty: 3, question: "Taguchi 法の **SN 比** が高いことの意味として最も適切なものを選びなさい。", choices: ["望ましい特性に強く ・ ばらつきが小さい", "ばらつき大", "ノイズ大", "平均ずれ"], correctIndex: 0, explanation: "**SN 比 = 10 log(信号²/雑音²)**。望小特性 ・ 望大特性 ・ 望目特性で式異なる。**ロバスト設計**: SN 比最大化 → 制御不能ノイズに鈍感な設計。" },
  { id: "qc-q37", category: "信頼性", difficulty: 3, question: "**MTBF(平均故障間隔)** の意味として最も適切なものを選びなさい。", choices: ["修理可能機器の故障 → 次故障までの平均時間", "総寿命", "MTTR", "稼働率"], correctIndex: 0, explanation: "**MTBF**: Mean Time Between Failures(修理可能機器)。**MTTF**: Mean Time To Failure(使い捨て機器、修理不可)。**MTTR**: 平均修理時間。**稼働率 = MTBF / (MTBF + MTTR)**。" },
  { id: "qc-q38", category: "信頼性", difficulty: 3, question: "**バスタブ曲線** の 3 段階として **正しい順序** を選びなさい。", choices: ["初期故障期 → 偶発故障期(寿命期)→ 摩耗故障期", "偶発 → 初期 → 摩耗", "摩耗 → 偶発 → 初期", "並列のみ"], correctIndex: 0, explanation: "**バスタブ曲線**: 初期(欠陥 ・ 工程不良)→ 偶発(ランダム ・ 一定)→ 摩耗(老朽化)。**Burn-in test** で初期故障期を加速排除。" },
  { id: "qc-q39", category: "FMEA", difficulty: 3, question: "**FMEA** の評価指標として最も適切なものを選びなさい。", choices: ["RPN = 厳しさ(S)× 発生頻度(O)× 検出度(D)", "RPN = S + O + D", "S のみ", "O のみ"], correctIndex: 0, explanation: "**FMEA(Failure Mode and Effects Analysis)**: 各故障モードを RPN = S × O × D(各 1-10)で評価。**RPN 高 = 優先対策**。AIAG / VDA で標準化。" },
  { id: "qc-q40", category: "FTA", difficulty: 3, question: "**FTA(Fault Tree Analysis)** の特徴として最も適切なものを選びなさい。", choices: ["トップダウン: 上位故障 → 下位原因を AND/OR ゲートで分解", "ボトムアップ", "ランダム", "管理図"], correctIndex: 0, explanation: "**FTA**: 上位事象 → 原因 → さらに細かい原因 を **論理ゲート(AND/OR)** で分解。**FMEA はボトムアップ**(故障モード → 影響)で対比的。" },
  { id: "qc-q41", category: "ISO", difficulty: 3, question: "**ISO 9001:2015** の **PDCA + Risk-Based Thinking** で **Plan** の主要活動として **誤っているもの** を選びなさい。", choices: ["品質方針 ・ 目標設定", "リスク ・ 機会の特定", "プロセスの計画", "実施後の評価"], correctIndex: 3, explanation: "**ISO 9001 PDCA**: P(方針 ・ 目標 ・ リスク特定 ・ プロセス計画)→ D(運用)→ C(監視 ・ 監査 ・ レビュー)→ A(是正 ・ 改善)。実施後評価は C。" },
  { id: "qc-q42", category: "改善", difficulty: 3, question: "**カイゼン(Kaizen)** の特徴として最も適切なものを選びなさい。", choices: ["継続的な小さな改善の積み重ね(全員参加)", "革新的破壊", "一度限り", "外部委託"], correctIndex: 0, explanation: "**カイゼン**: トヨタ生産方式の根幹。**全員参加 + 小さく頻繁** な改善。**Kaizen Event(改善週間)** で集中改善も。BPR(破壊的)と対比。" },
  { id: "qc-q43", category: "5S", difficulty: 2, question: "**5S** に **含まれない** ものを選びなさい。", choices: ["整理(Seiri)", "整頓(Seiton)", "清掃(Seisou)", "戦略(Senryaku)"], correctIndex: 3, explanation: "**5S**: 整理 / 整頓 / 清掃 / 清潔 / 躾(しつけ)。職場環境整備の基礎 + 安全衛生 ・ 品質 ・ 生産性 ・ モラルの土台。" },
  { id: "qc-q44", category: "Six Sigma", difficulty: 3, question: "**Six Sigma** の DMAIC で **C** に該当するものを選びなさい。", choices: ["Control(管理)", "Customize", "Communicate", "Construct"], correctIndex: 0, explanation: "**DMAIC**: Define / Measure / Analyze / Improve / Control。**Six Sigma の改善プロジェクト標準フレームワーク**。" },
  { id: "qc-q45", category: "Six Sigma", difficulty: 3, question: "**Six Sigma レベル 6σ** の不良率として最も近いものを選びなさい。", choices: ["3.4 ppm(0.00034%)", "1%", "10%", "50%"], correctIndex: 0, explanation: "**6σ レベル = 3.4 ppm**(中心 1.5σ ずれを許容しても)。**5σ ≈ 230 ppm / 4σ ≈ 6210 ppm / 3σ ≈ 66807 ppm**。Six Sigma は **3.4 ppm 達成** が品質目標。" },
  { id: "qc-q46", category: "PPAP", difficulty: 3, question: "**PPAP(Production Part Approval Process)** の用途として最も適切なものを選びなさい。", choices: ["自動車業界での量産部品承認プロセス(IATF 16949)", "サーバ承認", "DB 承認", "GPU 承認"], correctIndex: 0, explanation: "**PPAP**: 自動車部品メーカーの量産承認手順。**Run @ Rate / Dimensional Results / FMEA / Control Plan / MSA** などの 18 要素を提出。IATF 16949 標準。" },
  { id: "qc-q47", category: "MSA", difficulty: 3, question: "**MSA(Measurement System Analysis)** の主要評価項目として **誤っているもの** を選びなさい。", choices: ["Repeatability(同一作業者の繰返誤差)", "Reproducibility(作業者間の誤差)", "Bias(偏り)", "GPU 利用率"], correctIndex: 3, explanation: "**MSA**: 測定システムの信頼性評価。**Gage R&R**(Repeatability + Reproducibility)・ Bias / Linearity / Stability。**Six Sigma / PPAP の必須要素**。" },
  { id: "qc-q48", category: "VOC", difficulty: 3, question: "**VOC(Voice of Customer)** の活用として最も適切なものを選びなさい。", choices: ["顧客の声を CTQ(Critical to Quality)に変換 → 設計反映", "音声認識", "GUI", "DBA"], correctIndex: 0, explanation: "**VOC → CTQ → DFSS**(Design for Six Sigma)。**QFD(品質機能展開)** で顧客要求 → 製品仕様にマッピング。" },
  { id: "qc-q49", category: "Poka-yoke", difficulty: 3, question: "**ポカヨケ(Poka-yoke)** の例として最も適切なものを選びなさい。", choices: ["USB Type-C の対称形状(逆挿しでも刺さる)", "Manual 検査", "GUI", "管理図"], correctIndex: 0, explanation: "**Poka-yoke**: 不良を物理的に防ぐ仕組み。USB-C / SIM カード切欠 / 専用形状コネクタ / 機械エラー検出など。**Shigeo Shingo** 提唱の TPS 概念。" },
  { id: "qc-q50", category: "次のステップ", difficulty: 1, question: "QC 検定 1 級 / 2 級合格後の **横展開キャリア** として最も適切なものを選びなさい。", choices: ["Six Sigma Black Belt / 統計検定 2 級 / DS 検定 / DS エキスパート", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**QC 検定 → 統計検定 ・ Six Sigma / Lean / DS 検定** で品質工学 + データサイエンスを統合。**製造業 DX** で IoT + AI 連携も視野。" },
  { id: "qc-q51", category: "管理図", difficulty: 3, question: "**$\\bar{X}-R$ 管理図** で **管理限界** $\\bar{X} \\pm A_2 \\bar{R}$ の **$A_2$** が **n=5** のとき近い値として最も適切なものを選びなさい。", choices: ["0.577", "1.96", "3.0", "0.05"], correctIndex: 0, explanation: "**$A_2$ 係数**(n=2:1.880, n=3:1.023, n=4:0.729, **n=5:0.577**, n=6:0.483)。管理限界 $\\bar{X} \\pm A_2 \\bar{R}$。**3σ 範囲**(管理限界の本質)を $\\bar{R}$ で近似する係数。" },
  { id: "qc-q52", category: "管理図", difficulty: 3, question: "**p 管理図** と **np 管理図** の違いとして最も適切なものを選びなさい。", choices: ["p=不適合品率(サンプルサイズ可変)、np=不適合品数(サンプルサイズ一定)", "両者同じ", "計量値専用", "管理限界なし"], correctIndex: 0, explanation: "**計数値管理図**: **p 管理図**(不適合品率、サンプルサイズ可変)・ **np 管理図**(不適合品数、一定 n)・ **c 管理図**(不適合数 / 単位、一定)・ **u 管理図**(不適合数 / 単位、可変)。" },
  { id: "qc-q53", category: "工程能力", difficulty: 3, question: "**$C_{pk}$** と **$C_p$** の違いとして最も適切なものを選びなさい。", choices: ["$C_p$=工程のばらつきのみ、$C_{pk}$=ばらつき + 中心ずれ考慮", "同じ", "$C_{pk}$ はばらつき無視", "$C_p$ は中心ずれ考慮"], correctIndex: 0, explanation: "**$C_p = (USL-LSL)/6\\sigma$**(ばらつきのみ)。**$C_{pk} = \\min((USL-\\mu)/3\\sigma, (\\mu-LSL)/3\\sigma)$**(中心ずれ反映)。$C_{pk} \\leq C_p$。**1.33 以上で合格**が一般基準。" },
  { id: "qc-q54", category: "検定", difficulty: 3, question: "**カイ二乗適合度検定** の用途として最も適切なものを選びなさい。", choices: ["観測度数が仮定した分布(理論度数)に従うかを検定", "平均比較", "分散比較", "回帰係数"], correctIndex: 0, explanation: "**$\\chi^2 = \\sum (O_i - E_i)^2 / E_i$**: 適合度検定(分布形)・ **独立性検定**(クロス表)・ **均一性検定**。期待度数 5 以上が目安(Fisher 正確検定で補完)。" },
  { id: "qc-q55", category: "実験計画", difficulty: 3, question: "**直交表 $L_8(2^7)$** の意味として最も適切なものを選びなさい。", choices: ["8 回の実験で 7 因子(各 2 水準)を効率的に評価", "8 因子 7 水準", "学習 8 回", "GPU 8 個"], correctIndex: 0, explanation: "**直交表 $L_n(s^k)$**: n 行 ・ s 水準 ・ k 列。**$L_8(2^7)$=8 実験で 7 因子 2 水準**。**Plackett-Burman** とともに **田口メソッド** の中核。" },
  { id: "qc-q56", category: "実験計画", difficulty: 3, question: "**応答曲面法(RSM)** の用途として最も適切なものを選びなさい。", choices: ["連続的因子の最適水準を探索(2 次モデルで最適点推定)", "離散因子のみ", "学習用 GPU", "認証"], correctIndex: 0, explanation: "**RSM**: 連続因子で最適点探索。**中心複合計画(CCD)** ・ **Box-Behnken** で実験 → 2 次回帰 → ステーショナリ点(極値)。**反応最適化 / プロセス最適化**で利用。" },
  { id: "qc-q57", category: "信頼性", difficulty: 3, question: "**Bathtub Curve(バスタブ曲線)** の 3 つの期間として **誤っているもの** を選びなさい。", choices: ["初期故障期(DFR)", "偶発故障期(CFR)", "摩耗故障期(IFR)", "学習故障期"], correctIndex: 3, explanation: "**3 期**: **初期(Decreasing Failure Rate)**(製造不良)・ **偶発(Constant)**(ランダム故障)・ **摩耗(Increasing)**(寿命)。**Weibull 分布**で形状パラメータ $\\beta$ により表現。" },
  { id: "qc-q58", category: "信頼性", difficulty: 3, question: "**MTBF**(平均故障間隔)と **MTTR**(平均修復時間)を用いた **アベイラビリティ A** として最も適切なものを選びなさい。", choices: ["$A = MTBF / (MTBF + MTTR)$", "$A = MTBF \\cdot MTTR$", "$A = MTBF - MTTR$", "$A = MTTR / MTBF$"], correctIndex: 0, explanation: "**Availability = MTBF / (MTBF + MTTR)**。SLA 99.9%(year 8.76h ダウン許容)・ 99.99% など。**Reliability ≠ Availability**(R=故障しない確率、A=利用可能率)。" },
  { id: "qc-q59", category: "FMEA", difficulty: 3, question: "**FMEA** の **RPN(Risk Priority Number)** の計算式として最も適切なものを選びなさい。", choices: ["Severity × Occurrence × Detection", "Severity + Occurrence", "Severity / Occurrence", "Mean × StdDev"], correctIndex: 0, explanation: "**RPN = S × O × D**(各 1-10)。最大 1000。**高 RPN から対策** ・ 自動車業界では **AIAG-VDA FMEA Handbook 2019** で **Action Priority(AP)** に置換。" },
  { id: "qc-q60", category: "Six Sigma", difficulty: 3, question: "**Six Sigma** で **σ レベル 6** が表す不良率として最も適切なものを選びなさい。", choices: ["3.4 ppm(100 万分の 3.4)", "10%", "0.27%", "5%"], correctIndex: 0, explanation: "**Six Sigma**: 1.5σ シフト考慮で 3.4 DPMO(Defects Per Million Opportunities)。**DMAIC**(Define/Measure/Analyze/Improve/Control)・ **DFSS**(Design For Six Sigma)が代表手法。" },
  { id: "qc-q61", category: "サンプリング", difficulty: 3, question: "**OC 曲線(Operating Characteristic Curve)** の意味として最も適切なものを選びなさい。", choices: ["ロット不良率 p に対する **合格確率** の関係を表す", "GPU 性能", "Cost 関係", "認証速度"], correctIndex: 0, explanation: "**OC 曲線**: p(不良率)vs L(p)(合格確率)。**AQL**(生産者合格基準)・ **LTPD / RQL**(消費者拒否基準)・ **α(生産者危険)・ β(消費者危険)**。**JIS Z 9015** が標準。" },
  { id: "qc-q62", category: "TQM", difficulty: 3, question: "**TQM(Total Quality Management)** の **デミング 14 原則** の中核として最も適切なものを選びなさい。", choices: ["継続的改善 + 全員参加 + 顧客志向(プロセスへの統計的アプローチ)", "コスト最優先", "技術のみ", "個人主義"], correctIndex: 0, explanation: "**TQM**: Deming / Juran / Crosby 提唱。**PDCA / SDCA / Kaizen / 5S / QC サークル**。**戦後日本品質**の理論基盤。Six Sigma の前身。" },
  { id: "qc-q63", category: "Lean", difficulty: 3, question: "**Lean Manufacturing** の **7 つのムダ** として **誤っているもの** を選びなさい。", choices: ["過剰生産 / 在庫 / 運搬", "動作 / 加工 / 待ち", "不良 / 手直し", "創意工夫"], correctIndex: 3, explanation: "**7 つのムダ**(Ohno): 過剰生産 / 在庫 / 運搬 / 動作 / 加工 / 待ち / 不良。**8 番目: 人材活用のムダ**(現代追加)。**Lean = TPS** の英語表現。" },
  { id: "qc-q64", category: "IoT 品質", difficulty: 3, question: "**スマート工場 / Industry 4.0** での **品質管理の進化** として最も適切なものを選びなさい。", choices: ["IoT センサ + リアルタイム SPC + AI 異常検知 / 予知保全", "Manual 検査のみ", "QC 不要", "ペーパーレス禁止"], correctIndex: 0, explanation: "**Smart Quality**: IoT センサで全数 ・ 連続データ → リアルタイム SPC + ML 異常検知(Isolation Forest / Autoencoder)+ 予知保全(Remaining Useful Life)。**人 + AI + IoT の協働品質**。" },
  { id: "qc-q65", category: "実務", difficulty: 3, question: "QC 検定 1 級で重視される **総合的問題解決能力** として最も適切なものを選びなさい。", choices: ["QC ストーリー(問題発見 → 原因解析 → 対策 → 効果確認 → 標準化)+ 統計的判断", "Manual 作業のみ", "コスト最優先", "GPU 利用"], correctIndex: 0, explanation: "**QC ストーリー 7-8 ステップ**: テーマ選定 → 現状把握 → 目標 → 要因解析 → 対策立案 → 実施 → 効果確認 → 標準化 / 歯止め。**QC 7 つ道具 + 新 QC 7 つ道具 + 統計** を統合活用。" },
  { id: "qc-q66", category: "QC 7 つ道具", difficulty: 2, question: "**QC 7 つ道具** として **誤っているもの** を選びなさい。", choices: ["パレート図 / 特性要因図 / ヒストグラム", "散布図 / 管理図 / チェックシート", "層別", "GPU 図"], correctIndex: 3, explanation: "**QC 7 つ道具**: パレート / 特性要因(魚骨)・ ヒストグラム / 散布図 / 管理図 / チェックシート / 層別。**定量データの基本ツール**。" },
  { id: "qc-q67", category: "新 QC 7 つ道具", difficulty: 2, question: "**新 QC 7 つ道具** として **誤っているもの** を選びなさい。", choices: ["親和図 / 連関図 / 系統図", "マトリックス図 / アローダイヤグラム", "PDPC / マトリックス データ解析", "管理図"], correctIndex: 3, explanation: "**新 QC 7 つ道具**(N7): 親和図(KJ)・ 連関図 ・ 系統図 ・ マトリックス図 ・ アローダイヤグラム(PERT)・ PDPC ・ マトリックスデータ解析。**定性 / 言語データの整理**。管理図は QC 7 つ道具側。" },
  { id: "qc-q68", category: "管理図", difficulty: 3, question: "**$X-MR$ 管理図(個別値 ・ 移動範囲)** の用途として最も適切なものを選びなさい。", choices: ["n=1 のサブグループ(個別値)向け管理図", "n>5 専用", "認証", "GPU"], correctIndex: 0, explanation: "**$X-MR$**: 1 個ずつ得られるデータ(化学プロセス / 連続生産)で活用。**Moving Range**(隣接 2 値の絶対差)。**$\\bar{X}-R$**(n=2-10)・ **$\\bar{X}-s$**(n>10)と使い分け。" },
  { id: "qc-q69", category: "管理図", difficulty: 3, question: "**Western Electric Rules**(管理図異常判定 8 原則)の **Rule 1** として最も適切なものを選びなさい。", choices: ["1 点が ±3σ を超える", "9 点連続片側", "6 点連続上昇 / 下降", "全て満たす"], correctIndex: 0, explanation: "**WE Rules**(Bell Labs 1956): R1=±3σ 超え / R2=9 点片側 / R3=6 点単調 / R4=14 点交互 / R5=±2σ 3 点中 2 / R6=±1σ 5 点中 4 / R7=±1σ 内 15 点 / R8=±1σ 外 8 点。**プロセス異常の早期発見**。" },
  { id: "qc-q70", category: "工程能力", difficulty: 3, question: "**$C_{pk} = 1.33$** の意味として最も適切なものを選びなさい。", choices: ["±4σ 相当 ・ 一般的な合格基準(0.27% 不良率)", "0.7σ", "±10σ", "0%"], correctIndex: 0, explanation: "**$C_{pk}$ ≥ 1.33**(±4σ)= 良好 ・ ≥1.67(±5σ)= 優秀 ・ ≥2.0(Six Sigma)= 世界水準。**$C_{pk}$ < 1.0 は工程改善必要**。" },
  { id: "qc-q71", category: "実験計画", difficulty: 3, question: "**完全実施計画 $2^k$ 要因計画** の総実験回数として正しいものを選びなさい。", choices: ["$2^k$ 回(k=因子数 ・ 各 2 水準)", "$2k$ 回", "$k!$ 回", "$k$ 回"], correctIndex: 0, explanation: "**$2^k$ Factorial**: 2 水準 k 因子の全組合せ = $2^k$ 回。**1/2 一部実施($2^{k-1}$)・ 1/4 ($2^{k-2}$)で削減**。**Plackett-Burman / 直交計画**で更に効率化。" },
  { id: "qc-q72", category: "信頼性", difficulty: 3, question: "**Weibull 分布の形状パラメータ $\\beta$** が表すものとして最も適切なものを選びなさい。", choices: ["β<1: 初期故障 / β=1: 偶発(指数)/ β>1: 摩耗故障", "全て同じ", "認証", "GPU"], correctIndex: 0, explanation: "**Weibull**: $\\beta$ で故障形態識別。**β<1**: Burn-in(品質不良)・ **β=1**: 指数分布 ・ **β>1.5-3**: 摩耗(機械系)・ **β>3**: 早期摩耗。**バスタブ曲線**の数学モデル。" },
  { id: "qc-q73", category: "FMEA", difficulty: 3, question: "**FMEA AP(Action Priority)**(AIAG-VDA 2019)の特徴として最も適切なものを選びなさい。", choices: ["S × O × D の RPN を **3 階層 AP**(H/M/L)に置換 → 偏り回避", "RPN と同じ", "認証", "GPU"], correctIndex: 0, explanation: "**FMEA AP**: 旧 RPN(数値乗算)の問題(同 RPN でも危険度異なる)を解消 → **AP = Severity × Occurrence × Detection の表ベース判定**で High / Medium / Low。自動車業界標準。" },
  { id: "qc-q74", category: "Six Sigma", difficulty: 3, question: "**Six Sigma DMAIC** の各ステップとして **誤っているもの** を選びなさい。", choices: ["Define / Measure / Analyze", "Improve / Control", "Lessons Learned", "GPU"], correctIndex: 3, explanation: "**DMAIC**: Define(課題定義)・ Measure(測定)・ Analyze(分析)・ Improve(改善)・ Control(管理)。**新規設計は DMADV / DFSS**。Black Belt / Green Belt / Yellow Belt 認定。" },
  { id: "qc-q75", category: "ISO 9001", difficulty: 3, question: "**ISO 9001:2015** の **PDCA + Risk-based Thinking** の特徴として最も適切なものを選びなさい。", choices: ["プロセスアプローチ + Risk-based Thinking + リーダーシップ強化", "Manual 中心", "認証 SSO", "GPU"], correctIndex: 0, explanation: "**ISO 9001:2015**: 7 原則(顧客重視 / リーダーシップ / 人々の積極的参加 / プロセスアプローチ / 改善 / 客観的意思決定 / 関係性管理)+ PDCA + Risk-based Thinking。" },
  { id: "qc-q76", category: "TPM", difficulty: 3, question: "**TPM(Total Productive Maintenance)** の 8 つの柱として **誤っているもの** を選びなさい。", choices: ["自主保全 / 計画保全", "個別改善 / 教育訓練", "品質保全 / 安全衛生環境 / 管理間接 / 開発", "AI 自動化"], correctIndex: 3, explanation: "**TPM 8 柱**(JIPM): 自主保全 / 計画保全 / 個別改善 / 教育訓練 / 品質保全 / 開発管理 / 管理間接 / 安全衛生環境。**設備総合効率(OEE)** で測定。" },
  { id: "qc-q77", category: "Lean", difficulty: 3, question: "**Lean Manufacturing** の **5S** の意味として最も適切なものを選びなさい。", choices: ["整理 / 整頓 / 清掃 / 清潔 / 躾", "Six Sigma", "認証", "GPU"], correctIndex: 0, explanation: "**5S**: 整理(Seiri/Sort)・ 整頓(Seiton/Set in Order)・ 清掃(Seiso/Shine)・ 清潔(Seiketsu/Standardize)・ 躾(Shitsuke/Sustain)。**Visual Management + Kaizen** の基礎。" },
  { id: "qc-q78", category: "MSA", difficulty: 3, question: "**Gage R&R** で **Repeatability** と **Reproducibility** の定義として最も適切なものを選びなさい。", choices: ["Repeatability=同一作業者繰返、Reproducibility=作業者間差", "両者同じ", "GPU vs CPU", "認証"], correctIndex: 0, explanation: "**Gage R&R**: AV(作業者間)+ EV(繰返誤差)で測定システム精度評価。**ANOVA / Average-Range 法**。**10% 以下 = Acceptable**(自動車業界基準)。" },
  { id: "qc-q79", category: "現代品質", difficulty: 3, question: "**Smart Factory / IoT 品質管理** の代表的進化として最も適切なものを選びなさい。", choices: ["全数 ・ 連続データ収集 + リアルタイム SPC + ML 異常検知 + 予知保全", "Manual 検査拡大", "認証", "GPU"], correctIndex: 0, explanation: "**Smart Quality**: IoT センサ → 全数データ → **Real-time SPC**(Statistical Process Control)+ **ML Anomaly Detection**(Isolation Forest / Autoencoder / Time Series)+ **Predictive Maintenance**(RUL 推定)。" },
  { id: "qc-q80", category: "Cert", difficulty: 2, question: "**QC 検定** の階層として最も適切なものを選びなさい。", choices: ["4 級(基礎)→ 3 級(改善実務者)→ 2 級(部署リーダ)→ 1 級(専門家)", "1 級のみ", "1 → 4", "認証"], correctIndex: 0, explanation: "**QC 検定**(日本規格協会 JSA): 4 級(中高生 / 新入社員)・ 3 級(現場 ・ 改善担当)・ **2 級(リーダ ・ 統計手法活用)**・ **1 級(専門家 ・ 指導者)**。**Six Sigma Belt と並列** で総合品質スキル。" },
];
