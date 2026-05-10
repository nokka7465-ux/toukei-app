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
];
