import type { Question } from "@/types/content";

export const dxKenteiQuestions: Question[] = [
  {
    id: "dx-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "DX 検定の主催団体として最も適切なものを選びなさい。",
    choices: [
      "情報処理推進機構(IPA)",
      "一般社団法人 日本イノベーション融合学会",
      "経済産業省",
      "JDLA(日本ディープラーニング協会)",
    ],
    correctIndex: 1,
    explanation:
      "**DX 検定** は **一般社団法人 日本イノベーション融合学会**(共催: 一般社団法人 ICT 産業推進機構)が主催。経産省の DX 認定制度は別物(企業向け認定)。",
  },
  {
    id: "dx-q2",
    category: "DX 概念",
    difficulty: 2,
    question:
      "経済産業省が定義する **デジタルトランスフォーメーション(DX)** に関する記述として最も適切なものを選びなさい。",
    choices: [
      "紙の書類を PDF にデジタル化することそのもの",
      "個別業務プロセスをデジタル化すること",
      "データとデジタル技術を活用してビジネスモデルや組織 ・ プロセスを変革し、競争上の優位性を確立すること",
      "AI を導入することと同義",
    ],
    correctIndex: 2,
    explanation:
      "経産省の DX 定義は『**データとデジタル技術を活用してビジネスモデル ・ 組織 ・ プロセス ・ 文化を変革し、競争上の優位性を確立すること**』。デジタル化(デジタイゼーション)は DX に向けた前段階。",
  },
  {
    id: "dx-q3",
    category: "DX 概念",
    difficulty: 2,
    question:
      "DX への 3 段階の順序として最も適切なものを選びなさい。",
    choices: [
      "DX → デジタイゼーション → デジタライゼーション",
      "デジタイゼーション → デジタライゼーション → DX",
      "AI → IoT → DX",
      "PoC → MVP → 本番",
    ],
    correctIndex: 1,
    explanation:
      "**デジタイゼーション(紙 → デジタル化)→ デジタライゼーション(プロセスのデジタル化)→ DX(ビジネスモデル変革)** の 3 段階が経産省の定義。",
  },
  {
    id: "dx-q4",
    category: "経産省",
    difficulty: 3,
    question:
      "経済産業省が DX レポート(2018)で警鐘を鳴らした、2025 年までにレガシーシステムを刷新しないと年間 12 兆円規模の経済損失が発生するという警告の通称として最も適切なものを選びなさい。",
    choices: [
      "2025 年の崖",
      "2030 年問題",
      "Y2K 問題",
      "GAFA 問題",
    ],
    correctIndex: 0,
    explanation:
      "**2025 年の崖** は経産省 DX レポートの代表的キーワード。レガシーシステム放置による経済損失の警告として、DX 検定でも頻出。",
  },
  {
    id: "dx-q5",
    category: "AI",
    difficulty: 2,
    question:
      "ChatGPT などの大規模言語モデル(LLM)の中核となるアーキテクチャとして最も適切なものを選びなさい。",
    choices: ["RNN", "CNN", "Transformer", "GAN"],
    correctIndex: 2,
    explanation:
      "**Transformer**(2017 年論文『Attention is All You Need』)は GPT・Claude・Gemini など現代の LLM すべての基盤。並列処理可能で大規模化に有利。",
  },
  {
    id: "dx-q6",
    category: "AI",
    difficulty: 2,
    question:
      "LLM が事実ではない情報を自信ありげに生成する現象の名称として最も適切なものを選びなさい。",
    choices: [
      "オーバーフィッティング",
      "ハルシネーション",
      "プロンプトインジェクション",
      "ファインチューニング",
    ],
    correctIndex: 1,
    explanation:
      "**ハルシネーション(幻覚)** は LLM が次の単語の確率で文を生成しているだけで事実検証していないことに起因。RAG / 出典明記 / 人間レビューが代表的対策。",
  },
  {
    id: "dx-q7",
    category: "AI 規制",
    difficulty: 3,
    question:
      "2024 年に EU で可決された **世界初の包括的 AI 規制法** の名称として最も適切なものを選びなさい。",
    choices: [
      "GDPR",
      "EU AI Act",
      "DSA(Digital Services Act)",
      "CCPA",
    ],
    correctIndex: 1,
    explanation:
      "**EU AI Act**(2024 年 5 月可決)は AI を 4 つのリスクカテゴリに分類し、それぞれ義務を課す世界初の包括的 AI 規制。違反は全世界売上の最大 7% の制裁金。",
  },
  {
    id: "dx-q8",
    category: "クラウド",
    difficulty: 2,
    question:
      "クラウドサービスモデルで『OS や開発環境を含む実行環境を提供』するものを選びなさい。",
    choices: ["IaaS", "PaaS", "SaaS", "FaaS"],
    correctIndex: 1,
    explanation:
      "**PaaS(Platform as a Service)** は OS / ミドルウェア / 開発環境を提供。IaaS は仮想マシン、SaaS はアプリケーション、FaaS は関数単位の実行(サーバレス)。",
  },
  {
    id: "dx-q9",
    category: "クラウド",
    difficulty: 1,
    question:
      "現在のクラウド市場で **シェア 1 位** のハイパースケーラーとして最も適切なものを選びなさい。",
    choices: [
      "Microsoft Azure",
      "Amazon Web Services(AWS)",
      "Google Cloud(GCP)",
      "Oracle Cloud(OCI)",
    ],
    correctIndex: 1,
    explanation:
      "**AWS** が世界クラウド市場のシェア 1 位(約 30%)。Azure が 2 位(約 25%)、GCP が 3 位(約 11%)で続く(参考値)。",
  },
  {
    id: "dx-q10",
    category: "コンテナ",
    difficulty: 2,
    question:
      "コンテナオーケストレーションの事実上の標準として最も適切なものを選びなさい。",
    choices: ["Docker Swarm", "Kubernetes", "Mesos", "Nomad"],
    correctIndex: 1,
    explanation:
      "**Kubernetes(K8s)** がコンテナオーケストレーションのデファクト。AWS EKS / Azure AKS / GCP GKE などのマネージド版が広く使われる。",
  },
  {
    id: "dx-q11",
    category: "5G",
    difficulty: 2,
    question:
      "5G の 3 つの主要特性に **含まれない** ものを選びなさい。",
    choices: [
      "高速大容量(eMBB)",
      "超低遅延(URLLC)",
      "多数同時接続(mMTC)",
      "暗号化強度向上",
    ],
    correctIndex: 3,
    explanation:
      "5G の 3 特性は **eMBB / URLLC / mMTC**。暗号化は 4G から段階的に強化されているが、5G の主要特性として定義されているわけではない。",
  },
  {
    id: "dx-q12",
    category: "ブロックチェーン",
    difficulty: 3,
    question:
      "ブロックチェーン上で **唯一性のあるトークン** を表す技術の名称として最も適切なものを選びなさい。",
    choices: [
      "Bitcoin",
      "NFT(Non-Fungible Token)",
      "DAO",
      "DeFi",
    ],
    correctIndex: 1,
    explanation:
      "**NFT(Non-Fungible Token)** は代替不可能な唯一性のあるトークン。アート ・ ゲームアイテム ・ 不動産権利証明などに使われる。Bitcoin は暗号資産、DAO は分散型自律組織、DeFi は分散型金融。",
  },
  {
    id: "dx-q13",
    category: "RPA",
    difficulty: 2,
    question:
      "RPA(Robotic Process Automation)の主な用途として最も適切なものを選びなさい。",
    choices: [
      "深層学習モデルの学習",
      "定型業務(データ入力 ・ コピー転記など)の自動化",
      "ネットワーク設計",
      "暗号化アルゴリズムの実装",
    ],
    correctIndex: 1,
    explanation:
      "**RPA** は人間が PC で行う定型業務(画面操作 ・ Excel 集計 ・ メール転記など)を自動化するソフトウェアロボット。UiPath / Power Automate などが代表的製品。",
  },
  {
    id: "dx-q14",
    category: "アジャイル",
    difficulty: 2,
    question:
      "スクラムで **スプリントごとの計画 ・ 進捗管理 ・ ふりかえり** を担当する役割として最も適切なものを選びなさい。",
    choices: [
      "Product Owner",
      "Scrum Master",
      "Development Team",
      "Architect",
    ],
    correctIndex: 1,
    explanation:
      "**Scrum Master** はスクラムイベントの円滑化と障害除去を担う役割。Product Owner はバックログ優先順位、Development Team は実装。",
  },
  {
    id: "dx-q15",
    category: "DevOps",
    difficulty: 2,
    question:
      "Terraform / CloudFormation のように **インフラを宣言的なコードで管理する** 手法の名称として最も適切なものを選びなさい。",
    choices: [
      "Continuous Integration",
      "Infrastructure as Code(IaC)",
      "Test-Driven Development",
      "Blue-Green Deployment",
    ],
    correctIndex: 1,
    explanation:
      "**Infrastructure as Code(IaC)** はインフラ構成をコードとして管理する手法。Terraform / CloudFormation / Pulumi / Ansible などが代表的ツール。",
  },
  {
    id: "dx-q16",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "『境界防御は限界。社内外を問わずすべてのアクセスを常に検証する』というセキュリティモデルの名称として最も適切なものを選びなさい。",
    choices: [
      "ペリメータ防御",
      "ゼロトラスト",
      "DMZ",
      "VPN",
    ],
    correctIndex: 1,
    explanation:
      "**ゼロトラスト(Zero Trust)** は『信頼しない、常に検証する』モデル。コロナ禍のリモートワークで急速普及。SASE / SSE / ZTNA などのアーキテクチャで実装される。",
  },
  {
    id: "dx-q17",
    category: "BI",
    difficulty: 2,
    question:
      "Microsoft が提供する **エンタープライズ向け BI ツール** として最も適切なものを選びなさい。",
    choices: [
      "Tableau",
      "Power BI",
      "Looker",
      "Qlik Sense",
    ],
    correctIndex: 1,
    explanation:
      "**Power BI** は Microsoft 製のエンタープライズ BI ツール。Tableau は Salesforce 傘下、Looker は Google 傘下、Qlik Sense は Qlik 社製。",
  },
  {
    id: "dx-q18",
    category: "経営",
    difficulty: 2,
    question:
      "Google で広く使われている目標管理フレームワークで、『定性目標 + 定量的キー結果』を組み合わせる手法の名称として最も適切なものを選びなさい。",
    choices: [
      "KPI",
      "OKR",
      "BSC",
      "PEST",
    ],
    correctIndex: 1,
    explanation:
      "**OKR(Objectives and Key Results)** はインテル発祥 ・ Google で広まった目標管理。Objective(定性的目標)+ Key Results(3 〜 5 個の定量指標)で構成。",
  },
  {
    id: "dx-q19",
    category: "DX 人材",
    difficulty: 2,
    question:
      "**既存社員に新しいデジタル技術スキルを習得させる取り組み** の名称として最も適切なものを選びなさい。",
    choices: [
      "リクルーティング",
      "リスキリング",
      "オンボーディング",
      "アウトソーシング",
    ],
    correctIndex: 1,
    explanation:
      "**リスキリング(Reskilling)** は既存社員に新スキル(主にデジタル)を習得させる取り組み。経産省は『**マナビ DX**』プラットフォームでデジタル人材育成を支援している。",
  },
  {
    id: "dx-q20",
    category: "業界 DX",
    difficulty: 3,
    question:
      "製造業の DX で、現実の機械や工場をデジタル空間に **仮想複製して** シミュレーション ・ 監視に活用する技術の名称として最も適切なものを選びなさい。",
    choices: [
      "デジタルツイン",
      "メタバース",
      "AR(拡張現実)",
      "VR(仮想現実)",
    ],
    correctIndex: 0,
    explanation:
      "**デジタルツイン** は現実物の状態をリアルタイムで反映する仮想複製。製造ライン ・ 都市 ・ 人体などに広く適用される。スマートファクトリーの中核技術。",
  },
];
