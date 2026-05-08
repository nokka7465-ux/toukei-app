import type { Question } from "@/types/content";

export const itPassportQuestions: Question[] = [
  {
    id: "ip-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "ITパスポート試験(iパス)が分類される IPA のレベルとして最も適切なものを選びなさい。",
    choices: [
      "レベル 1(入門)",
      "レベル 2(基本情報技術者)",
      "レベル 3(応用情報技術者)",
      "レベル 4(高度試験)",
    ],
    correctIndex: 0,
    explanation:
      "ITパスポートは IPA の **レベル 1**(入門)。すべての社会人 ・ 学生が想定対象で、基本情報(レベル 2)・ 応用情報(レベル 3)の前段に位置する。",
  },
  {
    id: "ip-q2",
    category: "合格基準",
    difficulty: 2,
    question:
      "ITパスポート試験の合格基準として最も適切なものを選びなさい。",
    choices: [
      "総合 600 点以上のみ",
      "総合 600 点以上、かつ各分野評価点 300 点以上",
      "全分野 700 点以上",
      "総合 800 点以上のみ",
    ],
    correctIndex: 1,
    explanation:
      "iパスは **総合 600 / 1000 点 + 各分野評価点 300 点以上** の **足切り** あり。3 分野(ストラテジ ・ マネジメント ・ テクノロジ)バランスよく学習する必要。",
  },
  {
    id: "ip-q3",
    category: "数値表現",
    difficulty: 1,
    question:
      "1 GB(ギガバイト)が 1 KB(キロバイト)の何倍に相当するか、最も適切なものを選びなさい。",
    choices: [
      "1,000 倍",
      "1,024 倍",
      "1,048,576 倍",
      "1,073,741,824 倍",
    ],
    correctIndex: 2,
    explanation:
      "**1 GB = 1024 MB = 1024 × 1024 KB ≒ 1,048,576 倍**。容量単位は 1024 倍ずつ(KB → MB → GB → TB)。",
  },
  {
    id: "ip-q4",
    category: "ハードウェア",
    difficulty: 2,
    question:
      "コンピュータの **主記憶装置(メインメモリ)** の特性として最も適切なものを選びなさい。",
    choices: [
      "電源を切ってもデータが残る不揮発性メモリ",
      "電源を切るとデータが消える揮発性メモリ",
      "CPU 内部のレジスタと同じもの",
      "ハードディスクの一部",
    ],
    correctIndex: 1,
    explanation:
      "**主記憶(RAM)は揮発性** で電源を切るとデータが消える。一方 **HDD / SSD** は不揮発性の補助記憶装置。",
  },
  {
    id: "ip-q5",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "ドメイン名から IP アドレスを解決するプロトコルとして最も適切なものを選びなさい。",
    choices: ["DNS", "DHCP", "HTTP", "SMTP"],
    correctIndex: 0,
    explanation:
      "**DNS(Domain Name System)** がドメイン名 → IP アドレス変換を担当。DHCP は動的 IP 割当、HTTP は Web 通信、SMTP はメール送信。",
  },
  {
    id: "ip-q6",
    category: "ネットワーク",
    difficulty: 2,
    question:
      "Web サイトとブラウザ間の通信を **TLS で暗号化** するプロトコルとして最も適切なものを選びなさい。",
    choices: ["HTTP", "HTTPS", "FTP", "Telnet"],
    correctIndex: 1,
    explanation:
      "**HTTPS** は HTTP + TLS で暗号化された Web 通信。URL は `https://` で始まり、443 ポートを使用。",
  },
  {
    id: "ip-q7",
    category: "5G",
    difficulty: 2,
    question:
      "5G の 3 つの主要特性に **含まれない** ものを選びなさい。",
    choices: [
      "高速大容量(eMBB)",
      "超低遅延(URLLC)",
      "多数同時接続(mMTC)",
      "ストレージ大容量化",
    ],
    correctIndex: 3,
    explanation:
      "5G の 3 特性は **eMBB / URLLC / mMTC**。ストレージ容量は通信規格とは無関係。",
  },
  {
    id: "ip-q8",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "情報セキュリティの 3 要素(CIA トライアド)に **含まれない** ものを選びなさい。",
    choices: [
      "機密性(Confidentiality)",
      "完全性(Integrity)",
      "可用性(Availability)",
      "拡張性(Scalability)",
    ],
    correctIndex: 3,
    explanation:
      "**CIA = 機密性 / 完全性 / 可用性**。拡張性は性能 ・ 設計の指標で CIA には含まれない。",
  },
  {
    id: "ip-q9",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "感染した PC のデータを暗号化し、復号と引き換えに金銭を要求するマルウェアの名称として最も適切なものを選びなさい。",
    choices: [
      "ワーム",
      "トロイの木馬",
      "ランサムウェア",
      "スパイウェア",
    ],
    correctIndex: 2,
    explanation:
      "**ランサムウェア**(身代金要求マルウェア)はファイルを暗号化して復号料を要求。バックアップ + ネットワーク分離が代表的対策。",
  },
  {
    id: "ip-q10",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "認証で『**知っているもの ・ 持っているもの ・ 自分自身のもの**』のうち 2 つ以上を組み合わせる方式の名称として最も適切なものを選びなさい。",
    choices: [
      "シングルサインオン(SSO)",
      "多要素認証(MFA)",
      "ID/パスワード認証",
      "ICカード認証",
    ],
    correctIndex: 1,
    explanation:
      "**MFA(Multi-Factor Authentication)** は知識(パスワード)+ 所有(トークン)+ 生体 のうち 2 つ以上を組合わせる方式。SSO は別概念(複数システムを 1 度のログインで使う)。",
  },
  {
    id: "ip-q11",
    category: "PM",
    difficulty: 2,
    question:
      "プロジェクトのアローダイアグラムで **最長経路** を表し、プロジェクト所要時間を決定する経路の名称として最も適切なものを選びなさい。",
    choices: [
      "クリティカルパス",
      "WBS",
      "ガントチャート",
      "PERT",
    ],
    correctIndex: 0,
    explanation:
      "**クリティカルパス** はプロジェクト所要時間を決める最長経路。この経路上の作業の遅れがそのままプロジェクト全体の遅延に直結する。",
  },
  {
    id: "ip-q12",
    category: "サービス",
    difficulty: 2,
    question:
      "サービスの提供レベルを利用者と提供者で合意した文書の名称として最も適切なものを選びなさい。",
    choices: [
      "RFP(提案依頼書)",
      "SLA(サービスレベル合意)",
      "WBS(作業分解構成)",
      "SOW(作業範囲記述書)",
    ],
    correctIndex: 1,
    explanation:
      "**SLA(Service Level Agreement)** はサービス提供レベル(可用性 ・ 応答時間など)を提供者と利用者で合意する文書。",
  },
  {
    id: "ip-q13",
    category: "経営戦略",
    difficulty: 2,
    question:
      "企業の **強み(S)・ 弱み(W)・ 機会(O)・ 脅威(T)** を分析するフレームワークとして最も適切なものを選びなさい。",
    choices: [
      "SWOT 分析",
      "PEST 分析",
      "5 forces",
      "4P",
    ],
    correctIndex: 0,
    explanation:
      "**SWOT** は内部要因(S/W)+ 外部要因(O/T)を 2 軸 4 マトリクスで分析。PEST はマクロ環境、5 forces は業界構造、4P はマーケティング。",
  },
  {
    id: "ip-q14",
    category: "マーケティング",
    difficulty: 2,
    question:
      "マーケティングの **4P** に **含まれない** ものを選びなさい。",
    choices: [
      "Product(製品)",
      "Price(価格)",
      "Place(流通)",
      "People(人材)",
    ],
    correctIndex: 3,
    explanation:
      "**4P = Product / Price / Place / Promotion**。People は 7P(7 つの P)に拡張されたとき含まれる。",
  },
  {
    id: "ip-q15",
    category: "財務",
    difficulty: 2,
    question:
      "**貸借対照表(BS)** の基本式として最も適切なものを選びなさい。",
    choices: [
      "資産 = 負債 + 純資産",
      "収益 - 費用 = 利益",
      "営業利益 = 売上 - 売上原価",
      "ROI = 利益 / 投資額",
    ],
    correctIndex: 0,
    explanation:
      "**貸借対照表(BS)= 資産 = 負債 + 純資産**(左右が一致)。損益計算書(PL)は『収益 - 費用 = 利益』。",
  },
  {
    id: "ip-q16",
    category: "法務",
    difficulty: 2,
    question:
      "プログラムの **ソースコードの表現** を保護する法律として最も適切なものを選びなさい。",
    choices: [
      "特許法",
      "著作権法",
      "実用新案法",
      "意匠法",
    ],
    correctIndex: 1,
    explanation:
      "プログラムは **著作権法** で保護される。特許はアイデア ・ 発明を保護、意匠は工業デザイン、実用新案は小発明。",
  },
  {
    id: "ip-q17",
    category: "開発",
    difficulty: 2,
    question:
      "短期間のスプリントを繰返してソフトウェアを段階的に提供する開発手法として最も適切なものを選びなさい。",
    choices: [
      "ウォーターフォール",
      "スクラム(アジャイル)",
      "ビッグバン開発",
      "パッケージ開発",
    ],
    correctIndex: 1,
    explanation:
      "**スクラム** はアジャイルの代表的フレームワーク。1 〜 4 週間のスプリントを繰り返し、動くソフトウェアを継続的に提供する。",
  },
  {
    id: "ip-q18",
    category: "AI",
    difficulty: 2,
    question:
      "AI ・ 機械学習 ・ ディープラーニング ・ 生成 AI の包含関係として最も適切なものを選びなさい。",
    choices: [
      "AI ⊂ 機械学習 ⊂ ディープラーニング ⊂ 生成 AI",
      "AI ⊃ 機械学習 ⊃ ディープラーニング ⊃ 生成 AI",
      "全て同じ",
      "生成 AI が最も広い概念",
    ],
    correctIndex: 1,
    explanation:
      "**AI ⊃ 機械学習 ⊃ ディープラーニング ⊃ 生成 AI**。AI が最も広く、生成 AI は DL を基礎に新しいコンテンツを作る AI のサブセット。",
  },
  {
    id: "ip-q19",
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
      "**デジタイゼーション(紙→デジタル化)→ デジタライゼーション(プロセスのデジタル化)→ DX(ビジネスモデル変革)** の 3 段階が経産省の定義。",
  },
  {
    id: "ip-q20",
    category: "データ活用",
    difficulty: 2,
    question:
      "ビッグデータの **3V** に **含まれない** ものを選びなさい。",
    choices: [
      "Volume(量)",
      "Variety(多様性)",
      "Velocity(速度)",
      "Visibility(可視性)",
    ],
    correctIndex: 3,
    explanation:
      "ビッグデータの **3V = Volume / Variety / Velocity**。Veracity(正確性)を加えた 4V、Value(価値)を加えた 5V もある。",
  },
];
