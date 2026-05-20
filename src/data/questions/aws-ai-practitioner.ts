import type { Question } from "@/types/content";

export const awsAiPractitionerQuestions: Question[] = [
  {
    id: "awsai-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "AWS Certified AI Practitioner(AIF-C01)が分類されるレベルとして最も適切なものを選びなさい。",
    choices: [
      "Foundational(基礎)",
      "Associate(アソシエイト)",
      "Professional(プロフェッショナル)",
      "Specialty(専門)",
    ],
    correctIndex: 0,
    explanation:
      "AIF-C01 は **Foundational(基礎)レベル** の認定。同じ Foundational には Cloud Practitioner(CLF-C02)がある。Specialty には Machine Learning Specialty(MLS-C01)。",
  },
  {
    id: "awsai-q2",
    category: "AI 基礎",
    difficulty: 1,
    question:
      "AI ・ ML ・ DL ・ 生成 AI の包含関係として最も適切なものを選びなさい。",
    choices: [
      "AI ⊂ ML ⊂ DL ⊂ Gen AI",
      "AI ⊃ ML ⊃ DL ⊃ Gen AI",
      "全て同じ",
      "Gen AI ⊃ AI ⊃ ML ⊃ DL",
    ],
    correctIndex: 1,
    explanation:
      "**AI ⊃ ML ⊃ DL ⊃ 生成 AI**。AI が最も広く、生成 AI は DL を基礎に新しいコンテンツを作る AI のサブセット。",
  },
  {
    id: "awsai-q3",
    category: "サービス選択",
    difficulty: 2,
    question:
      "「リアルタイムで会議の音声を文字起こししたい」という要件に最も適切な AWS サービスを選びなさい。",
    choices: [
      "Amazon Polly",
      "Amazon Transcribe",
      "Amazon Translate",
      "Amazon Comprehend",
    ],
    correctIndex: 1,
    explanation:
      "**Amazon Transcribe** は音声 → テキスト変換のマネージドサービス。Polly はテキスト → 音声、Translate は翻訳、Comprehend は NLP(感情 / エンティティ抽出など)。",
  },
  {
    id: "awsai-q4",
    category: "サービス選択",
    difficulty: 2,
    question:
      "PDF の請求書から表構造を保ったままテキストとフィールドを抽出したい場合に最も適切な AWS サービスを選びなさい。",
    choices: [
      "Amazon Rekognition",
      "Amazon Textract",
      "Amazon Forecast",
      "Amazon Personalize",
    ],
    correctIndex: 1,
    explanation:
      "**Amazon Textract** は文書 / 表 / フォームの OCR + 構造化抽出に特化。Rekognition は画像 / 動画分析(物体検出等)、Forecast は時系列予測、Personalize はレコメンド。",
  },
  {
    id: "awsai-q5",
    category: "サービス選択",
    difficulty: 2,
    question:
      "顧客の購買履歴からパーソナライズされた商品レコメンドを実装する際、最も適切なマネージドサービスを選びなさい。",
    choices: [
      "Amazon Personalize",
      "Amazon Forecast",
      "Amazon Comprehend",
      "Amazon Rekognition",
    ],
    correctIndex: 0,
    explanation:
      "**Amazon Personalize** は協調フィルタリング系のレコメンドエンジンをマネージドに提供する。Amazon.com で使われている技術がベース。",
  },
  {
    id: "awsai-q6",
    category: "Bedrock",
    difficulty: 1,
    question:
      "AWS の生成 AI フラッグシップサービスで、複数の基盤モデルを単一の API で利用できるサービスとして最も適切なものを選びなさい。",
    choices: [
      "Amazon SageMaker",
      "Amazon Bedrock",
      "Amazon Q",
      "Amazon Comprehend",
    ],
    correctIndex: 1,
    explanation:
      "**Amazon Bedrock** は Anthropic Claude / Amazon Titan / Meta Llama / Mistral / Cohere / Stability AI など複数の基盤モデルを単一 API で扱えるマネージドサービス。",
  },
  {
    id: "awsai-q7",
    category: "Bedrock",
    difficulty: 2,
    question:
      "Bedrock で生成 AI が個人情報や有害コンテンツを出力するのを防ぐ機能として最も適切なものを選びなさい。",
    choices: [
      "Knowledge Bases",
      "Agents",
      "Guardrails",
      "Model Evaluation",
    ],
    correctIndex: 2,
    explanation:
      "**Bedrock Guardrails** は禁止トピック ・ 個人情報 ・ 不適切コンテンツの遮断ができる安全機能。Knowledge Bases は RAG、Agents はツール使用、Model Evaluation は比較評価。",
  },
  {
    id: "awsai-q8",
    category: "RAG",
    difficulty: 3,
    question:
      "社内ドキュメントを使った Q&A チャットボットを **モデルを再学習せずに** 実装する場合、最も適切なアプローチを選びなさい。",
    choices: [
      "ファインチューニング",
      "継続的事前学習",
      "RAG(Retrieval Augmented Generation)",
      "蒸留",
    ],
    correctIndex: 2,
    explanation:
      "**RAG** は質問を埋め込み → ベクトル DB で類似文書検索 → プロンプトに含めて LLM に回答させる手法。**モデル再学習不要** で社内データを反映でき、**情報の更新も容易**。Bedrock Knowledge Bases がマネージド RAG を提供。",
  },
  {
    id: "awsai-q9",
    category: "プロンプト",
    difficulty: 2,
    question:
      "プロンプト内に **入出力の例を 1 〜 数個示してから本来のタスクを問う** 手法として最も適切なものを選びなさい。",
    choices: [
      "Zero-shot プロンプティング",
      "Few-shot プロンプティング",
      "ファインチューニング",
      "RAG",
    ],
    correctIndex: 1,
    explanation:
      "**Few-shot プロンプティング** は少数の例を提示してパターンを示す手法。例なしの **Zero-shot** より精度が向上することが多い。",
  },
  {
    id: "awsai-q10",
    category: "プロンプト",
    difficulty: 2,
    question:
      "プロンプト内で「ステップごとに考えてください」のように中間推論を促す手法として最も適切なものを選びなさい。",
    choices: [
      "Chain-of-Thought(CoT)",
      "Few-shot",
      "RAG",
      "ファインチューニング",
    ],
    correctIndex: 0,
    explanation:
      "**Chain-of-Thought(CoT)** は中間推論を出させる手法で、計算 / 論理推論 / 複雑な業務判断で精度が大きく向上する。",
  },
  {
    id: "awsai-q11",
    category: "SageMaker",
    difficulty: 2,
    question:
      "SageMaker のサービスで、**コードを書かずに** ML モデルを構築できる GUI ベースの機能として最も適切なものを選びなさい。",
    choices: [
      "SageMaker Studio",
      "SageMaker Canvas",
      "SageMaker Pipelines",
      "SageMaker Endpoints",
    ],
    correctIndex: 1,
    explanation:
      "**SageMaker Canvas** はノーコード ML プラットフォームで、ビジネスサイドが GUI でデータ準備 → 学習 → 予測を実行できる。Studio は Jupyter ベースの開発環境。",
  },
  {
    id: "awsai-q12",
    category: "SageMaker",
    difficulty: 3,
    question:
      "デプロイ済の ML モデルで本番データの分布が学習時と乖離していないかを検出する SageMaker のサービスとして最も適切なものを選びなさい。",
    choices: [
      "SageMaker Model Monitor",
      "SageMaker Clarify",
      "SageMaker Ground Truth",
      "SageMaker Feature Store",
    ],
    correctIndex: 0,
    explanation:
      "**SageMaker Model Monitor** はデータドリフト ・ モデル品質ドリフト ・ バイアスドリフトを継続監視。Clarify はバイアス検出 + 説明可能性、Ground Truth はラベリング、Feature Store は特徴量管理。",
  },
  {
    id: "awsai-q13",
    category: "責任ある AI",
    difficulty: 2,
    question:
      "ML モデルの予測における **バイアス検出** と **特徴量の重要度説明(SHAP ベース)** を提供する AWS サービスとして最も適切なものを選びなさい。",
    choices: [
      "SageMaker Clarify",
      "SageMaker Autopilot",
      "Amazon Comprehend",
      "Amazon Rekognition",
    ],
    correctIndex: 0,
    explanation:
      "**SageMaker Clarify** はバイアス検出と説明可能性(SHAP ベース)を提供。責任ある AI の実装で AIF-C01 頻出のサービス名。",
  },
  {
    id: "awsai-q14",
    category: "責任ある AI",
    difficulty: 2,
    question:
      "LLM が事実ではない情報を自信ありげに生成する現象の名称として最も適切なものを選びなさい。",
    choices: [
      "オーバーフィッティング",
      "ハルシネーション",
      "プロンプトインジェクション",
      "コンテキストリーク",
    ],
    correctIndex: 1,
    explanation:
      "**ハルシネーション** は LLM が事実検証なく文を生成することに起因する現象。RAG / 出典明記 / 人間レビュー / Function Calling での計算分離が代表的対策。",
  },
  {
    id: "awsai-q15",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "Bedrock を VPC 内のプライベート接続のみで利用したい場合に使う AWS の機能として最も適切なものを選びなさい。",
    choices: [
      "AWS PrivateLink(VPC エンドポイント)",
      "Amazon Route 53",
      "AWS Direct Connect",
      "AWS Transit Gateway",
    ],
    correctIndex: 0,
    explanation:
      "**AWS PrivateLink / VPC エンドポイント** で Bedrock などの AWS サービスを VPC 内のプライベート接続のみで利用できる。データがインターネットに出ないため、エンタープライズ要件で重要。",
  },
  {
    id: "awsai-q16",
    category: "コスト",
    difficulty: 2,
    question:
      "中断耐性のある SageMaker 学習ジョブで、最大 90% のコスト削減が見込める購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "On-Demand Instance",
      "Spot Instance",
      "Reserved Instance",
      "Dedicated Host",
    ],
    correctIndex: 1,
    explanation:
      "**Spot Instance** は AWS の余剰キャパシティを大幅割引(最大 90%)で利用できる。中断される可能性があるため、再開可能な学習ジョブ向き。",
  },
  {
    id: "awsai-q17",
    category: "AWS チップ",
    difficulty: 3,
    question:
      "AWS 自家製の **推論専用** AI チップとして最も適切なものを選びなさい。",
    choices: [
      "AWS Trainium",
      "AWS Inferentia",
      "AWS Graviton",
      "AWS Nitro",
    ],
    correctIndex: 1,
    explanation:
      "**AWS Inferentia** は推論専用、**AWS Trainium** は学習専用の自家製 AI チップ。両者ともコスト効率の改善を目的とする。Graviton は ARM ベース汎用 CPU、Nitro は仮想化基盤。",
  },
  {
    id: "awsai-q18",
    category: "Amazon Q",
    difficulty: 2,
    question:
      "VS Code などの IDE 内でコード補完 ・ 説明 ・ 脆弱性検出を行う AWS の生成 AI アシスタントとして最も適切なものを選びなさい。",
    choices: [
      "Amazon Q Business",
      "Amazon Q Developer",
      "Amazon Q in QuickSight",
      "Amazon Q in Connect",
    ],
    correctIndex: 1,
    explanation:
      "**Amazon Q Developer** は IDE 統合のコードアシスタント。Q Business は社内データに繋いだ業務支援、Q in QuickSight は BI、Q in Connect はコールセンター向け。",
  },
  {
    id: "awsai-q19",
    category: "アーキテクチャ",
    difficulty: 3,
    question:
      "コールセンターの音声録音から顧客満足度を分析するパイプラインで使うサービスの組み合わせとして最も適切なものを選びなさい。",
    choices: [
      "Rekognition → Comprehend",
      "Transcribe → Comprehend(感情分析)",
      "Polly → Translate",
      "Forecast → Personalize",
    ],
    correctIndex: 1,
    explanation:
      "**Transcribe で音声 → テキスト変換 → Comprehend の感情分析** で満足度を測るのが標準パターン。BI 可視化に QuickSight を組み合わせるのも頻出。",
  },
  {
    id: "awsai-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "AIF-C01 合格後、AWS の ML 認定で次のステップとして最も適切なものを選びなさい。",
    choices: [
      "AWS Certified Cloud Practitioner",
      "AWS Certified Solutions Architect Professional",
      "AWS Certified Machine Learning Engineer Associate / ML Specialty",
      "AWS Certified Security Specialty",
    ],
    correctIndex: 2,
    explanation:
      "AIF-C01 は基礎レベル。次は **Machine Learning Engineer Associate(MLA-C01)** または **Machine Learning Specialty(MLS-C01)** が ML 道の正規ステップ。",
  },
  {
    id: "awsai-q21",
    category: "Bedrock",
    difficulty: 2,
    question:
      "Amazon Bedrock の基本的な性質として最も適切なものを選びなさい。",
    choices: [
      "サーバレスで複数の Foundation Model(Claude / Llama / Titan など)に統一 API でアクセスできる",
      "AWS が独自開発した単一の LLM のみを提供する",
      "GPU クラスタを直接借りるサービス",
      "ファインチューン専用ツール",
    ],
    correctIndex: 0,
    explanation:
      "**Bedrock** は **複数ベンダー(Anthropic / Meta / Cohere / Mistral / Amazon Titan / Stability AI)の Foundation Model を統一 API で利用** できるサーバレスサービス。",
  },
  {
    id: "awsai-q22",
    category: "Bedrock",
    difficulty: 3,
    question:
      "**Bedrock Knowledge Bases** で RAG を構築する際、ベクトルストアとして使えないものを選びなさい。",
    choices: [
      "OpenSearch Serverless",
      "Aurora PostgreSQL with pgvector",
      "Pinecone",
      "DynamoDB",
    ],
    correctIndex: 3,
    explanation:
      "Bedrock Knowledge Bases 対応ベクトルストア: **OpenSearch Serverless ・ Aurora pgvector ・ Pinecone ・ Redis Enterprise Cloud ・ MongoDB Atlas**。DynamoDB は対応外。",
  },
  {
    id: "awsai-q23",
    category: "Bedrock",
    difficulty: 3,
    question:
      "Bedrock **Guardrails** が提供しないフィルタリング機能を選びなさい。",
    choices: [
      "拒否トピック(Denied topics)",
      "PII / 機微情報マスキング",
      "ハルシネーション検知(Contextual grounding check)",
      "GPU メモリ最適化",
    ],
    correctIndex: 3,
    explanation:
      "**Guardrails の機能**: Denied topics ・ Content filters(性的/暴力/憎悪等)・ PII redaction ・ Word filters ・ Contextual grounding(ハルシネーション検知)・ Prompt attack 検知。GPU 最適化は無関係。",
  },
  {
    id: "awsai-q24",
    category: "SageMaker",
    difficulty: 2,
    question:
      "SageMaker JumpStart の最も適切な説明を選びなさい。",
    choices: [
      "事前学習済の Foundation Model(Llama / Stable Diffusion など)を 1 クリックでデプロイ ・ ファインチューン",
      "SageMaker Notebook の起動を高速化する",
      "S3 ストレージを高速化する",
      "DynamoDB の代替",
    ],
    correctIndex: 0,
    explanation:
      "**JumpStart** は **OSS / 商用の事前学習済モデルカタログ + ソリューションテンプレート**。Llama / Falcon / Stable Diffusion / Hugging Face のモデルを GUI から即デプロイ可。",
  },
  {
    id: "awsai-q25",
    category: "プロンプト",
    difficulty: 2,
    question:
      "Bedrock で Claude モデルへの **System Prompt** の役割として最も適切なものを選びなさい。",
    choices: [
      "アシスタントの役割 ・ 制約 ・ 出力形式などを指示する",
      "ユーザのプロファイル情報を暗号化する",
      "モデルの重みを変更する",
      "出力 token 数を増やす",
    ],
    correctIndex: 0,
    explanation:
      "**System Prompt** は **モデルの役割 ・ 振る舞い ・ 制約 ・ 出力スタイル** を定義。ユーザメッセージとは別の channel で渡され、優先度が高い扱い。",
  },
  {
    id: "awsai-q26",
    category: "Embedding",
    difficulty: 3,
    question:
      "Bedrock の **Titan Embeddings G1 - Text** で生成されるベクトルの一般的な用途として **誤っているもの** を選びなさい。",
    choices: [
      "RAG の文書類似度検索",
      "テキスト分類用の特徴量",
      "クラスタリング",
      "画像のピクセル復元",
    ],
    correctIndex: 3,
    explanation:
      "**埋め込み(Embedding)** は **意味類似度 ・ 検索 ・ クラスタリング ・ 分類特徴量** に使う。画像ピクセル復元は別タスク(Stable Diffusion 等の Diffusion モデル)。",
  },
  {
    id: "awsai-q27",
    category: "ファインチューン",
    difficulty: 3,
    question:
      "Bedrock の Custom Model(継続事前学習 / ファインチューン)に関する説明として **誤っているもの** を選びなさい。",
    choices: [
      "Provisioned Throughput を購入すれば実行可能",
      "学習データは S3 に JSONL 形式で配置",
      "出力モデルは自動的にすべての AWS アカウントと共有される",
      "ベースモデルにより継続事前学習 / ファインチューンの可否が決まる",
    ],
    correctIndex: 2,
    explanation:
      "**Custom Model は学習元アカウントだけで利用可能**(共有は明示的 Cross-account のみ)。学習データは S3 JSONL、Provisioned Throughput 購入で利用、対応モデルは Titan / Llama / Cohere など限定。",
  },
  {
    id: "awsai-q28",
    category: "責任ある AI",
    difficulty: 2,
    question:
      "AWS が提唱する **責任ある AI の 8 次元** に含まれないものを選びなさい。",
    choices: [
      "Fairness(公平性)",
      "Explainability(説明可能性)",
      "Privacy & Security",
      "Maximum Throughput(最大スループット)",
    ],
    correctIndex: 3,
    explanation:
      "**AWS 責任ある AI 8 次元**: Fairness / Explainability / Privacy & Security / Robustness / Governance / Transparency / Veracity & Robustness / Controllability。スループットは性能指標で倫理原則ではない。",
  },
  {
    id: "awsai-q29",
    category: "コスト",
    difficulty: 3,
    question:
      "Bedrock の **On-demand と Provisioned Throughput** の使い分けとして最も適切なものを選びなさい。",
    choices: [
      "変動的 / 軽量トラフィックは On-demand、安定的 / 大規模は Provisioned",
      "On-demand が常にコスト安",
      "Provisioned は無料",
      "両者は完全同等",
    ],
    correctIndex: 0,
    explanation:
      "**On-demand**(従量課金)= 変動的 ・ PoC ・ 軽量。**Provisioned Throughput**(時間/月課金)= 安定的 ・ 大規模 ・ レイテンシ保証必須。Custom Model の利用には Provisioned が必須。",
  },
  {
    id: "awsai-q30",
    category: "Q ファミリ",
    difficulty: 2,
    question:
      "**Amazon Q Developer**(旧 CodeWhisperer)の主な用途として最も適切なものを選びなさい。",
    choices: [
      "IDE 内で AI コーディング補助 ・ コードレビュー ・ セキュリティスキャン",
      "S3 のコスト最適化",
      "DynamoDB のレイテンシ計測",
      "Lambda の冷起動を防ぐ",
    ],
    correctIndex: 0,
    explanation:
      "**Amazon Q Developer** は AWS の AI コーディングアシスタント(GitHub Copilot の AWS 版)。**Q Business / Q in QuickSight / Q in Connect** など Q ファミリは業務領域別に展開。",
  },
  { id: "awsai-q31", category: "Bedrock Agents", difficulty: 3, question: "Bedrock **Agents** の特徴として最も適切なものを選びなさい。", choices: ["Action Groups(API 呼出)+ Knowledge Bases(RAG)+ プロンプト管理を統合", "学習専用", "DB 専用", "GPU 制御"], correctIndex: 0, explanation: "**Bedrock Agents**: マルチステップ推論 + Action Groups(Lambda API)+ Knowledge Bases + Memory。**Tool Use の高レベル抽象**。" },
  { id: "awsai-q32", category: "SageMaker", difficulty: 3, question: "**SageMaker Canvas** の主用途として最も適切なものを選びなさい。", choices: ["ノーコード ML(ビジネスアナリスト向け GUI)", "GPU クラスタ管理", "Lambda 拡張", "VPC 設計"], correctIndex: 0, explanation: "**SageMaker Canvas**: ドラッグ&ドロップで AutoML / 予測 / 異常検知。**Salesforce / Google Sheets** からも直接データ取込可能。" },
  { id: "awsai-q33", category: "AI/ML サービス", difficulty: 2, question: "**Amazon Rekognition** の主用途として最も適切なものを選びなさい。", choices: ["画像 ・ 動画分析(顔検出 ・ 物体認識 ・ 不適切コンテンツ)", "音声認識", "翻訳", "要約"], correctIndex: 0, explanation: "**Rekognition**: コンピュータビジョン API。**Amazon Polly**(音声合成)・ **Transcribe**(STT)・ **Translate**(翻訳)・ **Comprehend**(NLP)などタスク特化 AI サービス群。" },
  { id: "awsai-q34", category: "AI/ML サービス", difficulty: 2, question: "**Amazon Personalize** の主用途として最も適切なものを選びなさい。", choices: ["パーソナライズドレコメンデーション(EC / メディア)", "翻訳", "音声合成", "顔認識"], correctIndex: 0, explanation: "**Personalize**: Amazon.com で培ったレコメンデーション技術を API 化。ユーザ × アイテム × インタラクションから類似ユーザベース / コンテンツベースで推薦。" },
  { id: "awsai-q35", category: "AI/ML サービス", difficulty: 2, question: "**Amazon Forecast** の主用途として最も適切なものを選びなさい。", choices: ["時系列予測(需要 ・ 売上 ・ リソース)", "画像認識", "翻訳", "テキスト要約"], correctIndex: 0, explanation: "**Forecast**: 時系列予測 API。**ARIMA / Prophet / DeepAR+ / CNN-QR** など複数アルゴリズムを自動選択 + アンサンブル。" },
  { id: "awsai-q36", category: "セキュリティ", difficulty: 3, question: "**Bedrock の Data Privacy** に関する説明として最も適切なものを選びなさい。", choices: ["顧客プロンプト ・ 出力は AWS の学習に使われない", "全データを学習に利用", "強制的に共有", "保管不可"], correctIndex: 0, explanation: "**Bedrock**: 顧客データは **モデル学習に使われない**(契約保護)。**Anthropic / Meta / Cohere** などのベンダーモデルでも同じ保護。エンタープライズ要件。" },
  { id: "awsai-q37", category: "推論", difficulty: 3, question: "Bedrock の **推論パラメータ Temperature** の効果として最も適切なものを選びなさい。", choices: ["低: 決定的 / 高: 創造的", "完全に同じ", "Token 数制御", "Latency 制御"], correctIndex: 0, explanation: "**Temperature**: 0 = greedy(最尤 token)/ 1 = 学習分布通り / > 1 = 多様性増。Top-P / Top-K と組合せて創造性 ・ 一貫性を制御。" },
  { id: "awsai-q38", category: "推論", difficulty: 3, question: "**Top-P(Nucleus Sampling)** の挙動として最も適切なものを選びなさい。", choices: ["累積確率 P まで含む候補から選ぶ", "全 Token", "1 Token のみ", "ランダム"], correctIndex: 0, explanation: "**Top-P = 0.9**: 累積確率 90% までの候補から sampling。**Top-K**: 上位 K 個から。Temperature と併用が一般的。" },
  { id: "awsai-q39", category: "PartyRock", difficulty: 2, question: "**PartyRock(Amazon Bedrock Playground)** の用途として最も適切なものを選びなさい。", choices: ["AWS 認証なしで Bedrock を試せる無料 LLM プレイグラウンド", "本番デプロイ", "DB 管理", "GPU 購入"], correctIndex: 0, explanation: "**PartyRock**: アプリ作成 ・ シェア + Bedrock モデル試用。**生成 AI 入門に最適**。プロンプト試行錯誤 → 本格 Bedrock 移行という流れ。" },
  { id: "awsai-q40", category: "コスト", difficulty: 3, question: "**Bedrock On-demand と Batch Inference** の使い分けとして最も適切なものを選びなさい。", choices: ["On-demand: リアルタイム / Batch: 大量データ(50% 割引)", "両者同じ", "Batch は廃止", "On-demand は高い"], correctIndex: 0, explanation: "**Batch Inference**(2024): S3 上の大量データを一括推論 → On-demand の **約 50% 割引**。コール ・ ログ分析 ・ 要約バッチに最適。" },
  { id: "awsai-q41", category: "Q Business", difficulty: 3, question: "**Amazon Q Business** の主用途として最も適切なものを選びなさい。", choices: ["社内データ(S3 / SharePoint / Salesforce 等 40+)を Connector で取込み RAG 質問応答", "コード生成", "翻訳", "音声合成"], correctIndex: 0, explanation: "**Q Business**: エンタープライズ生成 AI アシスタント。**40+ Connector** で SaaS / オンプレデータ統合 + RAG + 引用 + Plugin。Microsoft Copilot 競合。" },
  { id: "awsai-q42", category: "Multimodal", difficulty: 3, question: "Bedrock で **画像入力対応** している主要モデルとして最も適切なものを選びなさい。", choices: ["Claude 3 Sonnet / Haiku / Opus, Llama 3.2 Vision, Nova", "Titan Text", "Cohere Command", "Jurassic"], correctIndex: 0, explanation: "**Bedrock マルチモーダル LLM**: Claude 3 / 3.5 系 + Llama 3.2 Vision + Amazon Nova(2024 新)・ Stability AI(画像 → 画像)。テキスト + 画像入出力対応。" },
  { id: "awsai-q43", category: "セキュリティ", difficulty: 3, question: "Bedrock 利用時の **VPC エンドポイント** 設定の効果として最も適切なものを選びなさい。", choices: ["インターネットを通さず VPC 内から Bedrock API 呼出 + データ exfiltration 防止", "速度向上のみ", "コスト削減のみ", "GUI が良い"], correctIndex: 0, explanation: "**Bedrock VPC Endpoint(Interface)**: トラフィックを VPC 内に閉じ込め PrivateLink 経由。エンタープライズ ・ 規制業界で必須。" },
  { id: "awsai-q44", category: "Knowledge Bases", difficulty: 3, question: "Bedrock Knowledge Bases の **Chunking 戦略** として最も適切なものを選びなさい。", choices: ["Fixed-size / Hierarchical / Semantic / Custom から選択", "全文 1 ベクトル", "1 単語 1 ベクトル", "Chunking 不要"], correctIndex: 0, explanation: "**Chunking 戦略**(2024): Fixed-size(従来)・ Hierarchical(親子構造)・ Semantic(意味境界)・ Custom Lambda。文書性質に応じて選定。" },
  { id: "awsai-q45", category: "Bedrock Studio", difficulty: 3, question: "**Bedrock Studio** の用途として最も適切なものを選びなさい。", choices: ["ローコードで Bedrock アプリ(プロンプト ・ Agent ・ Knowledge Base)を構築", "DB 管理", "GPU 管理", "課金最適化"], correctIndex: 0, explanation: "**Bedrock Studio**(2024): IAM Identity Center 連携でチーム単位のアプリ開発環境。プロンプトテスト / 共有 / Knowledge Base 接続を GUI で。" },
  { id: "awsai-q46", category: "Prompt Caching", difficulty: 3, question: "Bedrock **Prompt Caching** の効果として最も適切なものを選びなさい。", choices: ["長いシステムプロンプト ・ コンテキストを再利用しコスト ・ Latency 削減", "DB を高速化", "GUI 改善", "Lambda 並列化"], correctIndex: 0, explanation: "**Prompt Caching**(2024): 長文 system prompt / Few-shot 例を 5 分間キャッシュ → 入力 token コスト 90% 削減 + Latency 大幅短縮。Claude / Nova で対応。" },
  { id: "awsai-q47", category: "倫理", difficulty: 3, question: "AWS の **責任ある AI 構築** で重要な要素として **誤っているもの** を選びなさい。", choices: ["バイアステスト ・ ガバナンス", "Explainability(SHAP / Clarify)", "Human-in-the-loop(A2I)", "GPU 物理破壊"], correctIndex: 3, explanation: "**Responsible AI 実装**: Clarify(バイアス + 説明可能性)・ Model Cards(ドキュメント)・ A2I(人間レビュー)・ Guardrails(出力フィルタ)・ Data Drift 監視。" },
  { id: "awsai-q48", category: "監視", difficulty: 3, question: "Bedrock の **モデル呼出監視** に使うサービスとして最も適切なものを選びなさい。", choices: ["CloudWatch Metrics + Logs + Model Invocation Logging(S3)", "Personalize", "Polly", "QuickSight"], correctIndex: 0, explanation: "**Bedrock 監視**: CloudWatch(Latency / Invocations / Errors)+ Model Invocation Logging(入出力を S3 / CloudWatch Logs に保存)+ CloudTrail(管理操作)。" },
  { id: "awsai-q49", category: "ベンチマーク", difficulty: 3, question: "Bedrock の **Evaluation 機能** で評価できる対象として最も適切なものを選びなさい。", choices: ["事前定義 + カスタム評価データセットでモデル ・ プロンプト性能を測定", "ハードウェア性能", "ネットワーク帯域", "ライセンス費用"], correctIndex: 0, explanation: "**Bedrock Evaluation**: Automatic(BLEU / Rouge / Toxicity 等)・ Human(社内レビュア)・ LLM-as-a-Judge。複数モデル比較で本番採用判断。" },
  { id: "awsai-q50", category: "次のステップ", difficulty: 1, question: "AIF-C01 合格後の **AWS ML 系上位認定** として最も適切なものを選びなさい。", choices: ["MLA-C01(ML Engineer Associate)→ MLS-C01(ML Specialty)", "Cloud Practitioner", "DBS-C01", "再受験"], correctIndex: 0, explanation: "**AIF-C01 → MLA-C01(Associate)→ MLS-C01(Specialty)** が AWS ML 王道。**DEA-C01** でデータエンジニア寄りに展開も。" },
  { id: "awsai-q51", category: "Comprehend", difficulty: 3, question: "**Amazon Comprehend** の用途として最も適切なものを選びなさい。", choices: ["NLP(感情分析 ・ Entity / Key Phrase / Language Detection)", "音声合成", "画像認識", "翻訳のみ"], correctIndex: 0, explanation: "**Comprehend**: NLP API。Sentiment / Entity / Key Phrase / Language / Topic Modeling。**Custom Classification / Custom Entity** で業界特化も。" },
  { id: "awsai-q52", category: "Lex", difficulty: 3, question: "**Amazon Lex** の主用途として最も適切なものを選びなさい。", choices: ["音声 + テキストチャットボット(Alexa と同基盤)", "DB クエリ", "Web ホスティング", "認証"], correctIndex: 0, explanation: "**Lex**: Conversational AI(NLU + STT)。Alexa と同基盤。**Connect**(コンタクトセンター)と統合で IVR ・ FAQ Bot に。" },
  { id: "awsai-q53", category: "Textract", difficulty: 3, question: "**Amazon Textract** の役割として最も適切なものを選びなさい。", choices: ["OCR + Forms / Tables / Queries 抽出(構造化文書)", "音声認識", "翻訳", "画像生成"], correctIndex: 0, explanation: "**Textract**: PDF / 画像から **テキスト + Forms(Key-Value)+ Tables + Queries(自然言語)** を抽出。**請求書 ・ 申請書 ・ ID** の自動化に。" },
  { id: "awsai-q54", category: "Kendra", difficulty: 3, question: "**Amazon Kendra** の用途として最も適切なものを選びなさい。", choices: ["エンタープライズ検索(自然言語クエリ + 40+ Connector)", "DB", "認証", "Email"], correctIndex: 0, explanation: "**Kendra**: 自然言語企業内検索。**SharePoint / Confluence / S3 / Salesforce / ServiceNow** など多数 Connector。Bedrock KB / Q Business の前身的位置付け。" },
  { id: "awsai-q55", category: "Bedrock", difficulty: 3, question: "**Bedrock Custom Model Import** の用途として最も適切なものを選びなさい。", choices: ["fine-tuned OSS モデル(Llama / Mistral)を Bedrock にインポート", "新規モデル学習", "GUI 作成", "認証"], correctIndex: 0, explanation: "**Custom Model Import**(2024): SageMaker / 他で fine-tune した OSS モデルを Bedrock の統一 API + Serverless で利用可能化。" },
  { id: "awsai-q56", category: "Pricing", difficulty: 3, question: "**Bedrock の料金モデル** として **誤っているもの** を選びなさい。", choices: ["On-demand(token 単価)", "Provisioned Throughput(時間 / 月)", "Batch Inference(50% 割引)", "完全無料の Production 利用"], correctIndex: 3, explanation: "**Bedrock 料金**: On-demand + Provisioned + Batch + Cross-region inference の組合せ。**無料枠は限定的**(SDK 動作確認程度)。Production 利用は有料。" },
  { id: "awsai-q57", category: "Inference Profile", difficulty: 3, question: "**Cross-Region Inference** の利点として最も適切なものを選びなさい。", choices: ["複数リージョンでスループット ・ 可用性を確保(自動ルーティング)", "GUI 改善", "認証強化", "コスト削減のみ"], correctIndex: 0, explanation: "**Cross-Region Inference**(2024): 主要リージョンで自動ルーティング + Throttle 軽減 + 可用性向上。Bedrock の Inference Profile 機能。" },
  { id: "awsai-q58", category: "Guardrails", difficulty: 3, question: "**Bedrock Guardrails** の **Contextual Grounding** の役割として最も適切なものを選びなさい。", choices: ["RAG コンテキストから回答が外れたら検出 + ブロック", "GPU 監視", "認証", "GUI 作成"], correctIndex: 0, explanation: "**Contextual Grounding Check**(2024): Source(RAG 文書)との Grounding スコア + Relevance スコアで **ハルシネーション抑制**。" },
  { id: "awsai-q59", category: "Multi-Agent", difficulty: 3, question: "**Bedrock Multi-Agent Collaboration** の用途として最も適切なものを選びなさい。", choices: ["Supervisor Agent が複数 Specialist Agent を協調", "1 Agent のみ", "GPU 制御", "認証"], correctIndex: 0, explanation: "**Multi-Agent**(2024 Bedrock): Supervisor → Specialists(Research / Code / Math 等)。**複雑タスクを分業化**。AutoGen / CrewAI 風のマネージド版。" },
  { id: "awsai-q60", category: "Inference Optimization", difficulty: 3, question: "**Latency-Optimized Inference**(Bedrock)の特徴として最も適切なものを選びなさい。", choices: ["最新 NVIDIA H100 + 最適化ソフトで Latency 大幅削減", "Batch 専用", "古いハードウェア", "認証強化"], correctIndex: 0, explanation: "**Latency-Optimized**: Claude 3.5 Haiku / Llama 3.1 70B / 405B 等で利用可。**H100 + Custom Silicon + Inflightance** で 60% 以上の Latency 削減(2024)。" },
  { id: "awsai-q61", category: "Distillation", difficulty: 3, question: "**Bedrock Model Distillation**(2024)の用途として最も適切なものを選びなさい。", choices: ["大モデル(Teacher)の知識を小モデル(Student)に転送 → コスト ・ Latency 削減", "全パラメータ更新", "GUI 改善", "認証"], correctIndex: 0, explanation: "**Model Distillation**: Teacher(Claude 3.5 Sonnet 等)→ Student(Haiku)に Knowledge Distillation。**精度はある程度保ちつつコスト 75% 削減**(Anthropic 公開数値)。" },
  { id: "awsai-q62", category: "Knowledge Base", difficulty: 3, question: "**Bedrock Knowledge Bases** の **GraphRAG** モードの利点として最も適切なものを選びなさい。", choices: ["Neptune Analytics で関係性ベース検索 → 複雑質問への精度向上", "GPU 削減", "認証", "GUI 改善"], correctIndex: 0, explanation: "**Knowledge Base + GraphRAG**(2024 GA): Amazon Neptune Analytics ベースで Knowledge Graph 構築 → 複数文書をまたぐ複雑質問に強い。" },
  { id: "awsai-q63", category: "Agent", difficulty: 3, question: "**Bedrock Agents** の **Memory** 機能の役割として最も適切なものを選びなさい。", choices: ["Session 跨ぎでユーザ情報 ・ 嗜好を保持 → パーソナライズ", "GUI 作成", "GPU 削減", "認証"], correctIndex: 0, explanation: "**Bedrock Agent Memory**(2024): User ID で session 跨ぎの記憶。**長期記憶 + 個人別カスタマイズ**。LangGraph / CrewAI の Memory 機能のマネージド版。" },
  { id: "awsai-q64", category: "実装", difficulty: 3, question: "**Amazon Bedrock SDK** の **Converse API** の特徴として最も適切なものを選びなさい。", choices: ["全 Bedrock モデルで統一の対話インタフェース", "Claude 専用", "Llama 専用", "Stream 不可"], correctIndex: 0, explanation: "**Converse API**(2024 GA): 全 Bedrock モデルで統一 chat インタフェース + Tool Use + Streaming。**boto3 / AWS SDK** で簡単統合。" },
  { id: "awsai-q65", category: "Q ファミリ", difficulty: 3, question: "**Amazon Q in QuickSight** の用途として最も適切なものを選びなさい。", choices: ["自然言語で BI 分析(NL → グラフ ・ Insight 自動生成)", "DB バックアップ", "認証", "GPU 監視"], correctIndex: 0, explanation: "**Q in QuickSight**: 自然言語 → ダッシュボード生成 / 分析。**Stories** で自動レポート作成も。Power BI Copilot / Looker Studio AI と競合。" },
];
