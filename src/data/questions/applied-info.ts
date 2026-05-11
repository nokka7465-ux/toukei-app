import type { Question } from "@/types/content";

export const appliedInfoQuestions: Question[] = [
  {
    id: "ap-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "応用情報技術者試験の主催団体として最も適切なものを選びなさい。",
    choices: [
      "日本情報処理協会",
      "情報処理推進機構(IPA)",
      "日本ディープラーニング協会(JDLA)",
      "経済産業省",
    ],
    correctIndex: 1,
    explanation:
      "応用情報技術者試験は **情報処理推進機構(IPA)** が主催する国家試験(レベル 3)。年 2 回(4 月・10 月)実施。",
  },
  {
    id: "ap-q2",
    category: "アルゴリズム",
    difficulty: 2,
    question:
      "ソート済の配列に対する二分探索の計算量として最も適切なものを選びなさい。",
    choices: [
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n)$",
      "$O(n^2)$",
    ],
    correctIndex: 1,
    explanation:
      "二分探索は毎回探索範囲を半分にするため **$O(\\log n)$**。$n=10^6$ でも約 20 回の比較で終わる。",
  },
  {
    id: "ap-q3",
    category: "アルゴリズム",
    difficulty: 2,
    question:
      "クイックソートの平均計算量として最も適切なものを選びなさい。",
    choices: [
      "$O(n)$",
      "$O(n \\log n)$",
      "$O(n^2)$",
      "$O(2^n)$",
    ],
    correctIndex: 1,
    explanation:
      "**クイックソート** は平均 $O(n \\log n)$、最悪 $O(n^2)$(既ソートでピボット偏り時)。マージソート ・ ヒープソートも平均 $O(n \\log n)$。",
  },
  {
    id: "ap-q4",
    category: "アルゴリズム",
    difficulty: 3,
    question:
      "重みなしグラフで始点から各頂点への最短経路を求めるアルゴリズムとして最も適切なものを選びなさい。",
    choices: [
      "深さ優先探索(DFS)",
      "幅優先探索(BFS)",
      "ダイクストラ法",
      "Bellman-Ford 法",
    ],
    correctIndex: 1,
    explanation:
      "重みなしグラフでは **BFS(幅優先探索)** が最短経路を $O(V+E)$ で求められる。重み付きグラフではダイクストラ法。",
  },
  {
    id: "ap-q5",
    category: "DB",
    difficulty: 2,
    question:
      "**第 3 正規形(3NF)** の特徴として最も適切なものを選びなさい。",
    choices: [
      "繰り返し項目を排除した形",
      "1NF + 部分関数従属の排除",
      "2NF + 推移関数従属の排除",
      "多値従属性の排除",
    ],
    correctIndex: 2,
    explanation:
      "**3NF = 2NF + 推移関数従属の排除**。1NF が原子値、2NF が部分関数従属の排除、4NF が多値従属性の排除。",
  },
  {
    id: "ap-q6",
    category: "DB",
    difficulty: 2,
    question:
      "ACID 特性のうち「トランザクション全体が成功か失敗かのいずれか」を表すものを選びなさい。",
    choices: [
      "Atomicity(原子性)",
      "Consistency(一貫性)",
      "Isolation(独立性)",
      "Durability(永続性)",
    ],
    correctIndex: 0,
    explanation:
      "**Atomicity(原子性)** は『トランザクション内のすべての操作が成功する、またはすべて失敗する』性質。途中失敗時のロールバックを保証。",
  },
  {
    id: "ap-q7",
    category: "DB",
    difficulty: 3,
    question:
      "DBMS で「コミット済の変更のみ参照」する分離レベルとして最も適切なものを選びなさい。",
    choices: [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE",
    ],
    correctIndex: 1,
    explanation:
      "**READ COMMITTED** はコミット済の変更のみ読む分離レベル。多くの DBMS のデフォルト。READ UNCOMMITTED ではダーティリードが発生する。",
  },
  {
    id: "ap-q8",
    category: "確率統計",
    difficulty: 2,
    question:
      "サイコロを 2 回振ったときの和が 7 以上になる確率として最も近いものを選びなさい。",
    choices: ["1/2", "5/12", "7/12", "11/36"],
    correctIndex: 2,
    explanation:
      "全 36 通りのうち和が 7 以上の組合せは 21 通り(7→6, 8→5, 9→4, 10→3, 11→2, 12→1)。よって **21/36 = 7/12**。",
  },
  {
    id: "ap-q9",
    category: "AI",
    difficulty: 2,
    question:
      "混同行列で TP=80, FP=20, FN=10, TN=90 のとき、適合率(Precision)として最も近いものを選びなさい。",
    choices: ["80%", "88.9%", "70%", "85%"],
    correctIndex: 0,
    explanation:
      "**Precision = TP / (TP + FP) = 80 / (80 + 20) = 80%**。Recall = TP / (TP + FN) = 80 / 90 ≒ 88.9%。",
  },
  {
    id: "ap-q10",
    category: "AI",
    difficulty: 2,
    question:
      "ディープラーニングの過学習対策として **不適切** なものを選びなさい。",
    choices: [
      "Dropout",
      "Early Stopping",
      "学習データを少なくする",
      "L1/L2 正則化",
    ],
    correctIndex: 2,
    explanation:
      "学習データが少ないと過学習しやすくなる(逆効果)。**Dropout・Early Stopping・正則化・データ拡張・交差検証** が代表的対策。",
  },
  {
    id: "ap-q11",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "TCP/IP モデルでトランスポート層に位置するプロトコルとして最も適切なものを選びなさい。",
    choices: ["IP", "TCP / UDP", "HTTP", "Ethernet"],
    correctIndex: 1,
    explanation:
      "**TCP / UDP** がトランスポート層。IP はインターネット(ネットワーク)層、HTTP / DNS はアプリケーション層、Ethernet はネットワーク I/F 層。",
  },
  {
    id: "ap-q12",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "TLS で公開鍵暗号と共通鍵暗号を組み合わせるハイブリッド方式の主な目的として最も適切なものを選びなさい。",
    choices: [
      "暗号化機能を 2 倍に強化するため",
      "鍵配送を公開鍵で行い、本文は高速な共通鍵で暗号化するため",
      "ハッシュ計算の高速化",
      "ファイアウォールの代替",
    ],
    correctIndex: 1,
    explanation:
      "公開鍵暗号は遅いが鍵配送に強く、共通鍵暗号は高速。**公開鍵で共通鍵を交換 → 共通鍵で本文暗号化** が TLS の標準形式。",
  },
  {
    id: "ap-q13",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "Web アプリで SQL インジェクションの最も基本的な対策として最も適切なものを選びなさい。",
    choices: [
      "ファイアウォール設置",
      "プレースホルダ(プリペアドステートメント)",
      "DNS over HTTPS",
      "TLS の有効化",
    ],
    correctIndex: 1,
    explanation:
      "**プレースホルダ(プリペアドステートメント)** で SQL 構文とユーザ入力を分離するのが SQL インジェクション対策の基本。文字列連結による SQL 構築は禁忌。",
  },
  {
    id: "ap-q14",
    category: "システム",
    difficulty: 3,
    question:
      "RAID 5 の特徴として最も適切なものを選びなさい。",
    choices: [
      "ミラーリングのみ、容量効率 50%",
      "ストライピングのみ、信頼性なし",
      "ストライピング + 分散パリティ、1 台の故障に耐える",
      "完全な二重化",
    ],
    correctIndex: 2,
    explanation:
      "**RAID 5** は分散パリティ方式で、N 台中 1 台までの故障に耐える。RAID 1 はミラーリング、RAID 0 はストライピングのみ、RAID 6 は二重パリティで 2 台故障に耐える。",
  },
  {
    id: "ap-q15",
    category: "システム",
    difficulty: 2,
    question:
      "クラウドサービスモデルで「OS や開発環境を含む実行環境を提供」するものを選びなさい。",
    choices: ["IaaS", "PaaS", "SaaS", "FaaS"],
    correctIndex: 1,
    explanation:
      "**PaaS(Platform as a Service)** は OS / ミドルウェア / 開発環境を提供。IaaS は仮想マシン、SaaS はアプリケーション、FaaS は関数単位の実行(サーバレス)。",
  },
  {
    id: "ap-q16",
    category: "ソフトウェア",
    difficulty: 2,
    question:
      "ホワイトボックステストで、**プログラム内部の分岐を全て通る** ことを保証するカバレッジ基準として最も適切なものを選びなさい。",
    choices: [
      "命令カバレッジ",
      "分岐カバレッジ(条件網羅)",
      "経路カバレッジ",
      "境界値分析",
    ],
    correctIndex: 1,
    explanation:
      "**分岐カバレッジ** は各分岐の真 / 偽の両方を 1 度以上通すことを保証。命令カバレッジは命令が 1 度実行されればよく、より弱い基準。",
  },
  {
    id: "ap-q17",
    category: "ソフトウェア",
    difficulty: 2,
    question:
      "アジャイル開発のスクラムにおいて、開発を短期間に区切る単位として最も適切なものを選びなさい。",
    choices: [
      "フェーズ",
      "スプリント",
      "イテレーション",
      "リリース",
    ],
    correctIndex: 1,
    explanation:
      "スクラムでは開発期間を **スプリント**(通常 1 〜 4 週間)で区切り、各スプリントで動くソフトウェアを提供。「イテレーション」は他のアジャイル手法での同義語だが、スクラムではスプリントが正式呼称。",
  },
  {
    id: "ap-q18",
    category: "PM",
    difficulty: 3,
    question:
      "プロジェクト管理で、ネットワーク図の中で最長の経路を表し、プロジェクト所要時間を決定する経路の名称として最も適切なものを選びなさい。",
    choices: [
      "クリティカルパス",
      "WBS",
      "ガントチャート",
      "PERT",
    ],
    correctIndex: 0,
    explanation:
      "**クリティカルパス**(臨界経路)はプロジェクト所要時間を決める最長経路。この経路上の作業の遅れがそのままプロジェクト全体の遅延となる。",
  },
  {
    id: "ap-q19",
    category: "経営",
    difficulty: 2,
    question:
      "企業の外部環境(政治・経済・社会・技術)を分析するフレームワークとして最も適切なものを選びなさい。",
    choices: [
      "SWOT 分析",
      "PEST 分析",
      "5 forces",
      "BCG マトリクス",
    ],
    correctIndex: 1,
    explanation:
      "**PEST 分析** は Political / Economic / Social / Technological の 4 軸でマクロ環境を分析。SWOT は内外環境、5 forces は業界構造、BCG は事業ポートフォリオ分析。",
  },
  {
    id: "ap-q20",
    category: "DX",
    difficulty: 2,
    question:
      "経済産業省が定義する **DX(デジタルトランスフォーメーション)** の 3 段階として最も適切なものを選びなさい。",
    choices: [
      "デジタイゼーション → デジタライゼーション → DX",
      "DX → デジタイゼーション → デジタライゼーション",
      "AI → IoT → DX",
      "PoC → MVP → 本番",
    ],
    correctIndex: 0,
    explanation:
      "**デジタイゼーション(紙→デジタル化)→ デジタライゼーション(プロセスのデジタル化)→ DX(ビジネスモデル変革)** の 3 段階が経産省の定義。応用情報の経営戦略分野で頻出。",
  },
  {
    id: "ap-q21",
    category: "アルゴリズム",
    difficulty: 2,
    question:
      "ハッシュテーブルの平均的な検索時間計算量を選びなさい。",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctIndex: 0,
    explanation:
      "**ハッシュテーブルの平均は O(1)**(衝突が少ない場合)。最悪は O(n)(全衝突時)。**二分探索木 / B-tree は O(log n)**、線形探索は O(n)、ソートは O(n log n)。",
  },
  {
    id: "ap-q22",
    category: "DB",
    difficulty: 3,
    question:
      "リレーショナル DB の **トランザクション ACID 特性** に含まれないものを選びなさい。",
    choices: [
      "Atomicity(原子性)",
      "Consistency(一貫性)",
      "Isolation(分離性)",
      "Aggregation(集約性)",
    ],
    correctIndex: 3,
    explanation:
      "**ACID = Atomicity / Consistency / Isolation / Durability**。Aggregation は ACID ではない。NoSQL は **BASE(Basically Available / Soft state / Eventually consistent)** という別モデル。",
  },
  {
    id: "ap-q23",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "**SQL インジェクション** 対策として最も適切なものを選びなさい。",
    choices: [
      "プレースホルダ(プリペアドステートメント / バインド変数)を使う",
      "ユーザ入力を全部 trim する",
      "DB を読み取り専用にする",
      "DROP TABLE 文を禁止する",
    ],
    correctIndex: 0,
    explanation:
      "**プレースホルダ + バインド変数(prepared statement)** で SQL とデータを分離するのが本質的対策。エスケープも有効だが取りこぼしが起こりやすく、プレースホルダが王道。",
  },
  {
    id: "ap-q24",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "OSI 参照モデルの 7 層で、**TCP / UDP** が動作する層を選びなさい。",
    choices: ["物理層", "データリンク層", "ネットワーク層", "トランスポート層"],
    correctIndex: 3,
    explanation:
      "**TCP / UDP はトランスポート層(第 4 層)**。物理層(L1)→ データリンク(L2、Ethernet)→ ネットワーク(L3、IP)→ トランスポート(L4、TCP/UDP)→ セッション(L5)→ プレゼン(L6)→ アプリ(L7)。",
  },
  {
    id: "ap-q25",
    category: "AI / 機械学習",
    difficulty: 3,
    question:
      "教師あり学習 ・ 教師なし学習 ・ 強化学習の分類で、**クラスタリング(K-Means / DBSCAN)** に該当するものを選びなさい。",
    choices: [
      "教師あり学習(分類)",
      "教師あり学習(回帰)",
      "教師なし学習",
      "強化学習",
    ],
    correctIndex: 2,
    explanation:
      "**クラスタリングは教師なし学習**(ラベルなしデータをグループ化)。教師あり学習は分類 / 回帰(ラベル必須)、強化学習は報酬を最大化する行動学習。",
  },
  {
    id: "ap-q26",
    category: "プロジェクトマネジメント",
    difficulty: 3,
    question:
      "PMBOK のスコープ管理プロセスで **誤っているもの** を選びなさい。",
    choices: [
      "要求事項の収集",
      "スコープの定義",
      "WBS の作成",
      "ステークホルダーの解雇",
    ],
    correctIndex: 3,
    explanation:
      "**スコープ管理 6 プロセス**: スコープマネジメント計画 / 要求事項の収集 / スコープの定義 / WBS の作成 / スコープの妥当性確認 / スコープのコントロール。ステークホルダーの解雇は無関係。",
  },
  {
    id: "ap-q27",
    category: "経営戦略",
    difficulty: 2,
    question:
      "**5 フォース分析(Porter)** の 5 つの力として **誤っているもの** を選びなさい。",
    choices: [
      "既存業者間の競争",
      "新規参入の脅威",
      "代替品の脅威",
      "為替変動の脅威",
    ],
    correctIndex: 3,
    explanation:
      "**5 フォース**: 既存競合 / 新規参入 / 代替品 / 売り手の交渉力 / 買い手の交渉力。為替変動は **PEST(マクロ環境)** の経済要因で別フレームワーク。",
  },
  {
    id: "ap-q28",
    category: "システム監査",
    difficulty: 3,
    question:
      "システム監査人の独立性として **正しいもの** を選びなさい。",
    choices: [
      "外観上 + 精神上の独立を確保",
      "経営層に従属する",
      "監査対象部門の業務を兼務する",
      "監査対象部門の上司である",
    ],
    correctIndex: 0,
    explanation:
      "**システム監査人は外観上(組織的)+ 精神上(意識的)の独立を確保** する必要がある。監査対象との兼務 ・ 上下関係は独立性を損なうため不可。",
  },
  {
    id: "ap-q29",
    category: "暗号",
    difficulty: 3,
    question:
      "**TLS 1.3** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "0-RTT(再接続時のハンドシェイク高速化)",
      "Forward Secrecy が必須(DHE / ECDHE)",
      "古い暗号スイート(RC4 / 3DES など)を削除",
      "セッションは平文で送信",
    ],
    correctIndex: 3,
    explanation:
      "**TLS 1.3** は **常に暗号化**(セッションは暗号化)・ 古い暗号スイート削除 ・ Forward Secrecy 必須 ・ 0-RTT で高速化、と従来より大幅に安全 + 高速。平文送信は誤り。",
  },
  {
    id: "ap-q30",
    category: "クラウド",
    difficulty: 2,
    question:
      "**IaaS / PaaS / SaaS** の境界で **PaaS** が担う範囲として最も適切なものを選びなさい。",
    choices: [
      "OS + ミドルウェア + ランタイムをマネージド、アプリは利用者",
      "ハードウェア + 仮想化のみマネージド",
      "全てマネージド(アプリも利用者は触らない)",
      "ハードウェアの設計のみ提供",
    ],
    correctIndex: 0,
    explanation:
      "**IaaS = HW + 仮想化、PaaS = + OS + Runtime + ミドルウェア、SaaS = + アプリも全部**。PaaS の代表は App Engine / App Service / Heroku / Beanstalk。",
  },
];
