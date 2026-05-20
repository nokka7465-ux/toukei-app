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
  { id: "dp100-q31", category: "Workspace", difficulty: 3, question: "Azure ML Workspace の **Asset 種別** として **誤っているもの** を選びなさい。", choices: ["Data Asset", "Model", "Environment", "GPU Hardware"], correctIndex: 3, explanation: "**Asset**: Data / Model / Component / Environment / Job / Endpoint。Compute は別カテゴリ。GPU Hardware は無関係。" },
  { id: "dp100-q32", category: "AutoML", difficulty: 3, question: "AutoML の **primary_metric** で **異常検知タスク** に最適なものを選びなさい。", choices: ["AUC_weighted(分類)", "RMSE(回帰)", "NDCG(ランキング)", "Inertia(クラスタリング)"], correctIndex: 0, explanation: "**Anomaly Detection** は 2 値分類の一種 → AUC_weighted / accuracy / f1_score_weighted。**異常クラスが少数**なため AUC が標準。" },
  { id: "dp100-q33", category: "Compute", difficulty: 3, question: "Compute Cluster の **idle_time_before_scale_down** の設定で最も適切なのは。", choices: ["1200 秒程度(20 分)で自動縮小", "0 秒(即時)", "Never(縮小しない)", "1 秒"], correctIndex: 0, explanation: "**Idle Timeout**: 短すぎると次ジョブで再起動コスト、長すぎると無駄。**1200 秒 ~ 1800 秒** が一般的な balance。**0 秒 = 即縮小**(短時間ジョブ不向き)。" },
  { id: "dp100-q34", category: "MLflow", difficulty: 3, question: "Azure ML での **MLflow Tracking URI** の取得方法として最も適切なものを選びなさい。", choices: ["`ws.get_mlflow_tracking_uri()` で取得 → `mlflow.set_tracking_uri()` で設定", "ローカル file:/// で十分", "S3 必須", "GUI のみ"], correctIndex: 0, explanation: "**Azure ML + MLflow**: ws(MLClient)から取得した URI を MLflow に設定すると **Workspace に自動同期**。**Job 内では環境変数 `MLFLOW_TRACKING_URI` 自動設定** で簡単。" },
  { id: "dp100-q35", category: "Designer", difficulty: 3, question: "Azure ML Designer の **Pipeline Component** の特徴として最も適切なものを選びなさい。", choices: ["GUI で構築した Pipeline をコード Pipeline で再利用可能", "Designer 専用 ・ 互換性なし", "GPU 不要", "DB 接続のみ"], correctIndex: 0, explanation: "**Designer + Pipeline Component**: GUI で構築 → Component 化 → CLI v2 / SDK の Pipeline でも呼出。ノーコード PoC → 本番自動化の橋渡し。" },
  { id: "dp100-q36", category: "Spark", difficulty: 3, question: "Azure ML の **Spark Compute** の選択肢として最も適切なものを選びなさい。", choices: ["Serverless Spark(自動)or Attached Synapse Spark", "Compute Instance のみ", "Compute Cluster", "Notebooks のみ"], correctIndex: 0, explanation: "**Spark on Azure ML**: ① **Serverless Spark**(自動プロビジョニング)② **Attached Synapse Spark Pool**(共有 Pool)。Data Prep や特徴量エンジニアリングで活用。" },
  { id: "dp100-q37", category: "Pipeline", difficulty: 3, question: "Pipeline の **Component の出力を別 Component の入力に渡す** 際の正しい記法を選びなさい。", choices: ["`step2.inputs.x = step1.outputs.y`", "ファイルパスを文字列で渡す", "global 変数", "REST API"], correctIndex: 0, explanation: "**`@dsl.pipeline` 内で `outputs.* → inputs.*` をリンク**。Azure ML が DAG 解析 → 適切に実行順序 + データ受渡し。" },
  { id: "dp100-q38", category: "Endpoint", difficulty: 3, question: "**Managed Online Endpoint** の **AKS Endpoint** より優れる点として最も適切なものを選びなさい。", choices: ["Azure 完全マネージド ・ ノード管理不要", "AKS の制御が必要", "コストが必ず安い", "GPU 不要"], correctIndex: 0, explanation: "**Managed Online**: Azure 側ノード ・ Networking 管理。**AKS Endpoint**: Kubernetes 直接管理 → 高度カスタマイズ可能だが運用負荷。新規は Managed Online 推奨。" },
  { id: "dp100-q39", category: "Endpoint", difficulty: 3, question: "**Online Endpoint Authentication** の方式として **誤っているもの** を選びなさい。", choices: ["Key-based", "Aaa Token", "Microsoft Entra ID(AAD)", "Email"], correctIndex: 3, explanation: "**3 方式**: Key(共有キー、簡易)・ AML Token(短命)・ Entra ID Token(AAD、RBAC 推奨)。Email 認証は無関係。" },
  { id: "dp100-q40", category: "Quotas", difficulty: 3, question: "Azure ML の **vCPU クォータ** で **Family と Compute Type** の関係として最も適切なものを選びなさい。", choices: ["VM ファミリ別(Dv2, ND, NC, NDv2 等)+ Compute タイプ別(Cluster / Instance / Endpoint)に独立して制限", "全リソース合計のみ", "リージョン共通", "無制限"], correctIndex: 0, explanation: "**Quota**: VM Family × Compute Type × Region の組合せで独立管理。**ND 系(GPU)は Default 0** が多い → 事前に申請。Quota Request は Azure Portal で。" },
  { id: "dp100-q41", category: "Data Asset", difficulty: 3, question: "**MLTable** の特徴として **誤っているもの** を選びなさい。", choices: ["スキーマ + パーティション + 変換を YAML で宣言", "Notebook / Job / Pipeline で再利用", "AutoML の入力にもなる", "DB 接続が必須"], correctIndex: 3, explanation: "**MLTable**: Blob / ADLS / file / URL からのデータを **スキーマ + 前処理 YAML** で抽象化。DB 接続は不要(独立)。データソースは多様。" },
  { id: "dp100-q42", category: "セキュリティ", difficulty: 3, question: "Workspace の **Private Endpoint + Public Network Access Disabled** の効果として最も適切なものを選びなさい。", choices: ["インターネット遮断 → VNet 内のみアクセス + データ exfiltration 防止", "速度向上", "GPU 増", "コスト削減のみ"], correctIndex: 0, explanation: "**Private Endpoint + Public 無効化**: VNet 内のみ。**ML Compute, Storage, Key Vault, ACR, Application Insights** も Private Link 化。エンタープライズ ・ 規制業界で必須。" },
  { id: "dp100-q43", category: "Monitoring", difficulty: 3, question: "Model Monitoring の **Population Stability Index(PSI)** の用途として最も適切なものを選びなさい。", choices: ["カテゴリ ・ Binned 数値の分布変化を測定(Drift 指標)", "精度測定", "GPU 監視", "DB 監視"], correctIndex: 0, explanation: "**PSI**: `Σ (新比率 - 旧比率) · ln(新/旧)`。**< 0.1 安定、0.1-0.25 注意、> 0.25 大変化**。カテゴリ / Binned 数値の Drift 検出で金融業界標準。" },
  { id: "dp100-q44", category: "Responsible AI", difficulty: 3, question: "Responsible AI Dashboard の **Counterfactual Analysis** の用途として最も適切なものを選びなさい。", choices: ["『どの特徴量を変えれば予測が変わるか』を提示し説明性向上", "学習データ生成", "GPU 監視", "Endpoint 監視"], correctIndex: 0, explanation: "**Counterfactual**: 入力に小変更を加えた仮想ケース → 予測の変化を可視化。**ローン拒否時の理由説明 / 説明可能性 / Fairness 検証** に活用。" },
  { id: "dp100-q45", category: "Tuning", difficulty: 3, question: "Sweep Job の **Bayesian Sampling** の制約として最も適切なものを選びなさい。", choices: ["Early Termination Policy を併用できない(過去結果に依存)", "Grid と同じ", "Random より遅い", "GPU 必須"], correctIndex: 0, explanation: "**Bayesian Sampling**: 過去 trial の結果から確率モデル構築 → 次の点を選択。**Early Termination は過去結果を歪めるため併用不可**。Random / Grid は併用可。" },
  { id: "dp100-q46", category: "MLOps", difficulty: 3, question: "**Azure ML + Azure DevOps** の CI/CD 連携で典型的に使うタスクとして最も適切なものを選びなさい。", choices: ["azureml-cli + azure/login → Pipeline 実行 + Model Register + Endpoint 更新", "REST API のみ", "GUI のみ", "手動操作"], correctIndex: 0, explanation: "**CI/CD with Azure DevOps**: `azureml-cli` task + Service Principal / Managed Identity 認証 → Job 実行 / Model Registration / Endpoint Deployment を自動化。GitHub Actions でも類似構成。" },
  { id: "dp100-q47", category: "Distributed", difficulty: 3, question: "PyTorch DDP を **Azure ML で複数ノード** で実行する際の Job YAML キーとして最も適切なものを選びなさい。", choices: ["`distribution.type: PyTorch` + `instance_count` + `process_count_per_instance`", "`distribution.mpi`", "Spark 必須", "GPU 不要"], correctIndex: 0, explanation: "**PyTorch DDP**: distribution.type=PyTorch + instance_count(ノード数)+ process_count_per_instance(GPU 数 / ノード)。MPI 系は TF Horovod / DeepSpeed。" },
  { id: "dp100-q48", category: "Cost", difficulty: 3, question: "Azure ML 全体のコスト最適化として **誤っているもの** を選びなさい。", choices: ["Compute Cluster min_instances=0", "Spot(Low-priority)VM", "Auto Shutdown(Compute Instance)", "Always-on で最大ノード起動"], correctIndex: 3, explanation: "**コスト最適化**: min=0 / Spot(80%+ 割引、中断あり)/ Idle Shutdown(Compute Instance)/ Reserved Instance(常時稼働なら)。Always-on 最大は爆発。" },
  { id: "dp100-q49", category: "実務", difficulty: 3, question: "Azure ML で **本番モデルの定期再学習** を構築する標準パターンを選びなさい。", choices: ["Schedule + Pipeline + Trigger(Schedule Recurrence / Event)", "手動 Notebook", "DBA に依頼", "GUI のみ"], correctIndex: 0, explanation: "**Recurrence Schedule**(cron 風)・ **Event Trigger**(Blob 追加で起動)。Pipeline 内に Data → Train → Evaluate → Register → Deploy を組み込み。" },
  { id: "dp100-q50", category: "次のステップ", difficulty: 1, question: "DP-100 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["AI-102(AI Engineer Associate)/ DP-203(Data Engineer)/ AZ-305(Solutions Architect Expert)", "MS-900", "AZ-104 再受験", "ITパスポート"], correctIndex: 0, explanation: "**DP-100 → AI-102(AI/GenAI 連携)/ DP-203(データ基盤)/ AZ-305(全体設計)**。3 大クラウド ML 揃え(AWS MLA / GCP Pro MLE)で横断キャリアも。" },
  { id: "dp100-q51", category: "AutoML", difficulty: 3, question: "Azure ML **AutoML** で **Featurization** の `mode='auto'` が実施する典型処理として最も適切なものを選びなさい。", choices: ["欠損補完 + カテゴリエンコード + テキスト特徴生成 + 正規化を自動", "GPU 自動選択のみ", "Endpoint 自動作成", "DB 接続のみ"], correctIndex: 0, explanation: "**AutoML Featurization auto**: 欠損補完(数値=平均 / カテゴリ=最頻)・ One-Hot / Target Encoding ・ TF-IDF / BoW / Embeddings(テキスト)・ Datetime 分解 ・ 高 cardinality 除外。**custom** で個別指定可。" },
  { id: "dp100-q52", category: "AutoML", difficulty: 3, question: "AutoML **時系列予測(Forecasting)** で使用される **Many Models** パターンの用途を選びなさい。", choices: ["店舗 ・ SKU 別など多数の時系列を並列で個別モデル化", "1 つの巨大モデル", "GPU 必須", "Endpoint 用"], correctIndex: 0, explanation: "**Many Models Solution Accelerator**: 何千もの時系列(店舗×SKU)を **PipelineRun + ParallelRunStep** で個別 AutoML 実行。**Hierarchical Time Series(HTS)** で集約も。" },
  { id: "dp100-q53", category: "Sweep", difficulty: 3, question: "Sweep Job の **Bandit Policy** のパラメータ `slack_factor=0.2` の意味として最も適切なものを選びなさい。", choices: ["現時点のベスト値の 20% 以内を維持できない trial を Early Termination", "20% の trial を残す", "20% の GPU 使用", "20 ノード起動"], correctIndex: 0, explanation: "**Bandit Policy**: 評価間隔ごとに `best · (1 + slack_factor)` を下回る trial を停止。**slack_amount** は絶対値版。**Median Stopping** / **Truncation Selection** も Early Termination 選択肢。" },
  { id: "dp100-q54", category: "Pipeline", difficulty: 3, question: "Azure ML Pipeline の **Component**(`@command_component`)の利点として最も適切なものを選びなさい。", choices: ["入出力 ・ 環境 ・ コマンドを定義済みの再利用可能ユニット → Registry で共有", "GPU 自動選択", "DB 自動接続", "デプロイ自動化"], correctIndex: 0, explanation: "**Component**: 関数を Component 化 → YAML 化 → Workspace / Registry に登録 → 他 Pipeline で再利用。**v2 SDK** で `@command_component` デコレータ。組織横断の MLOps 標準化に有効。" },
  { id: "dp100-q55", category: "Registry", difficulty: 3, question: "Azure ML の **Workspace Registry** と **Organization Registry** の違いとして最も適切なものを選びなさい。", choices: ["Organization Registry は複数 Workspace / Region でモデル ・ Component を共有", "GPU 専用 vs CPU 専用", "Free vs Paid", "Public vs Private"], correctIndex: 0, explanation: "**Workspace 内**: 単一 Workspace のみ。**Organization Registry**: テナント内の複数 Workspace ・ Region で Model / Component / Environment を共有。エンタープライズ MLOps 必須。" },
  { id: "dp100-q56", category: "Endpoint", difficulty: 3, question: "**Managed Online Endpoint** の **Traffic Splitting** の典型用途として最も適切なものを選びなさい。", choices: ["Blue/Green ・ A/B Test ・ Canary Deployment(90/10 等)", "GPU 分散", "認証", "DB 接続"], correctIndex: 0, explanation: "**Traffic Splitting**: 1 Endpoint 内に複数 Deployment(Blue=v1, Green=v2)→ traffic 90/10 でカナリア → 異常なし → 100/0 切り替え。**Mirror Traffic** でシャドーテストも。" },
  { id: "dp100-q57", category: "Endpoint", difficulty: 3, question: "**Batch Endpoint** の `mini_batch_size` を調整する目的として最も適切なものを選びなさい。", choices: ["メモリ / レイテンシ / スループットのバランス調整", "課金単位", "GPU 数", "ノード数"], correctIndex: 0, explanation: "**Batch Endpoint**: 大量データを **ParallelRunStep** ベースで処理。`mini_batch_size`(行数 / ファイル数)・ `instance_count`(ノード)・ `max_concurrency_per_instance`(プロセス)で並列度設計。" },
  { id: "dp100-q58", category: "Responsible AI", difficulty: 3, question: "Responsible AI Dashboard の **Fairness Assessment** で使う代表的指標として最も適切なものを選びなさい。", choices: ["Demographic Parity Difference / Equalized Odds Difference", "RMSE", "F1", "GPU 使用率"], correctIndex: 0, explanation: "**Fairlearn** ベース。**Demographic Parity**(予測陽性率の群間差)・ **Equalized Odds**(TPR / FPR 差)・ **Selection Rate**。**Mitigation**: Reweighing / ExponentiatedGradient / GridSearch。" },
  { id: "dp100-q59", category: "Monitoring", difficulty: 3, question: "Azure ML **Data Drift Monitor** の `target_dataset` と `baseline_dataset` の関係として最も適切なものを選びなさい。", choices: ["baseline=学習時データ、target=本番受信データ → 分布比較で Drift 検出", "両方学習用", "両方本番", "GPU 監視"], correctIndex: 0, explanation: "**Data Drift Job**(v2 では Model Monitor): baseline(学習時)を基準に target(本番)の分布変化を**Wasserstein / PSI / Jensen-Shannon** で測定 → 閾値超で Alert。" },
  { id: "dp100-q60", category: "Compute", difficulty: 3, question: "**Compute Instance** と **Compute Cluster** の使い分けとして最も適切なものを選びなさい。", choices: ["Instance=対話開発(VSCode/Jupyter)、Cluster=Job 実行 ・ Scale Out", "両方同じ", "Instance はバッチ", "Cluster は GUI"], correctIndex: 0, explanation: "**Compute Instance**: 1 ユーザー専用の VM(IDE / Notebook 接続)。**Compute Cluster**: min/max ノード数で Auto Scale ・ Job 投入。**Serverless Compute(v2)** で Cluster 管理不要も可。" },
  { id: "dp100-q61", category: "Distributed", difficulty: 3, question: "**DeepSpeed** を Azure ML で使用する目的として最も適切なものを選びなさい。", choices: ["大規模 LLM の ZeRO Stage 1/2/3 でメモリ削減 → 単一 GPU に収まらないモデル学習", "GUI", "Endpoint 高速化", "DB 接続"], correctIndex: 0, explanation: "**DeepSpeed ZeRO**: Optimizer(St1)/ Gradient(St2)/ Parameter(St3)分割で GPU メモリ削減。Azure ML Curated Environment + distribution.type=PyTorch + LaunchScript で利用。" },
  { id: "dp100-q62", category: "Lineage", difficulty: 3, question: "Azure ML の **Model Lineage**(系譜)の追跡対象として最も適切なものを選びなさい。", choices: ["Data → Job → Run → Model → Endpoint Deployment の全リネージ", "GPU のみ", "コストのみ", "認証のみ"], correctIndex: 0, explanation: "**Lineage**: どの Dataset / Code / Environment / Hyper-parameter からこの Model が生まれ、どの Endpoint にデプロイされたかを **Asset Graph** で可視化。監査 / 再現性 / インシデント対応に必須。" },
  { id: "dp100-q63", category: "GenAI", difficulty: 3, question: "Azure ML での **OpenAI モデル Fine-tuning** に関する記述として最も適切なものを選びなさい。", choices: ["Azure AI Foundry(旧 AI Studio)経由で GPT-3.5/4o-mini を SFT / DPO / RFT 可", "Azure ML だけで GPT-4o を full fine-tune", "Endpoint 不要", "GPU 不要"], correctIndex: 0, explanation: "**Foundry Fine-tuning**: SFT(教師あり)・ **DPO**(嗜好最適化)・ **RFT**(強化, o-series)対応。**Foundry hub と Azure ML Workspace は統合**。LoRA ベースで小データでも有効。" },
  { id: "dp100-q64", category: "MLOps", difficulty: 3, question: "**Azure ML + MLflow** の連携で MLflow の役割として最も適切なものを選びなさい。", choices: ["Tracking / Model Registry の OSS インターフェース → Azure ML バックエンドで動作", "OS 提供", "GUI 提供", "GPU 提供"], correctIndex: 0, explanation: "**Azure ML は MLflow Tracking Server 互換**。`mlflow.set_tracking_uri(workspace.get_mlflow_tracking_uri())` でローカルコードを変更せず Azure ML に記録。**Model Registry も MLflow Flavor** 対応。" },
  { id: "dp100-q65", category: "実務原則", difficulty: 3, question: "DP-100 試験で最重要視される **Microsoft 推奨 MLOps プラクティス** として最も適切なものを選びなさい。", choices: ["Pipeline + Component + Registry + Endpoint + Monitor + Responsible AI を一気通貫", "Notebook 手動運用", "GUI 中心", "Spreadsheet 管理"], correctIndex: 0, explanation: "**MLOps Maturity**: L0 手動 / L1 部分自動 / L2 完全自動 / L3 完全 MLOps。**Pipeline ・ Component 化 / Registry / Endpoint / Drift Monitor / Responsible AI**で L2-L3 を目指すのが Microsoft 推奨。" },
];
