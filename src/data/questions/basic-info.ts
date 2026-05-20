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
  { id: "fe-q31", category: "アルゴリズム", difficulty: 3, question: "**マージソート** の特徴として **誤っているもの** を選びなさい。", choices: ["O(n log n) で安定ソート", "分割統治法", "外部メモリ O(n) が必要", "in-place で動作"], correctIndex: 3, explanation: "**マージソート**: 分割統治 + 安定 + O(n log n)。ただし **マージに O(n) の外部メモリが必要**(in-place は実装複雑)。**ヒープソートは in-place + O(n log n) だが不安定**。" },
  { id: "fe-q32", category: "アルゴリズム", difficulty: 3, question: "**深さ優先探索(DFS)** の典型的なデータ構造として最も適切なものを選びなさい。", choices: ["スタック(再帰呼出を含む)", "キュー", "ヒープ", "ハッシュ"], correctIndex: 0, explanation: "**DFS**: スタック(LIFO)or 再帰。**BFS**: キュー(FIFO)。トポロジカルソート / 強連結成分は DFS、最短経路 / レベル順は BFS。" },
  { id: "fe-q33", category: "DB", difficulty: 3, question: "**ER 図** の **多対多リレーション** を表現する際に必要なものとして最も適切なものを選びなさい。", choices: ["中間テーブル(関連実体)を作成", "外部キーのみ", "ストアドプロシージャ", "View"], correctIndex: 0, explanation: "**多対多(M:N)**: 中間テーブル(associative entity / junction table)に **両側の外部キーペアを主キー** として持たせる。例: 学生 - 履修 - 講座。" },
  { id: "fe-q34", category: "DB", difficulty: 3, question: "**インデックスのトレードオフ** として正しいものを選びなさい。", choices: ["読込高速 ・ 書込遅延 + ストレージ増", "全て高速化", "コストゼロ", "メモリ削減"], correctIndex: 0, explanation: "**インデックス**: SELECT 高速化(O(log n) 探索)/ INSERT/UPDATE/DELETE 遅延(インデックス更新)+ 容量増。**書込多い列にはインデックス避ける**。" },
  { id: "fe-q35", category: "ネットワーク", difficulty: 3, question: "**HTTP/2** の主な改善点として **誤っているもの** を選びなさい。", choices: ["バイナリプロトコル", "多重化(Multiplexing)", "Server Push", "完全平文化"], correctIndex: 3, explanation: "**HTTP/2**: バイナリ + Multiplexing(1 接続で複数リクエスト並列)+ Server Push + Header Compression。**HTTP/3 は QUIC ベース**(UDP)。平文ではない。" },
  { id: "fe-q36", category: "ネットワーク", difficulty: 3, question: "**プライベート IP アドレス** の範囲として正しいものを選びなさい。", choices: ["10.0.0.0/8 / 172.16.0.0/12 / 192.168.0.0/16", "11.0.0.0/8", "8.0.0.0/8", "224.0.0.0/4"], correctIndex: 0, explanation: "**プライベート IPv4(RFC1918)**: 10.0.0.0/8、172.16.0.0/12、192.168.0.0/16。社内 / 自宅で利用、インターネット直接ルーティングされない。NAT で公開。" },
  { id: "fe-q37", category: "セキュリティ", difficulty: 3, question: "**HMAC** の役割として最も適切なものを選びなさい。", choices: ["共通鍵 + ハッシュで認証付きメッセージダイジェスト", "公開鍵暗号", "ファイル圧縮", "DNS 解決"], correctIndex: 0, explanation: "**HMAC**: `H(K ⊕ opad || H(K ⊕ ipad || message))`。**メッセージ認証(改ざん検知 + 送信者認証)**。API 認証署名(AWS Signature 等)で多用。" },
  { id: "fe-q38", category: "セキュリティ", difficulty: 3, question: "**証明書チェーン** の検証で **不要な要素** を選びなさい。", choices: ["サーバ証明書", "中間 CA 証明書", "ルート CA 公開鍵(ブラウザ信頼ストア)", "ユーザのパスワード"], correctIndex: 3, explanation: "**X.509 証明書チェーン**: Server → Intermediate CA → Root CA(ブラウザ信頼ストアにある公開鍵)で署名検証。**ユーザパスワードは無関係**。Let's Encrypt は ISRG Root X1。" },
  { id: "fe-q39", category: "OS", difficulty: 3, question: "**プロセススケジューリング** の **ラウンドロビン方式** の特徴として最も適切なものを選びなさい。", choices: ["時間量(タイムクォンタム)で順番にプロセスを切替", "優先度順", "FIFO 完了まで実行", "最短ジョブ優先"], correctIndex: 0, explanation: "**Round Robin**: 各プロセスにタイムクォンタム → 終了か量を使い切ったら次へ。応答性 ◎、スループット ○。**Linux CFS は完全公平スケジューラ**(進化版)。" },
  { id: "fe-q40", category: "コンピュータ", difficulty: 3, question: "**ビット演算 AND / OR / XOR** で **2 つの値が異なるビットを 1 にする** ものを選びなさい。", choices: ["XOR", "AND", "OR", "NOT"], correctIndex: 0, explanation: "**XOR(排他的論理和)**: 異なれば 1、同じなら 0。`a ^ b ^ b = a` の性質(暗号 / 一時変数交換)。CRC / Hash で頻用。" },
  { id: "fe-q41", category: "ソフトウェア工学", difficulty: 3, question: "**テスト技法** で **境界値分析** の説明として最も適切なものを選びなさい。", choices: ["仕様の境界(最小 / 最大 / off-by-one)に集中してバグを検出", "全数テスト", "ランダムテスト", "回帰テスト"], correctIndex: 0, explanation: "**境界値分析**: 境界 ・ 境界 ±1 ・ 不正値で集中テスト。**同値分割**(代表値テスト)と併用。バグの大半が境界に集中するため効率的。" },
  { id: "fe-q42", category: "ソフトウェア工学", difficulty: 3, question: "**Code Coverage** の **ステートメントカバレッジ ・ ブランチカバレッジ** の違いとして最も適切なものを選びなさい。", choices: ["ブランチ: 条件分岐の全パス検証(より厳しい)", "両者同じ", "ステートメント: 全行実行", "ブランチは廃止"], correctIndex: 0, explanation: "**Statement Coverage**: 全行実行(条件 true 側だけでも OK)。**Branch Coverage**: 条件分岐の true/false 両方。**Path Coverage**(全組合せ)が最強。" },
  { id: "fe-q43", category: "オブジェクト指向", difficulty: 3, question: "**カプセル化** の主目的として最も適切なものを選びなさい。", choices: ["内部実装を隠蔽 + 公開 API のみ公開で変更耐性", "速度向上", "メモリ削減", "GUI 構築"], correctIndex: 0, explanation: "**カプセル化**: getter/setter + private で内部実装を隠す → クラス内部の変更が外部に影響しない。OOP の **継承 ・ ポリモーフィズム** と並ぶ三原則。" },
  { id: "fe-q44", category: "デザインパターン", difficulty: 3, question: "**Singleton パターン** の用途として最も適切なものを選びなさい。", choices: ["クラスのインスタンスを 1 つに制限(Logger / Config 等)", "複数インスタンス", "継承禁止", "GUI 専用"], correctIndex: 0, explanation: "**Singleton**: グローバル唯一のインスタンス保証。Logger / Configuration / Connection Pool で使用。**過度な使用はテスタビリティ低下 ・ アンチパターン化**。" },
  { id: "fe-q45", category: "Git", difficulty: 3, question: "**Git の merge と rebase** の違いとして最も適切なものを選びなさい。", choices: ["merge: マージコミット作成 / rebase: コミット履歴を線形化", "両者同じ", "rebase は古い", "merge は廃止"], correctIndex: 0, explanation: "**merge**: 両ブランチの履歴保持 + マージコミット。**rebase**: 親ブランチの先頭にコミットを置き直す → 線形履歴。**Public ブランチに rebase は禁忌**(履歴改変)。" },
  { id: "fe-q46", category: "CI/CD", difficulty: 3, question: "**継続的デプロイ(Continuous Deployment)** と **継続的デリバリ(Continuous Delivery)** の違いとして最も適切なものを選びなさい。", choices: ["Deployment: 本番自動デプロイ / Delivery: ステージングまで自動 + 本番は手動", "両者同じ", "Deployment は遅い", "Delivery は廃止"], correctIndex: 0, explanation: "**Deployment**: 自動で本番反映(高頻度リリース企業)。**Delivery**: 本番直前まで自動 + 本番は人間承認(規制業界)。**CD** という略号は両方を指す混乱に注意。" },
  { id: "fe-q47", category: "情報数学", difficulty: 3, question: "**2 進数 10101** を 10 進数に変換した値を選びなさい。", choices: ["21", "20", "15", "31"], correctIndex: 0, explanation: "**2 進 10101 = 1·16 + 0·8 + 1·4 + 0·2 + 1·1 = 21**。FE では 2 進 / 8 進 / 16 進変換 ・ 補数表現 ・ 浮動小数表現が定番。" },
  { id: "fe-q48", category: "情報数学", difficulty: 3, question: "**論理回路** で **A AND B** の真理値表で出力が 1 になる組合せを選びなさい。", choices: ["A=1, B=1 のみ", "A=0, B=0 のみ", "A != B", "常に 1"], correctIndex: 0, explanation: "**AND**: 両方 1 のときのみ 1。**OR**: 少なくとも 1 つが 1。**XOR**: 異なるとき 1。**NAND / NOR** は否定形。基本論理ゲートは暗記。" },
  { id: "fe-q49", category: "プロジェクトマネジメント", difficulty: 3, question: "**PERT 図** の主用途として最も適切なものを選びなさい。", choices: ["タスクの依存関係とクリティカルパスを矢線で表現", "コスト計算", "売上予測", "在庫管理"], correctIndex: 0, explanation: "**PERT(Program Evaluation and Review Technique)**: 矢線でタスク依存表現 + クリティカルパス算出。**ガントチャート(時間軸)と補完関係**。" },
  { id: "fe-q50", category: "次のステップ", difficulty: 1, question: "基本情報技術者合格後の上位として最も適切なものを選びなさい。", choices: ["応用情報技術者(AP、レベル 3)", "ITパスポート", "G 検定", "再受験"], correctIndex: 0, explanation: "**FE(L2)→ AP(L3)→ 高度試験(L4)** が IPA 王道。横展開で **G 検定**(AI)/ **AWS / Azure / GCP**(クラウド)へ。" },
  { id: "fe-q51", category: "アルゴリズム", difficulty: 3, question: "**動的計画法** の代表的問題として **誤っているもの** を選びなさい。", choices: ["ナップサック問題", "最長共通部分列(LCS)", "編集距離", "巡回セールスマン(P 問題)"], correctIndex: 3, explanation: "**DP 適用**: ナップサック / LCS / 編集距離 / Fibonacci。**巡回セールスマンは NP-Hard**(DP でも指数時間 $O(2^n n^2)$、ただし Bitmask DP で解けるサイズあり)。" },
  { id: "fe-q52", category: "計算量", difficulty: 3, question: "**Big-O 記法** で **O(n log n)** に該当するアルゴリズムを選びなさい。", choices: ["マージソート / ヒープソート", "バブルソート", "線形探索", "2 分探索"], correctIndex: 0, explanation: "**O(n log n)**: マージソート / ヒープソート / クイックソート平均。**O(n²)**: バブル / 選択 / 挿入。**O(log n)**: 2 分探索。**O(n)**: 線形探索。" },
  { id: "fe-q53", category: "データ構造", difficulty: 3, question: "**スタック** が用いられる典型例として **誤っているもの** を選びなさい。", choices: ["関数呼び出しのコールスタック", "Undo 機能", "数式の括弧対応チェック", "プリンタジョブ処理"], correctIndex: 3, explanation: "**スタック(LIFO)**: 関数呼出 / Undo / 括弧マッチング。**プリンタジョブはキュー(FIFO)**。スタックとキューの基本的使い分け。" },
  { id: "fe-q54", category: "DB", difficulty: 3, question: "**正規化** で **第 1 正規形(1NF)** の条件として正しいものを選びなさい。", choices: ["全属性が原子値(分割不可)・ 繰返し項目なし", "推移的従属性なし", "BCNF を満たす", "外部キー必須"], correctIndex: 0, explanation: "**1NF**: 各セルが原子値 + 繰返し列なし。**2NF**: 1NF + 部分関数従属を排除。**3NF**: 2NF + 推移的関数従属を排除。**BCNF**: 3NF + 強化条件。" },
  { id: "fe-q55", category: "DB", difficulty: 3, question: "**SQL の JOIN** で **左テーブルの全行 + 右で一致** を返すものを選びなさい。", choices: ["LEFT OUTER JOIN", "INNER JOIN", "RIGHT JOIN", "CROSS JOIN"], correctIndex: 0, explanation: "**LEFT OUTER JOIN**: 左全行(右なしは NULL)。**INNER**: 両側一致。**RIGHT**: 右全行。**FULL OUTER**: 両側全行。**CROSS**: 直積。" },
  { id: "fe-q56", category: "ネットワーク", difficulty: 3, question: "**ARP(Address Resolution Protocol)** の役割として最も適切なものを選びなさい。", choices: ["IP アドレス → MAC アドレス変換", "ドメイン名 → IP", "MAC → IP(逆)", "暗号化"], correctIndex: 0, explanation: "**ARP**: 同一 LAN 内で IP → MAC 変換(Broadcast 問合せ)。**逆は RARP**(現在 DHCP)。**DNS は ドメイン → IP**。L2/L3 接続の基本プロトコル。" },
  { id: "fe-q57", category: "セキュリティ", difficulty: 3, question: "**CSRF(Cross-Site Request Forgery)** 対策として最も適切なものを選びなさい。", choices: ["CSRF Token + SameSite Cookie", "HTTPS のみ", "入力長制限", "DB 暗号化"], correctIndex: 0, explanation: "**CSRF**: ユーザの認証セッションを悪用する攻撃。**対策**: CSRF Token(ランダム値検証)+ SameSite Cookie(Lax / Strict)+ Referer 検証。" },
  { id: "fe-q58", category: "OS", difficulty: 3, question: "**スワップ(ページング)** が **頻発する** ことを何と呼ぶか。", choices: ["Thrashing(スラッシング)", "Race Condition", "Deadlock", "Garbage Collection"], correctIndex: 0, explanation: "**Thrashing**: 物理メモリ不足で頻繁ページング → 実処理時間激減。**Working Set モデル ・ Page Fault 頻度監視** で対策。" },
  { id: "fe-q59", category: "並行処理", difficulty: 3, question: "**デッドロック** の発生 4 条件として **誤っているもの** を選びなさい。", choices: ["相互排他", "占有と待機", "横取り不可", "並列実行"], correctIndex: 3, explanation: "**Coffman 条件**: ① 相互排他 ② 占有 + 待機 ③ 横取り不可 ④ 循環待機。**4 つすべて満たすと発生**。1 つでも崩せば回避可能。" },
  { id: "fe-q60", category: "プログラミング", difficulty: 3, question: "**再帰関数** の **末尾再帰最適化** の利点として最も適切なものを選びなさい。", choices: ["スタック消費を O(1) に削減(ループに変換)", "実行速度向上", "デバッグ容易", "DB 連携"], correctIndex: 0, explanation: "**Tail Call Optimization**: 末尾再帰呼出をジャンプに変換 → スタック O(1)。**Scala / Erlang / OCaml** などで自動。Python / JS は対応していない。" },
  { id: "fe-q61", category: "テスト", difficulty: 3, question: "**ホワイトボックステスト** の代表手法として最も適切なものを選びなさい。", choices: ["命令網羅 / 分岐網羅 / 経路網羅", "境界値分析", "同値分割", "ユーザビリティ"], correctIndex: 0, explanation: "**ホワイトボックス**: コード内部構造ベース(命令 / 分岐 / 条件 / 経路網羅)。**ブラックボックス**: 仕様ベース(同値 / 境界 / Decision Table)。" },
  { id: "fe-q62", category: "プロジェクト", difficulty: 3, question: "**ファンクションポイント法** の用途として最も適切なものを選びなさい。", choices: ["機能数からシステム規模を推定", "コード行数測定", "テスト時間測定", "GPU 利用率"], correctIndex: 0, explanation: "**FP**: 外部入力 / 出力 / 問合せ / 内部論理 / 外部 IF の機能数から規模算出。**コード行数(LOC)より言語非依存** で見積もりに有用。" },
  { id: "fe-q63", category: "セキュリティ", difficulty: 3, question: "**ハッシュ関数** に求められる特性として **誤っているもの** を選びなさい。", choices: ["一方向性(原像計算困難)", "衝突困難性(同じハッシュ値を持つ別データ作成困難)", "決定論的(同入力 → 同出力)", "復号可能"], correctIndex: 3, explanation: "**ハッシュは一方向**(復号不可)。**SHA-256 / SHA-3 / BLAKE2** が現代標準。**MD5 / SHA-1 は衝突発見済で非推奨**。" },
  { id: "fe-q64", category: "AI", difficulty: 2, question: "**機械学習** の **教師あり学習** に該当するタスクとして最も適切なものを選びなさい。", choices: ["スパム判定 / 価格予測", "クラスタリング", "次元削減", "強化学習"], correctIndex: 0, explanation: "**教師あり = ラベル付きデータ**: 分類(スパム判定 / 画像分類)・ 回帰(価格予測)。**教師なし = ラベルなし**: クラスタリング / PCA。" },
  { id: "fe-q65", category: "学習", difficulty: 1, question: "FE 合格後の **AI / クラウド系上位** として最も適切なものを選びなさい。", choices: ["G 検定 / AWS SAA / Azure AI-900", "ITパスポート", "簿記", "再受験"], correctIndex: 0, explanation: "**FE → AP**(IPA 上位)+ **G 検定 / AWS SAA / Azure AI-900** で AI ・ クラウド方向に展開。**Pythonデータ分析試験 ・ DS 検定** も並行可能。" },
];
