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
];
