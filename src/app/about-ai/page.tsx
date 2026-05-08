import type { Metadata } from "next";
import Link from "next/link";
import type { TextbookBlock } from "@/types/content";
import { TextbookBody } from "@/components/TextbookBody";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "AI とは ─ 人工知能の仕組み・歴史・統計との関係を 5 分で",
  description:
    "AI(人工知能)とは何か、機械学習・ディープラーニング・LLM の関係、3 度のブームと冬、統計学との接続、AI と人間の付き合い方まで、初心者にもわかりやすい 6 章のミニ教科書。",
  alternates: { canonical: "/about-ai" },
  openGraph: {
    title: "AI とは ─ 仕組み・歴史・統計との関係",
    description:
      "ChatGPT 以降の AI 時代を理解するための、初心者向けミニ教科書。",
    type: "article",
  },
};

const CHAPTERS: { id: string; number: string; title: string; blocks: TextbookBlock[] }[] = [
  {
    id: "ch1",
    number: "1",
    title: "AI とは何か ─ 一言でいうと?",
    blocks: [
      {
        type: "p",
        text: "**AI(Artificial Intelligence・人工知能)** は、ひとことで言えば『**人間のような知的な振る舞いをする機械(コンピュータ)**』のことです。ただし『知的とは何か』という定義自体が深い哲学的問題なので、実は **AI に統一的な定義はありません**。",
      },
      { type: "h3", text: "代表的な 4 つの定義" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**人間のように考える機械**(認知科学アプローチ)",
          "**人間のように行動する機械**(チューリングテスト)",
          "**合理的に考える機械**(論理推論)",
          "**合理的に行動する機械**(エージェント、現代主流)",
        ],
      },
      {
        type: "intuition",
        title: "💡 1956 年に生まれた言葉",
        body: "『AI』という言葉は、**1956 年にダートマス会議**(米国)でジョン・マッカーシーらが命名しました。70 年近くにわたり研究されてきた、意外と歴史の長い分野です。",
      },
      { type: "h3", text: "AI でできること(2025 年現在)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**画像認識**: 顔認証・自動運転の物体検出・医療画像の診断補助",
          "**自然言語**: 翻訳・要約・チャットボット・コード生成(ChatGPT)",
          "**音声**: 文字起こし・読み上げ・音声アシスタント(Siri・Alexa)",
          "**画像生成**: テキストから画像を作る(Stable Diffusion・Midjourney)",
          "**ゲーム**: 囲碁・将棋・チェスで世界トップを超える(AlphaGo)",
          "**予測**: 売上・需要・天気・株価の予測",
        ],
      },
      { type: "h3", text: "AI で(まだ)できないこと" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**真の創造性**: 既存のパターンの組み合わせを超えた発想",
          "**身体性を伴う作業**: 介護・建設・配管(ロボティクスは進歩中)",
          "**長期的な計画**: 数年単位の戦略立案",
          "**真の理解**: AI は『関係を覚えている』が『分かっている』わけではない",
          "**継続的な学習**: 訓練後は固定され、リアルタイム経験から学ぶのは限定的",
        ],
      },
    ],
  },
  {
    id: "ch2",
    number: "2",
    title: "AI ・ 機械学習 ・ ディープラーニング ─ 入れ子の関係",
    blocks: [
      {
        type: "p",
        text: "ニュースで頻出する **AI・機械学習・ディープラーニング・LLM** の関係を、まず整理しましょう。これらは **入れ子(同心円)** の関係になっています。",
      },
      {
        type: "p",
        text: "**AI ⊃ 機械学習(ML)⊃ ディープラーニング(DL)⊃ 大規模言語モデル(LLM)**",
      },
      { type: "h3", text: "それぞれの違い" },
      {
        type: "def",
        title: "AI(人工知能)",
        body: "**最も広い概念**。『知的な振る舞いをする機械』全般。ルールベース・エキスパートシステム・機械学習などすべてを含む。",
      },
      {
        type: "def",
        title: "機械学習(Machine Learning, ML)",
        body: "AI のうち、**データから自動でパターンを学ぶ手法**。統計学を土台に発展してきた領域で、線形回帰・決定木・ランダムフォレスト・サポートベクターマシンなどが含まれます。**21 世紀の AI の主流**。",
      },
      {
        type: "def",
        title: "ディープラーニング(Deep Learning, DL)",
        body: "機械学習のうち、**多層のニューラルネットワーク** を使う手法。**画像・音声・自然言語などの複雑なデータ** で他手法を圧倒する性能を出します。**2012 年以降の AI ブームの中心技術**。",
      },
      {
        type: "def",
        title: "大規模言語モデル(Large Language Model, LLM)",
        body: "ディープラーニングの一種で、**大量のテキストで学習させた巨大モデル**。**ChatGPT・Claude・Gemini** などが代表。**Transformer** というアーキテクチャが基本で、2017 年以降爆発的に進化しました。",
      },
      {
        type: "intuition",
        title: "💡 簡単な比喩で覚える",
        body: "**AI** = 動物、**機械学習** = 哺乳類、**ディープラーニング** = 霊長類、**LLM** = 人間 ─ こんなイメージ。下に行くほど範囲が狭く、特定の能力が高くなる。**ニュースで『AI』と言われたら、たいてい現代では機械学習(特にディープラーニング)を指している**ことを知っておくと、混乱しなくなります。",
      },
      { type: "h3", text: "機械学習の 3 つの学習スタイル" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**教師あり学習**: 入力 + 正解ラベルで学習(分類・回帰)。例: スパムメール判定",
          "**教師なし学習**: ラベルなしデータからパターン発見(クラスタリング)。例: 顧客セグメンテーション",
          "**強化学習**: 試行錯誤で報酬を最大化する行動を学習。例: AlphaGo・自動運転",
        ],
      },
    ],
  },
  {
    id: "ch3",
    number: "3",
    title: "AI と統計学 ─ 切っても切れない関係",
    blocks: [
      {
        type: "p",
        text: "実は、**現代の AI(機械学習・ディープラーニング)はほぼすべて統計学の応用** です。本サイトが『**統計を学ぶことが AI への最短ルート**』と提唱する理由です。",
      },
      { type: "h3", text: "AI の 3 つの統計的中核" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**確率論**: 不確実性をどう数値で扱うか(ベイズの定理・確率分布)",
          "**統計推論**: データから法則を引き出す(推定・検定・回帰分析)",
          "**最適化**: 関数の最小化・最大化(勾配降下法・SGD・Adam)",
        ],
      },
      { type: "h3", text: "ニュース見出しの裏にある統計" },
      {
        type: "def",
        title: "AI のニュース ↔ 統計の道具",
        body: "**画像認識 90% 精度** ↔ 分類モデルの正解率(評価指標)\n\n**ChatGPT の予測** ↔ 次の単語の確率分布(条件付き確率)\n\n**スパム検知** ↔ ロジスティック回帰・ナイーブベイズ\n\n**A/B テスト** ↔ 2 標本の差の検定(t 検定・カイ二乗)\n\n**売上予測** ↔ 時系列分析(ARIMA・状態空間モデル)\n\n**推薦システム** ↔ 行列分解(SVD・固有値)",
      },
      {
        type: "intuition",
        title: "💡 統計を学ぶと AI が透明になる",
        body: "AI を **ブラックボックス**(中身は分からないが結果は出る)として使うか、**仕組みまで理解** して使うかで、応用力が大きく変わります。統計の言葉(分布・推定・検定・回帰)が分かれば、**AI モデルの中で何が起きているか** が見えるようになり、結果の解釈・改善・トラブルシュートができるようになります。",
      },
      { type: "h3", text: "統計学を超える要素" },
      {
        type: "p",
        text: "ただし、現代 AI には **統計学だけでは説明できない要素** もあります。**深層学習の表現学習・強化学習の探索戦略・LLM の創発的能力** などです。これらは『統計学 + 計算機科学 + 神経科学 + 情報理論』が融合した **新しい学問** といえます。",
      },
    ],
  },
  {
    id: "ch4",
    number: "4",
    title: "AI の歴史 ─ 3 度のブームと 2 度の冬",
    blocks: [
      {
        type: "p",
        text: "AI の歴史は **3 度のブームと 2 度の冬** で語られます。それぞれの時代で『AI でこんなことができそう!』という期待が高まり、現実の壁にぶつかって冷め、また新技術で復活してきました。",
      },
      { type: "h3", text: "第 1 次 AI ブーム(1950 〜 1960 年代)" },
      {
        type: "def",
        title: "主役: 探索と推論",
        body: "**チェス・迷路・パズル** など『**ルールが明確な問題**』を機械に解かせる試み。1956 年のダートマス会議が出発点。\n\n**冬の原因**: **トイ・プロブレム**(おもちゃの問題)─ 限定された世界では動くが、**現実世界の複雑さ** に対応できなかった。",
      },
      { type: "h3", text: "第 2 次 AI ブーム(1980 年代)" },
      {
        type: "def",
        title: "主役: エキスパートシステム",
        body: "**専門家の知識をルールベース** で機械に与え、医療診断・故障診断などに応用。日本では『第 5 世代コンピュータ』プロジェクトが官民で推進。\n\n**冬の原因**: **知識獲得のボトルネック** ─ 知識を 1 つずつ手で入力するコストが膨大で、**暗黙知**(言葉で書けない知識)を扱えなかった。",
      },
      { type: "h3", text: "第 3 次 AI ブーム(2010 年代 〜 現在)" },
      {
        type: "def",
        title: "主役: 機械学習・ディープラーニング・生成 AI",
        body: "**大量データ + GPU + 深層学習アルゴリズム改良** が揃い、画像認識・自然言語処理が一気に進化。\n\n**転換点 1**: 2012 年 ImageNet で **AlexNet** が他を圧倒(Hinton ら)\n\n**転換点 2**: 2016 年 **AlphaGo** が囲碁世界王者に勝利\n\n**転換点 3**: 2022 年 **ChatGPT** が一般公開、生成 AI 時代へ",
      },
      { type: "h3", text: "歴史上の重要マイルストーン" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**1956 年**: ダートマス会議で『AI』命名",
          "**1997 年**: IBM Deep Blue がチェス王者カスパロフを破る",
          "**2011 年**: IBM Watson がクイズ番組『Jeopardy!』で勝利",
          "**2012 年**: ImageNet で AlexNet がディープラーニング革命",
          "**2014 年**: GAN(敵対的生成ネットワーク)発明",
          "**2016 年**: AlphaGo が囲碁世界王者に勝利",
          "**2017 年**: Transformer 論文『Attention Is All You Need』",
          "**2020 年**: GPT-3 公開",
          "**2022 年**: ChatGPT 公開・Stable Diffusion 公開",
          "**2023 年**: GPT-4 公開・Llama オープンソース",
          "**2024 年**: o1 推論モデル・マルチモーダルが標準化",
          "**2025 年**: AI エージェント実用化・推論時計算スケーリング",
        ],
      },
      {
        type: "intuition",
        title: "💡 第 3 次ブームは『冬』に入るか?",
        body: "今までのブームは技術の壁で冬に入りましたが、**第 3 次ブームは GPT-4/Claude 3.5 以降も拡大中** で、まだ天井が見えていません。**訓練データ枯渇・電力制約・規制強化** が次の壁になる可能性が議論されていますが、推論時計算スケーリング・マルチモーダル拡張などで、まだ進化の余地は大きいと多くの専門家は見ています。",
      },
    ],
  },
  {
    id: "ch5",
    number: "5",
    title: "生成 AI と LLM ─ 2022 年以降の革命",
    blocks: [
      {
        type: "p",
        text: "**ChatGPT 公開(2022 年 11 月)** 以降、AI は研究室から **全人類が日常で使う技術** になりました。この革命の中心が **生成 AI** と **大規模言語モデル(LLM)** です。",
      },
      { type: "h3", text: "生成 AI とは" },
      {
        type: "def",
        title: "用語 ─ Generative AI",
        body: "**新しいコンテンツ**(テキスト・画像・音声・動画・コード)を **生成** する AI 全般。従来の AI が『分類・予測』中心だったのに対し、生成 AI は『**創作・対話・要約**』が得意。LLM・拡散モデル・GAN など複数技術の総称。",
      },
      { type: "h3", text: "主要な生成 AI" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ChatGPT(OpenAI)**: 文章生成・対話の王者。GPT-4o/o1/o3 系で進化",
          "**Claude(Anthropic)**: 安全性・コーディングに強い、長文処理が得意",
          "**Gemini(Google)**: マルチモーダル統合、100 万トークン文脈",
          "**Llama(Meta)**: オープンソース最大手、自社で動かせる",
          "**Stable Diffusion**: オープンソース画像生成",
          "**Midjourney**: 商用画像生成、芸術性高い",
          "**Sora / Veo**: 動画生成",
          "**Suno / Udio**: 音楽生成",
        ],
      },
      { type: "h3", text: "Transformer ─ LLM の心臓部" },
      {
        type: "intuition",
        title: "Attention Is All You Need",
        body: "2017 年に Google の研究者が発表した **Transformer アーキテクチャ** が、現代の LLM すべての基礎です。**Self-Attention** という仕組みで『**文中のどの単語と関係するか**』を動的に学習。GPT・Claude・Gemini・Llama すべて Transformer をベースにしており、**画像処理(Vision Transformer)** にも応用されています。",
      },
      { type: "h3", text: "LLM の主要能力と限界" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**できること**: 文章生成・要約・翻訳・コーディング・対話・推論・知識質問",
          "**苦手なこと**: 厳密な数値計算・最新情報・自分の知識の不確実性把握",
          "**ハルシネーション**: 事実でないことを自信満々に答える現象",
          "**RAG**: 外部知識検索を組合せてハルシネーションを軽減",
          "**Tool Use**: 計算・検索・コード実行を外部ツールに任せる",
        ],
      },
      { type: "h3", text: "プロンプトエンジニアリング" },
      {
        type: "p",
        text: "**プロンプト(指示)を工夫することで AI の出力を改善** する技術。`Chain of Thought`(段階的に考えさせる)・`Few-shot`(例を見せる)・`Role Prompt`(専門家を演じさせる)などのテクニックが広く知られています。**プロンプトエンジニア** という新しい職業も生まれました。",
      },
    ],
  },
  {
    id: "ch6",
    number: "6",
    title: "AI と人間 ─ どう付き合うか",
    blocks: [
      {
        type: "p",
        text: "AI は強力なツールですが、**使い方次第で社会を良くも悪くも変えます**。最後に、AI との付き合い方を考えます。",
      },
      { type: "h3", text: "AI が変える仕事" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**McKinsey(2023)**: 生成 AI が世界 GDP に **年 2.6 〜 4.4 兆ドル** 寄与",
          "**Goldman Sachs(2023)**: 全世界 **3 億人雇用** が AI で自動化される可能性",
          "**IMF(2024)**: 先進国の **40% の雇用** が AI に晒される",
          "**新規創出**: AI エンジニア・プロンプトエンジニア・AI 倫理オフィサー",
        ],
      },
      {
        type: "intuition",
        title: "💡 補完か、代替か",
        body: "歴史的には、**新技術は人間の労働を補完してきました**(計算機の発明 → 経理職員はむしろ増えた)。生成 AI も **同じ流れになる可能性は高い** ですが、**変化の速度が過去の比でなく速い** ため、**リスキリング(再教育)** が間に合うかが社会的課題です。",
      },
      { type: "h3", text: "AI 倫理の主要トピック" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**バイアス**: 訓練データに偏りがあると AI が差別的判断を下すリスク",
          "**公平性**: 性別・人種・年齢で不利にならない設計",
          "**説明可能性(XAI)**: なぜそう判断したかを人間に説明できる AI",
          "**プライバシー**: 個人情報の保護(GDPR・個人情報保護法)",
          "**著作権**: 生成 AI と学習データの権利関係",
          "**ディープフェイク**: 悪用防止と社会的合意",
        ],
      },
      { type: "h3", text: "規制の動き" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**EU AI Act(2024)**: 世界初の包括的 AI 規制",
          "**米大統領令(2023)**: AI 安全性・透明性",
          "**G7 広島 AI プロセス(2023)**: 国際合意",
          "**日本 AI 事業者ガイドライン(2024)**: 経産省・総務省統合",
          "**個人情報保護委員会**: 生成 AI の個人情報リスク注意喚起",
        ],
      },
      { type: "h3", text: "AI 時代に大切な人間の能力" },
      {
        type: "list",
        style: "number",
        items: [
          "**問いを立てる力**: 何を解くべきかを決める",
          "**批判的思考**: AI の出力を鵜呑みにしない",
          "**創造性**: AI の組合せを超えた発想",
          "**共感力**: 人間の感情・価値観を理解",
          "**学び続ける力**: 技術が急速に変わる時代の必須能力",
        ],
      },
      {
        type: "intuition",
        title: "💡 AI と一緒に成長する",
        body: "AI を **道具** として活用すれば、誰もがこれまでより **賢く・速く・優しく** なれる時代です。**AI を恐れる**のではなく、**AI とパートナーシップを組む** ─ それが現代の働き方・学び方・生き方の本質です。",
      },
      { type: "h3", text: "次のステップ ─ AI を学ぶには" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[**AIエンジニア・ロードマップ**](/roadmap) ─ 全体像と学習順序",
          "[**統計検定 4 級教科書**](/textbook/grade-4) ─ AI の前提となる統計の基礎",
          "[**G 検定教科書**](/certs/g-test/textbook) ─ AI の社会実装と倫理",
          "[**E 資格教科書**](/certs/e-shikaku/textbook) ─ ディープラーニングの実装",
          "[**プログラミング教科書**](/programming) ─ Python・PyTorch で AI を動かす",
          "[**統計用語集**](/glossary) ─ 用語をすぐ確認(検索可)",
        ],
      },
      {
        type: "p",
        text: "**AI** はこれからの 10 年・20 年で社会を大きく変える技術です。本書がその入り口となり、あなたの学びの旅を支えられれば幸いです。",
      },
    ],
  },
];

