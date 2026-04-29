# 統計ロードマップ(Toukei-App)

> AIエンジニアになるための **統計・数学・Python** を一気通貫で学べる無料サイト。

数学基礎 → 統計学 → 機械学習 → AI 検定対策 の 4 ステップで、迷わず最短距離を走れるカリキュラム。統計検定 4 級〜1 級・G 検定・E 資格・DS 検定など主要検定を完全網羅。

🌐 **公開 URL**: https://toukei-app.com/
📦 **リポジトリ**: https://github.com/nokka7465-ux/toukei-app

教科書・公式集・演習問題に加え、**インタラクティブ図解**・**統計計算ツール**・**Python/R コード併記**まで完備した、検定対策本にない学習体験を提供します。

---

## 主な特徴

### 1. 完全網羅の検定対策(11 トラック)

| 系統 | 級・検定 | 教科書(章) | 演習問題 |
|---|---|---:|---:|
| 統計検定本体 | 入門編・4 級・3 級・2 級・準 1 級・1 級 | 6 トラック合計 35 章 | 約 130 問 |
| 学習サポート | 数学基礎 | 4 章 | ~10 問 |
| 関連検定 | DS 基礎 / 統計調査士 / 専門統計調査士 | 3 トラック | 約 50 問 |
| AI 系 | G 検定 / E 資格 / DS 検定リテラシー | 3 トラック合計 13 章 | 約 70 問 |
| 品質管理 | QC 検定(2-3 級) | 4 章 | 15 問 |

### 2. 独自の学習体験(差別化機能)

- 🎚 **動かして学ぶ統計** — スライダーで分布を体感(正規・二項・CLT・p 値・信頼区間の 5 デモ)
- 🧮 **統計計算ツール集** — サンプルサイズ・信頼区間・p 値・検出力・A/B テスト の 5 計算機
- 📊 **29 種の SVG 図解** — 静的画像ではなく theme-aware・印刷対応・ダークモード追従
- 💻 **Python / R コード併記** — タブ切替 + コピーボタン付きで scipy / statsmodels / sklearn / R を提示
- 📖 **読み物としての教科書** — 明朝体(Noto Serif JP)+ 紙風背景で『教科書を読む』体験
- 🔍 **横断検索 + もしかして候補** — タイポ・表記ゆれにも対応した賢い検索
- 📚 **用語集 240 語** — 統計理論・機械学習・AI・公的統計・品質管理を横断
- 📌 **78 + 件の直感解説 / 実務例コラム** — 『なぜそうなるか』『何に使うか』を丁寧に解説

### 3. SEO・運用面

- 全 75 ページが SSG(静的生成)で高速表示
- sitemap.xml / robots.txt / OG 画像生成 / FAQ 構造化データ
- Google Analytics 連携(`G-KKXJLJXP1H`)
- カスタム 404 ページ
- 独自ドメイン運用(`toukei-app.com`)

---

## 公開ページ一覧(75 ページ)

### 学習導線
- `/` ホーム
- `/textbook` 教科書一覧 → 11 トラック
- `/quiz` 演習問題一覧
- `/formulas` 公式集一覧
- `/glossary` 用語集(240 語)
- `/figures` 図解で学ぶ統計(29 種)
- `/explore` 動かして学ぶ統計(インタラクティブ 5 種)
- `/tools` 統計計算ツール集(5 種)
- `/cheatsheet` 公式チートシート(印刷可)
- `/search` サイト内検索
- `/diagnose` 級診断
- `/roadmap` 学習ロードマップ
- `/exam-info` 受験情報まとめ(9 検定の詳細)

### 教科書 + 演習(各トラック 2 ページ)
**統計検定本体** :
- `/textbook/{intro,grade-4,grade-3,grade-2,grade-pre1,grade-1}`
- `/quiz/{intro,grade-4,grade-3,grade-2,grade-pre1,grade-1}`
- `/formulas/{intro,grade-4,grade-3,grade-2,grade-pre1,grade-1}`

**数学基礎** : `/math`, `/math/textbook`, `/math/quiz`

**関連検定** :
- `/certs/ds-basic` — 統計検定 DS基礎
- `/certs/survey` — 統計調査士
- `/certs/survey-specialist` — 専門統計調査士
- `/certs/g-test` — G 検定
- `/certs/e-shikaku` — E 資格(JDLA Engineer)
- `/certs/ds-literacy` — データサイエンティスト検定
- `/certs/qc-kentei` — QC 検定

各 cert に概要 + textbook + quiz の 3 ページ。

### ブログ + メタ
- `/blog` 記事一覧 + 12 記事
- `/contact` お問い合わせ
- `/privacy` プライバシーポリシー

---

## 技術スタック

| 領域 | 技術 |
|---|---|
| フレームワーク | **Next.js 15** (App Router) |
| 言語 | **TypeScript 5** |
| UI | **React 19** |
| スタイル | **Tailwind CSS v4** |
| 数式 | **KaTeX** |
| フォント | **Noto Serif JP** + **Noto Sans JP** |
| デプロイ | **Vercel**(GitHub 連携・自動デプロイ) |
| 解析 | Google Analytics 4 |

