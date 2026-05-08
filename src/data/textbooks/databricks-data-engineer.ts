import type { Textbook } from "@/types/content";

export const databricksDataEngineerTextbook: Textbook = {
  levelSlug: "databricks-data-engineer",
  title: "Databricks Certified Data Engineer Associate 教科書",
  intro:
    "**Databricks Certified Data Engineer Associate** は、**Databricks Lakehouse Platform** 上でデータエンジニアリングを行うエンジニアを認定する Associate レベル試験です。**Snowflake と並ぶモダンデータ基盤の双璧** で、**Apache Spark + Delta Lake + Unity Catalog + Workflows + Photon** など Databricks のフル機能をカバーします。**データエンジニア ・ アナリティクスエンジニア ・ ML エンジニア** が想定対象。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "Databricks Data Engineer Associate ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 Databricks 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**Data Engineer Associate** は Databricks 認定の **Associate レベル**。**Lakehouse Fundamentals(Foundational)** の上位、**Data Engineer Professional** より入門的な位置付け。**Spark / Delta Lake / SQL / Python** の実装力 + Lakehouse 全体像を測ります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Databricks",
                "**形式**: オンライン監督受験(Kryterion / Webassessor)",
                "**問題数 / 時間**: 45 問 / 90 分",
                "**回答方式**: 多肢選択 + 複数選択",
                "**合格スコア**: 70%(参考)",
                "**有効期限**: 2 年",
                "**受験料**: 200 USD(参考)",
                "**前提知識**: SQL + Python の基礎",
              ],
            },
            { type: "h3", text: "Databricks 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Lakehouse Fundamentals**(Foundational): 基礎の基礎",
                "**Data Engineer Associate**(本資格): エンジニア向け Associate",
                "**Data Analyst Associate**: アナリスト向け",
                "**ML Practitioner Associate**: ML 向け",
                "**Generative AI Engineer Associate**: 生成 AI 向け(2024 〜)",
                "**Data Engineer Professional**: 上位エンジニア",
                "**Machine Learning Professional**: 上位 ML",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "公式試験ガイドのドメイン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Databricks Lakehouse Platform**(約 24%): アーキテクチャ ・ Workspace ・ クラスタ",
                "**ELT with Apache Spark**(約 29%): SQL / PySpark / Delta Lake",
                "**Incremental Data Processing**(約 22%): Auto Loader / Structured Streaming / DLT",
                "**Production Pipelines**(約 16%): Workflows / Jobs / DLT / 監視",
                "**Data Governance**(約 9%): Unity Catalog / アクセス制御 / リネージ",
              ],
            },
            { type: "h3", text: "60 〜 100 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: Lakehouse コンセプト + Workspace + クラスタ(本教科書 第 2 章)",
                "**Week 2**: SQL + PySpark + Delta Lake(第 3 〜 4 章)",
                "**Week 3**: Auto Loader + Structured Streaming + DLT(第 5 章)",
                "**Week 4**: Workflows + Jobs + 監視(第 6 章)",
                "**Week 5**: Unity Catalog + ガバナンス + 模擬試験(第 7 〜 10 章)",
              ],
            },
            {
              type: "intuition",
              title: "Databricks Community Edition + Academy が王道",
              body: "**Databricks Community Edition**(無料 + 機能制限あり)+ **Databricks Academy**(無料公式学習)で実機演習が可能。**14 日トライアル(本格機能)** で本番に近い環境も試せます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Lakehouse Platform のアーキテクチャ",
      overview:
        "Databricks Lakehouse の主要コンポーネントを整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Lakehouse とは",
          blocks: [
            {
              type: "def",
              title: "Lakehouse Architecture",
              body: "**Data Lake**(柔軟だが品質保証なし)+ **Data Warehouse**(構造化 + ACID だが柔軟性に欠ける)の **両方の利点を統合** したアーキテクチャ。**Delta Lake** が技術的中核で、Parquet ファイルに **トランザクションログ** を加えて ACID + Time Travel + Schema Evolution を実現。",
            },
            { type: "h3", text: "Medallion Architecture" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Bronze 層**: 生データ(Raw)、最小限の加工",
                "**Silver 層**: クレンジング ・ 結合 ・ 正規化",
                "**Gold 層**: 集約 ・ ビジネスロジック適用、消費レベル",
                "**ETL ではなく ELT**: 生データを先にロード、変換は後段で",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Workspace と Cluster",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workspace**: テナント、ユーザ ・ ワークスペースアセットの単位",
                "**Notebook**: Python / SQL / Scala / R で開発",
                "**Cluster**: Spark クラスタ(Driver + Executor)",
                "**All-purpose Cluster**: 開発用、複数ユーザ共有可",
                "**Job Cluster**: 自動起動 / 終了、本番ジョブ用、コスト効率良",
                "**SQL Warehouse(旧 SQL Endpoint)**: SQL 専用、BI / アドホッククエリ向け",
                "**Serverless SQL Warehouse**: サーバレスで起動高速",
                "**Cluster Policy**: 設定の標準化 ・ 制限",
                "**Auto Scaling**: ノード数の自動調整",
                "**Auto Termination**: アイドル時の自動停止",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "クラウドプロバイダ統合",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Databricks on AWS**: S3 + EC2",
                "**Databricks on Azure**: Azure Storage + Azure VM",
                "**Databricks on GCP**: GCS + GCE",
                "**Control Plane**: Databricks 管理(Web UI / メタデータ / API)",
                "**Data Plane**: 顧客クラウドアカウント内のリソース",
                "**Secure Cluster Connectivity(SCC)**: VNet 内のみ",
                "**Customer-Managed Keys(CMK)**: 顧客管理鍵",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Delta Lake",
      overview:
        "Delta Lake のトランザクション ・ Time Travel ・ Schema 進化を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Delta Lake の基本",
          blocks: [
            {
              type: "p",
              text: "**Delta Lake** は Parquet ファイル + **トランザクションログ(_delta_log)** で **ACID トランザクション + Time Travel + Schema Enforcement** を実現するオープンソース技術。Databricks の発祥でオープン化され、**Apache Iceberg / Apache Hudi** と並ぶ Lakehouse 標準テーブル形式の 1 つ。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ACID Transactions**: 同時書込みでも整合性保証",
                "**Time Travel**: 過去のバージョンにアクセス(`VERSION AS OF` / `TIMESTAMP AS OF`)",
                "**Schema Enforcement**: スキーマ違反のデータを拒否",
                "**Schema Evolution**: 新しい列を自動追加(`mergeSchema = true`)",
                "**Upsert / MERGE INTO**: SCD Type 2 などの実装に必須",
                "**DELETE / UPDATE**: トランザクション安全な変更",
                "**OPTIMIZE / Z-ORDER / Liquid Clustering**: 物理レイアウト最適化",
                "**VACUUM**: 古いファイルを削除",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Time Travel と VACUUM",
          blocks: [
            {
              type: "code",
              title: "Time Travel と VACUUM の例",
              python:
                "-- バージョン番号で過去状態にアクセス\nSELECT * FROM sales VERSION AS OF 5;\n\n-- タイムスタンプで過去状態にアクセス\nSELECT * FROM sales TIMESTAMP AS OF '2025-04-01 09:00:00';\n\n-- 履歴を確認\nDESCRIBE HISTORY sales;\n\n-- 古いファイルを削除(デフォルト 7 日以上前)\nVACUUM sales RETAIN 168 HOURS;  -- 7 日 = 168 時間\n\n-- ストレージ最適化(小さいファイルを統合)\nOPTIMIZE sales;\n\n-- Z-ORDER でクエリ高速化\nOPTIMIZE sales ZORDER BY (region, date);",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Retention 期間**: デフォルト 7 日(`delta.deletedFileRetentionDuration`)",
                "**Liquid Clustering**: Z-ORDER の進化版、宣言型クラスタリング",
                "**Predictive Optimization**: 自動で OPTIMIZE / VACUUM",
                "**Deletion Vectors**: 物理削除なしの論理削除(高速)",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "MERGE INTO と Upsert",
          blocks: [
            {
              type: "code",
              title: "MERGE INTO の例",
              python:
                "-- ターゲットに INSERT / UPDATE / DELETE を一括実行\nMERGE INTO target_table t\nUSING source_table s\nON t.id = s.id\nWHEN MATCHED AND s.is_deleted THEN DELETE\nWHEN MATCHED THEN UPDATE SET t.value = s.value, t.updated_at = s.updated_at\nWHEN NOT MATCHED THEN INSERT (id, value, updated_at) VALUES (s.id, s.value, s.updated_at);",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Upsert**: INSERT or UPDATE",
                "**SCD Type 1**: 上書き",
                "**SCD Type 2**: 履歴保持(`effective_from / effective_to / current_flag`)",
                "**Deduplication**: ROW_NUMBER で重複排除",
                "**Change Data Feed(CDF)**: テーブルへの変更ストリームを取得",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Spark SQL と PySpark",
      overview:
        "Apache Spark の SQL ・ DataFrame API ・ パフォーマンス最適化を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Spark の基本",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Spark Architecture**: Driver + Executor + Cluster Manager",
                "**RDD / DataFrame / Dataset**: 抽象化レベル",
                "**Lazy Evaluation**: アクションが呼ばれるまで計算しない",
                "**Catalyst Optimizer**: SQL → 物理プラン変換",
                "**Tungsten Engine**: メモリ効率 + コード生成",
                "**Photon Engine**: Databricks の C++ 実装、SQL クエリを大幅高速化",
                "**Adaptive Query Execution(AQE)**: クエリプランの動的調整",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "PySpark の基本操作",
          blocks: [
            {
              type: "code",
              title: "PySpark DataFrame の例",
              python:
                "from pyspark.sql import functions as F\n\n# Delta Lake から読み込み\ndf = spark.table(\"silver.sales\")\n\n# フィルタ + 集約\nresult = (\n    df\n    .filter(F.col(\"region\") == \"APAC\")\n    .groupBy(\"product\")\n    .agg(\n        F.sum(\"amount\").alias(\"total\"),\n        F.countDistinct(\"customer_id\").alias(\"unique_customers\"),\n    )\n    .orderBy(F.desc(\"total\"))\n)\n\n# Delta Lake に書き込み\nresult.write.mode(\"overwrite\").saveAsTable(\"gold.product_summary\")",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**select / filter / groupBy / agg / join**",
                "**withColumn / withColumnRenamed / drop**",
                "**explode / array / struct**",
                "**window functions**: row_number / rank / lag / lead",
                "**broadcast join**: 小テーブルを各ノードに配布",
                "**partition by**: ファイル分割の指定",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "パフォーマンス最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Broadcast Join**: 小さい方を broadcast、大きい方とハッシュ結合",
                "**Skew Join Optimization**: AQE で自動",
                "**Shuffle Partitions**: `spark.sql.shuffle.partitions`(デフォルト 200)",
                "**Caching**: `cache()` / `persist()`",
                "**Repartition vs Coalesce**: ファイル数調整",
                "**Predicate Pushdown**: Parquet / Delta でフィルタを下層に",
                "**Z-ORDER + Liquid Clustering**: マルチカラムソートで Pruning 強化",
                "**Photon**: 上記すべての効果を増幅",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "ストリーミングと Auto Loader",
      overview:
        "Structured Streaming ・ Auto Loader ・ Delta Live Tables(DLT)を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Structured Streaming",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Structured Streaming**: DataFrame API でストリーム処理",
                "**Trigger**: continuous / processing time / available now",
                "**Watermark**: 遅延データの取扱い",
                "**Stateful Processing**: 集約 ・ 結合の状態管理",
                "**Output Modes**: complete / append / update",
                "**Sources**: Delta / Kafka / Kinesis / Files / Auto Loader",
                "**Sinks**: Delta / Kafka / Memory / ForeachBatch",
                "**Checkpointing**: 状態の永続化",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Auto Loader",
          blocks: [
            {
              type: "p",
              text: "**Auto Loader** は **クラウドストレージへのファイル到着を自動検知** して取込むストリーミングソース。**Snowflake の Snowpipe に対応** する位置付け。スケーラビリティとシンプルさが強み。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**File Notification Mode**: クラウド通知サービス(SNS / EventGrid / Pub/Sub)で検知",
                "**Directory Listing Mode**: 定期的にディレクトリを列挙",
                "**Schema Inference**: スキーマを自動推論",
                "**Schema Evolution**: 新しい列を自動追加",
                "**Incremental Processing**: チェックポイントで前回処理済を記憶",
                "**Rescued Data Column**: 解析できなかった行を退避",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Delta Live Tables(DLT)",
          blocks: [
            {
              type: "p",
              text: "**Delta Live Tables(DLT)** は **宣言型 ETL フレームワーク**。SQL / Python で『どの順序でどう変換するか』ではなく『**何を作るか**』を宣言すると、DLT が依存関係 ・ パイプライン ・ 監視 ・ エラー処理を自動化。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**LIVE Tables**: パイプライン内のテーブル",
                "**Streaming Live Tables**: 増分処理",
                "**Materialized Views(旧 Live Tables)**: 完全再計算",
                "**Expectations**: データ品質チェック(EXPECT / EXPECT OR DROP / EXPECT OR FAIL)",
                "**Apply Changes Into**: SCD Type 1 / Type 2 を宣言型に",
                "**Continuous vs Triggered**: 連続実行 vs スケジュール実行",
                "**Enhanced Autoscaling**: DLT 専用の効率的なオートスケール",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Workflows と本番運用",
      overview:
        "Databricks Workflows ・ Jobs ・ 監視を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Workflows と Jobs",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workflow**: 複数 Task を組合わせたパイプライン",
                "**Task 種別**: Notebook / Python wheel / JAR / SQL / DBT / DLT / Pipeline",
                "**Dependency**: Task 間の依存関係(DAG 形式)",
                "**Retry Policy**: 失敗時の再試行",
                "**Schedule**: クロン式の定期実行",
                "**Trigger**: ファイル到着 ・ 外部 API / イベント駆動",
                "**Notifications**: メール / Slack / PagerDuty",
                "**Job Cluster vs All-purpose**: ジョブ用クラスタはコスト効率良",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "監視とトラブルシューティング",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Job UI**: 実行履歴 ・ ログ ・ メトリクス",
                "**Spark UI**: Stage / Task の詳細",
                "**Cluster Logs**: 各ノードのログ",
                "**Cluster Metrics**: CPU / メモリ / ディスク",
                "**System Tables(Lakehouse Monitoring)**: 利用状況分析",
                "**dbsql alert**: SQL Warehouse のクエリ結果に基づくアラート",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "CI/CD と開発フロー",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Repos**: Git 統合(GitHub / GitLab / Azure DevOps)",
                "**Databricks Asset Bundles(DAB)**: IaC 形式のデプロイ単位",
                "**Databricks CLI / API**: 自動化",
                "**Terraform Provider**: IaC で Workspace / Job 管理",
                "**Notebook Source Format**: .ipynb or .py / .sql",
                "**Branch / PR ベース開発**: dev / staging / prod",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Unity Catalog とデータガバナンス",
      overview:
        "Unity Catalog の階層 ・ アクセス制御 ・ リネージを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Unity Catalog の階層",
          blocks: [
            {
              type: "p",
              text: "**Unity Catalog** は Databricks の統合ガバナンス層。**Metastore → Catalog → Schema → Table / View / Function** の **3 階層 + α** で、複数 Workspace を横断するメタデータ管理 ・ アクセス制御 ・ リネージを提供します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Metastore**: リージョン単位の最上位",
                "**Catalog**: 論理グループ(部門 / 環境)",
                "**Schema**: Database 相当",
                "**Table / View / Function / Volume / Model**",
                "**External Location**: 外部ストレージへの安全な参照",
                "**Storage Credential**: ストレージ認証情報",
                "**Workspace 間の横断**: 1 Metastore で複数 Workspace 共有可",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "アクセス制御",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**GRANT / REVOKE**: SQL ベースの権限",
                "**Principal**: User / Group / Service Principal",
                "**Privilege**: SELECT / MODIFY / CREATE / USE CATALOG など",
                "**Inherit**: Catalog → Schema → Table の継承",
                "**Row-level Security(行フィルタ)**: 行単位のアクセス制御",
                "**Column-level Masking(列マスキング)**: 動的マスキング",
                "**Service Principal**: アプリ用認証",
                "**Personal Access Token**: API 認証",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "リネージとデータ発見",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Data Lineage**: テーブル / 列単位の自動追跡",
                "**Data Explorer**: GUI での Catalog 探索",
                "**Tags**: メタデータタグ付け",
                "**Sensitivity Labels**: 機密度ラベル",
                "**System Tables**: クエリ履歴 ・ アクセスログ",
                "**Audit Log**: 監査ログ(Delta Sharing 含む)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Delta Sharing とコラボレーション",
      overview:
        "オープンプロトコルでの安全なデータ共有を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Delta Sharing",
          blocks: [
            {
              type: "p",
              text: "**Delta Sharing** は Databricks 発のオープンプロトコル(Linux Foundation 寄贈)で、**Databricks 環境を持たない受信者にもデータを安全に共有** できる。Snowflake の Secure Data Sharing に対応する位置付け。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Recipient**: 共有先",
                "**Share**: 共有するテーブル / ビュー / Notebook の集合",
                "**Open Sharing**: 認証トークンベース、誰でも受信可",
                "**Databricks-to-Databricks Sharing**: Databricks 同士で UC 統合",
                "**Marketplace**: 公開データセット ・ ML モデルの売買",
                "**Clean Rooms**: 複数組織間で個別データ非開示の協調分析",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Volumes と Files",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Volumes(UC)**: 構造化されていないファイル(画像 / PDF / モデル)を Catalog で管理",
                "**Managed vs External Volumes**",
                "**dbutils.fs**: ファイル操作",
                "**DBFS(Databricks File System)**: 旧ファイル抽象(UC 推奨)",
                "**Workspace Files**: Notebook と並ぶワークスペース内ファイル",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "ML と生成 AI",
      overview:
        "Databricks ML / MLflow / Mosaic AI を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "MLflow",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**MLflow Tracking**: 実験管理(パラメータ / メトリクス / アーティファクト)",
                "**MLflow Models**: モデルパッケージング",
                "**MLflow Model Registry**: モデルバージョン管理 + ステージング",
                "**MLflow Projects**: 再現可能な学習プロジェクト",
                "**Databricks Managed MLflow**: 統合された Tracking + Registry",
                "**Auto-logging**: 主要 ML ライブラリの自動記録",
                "**Unity Catalog Models**: UC 統合のモデル管理",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "Databricks Model Serving",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Real-time Endpoint**: ms 級推論",
                "**Batch Inference**: 大量推論(SQL `ai_query()` 関数)",
                "**Foundation Model APIs**: Llama / Mistral / DBRX などの基盤モデル",
                "**External Model**: OpenAI / Anthropic を Databricks 経由",
                "**Vector Search**: ベクトル類似検索",
                "**Feature Serving**: Feature Store の推論時統合",
                "**A/B Testing**: トラフィック分散",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "Mosaic AI と生成 AI",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Mosaic AI**: Databricks の AI ブランド(2024 〜)",
                "**DBRX**: Databricks 製のオープンソース基盤モデル",
                "**Mosaic AI Pretraining / Fine-tuning**: 大規模学習サービス",
                "**Mosaic AI Agent Framework**: エージェント構築",
                "**Mosaic AI Agent Evaluation**: エージェント評価",
                "**RAG Studio**: RAG 専用 IDE",
                "**Genie**: 自然言語 BI",
                "**Vector Search**: 埋め込み + ハイブリッド検索",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策の総まとめ",
      overview:
        "範囲別チェックリストと試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "範囲別チェックリスト",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: Lakehouse / Medallion / Workspace / Cluster 種別",
                "**第 3 章**: Delta Lake の ACID / Time Travel / OPTIMIZE / Z-ORDER / VACUUM",
                "**第 4 章**: Catalyst / Photon / AQE / Broadcast Join / Repartition",
                "**第 5 章**: Auto Loader / Structured Streaming / DLT / Apply Changes Into",
                "**第 6 章**: Workflows / Jobs / Job Cluster / Repos / DAB",
                "**第 7 章**: Unity Catalog 階層 / GRANT / Lineage / RLS",
                "**第 8 章**: Delta Sharing / Volumes / Marketplace / Clean Rooms",
                "**第 9 章**: MLflow / Model Serving / Mosaic AI / DBRX",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**45 問 / 90 分** = 1 問 約 2 分",
                "**Delta Lake の特性** が頻出: ACID / Time Travel / OPTIMIZE / VACUUM",
                "**Auto Loader vs COPY INTO**: 増分 vs バッチの使い分け",
                "**DLT の Apply Changes Into**: SCD Type 1 / 2",
                "**Unity Catalog の権限階層**",
                "**Databricks Academy の練習問題** を必ず受ける",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "次のステップ",
          blocks: [
            {
              type: "p",
              text: "Data Engineer Associate 合格 → **Data Engineer Professional**(上位)が王道。ML 寄りなら **ML Practitioner Associate → Machine Learning Professional**、生成 AI なら **Generative AI Engineer Associate** へ。本サイトの[Snowflake SnowPro Core](/certs/snowflake-snowpro)と組み合わせるとモダンデータ基盤の双璧を制覇できます。",
            },
            {
              type: "practical",
              title: "Databricks のキャリア活用",
              body: "Databricks は **金融 ・ ヘルスケア ・ 通信 ・ 小売** などビッグデータが大量にある業界で広く採用。**データエンジニア ・ ML エンジニア ・ アナリティクスエンジニア** での評価が高く、特に **Spark + Delta Lake + MLflow** を扱える人材は希少。本サイトの[DB スペシャリスト](/certs/db-specialist)と組合せると伝統的 DB + モダン Lakehouse の両軸が強みに。",
            },
          ],
        },
      ],
    },
  ],
};
