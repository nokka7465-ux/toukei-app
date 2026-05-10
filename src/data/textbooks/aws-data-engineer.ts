import type { Textbook } from "@/types/content";

export const awsDataEngineerTextbook: Textbook = {
  levelSlug: "aws-data-engineer",
  title: "AWS Certified Data Engineer - Associate(DEA-C01)教科書",
  intro:
    "**AWS Certified Data Engineer - Associate(DEA-C01)** は **2024 年に GA された AWS の新 Associate 認定** で、**Glue ・ EMR ・ Athena ・ Redshift ・ Kinesis ・ MSK ・ Lambda ・ Step Functions ・ Lake Formation** など AWS のデータエンジニアリングサービスを **データパイプライン設計 ・ データレイク / DWH 構築 ・ ストリーム処理 ・ オペレーション** の 4 ドメインで体系的に問います。**SAA(設計)・ MLA-C01 / MLS-C01(ML)** と並ぶ AWS 認定の重要 Associate で、**データエンジニアの登竜門** です。本教科書は 10 章で出題範囲を体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "DEA-C01 ─ 試験の全体像",
      overview:
        "試験形式・出題ドメイン・他 AWS データ系認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**DEA-C01** は **2024 年 3 月に GA** した AWS の新 Associate 認定。**旧 AWS Data Analytics Specialty(DAS-C01)の後継** とも言える位置付けで、**データレイクハウス時代** の AWS エンジニアに必要な **取込 ・ 変換 ・ 保管 ・ 分析 ・ ガバナンス** を測ります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Amazon Web Services(AWS)",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験",
                "**問題数 / 時間**: 65 問 / 130 分",
                "**回答方式**: 単一選択 + 複数選択 + 順序問題",
                "**合格スコア**: 720 / 1000",
                "**有効期限**: 3 年",
                "**受験料**: 150 USD(参考)",
                "**前提知識**: SQL ・ Python ・ AWS 基本(CLF レベル以上)",
              ],
            },
            { type: "h3", text: "AWS データ系認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundational**: AI Practitioner(AIF-C01)",
                "**Associate**: Data Engineer Associate(DEA-C01、本資格) / ML Engineer Associate(MLA-C01) / SAA",
                "**Specialty**: ML Specialty(MLS-C01)",
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
                "**Domain 1: Data Ingestion and Transformation**(34%): 取込 ・ 変換",
                "**Domain 2: Data Store Management**(26%): データレイク / DWH 設計",
                "**Domain 3: Data Operations and Support**(22%): オーケストレーション ・ 監視",
                "**Domain 4: Data Security and Governance**(18%): IAM ・ 暗号化 ・ Lake Formation",
              ],
            },
            { type: "h3", text: "100 〜 200 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1〜2**: AWS 基本 + S3 + IAM の復習",
                "**Week 3〜4**: Glue + Athena + Redshift",
                "**Week 5〜6**: Kinesis + MSK + Lambda + Step Functions",
                "**Week 7〜8**: Lake Formation + Data Mesh + DataZone",
                "**Week 9〜10**: 模擬試験 + Skill Builder",
              ],
            },
            {
              type: "intuition",
              title: "DEA-C01 の本質は『S3 中心 + サービス選び分け』",
              body: "**AWS のデータエンジニアリングは S3 をデータレイクの中心に据え、目的別に Glue / EMR / Redshift / Athena / Kinesis を組み合わせる**設計が王道。試験では **『この要件で最適なサービスは何か』** という選び分けが頻出。各サービスの **得意 ・ 不得意 ・ 価格モデル** を頭に入れることが鍵。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "S3 とデータレイク基礎",
      overview:
        "S3 ストレージクラス ・ パーティション ・ ファイルフォーマットを整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "S3 ストレージクラスとライフサイクル",
          blocks: [
            { type: "h3", text: "ストレージクラス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**S3 Standard**: 高頻度アクセス、最高コスト",
                "**S3 Standard-IA / One Zone-IA**: 低頻度アクセス、最低 30 日 ・ 128KB 制約",
                "**S3 Intelligent-Tiering**: アクセスパターンを自動学習し最適階層へ移動、月額モニタリング料あり",
                "**S3 Glacier Instant Retrieval**: ミリ秒取得 ・ 月数回",
                "**S3 Glacier Flexible / Deep Archive**: 数分〜数時間 ・ 数時間〜半日 で取り出し、長期アーカイブ用",
              ],
            },
            { type: "h3", text: "Lifecycle Rule" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Transition**: 一定日数経過後に低コスト階層へ移動",
                "**Expiration**: 一定日数経過後にオブジェクト削除",
                "**バージョニング有効時**: 過去バージョンも別ルールで管理",
                "**実装は『prefix / tag 単位』** で柔軟に絞り込み可能",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "ファイルフォーマットとパーティショニング",
          blocks: [
            { type: "h3", text: "列指向 vs 行指向" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Parquet**: 列指向 ・ Snappy / GZIP 圧縮 ・ プレディケートプッシュダウン対応、分析最適",
                "**ORC**: 列指向 ・ Hive 系で歴史的に優位 ・ ACID 対応",
                "**Avro**: 行指向 ・ スキーマ進化に強い、ストリーム取込に最適",
                "**JSON / CSV**: テキスト ・ パース重い ・ 圧縮非効率、変換中継のみ",
              ],
            },
            { type: "h3", text: "Hive 形式パーティショニング" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**`s3://bucket/table/year=2026/month=05/day=09/`** のキー設計",
                "**Athena / Glue / Spark で自動認識**(AWS Glue の MSCK REPAIR / Partition Projection)",
                "**Partition Projection**: パーティションメタデータをカタログに保持せず、テンプレートから動的解決(高速 ・ 低運用)",
                "**過剰パーティション**(秒単位など)は逆効果(small files 問題)",
              ],
            },
            {
              type: "intuition",
              title: "Small Files 問題と Compaction",
              body: "**Kinesis Firehose や Streaming Glue で大量の小ファイルが S3 に書かれる** とクエリが激遅になる。**Glue の compactionジョブ ・ Athena CTAS による Parquet 変換 ・ Apache Iceberg / Hudi の OPTIMIZE** で **128MB 〜 1GB 単位に圧縮するのが定石**。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "AWS Glue ─ ETL の中核",
      overview:
        "Glue Data Catalog ・ ETL Job ・ Crawler ・ DataBrew を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Glue Data Catalog と Crawler",
          blocks: [
            {
              type: "p",
              text: "**Glue Data Catalog** は AWS のデータカタログ(Hive Metastore 互換)。**Athena ・ Redshift Spectrum ・ EMR ・ Lake Formation** すべてが共通のメタデータとして参照する。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Database / Table / Partition / Connection** の 4 階層",
                "**Crawler**: S3 / RDS をスキャンしてスキーマを自動推論",
                "**スキーマバージョニング**: Crawler 実行のたびに新バージョン",
                "**料金**: 100 万オブジェクトまで無料、超過分は月額制",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Glue ETL Job と DataBrew",
          blocks: [
            { type: "h3", text: "Glue ETL Job の種類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Spark Job**: PySpark / Scala、最も一般的",
                "**Python Shell Job**: 軽量 Python スクリプト、Spark なしで動作",
                "**Streaming Job**: Kinesis / MSK からのストリーム ETL",
                "**Ray Job**: 分散 Python 処理",
              ],
            },
            { type: "h3", text: "Glue DPU と性能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**DPU(Data Processing Unit)**: 4 vCPU + 16GB RAM = 1 DPU",
                "**Standard / G.1X / G.2X / G.4X / G.8X** の Worker タイプ",
                "**Auto Scaling**: 動的に DPU を増減",
                "**Job Bookmarks**: 既処理データをスキップ、増分処理を可能に",
              ],
            },
            { type: "h3", text: "Glue DataBrew" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ノーコード ・ ビジュアル ETL**: 250 種以上の組込変換",
                "**プロファイリング**: データ品質メトリクスを自動算出",
                "**Recipe**: 変換手順を再利用可能なレシピとして保存",
                "**Glue Studio との違い**: Studio は Spark コード生成、DataBrew は GUI 完結",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Athena と Redshift",
      overview:
        "サーバレス分析 Athena と DWH の Redshift を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Athena",
          blocks: [
            {
              type: "p",
              text: "**Athena** は **S3 上のデータに直接 SQL を投げるサーバレス分析サービス**(Presto / Trino エンジン)。**スキャン量 5 USD / TB** という従量課金。",
            },
            { type: "h3", text: "コスト最適化テクニック" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**列指向(Parquet / ORC)で書く** → 不要列をスキップ",
                "**パーティション + Predicate Pushdown** → 必要パーティションのみスキャン",
                "**圧縮(Snappy / GZIP / ZSTD)** → スキャン量 30〜80% 削減",
                "**CTAS で集計表を Parquet 化** → 後続クエリ高速化",
                "**Workgroup でクエリ単位の上限** → 暴走クエリ防止",
              ],
            },
            { type: "h3", text: "Athena Federated Query" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**RDBMS / DocumentDB / Redshift / DynamoDB / CloudWatch Logs** などに対し SQL でクエリ",
                "**Lambda コネクタ**経由で実装",
                "**S3 + 他データソースの JOIN** が 1 クエリで可能",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Redshift",
          blocks: [
            {
              type: "p",
              text: "**Redshift** は AWS の **列指向 MPP 型 DWH**。**Provisioned(クラスタ管理)** と **Serverless(自動スケール)** の 2 モード。",
            },
            { type: "h3", text: "分散方式とソートキー" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Distribution Style**: KEY(指定列でハッシュ分散)/ ALL(全ノードに複製)/ EVEN(ラウンドロビン)/ AUTO",
                "**Sort Key**: COMPOUND(複合)/ INTERLEAVED(複数列の優先度同等)",
                "**JOIN するテーブル間で同じ KEY 分散** → コロケート JOIN(高速)",
                "**マスター(小)+ ディメンション = ALL**、**ファクト(大)= KEY** が定石",
              ],
            },
            { type: "h3", text: "Redshift Spectrum と Federated Query" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Spectrum**: S3 を Redshift クラスタから外部テーブルとして読む(Athena と同等のエンジン)",
                "**Federated Query**: RDS / Aurora を直接 SQL でクエリ",
                "**Data Sharing**: クラスタ間でデータを共有(コピー不要)",
                "**Streaming Ingestion**: Kinesis / MSK から直接マテビューに取込",
              ],
            },
            {
              type: "intuition",
              title: "Athena か Redshift か",
              body: "**アドホック ・ 探索的 ・ 月数 GB 〜 TB** なら Athena。**継続 BI ・ ダッシュボード ・ 同時実行多 ・ TB 〜 PB** なら Redshift。**両者の境界が曖昧** で、Spectrum 経由で両方併用するのが実務的。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "EMR と Spark / Hadoop エコシステム",
      overview:
        "EMR の構成 ・ Hadoop / Spark / Hive / Presto を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "EMR のクラスタ構成",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Master Node**: クラスタ管理 ・ NameNode / ResourceManager 兼務",
                "**Core Node**: HDFS データ + 計算",
                "**Task Node**: 計算のみ(HDFS なし)、Spot で安く拡張",
                "**EMR Serverless**: クラスタレスで Spark / Hive を実行、運用ゼロ",
                "**EMR on EKS**: Kubernetes 上で EMR を動かし、リソース共有",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "S3 と HDFS の使い分け",
          blocks: [
            {
              type: "p",
              text: "**EMR では HDFS よりも S3 を直接読み書きするのが標準**(EMRFS)。HDFS は **シャッフルや一時ファイル用** に短期で使う。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**EMRFS Consistent View**: S3 の結果整合性問題を吸収(現在は S3 自身が強整合のため不要)",
                "**EMRFS S3 Select**: クエリ条件を S3 にプッシュダウン",
                "**Hive on Tez / Spark / Presto** から S3 上のテーブルへ直接アクセス",
              ],
            },
            {
              type: "intuition",
              title: "Glue Spark Job vs EMR",
              body: "**サーバレス ・ 短時間 ・ 軽量** なら Glue。**長時間 ・ 大規模 ・ 細かいチューニング** なら EMR。**EMR Serverless が両者の中間** を埋める存在。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "ストリーム処理 ─ Kinesis と MSK",
      overview:
        "Kinesis Data Streams / Firehose / Managed Service for Apache Flink ・ MSK を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Kinesis Family",
          blocks: [
            { type: "h3", text: "Kinesis Data Streams" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Provisioned mode**: シャード単位課金、シャード = 1MB/s in / 2MB/s out",
                "**On-demand mode**: 自動スケール、運用楽 ・ 高単価",
                "**保持期間**: 1 日〜365 日",
                "**Enhanced Fan-Out**: コンシューマごとに 2MB/s 専有(複数 Lambda などで活用)",
              ],
            },
            { type: "h3", text: "Kinesis Data Firehose" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**フルマネージド ・ サーバレス** な配信サービス",
                "**宛先**: S3 / Redshift / OpenSearch / Splunk / カスタム HTTP",
                "**バッファリング**: サイズ(MB)or 時間(秒)で出力",
                "**変換**: Lambda で行単位変換、Parquet / ORC への変換も組込対応",
                "**Apache Iceberg テーブルへの直接配信** にも対応(2024 GA)",
              ],
            },
            { type: "h3", text: "Managed Service for Apache Flink" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**旧 Kinesis Data Analytics**、Apache Flink ベースのリアルタイム ETL / 集計 / 結合",
                "**SQL / Python / Java / Scala** で実装",
                "**ステートフル処理 ・ ウィンドウ集計 ・ JOIN** が得意",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "MSK(Managed Streaming for Apache Kafka)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Provisioned**: ブローカー数 ・ サイズを指定",
                "**MSK Serverless**: 自動スケール、運用ゼロ",
                "**MSK Connect**: Kafka Connect マネージド版、Debezium 等のコネクタ実行",
                "**統合**: Kinesis Data Firehose / Lambda / Glue Streaming",
              ],
            },
            {
              type: "intuition",
              title: "Kinesis vs MSK",
              body: "**AWS ネイティブ ・ サーバレス完結** なら Kinesis。**Kafka エコシステム(Schema Registry / Connect / KSQL)を活かしたい ・ オンプレ Kafka からの移行** なら MSK。**料金 ・ 運用負荷 ・ スキル相性** で判断。",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "オーケストレーション ─ Step Functions / MWAA / EventBridge",
      overview:
        "ワークフローオーケストレーションの 3 大選択肢を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Step Functions",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ステートマシン定義(Amazon States Language / JSON)** でワークフローを記述",
                "**Standard Workflow**: 最大 1 年実行、ETL ・ バッチ向け",
                "**Express Workflow**: 5 分以内 ・ 高頻度、リアルタイム ・ Lambda 連携向け",
                "**直接統合**: Glue / EMR / Athena / SageMaker / Lambda などをコードレスで呼び出し",
                "**並列処理(Map state)・ エラーリトライ ・ Catch / Choice** がネイティブ",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "MWAA(Managed Workflows for Apache Airflow)と EventBridge",
          blocks: [
            { type: "h3", text: "MWAA" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Apache Airflow のフルマネージド版**(Python の DAG)",
                "**長年の Airflow 資産 ・ オープンソース連携** を活かしたい場合に最適",
                "**コスト**: ワーカー ・ スケジューラ常時稼働で Step Functions より高め",
              ],
            },
            { type: "h3", text: "EventBridge" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Event Bus**: AWS / SaaS / カスタムイベントを集約",
                "**Scheduler**: cron / rate での定期実行(Cron 専用に EventBridge Scheduler が GA)",
                "**Pipes**: ソース → 任意の変換 → ターゲット の no-code 連携",
                "**S3 イベント駆動 ETL** の中核",
              ],
            },
            {
              type: "intuition",
              title: "Step Functions vs MWAA",
              body: "**AWS サービス連携 ・ サーバレス ・ コスト** なら Step Functions。**Python DAG ・ コミュニティオペレータ ・ ハイブリッドクラウド** なら MWAA。**両者を併用**(MWAA から Step Functions を呼ぶ)も実務では一般的。",
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Apache Iceberg / Hudi / Delta Lake と Lakehouse",
      overview:
        "オープンテーブルフォーマットと Lakehouse 概念を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "オープンテーブルフォーマット",
          blocks: [
            {
              type: "p",
              text: "**Apache Iceberg / Hudi / Delta Lake** は **S3 + Parquet を ACID トランザクション + スキーマ進化 + タイムトラベル + マージ** に対応させるオープンテーブルフォーマット。**AWS は Iceberg をファースト** にサポート。",
            },
            { type: "h3", text: "Iceberg の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ACID トランザクション**: 同時書込での整合性保証",
                "**スキーマ進化**: 列追加 ・ 名前変更 ・ 型変更が安全",
                "**Time Travel**: 過去スナップショットへのクエリ",
                "**Hidden Partitioning**: パーティション式を内部で管理(クエリ時の SQL で意識不要)",
                "**Row-Level Operations**: UPDATE / DELETE / MERGE INTO サポート",
              ],
            },
            { type: "h3", text: "AWS での Iceberg 統合" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Glue Data Catalog**: Iceberg テーブルをネイティブ管理",
                "**Athena Engine v3**: Iceberg DDL / DML 対応",
                "**EMR Spark / Glue Spark**: Iceberg ライブラリ込みで起動可能",
                "**Redshift**: 外部 Iceberg テーブル読込対応",
                "**Firehose**: Iceberg テーブルへ直接配信",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Lake Formation と Lakehouse",
          blocks: [
            { type: "h3", text: "Lake Formation の役割" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**列レベル / 行レベル / セル レベル** のアクセス制御",
                "**LF-Tag によるタグベースポリシー**: 部署 ・ センシティビティ単位の権限管理",
                "**クロスアカウントデータ共有**: アカウント間での安全な共有",
                "**Glue Data Catalog 上に重ねて使う**(IAM 単独より細かい制御)",
              ],
            },
            { type: "h3", text: "DataZone(Data Mesh)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ドメイン単位のデータカタログ ・ ガバナンス**",
                "**Data Producer ・ Consumer のセルフサービス**",
                "**Data Mesh アーキテクチャ** を AWS で実装する標準サービス",
              ],
            },
            {
              type: "intuition",
              title: "Lakehouse の本質",
              body: "**Data Lake(柔軟だが弱整合)+ DWH(整合だが固い)= Lakehouse(両方を兼ねる)** という思想。**AWS では『S3 + Iceberg + Glue Catalog + Athena / Redshift Spectrum』** が Lakehouse の標準スタック。",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "オペレーション ・ 監視",
      overview:
        "CloudWatch ・ CloudTrail ・ CloudFormation ・ コスト管理を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "CloudWatch と CloudTrail",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**CloudWatch Metrics**: ジョブ実行数 ・ エラー率 ・ Glue DPU 使用率 ・ Redshift CPU など",
                "**CloudWatch Logs**: Glue / Lambda / EMR のログ",
                "**CloudWatch Alarms**: 閾値超過で SNS 通知 → Lambda / Slack",
                "**CloudWatch Logs Insights**: ログを SQL ライクにクエリ",
                "**CloudTrail**: API コール監査(誰がいつ何を実行したか)",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "IaC とコスト管理",
          blocks: [
            { type: "h3", text: "IaC の選択肢" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**CloudFormation**: AWS ネイティブ、宣言的 YAML / JSON",
                "**AWS CDK**: TypeScript / Python から CloudFormation 生成、抽象度高",
                "**Terraform**: マルチクラウド標準",
                "**SAM**: サーバレス特化(Lambda / API Gateway / Step Functions)",
              ],
            },
            { type: "h3", text: "コスト最適化" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**S3 Storage Lens**: 全アカウント横断のストレージ可視化",
                "**Cost Explorer / Budgets**: 月次コストとアラート",
                "**Trusted Advisor**: 未使用リソースの提案",
                "**Athena Workgroup の課金タグ**: チーム単位コスト集計",
                "**Redshift RA3 + 自動 Pause**: クラスタ非利用時にコンピュート停止",
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
        "IAM ・ KMS ・ VPC Endpoint ・ PII マスキングを整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "IAM と暗号化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**IAM Role + Bucket Policy** の組み合わせで S3 アクセス制御",
                "**KMS(SSE-KMS)**: AWS マネージド or Customer-Managed キー",
                "**S3 Bucket Keys**: KMS 呼び出し回数を削減しコスト最適化",
                "**Glue / Athena / Redshift** すべて KMS 統合",
                "**Field-Level Encryption**: アプリ層で機微列のみ暗号化(Lambda + KMS)",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "ネットワーク隔離と PII マスキング",
          blocks: [
            { type: "h3", text: "VPC Endpoint(PrivateLink)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Gateway Endpoint**: S3 / DynamoDB(無料)",
                "**Interface Endpoint**: その他 AWS サービス(時間課金 + データ転送)",
                "**インターネットを通さず VPC 内から AWS API を呼ぶ**",
                "**Glue Connection** で Redshift / RDS を VPC 内から接続",
              ],
            },
            { type: "h3", text: "PII / 機微情報の取り扱い" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Amazon Macie**: S3 内の PII / 機微情報を ML ベースで自動検出",
                "**Glue DataBrew**: マスキング ・ ハッシュ化の組込変換",
                "**Lake Formation 列レベル制御**: PII 列を見える人だけに開示",
                "**Redshift Dynamic Data Masking**: クエリ時にロールベースで列をマスク",
              ],
            },
            {
              type: "intuition",
              title: "DEA-C01 受験の最終チェック",
              body: "**直前 1 週間**: Skill Builder の DEA-C01 公式問題集を 2 周。**サービス選び分け表**(Glue vs EMR、Athena vs Redshift、Kinesis vs MSK、Step Functions vs MWAA)を自分の言葉でまとめ直す。**当日**: 問題文の **『リアルタイム』『コスト最小』『運用ゼロ』『大規模』** といったキーワードに反応してサービスを瞬時に選別。",
            },
          ],
        },
      ],
    },
  ],
};
