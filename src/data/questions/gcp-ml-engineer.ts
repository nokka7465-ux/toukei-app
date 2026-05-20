import type { Question } from "@/types/content";

export const gcpMlEngineerQuestions: Question[] = [
  {
    id: "gcpml-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Google Cloud Professional Machine Learning Engineer の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Foundational",
      "Associate",
      "Professional",
      "Specialty",
    ],
    correctIndex: 2,
    explanation:
      "**Professional ML Engineer** は GCP 認定の **Professional レベル**(高度認定)。Foundational に Cloud Digital Leader / Generative AI Leader、Associate に Associate Cloud Engineer。",
  },
  {
    id: "gcpml-q2",
    category: "Vertex AI",
    difficulty: 2,
    question:
      "Vertex AI で **Kubeflow ベースの ML パイプライン** を実行するサービスとして最も適切なものを選びなさい。",
    choices: [
      "Vertex AI Workbench",
      "Vertex AI Pipelines",
      "Vertex AI Feature Store",
      "Vertex AI Studio",
    ],
    correctIndex: 1,
    explanation:
      "**Vertex AI Pipelines** は Kubeflow Pipelines + TFX をベースとしたサーバレス ML パイプラインサービス。Workbench は Jupyter、Feature Store は特徴量管理、Studio は生成 AI。",
  },
  {
    id: "gcpml-q3",
    category: "TPU",
    difficulty: 3,
    question:
      "Google 自家製の AI チップ **TPU** に関する記述として最も適切なものを選びなさい。",
    choices: [
      "GPU の代替で TensorFlow / PyTorch / JAX で利用可能",
      "TPU は推論専用、学習には使えない",
      "オンプレでのみ動作",
      "BigQuery 内部処理にのみ使用される",
    ],
    correctIndex: 0,
    explanation:
      "**TPU** は Google 自家製の AI 専用チップ。学習 + 推論の両方で使用可能。TF / PyTorch / JAX 対応で、TPU v5e は推論 / 中規模学習向け、v5p は大規模学習向け。",
  },
  {
    id: "gcpml-q4",
    category: "BQML",
    difficulty: 3,
    question:
      "BigQuery ML(BQML)から **Gemini を呼出して文章生成** する関数として最も適切なものを選びなさい。",
    choices: [
      "ML.PREDICT",
      "ML.GENERATE_TEXT",
      "ML.UNDERSTAND_TEXT",
      "ML.TRANSLATE",
    ],
    correctIndex: 1,
    explanation:
      "**ML.GENERATE_TEXT** は BigQuery から Gemini を呼出して文章生成する関数。SQL のみで生成 AI を扱える BQML の代表機能。",
  },
  {
    id: "gcpml-q5",
    category: "BQML",
    difficulty: 2,
    question:
      "BQML がサポートする時系列予測アルゴリズムとして最も適切なものを選びなさい。",
    choices: [
      "ARIMA / ARIMA_PLUS",
      "ResNet",
      "BERT",
      "GAN",
    ],
    correctIndex: 0,
    explanation:
      "**ARIMA / ARIMA_PLUS** が BQML の時系列予測モデル。複数系列 + 季節性 + 休日効果を自動検出。",
  },
  {
    id: "gcpml-q6",
    category: "ETL",
    difficulty: 2,
    question:
      "Apache Beam ベースの **ストリーム + バッチ ETL** に対応した Google Cloud のマネージドサービスとして最も適切なものを選びなさい。",
    choices: [
      "Cloud Dataflow",
      "Cloud Dataproc",
      "Cloud Composer",
      "Cloud Data Fusion",
    ],
    correctIndex: 0,
    explanation:
      "**Cloud Dataflow** は Apache Beam ベースのサーバレス ETL。**Dataproc** は Hadoop/Spark、**Composer** は Airflow、**Data Fusion** は GUI ベース ETL。",
  },
  {
    id: "gcpml-q7",
    category: "学習",
    difficulty: 3,
    question:
      "TensorFlow で **GPU を持つ複数 VM 間で同期分散学習** を行うストラテジとして最も適切なものを選びなさい。",
    choices: [
      "MirroredStrategy",
      "MultiWorkerMirroredStrategy",
      "TPUStrategy",
      "ParameterServerStrategy",
    ],
    correctIndex: 1,
    explanation:
      "**MultiWorkerMirroredStrategy** は複数 VM(Worker)間の同期分散学習。**MirroredStrategy** は単一 VM 内の複数 GPU、**TPUStrategy** は TPU、**ParameterServerStrategy** はパラメータサーバ型(非同期)。",
  },
  {
    id: "gcpml-q8",
    category: "コスト",
    difficulty: 2,
    question:
      "中断耐性ある SageMaker / Vertex AI 学習で **60 〜 80% コスト削減** が見込める購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "On-Demand VM",
      "Spot VM",
      "Committed Use Discount",
      "Reserved Capacity",
    ],
    correctIndex: 1,
    explanation:
      "**Spot VM** は GCP の余剰キャパシティを活用、最大 60 〜 80% 割引。中断時の再開可能なよう checkpoint 保存が必要。",
  },
  {
    id: "gcpml-q9",
    category: "HPO",
    difficulty: 3,
    question:
      "Vertex AI で **ベイズ最適化によるハイパーパラメータ探索** を提供するサービスとして最も適切なものを選びなさい。",
    choices: [
      "Vertex AI Vizier",
      "Vertex AI Workbench",
      "Vertex AI Tensorboard",
      "Vertex AI Matching Engine",
    ],
    correctIndex: 0,
    explanation:
      "**Vertex AI Vizier** はベイズ最適化のマネージドサービス。Vertex AI Hyperparameter Tuning の裏で動いている。",
  },
  {
    id: "gcpml-q10",
    category: "Pipelines",
    difficulty: 3,
    question:
      "Vertex AI Pipelines で **同じ入力のステップは再実行をスキップ** する機能として最も適切なものを選びなさい。",
    choices: [
      "Caching",
      "Scheduling",
      "Artifact Lineage",
      "DSL Compiler",
    ],
    correctIndex: 0,
    explanation:
      "**Caching** は前回と同じ入力 + 同じコンポーネントなら結果を再利用しスキップ。開発時のサイクル高速化 + コスト削減に有効。",
  },
  {
    id: "gcpml-q11",
    category: "推論",
    difficulty: 2,
    question:
      "Vertex AI で **大量データの一括推論** を行う場合に最も適切なオプションを選びなさい。",
    choices: [
      "Online Prediction",
      "Batch Prediction",
      "Edge Inference",
      "Streaming Prediction",
    ],
    correctIndex: 1,
    explanation:
      "**Batch Prediction** は GCS の CSV / TFRecord に対する一括推論で、大量データ向けに最適。Online Prediction は ms 級リアルタイム。",
  },
  {
    id: "gcpml-q12",
    category: "推論",
    difficulty: 3,
    question:
      "推論サーバとして **複数フレームワーク(TF / PyTorch / ONNX)を統合的に提供** する NVIDIA の OSS として最も適切なものを選びなさい。",
    choices: [
      "TensorFlow Serving",
      "TorchServe",
      "NVIDIA Triton",
      "Optimized TensorFlow Runtime",
    ],
    correctIndex: 2,
    explanation:
      "**NVIDIA Triton Inference Server** は複数フレームワーク統合推論サーバ。Vertex AI Custom Container でも利用される。",
  },
  {
    id: "gcpml-q13",
    category: "Monitoring",
    difficulty: 3,
    question:
      "Vertex AI Model Monitoring で **学習データと推論データの分布差** を検出する監視種別として最も適切なものを選びなさい。",
    choices: [
      "Training-Serving Skew",
      "Prediction Drift",
      "Concept Drift",
      "Feature Attribution Drift",
    ],
    correctIndex: 0,
    explanation:
      "**Training-Serving Skew** は学習時 vs 推論時の特徴量分布差。**Prediction Drift** は推論データの時間経過での変化。両者は異なる課題に対応する。",
  },
  {
    id: "gcpml-q14",
    category: "Explanations",
    difficulty: 3,
    question:
      "Vertex AI Explanations で **画像 ・ 動画モデル向け** の説明手法として最も適切なものを選びなさい。",
    choices: [
      "XRAI",
      "Sampled Shapley",
      "Integrated Gradients",
      "PCA",
    ],
    correctIndex: 0,
    explanation:
      "**XRAI** は画像 ・ 動画向けの説明手法(画素グループの寄与度)。**Sampled Shapley** はツリー / 表データ、**Integrated Gradients** は NN ベース全般。",
  },
  {
    id: "gcpml-q15",
    category: "責任ある AI",
    difficulty: 3,
    question:
      "Google の AI 原則(2018 年公開)に **含まれない** ものを選びなさい。",
    choices: [
      "社会に有益であること",
      "不公平な偏見を生まない / 強化しない",
      "プライバシー設計の原則を組み込む",
      "あらゆる商業利用を最大化する",
    ],
    correctIndex: 3,
    explanation:
      "Google の 7 原則は (1) 社会に有益、(2) 偏見回避、(3) 安全性、(4) 説明責任、(5) プライバシー、(6) 科学的卓越性、(7) 原則に沿う用途。商業利用最大化は含まれない。",
  },
  {
    id: "gcpml-q16",
    category: "Gemini",
    difficulty: 2,
    question:
      "Vertex AI で **複数ベンダーの基盤モデル** を一覧 ・ デプロイできる機能として最も適切なものを選びなさい。",
    choices: [
      "Model Registry",
      "Model Garden",
      "Workbench",
      "Tensorboard",
    ],
    correctIndex: 1,
    explanation:
      "**Vertex AI Model Garden** は Gemini / Imagen / Llama / Mistral / Anthropic などの基盤モデルカタログ。1 クリックでデプロイ可能。",
  },
  {
    id: "gcpml-q17",
    category: "RAG",
    difficulty: 3,
    question:
      "GCP で **RAG パイプラインのベクトル検索** に使う標準的なサービスとして最も適切なものを選びなさい。",
    choices: [
      "Cloud Spanner",
      "Vertex AI Search / Vertex AI Matching Engine",
      "Cloud Pub/Sub",
      "Cloud Bigtable",
    ],
    correctIndex: 1,
    explanation:
      "**Vertex AI Search**(マネージド全文 + ベクトル)・ **Vertex AI Matching Engine**(高性能ベクトル類似検索)が GCP RAG の標準。",
  },
  {
    id: "gcpml-q18",
    category: "Tuning",
    difficulty: 3,
    question:
      "大モデルから小モデルへ知識を移転する技術の名称として最も適切なものを選びなさい。",
    choices: [
      "Distillation(蒸留)",
      "Quantization(量子化)",
      "Pruning(剪定)",
      "Augmentation(拡張)",
    ],
    correctIndex: 0,
    explanation:
      "**Distillation(蒸留)** は大モデル(Teacher)の出力を小モデル(Student)が真似るように学習させる。エッジ / モバイル向け軽量化で頻用。",
  },
  {
    id: "gcpml-q19",
    category: "セキュリティ",
    difficulty: 2,
    question:
      "GCP で AI サービスを **VPC 内のプライベート接続のみ** で利用するための機能として最も適切なものを選びなさい。",
    choices: [
      "VPC Service Controls",
      "Cloud Armor",
      "Cloud CDN",
      "Public IP",
    ],
    correctIndex: 0,
    explanation:
      "**VPC Service Controls** で AI サービスをパブリックインターネットを通さず VPC 内のみで利用可能。データの社外流出を防ぐ。",
  },
  {
    id: "gcpml-q20",
    category: "次のステップ",
    difficulty: 1,
    question:
      "GCP Professional ML Engineer 合格後、データ基盤側を強化するのに最も適切な GCP 認定として最も適切なものを選びなさい。",
    choices: [
      "Cloud Digital Leader",
      "Associate Cloud Engineer",
      "Professional Data Engineer",
      "Generative AI Leader",
    ],
    correctIndex: 2,
    explanation:
      "ML Engineer の自然な次のステップは **Professional Data Engineer**(データ基盤側)または **Professional Cloud Architect**(全体)。Foundational(Cloud Digital Leader / Gen AI Leader)は逆方向。",
  },
  {
    id: "gcpml-q21",
    category: "Vertex AI",
    difficulty: 3,
    question:
      "Vertex AI Pipelines が **基盤として採用** している OSS フレームワークを選びなさい。",
    choices: [
      "Apache Airflow",
      "Kubeflow Pipelines / TFX",
      "Argo Workflows のみ",
      "Apache Beam",
    ],
    correctIndex: 1,
    explanation:
      "**Vertex AI Pipelines は Kubeflow Pipelines(KFP)v2 / TFX をマネージドで実行**。Python SDK で `@dsl.pipeline` を定義すると Vertex AI 上で DAG 実行。Composer は Airflow ベースで別物。",
  },
  {
    id: "gcpml-q22",
    category: "Vertex AI",
    difficulty: 3,
    question:
      "Vertex AI **Model Registry** で **本番モデルにエイリアスを付けロールバックを管理** する標準機能として最も適切なものを選びなさい。",
    choices: [
      "Model Version + Alias(`production` / `staging` 等)",
      "Cloud Storage バージョニング",
      "BigQuery History",
      "Cloud Build 通知",
    ],
    correctIndex: 0,
    explanation:
      "**Model Version + Alias**(MLflow Registry 風)で **`production` / `staging` などのラベル** を Version に付与。古い Version へのロールバックや A/B テストでの参照に利用。",
  },
  {
    id: "gcpml-q23",
    category: "Vertex AI",
    difficulty: 3,
    question:
      "Vertex AI Endpoint で **トラフィック分散による Canary デプロイ** を実現する機能を選びなさい。",
    choices: [
      "Traffic Split(Endpoint 配下の各 Deployed Model に重み)",
      "Multi-Region Endpoint",
      "Cloud Load Balancing",
      "Traffic Director",
    ],
    correctIndex: 0,
    explanation:
      "**Vertex AI Endpoint の Traffic Split** で **複数 Deployed Model に重み(%)を割り当て**、Canary / A/B / Blue-Green を実現。Cloud Load Balancing は L7 LB で別レイヤー。",
  },
  {
    id: "gcpml-q24",
    category: "Vertex AI Feature Store",
    difficulty: 3,
    question:
      "Vertex AI Feature Store の **新世代(2024〜)** で導入された **オンライン Feature 取得の基盤** として最も適切なものを選びなさい。",
    choices: [
      "BigQuery を Online Source として直接読込(オプティマイズドオンラインサービング)",
      "Bigtable のみ",
      "Memorystore Redis のみ",
      "Cloud SQL",
    ],
    correctIndex: 0,
    explanation:
      "**Vertex AI Feature Store の新世代(2024 GA)** は **BigQuery を直接 Online Source とし、Optimized Online Serving** で低レイテンシ取得。Train/Serve スキューを排除。旧世代は Bigtable 内蔵。",
  },
  {
    id: "gcpml-q25",
    category: "Generative AI",
    difficulty: 3,
    question:
      "**Vertex AI で RAG(Retrieval-Augmented Generation)を構築** する標準的な構成として最も適切なものを選びなさい。",
    choices: [
      "Vertex AI Search(旧 Enterprise Search)+ Gemini モデル",
      "BigQuery + Cloud Functions",
      "Bigtable + Pub/Sub",
      "AutoML Vision",
    ],
    correctIndex: 0,
    explanation:
      "**Vertex AI Search**(マネージド検索 + Vector + Semantic Reranker)+ **Gemini / Gemini Nano** で RAG を構築。**Vector Search を直接使う構成** も可(より柔軟、Search を使わない)。",
  },
  {
    id: "gcpml-q26",
    category: "Vertex AI Workbench",
    difficulty: 2,
    question:
      "Vertex AI Workbench(Notebooks)の **Managed Notebooks** が **User-Managed Notebooks** より優れる点として最も適切なものを選びなさい。",
    choices: [
      "Idle シャットダウン ・ 自動アップグレード ・ 統合認証 ・ Spark カーネル",
      "より高い GPU 性能",
      "より低価格",
      "オンプレ実行可能",
    ],
    correctIndex: 0,
    explanation:
      "**Managed Notebooks** は **idle 自動シャットダウン ・ 自動アップグレード ・ Vertex AI 統合 ・ Spark / BQ カーネル** などマネージド機能が豊富。User-Managed は Compute Engine VM ベースで自由度が高いが運用負荷も大。",
  },
  {
    id: "gcpml-q27",
    category: "TPU",
    difficulty: 3,
    question:
      "**TPU(Tensor Processing Unit)** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "Google が設計した行列演算特化型 ASIC",
      "TensorFlow / JAX / PyTorch XLA で利用可能",
      "GPU と完全互換で CUDA がそのまま動く",
      "v5e / v5p / Trillium(v6e)など世代がある",
    ],
    correctIndex: 2,
    explanation:
      "**TPU は CUDA 非互換**。TensorFlow / JAX / PyTorch XLA(via PJRT)経由で利用。**XLA コンパイラを通したコードのみ動作**。世代は v2 → v3 → v4 → v5e/v5p → Trillium と進化。",
  },
  {
    id: "gcpml-q28",
    category: "Vertex AI Monitoring",
    difficulty: 3,
    question:
      "Vertex AI Model Monitoring の **検出対象** として **誤っているもの** を選びなさい。",
    choices: [
      "Feature Skew(学習 vs 本番の分布差)",
      "Feature Drift(本番分布の経時変化)",
      "Prediction Drift(予測値の分布変化)",
      "GPU 故障率",
    ],
    correctIndex: 3,
    explanation:
      "**Vertex AI Monitoring 対象**: Feature Skew / Drift / Prediction Drift / Output Drift / Attribution Drift。**ハードウェア(GPU)監視は Cloud Monitoring の管轄**。",
  },
  {
    id: "gcpml-q29",
    category: "Explainable AI",
    difficulty: 3,
    question:
      "Vertex AI Explainable AI が **TabNet / Tree モデル / DNN** に対して提供する代表的な解釈手法として最も適切なものを選びなさい。",
    choices: [
      "Sampled Shapley / Integrated Gradients / XRAI",
      "PCA",
      "Bayesian Inference",
      "K-Means",
    ],
    correctIndex: 0,
    explanation:
      "**Vertex AI Explainable AI**: **Sampled Shapley(汎用)・ Integrated Gradients(NN)・ XRAI(画像 NN)** の 3 手法。テーブル / 画像 / NN それぞれに最適な手法を提供。",
  },
  {
    id: "gcpml-q30",
    category: "Cost",
    difficulty: 2,
    question:
      "Vertex AI Training の **コスト最適化** として **誤っているもの** を選びなさい。",
    choices: [
      "Spot VM(Preemptible)を利用",
      "Custom Container でフレームワーク最新化",
      "max_running_time を設定して暴走防止",
      "GPU を常時固定で割り当てる",
    ],
    correctIndex: 3,
    explanation:
      "**GPU 常時割り当ては不要時もコスト発生**。Vertex AI Training は **ジョブ実行中のみ課金**(終了で停止)。Spot VM ・ Custom Container ・ Timeout はすべて有効な最適化策。",
  },
  { id: "gcpml-q31", category: "BQML", difficulty: 3, question: "**BigQuery ML(BQML)** の利点として最も適切なものを選びなさい。", choices: ["データ移動なしに SQL のみで ML 学習 ・ 推論", "GPU 直接アクセス", "Spark 経由", "Notebook 必須"], correctIndex: 0, explanation: "**BQML**: BigQuery 内で **CREATE MODEL** SQL で学習 → ML.PREDICT で推論。**データ移動 0 ・ 分析チームが ML 簡単化**。AutoML / Time Series / DNN / Boosted Tree / Vertex AI 連携モデルもサポート。" },
  { id: "gcpml-q32", category: "Vertex AI Custom Training", difficulty: 3, question: "Vertex AI Custom Training の **Distributed Training** で **Horovod** ・ **PyTorch DDP** を使う際の典型構成として最も適切なものを選びなさい。", choices: ["MachineType(GPU)+ Replica Count + Reduction Server", "CPU のみ", "Spot のみ", "GUI"], correctIndex: 0, explanation: "**Reduction Server**(Vertex AI 独自): AllReduce を集約サーバで高速化(Horovod / PyTorch DDP 互換、bandwidth 効率)。GPU マシンタイプ + Replica で分散構成。" },
  { id: "gcpml-q33", category: "AutoML", difficulty: 3, question: "Vertex AI **AutoML** が対応する **タスク** として **誤っているもの** を選びなさい。", choices: ["Tabular / Image / Text / Video", "Forecasting(時系列)", "Translation(多言語)", "Quantum ML"], correctIndex: 3, explanation: "**Vertex AI AutoML**: Tabular(分類 / 回帰)・ Image(分類 / 物体検出 / セグメンテーション)・ Text(分類 / NER / Sentiment)・ Video(分類 / 物体追跡)・ Forecasting。Quantum は無関係。" },
  { id: "gcpml-q34", category: "GenAI", difficulty: 3, question: "Vertex AI **Generative AI Studio** で利用できる **Gemini 1.5 Pro の特徴** として最も適切なものを選びなさい。", choices: ["最大 200 万トークンのロングコンテキスト + マルチモーダル", "GPU 不要", "テキスト専用", "10K トークン上限"], correctIndex: 0, explanation: "**Gemini 1.5 Pro**: 最大 **200 万トークン** コンテキスト + テキスト ・ 画像 ・ 音声 ・ 動画。**Gemini 2.0 Flash / Pro** は更に進化。Vertex AI Studio で簡単試用。" },
  { id: "gcpml-q35", category: "Tuning", difficulty: 3, question: "Vertex AI **Adapter Tuning(PEFT)** の主な利点として最も適切なものを選びなさい。", choices: ["少量パラメータ更新で fine-tune 高速 + ストレージ大幅削減", "全パラメータ更新", "GPU 不要", "学習データ不要"], correctIndex: 0, explanation: "**PEFT(LoRA 等)**: ベース重み凍結 + 低ランク Adapter のみ学習 → 学習時間 / メモリ / Adapter サイズが 1000× 削減。Vertex AI で標準提供。" },
  { id: "gcpml-q36", category: "Search", difficulty: 3, question: "**Vertex AI Search**(旧 Enterprise Search)が **Vector Search** に追加で提供する機能として最も適切なものを選びなさい。", choices: ["セマンティックランカー + 引用 + 信頼可能なソース連携 + 自然言語回答", "GPU 直接アクセス", "BigQuery クエリ", "Lambda 連携"], correctIndex: 0, explanation: "**Vertex AI Search**: マネージド RAG。**Vector + BM25 + Semantic Reranker + 引用** + 自動 chunking + 多言語。Vertex AI Vector Search は **低レベル API**(自前 RAG)。" },
  { id: "gcpml-q37", category: "MLOps", difficulty: 3, question: "Vertex AI **Continuous Evaluation** の用途として最も適切なものを選びなさい。", choices: ["本番予測と実ラベルを継続比較してモデル劣化検知", "GPU 監視", "DB 監視", "認証"], correctIndex: 0, explanation: "**Continuous Evaluation**: 本番予測 + 後付ラベル(Ground Truth)で性能継続測定。Slack / Email / PagerDuty アラート連携。" },
  { id: "gcpml-q38", category: "Notebooks", difficulty: 3, question: "**Vertex AI Workbench Instances**(新世代)の特徴として最も適切なものを選びなさい。", choices: ["JupyterLab + Spark / BQ / Cloud Storage 直接統合 + Idle Shutdown", "Notebook 専用 GPU 提供のみ", "Cloud Functions の代替", "Compute Engine と無関係"], correctIndex: 0, explanation: "**Workbench Instances**(2024 新世代): JupyterLab 4 + Vertex AI / BigQuery / GCS / Dataproc Serverless 統合 + Idle Shutdown / Schedule。Managed / User-Managed の後継。" },
  { id: "gcpml-q39", category: "Pipelines", difficulty: 3, question: "Vertex AI Pipelines の **Custom Component** を **Python で書く** 際の標準ライブラリを選びなさい。", choices: ["kfp(Kubeflow Pipelines SDK)", "boto3", "Azure SDK", "Snowpark"], correctIndex: 0, explanation: "**kfp v2 SDK**: `@dsl.pipeline / @dsl.component` で Component / Pipeline 定義 → コンパイル → Vertex AI で実行。**TFX** も併用可。Lightweight / Container / Reusable Component に対応。" },
  { id: "gcpml-q40", category: "Endpoints", difficulty: 3, question: "Vertex AI **Private Endpoint** の特徴として最も適切なものを選びなさい。", choices: ["VPC Peering + Private Service Connect で VPC 内のみアクセス", "Public のみ", "API キー要", "GPU 必須"], correctIndex: 0, explanation: "**Private Endpoint**: Public IP なし。**VPC Peering / Private Service Connect** 経由でのみアクセス可能。エンタープライズ ・ 規制業界で必須。" },
  { id: "gcpml-q41", category: "Explainability", difficulty: 3, question: "**Vertex AI Explainable AI** の **XRAI** の用途として最も適切なものを選びなさい。", choices: ["画像分類 NN の領域ベース重要度可視化", "テーブル数値モデル", "強化学習", "BBox 検出"], correctIndex: 0, explanation: "**XRAI**: 画像分類モデルで **領域ベースの重要度ヒートマップ** 生成。**Integrated Gradients** の改良版。テーブル / 数値モデルは **Sampled Shapley** が標準。" },
  { id: "gcpml-q42", category: "Monitoring", difficulty: 3, question: "Vertex AI **Model Monitoring v2** が追加した機能として最も適切なものを選びなさい。", choices: ["Training-Prediction Skew + Drift + Schema Skew を統合可視化", "GPU 監視", "DB 監視", "請求のみ"], correctIndex: 0, explanation: "**Model Monitoring v2**(2024): Training-Prediction Skew + Drift + Schema Skew + Attribution Drift + Multi-objective ダッシュボード。**Generative AI 評価** も統合。" },
  { id: "gcpml-q43", category: "Multimodal", difficulty: 3, question: "Vertex AI **Multimodal Embeddings** の用途として最も適切なものを選びなさい。", choices: ["テキスト ・ 画像 ・ 動画を共通ベクトル空間に埋め込み", "音声合成", "翻訳", "GPU 暗号化"], correctIndex: 0, explanation: "**multimodalembedding@001**: テキスト + 画像 + 動画を同じ 1408 次元空間に埋込 → クロスモーダル検索(画像で検索 / テキストで検索)。CLIP の Google 版。" },
  { id: "gcpml-q44", category: "TPU", difficulty: 3, question: "**TPU v5e / v5p / Trillium(v6e)** の世代として **誤っているもの** を選びなさい。", choices: ["v5e: 推論最適化", "v5p: 学習最適化", "Trillium: v6e、4.7× 性能向上", "TPU は GPU 完全互換"], correctIndex: 3, explanation: "**TPU は GPU 非互換**(CUDA 不可)。XLA コンパイラ経由(TensorFlow / JAX / PyTorch XLA)。v5e(推論)・ v5p(学習)・ Trillium(v6e、Gemini 学習で実用)。" },
  { id: "gcpml-q45", category: "Generative AI", difficulty: 3, question: "Vertex AI で **Code Llama / Code Gemma** などのコード生成モデルを使う場面として最も適切なものを選びなさい。", choices: ["コード補完 ・ レビュー ・ ドキュメント生成", "顔認識", "翻訳", "GUI"], correctIndex: 0, explanation: "**Code 系モデル**: 言語特化 LLM。Cloud Code(VSCode)・ Gemini Code Assist と統合で IDE 補完。Repository 全体 context での開発支援に。" },
  { id: "gcpml-q46", category: "Vertex AI Agent Builder", difficulty: 3, question: "**Vertex AI Agent Builder** の構成要素として **誤っているもの** を選びなさい。", choices: ["Conversational Agent(旧 Dialogflow CX)", "Search Agent", "DIY Agent(Gemini + Function Calling)", "GPU 制御"], correctIndex: 3, explanation: "**Agent Builder**: ノーコード(Conversational Agent / Search Agent)+ DIY(Vertex AI Reasoning Engine + Function Calling)。エージェント構築の階層化された選択肢。" },
  { id: "gcpml-q47", category: "セキュリティ", difficulty: 3, question: "Vertex AI で **CMEK(Customer-Managed Encryption Keys)** を有効化すべき場面として最も適切なものを選びなさい。", choices: ["金融 ・ 医療 ・ 政府などの規制業界 + 完全鍵管理が必要", "コスト削減", "速度向上", "GUI 改善"], correctIndex: 0, explanation: "**CMEK**: Cloud KMS で鍵管理 → 規制業界要件。**rotation / audit / revoke** が顧客制御。Vertex AI / GCS / BigQuery 横断で適用可能。" },
  { id: "gcpml-q48", category: "コスト", difficulty: 3, question: "Vertex AI **Generative AI 推論** のコスト最適化として **誤っているもの** を選びなさい。", choices: ["Context Caching(Gemini 1.5 Pro 以降)", "Batch Prediction(50% 割引)", "Model 軽量化(Flash)", "全リクエストを最大 Pro で処理"], correctIndex: 3, explanation: "**コスト最適化**: モデル使い分け(Flash / Pro / Ultra)・ Context Caching(同 prompt 再利用)・ Batch(非同期 ・ 50% 割引)・ Function Calling での外部知識活用。" },
  { id: "gcpml-q49", category: "実務", difficulty: 3, question: "GCP で **大規模 ML 学習** のベストプラクティスとして **誤っているもの** を選びなさい。", choices: ["Vertex AI Training の Spot VM 利用 + Checkpoint", "TPU / GPU の適切選択", "Data Loader I/O の最適化", "Single VM で大規模学習"], correctIndex: 3, explanation: "**大規模学習**: 分散(Distributed / Reduction Server)・ Spot / Preemptible + Checkpoint(中断耐性)・ Data I/O(GCS FUSE / Parquet)。Single VM は大規模で限界。" },
  { id: "gcpml-q50", category: "次のステップ", difficulty: 1, question: "GCP Pro ML Engineer 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["Professional Cloud Architect / Pro Data Engineer / 同レベル他クラウド ML(AWS MLS / Azure DP-100)", "Cloud Digital Leader", "ITパスポート", "再受験"], correctIndex: 0, explanation: "**Pro MLE → 同レベルの Cloud Architect / Data Engineer**(GCP 内)+ **三大クラウド ML 認定**(AWS MLA-C01 / MLS-C01 / Azure DP-100)で横展開が王道。" },
  { id: "gcpml-q51", category: "Vertex AI", difficulty: 3, question: "**Vertex AI Workbench** の **User-Managed** と **Managed** の違いとして最も適切なものを選びなさい。", choices: ["User-Managed=自前 VM(細かい設定)、Managed=フルマネージド ・ アイドル停止 ・ IAM 統合", "両者同じ", "GPU vs CPU", "Training vs Serving"], correctIndex: 0, explanation: "**Managed Notebooks**: Vertex AI 統合 ・ 自動 Idle Shutdown ・ Service Account 自動。**User-Managed**: GCE ベース ・ カスタムイメージ ・ GPU/TPU 細選択。Managed 推奨。" },
  { id: "gcpml-q52", category: "Vertex AI", difficulty: 3, question: "**Vertex AI Pipelines** の実行エンジンとして最も適切なものを選びなさい。", choices: ["Kubeflow Pipelines(KFP)v2 + TFX 互換 + マネージド GKE バックエンド", "Airflow 専用", "Spark のみ", "Lambda"], correctIndex: 0, explanation: "**Vertex AI Pipelines**: KFP v2 / TFX 互換 ・ サーバーレス(マネージド GKE)・ Artifact Lineage ・ ML Metadata 統合。**Per-Run 課金** + Component 再利用。" },
  { id: "gcpml-q53", category: "Vertex AI", difficulty: 3, question: "**Vertex AI Feature Store** の **Online Serving** の特徴として最も適切なものを選びなさい。", choices: ["低レイテンシ Lookup ・ Bigtable バックエンド ・ Point-in-Time 整合", "BigQuery 直接", "Spark のみ", "GPU 必須"], correctIndex: 0, explanation: "**Vertex Feature Store v2**(BigQuery 基盤 + Online Bigtable)・ **Point-in-Time Correctness** で訓練/推論の特徴量整合。**Feature View** で BigQuery → Online。" },
  { id: "gcpml-q54", category: "Vertex AI", difficulty: 3, question: "**Vertex AI Model Registry** の役割として最も適切なものを選びなさい。", choices: ["モデルバージョン管理 ・ ステージング(Default Version)・ Endpoint デプロイ起点", "学習データ管理", "GUI", "認証"], correctIndex: 0, explanation: "**Model Registry**: バージョン管理 + Aliases(default / production)+ Endpoint デプロイ + BQML / AutoML / Custom / Bedrock 等を統一管理。MLOps の中核。" },
  { id: "gcpml-q55", category: "Vertex AI", difficulty: 3, question: "**Vertex AI Endpoint** の **Traffic Split** の用途として最も適切なものを選びなさい。", choices: ["1 Endpoint に複数 Model デプロイ → 90/10 で Canary / A/B Test", "GPU 共有", "認証共有", "学習用"], correctIndex: 0, explanation: "**Traffic Split**: Endpoint 内 Model A 90%/B 10% → Canary。**Private Endpoint**(VPC 内)・ **Public Endpoint**(マネージド)。Auto Scaling は min/max replicas。" },
  { id: "gcpml-q56", category: "Vertex AI", difficulty: 3, question: "**Vertex AI Vizier** の用途として最も適切なものを選びなさい。", choices: ["Black-Box ハイパーパラメータ最適化 ・ ベイズ最適化 / TPE / GP Bandit", "Endpoint", "GUI", "認証"], correctIndex: 0, explanation: "**Vizier**(Google 社内発)= Black-Box Optimization Service。**ベイズ最適化** ・ TPE ・ GP Bandit ・ NAS にも応用。**Vertex AI Hyperparameter Tuning** の裏側。" },
  { id: "gcpml-q57", category: "Vertex AI", difficulty: 3, question: "**AutoML Tabular** の特徴として最も適切なものを選びなさい。", choices: ["特徴量エンジニアリング + モデル選択 + チューニングを自動 ・ Explainable AI 統合", "GUI のみ", "GPU 必須", "Spark 連携"], correctIndex: 0, explanation: "**AutoML Tabular**: 表データの自動 ML(分類 / 回帰 / 予測)。**Built-in Explanation(SHAP / Integrated Gradients)**・ Vertex AI Model Registry 自動登録。" },
  { id: "gcpml-q58", category: "TFX", difficulty: 3, question: "**TFX(TensorFlow Extended)** の主要コンポーネントとして **誤っているもの** を選びなさい。", choices: ["ExampleGen", "Transform", "Trainer", "GPU-Allocator"], correctIndex: 3, explanation: "**TFX Components**: ExampleGen → StatisticsGen → SchemaGen → ExampleValidator → Transform → Trainer → Evaluator → Pusher。Vertex AI Pipelines で実行可。GPU-Allocator は存在しない。" },
  { id: "gcpml-q59", category: "Distributed", difficulty: 3, question: "**TPU vs GPU** の使い分けとして最も適切なものを選びなさい。", choices: ["TPU=大規模 Transformer 学習 ・ XLA 最適化、GPU=汎用 ・ PyTorch/CV/中規模", "両者同じ", "TPU は推論専用", "GPU は学習専用"], correctIndex: 0, explanation: "**TPU**: 大規模行列演算 ・ XLA コンパイル ・ Pod 構成。**GPU(A100/H100/L4)**: 汎用 ・ PyTorch 主流 ・ CV / ファインチューニング。**Vertex AI で両方選択可**。" },
  { id: "gcpml-q60", category: "Distributed", difficulty: 3, question: "**Vertex AI Reduction Server** の役割として最も適切なものを選びなさい。", choices: ["分散学習の AllReduce を専用サーバで実行 → 帯域削減 ・ 学習加速", "Endpoint", "GUI", "認証"], correctIndex: 0, explanation: "**Reduction Server**: GPU ノードとは別の専用 VM で AllReduce 集約 → ネットワーク帯域 50% 削減 ・ 学習加速。**Vertex AI Training Distribution** の専用機能。" },
  { id: "gcpml-q61", category: "Responsible AI", difficulty: 3, question: "**Vertex Explainable AI** の手法として **誤っているもの** を選びなさい。", choices: ["Integrated Gradients", "Sampled Shapley", "XRAI(画像)", "Random Cut Forest"], correctIndex: 3, explanation: "**Vertex XAI**: **Integrated Gradients**(深層学習)・ **Sampled Shapley**(Tabular)・ **XRAI**(画像領域)。Random Cut Forest は SageMaker の異常検知アルゴリズム。" },
  { id: "gcpml-q62", category: "MLOps", difficulty: 3, question: "**Vertex AI Model Monitoring** の検出可能 Drift として最も適切なものを選びなさい。", choices: ["Skew(訓練 vs 提供)・ Drift(時間変化)・ 入力 / 出力 / 特徴量", "GPU 使用率", "認証ログ", "Cost"], correctIndex: 0, explanation: "**Model Monitoring**: **Training-Serving Skew**(訓練と本番分布差)・ **Prediction Drift**(本番分布時間変化)。Feature / Prediction Drift を Vertex AI で監視 ・ Alert。" },
  { id: "gcpml-q63", category: "GenAI", difficulty: 3, question: "**Vertex AI Gemini API** の **Function Calling** の用途として最も適切なものを選びなさい。", choices: ["関数定義 + JSON Schema → Gemini が引数生成 → 外部 API / DB 連携 → Agent 構築", "GUI 自動生成", "学習データ生成", "認証"], correctIndex: 0, explanation: "**Function Calling**: Tool Use / Tool Calling と同義。**JSON Schema で関数定義** → Gemini が呼出引数生成 → アプリ側で実行 → 結果を Gemini に返す。Agent / RAG の基礎。" },
  { id: "gcpml-q64", category: "GenAI", difficulty: 3, question: "**Vertex AI Agent Builder** の用途として最も適切なものを選びなさい。", choices: ["RAG / 検索 / 会話エージェントを Low-Code 構築 ・ Vertex AI Search / Dialogflow CX 統合", "学習データ", "Endpoint 専用", "認証 SSO"], correctIndex: 0, explanation: "**Agent Builder**(旧 Gen App Builder): RAG Search(Vertex AI Search)+ 会話 Agent(Dialogflow CX)+ Tool 統合。**Conversational AI Agent** を低コード構築。" },
  { id: "gcpml-q65", category: "実務", difficulty: 3, question: "GCP Pro ML Engineer で頻出の **典型ワークフロー** として最も適切なものを選びなさい。", choices: ["BigQuery → Vertex Pipelines → Model Registry → Endpoint → Monitoring + Explainable AI", "全部 GCE", "GUI のみ", "オンプレ"], correctIndex: 0, explanation: "**Pro MLE 王道**: BigQuery(Feature Engineering)→ Pipelines(KFP)→ Training(Vertex AI)→ Registry → Endpoint(Online/Batch)→ Model Monitoring + Explainable AI + Vertex Feature Store。" },
];
