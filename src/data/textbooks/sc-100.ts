import type { Textbook } from "@/types/content";

export const sc100Textbook: Textbook = {
  levelSlug: "sc-100",
  title: "Microsoft Cybersecurity Architect Expert(SC-100)教科書",
  intro:
    "**Microsoft Certified: Cybersecurity Architect Expert(SC-100)** は **Zero Trust + Microsoft Security Stack(Defender XDR / Sentinel / Entra / Purview / Intune)+ Compliance + AI Security + Resilience** の **統合設計** を担う Cybersecurity Architect 認定。AZ-500 / SC-200 / SC-300 等の Associate 取得 + Architect 実務経験が前提の Expert レベル試験です。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "SC-100 と Zero Trust 戦略",
      overview: "試験全体像 + Zero Trust 3 原則 / 6 Pillars + MCRA。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の基本情報",
          blocks: [
            { type: "p", text: "**SC-100** は Microsoft の Cybersecurity Architect Expert 認定(2022 リリース)です。Zero Trust 戦略 ・ Microsoft Security 統合設計 ・ コンプライアンス ・ AI セキュリティ ・ Resilience を体系的に問います。" },
            { type: "list", style: "bullet", items: [
              "**問題数 / 時間**: 40〜60 問 / 120 分前後",
              "**合格点**: 700/1000 ・ 受験料 165 USD",
              "**有効期限**: 1 年(無料更新試験あり)",
              "**前提**: AZ-500 / SC-200 / SC-300 / MS-500 等 + Architect 実務",
            ] },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Zero Trust の 3 原則と 6 要素",
          blocks: [
            { type: "h3", text: "3 原則(Microsoft Zero Trust Principles)" },
            { type: "list", style: "bullet", items: [
              "**Verify Explicitly**(明示的に検証): 認証 + Device + Location + Risk",
              "**Use Least Privilege Access**(最小特権): JIT / JEA + Risk-based AC",
              "**Assume Breach**(侵害を前提): Microsegmentation + Telemetry + Detection",
            ] },
            { type: "h3", text: "6 Pillars + 横断" },
            { type: "list", style: "bullet", items: [
              "**Identities** / **Endpoints** / **Apps**",
              "**Data** / **Infrastructure** / **Network**",
              "+ 横断: **Visibility & Analytics** / **Automation & Orchestration**",
            ] },
          ],
        },
        {
          id: "ch1-sec3",
          number: "1.3",
          title: "MCRA(Microsoft Cybersecurity Reference Architecture)",
          blocks: [
            { type: "p", text: "**MCRA**: Microsoft Security 製品を **NIST CSF / Zero Trust / SASE / Kill Chain** に紐付けた公式リファレンス。**Architect の出発点**として参照。" },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Identity ・ Access Architecture",
      overview: "Entra ID / Conditional Access / PIM / Permissions Management / External ID / Verified ID。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Microsoft Entra ファミリ",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Entra ID**(旧 Azure AD): Workforce + B2B + Hybrid",
              "**Entra ID Protection**(P2): Risk-based AC + Identity Threat Detection",
              "**Entra External ID**(2024 統合): B2B + B2C Customer ID",
              "**Entra Verified ID**: 分散型 ID(DID + Verifiable Credential)",
              "**Entra Permissions Management**(CIEM): マルチクラウド IAM 過剰権限管理",
              "**Entra Workload ID**: Service Principal / Managed Identity の Conditional Access",
              "**Entra Internet / Private Access**(SASE / ZTNA)",
            ] },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Conditional Access 設計",
          blocks: [
            { type: "p", text: "**Signal** → **Decision**(Allow / Block / MFA / Compliant Device / Approved App / Session Control)→ **Enforcement**。" },
            { type: "h3", text: "拡張機能" },
            { type: "list", style: "bullet", items: [
              "**Authentication Strength**: MFA 方式の強制(Phishing 耐性のみ等)",
              "**Continuous Access Evaluation(CAE)**: Token 有効期間中も Risk 発生で即 Revoke",
              "**Risk-based CA**: User Risk + Sign-in Risk 評価",
            ] },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "Privileged Identity Management(PIM)+ PAW",
          blocks: [
            { type: "p", text: "**PIM**: Eligible → Active(承認 + MFA + 時限)。**PAW**(Privileged Access Workstation): 特権操作専用隔離 PC。**Tier 0 / 1 / 2 モデル**で資格情報分離 → Pass-the-Hash 対策。" },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Defender XDR + Sentinel",
      overview: "Defender XDR の統合範囲 / Sentinel の SIEM+SOAR / UEBA / Threat Intelligence。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "Defender XDR 統合",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Defender for Endpoint**(EDR / MDE)",
              "**Defender for Identity**(オンプレ AD 監視 / 旧 ATP)",
              "**Defender for Office 365**(Email / SharePoint / Teams)",
              "**Defender for Cloud Apps**(旧 MCAS / CASB)",
              "**Defender for Cloud**(Azure / AWS / GCP の CSPM + CWPP)",
              "**Defender for IoT**(OT / IoT デバイス保護)",
              "**統合 Incident View + Automated Investigation + Response(AIR)**",
            ] },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Sentinel(SIEM + SOAR)",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Data Connector**(150+ Source / Azure / AWS / GCP / SaaS)",
              "**Analytics Rule(KQL)**: Scheduled / Near-Real-Time / Fusion / ML",
              "**UEBA**(User Entity Behavior Analytics)",
              "**Threat Intelligence**(TAXII / Microsoft / Custom)",
              "**Workbook / Hunting / Notebook(Jupyter)**",
              "**Playbook(Logic Apps)**: SOAR 自動対応",
            ] },
            { type: "intuition", title: "💡 Defender XDR vs Sentinel", body: "**Defender XDR**: Microsoft 製品の XDR 統合。**Sentinel**: 全 Source の SIEM + SOAR。**Sentinel → Defender XDR Connector** で統合運用が標準。" },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Copilot for Security",
          blocks: [
            { type: "p", text: "**Microsoft Copilot for Security**(2024 GA): GenAI ベース SOC アシスタント。**Sentinel / Defender XDR / Intune / Purview 統合**。Incident Summarization / Guided Investigation / Threat Hunting / KQL 補完 / Report 生成。**SCU**(Security Compute Unit)課金。" },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Defender for Cloud + CNAPP",
      overview: "CSPM + CWPP + CIEM + DevOps Security + Data Security Posture。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Defender for Cloud の 2 機能",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**CSPM**(Cloud Security Posture Management): Secure Score / Compliance / Recommendations",
              "**CWPP**(Cloud Workload Protection Platform): Plans 別(Server / Storage / SQL / Containers / DB / DNS / AI 等)",
              "**Defender CSPM(Premium)**: Attack Path Analysis / Cloud Security Explorer / Agentless Scanning / DevOps Security",
            ] },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "マルチクラウド対応",
          blocks: [
            { type: "p", text: "**AWS / GCP 統合**: Connector + IAM Role / Service Account で Posture 取得。**Arc 経由でオンプレ**も。**GitHub / Azure DevOps**(DevOps Posture)も統合。**Defender for Cloud が CNAPP**(2024 強化)。" },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Attack Path と Cloud Security Explorer",
          blocks: [
            { type: "p", text: "**Attack Path Analysis**: 脆弱性 + 過剰権限 + 露出 → 攻撃経路グラフを自動生成。**Cloud Security Explorer**: KQL 風クエリでクラウド資産横断検索。Architect の Risk Assessment に必須。" },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Purview + Compliance + AI Security",
      overview: "Data Governance / DLP / Insider Risk / Compliance Manager / AI Security。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Microsoft Purview 統合",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Data Map / Catalog / Lineage**(Azure / AWS / GCP / オンプレ統合)",
              "**Information Protection / Sensitivity Label**(M365 統合)",
              "**DLP**(Data Loss Prevention)",
              "**Insider Risk Management**(内部不正 / 退職者持出検知)",
              "**Communication Compliance**(Copilot 利用監査含む)",
              "**eDiscovery / Records Management**",
              "**Compliance Manager**(320+ Regulation テンプレ)",
              "**Purview AI Hub**(2024+ AI 利用監視)",
            ] },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Compliance Framework",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**NIST CSF 2.0**(2024.2): Govern + Identify + Protect + Detect + Respond + Recover の 6 機能",
              "**ISO/IEC 27001**(ISMS 国際標準)",
              "**SOC 1/2/3**(AICPA Trust Services Criteria)",
              "**GDPR**(EU 個人情報)・ **個人情報保護法**(日本)",
              "**FedRAMP / FedRAMP High**(米国政府)",
              "**ISMAP**(日本政府)・ **FISC 安全対策基準**(日本金融)",
              "**HIPAA**(医療)・ **PCI-DSS**(クレジットカード)",
            ] },
            { type: "p", text: "**Service Trust Portal**: 100+ 認定の Audit Report / DPA を Tenant 限定で取得可能。" },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "AI Security(OWASP LLM Top 10 + Microsoft 製品)",
          blocks: [
            { type: "h3", text: "OWASP Top 10 for LLM(2024)" },
            { type: "list", style: "bullet", items: [
              "LLM01: Prompt Injection",
              "LLM02: Insecure Output Handling",
              "LLM06: Sensitive Information Disclosure",
              "LLM07: Insecure Plugin Design",
              "LLM08: Excessive Agency",
              "LLM10: Model Theft",
            ] },
            { type: "h3", text: "Microsoft AI Security 製品" },
            { type: "list", style: "bullet", items: [
              "**Defender for Cloud AI Security Posture**(2024+)",
              "**Purview AI Hub**(AI 利用可視化)",
              "**Communication Compliance for Copilot**",
              "**Azure AI Content Safety + Prompt Shields + Groundedness**",
              "**Sentinel AI Connectors**(ChatGPT Activity 等)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Network / Container / DevSecOps / Resilience / 受験対策",
      overview: "Microsegmentation / SASE / Container Security / DevSecOps / Resilience / Adoption Framework。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Network Security と SASE",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Microsegmentation**: NSG / ASG / Azure Firewall + 3rd Party NVA",
              "**Private Endpoint**: PaaS リソースを VNet 内 Private IP 化",
              "**Microsoft Global Secure Access**(2024 GA): Entra Internet + Private + M365 Access",
              "**SASE = SD-WAN + SWG + ZTNA + CASB + FWaaS + DLP**",
            ] },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "Container Security と DevSecOps",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Image スキャン**: Trivy / Defender Vulnerability Assessment",
              "**Runtime 保護**: Defender for Containers / Falco",
              "**Supply Chain**: SBOM(SPDX / CycloneDX)・ Sigstore / Cosign 署名 ・ SLSA",
              "**Shift Left**: IDE / Pre-commit / CI で SAST(CodeQL)+ SCA(Dependabot)+ Secret Scan + IaC Scan",
              "**GitHub Advanced Security** + Defender for DevOps",
            ] },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Resilience 戦略",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Ransomware 対策**: 3-2-1-1-0 バックアップ + Air-Gap + Immutable + EDR",
              "**Identity Resilience**: Multi-IdP + Break-Glass Account",
              "**Network Resilience**: Multi-Region + Hot DR + Failover",
              "**ISO 22301**(BCMS)+ NIST CSF Recover",
            ] },
          ],
        },
        {
          id: "ch6-sec4",
          number: "6.4",
          title: "Threat Modeling と Frameworks",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**STRIDE**(Microsoft Threat Modeling Tool)",
              "**MITRE ATT&CK Framework**(Tactic / Technique / Procedure)",
              "**Cyber Kill Chain**(Lockheed Martin)",
              "**Diamond Model**(Adversary / Capability / Infrastructure / Victim)",
            ] },
          ],
        },
        {
          id: "ch6-sec5",
          number: "6.5",
          title: "受験対策と次のステップ",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Microsoft Learn SC-100 ラーニングパス**",
              "**MCRA + Zero Trust Architecture**(公式 PDF)",
              "**Security Adoption Framework**",
              "**ケーススタディ重視**: Zero Trust 移行 / Ransomware / Insider / Compliance / M&A / Cloud Migration",
              "**実機ハンズオン**: Defender / Sentinel Trial",
            ] },
            { type: "h3", text: "合格後のキャリアパス" },
            { type: "list", style: "bullet", items: [
              "**AZ-305(Solutions Architect Expert)** で全体設計",
              "**SC-200 / SC-300 / SC-400** で領域専門化",
              "**CISSP / CCSP / CISM / OSCP** で業界横断",
              "**マルチクラウドセキュリティ**: AWS Security Specialty / GCP PCSE",
            ] },
            { type: "practical", title: "SC-100 のキャリア価値", body: "Cybersecurity Architect / CISO 候補 / Security Consultant 等のポジションで強いシグナル。**Microsoft Security Stack の統合設計力**は Defender + Sentinel + Entra + Purview を導入する大企業 / SI で需要急増。" },
            { type: "h3", text: "結びに" },
            { type: "p", text: "SC-100 は単なる試験ではなく、**Zero Trust 時代の Architect として組織を導く設計思考**を体系化する機会です。教科書を起点に MCRA / Zero Trust 公式ドキュメントを実機ハンズオンと並行で読み込み、実務での Architect Review に活かしてください。" },
          ],
        },
      ],
    },
  ],
};
