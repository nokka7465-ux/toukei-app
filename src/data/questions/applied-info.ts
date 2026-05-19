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
  { id: "ap-q31", category: "アルゴリズム", difficulty: 3, question: "**ダイクストラ法** の計算量(優先度キュー利用、ノード数 V ・ 辺 E)として最も適切なものを選びなさい。", choices: ["O((V+E) log V)", "O(V²)", "O(V · E)", "O(2^V)"], correctIndex: 0, explanation: "**ダイクストラ法**: 単一始点最短経路 + 非負辺。優先度キュー(ヒープ)で **O((V+E) log V)**。**負辺対応は Bellman-Ford O(V·E)**、全ペアは Floyd-Warshall O(V³)。" },
  { id: "ap-q32", category: "アルゴリズム", difficulty: 3, question: "**動的計画法(DP)** で **メモ化** を行う主目的を選びなさい。", choices: ["部分問題の解を保存して指数 → 多項式時間に削減", "メモリ削減", "並列化", "コード短縮"], correctIndex: 0, explanation: "**Memoization**: 部分問題の重複計算を回避。フィボナッチ数列の素朴再帰は O(2^n) → DP で O(n)。トップダウン(再帰 + memo)/ ボトムアップ(table)の 2 方式。" },
  { id: "ap-q33", category: "DB", difficulty: 3, question: "**外部キー制約** の主目的として最も適切なものを選びなさい。", choices: ["参照整合性の維持(親レコードのない子レコードを防ぐ)", "高速化", "暗号化", "正規化のみ"], correctIndex: 0, explanation: "**外部キー**: 参照整合性 + ON DELETE CASCADE / SET NULL / RESTRICT などの動作指定。**過剰使用はパフォーマンス低下**(更新コスト ・ ロック)につながるため DWH では省略することも。" },
  { id: "ap-q34", category: "DB", difficulty: 3, question: "**EXISTS と IN** のサブクエリ性能で **多くの DB で EXISTS が優位** な理由として最も適切なものを選びなさい。", choices: ["EXISTS は最初の一致で短絡、IN は全件評価 ・ NULL 問題あり", "両者同じ", "EXISTS は廃止", "IN は GPU 利用"], correctIndex: 0, explanation: "**EXISTS**: 相関サブクエリで最初の一致で停止 + NULL 安全。**IN**: 全件評価 + NULL を含む場合の挙動が直感に反する。実際は **オプティマイザの賢さに依存**(同等になる場合も)。" },
  { id: "ap-q35", category: "ネットワーク", difficulty: 3, question: "**サブネットマスク /24** が表す IP アドレス数(ネットワーク ・ ブロードキャスト含む)を選びなさい。", choices: ["256(2^8)", "128", "1024", "65536"], correctIndex: 0, explanation: "**/24 = 上位 24 ビット固定 → 下位 8 ビット可変 → 2^8 = 256 アドレス**。**実利用可能ホストは 254**(ネットワーク / ブロードキャストを除く)。" },
  { id: "ap-q36", category: "ネットワーク", difficulty: 3, question: "**TCP の 3 ウェイハンドシェイク** の流れとして正しいものを選びなさい。", choices: ["SYN → SYN/ACK → ACK", "SYN → ACK → SYN", "PUSH → ACK → FIN", "FIN → ACK → SYN"], correctIndex: 0, explanation: "**3-way handshake**: ① SYN(seq=x)→ ② SYN/ACK(seq=y, ack=x+1)→ ③ ACK(ack=y+1)。**4-way handshake**(FIN/ACK × 2)で切断。" },
  { id: "ap-q37", category: "セキュリティ", difficulty: 3, question: "**OWASP Top 10**(2021)で **1 位** の脆弱性カテゴリとして最も適切なものを選びなさい。", choices: ["Broken Access Control(アクセス制御不備)", "Cryptographic Failures", "Injection", "SQL Injection"], correctIndex: 0, explanation: "**OWASP Top 10 2021**: ① Broken Access Control / ② Cryptographic Failures / ③ Injection(SQLi 含む)/ ④ Insecure Design ・・・。アクセス制御不備が現代 Web の最大脆弱性。" },
  { id: "ap-q38", category: "セキュリティ", difficulty: 3, question: "**XSS(Cross-Site Scripting)** の対策として最も適切なものを選びなさい。", choices: ["出力エスケープ(HTML / JS context 別)+ CSP", "入力長制限のみ", "DB を読み取り専用", "DNS 設定"], correctIndex: 0, explanation: "**XSS 対策**: コンテキスト別エスケープ(HTML / JS / URL)+ **CSP(Content-Security-Policy)ヘッダ** + HttpOnly Cookie + 入力サニタイズ。React / Vue 等のテンプレートエンジンが自動エスケープ。" },
  { id: "ap-q39", category: "OS", difficulty: 3, question: "**プロセス** と **スレッド** の主な違いとして最も適切なものを選びなさい。", choices: ["プロセス: メモリ空間独立、スレッド: 同一プロセス内でメモリ共有", "両者同じ", "スレッドは OS なし", "プロセスは古い"], correctIndex: 0, explanation: "**プロセス**: メモリ空間 + リソース独立(コンテキストスイッチ重い)。**スレッド**: 同一プロセス内で **メモリ共有 + 軽量**。Python GIL ・ C++ std::thread 等。" },
  { id: "ap-q40", category: "OS", difficulty: 3, question: "**仮想記憶** の **ページング** で **ページフォールト** が発生する状況として最も適切なものを選びなさい。", choices: ["参照したページが物理メモリに存在せず、ディスクから読み込みが必要", "メモリ不足", "ファイル削除", "ネットワーク切断"], correctIndex: 0, explanation: "**ページフォールト**: 必要ページがメモリにない → OS がディスク(スワップ)から読込 → メモリへ。**TLB(Translation Lookaside Buffer)** で頻繁参照ページを高速化。" },
  { id: "ap-q41", category: "コンピュータ", difficulty: 3, question: "**RAID 5** の特徴として最も適切なものを選びなさい。", choices: ["パリティ分散書込 + 1 台故障耐性 + 容量 = N-1 台分", "ミラーリング", "ストライピング only", "RAID 0 と同じ"], correctIndex: 0, explanation: "**RAID 5**: パリティ分散 + 1 台障害耐性 + 容量 = N-1。**RAID 6**: 2 重パリティ + 2 台障害耐性。**RAID 10**: ミラー + ストライプ(高性能 + 50% 容量)。" },
  { id: "ap-q42", category: "システム監査", difficulty: 3, question: "**システム監査基準** で **監査人の独立性** に関する記述として最も適切なものを選びなさい。", choices: ["外観上 + 精神上の両方を確保する必要がある", "外観上のみで足りる", "精神上のみで足りる", "独立性は不要"], correctIndex: 0, explanation: "**監査人の独立性**: 外観上(組織的に分離)+ 精神上(意識的に公平)の両方が必須。監査対象部門との人事 ・ 業務関係なし。" },
  { id: "ap-q43", category: "プロジェクトマネジメント", difficulty: 3, question: "**クリティカルパス** の説明として最も適切なものを選びなさい。", choices: ["プロジェクト最長経路(これ以上短縮できない経路 + フロート 0)", "最短経路", "重要メンバーの作業", "予算超過部分"], correctIndex: 0, explanation: "**Critical Path Method(CPM)**: 各タスクの最早 / 最遅開始終了 + フロート(余裕)算出。**フロート = 0 のパスがクリティカルパス**。プロジェクト期間の決定要素。" },
  { id: "ap-q44", category: "PM", difficulty: 3, question: "**EVM(Earned Value Management)** で **SPI(Schedule Performance Index)** = EV/PV が 0.8 のとき、プロジェクトの状態として最も適切なものを選びなさい。", choices: ["予定より遅れている(20% 遅延)", "予算オーバー", "計画通り", "前倒し"], correctIndex: 0, explanation: "**SPI < 1: 遅延 / SPI = 1: 計画通り / SPI > 1: 前倒し**。**CPI(Cost Performance Index)= EV/AC** も併せて見る(CPI < 1: 予算オーバー)。" },
  { id: "ap-q45", category: "経営戦略", difficulty: 3, question: "**3C 分析** の 3 要素として正しいものを選びなさい。", choices: ["Customer / Competitor / Company", "Cost / Capacity / Capability", "Cloud / Connection / Content", "Communication / Coordination / Control"], correctIndex: 0, explanation: "**3C**: 顧客(市場 ・ ニーズ)・ 競合(強み ・ 弱み)・ 自社(資源 ・ 能力)。マーケティング ・ 戦略立案の基本フレームワーク。" },
  { id: "ap-q46", category: "情報倫理", difficulty: 3, question: "**個人情報保護法** で **要配慮個人情報** に該当するものとして **誤っているもの** を選びなさい。", choices: ["人種", "信条", "病歴", "電話番号"], correctIndex: 3, explanation: "**要配慮個人情報**: 人種 / 信条 / 社会的身分 / 病歴 / 犯罪歴 / 障害 / 遺伝子 / 性的指向など。**電話番号 ・ 氏名 ・ 住所は通常の個人情報**(取得時に同意必須レベルではない)。" },
  { id: "ap-q47", category: "ソフトウェア開発", difficulty: 3, question: "**SOLID 原則** の **S(Single Responsibility Principle)** の説明として最も適切なものを選びなさい。", choices: ["クラスは 1 つの責任のみを持つ", "1 つの巨大クラスに統合", "全てのクラスが同じ", "クラス分割禁止"], correctIndex: 0, explanation: "**SOLID**: Single Responsibility / Open-Closed / Liskov Substitution / Interface Segregation / Dependency Inversion。**SRP**: クラスは変更理由が 1 つのみ → 高凝集 + 疎結合。" },
  { id: "ap-q48", category: "Web", difficulty: 3, question: "**REST API** の設計原則として **誤っているもの** を選びなさい。", choices: ["リソース指向 URL", "HTTP メソッドで操作表現(GET / POST / PUT / DELETE)", "ステートレス", "GUI 必須"], correctIndex: 3, explanation: "**REST**: リソース指向 / 統一インターフェース(HTTP メソッド)/ ステートレス / Cacheable / レイヤード。**GUI とは無関係**(API 設計原則)。" },
  { id: "ap-q49", category: "コンテナ", difficulty: 3, question: "**Docker と VM** の主な違いとして最も適切なものを選びなさい。", choices: ["Docker: OS カーネル共有 ・ 軽量、VM: 各 OS をフル仮想化", "両者同じ", "Docker は古い", "VM は廃止"], correctIndex: 0, explanation: "**Docker**: Linux カーネル共有 + プロセス分離(cgroup / namespace)→ 数秒起動 ・ 数十 MB。**VM**: 完全 OS 仮想化 → 数分起動 ・ GB 級。両者は併用も。" },
  { id: "ap-q50", category: "次のステップ", difficulty: 1, question: "応用情報技術者合格後の **IPA 高度試験** の選択肢として最も適切なものを選びなさい。", choices: ["DB / NW / IT ストラテジスト / システムアーキテクト / PM / 安全確保支援士 等", "ITパスポート", "基本情報", "再受験"], correctIndex: 0, explanation: "**応用情報 → 高度試験(レベル 4)**: 専門分野で **DB / NW / 安全確保支援士 / ストラテジスト / システムアーキテクト / PM / IT サービスマネージャ / システム監査技術者 / エンベデッド** の 9 区分から選択。" },
];
