import type { Textbook } from "@/types/content";

export const gcpDataEngineerTextbook: Textbook = {
  levelSlug: "gcp-data-engineer",
  title: "GCP Professional Data Engineer 教科書",
  intro:
    "**Google Cloud Certified Professional Data Engineer** は Google Cloud(GCP)上のデータエンジニアリング **Professional レベル** 認定。**BigQuery ・ Dataflow ・ Dataproc ・ Pub/Sub ・ Cloud Composer ・ Cloud Storage ・ Bigtable ・ Spanner ・ Looker ・ Dataplex** を **データシステムの設計 ・ 取込 / 変換 ・ 保管 ・ 分析 / ML 統合 ・ 信頼性 / 自動化 / 監視 ・ セキュリティ / コンプライアンス** で問います。**AWS DEA-C01 ・ Azure DP-203** と並ぶ三大クラウド Data Engineer 認定の 1 つ。本教科書は 10 章で出題範囲を体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "GCP Data Engineer ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 GCP 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**GCP Professional Data Engineer** は **Professional レベル** で **GCP データエンジニアリングの最重要認定**。**BigQuery 中心の GCP データプラットフォーム** を理解し、**取込 ・ 変換 ・ 保管 ・ 分析 ・ ML 統合 ・ ガバナンス** を設計実装できることを測ります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Google Cloud",
                "**形式**: CBT(Kryterion)or オンライン監督受験",
                "**問題数 / 時間**: 50〜60 問 / 120 分",
                "**回答方式**: 単一選択 + 複数選択 + ケーススタディ",
                "**合格スコア**: 非公開(70% 程度が目安)",
                "**有効期限**: 2 年",
                "**受験料**: 200 USD(参考)",
                "**前提知識**: SQL ・ Python / Java ・ GCP 基本(Cloud Engineer 相当)",
              ],
            },
            { type: "h3", text: "GCP データ系認定の位置付け" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundational**: Cloud Digital Leader",
                "**Associate**: Associate Cloud Engineer / Associate Data Practitioner",
                "**Professional(Data Engineer、本資格)**: GCP DE の主力",
                "**Professional(ML Engineer)**: ML 特化の上位",
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
                "**データ処理システムの設計**(22%)",
                "**データの取込 ・ 処理**(25%)",
                "**データの保管**(20%)",
                "**分析 ・ AI 用のデータの準備**(15%)",
                "**ワークフロー ・ 信頼性 ・ 自動化**(18%)",
              ],
            },
            { type: "h3", text: "100 〜 200 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1〜2**: GCP 基本 + Cloud Storage + IAM",
                "**Week 3〜4**: BigQuery(分割表 / クラスタリング / マテビュー / BQML)",
                "**Week 5〜6**: Dataflow + Dataproc + Pub/Sub",
                "**Week 7〜8**: Cloud Composer + Bigtable + Spanner + Looker",
                "**Week 9〜10**: 模擬試験 + 公式 Skill Boost",
              ],
            },
            {
              type: "intuition",
              title: "GCP Data Engineer の本質は『BigQuery 中心 + サーバレス』",
              body: "**GCP のデータ基盤は BigQuery を中心** に、**取込は Pub/Sub + Dataflow / Storage Transfer、ETL は Dataflow(Apache Beam)、ML は BQML / Vertex AI、可視化は Looker** という構成が王道。**サーバレス志向** で運用負荷が低いのが GCP の強み。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "BigQuery ─ GCP データプラットフォームの中心",
      overview:
        "BigQuery のアーキテクチャ ・ 課金 ・ 分割テーブル ・ クラスタリングを整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "アーキテクチャと課金",
          blocks: [
            {
              type: "p",
              text: "**BigQuery** は **サーバレス ・ 列指向 ・ MPP 型 DWH**。**Storage と Compute が完全分離** され独立にスケール。**Dremel エンジン**(Google 内部 PB 級分析の派生)と **Colossus(分散ストレージ)** で構成。",
            },
            { type: "h3", text: "課金モデル" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**On-demand クエリ**: スキャン量 6.25 USD / TB(リージョンにより異なる)",
                "**Capacity-based(Editions)**: Slot 単位の月額(Standard / Enterprise / Enterprise Plus)",
                "**Storage**: Active(0.02 USD/GB)と Long-term(0.01 USD/GB、90 日未更新で自動移行)",
                "**Streaming Insert**: 0.01 USD / 200MB(現在は **BigQuery Storage Write API** が推奨)",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "分割テーブル(Partitioned)とクラスタリング",
          blocks: [
            { type: "h3", text: "分割テーブル" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Time-Unit Column**: DATE / TIMESTAMP / DATETIME 列で分割(時間 ・ 日 ・ 月 ・ 年)",
                "**Ingestion Time**: 取込時刻で自動分割(`_PARTITIONTIME`)",
                "**Integer Range**: 整数列の範囲で分割",
                "**Partition Pruning**: WHERE 句で対象パーティションのみスキャン",
                "**最大 4000 パーティション / テーブル**",
              ],
            },
            { type: "h3", text: "クラスタリング" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**最大 4 列までクラスタキー指定**",
                "**ブロック単位のソート + メタデータ**",
                "**Block Pruning** で WHERE / JOIN / GROUP BY を高速化",
                "**分割 + クラスタリング併用** が定石",
              ],
            },
            {
              type: "intuition",
              title: "コスト最適化の鉄則",
              body: "**`SELECT *` 禁止 ・ 必要列のみ ・ WHERE で分割列とクラスタ列を絞る** の 3 つで **スキャン量を 90% 以上削減** 可能。**`bq query --dry_run` で事前にスキャン量を確認** する習慣が必須。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "BigQuery 高度機能",
      overview:
        "Materialized View ・ BI Engine ・ BQML ・ Object Tables を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Materialized View と BI Engine",
          blocks: [
            { type: "h3", text: "Materialized View(マテビュー)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**集計結果を物理的に保存** + 自動増分更新",
                "**スマートルーティング**: 元クエリを自動で MView に書き換え",
                "**JOIN ・ サブクエリも対応**(2024 以降)",
                "**頻繁な集計クエリのコストを 90% 以上削減**",
              ],
            },
            { type: "h3", text: "BI Engine" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**インメモリ高速分析エンジン**(BigQuery 内蔵)",
                "**Looker Studio / 外部 BI ツールから自動利用**",
                "**サブセカンドクエリ応答**",
                "**予約 GB 単位の月額課金**",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "BQML と Object Tables",
          blocks: [
            { type: "h3", text: "BQML(BigQuery ML)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SQL でモデル学習 / 推論**(`CREATE MODEL`)",
                "**Linear / Logistic / Boosted Tree / DNN / AutoML / Time Series(ARIMA+)** をサポート",
                "**Vertex AI モデル ・ Gemini も BQML 経由で呼び出し可能**(`ML.GENERATE_TEXT` 等)",
                "**ML.PREDICT / ML.EVALUATE / ML.EXPLAIN_PREDICT** で評価 ・ 解釈",
              ],
            },
            { type: "h3", text: "Object Tables(非構造化データ統合)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Cloud Storage 上の画像 / 動画 / PDF を BigQuery のテーブルとして扱う**",
                "**ML.GENERATE_TEXT / ML.PROCESS_DOCUMENT** で生成 AI と統合",
                "**マルチモーダル分析の中核**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Cloud Storage と Bigtable / Spanner",
      overview:
        "GCS の階層 ・ Bigtable のスキーマ設計 ・ Spanner の特徴を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Cloud Storage(GCS)",
          blocks: [
            { type: "h3", text: "ストレージクラス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Standard**: 高頻度アクセス、最高コスト",
                "**Nearline**: 月 1 回未満アクセス、最低 30 日保管",
                "**Coldline**: 90 日に 1 回未満、最低 90 日保管",
                "**Archive**: 年 1 回未満、最低 365 日保管",
                "**Object Lifecycle**: 一定日数経過で自動階層遷移 ・ 削除",
              ],
            },
            { type: "h3", text: "アクセス制御" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Uniform bucket-level access**: IAM のみ(推奨 ・ 新規デフォルト)",
                "**Fine-grained access**: IAM + ACL 併用(レガシー)",
                "**Signed URL**: 一時的に署名付きアクセス",
                "**VPC Service Controls**: VPC 境界でデータ持出を防止",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Bigtable と Spanner",
          blocks: [
            { type: "h3", text: "Bigtable" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ペタバイト級 NoSQL ・ 単一行 ACID**",
                "**HBase API 互換**",
                "**スキーマ設計**: ホットスポット回避(行キーは時系列の昇順を避ける)",
                "**用途**: 時系列メトリクス / IoT / 金融取引履歴",
              ],
            },
            { type: "h3", text: "Spanner" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**グローバル分散 RDB ・ ACID + 強整合 + 水平スケール**",
                "**TrueTime API** による線形化保証",
                "**Interleaved Tables**: 親子テーブルの物理的局所性",
                "**用途**: グローバル金融 ・ 在庫管理 ・ 大規模トランザクション",
                "**コスト**: ノード単位の月額(Bigtable より高単価)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Dataflow ─ Apache Beam による ETL",
      overview:
        "Apache Beam の概念 ・ Dataflow Templates ・ Streaming を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Apache Beam の基本",
          blocks: [
            {
              type: "p",
              text: "**Dataflow** は **Apache Beam ベースのフルマネージド ETL ・ ストリーム処理**。**バッチとストリームを同一コード** で扱える(Unified Model)。",
            },
            { type: "h3", text: "Beam の中核概念" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Pipeline**: 全体の処理グラフ",
                "**PCollection**: 不変の分散データセット",
                "**PTransform**: PCollection を変換する操作(ParDo / GroupByKey / Window)",
                "**Window**: イベント時刻でデータを分割(Fixed / Sliding / Session)",
                "**Trigger**: ウィンドウの結果を出力するタイミング",
                "**Watermark**: イベント時刻の進行度",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Dataflow Templates と Runner",
          blocks: [
            { type: "h3", text: "Templates" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Classic / Flex Templates**: パラメータ化された Dataflow ジョブを再利用",
                "**Google 提供 Templates**: Pub/Sub→BigQuery / GCS→BigQuery / JDBC→BigQuery など多数",
                "**起動が高速**(コンパイル不要)",
              ],
            },
            { type: "h3", text: "Streaming Engine と Shuffle Service" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Streaming Engine**: ストリーム処理の状態を Worker から分離 → 自動スケール ・ 信頼性向上",
                "**Shuffle Service**: バッチのシャッフルを別サービスに分離 → メモリ ・ ディスク負荷軽減",
                "**いずれもデフォルトで有効化推奨**",
              ],
            },
            {
              type: "intuition",
              title: "Dataflow vs Dataproc",
              body: "**サーバレス ・ Beam モデル ・ ストリーム ・ バッチ統合** なら Dataflow。**既存 Spark / Hadoop 資産 ・ Hive ・ Presto** なら Dataproc。**新規プロジェクトはほぼ Dataflow + BigQuery が王道**。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Pub/Sub と Streaming",
      overview:
        "Pub/Sub の Topic / Subscription と配信保証を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Pub/Sub の基本",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Topic**: メッセージのパブリッシュ先",
                "**Subscription**: メッセージを取り出す単位(同一 Topic に複数 Subscription)",
                "**Pull / Push**: Subscriber がポーリング or HTTPS Push で受信",
                "**配信保証**: At-least-once(デフォルト)、Exactly-once delivery(オプション)",
                "**Ordering Key**: 順序保証が必要な場合に指定",
                "**Dead Letter Topic**: 配信失敗メッセージの隔離",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Pub/Sub Lite と Pub/Sub BigQuery Subscription",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Pub/Sub Lite**: ゾーン単位の低コスト版(Pub/Sub の 1/10 コスト)、Kafka 互換",
                "**BigQuery Subscription**: Pub/Sub から BigQuery へ直接書込(Dataflow 不要)",
                "**Cloud Storage Subscription**: GCS へ直接書込",
              ],
            },
            {
              type: "intuition",
              title: "Pub/Sub vs Kafka",
              body: "**サーバレス ・ GCP ネイティブ統合 ・ グローバル** なら Pub/Sub。**Kafka エコシステム(Connect / KSQL / Schema Registry)を活かしたい** なら **GKE 上の Confluent Cloud / Strimzi** を検討。",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Dataproc ─ Spark / Hadoop マネージド",
      overview:
        "Dataproc Cluster ・ Serverless Spark ・ Workflow Templates を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Dataproc Cluster",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Hadoop / Spark / Hive / Presto / Pig / Tez を 90 秒で起動**",
                "**Master + Worker + Preemptible(Secondary)Worker** 構成",
                "**Initialization Actions**: 起動時のカスタムスクリプト",
                "**Optional Components**: Jupyter / Zeppelin / Druid / Flink",
                "**Autoscaling**: Workload に応じて Worker 数を調整",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Dataproc Serverless と Workflow",
          blocks: [
            { type: "h3", text: "Dataproc Serverless for Spark" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**クラスタプロビジョニング不要 ・ サーバレス** で PySpark / Spark SQL を実行",
                "**バッチワークロードに最適**",
                "**BigQuery / GCS 直接読書き ・ Dataproc Metastore 連携**",
              ],
            },
            { type: "h3", text: "Workflow Templates" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ジョブの DAG をテンプレート化** し再利用",
                "**Cluster Selector**: 既存クラスタ ・ 新規エフェメラルクラスタを選択",
                "**Cloud Composer / Cloud Scheduler から起動可能**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Cloud Composer と Workflows",
      overview:
        "オーケストレーションの 3 大選択肢を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Cloud Composer",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Apache Airflow フルマネージド版**(Python の DAG)",
                "**GKE 上で動作**、ただし Composer 2 / 3 ではユーザーから隠蔽",
                "**Operators**: BigQuery / Dataflow / Dataproc / GCS など豊富",
                "**Sensors**: 外部条件待ち(ファイル到着 / BQ パーティション)",
                "**長年の Airflow 資産 ・ 豊富な Operators** が強み",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Workflows と Cloud Scheduler",
          blocks: [
            { type: "h3", text: "Workflows" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**サーバレス ・ YAML / JSON でステートマシン定義**",
                "**GCP サービスを HTTP で連携**",
                "**Step Functions に相当する GCP サービス**",
                "**Composer より軽量 ・ コスト最適**",
              ],
            },
            { type: "h3", text: "Cloud Scheduler" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Cron 形式の定期実行**",
                "**HTTP / Pub/Sub / App Engine をターゲット**",
                "**Workflows / Cloud Functions / Cloud Run と組合せ** で簡易オーケストレーション",
              ],
            },
            {
              type: "intuition",
              title: "Composer vs Workflows",
              body: "**Python DAG ・ 複雑な依存関係 ・ Operators 活用** なら Composer。**サーバレス ・ シンプル ・ HTTP 中心 ・ コスト重視** なら Workflows。**両者を併用**(Composer から Workflows を呼ぶ)も可能。",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "Looker / Looker Studio と BI",
      overview:
        "BI ツール 2 種と LookML / Explore を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Looker と LookML",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Looker**: エンタープライズ BI、**LookML(モデリング言語)で意味層を定義**",
                "**Explore / View / Model**: 階層構造でデータモデル管理",
                "**バージョン管理**: Git 連携で LookML をコード管理",
                "**Looker Modeler**: BigQuery など外部 BI ツールでも LookML を活用",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "Looker Studio(旧 Data Studio)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**無料 BI ツール**(個人 ・ チーム向け)",
                "**BigQuery / Sheets / SaaS 多数のコネクタ**",
                "**BI Engine 連携で高速応答**",
                "**Looker Studio Pro**: 組織管理 ・ サポート ・ Looker 連携",
              ],
            },
            {
              type: "intuition",
              title: "Looker vs Looker Studio",
              body: "**エンタープライズ ・ 意味層 ・ 大規模ガバナンス** なら Looker。**簡易ダッシュボード ・ 個人 ・ 無料** なら Looker Studio。**Power BI / Tableau に相当する GCP の BI 二兎**。",
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "Dataplex ・ ガバナンス ・ セキュリティ",
      overview:
        "Dataplex ・ DLP ・ VPC Service Controls ・ CMEK を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "Dataplex とデータガバナンス",
          blocks: [
            {
              type: "p",
              text: "**Dataplex** は **GCP の Data Mesh / データガバナンス統合プラットフォーム**。**Lake / Zone / Asset** の 3 階層で物理ロケーションを抽象化。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Lake**: ビジネスドメイン単位",
                "**Zone**: Raw(生)・ Curated(整形済)などのデータ階層",
                "**Asset**: GCS Bucket / BigQuery Dataset を Zone 配下に登録",
                "**Data Catalog 統合**: メタデータ自動検出 ・ 検索 ・ Lineage",
                "**Data Quality**: ルールベースの品質チェック",
                "**Auto Discovery**: Hive スタイルパーティションを自動認識し BigQuery 外部テーブル作成",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "DLP ・ VPC Service Controls ・ CMEK",
          blocks: [
            { type: "h3", text: "DLP(Sensitive Data Protection)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**150+ infoType**(クレジットカード ・ 氏名 ・ 住所 ・ パスポート等)を ML ベースで自動検出",
                "**De-identification**: マスキング ・ ハッシュ化 ・ 形式保存暗号化",
                "**BigQuery / GCS / Datastream に統合**",
              ],
            },
            { type: "h3", text: "VPC Service Controls" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**サービス境界(perimeter)** で BigQuery / GCS / Pub/Sub の API を保護",
                "**境界外からのアクセス遮断** + Access Levels で細かい例外設定",
                "**データ持出(exfiltration)対策の中核**",
              ],
            },
            { type: "h3", text: "CMEK / CSEK" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**CMEK**: Customer-Managed Encryption Key(Cloud KMS で管理)",
                "**CSEK**: Customer-Supplied Encryption Key(顧客自身が鍵を持つ)",
                "**BigQuery / GCS / Compute / Pub/Sub** すべてに適用可能",
              ],
            },
            {
              type: "intuition",
              title: "GCP DE 受験の最終チェック",
              body: "**直前 1 週間**: Skill Boost の Data Engineer Learning Path を再走 + サービス選び分け表(Dataflow vs Dataproc、Pub/Sub vs Pub/Sub Lite、Composer vs Workflows、Bigtable vs Spanner)を頭に焼き付ける。**当日**: 問題文の **『リアルタイム』『コスト最小』『グローバル』『サーバレス』『PB 級』** といったキーワードに反応してサービス即決。",
            },
          ],
        },
      ],
    },
    {
      id: "ch11",
      number: 11,
      title: "2024-2025 GCP Data 最新動向",
      overview: "BigQuery Continuous Queries / Gemini for BigQuery / Dataform / Dataplex Universal Catalog / Pub/Sub 新機能。",
      sections: [
        {
          id: "ch11-sec1",
          number: "11.1",
          title: "BigQuery の革新(2024-2025)",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**BigQuery Continuous Queries**(2024 GA): リアルタイム ストリーミング SQL ・ Pub/Sub / Bigtable / Spanner へ Sink",
              "**Gemini in BigQuery**: NL2SQL / Data Insights / Code 補完 ・ Studio で対話的分析",
              "**BigQuery Studio**(統合 IDE): Notebook + SQL + Pipeline + ML を 1 画面",
              "**BigQuery DataFrames**(Python pandas 互換 + BigQuery 計算)",
              "**BigQuery ML for GenAI**: `ML.GENERATE_TEXT` / `ML.GENERATE_EMBEDDING`(Gemini 統合)",
              "**Iceberg Tables**(2024+): Open Format で BigLake 統合",
            ] },
          ],
        },
        {
          id: "ch11-sec2",
          number: "11.2",
          title: "Dataform + Dataplex の進化",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Dataform**(SQLX): BigQuery 用 ELT FW(dbt 風)・ Git 統合 ・ Assertion ・ Workflow",
              "**Dataplex Universal Catalog**(2024 GA): Data Map / Lineage / Quality / Profile / Catalog を統合",
              "**Dataplex Data Quality**(2024 GA): GUI で Rule 定義 + 自動評価",
              "**Dataplex AI Integration**: Gemini で Data Discovery + Documentation 自動化",
            ] },
          ],
        },
        {
          id: "ch11-sec3",
          number: "11.3",
          title: "Streaming + Pub/Sub の新機能",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Pub/Sub Single Message Transforms(SMT)**: Subscribe / Publish 時に Transformation 適用",
              "**Pub/Sub Import Topics**: Kafka / AWS Kinesis から Pub/Sub に取込",
              "**Pub/Sub BigQuery Subscription**: Subscriber コードなしで BigQuery に直書込",
              "**Pub/Sub Cloud Storage Subscription**: GCS に Avro / Text で直書込",
              "**Dataflow Streaming Engine**: 状態を分離 → Worker 削減 + Auto Scaling",
            ] },
          ],
        },
        {
          id: "ch11-sec4",
          number: "11.4",
          title: "Datastream + Mirroring の拡張",
          blocks: [
            { type: "p", text: "**Datastream**: Oracle / MySQL / PostgreSQL CDC を BigQuery / GCS / Spanner に Real-time 配信。**Auto Merge**(2024+)で BigQuery 側の Upsert 自動化。**Spanner Migration Tool**(SMT)・ **Database Migration Service**(DMS)も DE 担当範囲。" },
          ],
        },
        {
          id: "ch11-sec5",
          number: "11.5",
          title: "Gemini / Vertex AI 連携",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Gemini in BigQuery / Looker / Studio**: GenAI でデータエンジニアの生産性向上",
              "**Vertex AI Search + Conversation**(Agent Builder): RAG / Agent 開発",
              "**BigQuery ML.GENERATE_TEXT / EMBED_TEXT**: SQL から Gemini 呼出",
              "**Object Tables**(BigQuery): GCS の非構造化データを SQL クエリ",
              "**Model Garden**: Llama / Mistral / Claude / Gemini を Vertex AI から統一利用",
            ] },
            { type: "h3", text: "結びに ─ Pro DE 11 章の完結" },
            { type: "p", text: "10 章で Pro DE の基礎、本章で 2024-2025 最新動向(Continuous Queries / Gemini in BigQuery / Dataform / Dataplex / Pub/Sub SMT / Mirroring / Vertex AI 連携)を網羅しました。**GCP は四半期ごとに大型機能追加**(re:Invent 級は Google Cloud Next)が続くため、合格後も Release Notes + Cloud Skills Boost を継続キャッチアップしてください。" },
          ],
        },
      ],
    },
  ],
};
