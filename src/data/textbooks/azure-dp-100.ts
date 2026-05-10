import type { Textbook } from "@/types/content";

export const azureDp100Textbook: Textbook = {
  levelSlug: "azure-dp-100",
  title: "Microsoft Azure Data Scientist Associate(DP-100)教科書",
  intro:
    "**Microsoft Certified: Azure Data Scientist Associate(DP-100)** は、**Azure Machine Learning(Azure ML)を用いた ML ワークロードの設計 ・ 実装 ・ 運用** を問う **Associate レベル** の Microsoft 認定。**AI-900(Fundamentals)・ AI-102(AI Engineer)と並ぶ Azure AI/ML 三本柱** の 1 つで、**データサイエンティスト ・ ML エンジニア** にとって Azure における最重要認定です。**SDK / CLI v2 ・ Studio ・ AutoML ・ Sweep ジョブ ・ Endpoints ・ Responsible AI Dashboard** まで網羅。本教科書は 10 章で出題範囲を体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "DP-100 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・Azure AI/ML 認定の位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**DP-100** は **Azure ML を実際に動かしてモデルを学習 ・ デプロイ ・ 運用** できることを測る Associate 認定。**AI-900(概念中心 ・ Fundamentals)・ AI-102(AI サービス API 統合 ・ AI Engineer)** とは出題スコープが異なり、**ML プロジェクトを Azure ML で完結させる『データサイエンティスト』としての実装力** が問われます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Microsoft",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験",
                "**問題数 / 時間**: 40〜60 問 / 100 分(参考)",
                "**回答方式**: 単一選択 + 複数選択 + ドラッグ & ドロップ + ケーススタディ",
                "**合格スコア**: 700 / 1000",
                "**有効期限**: 1 年(無料更新試験あり)",
                "**受験料**: 165 USD(参考)",
                "**前提知識**: Python ・ scikit-learn ・ MLflow ・ Azure 基本",
              ],
            },
            { type: "h3", text: "Azure AI/ML 認定の三本柱" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Fundamentals**: AI-900(概念入門)",
                "**Associate(AI Engineer 系)**: AI-102(Azure OpenAI / AI Search / Foundry)",
                "**Associate(Data Scientist 系)**: DP-100(本資格、Azure ML 実装中心)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題スキルとドメイン",
          blocks: [
            { type: "h3", text: "公式試験ガイドのスキル領域" },
            {
              type: "list",
              style: "number",
              items: [
                "**ML ソリューションの設計 / 準備**(20〜25%)",
                "**データの探索 / 準備**(20〜25%)",
                "**モデルの学習 / 評価**(25〜30%)",
                "**モデルのデプロイ / 運用**(20〜25%)",
              ],
            },
            { type: "h3", text: "100 〜 200 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1〜2**: Azure 基本 + Azure ML Workspace の作成",
                "**Week 3〜4**: SDK v2 / CLI v2 / Studio で学習ジョブを実行",
                "**Week 5〜6**: AutoML + Sweep + Designer + Pipelines",
                "**Week 7〜8**: Endpoints + Model Registry + Responsible AI",
                "**Week 9〜10**: 模擬試験 + 公式 Microsoft Learn",
              ],
            },
            {
              type: "intuition",
              title: "DP-100 の本質は『SDK/CLI v2 で MLOps を回せるか』",
              body: "Azure ML には **SDK v1 / v2 と CLI v2 / Studio GUI** が共存していますが、**現行 DP-100 は v2 中心**。**Job ・ Component ・ Pipeline ・ Environment ・ Compute ・ Data Asset** という v2 の概念モデルを身体に染み込ませることが最重要。**Microsoft Learn の DP-100 ラーニングパス + GitHub の azureml-examples** が王道教材。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Azure ML Workspace の構造",
      overview:
        "Workspace ・ Compute ・ Datastore ・ Environment などの基本資源を理解します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Workspace の構成要素",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workspace**: ML プロジェクトの中心ハブ。すべてのリソースをまとめる",
                "**Resource Group**: Workspace を含む Azure リソースのグループ",
                "**Storage Account**: Job のログ ・ アーティファクトを保存",
                "**Key Vault**: シークレット管理(connection string など)",
                "**Application Insights**: ログ ・ メトリクス収集",
                "**Container Registry(ACR)**: 学習 ・ 推論用の Docker イメージ保管",
              ],
            },
            {
              type: "intuition",
              title: "Workspace は『ML 用の Azure サブスク』のような単位",
              body: "**Workspace = ML プロジェクトの境界**。アクセス制御 ・ 課金 ・ コラボレーション全てが Workspace 単位。**実務では Dev / Staging / Prod で別 Workspace** を作るのが定石。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Compute Target の選び分け",
          blocks: [
            { type: "h3", text: "主要な Compute" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Compute Instance**: 単独 VM、Notebook 開発用。1 ユーザーに紐付く",
                "**Compute Cluster**: スケーラブルな VM プール、学習ジョブ ・ Sweep に最適",
                "**Inference Cluster(AKS)**: 本番推論、低レイテンシ ・ オートスケール",
                "**Attached Compute**: 既存の Synapse / Databricks / VM を接続",
                "**Serverless Compute**: ジョブ実行時に動的にプロビジョニング、運用コスト低",
              ],
            },
            { type: "h3", text: "選び分けの指針" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**実験 ・ Notebook**: Compute Instance",
                "**学習ジョブ ・ HPO**: Compute Cluster(min_instances=0 で待機時 0 円)",
                "**本番リアルタイム推論**: Managed Online Endpoint または AKS",
                "**バッチ推論**: Managed Batch Endpoint",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "データアセットとデータストア",
      overview:
        "Datastore ・ Data Asset ・ MLTable を使ったデータ管理を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Datastore",
          blocks: [
            {
              type: "p",
              text: "**Datastore** は Azure Storage(Blob / ADLS Gen2 / File Share / SQL DB)への接続情報。**認証 ・ アクセス制御を抽象化** し、ノートブックやジョブから統一的にデータを取得できる。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**workspaceblobstore**: Workspace 作成時にデフォルトで紐づく Blob",
                "**workspacefilestore**: ノートブックファイル用",
                "**ADLS Gen2 Datastore**: 大規模データレイク向け、階層構造 ・ POSIX ACL 対応",
                "**認証**: account key / SAS token / Service Principal / Managed Identity",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Data Asset と MLTable",
          blocks: [
            { type: "h3", text: "Data Asset の 3 種類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**uri_file**: 単一ファイル(CSV / Parquet など)",
                "**uri_folder**: フォルダ全体",
                "**mltable**: MLTable YAML(スキーマ ・ パーティション ・ 変換を定義)",
              ],
            },
            { type: "h3", text: "Data Asset のバージョン管理" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Data Asset は不変 ・ バージョン付き**(再現性のため)",
                "**ジョブから参照する際は name + version** を指定",
                "**latest を参照すると再現性が崩れる** → 本番 Pipeline では明示バージョン推奨",
              ],
            },
            {
              type: "intuition",
              title: "MLTable は『Azure ML 流の Data Catalog』",
              body: "**MLTable は MLflow の `data.read_csv` や Spark の DataFrame を YAML 化したもの** に近い概念。**列のスキーマ ・ ファイル分割 ・ 前処理(clip / hash)を YAML で宣言** できるため、**Pipeline / AutoML / Notebook 全てから同じデータ定義を再利用** できます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "ジョブ実行と Environment",
      overview:
        "Command / Sweep / Pipeline ジョブと Environment の管理を学びます。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "ジョブの種類",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Command Job**: 単一スクリプトを実行、最も基本",
                "**Sweep Job**: ハイパーパラメータ探索、Command を内包",
                "**Pipeline Job**: 複数 Component を DAG で連結",
                "**AutoML Job**: AutoML が自動でモデル候補を学習",
                "**Spark Job**: Spark クラスタで分散処理",
              ],
            },
            { type: "h3", text: "Command Job の最小構成(YAML キー)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**`command`**: 実行する Python スクリプト ・ 引数(例: `python train.py --data ${{inputs.data}}`)",
                "**`code`**: スクリプトを含むローカルディレクトリ(例: `./src`)",
                "**`environment`**: 学習で使う Environment(例: `azureml:sklearn-1.0:1`)",
                "**`compute`**: 実行する Compute Target(例: `azureml:cpu-cluster`)",
                "**`inputs.data.type`**: `uri_file` / `uri_folder` / `mltable` のいずれか",
                "**`inputs.data.path`**: Data Asset 参照(例: `azureml:my-data:1`)",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Environment の管理",
          blocks: [
            {
              type: "p",
              text: "**Environment** は Docker イメージ + Conda / pip 依存関係を束ねる単位。学習 ・ 推論ジョブの再現性を担保する。",
            },
            { type: "h3", text: "Environment の分類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Curated Environment**: Microsoft 提供の事前構築済(scikit-learn / PyTorch / TensorFlow など)",
                "**Custom Environment**: Dockerfile or Conda YAML から自作",
                "**バージョン管理**: 不変、新しいパッケージ追加は新バージョンとして登録",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "AutoML と Designer",
      overview:
        "コードを書かずに ML を回す 2 つのアプローチを整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "AutoML",
          blocks: [
            {
              type: "p",
              text: "**AutoML** は **特徴量エンジニアリング ・ アルゴリズム選択 ・ ハイパーパラメータ探索 ・ アンサンブル** を自動化。**Classification / Regression / Forecasting / NLP / Computer Vision** のタスクに対応。",
            },
            { type: "h3", text: "AutoML の重要設定" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**primary_metric**: 最適化指標(accuracy / AUC / RMSE / NDCG など)",
                "**experiment_timeout_hours**: 全体の打ち切り時間",
                "**max_trials**: 試すモデル候補数",
                "**enable_early_stopping**: 性能が頭打ちになったら早期停止",
                "**blocked_models**: 除外モデル(LightGBM だけ使うなど)",
                "**featurization**: auto / off / custom(列ごとに前処理を指定)",
              ],
            },
            {
              type: "intuition",
              title: "AutoML は『時短』ではなく『ベンチマーク』",
              body: "**AutoML の真価は『この問題に最適なアルゴリズムが LightGBM か XGBoost か』を 1 時間で炙り出す**こと。本番モデルそのものより、**手動チューニングの初期値 ・ 比較ベースライン** として使うのが実務的。",
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Designer",
          blocks: [
            {
              type: "p",
              text: "**Designer** は **GUI ベースのドラッグ & ドロップ式 ML パイプラインビルダー**。コードを書かずに前処理 ・ 学習 ・ 評価のフローを構築できる。**ノーコード ・ ローコード** 領域の選択肢。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**コンポーネント**: Clean Missing Data / Split Data / Train Model / Score Model などのブロック",
                "**Pipeline 化 → Endpoint デプロイ** までシームレス",
                "**ただし v2 SDK / CLI ほど柔軟性はない** ため、本番運用は SDK ベースが推奨",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "ハイパーパラメータ最適化(Sweep)",
      overview:
        "Sweep ジョブでハイパーパラメータ探索とサンプリング戦略を学びます。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "サンプリング手法",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Grid Sampling**: 全組み合わせを網羅、離散値のみ ・ 試行数が爆発",
                "**Random Sampling**: ランダム抽出、離散 + 連続値対応 ・ Grid より効率的",
                "**Bayesian Sampling**: 過去結果から確率モデルを構築、少ない試行で高性能 ・ early termination 不可",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Early Termination Policy",
          blocks: [
            { type: "h3", text: "主要なポリシー" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Bandit Policy**: 最良試行から `slack_factor` を超えて性能が劣る試行を打ち切り、最も積極的",
                "**Median Stopping Policy**: 中央値より悪い試行を打ち切り、保守的",
                "**Truncation Selection**: 下位 X% の試行を毎エポック打ち切り",
                "**No Termination**: 全試行を最後まで実行(Bayesian 推奨)",
              ],
            },
            {
              type: "intuition",
              title: "Sweep の戦略",
              body: "**実装感覚**: 探索初期は **Random + Bandit** で広く浅く、見込みが見えたら **Bayesian + No Termination** で精緻化。**Grid Sampling は離散値が少ない時のみ**(列挙数が爆発する)。",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Model Registry とデプロイ",
      overview:
        "MLflow Model ・ Online / Batch Endpoint ・ Blue-Green デプロイを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Model Registry と MLflow",
          blocks: [
            {
              type: "p",
              text: "**Azure ML Model Registry** は **MLflow Model 形式** をネイティブサポート。**`mlflow.sklearn.log_model` でログしたモデルがそのまま登録 ・ デプロイ可能** な設計。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Model 形式**: `mlflow_model` / `triton_model` / `custom_model`",
                "**バージョニング**: 同名で再登録するとバージョンが自動インクリメント",
                "**メタデータ**: 学習データ ・ メトリクス ・ コード ・ 環境を一括保管",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Online Endpoint と Blue-Green",
          blocks: [
            { type: "h3", text: "Endpoint と Deployment の関係" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Endpoint**: 1 つの REST URL を持つ論理エンドポイント",
                "**Deployment**: Endpoint 配下の実体(モデル + Compute + コード)。**1 Endpoint に複数 Deployment** をぶら下げて重み付きトラフィック分散できる",
                "**Blue-Green**: blue=現行 100% / green=新規 0% でデプロイ → green に 10% シフト → 全量切替の安全策",
                "**Mirror traffic**: 本番トラフィックを green にコピー(返答は blue)、影響なしで負荷検証",
              ],
            },
            { type: "h3", text: "Batch Endpoint" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Batch Endpoint**: 大量データの定時推論、Job ベース、コスト最適",
                "**入力**: Data Asset を指定 → 出力 Datastore に書き戻し",
                "**最小構成 0 ノード** で待機時 0 円が魅力",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Responsible AI と Model Monitoring",
      overview:
        "RAI Dashboard ・ Data Drift ・ Model Performance 監視を学びます。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Responsible AI Dashboard",
          blocks: [
            {
              type: "p",
              text: "**Responsible AI Dashboard** は **モデルの公平性 ・ 解釈可能性 ・ 誤分析** をひとつの GUI で確認できる Microsoft の責任ある AI ツール。**Microsoft の Responsible AI Standard** を実装で支える中核。",
            },
            { type: "h3", text: "RAI Dashboard の構成要素" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Error Analysis**: モデルが誤りやすいセグメントを可視化",
                "**Model Overview**: 全体および属性別(性別 ・ 年齢など)の指標",
                "**Data Analysis**: 特徴量分布 ・ クラスバランス",
                "**Feature Importance**: グローバル / ローカル(SHAP / LIME ベース)",
                "**Counterfactual What-If**: 『ある特徴量を変えたら予測はどう変わるか』を分析",
                "**Causal Inference**: 介入効果(treatment effect)の推定",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Model Monitoring",
          blocks: [
            { type: "h3", text: "監視対象の 4 シグナル" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Data Drift**: 入力特徴量の分布変化(ベースライン vs プロダクション)",
                "**Prediction Drift**: 予測値分布の変化",
                "**Data Quality**: 欠損率 ・ 範囲外値 ・ 型不一致",
                "**Feature Attribution Drift**: 特徴量寄与度の変化",
              ],
            },
            { type: "h3", text: "ドリフト検出メトリクス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Numerical**: Wasserstein 距離 ・ Two-sample KS 検定 ・ Jensen-Shannon",
                "**Categorical**: Pearson カイ二乗 ・ Population Stability Index(PSI)",
                "**閾値超過 → アラート → Logic Apps / Email / Webhook で通知**",
              ],
            },
            {
              type: "intuition",
              title: "監視の優先順位",
              body: "**最初に Data Quality(欠損 ・ 範囲外)、次に Data Drift、最後に Performance(ラベルが必要)** という順で実装するのが現実的。**ラベルが取れない本番では『近似ラベル』(下流の業務 KPI)で Performance を追う** のが定石。",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "MLOps と Pipeline",
      overview:
        "Pipeline ・ Component ・ CI/CD ・ Azure DevOps / GitHub Actions 統合を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Pipeline と Component",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Component**: 再利用可能な処理単位(input / output / コード / 環境を YAML 定義)",
                "**Pipeline**: Component を DAG で連結したジョブ",
                "**メリット**: 部分再実行 ・ キャッシュ ・ チームで Component 共有",
                "**実装**: SDK v2 の `@dsl.pipeline` デコレータ または CLI v2 の YAML",
              ],
            },
            { type: "h3", text: "Pipeline の典型構成" },
            {
              type: "list",
              style: "number",
              items: [
                "**Data Prep**: 欠損処理 ・ 特徴量生成",
                "**Train**: モデル学習",
                "**Evaluate**: 評価指標 ・ Champion との比較",
                "**Register**: 良ければ Model Registry へ登録",
                "**Deploy**: Online / Batch Endpoint へ自動デプロイ",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "CI/CD と MLOps",
          blocks: [
            { type: "h3", text: "GitHub Actions / Azure DevOps 統合" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**コード push → 学習 Pipeline 実行**(Continuous Training)",
                "**評価が閾値超え → Endpoint 自動デプロイ**(Continuous Deployment)",
                "**`azure/login` + `azureml-cli` action** で Workspace へ接続",
                "**Service Principal** または **Managed Identity** で認証",
              ],
            },
            {
              type: "intuition",
              title: "MLOps の成熟度モデル",
              body: "Microsoft Learn では **Level 0(手動)→ Level 1(ML パイプライン自動化)→ Level 2(CI/CD パイプライン自動化)** の 3 段階で説明。**DP-100 では Level 1 → Level 2 移行を実装できる** ことが期待される。",
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "セキュリティ ・ ガバナンス ・ コスト",
      overview:
        "Managed Identity ・ Private Link ・ RBAC ・ コスト最適化を学びます。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "認証 ・ ネットワーク",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Managed Identity(System / User-Assigned)**: シークレット不要で他 Azure リソースへアクセス",
                "**Service Principal**: AAD アプリ ID + シークレット、CI/CD で利用",
                "**Private Link / Private Endpoint**: Workspace を VNet 内に閉じ込める",
                "**Customer-Managed Keys(CMK)**: BYOK で Storage / Key Vault 暗号化",
                "**Workspace アクセス**: RBAC(Owner / Contributor / Reader / AzureML Data Scientist など)",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "コスト最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Compute Cluster の min_instances=0**: 待機時 0 円",
                "**Spot 仮想マシン(Low-priority VM)**: 通常の 1/5 コスト、ただし途中中断あり",
                "**Serverless Compute**: 必要な時だけ起動、運用負荷も最小",
                "**Online Endpoint のオートスケール**: CPU / リクエスト数で自動スケール",
                "**Quota 管理**: vCPU 上限を Subscription / Region 単位で確認",
              ],
            },
            {
              type: "intuition",
              title: "DP-100 受験の最終チェック",
              body: "**直前 1 週間**: Microsoft Learn の DP-100 ラーニングパスを再走 + Azure ML CLI v2 リファレンスで `ml job` / `ml endpoint` / `ml model` のサブコマンドを暗記。**当日**: Azure ポータル ・ Azure ML Studio の画面遷移 ・ ボタン位置を頭に思い浮かべながら、ケーススタディの長文を 1 行ずつ落ち着いて読む。",
            },
          ],
        },
      ],
    },
  ],
};
