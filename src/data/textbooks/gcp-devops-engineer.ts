import type { Textbook } from "@/types/content";

export const gcpDevopsEngineerTextbook: Textbook = {
  levelSlug: "gcp-devops-engineer",
  title: "GCP Professional Cloud DevOps Engineer 教科書",
  intro:
    "**GCP Professional Cloud DevOps Engineer** は **SRE / DevOps / CI-CD / Observability / Incident Response / DataOps** を統合する Professional 認定。Google は **SRE の発祥企業**として **SLI / SLO / Error Budget / Toil / Blameless Postmortem** の概念を体系化しており、本試験は SRE 実務知識を強く問います。本サイト初の **SRE / Observability / DataOps カテゴリ**の中核認定です。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "Pro DevOps ─ 試験概要と SRE 原則",
      overview: "試験形式 ・ SRE 5 原則 ・ Topic Area。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験基本情報",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**試験**: Professional Cloud DevOps Engineer",
              "**問題数 / 時間**: 50-60 問 / 120 分",
              "**合格点 / 受験料**: 非公開(70% 程度推定)・ 200 USD",
              "**有効期限**: 2 年",
              "**前提**: GCP 実務 3 年(うち DevOps 1 年)推奨",
            ] },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Google SRE 5 原則",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Embrace Risk**: 100% 信頼性は不可能 ・ Error Budget で適切な水準",
              "**Set Service Level Objectives**: SLI 測定 → SLO 目標 → SLA 契約",
              "**Eliminate Toil**: 手作業の自動化 ・ Engineering Time 確保",
              "**Monitor your services**: 4 Golden Signals(Latency / Traffic / Errors / Saturation)",
              "**Blameless Postmortem**: 非難なし ・ Process / Tool で再発防止",
            ] },
            { type: "p", text: "**Google SRE Book**(O'Reilly 無料)が公式リファレンス。SRE Workbook も併読推奨。" },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "SLI / SLO / Error Budget",
      overview: "Service Level の定義 / 計測 / 運用。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "SLI / SLO / SLA の関係",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**SLI**(Indicator): 測定値(Availability / Latency / Error Rate / Throughput / Correctness)",
              "**SLO**(Objective): 目標(例: 99.9% Availability / p95 Latency < 200ms)",
              "**SLA**(Agreement): 契約 ・ 違反時の罰則(SLO より低めに設定が定石)",
            ] },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Error Budget",
          blocks: [
            { type: "p", text: "**Error Budget = 100% - SLO**。例: SLO 99.9% → Budget 0.1% = 43.8 分 / 月。**Budget 残量で機能 Release / 安定化の意思決定**。" },
            { type: "h3", text: "Burn Rate Alert" },
            { type: "list", style: "bullet", items: [
              "**Fast Burn**(短時間で大幅消費): 高い Alert 優先度",
              "**Slow Burn**(長時間でゆっくり消費): 低い Alert 優先度",
              "**Multi-window / Multi-burn-rate**(2-Window): False Positive 低減",
            ] },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "Cloud Monitoring の SLO 機能",
          blocks: [
            { type: "p", text: "**Cloud Monitoring SLO**: GUI で SLI → SLO 定義 ・ Error Budget 自動計算 ・ Burn Rate Alert 自動生成 ・ Dashboard 自動。**OpenTelemetry Metric**から SLI 構築も可。" },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Observability ─ Logs / Metrics / Traces / Profile",
      overview: "Cloud Monitoring / Logging / Trace / Profiler / OpenTelemetry。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Observability 3 Pillars",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Logs**: イベント記録 ・ Cloud Logging + Logs Explorer(LogQL 風)",
              "**Metrics**: 時系列数値 ・ Cloud Monitoring + Custom Metric",
              "**Traces**: 分散トレース ・ Cloud Trace(OpenTelemetry / Jaeger / Zipkin 互換)",
              "**+ Profiles**: Cloud Profiler(継続的 Profiling ・ 本番常時)",
            ] },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Cloud Monitoring + Logging + Trace + Profiler",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Cloud Monitoring**: GCP Native + Custom + Uptime + Alert + Dashboard + SLO",
              "**Cloud Logging**: 全 GCP Log + Sink(BigQuery / GCS / Pub/Sub / Splunk)+ Logs-based Metrics",
              "**Cloud Trace**: Span / Trace + Latency 分布 + Wall Clock vs CPU",
              "**Cloud Profiler**: CPU / Heap / Wall Clock / Flame Graph(オーバーヘッド <5%)",
            ] },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "OpenTelemetry(OTel)",
          blocks: [
            { type: "p", text: "**OpenTelemetry**(CNCF Graduated): Logs / Metrics / Traces の **3 Pillars 統一仕様** + SDK + OTLP Protocol。**ベンダーロックイン回避**で 2024+ 業界標準。GCP も標準対応。" },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "CI/CD ─ Cloud Build / Deploy / Artifact Registry",
      overview: "Cloud Build / Cloud Deploy / Artifact Registry / Binary Authorization / Supply Chain。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Cloud Build",
          blocks: [
            { type: "p", text: "**Cloud Build**: YAML / JSON で `steps` 定義 ・ Docker / Buildpacks / Custom Builder。**Trigger**: GitHub / GitLab / Bitbucket / Cloud Source Repo。**Approval / Replication / Worker Pool**(Private)対応。" },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Cloud Deploy + Progressive Delivery",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Cloud Deploy**(2022 GA): GitOps スタイル CD",
              "**Pipeline**(Dev → Staging → Prod)+ **Target**(GKE / Cloud Run / Anthos)+ **Release**",
              "**Strategy**: Canary / Blue-Green / Rolling / Recreate",
              "**Approval / Rollback / Verify Phase**",
            ] },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Supply Chain Security",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Artifact Registry**: Container + Helm + Maven + npm + Python + Apt + Yum",
              "**Container Analysis**: Vulnerability Scan",
              "**Binary Authorization**: 署名済 Image のみデプロイ(Attestor + Policy)",
              "**Cosign / Sigstore 統合**(2023+ OSS 互換)",
              "**SLSA**(Supply chain Levels for Software Artifacts)レベル達成",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Compute / IaC / Incident Response",
      overview: "GKE / Cloud Run / Functions / Anthos / Terraform / Incident Response。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Compute 階層",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**GKE Autopilot**(マネージド Node ・ Pod 課金)",
              "**GKE Standard**(Node 制御 ・ VM 課金)",
              "**Cloud Run**(Knative Container Serverless ・ Scale-to-Zero)",
              "**Cloud Run Jobs**(Batch / Cron)",
              "**Cloud Functions Gen 2**(関数 FaaS、Cloud Run ベース)",
              "**App Engine Standard / Flexible**(レガシー PaaS)",
              "**Anthos**(Multi-Cloud / On-prem GKE + Config Management + Service Mesh)",
            ] },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "IaC ─ Terraform + Config Connector",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Terraform + Google Cloud Provider**: GCP IaC 事実標準",
              "**Cloud Foundation Toolkit**(公式 Module)",
              "**Config Connector**: K8s リソースで GCP リソース管理",
              "**Anthos Config Management**: GitOps + Policy(Gatekeeper / OPA)",
              "**Workload Identity Federation**: Service Account Key なし認証",
            ] },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Incident Response",
          blocks: [
            { type: "h3", text: "Crisis Management 役割" },
            { type: "list", style: "bullet", items: [
              "**Incident Commander(IC)**: 指揮 ・ 意思決定",
              "**Communications Lead**: 対外連絡 ・ Status Page 更新",
              "**Operations Lead**: 復旧作業",
              "**Planning**: 状況整理 ・ Action Tracking",
            ] },
            { type: "p", text: "**PagerDuty / Opsgenie / Cloud Monitoring Alert**で Escalation。**Blameless Postmortem** で根本原因 + 再発防止。**Five Whys** が古典分析手法。" },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Network / Security / Database / DataOps / 受験対策",
      overview: "Cloud Armor / Workload Identity / Cloud SQL HA / Spanner Multi-Region / DataOps / 受験対策。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Network + Security",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Global LB**: HTTPS / SSL Proxy / TCP Proxy ・ Anycast IP + Edge POP",
              "**Cloud Armor**: WAF(OWASP)+ DDoS Protection + Bot Management + reCAPTCHA Enterprise",
              "**Cloud IAP**(Identity-Aware Proxy): VPN 代替 ZTNA",
              "**Workload Identity Federation**: 外部 IdP からの SA Key なしアクセス",
              "**Binary Authorization + VPC Service Controls**",
            ] },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Database Reliability",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Cloud SQL HA**: Regional(2 AZ 同期 + Auto Failover 60-120s)+ Cross-Region Replica(DR)",
              "**Cloud Spanner**: 全世界 ACID + TrueTime + 99.999% SLA(Multi-Region)",
              "**Cloud Bigtable**: 低レイテンシ NoSQL + Multi-Region Replica",
              "**Firestore**(Native Mode / Datastore Mode)",
              "**Memorystore**(Redis / Memcached マネージド)",
            ] },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "DataOps の中核プラクティス",
          blocks: [
            { type: "p", text: "**DataOps**(2018 提唱): Agile + DevOps + Lean を Data Pipeline に適用。" },
            { type: "list", style: "bullet", items: [
              "**Data Pipeline の CI/CD**(dbt / Dataform / Airflow / Argo Workflows)",
              "**Data Test**(Great Expectations / Soda Core / dbt tests)",
              "**Schema Management + Backwards Compatibility**",
              "**Data Lineage 監視**(Dataplex)",
              "**Observability**: Logs + Metrics + SLO for Data Pipeline",
              "**DevOps + DataOps + MLOps の統合**(Modern Data Stack)",
            ] },
          ],
        },
        {
          id: "ch6-sec4",
          number: "6.4",
          title: "Cost 最適化",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Committed Use Discount(CUD)**: 1y/3y で 25-57% off",
              "**Spot VM**(旧 Preemptible): 60-91% off ・ 中断あり",
              "**Sustained Use Discount**: 自動適用",
              "**Custom Machine Type**: vCPU / Memory 任意指定",
              "**Autoscaling / Auto-Stop**",
              "**FinOps**: Cost Allocation + Tag + Showback",
            ] },
          ],
        },
        {
          id: "ch6-sec5",
          number: "6.5",
          title: "受験対策と次のステップ",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Google SRE Book**(必読 ・ O'Reilly 無料)",
              "**SRE Workbook**(実践編)",
              "**Google Cloud Skills Boost**(公式 LMS)",
              "**Cloud Architecture Center**(リファレンス)",
              "**Qwiklabs / Cloud Skills Boost Hands-on**",
            ] },
            { type: "h3", text: "合格後のキャリアパス" },
            { type: "list", style: "bullet", items: [
              "**Pro Cloud Architect**(全体設計)",
              "**Pro Cloud Security Engineer**(セキュリティ専門)",
              "**Pro ML Engineer / Data Engineer**(領域専門)",
              "**マルチクラウド SRE**: AWS DOP-C02 / Azure AZ-400",
              "**CNCF 認定**: CKA / CKAD / CKS / FinOps Practitioner",
            ] },
            { type: "practical", title: "SRE / DevOps のキャリア価値", body: "**SRE / DevOps Engineer は 2024-2025 で需要急増**(Cloud Native / Reliability / Observability の重要性高)。**Google の SRE プラクティスは業界標準**で、Senior DevOps / Platform Engineer / SRE Lead ポジションで強いシグナル。" },
            { type: "p", text: "**結びに**: 本認定は **本サイト初の SRE / Observability / DataOps カテゴリ** の中核です。技術知識だけでなく **Reliability 文化 + Blameless 思考 + Toil 削減思想**を体得することが、本物の DevOps Engineer への道のりです。" },
          ],
        },
      ],
    },
  ],
};
