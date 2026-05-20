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
  { id: "mla-q31", category: "Processing Job", difficulty: 3, question: "SageMaker **Processing Job** の主用途として最も適切なものを選びなさい。", choices: ["データ前処理 ・ 後処理 ・ 評価をマネージドコンテナで実行", "GPU 暗号化", "DB 管理", "ライセンス購入"], correctIndex: 0, explanation: "**Processing Job**: scikit-learn / Spark / 任意のコンテナで前処理 ・ 後処理 ・ 評価。**SKLearnProcessor / SparkMLProcessor / PySparkProcessor** などの組込クラス + 任意 BYOC 対応。" },
  { id: "mla-q32", category: "Training Job", difficulty: 3, question: "SageMaker **Training Job** の **Distributed Data Parallel(DDP)** が最適化する対象として最も適切なものを選びなさい。", choices: ["AllReduce 通信を AWS ネットワーク最適化で高速化", "GPU の台数を倍にする", "前処理を並列化", "推論を並列化"], correctIndex: 0, explanation: "**SageMaker Distributed Data Parallel(SMDDP)**: AWS ネットワークトポロジを意識した AllReduce 実装で **PyTorch DDP / Horovod より高速**。Trn1 / P4d / P5 で利用。" },
  { id: "mla-q33", category: "Hyperparameter", difficulty: 3, question: "SageMaker **Automatic Model Tuning(AMT)** の戦略として **誤っているもの** を選びなさい。", choices: ["Bayesian / Random / Grid / Hyperband", "Warm Start(過去探索を利用)", "Early Stopping", "Mode Collapse"], correctIndex: 3, explanation: "**SageMaker AMT 戦略**: Bayesian(GP)/ Random / Grid / Hyperband(積極打切)。Warm Start で前回 Tuning Job を活用。Mode Collapse は GAN の問題。" },
  { id: "mla-q34", category: "Debugger", difficulty: 3, question: "SageMaker **Debugger** の役割として最も適切なものを選びなさい。", choices: ["学習中のテンソル ・ Loss ・ Gradient を記録 → 異常検知ルール発火", "本番監視", "DB デバッグ", "GPU 物理修理"], correctIndex: 0, explanation: "**Debugger**: 学習中の tensor をリアルタイム保存 + Vanishing Gradient / Overfit / Loss Not Decreasing 等の組込ルール。**Profiling** で GPU / CPU 利用率も。" },
  { id: "mla-q35", category: "推論", difficulty: 3, question: "SageMaker **Asynchronous Inference** の特徴として最も適切なものを選びなさい。", choices: ["長時間推論(最大 1 時間)・ 大ペイロード(1GB)・ S3 経由", "リアルタイム < 100ms", "5 分以内", "GPU 不要"], correctIndex: 0, explanation: "**Async Inference**: S3 上のリクエスト → 処理結果を S3 へ。**長時間 ・ 大ペイロード**(医療画像 / 動画 / 大規模 NLP)向け。Auto-scale 0 → N 対応。" },
  { id: "mla-q36", category: "推論", difficulty: 3, question: "SageMaker **Batch Transform** の主用途として最も適切なものを選びなさい。", choices: ["S3 上の大量データ一括推論(エンドポイント不要)", "リアルタイム推論", "ストリーミング", "学習"], correctIndex: 0, explanation: "**Batch Transform**: 静的データの一括推論。Job ベース + 自動 スケール。**夜間バッチ ・ オフライン分析** に。エンドポイント不要 = 待機コスト 0。" },
  { id: "mla-q37", category: "Marketplace", difficulty: 3, question: "**SageMaker Marketplace** で買える主なものとして **誤っているもの** を選びなさい。", choices: ["事前学習済モデルパッケージ", "アルゴリズムパッケージ", "ML ソリューション(業界別テンプレート)", "EC2 Spot Instance"], correctIndex: 3, explanation: "**Marketplace**: モデル / アルゴリズム / ソリューション。**EC2 は AWS Marketplace の別カテゴリ**。SageMaker 内で 1 クリックデプロイ可能。" },
  { id: "mla-q38", category: "Feature Store", difficulty: 3, question: "SageMaker Feature Store の **Time Travel(履歴クエリ)** の典型用途として最も適切なものを選びなさい。", choices: ["過去時点の特徴量で再現的に学習データ作成 → モデル監査 ・ デバッグ", "未来予測", "GPU 暗号化", "ライセンス管理"], correctIndex: 0, explanation: "**Feature Store Time Travel**: Offline Store の Parquet / Iceberg に履歴保持 → 過去任意時点での特徴量取得。**Train/Serve スキュー検証 ・ Audit ・ Reproducibility** に活用。" },
  { id: "mla-q39", category: "Endpoint", difficulty: 3, question: "**Multi-Model Endpoint(MME)** に同居できるモデル数の目安として最も適切なものを選びなさい。", choices: ["数千〜数万モデル(動的ロード/アンロード)", "1 モデル", "10 モデル", "1 億モデル"], correctIndex: 0, explanation: "**MME**: S3 から動的にロード / メモリ管理。**数千〜数万モデル** 集約可能(顧客別 ・ 地域別モデル)。**Multi-Container Endpoint** は異種コンテナ同居(最大 15)。" },
  { id: "mla-q40", category: "Pipeline", difficulty: 3, question: "SageMaker Pipelines の **Step Type** として **誤っているもの** を選びなさい。", choices: ["Processing / Training / Tuning", "Model / Transform / Register", "Condition / Lambda / Callback", "GPU Reservation"], correctIndex: 3, explanation: "**Pipeline Step Type**: Processing / Training / Tuning / Model / Transform / Register / Condition / Fail / Lambda / Callback / EMR / ClarifyCheck / QualityCheck。GPU Reservation は無関係。" },
  { id: "mla-q41", category: "MLOps", difficulty: 3, question: "SageMaker **Projects** が **自動生成する** リソースとして **誤っているもの** を選びなさい。", choices: ["CodeCommit リポジトリ", "CodeBuild / CodePipeline", "Model Group", "Personal Email"], correctIndex: 3, explanation: "**SageMaker Projects**: AWS Service Catalog テンプレート → CodeCommit / CodeBuild / CodePipeline / EventBridge / Model Group を自動構築。Email は無関係。GitHub / Bitbucket もサポート。" },
  { id: "mla-q42", category: "Clarify", difficulty: 3, question: "SageMaker Clarify の **Pre-training Bias 指標** として最も適切なものを選びなさい。", choices: ["Class Imbalance / Difference in Proportions of Labels / KL Divergence", "Recall / Precision", "RMSE", "BLEU"], correctIndex: 0, explanation: "**Clarify Pre-training**: CI(クラス比偏り)/ DPL(ラベル分布差)/ KL / JS / LP / TVD / KS。学習データのバイアスを多角的に測定。**Post-training**(予測値バイアス)とセット。" },
  { id: "mla-q43", category: "Inferentia", difficulty: 3, question: "**AWS Inferentia** チップの用途として最も適切なものを選びなさい。", choices: ["推論専用 AI アクセラレータ(GPU 比 4× コスト効率)", "学習専用", "DB アクセラレータ", "暗号アクセラレータ"], correctIndex: 0, explanation: "**Inferentia(Inf1 / Inf2)**: AWS 設計推論専用チップ。**GPU 比 4× コスト効率 ・ 低レイテンシ**。**Trainium**(Trn1 / Trn2)は学習専用。Neuron SDK で PyTorch / TF 連携。" },
  { id: "mla-q44", category: "Compilation", difficulty: 3, question: "**SageMaker Neo** の役割として最も適切なものを選びなさい。", choices: ["モデルをターゲット HW 用に再コンパイル(2× 高速化 ・ 1/10 メモリ)", "学習", "DB 接続", "認証"], correctIndex: 0, explanation: "**Neo**: PyTorch / TF / XGBoost モデルを Intel / NVIDIA / Inferentia / Edge デバイス向けに最適化コンパイル。**TVM ベース**。Neo + Inferentia で究極コスト最適化。" },
  { id: "mla-q45", category: "Edge", difficulty: 3, question: "**SageMaker Edge Manager** の用途として最も適切なものを選びなさい。", choices: ["エッジデバイスのモデル管理 ・ デプロイ ・ 監視(Greengrass 連携)", "GPU クラスタ", "DB 同期", "認証"], correctIndex: 0, explanation: "**Edge Manager**: エッジデバイス(IoT / カメラ / 車載)のモデル管理 + メトリクス収集。**Greengrass** で OTA 更新。**Neo + Edge Manager** がペア。" },
  { id: "mla-q46", category: "セキュリティ", difficulty: 3, question: "SageMaker の **VPC モード** + **Network Isolation** の併用効果として最も適切なものを選びなさい。", choices: ["インターネット完全遮断 + VPC 内のみで学習 ・ 推論", "速度向上", "コスト削減", "GUI 改善"], correctIndex: 0, explanation: "**VPC モード + Network Isolation = True**: 学習 / 推論コンテナのアウトバウンド不可 → モデルやデータの外部送信不可。**金融 ・ 医療 ・ 政府** などの規制業界で必須。" },
  { id: "mla-q47", category: "コスト", difficulty: 3, question: "SageMaker の **Spot Training(Managed Spot Training)** の効果として最も適切なものを選びなさい。", choices: ["最大 90% 学習コスト削減 + Checkpoint で中断耐性", "推論を高速化", "GUI 改善", "DB 高速化"], correctIndex: 0, explanation: "**Managed Spot Training**: EC2 Spot を Training Job で利用 → **最大 90% 割引**。`max_wait` で待機上限 + Checkpoint で中断時の再開。長時間学習で効果大。" },
  { id: "mla-q48", category: "MLflow", difficulty: 3, question: "**SageMaker managed MLflow** の特徴として最も適切なものを選びなさい。", choices: ["AWS でフルマネージドの MLflow Tracking Server(2024)", "OSS のみ", "GPU 必須", "DB 不要"], correctIndex: 0, explanation: "**SageMaker Managed MLflow Tracking Server**(2024): フルマネージドの MLflow(Tracking + Registry)。**IAM 統合 + 自動バックアップ + コスト効率**。Self-host から移行容易。" },
  { id: "mla-q49", category: "実務", difficulty: 3, question: "本番 ML パイプラインで **Schema Drift** を検出する SageMaker 機能として最も適切なものを選びなさい。", choices: ["Model Monitor の Data Quality Monitor", "Lambda", "DynamoDB", "S3 Versioning"], correctIndex: 0, explanation: "**Data Quality Monitor**: 入力データの **欠損 ・ 範囲外 ・ 型不一致 ・ スキーマ変更** を検出。Inference Captured Data → ベースラインと比較 → CloudWatch アラート。" },
  { id: "mla-q50", category: "次のステップ", difficulty: 1, question: "MLA-C01 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["MLS-C01(ML Specialty)・ DEA-C01(Data Engineer)・ SAP-C02(SA Professional)", "Cloud Practitioner", "ITパスポート", "再受験"], correctIndex: 0, explanation: "**MLA-C01 → MLS-C01(Specialty、ML 深掘り)・ DEA-C01(Data Engineer、データ寄り)・ SAP-C02(全体設計上位)**。三大クラウド ML 揃え(Azure DP-100 / GCP Pro MLE)も視野。" },
  { id: "mla-q51", category: "Studio Lab", difficulty: 3, question: "**SageMaker Studio Lab** の特徴として最も適切なものを選びなさい。", choices: ["AWS アカウント不要 + 無料の Notebook 環境(学習用)", "Production 用", "GPU 強化", "認証必須"], correctIndex: 0, explanation: "**Studio Lab**: メールアドレスのみで使える無料 Jupyter Lab + 12h CPU / 4h GPU。**学習 ・ 実験用**。SageMaker Studio(Production)とは別物。" },
  { id: "mla-q52", category: "Pipelines", difficulty: 3, question: "**SageMaker Pipelines** で **Conditional Step** の用途として最も適切なものを選びなさい。", choices: ["評価メトリクスが閾値超過時のみモデル登録するなど分岐", "並列実行", "GPU 制御", "認証"], correctIndex: 0, explanation: "**Condition Step**: 前 Step の出力で if-then 分岐。**Quality Gate**(精度未達なら登録しない)・ A/B 選択などに活用。" },
  { id: "mla-q53", category: "Feature Store", difficulty: 3, question: "**SageMaker Feature Store** の **Online / Offline** の使い分けで **誤っているもの** を選びなさい。", choices: ["Online: 推論時低レイテンシ", "Offline: 学習 ・ バッチ", "Online は DynamoDB ベース", "Online は全データ無制限保存"], correctIndex: 3, explanation: "**Online Store**: DynamoDB ベース + ホット Feature のみ(数日〜)。**Offline Store**: S3 + Iceberg で長期 ・ 全履歴。両者の使い分けが重要。" },
  { id: "mla-q54", category: "Endpoint", difficulty: 3, question: "**SageMaker Real-time Endpoint** の **Auto Scaling** の閾値として推奨されるメトリクスを選びなさい。", choices: ["SageMakerVariantInvocationsPerInstance", "CPU 利用率のみ", "GPU メモリ", "ネットワーク帯域"], correctIndex: 0, explanation: "**SageMakerVariantInvocationsPerInstance**: 1 インスタンスあたりの呼出数。**Target Tracking** で設定。CPU / Latency などは補助指標。" },
  { id: "mla-q55", category: "Marketplace", difficulty: 3, question: "**SageMaker Marketplace** で **販売されている** ものとして **誤っているもの** を選びなさい。", choices: ["事前学習済モデルパッケージ", "アルゴリズムパッケージ", "ML ソリューション", "EC2 インスタンス"], correctIndex: 3, explanation: "**Marketplace**: モデル / アルゴリズム / ML ソリューション。EC2 / EBS / RDS 等は **AWS Marketplace** 側で SageMaker Marketplace とは別。" },
  { id: "mla-q56", category: "監視", difficulty: 3, question: "**SageMaker Model Monitor** の **4 種類** として **誤っているもの** を選びなさい。", choices: ["Data Quality / Model Quality", "Bias Drift / Feature Attribution Drift", "Hardware Drift", "全 4 種が標準"], correctIndex: 2, explanation: "**Model Monitor 4 種**: Data Quality / Model Quality / Bias Drift / Feature Attribution Drift。Hardware は CloudWatch / Container Insights。" },
  { id: "mla-q57", category: "Clarify", difficulty: 3, question: "**SageMaker Clarify** の **Post-training Bias Detection** の代表指標として最も適切なものを選びなさい。", choices: ["Disparate Impact / Difference in Conditional Acceptance / Recall Difference", "MSE", "Accuracy", "GPU 利用率"], correctIndex: 0, explanation: "**Clarify Post-training Bias**: DI / DCAcc / DCR / SD / FT / Recall Diff など 11+ 指標。**Pre-training**(学習データバイアス)とセット。" },
  { id: "mla-q58", category: "Lineage", difficulty: 3, question: "**SageMaker Lineage Tracking** の役割として最も適切なものを選びなさい。", choices: ["Data → Training → Model → Endpoint の系譜を自動記録", "GPU 監視", "課金", "認証"], correctIndex: 0, explanation: "**ML Lineage Tracking**: SageMaker SDK / Pipelines で自動構築 → 監査 ・ 再現性 ・ Compliance に活用。**Model Cards** と連携で完全ガバナンス。" },
  { id: "mla-q59", category: "Bedrock 連携", difficulty: 3, question: "**SageMaker JumpStart** と **Bedrock** の使い分けとして最も適切なものを選びなさい。", choices: ["JumpStart: 自社管理(VPC / カスタマイズ)、Bedrock: マネージド API", "両者同じ", "JumpStart は廃止", "Bedrock は古い"], correctIndex: 0, explanation: "**JumpStart**: 自分の AWS アカウントにモデルデプロイ(完全制御 + ファインチューン自由)。**Bedrock**: マネージド API(運用負荷ゼロ)。要件で使い分け。" },
  { id: "mla-q60", category: "コスト", difficulty: 3, question: "**SageMaker Savings Plans** の特徴として最も適切なものを選びなさい。", choices: ["1 年 / 3 年コミットで Compute コスト最大 64% 削減", "ストレージ専用", "GPU 不要", "認証強化"], correctIndex: 0, explanation: "**ML Savings Plans**: SageMaker の Notebook / Training / Endpoint / Studio に適用。**1 年 / 3 年 + Upfront / Partial / No Upfront** の組合せ。" },
  { id: "mla-q61", category: "MLOps", difficulty: 3, question: "**SageMaker MLflow** で **モデル Registry** に登録する際の **Approval Stage** として **誤っているもの** を選びなさい。", choices: ["PendingManualApproval / Approved / Rejected", "Staging / Production", "Archived", "GPU Reserved"], correctIndex: 3, explanation: "**Model Approval Status**: Pending / Approved / Rejected + Archived。**Custom Stage**(Dev → Staging → Prod)を独自定義も可能。" },
  { id: "mla-q62", category: "Distributed Training", difficulty: 3, question: "**SageMaker Distributed Training Library** で **Data Parallel** に該当するものを選びなさい。", choices: ["SMDDP(SageMaker Distributed Data Parallel)", "SMP(Model Parallel)", "GPU 単体", "TPU"], correctIndex: 0, explanation: "**SMDDP**: AllReduce の AWS 最適化版(Horovod / PyTorch DDP 互換)。**SMP**(Model Parallel)は大モデルを GPU 間分割。" },
  { id: "mla-q63", category: "Containers", difficulty: 3, question: "**SageMaker のコンテナ実行モード** として **誤っているもの** を選びなさい。", choices: ["Built-in Algorithms(AWS 用意のコンテナ)", "Framework Containers(TF / PyTorch 等)", "BYOC(Bring Your Own Container)", "Bare Metal Linux"], correctIndex: 3, explanation: "**SageMaker は全てコンテナ実行**: Built-in / Framework / BYOC(ECR 経由 Custom)。Bare Metal は EC2 直接利用の話。" },
  { id: "mla-q64", category: "Q for ML", difficulty: 3, question: "**Amazon Q Developer in SageMaker** の機能として最も適切なものを選びなさい。", choices: ["SageMaker Studio 内で AI コーディング補助", "DB クエリ", "認証", "GPU 監視"], correctIndex: 0, explanation: "**Q Developer in SageMaker**(2024): Studio Notebook 内で **コード生成 ・ 説明 ・ デバッグ ・ Pipeline 構築** を AI 補助。GitHub Copilot の SageMaker 版。" },
  { id: "mla-q65", category: "実務", difficulty: 3, question: "**ML プロジェクト立ち上げ時** に最も重要なステップとして最も適切なものを選びなさい。", choices: ["Business Problem → ML Problem への変換 + Success Metric 合意", "GPU 購入", "全データ収集", "Notebook 起動"], correctIndex: 0, explanation: "**ML プロジェクト原則**: ① Business 課題定義 ② ML タスク化(分類 / 回帰 / etc)③ 成功指標(Business + ML 両面)④ データ + ベースライン ⑤ 開発。" },
  { id: "mla-q66", category: "SageMaker", difficulty: 3, question: "**SageMaker Studio** の主要機能として **誤っているもの** を選びなさい。", choices: ["Jupyter / VS Code / RStudio IDE", "Pipeline / Experiment / Lineage 統合 UI", "Model Registry / Endpoint デプロイ", "GPU 個人所有必須"], correctIndex: 3, explanation: "**SageMaker Studio**: ML 統合 IDE。**JupyterLab / Code Editor(VS Code)/ RStudio Workbench**・ Experiments / Pipelines / Model Registry / Feature Store。**Studio Classic から Studio へ統合**進行中。" },
  { id: "mla-q67", category: "SageMaker", difficulty: 3, question: "**SageMaker Data Wrangler** の用途として最も適切なものを選びなさい。", choices: ["GUI でデータ前処理(300+ 変換)→ Pipeline export", "学習用 GPU", "認証", "Cost"], correctIndex: 0, explanation: "**Data Wrangler**: ノーコード ETL / EDA。**300+ Built-in Transforms / Visualization / Quick Model**・ Recipe を SageMaker Pipeline / Processing Job として export。" },
  { id: "mla-q68", category: "Pipeline", difficulty: 3, question: "**SageMaker Pipelines** の Step 種類として **誤っているもの** を選びなさい。", choices: ["Training / Processing / Tuning", "Transform / Condition / Model", "Lambda / Callback / EMR / Quality Check", "GPU Step"], correctIndex: 3, explanation: "**Pipeline Steps**: Training / Processing / Tuning / Transform / Condition / Model / RegisterModel / Lambda / Callback / Clarify / Quality Check / EMR / Notebook。" },
  { id: "mla-q69", category: "Feature Store", difficulty: 3, question: "**SageMaker Feature Store** の Online vs Offline Store の違いとして最も適切なものを選びなさい。", choices: ["Online=DynamoDB ms 推論、Offline=S3 + Glue 学習 / Backfill", "両者同じ", "Online=S3", "Offline=DynamoDB"], correctIndex: 0, explanation: "**Feature Store**: Online(DynamoDB ベース ・ <ms)・ Offline(S3 Parquet + Glue Catalog ・ Athena クエリ可)。**Feature Group / Point-in-Time Join** で訓練 / 推論整合。" },
  { id: "mla-q70", category: "Deployment", difficulty: 3, question: "**SageMaker Endpoint** の種類として **誤っているもの** を選びなさい。", choices: ["Real-time Endpoint", "Multi-Model Endpoint(MME)", "Serverless Inference / Async Inference", "GPU Endpoint"], correctIndex: 3, explanation: "**Endpoint 4 種**: Real-time / Multi-Model / Multi-Container / Serverless / Async / Batch Transform。**GPU は Endpoint 種別ではなく Instance Type**。" },
  { id: "mla-q71", category: "MLOps", difficulty: 3, question: "**SageMaker Model Registry の Approval Status** として **誤っているもの** を選びなさい。", choices: ["PendingManualApproval / Approved / Rejected", "ModelPackage Group + Version", "Cross-Account Deployment", "GPU Approval"], correctIndex: 3, explanation: "**Model Registry**: Group → Version → Approval。**Pipelines + Conditional Step + RegisterModel**で自動化 ・ EventBridge で Deployment 起動。" },
  { id: "mla-q72", category: "Monitoring", difficulty: 3, question: "**Model Monitor の 4 種類** として **誤っているもの** を選びなさい。", choices: ["Data Quality / Model Quality", "Bias Drift / Feature Attribution Drift", "Schedule 実行 + CloudWatch Alarm", "GPU Drift"], correctIndex: 3, explanation: "**Model Monitor**: ① Data Quality(分布)② Model Quality(精度劣化)③ Bias Drift(公平性)④ Feature Attribution Drift(SHAP 変化)。**Schedule + CloudWatch + EventBridge** 連携。" },
  { id: "mla-q73", category: "Bedrock", difficulty: 3, question: "**SageMaker と Bedrock の関係** として最も適切なものを選びなさい。", choices: ["MLA-C01 では両者を ML 課題 / GenAI 課題で使い分ける必要あり", "完全独立", "SageMaker 廃止", "Bedrock 学習専用"], correctIndex: 0, explanation: "**MLA-C01 範囲**: 古典 ML(SageMaker)+ GenAI(Bedrock + JumpStart)両方。**Foundation Model 利用** は Bedrock 推奨 ・ **Custom 学習 / Tabular**は SageMaker。" },
  { id: "mla-q74", category: "Cost", difficulty: 3, question: "**SageMaker のコスト最適化** として **誤っているもの** を選びなさい。", choices: ["Spot Training(最大 90% 割引)+ Checkpoint", "Inferentia / Graviton 推論", "Serverless / Async Inference + Auto Scaling to 0", "全 Endpoint Always-on Max"], correctIndex: 3, explanation: "**Cost 最適化**: Spot + Checkpoint / Inferentia2 / Graviton ARM / Serverless / Async / MME / Savings Plans / Reserved。**Always-on Max は無駄**。" },
  { id: "mla-q75", category: "Security", difficulty: 3, question: "**SageMaker VPC Only Mode + Network Isolation** の効果として最も適切なものを選びなさい。", choices: ["Container のインターネットを完全遮断 → 規制業界対応", "速度向上", "GPU 増", "認証 SSO"], correctIndex: 0, explanation: "**VPC Only + Network Isolation**: 学習 / 推論コンテナのインターネット遮断 → VPC Endpoint 経由のみ。**金融 / 医療 / 政府 / 製薬**で必須。**KMS / CMK + Private Link** と組合せ。" },
  { id: "mla-q76", category: "Lineage", difficulty: 3, question: "**SageMaker ML Lineage Tracking** の追跡対象として **誤っているもの** を選びなさい。", choices: ["Data → Job → Run → Model → Endpoint", "Experiment / Trial / Component", "Artifact / Association / Action", "GPU シリアル"], correctIndex: 3, explanation: "**Lineage**: Data Source → Training Job → Model → Endpoint の関係を Asset Graph で可視化。**監査 / 再現性 / インシデント対応**に必須。" },
  { id: "mla-q77", category: "AutoML", difficulty: 3, question: "**SageMaker Autopilot** の特徴として最も適切なものを選びなさい。", choices: ["Tabular AutoML + Explainability + Code 公開(Black-Box 回避)", "GUI のみ", "Black-Box", "GPU 必須"], correctIndex: 0, explanation: "**Autopilot**: AutoML だがコード生成 ・ Explainability Report も自動生成 → **White-Box AutoML**。**Canvas**(No-Code GUI)・ **JumpStart**(Foundation Model)と使い分け。" },
  { id: "mla-q78", category: "GenAI", difficulty: 3, question: "**Bedrock Knowledge Bases + SageMaker** の連携として最も適切なものを選びなさい。", choices: ["KB の Embedding に SageMaker Endpoint の Custom Model 利用可", "完全独立", "SageMaker 専用", "認証のみ"], correctIndex: 0, explanation: "**Bedrock KB**: Embedding に Titan / Cohere / **SageMaker Hosted Custom Model**(2024+)選択可。**Generation も同様**で柔軟な構成。" },
  { id: "mla-q79", category: "DevOps", difficulty: 3, question: "**SageMaker MLOps with CodeCommit / CodePipeline** の典型構成として **誤っているもの** を選びなさい。", choices: ["CodeCommit + CodeBuild + CodePipeline で CI/CD", "EventBridge + Step Functions オーケストレーション", "Service Catalog で MLOps テンプレ展開", "GUI 手動デプロイ"], correctIndex: 3, explanation: "**SageMaker MLOps**: CodeCommit / GitHub + CodeBuild + CodePipeline + EventBridge + Step Functions + Service Catalog + SageMaker Projects。**GUI 手動はアンチパターン**。" },
  { id: "mla-q80", category: "Cert", difficulty: 2, question: "**MLA-C01** の **位置づけ** として最も適切なものを選びなさい。", choices: ["Associate レベル(2024 リリース ・ Specialty MLS-C01 の Associate 版)", "Foundational", "Specialty", "Professional"], correctIndex: 0, explanation: "**MLA-C01**(2024 リリース): **AWS Certified Machine Learning Engineer - Associate**。**AIF-C01(F)→ MLA-C01(A)→ MLS-C01(S)** の階層。**実務 ML Engineer 必須**化が進行。" },
];
