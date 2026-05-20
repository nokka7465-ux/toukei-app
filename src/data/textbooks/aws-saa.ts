import type { Textbook } from "@/types/content";

export const awsSaaTextbook: Textbook = {
  levelSlug: "aws-saa",
  title: "AWS Certified Solutions Architect ─ Associate(SAA-C03)教科書",
  intro:
    "**AWS Certified Solutions Architect ─ Associate(SAA-C03)** は、AWS 認定の **Associate レベル** で最も人気の高いアーキテクト系資格。**EC2 ・ S3 ・ RDS ・ Lambda ・ VPC ・ IAM** などの主要サービスを組み合わせて、**信頼性 ・ セキュリティ ・ 性能 ・ コスト ・ 運用** の 5 つの観点で AWS Well-Architected Framework に沿った設計を選択する力を測ります。**AI Practitioner の次のステップ** として、または **AWS で本格的にシステムを設計する技術者** の標準資格です。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "SAA-C03 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 AWS 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**SAA-C03** は AWS 認定の **Associate レベル** に位置するアーキテクト系認定。**Cloud Practitioner(CLF-C02)・ AI Practitioner(AIF-C01)などの Foundational** の上位で、**AWS で実際にシステムを設計するエンジニア** の標準資格。世界で最も受験者数が多い AWS 認定の 1 つです。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Amazon Web Services(AWS)",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験",
                "**問題数 / 時間**: 65 問 / 130 分",
                "**回答方式**: 単一選択 + 複数選択",
                "**合格スコア**: 720 / 1000",
                "**有効期限**: 3 年(再認定が必要)",
                "**受験料**: 150 USD(参考)",
                "**言語**: 英語 ・ 日本語など多言語対応",
              ],
            },
            { type: "h3", text: "AWS 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Foundational**: Cloud Practitioner / AI Practitioner",
                "**Associate**: Solutions Architect(本資格)/ Developer / SysOps Administrator / Data Engineer / ML Engineer",
                "**Professional**: Solutions Architect Professional / DevOps Engineer Professional",
                "**Specialty**: Security / Networking / Machine Learning / Database / SAP on AWS",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題ドメインと推奨学習プラン",
          blocks: [
            { type: "h3", text: "公式試験ガイドの 4 ドメイン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: Design Secure Architectures**(30%): IAM ・ KMS ・ ネットワーク制御",
                "**Domain 2: Design Resilient Architectures**(26%): 高可用性 ・ 災害対策 ・ Auto Scaling",
                "**Domain 3: Design High-Performing Architectures**(24%): キャッシング ・ DB 最適化",
                "**Domain 4: Design Cost-Optimized Architectures**(20%): Spot ・ Reserved ・ Storage Class",
              ],
            },
            { type: "h3", text: "120 〜 200 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1 〜 2**: AWS 基本サービス(EC2 / S3 / VPC / IAM)",
                "**Week 3 〜 4**: データベース(RDS / DynamoDB / Aurora / ElastiCache)",
                "**Week 5**: アプリ統合 + サーバレス(Lambda / SQS / SNS / API Gateway)",
                "**Week 6**: ネットワーク(Route 53 / CloudFront / Direct Connect)",
                "**Week 7**: 高可用性 + 災害対策 + 移行",
                "**Week 8**: コスト最適化 + 模擬試験 + 過去問",
              ],
            },
            {
              type: "intuition",
              title: "SAA は『シナリオ問題』の試験",
              body: "SAA-C03 は **要件 → 最適サービス選択 → 設計判断** を問うシナリオ問題が中心。単純なサービス名暗記ではなく、『**この要件で最もコスト効率の良い設計はどれか**』『**この要件で最も信頼性の高い設計はどれか**』のような **複数選択肢から best practice を選ぶ** 思考力が求められます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "AWS Well-Architected Framework と IAM",
      overview:
        "AWS の設計原則と、すべてのサービスの基盤となる IAM を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Well-Architected Framework の 6 つの柱",
          blocks: [
            {
              type: "def",
              title: "Well-Architected Framework の 6 柱",
              body: "**1. 運用上の優秀性(Operational Excellence)**: 自動化 ・ 監視 ・ 改善文化\n\n**2. セキュリティ(Security)**: データ保護 ・ アクセス制御\n\n**3. 信頼性(Reliability)**: 障害復旧 ・ スケーラビリティ\n\n**4. パフォーマンス効率(Performance Efficiency)**: 適切なリソース選択\n\n**5. コスト最適化(Cost Optimization)**: 不要なコストの排除\n\n**6. 持続可能性(Sustainability)**: 環境負荷低減(2021 年追加)",
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "IAM の基本構成要素",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ユーザ(User)**: 個人の認証単位(API キーまたはパスワード)",
                "**グループ(Group)**: ユーザのコレクション",
                "**ロール(Role)**: AWS リソース ・ 連携アプリへの権限委譲",
                "**ポリシー(Policy)**: JSON ベースの権限定義",
                "**Permissions Boundary**: 権限の上限を制限",
                "**SCP(Service Control Policy)**: AWS Organizations の組織レベル制御",
                "**IAM Identity Center(旧 SSO)**: 統合シングルサインオン",
              ],
            },
            { type: "h3", text: "ベストプラクティス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ルートユーザは MFA + 緊急時のみ使用**",
                "**最小権限の原則**: 必要最低限の権限のみ付与",
                "**ロールを使う**: アクセスキーは長期保管しない",
                "**MFA 必須化**: 特権アカウントは必須",
                "**CloudTrail で監査**: 全 API 呼出を記録",
              ],
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "暗号化と KMS",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**KMS(Key Management Service)**: マネージド暗号鍵管理",
                "**AWS managed key**: AWS が管理する鍵",
                "**Customer managed key(CMK)**: 顧客が管理する鍵",
                "**CloudHSM**: 専用ハードウェアセキュリティモジュール",
                "**SSE-S3 / SSE-KMS / SSE-C**: S3 サーバサイド暗号化の 3 種",
                "**Client-side encryption**: クライアント側で暗号化してからアップロード",
                "**TLS**: 通信の暗号化",
                "**Secrets Manager**: 機密情報(DB パスワード等)の管理 ・ 自動ローテーション",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "コンピュート ─ EC2 ・ Lambda ・ コンテナ",
      overview:
        "計算リソースの選択とインスタンスタイプを整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "EC2 の基礎",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**インスタンスファミリ**: 汎用(M / T)・ 計算(C)・ メモリ(R / X)・ ストレージ(I / D)・ GPU(P / G)",
                "**AMI(Amazon Machine Image)**: OS + ソフトの仮想イメージ",
                "**EBS(Elastic Block Store)**: ブロックストレージ(永続)",
                "**インスタンスストア**: 一時ストレージ(高速)",
                "**プレースメントグループ**: Cluster / Spread / Partition",
                "**ENI(Elastic Network Interface)**: 仮想 NIC",
              ],
            },
            { type: "h3", text: "EC2 購入オプション" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**On-Demand**: 必要なときだけ、最も柔軟",
                "**Reserved Instance(RI)**: 1 / 3 年予約で 40 〜 72% オフ",
                "**Savings Plans**: より柔軟な予約割引",
                "**Spot Instance**: 最大 90% オフ、中断あり",
                "**Dedicated Host / Instance**: 物理サーバ占有(ライセンス対応)",
                "**Capacity Reservation**: キャパシティ確保のみ(料金は別)",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Lambda とサーバレス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**AWS Lambda**: 関数単位の実行、イベント駆動",
                "**実行時間上限**: 15 分",
                "**メモリ**: 128 MB 〜 10 GB(CPU はメモリに比例)",
                "**コールドスタート**: 初回起動の遅延",
                "**Provisioned Concurrency**: 事前ウォーム",
                "**Lambda@Edge**: CloudFront のエッジで実行",
                "**Step Functions**: ワークフロー オーケストレーション",
                "**EventBridge**: イベントバス(旧 CloudWatch Events)",
                "**API Gateway**: REST / HTTP / WebSocket API",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "コンテナサービス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ECS(Elastic Container Service)**: AWS 独自のコンテナオーケストレーション",
                "**EKS(Elastic Kubernetes Service)**: マネージド Kubernetes",
                "**Fargate**: サーバレスコンテナ(ECS / EKS で利用)",
                "**ECR(Elastic Container Registry)**: コンテナレジストリ",
                "**App Runner**: フルマネージドコンテナ実行(初心者向け)",
                "**Lightsail**: シンプルな VPS 風サービス",
              ],
            },
            {
              type: "intuition",
              title: "EC2 vs Lambda vs Fargate の選び分け",
              body: "**長時間 / 高 CPU / 自由度 → EC2**(EC2 Auto Scaling で運用負荷削減)。\n\n**短時間 / イベント駆動 / 自動スケール → Lambda**(15 分以内、メモリ < 10GB)。\n\n**コンテナ ・ 長時間処理 / Kubernetes 知識不要 → Fargate**(運用フリー)。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "ストレージ ─ S3 ・ EBS ・ EFS",
      overview:
        "ストレージサービスの種類と選択基準を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "S3(Simple Storage Service)",
          blocks: [
            {
              type: "p",
              text: "**S3** はオブジェクトストレージで、**99.999999999%(11 nine)** の耐久性を持つ AWS の中核サービス。データレイク ・ バックアップ ・ 静的ホスティングなど用途多数。",
            },
            { type: "h3", text: "S3 ストレージクラス" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**S3 Standard**: 頻繁アクセス、最も高い可用性",
                "**S3 Standard-IA**: 低頻度アクセス、安価だが取出し料金あり",
                "**S3 One Zone-IA**: 1 AZ 限定、より安価",
                "**S3 Intelligent-Tiering**: 自動でアクセス頻度に応じてクラス移動",
                "**S3 Glacier Instant Retrieval**: ms 取出し可、長期保管",
                "**S3 Glacier Flexible Retrieval**: 分 〜 時間取出し",
                "**S3 Glacier Deep Archive**: 12 時間取出し、最安",
                "**S3 Express One Zone**: ミリ秒級アクセス、AI 学習向け",
              ],
            },
            { type: "h3", text: "S3 の主要機能" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Lifecycle policy**: クラス移行 ・ 削除の自動化",
                "**Versioning**: バージョン管理",
                "**Replication**: クロスリージョン / 同一リージョン",
                "**Object Lock**: WORM(Write Once Read Many)",
                "**Static Website Hosting**: 静的サイト配信",
                "**Pre-signed URL**: 一時アクセス URL",
                "**Multi-part upload**: 大容量分割アップロード",
                "**Transfer Acceleration**: CloudFront 経由で高速化",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "ブロックストレージとファイルストレージ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**EBS(Elastic Block Store)**: EC2 の永続ブロックストレージ",
                "**EBS タイプ**: gp3(汎用 SSD)/ io2(高 IOPS SSD)/ st1(HDD スループット)/ sc1(コールド HDD)",
                "**EBS Snapshot**: ポイントインタイムバックアップ(S3 保存)",
                "**EBS Multi-Attach**: 同一 AZ 内の複数 EC2 から接続",
                "**EFS(Elastic File System)**: NFS マネージド、複数 EC2 から共有",
                "**FSx for Windows / Lustre / NetApp ONTAP / OpenZFS**: Windows / HPC / 既存 NAS 互換",
                "**Storage Gateway**: オンプレ → AWS 連携(File / Volume / Tape)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "データベース",
      overview:
        "RDB ・ NoSQL ・ キャッシュ ・ DWH の選び分けを整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "RDS と Aurora",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**RDS(Relational Database Service)**: MySQL / PostgreSQL / MariaDB / Oracle / SQL Server",
                "**Aurora**: AWS 独自の MySQL / PostgreSQL 互換 RDB(高性能 ・ 高可用性)",
                "**Aurora Serverless**: 自動スケール ・ 従量課金",
                "**Multi-AZ**: 自動フェイルオーバー(同期レプリカ)",
                "**Read Replica**: 読み取り分離 ・ クロスリージョン可",
                "**バックアップ**: 自動 + 手動スナップショット、PITR(Point-in-Time Recovery)",
                "**Performance Insights**: SQL レベルの性能監視",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "NoSQL とキャッシュ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**DynamoDB**: フルマネージド KVS / ドキュメント、ms 級レイテンシ",
                "**DynamoDB Streams**: 変更ログのストリーム",
                "**DynamoDB Global Tables**: マルチリージョン同期",
                "**DAX(DynamoDB Accelerator)**: マイクロ秒級キャッシュ",
                "**ElastiCache for Redis / Memcached**: インメモリキャッシュ",
                "**MemoryDB for Redis**: 永続化対応の Redis",
                "**DocumentDB**: MongoDB 互換",
                "**Neptune**: グラフ DB",
                "**Timestream**: 時系列 DB",
                "**Keyspaces**: Cassandra 互換",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "データウェアハウスとデータレイク",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Redshift**: マネージド DWH(列指向 MPP)",
                "**Redshift Serverless**: 自動スケール",
                "**Athena**: S3 上の SQL クエリ(サーバレス)",
                "**Glue**: マネージド ETL + データカタログ",
                "**Lake Formation**: データレイク管理 + 細粒度アクセス制御",
                "**EMR(Elastic MapReduce)**: Hadoop / Spark / Presto マネージド",
                "**Kinesis**: ストリーミングデータ取込み(Streams / Firehose / Analytics)",
                "**MSK(Managed Streaming for Apache Kafka)**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "ネットワーク ─ VPC ・ Route 53 ・ CloudFront",
      overview:
        "ネットワーク設計とコンテンツ配信を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "VPC の基本",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**VPC**: 仮想プライベートクラウド",
                "**サブネット**: VPC 内のセグメント(Public / Private)",
                "**Route Table**: ルーティング規則",
                "**Internet Gateway(IGW)**: VPC とインターネットの接続",
                "**NAT Gateway**: プライベートサブネットからのアウトバウンド通信",
                "**Security Group**: インスタンスレベルのファイアウォール(ステートフル)",
                "**Network ACL(NACL)**: サブネットレベルのファイアウォール(ステートレス)",
                "**VPC Peering**: VPC 間接続",
                "**Transit Gateway**: 多数 VPC とオンプレを集約接続",
                "**VPC Endpoint**: AWS サービスへのプライベート接続(Gateway / Interface)",
                "**PrivateLink**: SaaS / 他 VPC へのプライベート接続",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Route 53 と CloudFront",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Route 53**: マネージド DNS",
                "**Route 53 ルーティングポリシー**: Simple / Weighted / Latency / Failover / Geolocation / Geoproximity / Multi-Value",
                "**Route 53 Health Checks**: エンドポイントの監視",
                "**Domain Registration**: ドメイン取得",
                "**CloudFront**: CDN(コンテンツ配信ネットワーク)",
                "**Edge Locations**: 全世界 400+ 拠点",
                "**Origin Access Control(OAC)**: S3 origin の保護",
                "**Lambda@Edge / CloudFront Functions**: エッジでカスタム処理",
                "**Global Accelerator**: AWS バックボーン経由で高速化",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "ハイブリッド接続",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**VPN**: Site-to-Site VPN(IPsec)",
                "**Direct Connect**: 専用線接続(高帯域 ・ 低遅延)",
                "**Direct Connect Gateway**: 複数リージョンの集約",
                "**Outposts**: AWS ハードをオンプレに設置",
                "**Wavelength**: 5G エッジ",
                "**Local Zones**: 主要都市の低遅延ゾーン",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "高可用性 ・ Auto Scaling ・ 災害対策",
      overview:
        "信頼性の高いアーキテクチャ設計を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "Elastic Load Balancing",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Application Load Balancer(ALB)**: L7、HTTP/HTTPS、ホスト ・ パスベースルーティング",
                "**Network Load Balancer(NLB)**: L4、TCP/UDP/TLS、超低遅延 ・ 静的 IP",
                "**Gateway Load Balancer(GWLB)**: 仮想アプライアンス用(IDS/IPS/Firewall)",
                "**Classic Load Balancer**: レガシー(非推奨)",
                "**ターゲットグループ**: Lambda / EC2 / IP / コンテナ",
                "**Cross-Zone Load Balancing**: AZ 間の均等分散",
                "**Connection Draining**: 切断前の処理完了を待つ",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Auto Scaling",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**EC2 Auto Scaling**: インスタンス数の自動調整",
                "**スケーリングポリシー**: Target Tracking / Step / Simple / Predictive",
                "**Launch Template**: 起動設定",
                "**Cooldown**: スケーリング間隔",
                "**Lifecycle Hook**: スケーリング前後のフック",
                "**Application Auto Scaling**: ECS / Lambda / DynamoDB などの自動スケール",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "災害対策(DR)",
          blocks: [
            {
              type: "def",
              title: "DR 戦略 4 種",
              body: "**1. Backup & Restore**: 定期バックアップのみ。RTO / RPO 大、コスト最小\n\n**2. Pilot Light**: 重要部分だけ常時稼働、災害時に拡張\n\n**3. Warm Standby**: 縮小版を常時稼働、災害時にスケールアップ\n\n**4. Multi-Site Active/Active**: 全機能を複数リージョンで同時稼働、RTO / RPO ほぼ 0",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**RTO(Recovery Time Objective)**: 復旧目標時間",
                "**RPO(Recovery Point Objective)**: 復旧目標時点(データ損失許容)",
                "**AWS Backup**: 統合バックアップ管理",
                "**Elastic Disaster Recovery(DRS)**: マネージド DR",
                "**S3 Cross-Region Replication**",
                "**Aurora Global Database**: マルチリージョン RDB",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "アプリ統合 ・ メッセージング",
      overview:
        "疎結合アーキテクチャの構築要素を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "SQS ・ SNS ・ EventBridge",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SQS(Simple Queue Service)**: メッセージキュー(Standard / FIFO)",
                "**Standard キュー**: 順序保証なし、無制限スループット",
                "**FIFO キュー**: 順序保証 + 重複排除、3,000 メッセージ/秒",
                "**Visibility Timeout**: メッセージ処理中の排他",
                "**DLQ(Dead Letter Queue)**: 失敗メッセージの隔離",
                "**SNS(Simple Notification Service)**: Pub/Sub、Fan-out 配信",
                "**EventBridge**: イベントバス、SaaS 連携、スケジュール",
                "**MSK / Kinesis**: 高スループットストリーミング",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "ワークフロー",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Step Functions**: ステートマシン形式のワークフロー",
                "**Standard / Express ワークフロー**",
                "**SWF**: 旧式ワークフロー(Step Functions 推奨)",
                "**MWAA(Managed Workflows for Apache Airflow)**: マネージド Airflow",
                "**API Gateway**: API オーケストレーション",
                "**AppSync**: マネージド GraphQL",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "監視 ・ 移行 ・ AI/ML サービス概要",
      overview:
        "運用 ・ 移行 ・ AI 関連サービスを整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "監視とログ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**CloudWatch Metrics**: メトリクス収集",
                "**CloudWatch Logs**: ログ集約",
                "**CloudWatch Alarms**: 閾値ベースの通知",
                "**CloudWatch Synthetics**: 合成監視",
                "**X-Ray**: 分散トレーシング",
                "**CloudTrail**: API 呼出監査ログ",
                "**Config**: 構成変更追跡",
                "**Trusted Advisor**: ベストプラクティスチェック",
                "**AWS Health Dashboard**: AWS 障害情報",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "移行サービス",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**AWS Migration Hub**: 移行プロジェクトのダッシュボード",
                "**DMS(Database Migration Service)**: DB 移行(同種 / 異種)",
                "**SCT(Schema Conversion Tool)**: スキーマ変換",
                "**Application Migration Service(MGN)**: サーバ移行",
                "**Snow Family**: Snowcone / Snowball / Snowmobile(物理データ転送)",
                "**DataSync**: ファイル / オブジェクト同期",
                "**Transfer Family**: SFTP / FTPS / FTP",
              ],
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "AI / ML サービス概要(SAA でも頻出)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**SageMaker**: ML プラットフォーム(本サイトの[AWS AI Practitioner](/certs/aws-ai-practitioner)で詳述)",
                "**Bedrock**: 生成 AI(Claude / Titan / Llama 等)",
                "**Rekognition / Textract / Comprehend / Transcribe / Polly / Translate**",
                "**Personalize / Forecast**",
                "**Amazon Q**: 生成 AI アシスタント",
                "**SAA でも『要件 → 適切な AI サービス選択』が出題される**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "コスト最適化と受験対策",
      overview:
        "コスト最適化のテクニックと試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "コスト最適化",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Cost Explorer**: コスト可視化 ・ 予測",
                "**Budgets**: 予算アラーム",
                "**Cost Anomaly Detection**: 異常検知",
                "**Compute Savings Plans**: EC2 / Fargate / Lambda の柔軟な予約",
                "**Spot Fleet**: Spot インスタンスの集約",
                "**Auto Scaling + Spot**: 大幅コスト削減",
                "**S3 Lifecycle**: ストレージクラスの自動移行",
                "**Reserved Instance / Capacity Reservation**: 計画的な割引",
                "**Right Sizing**: インスタンスサイズの最適化",
                "**Idle リソース削除**: 不要 EBS ・ Elastic IP の検出",
                "**Trusted Advisor + Compute Optimizer**: 自動レコメンド",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "範囲別チェックリスト",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: Well-Architected 6 柱 / IAM / KMS / Secrets Manager",
                "**第 3 章**: EC2 購入オプション 5 種 / Lambda 制約 / Fargate 使い分け",
                "**第 4 章**: S3 ストレージクラス 8 種 / Lifecycle / Versioning / EBS タイプ",
                "**第 5 章**: RDS Multi-AZ / Read Replica / Aurora / DynamoDB / DAX / ElastiCache",
                "**第 6 章**: VPC / SG / NACL / Route 53 ルーティング 7 種 / CloudFront",
                "**第 7 章**: ALB / NLB / GWLB / Auto Scaling / DR 戦略 4 種",
                "**第 8 章**: SQS Standard/FIFO / SNS / EventBridge / Step Functions",
                "**第 9 章**: CloudWatch / CloudTrail / Config / DMS / Snow Family",
                "**第 10 章**: Cost Explorer / Savings Plans / Trusted Advisor",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**65 問 / 130 分** = 1 問 約 2 分。長文シナリオは慎重に",
                "**最も○○な答え** を選ぶ問題が中心(コスト効率 ・ 信頼性 ・ 性能)",
                "**極端な選択肢に警戒**: 『常に』『必ず』は誤答が多い",
                "**消去法**: 明らかに不適切なサービスは除外",
                "**英語版受験** ではサービス名のスペル正確性が重要",
                "**Practice exam**(AWS 公式) を必ず受ける",
              ],
            },
          ],
        },
        {
          id: "ch10-sec3",
          number: "10.3",
          title: "次のステップ",
          blocks: [
            {
              type: "p",
              text: "SAA-C03 合格 → **Solutions Architect Professional(SAP-C02)** が王道。AI / ML 系なら **ML Engineer Associate / ML Specialty** へ。専門領域なら **Security / Networking / Database Specialty** へ進むキャリアパスも。本サイトの[AWS AI Practitioner](/certs/aws-ai-practitioner)からのステップアップとしても最適です。",
            },
            {
              type: "practical",
              title: "SAA のキャリア活用",
              body: "SAA は **AWS 認定の代表格** で、世界中のクラウドエンジニア採用で広く参照されます。**保有率高 = ベースライン**、しかし **保有なし = AWS 経験不足の疑い** とみなされる場面もあるため、AWS で仕事をする ・ する予定があるなら取得しておくべき認定です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch11",
      number: 11,
      title: "2024-2025 AWS 最新動向(SAA-C03 改訂対応)",
      overview:
        "SAA-C03 改訂後の出題傾向と、AWS の 2024-2025 最新サービス(Bedrock / Q / Nova / Aurora DSQL / Glue 5 / VPC Lattice 等)を整理します。",
      sections: [
        {
          id: "ch11-sec1",
          number: "11.1",
          title: "Generative AI 系の新出題",
          blocks: [
            { type: "p", text: "SAA-C03 は GenAI 関連の比重が増加しています(Bedrock / Q / Nova 系)。" },
            { type: "list", style: "bullet", items: [
              "**Amazon Bedrock**: Foundation Model マネージド API(Claude / Llama / Nova / Mistral / Cohere)",
              "**Bedrock Knowledge Bases**: マネージド RAG(2024+ Hierarchical / GraphRAG / Reranking)",
              "**Bedrock Agents**: Action Group + Guardrails + Multi-Agent Collaboration",
              "**Amazon Q ファミリ**: Q Developer / Q Business / Q in QuickSight / Q in Connect / Q for Migration",
              "**Amazon Nova**: Micro / Lite / Pro / Premier / Canvas / Reel(2024 re:Invent)",
            ] },
          ],
        },
        {
          id: "ch11-sec2",
          number: "11.2",
          title: "Database / Storage の新サービス",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Aurora DSQL**(2024 re:Invent Preview): Serverless 分散 SQL / 99.999% Multi-Region SLA",
              "**Aurora Limitless**: 自動 Sharding で水平スケール",
              "**S3 Tables**(2024 re:Invent): Iceberg-native Managed Bucket",
              "**S3 Metadata**: S3 Object Metadata を自動的に Iceberg Table 化",
              "**Glue 5.0**(2024+): Apache Spark 3.5 + Python 3.11 + Real-time Streaming",
              "**Redshift Zero-ETL**: Aurora / DynamoDB / RDS / Salesforce から自動同期",
            ] },
          ],
        },
        {
          id: "ch11-sec3",
          number: "11.3",
          title: "Networking + Security の新動向",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**VPC Lattice**(2023+ GA): Application Networking(L7 + L4 Service Mesh 風)",
              "**AWS Verified Access**: ZTNA(VPN 代替)・ Identity-aware Access",
              "**WAF + Shield Advanced + Network Firewall**(Defense in Depth)",
              "**AWS PrivateLink**: Private Endpoint(他 VPC / オンプレ Service)",
              "**Resource Access Manager(RAM)**: Cross-Account リソース共有",
            ] },
          ],
        },
        {
          id: "ch11-sec4",
          number: "11.4",
          title: "Compute / Container / Serverless 拡張",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**EKS Auto Mode**(2024 re:Invent): Karpenter 統合 ・ K8s Node 完全マネージド",
              "**EKS Hybrid Nodes**: オンプレ Node を EKS に統合",
              "**Graviton4**(2024): ARM64 Cloud-Native CPU",
              "**Lambda SnapStart**(Java / Python / .NET): Cold Start 削減",
              "**App Runner / AWS Copilot**: Container PaaS(GKE Autopilot / Cloud Run 競合)",
            ] },
          ],
        },
        {
          id: "ch11-sec5",
          number: "11.5",
          title: "Sustainability + Well-Architected v6",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Well-Architected 6 Pillars**(2021 Sustainability 追加 → 2024 強化)",
              "**Sustainability Pillar**: Carbon Footprint 削減(Spot / Graviton / Right-sizing / Cool Region)",
              "**AWS Customer Carbon Footprint Tool**: 公式可視化",
              "**Energy Consumption / Operational Excellence** との両立",
            ] },
            { type: "h3", text: "結びに ─ SAA 11 章の完結" },
            { type: "p", text: "10 章で SAA の基礎、本章で 2024-2025 最新動向(GenAI / Aurora DSQL / S3 Tables / Lattice / EKS Auto Mode / Graviton4 / Sustainability)を概観しました。**AWS は四半期ごとに大型機能追加が続く**ため、合格後も re:Invent / AWS What's New / AWS Builders を継続キャッチアップしてください。" },
          ],
        },
      ],
    },
  ],
};