export default function AboutAIPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "AI とは", href: "/about-ai" },
        ]}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>AI とは</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">About AI</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AI とは ─ 5 分で分かる人工知能
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose">
          ChatGPT 以降の AI 時代を理解するための、初心者向けミニ教科書。
          <strong>AI と機械学習・ディープラーニングの違い</strong>、
          <strong>歴史 3 度のブーム</strong>、<strong>統計学との関係</strong>、
          <strong>生成 AI の現在地</strong>、<strong>人間との付き合い方</strong>{" "}
          を <strong>6 章</strong> でコンパクトに整理しました。
        </p>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4 leading-relaxed">
          ※ 数式・専門用語は最小限。社会人・大学生・高校生でも読みやすい入門書として書きました。
        </p>
      </header>

      <nav className="paper rounded-lg p-5 mb-10" aria-label="目次">
        <h2 className="text-sm font-bold ui-sans mb-3 chapter-eyebrow">目次</h2>
        <ol className="space-y-1 text-sm ui-sans">
          {CHAPTERS.map((c) => (
            <li key={c.id}>
              <a href={`#${c.id}`} className="text-[var(--link)] hover:underline">
                第 {c.number} 章 ─ {c.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="space-y-12">
        {CHAPTERS.map((ch) => (
          <section key={ch.id} id={ch.id} className="scroll-mt-20">
            <header className="mb-5 pb-3 border-b border-[var(--page-border)]">
              <div className="chapter-eyebrow mb-1">Chapter {ch.number}</div>
              <h2 className="text-2xl font-bold tracking-wide">{ch.title}</h2>
            </header>
            <TextbookBody blocks={ch.blocks} />
          </section>
        ))}
      </div>

      <section className="mt-16 paper rounded-lg p-6">
        <header className="mb-3">
          <div className="chapter-eyebrow mb-1">Next</div>
          <h2 className="text-xl font-bold">関連ページ</h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ui-sans">
          <li>
            <Link
              href="/roadmap"
              className="text-[var(--link)] hover:underline"
            >
              AIエンジニア・ロードマップ
            </Link>
          </li>
          <li>
            <Link
              href="/certs/g-test/textbook"
              className="text-[var(--link)] hover:underline"
            >
              G 検定 教科書 ─ AI 全般を体系的に
            </Link>
          </li>
          <li>
            <Link
              href="/certs/e-shikaku/textbook"
              className="text-[var(--link)] hover:underline"
            >
              E 資格 教科書 ─ ディープラーニング実装
            </Link>
          </li>
          <li>
            <Link
              href="/programming"
              className="text-[var(--link)] hover:underline"
            >
              プログラミング教科書
            </Link>
          </li>
          <li>
            <Link
              href="/textbook"
              className="text-[var(--link)] hover:underline"
            >
              統計教科書 ─ AI の前提となる統計学
            </Link>
          </li>
          <li>
            <Link
              href="/glossary"
              className="text-[var(--link)] hover:underline"
            >
              統計用語集
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
