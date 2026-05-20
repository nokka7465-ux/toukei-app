import type { Textbook } from "@/types/content";

export const azureAz305Textbook: Textbook = {
  levelSlug: "azure-az-305",
  title: "Microsoft Azure Solutions Architect Expert(AZ-305)教科書",
  intro:
    "**Microsoft Certified: Azure Solutions Architect Expert(AZ-305)** は Azure 上のソリューション設計を担う Architect 認定。**ID(Entra ID / Conditional Access / PIM)・ ガバナンス(Policy / Management Group)・ コンピュート / ストレージ / DB / ネットワーク / セキュリティ / 業務継続 / 移行 / コスト / 監視** を統合設計します。**AZ-104(Administrator)/ AZ-204(Developer)合格 + 実務経験**が前提の Expert 認定です。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "AZ-305 ─ 試験の全体像と前提",
      overview: "試験形式 ・ 出題範囲 ・ Associate 認定との関係。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の基本情報",
          blocks: [
            { type: "p", text: "**AZ-305** は Microsoft Azure Solutions Architect Expert 認定の必須試験です(旧 AZ-303 + AZ-304 統合)。" },
            { type: "h3", text: "試験概要" },
            { type: "list", style: "bullet", items: [
              "**試験コード**: AZ-305(Designing Microsoft Azure Infrastructure Solutions)",
              "**問題数 / 時間**: 40〜60 問 / 120 分前後",
              "**合格点**: 700/1000 ・ 受験料 165 USD",
              "**有効期限**: 1 年(無料更新試験あり)",
              "**前提**: AZ-104(Administrator)合格 + Azure 実務経験 1-2 年以上推奨",
            ] },
            { type: "intuition", title: "💡 AZ-305 の出題傾向", body: "**ケーススタディ多用**: 顧客状況 → 最適 Azure サービス選定 → トレードオフ。**ID / Network / Compute / Data / Security / BCP / Migration / Cost / Monitor** の横断統合設計が問われる。" },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Skills Measured 5 ドメイン",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Identity / Governance / Monitor 設計**(25-30%)",
              "**データストレージ設計**(20-25%)",
              "**Business Continuity 設計**(15-20%)",
              "**インフラストラクチャ設計**(25-30%)",
              "コスト / 監視 / マイグレーションは横断トピック",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Identity ・ Governance ・ Monitor 設計",
      overview: "Entra ID / Conditional Access / PIM / Policy / Management Group / Monitor。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Microsoft Entra ID と認証戦略",
          blocks: [
            { type: "p", text: "**Microsoft Entra ID**(旧 Azure AD)は Azure / M365 / SaaS / Custom App の SSO 基盤。**Tenant ・ Directory** をまず正しく設計します。" },
            { type: "h3", text: "認証方式の選択" },
            { type: "list", style: "bullet", items: [
              "**Cloud-only**: Entra ID 単独 ・ 新規組織向け",
              "**Hybrid**: オンプレ AD + Entra Connect / Cloud Sync",
              "**Federated**: ADFS / Third-party IdP との連携(2024 では非推奨化)",
              "**Passwordless**: Passkey / FIDO2 / Windows Hello / Authenticator",
            ] },
            { type: "h3", text: "Conditional Access" },
            { type: "p", text: "**Signal**(User / App / Location / Device / Risk)→ **Decision**(Allow / Block / MFA / Compliant Device)→ **Enforcement**。**Zero Trust の中核**。" },
            { type: "h3", text: "PIM(Privileged Identity Management)" },
            { type: "p", text: "特権 Role の Just-in-Time(Eligible → Active)+ 承認 + MFA + Audit。**Global Administrator** 等の最小特権原則を実装。" },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Azure Policy と Management Group",
          blocks: [
            { type: "h3", text: "階層と継承" },
            { type: "list", style: "bullet", items: [
              "**Tenant > MG(階層 6 段)> Subscription > RG > Resource**",
              "**Policy / RBAC**: 上位スコープで継承(原則として下位で上書きしない)",
              "**Initiative**: 複数 Policy を束(例: ISO 27001 / NIST SP 800-53)",
              "**Effect**: Audit / Deny / Append / Modify / DeployIfNotExists / AuditIfNotExists",
            ] },
            { type: "practical", title: "Landing Zone 設計", body: "**Azure Landing Zone(ALZ)**: 大規模 Azure 導入の標準テンプレ。**Platform**(共有 Service)+ **LZ**(業務 Subscription)・ Bicep / Terraform Accelerator で IaC 提供。" },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "Azure Monitor と Log Analytics",
          blocks: [
            { type: "h3", text: "Data Source" },
            { type: "list", style: "bullet", items: [
              "**Metrics**: 時系列数値 ・ Near Real-Time",
              "**Logs**: Log Analytics Workspace ・ KQL クエリ",
              "**Application Insights**: APM ・ Distributed Tracing",
              "**Resource Logs / Activity Log / Service Health**",
            ] },
            { type: "h3", text: "Alert と Action Group" },
            { type: "p", text: "**Alert Rule**(Metric / Log Search / Activity Log Alert)→ **Action Group**(Email / SMS / Teams / Webhook / Logic Apps / Functions)。**Workbook / Dashboard** で可視化。" },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "コンピュート設計",
      overview: "VM / VMSS / App Service / Container Apps / AKS / Functions / Logic Apps の使い分け。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Compute 階層",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**VM(IaaS)**: 完全 OS 制御 ・ レガシー移行 / 特殊要件",
              "**VMSS**: VM Scale Set(Autoscale + LB 統合)",
              "**AKS**: Managed Kubernetes ・ 完全 K8s API",
              "**Container Apps**: K8s 風 Serverless(KEDA + Dapr)",
              "**App Service**: Web PaaS(Free → Premium v3 → Isolated v2 / ASE)",
              "**Functions**: イベント駆動 FaaS(Consumption / Premium / Dedicated)",
              "**Logic Apps**: 統合 / Workflow(コードレス Integration)",
              "**Batch**: 大規模 HPC / Job 並列",
            ] },
            { type: "intuition", title: "💡 即答フローチャート", body: "**OS 制御必要 → VM / VMSS** ・ **K8s 知識あり → AKS** ・ **K8s 知識なし → Container Apps** ・ **Web App + 軽い API → App Service** ・ **イベント駆動 / 短時間 → Functions** ・ **統合 / SaaS Connector → Logic Apps**。" },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Cost 最適化",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Reserved Instance(1y/3y)+ Savings Plan**",
              "**Spot VM**(最大 90% off / 30 秒前通知で中断)",
              "**Auto Shutdown / Autoscaling**",
              "**Azure Hybrid Benefit**(Windows / SQL の License Reuse)",
              "**B-series Burstable VM**(変動負荷向け)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "ストレージ ・ データベース設計",
      overview: "Blob / Files / NetApp ・ SQL DB / Managed Instance / Cosmos DB / PostgreSQL / MySQL の使い分け。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Storage 設計",
          blocks: [
            { type: "h3", text: "Storage Account 設計" },
            { type: "list", style: "bullet", items: [
              "**Replication**: LRS(Local)・ ZRS(Zone)・ GRS / GZRS(Geo)・ RA-GRS",
              "**Tier**: Hot / Cool / Cold / Archive / Premium",
              "**Lifecycle Policy**(自動階層化)・ Immutable Storage(WORM)",
              "**Private Endpoint + Disable Public Access**",
            ] },
            { type: "h3", text: "Files / NetApp / NFS の使い分け" },
            { type: "list", style: "bullet", items: [
              "**Azure Files**: SMB / NFS 4.1 ・ AD 統合 ・ 汎用",
              "**Azure NetApp Files**: 超低レイテンシ NAS ・ SAP HANA / HPC / EDA",
              "**Azure Managed Disks**: VM 用 Block Storage",
            ] },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "RDB 設計",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Azure SQL Database**: PaaS ・ Single DB / Elastic Pool / Hyperscale",
              "**Managed Instance**: SQL Server 高互換 ・ オンプレ移行向け",
              "**SQL VM**: 完全制御 ・ レガシー機能 ・ Always On AG 等",
              "**Database for PostgreSQL Flexible Server**: 2022+ 主流",
              "**Database for MySQL Flexible Server**",
              "**Cosmos DB for PostgreSQL**: 分散 PostgreSQL(Citus 統合)",
            ] },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "NoSQL / Cache / Search",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Cosmos DB**: マルチモデル(NoSQL / MongoDB / Cassandra / Gremlin / Table / PostgreSQL)+ Multi-region + 99.999% SLA",
              "**Cosmos DB 整合性**: Strong → Bounded Staleness → Session → Consistent Prefix → Eventual(5 段階)",
              "**Azure Cache for Redis**: Cache(Standard / Premium / Enterprise)",
              "**AI Search**(旧 Cognitive Search): 全文 + Vector + Semantic Ranker",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "ネットワーク ・ ハイブリッド設計",
      overview: "VNet / Peering / VPN / ExpressRoute / Front Door / App Gateway / Bastion / Private Endpoint。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "VNet と接続パターン",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**VNet Peering**: Azure 内 VNet 間 ・ Backbone 経由 ・ 低レイテンシ",
              "**VPN Gateway**: Site-to-Site / Point-to-Site ・ IPsec / IKEv2 / OpenVPN",
              "**ExpressRoute**: 物理 Private 回線 ・ 50 Mbps - 10 Gbps / 100 Gbps",
              "**Virtual WAN**: 大規模 Hub-Spoke の統合管理",
              "**Azure Route Server**: BGP で動的ルーティング",
            ] },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Hub-Spoke パターン",
          blocks: [
            { type: "p", text: "中央 **Hub**(Firewall / Bastion / VPN / DNS / Shared Services)+ **Spoke**(App / Data / Management VNet)。Spoke 間通信は Hub 経由 ・ **NVA**(Network Virtual Appliance)で詳細制御も可。" },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Load Balancing / WAF",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Load Balancer**: L4 ・ Regional ・ Internal / Public",
              "**Application Gateway**: L7 ・ Regional ・ WAF v2",
              "**Front Door**: L7 ・ Global Edge ・ CDN + WAF",
              "**Traffic Manager**: DNS ベース Global LB",
              "**Application Gateway for Containers**: AKS Ingress(2024+)",
            ] },
          ],
        },
        {
          id: "ch5-sec4",
          number: "5.4",
          title: "Hybrid と Azure Arc",
          blocks: [
            { type: "p", text: "**Azure Arc** で オンプレ / 他クラウドの VM / K8s / SQL / PostgreSQL を Azure として管理。**Azure Stack**(Hub / Edge / HCI)で完全プライベートな Azure 互換環境。" },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "セキュリティ ・ コンプライアンス設計",
      overview: "Defender for Cloud / Sentinel / Key Vault / Firewall / Private Endpoint / WAF / DDoS / Compliance。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Defender for Cloud と Sentinel",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Defender for Cloud**: CSPM(Posture)+ CWPP(Workload)・ マルチクラウド対応(AWS / GCP 統合)",
              "**Microsoft Sentinel**: Cloud-native SIEM + SOAR ・ Log Analytics 基盤",
              "**Microsoft Purview**: Data Governance + DLP + Sensitivity Label",
              "**Microsoft Defender XDR**: Endpoint + Identity + Office + Cloud Apps 統合",
            ] },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Key Vault と暗号化",
          blocks: [
            { type: "p", text: "**Key Vault**: HSM-backed Secrets / Keys / Certificates。**Standard / Premium / Managed HSM**(FIPS 140-2 Level 3)。**BYOK / CMK** で顧客制御 ・ **Always Encrypted / TDE**(SQL)・ **CMK with Customer-Managed Encryption Key** で Storage / SQL / Cosmos / Service Bus 等を暗号化。" },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Compliance",
          blocks: [
            { type: "p", text: "**Trust Portal** で 100+ 認定: ISO 27001 / SOC 1/2/3 / GDPR / HIPAA / PCI-DSS / **FedRAMP / FedRAMP High** / **ISMAP**(日本政府)/ **FISC**(金融庁)/ 医療 3 省 2 ガイドライン。**Compliance Manager** でセルフアセスメント + Audit。" },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "Business Continuity ・ 移行設計",
      overview: "RPO / RTO ・ Backup / ASR ・ Multi-Region パターン ・ Azure Migrate ・ 7 R's。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "RPO / RTO と BCP",
          blocks: [
            { type: "p", text: "**RPO**(Recovery Point Objective): データ損失許容時間。**RTO**(Recovery Time Objective): 復旧時間。**業務影響度評価(BIA)** で各システムの RPO/RTO を定義 → BCP / DR 設計。" },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "Backup と ASR",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Azure Backup**: Recovery Services Vault ・ Point-in-Time 復元 ・ VM / SQL / Files / Workload-aware",
              "**Azure Site Recovery(ASR)**: Region 間レプリ + Failover / Failback ・ DR + 移行両用",
              "**Azure Backup vs ASR**: Backup=データ保護、ASR=DR ・ ワークロード移行",
            ] },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "Multi-Region と AZ",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**AZ(Availability Zone)**: Region 内に 3+ 物理独立 DC ・ Zone Redundant Storage / Service",
              "**Region Pair**: 主従(東日本 / 西日本 等)・ Geo Replication 推奨",
              "**Multi-Region パターン**: Active-Active / Active-Passive / Pilot Light / Warm Standby / Backup-Restore",
              "**Traffic Manager / Front Door** で Failover 制御",
            ] },
          ],
        },
        {
          id: "ch7-sec4",
          number: "7.4",
          title: "Azure Migrate と 7 R's",
          blocks: [
            { type: "p", text: "**Azure Migrate**: Discovery + Assessment + Migration Hub。VMware / Hyper-V / 物理 / AWS / GCP からの移行対応。" },
            { type: "list", style: "bullet", items: [
              "**Rehost(Lift & Shift)**: VM をそのまま移行",
              "**Replatform**: 少し改修(IaaS → PaaS)",
              "**Repurchase**: SaaS に切替え",
              "**Refactor**: クラウドネイティブに再構築",
              "**Retain / Retire / Relocate**(Hypervisor Level、2021+)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Well-Architected と受験対策",
      overview: "WAF 5 柱 ・ Cloud Adoption Framework ・ 受験対策と次のステップ。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "Well-Architected Framework",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Reliability**(信頼性): RTO / RPO / Resiliency / Failure Mode 分析",
              "**Security**: Zero Trust / Defense in Depth / Least Privilege",
              "**Cost Optimization**: RI / Spot / Tag / Autoscale",
              "**Operational Excellence**: IaC / DevOps / Observability",
              "**Performance Efficiency**: Caching / Autoscale / SKU 適正化",
            ] },
            { type: "intuition", title: "💡 WAF レビュー", body: "**Azure WAF Tool**(無料)で各柱の質問に答えて自己評価 → Remediation Plan 生成。Architect 実務でも頻用。" },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Cloud Adoption Framework(CAF)",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Strategy**: ビジネス動機 ・ KPI 定義",
              "**Plan**: Cloud Adoption Plan 作成",
              "**Ready**: Landing Zone 準備",
              "**Adopt**: Migrate / Innovate",
              "**Govern / Manage / Secure**: 継続運用",
            ] },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "受験対策と次のステップ",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Microsoft Learn AZ-305 ラーニングパス**",
              "**Azure Architecture Center**(公式リファレンス)",
              "**Cloud Adoption Framework / Well-Architected Framework**",
              "**Azure Skills Navigator + Practice Assessment**",
              "**実機ハンズオン**(Subscription での実装)",
            ] },
            { type: "h3", text: "次のステップ" },
            { type: "list", style: "bullet", items: [
              "**AZ-400**(DevOps Engineer Expert)で DevOps 専門",
              "**SC-100**(Cybersecurity Architect Expert)でセキュリティ",
              "**AI-102 / DP-100 / DP-203 / DP-600 / DP-700** で領域専門化",
              "**AWS SAA-Pro / GCP Pro Architect** でマルチクラウド",
            ] },
            { type: "practical", title: "AZ-305 のキャリア価値", body: "**Expert 認定として履歴書 / LinkedIn の Top Skill**。Azure Architect / Senior SA / Solution Architect / Cloud Lead ポジションの応募で強いシグナル。AWS SAP-C02 / GCP Pro Architect と並べて持つと**マルチクラウド Architect** として希少性が高まる。" },
            { type: "h3", text: "結びに" },
            { type: "p", text: "AZ-305 は単なる試験ではなく、Azure を組織で活用するための設計思考フレームワークです。教科書と演習問題を反復しつつ、実機での Landing Zone 構築や Well-Architected Review を通じて知識を体得してください。" },
          ],
        },
      ],
    },
  ],
};
