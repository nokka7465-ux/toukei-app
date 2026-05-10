import type { Textbook } from "@/types/content";

export const azureDp203Textbook: Textbook = {
  levelSlug: "azure-dp-203",
  title: "Microsoft Azure Data Engineer Associate(DP-203)教科書",
  intro:
    "**Microsoft Certified: Azure Data Engineer Associate(DP-203)** は **Azure 上のデータエンジニアリングを設計 ・ 実装 ・ 運用** する Associate 認定。**Synapse Analytics ・ Data Factory ・ Databricks ・ Stream Analytics ・ Event Hubs ・ ADLS Gen2 ・ Cosmos DB ・ Purview** など Azure データプラットフォームの中核サービスを **取込 ・ 変換 ・ 保管 ・ 配信 ・ 監視 ・ ガバナンス** で問います。**AWS DEA-C01 ・ GCP Professional Data Engineer** と並ぶ三大クラウドの Data Engineer 認定の 1 つ。本教科書は 10 章で出題範囲を体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "DP-203 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 Azure データ系認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**DP-203** は Azure における **データエンジニア専用の Associate 認定**。**DP-100(Data Scientist)・ AI-102(AI Engineer)・ DP-300(DBA)** などとは出題範囲が異なり、**バッチ ETL ・ ストリーミング ・ DWH ・ Lake ・ ガバナンス** に特化。",
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
                "**前提知識**: SQL ・ Python / Scala ・ Azure 基本",
              ],
            },
            { type: "h3", text: "Azure データ系認定の位置付け" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Fundamentals**: DP-900(データの基礎)",
                "**Associate(DBA)**: DP-300(Azure SQL ・ DBA)",
                "**Associate(Data Scientist)**: DP-100",
                "**Associate(Data Engineer)**: DP-203(本資格)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "公式試験ガイドのスキル領域" },
            {
              type: "list",
              style: "number",
              items: [
                "**データストレージの設計 ・ 実装**(15〜20%)",
                "**データ処理の設計 ・ 開発**(40〜45%)",
                "**データセキュリティの設計 ・ 実装**(10〜15%)",
                "**データストレージ ・ 処理の監視 ・ 最適化**(25〜30%)",
              ],
            },
            { type: "h3", text: "100 〜 200 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1〜2**: Azure 基本 + ADLS Gen2 + Cosmos DB",
                "**Week 3〜4**: Synapse Analytics(Dedicated SQL Pool / Spark Pool / Serverless)",
                "**Week 5〜6**: Data Factory(Pipeline / Mapping Data Flow)",
                "**Week 7〜8**: Stream Analytics + Event Hubs + Databricks",
                "**Week 9〜10**: 模擬試験 + Microsoft Learn DP-203 ラーニングパス",
              ],
            },
            {
              type: "intuition",
              title: "DP-203 の本質は『Synapse + Data Factory』",
              body: "**Synapse Analytics** は DWH + Spark + Serverless SQL を 1 つの Workspace に統合した Microsoft の主力サービス。**Data Factory はオーケストレーション ・ Pipeline ・ Mapping Data Flow** を提供。**この 2 つを軸に、Streaming は Stream Analytics / Event Hubs、Lake は ADLS Gen2、ML 連携は Databricks** で補完するのが Azure データエンジニアリングの王道構成。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "ADLS Gen2 とストレージ基礎",
      overview:
        "Azure Data Lake Storage Gen2 ・ Blob Storage ・ Cosmos DB を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "ADLS Gen2 の特徴",
          blocks: [
            {
              type: "p",
              text: "**Azure Data Lake Storage Gen2(ADLS Gen2)** は **Blob Storage 上に構築された階層型ファイルシステム**。**Hierarchical Namespace(HNS)** を有効化することで POSIX ACL ・ ディレクトリ操作の原子性をサポート。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Hierarchical Namespace**: フォルダがファーストクラス、`mv` `rename` が原子的",
                "**ACL**: POSIX 形式(rwx)+ デフォルト ACL の継承",
                "**アクセス階層**: Hot / Cool / Cold / Archive",
                "**Lifecycle Policy**: 一定日数経過後に自動階層遷移 ・ 削除",
                "**ABFS ドライバ**: Spark / Hadoop からは `abfss://` プロトコルで接続",
              ],
            },
            {
              type: "intuition",
              title: "Blob と ADLS Gen2 の使い分け",
              body: "**HNS なし(従来 Blob)= オブジェクトストレージ**、**HNS 有り(ADLS Gen2)= 階層型ファイルシステム**。**分析(Synapse / Databricks / Hadoop)用途は ADLS Gen2 一択**。一般オブジェクト保管(Web 静的アセットなど)は HNS なし Blob。**HNS は後から有効化可能だが無効化は不可**。",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Cosmos DB",
          blocks: [
            {
              type: "p",
              text: "**Azure Cosmos DB** はグローバル分散 NoSQL。**5 つの API**(NoSQL / MongoDB / Cassandra / Gremlin / Table)と **5 つの整合性レベル** を提供。",
            },
            { type: "h3", text: "5 つの整合性レベル" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Strong**: 線形化、最も厳格 ・ 高レイテンシ",
                "**Bounded Staleness**: K 操作 / T 時間以内の遅延を保証",
                "**Session**: 同一セッションで read your writes(デフォルト ・ 推奨)",
                "**Consistent Prefix**: 操作順序のみ保証",
                "**Eventual**: 最終整合 ・ 最低レイテンシ ・ 最高可用性",
              ],
            },
            { type: "h3", text: "パーティションキーの選び方" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**カーディナリティが高い**(値の種類が多い)",
                "**読込 ・ 書込が均等に分散** する",
                "**論理パーティション 1 つあたり 20GB ・ 10000 RU/s 上限**",
                "**ホットパーティション** はアプリ全体の性能を律速する",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Azure Synapse Analytics",
      overview:
        "Synapse の 3 つのプール(Dedicated SQL / Serverless SQL / Spark)を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Dedicated SQL Pool",
          blocks: [
            {
              type: "p",
              text: "**Dedicated SQL Pool**(旧 SQL DW)は Synapse の **MPP 型 DWH**。**DWU(Data Warehouse Unit)単位で Pause / Resume** 可能。",
            },
            { type: "h3", text: "テーブル分散方式" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Hash Distribution**: 指定列でハッシュ分散、大規模ファクトテーブル向け",
                "**Round-Robin**: 均等分散、ステージングテーブル向け",
                "**Replicated**: 全 Distribution に複製、小規模ディメンション向け(2GB 未満が目安)",
              ],
            },
            { type: "h3", text: "インデックスとパーティション" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Clustered Columnstore Index(CCI)**: デフォルト ・ 高圧縮 ・ スキャン高速",
                "**Heap**: ステージング ・ ロード中継用",
                "**Partition**: 日付列 ・ 月単位でパーティション化、Switch でパーティション入替",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Serverless SQL Pool と Spark Pool",
          blocks: [
            { type: "h3", text: "Serverless SQL Pool" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Pay-per-query**(処理データ量 5 USD/TB 程度)",
                "**ADLS Gen2 上の Parquet / Delta / CSV / JSON に直接 SQL**",
                "**OPENROWSET / EXTERNAL TABLE / VIEW** で抽象化",
                "**Athena に相当する Azure サービス**",
              ],
            },
            { type: "h3", text: "Spark Pool" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Apache Spark フルマネージド**(自動スケール ・ 自動シャットダウン)",
                "**Delta Lake / Hive / Parquet** をネイティブサポート",
                "**Notebook(Synapse Studio)** + パイプライン連携",
                "**Spark Pool で書いたテーブルが Serverless SQL Pool から自動的に見える**(Lake Database)",
              ],
            },
            {
              type: "intuition",
              title: "Synapse 3 プールの使い分け",
              body: "**継続的に動く DWH**(BI ダッシュボード)= Dedicated SQL Pool。**アドホック ・ 探索的**(時々 Lake にクエリ)= Serverless SQL Pool。**ETL ・ ML 前処理 ・ Notebook**= Spark Pool。**3 つを単一 Workspace で行き来できる** のが Synapse の最大の利点。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Azure Data Factory(ADF)",
      overview:
        "Pipeline ・ Activity ・ Linked Service ・ Mapping Data Flow を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "ADF の構成要素",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Linked Service**: データソース ・ 計算先への接続定義",
                "**Dataset**: Linked Service 上の特定データセット定義",
                "**Pipeline**: Activity を組み合わせた実行単位",
                "**Activity**: 単一処理(Copy / Lookup / ForEach / If など)",
                "**Trigger**: 実行スケジュール(Time / Tumbling Window / Storage Event)",
                "**Integration Runtime(IR)**: 実行エンジン(Azure / Self-hosted / SSIS)",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Mapping Data Flow",
          blocks: [
            {
              type: "p",
              text: "**Mapping Data Flow** は ADF 内で動く **GUI ベース Spark ETL**。コード書きが不要で複雑なデータ変換を視覚的に構築。",
            },
            { type: "h3", text: "主な Transformation" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Source / Sink**: データソース ・ 出力先",
                "**Derived Column**: 列追加 ・ 演算",
                "**Aggregate**: GROUP BY 集計",
                "**Join / Lookup**: テーブル結合",
                "**Conditional Split**: 条件分岐で行を振り分け",
                "**Window**: 行番号 ・ 移動平均などのウィンドウ関数",
              ],
            },
            {
              type: "intuition",
              title: "Pipeline vs Mapping Data Flow",
              body: "**Pipeline は『ジョブのオーケストレーション』、Mapping Data Flow は『データ変換そのもの』**。Pipeline 内の 1 Activity として Mapping Data Flow を呼ぶ構成が定石。**Mapping Data Flow は裏で Spark クラスタを起動するため、起動オーバーヘッドあり**。**頻繁に走らせるなら Always-on の Spark Pool 推奨**。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "ストリーム処理 ─ Event Hubs と Stream Analytics",
      overview:
        "Event Hubs ・ IoT Hub ・ Stream Analytics を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Event Hubs と IoT Hub",
          blocks: [
            { type: "h3", text: "Event Hubs" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ビッグデータ向けストリーム取込基盤**(Kafka 互換 API も提供)",
                "**Partition**: 並列度の単位(2 〜 32)",
                "**保持期間**: 1 日(Standard)〜 90 日(Premium / Dedicated)",
                "**Capture**: ADLS Gen2 / Blob へ自動書き出し",
                "**Throughput Unit / Processing Unit**: 課金単位",
              ],
            },
            { type: "h3", text: "IoT Hub" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**IoT デバイス → クラウドの双方向通信** に特化",
                "**Device Twin / Direct Method / Cloud-to-Device** 機能",
                "**ルーティング**: メッセージを Event Hubs / Blob / Service Bus へ振り分け",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Azure Stream Analytics",
          blocks: [
            {
              type: "p",
              text: "**Azure Stream Analytics** は **SQL ライク言語(SAQL)で書くリアルタイム ETL**。Event Hubs / IoT Hub から取得 → 変換 → Synapse / Power BI / Cosmos DB / ADLS へ配信。",
            },
            { type: "h3", text: "ウィンドウ関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Tumbling Window**: 重複なし ・ 隙間なしの固定時間ウィンドウ",
                "**Hopping Window**: 重複あり ・ 一定間隔のウィンドウ",
                "**Sliding Window**: イベントが起こるたびにウィンドウ生成",
                "**Session Window**: 一定時間内の連続イベントを 1 ウィンドウに",
                "**Snapshot Window**: タイムスタンプ単位の集計",
              ],
            },
            {
              type: "intuition",
              title: "Stream Analytics vs Databricks Streaming",
              body: "**Stream Analytics は SQL でサクッと書く ・ サーバレス**。**Databricks Streaming は Python/Scala で複雑な処理 ・ ML 連携**。**Stream Analytics は Streaming Unit(SU)単位**、Databricks は **Cluster の DBU 単位** で課金。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Azure Databricks",
      overview:
        "Databricks Workspace ・ Delta Lake ・ Auto Loader を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Databricks Workspace",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workspace**: ノートブック ・ ジョブ ・ クラスタ ・ ライブラリの統合環境",
                "**Cluster**: All-Purpose(対話)・ Job(自動起動 ・ 終了)",
                "**SQL Warehouse**: Photon エンジンで BI クエリを高速化",
                "**Unity Catalog**: テーブル ・ ビュー ・ 関数のメタデータ ・ アクセス管理",
                "**Repos**: Git 連携でコードバージョン管理",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Delta Lake と Auto Loader",
          blocks: [
            { type: "h3", text: "Delta Lake の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ACID トランザクション**: 同時書込での整合性",
                "**Time Travel**: VERSION AS OF / TIMESTAMP AS OF で過去スナップショット",
                "**MERGE / UPDATE / DELETE**: Lake にトランザクショナル DML",
                "**Z-Order**: 多次元クラスタリングでスキャン削減",
                "**OPTIMIZE / VACUUM**: 小ファイル統合 ・ 古いファイル削除",
              ],
            },
            { type: "h3", text: "Auto Loader" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ADLS Gen2 / S3 上の新着ファイルを自動検出して取込**",
                "**ディレクトリリスト方式 / イベント通知方式** の 2 モード",
                "**スキーマ進化**: 新列 / 型変更を自動追従",
                "**Bronze 層への取込で標準的に使われる**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Lake Database と Medallion Architecture",
      overview:
        "Lake Database ・ Bronze/Silver/Gold ・ Delta Live Tables を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Medallion Architecture",
          blocks: [
            {
              type: "p",
              text: "**Medallion Architecture(Bronze / Silver / Gold)** は **データ品質を段階的に向上させる Lake 設計パターン**。Databricks 提唱、業界標準。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Bronze**: 生データを到着順にそのまま保存(無加工)",
                "**Silver**: クレンジング ・ 結合 ・ 重複排除済みのクリーンデータ",
                "**Gold**: ビジネス指標 ・ ダッシュボード ・ ML 用の集計済データ",
                "**変換は Delta Lake トランザクションで行うのが標準**",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Delta Live Tables(DLT)",
          blocks: [
            {
              type: "p",
              text: "**Delta Live Tables** は Databricks の **宣言的データパイプラインフレームワーク**。**SQL or Python でテーブル定義 → DLT が依存関係 ・ 増分処理 ・ データ品質チェックを自動管理**。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Streaming Live Table / Live Table** を関数で定義",
                "**Expectations**: データ品質ルール(`@dlt.expect_or_drop`)",
                "**自動スケール ・ 自動リカバリ ・ DAG 可視化**",
                "**Bronze → Silver → Gold パイプラインの実装に最適**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Power BI と Synapse 連携",
      overview:
        "Power BI と Synapse の DirectQuery ・ Aggregation を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Power BI 接続モード",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Import**: Power BI にデータをコピー、最高速 ・ サイズ上限あり",
                "**DirectQuery**: クエリのたびにソースに問合せ、リアルタイム ・ 遅め",
                "**Composite Model**: 一部 Import + 一部 DirectQuery",
                "**Aggregations**: 集計を Import、明細を DirectQuery で自動切替",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Synapse Link for Cosmos DB / Dataverse",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Synapse Link for Cosmos DB**: トランザクションシステムを ETL なしで分析",
                "**Synapse Link for Dataverse**: Dynamics 365 / Power Platform データを Synapse へ",
                "**HTAP(Hybrid Transactional/Analytical Processing)** を実現",
                "**ETL コピーが不要 → リアルタイム分析 ・ コスト最適**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "監視 ・ パフォーマンスチューニング",
      overview:
        "Azure Monitor ・ Log Analytics ・ クエリ最適化を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Azure Monitor と Log Analytics",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Metrics**: CPU / DWU / クエリ時間 / 失敗率",
                "**Logs(Log Analytics)**: KQL で詳細ログ検索",
                "**Alerts**: メトリクス / ログベースで通知",
                "**Application Insights**: アプリケーションパフォーマンス監視",
                "**Action Groups**: メール / SMS / Webhook / Logic Apps へ転送",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "クエリ最適化",
          blocks: [
            { type: "h3", text: "Synapse Dedicated SQL Pool" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**統計情報を自動更新**(AUTO_CREATE_STATISTICS / AUTO_UPDATE_STATISTICS)",
                "**Workload Management(Workload Group / Classifier)** でクエリの優先度 ・ リソース割当",
                "**Result Set Cache** で同一クエリ高速化",
                "**Materialized View** で集計を事前計算",
              ],
            },
            { type: "h3", text: "Spark Pool" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Auto Scale**: ノード数を動的に調整",
                "**Intelligent Cache**: 頻出データをノード SSD にキャッシュ",
                "**Adaptive Query Execution(AQE)**: 実行時に Plan 最適化",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "セキュリティ ・ ガバナンス",
      overview:
        "Microsoft Purview ・ Managed Identity ・ Private Link を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "Microsoft Purview",
          blocks: [
            {
              type: "p",
              text: "**Microsoft Purview** は **データカタログ + データガバナンス** の Azure 統合ソリューション。**Data Map ・ Data Catalog ・ Data Insights ・ Data Policy** の 4 層構造。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Data Map**: スキャナでメタデータ自動収集(Synapse / Cosmos / SQL / Power BI / 多数)",
                "**Data Catalog**: ビジネス用語集 ・ Glossary ・ 検索",
                "**Data Lineage**: ETL の系譜を可視化",
                "**Data Sensitivity Labels**: 機密度ラベルの自動付与",
                "**Data Policy**: アクセスポリシーを Catalog 単位で管理",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "セキュリティの実装",
          blocks: [
            { type: "h3", text: "認証 ・ ネットワーク" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Managed Identity**: シークレット不要で他 Azure リソースへアクセス",
                "**Private Endpoint**: Synapse / Storage / Cosmos を VNet 内に閉じ込める",
                "**Customer-Managed Keys(CMK)**: BYOK で暗号化",
                "**Always Encrypted with Secure Enclaves**: 機密列をクライアント側で暗号化",
              ],
            },
            { type: "h3", text: "列 ・ 行 ・ Dynamic Data Masking" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Column-Level Security**: GRANT で列単位アクセス制御",
                "**Row-Level Security(RLS)**: セキュリティポリシーで行単位フィルタ",
                "**Dynamic Data Masking**: クエリ時にロールベースで列をマスク",
              ],
            },
            {
              type: "intuition",
              title: "DP-203 受験の最終チェック",
              body: "**直前 1 週間**: Microsoft Learn の DP-203 ラーニングパスを再走 + Synapse 3 プールの使い分け表 + Stream Analytics ウィンドウ 4 種を暗記。**当日**: 問題文の **『リアルタイム』『スキャン量最小』『コスト最小』『DWU』『Streaming Unit』** といったキーワードに反応してサービス選定を即決。",
            },
          ],
        },
      ],
    },
  ],
};
