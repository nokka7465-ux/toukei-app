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
  { id: "ap-q51", category: "アーキテクチャ", difficulty: 3, question: "**マイクロサービス** が **モノリス** より優れる点として **誤っているもの** を選びなさい。", choices: ["技術スタック独立 ・ 個別デプロイ", "サービス単位スケーリング", "障害局所化", "全体トランザクション簡単"], correctIndex: 3, explanation: "**マイクロサービス**: 独立デプロイ + 個別スケーリング + 障害分離 + 技術選択自由。**ただし分散トランザクションは複雑**(2PC / Saga 必要)。" },
  { id: "ap-q52", category: "DB", difficulty: 3, question: "**シャーディング** と **レプリケーション** の違いとして最も適切なものを選びなさい。", choices: ["Sharding: 水平分割 ・ 各シャードに別データ、Replication: 同データを複数ノードにコピー", "両者同じ", "Sharding は古い", "Replication 専用"], correctIndex: 0, explanation: "**Sharding**: スケールアウトのためのデータ分割。**Replication**: 可用性 ・ 読込分散のためのコピー。**併用**(各シャードが Primary + Replica)が一般的。" },
  { id: "ap-q53", category: "DB", difficulty: 3, question: "**NoSQL の CAP 定理** で **AP** に該当するデータベースを選びなさい。", choices: ["Cassandra / DynamoDB(Eventual Consistency)", "Spanner(強整合)", "PostgreSQL", "Excel"], correctIndex: 0, explanation: "**AP(Available + Partition Tolerant)**: Cassandra / DynamoDB / Riak / Couchbase。**CP**: HBase / MongoDB(デフォルト)/ Zookeeper / Spanner。" },
  { id: "ap-q54", category: "ネットワーク", difficulty: 3, question: "**BGP(Border Gateway Protocol)** の用途として最も適切なものを選びなさい。", choices: ["インターネット上の AS(自律システム)間ルーティング", "LAN 内ルーティング", "DNS 解決", "Email 配信"], correctIndex: 0, explanation: "**BGP**: インターネットの基幹ルーティング。AS(ISP / 企業ネット)間で経路情報交換。**Path Vector プロトコル**。BGP 障害でインターネット部分停止することも。" },
  { id: "ap-q55", category: "セキュリティ", difficulty: 3, question: "**OAuth 2.0** の代表的な **Grant Type** として **誤っているもの** を選びなさい。", choices: ["Authorization Code", "Client Credentials", "Implicit(現在は非推奨)", "Email Code"], correctIndex: 3, explanation: "**OAuth 2.0 Grant Types**: Authorization Code(現代標準)・ Client Credentials(サーバ間)・ Resource Owner Password(レガシー)・ Implicit(非推奨)・ Device Code。Email Code は OAuth ではない。" },
  { id: "ap-q56", category: "セキュリティ", difficulty: 3, question: "**JWT(JSON Web Token)** の構造として正しいものを選びなさい。", choices: ["Header.Payload.Signature(Base64URL エンコード + ピリオド連結)", "1 文字列のみ", "XML", "バイナリ"], correctIndex: 0, explanation: "**JWT**: 3 部構成 + Base64URL。**Header**(alg/typ)・ **Payload**(claims)・ **Signature**(HMAC or 公開鍵署名)。**ステートレス認証** で API に最適。" },
  { id: "ap-q57", category: "AI", difficulty: 3, question: "**過学習(Overfitting)** の対策として **誤っているもの** を選びなさい。", choices: ["L1 / L2 正則化", "Cross Validation", "学習データ増 + Augmentation", "学習エポック数を最大化"], correctIndex: 3, explanation: "**過学習対策**: 正則化 / CV / Augmentation / Dropout / Early Stopping / 単純モデル化。**エポック数を増やすほど過学習進行** → Early Stopping が重要。" },
  { id: "ap-q58", category: "ストレージ", difficulty: 3, question: "**SAN(Storage Area Network)** と **NAS(Network Attached Storage)** の違いとして最も適切なものを選びなさい。", choices: ["SAN: ブロックレベル ・ 専用ネット ・ DB 向け、NAS: ファイルレベル ・ Ethernet ・ 共有向け", "両者同じ", "SAN は廃止", "NAS は新"], correctIndex: 0, explanation: "**SAN**: Fibre Channel / iSCSI で **ブロックレベル**(高性能 ・ DB)。**NAS**: NFS / SMB で **ファイルレベル**(共有 ・ コスト効率)。" },
  { id: "ap-q59", category: "コンテナ", difficulty: 3, question: "**Kubernetes** の **Pod** の説明として最も適切なものを選びなさい。", choices: ["最小デプロイ単位(1 つ以上のコンテナを共有 IP / ボリュームで動作)", "Container と完全同義", "VM 1 台", "ノード 1 台"], correctIndex: 0, explanation: "**Pod**: 1+ コンテナの組(Sidecar 等で複数)・ 同一 IP + Localhost 通信 + 共有 Volume。**Deployment / StatefulSet / DaemonSet** で Pod を管理。" },
  { id: "ap-q60", category: "監視", difficulty: 3, question: "**SLA / SLO / SLI** の関係として正しいものを選びなさい。", choices: ["SLI: 計測指標、SLO: 内部目標、SLA: 顧客契約(罰則あり)", "両者同義", "SLA は古い", "SLO は不要"], correctIndex: 0, explanation: "**SLI(Indicator)**: 実測値(レイテンシ / エラー率)。**SLO(Objective)**: 内部目標(99.9% 等)。**SLA(Agreement)**: 顧客契約(違反で SLA Credit)。SLO < SLA が一般的(余裕)。" },
  { id: "ap-q61", category: "監視", difficulty: 3, question: "**SRE(Site Reliability Engineering)** の **Error Budget** の役割として最も適切なものを選びなさい。", choices: ["SLO 違反許容範囲を予算化 → 開発 vs 安定運用のバランス指標", "従業員予算", "クラウド予算", "DB 予算"], correctIndex: 0, explanation: "**Error Budget = 1 - SLO**(99.9% SLO なら 0.1% = 43 分 / 月の許容ダウン)。**残予算多 = 新機能 OK、枯渇 = 安定運用優先**。Google SRE 提唱の運用哲学。" },
  { id: "ap-q62", category: "CI/CD", difficulty: 3, question: "**Blue/Green Deployment** の特徴として最も適切なものを選びなさい。", choices: ["旧環境(Blue)と新環境(Green)を並行運用 → トラフィック切替", "Canary と同じ", "Rolling Update のみ", "1 環境のみ"], correctIndex: 0, explanation: "**Blue/Green**: 旧 / 新を別環境で完全分離 → LB トラフィック切替で瞬時切替 + 即時ロールバック。**Canary**(段階的トラフィック)も類似手法。" },
  { id: "ap-q63", category: "Container Registry", difficulty: 3, question: "**Docker Image の Layer** の特徴として最も適切なものを選びなさい。", choices: ["Read-only な層 + UnionFS で重ね → Cache + 共有 + 差分配信", "全体 1 ファイル", "1 層のみ", "GPU 関連"], correctIndex: 0, explanation: "**Docker Layer**: 各 Dockerfile 命令で新層 + Content-addressable Hash + Cache + 共有(複数イメージ間で同層は 1 度のみ保存)。" },
  { id: "ap-q64", category: "サーバレス", difficulty: 3, question: "**AWS Lambda** の **Cold Start** を軽減する方法として **誤っているもの** を選びなさい。", choices: ["Provisioned Concurrency", "コードサイズ削減", "Runtime 選択(Node / Python は速い)", "Lambda を毎回新規作成"], correctIndex: 3, explanation: "**Cold Start 対策**: Provisioned Concurrency / 小さいパッケージ / 軽量 Runtime / Init コード最適化 / SnapStart(Java)。新規作成は逆効果。" },
  { id: "ap-q65", category: "次のステップ", difficulty: 1, question: "AP 合格後の **IPA 高度試験以外の選択肢** として最も適切なものを選びなさい。", choices: ["AWS SAA / Azure AI-900 / G 検定 / DS 検定", "ITパスポート", "基本情報", "再受験"], correctIndex: 0, explanation: "**AP 後の横展開**: AWS / Azure / GCP のクラウド認定 + G 検定 / DS 検定 / E 資格 で AI 系へ。**MBA / 中小企業診断士** で経営側も。" },
  { id: "ap-q66", category: "アーキテクチャ", difficulty: 4, question: "**Event-Driven Architecture(EDA)** の典型構成として最も適切なものを選びなさい。", choices: ["Producer → Event Broker(Kafka / Pulsar / EventBridge)→ Consumer", "Monolith", "GUI のみ", "GPU"], correctIndex: 0, explanation: "**EDA**: 疎結合 ・ 非同期。**Pub/Sub**(Kafka / NATS / Pulsar)・ **Choreography vs Orchestration** ・ **Event Sourcing + CQRS** で実装。マイクロサービス基盤。" },
  { id: "ap-q67", category: "アーキテクチャ", difficulty: 4, question: "**CQRS(Command Query Responsibility Segregation)** の利点として最も適切なものを選びなさい。", choices: ["Read / Write モデル分離 → 個別最適化 ・ スケール容易", "両者統合 → シンプル", "GPU 削減", "認証"], correctIndex: 0, explanation: "**CQRS**: 書込モデル(Command)と読込モデル(Query)を分離。**Event Sourcing** と組合せが典型。**Read Replica / 投影 View** で読込最適化。複雑度増加 → 大規模 / 性能要件時に。" },
  { id: "ap-q68", category: "DB", difficulty: 4, question: "**NoSQL の 4 種** として **誤っているもの** を選びなさい。", choices: ["Key-Value(Redis / DynamoDB)", "Document(MongoDB)", "Column-Family(Cassandra / HBase)", "Spreadsheet"], correctIndex: 3, explanation: "**NoSQL 4 種**: Key-Value(Redis / DynamoDB)・ Document(MongoDB / CosmosDB)・ Column(Cassandra / HBase / Bigtable)・ Graph(Neo4j / Neptune)。**Vector**(Pinecone / Weaviate)も近年追加。" },
  { id: "ap-q69", category: "DB", difficulty: 4, question: "**OLTP vs OLAP** の本質的違いとして最も適切なものを選びなさい。", choices: ["OLTP=トランザクション処理 / 短クエリ、OLAP=分析処理 / 集計クエリ", "両者同じ", "OLAP=正規化最大", "OLTP=列指向"], correctIndex: 0, explanation: "**OLTP**: 行指向 ・ 正規化 ・ ACID ・ 短クエリ(MySQL / PostgreSQL)。**OLAP**: 列指向 ・ 非正規化(Star)・ 集計 ・ DWH(BigQuery / Redshift / Snowflake)。**HTAP**(両者統合、TiDB / Spanner)も登場。" },
  { id: "ap-q70", category: "ネットワーク", difficulty: 4, question: "**HTTP/3** の特徴として最も適切なものを選びなさい。", choices: ["UDP ベース(QUIC)・ 多重化 ・ 0-RTT 接続 ・ TLS 1.3 統合", "TCP ベース", "暗号化なし", "速度劣化"], correctIndex: 0, explanation: "**HTTP/3 / QUIC**: UDP 上で多重化 ・ Head-of-Line Blocking 解消 ・ 0-RTT 再接続 ・ TLS 1.3 統合。**Google / Cloudflare / AWS** で展開済み。**HTTP/2 → HTTP/3** が現在標準化進行。" },
  { id: "ap-q71", category: "セキュリティ", difficulty: 4, question: "**Zero Trust Network Access(ZTNA)** の原則として最も適切なものを選びなさい。", choices: ["Never trust, always verify ・ 都度認証 / 認可 / Context 評価", "VPN だけで完結", "境界防御のみ", "GUI 認証"], correctIndex: 0, explanation: "**Zero Trust**(NIST SP 800-207): ペリメータ廃止 + Identity + Device + Context で都度判定。**SASE / SSE / Zscaler / Cloudflare ZTNA / Tailscale**。**Microsegmentation + IAM + EDR + DLP** で実装。" },
  { id: "ap-q72", category: "セキュリティ", difficulty: 4, question: "**Supply Chain Attack** の代表事例として **誤っているもの** を選びなさい。", choices: ["SolarWinds / Codecov / 3CX", "Log4Shell(Log4j)", "xz utils バックドア", "正常なソフトウェア更新"], correctIndex: 3, explanation: "**Supply Chain Attack**: SolarWinds(2020)・ Codecov ・ 3CX ・ xz utils(2024)・ Log4Shell(CVE-2021-44228)。**SBOM**(Software Bill of Materials)・ **SLSA / Sigstore**(署名)で対策。" },
  { id: "ap-q73", category: "Cloud", difficulty: 4, question: "**Serverless(FaaS)** の特徴として **誤っているもの** を選びなさい。", choices: ["Auto Scaling / 従量課金 / 運用負荷低減", "Cold Start / 実行時間制限あり", "ステートレス推奨", "サーバ管理が増える"], correctIndex: 3, explanation: "**Serverless**: AWS Lambda / Azure Functions / GCP Cloud Functions / Cloudflare Workers。**サーバ管理は不要**(マネージド)。Cold Start / Memory / 実行時間制限などの制約あり。Event-Driven と相性良。" },
  { id: "ap-q74", category: "Cloud", difficulty: 4, question: "**Kubernetes(K8s)の Pod** の定義として最も適切なものを選びなさい。", choices: ["1 つ以上の Container を共有 NW / Volume で束ねた最小デプロイ単位", "VM の代替", "サーバ", "GPU"], correctIndex: 0, explanation: "**Pod**: 同 Node 上で動く Container 群(Sidecar パターン等)。**Deployment / ReplicaSet / Service / Ingress / ConfigMap / Secret**。**Helm / Kustomize** で構成管理。" },
  { id: "ap-q75", category: "DevOps", difficulty: 4, question: "**SRE(Site Reliability Engineering)** の中核概念として **誤っているもの** を選びなさい。", choices: ["SLI / SLO / SLA + Error Budget", "Toil 削減 + 自動化", "Blameless Postmortem", "全員 GPU 配布"], correctIndex: 3, explanation: "**SRE**(Google 提唱): **SLI**(指標)・ **SLO**(目標)・ **SLA**(契約)・ **Error Budget**(残り誤り許容枠)。**Toil**(手作業)削減 ・ **Blameless Postmortem** で改善文化。" },
  { id: "ap-q76", category: "DevOps", difficulty: 4, question: "**CI / CD** の典型ツールチェーンとして **誤っているもの** を選びなさい。", choices: ["GitHub Actions / GitLab CI / CircleCI / Jenkins", "ArgoCD / Flux(GitOps)", "Docker / K8s + Helm", "Microsoft Word"], correctIndex: 3, explanation: "**CI/CD**: GitHub Actions / GitLab / Circle / Jenkins / Travis。**GitOps**: ArgoCD / Flux(Git を Source of Truth)。**Container Registry**(ECR / GCR / Harbor)も必須要素。" },
  { id: "ap-q77", category: "AI", difficulty: 4, question: "**LLMOps**(LLM 用 MLOps)の特徴として **誤っているもの** を選びなさい。", choices: ["Prompt バージョン管理 + A/B Test", "Evaluation(LLM-as-Judge / Human Eval)", "Cost / Token / Latency 監視", "GPU 不要"], correctIndex: 3, explanation: "**LLMOps**: Prompt Management(PromptLayer / Langfuse)・ Eval(RAGAS / DeepEval)・ Observability(Helicone / Langfuse)・ Cost / Token Monitoring。**GPU は通常必須**(クラウド経由なら間接的)。" },
  { id: "ap-q78", category: "AI", difficulty: 4, question: "**Vector Database** の代表的実装として **誤っているもの** を選びなさい。", choices: ["Pinecone / Weaviate / Qdrant / Milvus", "PostgreSQL pgvector / Redis Vector", "OpenSearch Vector / Elastic Vector", "Microsoft Word"], correctIndex: 3, explanation: "**Vector DB**: 専用(Pinecone / Weaviate / Qdrant / Milvus / Chroma)・ Add-on(pgvector / Redis / OpenSearch / Elasticsearch / Mongo)。**HNSW / IVF-PQ** インデックスが主流。**RAG / 推薦 / 異常検知**で活用。" },
  { id: "ap-q79", category: "DX", difficulty: 4, question: "**DX 推進** で **AP 取得者に期待される役割** として最も適切なものを選びなさい。", choices: ["IT 部門と業務部門の橋渡し + DX プロジェクト設計 / 推進", "コーディングのみ", "経理のみ", "営業のみ"], correctIndex: 0, explanation: "**AP 合格者**: IPA レベル 3 ・ IT スキル標準 ITSS L3 相当。**システム企画 ・ 設計 ・ DX プロジェクト管理 ・ 業務 IT 翻訳** の中核。**ITストラテジスト / PM / SA** への登竜門。" },
  { id: "ap-q80", category: "実務", difficulty: 4, question: "応用情報技術者試験(AP)で重視される **総合 IT 実装力** として最も適切なものを選びなさい。", choices: ["アーキテクチャ + DB + NW + SEC + DevOps + AI + マネジメント + ストラテジの統合判断", "コードのみ", "GUI 操作のみ", "Excel のみ"], correctIndex: 0, explanation: "**AP 試験範囲**(IPA レベル 3): ① 基礎理論 ② アルゴリズム ・ 開発 ③ アーキテクチャ ・ NW ・ DB ・ SEC ④ システム戦略 / マネジメント ⑤ ストラテジ ・ 法務。**応用エンジニア + 企画 / 設計者** の総合判定。" },
];
