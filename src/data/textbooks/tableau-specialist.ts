import type { Textbook } from "@/types/content";

export const tableauSpecialistTextbook: Textbook = {
  levelSlug: "tableau-specialist",
  title: "Tableau Desktop Specialist 教科書",
  intro:
    "**Tableau Desktop Specialist** は、**Salesforce(Tableau)** が提供する BI ツール認定の **入門レベル** です。Tableau Desktop の基本操作 ・ データ接続 ・ 可視化 ・ 計算 ・ 分析 ・ 共有のライフサイクル全体を扱い、**データアナリスト ・ ビジネスアナリスト ・ レポーティング担当** が想定対象。Microsoft Power BI(PL-300)と並ぶ BI 認定の双璧で、**汎用 ・ 高度可視化** で評価の高い Tableau のスキル証明として位置付けられます。本教科書は出題範囲を 10 章で体系的にカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "Tableau Desktop Specialist ─ 試験の全体像",
      overview:
        "試験形式・出題範囲・他 Tableau 認定との位置付けを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "試験の位置付け",
          blocks: [
            {
              type: "p",
              text: "**Tableau Desktop Specialist** は Tableau の **エントリーレベル** 認定で、Tableau の基礎を測ります。**Tableau Certified Data Analyst**(中級)・ **Tableau Certified Architect / Server Certified Associate**(上位)の前段に位置します。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**主催**: Salesforce(Tableau)",
                "**形式**: オンライン監督受験(自宅 / オフィスから)",
                "**問題数 / 時間**: 45 問 / 60 分",
                "**回答方式**: 多肢選択 + ハンズオン形式の組合せ",
                "**合格スコア**: 約 75%(参考)",
                "**有効期限**: 期限なし(永続)",
                "**受験料**: 100 USD(参考)",
                "**言語**: 英語 ・ 日本語など複数言語対応",
              ],
            },
            { type: "h3", text: "Tableau 認定の階層" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Tableau Desktop Specialist**(本資格): エントリー、Tableau Desktop の基礎",
                "**Tableau Certified Data Analyst**: 中級、データ分析全般",
                "**Server Certified Associate**: Tableau Server の運用",
                "**Salesforce Certified Tableau CRM Consultant**: Salesforce 統合",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "出題範囲と推奨学習プラン",
          blocks: [
            { type: "h3", text: "出題ドメイン(公式試験ガイド)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Domain 1: データ接続**(約 25%): ファイル / DB / Server からの接続",
                "**Domain 2: データの調査と分析**(約 30%): フィルター ・ ソート ・ グループ化",
                "**Domain 3: 可視化(ビジュアライゼーション)**(約 25%): チャート種別 ・ ダッシュボード",
                "**Domain 4: 共有 ・ 計算 ・ 分析**(約 20%): 計算フィールド / パラメータ / 共有",
              ],
            },
            { type: "h3", text: "40 〜 80 時間プラン" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: Tableau Desktop インストール + 基本操作(本教科書 第 2 章)",
                "**Week 2**: データ接続 + データ準備(第 3 章)",
                "**Week 3**: 主要ビジュアル + ダッシュボード(第 4 〜 5 章)",
                "**Week 4**: 計算フィールド + パラメータ + LOD(第 6 〜 7 章)",
                "**Week 5**: フィルター + 分析機能 + 共有(第 8 〜 9 章)",
                "**Week 6**: 模擬試験 + 過去問(第 10 章)",
              ],
            },
            {
              type: "intuition",
              title: "Tableau eLearning + サンプルデータが王道教材",
              body: "**Tableau eLearning(現 Trailhead)** が無料で公開されており、**Desktop Specialist 専用ラーニングパス** が用意されています。サンプルデータ『**Sample - Superstore**』を使ったハンズオンが充実しているため、Desktop インストール → サンプルで操作 → 試験対策の流れが効果的です。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "Tableau の基本構造",
      overview:
        "Workbook ・ Worksheet ・ Dashboard ・ Story の構成を整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "ワークブックの構造",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Workbook(ワークブック)**: .twb / .twbx ファイル。複数の Worksheet ・ Dashboard ・ Story を含む",
                "**Worksheet(ワークシート)**: 1 つのビジュアル(チャート)を作る作業領域",
                "**Dashboard(ダッシュボード)**: 複数の Worksheet を組合せて表示",
                "**Story(ストーリー)**: 一連のダッシュボード ・ ワークシートで物語を構成",
                "**Data Source**: データへの接続定義",
              ],
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**.twb**: ワークブックのみ(データを含まない)",
                "**.twbx**: 抽出データ + ワークブック(配布用)",
                "**.tds**: データソース接続情報のみ",
                "**.tdsx**: データソース + データ抽出",
                "**.hyper**: Tableau の高速抽出データ形式",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "ディメンションとメジャー",
          blocks: [
            {
              type: "def",
              title: "ディメンションとメジャー",
              body: "**ディメンション(Dimension)**: 質的データ ・ カテゴリ。文字列 ・ 日付 ・ ブール。**Tableau が青色** で表示。\n\n**メジャー(Measure)**: 量的データ ・ 数値。集計対象。**Tableau が緑色** で表示。\n\n判断基準は『**集計するか / 軸として使うか**』。同じ列でも文脈で切り替えられる(右クリック → Convert to Dimension/Measure)。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**連続(Continuous、緑のピル)**: 値の連続。軸を作る。日付の連続版 ・ 数値の連続版",
                "**離散(Discrete、青のピル)**: 値が離散。ヘッダーを作る。すべての文字列 + 日付の離散版",
                "**型変換**: ピルの右クリック → Continuous / Discrete を切替え",
                "**集計関数**: SUM / AVG / COUNT / MIN / MAX / COUNTD / MEDIAN",
              ],
            },
            {
              type: "intuition",
              title: "Tableau の最重要概念は『青ピル/緑ピル』",
              body: "Tableau のすべての挙動は **ピルの色(青=離散 / 緑=連続)** に強く依存します。同じ年月日でも、青なら『2024 年 / 2025 年』のヘッダー、緑なら時系列軸として描画される、というのが基本。**この色の意味を体感で理解できれば Tableau の 60% を理解した** と言われます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "データ接続",
      overview:
        "ファイル / DB / クラウドへの接続と、抽出 vs ライブの選び分けを整理します。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "接続できるデータソース",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**ファイル**: Excel / CSV / JSON / PDF / Spatial(Shapefile / KML)/ 統計(SAS / SPSS / R)",
                "**データベース**: SQL Server / Oracle / PostgreSQL / MySQL / Hive / Impala",
                "**クラウド DWH**: Snowflake / BigQuery / Redshift / Databricks / Synapse",
                "**SaaS**: Salesforce / Google Analytics / SharePoint",
                "**Tableau Server / Cloud**: Server に発行された Data Source",
                "**Web Data Connector**: REST API などからの接続",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "抽出(Extract)vs ライブ(Live)",
          blocks: [
            {
              type: "def",
              title: "Extract(抽出)とは",
              body: "**Tableau の高速ストア(.hyper)** にデータをコピーして使う方式。圧縮 ・ カラムナーストレージで Tableau の操作が圧倒的に高速。**スケジュール更新** で最新化できる。容量制限 ・ 最新性のトレードオフあり。",
            },
            {
              type: "def",
              title: "Live(ライブ)接続とは",
              body: "操作の度に **元データソースへ直接クエリ** を投げる方式。**常に最新** だが、ソース側の性能に依存。OLTP 系 DB に大量にクエリを投げると本番影響のリスク。",
            },
            { type: "h3", text: "選び方のガイドライン" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ダッシュボードのリアルタイム性が重要 → Live**",
                "**操作レスポンス重視 → Extract**",
                "**大規模データ + 集計重視 → Extract(集計レベルでの抽出)**",
                "**機微データ ・ 元データから切り離したい → Extract**",
                "**Snowflake / BigQuery など強力な DWH → Live でも十分速い**",
              ],
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "データ準備とリレーション",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Relationships(リレーションシップ)**: 2020.2 で追加。論理レイヤーで柔軟な多対多",
                "**Joins(結合)**: 物理レイヤーの古典的 JOIN(Inner / Left / Right / Full Outer)",
                "**Unions(ユニオン)**: 行方向の結合(Append)",
                "**Pivot**: 横長 → 縦長変換",
                "**Split / Custom Split**: 文字列分割",
                "**Tableau Prep Builder**: 別途のデータ準備ツール(Power Query 相当)",
                "**Tableau Prep Conductor**: 自動化(Server / Cloud 上)",
              ],
            },
            {
              type: "intuition",
              title: "Relationships が来てから JOIN は『古い書き方』",
              body: "2020.2 以降の Tableau では **Relationships(論理リレーション)** が標準推奨。多対多も自然に扱え、**ビジュアル単位で必要な JOIN を Tableau が自動生成** するため、過剰な行重複を回避できます。古い JOIN は Physical Layer の名前で残されており、特殊な要件のときだけ使います。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "主要ビジュアルと『Show Me』",
      overview:
        "Tableau の標準チャート種別と Show Me パネルを整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "Show Me パネル",
          blocks: [
            {
              type: "p",
              text: "**Show Me** は選択中のフィールドから **適切なチャートを Tableau が自動提案** するパネル。種別ごとに必要なフィールド(ディメンション / メジャー)を可視的に教えてくれるため、初学者には強力な学習ツールです。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**テキストテーブル(クロス集計)**",
                "**ヒートマップ ・ ハイライトテーブル**",
                "**棒グラフ(垂直 / 水平 / 積み上げ)**",
                "**折れ線グラフ ・ 面グラフ**",
                "**散布図 ・ ヒストグラム**",
                "**地図(シンボル / 塗分け)**",
                "**バブル ・ ワード(言葉)クラウド**",
                "**箱ひげ図 ・ ガント**",
                "**パイ ・ ドーナツ ・ ツリーマップ**",
                "**バブルツリー ・ ファネル**",
              ],
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "Marks カードと Pages",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Marks カード**: 各データ点の見た目を制御",
                "**Color**: 色分け",
                "**Size**: サイズ調整",
                "**Label**: ラベル表示",
                "**Detail**: 集計の粒度を細かくする(描画には影響しない)",
                "**Tooltip**: ホバー時の詳細",
                "**Shape**: 形状(散布図のマーカー)",
                "**Path**: 線でつなぐ順序",
                "**Pages カード**: 時系列アニメーションなどページごとの表示",
              ],
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Dual Axis と Combined Axis",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Dual Axis**: 2 つの異なる軸を 1 つのチャートに重ねる(右クリック → Dual Axis)",
                "**Synchronize Axis**: 2 軸の目盛りを同期",
                "**Combined Axis**: 同一軸に複数メジャーを並べる",
                "**Discrete vs Continuous Date**: 棒グラフ vs 連続折れ線",
                "**Reference Line / Band / Distribution**: 平均線 ・ 目標線 ・ 信頼区間",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "ダッシュボードとストーリー",
      overview:
        "ダッシュボードのレイアウト ・ アクション ・ ストーリーを整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "ダッシュボードの構成",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Tiled レイアウト**: グリッド状の自動配置",
                "**Floating レイアウト**: 自由配置(オーバーレイ可)",
                "**Containers(Horizontal / Vertical)**: 整列を保つコンテナ",
                "**Device Designer**: PC / タブレット / モバイル別レイアウト",
                "**Fixed / Automatic / Range サイズ**",
                "**Padding / Margin / Border**",
                "**ナビゲーションボタン**: 別ダッシュボードへの遷移",
                "**ダッシュボードオブジェクト**: テキスト / 画像 / Web ページ / ボタン",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "Dashboard Actions",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Filter Action**: 1 つのワークシートでクリック → 他をフィルタ",
                "**Highlight Action**: クリックで他を強調表示",
                "**URL Action**: 外部 URL へのリンク",
                "**Go to Sheet Action**: 別シート / ダッシュボードへ遷移",
                "**Change Parameter Action**: パラメータ値を変更",
                "**Change Set Values Action**: セット内容を変更",
                "**Set Action**: 動的セット制御",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "ストーリー(Story)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Story Point**: 物語の各ステップ(キャプション付き)",
                "**Story Navigator**: ステップ間の移動",
                "**プレゼンテーション用途**: 経営層 ・ 顧客向け説明",
                "**ナラティブ + ビジュアル** の組合せ",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "計算フィールドと関数",
      overview:
        "計算フィールド ・ 集計関数 ・ 論理関数を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "計算フィールドの種類",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Standard Calculation**: 行レベル / 集計レベル",
                "**LOD(Level of Detail)Expression**: FIXED / INCLUDE / EXCLUDE",
                "**Table Calculation**: 計算済の集計値に対する追加計算",
                "**Quick Table Calculation**: 1 クリックで適用(Running Total / Difference / % of Total など)",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "主要関数",
          blocks: [
            { type: "h3", text: "数値関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**SUM / AVG / COUNT / COUNTD / MIN / MAX / MEDIAN / STDEV**",
                "**ROUND / CEILING / FLOOR / ABS / SQRT**",
                "**ZN(NULL を 0 に置換)**",
              ],
            },
            { type: "h3", text: "文字列関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**LEFT / RIGHT / MID**: 部分文字列",
                "**LEN**: 文字数",
                "**CONTAINS / STARTSWITH / ENDSWITH**: 文字列含有",
                "**REPLACE / TRIM / UPPER / LOWER**",
                "**SPLIT**: 区切り文字で分割",
              ],
            },
            { type: "h3", text: "日付関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**TODAY / NOW**: 現在",
                "**YEAR / MONTH / DAY / DATEPART**: 部分取得",
                "**DATEADD / DATEDIFF / DATETRUNC**: 日付計算",
                "**MAKEDATE / MAKEDATETIME**: 日付作成",
              ],
            },
            { type: "h3", text: "論理関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**IF / THEN / ELSEIF / ELSE / END**",
                "**IIF(条件, true 時, false 時)**",
                "**CASE / WHEN / THEN / END**",
                "**IFNULL / ISNULL / ZN**",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "LOD 表現とパラメータ",
      overview:
        "Level of Detail Expression と Parameters を整理します。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "LOD(Level of Detail)Expression",
          blocks: [
            {
              type: "p",
              text: "**LOD 式** はビジュアルの粒度とは異なる粒度で集計するための仕組み。3 種類あります。",
            },
            {
              type: "def",
              title: "LOD の 3 種",
              body: "**FIXED**: 指定したディメンションだけで集計(ビジュアルの粒度を無視)\n  例: `{FIXED [Customer]: SUM([Sales])}` ─ 顧客ごとの総売上(時間や地域に関わらず)\n\n**INCLUDE**: ビジュアルの粒度 + 指定ディメンションで集計\n  例: `{INCLUDE [Product]: SUM([Sales])}` ─ 商品ごとの売上を含めて集計\n\n**EXCLUDE**: ビジュアルの粒度から指定ディメンションを除外して集計\n  例: `{EXCLUDE [Region]: SUM([Sales])}` ─ 地域を無視した総売上",
            },
            {
              type: "intuition",
              title: "LOD は『ビジュアルの粒度を一旦忘れて』考える",
              body: "Tableau のビジュアルは表示中のディメンションで自動的に集計粒度が決まります。LOD はそれを **無視 / 拡張 / 削減** して計算する仕組み。**FIXED** が圧倒的によく使われ、『顧客ごとの初回購入日』『製品ごとの最大売上』などの分析に必須です。",
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "パラメータと What-if 分析",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Parameter**: ユーザが値を選択できる変数(数値 / 文字列 / 日付 / ブール)",
                "**Parameter Action**: クリックでパラメータ値変更",
                "**動的パラメータ**: データから自動で値リストを生成",
                "**What-if 分析**: ユーザがパラメータを変えて結果を確認",
                "**Top N フィルタ**: パラメータで N を可変に",
                "**Reference Line の動的閾値**: パラメータで閾値変更",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "フィルターとセット",
      overview:
        "フィルターの順序とセットの活用を整理します。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "フィルターの種類と実行順序",
          blocks: [
            {
              type: "p",
              text: "Tableau のフィルターには **実行順序** があり、これを理解することが重要です。",
            },
            {
              type: "def",
              title: "Tableau のフィルター実行順序",
              body: "**1. Extract Filter**: 抽出時のフィルタ\n\n**2. Data Source Filter**: データソースレベルのフィルタ\n\n**3. Context Filter**: コンテキストフィルタ\n\n**4. FIXED LOD**: FIXED 式の計算\n\n**5. Dimension Filter**: ディメンションフィルタ\n\n**6. INCLUDE / EXCLUDE LOD**: 残りの LOD\n\n**7. Measure Filter**: メジャーフィルタ\n\n**8. Table Calculation Filter**: 表計算後のフィルタ",
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "Sets(セット)",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Set**: ディメンションメンバーのサブセット(IN / OUT のブール)",
                "**Fixed Set**: 静的(手動選択)",
                "**Computed Set**: 条件式で動的計算(Top N / 値による)",
                "**Combined Set**: 2 つのセットの和 ・ 差 ・ 共通",
                "**Set Action**: クリックで動的にセット内容を変更",
                "**用途**: VIP 顧客 ・ 重要製品 ・ 異常値の隔離",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "分析機能と地理空間",
      overview:
        "Analytics ペイン ・ 地図 ・ クラスタリング ・ 予測を整理します。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "Analytics ペイン",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Constant Line / Average Line / Median**",
                "**Box Plot**: 四分位 + 外れ値",
                "**Reference Band / Distribution Band**",
                "**Trend Line**: 線形 / 指数 / ロジ / 多項式 / 移動平均",
                "**Forecast(予測)**: 指数平滑による時系列予測",
                "**Cluster(クラスタリング)**: K-means の自動適用",
                "**Totals / Subtotals**: 行 ・ 列の合計",
                "**Drop Lines**: マーカーから軸への補助線",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "地理空間と地図",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Geographic Role**: 国 / 県 / 市 / 郵便番号 ・ 緯度経度",
                "**塗分けマップ(Filled Map)**",
                "**シンボルマップ(Point Map)**",
                "**密度マップ(Density Map / Heatmap)**",
                "**Polygon Map**: カスタム形状",
                "**Spatial File**: Shapefile / KML / GeoJSON 直接読み込み",
                "**Distance ・ Buffer 関数**: 地点間距離 ・ バッファ",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "共有と受験対策",
      overview:
        "公開方法と試験当日の戦略を整理します。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "Tableau Server ・ Cloud と共有",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**Tableau Public**: 無料の公開共有プラットフォーム",
                "**Tableau Cloud(旧 Tableau Online)**: クラウド版 Server",
                "**Tableau Server**: オンプレ ・ プライベートクラウド",
                "**Permission**: プロジェクト / ワークブック / ビュー単位",
                "**Subscription**: スケジュール配信(メール)",
                "**Data Alert**: 閾値超過時の通知",
                "**Embed**: アプリ内埋込み(iframe / API)",
                "**Tableau Mobile**: スマホ閲覧",
                "**Tableau Pulse(2024〜)**: 自動インサイト + 通知の AI 機能",
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
                "**第 2 章**: ディメンション/メジャー / 連続/離散 / .twb vs .twbx",
                "**第 3 章**: Live vs Extract / Relationships / Joins / Unions / Pivot",
                "**第 4 章**: Show Me / Marks カード / Dual Axis / 主要チャート",
                "**第 5 章**: Tiled vs Floating / Filter Action / Story Points",
                "**第 6 章**: 主要関数 / 計算フィールドの種類",
                "**第 7 章**: LOD(FIXED / INCLUDE / EXCLUDE)/ パラメータ",
                "**第 8 章**: フィルター実行順序 / Sets",
                "**第 9 章**: Analytics ペイン / 地図種別 / Clustering / Forecast",
              ],
            },
            { type: "h3", text: "試験当日のコツ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**45 問 / 60 分** = 1 問 約 80 秒。スピード命",
                "**ハンズオン形式の問題**: 実機で操作するスタイルもあるため、Tableau Desktop の操作に慣れておく",
                "**サンプルデータ Superstore** で全機能を一通り試す",
                "**Tableau eLearning(Trailhead)の練習問題** を必ず受ける",
                "**極端な選択肢に警戒**: 『常に』『必ず』は誤答が多い",
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
              text: "Desktop Specialist 合格 → **Tableau Certified Data Analyst**(中級)が王道。Server 系なら **Server Certified Associate**。Microsoft Power BI と二刀流にしたい場合は本サイトの[Power BI(PL-300)](/certs/power-bi)を併用。**SQL** や **Python / R** も強化すると分析職としての厚みが増します。",
            },
            {
              type: "practical",
              title: "Tableau のキャリア活用",
              body: "Tableau は **欧米 ・ 大企業 ・ 金融 ・ コンサル** で特に強く、Power BI は **Microsoft 365 環境の中堅以下** で強い、という棲み分けがあります。BI ツールは **両方触れる** 人材は希少で、データアナリスト求人での評価が高いです。本サイトで両認定を学習しておくと差別化につながります。",
            },
          ],
        },
      ],
    },
  ],
};
