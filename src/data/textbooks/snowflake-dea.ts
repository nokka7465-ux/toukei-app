import type { Textbook } from "@/types/content";

export const snowflakeDeaTextbook: Textbook = {
  levelSlug: "snowflake-dea",
  title: "SnowPro Advanced: Data Engineer(DEA)教科書",
  intro:
    "**SnowPro Advanced: Data Engineer(DEA)** は Snowflake 上でデータ取込 ・ 変換 ・ 最適化を担う Data Engineer の **Advanced 認定**。**SnowPro Core(Foundational)の上位**。Snowpipe / Streams / Tasks / Snowpark / Cortex AI / Iceberg / Polaris / Native Apps / Horizon Catalog / Performance / Cost の総合実装力を問う、実務 1-2 年経験者向け試験です。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "DEA ─ 試験概要 + Architecture 復習",
      overview: "試験形式 ・ Snowflake 3 層アーキテクチャ ・ Editions。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験基本情報",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**試験**: SnowPro Advanced: Data Engineer(DEA)",
              "**問題数 / 時間**: 65 問 / 115 分",
              "**合格点 / 受験料**: 750/1000 ・ 375 USD",
              "**有効期限**: 2 年",
              "**前提**: SnowPro Core 取得 + Snowflake 実務 1-2 年",
            ] },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Snowflake 3 層アーキテクチャ",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Storage**: S3 / Blob / GCS 上の不変 Micro-partition",
              "**Compute**: Virtual Warehouse(独立 ・ Auto Suspend/Resume / Multi-Cluster)",
              "**Cloud Services**: Metadata / Optimizer / Auth / Session 管理",
            ] },
            { type: "p", text: "**Standard / Enterprise / Business Critical / Virtual Private Snowflake(VPS)** の Edition で機能差。**Time Travel 期間 / Replication / Tri-Secret Secure / HIPAA / PCI** などで使い分け。" },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Data Movement ─ Snowpipe / Streams / Tasks",
      overview: "Bulk Load / Snowpipe / Snowpipe Streaming / Streams / Tasks DAG。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "取込パターン",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Bulk Load(COPY)**: Warehouse + 手動 / バッチ",
              "**Snowpipe**: Serverless + ファイル単位 + Auto-Ingest(S3 Event / SQS)",
              "**Snowpipe Streaming**: Row 単位 + 秒オーダー + Kafka Connector",
              "**Iceberg Direct Write**: 外部 Engine + Snowflake が読み",
            ] },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Streams + Tasks の増分 ELT",
          blocks: [
            { type: "p", text: "**Stream** で Source Table の CDC(INSERT/UPDATE/DELETE)+ **Task** で `WHEN SYSTEM$STREAM_HAS_DATA` で増分検知 + MERGE で Target 更新 = 王道 ELT パターン。" },
            { type: "list", style: "bullet", items: [
              "**Stream Type**: Standard / Append-only / Insert-only",
              "**Task DAG**: Root Task(SCHEDULE)+ Child(AFTER)",
              "**Serverless Task**(2024+ Compute なし)+ Warehouse Task",
              "**Conditional Task**: `WHEN SYSTEM$STREAM_HAS_DATA('s')`",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Snowpark + Stored Procedure + Cortex AI",
      overview: "Snowpark(Python/Scala/Java)/ Container Services / Stored Procedure / Cortex AI Functions / Search / Analyst。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Snowpark",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Snowpark API**: DataFrame ライク Python / Scala / Java",
              "**UDF / Stored Procedure**: Compute Push-down",
              "**Snowpark Container Services**(2024 GA): Compute Pool + Service / Job ・ Custom Container + GPU 可",
            ] },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Stored Procedure",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Languages**: JavaScript / SQL Scripting / Python / Scala / Java(Snowpark)",
              "**SQL Scripting**: BEGIN-END / FOR LOOP / IF / CURSOR",
              "**Calling Conventions**: CALLER vs OWNER Rights",
            ] },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Cortex AI",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Cortex Functions**: COMPLETE / SUMMARIZE / SENTIMENT / TRANSLATE / EXTRACT_ANSWER / EMBED_TEXT / EMBED_IMAGE",
              "**AI_FILTER / AI_AGGREGATE / AI_CLASSIFY**(2024+)",
              "**Cortex Search**(マネージド RAG)・ **Cortex Analyst**(NL2SQL)",
              "**Document AI / Forecasting / Anomaly Detection / Classification**",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Performance Optimization",
      overview: "Clustering / Search Optimization / Materialized View / Query Profile / Cache / Warehouse 設計。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Optimization Features",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Clustering Key + Auto Clustering**: 大規模テーブルの Pruning 強化",
              "**Search Optimization Service(SOS)**: Point / Substring / Geo / Variant",
              "**Materialized View**: 増分更新 + Query Rewrite(Enterprise+)",
              "**Result / Local Disk / Metadata Cache の 3 階層**",
            ] },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Query Profile + Warehouse 設計",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Query Profile**: Operator Tree / Most Expensive Node / Pruning / Spilling",
              "**Spilling to Local / Remote**: メモリ不足 → Disk → Remote(S3)・ WH サイズアップで解消",
              "**Multi-Cluster Warehouse**: 同時実行用(Sizing と独立)",
              "**Scaling Policy**: Standard(Aggressive)vs Economy(Conservative)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Iceberg / Polaris / Native Apps / Sharing",
      overview: "Iceberg Tables / Apache Polaris / Native App Framework / Marketplace / Streamlit。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Iceberg Tables",
          blocks: [
            { type: "p", text: "**Iceberg Tables**(2024 GA): S3 上 Parquet + Iceberg Manifest を Snowflake と他エンジン(Spark / Trino / Databricks)で共有。**Snowflake-Managed / Catalog-Managed** の 2 タイプ。" },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Apache Polaris と Open Lakehouse",
          blocks: [
            { type: "p", text: "**Polaris**(2024 Apache 2.0 OSS): Iceberg REST Catalog。**Snowflake / Spark / Trino / Flink / DuckDB** を統合。Microsoft / Databricks Unity Catalog OSS と並ぶ Open Catalog 双璧。" },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Secure Data Sharing + Native Apps + Streamlit",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Secure Data Sharing**: Provider → Consumer 無コピー Read Only(Marketplace 基盤)",
              "**Native App Framework**(2024 GA): Provider App を Consumer Account 内で完全分離実行",
              "**Streamlit in Snowflake(SiS)**: Python アプリ ・ Cortex / Snowpark 統合",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Storage Protection / Security / Governance / 受験対策",
      overview: "Time Travel / Fail-Safe / Replication / Masking / RBAC / Horizon Catalog / 受験対策。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Storage Protection",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Time Travel**: Standard 1 日 ・ Enterprise+ 0-90 日",
              "**Fail-Safe**: Time Travel 後 7 日(Snowflake 復旧のみ)",
              "**Database Replication + Failover**: BCP / DR",
              "**Zero-Copy Clone**: Time Travel + メタデータ参照のみで巨大 DB クローン",
            ] },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Security と Governance",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**RBAC**: Custom Role + 階層 + Grant(Privileges)",
              "**Dynamic Data Masking + Row Access Policy**(列 + 行制御)",
              "**Tag-Based Masking**: Tag に Policy 紐付け → 大規模列管理",
              "**Network Policy**: IP Allowlist + Private Link",
              "**Tri-Secret Secure**(Business Critical+): Customer-Managed Key",
              "**Horizon Catalog**(2024 リブランド): Tag + Lineage + DQ + Privacy 統合",
            ] },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "受験対策と次のステップ",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Snowflake University**(公式 LMS)",
              "**Snowflake Free Trial 30 日**($400 クレジット)",
              "**Hands-on Lab + Quickstart**(snowflake.com/quickstarts)",
              "**SnowPro Core 復習**(Architecture / Editions / Performance)",
            ] },
            { type: "h3", text: "合格後のキャリアパス" },
            { type: "list", style: "bullet", items: [
              "**SnowPro Advanced: Architect / Analyst / Administrator / Data Scientist**",
              "**Databricks DE Pro / Microsoft DP-700 / GCP Pro DE / AWS DEA-C01** でマルチクラウド",
              "**dbt Snowflake Adapter**(Analytics Engineer)",
            ] },
            { type: "practical", title: "SnowPro DEA のキャリア価値", body: "**Snowflake は 2024-2025 でデータプラットフォーム最大手の一角**(Databricks / Fabric / BigQuery と競合)。**DEA 取得は Senior Data Engineer + DWH 領域**で強いシグナル。**dbt + Snowflake** の組合せが Modern Data Stack の Gold Standard。" },
            { type: "p", text: "**結びに**: Snowflake DE は データ取込 ・ 変換 ・ 最適化 + AI + Lakehouse(Iceberg + Polaris)の総合スキルです。試験合格後も Snowflake は四半期ごとに大型機能追加が続くため、Release Notes + Quickstart を継続キャッチアップしてください。" },
          ],
        },
      ],
    },
  ],
};
