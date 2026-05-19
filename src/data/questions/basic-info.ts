import type { Question } from "@/types/content";

export const basicInfoQuestions: Question[] = [
  {
    id: "fe-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "基本情報技術者試験(FE)が分類される IPA の情報処理技術者試験のレベルとして最も適切なものを選びなさい。",
    choices: [
      "レベル 1(IT パスポート相当)",
      "レベル 2(基本 ・ 入門)",
      "レベル 3(応用)",
      "レベル 4(高度)",
    ],
    correctIndex: 1,
    explanation:
      "FE は **レベル 2**。IT パスポートがレベル 1、応用情報がレベル 3、高度試験(ITストラテジスト等)がレベル 4。FE は応用情報の登竜門に位置付けられる。",
  },
  {
    id: "fe-q2",
    category: "数値表現",
    difficulty: 2,
    question:
      "10 進数の 25 を 2 進数で表したものとして最も適切なものを選びなさい。",
    choices: [
      "10001",
      "11001",
      "11101",
      "10101",
    ],
    correctIndex: 1,
    explanation:
      "$25 = 16 + 8 + 1 = 2^4 + 2^3 + 2^0$ なので 2 進数では **11001**。逆に $11001_2 = 16 + 8 + 0 + 0 + 1 = 25$ で確認できる。",
  },
  {
    id: "fe-q3",
    category: "論理演算",
    difficulty: 2,
    question:
      "$0b1010 \\oplus 0b1100$(XOR)の値として最も適切なものを選びなさい。",
    choices: [
      "$0b0110$(10 進で 6)",
      "$0b1110$(10 進で 14)",
      "$0b1000$(10 進で 8)",
      "$0b1111$(10 進で 15)",
    ],
    correctIndex: 0,
    explanation:
      "XOR は **両者が異なるビットで 1**。1010 ⊕ 1100 = 0110 = 10 進で 6。AND は 1000、OR は 1110。",
  },
  {
    id: "fe-q4",
    category: "コンピュータ",
    difficulty: 2,
    question:
      "CPU のキャッシュメモリの主目的として最も適切なものを選びなさい。",
    choices: [
      "ハードディスクの容量を増やす",
      "メインメモリへのアクセス遅延を緩和し処理を高速化する",
      "電力消費を増やすため",
      "OS のバックアップ用",
    ],
    correctIndex: 1,
    explanation:
      "**キャッシュメモリ** は CPU と主記憶の速度差を埋めるための高速 ・ 小容量メモリ。L1 → L2 → L3 と階層化され、上位ほど高速 ・ 小容量。",
  },
  {
    id: "fe-q5",
    category: "アルゴリズム",
    difficulty: 2,
    question:
      "$n$ 個の要素のソート済配列に対する二分探索の計算量として最も適切なものを選びなさい。",
    choices: [
      "$O(1)$",
      "$O(\\log n)$",
      "$O(n)$",
      "$O(n^2)$",
    ],
    correctIndex: 1,
    explanation:
      "**二分探索** は範囲を毎回半分にするため $O(\\log n)$。$n=10^6$ でも 20 回程度の比較で終わる。",
  },
  {
    id: "fe-q6",
    category: "アルゴリズム",
    difficulty: 3,
    question:
      "次の疑似コードを実行したとき、最終的な変数 result の値として最も適切なものを選びなさい。\n\n```\nresult ← 0\nfor i ← 1 to 5 do\n  result ← result + i * i\nend for\n```",
    choices: ["15", "25", "55", "120"],
    correctIndex: 2,
    explanation:
      "$1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$。トレース表で追うと確実。",
  },
  {
    id: "fe-q7",
    category: "データ構造",
    difficulty: 2,
    question:
      "「最後に入れた要素を最初に取り出す」性質を持つデータ構造として最も適切なものを選びなさい。",
    choices: [
      "キュー(Queue)",
      "スタック(Stack)",
      "リスト",
      "ハッシュ表",
    ],
    correctIndex: 1,
    explanation:
      "**スタック** は LIFO(Last-In, First-Out)。push / pop 操作。関数の呼出履歴 ・ ブラウザの戻るボタンなどで使われる。キューは FIFO(First-In, First-Out)。",
  },
  {
    id: "fe-q8",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "AES の暗号方式の分類として最も適切なものを選びなさい。",
    choices: [
      "公開鍵暗号(非対称鍵暗号)",
      "共通鍵暗号(対称鍵暗号)",
      "ハッシュ関数",
      "デジタル署名",
    ],
    correctIndex: 1,
    explanation:
      "**AES** は共通鍵暗号(対称鍵暗号)の代表。高速だが鍵配送が課題。RSA / ECC が公開鍵暗号、SHA-256 がハッシュ関数。",
  },
  {
    id: "fe-q9",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "Web アプリケーションへの SQL インジェクション攻撃の **最も基本的な対策** として最も適切なものを選びなさい。",
    choices: [
      "ファイアウォール導入",
      "プレースホルダ(プリペアドステートメント)",
      "DNS over HTTPS",
      "TLS の有効化",
    ],
    correctIndex: 1,
    explanation:
      "**プレースホルダ(プリペアドステートメント)** で SQL 構文とユーザ入力を分離するのが SQL インジェクションの基本対策。文字列連結による SQL 構築は禁忌。",
  },
  {
    id: "fe-q10",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "情報セキュリティの三大要素(CIA トライアド)に **含まれない** ものを選びなさい。",
    choices: [
      "機密性(Confidentiality)",
      "完全性(Integrity)",
      "可用性(Availability)",
      "拡張性(Scalability)",
    ],
    correctIndex: 3,
    explanation:
      "**CIA トライアド = 機密性 / 完全性 / 可用性**。拡張性(Scalability)は性能 ・ 設計の指標で CIA には含まれない。",
  },
  {
    id: "fe-q11",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "ドメイン名から IP アドレスを解決するプロトコルとして最も適切なものを選びなさい。",
    choices: ["DNS", "DHCP", "HTTP", "SMTP"],
    correctIndex: 0,
    explanation:
      "**DNS(Domain Name System)** がドメイン名 → IP アドレス変換を担う。DHCP は動的 IP 割当、HTTP は Web 通信、SMTP はメール送信。",
  },
  {
    id: "fe-q12",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "TCP/IP モデルでネットワーク層に位置するプロトコルとして最も適切なものを選びなさい。",
    choices: [
      "HTTP",
      "TCP / UDP",
      "IP",
      "Ethernet",
    ],
    correctIndex: 2,
    explanation:
      "**IP** がインターネット(ネットワーク)層。HTTP / DNS はアプリケーション層、TCP / UDP はトランスポート層、Ethernet はネットワーク I/F 層。",
  },
  {
    id: "fe-q13",
    category: "DB",
    difficulty: 2,
    question:
      "リレーショナルデータベースで、**主キー以外の属性が主キーに完全関数従属している状態** を表す正規形として最も適切なものを選びなさい。",
    choices: [
      "第 1 正規形(1NF)",
      "第 2 正規形(2NF)",
      "第 3 正規形(3NF)",
      "Boyce-Codd 正規形(BCNF)",
    ],
    correctIndex: 1,
    explanation:
      "**第 2 正規形(2NF)** は『1NF + 部分関数従属の排除』。すなわち主キーの一部だけに依存する属性をなくす段階。",
  },
  {
    id: "fe-q14",
    category: "DB",
    difficulty: 2,
    question:
      "ACID 特性のうち「トランザクションの結果がコミット後にデータベースに永続的に保存される」性質として最も適切なものを選びなさい。",
    choices: [
      "Atomicity(原子性)",
      "Consistency(一貫性)",
      "Isolation(独立性)",
      "Durability(永続性)",
    ],
    correctIndex: 3,
    explanation:
      "**Durability(永続性)** はコミット済の変更がクラッシュ後も保持される性質。WAL(Write-Ahead Logging)などで実装される。",
  },
  {
    id: "fe-q15",
    category: "ソフトウェア",
    difficulty: 2,
    question:
      "ソフトウェアテストで「内部のロジックを意識せず仕様に対する入出力で確認する」手法として最も適切なものを選びなさい。",
    choices: [
      "ホワイトボックステスト",
      "ブラックボックステスト",
      "グレーボックステスト",
      "インスペクション",
    ],
    correctIndex: 1,
    explanation:
      "**ブラックボックステスト** は外部仕様に基づいてテスト。同値分割 ・ 境界値分析が代表。ホワイトボックスは内部ロジック網羅(命令網羅 ・ 分岐網羅)。",
  },
  {
    id: "fe-q16",
    category: "PM",
    difficulty: 2,
    question:
      "プロジェクト管理のアローダイアグラムで **最長の経路** を表し、プロジェクト完了までの時間を決定する経路の名称として最も適切なものを選びなさい。",
    choices: [
      "クリティカルパス",
      "WBS",
      "ガントチャート",
      "PERT",
    ],
    correctIndex: 0,
    explanation:
      "**クリティカルパス** はプロジェクト所要時間を決める最長経路。この経路上の作業遅延がそのままプロジェクト全体の遅延に直結する。",
  },
  {
    id: "fe-q17",
    category: "サービス",
    difficulty: 2,
    question:
      "サービスの提供レベルを利用者と提供者で合意した文書として最も適切なものを選びなさい。",
    choices: [
      "RFP(提案依頼書)",
      "SLA(サービスレベル合意)",
      "WBS(作業分解構成)",
      "RACI",
    ],
    correctIndex: 1,
    explanation:
      "**SLA(Service Level Agreement)** はサービス提供レベル(可用性 ・ 応答時間など)を提供者と利用者で合意する文書。SLO は内部目標、SLI は実測指標。",
  },
  {
    id: "fe-q18",
    category: "経営",
    difficulty: 2,
    question:
      "マーケティングの 4P に **含まれない** ものを選びなさい。",
    choices: [
      "Product(製品)",
      "Price(価格)",
      "Place(流通)",
      "People(人材)",
    ],
    correctIndex: 3,
    explanation:
      "**4P = Product / Price / Place / Promotion**。People は 7P(7 つの P)に拡張された場合に含まれる。",
  },
  {
    id: "fe-q19",
    category: "AI",
    difficulty: 2,
    question:
      "機械学習で『正解ラベルが付いたデータから学習する方式』として最も適切なものを選びなさい。",
    choices: [
      "教師あり学習",
      "教師なし学習",
      "強化学習",
      "深層学習",
    ],
    correctIndex: 0,
    explanation:
      "**教師あり学習** は入力 + 正解ラベルのペアで学習する方式。回帰 ・ 分類が代表的タスク。教師なし学習はラベルなし(クラスタリング等)、強化学習は報酬信号、深層学習はニューラルネットを多層化した手法名。",
  },
  {
    id: "fe-q20",
    category: "DX",
    difficulty: 2,
    question:
      "経済産業省が定義する DX(デジタルトランスフォーメーション)の 3 段階の順序として最も適切なものを選びなさい。",
    choices: [
      "デジタイゼーション → デジタライゼーション → DX",
      "DX → デジタイゼーション → デジタライゼーション",
      "AI → IoT → DX",
      "PoC → MVP → 本番",
    ],
    correctIndex: 0,
    explanation:
      "**デジタイゼーション(紙→デジタル化)→ デジタライゼーション(プロセスのデジタル化)→ DX(ビジネスモデル変革)** の 3 段階が経産省の定義。FE / AP の経営戦略分野で頻出。",
  },
  {
    id: "fe-q21",
    category: "アルゴリズム",
    difficulty: 2,
    question:
      "2 分探索木の **平均的な探索時間計算量** を選びなさい。",
    choices: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    correctIndex: 1,
    explanation:
      "**2 分探索木はバランスが取れていれば O(log n)**(平均)。最悪 O(n)(片側に偏った場合)。AVL 木 ・ Red-Black 木は常に O(log n) を保証する自己平衡木。",
  },
  {
    id: "fe-q22",
    category: "アルゴリズム",
    difficulty: 3,
    question:
      "ソートアルゴリズムの中で **平均 O(n log n) ・ 最悪 O(n²)** の特性を持つものを選びなさい。",
    choices: ["バブルソート", "クイックソート", "マージソート", "ヒープソート"],
    correctIndex: 1,
    explanation:
      "**クイックソートは平均 O(n log n) ・ 最悪 O(n²)**(ピボット選択次第)。マージソート ・ ヒープソートは常に O(n log n)、バブルソートは O(n²)。",
  },
  {
    id: "fe-q23",
    category: "DB",
    difficulty: 2,
    question:
      "SQL の **GROUP BY 句** と一緒に集計結果を絞り込むのに使う句として最も適切なものを選びなさい。",
    choices: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
    correctIndex: 1,
    explanation:
      "**HAVING は GROUP BY 後の集計結果を絞り込む**(WHERE は GROUP BY 前の行を絞る)。例: `GROUP BY 部署 HAVING COUNT(*) > 10`。",
  },
  {
    id: "fe-q24",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "**HTTPS** が使う標準ポート番号を選びなさい。",
    choices: ["21", "80", "443", "8080"],
    correctIndex: 2,
    explanation:
      "**HTTPS = 443**、HTTP = 80、FTP = 21、SSH = 22、SMTP = 25、DNS = 53、POP3 = 110。FE で頻出のポート番号は暗記必須。",
  },
  {
    id: "fe-q25",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "**多要素認証(MFA)** で組合せる要素として最も適切なものを選びなさい。",
    choices: [
      "知識要素(パスワード)+ 所持要素(スマホ)+ 生体要素(指紋)",
      "パスワード + パスワード + パスワード",
      "ID + パスワード + メアド",
      "ID + ユーザ名 + ニックネーム",
    ],
    correctIndex: 0,
    explanation:
      "**MFA は『知識要素 / 所持要素 / 生体要素』の異なる種類** を組合せる(同じ種類を複数使っても多要素にはならない)。SMS 認証コード + パスワードは『所持 + 知識』の 2 要素認証。",
  },
  {
    id: "fe-q26",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "**公開鍵暗号方式** の説明として **誤っているもの** を選びなさい。",
    choices: [
      "公開鍵で暗号化、秘密鍵で復号する",
      "代表アルゴリズムは RSA ・ ECDSA",
      "鍵共有問題を解決する",
      "共通鍵暗号より高速",
    ],
    correctIndex: 3,
    explanation:
      "**公開鍵暗号は共通鍵より遅い**。実運用では **公開鍵で共通鍵を交換 → 以降は共通鍵で高速通信** というハイブリッド方式(TLS 等)。RSA / ECDSA が代表、楕円曲線(ECDSA / Ed25519)は鍵長が短くて高速。",
  },
  {
    id: "fe-q27",
    category: "コンピュータ構成",
    difficulty: 3,
    question:
      "CPU のキャッシュ階層で **L1 / L2 / L3 の正しい関係** を選びなさい。",
    choices: [
      "L1 が最速 ・ 最小、L3 が最遅 ・ 最大",
      "L3 が最速、L1 が最遅",
      "全て同じ速度",
      "L1 と L3 は容量が同じ",
    ],
    correctIndex: 0,
    explanation:
      "**L1(最速、KB 級)→ L2(中速、数百 KB)→ L3(最遅、MB 級)**。CPU コアに近いほど高速 ・ 小容量。階層的キャッシュで主記憶アクセスを減らす。",
  },
  {
    id: "fe-q28",
    category: "プロジェクトマネジメント",
    difficulty: 2,
    question:
      "**WBS(Work Breakdown Structure)** の役割として最も適切なものを選びなさい。",
    choices: [
      "プロジェクトの作業を階層的に分解 ・ 可視化する",
      "従業員の人事評価をする",
      "予算を自動配分する",
      "顧客満足度を計測する",
    ],
    correctIndex: 0,
    explanation:
      "**WBS** はプロジェクト全体を **大 → 中 → 小タスクへ階層分解** し、見積もり ・ 工数管理 ・ 進捗管理の基盤にする。PMBOK のスコープ管理プロセス。",
  },
  {
    id: "fe-q29",
    category: "AI / ML",
    difficulty: 3,
    question:
      "機械学習の **過学習(Overfitting)** の典型的な兆候として最も適切なものを選びなさい。",
    choices: [
      "学習データで高精度、テストデータで低精度",
      "学習データで低精度、テストデータで高精度",
      "両方とも低精度",
      "両方とも高精度",
    ],
    correctIndex: 0,
    explanation:
      "**過学習 = 学習データに適合しすぎて汎化性能が落ちる**。対策は **正則化(L1/L2)・ Dropout ・ Early Stopping ・ データ拡張 ・ 単純なモデル化** など。テストデータの精度を必ず確認。",
  },
  {
    id: "fe-q30",
    category: "クラウド",
    difficulty: 2,
    question:
      "**サーバレスアーキテクチャ** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "リクエスト数 ・ 実行時間に応じた従量課金",
      "サーバの OS パッチ ・ プロビジョニング不要",
      "アイドル時もサーバを常時起動",
      "AWS Lambda / Google Cloud Functions / Azure Functions が代表",
    ],
    correctIndex: 2,
    explanation:
      "**サーバレスは『アイドル時 0 円 ・ リクエスト時のみ課金 ・ 自動スケール』** が本質。常時起動はサーバレスではない(従来の VM / コンテナ)。コールドスタートが弱点。",
  },
];
