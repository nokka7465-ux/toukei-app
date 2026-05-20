import type { Question } from "@/types/content";

export const gcpDataEngineerQuestions: Question[] = [
  {
    id: "gde-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "GCP Professional Data Engineer の認定レベルとして最も適切なものを選びなさい。",
    choices: ["Foundational", "Associate", "Professional", "Specialty"],
    correctIndex: 2,
    explanation:
      "**GCP Data Engineer は Professional レベル**。GCP 認定: Cloud Digital Leader(Foundational)→ Associate Cloud Engineer / Associate Data Practitioner → **Professional Data Engineer / ML Engineer**。",
  },
  {
    id: "gde-q2",
    category: "BigQuery",
    difficulty: 3,
    question:
      "BigQuery の **コスト最適化として最も効果が大きい** ものを選びなさい。",
    choices: [
      "WHERE で分割列とクラスタ列を絞り、必要列のみ SELECT する",
      "テーブルを SORTED でロードする",
      "リージョンを EU から US に切替える",
      "予約スロットを 1000 倍に増やす",
    ],
    correctIndex: 0,
    explanation:
      "**On-demand クエリはスキャン量 6.25 USD/TB の従量課金**。**`SELECT *` 禁止 + WHERE で分割列/クラスタ列を絞る** ことで **スキャン量 90%+ 削減** が可能。`bq query --dry_run` で事前確認の習慣を。",
  },
  {
    id: "gde-q3",
    category: "BigQuery",
    difficulty: 3,
    question:
      "BigQuery の **クラスタリング** に関する説明として **誤っているもの** を選びなさい。",
    choices: [
      "最大 4 列までクラスタキーを指定できる",
      "ブロック単位でソートされメタデータが保持される",
      "WHERE / JOIN / GROUP BY が高速化する",
      "クラスタリングは分割と同時には使えない",
    ],
    correctIndex: 3,
    explanation:
      "**分割 + クラスタリング併用が定石**。分割で大きく区切り、クラスタリングで微細な範囲を絞る、の 2 段構え。クラスタキーは最大 4 列までで Block Pruning により高速化。",
  },
  {
    id: "gde-q4",
    category: "BigQuery",
    difficulty: 3,
    question:
      "BigQuery の **マテリアライズドビュー(MV)** の特徴として **誤っているもの** を選びなさい。",
    choices: [
      "集計結果を物理保存し、自動増分更新される",
      "スマートルーティングで元クエリを自動で MView に書き換え",
      "JOIN ・ サブクエリも対応(2024 以降)",
      "実体は通常の VIEW と同じで物理ストレージは消費しない",
    ],
    correctIndex: 3,
    explanation:
      "**MV は集計結果を物理ストレージに保存** + 自動増分更新 + スマートルーティング。**通常 VIEW と異なり物理ストレージを消費**(Active ストレージ料金)。頻繁な集計クエリでコスト 90%+ 削減。",
  },
  {
    id: "gde-q5",
    category: "BQML",
    difficulty: 3,
    question:
      "BQML(BigQuery ML)が **直接サポートしないモデル** を選びなさい。",
    choices: [
      "Linear Regression",
      "Logistic Regression",
      "Boosted Tree(XGBoost)",
      "Reinforcement Learning",
    ],
    correctIndex: 3,
    explanation:
      "**BQML は Linear / Logistic / Boosted Tree / DNN / AutoML / ARIMA+ / Matrix Factorization / K-Means / PCA** をサポート。**強化学習(RL)は対応外**(Vertex AI で実装)。",
  },
  {
    id: "gde-q6",
    category: "Storage",
    difficulty: 2,
    question:
      "Cloud Storage のストレージクラスのうち、**年 1 回未満アクセス ・ 最低 365 日保管** に最適なものを選びなさい。",
    choices: ["Standard", "Nearline", "Coldline", "Archive"],
    correctIndex: 3,
    explanation:
      "**Archive** は最低 365 日保管 ・ 年 1 回未満アクセス向け、最安。**Coldline は 90 日**、**Nearline は 30 日**。Object Lifecycle で自動階層遷移を組合せるのが定石。",
  },
  {
    id: "gde-q7",
    category: "NoSQL",
    difficulty: 3,
    question:
      "**ペタバイト級の時系列メトリクス / IoT データを高スループットで読み書き** したい。最適なサービスを選びなさい。",
    choices: ["Spanner", "Bigtable", "Firestore", "Cosmos DB"],
    correctIndex: 1,
    explanation:
      "**Bigtable** は **ペタバイト級 NoSQL ・ HBase API 互換 ・ 単一行 ACID**。時系列メトリクス / IoT / 金融取引履歴に最適。**行キー設計でホットスポットを避ける**(時系列の昇順は避ける)。",
  },
  {
    id: "gde-q8",
    category: "NoSQL",
    difficulty: 3,
    question:
      "**グローバル分散 + 強整合 + ACID + 水平スケール** を満たす GCP RDB を選びなさい。",
    choices: ["Cloud SQL", "Spanner", "Bigtable", "Firestore"],
    correctIndex: 1,
    explanation:
      "**Spanner** は **グローバル分散 RDB + ACID + 強整合 + 水平スケール**(TrueTime API による線形化保証)。Cloud SQL は単一リージョン RDB、Bigtable は NoSQL、Firestore はドキュメント DB。",
  },
  {
    id: "gde-q9",
    category: "Dataflow",
    difficulty: 3,
    question:
      "Apache Beam の **不変分散データセット** を表す概念を選びなさい。",
    choices: ["Pipeline", "PCollection", "PTransform", "DoFn"],
    correctIndex: 1,
    explanation:
      "**PCollection** は不変の分散データセット(Beam の中核オブジェクト)。Pipeline は全体グラフ、PTransform は変換操作、DoFn は ParDo 内の関数。",
  },
  {
    id: "gde-q10",
    category: "Dataflow",
    difficulty: 3,
    question:
      "Beam の **イベント時刻でデータを分割するウィンドウ** で、**ユーザーセッションのような連続イベント単位** で集計したい。最適なウィンドウを選びなさい。",
    choices: [
      "Fixed Window",
      "Sliding Window",
      "Session Window",
      "Global Window",
    ],
    correctIndex: 2,
    explanation:
      "**Session Window** は **gap duration を超えるアイドル時間で区切られる** ウィンドウ。ユーザーセッション解析に最適。Fixed は固定間隔、Sliding は重複あり固定。",
  },
  {
    id: "gde-q11",
    category: "Dataflow",
    difficulty: 2,
    question:
      "Dataflow の機能として **ストリーム処理の状態を Worker から分離 → 自動スケール ・ 信頼性向上** するものを選びなさい。",
    choices: [
      "Streaming Engine",
      "Shuffle Service",
      "Dataflow Prime",
      "Worker Pool",
    ],
    correctIndex: 0,
    explanation:
      "**Streaming Engine** は **ストリーム処理の状態を Worker から専用サービスに分離** → 自動スケール ・ 信頼性向上 ・ Worker サイズ変更が容易。**Shuffle Service はバッチ用** の同様分離機構。",
  },
  {
    id: "gde-q12",
    category: "Pub/Sub",
    difficulty: 2,
    question:
      "Pub/Sub の **デフォルトの配信保証** を選びなさい。",
    choices: [
      "At-most-once",
      "At-least-once",
      "Exactly-once delivery",
      "Best-effort",
    ],
    correctIndex: 1,
    explanation:
      "**Pub/Sub のデフォルトは At-least-once**。**Exactly-once delivery はオプション**(地域内 Subscription のみ)。重複処理に耐える設計が基本(冪等性)。",
  },
  {
    id: "gde-q13",
    category: "Pub/Sub",
    difficulty: 2,
    question:
      "**Pub/Sub からメッセージを直接 BigQuery に書き込みたい(Dataflow なしで)**。最適な機能を選びなさい。",
    choices: [
      "Cloud Functions",
      "BigQuery Subscription",
      "Cloud Run",
      "Dataproc",
    ],
    correctIndex: 1,
    explanation:
      "**BigQuery Subscription** は **Pub/Sub から BigQuery へ Dataflow 不要で直接書込**(2022 GA)。Cloud Storage Subscription も同様。シンプルなストリーム取込で第一候補。",
  },
  {
    id: "gde-q14",
    category: "Dataproc",
    difficulty: 2,
    question:
      "**既存の Spark / Hive 資産をそのままマネージドで実行したい**。最適な GCP サービスを選びなさい。",
    choices: ["Dataflow", "Dataproc", "BigQuery", "Cloud Composer"],
    correctIndex: 1,
    explanation:
      "**Dataproc** は **Hadoop / Spark / Hive / Presto / Pig / Tez を 90 秒で起動** するマネージド版。既存の Spark/Hive 資産があるならまず Dataproc。新規はサーバレス志向で Dataflow + BigQuery 推奨。",
  },
  {
    id: "gde-q15",
    category: "Dataproc",
    difficulty: 3,
    question:
      "**Spark バッチをサーバレスで実行**(クラスタプロビジョニング不要)したい。最適な機能を選びなさい。",
    choices: [
      "Dataproc Cluster",
      "Dataproc Serverless for Spark",
      "Dataflow",
      "Cloud Run",
    ],
    correctIndex: 1,
    explanation:
      "**Dataproc Serverless for Spark** は **クラスタプロビジョニング不要 ・ サーバレス** で PySpark / Spark SQL を実行。バッチワークロードに最適、運用負荷ゼロ。",
  },
  {
    id: "gde-q16",
    category: "Orchestration",
    difficulty: 2,
    question:
      "**Apache Airflow の DAG(Python)で複雑な依存関係 ・ Operators を活用したい**。最適な GCP サービスを選びなさい。",
    choices: [
      "Cloud Scheduler",
      "Workflows",
      "Cloud Composer",
      "Cloud Tasks",
    ],
    correctIndex: 2,
    explanation:
      "**Cloud Composer は Apache Airflow フルマネージド版**。Python の DAG ・ 豊富な Operators(BigQuery / Dataflow / Dataproc / GCS など)・ Sensors。**Workflows はサーバレス + YAML/JSON、Step Functions 相当**。",
  },
  {
    id: "gde-q17",
    category: "Orchestration",
    difficulty: 2,
    question:
      "**サーバレス + シンプル + コスト重視** で GCP サービスを HTTP で連携したい。最適なサービスを選びなさい。",
    choices: [
      "Cloud Composer",
      "Workflows",
      "Cloud Functions",
      "Cloud Build",
    ],
    correctIndex: 1,
    explanation:
      "**Workflows は サーバレス ・ YAML/JSON でステートマシン定義 ・ HTTP で GCP サービス連携**。**Cloud Composer より軽量 ・ 低コスト**。AWS Step Functions に相当。",
  },
  {
    id: "gde-q18",
    category: "BI",
    difficulty: 2,
    question:
      "**LookML で意味層を定義しエンタープライズ BI を構築** する GCP サービスを選びなさい。",
    choices: [
      "Looker",
      "Looker Studio(旧 Data Studio)",
      "Cloud Data Fusion",
      "BigQuery Data Studio",
    ],
    correctIndex: 0,
    explanation:
      "**Looker** はエンタープライズ BI、**LookML(モデリング言語)で意味層を定義** + Git バージョン管理 + Explore/View/Model。**Looker Studio は無料 BI** で個人/チーム向け。",
  },
  {
    id: "gde-q19",
    category: "Governance",
    difficulty: 3,
    question:
      "**GCP のデータメッシュ / データガバナンス統合プラットフォーム** を選びなさい。",
    choices: ["Dataplex", "Dataproc", "Data Catalog", "Datastream"],
    correctIndex: 0,
    explanation:
      "**Dataplex** は **Data Mesh / データガバナンス統合**。Lake / Zone / Asset の 3 階層 + Data Catalog 統合 + Data Quality + Auto Discovery + Data Lineage。**Data Catalog は Dataplex 配下のメタデータ機能**(現在は統合済)。",
  },
  {
    id: "gde-q20",
    category: "Security",
    difficulty: 3,
    question:
      "**BigQuery / GCS / Pub/Sub への API 呼び出しを VPC 境界で保護し、データ持出を防ぐ** GCP の機能を選びなさい。",
    choices: [
      "VPC Service Controls",
      "IAM",
      "Cloud Armor",
      "Cloud DLP",
    ],
    correctIndex: 0,
    explanation:
      "**VPC Service Controls** は **サービス境界(perimeter)で API 呼び出しを保護**(BigQuery / GCS / Pub/Sub など)。境界外からのアクセス遮断 + Access Levels で例外設定。**データ exfiltration 対策の中核**。",
  },
  {
    id: "gde-q21",
    category: "BigQuery Reservations",
    difficulty: 3,
    question:
      "BigQuery の **継続的な大規模ワークロードでコストを予測可能にする** 課金モデルを選びなさい。",
    choices: [
      "On-demand クエリ(スキャン量課金)",
      "BigQuery Editions / Reservations(Slot 単位の月額)",
      "Streaming Insert",
      "Storage Write API",
    ],
    correctIndex: 1,
    explanation:
      "**BigQuery Editions(Standard / Enterprise / Enterprise Plus)** で **Slot を予約購入** し継続コストを予測可能に。**On-demand は従量課金で予測不可だが小規模に最適**。",
  },
  {
    id: "gde-q22",
    category: "BigQuery Security",
    difficulty: 3,
    question:
      "BigQuery で **ロールごとに行を絞り込む(例: 自部署のレコードのみ)** 機能を選びなさい。",
    choices: [
      "Authorized View",
      "Row-Level Security(RLS)",
      "Column-Level Security",
      "Data Masking",
    ],
    correctIndex: 1,
    explanation:
      "**Row-Level Security(RLS)** は **`CREATE ROW ACCESS POLICY`** で行単位アクセス制御。Column-Level Security は列単位、Data Masking は値マスク、Authorized View は別データセット経由の制限ビュー。",
  },
  {
    id: "gde-q23",
    category: "BigLake",
    difficulty: 3,
    question:
      "**GCS / S3 / Azure Blob 上の Parquet / Iceberg を BigQuery / Spark などから統一的にクエリ** したい。最適な機能を選びなさい。",
    choices: [
      "Object Tables",
      "BigLake Tables(External / Iceberg)",
      "Federated Query",
      "Data Transfer Service",
    ],
    correctIndex: 1,
    explanation:
      "**BigLake Tables** は **GCS / S3 / Azure Blob 上のオープンフォーマット(Parquet / Iceberg / Hudi / Delta)を BigQuery + Spark から統一的にアクセス** + 細粒度アクセス制御。マルチクラウド Lakehouse の中核。",
  },
  {
    id: "gde-q24",
    category: "Dataflow Templates",
    difficulty: 2,
    question:
      "**Pub/Sub から BigQuery への定型ストリーム ETL** を最小工数で実装したい。最適な選択肢を選びなさい。",
    choices: [
      "Dataflow Flex Template(Google 提供 PubSub_to_BigQuery)",
      "Dataproc Cluster で Spark を書く",
      "Cloud Functions を 60 秒トリガで起動",
      "Cloud Run Jobs に独自実装",
    ],
    correctIndex: 0,
    explanation:
      "**Google 提供 Dataflow Templates(PubSub to BigQuery など多数)** は **コードゼロでパラメータ起動可能**。Pub/Sub BigQuery Subscription はさらにシンプルな選択肢。Spark/Functions は柔軟性 ・ 実装コスト高。",
  },
  {
    id: "gde-q25",
    category: "Datastream",
    difficulty: 3,
    question:
      "**Cloud SQL / Oracle / SQL Server から BigQuery へリアルタイム CDC レプリケーション** を行う GCP サービスを選びなさい。",
    choices: [
      "Datastream",
      "Database Migration Service",
      "Storage Transfer Service",
      "Dataflow",
    ],
    correctIndex: 0,
    explanation:
      "**Datastream** は **Cloud SQL / Oracle / SQL Server / MySQL / PostgreSQL から BigQuery / GCS に CDC レプリケーション**。マネージド ・ サーバレス ・ 低レイテンシ。Database Migration Service はワンタイム移行用。",
  },
  {
    id: "gde-q26",
    category: "Dataform",
    difficulty: 3,
    question:
      "BigQuery の **SQL ベース ELT を Git 管理 + DAG 化 + テスト + ドキュメント生成** したい。最適な GCP サービスを選びなさい。",
    choices: [
      "Cloud Dataform",
      "Cloud Composer",
      "Cloud Data Fusion",
      "Workflows",
    ],
    correctIndex: 0,
    explanation:
      "**Cloud Dataform** は **dbt 風の SQL ベース ELT フレームワーク**(Google 買収後 GCP 統合)。BigQuery への ELT パイプラインを Git 管理 + アサーション(テスト)+ Doc 生成。",
  },
  {
    id: "gde-q27",
    category: "Dataproc Metastore",
    difficulty: 3,
    question:
      "**複数 Dataproc クラスタ ・ BigQuery ・ Spark で同じ Hive メタストアを共有** したい。最適な機能を選びなさい。",
    choices: [
      "Dataproc Metastore(Apache Hive / Iceberg対応のマネージドメタストア)",
      "BigQuery Data Catalog",
      "Cloud Spanner",
      "Memorystore for Redis",
    ],
    correctIndex: 0,
    explanation:
      "**Dataproc Metastore** は **マネージド Hive Metastore + Iceberg REST Catalog**。複数 Dataproc / BigQuery / Spark / Trino で共通メタデータを共有。クラスタ削除してもメタデータが残る。",
  },
  {
    id: "gde-q28",
    category: "Storage Transfer",
    difficulty: 2,
    question:
      "**S3 / Azure Blob / オンプレからの大規模データを定期的に GCS に転送** したい。最適な GCP サービスを選びなさい。",
    choices: [
      "Storage Transfer Service",
      "gsutil cp(コマンドラインで実行)",
      "Cloud Functions",
      "Datastream",
    ],
    correctIndex: 0,
    explanation:
      "**Storage Transfer Service** は **S3 / Azure Blob / HTTP / オンプレ NFS / 別 GCS 間** のスケジュール ・ ワンタイム転送をマネージドで実行。並列 ・ レジューム ・ 整合性チェック。",
  },
  {
    id: "gde-q29",
    category: "BigQuery Streaming",
    difficulty: 3,
    question:
      "BigQuery への **新しい推奨ストリーミング書込 API**(従来の Streaming Insert より高機能)を選びなさい。",
    choices: [
      "Storage Write API",
      "Streaming Insert API(tabledata.insertAll)",
      "Load Job",
      "Federated Query",
    ],
    correctIndex: 0,
    explanation:
      "**BigQuery Storage Write API**(2022 GA)は **Exactly-once 配信 ・ ストリーム + バッチ統合 ・ 高スループット ・ 低コスト** を実現。**従来の Streaming Insert(tabledata.insertAll)を置き換える推奨 API**。",
  },
  {
    id: "gde-q30",
    category: "Architect 選び分け",
    difficulty: 3,
    question:
      "**ペタバイト級の単一行 ACID + 低レイテンシ書込(時系列 IoT)** に最適なのは Bigtable と Spanner のどちらか、その理由として最も適切なものを選びなさい。",
    choices: [
      "Spanner: グローバル強整合 + 高スループット書込が必要",
      "Bigtable: 単一行 ACID で十分かつ Spanner より大幅に低コスト ・ 高スループット",
      "BigQuery: ストリーミング Insert が最適",
      "Firestore: ドキュメント DB が時系列に最適",
    ],
    correctIndex: 1,
    explanation:
      "**時系列 IoT は単一行 ACID で十分** + **PB 級 + 低レイテンシ + 高スループット書込** が必要 → **Bigtable が圧倒的最適**。Spanner は **多行 ACID + グローバル分散 RDB** が必要な金融取引などに最適。",
  },
  { id: "gde-q31", category: "BigQuery", difficulty: 3, question: "BigQuery の **Authorized Views** の主用途として最も適切なものを選びなさい。", choices: ["別データセットへの限定アクセス(ユーザに元テーブル権限なくクエリ可能)", "DB バックアップ", "GPU 制御", "認証"], correctIndex: 0, explanation: "**Authorized View**: View が指定 Dataset の代理でデータアクセス → ユーザは元テーブル不要。**Row-Level Security の前世代 + 列フィルタリング** に活用。" },
  { id: "gde-q32", category: "BigQuery", difficulty: 3, question: "**BigQuery Studio** の用途として最も適切なものを選びなさい。", choices: ["SQL + Notebook + Looker Studio + 探索を統合した次世代 GUI", "GUI 不要", "DBA 専用", "認証のみ"], correctIndex: 0, explanation: "**BigQuery Studio**(2024): SQL + Python Notebook + Saved Query + Looker Studio 連携 + 探索 + コード補完(Gemini)。**データサイエンス + 分析を 1 GUI に統合**。" },
  { id: "gde-q33", category: "Dataform", difficulty: 3, question: "**Cloud Dataform** の特徴として最も適切なものを選びなさい。", choices: ["SQLX で BigQuery 用 ELT を Git 管理 + 依存 DAG + アサーション", "Spark の代替", "GUI のみ", "認証"], correctIndex: 0, explanation: "**Cloud Dataform**(2023 GA): dbt 風 SQLX で BigQuery ELT + Git 統合 + Dependency DAG + Assertion(テスト)+ Documentation。GCP 公式 dbt 競合。" },
  { id: "gde-q34", category: "Dataflow", difficulty: 3, question: "**Dataflow Flex Templates** が **Classic Templates** より優れる点として最も適切なものを選びなさい。", choices: ["Docker コンテナベース + 任意依存 + 動的 Parameter", "古典的", "Classic より遅い", "GUI 必須"], correctIndex: 0, explanation: "**Flex Templates**: コンテナベース → 任意の依存ライブラリ + 動的 Parameter。Classic Template は固定の Java/Python グラフテンプレート。新規開発は Flex 推奨。" },
  { id: "gde-q35", category: "Pub/Sub", difficulty: 3, question: "Pub/Sub の **Exactly-once 配信** の有効化条件として最も適切なものを選びなさい。", choices: ["単一リージョン Subscription + メッセージ ID ベース重複検出", "Multi-region", "Pull Subscription", "Push Only"], correctIndex: 0, explanation: "**Exactly-once Delivery**(2023): リージョン単一 + メッセージ ID で重複防止。**Pull / StreamingPull** 双方対応。デフォルトは At-least-once。" },
  { id: "gde-q36", category: "Pub/Sub Lite", difficulty: 3, question: "**Pub/Sub Lite** が **Pub/Sub** より優れる場面として最も適切なものを選びなさい。", choices: ["大量 ・ 安定スループット + コスト最重視(1/10 価格)", "グローバル展開", "Push Sub", "GUI 管理"], correctIndex: 0, explanation: "**Pub/Sub Lite**: ゾーンスコープ + 事前プロビジョニング → コスト最適。**大量 ・ 安定スループット**(例: 10 GB/s 連続)に。Pub/Sub Standard はサーバレス ・ 動的スケール ・ グローバル。" },
  { id: "gde-q37", category: "Dataproc", difficulty: 3, question: "**Dataproc Serverless for Spark** の特徴として最も適切なものを選びなさい。", choices: ["クラスタプロビジョニング不要 + Auto-scale + 秒単位課金", "GUI 必須", "DB 接続のみ", "GPU 制御"], correctIndex: 0, explanation: "**Dataproc Serverless**: Spark バッチをサーバレス実行。**起動 60s 程度 + Spark 設定のみ**。EMR Serverless / Databricks Serverless に相当。" },
  { id: "gde-q38", category: "Composer", difficulty: 3, question: "**Cloud Composer 3**(2024)の改善点として最も適切なものを選びなさい。", choices: ["管理 GKE 完全マネージド化 ・ Worker Auto-scale 改善", "Airflow から離脱", "GUI のみ", "Python 不要"], correctIndex: 0, explanation: "**Composer 3**: 管理レイヤー(GKE)を完全隠蔽 + Worker Auto-scale 強化 + Triggerer 標準対応。Composer 2 の進化版。Airflow 自体は OSS のまま。" },
  { id: "gde-q39", category: "Workflows", difficulty: 3, question: "**Cloud Workflows** が **Composer** より優れる場面として最も適切なものを選びなさい。", choices: ["サーバレス + YAML 単位 + コスト軽量(秒単位課金)", "Python 必須", "DAG 複雑", "Always-on"], correctIndex: 0, explanation: "**Workflows**: サーバレス YAML / JSON で API 連携 → 軽量 ETL ・ Microservice Orchestration。**AWS Step Functions に相当**。Composer は重いワークフロー向け。" },
  { id: "gde-q40", category: "Datastream", difficulty: 3, question: "**Datastream** の用途として最も適切なものを選びなさい。", choices: ["CDC でソース(MySQL / Postgres / Oracle / SQL Server)→ BigQuery / GCS へ near-realtime レプリ", "Batch ETL", "GUI", "認証"], correctIndex: 0, explanation: "**Datastream**: マネージド CDC。**AWS DMS の GCP 版**。Oracle / Postgres / MySQL / SQL Server → BigQuery(自動マージ)/ GCS。RPO 数秒 ・ 高可用。" },
  { id: "gde-q41", category: "Dataplex", difficulty: 3, question: "**Dataplex** の主要機能として **誤っているもの** を選びなさい。", choices: ["Data Mesh + Data Catalog + Data Quality + Lineage", "Auto-discovery", "Security ・ Policy 管理", "GPU 制御"], correctIndex: 3, explanation: "**Dataplex**: Lake / Zone / Asset 階層で Data Mesh + Catalog(検索 / Glossary)+ Data Quality(ルールエンジン)+ Lineage(系譜)+ Auto-discovery。GPU は無関係。" },
  { id: "gde-q42", category: "Looker", difficulty: 3, question: "**Looker** が **Looker Studio** より優れる点として最も適切なものを選びなさい。", choices: ["LookML + Semantic Model + Git 管理で大規模ガバナンス", "無料", "簡易", "ピボット表"], correctIndex: 0, explanation: "**Looker**: LookML(Semantic Model)+ Git 管理 + Embed + API + Enterprise ガバナンス。**Tableau / Power BI Premium 競合**。**Looker Studio** は無料 ・ 簡易 BI(旧 Data Studio)。" },
  { id: "gde-q43", category: "Spanner", difficulty: 3, question: "**Cloud Spanner** が **Cloud SQL** より優れる場面として最も適切なものを選びなさい。", choices: ["グローバル分散 + ACID + 水平スケール + 99.999% SLA", "単一リージョン", "コスト最安", "GUI 簡易"], correctIndex: 0, explanation: "**Spanner**: グローバル分散 RDB + 強整合 + TrueTime。**99.999% SLA**(マルチリージョン)。Cloud SQL(リージョン RDB)・ AlloyDB(リージョン高性能 Postgres)と使い分け。" },
  { id: "gde-q44", category: "Bigtable", difficulty: 3, question: "Bigtable の **Row Key 設計** で **アンチパターン** として最も適切なものを選びなさい。", choices: ["時系列の昇順タイムスタンプ → ホットスポット", "カーディナリティ高", "Hash 含む", "Reverse Timestamp"], correctIndex: 0, explanation: "**昇順タイムスタンプ Row Key はホットスポット**(同一 Node に書込集中)。**Reverse Timestamp / Salting / Hash + Reverse** で分散。Bigtable 設計の基本原則。" },
  { id: "gde-q45", category: "GCS", difficulty: 3, question: "**GCS Object Versioning** の用途として最も適切なものを選びなさい。", choices: ["上書き ・ 削除しても旧バージョン保持 → 誤操作復旧", "暗号化", "圧縮", "GPU 連携"], correctIndex: 0, explanation: "**Versioning**: Bucket 全体で有効化 → 全 Object に旧版保持。**ライフサイクル + Versioning 併用** で N 世代保持 + N+1 世代以降削除。" },
  { id: "gde-q46", category: "セキュリティ", difficulty: 3, question: "**Cloud DLP** の用途として最も適切なものを選びなさい。", choices: ["BigQuery / GCS / 任意テキストの PII 自動検出 + マスキング ・ 仮名化", "GPU 制御", "認証", "GUI のみ"], correctIndex: 0, explanation: "**Sensitive Data Protection(Cloud DLP)**: 150+ infoType 自動検出 + De-identification(マスキング ・ 暗号化トークン化 ・ Format-Preserving Encryption)。" },
  { id: "gde-q47", category: "コスト", difficulty: 3, question: "BigQuery の **Capacity Pricing(Slot)** が **On-demand** より優れる場面として最も適切なものを選びなさい。", choices: ["継続的 ・ 大規模 ・ 予測可能なクエリ → 月額予算管理しやすい", "PoC ・ 散発的", "GUI のみ", "コストゼロ"], correctIndex: 0, explanation: "**Capacity Pricing(Standard / Enterprise / Enterprise Plus)**: Slot 単位予約 → 月額固定。**On-demand**: スキャン量課金 → 散発的 ・ PoC 向け。" },
  { id: "gde-q48", category: "Architect", difficulty: 3, question: "GCP データ基盤の **モダンスタック** の典型構成として最も適切なものを選びなさい。", choices: ["Cloud Storage / Pub/Sub → Dataflow / Dataform → BigQuery → Looker", "全てオンプレ", "Excel 中心", "VM 1 台"], correctIndex: 0, explanation: "**モダン GCP DE スタック**: 取込(Pub/Sub / Datastream)→ 変換(Dataflow / Dataform / BQML)→ 保管(BigQuery / GCS Lakehouse)→ 可視化(Looker / Looker Studio)。" },
  { id: "gde-q49", category: "ML 連携", difficulty: 3, question: "**BigQuery + Vertex AI** 連携で **誤っているもの** を選びなさい。", choices: ["BQML で Vertex AI モデル呼出(ML.GENERATE_TEXT)", "BigQuery テーブルから Vertex AI Training", "Vertex AI Pipelines から BigQuery 読込", "BigQuery が Vertex AI を完全置換"], correctIndex: 3, explanation: "**両者は補完関係**: BQML(SQL ベース ML)+ Vertex AI(深い ML)+ Object Tables(マルチモーダル)で連携。BigQuery が Vertex AI を完全置換することはない。" },
  { id: "gde-q50", category: "次のステップ", difficulty: 1, question: "GCP Pro Data Engineer 合格後の次のステップとして最も適切なものを選びなさい。", choices: ["Pro ML Engineer / Pro Cloud Architect / 三大クラウド DE 揃え", "Cloud Digital Leader", "ITパスポート", "再受験"], correctIndex: 0, explanation: "**Pro DE → 同レベルの Cloud Architect / ML Engineer**(GCP 内)+ **三大クラウド DE 認定**(AWS DEA-C01 / Azure DP-203)で横展開が王道。" },
  { id: "gde-q51", category: "BigQuery", difficulty: 3, question: "**BigQuery Editions(Standard / Enterprise / Enterprise Plus)** の選び方として最も適切なものを選びなさい。", choices: ["機能(BQML/CDC/CMEK)とコンプライアンスに応じて選択 ・ Plus は最高機能", "Compute 性能のみで決定", "GUI vs CLI", "GPU 種別"], correctIndex: 0, explanation: "**Editions**: Standard(基本)・ Enterprise(BQML/Materialized/CDC)・ **Enterprise Plus**(CMEK + コンプライアンス + 7 日 Time Travel + Disaster Recovery)。Slot ベース。" },
  { id: "gde-q52", category: "BigQuery", difficulty: 3, question: "**BigQuery Partitioning** で **Integer Range** が有効なシーンを選びなさい。", choices: ["customer_id 等の整数キーで均等分割 ・ Time / Ingest Time が不適な場合", "全テーブル", "Date 専用", "GPU 必須"], correctIndex: 0, explanation: "**Partition 種**: **Time-Unit Column**(時系列)・ **Ingest Time**(_PARTITIONTIME)・ **Integer Range**(整数キー均等)。最大 4000 Partition / Table。" },
  { id: "gde-q53", category: "BigQuery", difficulty: 3, question: "**BigQuery Clustering** の利点として最も適切なものを選びなさい。", choices: ["Cluster 列で物理ソート → Pruning とコスト削減(Partition と併用可)", "全データ複製", "GPU 学習", "GUI 改善"], correctIndex: 0, explanation: "**Clustering**: 最大 4 列で物理ソート。**WHERE / GROUP BY / ORDER BY** で Scan 削減。**Partition + Clustering**(時系列分割 + ユーザー ID クラスタ)が定番。" },
  { id: "gde-q54", category: "Dataflow", difficulty: 3, question: "**Dataflow(Apache Beam)** の **PCollection** と **PTransform** の関係として最も適切なものを選びなさい。", choices: ["PCollection=データ集合(分散 ・ 不変)、PTransform=変換処理 → DAG 構築", "両者同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**Beam**: PCollection(分散データ ・ 不変)+ PTransform(ParDo / GroupByKey / Combine / Window)。**Pipeline** が DAG。Streaming/Batch 統一(Unified Model)。" },
  { id: "gde-q55", category: "Dataflow", difficulty: 3, question: "Dataflow **Windowing** の **Triggers** で **AfterWatermark** の意味として最も適切なものを選びなさい。", choices: ["Watermark が Window End を超えたら結果発火 → Late Data は Allowed Lateness 内で更新", "即時発火", "1 時間後発火", "GPU 必須"], correctIndex: 0, explanation: "**Watermark**: イベント時刻の進行推定。**Trigger**: AfterWatermark / AfterProcessingTime / AfterPane。**Allowed Lateness** で Late Data 取込み窓を制御。Streaming 設計の中核。" },
  { id: "gde-q56", category: "Streaming", difficulty: 3, question: "**Pub/Sub** の **Exactly-Once Delivery** が保証される条件として最も適切なものを選びなさい。", choices: ["Subscription で Exactly-Once 有効 + Subscriber ack_id を 1 回のみ ack", "常に Exactly-Once", "Topic 設定のみで保証", "GPU 必須"], correctIndex: 0, explanation: "**Pub/Sub Exactly-Once Subscription**: ack 重複排除 + 順序キー(オプション)。**At-Least-Once が標準**。**Dataflow + Pub/Sub** で End-to-End Exactly-Once 達成可。" },
  { id: "gde-q57", category: "Lakehouse", difficulty: 3, question: "**BigLake Tables** の用途として最も適切なものを選びなさい。", choices: ["GCS / Azure / S3 上の Parquet / Iceberg / Hudi を BigQuery から SQL クエリ + 細粒度アクセス", "全データ移動", "GUI 専用", "GPU 必須"], correctIndex: 0, explanation: "**BigLake**: マルチクラウドオブジェクトストレージを **External Table** 化 + **Column / Row Level Security** + Open Format(Iceberg / Hudi / Delta)対応。Lakehouse 中核。" },
  { id: "gde-q58", category: "Dataproc", difficulty: 3, question: "**Dataproc Serverless** と **Dataproc on Compute** の使い分けとして最も適切なものを選びなさい。", choices: ["Serverless=Spark Batch / Notebook ・ 自動 Scale、Compute=HBase / 長期クラスタ / カスタム", "両者同じ", "GPU vs CPU", "学習 vs 推論"], correctIndex: 0, explanation: "**Dataproc Serverless**: クラスタ管理不要 ・ Auto Scale ・ Notebook(JupyterLab)。**Dataproc on Compute**: 細かい設定 ・ HBase / Presto / 長期クラスタ。**Dataproc on GKE** は Kubernetes 統合。" },
  { id: "gde-q59", category: "Dataform", difficulty: 3, question: "**Dataform** の役割として最も適切なものを選びなさい。", choices: ["SQLX で BigQuery 上の ELT を構造化 ・ Git 連携 ・ DAG 化(dbt 風)", "ETL 専用", "GPU 学習", "認証管理"], correctIndex: 0, explanation: "**Dataform**: BigQuery 用 ELT(Transform-in-Warehouse)。**SQLX**(SQL + JS 拡張)・ Git バージョン管理 ・ 依存解決 ・ Assertion(品質チェック)。**dbt の GCP 版**ポジション。" },
  { id: "gde-q60", category: "Bigtable", difficulty: 3, question: "**Cloud Bigtable** の特徴として最も適切なものを選びなさい。", choices: ["低レイテンシ + 大規模スループット ・ Row Key 設計重要 ・ HBase API 互換", "RDBMS", "OLAP 専用", "GUI ベース"], correctIndex: 0, explanation: "**Bigtable**: NoSQL Wide-Column ・ ms 級レイテンシ ・ PB クラス。**Row Key 設計**でホットスポット回避(Salt / Reverse)。**HBase API 互換**で IoT / 時系列 / 金融に。" },
  { id: "gde-q61", category: "Spanner", difficulty: 3, question: "**Cloud Spanner** の特徴として最も適切なものを選びなさい。", choices: ["グローバル分散 RDB ・ 強整合 ・ ANSI SQL ・ Horizontal Scaling", "NoSQL のみ", "OLAP 専用", "Single Region 専用"], correctIndex: 0, explanation: "**Spanner**: 全世界レプリ + **External Consistency**(TrueTime API)+ ACID + ANSI SQL 2011 ・ Horizontal Scale。**金融 ・ ゲーム ・ ティアワン業務系**で利用。" },
  { id: "gde-q62", category: "Quality", difficulty: 3, question: "**Dataplex** の用途として最も適切なものを選びなさい。", choices: ["Data Mesh / Data Lake のメタデータ管理 + データ品質 + Lineage 統合", "GUI", "GPU 学習", "Endpoint"], correctIndex: 0, explanation: "**Dataplex**: Lake / Zone / Asset 階層で Data Lake / Lakehouse を整理 ・ Catalog ・ Data Quality(Auto/Custom Rule)・ Profiling ・ Lineage。**Data Mesh の GCP 実装**。" },
  { id: "gde-q63", category: "Streaming", difficulty: 3, question: "**Datastream** の用途として最も適切なものを選びなさい。", choices: ["Oracle / MySQL / PostgreSQL の CDC を BigQuery / GCS / Spanner にリアルタイム配信", "学習 GPU", "Endpoint", "認証 SSO"], correctIndex: 0, explanation: "**Datastream**: サーバーレス CDC サービス。**Change Data Capture**(LogMiner / binlog / WAL)→ BigQuery(Auto Merge)/ GCS / Spanner。低レイテンシ + マネージド。" },
  { id: "gde-q64", category: "Looker", difficulty: 3, question: "**Looker(LookML)** と **Looker Studio** の違いとして最も適切なものを選びなさい。", choices: ["Looker=LookML で Semantic Layer + Governance、Studio=Free セルフ BI", "両者同じ", "OLTP vs OLAP", "GUI vs CLI"], correctIndex: 0, explanation: "**Looker**: LookML(Git 管理)で Semantic Model + Row Level Security + Embed。**Looker Studio(旧 Data Studio)**: 無料ダッシュボード。両者 BigQuery 直結可。" },
  { id: "gde-q65", category: "実務", difficulty: 3, question: "GCP DE 試験で頻出の **典型アーキテクチャ** として最も適切なものを選びなさい。", choices: ["Pub/Sub → Dataflow → BigQuery(+ BQML) → Looker(Lineage は Dataplex)", "全データ単一 GCE", "Excel ベース", "オンプレ専用"], correctIndex: 0, explanation: "**GCP モダンスタック**: Ingest(Pub/Sub / Datastream)→ Transform(Dataflow / Dataform)→ Warehouse(BigQuery + BQML)→ BI(Looker)+ Governance(Dataplex)。Pro DE で頻出。" },
  { id: "gde-q66", category: "BigQuery", difficulty: 3, question: "**BigQuery** の課金モデルとして **誤っているもの** を選びなさい。", choices: ["On-demand(スキャン TB ベース)", "Capacity(Slot 予約: Standard / Enterprise / Plus)", "Storage(Active / Long-term)", "GPU 時間"], correctIndex: 3, explanation: "**BigQuery 課金**: On-demand($6.25/TB scan)+ Capacity Slot(Standard / Enterprise / Enterprise Plus)+ Storage(90 日 unmodified → Long-term 半額)。GPU 時間はない。" },
  { id: "gde-q67", category: "BigQuery", difficulty: 3, question: "**BigQuery Partitioning** の方式として **誤っているもの** を選びなさい。", choices: ["Time-Unit Column(時系列)", "Ingestion Time(_PARTITIONTIME)", "Integer Range", "GPU Partition"], correctIndex: 3, explanation: "**Partition Type**: Time-Unit / Ingestion Time / Integer Range。**最大 4,000 Partition / Table**。**Clustering と組合せ**(Partition + Cluster)で Pruning 強化。" },
  { id: "gde-q68", category: "BigQuery", difficulty: 3, question: "**BQML** で対応可能な ML タスクとして **誤っているもの** を選びなさい。", choices: ["Linear / Logistic Regression / GBDT", "K-Means / Time Series / Matrix Factorization", "DNN / Wide & Deep / AutoML", "GPU 学習のみ"], correctIndex: 3, explanation: "**BQML**: SQL ベース ML。Linear / Logistic / GBDT(XGBoost)/ K-Means / Time Series / MF / DNN / Wide & Deep / AutoML / **`ML.GENERATE_TEXT`**(Gemini 連携)・ **Imported TF / ONNX Model**。" },
  { id: "gde-q69", category: "Dataflow", difficulty: 3, question: "**Apache Beam** で **PCollection** の性質として最も適切なものを選びなさい。", choices: ["不変 ・ 分散 ・ Bounded(Batch)/ Unbounded(Streaming)", "Pandas DF と同じ", "GPU", "認証"], correctIndex: 0, explanation: "**Beam PCollection**: 不変 + 分散 + Bounded(Batch)/ Unbounded(Streaming)。**Unified Model**(Batch / Streaming 同一 SDK)。**ParDo / GroupByKey / Combine / Windowing** で変換。" },
  { id: "gde-q70", category: "Dataflow", difficulty: 3, question: "**Dataflow の Watermark** の役割として最も適切なものを選びなさい。", choices: ["Event Time の進行推定 → Window 確定 + Late Data 判定", "GPU 速度", "認証", "Cost"], correctIndex: 0, explanation: "**Watermark**: Streaming で「これ以前のデータは処理済」推定。**Allowed Lateness** で許容遅延。**Trigger**(AfterWatermark / AfterProcessingTime)で発火制御。Streaming 設計の中核。" },
  { id: "gde-q71", category: "Pub/Sub", difficulty: 3, question: "**Pub/Sub Exactly-Once Subscription** の特徴として最も適切なものを選びなさい。", choices: ["ack 重複排除 + 順序保証(Ordering Key)で End-to-End Exactly-Once", "常時保証", "認証強化", "GPU"], correctIndex: 0, explanation: "**Exactly-Once Subscription**(2022 GA): ack 重複排除 ・ At-Most-Once Delivery 保証。**Ordering Key**(同 Key で順序保持)・ **Dataflow と組合せて End-to-End Exactly-Once** 構成可能。" },
  { id: "gde-q72", category: "Bigtable", difficulty: 3, question: "**Cloud Bigtable** の特徴として最も適切なものを選びなさい。", choices: ["低レイテンシ ・ ペタバイト級 NoSQL ・ HBase API 互換", "RDBMS", "OLAP 専用", "認証"], correctIndex: 0, explanation: "**Bigtable**: NoSQL Wide-Column ・ ms 級レイテンシ ・ HBase API 互換。**Row Key 設計**でホットスポット回避(Salt / Hash Prefix)。**IoT / Time Series / Ad Tech / 金融**。" },
  { id: "gde-q73", category: "Spanner", difficulty: 3, question: "**Cloud Spanner** の特徴として **誤っているもの** を選びなさい。", choices: ["グローバル分散 RDB + 強整合(TrueTime)", "ACID + ANSI SQL", "Horizontal Scaling", "Single Region 専用"], correctIndex: 3, explanation: "**Spanner**: 全世界レプリ + **External Consistency**(TrueTime API)+ ACID + ANSI SQL。**Multi-Region / Dual-Region**設定可。**Spanner + Vertex AI**(2024+)で AI ・ ML 統合。" },
  { id: "gde-q74", category: "Lakehouse", difficulty: 3, question: "**BigLake** の用途として最も適切なものを選びなさい。", choices: ["GCS / S3 / Azure 上の Parquet / Iceberg / Hudi を BigQuery から SQL + 細粒度アクセス", "OLTP", "GPU", "認証"], correctIndex: 0, explanation: "**BigLake**: マルチクラウドオブジェクト Storage を **External Table** 化 + **Row / Column Level Security** + **Open Format**(Iceberg / Hudi / Delta)対応。Lakehouse の中核。" },
  { id: "gde-q75", category: "Dataform", difficulty: 3, question: "**Dataform** の役割として最も適切なものを選びなさい。", choices: ["SQLX で BigQuery 上の ELT を構造化 ・ Git 管理 ・ DAG 化(dbt 風)", "ETL", "GPU", "認証"], correctIndex: 0, explanation: "**Dataform**: BigQuery 用 ELT(Transform-in-Warehouse)。**SQLX**(SQL + JS 拡張)・ Git ・ 依存解決 ・ Assertion(品質)。**dbt の GCP マネージド版**。" },
  { id: "gde-q76", category: "Dataplex", difficulty: 3, question: "**Dataplex** の主要機能として **誤っているもの** を選びなさい。", choices: ["Lake / Zone / Asset 階層", "Data Quality / Profiling / Discovery", "Lineage / Catalog(Universal)/ AI 統合", "GPU 提供"], correctIndex: 3, explanation: "**Dataplex**(2023 GA): **Data Mesh の GCP 実装**。Lake / Zone(Raw / Curated)/ Asset(GCS / BQ)。**Universal Catalog**(2024+)・ **AI 統合**(Gemini)で進化。" },
  { id: "gde-q77", category: "Datastream", difficulty: 3, question: "**Datastream** の用途として最も適切なものを選びなさい。", choices: ["Oracle / MySQL / PostgreSQL の CDC を BigQuery / GCS にリアルタイム配信", "学習", "GPU", "認証"], correctIndex: 0, explanation: "**Datastream**: サーバーレス CDC。**LogMiner / binlog / WAL** → BigQuery(Auto Merge)/ GCS。**Real-time 分析 / Migration / Replication** に活用。" },
  { id: "gde-q78", category: "Looker", difficulty: 3, question: "**Looker(LookML)** と **Looker Studio** の違いとして最も適切なものを選びなさい。", choices: ["Looker=LookML Semantic Layer + Governance、Studio=Free セルフ BI", "両者同じ", "Studio=有料", "Looker=GUI のみ"], correctIndex: 0, explanation: "**Looker**: LookML(Git 管理)で Semantic Model + RLS + Embed。**Looker Studio**(旧 Data Studio): 無料 ・ セルフサービス。**Looker Studio Pro / Looker(原 Google Cloud)** で使い分け。" },
  { id: "gde-q79", category: "Cost", difficulty: 3, question: "**BigQuery コスト最適化** として **誤っているもの** を選びなさい。", choices: ["Partition + Cluster で Pruning", "Materialized View / BI Engine / Slot Reservation", "Long-term Storage 自動移行", "全クエリ SELECT *"], correctIndex: 3, explanation: "**Cost 最適化**: Partition / Cluster / **Materialized View**(自動更新)・ **BI Engine**(キャッシュ)・ Slot Reservation / Storage Long-term。**SELECT * は全列スキャン**で料金爆増。" },
  { id: "gde-q80", category: "Cert", difficulty: 2, question: "**Professional Data Engineer** 試験の対象者として最も適切なものを選びなさい。", choices: ["業務 DE / Data Architect(3+ 年経験 + GCP 1+ 年推奨)", "未経験", "Cloud Practitioner", "Excel 利用者"], correctIndex: 0, explanation: "**Pro DE**: 60 問 ・ 2 時間 ・ 業務 3+ 年 + GCP 1+ 年推奨。**BigQuery / Dataflow / Pub/Sub / Composer / Dataform / Looker / Dataplex** が中核。次は **Pro Cloud Architect / Pro ML Engineer**。" },
];
