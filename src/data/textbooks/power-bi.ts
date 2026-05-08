import type { Textbook } from "@/types/content";

export const powerBiTextbook: Textbook = {
  levelSlug: "power-bi",
  title: "Microsoft Power BI Data Analyst Associate(PL-300)教科書",
  intro:
    "**Microsoft Power BI Data Analyst Associate(PL-300)** は、Microsoft が提供する **データアナリスト向けの Associate レベル** 認定。**Power BI Desktop / Power BI Service / Power Query / DAX** を使ってデータの取り込み ・ 変換 ・ モデリング ・ 可視化 ・ 共有のライフサイクル全体をカバーする実務寄りの試験です。**ビジネスアナリスト ・ BI 開発者 ・ データアナリスト** が想定対象。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "PL-300 ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 Microsoft 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**PL-300(旧 DA-100)** は Microsoft の **Data Analyst Associate** 認定で、**Power BI を使ったデータ分析** を中核に据えています。**PL-100(Power Platform App Maker)・ PL-200(Power Platform Functional Consultant)** とは別系統で、こちらはデータ分析特化です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Microsoft",
                "**形式**: CBT(Pearson VUE)or オンライン監督受験",
                "**問題数 / 時間**: 約 40 〜 60 問 / 120 分",
                "**回答方式**: 選択式 + ケーススタディ + ドラッグ&ドロップ",
                "**合格スコア**: 700 / 1000",
                "**有効期限**: 1 年(Microsoft Learn での再認定で延長)",
                "**受験料**: 一般 21,103 円(165 USD、参考)",
                "**言語**: 英語 ・ 日本語など複数言語対応",
              ],
            },
            { type: "h3", text: "出題ドメイン(公式試験ガイド)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: データの準備**(25 〜 30%): 取込み ・ クレンジング ・ プロファイリング",
                "**Domain 2: データのモデリング**(25 〜 30%): リレーション ・ DAX ・ 計算列 / メジャー",
                "**Domain 3: データの可視化と分析**(25 〜 30%): レポート ・ ダッシュボード ・ AI ビジュアル",
                "**Domain 4: 資産のデプロイと管理**(15 〜 20%): ワークスペース ・ データセット更新 ・ RLS",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "学習プランと推奨教材",
          blocks: [
            { type: "h3", text: "60 〜 120 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: Power BI Desktop インストール + 基本操作(本教科書 第 2 章)",
                "**Week 2 〜 3**: Power Query M 言語 + データ変換(第 3 〜 4 章)",
                "**Week 4 〜 5**: DAX 基礎 + 計算列 ・ メジャー(第 5 〜 6 章)",
                "**Week 6**: ビジュアル ・ レポート設計(第 7 章)",
                "**Week 7**: Power BI Service ・ デプロイ ・ RLS(第 8 〜 9 章)",
                "**Week 8**: 模擬試験 + 過去問(第 10 章)",
              ],
            },
            {
              type: "intuition",
              title: "Microsoft Learn の PL-300 ラーニングパスが事実上の公式教材",
              body: "**Microsoft Learn** に **PL-300 専用ラーニングパス** が無料で公開されており、ハンズオン込みで網羅的。本サイトの教科書と組み合わせると、概念整理 + 実機操作の両軸で対策できます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Power BI のアーキテクチャ",
      overview:
        "Desktop / Service / Mobile / Gateway の役割を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "Power BI ファミリ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Power BI Desktop**: 開発用 Windows アプリ(無料)。レポート作成の中心",
                "**Power BI Service**: クラウド共有(app.powerbi.com)",
                "**Power BI Mobile**: iOS / Android アプリ",
                "**Power BI Report Server**: オンプレ版",
                "**Power BI Embedded**: アプリ組込み",
                "**Power BI Pro**: 個人ライセンス、共有 ・ 共同作業可",
                "**Power BI Premium**: 容量ベースのエンタープライズ版(Per Capacity / Per User)",
                "**On-premises Data Gateway**: クラウドからオンプレデータへの安全な接続",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "Microsoft Fabric への統合",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Microsoft Fabric**: 統合データ分析プラットフォーム(2023 年〜)",
                "**OneLake**: Fabric の統合データレイク(Delta / Parquet ベース)",
                "**Lakehouse / Warehouse / KQL Database**: 異なるアーキテクチャを統合",
                "**Power BI**: Fabric の可視化 ・ レポート層として位置付け",
                "**Direct Lake mode**: Fabric Lakehouse から直接読み取り",
                "**Copilot in Power BI**: 生成 AI でレポート作成 ・ 解説",
              ],
            },
            {
              type: "p",
              text: "PL-300 の最新バージョンでは **Fabric / OneLake / Direct Lake / Copilot** などの新機能の出題比重が増えており、Microsoft Learn の最新版コンテンツでのキャッチアップが必要です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "データ準備 ─ Power Query",
      overview:
        "データの取込み、クレンジング、結合、M 言語の基礎を整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "データソースとコネクタ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ファイル**: Excel / CSV / JSON / XML / Parquet",
                "**データベース**: SQL Server / Azure SQL / PostgreSQL / MySQL / Oracle",
                "**クラウド**: Azure / AWS / GCP の各種ストレージ ・ DWH",
                "**SaaS**: Dynamics 365 / Salesforce / SharePoint / Google Analytics",
                "**Web**: Web ページ ・ REST API / OData",
                "**ストリーミング**: Azure Stream Analytics / Event Hub",
                "**Power BI Datamart / Dataflow**: 共通データ層",
              ],
            },
            { type: "h3", text: "データ接続モード" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Import モード**: データを Power BI に取込み(高速、容量制限あり)",
                "**DirectQuery モード**: クエリの度にソースに問合せ(常に最新、性能注意)",
                "**Direct Lake モード**: Fabric の OneLake から直接読み取り(2024 〜)",
                "**Live Connection**: SSAS / Azure Analysis Services / Power BI Datasets への接続",
                "**Composite Model**: 上記の組合せ",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "Power Query の基本操作",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**列の削除 ・ 選択 ・ 並べ替え**",
                "**フィルター**: 条件で行を絞る",
                "**置換 / トリム / クリーン**: 文字列操作",
                "**型変換**: 文字列 / 数値 / 日付 / ブール",
                "**ピボット / アンピボット**: 横長 ↔ 縦長変換",
                "**マージ(JOIN)・ アペンド(UNION)**: 結合",
                "**グループ化 ・ 集計**",
                "**例による列の追加**: AI が自動で変換ルールを推測",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "M 言語(Power Query Formula Language)",
          blocks: [
            {
              type: "p",
              text: "**M 言語** は Power Query 内部で使われる関数型言語。GUI 操作の裏では M コードが生成されており、**詳細編集** で直接編集できます。条件分岐 ・ ループ ・ カスタム関数も書けます。",
            },
            {
              type: "code",
              title: "M 言語のシンプルな例",
              python:
                "let\n    Source = Excel.CurrentWorkbook(){[Name=\"Sales\"]}[Content],\n    ChangedType = Table.TransformColumnTypes(Source, {{\"Date\", type date}, {\"Amount\", type number}}),\n    FilteredRows = Table.SelectRows(ChangedType, each [Amount] > 0),\n    Result = Table.RenameColumns(FilteredRows, {{\"Amount\", \"Sales\"}})\nin\n    Result",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "データプロファイリングとクレンジング",
      overview:
        "データ品質の確認と修正、欠測 ・ 外れ値処理を整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "プロファイリング機能",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**列のクオリティ**: 有効値 / エラー / 空の割合",
                "**列の分布**: 一意 / 重複の数",
                "**列のプロファイル**: 統計情報(最小 / 最大 / 平均 / NULL 数)",
                "**監視範囲**: 上位 1,000 行 or 全行",
                "**型推論**: AI による自動型判定",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "クレンジングの定石",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**重複削除**",
                "**NULL / エラー値の処理**: 削除 / 置換",
                "**型変換**: 文字列 → 日付 / 数値",
                "**正規化**: 大文字小文字統一 ・ 全角半角",
                "**外れ値検出**: 統計量 + 視覚",
                "**マスターデータ化**: 共通辞書テーブル",
                "**条件列 / カスタム列の追加**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "データモデリング",
      overview:
        "リレーション ・ スター/スノーフレーク ・ カーディナリティを整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "スターとスノーフレーク",
          blocks: [
            {
              type: "p",
              text: "**スタースキーマ** は中心の **ファクトテーブル**(取引 ・ 売上 ・ ログ)を周辺の **ディメンションテーブル**(顧客 ・ 製品 ・ 日付)が囲む構造。Power BI の **推奨設計パターン** で、性能 ・ 可読性 ・ DAX 書きやすさのすべてで有利。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ファクトテーブル**: 数値メトリクスを保持(売上 ・ 数量 ・ 期間)",
                "**ディメンションテーブル**: 文脈を提供(顧客名 ・ 製品名 ・ 日付詳細)",
                "**スノーフレーク**: ディメンションをさらに正規化(階層化)",
                "**Date テーブル**: 必須。Mark as date table 必要",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "リレーションとカーディナリティ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**1:多(1:N)**: 標準。ディメンション → ファクトの方向",
                "**1:1**: 推奨されない(モデル統合の余地あり)",
                "**多:多(M:N)**: 必要時のみ、ブリッジテーブル推奨",
                "**クロスフィルタの方向**: Single(片方向)・ Both(両方向)",
                "**アクティブ / 非アクティブリレーション**",
                "**USERELATIONSHIP**: DAX で非アクティブを一時有効化",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "階層と分類",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**階層(Hierarchy)**: 年 → 四半期 → 月 → 日 のような階層構造",
                "**カテゴリの設定**: 地理的(URL ・ 緯度経度)・ 画像 URL",
                "**データのソート列**: 月名を 1 〜 12 月順に並べるなど",
                "**集計の既定**: 数値の Sum / Average / Count / Don't summarize",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "DAX(Data Analysis Expressions)",
      overview:
        "計算列 ・ メジャー ・ 主要 DAX 関数を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "計算列とメジャー",
          blocks: [
            {
              type: "def",
              title: "計算列(Calculated Column)vs メジャー(Measure)",
              body: "**計算列**: テーブルに新しい列を追加。**行ごとに計算**、データ更新時に再計算。メモリを消費。\n\n**メジャー**: 集計値を計算。**フィルタ文脈に応じて再計算**、メモリ消費なし。可視化 ・ メトリクスは原則メジャーで実装。",
            },
            { type: "h3", text: "実装の選び方" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**列レベルの値**(行に紐づくフラグ ・ カテゴリ)→ **計算列**",
                "**集計値 ・ KPI**(売上合計 ・ 利益率 ・ 前年比)→ **メジャー**",
                "**迷ったらメジャー**: パフォーマンスとメンテナンス性が高い",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "主要 DAX 関数",
          blocks: [
            { type: "h3", text: "集約関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SUM / AVERAGE / COUNT / COUNTROWS / DISTINCTCOUNT / MIN / MAX**",
                "**SUMX / AVERAGEX**: 行ごとに評価して集計(イテレータ)",
                "**CALCULATE**: フィルタ文脈を変更する最重要関数",
                "**FILTER**: 行レベルフィルタ",
                "**ALL / ALLEXCEPT / ALLSELECTED**: フィルタ削除",
                "**RELATED / RELATEDTABLE**: リレーション越しのアクセス",
              ],
            },
            { type: "h3", text: "Time Intelligence(時系列)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SAMEPERIODLASTYEAR**: 前年同期",
                "**DATEADD**: 日付を ± シフト",
                "**TOTALYTD / TOTALMTD / TOTALQTD**: 累計",
                "**DATESYTD / DATESMTD**: 期間指定",
                "**PARALLELPERIOD**: 平行期間",
                "**Date テーブル必須**: Mark as date table が前提",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "DAX のフィルタ文脈と行文脈",
          blocks: [
            {
              type: "intuition",
              title: "DAX 学習の最大の壁は『フィルタ文脈』",
              body: "**フィルタ文脈** は『どの行が計算対象か』を決める仕組み。スライサー ・ 行 ・ 列 ・ ビジュアル ・ ページのすべてのフィルタが組合さって決まる。**CALCULATE** はこのフィルタ文脈を変更できる唯一の関数で、ここを理解できれば DAX の 80% を理解したと言われます。",
            },
            {
              type: "code",
              title: "CALCULATE の例 ─ 前年比",
              python:
                "// 売上合計\nTotal Sales = SUM(Sales[Amount])\n\n// 前年同期売上\nPY Sales = CALCULATE(\n    [Total Sales],\n    SAMEPERIODLASTYEAR('Date'[Date])\n)\n\n// 前年比成長率\nYoY Growth % = DIVIDE([Total Sales] - [PY Sales], [PY Sales])",
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "ビジュアルとレポート設計",
      overview:
        "標準ビジュアル ・ ダッシュボード ・ デザインを整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "標準ビジュアル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**棒 / 縦棒 / 折れ線 / 面 / コンボ**: カテゴリ比較 ・ 時系列",
                "**散布図 / バブル**: 2 〜 3 変数関係",
                "**ドーナツ / 円**: 構成比(過剰使用に注意)",
                "**マップ / 塗分けマップ / ArcGIS**: 地理可視化",
                "**マトリクス / テーブル**: 詳細表示",
                "**カード / マルチ行カード / KPI / ゲージ**: 単一値 ・ 目標達成度",
                "**ツリーマップ / じょうご / ウォーターフォール / リボン / 分解ツリー**",
                "**スライサー**: フィルタ用ビジュアル",
                "**Q&A ビジュアル**: 自然言語クエリ",
                "**Smart Narrative**: AI による自動コメント生成",
                "**Decomposition Tree**: 階層分解",
                "**Key Influencers**: 影響要因分析(機械学習)",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "高度なビジュアル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**カスタムビジュアル(AppSource)**: コミュニティ ・ サードパーティ製",
                "**R / Python ビジュアル**: 統計 / ML 結果を埋込み",
                "**Deneb(Vega-Lite)**: 高度なカスタム可視化",
                "**条件付き書式**: 値に応じた色 ・ アイコン",
                "**ブックマーク**: 状態保存とナビゲーション",
                "**ツールチップページ**: ホバー時の詳細",
                "**ドリルダウン / ドリルスルー**: 階層 ・ 詳細遷移",
                "**選択 / 編集の交互作用**: ビジュアル間の連動制御",
              ],
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "テーマとアクセシビリティ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**テーマ(JSON)**: 色 ・ フォント ・ 余白の統一",
                "**コーポレートテーマ**: ブランド色適用",
                "**アクセシビリティ**: スクリーンリーダー対応 ・ コントラスト比",
                "**モバイルレイアウト**: 縦長表示の最適化",
                "**ナビゲーション**: ボタン ・ ブックマーク",
                "**ページサイズ**: 16:9 / カスタム",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "Power BI Service とデプロイ",
      overview:
        "ワークスペース ・ アプリ ・ データセット更新を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "ワークスペースとデプロイ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workspaces**: My workspace + 共有ワークスペース",
                "**ワークスペースの役割**: Admin / Member / Contributor / Viewer",
                "**App**: ワークスペースを利用者向けにパッケージ化",
                "**デプロイパイプライン**: Dev → Test → Prod の昇格",
                "**ライセンス**: Pro / Premium Per User(PPU)/ Premium Capacity / Fabric Capacity",
                "**外部共有**: ゲストユーザ ・ B2B / 組織外への共有制御",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "データセット更新とゲートウェイ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**スケジュール更新**: 1 日 8 回(Pro)・ 48 回(Premium)",
                "**増分更新**: 大量データの差分更新",
                "**手動更新 ・ API トリガー**",
                "**On-premises Data Gateway**: クラウド → オンプレ DB の安全な接続",
                "**VNet Gateway**: Azure 仮想ネットワーク連携",
                "**Personal Gateway / Standard(Enterprise)Gateway**",
                "**Dataflow / Datamart**: 共通データ層、再利用",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "セキュリティと共有",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Row-Level Security(RLS)**: 行単位のアクセス制御",
                "**Object-Level Security(OLS)**: 列 ・ テーブル単位の制御",
                "**Sensitivity labels**: Microsoft Purview 統合の機密ラベル",
                "**監査ログ**: M365 監査ログ + Power BI 管理ポータル",
                "**コンプライアンス**: GDPR / HIPAA / ISO 27001 等",
                "**埋込み(Embed)**: Embed for Customers / for Your Organization",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "AI 機能と Copilot",
      overview:
        "Power BI に組み込まれた AI 機能と Copilot を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Power BI の AI ビジュアル",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Q&A ビジュアル**: 自然言語でクエリ",
                "**Key Influencers**: 影響要因分析(自動 ML)",
                "**Decomposition Tree**: 階層的な要因分析",
                "**Smart Narrative**: AI 自動生成コメント",
                "**Anomaly Detection**: 時系列の異常値自動検出",
                "**Forecasting**: 折れ線の予測線(指数平滑)",
                "**Clustering**: 散布図の自動クラスタリング",
                "**Cognitive Services 統合**: 感情分析 ・ キーフレーズ抽出など",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "Copilot in Power BI",
          blocks: [
            {
              type: "p",
              text: "**Copilot in Power BI** は Microsoft の生成 AI を Power BI に統合した機能。Premium / Fabric Capacity が必要で、**自然言語でレポート作成 ・ DAX 提案 ・ レポート要約 ・ ナラティブ生成** ができます。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Create reports**: 自然言語からレポート自動生成",
                "**Generate insights**: データから自動洞察",
                "**Suggest measures**: DAX メジャーの提案 ・ 説明",
                "**Summarize reports**: レポート全体を要約",
                "**Multilingual**: 多言語対応",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "受験対策の総まとめ",
      overview:
        "範囲別チェックリストと試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "範囲別チェックリスト",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**第 2 章**: Desktop / Service / Pro / Premium / Fabric の役割",
                "**第 3 章**: Power Query / Import vs DirectQuery / M 言語",
                "**第 4 章**: プロファイリング / クレンジング",
                "**第 5 章**: スタースキーマ / 1:N / クロスフィルタ",
                "**第 6 章**: 計算列 vs メジャー / CALCULATE / Time Intelligence",
                "**第 7 章**: 標準 / カスタムビジュアル / R/Python / ブックマーク / ドリル",
                "**第 8 章**: ワークスペース / アプリ / 更新 / Gateway / RLS",
                "**第 9 章**: Q&A / Key Influencers / Smart Narrative / Copilot",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**40 〜 60 問 / 120 分** = 1 問 約 2 〜 3 分",
                "**ケーススタディ**: 長文を読み込んで答える形式、時間配分注意",
                "**Power BI Desktop を実機で触る**: スクリーンショット問題が頻出",
                "**Microsoft Learn の練習問題** を必ず受ける",
                "**最新の UI 変更 / Fabric / Copilot** はキャッチアップ",
                "**消去法**: 明らかに不適切な選択肢から除外",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "次のステップ",
          blocks: [
            {
              type: "p",
              text: "PL-300 合格 → **DP-600(Microsoft Fabric Analytics Engineer Associate)** または **DP-700(Fabric Data Engineer Associate)** で Microsoft の最新データ統合プラットフォームを深掘りするのが王道。AWS 派なら **Tableau Desktop Specialist**、SQL 寄りなら **本サイトの[DB スペシャリスト](/certs/db-specialist) ・ [DS エキスパート](/certs/ds-expert)** が補強の候補です。",
            },
            {
              type: "practical",
              title: "PL-300 のキャリア活用",
              body: "PL-300 は **データアナリスト / BI 開発者 / レポーティング担当** での評価が高く、**Microsoft 365 / Power Platform を採用する企業** で特に強いシグナル。**実機操作スキル** を測る試験のため、合格 = 即戦力という評価になりやすいのが特徴です。",
            },
          ],
        },
      ],
    },
  ],
};
