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
  { id: "dx-q21", category: "AI", difficulty: 2, question: "**RPA** の説明として最も適切なものを選びなさい。", choices: ["定型 PC 業務を自動化するソフトウェアロボット", "工場の物理ロボット", "AI チャットボット", "クラウド DB"], correctIndex: 0, explanation: "**RPA(Robotic Process Automation)** はソフトウェアロボット(UiPath / Power Automate / BizRobo!)で定型 PC 業務を自動化。" },
  { id: "dx-q22", category: "ビジネスモデル", difficulty: 2, question: "**サブスクリプションモデル** の特徴として最も適切なものを選びなさい。", choices: ["継続利用による定期収益", "1 回買い切り", "完全無料", "投げ銭式"], correctIndex: 0, explanation: "**サブスク** は **MRR / ARR / Churn rate / LTV** を KPI とする継続課金モデル。SaaS / 動画配信 / 自動車サブスクなど多領域で採用。" },
  { id: "dx-q23", category: "アジャイル", difficulty: 2, question: "スクラムの **スプリント** の典型的な期間として最も適切なものを選びなさい。", choices: ["1〜4 週間", "1 年", "1 日", "1 時間"], correctIndex: 0, explanation: "スプリントは **1〜4 週間(2 週間が最頻)**。プロダクトインクリメントを生み出す反復単位。デイリースクラム / レトロスペクティブ / レビューが含まれる。" },
  { id: "dx-q24", category: "アジャイル", difficulty: 3, question: "**ユーザーストーリー** の典型的な書式として最も適切なものを選びなさい。", choices: ["『〜として、〜したい、なぜなら〜』形式(As a / I want / So that)", "技術仕様書形式", "コード形式", "数値表"], correctIndex: 0, explanation: "**As a [user] / I want [feature] / So that [benefit]**。ユーザー視点でビジネス価値を明示。INVEST 原則(Independent / Negotiable / Valuable / Estimable / Small / Testable)で評価。" },
  { id: "dx-q25", category: "DevOps", difficulty: 3, question: "**CI/CD** の **CI** が指すものを選びなさい。", choices: ["継続的インテグレーション(Continuous Integration)", "顧客インタビュー", "コードインスペクション", "クラウドインフラ"], correctIndex: 0, explanation: "**CI = Continuous Integration**(コード統合 + 自動テスト)。**CD = Continuous Delivery / Deployment**。Jenkins / GitHub Actions / GitLab CI / CircleCI などで実装。" },
  { id: "dx-q26", category: "クラウド", difficulty: 2, question: "クラウドの **責任共有モデル** で **顧客側の責任** に含まれないものを選びなさい。", choices: ["データ", "アプリケーション", "ネットワーク構成(IaaS の場合)", "データセンターの物理セキュリティ"], correctIndex: 3, explanation: "**物理セキュリティ ・ ハイパーバイザ ・ ハードウェアはクラウド事業者** の責任。顧客は **データ ・ アプリ ・ アクセス制御 ・ OS パッチ(IaaS)・ ネットワーク** を担当。" },
  { id: "dx-q27", category: "セキュリティ", difficulty: 3, question: "**ゼロトラスト** の基本原則として最も適切なものを選びなさい。", choices: ["『Never Trust, Always Verify』内部 / 外部問わず全アクセスを検証", "社内ネットワークは無条件で信頼", "VPN だけ使えば安全", "ファイアウォールのみで守る"], correctIndex: 0, explanation: "**ゼロトラスト**: 全アクセスを認証 / 認可 / 暗号化 + 最小権限 + マイクロセグメンテーション。**Identity-Aware Proxy / SASE / BeyondCorp** が代表実装。" },
  { id: "dx-q28", category: "AI", difficulty: 2, question: "**ハルシネーション(幻覚)** の対策として **誤っているもの** を選びなさい。", choices: ["RAG(Retrieval-Augmented Generation)", "プロンプトに事実を含める", "Temperature を下げる", "ハルシネーションは AI の進化で自動的に消える"], correctIndex: 3, explanation: "**ハルシネーションは LLM の本質的弱点**。完全消失は困難で、RAG / 低 Temperature / Citation 強制 / 構造化出力 / 人間レビューを組合せて対処。" },
  { id: "dx-q29", category: "IoT", difficulty: 2, question: "**LPWA** の特徴として最も適切なものを選びなさい。", choices: ["低消費電力 + 長距離 + 低速度の IoT 向け無線規格", "高速 + 低レイテンシ", "短距離 + 大容量", "有線 LAN の一種"], correctIndex: 0, explanation: "**LPWA**(LoRa / NB-IoT / Sigfox 等): 低消費電力 + 長距離(数 km〜十数 km)+ 低速度。電池 5〜10 年駆動の IoT センサに最適。5G とは目的が異なる。" },
  { id: "dx-q30", category: "5G", difficulty: 3, question: "5G の **3 大特徴** として **誤っているもの** を選びなさい。", choices: ["eMBB(高速大容量)", "URLLC(超低遅延 ・ 高信頼)", "mMTC(超大量接続)", "Quantum Encryption"], correctIndex: 3, explanation: "**5G 3 大特徴**: eMBB / URLLC / mMTC。量子暗号は 6G 以降の研究領域。Network Slicing で用途別仮想ネットワーク提供も 5G の特徴。" },
  { id: "dx-q31", category: "Blockchain", difficulty: 3, question: "**ブロックチェーン** が **改ざん耐性** を実現する主要技術として最も適切なものを選びなさい。", choices: ["暗号学的ハッシュチェーン + 分散合意", "RSA 暗号のみ", "対称鍵暗号", "二重認証"], correctIndex: 0, explanation: "**ブロック内ハッシュ + 前ブロックハッシュをチェーン化** + **分散合意(PoW / PoS / Raft)** で改ざん耐性。Bitcoin / Ethereum が代表。スマートコントラクトは Solidity / Vyper で。" },
  { id: "dx-q32", category: "Quantum", difficulty: 3, question: "**量子コンピュータ** の主な特徴として最も適切なものを選びなさい。", choices: ["量子重ね合わせ + もつれで特定問題を指数的に高速化", "古典コンピュータの全タスクを高速化", "AI を不要にする", "既存暗号を完全保護"], correctIndex: 0, explanation: "**量子コンピュータ**: Shor アルゴリズム(素因数分解)・ Grover アルゴリズム(探索)など **特定問題で指数的高速化**。**Quantum-Safe Cryptography(PQC、CRYSTALS-Kyber 等)が標準化中**。" },
  { id: "dx-q33", category: "AR/VR/MR", difficulty: 3, question: "**MR(Mixed Reality)** の説明として最も適切なものを選びなさい。", choices: ["現実空間と仮想物が相互に作用する(HoloLens / Vision Pro)", "完全 CG 空間", "現実だけ", "AI 生成画像"], correctIndex: 0, explanation: "**MR**: 現実空間に仮想物を配置 + 物理法則 ・ 空間認識で相互作用。AR(重畳)と VR(没入)の中間。Vision Pro / HoloLens / Meta Quest Pro が代表。" },
  { id: "dx-q34", category: "Web3", difficulty: 3, question: "**Web3** の特徴として **誤っているもの** を選びなさい。", choices: ["分散型(Decentralized)", "ブロックチェーン基盤", "スマートコントラクトで所有権証明", "中央集権サーバ必須"], correctIndex: 3, explanation: "**Web3 は分散型(Decentralized)が本質**。ブロックチェーン + スマコン + Wallet + DAO + NFT が要素。Web2(中央集権 SNS / EC)との対比概念。" },
  { id: "dx-q35", category: "経営戦略", difficulty: 2, question: "**OKR(Objectives and Key Results)** の特徴として最も適切なものを選びなさい。", choices: ["野心的な目標(Objective)+ 計測可能な成果指標(Key Results)を四半期単位で運用", "MBO の別名", "KPI と同義", "1 年単位の数値目標"], correctIndex: 0, explanation: "**OKR**: Google / Intel 発祥。Objective(野心的 ・ 定性)+ Key Results(3-5 個 / 計測可能)を四半期で運用 + 透明化。**ストレッチゴール志向で 70% 達成が標準目安**。" },
  { id: "dx-q36", category: "経営", difficulty: 3, question: "**PEST 分析** の 4 要素として正しいものを選びなさい。", choices: ["Political / Economic / Social / Technological", "Product / Engineering / Sales / Tech", "People / Equipment / System / Tool", "Plan / Execute / Standardize / Tune"], correctIndex: 0, explanation: "**PEST**: マクロ環境分析 — 政治 / 経済 / 社会 / 技術。SWOT の外部要因(O/T)を体系化。最近は **PESTEL**(+ Environmental + Legal)が主流。" },
  { id: "dx-q37", category: "DX 推進", difficulty: 3, question: "**DX 推進体制** の失敗パターンとして最も適切なものを選びなさい。", choices: ["DX 推進部だけで完結し現場 ・ IT 部門と連携しない", "経営層が積極関与", "IT と業務部門が共同体制", "段階的にスコープ拡大"], correctIndex: 0, explanation: "**DX サイロ化は典型的失敗**(推進部の PoC 倒れ)。**経営 ・ IT ・ 業務部門の協働 + データ基盤共通化 + 段階拡大** が成功パターン。" },
  { id: "dx-q38", category: "データ活用", difficulty: 2, question: "**データドリブン経営** の鍵として **誤っているもの** を選びなさい。", choices: ["KGI / KPI の明確化", "データ基盤(DWH / Lakehouse)整備", "意思決定者のリテラシー教育", "勘と経験だけで判断"], correctIndex: 3, explanation: "**勘 ・ 経験はデータドリブンの対極**。KGI(最終目標)→ KPI(中間指標)→ ダッシュボード可視化 + 全員のデータリテラシーが必須。" },
  { id: "dx-q39", category: "アジャイル", difficulty: 3, question: "**MVP(Minimum Viable Product)** の目的として最も適切なものを選びなさい。", choices: ["最小機能で市場検証 → 学習 → 改善のサイクルを高速化", "完璧な製品を一度に出す", "コストを最大化", "競合と全く同じ製品を作る"], correctIndex: 0, explanation: "**MVP**: 最小限の機能で **Build → Measure → Learn**(リーンスタートアップ)。仮説検証 ・ Pivot 判断を高速化。**Wizard of Oz / Concierge MVP** など軽量実装パターンも。" },
  { id: "dx-q40", category: "AI 活用", difficulty: 3, question: "**生成 AI を業務導入する際の Quick Win** として最も適切なものを選びなさい。", choices: ["議事録要約 ・ メールドラフト ・ 社内 Q&A 検索など定型業務", "基幹業務システム全面刷新", "全社員に強制利用", "業務プロセス 0 から再設計"], correctIndex: 0, explanation: "**Quick Win**: 議事録 ・ メール ・ 文書要約 ・ 社内 Q&A ・ コード補完など低リスク高頻度業務。**短期で効果実感 → 段階的拡大** が DX 成功の定石。" },
  { id: "dx-q41", category: "セキュリティ", difficulty: 3, question: "**EDR(Endpoint Detection and Response)** が **アンチウイルス** より優れる点を選びなさい。", choices: ["既知マルウェアの検出に加え、振る舞い検知 ・ ログ収集 ・ インシデント対応支援", "コストが安い", "古典シグネチャ専用", "管理不要"], correctIndex: 0, explanation: "**EDR**: シグネチャだけでなく **挙動 / プロセス連鎖の AI 検知 + 全 PC ログ集約 + 隔離操作**。XDR は EDR + ネットワーク + クラウド連携の進化版。" },
  { id: "dx-q42", category: "コンプライアンス", difficulty: 3, question: "**GDPR** が定める個人データの権利として **誤っているもの** を選びなさい。", choices: ["アクセス権", "削除権(忘れられる権利)", "データポータビリティ権", "AI 開発参加権"], correctIndex: 3, explanation: "**GDPR 8 つの権利**: 通知 / アクセス / 訂正 / 削除 / 制限 / ポータビリティ / 異議 / 自動意思決定権利。AI 開発参加は権利ではない。違反は全世界売上の最大 4%。" },
  { id: "dx-q43", category: "クラウド", difficulty: 2, question: "**マルチクラウド** の主な動機として最も適切なものを選びなさい。", choices: ["ベンダーロックイン回避 + リージョン冗長 + サービス最適選択", "コスト必ず半額", "管理が簡単", "AWS だけ使う"], correctIndex: 0, explanation: "**マルチクラウド**: ベンダーロックイン回避 / 災害対策 / 各クラウドの強み活用(GCP の BigQuery + AWS の Lambda 等)。ただし **運用複雑度 ・ ネットワーク料金** が課題。" },
  { id: "dx-q44", category: "API Economy", difficulty: 3, question: "**API エコノミー** の代表事例として **誤っているもの** を選びなさい。", choices: ["Stripe(決済)", "Twilio(通信)", "Auth0(認証)", "Microsoft Office(オンプレ Office)"], correctIndex: 3, explanation: "**API エコノミー**: 機能を API として外部公開し収益化。Stripe / Twilio / Auth0 / Algolia / SendGrid など。**Microsoft 365 は SaaS で API も提供**(完全 API ファースト企業)。" },
  { id: "dx-q45", category: "ESG", difficulty: 2, question: "**ESG** の意味として最も適切なものを選びなさい。", choices: ["環境(Environmental)・ 社会(Social)・ ガバナンス(Governance)", "経済 ・ 戦略 ・ 成長", "効率 ・ 安全 ・ 持続", "電子 ・ サービス ・ グローバル"], correctIndex: 0, explanation: "**ESG**: 投資判断 ・ 企業評価の 3 軸。気候変動対応 / 人権 / 多様性 / 取締役構成など。**SDGs と並ぶ非財務情報** で IR 必須。" },
  { id: "dx-q46", category: "シェアリング", difficulty: 2, question: "**シェアリングエコノミー** の代表例として **誤っているもの** を選びなさい。", choices: ["Uber / Airbnb / Lyft", "メルカリ / ヤフオク", "C2C プラットフォーム", "オンライン銀行"], correctIndex: 3, explanation: "**シェアリングエコノミー**: 個人間の資源共有(物 / 場所 / スキル / 移動)。Uber / Airbnb / Lyft / メルカリなど。オンライン銀行は B2C 金融でシェアリングではない。" },
  { id: "dx-q47", category: "サステナビリティ", difficulty: 3, question: "**サーキュラーエコノミー** の特徴として最も適切なものを選びなさい。", choices: ["資源循環(Reuse / Repair / Recycle)で廃棄ゼロを目指す", "大量生産 ・ 大量消費 ・ 大量廃棄", "一方向のリニア型", "コスト削減のみ重視"], correctIndex: 0, explanation: "**Circular Economy**: 設計段階から循環(リユース ・ 修理 ・ リサイクル ・ サブスク化)を組み込む。**Linear Economy(採取-生産-廃棄)の対極**。EU が推進。" },
  { id: "dx-q48", category: "AI 倫理", difficulty: 3, question: "**Explainable AI(XAI)** の必要性として最も適切なものを選びなさい。", choices: ["医療 ・ 金融 ・ 採用などの高ステークスで決定根拠の説明が必須", "全 AI に常時必要", "学習速度向上のため", "GPU 削減のため"], correctIndex: 0, explanation: "**XAI**: SHAP / LIME / Integrated Gradients などで **モデルの決定根拠を説明可能化**。EU AI Act の高リスク AI 規制で必須要件。一般的な単純タスクでは省略可。" },
  { id: "dx-q49", category: "デザイン思考", difficulty: 2, question: "デザイン思考の **共感(Empathize)フェーズ** の典型的手法として最も適切なものを選びなさい。", choices: ["ユーザーインタビュー ・ フィールド観察 ・ シャドーイング", "競合分析だけ", "売上分析だけ", "コード実装"], correctIndex: 0, explanation: "**Empathize**: ユーザーを深く理解する段階。インタビュー / 観察 / ペルソナ / 共感マップ作成。机上の調査だけでは不十分、現場 ・ 一次情報重視。" },
  { id: "dx-q50", category: "ロードマップ", difficulty: 1, question: "DX 検定 ★★★ 取得後のキャリアパスとして最も適切なものを選びなさい。", choices: ["ITストラテジスト ・ G検定 ・ ビジネス系統合資格へ展開", "ITパスポートのみ受験", "プログラミング言語をやめる", "資格不要"], correctIndex: 0, explanation: "DX 検定は **広範囲を浅く** 問う スコア型認定。**ITストラテジスト(戦略深掘り)・ G 検定(AI 深掘り)・ 中小企業診断士 ・ MBA** など方向性別に深掘り選択肢豊富。" },
  { id: "dx-q51", category: "DX 戦略", difficulty: 3, question: "**DX レポート**(経産省, 2018)で警告された **2025 年の崖** が表すリスクとして最も適切なものを選びなさい。", choices: ["レガシーシステム維持で年最大 12 兆円の経済損失", "AI 規制強化", "GPU 不足", "電力不足"], correctIndex: 0, explanation: "**2025 年の崖**: 既存レガシー(SAP ERP / メインフレーム)維持で **年 12 兆円損失** + DX 遅延。**SAP ECC サポート終了 2027 年延期 ・ S/4HANA 移行** が代表課題。" },
  { id: "dx-q52", category: "DX 戦略", difficulty: 3, question: "**Digitization / Digitalization / Digital Transformation** の違いとして最も適切なものを選びなさい。", choices: ["紙→デジタル化(Digitization)→ プロセス自動化(Digitalization)→ ビジネスモデル変革(DX)", "全て同じ", "DX=AI 導入のみ", "Digitization が最終形態"], correctIndex: 0, explanation: "**3 段階**: ① Digitization(紙 / 物理 → デジタル)② Digitalization(プロセス自動化 ・ Workflow デジタル化)③ **Digital Transformation**(競争優位 ・ ビジネスモデル変革)。最終段階が DX。" },
  { id: "dx-q53", category: "DX 指標", difficulty: 3, question: "**DX 推進指標**(経産省)の評価項目として **誤っているもの** を選びなさい。", choices: ["ビジョン ・ 戦略", "経営者のコミットメント", "推進体制 ・ 人材", "GPU 個数"], correctIndex: 3, explanation: "**DX 推進指標**: ① ビジョン ・ 戦略 ② 経営者コミット ③ 推進体制 ・ 人材 ④ 事業変革 ⑤ デジタル投資 ⑥ データ ・ システム ⑦ ガバナンス。**全社的成熟度を 6 段階(0-5)で自己診断**。" },
  { id: "dx-q54", category: "クラウド", difficulty: 3, question: "**Hybrid Cloud / Multi-Cloud** の戦略的目的として **誤っているもの** を選びなさい。", choices: ["ベンダーロックイン回避", "可用性 ・ 災害対策", "コンプライアンス対応(地域別データ保管)", "全部 1 ベンダーで完結"], correctIndex: 3, explanation: "**マルチクラウド理由**: ロックイン回避 / 機能ベスト選択 / DR / 規制対応(GDPR / データ主権)/ 価格交渉力。**Single Cloud は シンプル ・ 統合の利点もあり**戦略判断。" },
  { id: "dx-q55", category: "DX 組織", difficulty: 3, question: "**CDXO(Chief Digital Transformation Officer)** の役割として最も適切なものを選びなさい。", choices: ["全社 DX 戦略の責任者 ・ ビジネス × デジタルの橋渡し", "IT 部門長のみ", "CFO の代替", "管理職一般"], correctIndex: 0, explanation: "**CDXO / CDO**(Chief Digital Officer): DX 戦略 ・ 文化変革 ・ デジタル投資判断。**CIO(IT 運用)と区別**。**Two-in-a-Box**(CDXO + CDO + CTO の 3 役組合せ)も。" },
  { id: "dx-q56", category: "AI / Data", difficulty: 3, question: "**Data Driven Organization** に必要な要素として **誤っているもの** を選びなさい。", choices: ["データ民主化(全員アクセス可)", "データ品質 ・ ガバナンス", "意思決定にデータ反映の文化", "経営は感覚最優先"], correctIndex: 3, explanation: "**Data-Driven 組織**: 民主化(BI ・ Self-Service)+ Governance(品質 ・ アクセス制御)+ 文化(KPI ベース意思決定)+ 人材(リテラシー)。**感覚最優先は Data-Driven の対義語**。" },
  { id: "dx-q57", category: "AI / Data", difficulty: 3, question: "**Generative AI** の業務活用パターンとして **誤っているもの** を選びなさい。", choices: ["コード生成(Copilot)", "文書要約 ・ 翻訳", "コールセンター応対支援", "全社の意思決定を完全自動化"], correctIndex: 3, explanation: "**生成 AI 活用**: ① コード(GitHub Copilot)② 要約 ・ 翻訳 ③ コール対応 ・ チャットボット ④ アイデア発想 ・ ドラフト作成 ⑤ RAG(社内文書検索)。**完全自動化は Human-in-the-Loop で抑制**が現実。" },
  { id: "dx-q58", category: "セキュリティ", difficulty: 3, question: "**Zero Trust Security** の基本原則として最も適切なものを選びなさい。", choices: ["「Never trust, always verify」境界防御から都度認証 ・ 認可へ", "VPN だけで十分", "境界で全部防御", "Firewall 不要"], correctIndex: 0, explanation: "**Zero Trust**: 境界(ペリメータ)防御からの脱却 → **アクセス毎に Identity + Device + Context を検証**。**SASE / SSE / Zero Trust Network Access(ZTNA)** で実装。米 NIST SP 800-207。" },
  { id: "dx-q59", category: "Agile", difficulty: 3, question: "**Agile 開発** の **Scrum** で **PO(Product Owner)** の役割として最も適切なものを選びなさい。", choices: ["プロダクトバックログ管理 ・ 優先順位決定 ・ ステークホルダーとの調整", "コード実装", "サーバ管理", "DBA"], correctIndex: 0, explanation: "**Scrum Roles**: **PO**(価値最大化 / バックログ)・ **Scrum Master**(プロセス円滑化)・ **Developers**(実装)。**Sprint(1-4 週)・ Daily Stand-up ・ Review ・ Retrospective** が基本イベント。" },
  { id: "dx-q60", category: "DX 文化", difficulty: 3, question: "**Psychological Safety(心理的安全性)** の効果として最も適切なものを選びなさい。", choices: ["失敗 ・ 反対意見を表明しやすい → イノベーション + 学習が加速", "競争激化", "GPU 速度向上", "コスト削減"], correctIndex: 0, explanation: "**心理的安全性**(Amy Edmondson): Google Aristotle Project で 高生産性チームの最重要因子と判明。**失敗から学ぶ ・ 多様な意見 ・ オープンな議論** を促進。DX 文化変革の基盤。" },
  { id: "dx-q61", category: "Innovation", difficulty: 3, question: "**両利きの経営(Ambidexterity)** の意味として最も適切なものを選びなさい。", choices: ["既存事業の深化(Exploitation)+ 新規探索(Exploration)を並立", "片方のみ", "コスト最優先", "GUI 設計"], correctIndex: 0, explanation: "**両利きの経営**(March 1991, O'Reilly & Tushman): 既存深化(改善 ・ 効率)+ 新規探索(新規事業 ・ 実験)を組織的に両立。**DX の中核思想**。**Skunkworks / 出島組織** が代表手法。" },
  { id: "dx-q62", category: "Platform", difficulty: 3, question: "**Platform Engineering** の目的として最も適切なものを選びなさい。", choices: ["開発者向け Internal Developer Platform(IDP)を構築 → Cognitive Load 軽減", "OS 開発", "GUI のみ", "GPU 提供"], correctIndex: 0, explanation: "**Platform Engineering**(2022+ トレンド): **IDP**(Internal Developer Platform)で Self-Service ・ Backstage / Port 等。**DevOps の進化 ・ SRE 補完**。Gartner Top Trend 入り。" },
  { id: "dx-q63", category: "業界 DX", difficulty: 3, question: "**製造業の DX(Industry 4.0)** の中核技術として **誤っているもの** を選びなさい。", choices: ["IoT / Sensor / Edge Computing", "Digital Twin", "AI / Predictive Maintenance", "アナログ手作業のみ"], correctIndex: 3, explanation: "**Industry 4.0**: IoT(センサ ・ Edge)/ Digital Twin(仮想複製で最適化)/ AI 予知保全 / Cobot(協調ロボット)/ AR/MR(整備支援)。**全アナログは Industry 1.0** で対極。" },
  { id: "dx-q64", category: "業界 DX", difficulty: 3, question: "**金融 DX(FinTech / DeFi / Embedded Finance)** の典型例として **誤っているもの** を選びなさい。", choices: ["デジタル決済(QR / e-Wallet)", "API バンキング ・ Open Banking", "AI 与信 ・ 不正検知", "紙の通帳のみ"], correctIndex: 3, explanation: "**FinTech**: 決済 / API 銀行(BaaS)/ AI 与信 / Robo-Advisor / DeFi / Tokenization / Embedded Finance。**紙通帳維持は DX 対極**(完全廃止ではなく選択肢の 1 つに留める)。" },
  { id: "dx-q65", category: "実務", difficulty: 3, question: "DX 検定 ★★★ で重視される **総合的 DX 推進能力** として最も適切なものを選びなさい。", choices: ["戦略 + 組織 + データ + AI + クラウド + セキュリティ + 業界知見 + 法令 + 文化変革の統合", "技術のみ", "GUI のみ", "コスト最優先"], correctIndex: 0, explanation: "**DX 検定の総合領域**: ① 戦略 / ビジョン ② 組織 / 人材 ③ データ / AI / クラウド ④ サイバーセキュリティ ⑤ 業界 DX 事例 ⑥ 法令 ・ 倫理 ⑦ 文化変革 ⑧ KPI / ROI。**8 領域の融合判断**が試験の中核。" },
];
