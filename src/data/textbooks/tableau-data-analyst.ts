import type { Textbook } from "@/types/content";

export const tableauDataAnalystTextbook: Textbook = {
  levelSlug: "tableau-data-analyst",
  title: "Tableau Certified Data Analyst 教科書",
  intro:
    "**Tableau Certified Data Analyst** は Tableau Specialist の上位、中級 BI Analyst の実務力を測る認定。**Connect / Prep / LOD・Calc / Dashboard / Story / Server・Cloud / Sharing / Pulse・AI** までの一通りを扱います。**実務 3-6 ヶ月推奨 ・ Performance Task(ハンズオン)あり**の試験です。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "Data Analyst ─ 試験の全体像",
      overview: "試験形式 ・ Specialist との違い ・ Skills 4 領域。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験基本情報",
          blocks: [
            { type: "p", text: "**Tableau Certified Data Analyst**(2022+ 新体系)は Specialist の上位 ・ 中級認定です。" },
            { type: "list", style: "bullet", items: [
              "**問題数 / 時間**: 38 問 / 120 分(うち 6-8 問 Performance Task ハンズオン)",
              "**合格点**: 750/1000 ・ 受験料 250 USD",
              "**有効期限**: 2 年",
              "**前提**: 実務 3-6 ヶ月推奨",
            ] },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "Skills 4 領域",
          blocks: [
            { type: "list", style: "bullet", items: [
              "Connecting and Preparing Data",
              "Exploring and Analyzing Data",
              "Sharing Insights",
              "Understanding Tableau Concepts",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Connect / Prep",
      overview: "Live / Extract / Relationships / Cross-DB Join / Tableau Prep。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "接続パターン",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Live**: リアルタイム DB クエリ ・ 鮮度高 / 遅い",
              "**Extract(Hyper)**: 列指向 + 並列 ・ 高速 / Refresh 必要",
              "**Published Data Source**: Server / Cloud で共有",
              "**Cross-Database Join / Data Blending**(粒度違い)",
            ] },
            { type: "p", text: "**Relationships(2020.2+)**: Logical Layer で柔軟 Join ・ ビュー単位で最適 Join 自動選択 → 粒度違い問題を緩和。" },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Tableau Prep",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Step Type**: Input / Clean / Aggregate / Pivot / Join / Union / Output / Script(Python/R)",
              "**Prep Conductor**: Server で Flow スケジュール",
              "**Incremental Refresh**: 増分のみ処理",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "Calculation ─ LOD / Table Calc / VAR / 関数群",
      overview: "LOD 3 種 / Iterator / Logical / Date / String / Aggregation。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "LOD Expression",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**FIXED**: 指定 Dim のみで集計(ビューの他 Dim 無視)",
              "**INCLUDE**: 現次元 + 指定追加",
              "**EXCLUDE**: 現次元から除外",
            ] },
            { type: "p", text: "**実行順**: Data Source Filter → **LOD** → Dimension Filter → Aggregations → **Table Calc**。**Customer LTV / Cohort 分析**等で必須。" },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Table Calc(Window Function)",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**RUNNING_SUM / WINDOW_AVG / RANK / FIRST / LAST / LOOKUP**",
              "**Compute Using**(Table / Pane / Cell / Specific Dim)で方向制御",
              "**Quick Table Calc**: 主要パターンを GUI で一発適用",
            ] },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "Logical / Date / String / Aggregation",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Logical**: IF / CASE / IIF / ISNULL / IFNULL / **ZN**",
              "**Date**: DATEADD / DATEDIFF / DATEPART / DATETRUNC / TODAY / NOW",
              "**String**: LEFT / RIGHT / MID / CONTAINS / SPLIT / REGEXP_EXTRACT",
              "**Aggregation**: SUM / AVG / COUNT / COUNTD / MEDIAN / PERCENTILE / **ATTR**(全行同値)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Visualization / Dashboard / Story",
      overview: "Show Me / Filter / Parameter / Set / Container / Action / Annotation / Reference Line。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Filter / Parameter / Set",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Filter 順序**: Extract → Data Source → Context → Dimension → Measure → Table Calc",
              "**Parameter Action**: クリックで Parameter 更新 → Top N / What-If",
              "**Set Action**: マーク選択で Set 更新 → 動的セグメンテーション",
              "**Set vs Group**: Set=動的(条件式)・ Group=静的(手動)",
            ] },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Dashboard 構成",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Container**: Horizontal / Vertical で Responsive Layout",
              "**Action**: Filter / Highlight / URL / Go to Sheet / Set / Parameter / Navigate",
              "**Device Designer**: Default / Phone / Tablet 別レイアウト",
              "**Annotation**: Mark / Point / Area で注釈",
              "**Reference Line / Band / Distribution**: 統計基準を Viz に重ねる",
            ] },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Story Telling Best Practice",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**F-pattern Layout**(重要 KPI 左上)",
              "**色を意味で統一**(Brand / Status / Diverging)",
              "**1 画面 1 メッセージ + Top-Down Hierarchy**",
              "**Cole Knaflic / Stephen Few**(Information Dashboard Design)",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Server / Cloud / Sharing / Security",
      overview: "Site Role / Permission / RLS / OLS / Subscription / Bridge / Connected Apps。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "Site Role と Permission",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Site Role**: Server Admin / Site Admin Creator / Site Admin Explorer / Creator / Explorer(Can Publish)/ Explorer / Viewer / Unlicensed",
              "**Permission 階層**: Site → Project(Locked / Customizable)→ Workbook → View",
            ] },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "RLS / OLS / Connected Apps",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**RLS**: User Filter / Entitlements Table Join + USERNAME()",
              "**Virtual Connection**(2022+): RLS / OLS を中央定義",
              "**Connected Apps**(2022+): JWT で External App に Embed Authentication",
            ] },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "Subscription / Alert / Bridge",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Subscription**: スケジュール Email(画像 + PDF + Link)",
              "**Data Driven Alerts**: 閾値超過時通知",
              "**Slack 統合**(2022+)",
              "**Tableau Bridge**: オンプレ DB を Cloud から Live / Refresh",
            ] },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "Performance / AI / 受験対策",
      overview: "Performance Recorder / Pulse / Einstein Copilot / 受験対策。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "Performance 改善",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Performance Recorder**: Query / Compiling / Geocoding / Layout 時間内訳",
              "**Extract + Filter 順序最適化**",
              "**Aggregation + Pre-join Avoidance**",
              "**避けるべき**: 巨大 Custom SQL / 多用 LOD / 大量 Quick Filter",
            ] },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "AI / Pulse / Einstein",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Explain Data**(2019.3+): Why Insight 自動生成",
              "**Tableau Pulse**(2024 GA): Personalized Metric + Anomaly + NL",
              "**Einstein Copilot for Tableau**(2024+): NL → Viz / Calc / Story",
              "**Forecast**(Holt-Winters)・ **Cluster**(K-means + Calinski-Harabasz)",
            ] },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "受験対策",
          blocks: [
            { type: "list", style: "bullet", items: [
              "**Tableau Trail**(公式 LMS)・ Hands-on Trial",
              "**Sample Workbook + Performance Task 練習**",
              "**Free Tableau Public** で実機演習",
            ] },
            { type: "h3", text: "次のステップ" },
            { type: "list", style: "bullet", items: [
              "**Tableau Server Certified Associate**(Server 管理)",
              "**Salesforce Tableau Architect**(2024 新設)",
              "**Power BI PL-300 / Looker / Fabric DP-600** でマルチ BI",
            ] },
            { type: "p", text: "**結びに**: Data Analyst は Tableau での実務力の中核です。**Tableau Public でポートフォリオを作る**ことが学習 + 転職活動の両面で強力なシグナルになります。" },
          ],
        },
      ],
    },
  ],
};
