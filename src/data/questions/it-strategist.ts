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
  { id: "st-q31", category: "経営戦略", difficulty: 3, question: "**ブルーオーシャン戦略** の特徴として最も適切なものを選びなさい。", choices: ["競争のない新市場創造(Value Innovation)", "コスト削減のみ", "差別化のみ", "競合との激戦"], correctIndex: 0, explanation: "**Blue Ocean(Kim/Mauborgne)**: 競合と戦わず新市場創造 + 差別化 + 低コスト同時実現(Value Innovation)。**Red Ocean は既存市場の激戦**。" },
  { id: "st-q32", category: "事業戦略", difficulty: 3, question: "**プラットフォーム戦略** が **パイプライン戦略** より優れる特徴として最も適切なものを選びなさい。", choices: ["ネットワーク効果で利用者増 → 価値増の正のフィードバック", "1 社で生産販売", "在庫を持つ", "顧客 = 製造者"], correctIndex: 0, explanation: "**Platform**: Producer-Consumer を接続(Uber / Airbnb / Amazon Marketplace)。**ネットワーク効果**(両側 ・ 同側)で勝者総取り構造。" },
  { id: "st-q33", category: "ファイナンス", difficulty: 3, question: "**WACC(加重平均資本コスト)** の意味として最も適切なものを選びなさい。", choices: ["負債コスト + 株主資本コストの加重平均", "売上総利益率", "ROE", "EBITDA"], correctIndex: 0, explanation: "**WACC = (D/V)·rd·(1-T) + (E/V)·re**。**投資の最低リターン要求** = WACC。これを超える ROIC で価値創造。IT 投資判断 ・ 事業評価で必須。" },
  { id: "st-q34", category: "ファイナンス", difficulty: 3, question: "**NPV(正味現在価値)** が **正** の投資案件の意味として最も適切なものを選びなさい。", choices: ["割引後キャッシュフローの合計 > 初期投資 → 価値創造", "売上が伸びる", "コスト削減", "リスクなし"], correctIndex: 0, explanation: "**NPV = Σ CF_t / (1+r)^t - C_0**。**NPV > 0 で投資承認**。割引率 = WACC。**IRR(NPV=0 となる r)も併用**。複数案件比較は NPV 優先。" },
  { id: "st-q35", category: "事業評価", difficulty: 3, question: "**バランススコアカード(BSC)** の 4 視点として **誤っているもの** を選びなさい。", choices: ["財務", "顧客", "内部プロセス", "競合分析"], correctIndex: 3, explanation: "**BSC 4 視点**: 財務 / 顧客 / 内部ビジネスプロセス / 学習と成長。競合分析は外部環境分析の別フレームワーク(5 forces 等)。" },
  { id: "st-q36", category: "EA", difficulty: 3, question: "**TOGAF** の **ADM(Architecture Development Method)** の Phase A の名称として最も適切なものを選びなさい。", choices: ["Architecture Vision", "Business Architecture", "Information Systems Architecture", "Technology Architecture"], correctIndex: 0, explanation: "**TOGAF ADM**: Preliminary → A: Architecture Vision → B: Business → C: Information Systems → D: Technology → E: Opportunities → F: Migration → G: Implementation → H: Change → Requirements Management。" },
  { id: "st-q37", category: "DX", difficulty: 3, question: "経済産業省 **DX 推進指標** で評価される観点として **誤っているもの** を選びなさい。", choices: ["DX 推進体制 ・ プロセス", "ビジョン ・ ロードマップ", "IT システム ・ 投資判断", "従業員の英語力"], correctIndex: 3, explanation: "**DX 推進指標**(経産省 IPA): ビジョン / 戦略 / 体制 / マネジメント / IT 投資 / 環境整備 / IT 資産。35 項目 9 段階自己評価。**英語力は対象外**。" },
  { id: "st-q38", category: "投資", difficulty: 3, question: "**TCO(Total Cost of Ownership)** に **含まれるべき** ものとして最も適切なものを選びなさい。", choices: ["導入費 + 運用 ・ 保守費 + 廃棄費 + 教育費 + ダウンタイム機会損失", "導入費のみ", "売上のみ", "競合費"], correctIndex: 0, explanation: "**TCO**: ライフサイクル全コスト。**初期(導入 ・ 移行)+ 運用 ・ 保守 + 廃棄 + 隠れコスト(ダウンタイム ・ 学習)**。SaaS は初期低 ・ ランニング高、On-prem は初期高 ・ ランニング中の傾向。" },
  { id: "st-q39", category: "Business", difficulty: 3, question: "**サブスクリプションビジネス** の主要 KPI として **誤っているもの** を選びなさい。", choices: ["MRR(Monthly Recurring Revenue)", "Churn Rate(解約率)", "LTV(顧客生涯価値)", "GPU 利用率"], correctIndex: 3, explanation: "**Subscription KPI**: MRR / ARR / Churn / LTV / CAC / LTV/CAC ratio / Payback Period / NRR(Net Revenue Retention)。GPU 利用率は無関係。" },
  { id: "st-q40", category: "IT 投資", difficulty: 3, question: "**IT 投資カテゴリ** の **守りの IT** と **攻めの IT** の典型例として最も適切なものを選びなさい。", choices: ["守り: 既存システム維持 ・ コンプライアンス、攻め: 新規事業 ・ DX", "両者同じ", "攻めは廃止", "守りは無関係"], correctIndex: 0, explanation: "**守りの IT**(Run): レガシー維持 ・ 法規制対応 ・ セキュリティ。**攻めの IT**(Grow / Transform): 新規事業 ・ DX ・ AI ・ 顧客体験。**日本は守り 80% / 攻め 20%、米国は逆**(経産省指摘)。" },
  { id: "st-q41", category: "DX", difficulty: 3, question: "**DX における 3 段階(Digitization / Digitalization / Digital Transformation)** で **Digitalization** に該当するものを選びなさい。", choices: ["業務プロセスのデジタル化(ERP 導入など)", "紙のスキャン", "ビジネスモデル変革", "AI 学習"], correctIndex: 0, explanation: "**Digitization**: 紙 → デジタル変換。**Digitalization**: プロセスのデジタル化(ERP / RPA)。**Digital Transformation**: ビジネスモデル ・ 顧客体験の変革。" },
  { id: "st-q42", category: "システム企画", difficulty: 3, question: "**RFI** と **RFP** の違いとして最も適切なものを選びなさい。", choices: ["RFI: 情報提供依頼(早期市場調査)、RFP: 提案依頼(具体的提案要請)", "両者同じ", "RFI は廃止", "RFP は早期"], correctIndex: 0, explanation: "**RFI(Request for Information)**: 市場情報収集 ・ ベンダー候補絞り込み。**RFP(Request for Proposal)**: 具体的要件 + ベンダー提案要請 → 評価 ・ 選定。" },
  { id: "st-q43", category: "リスク", difficulty: 3, question: "**リスクアセスメント** の 3 ステップとして **正しい順序** を選びなさい。", choices: ["リスク特定 → リスク分析 → リスク評価", "リスク評価 → 特定 → 分析", "分析 → 特定 → 評価", "対応 → 特定 → 評価"], correctIndex: 0, explanation: "**ISO 31000 リスクマネジメントプロセス**: ① リスク特定(何が起こり得るか)→ ② リスク分析(発生確率 ・ 影響)→ ③ リスク評価(対応要否判断)→ リスク対応。" },
  { id: "st-q44", category: "システム移行", difficulty: 3, question: "システム移行戦略 **6R** に **含まれない** ものを選びなさい。", choices: ["Rehost(リフト&シフト)", "Replatform", "Refactor / Re-architect", "Reverse Engineering"], correctIndex: 3, explanation: "**6R フレームワーク**(AWS / Gartner): Rehost / Relocate / Replatform / Refactor / Repurchase / Retain / Retire。Reverse Engineering は別概念。" },
  { id: "st-q45", category: "EA", difficulty: 3, question: "**Enterprise Architecture(EA)** の **4 層** として最も適切なものを選びなさい。", choices: ["Business / Data / Application / Technology", "Code / Test / Build / Deploy", "Plan / Do / Check / Act", "OSI 7 層"], correctIndex: 0, explanation: "**EA 4 層**: Business(業務 ・ プロセス)/ Data(データ ・ 情報)/ Application / Technology(インフラ)。Zachman Framework は 6×6 マトリクス。" },
  { id: "st-q46", category: "システム企画", difficulty: 3, question: "**システム化計画** の **超上流工程** で重要な成果物として **誤っているもの** を選びなさい。", choices: ["業務要件定義書", "システム化方針書", "投資対効果分析", "プログラムソースコード"], correctIndex: 3, explanation: "**超上流工程**: 経営戦略 → IT 戦略 → システム化構想 → システム化計画 → 要件定義。ソースコードは下流(設計 ・ 実装段階)の成果物。" },
  { id: "st-q47", category: "イノベーション", difficulty: 3, question: "**Open Innovation** の特徴として最も適切なものを選びなさい。", choices: ["社外の知見 ・ 技術 ・ アイデアを活用しイノベーションを加速", "社内のみ", "M&A のみ", "コスト削減のみ"], correctIndex: 0, explanation: "**Open Innovation**(Chesbrough): スタートアップ協業 / VC / 大学連携 / 顧客共創 / ハッカソンで外部知識活用。**自社単独研究の限界突破**。" },
  { id: "st-q48", category: "ESG / SDGs", difficulty: 3, question: "**ESG 投資** の評価基準として **誤っているもの** を選びなさい。", choices: ["環境(E)", "社会(S)", "ガバナンス(G)", "売上(Sales)"], correctIndex: 3, explanation: "**ESG 投資**: 環境 / 社会 / ガバナンスを考慮した投資。**売上は財務指標で ESG ではない**。**SDGs**(17 目標)と連携して企業評価 ・ 開示。" },
  { id: "st-q49", category: "AI / DX 戦略", difficulty: 3, question: "**AI 戦略を策定する際** の優先事項として **誤っているもの** を選びなさい。", choices: ["AI で解決すべきビジネス課題の明確化", "データ基盤と品質確保", "AI 人材育成 + 組織体制", "全社員に GPU 配布"], correctIndex: 3, explanation: "**AI 戦略**: ① ビジネス課題定義 ② データ品質 ・ 基盤 ③ AI 人材 ・ 組織 ・ ガバナンス ④ ユースケース選定 ⑤ MLOps 基盤。**GPU 配布は手段で目的ではない**。" },
  { id: "st-q50", category: "次のステップ", difficulty: 1, question: "ITストラテジスト合格後の **横展開キャリア** として最も適切なものを選びなさい。", choices: ["プロジェクトマネージャ / システム監査技術者 / IT サービスマネージャ", "ITパスポート", "簿記 3 級", "再受験"], correctIndex: 0, explanation: "**IT ストラテジスト → IPA 高度試験横展開**: プロジェクトマネージャ / システム監査技術者 / IT サービスマネージャ / システムアーキテクト。**MBA / 中小企業診断士** で経営側深化も。" },
  { id: "st-q51", category: "経営戦略", difficulty: 4, question: "**ブルー ・ オーシャン戦略** の特徴として最も適切なものを選びなさい。", choices: ["競争のない新市場創造 ・ 顧客価値革新 + コスト削減を両立", "競争激化市場で勝つ", "コスト最優先のみ", "M&A"], correctIndex: 0, explanation: "**Blue Ocean**(Kim & Mauborgne 2005): 既存市場の競争(Red Ocean)から脱却 → 新市場創出。**Value Innovation**: 差別化 + 低コスト同時達成。**ERRC グリッド**(Eliminate / Reduce / Raise / Create)で実装。" },
  { id: "st-q52", category: "経営戦略", difficulty: 4, question: "**ポーターのバリューチェーン** の **主活動 5 つ** として **誤っているもの** を選びなさい。", choices: ["購買物流 ・ 製造 ・ 出荷物流", "販売 ・ マーケティング", "サービス", "GPU 管理"], correctIndex: 3, explanation: "**主活動**: 購買物流 / 製造 / 出荷物流 / 販売・マーケ / サービス。**支援活動**: 全般管理 / 人事 / 技術開発 / 調達。**バリューチェーン分析** で差別化要因 ・ コスト構造を可視化。" },
  { id: "st-q53", category: "経営戦略", difficulty: 4, question: "**Christensen のイノベーションのジレンマ** で **破壊的イノベーション** の特徴として最も適切なものを選びなさい。", choices: ["初期は低性能 ・ 低価格 → 既存顧客が見落とす間に進化 → 既存企業を破壊", "高価格 ・ 高機能", "既存技術改良のみ", "規模拡大のみ"], correctIndex: 0, explanation: "**Disruptive Innovation**(Christensen 1997): 既存大企業は High-End 顧客に集中 → Low-End / 新規市場を見落とす → 新興が破壊。**iPhone / Netflix / AWS** が代表例。" },
  { id: "st-q54", category: "業務改革", difficulty: 4, question: "**BPR(Business Process Reengineering)** の特徴として最も適切なものを選びなさい。", choices: ["既存業務の抜本的再設計 ・ 漸進的改善ではなく根本変革", "改善活動のみ", "GUI 変更のみ", "コスト削減のみ"], correctIndex: 0, explanation: "**BPR**(Hammer & Champy 1990): 既存プロセスを白紙から再設計。**改善(Kaizen)が漸進的に対し、BPR は破壊的**。**業務 ・ 人 ・ IT ・ 組織を同時変革**が成功要因。" },
  { id: "st-q55", category: "AI 戦略", difficulty: 4, question: "**AI 戦略策定** の **CRISP-DM** の 6 ステップとして **誤っているもの** を選びなさい。", choices: ["Business Understanding", "Data Understanding / Preparation", "Modeling / Evaluation / Deployment", "GPU Allocation"], correctIndex: 3, explanation: "**CRISP-DM**: ① Business Understanding ② Data Understanding ③ Data Preparation ④ Modeling ⑤ Evaluation ⑥ Deployment。**業界横断 DS プロジェクト方法論**。**MLOps Maturity Model** で運用面拡張。" },
  { id: "st-q56", category: "投資管理", difficulty: 4, question: "**IT 投資評価** で **NPV(Net Present Value)** の意味として最も適切なものを選びなさい。", choices: ["将来 CF を現在価値に割引 → 投資回収 + α の正味現在価値", "売上総額", "コスト総額", "ROI のみ"], correctIndex: 0, explanation: "**NPV**: $\\sum CF_t / (1+r)^t - 投資額$。**NPV > 0 で投資価値あり**。**IRR**(NPV=0 となる割引率)・ **Payback Period**(回収期間)・ **ROI**(投資収益率)と併用。" },
  { id: "st-q57", category: "ガバナンス", difficulty: 4, question: "**IT ガバナンス** の **COBIT 2019** の特徴として最も適切なものを選びなさい。", choices: ["IT ガバナンス ・ マネジメントの世界標準 FW(40 プロセス + Goals Cascade)", "AWS 専用", "GUI 設計", "Excel テンプレート"], correctIndex: 0, explanation: "**COBIT 2019**: ISACA。**EDM(Evaluate / Direct / Monitor)** + **APO / BAI / DSS / MEA** の 40 プロセス。**Stakeholder Needs → Enterprise Goals → IT Goals → Process** の Cascade で整合性。" },
  { id: "st-q58", category: "リスク", difficulty: 4, question: "**Enterprise Risk Management(COSO ERM 2017)** で扱うリスクとして **誤っているもの** を選びなさい。", choices: ["戦略リスク", "オペレーショナルリスク", "コンプライアンス ・ レピュテーション", "GPU 利用率"], correctIndex: 3, explanation: "**COSO ERM**: 戦略 / 業務 / 報告 / コンプラ / レピュテーション ・ サイバー。**Identify / Assess / Respond / Monitor** を組織横断で。**3 Lines of Defense / Risk Appetite Statement** が中核。" },
  { id: "st-q59", category: "DX 戦略", difficulty: 4, question: "**ITストラテジスト試験 午後 II** で問われる **DX 戦略立案** の構成要素として **誤っているもの** を選びなさい。", choices: ["ビジネス課題 ・ ステークホルダー分析", "技術選定 ・ アーキテクチャ", "投資効果 ・ ロードマップ", "コードのみ"], correctIndex: 3, explanation: "**IT ストラテジスト論述**: ① 経営環境 ・ 課題 ② IT/DX 戦略の方向性 ③ アーキテクチャ ・ 技術選定 ④ 推進体制 ・ 組織 ・ 人材 ⑤ 投資効果 ・ KPI ⑥ ロードマップ ・ リスク管理。**コードは試験範囲外**。" },
  { id: "st-q60", category: "プロジェクト", difficulty: 4, question: "**PMBOK 7 版** の **12 の Principles** に含まれないものを選びなさい。", choices: ["Stewardship(責任ある管理)", "Team / Stakeholder 重視", "Value / System Thinking", "GPU 最大利用"], correctIndex: 3, explanation: "**PMBOK 7th**(2021): 12 Principles + 8 Performance Domains。**Process ベースから Principle / Outcome ベースへ転換**。Agile / Hybrid 統合。GPU は無関係。" },
  { id: "st-q61", category: "EA", difficulty: 4, question: "**Enterprise Architecture(EA)** の **4 層モデル** として最も適切なものを選びなさい。", choices: ["Business / Data / Application / Technology Architecture", "Hardware / OS / Network / DB", "Cloud / On-prem / Hybrid / Edge", "GUI / API / DB / GPU"], correctIndex: 0, explanation: "**EA 4 層**(Zachman / TOGAF): ① Business ② Data ③ Application ④ Technology。**TOGAF ADM** で開発 ・ 移行。**As-Is / To-Be Architecture** + Gap 分析で IT 戦略具体化。" },
  { id: "st-q62", category: "M&A", difficulty: 4, question: "**M&A の PMI(Post-Merger Integration)** で IT 統合の課題として **誤っているもの** を選びなさい。", choices: ["システム統合 / 重複排除", "データ移行 ・ クレンジング", "組織文化 ・ ガバナンス調整", "全部独立運用継続"], correctIndex: 3, explanation: "**PMI**: 統合計画 → 100 日プラン → クイックウィン + 中長期統合。**システム統合(One ERP / 共存 / Best of Breed)・ データ統合 ・ プロセス標準化 ・ 文化** が主要課題。Day-1 Readiness 重要。" },
  { id: "st-q63", category: "Compliance", difficulty: 4, question: "**個人情報保護法(2022 改正)** の主要変更点として **誤っているもの** を選びなさい。", choices: ["越境移転規制(同等水準国 / 同意 / 基準適合体制)", "Cookie / 端末識別子も場合により規制", "漏洩等報告 + 本人通知の義務化", "全企業が対象外"], correctIndex: 3, explanation: "**個情法 2022 改正**: 越境移転厳格化 / Cookie 等の規制(個人関連情報)/ 漏洩報告義務化(個人情報保護委員会 + 本人)/ 仮名加工情報創設。**全企業 ・ 個人事業主が原則対象**。" },
  { id: "st-q64", category: "Sustainability", difficulty: 4, question: "**Green IT / Sustainable IT** の取組として **誤っているもの** を選びなさい。", choices: ["データセンタの PUE 改善 ・ 再エネ調達", "ハードウェア循環(リユース / リサイクル)", "AI の学習電力測定 ・ Carbon Aware Computing", "全部使い捨て"], correctIndex: 3, explanation: "**Green IT**: PUE(Power Usage Effectiveness、目標 < 1.5)・ 再エネ 100%(RE100)・ Liquid Cooling ・ Carbon-Aware Scheduling。**E-Waste 削減 ・ Circular Economy**。CO2 削減は経営課題。" },
  { id: "st-q65", category: "実務", difficulty: 4, question: "IT ストラテジスト試験で重視される **論述能力** として最も適切なものを選びなさい。", choices: ["経営課題 → IT 戦略 → 効果 ・ リスク → 推進体制 を 2000 字超で論理的に展開", "ML コードのみ", "GUI 設計のみ", "Excel 操作のみ"], correctIndex: 0, explanation: "**ITストラテジスト 午後 II 論述**: A 評価必須(2-3 設問 ・ 各 800-2400 字)。**経営者視点 + IT 戦略 + 効果 ・ リスク ・ 推進体制** を実体験で。設問要件を満たし論理一貫性が肝。" },
];
