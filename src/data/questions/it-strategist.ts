import type { Question } from "@/types/content";

export const itStrategistQuestions: Question[] = [
  {
    id: "st-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "ITストラテジスト試験(ST)が分類される IPA 試験のレベルとして最も適切なものを選びなさい。",
    choices: [
      "レベル 1(IT パスポート)",
      "レベル 2(基本情報)",
      "レベル 3(応用情報)",
      "レベル 4(高度試験)",
    ],
    correctIndex: 3,
    explanation:
      "**ITストラテジスト** は IPA レベル 4 の **高度試験**。経営戦略と IT を統合する最高峰の認定で、合格率 14 〜 15% の難関。",
  },
  {
    id: "st-q2",
    category: "試験形式",
    difficulty: 2,
    question:
      "ITストラテジスト試験 **午後 II** の形式として最も適切なものを選びなさい。",
    choices: [
      "選択式(マークシート)",
      "短文記述(50 〜 100 字)",
      "長文論述(2,000 〜 3,000 字)",
      "プログラミング実技",
    ],
    correctIndex: 2,
    explanation:
      "**午後 II は 120 分で 3 問中 1 問選択 + 2,000 〜 3,000 字の論述**。事前に自身の業務経験を整理しておくことが必須。A 評価で合格(絶対評価)。",
  },
  {
    id: "st-q3",
    category: "経営戦略",
    difficulty: 2,
    question:
      "ポーターの **3 つの基本戦略** に **含まれない** ものを選びなさい。",
    choices: [
      "コストリーダーシップ戦略",
      "差別化戦略",
      "集中戦略",
      "多角化戦略",
    ],
    correctIndex: 3,
    explanation:
      "ポーターの 3 つの基本戦略は **コストリーダーシップ / 差別化 / 集中**。多角化は **アンゾフの成長マトリクス** の 1 つ(新規市場 × 新規製品)。",
  },
  {
    id: "st-q4",
    category: "経営戦略",
    difficulty: 3,
    question:
      "**既存事業の深化と新規事業の探索を両立** する経営手法の名称として最も適切なものを選びなさい。",
    choices: [
      "ブルーオーシャン戦略",
      "両利きの経営(Ambidexterity)",
      "ニッチ戦略",
      "ピボット戦略",
    ],
    correctIndex: 1,
    explanation:
      "**両利きの経営(Ambidexterity)** はオライリー / タッシュマン提唱の経営理論。既存事業の深化(Exploitation)と新規事業の探索(Exploration)を両立する組織能力。",
  },
  {
    id: "st-q5",
    category: "マーケティング",
    difficulty: 2,
    question:
      "STP マーケティングの 3 要素として最も適切なものを選びなさい。",
    choices: [
      "Strategy / Tactics / Positioning",
      "Segmentation / Targeting / Positioning",
      "Sales / Trade / Promotion",
      "Service / Time / Place",
    ],
    correctIndex: 1,
    explanation:
      "**STP = Segmentation(細分化)・ Targeting(標的選定)・ Positioning(差別化)**。マーケティング戦略策定の標準フレームワーク。",
  },
  {
    id: "st-q6",
    category: "ビジネスモデル",
    difficulty: 2,
    question:
      "**両面市場(Two-sided Market)** の典型的な特徴として最も適切なものを選びなさい。",
    choices: [
      "1 つのユーザ層に対するサービス",
      "複数のユーザグループ同士をマッチングする仕組み(GAFAM / Uber / Airbnb)",
      "B2B 専用",
      "サブスクリプション課金のみ",
    ],
    correctIndex: 1,
    explanation:
      "**プラットフォーム / 両面市場** は買手と売手 / ドライバーと乗客などの **複数ユーザグループのマッチング** が中核。ネットワーク外部性で価値が増大。",
  },
  {
    id: "st-q7",
    category: "EA",
    difficulty: 3,
    question:
      "Enterprise Architecture(EA)の 4 階層に **含まれない** ものを選びなさい。",
    choices: [
      "Business Architecture(BA)",
      "Data Architecture(DA)",
      "Application Architecture(AA)",
      "Marketing Architecture(MA)",
    ],
    correctIndex: 3,
    explanation:
      "EA の 4 階層は **BA / DA / AA / TA**(Business / Data / Application / Technology)。Marketing Architecture は EA の標準には含まれない。",
  },
  {
    id: "st-q8",
    category: "投資判断",
    difficulty: 3,
    question:
      "**投資の将来キャッシュフローを現在価値に割り引いた合計** から初期投資を引いた指標の名称として最も適切なものを選びなさい。",
    choices: [
      "ROI(Return on Investment)",
      "NPV(Net Present Value)",
      "IRR(Internal Rate of Return)",
      "TCO(Total Cost of Ownership)",
    ],
    correctIndex: 1,
    explanation:
      "**NPV** は将来 CF の現在価値合計 - 初期投資。プラスなら投資価値あり。**IRR** は NPV = 0 となる割引率、**TCO** は導入 + 運用全コスト。",
  },
  {
    id: "st-q9",
    category: "投資判断",
    difficulty: 2,
    question:
      "システム導入の **初期費用 + 運用コストの合計** を表す指標として最も適切なものを選びなさい。",
    choices: [
      "ROI",
      "NPV",
      "TCO(Total Cost of Ownership)",
      "EBITDA",
    ],
    correctIndex: 2,
    explanation:
      "**TCO** は導入 + 運用 + 廃棄まで含めた総所有コスト。クラウド vs オンプレの比較などで頻用される。",
  },
  {
    id: "st-q10",
    category: "DX",
    difficulty: 2,
    question:
      "経済産業省 DX レポートで提唱された **2025 年の崖** が示すリスクとして最も適切なものを選びなさい。",
    choices: [
      "AI 規制違反のリスク",
      "レガシーシステム放置による経済損失(年間最大 12 兆円)",
      "個人情報漏洩のリスク",
      "サイバー攻撃の急増",
    ],
    correctIndex: 1,
    explanation:
      "**2025 年の崖** は経産省 DX レポート(2018)の代表的キーワード。レガシーシステム刷新の遅れで年間 **最大 12 兆円** の経済損失リスクを警告。",
  },
  {
    id: "st-q11",
    category: "DX",
    difficulty: 2,
    question:
      "**経済産業省 + IPA が提供する DX 推進状況の自己診断ツール** の名称として最も適切なものを選びなさい。",
    choices: [
      "DX 推進指標",
      "DX 銘柄",
      "DX 認定制度",
      "情報処理推進指標",
    ],
    correctIndex: 0,
    explanation:
      "**DX 推進指標** は経産省 + IPA の自己診断ツール。35 の質問項目で 0 〜 5 段階評価。**DX 認定制度** は国の認定、**DX 銘柄** は経産省 + 東証選定。",
  },
  {
    id: "st-q12",
    category: "BPR",
    difficulty: 2,
    question:
      "**業務プロセスを根本から再設計する** 改革手法の名称として最も適切なものを選びなさい。",
    choices: [
      "BPR(Business Process Re-engineering)",
      "PDCA",
      "Kaizen",
      "ITIL",
    ],
    correctIndex: 0,
    explanation:
      "**BPR** はマイケル ・ ハマー提唱の根本的業務改革手法。段階的改善(Kaizen / PDCA)とは異なり、**ゼロベースで再設計** することが特徴。",
  },
  {
    id: "st-q13",
    category: "Process Mining",
    difficulty: 3,
    question:
      "システムのログから **業務プロセスを自動再現 ・ 可視化** する技術の名称として最も適切なものを選びなさい。",
    choices: [
      "Process Mining",
      "Data Mining",
      "Web Scraping",
      "ETL",
    ],
    correctIndex: 0,
    explanation:
      "**Process Mining** は実行ログから業務プロセスを自動再現。Celonis / UiPath Process Mining / SAP Signavio が代表ツール。**Hyperautomation** の中核。",
  },
  {
    id: "st-q14",
    category: "ガバナンス",
    difficulty: 3,
    question:
      "**IT ガバナンスの国際的なフレームワーク** の名称として最も適切なものを選びなさい。",
    choices: [
      "PMBOK",
      "ITIL",
      "COBIT",
      "ISO 9001",
    ],
    correctIndex: 2,
    explanation:
      "**COBIT(Control Objectives for Information and Related Technology)** は ISACA の IT ガバナンス国際フレームワーク。最新は COBIT 2019。**ITIL** はサービスマネジメント、**PMBOK** はプロジェクト。",
  },
  {
    id: "st-q15",
    category: "システム企画",
    difficulty: 2,
    question:
      "ベンダ選定時に **正式な提案を依頼する文書** の名称として最も適切なものを選びなさい。",
    choices: [
      "RFI(Request for Information)",
      "RFP(Request for Proposal)",
      "RFQ(Request for Quotation)",
      "SOW(Statement of Work)",
    ],
    correctIndex: 1,
    explanation:
      "**RFP(提案依頼書)** はベンダに正式な提案を依頼する文書。**RFI** は事前情報収集、**RFQ** は見積依頼、**SOW** は契約後の作業範囲。",
  },
  {
    id: "st-q16",
    category: "リスクマネジメント",
    difficulty: 2,
    question:
      "リスク対応の 4 種類に **含まれない** ものを選びなさい。",
    choices: [
      "回避",
      "低減",
      "移転(保険など)",
      "増幅",
    ],
    correctIndex: 3,
    explanation:
      "リスク対応は **回避 / 低減 / 移転 / 受容** の 4 種。リスクを増やす方向の対応(増幅)は通常含まれない(機会の場合は『活用』が候補)。",
  },
  {
    id: "st-q17",
    category: "イノベーション",
    difficulty: 3,
    question:
      "**最小機能で素早く市場検証 → 学習を繰り返す** スタートアップ手法の名称として最も適切なものを選びなさい。",
    choices: [
      "Lean Startup",
      "Waterfall Development",
      "Spiral Development",
      "Six Sigma",
    ],
    correctIndex: 0,
    explanation:
      "**Lean Startup**(エリック ・ リース)は MVP(最小実行可能製品)→ 計測 → 学習 → Pivot のサイクルで仮説検証する手法。スタートアップ + 大企業の新規事業で標準化。",
  },
  {
    id: "st-q18",
    category: "イノベーション",
    difficulty: 3,
    question:
      "デザイン思考のプロセスに **含まれない** ものを選びなさい。",
    choices: [
      "Empathize(共感)",
      "Define(定義)",
      "Implement(実装)",
      "Test(テスト)",
    ],
    correctIndex: 2,
    explanation:
      "デザイン思考の 5 段階は **Empathize / Define / Ideate / Prototype / Test**。Implement は標準には含まれない(プロトタイプの段階で簡易実装する)。",
  },
  {
    id: "st-q19",
    category: "DX 規制",
    difficulty: 3,
    question:
      "EU が 2024 年に可決した **世界初の包括的 AI 規制法** の名称として最も適切なものを選びなさい。",
    choices: [
      "GDPR",
      "EU AI Act",
      "DSA(Digital Services Act)",
      "DMA(Digital Markets Act)",
    ],
    correctIndex: 1,
    explanation:
      "**EU AI Act**(2024 年 5 月可決)は世界初の包括的 AI 規制。AI を 4 つのリスクカテゴリに分類し、違反は全世界売上の最大 7% の制裁金。",
  },
  {
    id: "st-q20",
    category: "経営戦略",
    difficulty: 2,
    question:
      "アンゾフの成長マトリクスで **新規市場 × 新規製品** を表す戦略として最も適切なものを選びなさい。",
    choices: [
      "市場浸透",
      "市場開拓",
      "製品開発",
      "多角化",
    ],
    correctIndex: 3,
    explanation:
      "アンゾフのマトリクス: **市場浸透**(既存×既存)・ **市場開拓**(新規市場×既存製品)・ **製品開発**(既存市場×新規製品)・ **多角化**(新規×新規)。多角化が最もリスクが高い。",
  },
  {
    id: "st-q21",
    category: "経営戦略",
    difficulty: 3,
    question:
      "**バランスト ・ スコアカード(BSC)** の 4 つの視点として **正しいもの** を選びなさい。",
    choices: [
      "財務 ・ 顧客 ・ 業務プロセス ・ 学習と成長",
      "財務 ・ 営業 ・ マーケティング ・ R&D",
      "財務 ・ 株主 ・ 従業員 ・ 顧客",
      "財務 ・ ESG ・ DX ・ 人的資本",
    ],
    correctIndex: 0,
    explanation:
      "**BSC の 4 視点**(Kaplan / Norton): **財務 ・ 顧客 ・ 業務プロセス ・ 学習と成長**。財務(成果)を支える顧客、それを支える業務プロセス、さらに支える学習と成長という因果連鎖で戦略を可視化。",
  },
  {
    id: "st-q22",
    category: "事業戦略",
    difficulty: 3,
    question:
      "**プロダクト ・ ポートフォリオ ・ マネジメント(PPM)** で **市場成長率高 × 相対市場シェア低** に位置するセルとして適切なものを選びなさい。",
    choices: ["金のなる木", "花形", "問題児", "負け犬"],
    correctIndex: 2,
    explanation:
      "**PPM(BCG マトリクス)**: 花形(高 / 高)・ **問題児(高 / 低)**・ 金のなる木(低 / 高)・ 負け犬(低 / 低)。問題児は市場成長中だがシェア低 → 投資判断が鍵。",
  },
  {
    id: "st-q23",
    category: "IT 戦略",
    difficulty: 3,
    question:
      "**TOGAF / Zachman フレームワーク** が定義する **EA(エンタープライズアーキテクチャ)** の主要レイヤーとして **誤っているもの** を選びなさい。",
    choices: [
      "ビジネスアーキテクチャ",
      "データアーキテクチャ",
      "アプリケーションアーキテクチャ",
      "セキュリティアーキテクチャ(独立階層)",
    ],
    correctIndex: 3,
    explanation:
      "**EA 4 階層**: ビジネス / データ / アプリケーション / テクノロジ。**セキュリティは独立階層ではなく、各層を横断する観点**。BDAT モデルとも呼ばれる。",
  },
  {
    id: "st-q24",
    category: "投資判断",
    difficulty: 3,
    question:
      "IT 投資の評価指標で **将来キャッシュフローを現在価値に割引いた合計が 0 になる割引率** を選びなさい。",
    choices: ["NPV", "IRR", "ROI", "TCO"],
    correctIndex: 1,
    explanation:
      "**IRR(内部収益率)** は **NPV = 0 となる割引率**。IRR > 資本コストで投資承認。NPV は現在価値の差額、ROI は投資収益率、TCO は総所有コスト。",
  },
  {
    id: "st-q25",
    category: "リスク",
    difficulty: 2,
    question:
      "リスク対応の 4 種類として **誤っているもの** を選びなさい。",
    choices: ["回避", "移転", "軽減", "増幅"],
    correctIndex: 3,
    explanation:
      "**リスク対応 4 種**: **回避(やめる)・ 移転(保険など)・ 軽減(対策)・ 受容(リスクを認識した上で受け入れる)**。『増幅』は対応戦略にない。",
  },
  {
    id: "st-q26",
    category: "イノベーション",
    difficulty: 3,
    question:
      "クリステンセンの **イノベーションのジレンマ** で、既存企業が新規参入企業に追い越される理由として最も適切なものを選びなさい。",
    choices: [
      "既存企業が R&D 投資を怠るため",
      "既存企業が既存顧客の声を聞きすぎ、破壊的イノベーションへの投資が遅れるため",
      "新規企業が常に資金力で勝るため",
      "新規企業が政府の補助金を独占するため",
    ],
    correctIndex: 1,
    explanation:
      "**イノベーションのジレンマ**: 既存企業は **既存顧客の要求(持続的イノベーション)に応えることが合理的** だが、その合理性が **破壊的イノベーション(初期は性能低・低価格)への投資判断を遅らせる**。",
  },
  {
    id: "st-q27",
    category: "DX",
    difficulty: 2,
    question:
      "経済産業省の **DX レポート** で警鐘された **2025 年の崖** として最も適切なものを選びなさい。",
    choices: [
      "DX 投資不足による年間 12 兆円の経済損失リスク",
      "AI 人材不足で AI 開発が停止するリスク",
      "クラウド料金高騰で IT 予算がパンクするリスク",
      "サイバー攻撃の急増による情報漏洩リスク",
    ],
    correctIndex: 0,
    explanation:
      "**2025 年の崖**: **レガシーシステムの維持と DX 投資不足が解消されない場合、2025 年以降に年間最大 12 兆円の経済損失** が発生する可能性(経産省 DX レポート、2018)。",
  },
  {
    id: "st-q28",
    category: "BPR",
    difficulty: 3,
    question:
      "BPR(ビジネスプロセス ・ リエンジニアリング)の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "ビジネスプロセスの抜本的再設計",
      "Hammer / Champy が提唱(1993)",
      "業務改善 ・ Kaizen の延長として段階的に実施",
      "コスト ・ 品質 ・ サービス ・ スピードの劇的改善を目指す",
    ],
    correctIndex: 2,
    explanation:
      "**BPR は段階的改善ではなく『抜本的再設計』**。Kaizen / 業務改善が ボトムアップ ・ 漸進的なのに対し、BPR は **トップダウン ・ ゼロベース ・ 劇的改善** を志向。",
  },
  {
    id: "st-q29",
    category: "システム企画",
    difficulty: 2,
    question:
      "**RFP(提案依頼書)** に **記載すべきでないもの** を選びなさい。",
    choices: [
      "システム化の目的 ・ 背景",
      "要求機能 ・ 非機能要件",
      "予算 ・ スケジュール",
      "発注先業者の社内昇進ルート",
    ],
    correctIndex: 3,
    explanation:
      "**RFP 記載項目**: 目的 ・ 背景 ・ 要件(機能 / 非機能)・ 予算 ・ スケジュール ・ 評価基準。**業者の人事情報は無関係**。RFI(情報提供依頼)→ RFP(提案依頼)の順で進めるのが定石。",
  },
  {
    id: "st-q30",
    category: "イノベーション",
    difficulty: 3,
    question:
      "**両利きの経営(Ambidexterity)** が説明する組織能力として最も適切なものを選びなさい。",
    choices: [
      "既存事業の深化(Exploitation)と新規事業の探索(Exploration)を同時追求",
      "ハードウェア事業とソフトウェア事業の同時展開",
      "国内市場と海外市場の同時開拓",
      "B2C と B2B の同時展開",
    ],
    correctIndex: 0,
    explanation:
      "**両利きの経営**(O'Reilly / Tushman): **既存事業の深化 ・ 効率化(Exploitation)** と **新規事業 ・ イノベーション探索(Exploration)** を同時追求。**短期収益と長期成長の両立** が経営トップの要諦。",
  },
];
