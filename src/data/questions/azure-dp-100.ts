import type { Question } from "@/types/content";

export const azureDp100Questions: Question[] = [
  {
    id: "dp100-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "Microsoft Azure Data Scientist Associate(DP-100)の認定レベルとして最も適切なものを選びなさい。",
    choices: ["Fundamentals", "Associate", "Expert", "Specialty"],
    correctIndex: 1,
    explanation:
      "**DP-100 は Associate レベル**。Azure AI/ML 認定: AI-900(Fundamentals)→ **DP-100 / AI-102(Associate)**。Expert / Specialty は存在しない。",
  },
  {
    id: "dp100-q2",
    category: "Workspace",
    difficulty: 2,
    question:
      "Azure ML Workspace を新規作成する際、自動的にプロビジョニングされない Azure リソースとして最も適切なものを選びなさい。",
    choices: [
      "Storage Account",
      "Application Insights",
      "Key Vault",
      "Azure SQL Database",
    ],
    correctIndex: 3,
    explanation:
      "Workspace 作成時に自動プロビジョニングされるのは **Storage Account / Application Insights / Key Vault / Container Registry(必要時)**。Azure SQL Database は別途明示作成が必要。",
  },
  {
    id: "dp100-q3",
    category: "Compute",
    difficulty: 2,
    question:
      "**学習ジョブ ・ ハイパーパラメータ Sweep** の実行に最適な Compute Target を選びなさい。",
    choices: [
      "Compute Instance",
      "Compute Cluster(min_instances=0)",
      "Inference Cluster",
      "Attached Databricks",
    ],
    correctIndex: 1,
    explanation:
      "**Compute Cluster** は **複数ノード並列 ・ オートスケール対応** で学習ジョブ ・ Sweep に最適。**min_instances=0** にすれば待機時 0 円。Compute Instance は単独 VM で Notebook 開発用。",
  },
  {
    id: "dp100-q4",
    category: "Data Asset",
    difficulty: 2,
    question:
      "Azure ML の Data Asset で、**スキーマ ・ パーティション ・ 前処理を YAML で宣言** できるタイプを選びなさい。",
    choices: ["uri_file", "uri_folder", "mltable", "datastore"],
    correctIndex: 2,
    explanation:
      "**MLTable** は **スキーマ ・ ファイル分割 ・ 前処理を YAML で宣言** する Data Asset 型。AutoML / Pipeline / Notebook で同じデータ定義を再利用できる。",
  },
  {
    id: "dp100-q5",
    category: "Data Asset",
    difficulty: 2,
    question:
      "Azure ML の Data Asset の特性として **誤っているもの** を選びなさい。",
    choices: [
      "Data Asset はバージョン付きで不変である",
      "ジョブから参照する際は name + version を指定する",
      "本番 Pipeline では latest 参照が推奨される",
      "uri_file / uri_folder / mltable の 3 タイプがある",
    ],
    correctIndex: 2,
    explanation:
      "**Data Asset は不変 ・ バージョン付き**。**latest 参照は再現性が崩れるため本番では明示バージョン推奨**。再現性確保が原則。",
  },
  {
    id: "dp100-q6",
    category: "Job",
    difficulty: 2,
    question:
      "Azure ML SDK v2 のジョブ種別として **誤っているもの** を選びなさい。",
    choices: [
      "Command Job",
      "Sweep Job",
      "Pipeline Job",
      "Container Job",
    ],
    correctIndex: 3,
    explanation:
      "v2 のジョブは **Command / Sweep / Pipeline / AutoML / Spark**。Container Job という名称は存在しない(Command Job が Docker コンテナで実行される)。",
  },
  {
    id: "dp100-q7",
    category: "Environment",
    difficulty: 2,
    question:
      "Azure ML の Environment に関する説明として最も適切なものを選びなさい。",
    choices: [
      "Environment は変更可能で、上書きされる",
      "Curated Environment は Microsoft 提供の事前構築済テンプレートである",
      "Custom Environment は GUI 専用で CLI で作成できない",
      "Environment はジョブ単位で自動生成され、登録不要である",
    ],
    correctIndex: 1,
    explanation:
      "**Curated Environment** は Microsoft が提供する **事前構築済の sklearn / PyTorch / TensorFlow など**。Environment は **不変 ・ バージョン管理**、新パッケージ追加時は新バージョン登録。",
  },
  {
    id: "dp100-q8",
    category: "AutoML",
    difficulty: 2,
    question:
      "Azure AutoML で **二値分類タスクの最適化指標** として最も一般的なものを選びなさい。",
    choices: [
      "RMSE",
      "AUC_weighted",
      "NDCG",
      "Inertia",
    ],
    correctIndex: 1,
    explanation:
      "**二値分類 ・ クラス不均衡時** は **AUC_weighted / accuracy / norm_macro_recall** が代表。**RMSE は回帰、NDCG はランキング、Inertia はクラスタリング** 用。",
  },
  {
    id: "dp100-q9",
    category: "AutoML",
    difficulty: 3,
    question:
      "AutoML の `featurization` 設定として、**列ごとに前処理を細かく指定したい** 場合に選ぶべき値はどれか。",
    choices: ["auto", "off", "custom", "default"],
    correctIndex: 2,
    explanation:
      "**`featurization=custom`** で **列ごとの impute / scale / drop** を辞書で指定可能。auto は自動、off は前処理を一切しない設定。",
  },
  {
    id: "dp100-q10",
    category: "Sweep",
    difficulty: 3,
    question:
      "Sweep Job のサンプリング手法のうち、**過去結果から確率モデルを構築し、少ない試行で高性能** を出せるものを選びなさい。",
    choices: [
      "Grid Sampling",
      "Random Sampling",
      "Bayesian Sampling",
      "Latin Hypercube",
    ],
    correctIndex: 2,
    explanation:
      "**Bayesian Sampling** は過去結果から獲得関数(EI / UCB)を構築し効率的に探索。ただし **early termination との併用は不可**。Grid は離散値全列挙、Random は均等。",
  },
  {
    id: "dp100-q11",
    category: "Sweep",
    difficulty: 3,
    question:
      "Sweep の Early Termination Policy のうち、**最良試行から slack_factor を超えて性能が劣る試行を打ち切る** 最も積極的なポリシーを選びなさい。",
    choices: [
      "Bandit Policy",
      "Median Stopping Policy",
      "Truncation Selection",
      "No Termination",
    ],
    correctIndex: 0,
    explanation:
      "**Bandit Policy** は **slack_factor / slack_amount** を基準に最良試行から大きく劣る試行を即打ち切る、最も積極的。Median は中央値基準、Truncation は下位 X% を打ち切り。",
  },
  {
    id: "dp100-q12",
    category: "MLflow",
    difficulty: 2,
    question:
      "Azure ML Model Registry がネイティブサポートする標準的なモデル形式として最も適切なものを選びなさい。",
    choices: ["ONNX のみ", "MLflow Model 形式", "Pickle のみ", "TensorFlow SavedModel のみ"],
    correctIndex: 1,
    explanation:
      "**Azure ML Model Registry は MLflow Model 形式をネイティブサポート**。`mlflow.sklearn.log_model` でログしたモデルがそのまま登録 ・ デプロイ可能。ONNX / Pickle / SavedModel は MLflow Model にラップして登録できる。",
  },
  {
    id: "dp100-q13",
    category: "Endpoint",
    difficulty: 3,
    question:
      "Online Endpoint で **新モデルを徐々にロールアウトする Blue-Green デプロイ** を実現するための仕組みとして最も適切なものを選びなさい。",
    choices: [
      "1 Endpoint に複数 Deployment を作りトラフィック比率を変更する",
      "Endpoint を 2 つ作り DNS で切替える",
      "Compute Target を切替える",
      "Workspace を 2 つ作る",
    ],
    correctIndex: 0,
    explanation:
      "**Endpoint(URL)→ 複数 Deployment(モデル + Compute)** という 2 階層。**`traffic` パラメータで `blue=90, green=10` のように比率指定** することで Blue-Green / Canary を実現。",
  },
  {
    id: "dp100-q14",
    category: "Endpoint",
    difficulty: 3,
    question:
      "**本番リクエストを green Deployment にコピーし、応答は blue から返す『負荷検証だけしたい』** 場合に使う機能を選びなさい。",
    choices: [
      "Mirror traffic",
      "Canary deployment",
      "Auto-scaling",
      "Endpoint scoring URL",
    ],
    correctIndex: 0,
    explanation:
      "**Mirror traffic** は本番トラフィックを別 Deployment にコピー(応答は元の Deployment から)、**ユーザー影響ゼロで負荷 ・ 性能検証** ができる。",
  },
  {
    id: "dp100-q15",
    category: "Endpoint",
    difficulty: 2,
    question:
      "**夜間に大量データを推論したい** 用途に最適な Azure ML Endpoint を選びなさい。",
    choices: [
      "Managed Online Endpoint",
      "Managed Batch Endpoint",
      "AKS Endpoint",
      "Container Instance",
    ],
    correctIndex: 1,
    explanation:
      "**Managed Batch Endpoint** は **Job ベースで大量データを一括推論**、**最小 0 ノード** で待機時 0 円。リアルタイム推論は Managed Online Endpoint。",
  },
  {
    id: "dp100-q16",
    category: "Responsible AI",
    difficulty: 3,
    question:
      "Responsible AI Dashboard で『**ある特徴量を変えたら予測がどう変わるか**』を分析するコンポーネントを選びなさい。",
    choices: [
      "Error Analysis",
      "Counterfactual What-If",
      "Feature Importance",
      "Causal Inference",
    ],
    correctIndex: 1,
    explanation:
      "**Counterfactual What-If** は『この特徴量を X から Y に変えたら予測はどう変わるか』というシミュレーション。Error Analysis は誤分類セグメント、Causal Inference は介入効果推定。",
  },
  {
    id: "dp100-q17",
    category: "Monitoring",
    difficulty: 3,
    question:
      "Model Monitoring の **数値特徴量のドリフト検出指標** として最も一般的なものを選びなさい。",
    choices: [
      "Pearson カイ二乗",
      "Wasserstein 距離",
      "Cosine Similarity",
      "Levenshtein 距離",
    ],
    correctIndex: 1,
    explanation:
      "**数値特徴量のドリフト**: Wasserstein / Two-sample KS / Jensen-Shannon。**カテゴリカル**: Pearson カイ二乗 / Population Stability Index(PSI)。",
  },
  {
    id: "dp100-q18",
    category: "Pipeline",
    difficulty: 3,
    question:
      "Azure ML Pipeline の **再利用可能な処理単位** で、input / output / コード / 環境を YAML で定義するものを選びなさい。",
    choices: ["Step", "Component", "Task", "Module"],
    correctIndex: 1,
    explanation:
      "**Component** は v2 の再利用可能処理単位(input / output / コード / 環境を YAML 定義)。Pipeline は Component を DAG で連結。**v1 では Step / Module が同様の役割**(現行は Component 推奨)。",
  },
  {
    id: "dp100-q19",
    category: "Security",
    difficulty: 2,
    question:
      "Azure ML から **シークレット不要で Storage / Key Vault に接続する** ベストプラクティスとして最も適切なものを選びなさい。",
    choices: [
      "Account Key を環境変数で渡す",
      "Service Principal をコードに埋め込む",
      "Managed Identity を使う",
      "Personal Access Token を使う",
    ],
    correctIndex: 2,
    explanation:
      "**Managed Identity(System / User-Assigned)** は **シークレット不要で Azure リソースへ認証**。CI/CD では Service Principal、対話実行では Managed Identity が定石。",
  },
  {
    id: "dp100-q20",
    category: "Cost",
    difficulty: 2,
    question:
      "Compute Cluster のコスト最適化として **誤っているもの** を選びなさい。",
    choices: [
      "min_instances=0 で待機時 0 円にする",
      "Spot(Low-priority)VM を使う",
      "max_instances を高く設定する",
      "Idle 時にクラスタを自動シャットダウンする",
    ],
    correctIndex: 2,
    explanation:
      "**max_instances を高く設定** すると **過剰スケールで逆にコスト増**。コスト最適化には **min=0、低優先度 VM、idle シャットダウン** が定石。max は需要に応じた適切値が良い。",
  },
  {
    id: "dp100-q21",
    category: "Feature Store",
    difficulty: 3,
    question:
      "Azure ML の Feature Store(マネージド)で実現できる機能として **誤っているもの** を選びなさい。",
    choices: [
      "オンライン推論用の低レイテンシ Feature 取得",
      "学習 ・ 推論で同一の Feature 計算ロジックを共有(Train/Serve スキュー回避)",
      "Time-travel(過去時点の Feature を再現)",
      "GPU を直接管理し DL モデルを学習する",
    ],
    correctIndex: 3,
    explanation:
      "**GPU 管理 ・ DL 学習は Feature Store の役割ではない**(Compute Cluster の責務)。**Feature Store は Feature の定義 ・ 共有 ・ Train/Serve スキュー回避 ・ Time-travel ・ 低レイテンシオンライン取得** が役割。",
  },
  {
    id: "dp100-q22",
    category: "Sweep",
    difficulty: 3,
    question:
      "Sweep Job のサンプリング手法と Early Termination Policy の組み合わせとして **動作しないもの** を選びなさい。",
    choices: [
      "Random Sampling + Bandit Policy",
      "Grid Sampling + Median Stopping",
      "Bayesian Sampling + Bandit Policy",
      "Random Sampling + Truncation Selection",
    ],
    correctIndex: 2,
    explanation:
      "**Bayesian Sampling は早期終了ポリシーと併用不可**(過去の試行結果から確率モデルを構築するため、途中打ち切りで学習が偏る)。Random / Grid は任意の Termination Policy と併用可能。",
  },
  {
    id: "dp100-q23",
    category: "Endpoint",
    difficulty: 3,
    question:
      "Online Endpoint の認証方式として **デフォルトで利用できる** ものを選びなさい。",
    choices: [
      "Key-based(プライマリ / セカンダリキー)",
      "Aaa Token(短命の OAuth)",
      "Microsoft Entra ID(旧 AAD)Token",
      "上記すべて(用途に応じて選択)",
    ],
    correctIndex: 3,
    explanation:
      "Online Endpoint は **Key 認証 / AML Token / Microsoft Entra ID Token** の **3 方式** をサポート。Key は固定共有キー、AML Token は短命、Entra Token は AAD 統合(RBAC 推奨)。",
  },
  {
    id: "dp100-q24",
    category: "Endpoint",
    difficulty: 2,
    question:
      "Managed Online Endpoint の **オートスケール** に使う Azure サービスを選びなさい。",
    choices: [
      "Azure Monitor Autoscale",
      "Application Gateway",
      "Service Fabric",
      "Logic Apps",
    ],
    correctIndex: 0,
    explanation:
      "**Managed Online Endpoint のオートスケールは Azure Monitor Autoscale** で実装。CPU 使用率 ・ リクエスト数などのメトリクスをトリガに、最小 / 最大インスタンス数を動的調整。",
  },
  {
    id: "dp100-q25",
    category: "MLflow",
    difficulty: 3,
    question:
      "Azure ML SDK v2 でジョブ実行時の **メトリクス ・ パラメータ ・ アーティファクトを自動的にログ** したい。最も適切な機能を選びなさい。",
    choices: [
      "MLflow Autologging",
      "Application Insights Sampling",
      "Azure Monitor Custom Metrics",
      "Log Analytics Workspace",
    ],
    correctIndex: 0,
    explanation:
      "**MLflow Autologging**(`mlflow.autolog()`)で **scikit-learn / PyTorch / TensorFlow / LightGBM 等の学習中のメトリクス ・ パラメータ ・ モデル ・ アーティファクト** を自動ログ。Azure ML は MLflow ネイティブサポート。",
  },
  {
    id: "dp100-q26",
    category: "Distributed Training",
    difficulty: 3,
    question:
      "PyTorch の DDP(Distributed Data Parallel)を Azure ML 上で動かす際、Job YAML で指定するパラメータとして最も適切なものを選びなさい。",
    choices: [
      "`distribution.type: PyTorch` + `process_count_per_instance` + `instance_count`",
      "`distribution.type: MPI` + `gpu_count`",
      "`compute.gpu_count`",
      "`environment.distribution: DDP`",
    ],
    correctIndex: 0,
    explanation:
      "**Job YAML の `distribution.type: PyTorch` + `process_count_per_instance`(GPU 数 / ノード)+ `instance_count`(ノード数)** で PyTorch DDP 分散学習を実行。**MPI / TensorFlow distribution type** も別途用意。",
  },
  {
    id: "dp100-q27",
    category: "Interpretability",
    difficulty: 3,
    question:
      "Responsible AI Dashboard の Feature Importance を **個別予測のローカル解釈** で見たい場合、内部的に使われる代表的な手法を選びなさい。",
    choices: ["Permutation Importance", "SHAP", "Pearson 相関", "PCA"],
    correctIndex: 1,
    explanation:
      "**ローカル(個別予測)解釈は SHAP**(KernelExplainer / TreeExplainer)、**グローバル解釈は Permutation Importance** が一般的。RAI Dashboard は両方を提供。",
  },
  {
    id: "dp100-q28",
    category: "Designer",
    difficulty: 2,
    question:
      "Designer と SDK v2 の使い分けとして **最も適切な** ものを選びなさい。",
    choices: [
      "本番運用 ・ CI/CD ・ 大規模 Pipeline は SDK v2、PoC ・ 学習用は Designer",
      "Designer は本番運用専用、SDK v2 は試験用",
      "Designer は SDK v2 より新しく上位互換",
      "両者は完全に同一機能",
    ],
    correctIndex: 0,
    explanation:
      "**Designer は ノーコード ・ ローコード GUI で PoC ・ 学習用に最適**。**本番運用 ・ CI/CD ・ 複雑な Pipeline は SDK v2 / CLI v2** が推奨(コードレビュー ・ Git 管理 ・ 再現性)。",
  },
  {
    id: "dp100-q29",
    category: "Compute",
    difficulty: 2,
    question:
      "Compute Instance(単独 VM)と Compute Cluster の主な違いとして **誤っているもの** を選びなさい。",
    choices: [
      "Compute Instance は 1 ユーザーに紐付くが、Compute Cluster は共有",
      "Compute Cluster は min_instances=0 で完全停止できるが、Compute Instance は手動停止が必要",
      "Compute Instance は GPU を使えないが、Compute Cluster は使える",
      "Compute Instance は Notebook 開発、Compute Cluster はジョブ並列実行向け",
    ],
    correctIndex: 2,
    explanation:
      "**両者とも GPU VM サイズを選択可能**。違いは **個人帰属 / 共有スケール ・ 自動停止可否 ・ 用途(Notebook vs ジョブ)**。Compute Instance は手動 Stop でコスト削減。",
  },
  {
    id: "dp100-q30",
    category: "Cost",
    difficulty: 3,
    question:
      "**バッチ推論を月数回 ・ 1 回数時間で大量データに実行** する場合、最もコスト効率が良い構成を選びなさい。",
    choices: [
      "Managed Online Endpoint を Always-on で運用",
      "Managed Batch Endpoint + Compute Cluster(min=0 / Spot)",
      "AKS Endpoint を 24/7 起動",
      "Compute Instance を起動して手動推論",
    ],
    correctIndex: 1,
    explanation:
      "**Managed Batch Endpoint + Compute Cluster(min=0 ・ Spot)** が最適。**待機時 0 円 ・ Spot で更にコスト削減 ・ ジョブ完了後に自動シャットダウン**。Online Endpoint は Always-on でリアルタイム向け、コスト高。",
  },
];