すべて **完全クライアント / 静的生成** で動作。サーバ側計算・API・DB は不要。

---

## ディレクトリ構成

```
src/
├── app/                          # Next.js App Router の各ページ
│   ├── certs/                    # 関連検定 7 種(各 3 ページ)
│   ├── textbook/                 # 統計検定本体の教科書
│   ├── quiz/                     # 演習問題
│   ├── formulas/                 # 公式集
│   ├── explore/                  # インタラクティブ図解
│   ├── tools/                    # 統計計算ツール
│   ├── figures/                  # 図解ギャラリー
│   ├── glossary/                 # 用語集
│   ├── blog/                     # ブログ
│   └── ...
├── components/
│   ├── TextbookBody.tsx          # 教科書本文レンダラ
│   ├── Quiz.tsx                  # 1 問 1 答 + 模試モード
│   ├── SearchUI.tsx              # 検索 UI(もしかして候補つき)
│   ├── CodeBlock.tsx             # Python/R コード併記
│   ├── diagrams/                 # 29 種の SVG 図解コンポーネント
│   ├── interactive/              # 5 種のインタラクティブ図解
│   └── tools/                    # 5 種の計算機 + 共通プリミティブ
├── data/
│   ├── textbooks/                # 11 トラックの教科書データ
│   ├── questions/                # 11 トラックの演習問題
│   ├── formulas/                 # 6 トラックの公式集
│   ├── glossary.ts               # 用語集 240 語
│   └── blog/                     # ブログ記事
├── lib/
│   └── search.ts                 # 横断検索エンジン + suggest()
└── types/
    └── content.ts                # TextbookBlock 型(13 ブロック種別)
```

### TextbookBlock の 13 種

```ts
type TextbookBlock =
  | { type: "p"; text: string }                                    // 段落
  | { type: "math"; tex: string }                                  // 数式
  | { type: "h3" | "h4"; text: string }                            // 見出し
  | { type: "list"; style?: "bullet" | "number"; items: string[] } // 箇条書き
  | { type: "def"; title: string; body: string }                   // 定義
  | { type: "ex"; title: string; body: string }                    // 例題
  | { type: "intuition"; title?: string; body: string }            // 💡 直感解説
  | { type: "practical"; title?: string; body: string }            // 🛠 実務例
  | { type: "figure"; kind: DiagramKind; caption?: string }        // 📊 SVG 図解
  | { type: "code"; python?: string; r?: string; ... };            // 💻 コード併記
```

---

## 開発・運用

### ローカル起動

```bash
npm install
npm run dev      # http://localhost:3000
```

### ビルド

```bash
npm run build
npm run start
```

### デプロイ

GitHub `main` ブランチへ push すると Vercel が自動デプロイ(2〜3 分後反映)。

### 環境変数

```
NEXT_PUBLIC_GA_ID=G-KKXJLJXP1H   # Google Analytics(任意)
```

---

## コンテンツ生成の哲学

### 1. 「なぜ」を必ず書く
形式的な定義だけでなく、**直感解説(💡)** + **実務例(🛠)** をセットで配置。検定対策本との明確な差別化点。

### 2. 図と数式と動きの 3 軸
同じ概念を:
- **教科書本文**(明朝体で読む)
- **SVG 図解**(`/figures` で見る)
- **インタラクティブ**(`/explore` で動かす)
- **コード**(Python/R で再現する)

の 4 つの角度から扱う。

### 3. 全文検索可能
教科書・用語集・公式集・ブログ・コードまで含めて、すべての block type が検索対象。タイポにも『もしかして候補』で対応。

### 4. 完全無料・完全静的
ユーザーログイン不要、データ送信なし、計算もブラウザ内完結。学習体験は印刷・オフライン保存も可能。

---

## 主要数値(2026/04 時点)

| カテゴリ | 数値 |
|---|---:|
| 公開ページ | **75** |
| 教科書トラック | **11** |
| 教科書章数 | **52** |
| 演習問題 | **約 280** |
| SVG 図解 | **29 種** |
| インタラクティブ図解 | **5 種** |
| 統計計算ツール | **5 種** |
| 用語集 | **240 語** |
| 直感解説 + 実務例 + 図解の本文埋め込み | **100+ 箇所** |
| ブログ記事 | **12** |
| Python/R コードスニペット | **約 10 セクション** |

---

## マネタイズ

- **Amazon アソシエイト**(`tamalu-22`)— 参考書リンク
- **note / BOOTH** — 詳細解説記事 / 問題集 PDF(準備中)
- 学習サイト本体は完全無料

---

## ライセンス・免責

- 問題はすべて **オリジナル類題**(公式問題集の転載なし)
- コンテンツの引用・翻案については `/contact` よりお問い合わせください
- 統計値・受験料等は変動するため、各検定の **公式サイトでの最新情報確認** を推奨

---

## クレジット

- 主執筆 / 開発 : サイト運営者
- AI ペアプログラミング : Claude Opus 4.7 (1M context)
- 共同コミットメッセージは `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>` で記録

---

## 連絡先

- お問い合わせ: `/contact` ページ → `contact.tamalu+toukei@gmail.com`
- フィードバック・誤りの指摘も歓迎します。
