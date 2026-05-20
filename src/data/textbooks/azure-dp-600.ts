import type { Textbook } from "@/types/content";

export const azureDp600Textbook: Textbook = {
  levelSlug: "azure-dp-600",
  title: "Microsoft Fabric Analytics Engineer Associate(DP-600)教科書",
  intro:
    "**Microsoft Certified: Fabric Analytics Engineer Associate(DP-600)** は **Microsoft Fabric 上で Data + Analytics + BI を設計 ・ 実装** する Analytics Engineer 認定(2024 リリース)。**OneLake / Lakehouse / Warehouse / Semantic Model / Direct Lake / DAX / Power BI / Notebook / Pipeline** など Fabric 中核機能を **計画 ・ 準備 ・ 実装 ・ 探索 ・ ガバナンス** で問います。**PL-300 + DP-203 の合流地点** に位置し、**dbt 系 Analytics Engineer の Microsoft 版** として注目度が高い認定です。本教科書は 10 章で出題範囲を体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "DP-600 ─ 試験の全体像",
      overview:
        "試験形式 ・ 出題範囲 ・ Fabric エコシステム内の位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の基本情報",
          blocks: [
            {
              type: "p",
              text: "**DP-600** は 2024 年に登場した Microsoft Fabric 専用の Associate 認定です。Power BI Data Analyst(PL-300)で BI 寄り、Azure Data Engineer(DP-203)で DE 寄りだった人材が、**Fabric SaaS でその両側を統合する Analytics Engineer 役割**を担うために設計されています。",
            },
            { type: "h3", text: "試験の概要" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**試験コード**: DP-600(Implementing Analytics Solutions Using Microsoft Fabric)",
                "**問題数 / 時間**: 40〜60 問 / 100 分前後",
                "**合格点**: 700/1000",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験 ・ 単選 / 複選 / D&D / ケーススタディ",
                "**受験料**: 165 USD(日本は 165 USD 相当の円建て)",
                "**有効期限**: 1 年(無料の更新試験で延長可能)",
                "**前提知識**: SQL(中級)+ Python / PySpark(基本)+ Power BI / DAX",
              ],
            },
            {
              type: "intuition",
              title: "💡 DP-600 と他認定の関係",
              body: "**PL-300**(Power BI Analyst)+ **DP-203**(Azure DE)→ **DP-600**(Fabric Analytics Engineer)で 2 つを Fabric 上で統合運用するスキル。**DP-700**(Fabric Data Engineer)で更に DE 専門化、**DP-100**(Data Scientist)で ML 方向、**AZ-305**(SA Expert)で全体設計。",
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Skills Measured 5 ドメイン",
          blocks: [
            {
              type: "p",
              text: "DP-600 の出題範囲(Skills Measured)は 5 ドメインで構成されます。**準備 + Semantic Model + 探索**で全体の 7 割以上を占め、**SQL / Spark / DAX / Power Query / Power BI** の総合スキルが問われます。",
            },
            { type: "h3", text: "出題ドメイン(2024+ ガイド)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Plan / Implement / Manage Analytics Environment**(10-15%)─ Workspace / Capacity / Security / Lifecycle",
                "**Prepare Data**(25-30%)─ Lakehouse / Warehouse / Pipeline / Dataflow",
                "**Implement Semantic Model**(25-30%)─ Direct Lake / DAX / RLS / Calculation Groups",
                "**Explore + Analyze Data**(20-25%)─ Power BI / Notebook / KQL / 探索分析",
                "**Develop / Govern**(残り)─ Git / Deployment / Lineage / Sensitivity",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Microsoft Fabric の全体像",
      overview:
        "Fabric の 7 ワークロード ・ Capacity Unit(CU) ・ Tenant / Workspace / Domain 階層を理解します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Fabric の 7 ワークロード",
          blocks: [
            { type: "h3", text: "ワークロード一覧" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Data Engineering**(Spark + Notebook + Lakehouse)",
                "**Data Factory**(Pipeline + Dataflow Gen2)",
                "**Data Warehouse**(T-SQL + Multi-Table ACID)",
                "**Real-Time Intelligence**(Eventstream + KQL DB + Reflex)",
                "**Data Science**(Notebook + AutoML + MLflow)",
                "**Power BI**(Semantic Model + Report + Dashboard)",
                "**Data Activator**(イベント検知 + 自動アクション)",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Capacity Unit(CU)とライセンス",
          blocks: [
            {
              type: "p",
              text: "Fabric の課金単位は **CU(Capacity Unit)**。**F2(最小)→ F4 → F8 → ... → F2048(最大)** までのスキューがあり、**Pay-as-you-go / Reserved 1y/3y** の購入形態です。",
            },
            { type: "h3", text: "Capacity 関連の重要概念" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Smoothing**: 短期スパイクを 24 時間で平滑化",
                "**Bursting**: 一時的に Max Capacity の数倍まで自動拡張",
                "**Background vs Interactive Operations**: 課金 ・ Throttling の扱いが異なる",
                "**F64+**: Power BI Pro ライセンス代替(全社員にレポート配布可)",
                "**Trial**: 60 日 ・ F64 相当",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "Tenant / Workspace / Domain",
          blocks: [
            {
              type: "p",
              text: "Fabric の階層は **Tenant > Domain > Workspace > Item** の 4 層。**Domain でビジネス領域**(Finance / Marketing / Sales 等)を分類し、**Workspace で開発単位**を分けるのが基本パターンです。",
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
              body: "**Producer Workspace**(Bronze / Silver データ生成)と **Consumer Workspace**(Gold / 分析)を分離 → **OneLake Shortcut で参照**。**Domain で組織横断ガバナンス**。Microsoft 公式の Data Mesh 推奨パターンです。",
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
        "Fabric のストレージ基盤 OneLake、その上の Lakehouse、Shortcut / Mirroring など共有機構を解説します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "OneLake の特徴",
          blocks: [
            {
              type: "p",
              text: "**OneLake** は「Data の OneDrive」と称される、**テナント当たり 1 つの論理 Data Lake**。物理的には ADLS Gen2 上に構築され、**全 Fabric Workload が Delta-Parquet を共有**します。",
            },
            { type: "h3", text: "OneLake の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**OneLake Shortcut**: 物理コピーなしで参照(ADLS / S3 / GCS / Workspace / Iceberg)",
                "**Mirroring**(2024+ 拡張): Azure SQL / Cosmos / Snowflake / PostgreSQL / MySQL を自動同期",
                "**Delta-Parquet ネイティブ**: 業界標準フォーマット",
                "**OneLake File Explorer**: Windows / macOS で OneDrive ライクにマウント",
                "**V-Order**: Microsoft 拡張 Parquet で Vertipaq + Direct Lake 最適化",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Lakehouse の構造",
          blocks: [
            {
              type: "p",
              text: "**Lakehouse** は Bronze → Silver → Gold(Medallion アーキテクチャ)で構築する半構造化 + 構造化データの統合基盤。**Files**(自由配置)と **Tables**(Managed Delta)の 2 領域を持ちます。",
            },
            { type: "h3", text: "Files vs Tables" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Files**: ABFS パスで自由構造 ・ Parquet / CSV / JSON / 画像 / 動画",
                "**Tables**: Spark Catalog + Managed Delta ・ SQL Endpoint で T-SQL 読込可",
                "**SQL Endpoint**: Read Only(Lakehouse 側)・ 書込は Notebook / Pipeline 経由",
              ],
            },
            {
              type: "intuition",
              title: "💡 Medallion パターン",
              body: "**Bronze**(Raw 取込 ・ 変更なし)→ **Silver**(クレンジング ・ 統合 ・ デデュプ)→ **Gold**(ビジネス集計 ・ BI / ML 用)。**Bronze は SCD なし / Silver は SCD Type 1 / Gold は事実テーブル + Dim** が典型。",
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Lakehouse vs Warehouse の使い分け",
          blocks: [
            { type: "h3", text: "比較表" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Lakehouse**: PySpark / Spark SQL / Delta / 半構造化 / DS / Notebook 開発に最適",
                "**Warehouse**: T-SQL 完全 / Multi-Table ACID / Stored Procedure / BI 開発に最適",
                "**両方 OneLake 上の Delta**: SQL Endpoint で相互参照可能",
                "**書込手段**: Lakehouse=Notebook/Pipeline、Warehouse=T-SQL DML / COPY INTO",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Data Factory ─ Pipeline と Dataflow Gen2",
      overview:
        "Fabric の取込 ・ 変換層(Pipeline / Dataflow Gen2)の使い分けと実装パターン。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Data Pipeline",
          blocks: [
            {
              type: "p",
              text: "**Data Pipeline** は Azure Data Factory ベースの DAG オーケストレーション。Copy / Notebook / Dataflow / Stored Procedure / Webhook / If Condition / ForEach 等の Activity を組合せます。",
            },
            { type: "h3", text: "主要 Activity" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Copy Activity**: 200+ Connector(クラウド / DB / SaaS / DWH 横断)",
                "**Notebook Activity**: Fabric Notebook 起動",
                "**Dataflow Activity**: Dataflow Gen2 起動",
                "**Stored Procedure**: Warehouse / Azure SQL DB の SP 実行",
                "**Control Flow**: If / Switch / ForEach / Until / Wait / Fail",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Dataflow Gen2",
          blocks: [
            {
              type: "p",
              text: "**Dataflow Gen2** は Power Query M ベースの ELT。Fabric Runtime 上で実行され、**OneLake / Lakehouse / Warehouse / Azure SQL DB / KQL DB** に直接 Output 可能です。",
            },
            { type: "h3", text: "Dataflow Gen2 の特徴" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Power Query M**: GUI + Code(M Language)で変換",
                "**Query Folding**: 変換を Source DB の SQL に折りたたみ → 高速",
                "**Fast Copy**(2024+): Power Query を回避し並列 ・ 高スループット転送",
                "**Output Destination**: Lakehouse / Warehouse / SQL DB / KQL DB",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Notebook / Spark / Data Engineering",
      overview:
        "Fabric Notebook ・ Spark / NEE ・ Lakehouse + Spark の Bronze/Silver/Gold 実装。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Fabric Notebook の基本",
          blocks: [
            { type: "h3", text: "対応言語と Magic" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**PySpark**(主流)/ Scala / Spark SQL / SparkR",
                "**T-SQL Magic**(2024+): `%%tsql` で Warehouse クエリ実行",
                "**Markdown / Mermaid / HTML**",
                "**mssparkutils**: Fabric 専用ユーティリティ(File / Lakehouse / Notebook 連携)",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Spark Native Execution Engine(NEE)",
          blocks: [
            {
              type: "p",
              text: "**NEE**(2024 GA)は Meta Velox + Gluten Project ベースの C++ 実行エンジン。Spark SQL / DataFrame の処理を **2-4x 高速化** し、Databricks Photon に対応する Microsoft の答えです。",
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Spark Job Definition",
          blocks: [
            {
              type: "p",
              text: "本番 Spark Workload は **Spark Job Definition** に JAR / PY ファイルをアップロード → Pipeline / Schedule で実行が標準。Notebook は対話開発、Job Definition はプロダクション用と使い分けます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Warehouse と T-SQL Analytics",
      overview:
        "Fabric Warehouse の構造 ・ COPY INTO ・ Stored Procedure ・ Multi-Table Transaction を解説します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Warehouse の特徴",
          blocks: [
            {
              type: "p",
              text: "**Fabric Warehouse** は T-SQL 完全互換 + Multi-Table ACID + Stored Procedure を持つ、エンタープライズ DWH です。",
            },
            { type: "h3", text: "Warehouse の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**T-SQL 完全互換**: SELECT / INSERT / UPDATE / DELETE / MERGE / CREATE PROC 等",
                "**COPY INTO**: OneLake Files / 外部 Storage から並列高速取込",
                "**Multi-Table ACID**: 複数テーブル横断トランザクション",
                "**Time Travel**: Snapshot ・ Point-in-Time 復元",
                "**Cross-Database Query**: Lakehouse / 他 Warehouse 横断 SQL",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "ELT パターン",
          blocks: [
            {
              type: "p",
              text: "**Fabric Warehouse の ELT パターン**: Raw を OneLake Files に取込 → COPY INTO で Warehouse Staging テーブルへ高速ロード → T-SQL Stored Procedure で Dimensional Model(Star Schema)へ変換 → BI から Semantic Model 経由で参照。",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Semantic Model と Direct Lake",
      overview:
        "Fabric Semantic Model の設計 ・ Direct Lake / Import / DirectQuery の使い分け ・ TMDL ・ Tabular Editor。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Semantic Model の役割",
          blocks: [
            {
              type: "p",
              text: "**Semantic Model**(旧 Power BI Dataset)は、Lakehouse / Warehouse / その他データソースを **Star Schema + Measure + Hierarchy + Security** でビジネス言語に翻訳する層。BI レポート / Excel / Q&A / Copilot がここを参照します。",
            },
            { type: "h3", text: "設計原則" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Star Schema**: Fact + 非正規化 Dim → Vertipaq 圧縮効率 + DAX 単純",
                "**Roche's Maxim**: 変換は **可能な限りソース寄り** に",
                "**Calculation Group**: Time Intelligence 等を集約",
                "**Object-Level Security(OLS)**: 列 / テーブル単位の Role 別表示制御",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Storage Mode の使い分け",
          blocks: [
            { type: "h3", text: "3 モード比較" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Import**: 全データを Vertipaq にロード ・ 最速 ・ 鮮度低(Refresh 必要)",
                "**DirectQuery**: クエリ毎に DB クエリ ・ 鮮度高 ・ 遅い",
                "**Direct Lake**: OneLake Delta を Vertipaq に直接読込 ・ Import 並速度 + DirectQuery 並鮮度 ・ Fabric 専用",
                "**Composite / Hybrid Tables**: 複数モードを混在(古い Partition=Import / 最新=DirectQuery 等)",
              ],
            },
            { type: "h3", text: "Direct Lake の Fallback" },
            {
              type: "p",
              text: "Direct Lake は条件を満たさない場合 **DirectQuery にフォールバック**します。Fallback Conditions は ① 行数上限超過 ② Parquet 以外 ③ View 経由 ④ 古い Schema 等。Visual の右上 Indicator で確認可能です。",
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "TMDL と Power BI Project",
          blocks: [
            {
              type: "p",
              text: "**TMDL(Tabular Model Definition Language)** は Semantic Model を YAML 風テキストで記述する 2024 GA の新フォーマット。**Power BI Project(PBIP)** と組合せて **Git / Pull Request / Code Review** を実現します。",
            },
            {
              type: "practical",
              title: "Tabular Editor 3 の活用",
              body: "**Tabular Editor**(Daniel Otykier OSS / 商用 v3): Power BI Desktop より高度な編集。**Calculation Group / OLS / BPA(Best Practice Analyzer)** で品質向上。Fabric / Power BI XMLA Endpoint 経由で接続。",
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "DAX と Power BI 探索",
      overview:
        "DAX の基本(CALCULATE / Filter Context / Iterator)・ Time Intelligence ・ Power BI Visual / Copilot。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "DAX の核心 ─ Filter Context と CALCULATE",
          blocks: [
            {
              type: "p",
              text: "**Filter Context** は、Visual / Slicer / Page 等で適用される暗黙的なフィルタの集合。**CALCULATE** はこの Filter Context を修正して式を評価する **DAX の中心関数** です。",
            },
            { type: "h3", text: "CALCULATE と組合せる主要関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ALL / ALLEXCEPT / REMOVEFILTERS**: フィルタ解除",
                "**KEEPFILTERS**: フィルタを上書きせず追加",
                "**USERELATIONSHIP**: 通常無効な Relationship を有効化",
                "**FILTER**: 行コンテキストでカスタムフィルタ",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Iterator 関数と Variables",
          blocks: [
            { type: "h3", text: "代表的 Iterator" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SUMX / AVERAGEX / MINX / MAXX / COUNTX**: 行ごとに式評価して集計",
                "**RANKX**: 行ごとに順位計算",
                "**FILTER**: 条件式でフィルタしたテーブルを返す",
              ],
            },
            { type: "h3", text: "VAR の利点" },
            {
              type: "p",
              text: "`VAR x = ... RETURN ...` で **中間結果を変数に**。**1 回評価 → 複数箇所利用** で性能改善 + 可読性向上。Nested CALCULATE よりシンプル。",
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "Time Intelligence",
          blocks: [
            { type: "h3", text: "前提と主要関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**前提**: Date Table を作成 ・ 『日付テーブルとしてマーク』済 ・ Fact と Relationship 成立",
                "**SAMEPERIODLASTYEAR / DATEADD**: 前年比 / 移動",
                "**TOTALYTD / TOTALMTD / TOTALQTD**: 累計",
                "**PREVIOUSMONTH / NEXTMONTH**: 隣接期間",
                "**DATESBETWEEN / DATESINPERIOD**: 範囲指定",
              ],
            },
          ],
        },
        {
          id: "ch8-sec4",
          number: "8.4",
          title: "Copilot in Power BI",
          blocks: [
            {
              type: "p",
              text: "**Copilot in Power BI**(F64+ Capacity / Premium で利用可)は、自然言語からの Visual / Report / DAX / Summary 自動生成 + Q&A Synonym 強化 + Smart Narrative などを提供します。",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "Real-Time Intelligence と Data Science",
      overview:
        "Eventstream / KQL DB / Reflex でのリアルタイム分析、Fabric Data Science の MLflow 統合。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Real-Time Intelligence",
          blocks: [
            { type: "h3", text: "コンポーネント" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Eventstream**: Event Hubs / Kafka / IoT / Custom App を取込 → KQL DB / Lakehouse / Reflex に配信",
                "**Eventhouse / KQL Database**: Azure Data Explorer の Fabric 版 ・ KQL クエリ",
                "**Real-Time Dashboard**: KQL ベースのリアルタイム可視化",
                "**Reflex / Data Activator**: 条件発火(Teams / Power Automate / Function)",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "KQL の基本",
          blocks: [
            {
              type: "p",
              text: "**KQL**(Kusto Query Language)は Azure Data Explorer / Log Analytics / Sentinel と共通。`StormEvents | where State == 'TEXAS' | summarize count() by EventType` のようなパイプ風で **Log / IoT / Time Series** に強いです。",
            },
            { type: "h3", text: "KQL の主要構文" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**where**: フィルタ / **project**: 列選択 / **extend**: 列追加",
                "**summarize ... by ...**: 集計(SQL の GROUP BY 相当)",
                "**join / lookup**: 結合 / **union**: テーブル結合",
                "**top N by ... / sort by ...**: 順位",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "Fabric Data Science と MLflow",
          blocks: [
            {
              type: "p",
              text: "**Fabric Data Science** は **Notebook + AutoML(FLAML)+ MLflow Tracking / Registry + SynapseML** で構成される ML プラットフォーム。Lakehouse データから直接モデル構築可能です。",
            },
            { type: "h3", text: "Data Science Item Type" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Experiment**: MLflow Experiment 互換 ・ 実験追跡",
                "**ML Model**: Model Registry 互換 ・ Version 管理 + Deployment",
                "**Notebook**: PySpark + scikit-learn + PyTorch / TF 等",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "ガバナンス ・ セキュリティ ・ CI/CD",
      overview:
        "Workspace Identity ・ Private Link ・ Sensitivity Label ・ Purview 連携 ・ Git Integration ・ Deployment Pipeline。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "Workspace Identity と Private Link",
          blocks: [
            {
              type: "p",
              text: "**Workspace Identity**(Service Principal 風の自動 ID)+ **Managed Private Endpoint**(顧客 VNet 内 Resource への接続)+ **Tenant-level Private Link**(Public Internet 遮断)で **金融 ・ 医療 ・ 政府** の規制業界要件に対応します。",
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "RLS / OLS / Sensitivity Label",
          blocks: [
            { type: "h3", text: "アクセス制御の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workspace Role**: Admin / Member / Contributor / Viewer",
                "**Item Permission**: 個別の Read / Build / Reshare 制御",
                "**Semantic Model RLS**: Role + DAX(`USERPRINCIPALNAME()` 等)",
                "**Lakehouse RLS**: SQL Endpoint の T-SQL Security Policy",
                "**OLS**: 列 / テーブル単位の Role 別表示制御(TMDL / Tabular Editor)",
                "**Sensitivity Label**: M365 統合 ・ DLP / 暗号化 / 自動分類",
              ],
            },
          ],
        },
        {
          id: "ch10-sec3",
          number: "10.3",
          title: "Microsoft Purview 連携",
          blocks: [
            {
              type: "p",
              text: "**Microsoft Purview** が Fabric を統合カタログ + Lineage + Sensitivity + DLP + Insights で統治します。**Data Map / Data Catalog / Hub for Fabric** で Azure / AWS / GCP / SaaS / オンプレ横断ガバナンス。",
            },
          ],
        },
        {
          id: "ch10-sec4",
          number: "10.4",
          title: "Git Integration と Deployment Pipeline",
          blocks: [
            { type: "h3", text: "Git Integration(2024 GA)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Azure DevOps / GitHub 同期**",
                "**Item 単位の Commit / Pull**(Notebook / Pipeline / Semantic Model / Report 等)",
                "**Power BI Project(PBIP)+ TMDL** で Semantic Model も Git 化",
              ],
            },
            { type: "h3", text: "Deployment Pipeline" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Dev → Test → Prod の 3 段階**(Premium / Fabric Capacity 必要)",
                "**Rule**: Lakehouse / Warehouse / Connection を Stage 別に自動置換",
                "**CI/CD**: GitHub Actions / Azure DevOps Pipeline からも Trigger 可能",
              ],
            },
          ],
        },
        {
          id: "ch10-sec5",
          number: "10.5",
          title: "受験対策と次のステップ",
          blocks: [
            { type: "h3", text: "学習リソース" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Microsoft Learn DP-600 ラーニングパス**(無料公式)",
                "**Fabric Trial 60 日**(F64 相当 ・ 実機)",
                "**Microsoft Fabric Career Hub**(公式)",
                "**GitHub Microsoft Fabric Samples**",
                "**YouTube: Guy in a Cube / SQLBI / RADACAD / Pragmatic Works**",
                "**dbt Fabric Adapter**(Analytics Engineer 実務)",
              ],
            },
            { type: "h3", text: "合格後のキャリアパス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**DP-700**: Fabric Data Engineer Associate(更に DE 専門化)",
                "**DP-100**: Azure Data Scientist Associate(ML 方向)",
                "**AZ-305**: Azure Solutions Architect Expert(全体設計)",
                "**AI-102**: Azure AI Engineer Associate(AI 統合)",
              ],
            },
            {
              type: "practical",
              title: "DP-600 のキャリア価値",
              body: "DP-600 は **dbt 系 Analytics Engineer の Microsoft 版** として今後数年間需要拡大が見込まれます。**PL-300 + DP-203 経験者**が取得すると、**Semantic Layer 専門のシニア BI / Analytics リード**へのステップとなります。**ETL から ELT、Synapse から Fabric** への変革期に最適なポジショニング。",
            },
            { type: "h3", text: "結びに" },
            {
              type: "p",
              text: "10 章で Fabric Analytics Engineer の全体像を概観しました。Fabric は SaaS / Open Format / AI 統合 という方向に Azure データ世界が再編される中心 ・ DP-600 はその習熟証明です。教科書と演習問題を反復しつつ、ぜひ Fabric Trial で実機を触りながら本番受験へ。",
            },
          ],
        },
      ],
    },
  ],
};
