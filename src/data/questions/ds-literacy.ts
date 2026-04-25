import type { Question } from "@/types/content";

export const dsLiteracyQuestions: Question[] = [
  {
    id: "dsl-q1",
    category: "DS の 3 軸",
    difficulty: 1,
    question:
      "データサイエンティスト協会が定義する「データサイエンティストに必要な 3 つのスキル」として最も適切な組み合わせを選びなさい。",
    choices: [
      "プログラミング力 / 数学力 / 英語力",
      "データサイエンス力 / データエンジニアリング力 / ビジネス力",
      "Python 力 / SQL 力 / 統計力",
      "可視化 / 分析 / 報告",
    ],
    correctIndex: 1,
    explanation:
      "DS 協会のスキルセットは「データサイエンス力(統計・数学・ML)」「データエンジニアリング力(SQL・データ基盤)」「ビジネス力(課題設定・推進)」の 3 軸構成。",
  },
  {
    id: "dsl-q2",
    category: "機械学習",
    difficulty: 2,
    question:
      "二値分類問題の評価指標として、「実際に陽性なものをどれだけ捉えたか」を測るものとして最も適切なものを選びなさい。",
    choices: [
      "正解率(Accuracy)",
      "適合率(Precision)",
      "再現率(Recall)",
      "F1 値",
    ],
    correctIndex: 2,
    explanation:
      "**再現率(Recall)= TP / (TP + FN)**「陽性のうちどれだけ正しく陽性と判定できたか」。**適合率(Precision)= TP / (TP + FP)**「陽性と判定したうちどれだけ実際に陽性か」。両者のバランスが F1 値。",
  },
  {
    id: "dsl-q3",
    category: "機械学習",
    difficulty: 2,
    question:
      "学習データに過剰に適合し、未知のデータで性能が落ちる現象を何というか。",
    choices: [
      "未学習(Underfitting)",
      "過学習(Overfitting)",
      "正則化",
      "クロスバリデーション",
    ],
    correctIndex: 1,
    explanation:
      "**過学習(Overfitting)** = 学習データのノイズまで覚えてしまい、新しいデータで性能が落ちる現象。対策は **正則化・データ追加・特徴量削減・クロスバリデーション** など。",
  },
  {
    id: "dsl-q4",
    category: "可視化",
    difficulty: 1,
    question:
      "「2 つの量の関係を見たい」ときに最も適切なグラフを選びなさい。",
    choices: ["棒グラフ", "円グラフ", "折れ線グラフ", "散布図"],
    correctIndex: 3,
    explanation:
      "2 変数の関係(身長と体重、広告費と売上など)を見るのは **散布図** が定番。棒は大きさ比較、円は割合、折れ線は時間変化に向く。",
  },
  {
    id: "dsl-q5",
    category: "データエンジニアリング",
    difficulty: 2,
    question:
      "SQL で「複数テーブルを結合する」のに使う構文として最も適切なものを選びなさい。",
    choices: ["GROUP BY", "ORDER BY", "JOIN", "WHERE"],
    correctIndex: 2,
    explanation:
      "**JOIN** は 2 つ以上のテーブルを結合する SQL の基本構文。INNER JOIN・LEFT JOIN・RIGHT JOIN などの種類がある。GROUP BY は集計、ORDER BY はソート、WHERE は絞り込み。",
  },
  {
    id: "dsl-q6",
    category: "データエンジニアリング",
    difficulty: 2,
    question:
      "**生のままのデータ** を大量に保存し、後で必要に応じて構造化・分析する基盤として最も適切なものを選びなさい。",
    choices: [
      "リレーショナルデータベース(RDB)",
      "データウェアハウス(DWH)",
      "データレイク",
      "OLTP データベース",
    ],
    correctIndex: 2,
    explanation:
      "**データレイク** は構造化・非構造化を問わず生データを大量に保存する仕組み(Amazon S3 など)。DWH(BigQuery、Snowflake 等)は分析用に整理されたデータの保管庫。RDB と OLTP は業務トランザクション処理用。",
  },
  {
    id: "dsl-q7",
    category: "ビジネス力",
    difficulty: 2,
    question:
      "データ分析プロジェクトの代表的な進行モデルとして最も適切なものを選びなさい。",
    choices: [
      "ウォーターフォール",
      "アジャイル",
      "CRISP-DM",
      "スクラム",
    ],
    correctIndex: 2,
    explanation:
      "**CRISP-DM(Cross-Industry Standard Process for Data Mining)** はデータ分析プロジェクトの標準的な 6 ステップ(ビジネス理解 → データ理解 → データ準備 → モデリング → 評価 → 展開)。アジャイルやスクラムはソフト開発全般、ウォーターフォールも汎用。",
  },
  {
    id: "dsl-q8",
    category: "ビジネス力",
    difficulty: 1,
    question:
      "「分析の目的を最初に明確に定めること」が重要な理由として最も適切なものを選びなさい。",
    choices: [
      "計算量を減らせるから",
      "目的が曖昧だと、関係ない分析に時間を使い、ビジネス価値につながらないから",
      "プログラム言語の選択に影響するから",
      "上司の指示通りに動けるから",
    ],
    correctIndex: 1,
    explanation:
      "データ分析の最大の落とし穴は「**目的不明確のまま分析を始めて、関係ない結論が出る**」こと。CRISP-DM の最初のステップ「ビジネス理解」が強調されるのもこのため。常に「何のための分析か?」を問うクセが大事。",
  },
];
