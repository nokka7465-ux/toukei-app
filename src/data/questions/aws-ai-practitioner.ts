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
];
