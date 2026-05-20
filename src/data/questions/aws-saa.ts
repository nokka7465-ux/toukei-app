import type { Question } from "@/types/content";

export const awsSaaQuestions: Question[] = [
  {
    id: "saa-q1",
    category: "試験概要",
    difficulty: 1,
    question:
      "AWS Certified Solutions Architect ─ Associate(SAA-C03)の認定レベルとして最も適切なものを選びなさい。",
    choices: [
      "Foundational",
      "Associate",
      "Professional",
      "Specialty",
    ],
    correctIndex: 1,
    explanation:
      "**SAA-C03 は Associate レベル**。Foundational に AI Practitioner / Cloud Practitioner、Professional に Solutions Architect Professional がある。",
  },
  {
    id: "saa-q2",
    category: "Well-Architected",
    difficulty: 2,
    question:
      "AWS Well-Architected Framework の 6 つの柱に **含まれない** ものを選びなさい。",
    choices: [
      "セキュリティ",
      "信頼性",
      "プライバシー",
      "コスト最適化",
    ],
    correctIndex: 2,
    explanation:
      "Well-Architected の 6 柱は **運用上の優秀性 / セキュリティ / 信頼性 / パフォーマンス効率 / コスト最適化 / 持続可能性**。プライバシーはセキュリティに包含される。",
  },
  {
    id: "saa-q3",
    category: "IAM",
    difficulty: 2,
    question:
      "EC2 インスタンスから他の AWS サービスへアクセスする際、長期的な認証情報を保管せずに権限を付与する方法として最も適切なものを選びなさい。",
    choices: [
      "EC2 にアクセスキーをファイル保存する",
      "IAM ロールを EC2 にアタッチする",
      "ルートユーザのパスワードを共有する",
      "ハードコードしたパスワードをアプリ内に置く",
    ],
    correctIndex: 1,
    explanation:
      "**IAM ロール** を EC2 にアタッチすると一時クレデンシャルが自動配布され、アクセスキーの長期保管が不要。**最小権限の原則** + **ロールベース運用** が AWS のベストプラクティス。",
  },
  {
    id: "saa-q4",
    category: "EC2",
    difficulty: 2,
    question:
      "中断耐性のあるバッチ処理で **最大 90% のコスト削減** が見込める EC2 購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "On-Demand",
      "Reserved Instance",
      "Spot Instance",
      "Dedicated Host",
    ],
    correctIndex: 2,
    explanation:
      "**Spot Instance** は AWS の余剰キャパシティを最大 90% オフで利用できるが、AWS 都合で中断される。中断時の再開可能なバッチ処理 ・ 機械学習学習などに最適。",
  },
  {
    id: "saa-q5",
    category: "Lambda",
    difficulty: 2,
    question:
      "AWS Lambda の **実行時間の上限** として最も適切なものを選びなさい。",
    choices: [
      "30 秒",
      "5 分",
      "15 分",
      "60 分",
    ],
    correctIndex: 2,
    explanation:
      "Lambda の実行時間上限は **15 分**。これを超える長時間処理は Step Functions / EC2 / Fargate / ECS などへ切り替える必要がある。",
  },
  {
    id: "saa-q6",
    category: "コンテナ",
    difficulty: 3,
    question:
      "Kubernetes の知識がなく、サーバ管理もしたくないチームがコンテナベースのアプリを動かす場合、最も適切なサービスを選びなさい。",
    choices: [
      "EKS on EC2",
      "ECS on EC2",
      "ECS on Fargate",
      "EC2 上に Kubernetes を自前構築",
    ],
    correctIndex: 2,
    explanation:
      "**ECS on Fargate** は Kubernetes 不要 + サーバ管理不要のサーバレスコンテナ実行環境。EKS on Fargate もマネージド K8s + サーバレスだが Kubernetes の運用知識が必要。",
  },
  {
    id: "saa-q7",
    category: "S3",
    difficulty: 2,
    question:
      "アクセス頻度が予測できないデータに対して、自動でストレージクラスを最適化したい場合に最も適切な S3 ストレージクラスを選びなさい。",
    choices: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Intelligent-Tiering",
      "S3 Glacier Deep Archive",
    ],
    correctIndex: 2,
    explanation:
      "**S3 Intelligent-Tiering** はアクセスパターンを監視して **自動でクラスを移動** する仕組み。アクセスパターン未知のデータで最適。Standard-IA は予測可能な低頻度アクセス向け。",
  },
  {
    id: "saa-q8",
    category: "S3",
    difficulty: 3,
    question:
      "データ取出しに 12 時間以内を許容する場合、**最も低コスト** な S3 ストレージクラスを選びなさい。",
    choices: [
      "S3 Standard",
      "S3 Standard-IA",
      "S3 Glacier Flexible Retrieval",
      "S3 Glacier Deep Archive",
    ],
    correctIndex: 3,
    explanation:
      "**S3 Glacier Deep Archive** が最安(取出し 12 時間)。Glacier Flexible Retrieval は分 〜 時間単位、Glacier Instant Retrieval はミリ秒単位で取出せるが Deep Archive より高い。",
  },
  {
    id: "saa-q9",
    category: "EBS",
    difficulty: 3,
    question:
      "SSD ベースで最もバランスの良い汎用 EBS ボリュームタイプとして最も適切なものを選びなさい。",
    choices: [
      "gp3",
      "io2 Block Express",
      "st1",
      "sc1",
    ],
    correctIndex: 0,
    explanation:
      "**gp3** は汎用 SSD で最も標準的。**io2 Block Express** は超高 IOPS 用途、**st1** は HDD スループット最適化、**sc1** はコールド HDD で最安。",
  },
  {
    id: "saa-q10",
    category: "RDS",
    difficulty: 3,
    question:
      "RDS Multi-AZ の主な目的として最も適切なものを選びなさい。",
    choices: [
      "読み取り性能を向上させる",
      "障害時の自動フェイルオーバーで可用性を高める",
      "コストを下げる",
      "暗号化を有効にする",
    ],
    correctIndex: 1,
    explanation:
      "**Multi-AZ** はスタンバイ DB を別 AZ に同期レプリカで持ち、障害時に自動フェイルオーバーする **高可用性** の仕組み。読み取り性能向上は **Read Replica** が担う。",
  },
  {
    id: "saa-q11",
    category: "DynamoDB",
    difficulty: 3,
    question:
      "DynamoDB の読み取りレイテンシを **マイクロ秒級** に高速化するためのサービスとして最も適切なものを選びなさい。",
    choices: [
      "ElastiCache for Redis",
      "DAX(DynamoDB Accelerator)",
      "Aurora",
      "Athena",
    ],
    correctIndex: 1,
    explanation:
      "**DAX** は DynamoDB 専用のマイクロ秒級フルマネージドキャッシュ。アプリコードをほぼ変更せず透過的にキャッシュを挟める。ElastiCache は汎用キャッシュ。",
  },
  {
    id: "saa-q12",
    category: "VPC",
    difficulty: 2,
    question:
      "プライベートサブネットの EC2 が **インターネット経由でパッチを取得する** 経路として最も適切なものを選びなさい。",
    choices: [
      "Internet Gateway を直接アタッチ",
      "NAT Gateway を Public サブネットに置き、Private サブネットから利用",
      "VPC Peering",
      "Direct Connect",
    ],
    correctIndex: 1,
    explanation:
      "プライベートサブネットからのアウトバウンド通信は **NAT Gateway**(Public サブネット配置)経由が標準。Internet Gateway は VPC 全体の入口で直接アタッチでは Private サブネットには使えない。",
  },
  {
    id: "saa-q13",
    category: "VPC",
    difficulty: 3,
    question:
      "Security Group と Network ACL(NACL)の主な違いとして最も適切なものを選びなさい。",
    choices: [
      "Security Group はステートフル、NACL はステートレス",
      "Security Group はサブネットレベル、NACL はインスタンスレベル",
      "両者は完全に同じ",
      "Security Group はインバウンドのみ、NACL はアウトバウンドのみ",
    ],
    correctIndex: 0,
    explanation:
      "**Security Group はインスタンスレベル ・ ステートフル**(戻りトラフィック自動許可)、**NACL はサブネットレベル ・ ステートレス**(明示的な双方向ルール必要)。",
  },
  {
    id: "saa-q14",
    category: "Route 53",
    difficulty: 3,
    question:
      "メインリージョンが障害で停止した際、自動的にバックアップリージョンへトラフィックを切り替える Route 53 ルーティングポリシーとして最も適切なものを選びなさい。",
    choices: [
      "Simple",
      "Weighted",
      "Latency",
      "Failover",
    ],
    correctIndex: 3,
    explanation:
      "**Failover ルーティング** は Health Check と組み合わせ、Primary 障害時に Secondary へ自動切替。DR シナリオの基本。",
  },
  {
    id: "saa-q15",
    category: "ELB",
    difficulty: 2,
    question:
      "ホスト名やパスベースで HTTPS トラフィックをルーティングするのに最も適切な ELB 種別を選びなさい。",
    choices: [
      "Application Load Balancer(ALB)",
      "Network Load Balancer(NLB)",
      "Gateway Load Balancer(GWLB)",
      "Classic Load Balancer(CLB)",
    ],
    correctIndex: 0,
    explanation:
      "**ALB は L7(HTTP/HTTPS)** で、ホスト ・ パス ・ ヘッダ ・ クエリでルーティング可能。NLB は L4 で超低遅延 ・ TCP/UDP/TLS、GWLB は仮想アプライアンス用。",
  },
  {
    id: "saa-q16",
    category: "Auto Scaling",
    difficulty: 3,
    question:
      "Auto Scaling のスケーリングポリシーで、CPU 使用率を 50% に維持するように自動調整する方式として最も適切なものを選びなさい。",
    choices: [
      "Simple Scaling",
      "Step Scaling",
      "Target Tracking",
      "Predictive Scaling",
    ],
    correctIndex: 2,
    explanation:
      "**Target Tracking** は『この指標を X に保つ』という目標値を指定する方式で、AWS が裏で適切にスケール。最も簡単で運用負荷が低い。",
  },
  {
    id: "saa-q17",
    category: "DR",
    difficulty: 3,
    question:
      "DR 戦略で **RTO / RPO がほぼ 0** だが最もコストが高い方式として最も適切なものを選びなさい。",
    choices: [
      "Backup & Restore",
      "Pilot Light",
      "Warm Standby",
      "Multi-Site Active/Active",
    ],
    correctIndex: 3,
    explanation:
      "**Multi-Site Active/Active** は複数リージョンで全機能を同時稼働させるため、RTO / RPO がほぼ 0。代わりにコストは最大。",
  },
  {
    id: "saa-q18",
    category: "メッセージング",
    difficulty: 3,
    question:
      "メッセージの **順序保証 + 重複排除** が必要なシステムで最も適切な SQS キュー種別を選びなさい。",
    choices: [
      "Standard キュー",
      "FIFO キュー",
      "DLQ",
      "高速キュー",
    ],
    correctIndex: 1,
    explanation:
      "**FIFO キュー** は順序保証 + 重複排除が組み込まれている。Standard キューは順序保証なし(無制限スループット)。",
  },
  {
    id: "saa-q19",
    category: "監視",
    difficulty: 2,
    question:
      "AWS の **すべての API 呼出を監査ログとして記録** するサービスとして最も適切なものを選びなさい。",
    choices: [
      "CloudWatch",
      "CloudTrail",
      "Config",
      "X-Ray",
    ],
    correctIndex: 1,
    explanation:
      "**CloudTrail** は誰がいつどの AWS API を呼出したかの監査ログ。CloudWatch はメトリクス + ログ集約、Config は構成変更追跡、X-Ray は分散トレーシング。",
  },
  {
    id: "saa-q20",
    category: "コスト最適化",
    difficulty: 2,
    question:
      "EC2 / Fargate / Lambda の柔軟な利用で割引を得る購入オプションとして最も適切なものを選びなさい。",
    choices: [
      "Reserved Instance(RI)",
      "Compute Savings Plans",
      "Spot Instance",
      "Dedicated Host",
    ],
    correctIndex: 1,
    explanation:
      "**Compute Savings Plans** は EC2 / Fargate / Lambda のいずれにも適用できる柔軟な予約割引(1 / 3 年コミット)。RI は EC2 のインスタンスタイプ ・ リージョン固定で柔軟性が低い。",
  },
  {
    id: "saa-q21",
    category: "VPC",
    difficulty: 3,
    question:
      "VPC のサブネット設計で **インターネット直接アクセスが不要なデータベース** を配置する場所として最も適切なものを選びなさい。",
    choices: [
      "Public Subnet",
      "Private Subnet + NAT Gateway 経由でアウトバウンドのみ",
      "Internet Gateway 直接接続",
      "VPC Peering",
    ],
    correctIndex: 1,
    explanation:
      "**Private Subnet + NAT Gateway** で **インバウンド遮断 ・ アウトバウンド許可**(セキュリティパッチ取得など)。Public Subnet は Web Server 用。VPC Peering はネットワーク接続で別概念。",
  },
  {
    id: "saa-q22",
    category: "S3",
    difficulty: 3,
    question:
      "**S3 オブジェクトを誤って削除した際の復旧** に最も役立つ機能を選びなさい。",
    choices: [
      "S3 Versioning + MFA Delete",
      "S3 Replication",
      "S3 Inventory",
      "S3 Access Logging",
    ],
    correctIndex: 0,
    explanation:
      "**S3 Versioning** でオブジェクトの過去バージョンを保持 → 削除しても復旧可能。**MFA Delete** で完全削除時に MFA 必須化、誤操作 ・ 内部脅威対策。Replication は災害対策、Inventory はメタデータレポート。",
  },
  {
    id: "saa-q23",
    category: "高可用性",
    difficulty: 3,
    question:
      "RDS の **Multi-AZ Deployment** の主目的として最も適切なものを選びなさい。",
    choices: [
      "高可用性 ・ 自動フェイルオーバー(同期レプリケーション)",
      "読み取り性能向上(非同期レプリケーション)",
      "コスト削減",
      "バックアップ自動取得",
    ],
    correctIndex: 0,
    explanation:
      "**Multi-AZ = 別 AZ にスタンバイ + 同期レプリケーション + 自動フェイルオーバー**。読み取り性能向上は **Read Replica**(非同期、複数 AZ / リージョン可)。両者は併用可能。",
  },
  {
    id: "saa-q24",
    category: "IAM",
    difficulty: 3,
    question:
      "EC2 から S3 にアクセスする際の **ベストプラクティス** として最も適切なものを選びなさい。",
    choices: [
      "アクセスキーを EC2 内に保存",
      "IAM Role を EC2 にアタッチ",
      "Root アカウントの認証情報を使う",
      "IAM User のパスワードを使う",
    ],
    correctIndex: 1,
    explanation:
      "**IAM Role を EC2 インスタンスにアタッチ** + EC2 メタデータ経由で一時クレデンシャル取得が標準。**アクセスキーをコードに埋め込まない** が原則。Root は使用厳禁。",
  },
  {
    id: "saa-q25",
    category: "災害対策",
    difficulty: 3,
    question:
      "**RPO(Recovery Point Objective)** の定義として最も適切なものを選びなさい。",
    choices: [
      "災害時に許容できるデータ損失時間",
      "災害時に許容できるシステム停止時間",
      "復旧コストの上限",
      "復旧チームの人数",
    ],
    correctIndex: 0,
    explanation:
      "**RPO = 許容データ損失時間**(『何分前まで戻れるか』)。**RTO = 許容停止時間**(『何分で復旧するか』)。両者の組合せで DR 戦略(Backup&Restore / Pilot Light / Warm Standby / Multi-Site)を選定。",
  },
  {
    id: "saa-q26",
    category: "Auto Scaling",
    difficulty: 3,
    question:
      "EC2 Auto Scaling Group の **正常性チェック** で組合せ可能なものとして **誤っているもの** を選びなさい。",
    choices: ["EC2 Status Check", "ELB Health Check", "Custom Health Check", "RDS Backup Check"],
    correctIndex: 3,
    explanation:
      "**ASG のヘルスチェック対象**: EC2 Status Check(デフォルト)・ ELB Health Check ・ Custom(API 経由)。RDS Backup は ASG とは無関係。複数を組合せて誤判定を防ぐ。",
  },
  {
    id: "saa-q27",
    category: "サーバレス",
    difficulty: 2,
    question:
      "**Lambda の冷起動(Cold Start)を緩和する** 設定として最も適切なものを選びなさい。",
    choices: [
      "Provisioned Concurrency",
      "Reserved Concurrency",
      "Dead Letter Queue",
      "Lambda Layer",
    ],
    correctIndex: 0,
    explanation:
      "**Provisioned Concurrency** で **指定数の関数インスタンスを常時ウォーム** に保ち冷起動を回避。Reserved Concurrency は上限制御。Lambda Layer は依存共有、DLQ は失敗時の退避。",
  },
  {
    id: "saa-q28",
    category: "CloudFront",
    difficulty: 3,
    question:
      "**動的コンテンツ + 静的コンテンツ混在の Web サイト** で CloudFront のオリジン設定として最も適切なものを選びなさい。",
    choices: [
      "S3(静的)+ ALB(動的)を Behavior でパス分割",
      "全部 S3 にアップロード",
      "全部 EC2 のみ",
      "CloudFront は静的専用なので使えない",
      ],
    correctIndex: 0,
    explanation:
      "**CloudFront は Behavior でパス別に異なるオリジン**(S3 ・ ALB ・ EC2 ・ カスタム HTTP)に振り分け可能。`/static/*` → S3、`/api/*` → ALB のように設定。動的にも対応。",
  },
  {
    id: "saa-q29",
    category: "セキュリティ",
    difficulty: 3,
    question:
      "**KMS(Key Management Service)で管理する CMK の種類** として **誤っているもの** を選びなさい。",
    choices: [
      "AWS Managed Key(AWS が管理)",
      "Customer Managed Key(顧客が管理)",
      "AWS Owned Key(AWS が完全所有、顧客不可視)",
      "Public Internet Key(誰でも利用可)",
    ],
    correctIndex: 3,
    explanation:
      "**CMK の 3 種類**: AWS Managed(AWS が自動管理)・ Customer Managed(顧客がローテーション ・ ポリシー制御)・ AWS Owned(完全 AWS 所有 ・ 顧客不可視)。Public Key は KMS の概念ではない。",
  },
  {
    id: "saa-q30",
    category: "ネットワーク",
    difficulty: 3,
    question:
      "**オンプレミス → AWS 専用ネットワーク** を構築したい。最も適切なサービスを選びなさい。",
    choices: [
      "Direct Connect",
      "Site-to-Site VPN",
      "Transit Gateway",
      "PrivateLink",
    ],
    correctIndex: 0,
    explanation:
      "**Direct Connect** は **専用線**(MPLS / 光ファイバ)で安定した高帯域接続。**Site-to-Site VPN** は **インターネット経由の暗号化トンネル**(低コスト、帯域変動)。Transit Gateway は VPC ハブ、PrivateLink はサービス間。",
  },
  { id: "saa-q31", category: "S3", difficulty: 3, question: "**S3 Cross-Region Replication(CRR)** の典型用途として最も適切なものを選びなさい。", choices: ["災害対策 ・ レイテンシ削減 ・ コンプライアンス", "ストレージ削減", "暗号化", "課金削減"], correctIndex: 0, explanation: "**CRR**: バケットレベルで別リージョンへ自動レプリケーション。**コンプライアンス**(地域別データ保管)・ **災害対策** ・ **遠隔地ユーザのレイテンシ削減**。同リージョン版は **SRR**。" },
  { id: "saa-q32", category: "DynamoDB", difficulty: 3, question: "DynamoDB の **Global Tables** の特徴として最も適切なものを選びなさい。", choices: ["複数リージョン Active-Active レプリケーション + Last-Writer-Wins", "単一リージョン", "読み取り専用", "MySQL 互換"], correctIndex: 0, explanation: "**Global Tables**: マルチリージョン Active-Active(全リージョン書込可)+ Last-Writer-Wins(タイムスタンプ)で結果整合。グローバルアプリのレイテンシ最小化に。" },
  { id: "saa-q33", category: "DynamoDB", difficulty: 3, question: "DynamoDB の **DAX(DynamoDB Accelerator)** の役割として最も適切なものを選びなさい。", choices: ["DynamoDB 専用 in-memory キャッシュ(マイクロ秒応答)", "DB の別名", "管理コンソール", "課金最適化"], correctIndex: 0, explanation: "**DAX**: フルマネージドキャッシュクラスタ。読み込みヘビーで **マイクロ秒応答** が必要なアプリ(ゲーム / IoT)に。一貫したキャッシュ無効化 + API は DynamoDB 互換。" },
  { id: "saa-q34", category: "ECS / EKS", difficulty: 3, question: "**ECS Fargate** と **ECS on EC2** の使い分けとして最も適切なものを選びなさい。", choices: ["Fargate: サーバレス ・ 運用ゼロ / EC2: 細かい制御 ・ コスト最適化", "両者同じ", "Fargate は古い", "EC2 は廃止"], correctIndex: 0, explanation: "**Fargate**: タスク単位で課金 ・ サーバ管理不要 ・ コスト高め。**ECS on EC2**: VM 管理あり ・ Spot で大幅割引 ・ 細かいネットワーク制御。大規模本番は EC2 + Spot で最適化することが多い。" },
  { id: "saa-q35", category: "API Gateway", difficulty: 3, question: "**API Gateway** の主機能として **誤っているもの** を選びなさい。", choices: ["REST / HTTP / WebSocket API のルーティング", "認証 ・ レート制限 ・ キャッシュ", "Lambda / EC2 / VPC へのプロキシ", "GPU 学習"], correctIndex: 3, explanation: "**API Gateway**: API の入口 ・ 認証(Cognito / IAM / Lambda Authorizer)・ 流量制御 ・ キャッシュ ・ 監視。Lambda Backend と組合せでサーバレス API の定石。GPU は無関係。" },
  { id: "saa-q36", category: "メッセージング", difficulty: 3, question: "**SQS / SNS / EventBridge / Kinesis** の使い分けで **SNS** に該当するものを選びなさい。", choices: ["Pub/Sub fan-out(1 メッセージを複数 Subscriber に配信)", "FIFO キュー", "イベントバス(複雑なルーティング)", "ストリーミング"], correctIndex: 0, explanation: "**SNS**: Pub/Sub (topic → 複数 subscriber)。**SQS**: 永続キュー。**EventBridge**: 高度ルーティング ・ Schema Registry。**Kinesis**: 順序保証ストリーミング。役割が異なる。" },
  { id: "saa-q37", category: "SAA 設計", difficulty: 3, question: "**疎結合(Loose Coupling)** を実現するパターンとして **誤っているもの** を選びなさい。", choices: ["SQS でキューを挟む", "ELB で接続を抽象化", "Service Discovery で動的解決", "全コンポーネントを 1 EC2 に集約"], correctIndex: 3, explanation: "**疎結合**: コンポーネント間に **キュー / API / Service Discovery** を挟み変更耐性を上げる。1 EC2 集約は **密結合 + SPoF** で疎結合の対極。" },
  { id: "saa-q38", category: "セキュリティ", difficulty: 3, question: "**AWS WAF** の役割として最も適切なものを選びなさい。", choices: ["Web アプリへの SQL Injection / XSS / Bot 等の攻撃をフィルタリング", "DDoS 対策専用", "VPC ファイアウォール", "IAM の代替"], correctIndex: 0, explanation: "**WAF**: CloudFront / ALB / API Gateway / AppSync の前段で **L7 攻撃フィルタリング**(OWASP Top 10 ルール、Bot Control、Rate-based)。**Shield**(DDoS 対策)と併用が標準。" },
  { id: "saa-q39", category: "セキュリティ", difficulty: 3, question: "**AWS Shield Advanced** が **AWS Shield Standard** より優れる点として最も適切なものを選びなさい。", choices: ["L7 DDoS 防御 + 24/7 DDoS Response Team + コスト保護", "L3/L4 のみ", "無料", "管理不要"], correctIndex: 0, explanation: "**Shield Standard**(無料 ・ L3/L4 自動防御)/ **Shield Advanced**(月 3000 USD ~・ L7 + DRT + スケーリングコスト保護)。Enterprise の重要 Web 向け。" },
  { id: "saa-q40", category: "ストレージ", difficulty: 3, question: "**EBS のボリュームタイプ** で **高 IOPS が必要なデータベース** に最適なものを選びなさい。", choices: ["io2 Block Express(超高 IOPS)", "st1(Throughput Optimized HDD)", "sc1(Cold HDD)", "gp2"], correctIndex: 0, explanation: "**io2 Block Express**: 最大 256K IOPS ・ 4000 MB/s ・ 99.999% 耐久性。Tier 1 DB(Oracle / SAP HANA)向け。**gp3**(汎用)は IOPS と Throughput を独立指定可、コスパ良。" },
  { id: "saa-q41", category: "EFS", difficulty: 3, question: "**EFS** が **EBS** と決定的に異なる点として最も適切なものを選びなさい。", choices: ["複数 EC2 から同時マウント可(NFS 共有ファイルシステム)", "ブロックレベル", "単一インスタンス専用", "AZ をまたげない"], correctIndex: 0, explanation: "**EFS(Elastic File System)**: NFS v4 ・ 複数 EC2 / Lambda / ECS が同時マウント可 ・ 自動スケール ・ AZ 跨ぎ。**EBS** は単一 EC2 ブロックストレージ(EBS Multi-Attach は限定的)。" },
  { id: "saa-q42", category: "FSx", difficulty: 3, question: "**FSx for Windows / NetApp ONTAP / Lustre** の使い分けで **HPC / 機械学習** に最適なものを選びなさい。", choices: ["FSx for Lustre(ハイスループット並列ファイルシステム)", "FSx for Windows", "FSx for NetApp ONTAP", "EFS"], correctIndex: 0, explanation: "**FSx for Lustre**: HPC / ML 向け並列 FS。S3 連携(データレイク連携)も可能。**Windows**: SMB アクセス。**NetApp ONTAP**: マルチプロトコル + Snapshot。" },
  { id: "saa-q43", category: "Cost", difficulty: 3, question: "**AWS Compute Optimizer** の用途として最も適切なものを選びなさい。", choices: ["過去使用率から EC2 / Lambda / EBS のサイズ最適化を推奨", "課金停止", "リージョン移動", "新サービス申込"], correctIndex: 0, explanation: "**Compute Optimizer**: ML 解析で **過剰プロビジョニング検知** + 最適インスタンスタイプ推奨(EC2 / ASG / Lambda / EBS / Fargate / RDS)。**Cost Explorer** とセットで使うのが定石。" },
  { id: "saa-q44", category: "Cost", difficulty: 3, question: "**Cost Explorer** が **Cost and Usage Report(CUR)** より優れる点として最も適切なものを選びなさい。", choices: ["GUI で素早く可視化 + 予測 ・ 異常検知", "粒度が細かい", "CSV / Parquet 出力", "プログラマブル"], correctIndex: 0, explanation: "**Cost Explorer**: GUI + Anomaly Detection + 12 ヶ月予測 + RI 推奨。**CUR**: 詳細データを S3 へ(Athena 連携)。両者は補完関係。" },
  { id: "saa-q45", category: "DB", difficulty: 3, question: "**RDS Proxy** の役割として最も適切なものを選びなさい。", choices: ["DB コネクションプール + フェイルオーバー高速化", "新規 DB を作成", "暗号化", "課金"], correctIndex: 0, explanation: "**RDS Proxy**: コネクションプール集約 → **DB の接続爆発防止**(Lambda での代表的問題)+ 高速フェイルオーバー + Secrets Manager 統合 + IAM 認証。" },
  { id: "saa-q46", category: "Aurora", difficulty: 3, question: "**Aurora Serverless v2** の特徴として最も適切なものを選びなさい。", choices: ["ACU(Capacity Unit)単位で秒単位スケール ・ 一時停止対応", "VM サイズを固定", "停止不可", "MySQL のみ"], correctIndex: 0, explanation: "**Aurora Serverless v2**: 0.5 〜数百 ACU で **秒単位スケール**。間欠ワークロード ・ 開発環境に最適。v1 と異なり一時停止対応 + 0.5 ACU まで縮小可能。" },
  { id: "saa-q47", category: "Migration", difficulty: 3, question: "**Snow ファミリ** の使い分けで **データセンタごとオンプレ → AWS 移行** に最適なものを選びなさい。", choices: ["Snowmobile(セミトレーラー、最大 100 PB)", "Snowball Edge", "Snowcone", "AWS DataSync"], correctIndex: 0, explanation: "**Snowmobile**: 最大 100 PB の物理輸送(セミトレーラー、特殊用途)。**Snowball Edge**: 80 TB / 一般物理輸送。**DataSync**: ネット転送(数 TB 〜 数 PB)。" },
  { id: "saa-q48", category: "Monitoring", difficulty: 3, question: "**CloudWatch Alarms** で **複数メトリクスの組合せ** を判定する機能として最も適切なものを選びなさい。", choices: ["Composite Alarm", "Metric Filter", "Logs Insights", "Anomaly Detection"], correctIndex: 0, explanation: "**Composite Alarm**: 複数 Alarm を AND/OR で結合 → 誤報削減。**Metric Filter**: ログから数値抽出。**Anomaly Detection**: ML ベース異常検知。すべて補完関係。" },
  { id: "saa-q49", category: "Well-Architected", difficulty: 2, question: "AWS **Well-Architected Framework** の **6 つの柱** に含まれないものを選びなさい。", choices: ["Operational Excellence", "Security", "Reliability", "Marketing Excellence"], correctIndex: 3, explanation: "**Well-Architected 6 柱**: Operational Excellence / Security / Reliability / Performance Efficiency / Cost Optimization / Sustainability(2021 追加)。Marketing は無関係。" },
  { id: "saa-q50", category: "次のステップ", difficulty: 1, question: "AWS SAA 合格後の **AWS Pro レベル** 認定を選びなさい。", choices: ["Solutions Architect Professional(SAP-C02)", "Cloud Practitioner", "AI Practitioner", "再受験"], correctIndex: 0, explanation: "**SAA → SAP-C02(Professional)** が王道。横展開で **DEA-C01(Data Engineer)・ MLA-C01(ML Engineer)・ Security Specialty** など Specialty へ。" },
  { id: "saa-q51", category: "Lambda", difficulty: 3, question: "**Lambda の Reserved Concurrency** の役割として最も適切なものを選びなさい。", choices: ["特定関数に同時実行枠を予約 + 他関数への影響を分離", "永続化", "GPU 共有", "DB 接続"], correctIndex: 0, explanation: "**Reserved Concurrency**: アカウント全体の同時実行 1000 制限を関数別に予約。**他関数の暴走から保護 + 他関数を圧迫しない**。" },
  { id: "saa-q52", category: "Cognito", difficulty: 3, question: "**Cognito User Pool** と **Identity Pool** の違いとして最も適切なものを選びなさい。", choices: ["User Pool: ユーザ認証(サインアップ / イン)、Identity Pool: AWS リソースアクセス用 IAM Role 発行", "両者同じ", "User Pool は廃止", "Identity Pool は古い"], correctIndex: 0, explanation: "**User Pool**: ユーザディレクトリ + OAuth / JWT 発行。**Identity Pool**: External ID(Google / Apple / User Pool 等)→ 一時 AWS Credentials 発行。両者は連携可能。" },
  { id: "saa-q53", category: "Route 53", difficulty: 3, question: "Route 53 の **Routing Policy** で **地理的に近いリージョンへルーティング** するものを選びなさい。", choices: ["Geolocation / Latency-based Routing", "Simple", "Weighted", "Failover"], correctIndex: 0, explanation: "**Geolocation**: ユーザの位置で固定マッピング。**Latency-based**: 最低レイテンシのリージョンへ動的。**Geoproximity** は重み付き地理ルーティング。" },
  { id: "saa-q54", category: "Storage Gateway", difficulty: 3, question: "**AWS Storage Gateway** の用途として最も適切なものを選びなさい。", choices: ["オンプレ → AWS への透過的ハイブリッドストレージ", "S3 の代替", "EBS の拡張", "GPU 共有"], correctIndex: 0, explanation: "**Storage Gateway**: オンプレ側に仮想アプライアンス → File / Volume / Tape Gateway モードで S3 / Glacier 連携。**バックアップ ・ アーカイブ ・ クラウド移行** に。" },
  { id: "saa-q55", category: "Database", difficulty: 3, question: "**DynamoDB Streams** の用途として最も適切なものを選びなさい。", choices: ["テーブル変更を時系列イベントとして Lambda / Kinesis に流す(CDC)", "テーブル削除", "GUI", "認証"], correctIndex: 0, explanation: "**DynamoDB Streams**: テーブルのアイテム変更(Insert/Modify/Remove)を 24h 保持 + Lambda Trigger 連携。**CDC ・ Replication ・ Audit Log** で活用。" },
  { id: "saa-q56", category: "ElastiCache", difficulty: 3, question: "**ElastiCache for Redis** と **Memcached** の使い分けとして最も適切なものを選びなさい。", choices: ["Redis: 高機能(Pub/Sub / Sort / Geo / 永続化)、Memcached: 単純 KVS + Multi-thread", "両者同じ", "Memcached は廃止", "Redis 必須"], correctIndex: 0, explanation: "**Redis**: 多データ型 / Pub/Sub / Geo / TTL / Replication / Cluster Mode / 永続化。**Memcached**: 純粋 KVS + Multi-thread で大容量シンプル。" },
  { id: "saa-q57", category: "AppSync", difficulty: 3, question: "**AWS AppSync** の主用途として最も適切なものを選びなさい。", choices: ["マネージド GraphQL API + Subscription / Realtime", "REST API のみ", "認証専用", "DB 直接"], correctIndex: 0, explanation: "**AppSync**: マネージド GraphQL。**DynamoDB / Lambda / RDS / OpenSearch / HTTP** をデータソース化 + WebSocket Subscription でリアルタイム。Mobile / Web SPA の API バックエンド。" },
  { id: "saa-q58", category: "Config", difficulty: 3, question: "**AWS Config** の主用途として最も適切なものを選びなさい。", choices: ["リソース構成変更の継続記録 + コンプライアンスルール評価", "リソース起動", "GPU 監視", "認証"], correctIndex: 0, explanation: "**AWS Config**: リソース変更履歴 + Rules(JSON / Lambda)で **コンプライアンス自動評価**。CIS / PCI DSS / HIPAA / 社内ルール準拠を継続監視。" },
  { id: "saa-q59", category: "Organizations", difficulty: 3, question: "**AWS Organizations** の **SCP(Service Control Policy)** の用途として最も適切なものを選びなさい。", choices: ["子アカウントで使えるサービス / API を組織レベルで制限", "ユーザ作成", "GPU 管理", "認証"], correctIndex: 0, explanation: "**SCP**: 組織 / OU / アカウント単位の **権限境界**。IAM Policy より上位の制限。**Deny(明示拒否)も Allow(許可リスト)** も可能。" },
  { id: "saa-q60", category: "Backup", difficulty: 3, question: "**AWS Backup** の用途として最も適切なものを選びなさい。", choices: ["EC2 / EBS / RDS / DynamoDB / EFS の統合バックアップ管理", "EC2 のみ", "Manual のみ", "GPU バックアップ"], correctIndex: 0, explanation: "**AWS Backup**: 横断的 Backup Plan(Schedule + Retention)+ Vault + Cross-Region / Cross-Account コピー + コンプライアンス(SOX / HIPAA)。" },
  { id: "saa-q61", category: "Inspector", difficulty: 3, question: "**Amazon Inspector** の主用途として最も適切なものを選びなさい。", choices: ["EC2 / ECR / Lambda の脆弱性自動スキャン", "ネットワーク監視", "Cost 分析", "GUI 作成"], correctIndex: 0, explanation: "**Inspector v2**: 自動継続スキャン → CVE / 不適切設定検出 → CVSS スコア + Security Hub 連携。**GuardDuty(脅威検知)** とセット。" },
  { id: "saa-q62", category: "Cost", difficulty: 3, question: "**EC2 Reserved Instance** の特徴として **誤っているもの** を選びなさい。", choices: ["1 年 / 3 年コミット で 30-70% 割引", "Standard / Convertible / Scheduled の 3 種", "Instance Family 変更可能(Convertible)", "リアルタイム起動 ・ 停止"], correctIndex: 3, explanation: "**RI**: 期間コミットで割引。**Standard**(変更不可、最大割引)・ **Convertible**(Family 変更可、中割引)・ **Scheduled**(時間枠予約)。リアルタイム ・ 短時間は Spot 推奨。" },
  { id: "saa-q63", category: "Networking", difficulty: 3, question: "**NAT Gateway** と **NAT Instance** の違いとして **誤っているもの** を選びなさい。", choices: ["NAT Gateway: マネージド + 高可用 + 高スループット", "NAT Instance: EC2 ベース ・ 自分で管理", "NAT Gateway は AZ 単位", "NAT Instance は廃止"], correctIndex: 3, explanation: "**NAT Instance は廃止されておらず** カスタム要件で利用可能(Security Group など追加制御)。**NAT Gateway は標準推奨**(マネージド ・ 高 SLA)。" },
  { id: "saa-q64", category: "Performance", difficulty: 3, question: "**Application Load Balancer(ALB)** の **Sticky Session** の Cookie として正しいものを選びなさい。", choices: ["AWSALBCORS / AWSALB(application-controlled も可)", "JSESSIONID 必須", "ALB は Sticky 非対応", "Random UUID"], correctIndex: 0, explanation: "**ALB Sticky Session**: Duration-based(AWS 管理 Cookie)or Application-based(アプリ Cookie で完全制御)。**WebSocket / Stateful アプリ** で必要。" },
  { id: "saa-q65", category: "Architecture", difficulty: 3, question: "**Saga パターン** の用途として最も適切なものを選びなさい。", choices: ["マイクロサービス間の分散トランザクション管理(Compensation)", "GUI 作成", "DB 設計", "認証"], correctIndex: 0, explanation: "**Saga**: 各サービスのローカル Tx + 失敗時の補償操作で **2PC 不要の分散整合性**。**Step Functions / AppSync / EventBridge** で実装可能。" },
  { id: "saa-q66", category: "Compute", difficulty: 3, question: "**EC2 Spot Instance** の特徴として最も適切なものを選びなさい。", choices: ["余剰容量を最大 90% 割引で利用 ・ 2 分前通知で中断可能性あり", "予約割引", "On-demand 高速版", "GPU 専用"], correctIndex: 0, explanation: "**Spot**: 最大 90% off。**Spot Fleet / Spot Block / Capacity-optimized Pricing**。**EKS / ECS / EMR / SageMaker / Batch** で Checkpoint と組合せて活用。" },
  { id: "saa-q67", category: "Compute", difficulty: 3, question: "**Auto Scaling Group** の **Scaling Policies** として **誤っているもの** を選びなさい。", choices: ["Target Tracking(CPU 50% 維持等)", "Step Scaling(段階増減)", "Scheduled Scaling(時間ベース)", "Manual GPU 配布"], correctIndex: 3, explanation: "**ASG Policies**: Target Tracking(目標値追従)・ Step Scaling(閾値超過量で増減)・ Scheduled(時間 ・ Cron)・ Predictive(ML 予測)・ Dynamic Scaling。" },
  { id: "saa-q68", category: "Storage", difficulty: 3, question: "**S3 Storage Class** で **Intelligent-Tiering** の特徴として最も適切なものを選びなさい。", choices: ["アクセスパターンを監視 → 自動階層移行(取り出しコストなし)", "常に Standard", "常に Glacier", "GPU 階層"], correctIndex: 0, explanation: "**Intelligent-Tiering**: Frequent → Infrequent → Archive Instant → Archive → Deep Archive を自動移行。**未知 / 変動アクセス**に最適。**Lifecycle Policy** より柔軟。" },
  { id: "saa-q69", category: "Storage", difficulty: 3, question: "**EBS Volume Type** で **gp3** の特徴として最も適切なものを選びなさい。", choices: ["容量と IOPS / スループットを独立に設定可 ・ gp2 より安価で高性能", "HDD ベース", "テープ", "GPU メモリ"], correctIndex: 0, explanation: "**gp3**(汎用 SSD): Baseline 3,000 IOPS / 125 MB/s + 追加課金で増量。**gp2 比 20% 安価**。**io1 / io2**(高 IOPS)・ **st1 / sc1**(HDD)・ **Provisioned IOPS** で使い分け。" },
  { id: "saa-q70", category: "Database", difficulty: 3, question: "**Aurora** の特徴として **誤っているもの** を選びなさい。", choices: ["MySQL / PostgreSQL 互換 + クラウドネイティブ", "ストレージ自動拡張 + 6 重 / 3 AZ レプリ", "Read Replica 最大 15 個", "オンプレ専用"], correctIndex: 3, explanation: "**Aurora**: AWS マネージド RDB ・ MySQL/PG 互換 ・ ストレージ Compute 分離 ・ 6 コピー / 3 AZ ・ Aurora Serverless v2 ・ Global Database ・ ML Integration(Bedrock 連携)。クラウド専用。" },
  { id: "saa-q71", category: "Database", difficulty: 3, question: "**DynamoDB** の **Read Capacity Mode** として **誤っているもの** を選びなさい。", choices: ["Provisioned(事前確保)", "On-Demand(従量)", "Auto Scaling(動的調整)", "GPU Mode"], correctIndex: 3, explanation: "**DynamoDB**: Provisioned(RCU / WCU 事前確保 + Auto Scaling)or **On-Demand**(従量 ・ スパイク対応)。**Global Tables**(マルチリージョン)・ **Streams**(CDC)・ **DAX**(キャッシュ)。" },
  { id: "saa-q72", category: "Networking", difficulty: 3, question: "**VPC Peering** と **Transit Gateway** の使い分けとして最も適切なものを選びなさい。", choices: ["Peering=2 VPC 限定 ・ Transit Gateway=多対多 ハブスポーク", "両者同じ", "Peering=多対多", "Transit Gateway=2 VPC のみ"], correctIndex: 0, explanation: "**VPC Peering**: 1:1 ・ 推移性なし。**Transit Gateway**: ハブ&スポーク ・ 多対多 + VPN / Direct Connect / SD-WAN 統合。**RAM** で組織横断共有も。" },
  { id: "saa-q73", category: "Networking", difficulty: 3, question: "**CloudFront** の主要用途として **誤っているもの** を選びなさい。", choices: ["静的コンテンツ配信(画像 / JS / CSS)", "動的コンテンツ加速(Origin Shield / Lambda@Edge)", "WAF / Shield 連携", "DB バックアップ"], correctIndex: 3, explanation: "**CloudFront**: グローバル CDN。**Origin Shield**(キャッシュ層)・ **Lambda@Edge / CloudFront Functions**(エッジ計算)・ **WAF / Shield Advanced** 連携。DB バックアップは S3 / AWS Backup。" },
  { id: "saa-q74", category: "Security", difficulty: 3, question: "**IAM Role** と **IAM User** の使い分けとして最も適切なものを選びなさい。", choices: ["User=人間 + Access Key、Role=AssumeRole で一時クレデンシャル(EC2 / Lambda)", "両者同じ", "Role=人間専用", "User=サーバ専用"], correctIndex: 0, explanation: "**IAM User**: 人間 ・ 長期 Access Key リスク。**Role**: 一時クレデンシャル(STS)・ EC2 / Lambda / Cross-Account / Federation。**IAM Identity Center / SSO** で SAML 統合。" },
  { id: "saa-q75", category: "Security", difficulty: 3, question: "**KMS Key Type** として **誤っているもの** を選びなさい。", choices: ["AWS Managed Key(aws/service)", "Customer Managed Key(CMK)", "AWS Owned Key", "GPU Key"], correctIndex: 3, explanation: "**KMS Keys**: AWS Managed(無料 ・ 制御限定)・ Customer Managed(完全制御 ・ Rotation 設定可)・ AWS Owned(完全 AWS 側)。**Multi-Region Keys / External Key Store(XKS)** も。" },
  { id: "saa-q76", category: "高可用性", difficulty: 3, question: "**Multi-AZ vs Multi-Region** の使い分けとして最も適切なものを選びなさい。", choices: ["Multi-AZ=AZ 障害対策(同期レプリ)、Multi-Region=リージョン障害 / DR / Latency(非同期)", "両者同じ", "Multi-AZ=高コスト", "Multi-Region=不要"], correctIndex: 0, explanation: "**Multi-AZ**: 同期レプリ ・ Failover 数十秒 ・ 標準 HA。**Multi-Region**: 非同期 ・ DR / 地域 Latency / 規制対応。**Route 53 Failover / Aurora Global / S3 CRR / DynamoDB Global Tables**。" },
  { id: "saa-q77", category: "Architecture", difficulty: 3, question: "**Well-Architected Framework** の 6 つの柱として **誤っているもの** を選びなさい。", choices: ["運用上の優秀性 / セキュリティ", "信頼性 / パフォーマンス効率", "コスト最適化 / 持続可能性", "GPU 性能最大化"], correctIndex: 3, explanation: "**WA 6 Pillars**(2021+): Operational Excellence / Security / Reliability / Performance Efficiency / Cost Optimization / **Sustainability**(2021 追加 ・ 環境)。**WA Tool / Lens** で診断。" },
  { id: "saa-q78", category: "Cost", difficulty: 3, question: "**Reserved Instance / Savings Plans** の特徴として最も適切なものを選びなさい。", choices: ["1〜3 年コミットで最大 72% 割引 ・ Savings Plans は柔軟", "On-demand と同価格", "Spot より安価", "GPU 専用"], correctIndex: 0, explanation: "**RI**: Standard(タイプ固定)・ Convertible(変更可)。**Savings Plans**: Compute(全タイプ柔軟)/ EC2 Instance / SageMaker。最大 72% off。**Spot は最大 90% だが中断あり**。" },
  { id: "saa-q79", category: "Migration", difficulty: 3, question: "**6 R's**(クラウド移行戦略)として **誤っているもの** を選びなさい。", choices: ["Rehost(Lift & Shift)/ Replatform / Repurchase", "Refactor / Retain / Retire", "Relocate(VMware Cloud on AWS 等)", "Reproduce GPU"], correctIndex: 3, explanation: "**7 R's**: Rehost / Replatform / Repurchase(SaaS)/ **Refactor**(クラウドネイティブ化)/ Retain(残す)/ Retire(廃止)/ Relocate(2021 追加)。AWS MGN / DRS / DMS で実行支援。" },
  { id: "saa-q80", category: "実務", difficulty: 3, question: "AWS SAA で頻出の **典型 Well-Architected 設計** として最も適切なものを選びなさい。", choices: ["Multi-AZ ALB + Auto Scaling + RDS Multi-AZ + S3 + CloudFront + WAF + KMS + IAM Role", "EC2 1 台のみ", "VPC なし", "Public Subnet のみ"], correctIndex: 0, explanation: "**SAA 王道設計**: ALB(Multi-AZ)+ Auto Scaling Group + RDS Multi-AZ + ElastiCache + S3 + CloudFront + WAF + Shield + KMS + IAM Role + VPC Endpoint + CloudWatch / X-Ray。**6 Pillars 全てカバー**。" },
];
