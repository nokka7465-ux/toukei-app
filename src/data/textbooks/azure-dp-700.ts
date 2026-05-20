import type { Textbook } from "@/types/content";

export const azureDp700Textbook: Textbook = {
  levelSlug: "azure-dp-700",
  title: "Microsoft Fabric Data Engineer Associate(DP-700)教科書",
  intro:
    "**Microsoft Certified: Fabric Data Engineer Associate(DP-700)** は **Fabric 上のデータ取込 ・ 変換 ・ ストリーミング ・ オーケストレーション ・ 監視** を実装する Data Engineer Associate 認定(2024 リリース)。**Lakehouse ・ Notebook ・ Spark ・ Pipeline ・ Dataflow Gen2 ・ Eventstream ・ KQL DB ・ Real-Time Dashboard ・ Reflex ・ Git Integration** を **実装 ・ 取込 / 変換 ・ 監視 / 最適化** の 3 ドメインで問います。**DP-600(Analytics Engineer)と並ぶ Fabric の双璧** で、両方取得で Fabric 全領域カバーとなります。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "DP-700 ─ 試験の全体像",
      overview:
        "試験形式 ・ 出題範囲 ・ DP-600/DP-203 との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の基本情報",
          blocks: [
            {
              type: "p",
              text: "**DP-700** は Microsoft Fabric Data Engineering を担う Data Engineer のための 2024 リリース Associate 認定です。Lakehouse ・ Spark ・ Pipeline ・ Real-Time Intelligence の実装と運用が中核となります。",
            },
            { type: "h3", text: "試験の概要" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**試験コード**: DP-700(Implementing Data Engineering Solutions Using Microsoft Fabric)",
                "**問題数 / 時間**: 40〜60 問 / 100 分前後",
                "**合格点**: 700/1000",
                "**形式**: CBT(Pearson VUE)or オンライン監督 ・ 単選 / 複選 / D&D / ケーススタディ",
                "**受験料**: 165 USD",
                "**有効期限**: 1 年(無料更新試験あり)",
                "**前提**: SQL(中級)+ Python/PySpark(中級)+ KQL(基礎)+ Power Query M",
              ],
            },
            {
              type: "intuition",
              title: "💡 DP-700 と DP-600 の役割分担",
              body: "**DP-700**: Data Engineer(取込 / 変換 / Streaming / オーケストレーション)。**DP-600**: Analytics Engineer(Semantic Model / Direct Lake / DAX / BI)。**両方取得で Fabric 全領域カバー**となり、Microsoft Data エコシステムでのキャリア価値が最大化します。",
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Skills Measured 3 ドメイン",
          blocks: [
            { type: "h3", text: "出題ドメイン(2024+ ガイド)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Implement and Manage Data Engineering Solutions**(30-35%)─ Workspace / Lakehouse / Spark Pool / Git / Deployment / Security",
                "**Ingest and Transform Data**(30-35%)─ Pipeline / Dataflow Gen2 / Notebook / Spark / Eventstream / KQL",
                "**Monitor and Optimize Analytics Solutions**(30-35%)─ Monitoring Hub / Capacity Metrics / Performance Tuning / Maintenance",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Workspace / Capacity / Domain",
      overview:
        "Fabric の階層構造 ・ Workspace Role ・ Capacity Unit(CU) ・ Workspace Identity を理解します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "階層構造",
          blocks: [
            {
              type: "p",
              text: "Fabric は **Tenant > Domain > Workspace > Item** の 4 層階層です。Data Engineer は Workspace と Item を主に扱い、Capacity Admin が Capacity / Tenant を管理します。",
            },
            { type: "h3", text: "Workspace Role" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Admin**: Workspace 管理 + 全 Item CRUD",
                "**Member**: 全 Item の編集",
                "**Contributor**: 既存 Item の編集",
                "**Viewer**: 閲覧のみ",
              ],
            },
            {
              type: "practical",
              title: "Data Mesh パターン",
              body: "**Producer Workspace**(Bronze / Silver データ生成)と **Consumer Workspace**(Gold / 分析)を分離 → OneLake Shortcut で参照 ・ **Domain でビジネス領域分類** ・ Microsoft 公式の Data Mesh パターン。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Capacity と Throttling",
          blocks: [
            {
              type: "p",
              text: "**Capacity Unit(CU)** は Fabric の処理能力単位。**F2 から F2048** までで、Pay-as-you-go または Reserved 購入。**F64+ で Power BI Pro ライセンス代替**となります。",
            },
            { type: "h3", text: "Smoothing と Throttling" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Smoothing**: Background Operation を 24 時間で平準化",
                "**Bursting**: 一時的に Max Capacity の数倍まで自動拡張",
                "**Throttling 段階**: 10 分 100% 超過 = Interactive Delay → 60 分 = Interactive Reject → 24h = Background Reject",
                "**Background vs Interactive Operations**: 課金 ・ Smoothing 動作が異なる",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "Workspace Identity と Managed Private Endpoint",
          blocks: [
            {
              type: "p",
              text: "**Workspace Identity**(2024 GA)は Workspace 全体の Service Principal 風 ID。**Managed Private Endpoint** で顧客 VNet 内の ADLS / SQL DB / Cosmos 等へ Private 接続できます。**金融 ・ 医療 ・ 政府** の規制業界要件に対応。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "OneLake と Lakehouse",
      overview:
        "OneLake / Shortcut / Mirroring ・ Lakehouse の Files / Tables / Schema(3 階層)・ Medallion アーキテクチャ。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "OneLake と Shortcut / Mirroring",
          blocks: [
            {
              type: "p",
              text: "**OneLake** はテナント当たり 1 つの論理データレイク。Delta-Parquet ネイティブで、全 Fabric Workload が共有します。",
            },
            { type: "h3", text: "外部データ統合の 2 つの方式" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Shortcut**(物理コピーなしの参照): S3 / ADLS / GCS / Iceberg / 他 Workspace / Dataverse",
                "**Mirroring**(自動同期): Azure SQL / Cosmos / Snowflake / PostgreSQL / MySQL / Fabric SQL DB / Mongo Atlas",
                "**用途別**: 既存 Lake は Shortcut、Operational DB は Mirroring が一般的",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Lakehouse の構造",
          blocks: [
            { type: "h3", text: "Files / Tables / Schema 3 階層(2024 GA)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Files**: ABFS パス自由配置(Parquet / CSV / JSON / 画像)",
                "**Tables**: Spark Catalog + Managed Delta → SQL Endpoint Read Only",
                "**Schema**(2024 GA): Catalog.Schema.Table の 3 階層命名(`lakehouse.bronze.sales` 等)",
                "**Default Semantic Model**: SQL Endpoint から自動生成された Power BI Model",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Medallion パターン",
          blocks: [
            { type: "h3", text: "Bronze / Silver / Gold の役割" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Bronze**(Raw): 取込時の Source を変更なしで保管 + 履歴",
                "**Silver**(Clean / Conformed): クレンジング ・ デデュプ ・ 統合 ・ 型整理",
                "**Gold**(Aggregate / Business): Star Schema + ビジネス集計 + BI/ML 用",
              ],
            },
            {
              type: "intuition",
              title: "💡 Schema 設計のベストプラクティス",
              body: "**Bronze は不変履歴**(変更しない / Append のみ)・ **Silver は SCD Type 1 でクレンジング** ・ **Gold は SCD Type 2 + Star Schema**。**Schema 変更は Bronze で頻繁にあって OK**(Silver/Gold への伝播は Schema Evolution で吸収)。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Data Pipeline と Dataflow Gen2",
      overview:
        "Pipeline の Activity 種別 / Control Flow / Trigger ・ Dataflow Gen2 の Fast Copy / Query Folding。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Data Pipeline の基本",
          blocks: [
            {
              type: "p",
              text: "**Data Pipeline** は Azure Data Factory ベースの DAG オーケストレーション。200+ Connector の Copy Activity と豊富な Control Flow Activity を組み合わせます。",
            },
            { type: "h3", text: "主要 Activity" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Copy Activity**: 200+ Connector で Source → Sink 転送",
                "**Notebook Activity**: Fabric Notebook 起動 + Parameter 渡し",
                "**Dataflow Activity**: Dataflow Gen2 起動",
                "**Stored Procedure**: Warehouse / Azure SQL DB の SP 実行",
                "**Lookup / Get Metadata**: 制御変数取得",
                "**Control Flow**: If Condition / Switch / ForEach / Until / Set Variable / Wait / Fail",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Trigger と Schedule",
          blocks: [
            { type: "h3", text: "Trigger 種類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Schedule**(Cron / 間隔)",
                "**Storage Event**(Blob 追加 / 削除)",
                "**Tumbling Window**(時間範囲 + Concurrency / Retry)",
                "**Manual / REST API 起動**",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Dataflow Gen2 と Fast Copy",
          blocks: [
            {
              type: "p",
              text: "**Dataflow Gen2** は Power Query M ベースの ELT。Fabric Runtime 上で実行され、Lakehouse / Warehouse / SQL DB / KQL DB へ直接 Output 可能です。",
            },
            { type: "h3", text: "Fast Copy(2024+)" },
            {
              type: "p",
              text: "単純な Source → Sink の場合に Power Query 変換を回避し Pipeline Copy 風に高速化。**大量データ転送で 5-10x 高速**。Source / Sink 両方が対応している必要があります(Azure SQL / Snowflake / ADLS 等)。",
            },
            { type: "h3", text: "Query Folding" },
            {
              type: "p",
              text: "**Power Query M の変換を Source DB の SQL に折りたたみ → DB 側で実行**。Folding が切れる変換(Custom Function 等)は **最後に置く** のがセオリー。Diagnostics でフォールディング状態を確認可能。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Notebook と Spark",
      overview:
        "Notebook の Magic / mssparkutils ・ Spark Pool ・ NEE ・ Performance Tuning。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Notebook の基本",
          blocks: [
            { type: "h3", text: "対応言語と Magic" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**PySpark**(主流)/ Scala / Spark SQL / SparkR",
                "**T-SQL Magic**(2024+): `%%tsql` で Warehouse / SQL DB クエリ",
                "**Markdown / Mermaid / HTML**",
                "**mssparkutils**: Fabric 専用ユーティリティ(File / Lakehouse / Notebook / Credentials)",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Spark Pool と Environment",
          blocks: [
            { type: "h3", text: "Spark Compute 種別" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Starter Pool**: 共有 ・ 即時起動 ・ Cold Start なし",
                "**Custom Pool**: 専用 ・ ノードサイズ指定 ・ Autoscale",
                "**Environment**: Custom Library + Spark Properties + 認証情報を集約管理",
                "**High Concurrency Mode**(2024+): 複数 Notebook が同一 Session 共有 → Startup 削減",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Spark Native Execution Engine(NEE)",
          blocks: [
            {
              type: "p",
              text: "**NEE**(2024 GA)は Meta Velox + Gluten Project ベースの C++ 実行エンジン。Spark SQL / DataFrame の処理を **2-4x 高速化**します。Databricks Photon に対応する Microsoft の答え。",
            },
            { type: "h3", text: "Performance Tuning" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Partition / Bucketing / Caching / Persist**",
                "**Broadcast Join / Skew Hint**",
                "**Adaptive Query Execution(AQE)**(Spark 3.0+ 既定有効)",
                "**Pandas UDF**(Vectorization 高速化)",
                "**V-Order**(Vertipaq / Direct Lake 向け最適化)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Delta Lake と Lakehouse Maintenance",
      overview:
        "Delta MERGE / Schema Evolution / Time Travel / OPTIMIZE / Z-ORDER / Liquid Clustering / VACUUM。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Delta Lake の主要機能",
          blocks: [
            { type: "h3", text: "代表的操作" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**MERGE INTO**: Upsert + Delete + Insert を 1 SQL(SCD Type 1/2)",
                "**Schema Evolution**: Add Column(mergeSchema)・ Drop / Rename(Column Mapping)",
                "**Time Travel**: `VERSION AS OF n` / `TIMESTAMP AS OF '...'`",
                "**OCC(Optimistic Concurrency Control)**: Snapshot Isolation + Conflict 検知",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Maintenance 操作",
          blocks: [
            { type: "h3", text: "OPTIMIZE / Z-ORDER / Liquid Clustering / VACUUM / V-Order" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**OPTIMIZE**: Bin Packing で小ファイル統合(1GB ターゲット)",
                "**Z-ORDER BY**: 多次元 Locality(Z-Order Curve)で Data Skipping",
                "**Liquid Clustering**(2024+): Z-ORDER の進化 / Partition Skew 解消 / Incremental",
                "**VACUUM**: 保持期間外の Parquet 削除(デフォルト 7 日)",
                "**V-Order**: Vertipaq / Direct Lake 向け Parquet 最適化",
              ],
            },
            {
              type: "practical",
              title: "Table Maintenance 自動化",
              body: "**Table Maintenance**(GUI)で OPTIMIZE / Z-ORDER / VACUUM / V-Order を **Schedule 自動実行**。**Time Travel と VACUUM 保持期間のバランス**(7 日推奨)を考慮。",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Real-Time Intelligence",
      overview:
        "Eventstream / Eventhouse(KQL DB)/ Real-Time Dashboard / Reflex / Real-Time Hub。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Eventstream",
          blocks: [
            { type: "h3", text: "Source と Destination" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Source**: Event Hubs / IoT Hub / Kafka / Confluent Kafka / Custom App / Sample / Service Bus / AMQP / MQTT / Pub/Sub / Azure SQL CDC",
                "**Destination**: Lakehouse / Eventhouse(KQL DB)/ Reflex / Power BI Streaming Dataset / Custom Endpoint",
                "**変換**: Filter / Manage Fields / Aggregate / Union / Expand(JSON 展開)/ Group By / Join",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Eventhouse と KQL Database",
          blocks: [
            {
              type: "p",
              text: "**Eventhouse**(2024 リブランド)は複数 KQL Database をホストする論理コンテナ。**KQL(Kusto Query Language)** は Azure Data Explorer 由来で、Log / IoT / Time Series に強いパイプ風言語です。",
            },
            { type: "h3", text: "KQL の主要構文" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**where / project / extend**: フィルタ / 列選択 / 列追加",
                "**summarize ... by ...**: SQL の GROUP BY 相当",
                "**join / lookup / union**: 結合 / 統合",
                "**make-series**: 時系列集計(欠損埋め + Time Bin)",
                "**top N / sort by**: 順位",
              ],
            },
            { type: "h3", text: "Update Policy と Materialized View" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Update Policy**: Raw 取込時に自動派生 Table 投入(ELT)",
                "**Materialized View**: 増分更新 + Streaming Ingestion 連動の高速集計",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "Real-Time Dashboard と Reflex",
          blocks: [
            { type: "h3", text: "Real-Time Dashboard" },
            {
              type: "p",
              text: "KQL ベースの自動更新(秒単位)Dashboard。Tile / Variable / Parameter / Page で構築。**Power BI より高頻度更新**に強い。",
            },
            { type: "h3", text: "Reflex(Data Activator)" },
            {
              type: "p",
              text: "イベント検知 → Teams / Email / Power Automate / Functions / Logic Apps / Webhook へ自動アクション。**Event Source**: Power BI Visual / KQL DB / Eventstream。",
            },
            { type: "h3", text: "Real-Time Hub" },
            {
              type: "p",
              text: "**Real-Time Hub**(2024 GA): 全 Tenant の Real-Time Data Source を 1 画面で一覧 / Subscribe / Add Destination → **Tenant 全体の Real-Time Data Catalog**。",
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "セキュリティとガバナンス",
      overview:
        "RLS / OLS / Sensitivity Label / Purview / Workspace Identity / Private Link。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "アクセス制御の階層",
          blocks: [
            { type: "h3", text: "Lakehouse / Warehouse の RLS" },
            {
              type: "p",
              text: "**Lakehouse RLS**: SQL Endpoint の T-SQL `CREATE SECURITY POLICY` + Predicate Function。**Warehouse**: 同様 T-SQL Security Policy。**Semantic Model RLS**: Role + DAX(`USERPRINCIPALNAME()` 等)。",
            },
            { type: "h3", text: "OLS と Sensitivity Label" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**OLS(Object-Level Security)**: 列 / テーブル単位の Role 別表示制御(TMDL / Tabular Editor)",
                "**Sensitivity Label**: M365 統合 ・ Confidential / Highly Confidential 等 ・ 自動継承 / DLP / 暗号化",
                "**Purview Information Protection**: Tenant 全体の機密情報管理",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Network Security",
          blocks: [
            { type: "h3", text: "3 層 Network 制御" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workspace Identity**: Workspace の Service Principal 風 ID",
                "**Managed Private Endpoint**: 顧客 VNet 内 Resource への Private 接続",
                "**Tenant-level Private Link**: Public Internet 遮断(Premium / Fabric Capacity)",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "Purview Hub for Fabric",
          blocks: [
            {
              type: "p",
              text: "**Purview Hub**(2024 GA): Fabric の Data Map / Lineage / Catalog / Sensitivity / DLP を統合管理。**Azure / AWS / GCP / オンプレ / SaaS** 横断ガバナンスを Fabric にも適用。",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "Git Integration / CI/CD / Deployment",
      overview:
        "Fabric Git Integration / Deployment Pipeline / REST API による CI/CD 自動化。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Git Integration",
          blocks: [
            {
              type: "p",
              text: "**Fabric Git Integration**(2024 GA): Azure DevOps / GitHub と Workspace を同期。**Item 単位**(Notebook / Pipeline / Lakehouse SQL / Semantic Model / Report 等)で Commit / Pull。",
            },
            { type: "h3", text: "推奨 Workflow" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Feature Workspace**(Feature Branch)で開発",
                "**Pull Request** で Main Branch へマージ",
                "**Main Workspace**(Main Branch)を **Deployment Pipeline** の Source に",
                "**Trunk-Based Development** にも対応",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "Deployment Pipeline",
          blocks: [
            { type: "h3", text: "Dev → Test → Prod" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**3 段階 Workspace** を Pipeline で結合",
                "**Rule**: Lakehouse / Warehouse / Connection を Stage 別自動置換",
                "**REST API**(または Azure DevOps Pipeline / GitHub Actions)から Trigger 可能",
                "**Premium / Fabric Capacity 必要**",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "Fabric REST API",
          blocks: [
            { type: "h3", text: "REST API でできること" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workspace / Item の作成 ・ 削除 ・ 一覧**",
                "**Pipeline / Notebook の起動 ・ 監視**",
                "**Capacity / Domain / User 管理**",
                "**Audit / Lineage 取得**",
                "**Service Principal / Managed Identity 認証**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "Monitoring ・ Performance ・ 受験対策",
      overview:
        "Monitoring Hub / Capacity Metrics / Performance Tuning / 受験対策と次のステップ。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "Monitoring Hub",
          blocks: [
            {
              type: "p",
              text: "**Monitoring Hub**: 全 Workspace の Job / Pipeline / Refresh / Notebook 実行を統合監視。Filter / Search / Audit。Item Type 横断でステータスを可視化。",
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "Capacity Metrics App",
          blocks: [
            {
              type: "p",
              text: "**Microsoft 公式 Power BI App**。CU 消費 / Throttling Risk / Smoothing 状況 / 各 Item 別利用量を可視化。**Background vs Interactive Operations** ・ 24h Smoothing ・ Throttling Risk を Capacity Admin 向け分析。",
            },
          ],
        },
        {
          id: "ch10-sec3",
          number: "10.3",
          title: "Cost 最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Capacity Pause**(Pay-as-you-go)・ **Reserved Capacity**(1y/3y)",
                "**Workload Settings の制限**(Spark / SQL / Background Operation 別)",
                "**Starter Pool 活用 ・ Spot / Idle Shutdown**",
                "**High Concurrency Mode** で複数 Notebook が同 Session 共有",
                "**V-Order + OPTIMIZE** で計算量削減",
              ],
            },
          ],
        },
        {
          id: "ch10-sec4",
          number: "10.4",
          title: "受験対策と次のステップ",
          blocks: [
            { type: "h3", text: "学習リソース" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Microsoft Learn DP-700 ラーニングパス**(無料公式)",
                "**Fabric Trial 60 日**(F64 相当 ・ 実機)",
                "**GitHub Microsoft Fabric Samples**",
                "**YouTube: Guy in a Cube / SQLBI / Pragmatic Works**",
                "**dbt Fabric Adapter**(Analytics Engineer 実務)",
              ],
            },
            { type: "h3", text: "合格後のキャリアパス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**DP-600**: Fabric Analytics Engineer Associate(Semantic Model / Direct Lake / DAX)",
                "**DP-100**: Azure Data Scientist Associate(ML 方向)",
                "**AZ-305**: Azure Solutions Architect Expert(全体設計)",
                "**AI-102**: Azure AI Engineer Associate(AI 統合)",
              ],
            },
            {
              type: "practical",
              title: "DP-700 のキャリア価値",
              body: "DP-700 は **Fabric Data Engineer の認定**として今後数年間需要拡大が見込まれます。**DP-203 経験者**が取得すると、**Synapse 時代から Fabric 時代への移行をリードする Senior Data Engineer**へのステップとなります。DP-600 と併取で **Fabric Architect 級**の価値を提示できます。",
            },
            { type: "h3", text: "結びに" },
            {
              type: "p",
              text: "10 章で Fabric Data Engineer の全体像を概観しました。Fabric は SaaS + Open Format + AI 統合の方向に Azure データ世界が再編される中心。DP-700 はその習熟証明です。教科書と演習問題を反復しつつ、ぜひ Fabric Trial で実機を触りながら本番受験へ。",
            },
          ],
        },
      ],
    },
  ],
};
