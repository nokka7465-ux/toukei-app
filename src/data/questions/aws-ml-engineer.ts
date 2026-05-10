import type { Question } from "@/types/content";

export const awsMlEngineerQuestions: Question[] = [
  {
    id: "mla-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "AWS Certified Machine Learning Engineer ─ Associate(MLA-C01)の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Foundational",
      "Associate",
      "Professional",
      "Specialty",
    ],
    correctIndex: 1,
    explanation:
      "**MLA-C01 は Associate レベル**。AWS の AI / ML 認定階層: AI Practitioner(Foundational)→ ML Engineer Associate(本資格)→ ML Specialty。",
  },
  {
    id: "mla-q2",
    category: "ML 基礎",
    difficulty: 2,
    question:
      "クラス比率が 99:1 の極端な不均衡データの分類で、**最も使うべきでない** 指標を選びなさい。",
    choices: [
      "Accuracy(正解率)",
      "F1 スコア",
      "PR-AUC",
      "Recall",
    ],
    correctIndex: 0,
    explanation:
      "不均衡データでは **Accuracy** は単純に多数派を予測するだけで 99% 達成可能で、性能を反映しない。**F1 / Recall / PR-AUC** が適切。",
  },
  {
    id: "mla-q3",
    category: "データ準備",
    difficulty: 3,
    question:
      "SageMaker で **GUI ベースで** データクレンジング ・ 特徴量エンジニアリング ・ プロファイリングを行えるサービスとして最も適切なものを選びなさい。",
    choices: [
      "SageMaker Studio Notebook",
      "SageMaker Data Wrangler",
      "AWS Glue DataBrew",
      "Athena",
    ],
    correctIndex: 1,
    explanation:
      "**SageMaker Data Wrangler** は SageMaker Studio 統合の GUI データ準備ツール。300 以上の変換 ・ プロファイル ・ Quick Model 機能を持つ。Glue DataBrew は別のノーコード ETL ツール。",
  },
  {
    id: "mla-q4",
    category: "SageMaker",
    difficulty: 2,
    question:
      "SageMaker で **コードを書かずに** ML モデルを構築できる GUI ベース機能として最も適切なものを選びなさい。",
    choices: [
      "SageMaker Studio",
      "SageMaker Canvas",
      "SageMaker Pipelines",
      "SageMaker Endpoints",
    ],
    correctIndex: 1,
    explanation:
      "**SageMaker Canvas** はノーコード ML プラットフォーム。ビジネスサイドが GUI でデータ準備 → 学習 → 予測を実行できる。Studio は Jupyter ベースの開発環境。",
  },
  {
    id: "mla-q5",
    category: "ハードウェア",
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
      "**Inferentia(inf)** は推論専用、**Trainium(trn)** は学習専用の AWS 自家製 AI チップ。両者ともコスト性能比改善が目的。",
  },
  {
    id: "mla-q6",
    category: "コスト",
    difficulty: 2,
    question:
      "中断耐性のある SageMaker 学習ジョブで **最大 90% のコスト削減** が見込める購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "On-Demand",
      "Spot Training",
      "Reserved Instance",
      "Dedicated Host",
    ],
    correctIndex: 1,
    explanation:
      "**Spot Training** は AWS の余剰キャパシティを活用、最大 90% 割引。中断時の再開可能なよう checkpoint を保存する設計が必要。",
  },
  {
    id: "mla-q7",
    category: "HPO",
    difficulty: 3,
    question:
      "SageMaker のハイパーパラメータ最適化で **デフォルト** の探索戦略として最も適切なものを選びなさい。",
    choices: [
      "Grid Search",
      "Random Search",
      "Bayesian Optimization",
      "Hyperband",
    ],
    correctIndex: 2,
    explanation:
      "SageMaker HPO のデフォルトは **Bayesian Optimization**(過去試行から次を予測、効率良い)。Grid / Random は古典的、Hyperband は早期終了 + 並列の現代的手法。",
  },
  {
    id: "mla-q8",
    category: "推論",
    difficulty: 3,
    question:
      "1 GB を超える大ペイロード ・ 長時間処理(最大 1 時間)に向く SageMaker 推論オプションとして最も適切なものを選びなさい。",
    choices: [
      "Real-time Inference",
      "Serverless Inference",
      "Asynchronous Inference",
      "Batch Transform",
    ],
    correctIndex: 2,
    explanation:
      "**Asynchronous Inference** は大ペイロード(1 GB)+ 長時間処理(60 分)向け。リクエストを SQS キューに入れ、結果を S3 に保存する非同期パターン。",
  },
  {
    id: "mla-q9",
    category: "推論",
    difficulty: 3,
    question:
      "**1 つのエンドポイントに数百〜数千のモデルを同居させてコスト効率を上げる** 構成として最も適切なものを選びなさい。",
    choices: [
      "Multi-Model Endpoint(MME)",
      "Multi-Container Endpoint",
      "Inference Pipeline",
      "Real-time Endpoint",
    ],
    correctIndex: 0,
    explanation:
      "**Multi-Model Endpoint(MME)** は同型のモデルを多数同居させ、メモリ管理を AWS が自動化。SaaS のテナント別モデルなどで重宝される。",
  },
  {
    id: "mla-q10",
    category: "Pipelines",
    difficulty: 3,
    question:
      "SageMaker Pipelines のステップ種別に **含まれない** ものを選びなさい。",
    choices: [
      "ProcessingStep",
      "TrainingStep",
      "ConditionStep",
      "EncryptionStep",
    ],
    correctIndex: 3,
    explanation:
      "Pipelines のステップは Processing / Training / Tuning / Model / Transform / Condition / Lambda / Callback / EMR などがある。EncryptionStep は存在しない。",
  },
  {
    id: "mla-q11",
    category: "Model Registry",
    difficulty: 2,
    question:
      "SageMaker Model Registry で **本番デプロイ前の人手レビュー** を表すモデル状態として最も適切なものを選びなさい。",
    choices: [
      "Approved",
      "Rejected",
      "PendingManualApproval",
      "Deployed",
    ],
    correctIndex: 2,
    explanation:
      "**PendingManualApproval** は人手レビュー待ちの状態。レビュー後 **Approved**(承認)または **Rejected**(却下)に遷移する。これによりガバナンスを保つ。",
  },
  {
    id: "mla-q12",
    category: "Model Monitor",
    difficulty: 3,
    question:
      "本番モデルで **入力データ分布が学習時と乖離していないか** を継続監視する SageMaker 機能として最も適切なものを選びなさい。",
    choices: [
      "SageMaker Model Monitor(Data Quality)",
      "SageMaker Clarify",
      "SageMaker Debugger",
      "SageMaker Feature Store",
    ],
    correctIndex: 0,
    explanation:
      "**Model Monitor の Data Quality 監視** が入力分布の変化(特徴量ドリフト)を検出。Model Quality は予測 vs 正解の乖離、Bias / Feature Attribution Drift が他の 2 種。",
  },
  {
    id: "mla-q13",
    category: "Clarify",
    difficulty: 3,
    question:
      "SageMaker Clarify で実装される **モデルの説明可能性** の主な技法として最も適切なものを選びなさい。",
    choices: [
      "ROC 曲線",
      "SHAP(SHapley Additive exPlanations)",
      "LDA",
      "PCA",
    ],
    correctIndex: 1,
    explanation:
      "**SageMaker Clarify** は **SHAP** ベースの特徴量重要度を提供。学習済モデルに対する説明可能性 + バイアス検出が主機能。",
  },
  {
    id: "mla-q14",
    category: "Feature Store",
    difficulty: 3,
    question:
      "SageMaker Feature Store の主な目的として最も適切なものを選びなさい。",
    choices: [
      "学習済モデルの保存",
      "訓練 / 推論で同じ特徴量を再利用し、Training-Serving Skew を防ぐ",
      "ハイパーパラメータの管理",
      "ログ集約",
    ],
    correctIndex: 1,
    explanation:
      "**Feature Store** は訓練と推論で同じ特徴量計算を共有する仕組み。これがないと Training-Serving Skew(訓練と推論で特徴量が微妙に異なる)が発生し、本番精度劣化の原因になる。",
  },
  {
    id: "mla-q15",
    category: "JumpStart",
    difficulty: 2,
    question:
      "SageMaker JumpStart の主な機能として最も適切なものを選びなさい。",
    choices: [
      "新規モデルのゼロからの学習",
      "事前学習済モデル(Hugging Face / Llama / Stable Diffusion 等)の即デプロイ + 微調整",
      "データのクレンジング",
      "コスト分析",
    ],
    correctIndex: 1,
    explanation:
      "**JumpStart** は事前学習済モデル(数百種)を 1 クリックでデプロイし、独自データで微調整できる機能。生成 AI / NLP / 画像認識でよく使われる。",
  },
  {
    id: "mla-q16",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "SageMaker トレーニングジョブを **インターネットから完全に切り離す** 設定として最も適切なものを選びなさい。",
    choices: [
      "Public Access のみで Auth 強化",
      "Network Isolation + VPC Configuration + Private Endpoint",
      "IAM ポリシーのみで制御",
      "MFA 必須化",
    ],
    correctIndex: 1,
    explanation:
      "**Network Isolation = True** + VPC 内デプロイ + Private Endpoint で SageMaker をインターネットから完全に切離せる。データ常駐 ・ コンプライアンス要件で必須。",
  },
  {
    id: "mla-q17",
    category: "Bedrock",
    difficulty: 2,
    question:
      "Amazon Bedrock の **マネージド RAG** 機能の名称として最も適切なものを選びなさい。",
    choices: [
      "Bedrock Agents",
      "Bedrock Knowledge Bases",
      "Bedrock Guardrails",
      "Bedrock Model Evaluation",
    ],
    correctIndex: 1,
    explanation:
      "**Bedrock Knowledge Bases** はマネージド RAG。ベクトル DB(OpenSearch / Aurora / Pinecone)+ 埋め込み + 検索を統合。Agents はツール使用、Guardrails は安全制御。",
  },
  {
    id: "mla-q18",
    category: "Bedrock",
    difficulty: 3,
    question:
      "Amazon Bedrock で **本番大規模運用** で予測可能なスループットとコストを確保する購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "On-Demand",
      "Provisioned Throughput",
      "Spot",
      "Free Tier",
    ],
    correctIndex: 1,
    explanation:
      "**Provisioned Throughput** はスループットを事前確保し、本番大規模で予測可能な性能 + コストを実現する Bedrock の購入モデル。",
  },
  {
    id: "mla-q19",
    category: "MLOps",
    difficulty: 3,
    question:
      "Model Registry で承認されたモデルを **dev → test → prod** に昇格させる SageMaker のテンプレート化された MLOps 機能として最も適切なものを選びなさい。",
    choices: [
      "SageMaker Projects",
      "SageMaker Studio",
      "SageMaker Endpoints",
      "SageMaker Notebook",
    ],
    correctIndex: 0,
    explanation:
      "**SageMaker Projects** はモデル開発 → 承認 → デプロイの MLOps テンプレート。CodePipeline / CodeBuild / CodeCommit と統合した CI/CD を提供。",
  },
  {
    id: "mla-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "MLA-C01 合格後、AWS で ML 系をさらに深掘りする認定として最も適切なものを選びなさい。",
    choices: [
      "AWS Cloud Practitioner",
      "AWS ML Specialty(MLS-C01)",
      "AWS Database Specialty",
      "AWS Security Specialty",
    ],
    correctIndex: 1,
    explanation:
      "MLA-C01 → **ML Specialty(MLS-C01)** が ML 系の上位認定。深い数学 ・ アルゴリズム ・ 実装ニュアンスが問われる。Cloud Practitioner は基礎で逆方向。",
  },
  {
    id: "mla-q21",
    category: "Bedrock",
    difficulty: 3,
    question:
      "AWS Bedrock の **Knowledge Bases** が提供する機能として最も適切なものを選びなさい。",
    choices: [
      "AWS マネージドの RAG(Retrieval-Augmented Generation)",
      "ファインチューニング専用エンジン",
      "Lambda の置き換え",
      "S3 ストレージクラス管理",
    ],
    correctIndex: 0,
    explanation:
      "**Bedrock Knowledge Bases** は **マネージド RAG**(S3 → 自動チャンク + 埋め込み + ベクトル DB + Bedrock LLM 連携)。**OpenSearch / Aurora pgvector / Pinecone** をベクトルストアに選択。",
  },
  {
    id: "mla-q22",
    category: "Bedrock",
    difficulty: 3,
    question:
      "Bedrock **Guardrails** の機能として **誤っているもの** を選びなさい。",
    choices: [
      "PII / 機微情報のマスキング",
      "プロンプト ・ 応答内のトピックフィルタ(deny topics)",
      "ハルシネーション検知 + 文脈接地検証",
      "モデルの再学習を自動実行",
    ],
    correctIndex: 3,
    explanation:
      "**Guardrails は出力フィルタリング**(PII / トピック / ハルシネーション / 単語ブロック)。**モデル再学習は行わない**(再学習は SageMaker Training など別系統)。",
  },
  {
    id: "mla-q23",
    category: "JumpStart",
    difficulty: 2,
    question:
      "SageMaker JumpStart の特徴として最も適切なものを選びなさい。",
    choices: [
      "事前学習済 OSS モデル(Llama / Stable Diffusion など)を 1 クリックでデプロイ",
      "ノートブックを高速起動するツール",
      "S3 上のデータをスキャンする機能",
      "DynamoDB の代替",
    ],
    correctIndex: 0,
    explanation:
      "**SageMaker JumpStart** は **事前学習済 OSS モデル(Hugging Face / Llama / Stable Diffusion / Cohere 等)** + **ソリューションテンプレート(需要予測 / 不正検知 等)** を 1 クリックでデプロイ ・ ファインチューニング可能に。",
  },
  {
    id: "mla-q24",
    category: "Pipelines",
    difficulty: 3,
    question:
      "SageMaker Pipelines で **A/B テスト用にトラフィック分散** を実現する方法を選びなさい。",
    choices: [
      "Production Variant(複数バリアント + 重み)",
      "Multi-Model Endpoint",
      "JumpStart",
      "Feature Store",
    ],
    correctIndex: 0,
    explanation:
      "**Production Variant** は **1 Endpoint 配下に複数バリアント(各モデル + Compute)** を作成し、**重みでトラフィック分散**。Blue/Green / Canary / A/B テストに利用。",
  },
  {
    id: "mla-q25",
    category: "Inference Pipeline",
    difficulty: 3,
    question:
      "SageMaker **Inference Pipeline** の説明として最も適切なものを選びなさい。",
    choices: [
      "前処理 → 推論 → 後処理 を直列にチェインする 1 エンドポイント構成",
      "複数モデルを並列に呼ぶ",
      "Feature Store との連携専用機能",
      "リアルタイム推論を批処理に変換する機能",
    ],
    correctIndex: 0,
    explanation:
      "**Inference Pipeline** は **2〜15 個の Container を直列チェイン**(前処理 → 推論 → 後処理)。各コンテナの間でデータが流れ、レイテンシを最小化。",
  },
  {
    id: "mla-q26",
    category: "Endpoint Auto Scaling",
    difficulty: 3,
    question:
      "Real-time Endpoint の **Auto Scaling** で **モデル単位ではなく バリアント単位の `InvocationsPerInstance`** をターゲットメトリクスとして使う理由を選びなさい。",
    choices: [
      "AWS が他のメトリクスを提供していないため",
      "1 インスタンスあたりの推論処理量を均一にし、レイテンシ ・ コストを安定化するため",
      "CloudWatch コストを下げるため",
      "GPU 使用率は信頼性が低いため",
    ],
    correctIndex: 1,
    explanation:
      "**`InvocationsPerInstance`** は **1 インスタンスあたりの 1 分間の呼出数**。これをターゲット値で維持することで **レイテンシ ・ コストを安定化**。`CPUUtilization` 等とも併用可能。",
  },
  {
    id: "mla-q27",
    category: "SageMaker Studio",
    difficulty: 2,
    question:
      "SageMaker Studio が提供する **統合 IDE** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "Notebook ・ Pipelines ・ Experiments ・ Model Registry を統合",
      "Training Job / Endpoint の実行状況を可視化",
      "Data Wrangler でノーコード前処理",
      "EC2 インスタンスを直接 SSH ログインする機能",
    ],
    correctIndex: 3,
    explanation:
      "**Studio は SageMaker サービスを統合する Web IDE**。EC2 SSH 機能はない。Studio Notebook ・ Pipelines ・ Experiments ・ Model Registry ・ Data Wrangler ・ JumpStart ・ Canvas を統合。",
  },
  {
    id: "mla-q28",
    category: "Canvas",
    difficulty: 2,
    question:
      "SageMaker Canvas の特徴として最も適切なものを選びなさい。",
    choices: [
      "ノーコード ML(ビジネスアナリスト向け)",
      "GPU クラスタ管理",
      "Lambda 拡張",
      "Bedrock の代替",
    ],
    correctIndex: 0,
    explanation:
      "**SageMaker Canvas** は **ノーコード ML プラットフォーム**(ビジネスアナリスト ・ 非エンジニア向け)。データ取込 → モデル学習 → 推論を GUI で完結。バックエンドは AutoML。",
  },
  {
    id: "mla-q29",
    category: "Cost",
    difficulty: 2,
    question:
      "Real-time Endpoint のコスト最適化として **誤っているもの** を選びなさい。",
    choices: [
      "Inferentia / Graviton インスタンスタイプを検討",
      "Multi-Model Endpoint で多モデルを集約",
      "Auto Scaling を無効化して常時最大インスタンス数で運用",
      "Quantization / Distillation で軽量化",
    ],
    correctIndex: 2,
    explanation:
      "**常時最大インスタンスはコスト爆発**。Auto Scaling を有効化し負荷に応じて伸縮。Inferentia / Graviton は専用低コスト ・ MME は集約 ・ Quantization は軽量化、すべて有効な最適化策。",
  },
  {
    id: "mla-q30",
    category: "MLOps",
    difficulty: 3,
    question:
      "SageMaker Model Cards の役割として最も適切なものを選びなさい。",
    choices: [
      "モデルの目的 ・ データ ・ 評価 ・ 制約 ・ リスクを文書化(ガバナンス用)",
      "GPU メモリプロファイリング",
      "Endpoint のリアルタイム監視",
      "学習データを暗号化する",
    ],
    correctIndex: 0,
    explanation:
      "**SageMaker Model Cards** は **モデル仕様書**(目的 / データ / 性能 / 制約 / 倫理リスク / 承認者)。**EU AI Act / NIST AI RMF などの監査要件に対応** するためのガバナンスドキュメント。",
  },
];
