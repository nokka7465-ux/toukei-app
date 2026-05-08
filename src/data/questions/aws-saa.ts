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
];
