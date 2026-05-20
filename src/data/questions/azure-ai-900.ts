import type { Question } from "@/types/content";

export const azureAi900Questions: Question[] = [
  {
    id: "az900-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Microsoft Azure AI Fundamentals(AI-900)が分類される認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Fundamentals(基礎)",
      "Associate(アソシエイト)",
      "Expert(エキスパート)",
      "Specialty(専門)",
    ],
    correctIndex: 0,
    explanation:
      "AI-900 は Microsoft 認定の **Fundamentals(基礎)レベル**。Associate に AI-102、Expert に AZ-305 などがある。",
  },
  {
    id: "az900-q2",
    category: "責任ある AI",
    difficulty: 2,
    question:
      "Microsoft の責任ある AI の 6 原則に **含まれない** ものを選びなさい。",
    choices: [
      "公平性(Fairness)",
      "信頼性 ・ 安全性(Reliability & Safety)",
      "拡張性(Scalability)",
      "包括性(Inclusiveness)",
    ],
    correctIndex: 2,
    explanation:
      "Microsoft の責任ある AI 6 原則は **公平性 ・ 信頼性/安全性 ・ プライバシー/セキュリティ ・ 包括性 ・ 透明性 ・ 説明責任**。拡張性は性能 / 設計の指標で 6 原則には含まれない。",
  },
  {
    id: "az900-q3",
    category: "ワークロード",
    difficulty: 2,
    question:
      "「製造ラインのカメラ画像から不良品を判別する」業務に最も適切な AI ワークロードを選びなさい。",
    choices: [
      "自然言語処理",
      "コンピュータビジョン",
      "音声認識",
      "強化学習",
    ],
    correctIndex: 1,
    explanation:
      "**コンピュータビジョン**(画像分類 / 物体検出)が該当。Microsoft では Custom Vision で独自データから不良品判別モデルを構築できる。",
  },
  {
    id: "az900-q4",
    category: "Azure ML",
    difficulty: 2,
    question:
      "Azure Machine Learning で **コードを書かずに** ML モデルを構築 / 比較できる機能として最も適切なものを選びなさい。",
    choices: [
      "Azure CLI",
      "Automated ML(自動 ML)",
      "Azure DevOps",
      "Azure Data Factory",
    ],
    correctIndex: 1,
    explanation:
      "**Automated ML** はデータと目的タスクを指定するだけで複数アルゴリズム + ハイパーパラメータの組合せを自動探索。Designer もノーコードだがこちらはドラッグ & ドロップによるパイプライン構築。",
  },
  {
    id: "az900-q5",
    category: "Azure ML",
    difficulty: 2,
    question:
      "Azure Machine Learning でモデル学習に使うクラウドリソースとして最も適切なものを選びなさい。",
    choices: [
      "Compute Instance / Compute Cluster",
      "Storage Account のみ",
      "App Service",
      "Power BI",
    ],
    correctIndex: 0,
    explanation:
      "**Compute Instance**(個人開発用)・ **Compute Cluster**(分散学習用、スケール可能)が Azure ML の標準計算リソース。GPU 対応 VM も選べる。",
  },
  {
    id: "az900-q6",
    category: "AI Vision",
    difficulty: 2,
    question:
      "請求書 ・ 領収書から構造化データ(金額 ・ 日付 ・ 取引先など)を抽出するのに最も適切な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Vision(画像分析)",
      "Custom Vision",
      "Azure AI Document Intelligence",
      "Azure AI Face",
    ],
    correctIndex: 2,
    explanation:
      "**Azure AI Document Intelligence**(旧 Form Recognizer)は請求書 ・ レシート ・ ID 文書などの定型文書から構造化データを抽出する専用サービス。",
  },
  {
    id: "az900-q7",
    category: "AI Vision",
    difficulty: 2,
    question:
      "少数のラベル付き画像から **独自の画像分類モデル** を構築するのに最も適切な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Vision",
      "Custom Vision",
      "Document Intelligence",
      "Face",
    ],
    correctIndex: 1,
    explanation:
      "**Custom Vision** は独自データで画像分類 / 物体検出モデルを構築できるサービス。GUI 操作のみで転移学習を活用し、少データから実用精度のモデルを作れる。",
  },
  {
    id: "az900-q8",
    category: "AI Language",
    difficulty: 2,
    question:
      "Azure AI Language の機能として **不適切** なものを選びなさい。",
    choices: [
      "感情分析(Sentiment Analysis)",
      "個人識別情報(PII)検出",
      "音声合成(Text to Speech)",
      "主要フレーズ抽出",
    ],
    correctIndex: 2,
    explanation:
      "音声合成は **Azure AI Speech サービス** の機能。AI Language はテキストの感情分析 ・ 言語検出 ・ 主要フレーズ抽出 ・ エンティティ認識 ・ PII 検出 ・ 要約 ・ 質問応答などを担当。",
  },
  {
    id: "az900-q9",
    category: "AI Language",
    difficulty: 3,
    question:
      "FAQ 形式の質問応答ボットを構築するのに最も適切な Azure AI Language の機能を選びなさい。",
    choices: [
      "感情分析",
      "Question Answering(質問応答)",
      "Translator",
      "PII 検出",
    ],
    correctIndex: 1,
    explanation:
      "**Question Answering**(旧 QnA Maker の後継)は FAQ ペアを取り込んで質問応答ボットを構築する Azure AI Language の機能。生成 AI と組み合わせると更に強力。",
  },
  {
    id: "az900-q10",
    category: "Speech",
    difficulty: 2,
    question:
      "音声を文字起こし(音声 → テキスト)する Azure AI Speech の機能として最も適切なものを選びなさい。",
    choices: [
      "Speech to Text",
      "Text to Speech",
      "Speech Translation",
      "Speaker Recognition",
    ],
    correctIndex: 0,
    explanation:
      "**Speech to Text** が音声 → テキスト変換。Text to Speech は逆(音声合成)、Speech Translation は音声 → 翻訳、Speaker Recognition は話者識別。",
  },
  {
    id: "az900-q11",
    category: "Azure OpenAI",
    difficulty: 2,
    question:
      "Azure OpenAI Service で利用 **できない** モデルとして最も適切なものを選びなさい。",
    choices: [
      "GPT-4o",
      "DALL-E 3",
      "Whisper",
      "Llama 3(Meta)",
    ],
    correctIndex: 3,
    explanation:
      "Azure OpenAI Service は **OpenAI のモデルのみ** を提供(GPT 系・DALL-E・Whisper・Embeddings)。Llama / Mistral などの他社モデルは **Azure AI Foundry のモデルカタログ** から利用する。",
  },
  {
    id: "az900-q12",
    category: "Azure OpenAI",
    difficulty: 3,
    question:
      "Azure OpenAI Service と通常の OpenAI API の主な違いとして最も適切なものを選びなさい。",
    choices: [
      "提供されるモデルが全く異なる",
      "Azure 上のエンタープライズ機能(プライベートネットワーク、Azure AD 認証、リージョン選択など)が利用可",
      "Azure OpenAI のほうが必ず安い",
      "Azure OpenAI は無料",
    ],
    correctIndex: 1,
    explanation:
      "Azure OpenAI は **モデルは同等(OpenAI のもの)**だが、**Azure のエンタープライズ機能(VNet、Private Endpoint、Azure AD、リージョン制御、コンプライアンス)** が利用できる点が最大の違い。",
  },
  {
    id: "az900-q13",
    category: "プロンプト",
    difficulty: 2,
    question:
      "プロンプト内に **入出力の例を 1 〜 数個示してから本来のタスクを問う** 手法として最も適切なものを選びなさい。",
    choices: [
      "Zero-shot プロンプティング",
      "Few-shot プロンプティング",
      "Chain-of-Thought",
      "ファインチューニング",
    ],
    correctIndex: 1,
    explanation:
      "**Few-shot プロンプティング** は少数の例を示すことでパターンを理解させる手法。例なしの **Zero-shot** より精度が高くなることが多い。",
  },
  {
    id: "az900-q14",
    category: "RAG",
    difficulty: 3,
    question:
      "社内ドキュメントを使った Q&A を構築する際、Azure OpenAI Service と組み合わせる検索基盤として最も適切なものを選びなさい。",
    choices: [
      "Azure AI Search",
      "Azure SQL Database",
      "Azure Storage Queue",
      "Azure Service Bus",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Search**(旧 Cognitive Search)は **全文検索 + ベクトル検索 + ハイブリッド検索** に対応し、Azure OpenAI と組み合わせる **RAG パターンの標準** ストレージ。",
  },
  {
    id: "az900-q15",
    category: "Azure AI Search",
    difficulty: 3,
    question:
      "Azure AI Search の AI Enrichment(AI 拡充)で **できない** ものを選びなさい。",
    choices: [
      "PDF 文書からの OCR(Document Intelligence)",
      "言語検出 ・ 感情分析(AI Language)",
      "画像説明文の自動付与(AI Vision)",
      "BIOS 設定の自動変更",
    ],
    correctIndex: 3,
    explanation:
      "AI Enrichment はインデックス作成時に **Azure AI サービスを自動適用** する仕組み。OCR / 言語検出 / 感情 / 画像説明など。BIOS 設定はインフラ操作で範囲外。",
  },
  {
    id: "az900-q16",
    category: "Copilot",
    difficulty: 2,
    question:
      "ノーコード / ローコードでカスタム会話 Bot(エージェント)を構築するための Microsoft のサービスとして最も適切なものを選びなさい。",
    choices: [
      "Microsoft 365 Copilot",
      "Microsoft Copilot Studio",
      "GitHub Copilot",
      "Bing Chat Enterprise",
    ],
    correctIndex: 1,
    explanation:
      "**Microsoft Copilot Studio** はノーコード / ローコードでカスタム Copilot(エージェント)を構築できる Power Platform の一部。Topics / Entities / Skills を GUI で設計。",
  },
  {
    id: "az900-q17",
    category: "Copilot",
    difficulty: 1,
    question:
      "VS Code などの IDE 内でコード補完 ・ 説明 ・ テスト生成を行う Microsoft の AI ツールとして最も適切なものを選びなさい。",
    choices: [
      "Microsoft 365 Copilot",
      "GitHub Copilot",
      "Power Automate",
      "Bing Chat",
    ],
    correctIndex: 1,
    explanation:
      "**GitHub Copilot** は IDE 統合のコードアシスタント。Microsoft 365 Copilot は Word / Excel / Outlook 等の Office 統合 AI。",
  },
  {
    id: "az900-q18",
    category: "ユースケース",
    difficulty: 3,
    question:
      "コールセンターの音声録音から顧客感情の傾向を分析するパイプラインで使うサービスの組み合わせとして最も適切なものを選びなさい。",
    choices: [
      "AI Vision → AI Language",
      "Speech to Text → AI Language(感情分析)",
      "Translator → Document Intelligence",
      "Custom Vision → Face",
    ],
    correctIndex: 1,
    explanation:
      "**Speech to Text で音声 → テキスト → AI Language の感情分析** が標準パターン。BI 可視化に Power BI を組み合わせるのも頻出。",
  },
  {
    id: "az900-q19",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "Azure AI サービスをパブリックインターネットを通さず VNet 内のみで利用する仕組みとして最も適切なものを選びなさい。",
    choices: [
      "Private Endpoint(プライベートエンドポイント)",
      "Public IP",
      "Application Gateway",
      "Azure Front Door",
    ],
    correctIndex: 0,
    explanation:
      "**Private Endpoint** で Azure AI サービスを VNet 内のプライベート IP のみで利用可能。データがインターネットに出ないため、エンタープライズ要件で重要。",
  },
  {
    id: "az900-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "AI-900 合格後、Azure の AI 認定で次に挑戦するのに最も適切なものを選びなさい。",
    choices: [
      "AZ-900(Azure Fundamentals)",
      "AI-102(Azure AI Engineer Associate)",
      "MS-900(Microsoft 365 Fundamentals)",
      "DP-900(Azure Data Fundamentals)",
    ],
    correctIndex: 1,
    explanation:
      "AI-900 は Fundamentals。次の **Associate レベル** が **AI-102(Azure AI Engineer Associate)** で、Azure AI / OpenAI / Cognitive Search を実装する力を測る。",
  },
  {
    id: "az900-q21",
    category: "責任ある AI",
    difficulty: 2,
    question:
      "Microsoft の責任ある AI 6 原則として **誤っているもの** を選びなさい。",
    choices: [
      "Fairness(公平性)",
      "Reliability & Safety",
      "Privacy & Security",
      "Maximum Throughput(最大スループット)",
    ],
    correctIndex: 3,
    explanation:
      "**Microsoft Responsible AI 6 原則**: Fairness / Reliability & Safety / Privacy & Security / Inclusiveness / Transparency / Accountability。スループットは性能指標で原則ではない。",
  },
  {
    id: "az900-q22",
    category: "Azure ML",
    difficulty: 2,
    question:
      "**Azure Machine Learning** の役割として最も適切なものを選びなさい。",
    choices: [
      "ML モデルの学習 ・ デプロイ ・ 運用を統合管理する Azure サービス",
      "Power BI のレポート作成専用ツール",
      "Excel の代替",
      "リレーショナル DB",
    ],
    correctIndex: 0,
    explanation:
      "**Azure Machine Learning(Azure ML)** は ML の **データ ・ 学習 ・ デプロイ ・ MLOps** を統合管理するプラットフォーム。AutoML / Designer(ノーコード)/ SDK / CLI v2 を提供。",
  },
  {
    id: "az900-q23",
    category: "Azure OpenAI",
    difficulty: 2,
    question:
      "**Azure OpenAI Service** で利用できるモデルファミリとして **誤っているもの** を選びなさい。",
    choices: [
      "GPT-4 / GPT-4o",
      "DALL-E(画像生成)",
      "Whisper(音声認識)",
      "Llama 3(Meta)",
    ],
    correctIndex: 3,
    explanation:
      "**Azure OpenAI は OpenAI モデルのみ**(GPT-4 / GPT-4o / DALL-E / Whisper / text-embedding-3 等)。**Llama 3 は Azure AI Foundry / Model Catalog 経由** で別途利用可能。",
  },
  {
    id: "az900-q24",
    category: "Vision",
    difficulty: 2,
    question:
      "画像内のテキスト(印字 + 手書き混在)を抽出したい。最適な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Vision(Read API)",
      "Azure AI Speech",
      "Azure AI Language",
      "Azure AI Translator",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Vision の Read API**(旧 OCR)は印字 + 手書きを含むテキスト抽出を提供。Document Intelligence(旧 Form Recognizer)は構造化文書解析の上位サービス。",
  },
  {
    id: "az900-q25",
    category: "Language",
    difficulty: 2,
    question:
      "顧客サポートのチャットボットを実装したい。**意図(Intent)・ エンティティ抽出** に最適な Azure AI サービスを選びなさい。",
    choices: [
      "Azure AI Language - CLU(Conversational Language Understanding)",
      "Azure AI Speech",
      "Azure AI Vision",
      "Azure AI Translator",
    ],
    correctIndex: 0,
    explanation:
      "**CLU(Conversational Language Understanding)** は **Intent + Entity 抽出** で自然言語理解を提供(旧 LUIS の後継)。Bot Service + CLU + QnA(Custom Question Answering)が定番構成。",
  },
  {
    id: "az900-q26",
    category: "Speech",
    difficulty: 2,
    question:
      "Azure AI Speech が提供する機能として **誤っているもの** を選びなさい。",
    choices: [
      "Speech to Text(音声認識)",
      "Text to Speech(音声合成)",
      "Speech Translation(音声翻訳)",
      "OCR(画像から文字抽出)",
    ],
    correctIndex: 3,
    explanation:
      "**Azure AI Speech** は STT / TTS / Speech Translation / Speaker Recognition / Custom Speech を提供。**OCR は Azure AI Vision の Read API** の機能。",
  },
  {
    id: "az900-q27",
    category: "Document Intelligence",
    difficulty: 3,
    question:
      "請求書 ・ レシート ・ ID カードなど **構造化文書から表 ・ Key-Value を抽出** する Azure AI サービスを選びなさい。",
    choices: [
      "Document Intelligence(旧 Form Recognizer)",
      "Azure AI Search",
      "Azure AI Vision Image Analysis",
      "Azure AI Translator",
    ],
    correctIndex: 0,
    explanation:
      "**Document Intelligence(旧 Form Recognizer)** は **請求書 / レシート / ID / 名刺 / 契約書 / 表 / Key-Value 抽出** の構造化文書解析。Custom Model でテンプレ学習も可能。",
  },
  {
    id: "az900-q28",
    category: "AutoML",
    difficulty: 2,
    question:
      "Azure ML の **AutoML** に関する説明として **誤っているもの** を選びなさい。",
    choices: [
      "アルゴリズム選択 ・ ハイパーパラメータ探索 ・ 特徴量エンジニアリングを自動化",
      "Classification / Regression / Forecasting / NLP / Computer Vision タスクをサポート",
      "primary_metric を指定して最適化目標を選べる",
      "GPU を直接 SSH で操作する機能",
    ],
    correctIndex: 3,
    explanation:
      "**AutoML は GUI / SDK で完結** し SSH 操作は不要。Classification / Regression / Forecasting / NLP / CV / Many Models をサポート。",
  },
  {
    id: "az900-q29",
    category: "Copilot",
    difficulty: 2,
    question:
      "**Microsoft 365 Copilot** の特徴として最も適切なものを選びなさい。",
    choices: [
      "Word / Excel / PowerPoint / Outlook / Teams 内で文章生成 ・ 要約 ・ Q&A を提供",
      "GPU クラスタを直接借りる",
      "Azure 仮想マシンを起動する",
      "DNS 設定を自動化する",
    ],
    correctIndex: 0,
    explanation:
      "**Microsoft 365 Copilot** は Office アプリ内で **GPT-4 + Microsoft Graph(社内データ)** を統合した業務 AI。**Copilot Studio** で独自 Copilot を作れる。",
  },
  {
    id: "az900-q30",
    category: "AI Foundry",
    difficulty: 2,
    question:
      "**Azure AI Foundry**(旧 Azure AI Studio)の主眼として最も適切なものを選びなさい。",
    choices: [
      "生成 AI / Agent / Prompt Flow / 1700+ モデルカタログ / 評価 / Content Safety を統合",
      "DBA 専用ツール",
      "古典 ML 専用",
      "Power Platform の代替",
    ],
    correctIndex: 0,
    explanation:
      "**Azure AI Foundry** は **生成 AI 時代の Azure AI 統合スタジオ**。Model Catalog / Prompt Flow / Agent / Evaluation / Content Safety / 1700+ モデルを統合。AI-102 の中核。",
  },
  { id: "az900-q31", category: "AI 種類", difficulty: 2, question: "Microsoft が分類する AI ワークロード 5 種に **含まれない** ものを選びなさい。", choices: ["機械学習", "コンピュータビジョン", "自然言語処理", "ブロックチェーン"], correctIndex: 3, explanation: "**Microsoft の AI 5 ワークロード**: 機械学習 / コンピュータビジョン / NLP / Document Intelligence / Generative AI(2024 更新)。ブロックチェーンは別領域。" },
  { id: "az900-q32", category: "ML 種類", difficulty: 2, question: "**回帰(Regression)・ 分類(Classification)・ クラスタリング(Clustering)** で **分類** に該当するタスクを選びなさい。", choices: ["スパムメール判定(spam/not spam)", "売上予測", "顧客セグメント発見", "次元削減"], correctIndex: 0, explanation: "**分類 = 離散ラベル予測**(spam / not)。**回帰 = 連続値予測**(売上)。**クラスタリング = ラベルなしグルーピング**(セグメント)。" },
  { id: "az900-q33", category: "ML 評価", difficulty: 3, question: "**混同行列(Confusion Matrix)** の **True Positive(TP)** の意味を選びなさい。", choices: ["正と予測し実際も正", "正と予測したが実際は負", "負と予測し実際も負", "予測なし"], correctIndex: 0, explanation: "**TP**: 正 / 正。**FP**: 正予測 / 実際負(誤検知)。**FN**: 負予測 / 実際正(見逃し)。**TN**: 負 / 負。Precision = TP/(TP+FP)、Recall = TP/(TP+FN)。" },
  { id: "az900-q34", category: "Vision", difficulty: 3, question: "**画像分類 ・ 物体検出 ・ セグメンテーション** の違いで **物体検出** に該当するものを選びなさい。", choices: ["画像内の複数物体に BBox + クラスラベル", "1 画像 1 クラス", "ピクセル単位ラベル", "顔の特徴抽出のみ"], correctIndex: 0, explanation: "**Object Detection**: BBox + ラベル(複数物体)。**Classification**: 1 画像 1 クラス。**Segmentation**: ピクセル単位。**Custom Vision** で 3 タスクに対応。" },
  { id: "az900-q35", category: "Custom Vision", difficulty: 2, question: "**Azure AI Custom Vision** の用途として最も適切なものを選びなさい。", choices: ["独自データで画像分類 ・ 物体検出モデルを GUI 学習", "汎用 OCR", "音声合成", "翻訳"], correctIndex: 0, explanation: "**Custom Vision**: 数十枚から GUI で学習 → API デプロイ。Pre-built Vision(Read API / Image Analysis)では足りない業界特化画像認識に。" },
  { id: "az900-q36", category: "NLP", difficulty: 2, question: "**Azure AI Language - Sentiment Analysis** の出力として最も適切なものを選びなさい。", choices: ["Positive / Negative / Neutral / Mixed + スコア", "翻訳テキスト", "音声", "BBox"], correctIndex: 0, explanation: "**Sentiment Analysis**: 文 ・ 文書 ・ 観点(Aspect-based)単位で感情判定。レビュー分析 ・ SNS 監視 ・ コールセンター品質管理に。" },
  { id: "az900-q37", category: "NLP", difficulty: 3, question: "**Key Phrase Extraction** の用途として最も適切なものを選びなさい。", choices: ["文書から重要キーワード ・ 主題を抽出", "翻訳", "音声生成", "BBox"], correctIndex: 0, explanation: "**Key Phrase Extraction**: 名詞句中心の重要キーワード抽出。**要約 / タグ付け / 検索改善** に。Custom NER は固有表現抽出。" },
  { id: "az900-q38", category: "Translator", difficulty: 2, question: "**Azure AI Translator** が **対応する言語数の目安** として最も適切なものを選びなさい。", choices: ["100 言語以上", "10 言語", "5 言語", "1 言語のみ"], correctIndex: 0, explanation: "**Azure Translator**: 100+ 言語のテキスト翻訳。**Document Translation**(レイアウト保持)・ **Custom Translator**(ドメイン特化 fine-tune)も提供。" },
  { id: "az900-q39", category: "Bot", difficulty: 3, question: "**Azure AI Bot Service** の役割として最も適切なものを選びなさい。", choices: ["チャットボットの構築 ・ デプロイ ・ チャネル展開(Teams / Web / LINE 等)", "翻訳", "DB 接続", "音声生成"], correctIndex: 0, explanation: "**Azure AI Bot Service**: Bot Framework SDK + マルチチャネル統合(Teams / Web Chat / Telegram / LINE 等)。CLU + QnA / Custom Question Answering + OpenAI と組合せ。" },
  { id: "az900-q40", category: "Anomaly Detector", difficulty: 3, question: "**Anomaly Detector**(Univariate / Multivariate)の用途として最も適切なものを選びなさい。", choices: ["時系列データから異常を検出(IoT / ビジネス)", "画像分類", "翻訳", "音声生成"], correctIndex: 0, explanation: "**Anomaly Detector**: 時系列 1 変量 / 多変量での異常 ・ 変化点検出。**メトリクス監視 ・ 不正検知 ・ IoT 製造ライン** に。2024 廃止予定、Azure ML / Foundry へ移行。" },
  { id: "az900-q41", category: "AI 公平性", difficulty: 3, question: "**Fairlearn** などで測る公平性指標として **誤っているもの** を選びなさい。", choices: ["Demographic Parity", "Equalized Odds", "Equal Opportunity", "GPU Equity"], correctIndex: 3, explanation: "**Fairlearn 公平性**: Demographic Parity / Equalized Odds / Equal Opportunity / Predictive Parity。GPU Equity は公平性指標ではない。" },
  { id: "az900-q42", category: "Workspaces", difficulty: 2, question: "**Azure ML Workspace** の典型的な構成要素として **誤っているもの** を選びなさい。", choices: ["Compute(クラスタ / インスタンス)", "Datastore(データ接続)", "Experiment / Run", "オンプレ物理サーバ"], correctIndex: 3, explanation: "**Workspace**: Compute / Datastore / Environment / Job / Endpoint / Model / Dataset。**Compute Instance / Cluster** がコード実行基盤、Datastore は Storage 接続抽象化。" },
  { id: "az900-q43", category: "Designer", difficulty: 3, question: "**Azure ML Designer** の特徴として最も適切なものを選びなさい。", choices: ["ノーコードのドラッグ&ドロップ ML パイプライン構築", "DB クエリ", "GPU 制御", "認証管理"], correctIndex: 0, explanation: "**Azure ML Designer**: Drag&Drop でデータ → 前処理 → 学習 → 評価 → デプロイ。**PoC / 教育 / 非エンジニア向け**。SDK / CLI v2 が本番運用には推奨。" },
  { id: "az900-q44", category: "MLOps", difficulty: 3, question: "Azure ML の **エンドポイント** で **リアルタイム推論** に最適なものを選びなさい。", choices: ["Online Endpoint(Managed)", "Batch Endpoint", "Compute Cluster", "Storage Account"], correctIndex: 0, explanation: "**Online Endpoint(Managed)**: REST API リアルタイム推論。**Batch Endpoint**: 大量バッチ。**AKS Endpoint**(レガシー)は GPU / カスタム要件で。" },
  { id: "az900-q45", category: "Azure OpenAI", difficulty: 2, question: "**Azure OpenAI Service** が **OpenAI API** と異なる主要点として最も適切なものを選びなさい。", choices: ["Azure リソース化 + Enterprise SLA + ネットワーク隔離 + データプライバシ保証", "完全同じ", "Azure の方が遅い", "OpenAI のラッパ"], correctIndex: 0, explanation: "**Azure OpenAI**: Azure リソース化で **Private Endpoint / Entra ID / SLA 99.9% / Data Residency**。Enterprise 要件に対応。モデル本体は OpenAI と同じ。" },
  { id: "az900-q46", category: "Copilot", difficulty: 2, question: "**Copilot for Microsoft 365** の主用途として最も適切なものを選びなさい。", choices: ["Office 内で文章生成 ・ 要約 ・ Q&A + Microsoft Graph で社内データ参照", "外部 SaaS のみ", "GPU 学習", "OS 起動"], correctIndex: 0, explanation: "**Copilot for M365**: GPT-4 + Microsoft Graph(社内 Mail / Docs / Teams / Calendar)で文脈付き AI 補助。**Word / Excel / PowerPoint / Outlook / Teams / OneDrive** 内で利用可。" },
  { id: "az900-q47", category: "Copilot Studio", difficulty: 3, question: "**Microsoft Copilot Studio** の用途として最も適切なものを選びなさい。", choices: ["独自 Copilot(チャットボット)をローコードで構築", "DB 管理", "GPU 制御", "認証のみ"], correctIndex: 0, explanation: "**Copilot Studio**(旧 Power Virtual Agents 後継): ローコード で **業務カスタム Copilot** 構築。Topic / Action / Knowledge / Plugin で拡張。Bot Service より高レベル。" },
  { id: "az900-q48", category: "Cost", difficulty: 3, question: "Azure AI サービスのコスト最適化として **誤っているもの** を選びなさい。", choices: ["Free tier 活用 + Reserved Capacity(Azure OpenAI PTU)", "適切なモデル選択(GPT-4o-mini / GPT-3.5)", "API バッチ化", "全リクエストを GPT-4 へ"], correctIndex: 3, explanation: "**コスト最適化**: 軽量モデル(Mini / 3.5)で十分なタスクは振り替え + Cache + PTU(安定大規模)+ Batch。全 GPT-4 はコスト爆発。" },
  { id: "az900-q49", category: "Responsible AI", difficulty: 3, question: "**Responsible AI Standard** で **Microsoft が義務付けている** 評価として最も適切なものを選びなさい。", choices: ["Impact Assessment(影響評価)+ Red Teaming + Fit for Purpose 検証", "速度測定", "GPU 占有率", "DB 容量"], correctIndex: 0, explanation: "**Microsoft Responsible AI Impact Assessment**: 全社内 AI プロジェクトに義務化。**Red Teaming**(敵対的テスト)・ **Limited Access Review**(高リスク AI 制限利用)も。" },
  { id: "az900-q50", category: "次のステップ", difficulty: 1, question: "AI-900 合格後の **Azure AI 上位認定** として最も適切なものを選びなさい。", choices: ["AI-102(AI Engineer Associate)or DP-100(Data Scientist Associate)", "MS-900", "AZ-104", "再受験"], correctIndex: 0, explanation: "**AI-900 → AI-102 / DP-100 / DP-203** が王道。AI Engineer 寄りは AI-102、Data Scientist 寄りは DP-100、データ基盤は DP-203。" },
  { id: "az900-q51", category: "Azure OpenAI", difficulty: 3, question: "**Azure OpenAI** で **PTU(Provisioned Throughput Unit)** の役割として最も適切なものを選びなさい。", choices: ["時間あたりトークン処理量を予約 → 安定 Latency + 大量処理コスト効率", "GPU 直接借り", "認証", "DB 管理"], correctIndex: 0, explanation: "**PTU**: 月単位でスループット予約 → **大量 ・ 安定ワークロード** に最適。**従量(Pay-as-you-go)** は変動的 ・ 開発向け。" },
  { id: "az900-q52", category: "AI Foundry", difficulty: 3, question: "**Azure AI Foundry** の **Model Catalog** に **含まれない** モデルを選びなさい。", choices: ["Azure OpenAI(GPT-4 / 4o)", "Meta Llama / Microsoft Phi", "Mistral / Cohere", "macOS Siri"], correctIndex: 3, explanation: "**Model Catalog**(1700+): OpenAI / Anthropic Claude(Bedrock 連携)・ Meta Llama / Microsoft Phi / Mistral / Cohere / DBRX / Qwen / Hugging Face。Siri は無関係。" },
  { id: "az900-q53", category: "Prompt Flow", difficulty: 3, question: "**Azure AI Foundry の Prompt Flow** の役割として最も適切なものを選びなさい。", choices: ["プロンプト + Tool + 評価のオーケストレーション(LangChain 風)", "GUI 作成", "DB", "認証"], correctIndex: 0, explanation: "**Prompt Flow**: DAG ベースの LLM パイプライン定義。**Variant 比較 / Bulk Evaluation / トレース可視化**。デプロイで API 化も。" },
  { id: "az900-q54", category: "Agent", difficulty: 3, question: "**Azure AI Agent Service** の特徴として最も適切なものを選びなさい。", choices: ["Function Calling + Knowledge + Code Interpreter を統合", "GUI のみ", "Excel 専用", "DB 専用"], correctIndex: 0, explanation: "**AI Agent Service**(2024 Preview): Assistants API の Azure 版 + Bing Search / SharePoint / Azure Functions 統合。Foundry 内で構築 ・ デプロイ。" },
  { id: "az900-q55", category: "Search", difficulty: 3, question: "**Azure AI Search**(旧 Cognitive Search)の **Hybrid Search** の特徴として最も適切なものを選びなさい。", choices: ["BM25 + Vector + Semantic Reranker の組合せ", "全文検索のみ", "Vector のみ", "認証"], correctIndex: 0, explanation: "**Hybrid Search**: キーワード + 意味検索 + Reranker で **RAG の retrieval 品質最大化**。Azure OpenAI の On Your Data でデフォルト。" },
  { id: "az900-q56", category: "On Your Data", difficulty: 3, question: "**Azure OpenAI On Your Data** の動作として最も適切なものを選びなさい。", choices: ["Azure AI Search + GPT で社内データ参照付き回答(マネージド RAG)", "GPT のみ", "DB 直接", "認証"], correctIndex: 0, explanation: "**On Your Data**(旧 Bring Your Own Data): Azure AI Search + GPT 統合 RAG。**数クリックで社内 RAG 構築**。Studio から設定可。" },
  { id: "az900-q57", category: "Content Safety", difficulty: 3, question: "**Azure AI Content Safety** が検出する **4 カテゴリ** として正しいものを選びなさい。", choices: ["Hate / Self-harm / Sexual / Violence", "Privacy / Security / Network / DB", "Sales / Marketing / Finance / HR", "GPU / CPU / Storage / Network"], correctIndex: 0, explanation: "**Content Safety**: 4 カテゴリ × Severity 0-7 + Prompt Shield + Groundedness + Protected Material。Azure OpenAI 標準統合。" },
  { id: "az900-q58", category: "DALL-E", difficulty: 3, question: "**Azure OpenAI DALL-E 3** の特徴として最も適切なものを選びなさい。", choices: ["プロンプトの忠実度向上 + 自動プロンプト書き換え", "テキストのみ", "音声", "DBA"], correctIndex: 0, explanation: "**DALL-E 3**(2023): プロンプト忠実度大幅向上 + 安全フィルタ強化。**Azure 経由は Enterprise SLA + Network 隔離**。GPT-4o との統合で対話的画像生成も。" },
  { id: "az900-q59", category: "Whisper", difficulty: 3, question: "**Azure OpenAI Whisper** の用途として最も適切なものを選びなさい。", choices: ["多言語音声認識 + 翻訳", "音声合成", "DB クエリ", "認証"], correctIndex: 0, explanation: "**Whisper**: OpenAI 開発の音声認識(99 言語)・ 翻訳。**Azure 経由で Enterprise SLA**。**Speech Service** の汎用版で Real-time + 高精度 ・ ノイズ耐性。" },
  { id: "az900-q60", category: "Copilot", difficulty: 3, question: "**GitHub Copilot Enterprise** が **Individual / Business** より優れる点として最も適切なものを選びなさい。", choices: ["社内コードベース連携 + Pull Request サマリ + 知識ベース検索", "速度", "GPU 割当", "認証"], correctIndex: 0, explanation: "**Copilot Enterprise**(2024): 社内 GitHub Repo 連携 + PR 要約 + Internal Knowledge Base 検索。**Business より $20/month/user 高い** が大企業向け。" },
  { id: "az900-q61", category: "Cost", difficulty: 3, question: "**Azure OpenAI Batch API** の特徴として最も適切なものを選びなさい。", choices: ["大量バッチを 50% 割引 + 24h 以内に処理", "リアルタイム", "GUI 専用", "DB バックアップ"], correctIndex: 0, explanation: "**Batch API**(OpenAI / Azure OpenAI): 非同期 ・ 24h SLA で **50% 割引**。大量データ前処理 ・ 評価 ・ 要約に最適。" },
  { id: "az900-q62", category: "Compliance", difficulty: 3, question: "**Azure AI** の **規制対応** として **正しい記述** を選びなさい。", choices: ["HIPAA / GDPR / FedRAMP / ISO 27001 など多数準拠", "規制対応なし", "GDPR のみ", "完全自由"], correctIndex: 0, explanation: "**Azure AI**: HIPAA / GDPR / FedRAMP High / ISO 27001 / SOC 2 / CCPA 等準拠。**Compliance Manager** で監査支援。エンタープライズ採用の基盤。" },
  { id: "az900-q63", category: "Models in Foundry", difficulty: 3, question: "**Azure AI Foundry** で **Phi-3** の特徴として最も適切なものを選びなさい。", choices: ["Microsoft 開発の小型高性能 LLM(オープン)", "GPT のラッパ", "画像専用", "DB"], correctIndex: 0, explanation: "**Phi-3**(Microsoft 2024): 3.8B / 7B / 14B の小型 LLM。**Education / Curated Data で学習** → 同サイズの他モデル超え性能。Edge / オンデバイス向け。" },
  { id: "az900-q64", category: "Connectors", difficulty: 3, question: "**Microsoft Copilot for M365** が **社内データを参照** する仕組みとして最も適切なものを選びなさい。", choices: ["Microsoft Graph(Mail / Docs / Teams / Calendar / SharePoint 等を横断)", "DB 直接", "Web スクレイピング", "認証のみ"], correctIndex: 0, explanation: "**Microsoft Graph**: ユーザの M365 データを統合 API で公開。**Copilot for M365 は Graph 経由で文脈付き AI 補助**。** Copilot Studio Connector** で外部 SaaS も統合可。" },
  { id: "az900-q65", category: "Pricing", difficulty: 3, question: "**Copilot for Microsoft 365** の典型的なライセンス価格(2024)として最も近いものを選びなさい。", choices: ["$30 / user / month(M365 ライセンスに追加)", "無料", "$5 / user", "$1000 / user"], correctIndex: 0, explanation: "**Copilot for M365**: $30 / user / month(M365 E3 / E5 / Business Premium 等の追加)。**最小契約数** などの制約あり。" },
  { id: "az900-q66", category: "AI 基礎", difficulty: 2, question: "**ML / DL / Generative AI** の包含関係として最も適切なものを選びなさい。", choices: ["AI ⊇ ML ⊇ DL ⊇ Generative AI", "全て独立", "AI = ML", "DL ⊃ AI"], correctIndex: 0, explanation: "**包含関係**: AI(広い)⊇ ML(データから学習)⊇ DL(NN ベース)⊇ Generative AI(生成系 ・ LLM / Diffusion)。** Symbolic AI**(古典)は ML の外側だが AI の内側。" },
  { id: "az900-q67", category: "ML タスク", difficulty: 2, question: "**分類(Classification)** と **回帰(Regression)** の違いとして最も適切なものを選びなさい。", choices: ["分類=カテゴリ予測、回帰=数値予測", "両者同じ", "分類=学習", "回帰=推論"], correctIndex: 0, explanation: "**Supervised Learning**: 分類(スパム / 病気判定)・ 回帰(価格 / 需要予測)。**Multi-Class / Multi-Label**(ラベル複数)/ **Ordinal Regression**(順序付き分類)もある。" },
  { id: "az900-q68", category: "Azure ML", difficulty: 2, question: "**Azure Machine Learning Studio** の主要機能として **誤っているもの** を選びなさい。", choices: ["AutoML / Designer(GUI)/ Notebook", "Pipelines / Endpoint / Model Registry", "Responsible AI Dashboard", "GPU 直販"], correctIndex: 3, explanation: "**Azure ML**: フルマネージド ML プラットフォーム。**AutoML / Designer(ドラッグ&ドロップ)/ Notebook / Job / Pipeline / Endpoint / Registry / Responsible AI**。GPU は Compute から確保。" },
  { id: "az900-q69", category: "Vision", difficulty: 2, question: "**Azure AI Vision** が提供する機能として **誤っているもの** を選びなさい。", choices: ["画像分類 / Object Detection", "OCR / Read API", "Face / Spatial Analysis", "DB 設計"], correctIndex: 3, explanation: "**Azure AI Vision**(旧 Computer Vision): 画像解析(Caption / Tag / OCR / Face)・ **Custom Vision**(独自分類 / OD)・ **Spatial Analysis**(人流)・ **Florence**(Vision Foundation Model)。" },
  { id: "az900-q70", category: "NLP", difficulty: 2, question: "**Azure AI Language** が提供する機能として **誤っているもの** を選びなさい。", choices: ["Sentiment / Key Phrase / Entity Recognition", "PII 検出 / 翻訳(Translator)", "Q&A(CLU/Orchestration)/ Summarization", "DB 直接 SQL"], correctIndex: 3, explanation: "**Azure AI Language**(旧 Text Analytics / LUIS): Sentiment / Entity / Key Phrase / PII / Translator(別サービス)・ **CLU / Custom Question Answering / Summarization**。" },
  { id: "az900-q71", category: "Speech", difficulty: 2, question: "**Azure AI Speech** の機能として **誤っているもの** を選びなさい。", choices: ["Speech to Text(STT)", "Text to Speech(TTS)/ Custom Voice", "Speech Translation / Speaker Recognition", "DB バックアップ"], correctIndex: 3, explanation: "**Azure AI Speech**: STT / TTS / Translation / Speaker / Pronunciation Assessment。**Neural Voice / Custom Neural Voice**(著名人声 ・ ブランド声)。Multi-Lang 100+。" },
  { id: "az900-q72", category: "Document AI", difficulty: 2, question: "**Azure AI Document Intelligence**(旧 Form Recognizer)の用途として最も適切なものを選びなさい。", choices: ["請求書 / 領収書 / ID / 契約書から構造化データ抽出", "テキスト要約", "翻訳", "認証"], correctIndex: 0, explanation: "**Document Intelligence**: Prebuilt(Invoice / Receipt / ID / W-2 / 1040 / Health Insurance Card)・ **Custom Model**(独自帳票)・ **Layout API**(汎用)・ **Generative AI Mode**(2024+)。" },
  { id: "az900-q73", category: "OpenAI", difficulty: 2, question: "**Azure OpenAI Service** の特徴として **誤っているもの** を選びなさい。", choices: ["GPT-4o / o1 / o3 等を企業向け SLA + Compliance で提供", "Bring Your Own Data(RAG)", "Content Filter / Abuse Monitoring", "顧客データを学習に流用"], correctIndex: 3, explanation: "**Azure OpenAI**: 顧客データは **学習に使用されず** Azure テナント内に隔離 ・ **HIPAA / FedRAMP / GDPR 対応** ・ Region 選択可。OpenAI 直接 API より企業利用に適合。" },
  { id: "az900-q74", category: "AI Foundry", difficulty: 2, question: "**Azure AI Foundry**(旧 AI Studio)の役割として最も適切なものを選びなさい。", choices: ["生成 AI / Agent / RAG / Fine-tune の統合開発環境", "DB GUI", "認証 SSO", "GPU 提供"], correctIndex: 0, explanation: "**Foundry**(2024 リブランド): Hub + Project 階層。**Model Catalog(GPT / Llama / Phi / Mistral)・ Prompt Flow / Agent Service / Eval / Tracing / Content Safety / Fine-tuning**。Microsoft の AI 統合 SaaS。" },
  { id: "az900-q75", category: "Responsible AI", difficulty: 2, question: "**Microsoft Responsible AI 原則** として **誤っているもの** を選びなさい。", choices: ["公平性 / 信頼性 ・ 安全性", "プライバシ ・ セキュリティ / 包括性", "透明性 / 説明責任", "GPU 性能"], correctIndex: 3, explanation: "**Microsoft RAI 6 原則**: Fairness / Reliability & Safety / Privacy & Security / Inclusiveness / Transparency / Accountability。**Responsible AI Dashboard / Standard v2** で実装。" },
  { id: "az900-q76", category: "Bot", difficulty: 2, question: "**Azure AI Bot Service** の利用シーンとして最も適切なものを選びなさい。", choices: ["コールセンター ・ Web チャット ・ Teams 統合 Bot", "DB ETL", "GPU 学習", "認証"], correctIndex: 0, explanation: "**Bot Service**: Bot Framework SDK + Channel(Teams / Web / Slack / WhatsApp)。**Composer**(Low-Code)・ **CLU / QA** 連携 ・ **Copilot Studio**(旧 Power Virtual Agents)で自然言語ボット。" },
  { id: "az900-q77", category: "Copilot Studio", difficulty: 2, question: "**Microsoft Copilot Studio** の用途として最も適切なものを選びなさい。", choices: ["Low-Code で社内 Copilot ・ Agent 構築 ・ Plugin 化", "GPU 配布", "認証", "Cost 削減のみ"], correctIndex: 0, explanation: "**Copilot Studio**(旧 Power Virtual Agents): GUI ベースで Copilot 拡張 ・ Custom Agent ・ Plugin 構築。**M365 Copilot / Azure OpenAI / Power Platform** と統合。" },
  { id: "az900-q78", category: "Search", difficulty: 2, question: "**Azure AI Search** の特徴として最も適切なものを選びなさい。", choices: ["全文検索 + Vector Search + Semantic Ranker → RAG 用ベース", "OLTP DB", "GPU 訓練", "認証"], correctIndex: 0, explanation: "**Azure AI Search**(旧 Cognitive Search): 全文 + Vector + Hybrid。**Semantic Ranker**(L2 Reranking)・ **Integrated Vectorization**(自動 Embedding)。Azure RAG の中核。" },
  { id: "az900-q79", category: "Pricing", difficulty: 2, question: "**Azure AI サービスの課金単位** として典型的なものを選びなさい。", choices: ["Transaction 数 / Token 数 / 時間", "GPU 単位のみ", "固定月額のみ", "認証回数のみ"], correctIndex: 0, explanation: "**Azure AI 課金**: トランザクション(Vision / Language)・ Token(OpenAI / Foundry)・ 時間(Speech / Bot)・ ストレージ。**Free Tier / Standard / PTU(Provisioned)** などプラン別。" },
  { id: "az900-q80", category: "Cert", difficulty: 1, question: "**AI-900** の **位置づけ** として最も適切なものを選びなさい。", choices: ["Fundamentals(最易レベル ・ Microsoft AI / ML 入門)", "Associate", "Expert", "Specialty"], correctIndex: 0, explanation: "**AI-900**: Microsoft Certified: Azure AI Fundamentals。**AZ-900 と並ぶ最易レベル**。**ビジネス + 技術入門者**向け。次は **AI-102**(AI Engineer Associate)へ。" },
];
