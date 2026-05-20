import type { Textbook } from "@/types/content";

export const webAnalyticsTextbook: Textbook = {
  levelSlug: "web-analytics",
  title: "ウェブ解析士 教科書(初級)",
  intro:
    "**ウェブ解析士** は、一般社団法人ウェブ解析士協会(WACA)が認定する **ウェブ解析の体系的知識** を持つ人材を認定する民間資格。**Google Analytics 4(GA4)・Google Tag Manager(GTM)・KGI/KPI 設計・コンバージョン最適化・プライバシー対応** など、ウェブマーケティング/データドリブン施策に必須の知識を網羅します。本教科書は **初級(ウェブ解析士)** の出題範囲を全 10 章でカバーします。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "ウェブ解析士 ─ 試験の全体像",
      overview:
        "ウェブ解析士協会(WACA)の認定階層と試験形式を整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "WACA 認定の 3 階層",
          blocks: [
            {
              type: "p",
              text: "**ウェブ解析士** は WACA が 2009 年から運営する **マーケティング × データ × 戦略** の体系資格。**初級 → 上級 → マスター** の 3 階層構造で、ウェブマーケティング業界で広く認知されています。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**初級ウェブ解析士**: 用語と基本指標・GA4 操作の基本(20 時間)",
                "**上級ウェブ解析士**: KPI 設計・施策立案・レポート提案(80 〜 120 時間)",
                "**ウェブ解析士マスター**: 講師育成・カリキュラム設計(年 1 〜 2 回開講)",
              ],
            },
            {
              type: "def",
              title: "想定受験者",
              body: "**Web マーケター ・ 広告運用者 ・ コンサルタント ・ SEO 担当者 ・ 事業会社のデジマ部署 ・ EC 運営**。**Google Analytics をある程度触ったことがある人** が前提だが、未経験でも公式テキスト + 過去問で 40 〜 60 時間で合格可能。",
            },
            { type: "h3", text: "試験形式(初級)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**形式**: オンライン CBT(自宅 PC から受験可)",
                "**問題数 / 時間**: 60 問 / 60 分",
                "**回答方式**: 4 択選択式",
                "**合格基準**: 7 割正答(42 問正解)",
                "**合格率(参考)**: 約 80 〜 90%(事前学習者が前提)",
                "**受験料**: 一般 17,600 円(2024 年改定 ・ 公式テキスト + 受験料込み)",
                "**有効期限**: 1 年(年度毎の更新講座 5,500 円が必要)",
              ],
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "他資格との位置付け",
          blocks: [
            {
              type: "p",
              text: "ウェブ解析士は **Web マーケに特化** した資格。**統計検定 ・ DS 検定 ・ Power BI ・ Tableau** などのデータ系資格と相互補完的に活用するのが効果的です。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**統計検定 3 級**: 基礎統計と組み合わせて分析の質を上げる",
                "**DS 基礎 ・ DS 発展**: データ整形 ・ 機械学習との接続",
                "**Power BI / Tableau Specialist**: ダッシュボード化のスキル",
                "**Google Analytics 認定資格(GAIQ)**: GA4 の英語版公式認定(無料)",
              ],
            },
            {
              type: "practical",
              title: "実務での評価",
              body: "事業会社・代理店ともに **『ウェブ解析士保有』が採用での加点要素** になることが多く、特に **広告運用・コンサル職** では実務知識の証明になります。資格自体より **GA4 で実データを扱った経験** とセットで価値が出る点に注意。",
            },
          ],
        },
        {
          id: "ch1-sec3",
          number: "1.3",
          title: "学習プランの設計",
          blocks: [
            { type: "h3", text: "40 時間プラン(未経験者向け)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Week 1**: 公式テキスト 1 周目通読",
                "**Week 2**: GA4 デモアカウントで操作練習",
                "**Week 3**: 過去問・本サイトの演習問題で弱点洗い出し",
                "**Week 4**: 苦手分野復習 + 模擬試験 + 受験",
              ],
            },
            { type: "h3", text: "20 時間プラン(GA 経験者向け)" },
            {
              type: "list",
              style: "number",
              items: [
                "**Day 1 〜 3**: 公式テキストで用語整理(KPI / セッション / アトリ等)",
                "**Day 4 〜 5**: 演習問題 60 問 + 解説確認",
                "**Day 6**: 苦手分野復習 + 受験",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "ウェブ解析の基礎概念",
      overview:
        "KGI / KPI / CV など、ウェブ解析の核となる用語と思考フレームワーク。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "KGI と KPI の階層構造",
          blocks: [
            {
              type: "def",
              title: "KGI(Key Goal Indicator)",
              body: "**事業の最終目標を表す指標**。EC なら **売上 ・ 利益 ・ LTV**、メディアなら **広告売上 ・ PV ・ 会員数**。",
            },
            {
              type: "def",
              title: "KPI(Key Performance Indicator)",
              body: "**KGI を達成するための中間指標**。EC なら **CVR ・ 客単価 ・ リピート率 ・ カゴ落ち率** 等。**KGI を分解した式 (KGI = A × B × C)** から自動的に KPI が出る。",
            },
            {
              type: "ex",
              title: "EC サイトの KGI/KPI 例",
              body: "**KGI = 売上**\n\n売上 = **訪問者数 × CVR × 客単価**\n\n→ KPI: ① 訪問者数(SEO/広告流入)② CVR(LP 改善)③ 客単価(クロスセル)\n\nさらに分解して **施策に紐づく指標** まで落とす。例: CVR = カート到達率 × 購入完了率。",
            },
            { type: "h3", text: "良い KPI の条件(SMART)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Specific**: 具体的(『売上を上げる』ではなく『月間売上を 30% 増』)",
                "**Measurable**: 測定可能(GA4 や DB で取得できる)",
                "**Achievable**: 達成可能(現実的な水準)",
                "**Relevant**: KGI に紐づく(関連性のある指標)",
                "**Time-bound**: 期限付き(『2026 年 Q4 までに』等)",
              ],
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "コンバージョン(CV)の設計",
          blocks: [
            {
              type: "p",
              text: "**コンバージョン(CV)** は **サイト上で達成したい目標行動**。EC では『購入完了』、リード獲得型では『フォーム送信』、メディアでは『会員登録』など。**CV をどう定義するか** が解析の起点。",
            },
            { type: "h3", text: "マクロ CV と マイクロ CV" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**マクロ CV**: 売上に直結する最終目標(購入完了・申込完了)",
                "**マイクロ CV**: 中間ゴール(カート投入・資料 DL・動画視聴 75%)",
                "マイクロ CV は **改善の余地が大きい場所** を特定する手がかり",
              ],
            },
            {
              type: "intuition",
              title: "なぜマイクロ CV が重要か",
              body: "マクロ CV(購入完了)だけ見ていると **どこで離脱しているかわからない**。マイクロ CV(カート → 決済画面 → 完了)を計測すれば、**ボトルネック工程** が一目瞭然になり、改善施策が打てる。",
            },
          ],
        },
        {
          id: "ch2-sec3",
          number: "2.3",
          title: "アトリビューションの考え方",
          blocks: [
            {
              type: "p",
              text: "**アトリビューション** は **CV までの複数チャネルへの貢献度の割り振り**。例: ユーザーが『広告 → 検索 → 直接訪問 → 購入』した場合、どのチャネルにどれだけ貢献を割るか。",
            },
            { type: "h3", text: "主要なアトリビューションモデル" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ラストクリック**: 最後のチャネルに 100%(GA4 旧デフォルト・直感的だが上流チャネルを過小評価)",
                "**ファーストクリック**: 最初のチャネルに 100%(認知段階の評価に)",
                "**線形**: 全チャネルに均等配分",
                "**減衰**: 直近ほど高い貢献(時間減衰)",
                "**位置ベース**: 最初と最後に 40% ずつ、中間 20%",
                "**データドリブン(DDA)**: 機械学習で最適配分(GA4 新デフォルト)",
              ],
            },
            {
              type: "practical",
              title: "GA4 のデフォルトモデル",
              body: "GA4 では **2023 年からデータドリブン(DDA)が標準**。広告施策が認知段階(上流)に効いているかを正しく評価できる。**ラストクリックは指名検索を過大評価しがち** なので注意。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "アクセス解析の指標",
      overview:
        "セッション ・ ユーザー ・ PV ・ 直帰率 ・ エンゲージメント時間 など基本指標の正しい理解。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "ユーザー・セッション・PV の定義",
          blocks: [
            {
              type: "def",
              title: "ユーザー(Users)",
              body: "**Cookie で識別される個人(またはブラウザ)**。同一ユーザーが何度訪問しても 1 ユーザー。GA4 では **アクティブユーザー** が標準指標。",
            },
            {
              type: "def",
              title: "セッション(Sessions)",
              body: "**一連の訪問(訪問の単位)**。GA4 の標準では 30 分操作が途切れる or 日付変更 or 流入元変化でセッションが切れる。",
            },
            {
              type: "def",
              title: "ページビュー(PV)",
              body: "**ページが表示された回数**。1 セッション内で複数 PV あり。GA4 では `page_view` イベントとして計測。",
            },
            { type: "h3", text: "関係性" },
            { type: "math", tex: "PV \\geq Session \\geq User" },
            {
              type: "p",
              text: "通常 **1 ユーザーあたり 1.5 〜 3 セッション**、**1 セッションあたり 2 〜 5 PV** が一般的(サイト性質で大差あり)。",
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "エンゲージメント指標(GA4 新指標)",
          blocks: [
            {
              type: "p",
              text: "**GA4 の最大の特徴は『直帰率』に代わる『エンゲージメント率』**。ユーザーがサイトと意味のある接触をしたかを測ります。",
            },
            {
              type: "def",
              title: "エンゲージメントセッション",
              body: "以下のいずれかを満たすセッション:(1)10 秒以上の滞在 (2)2 PV 以上 (3)CV イベント発生。**深い接触の指標**。",
            },
            {
              type: "def",
              title: "エンゲージメント率",
              body: "エンゲージメントセッション数 / 全セッション数。**直帰率 = 1 - エンゲージメント率** で関係性。**70% 以上が優良、50% 以下は改善余地大**。",
            },
            {
              type: "def",
              title: "平均エンゲージメント時間",
              body: "ユーザーがタブを操作していた時間の平均。**バックグラウンドで放置している時間は除外** される(UA の滞在時間より正確)。",
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "離脱率と直帰率の違い",
          blocks: [
            {
              type: "def",
              title: "直帰率(Bounce Rate)",
              body: "**1 ページだけ見て離脱したセッションの割合**。UA 旧指標。記事ページ等の単一ページサイトでは数値が悪く出やすい。",
            },
            {
              type: "def",
              title: "離脱率(Exit Rate)",
              body: "**そのページから離脱したセッションの割合**。複数ページ閲覧されたサイトで使う。フォーム最終ページの離脱率が高ければ送信フローに問題あり。",
            },
            {
              type: "practical",
              title: "GA4 での扱い",
              body: "GA4 では **直帰率は『エンゲージメントセッションでなかった率』** として再定義(= 1 - エンゲージメント率)。**改善目標は『エンゲージメント率』にする** のが現代の解析。",
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "Google Analytics 4(GA4)の基本",
      overview:
        "GA4 のデータモデル(イベントベース)と画面構成・標準レポート。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "イベントベースのデータモデル",
          blocks: [
            {
              type: "p",
              text: "**GA4 はすべての計測を『イベント』で表現**。UA 時代のセッション/ヒット型モデルから、より柔軟なイベントモデルへ移行しました。",
            },
            { type: "h3", text: "4 種類のイベント" },
            {
              type: "list",
              style: "number",
              items: [
                "**自動収集イベント**: GA4 タグを設置するだけで自動計測(`page_view` ・ `scroll` 等)",
                "**拡張計測イベント**: 設定で ON にすると自動計測(`click` ・ `file_download` ・ `video_start` 等)",
                "**推奨イベント**: 業種別の標準名(`purchase` ・ `sign_up` ・ `login` 等)",
                "**カスタムイベント**: 自分で命名・実装するイベント",
              ],
            },
            {
              type: "intuition",
              title: "なぜイベントベースか",
              body: "**スマホアプリやサーバーサイドからの計測** がブラウザに依存しないイベントモデルで統一できる。Web/アプリのクロスプラットフォーム分析が GA4 の核心。",
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "GA4 のプロパティ構造",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**アカウント**: 組織単位(複数プロパティを束ねる)",
                "**プロパティ**: サイト/アプリ単位の計測単位",
                "**データストリーム**: Web / Android / iOS ごとの計測対象(複数可)",
              ],
            },
            {
              type: "p",
              text: "**測定 ID**(`G-XXXXX`)はデータストリーム単位で発行。タグはこの ID を埋め込む。",
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "標準レポートの活用",
          blocks: [
            { type: "h3", text: "主要レポート" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**リアルタイム**: 直近 30 分のアクセス(キャンペーン即時確認に)",
                "**ライフサイクル → 集客**: 流入元別の分析(オーガニック検索 / 広告 / SNS 等)",
                "**ライフサイクル → エンゲージメント**: 人気ページ ・ イベント発生数",
                "**ライフサイクル → 収益化**: EC のトランザクションと収益",
                "**ユーザー → ユーザー属性**: 性別 ・ 年齢 ・ 興味",
                "**ユーザー → テクノロジー**: デバイス ・ ブラウザ ・ OS",
              ],
            },
            { type: "h3", text: "Looker Studio との連携" },
            {
              type: "p",
              text: "GA4 のデータは **Looker Studio(旧 Data Studio)** で自由にダッシュボード化可能(無料)。コネクタを使えばコード不要でレポート作成。経営層への報告は Looker Studio が定番。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "Google Tag Manager(GTM)と計測実装",
      overview:
        "コード変更なしでタグを管理する GTM の基本と GA4 イベント実装。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "GTM の役割と用語",
          blocks: [
            {
              type: "def",
              title: "GTM(Google Tag Manager)",
              body: "**サイトの HTML を編集せずに、各種計測タグを管理画面から追加・修正・削除できるツール**。GA4 タグ・広告タグ・カスタムスクリプトを統合管理。",
            },
            { type: "h3", text: "GTM の 3 要素" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**タグ(Tag)**: 計測 ・ 広告のスクリプト本体(GA4 設定タグ / GA4 イベントタグ / Meta ピクセル 等)",
                "**トリガー(Trigger)**: タグを発火させる条件(ページビュー / クリック / フォーム送信 等)",
                "**変数(Variable)**: トリガー条件 ・ タグパラメータで使う値(URL ・ クリック要素のテキスト 等)",
              ],
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "GA4 イベントの実装パターン",
          blocks: [
            { type: "h3", text: "パターン 1: 自動収集に任せる" },
            {
              type: "p",
              text: "ページビュー ・ スクロール ・ 外部リンククリック ・ ファイル DL は **GA4 拡張計測 ON で自動取得**。GTM 不要。",
            },
            { type: "h3", text: "パターン 2: GTM でカスタムイベント" },
            {
              type: "p",
              text: "ボタンクリック ・ フォーム送信 ・ ビデオ再生 ・ EC の商品閲覧などは **GTM のトリガー + GA4 イベントタグ** で実装。",
            },
            {
              type: "ex",
              title: "ボタンクリック計測の例",
              body: "**トリガー**: クリック - すべての要素 → CSS セレクタ `button.signup-btn`\n**タグ**: GA4 イベント → イベント名 `click_signup` + パラメータ `button_id`\n\nこれだけで GA4 のリアルタイムレポートに `click_signup` が表示される。",
            },
            { type: "h3", text: "パターン 3: dataLayer を経由" },
            {
              type: "p",
              text: "EC や複雑なサイトでは **dataLayer**(JavaScript の配列)に値を push してから GTM で拾うのが王道。エンジニアが商品情報・購入金額等を dataLayer に書き込み、マーケターが GTM でタグ化する分業がしやすい。",
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "デバッグとプレビュー",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**GTM のプレビュー モード**: 自分のブラウザで GTM の発火状況を確認",
                "**GA4 DebugView**: デバッグモードでイベントの送信状況をリアルタイム確認",
                "**Tag Assistant Chrome 拡張**: タグの動作確認に便利",
                "**Web Vitals 計測**: Core Web Vitals(LCP/CLS/INP)も GA4 イベントで取れる",
              ],
            },
            {
              type: "practical",
              title: "公開前の確認",
              body: "**バージョン公開前は必ずプレビューモードで動作確認**。タグの誤動作で計測データが汚れると、後から復元できない。**バージョン管理 + コメント** で履歴も残す。",
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "レポート設計とダッシュボード",
      overview:
        "経営層に響くレポートの構成と Looker Studio の活用。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "レポートの 3 階層",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**運用レポート(日次/週次)**: KPI のトレンド ・ 異常値検知 ・ アクション材料",
                "**経営レポート(月次/Q 次)**: KGI 達成度 ・ 投資対効果 ・ 戦略判断材料",
                "**分析レポート(都度)**: 仮説検証 ・ 施策効果 ・ ペルソナ分析",
              ],
            },
            {
              type: "intuition",
              title: "誰に何を見せるか",
              body: "**経営層に詳細な指標を見せても意思決定できない**。逆に運用担当者にサマリだけ見せても改善できない。**レポート設計の最初は『読者は誰か』を明確化** すること。",
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "ダッシュボードの設計原則",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**1 画面 1 メッセージ**: 重要 KPI を 1 つに絞る",
                "**比較の文脈**: 前月比 ・ 前年比 ・ 目標比 を必ず併記",
                "**色の意味**: 赤=悪化、緑=改善 を統一",
                "**ドリルダウン可能**: 異常値の原因を 1 〜 2 クリックで深掘り",
                "**自動更新**: 手動更新は『見られなくなる』",
              ],
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "Looker Studio で作る無料ダッシュボード",
          blocks: [
            {
              type: "p",
              text: "**Looker Studio** は Google 提供の **無料 BI ツール**。GA4・Google 広告・スプレッドシート・BigQuery を **コネクタで接続して可視化**。テンプレートも豊富。",
            },
            { type: "h3", text: "推奨されるレポート構成" },
            {
              type: "list",
              style: "number",
              items: [
                "**1 ページ目: サマリ**(KGI ・ 主要 KPI の数字 ・ 前月比)",
                "**2 ページ目: 集客**(流入元別 ・ 広告別 ・ 検索クエリ)",
                "**3 ページ目: 行動**(人気ページ ・ 動線 ・ 滞在時間)",
                "**4 ページ目: CV**(マイクロ CV → マクロ CV のファネル)",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch7",
      number: 7,
      title: "アトリビューションと広告効果",
      overview:
        "広告とオーガニックの相乗効果・LTV 視点での評価。",
      sections: [
        {
          id: "ch7-sec1",
          number: "7.1",
          title: "ROAS と CPA の違い",
          blocks: [
            {
              type: "def",
              title: "ROAS(Return On Ad Spend)",
              body: "**広告投資に対する売上**。ROAS = 売上 / 広告費。**300% で広告費の 3 倍売上**。EC で広く使われる。",
            },
            {
              type: "def",
              title: "CPA(Cost Per Acquisition)",
              body: "**1 件 CV あたりの広告費**。CPA = 広告費 / CV 数。**目標 CPA = LTV × 利益率 × 投資許容割合** で逆算するのが王道。",
            },
            { type: "h3", text: "実例:LTV ベース計算" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**LTV(顧客生涯価値)**: 50,000 円",
                "**利益率**: 30% → 利益 15,000 円",
                "**広告費許容割合**: 利益の 60% → 9,000 円",
                "**よって目標 CPA**: 9,000 円。これ以下に抑えられれば黒字",
              ],
            },
          ],
        },
        {
          id: "ch7-sec2",
          number: "7.2",
          title: "アシスト CV の評価",
          blocks: [
            {
              type: "p",
              text: "**アシスト CV** は **最終 CV 直前ではないが、ユーザーの認知 ・ 検討に貢献したチャネル**。ラストクリックだけ見ると上流チャネル(SNS ・ 動画広告)が過小評価される。",
            },
            {
              type: "practical",
              title: "施策判断のコツ",
              body: "ラストクリック CV が少ない SNS 広告でも、**アシスト CV(他のチャネル経由 CV を後押し)が多い場合は継続価値あり**。GA4 の『アトリビューション → コンバージョン経路』で確認。",
            },
          ],
        },
        {
          id: "ch7-sec3",
          number: "7.3",
          title: "オーガニックと有料の相乗効果",
          blocks: [
            {
              type: "p",
              text: "**ブランド指名検索** は SEO ・ 広告どちらでも取れるが、**広告を止めると指名検索の CV も減る** ことが多い(検索結果での視認性低下)。広告とオーガニックは独立に評価せず、**ホールドアウト実験**(一部地域で広告停止)で正味効果を測るのが理想。",
            },
          ],
        },
      ],
    },
    {
      id: "ch8",
      number: 8,
      title: "A/B テストと CRO",
      overview:
        "コンバージョン率最適化(CRO)の科学的アプローチ。",
      sections: [
        {
          id: "ch8-sec1",
          number: "8.1",
          title: "A/B テストの基本",
          blocks: [
            {
              type: "def",
              title: "A/B テスト",
              body: "**ユーザーを A 案 ・ B 案にランダム振り分け、どちらの CV が高いかを統計的に検定する手法**。ランダム化により交絡変数の影響を排除。",
            },
            { type: "h3", text: "必要な手順" },
            {
              type: "list",
              style: "number",
              items: [
                "**仮説立案**: 『CTA ボタンを赤くすると CVR が 10% 上がるはず』",
                "**サンプルサイズ計算**: 検出したい効果量・有意水準・検出力から逆算(無料計算ツール多数)",
                "**ランダム化実装**: GTM ・ Google Optimize 後継 ・ VWO ・ Optimizely",
                "**期間中は片方だけ修正しない**(妥当性が崩れる)",
                "**有意差確認**: p 値 < 0.05 で有意差ありと判定(ベイズの場合は事後確率)",
                "**実装** or **棄却**",
              ],
            },
          ],
        },
        {
          id: "ch8-sec2",
          number: "8.2",
          title: "よくある A/B テストの落とし穴",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**早期終了**: 数日で有意差が出ても、サンプルが少なすぎて疑似差(偽陽性)の可能性",
                "**多重比較**: 同時に複数 KPI を見ると α インフレで偽陽性増",
                "**シンプソンのパラドックス**: 全体で勝っても細分化すると負ける(ペルソナ別に確認)",
                "**外的要因**: TV CM ・ 季節 ・ 競合動向で結果が歪む",
                "**実装ミス**: A 案 ・ B 案で計測タグの実装が異なる",
              ],
            },
          ],
        },
        {
          id: "ch8-sec3",
          number: "8.3",
          title: "CRO のプロセス",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**現状分析**: GA4 ・ ヒートマップで離脱箇所を特定",
                "**仮説立案**: ペルソナ ・ 行動観察で改善仮説を 5 〜 10 個",
                "**優先順位付け**: ICE(Impact ・ Confidence ・ Ease)スコアで上位施策に集中",
                "**A/B テスト実施**",
                "**学びの記録**: 勝ち負け両方を Knowledge Base に蓄積",
                "**次の仮説へ循環**",
              ],
            },
            {
              type: "intuition",
              title: "勝率は 2 割でも OK",
              body: "**A/B テストの勝率は経験的に 1 〜 3 割**。負け 7 割を許容して、勝った 2 割が累積する組織の方が長期で強い。**学習が継続する仕組み** が CRO の本質。",
            },
          ],
        },
      ],
    },
    {
      id: "ch9",
      number: 9,
      title: "プライバシーと Cookieless 時代",
      overview:
        "GDPR ・ 改正個人情報保護法 ・ Cookie 規制と GA4 の対応。",
      sections: [
        {
          id: "ch9-sec1",
          number: "9.1",
          title: "3 大規制の概要",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**GDPR**(EU 一般データ保護規則 ・ 2018): 個人データの取扱に同意必須 ・ 違反で年商 4% の罰金",
                "**改正個人情報保護法**(日本 ・ 2022): Cookie 等の個人関連情報を第三者提供する場合は本人同意",
                "**CCPA / CPRA**(米カリフォルニア): 個人情報売買のオプトアウト権",
                "**Apple ITP / Safari**: 3rd-party Cookie ブロック、1st-party Cookie 7 日制限",
                "**Chrome の 3rd-party Cookie 廃止**: 段階的に推進中(2024 〜)",
              ],
            },
          ],
        },
        {
          id: "ch9-sec2",
          number: "9.2",
          title: "同意管理プラットフォーム(CMP)",
          blocks: [
            {
              type: "p",
              text: "**CMP**(Consent Management Platform)はユーザーに同意状況を確認・記録するツール。OneTrust ・ Cookiebot ・ TrustArc が主要。**GA4 と組み合わせて『同意した分のみ計測』** が現代の標準。",
            },
            { type: "h3", text: "Google の Consent Mode v2" },
            {
              type: "p",
              text: "**Consent Mode v2** は 2024 年から Google が必須化した同意制御の仕組み。**広告関連の Cookie 同意がない場合、計測データは集計のみで個人特定不可な形** で送信される(モデル化された値で補完)。",
            },
          ],
        },
        {
          id: "ch9-sec3",
          number: "9.3",
          title: "1st-party データへのシフト",
          blocks: [
            {
              type: "p",
              text: "**3rd-party Cookie 廃止** に伴い、企業は **自社で持つ 1st-party データ(会員 ID ・ 購入履歴 ・ 同意済みメール)** の活用が重要になります。CDP(Customer Data Platform)導入が増加中。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Salesforce Data Cloud / Treasure Data**: 大企業向け CDP",
                "**KARTE / b→dash**: 日本市場の中堅向け CDP",
                "**GA4 Audience + BigQuery 連携**: スモールスタート可能",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch10",
      number: 10,
      title: "キャリアと次のステップ",
      overview:
        "ウェブ解析士合格後の上位資格・実務スキル拡張。",
      sections: [
        {
          id: "ch10-sec1",
          number: "10.1",
          title: "上位資格へのロードマップ",
          blocks: [
            {
              type: "list",
              style: "bullet",
              items: [
                "**上級ウェブ解析士**(WACA): KPI 設計・施策立案を実演習で 80 〜 120 時間",
                "**ウェブ解析士マスター**(WACA): 講師認定。少人数制",
                "**Google アナリティクス認定資格(GAIQ)**: 英語版 ・ 無料 ・ 履歴書のグローバル価値",
                "**Google 広告認定資格**: 広告運用者の必修",
              ],
            },
          ],
        },
        {
          id: "ch10-sec2",
          number: "10.2",
          title: "データ系資格との組み合わせ",
          blocks: [
            {
              type: "p",
              text: "ウェブ解析士の知識を **実データで再現するには SQL や BI ツールが必要**。次の資格と組み合わせると武器が広がります。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Power BI(PL-300)/ Tableau Specialist**: ダッシュボード構築力",
                "**統計検定 3 級 ・ 2 級**: A/B テスト・回帰分析の数学的基礎",
                "**DS 基礎 ・ DS 発展**: データクレンジング ・ 機械学習",
                "**Google Cloud Professional Data Engineer**: BigQuery でクロス分析",
              ],
            },
          ],
        },
        {
          id: "ch10-sec3",
          number: "10.3",
          title: "実務で価値を出す 3 つの動き",
          blocks: [
            {
              type: "list",
              style: "number",
              items: [
                "**自社サイト ・ ブログで GA4 を実装** — 試験勉強と並行して実装力を磨く",
                "**月次レポートの提案 → 実装** — レポート力で評価が変わる職場が多い",
                "**A/B テストの企画 → 実行 → 学び** — 1 回でも実施するとレジュメに書ける",
              ],
            },
            {
              type: "practical",
              title: "次のキャリア",
              body: "**Web マーケター → グロースハッカー → データアナリスト → アナリティクスマネージャー** がよくあるキャリアパス。**SQL + Python + 統計** を加えると年収レンジが大きく上がります。",
            },
          ],
        },
      ],
    },
  ],
};
