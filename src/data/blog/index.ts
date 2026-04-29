import type { BlogPost } from "@/types/content";

export const blogPosts: BlogPost[] = [
  {
    slug: "data-scientist-career",
    title: "データサイエンティストのキャリア ─ 年収・職種・転職の現実",
    description:
      "データサイエンティスト・MLエンジニア・AIエンジニアの違い、年収レンジ、転職の戦略、ポートフォリオの作り方。実際の求人から見えた 2026 年の市場動向。",
    publishedAt: "2026-04-30",
    category: "学習法",
    tldr: [
      "データ職は『データアナリスト → DS → ML エンジニア → AI 研究者』のキャリア階段がある。",
      "年収レンジ: アナリスト 400-700・DS 600-1200・ML エンジニア 700-1500・LLM エンジニア 1000-2500 万円。",
      "転職は『資格 + Kaggle メダル + GitHub ポートフォリオ + 業務経験』の 4 点セットが王道。",
    ],
    body: [
      {
        type: "p",
        text: "AI ・ データ系の職種は急速に細分化しています。本記事では『データアナリスト』『データサイエンティスト』『ML エンジニア』『AI / LLM エンジニア』の違いと、各キャリアの年収 ・ 必要スキル ・ 転職戦略を実態ベースで整理します。",
      },
      { type: "h3", text: "4 つの職種と役割の違い" },
      { type: "h4", text: "データアナリスト(年収 400〜700 万円)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**主業務**: SQL での集計、ダッシュボード作成、ビジネスレポート",
          "**ツール**: SQL ・ Excel ・ Tableau ・ Looker",
          "**統計レベル**: 統計検定 3 級 ・ DS 検定リテラシー",
          "**入門に最適**: 文系出身者でも入りやすい",
        ],
      },
      { type: "h4", text: "データサイエンティスト(年収 600〜1,200 万円)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**主業務**: 仮説検証 ・ A/B テスト ・ ML モデル設計 ・ ビジネス提案",
          "**ツール**: Python ・ scikit-learn ・ Pandas ・ SQL ・ クラウド",
          "**統計レベル**: 統計検定 2 級〜準 1 級 ・ DS 検定",
          "**強み**: 統計的思考とビジネス感度の両立",
        ],
      },
      { type: "h4", text: "ML エンジニア(年収 700〜1,500 万円)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**主業務**: モデル実装 ・ MLOps ・ 本番環境運用 ・ パフォーマンス最適化",
          "**ツール**: PyTorch ・ TensorFlow ・ Docker ・ Kubernetes ・ AWS/GCP",
          "**統計レベル**: 準 1 級 ・ E 資格",
          "**特徴**: ソフトウェアエンジニアリング寄り",
        ],
      },
      { type: "h4", text: "AI / LLM エンジニア(年収 1,000〜2,500 万円)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**主業務**: LLM 活用システム設計 ・ プロンプトエンジニアリング ・ RAG 構築 ・ ファインチューニング",
          "**ツール**: OpenAI / Anthropic API ・ LangChain ・ ベクトル DB ・ Vercel",
          "**特徴**: 2024 年以降急増した最新職種、需要過多",
          "**スキル**: プロダクト感覚 + LLM の挙動理解 + 高速プロトタイピング",
        ],
      },
      { type: "h3", text: "未経験から目指すルート" },
      {
        type: "list",
        style: "number",
        items: [
          "**Phase 1〜2**(3〜6 ヶ月): 数学基礎 + 統計検定 3 級 + Python 基礎 → アナリスト or 社内 DS 候補生",
          "**Phase 3**(6〜12 ヶ月): 統計検定 2 級 + Kaggle + ポートフォリオ → DS / アナリスト中堅",
          "**Phase 4〜5**(12〜24 ヶ月): E 資格 + MLOps 経験 + 本番開発実績 → ML エンジニア",
          "**Phase 5+**(2〜3 年〜): LLM プロジェクト経験 + OSS コントリビューション → AI エンジニア",
        ],
      },
      { type: "h3", text: "転職を有利にする 4 点セット" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**資格**: 統計検定 2 級 + E 資格 / G 検定 が定番",
          "**Kaggle**: 銅メダル 1 個で実力証明、銀以上で大手のスクリーニング通過",
          "**GitHub ポートフォリオ**: 自作モデル ・ 分析ノート ・ Streamlit デモ",
          "**業務経験**: 業務委託 ・ ボランティア分析 ・ 社内提案も含めて記述",
        ],
      },
      {
        type: "p",
        text: "実装力を見せるには [Streamlit でデモアプリ作成](/blog/streamlit-demo-app) や [Vercel でのデプロイ](/blog/vercel-deployment-for-ai) が手っ取り早く効きます。",
      },
      { type: "h3", text: "市場動向(2026 年)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**LLM エンジニア需要が爆発的**: 経験者の年収 1,500 万円超は珍しくない",
          "**MLOps 経験者の希少性**: 本番運用できる人材は引く手あまた",
          "**フルリモート可の求人増加**: 国内外問わず採用",
          "**生成 AI スタートアップの隆盛**: 株式報酬込みで高待遇",
          "**ドメイン特化人材**: 医療 / 金融 / 製造業 × AI が単価高い",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[AIエンジニア・ロードマップ](/roadmap)",
          "[学習プラン計算](/plan)",
          "[Kaggle 始め方](/blog/kaggle-getting-started)",
          "[受験情報まとめ](/exam-info)",
        ],
      },
    ],
  },
  {
    slug: "openai-api-implementation",
    title: "OpenAI API 実装入門 ─ Chat / Embeddings / Function Calling",
    description:
      "OpenAI API を使ったプロダクション開発の基礎。Chat Completion・Embedding・Function Calling・ストリーミング・コスト管理まで実装パターンを網羅。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "OpenAI API の主要エンドポイントは Chat / Embeddings / Images / Audio / Files / Assistants の 6 系統。",
      "本番運用は『ストリーミング ・ リトライ ・ コスト管理 ・ レート制限対策』が必須。",
      "Function Calling と JSON mode で構造化出力を実現するのが現代の定番パターン。",
    ],
    body: [
      {
        type: "p",
        text: "OpenAI API は LLM プロダクト開発のデファクト。ChatGPT を裏で動かしている API そのものです。本記事では実装で必須のパターンを網羅します。",
      },
      { type: "h3", text: "セットアップ" },
      {
        type: "code",
        title: "API キー設定",
        python: "# uv add openai\nimport os\nfrom openai import OpenAI\n\n# API キーは環境変数で(コードに直書き禁止)\nos.environ['OPENAI_API_KEY'] = '...'  # .env ファイル推奨\nclient = OpenAI()",
      },
      { type: "h3", text: "1. Chat Completion(基本)" },
      {
        type: "code",
        title: "シンプルな会話",
        python: "resp = client.chat.completions.create(\n    model='gpt-4o-mini',  # コスパ最強\n    messages=[\n        {'role': 'system', 'content': 'あなたは統計の専門家です'},\n        {'role': 'user', 'content': 'p 値とは?'},\n    ],\n    temperature=0.7,\n    max_tokens=500,\n)\nprint(resp.choices[0].message.content)\nprint('費用:', resp.usage)  # input/output tokens",
      },
      { type: "h3", text: "2. ストリーミング" },
      {
        type: "p",
        text: "ChatGPT のように **1 トークンずつ** 表示するには `stream=True`。UX が劇的に改善。",
      },
      {
        type: "code",
        title: "ストリーミング応答",
        python: "stream = client.chat.completions.create(\n    model='gpt-4o-mini',\n    messages=[{'role': 'user', 'content': '統計について 100 字で'}],\n    stream=True,\n)\n\nfor chunk in stream:\n    if chunk.choices[0].delta.content:\n        print(chunk.choices[0].delta.content, end='', flush=True)",
      },
      { type: "h3", text: "3. Embeddings(検索 ・ RAG)" },
      {
        type: "code",
        title: "テキストをベクトル化",
        python: "resp = client.embeddings.create(\n    model='text-embedding-3-small',  # 1536 次元\n    input=['統計検定 2 級', '機械学習']\n)\nvecs = [d.embedding for d in resp.data]\nprint(len(vecs), len(vecs[0]))  # 2, 1536",
      },
      {
        type: "p",
        text: "詳細は [RAG 入門](/blog/rag-introduction) を参照。",
      },
      { type: "h3", text: "4. Function Calling(構造化応答)" },
      {
        type: "code",
        title: "関数呼び出し",
        python: "tools = [{\n    'type': 'function',\n    'function': {\n        'name': 'get_grade_info',\n        'description': '統計検定の級別情報を取得',\n        'parameters': {\n            'type': 'object',\n            'properties': {\n                'grade': {\n                    'type': 'string',\n                    'enum': ['4', '3', '2', 'pre1', '1']\n                },\n            },\n            'required': ['grade'],\n        },\n    }\n}]\n\nresp = client.chat.completions.create(\n    model='gpt-4o',\n    messages=[{'role': 'user', 'content': '統計検定 2 級の合格率は?'}],\n    tools=tools,\n)\n\nfor call in resp.choices[0].message.tool_calls or []:\n    print(call.function.name, call.function.arguments)\n    # → get_grade_info, {\"grade\": \"2\"}",
      },
      { type: "h3", text: "5. JSON Mode" },
      {
        type: "p",
        text: "出力を **必ず JSON** で返すモード。後段処理が安定します。",
      },
      {
        type: "code",
        title: "JSON 強制",
        python: "resp = client.chat.completions.create(\n    model='gpt-4o',\n    messages=[\n        {'role': 'system', 'content': 'JSON で返答してください'},\n        {'role': 'user', 'content': '東京の天気を {city, weather, temp} 形式で'}\n    ],\n    response_format={'type': 'json_object'},\n)\nimport json\ndata = json.loads(resp.choices[0].message.content)",
      },
      { type: "h3", text: "6. 本番運用 Tips" },
      { type: "h4", text: "リトライ + 指数バックオフ" },
      {
        type: "code",
        title: "tenacity で簡単リトライ",
        python: "from tenacity import retry, wait_exponential, stop_after_attempt\n\n@retry(wait=wait_exponential(min=1, max=60), stop=stop_after_attempt(5))\ndef call_openai(messages):\n    return client.chat.completions.create(\n        model='gpt-4o-mini', messages=messages,\n    )",
      },
      { type: "h4", text: "コスト管理" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**モデル選定**: gpt-4o-mini は gpt-4o の 1/30 のコスト",
          "**プロンプトキャッシュ**: 同じ system プロンプトは Anthropic / OpenAI でキャッシュ可能",
          "**最大トークン**: max_tokens を必ず設定",
          "**ストリーミング**: 中断可能でムダなコスト削減",
          "**ログ**: 全 API コールのトークン数を DB に記録",
        ],
      },
      { type: "h4", text: "レート制限対策" },
      {
        type: "list",
        style: "bullet",
        items: [
          "Tier 1 でも分単位の制限あり ・ 429 エラー時はリトライ",
          "並列度を `asyncio.Semaphore` で制限",
          "Tier アップは Usage 増加で自動 or 申請",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[LLM 入門](/blog/llm-introduction)",
          "[RAG 入門](/blog/rag-introduction)",
          "[プロンプトエンジニアリング基礎](/blog/prompt-engineering-basics)",
          "[AI エージェント 入門](/blog/ai-agents-introduction)",
        ],
      },
    ],
  },
  {
    slug: "vercel-deployment-for-ai",
    title: "Vercel で AI アプリをデプロイする ─ Next.js + AI SDK 入門",
    description:
      "Vercel にデプロイする最短ルート。Next.js の AI SDK + AI Gateway で OpenAI/Claude を統合し、ストリーミングチャット UI を 1 時間で公開する手順。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "Vercel + Next.js + AI SDK で AI アプリを最短デプロイ。サーバ管理不要。",
      "AI Gateway を使えば 複数プロバイダ(OpenAI / Claude / Gemini)を 1 行で切替可能。",
      "ストリーミング ・ 関数呼び出し ・ Edge ランタイムが標準サポート。",
    ],
    body: [
      {
        type: "p",
        text: "**Vercel** は Next.js 開発元が運営する PaaS。AI アプリのデプロイが極めて簡単で、本サイト(統計ロードマップ)も Vercel 上で動いています。",
      },
      { type: "h3", text: "なぜ Vercel?" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ゼロコンフィグデプロイ**: GitHub 連携で push したら自動デプロイ",
          "**プレビュー URL**: PR ごとに URL 発行、レビューが楽",
          "**AI SDK 公式統合**: ストリーミング ・ tool calls がネイティブ",
          "**Edge / Fluid Compute**: 低レイテンシ ・ 低コスト",
          "**無料枠**: 個人開発なら $0 で運用可能",
        ],
      },
      { type: "h3", text: "セットアップ" },
      {
        type: "code",
        title: "Next.js プロジェクト作成",
        python: "npx create-next-app@latest my-ai-app\ncd my-ai-app\nnpm install ai @ai-sdk/openai\n\n# Vercel CLI でログイン\nnpm i -g vercel\nvercel login",
      },
      { type: "h3", text: "ストリーミングチャット API" },
      {
        type: "code",
        title: "app/api/chat/route.ts",
        python: "import { streamText } from 'ai';\nimport { openai } from '@ai-sdk/openai';\n\nexport const runtime = 'edge';\n\nexport async function POST(req: Request) {\n  const { messages } = await req.json();\n\n  const result = await streamText({\n    model: openai('gpt-4o-mini'),\n    messages,\n  });\n\n  return result.toDataStreamResponse();\n}",
      },
      { type: "h3", text: "フロントエンド" },
      {
        type: "code",
        title: "app/page.tsx(useChat)",
        python: "'use client';\nimport { useChat } from 'ai/react';\n\nexport default function Chat() {\n  const { messages, input, handleInputChange, handleSubmit } = useChat();\n\n  return (\n    <div>\n      {messages.map(m => (\n        <div key={m.id}>\n          <strong>{m.role}:</strong> {m.content}\n        </div>\n      ))}\n      <form onSubmit={handleSubmit}>\n        <input value={input} onChange={handleInputChange} />\n        <button type='submit'>送信</button>\n      </form>\n    </div>\n  );\n}",
      },
      { type: "h3", text: "AI Gateway で複数プロバイダ" },
      {
        type: "p",
        text: "Vercel AI Gateway を使うと OpenAI / Anthropic / Gemini を **同じインターフェース** で切替可能。フォールバック ・ コスト管理にも便利。",
      },
      {
        type: "code",
        title: "プロバイダ切替",
        python: "// OpenAI\nmodel: 'openai/gpt-4o-mini'\n\n// Anthropic\nmodel: 'anthropic/claude-sonnet-4-6'\n\n// Google\nmodel: 'google/gemini-2.0-flash'",
      },
      { type: "h3", text: "デプロイ" },
      {
        type: "code",
        title: "本番デプロイ",
        python: "# 環境変数を Vercel に設定(API キー等)\nvercel env add OPENAI_API_KEY\n\n# プレビュー\nvercel\n\n# 本番\nvercel --prod",
      },
      {
        type: "p",
        text: "GitHub と連携していれば、main ブランチへの push で自動本番デプロイ。",
      },
      { type: "h3", text: "本サイトの実例" },
      {
        type: "p",
        text: "統計ロードマップ(本サイト)は **Next.js 15 + Vercel** で運用しています。完全静的(SSG)サイトなので、毎月の運用コストは **約 $0**。詳しくは [Python 環境構築](/blog/python-setup-for-stats) も参照。",
      },
      { type: "h3", text: "関連リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[OpenAI API 実装入門](/blog/openai-api-implementation)",
          "[LLM 入門](/blog/llm-introduction)",
          "[Streamlit でデモアプリ](/blog/streamlit-demo-app)",
          "[GitHub Actions で ML CI](/blog/github-actions-ml-ci)",
        ],
      },
    ],
  },
  {
    slug: "streamlit-demo-app",
    title: "Streamlit で 1 時間で ML デモアプリ ─ 転職に効くポートフォリオ",
    description:
      "Python だけで動くインタラクティブな ML デモを Streamlit で作る方法。データ可視化・ファイルアップロード・モデル予測 UI までの最小実装。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "Streamlit = Python のスクリプトに数行足すだけで Web アプリになる神ライブラリ。",
      "DS / ML エンジニアのポートフォリオ作成に最適。Streamlit Community Cloud で無料公開可。",
      "回帰・分類・データ可視化などの典型 ML タスクを 1 時間でデモ化できる。",
    ],
    body: [
      {
        type: "p",
        text: "**Streamlit** は Python スクリプトを Web アプリに変えるライブラリ。データサイエンティストが React / HTML を学ばずに、**1 時間で UI 付きデモ** を作れます。",
      },
      { type: "h3", text: "なぜ Streamlit がポートフォリオに効くか" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**実装力の証明**: Notebook より一段上、本番アプリより手軽",
          "**インタラクティブ**: 採用担当者がその場で試せる",
          "**Streamlit Community Cloud**: GitHub 連携で無料公開",
          "**学習コスト ≈ ゼロ**: Python 知識だけで OK",
        ],
      },
      { type: "h3", text: "Hello World ─ 5 行で動く" },
      {
        type: "code",
        title: "app.py",
        python: "import streamlit as st\n\nst.title('統計検定 2 級 合格率予測')\nname = st.text_input('お名前')\nstudy_hours = st.slider('週の学習時間', 0, 40, 10)\nst.write(f'{name} さんの予測合格率: {study_hours * 2.5}%')",
      },
      {
        type: "code",
        title: "実行",
        python: "streamlit run app.py",
      },
      { type: "h3", text: "実用例 ─ ML 予測アプリ" },
      {
        type: "code",
        title: "scikit-learn モデルのデモ",
        python: "import streamlit as st\nimport pandas as pd\nimport joblib\n\nst.set_page_config(page_title='住宅価格予測', page_icon='🏠')\nst.title('🏠 住宅価格予測アプリ')\n\nmodel = joblib.load('model.pkl')\n\ncol1, col2 = st.columns(2)\nwith col1:\n    rooms = st.number_input('部屋数', 1, 10, 3)\n    age = st.number_input('築年数', 0, 100, 10)\nwith col2:\n    area = st.number_input('面積 (m²)', 20, 200, 70)\n    distance = st.number_input('駅徒歩 (分)', 1, 30, 10)\n\nif st.button('予測', type='primary'):\n    df = pd.DataFrame([[rooms, age, area, distance]],\n                       columns=['rooms', 'age', 'area', 'distance'])\n    pred = model.predict(df)[0]\n    st.metric('予測価格', f'{pred:,.0f} 円')\n    st.balloons()",
      },
      { type: "h3", text: "データ可視化アプリ" },
      {
        type: "code",
        title: "CSV アップロード + 可視化",
        python: "import streamlit as st\nimport pandas as pd\nimport plotly.express as px\n\nst.title('📊 CSV データ分析')\n\nuploaded = st.file_uploader('CSV ファイル', type=['csv'])\nif uploaded:\n    df = pd.read_csv(uploaded)\n    st.dataframe(df.head())\n    st.write('統計量:', df.describe())\n\n    col_x = st.selectbox('X 軸', df.columns)\n    col_y = st.selectbox('Y 軸', df.columns)\n    fig = px.scatter(df, x=col_x, y=col_y)\n    st.plotly_chart(fig)",
      },
      { type: "h3", text: "便利なウィジェット" },
      {
        type: "list",
        style: "bullet",
        items: [
          "`st.text_input` / `st.text_area`: テキスト入力",
          "`st.number_input` / `st.slider`: 数値",
          "`st.selectbox` / `st.multiselect`: 選択肢",
          "`st.file_uploader`: ファイルアップロード",
          "`st.dataframe` / `st.table`: 表",
          "`st.plotly_chart` / `st.altair_chart`: グラフ",
          "`st.metric`: 数値の強調表示",
          "`st.tabs` / `st.expander`: レイアウト",
          "`st.cache_data`: 高速化のためのキャッシュ",
        ],
      },
      { type: "h3", text: "デプロイ ─ Streamlit Community Cloud" },
      {
        type: "list",
        style: "number",
        items: [
          "GitHub に **public リポジトリ** を作成",
          "`requirements.txt` をコミット",
          "[share.streamlit.io](https://share.streamlit.io) で連携",
          "5 分でデプロイ完了 ・ 無料 URL 発行",
        ],
      },
      {
        type: "p",
        text: "URL を **転職時の職務経歴書** や **GitHub README** に貼ると、面接官が即座に試せます。これだけで通過率が大きく変わります。",
      },
      { type: "h3", text: "ポートフォリオで作るとよい題材" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**住宅価格予測**: 回帰問題、Boston Housing データ",
          "**画像分類**: CIFAR-10 で CNN デモ、Streamlit でアップロード → 予測",
          "**LLM チャット**: OpenAI API + Streamlit で会話 UI",
          "**異常検知**: 時系列データ + Isolation Forest",
          "**EDA ダッシュボード**: 任意の CSV を可視化",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[Pandas Tips](/blog/pandas-tips-for-ml)",
          "[Vercel デプロイ](/blog/vercel-deployment-for-ai)",
          "[キャリアの記事](/blog/data-scientist-career)",
        ],
      },
    ],
  },
  {
    slug: "github-actions-ml-ci",
    title: "GitHub Actions で ML プロジェクトに CI/CD を ─ 30 分入門",
    description:
      "テスト ・ Lint ・ モデル学習 ・ 自動デプロイ を GitHub Actions で自動化する手順。Python ML プロジェクトのテンプレートをそのまま流用できる形で。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "GitHub Actions = リポジトリにアクション(YAML)を置くだけで自動実行されるワークフロー基盤。",
      "Python ML プロジェクトでは『Lint → Test → 学習 → 評価 → デプロイ』のパイプラインを 1 ファイルで書ける。",
      "シークレットに API キーを保管 → 安全に本番デプロイ。",
    ],
    body: [
      {
        type: "p",
        text: "**GitHub Actions** は GitHub リポジトリに付属する CI/CD 基盤。`.github/workflows/*.yml` を置くだけで自動実行され、Pull Request チェック ・ 自動デプロイ ・ 定期実行など何でもできます。MLOps の入口として最適。",
      },
      { type: "h3", text: "Hello World ─ Lint と Test" },
      {
        type: "code",
        title: ".github/workflows/ci.yml",
        python: "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Python\n        uses: actions/setup-python@v5\n        with:\n          python-version: '3.12'\n          cache: 'pip'\n\n      - name: Install\n        run: pip install -r requirements.txt -r requirements-dev.txt\n\n      - name: Lint\n        run: ruff check .\n\n      - name: Type check\n        run: mypy src\n\n      - name: Test\n        run: pytest -v --cov=src",
      },
      {
        type: "p",
        text: "コミット push → 自動で Lint ・ 型チェック ・ テストが走る。失敗すれば PR がブロックされる。",
      },
      { type: "h3", text: "ML 学習パイプライン" },
      {
        type: "code",
        title: ".github/workflows/train.yml",
        python: "name: Train Model\n\non:\n  push:\n    paths:\n      - 'data/**'\n      - 'src/train.py'\n\njobs:\n  train:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Setup Python\n        uses: actions/setup-python@v5\n        with:\n          python-version: '3.12'\n\n      - name: Install\n        run: pip install -r requirements.txt\n\n      - name: Pull data with DVC\n        env:\n          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}\n          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}\n        run: dvc pull\n\n      - name: Train\n        run: python src/train.py\n\n      - name: Evaluate\n        run: |\n          python src/evaluate.py --threshold 0.85\n\n      - name: Upload model\n        uses: actions/upload-artifact@v4\n        with:\n          name: model\n          path: model.pkl",
      },
      { type: "h3", text: "シークレット管理" },
      {
        type: "p",
        text: "API キー ・ AWS 認証情報 ・ DB パスワードは **GitHub Secrets** に保管。`Settings → Secrets and variables → Actions` から登録 → `${{ secrets.NAME }}` で参照。",
      },
      { type: "h3", text: "定期実行(Cron)" },
      {
        type: "code",
        title: "毎週月曜の朝にモデル再学習",
        python: "on:\n  schedule:\n    - cron: '0 9 * * 1'  # UTC 9:00 月曜 = 日本 18:00 月曜",
      },
      { type: "h3", text: "自動デプロイ ─ Vercel と連携" },
      {
        type: "code",
        title: "Vercel デプロイ",
        python: "name: Deploy to Vercel\n\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: amondnet/vercel-action@v25\n        with:\n          vercel-token: ${{ secrets.VERCEL_TOKEN }}\n          vercel-org-id: ${{ secrets.ORG_ID }}\n          vercel-project-id: ${{ secrets.PROJECT_ID }}\n          vercel-args: '--prod'",
      },
      {
        type: "p",
        text: "Vercel の方が先に GitHub と連携している場合は、push だけで自動デプロイされるので Action は不要です。詳しくは [Vercel デプロイ](/blog/vercel-deployment-for-ai)。",
      },
      { type: "h3", text: "PR にモデル評価結果をコメント" },
      {
        type: "code",
        title: "コメント付き PR",
        python: "      - name: Comment metrics\n        if: github.event_name == 'pull_request'\n        uses: actions/github-script@v7\n        with:\n          script: |\n            const fs = require('fs');\n            const metrics = JSON.parse(fs.readFileSync('metrics.json'));\n            github.rest.issues.createComment({\n              issue_number: context.issue.number,\n              owner: context.repo.owner,\n              repo: context.repo.repo,\n              body: `## 📊 評価結果\\n\\n- Accuracy: ${metrics.accuracy}\\n- F1: ${metrics.f1}`,\n            });",
      },
      { type: "h3", text: "Tips" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**キャッシュ活用**: pip ・ npm ・ DVC のキャッシュで高速化",
          "**Matrix ビルド**: Python 3.10/3.11/3.12 の並列テスト",
          "**Self-hosted runner**: 大規模学習は GPU マシンを自社運用",
          "**Concurrency 制御**: 同じブランチの古い実行をキャンセル",
          "**通知**: Slack ・ Discord 連携で失敗時にアラート",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[MLOps 基礎](/blog/mlops-basics)",
          "[Vercel デプロイ](/blog/vercel-deployment-for-ai)",
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[Python 環境構築](/blog/python-setup-for-stats)",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "GitHub Actions は **Push したら自動で全部やる** を最小コストで実現する魔法。CI/CD の習得は ML エンジニアの基礎体力です。",
      },
    ],
  },
  {
    slug: "recommender-systems-introduction",
    title: "推薦システム 入門 ─ 協調フィルタリングからニューラル推薦へ",
    description:
      "Amazon・Netflix・YouTube の中身を支える推薦アルゴリズム。協調フィルタリング・行列分解・Two-Tower・LLM 活用までの主要手法を整理します。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "推薦は『協調フィルタリング(CF)・コンテンツベース・ハイブリッド』の 3 系統が基本。",
      "本格運用は『候補生成 → 順位付け』の 2 段階(Two-Stage)が主流。",
      "近年は Two-Tower NN + LLM 風 SequentialRec(BERT4Rec, SASRec)が強い。",
    ],
    body: [
      {
        type: "p",
        text: "**推薦システム** は EC・動画配信・SNS のコア機能。Amazon の売上の 35%、Netflix 視聴の 80% が推薦経由とも言われます。本記事で主要手法を整理。",
      },
      { type: "h3", text: "3 系統の推薦アプローチ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**協調フィルタリング(CF)**: ユーザー × アイテム行列の類似度 / 行列分解",
          "**コンテンツベース**: アイテム特徴量 + ユーザープロファイル",
          "**ハイブリッド**: CF + コンテンツ + メタデータの統合",
        ],
      },
      { type: "h3", text: "1. 協調フィルタリング ─ 古典の鉄板" },
      { type: "h4", text: "User-User CF" },
      {
        type: "p",
        text: "似た嗜好を持つユーザーが好きなアイテムを薦める。コサイン類似度や Pearson 相関で計算。",
      },
      { type: "h4", text: "Item-Item CF" },
      {
        type: "p",
        text: "アイテム同士の類似度を計算。Amazon の『この商品を買った人は…』はこれ。",
      },
      { type: "h4", text: "行列分解(Matrix Factorization)" },
      {
        type: "p",
        text: "評価行列 $R \\approx U V^\\top$ と低ランク近似。$U$ がユーザー埋め込み、$V$ がアイテム埋め込み。Netflix Prize で有名に。",
      },
      {
        type: "math",
        tex: "\\min_{U, V} \\sum_{(i, j) \\in \\mathcal{O}} (R_{ij} - U_i^\\top V_j)^2 + \\lambda(\\|U\\|^2 + \\|V\\|^2)",
      },
      { type: "h3", text: "2. ニューラル推薦 ─ 現代の主流" },
      { type: "h4", text: "Two-Tower モデル" },
      {
        type: "p",
        text: "ユーザーとアイテムをそれぞれ NN(タワー)で埋め込み、内積で関連度を計算。検索時は ANN(近似最近傍)で高速。",
      },
      {
        type: "code",
        title: "Two-Tower の最小実装",
        python: "import torch.nn as nn\n\nclass TwoTower(nn.Module):\n    def __init__(self, user_dim, item_dim, emb_dim=64):\n        super().__init__()\n        self.user_tower = nn.Sequential(\n            nn.Linear(user_dim, 128), nn.ReLU(),\n            nn.Linear(128, emb_dim),\n        )\n        self.item_tower = nn.Sequential(\n            nn.Linear(item_dim, 128), nn.ReLU(),\n            nn.Linear(128, emb_dim),\n        )\n\n    def forward(self, user_feat, item_feat):\n        u = self.user_tower(user_feat)\n        i = self.item_tower(item_feat)\n        return (u * i).sum(dim=-1)  # 内積",
      },
      { type: "h4", text: "Sequential Recommendation" },
      {
        type: "p",
        text: "ユーザーの **行動履歴** をシーケンスとして Transformer に入れる。SASRec / BERT4Rec が代表。",
      },
      { type: "h3", text: "本番運用 ─ 2 段階アーキテクチャ" },
      {
        type: "list",
        style: "number",
        items: [
          "**候補生成**(Retrieval): 数百万アイテムから上位 100〜1000 を高速抽出 ─ Two-Tower + ANN",
          "**順位付け**(Ranking): 候補の中からスコアリング ─ DLRM・Wide&Deep など重い NN",
          "**ビジネスルール**: 多様性確保・在庫考慮・スポンサー枠",
        ],
      },
      { type: "h3", text: "評価指標" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Precision@k / Recall@k**: 上位 k 件の精度 ・ 再現率",
          "**NDCG**: 順位を考慮した正解度",
          "**MRR**: 最初の正解の逆順位",
          "**CTR ・ CVR ・ Watch Time**: ビジネス側の指標",
        ],
      },
      { type: "h3", text: "Cold Start 問題" },
      {
        type: "p",
        text: "新ユーザー・新アイテムには履歴がない。対策:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**コンテンツベース**: メタデータでスタート",
          "**LLM 活用**: テキスト埋め込みで類似アイテム検索",
          "**ヒューリスティック**: 人気順・新着順をしばらく",
          "**Bandit アルゴリズム**: 探索と活用のバランス",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[線形代数を AI 視点で](/blog/linear-algebra-for-ai) ─ 行列分解の基礎",
          "[Transformer の数学](/blog/transformer-math) ─ Sequential Rec の前提",
          "[MLOps 基礎](/blog/mlops-basics) ─ 本番運用のための知識",
          "[E 資格 ロードマップ](/certs/e-shikaku/roadmap)",
        ],
      },
    ],
  },
  {
    slug: "graph-neural-networks-introduction",
    title: "グラフニューラルネット 入門 ─ ソーシャル・分子・地図のための AI",
    description:
      "ノードとエッジで表現されるグラフデータに対する深層学習。GCN・GAT・Message Passing の仕組みと、ソーシャル分析・創薬・推薦での応用を解説します。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "GNN = グラフ構造を活かして、隣接ノードから情報を集約しながら学習する NN。",
      "Message Passing(集約 → 更新)が基本動作。GCN・GAT・GraphSAGE が代表アーキテクチャ。",
      "ソーシャルネット・分子(創薬)・推薦・地図 などグラフ性のあるドメインで効く。",
    ],
    body: [
      {
        type: "p",
        text: "**グラフニューラルネット(GNN)** はノード(点)とエッジ(辺)からなるグラフデータを扱う深層学習。テーブルデータや画像と違って『**関係性そのもの**』が情報の核となるドメインで威力を発揮します。",
      },
      { type: "h3", text: "なぜグラフが必要か" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ソーシャルネットワーク**: ユーザー間の友達関係",
          "**分子**: 原子を頂点、結合を辺として表現",
          "**推薦システム**: ユーザー-アイテムの 2 部グラフ",
          "**地図 ・ 交通網**: 道路網の最短経路や流量予測",
          "**知識グラフ**: 概念間の関係",
        ],
      },
      { type: "h3", text: "Message Passing(基本動作)" },
      {
        type: "p",
        text: "各ノードが **隣接ノードからメッセージを受け取り → 集約 → 自分の埋め込みを更新** を繰り返す。",
      },
      {
        type: "math",
        tex: "h_v^{(l+1)} = \\sigma\\left(W^{(l)} \\cdot \\text{AGG}\\left(\\{h_u^{(l)} : u \\in \\mathcal{N}(v)\\} \\cup \\{h_v^{(l)}\\}\\right)\\right)",
      },
      {
        type: "intuition",
        title: "💡 1 層 = 1 ホップ",
        body: "L 層 GNN は L ホップ離れたノードまでの情報を集めます。3 層程度が標準。",
      },
      { type: "h3", text: "代表的なアーキテクチャ" },
      { type: "h4", text: "GCN(Graph Convolutional Network)" },
      {
        type: "p",
        text: "Kipf & Welling 2017。隣接行列の正規化版で集約。理論的にきれい。",
      },
      { type: "h4", text: "GAT(Graph Attention Network)" },
      {
        type: "p",
        text: "隣接ノードの重要度を **attention** で動的に決定。一様平均ではなく重み付け。",
      },
      { type: "h4", text: "GraphSAGE" },
      {
        type: "p",
        text: "近傍をサンプリングして大規模グラフでもスケール可能。Facebook で実用。",
      },
      { type: "h3", text: "PyTorch Geometric で実装" },
      {
        type: "code",
        title: "GCN の最小実装",
        python: "import torch\nimport torch.nn.functional as F\nfrom torch_geometric.nn import GCNConv\nfrom torch_geometric.datasets import Planetoid\n\ndataset = Planetoid(root='/tmp/Cora', name='Cora')\ndata = dataset[0]\n\nclass GCN(torch.nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.conv1 = GCNConv(dataset.num_features, 16)\n        self.conv2 = GCNConv(16, dataset.num_classes)\n\n    def forward(self, x, edge_index):\n        x = F.relu(self.conv1(x, edge_index))\n        x = F.dropout(x, training=self.training)\n        return self.conv2(x, edge_index)\n\nmodel = GCN()\nopt = torch.optim.Adam(model.parameters(), lr=0.01)\nfor epoch in range(200):\n    model.train()\n    opt.zero_grad()\n    out = model(data.x, data.edge_index)\n    loss = F.cross_entropy(out[data.train_mask], data.y[data.train_mask])\n    loss.backward()\n    opt.step()",
      },
      { type: "h3", text: "応用領域" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ノード分類**: ユーザーがスパマーか、論文のカテゴリは何か",
          "**リンク予測**: 友達推薦・薬物-標的相互作用予測",
          "**グラフ分類**: 分子の毒性予測・タンパク質機能予測",
          "**コミュニティ検出**: ソーシャルグラフのクラスタ",
          "**最短経路 / 流量**: 強化学習との組み合わせ",
        ],
      },
      { type: "h3", text: "実用例 ─ 創薬・タンパク質" },
      {
        type: "p",
        text: "**AlphaFold**(DeepMind)はタンパク質の立体構造予測で GNN ベースの Transformer を使用。Nobel 賞級のインパクト。",
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[線形代数を AI 視点で](/blog/linear-algebra-for-ai) ─ 隣接行列の理解",
          "[Transformer の数学](/blog/transformer-math) ─ Attention の前提",
          "[コンピュータビジョン入門](/blog/computer-vision-introduction) ─ CNN との比較",
        ],
      },
    ],
  },
  {
    slug: "anomaly-detection-introduction",
    title: "異常検知 入門 ─ 不正・故障・侵入を見つける統計と ML",
    description:
      "クレジットカード不正・設備故障・ネットワーク侵入。異常検知のアプローチ(統計 / 距離 / 密度 / 再構成 / 分類)を実例とコードで解説します。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "異常検知 = 『正常から外れたデータ』を見つける問題。教師ありデータが少ない or 全くないことが多い。",
      "アプローチは 5 系統: 統計 ・ 距離 ・ 密度 ・ 再構成 ・ 分類。問題に応じて使い分け。",
      "Isolation Forest と Autoencoder が実務で広く使われる定番。",
    ],
    body: [
      {
        type: "p",
        text: "**異常検知(Anomaly Detection)** は、不正検出 ・ 設備保全 ・ サイバーセキュリティ ・ 医療診断などで核となる ML タスク。教師ありの分類問題と違い、**異常ラベルが極端に少ない or 未知** という特殊性があります。",
      },
      { type: "h3", text: "5 つのアプローチ" },
      {
        type: "list",
        style: "number",
        items: [
          "**統計的手法**: Z-score, Tukey の箱ひげ図",
          "**距離ベース**: k-NN, LOF",
          "**密度ベース**: ガウス混合 ・ KDE",
          "**再構成ベース**: PCA, Autoencoder",
          "**分類ベース**: Isolation Forest, One-Class SVM",
        ],
      },
      { type: "h3", text: "1. 統計的手法 ─ シンプルで強い" },
      {
        type: "code",
        title: "Z-score 法",
        python: "import numpy as np\n\ndef z_score_anomaly(x, threshold=3):\n    z = np.abs((x - x.mean()) / x.std())\n    return z > threshold\n\n# データの 0.27% が異常としてフラグ(threshold=3 の場合)",
      },
      { type: "h3", text: "2. Isolation Forest ─ 実務の定番" },
      {
        type: "p",
        text: "ランダムに分岐していく木を多数作り、**少ない分割で孤立するデータ点が異常** という直感。高速・高次元データでも動く。",
      },
      {
        type: "code",
        title: "scikit-learn で Isolation Forest",
        python: "from sklearn.ensemble import IsolationForest\n\nclf = IsolationForest(contamination=0.01, random_state=42)\nclf.fit(X_train)\n\npred = clf.predict(X_test)  # 1 = 正常, -1 = 異常\nscores = clf.score_samples(X_test)  # 連続スコア",
      },
      { type: "h3", text: "3. Autoencoder ─ 再構成誤差で検出" },
      {
        type: "p",
        text: "**正常データだけで訓練** した Autoencoder は、正常を上手く再構成できるが、異常は誤差が大きくなる ─ この差を異常スコアに。",
      },
      {
        type: "code",
        title: "PyTorch で簡易 Autoencoder",
        python: "import torch.nn as nn\n\nclass AE(nn.Module):\n    def __init__(self, dim):\n        super().__init__()\n        self.enc = nn.Sequential(nn.Linear(dim, 32), nn.ReLU(), nn.Linear(32, 8))\n        self.dec = nn.Sequential(nn.Linear(8, 32), nn.ReLU(), nn.Linear(32, dim))\n\n    def forward(self, x):\n        return self.dec(self.enc(x))\n\n# 学習: 正常データで MSE 最小化\n# 推論: x と reconstruct の MSE が大きいほど異常",
      },
      { type: "h3", text: "4. 時系列の異常検知" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Prophet**: トレンド + 季節性 + 残差で点異常を検出",
          "**LSTM Autoencoder**: 系列再構成の誤差",
          "**Matrix Profile**: 部分系列の最近傍距離",
          "**ARIMA + 残差検定**: 古典統計手法",
        ],
      },
      { type: "h3", text: "評価が難しい" },
      {
        type: "p",
        text: "正常 99.9% ・ 異常 0.1% のような極端な不均衡が普通。**Accuracy は 99.9% でも全部正常と予測すれば達成可能** なので無意味。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Precision-Recall 曲線 / AUC**: クラス不均衡に強い",
          "**F1 / F2 スコア**: Recall を重視するなら F2",
          "**Confusion Matrix**: 偽陽性 ・ 偽陰性のコストを別々に評価",
        ],
      },
      { type: "h3", text: "実務シナリオ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**クレジットカード不正検出**: トランザクションのリアルタイム判定",
          "**設備保全**: センサー値で故障予兆検知",
          "**ネットワーク侵入検知**: トラフィックパターンの異常",
          "**医療診断補助**: X 線・MRI の病変領域検出",
          "**ログ監視**: SaaS の障害早期発見",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[統計検定 2 級 教科書](/textbook/grade-2)",
          "[MLOps 基礎](/blog/mlops-basics)",
          "[Pandas Tips](/blog/pandas-tips-for-ml)",
        ],
      },
    ],
  },
  {
    slug: "time-series-forecasting-introduction",
    title: "時系列予測 入門 ─ 古典手法から Prophet・深層学習まで",
    description:
      "売上予測・需要予測・株価予測。ARIMA・指数平滑化から、Prophet・LightGBM・Temporal Fusion Transformer までの主要手法を実用視点で。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "時系列予測 = 過去のパターン(トレンド・季節性・自己相関)から未来を推定。",
      "古典: ARIMA・指数平滑化。実務: Prophet・LightGBM。最先端: TFT・N-BEATS。",
      "クロスバリデーションは『時系列分割(Walk-Forward)』を必ず使う。",
    ],
    body: [
      {
        type: "p",
        text: "**時系列予測** は売上・需要・在庫・株価・気象など、ほぼあらゆる業界で必要とされる ML タスク。一般的な予測問題と違い、**時間順序を保つ**ことが鉄則です。",
      },
      { type: "h3", text: "時系列の 3 要素" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**トレンド**: 長期的な上昇・下降",
          "**季節性**: 周期的なパターン(年・週・日)",
          "**残差**: トレンド・季節性で説明できないノイズ",
        ],
      },
      { type: "h3", text: "古典的手法" },
      { type: "h4", text: "ARIMA" },
      {
        type: "p",
        text: "AR(自己回帰) + I(差分) + MA(移動平均)の組合せ。古いが理論的に整理されており、説明性が高い。",
      },
      {
        type: "code",
        title: "statsmodels で ARIMA",
        python: "from statsmodels.tsa.arima.model import ARIMA\n\nmodel = ARIMA(y_train, order=(2, 1, 2))  # (p, d, q)\nfit = model.fit()\nforecast = fit.forecast(steps=30)",
      },
      { type: "h4", text: "指数平滑化(Holt-Winters)" },
      {
        type: "p",
        text: "最近のデータほど重み付けして平滑化。トレンド・季節性も扱える。",
      },
      { type: "h3", text: "Prophet ─ Facebook 製の万能ツール" },
      {
        type: "p",
        text: "祝日効果・季節性・変化点を **GUI レベルでパラメータ化** できる。ビジネス用途で爆発的に普及。",
      },
      {
        type: "code",
        title: "Prophet 5 行",
        python: "from prophet import Prophet\nimport pandas as pd\n\ndf = pd.DataFrame({'ds': dates, 'y': sales})\nm = Prophet(yearly_seasonality=True, weekly_seasonality=True)\nm.fit(df)\nfuture = m.make_future_dataframe(periods=90)\nforecast = m.predict(future)",
      },
      { type: "h3", text: "LightGBM ─ Kaggle 王者" },
      {
        type: "p",
        text: "**ラグ特徴量**(過去 N 日)+ **集計特徴量**(過去 7 日平均など)を作って GBDT に渡す。実用最強の選択肢の 1 つ。",
      },
      {
        type: "code",
        title: "ラグ特徴量の作り方",
        python: "for lag in [1, 7, 14, 30]:\n    df[f'lag_{lag}'] = df['y'].shift(lag)\n\nfor window in [7, 14, 30]:\n    df[f'roll_mean_{window}'] = df['y'].rolling(window).mean()\n    df[f'roll_std_{window}'] = df['y'].rolling(window).std()",
      },
      { type: "h3", text: "深層学習 ─ TFT ・ N-BEATS" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**LSTM / GRU**: 古典的 RNN、長期依存に弱い",
          "**Temporal Fusion Transformer (TFT)**: 解釈性 + 性能",
          "**N-BEATS**: トレンド + 季節性を分解する DL",
          "**Informer / Autoformer**: 長期予測に特化した Transformer 派生",
          "**TimeGPT**: LLM 風時系列基盤モデル(Nixtla)",
        ],
      },
      { type: "h3", text: "時系列クロスバリデーション" },
      {
        type: "p",
        text: "通常の K-Fold は **未来データで学習 → 過去データで予測** という時間漏れを起こす。代わりに **Walk-Forward**:",
      },
      {
        type: "code",
        title: "TimeSeriesSplit",
        python: "from sklearn.model_selection import TimeSeriesSplit\n\ntscv = TimeSeriesSplit(n_splits=5)\nfor train_idx, val_idx in tscv.split(X):\n    X_tr, X_val = X[train_idx], X[val_idx]\n    y_tr, y_val = y[train_idx], y[val_idx]\n    # 学習・評価",
      },
      { type: "h3", text: "評価指標" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**MAE / RMSE**: 標準",
          "**MAPE**: % 表現で経営層に伝えやすい(0 に近い値で破綻)",
          "**SMAPE**: MAPE の対称版、極端な値に頑健",
          "**MASE**: 単純予測(Naive)からの改善度",
          "**Pinball Loss**: 分位点予測の評価",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[統計検定 準 1 級 教科書](/textbook/grade-pre1) ─ 時系列の章",
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[Pandas Tips](/blog/pandas-tips-for-ml) ─ 日付操作",
          "[ベイズ最適化](/blog/bayesian-optimization)",
        ],
      },
    ],
  },
  {
    slug: "model-interpretability-shap",
    title: "モデル解釈性 入門 ─ SHAP・LIME・Permutation Importance",
    description:
      "ブラックボックス ML モデルの予測理由を説明する 3 大手法を実装と直感で解説。規制業界・社内説明・モデル改善に必須のスキル。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "モデル解釈性 = ML の予測『なぜ』を人間が分かる形で説明すること。",
      "SHAP(ゲーム理論ベース)・LIME(局所線形近似)・Permutation Importance が実用 3 大手法。",
      "規制業界(金融 ・ 医療)・社内説明・バイアス検出・モデル改善で必須。",
    ],
    body: [
      {
        type: "p",
        text: "ML モデルが高精度でも、**『なぜその予測になったか』が説明できない** と実務では使えない場面が増えています。**Explainable AI(XAI)** はその課題に対する手法群。",
      },
      { type: "h3", text: "なぜ解釈性が必要か" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**規制対応**: 金融(BIS)・医療(FDA)・EU AI Act",
          "**社内説明**: 経営層・現場担当・顧客への説明責任",
          "**バイアス検出**: 性別・人種による不公平な予測の発見",
          "**モデル改善**: 重要特徴量の特定 → 特徴量エンジニアリング",
          "**信頼構築**: ユーザーが意思決定に使える",
        ],
      },
      { type: "h3", text: "1. SHAP(SHapley Additive exPlanations)" },
      {
        type: "p",
        text: "ゲーム理論の **Shapley 値** に基づき、各特徴量の予測への貢献度を **公平に分配**。理論的にきれい + 局所/全体の両方で使える。",
      },
      {
        type: "code",
        title: "SHAP の基本",
        python: "import shap\nimport lightgbm as lgb\n\nmodel = lgb.LGBMClassifier()\nmodel.fit(X_train, y_train)\n\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer(X_test)\n\n# 1 サンプルの説明\nshap.plots.waterfall(shap_values[0])\n\n# 全体の重要度\nshap.plots.beeswarm(shap_values)\n\n# 依存プロット(部分依存と相互作用)\nshap.plots.scatter(shap_values[:, 'age'])",
      },
      {
        type: "intuition",
        title: "💡 Shapley 値の直感",
        body: "あるチームの勝利貢献を、各メンバーが入る・抜けるパターンの平均で計算 ─ これが Shapley 値。ML では『この特徴量がモデルにあるとき/ないときの平均的な予測差』。",
      },
      { type: "h3", text: "2. LIME(Local Interpretable Model-agnostic Explanations)" },
      {
        type: "p",
        text: "予測したい点の **近傍** で、予測モデルを **線形モデル** で近似。局所的に解釈可能なモデルで説明。",
      },
      {
        type: "code",
        title: "LIME の例",
        python: "import lime\nimport lime.lime_tabular\n\nexplainer = lime.lime_tabular.LimeTabularExplainer(\n    X_train.values, feature_names=X_train.columns,\n    class_names=['no', 'yes'], discretize_continuous=True,\n)\n\nexp = explainer.explain_instance(\n    X_test.iloc[0].values, model.predict_proba, num_features=10\n)\nexp.show_in_notebook()",
      },
      { type: "h3", text: "3. Permutation Importance" },
      {
        type: "p",
        text: "ある特徴量の値を **シャッフル** したときに精度がどれだけ下がるか。シンプルだが頑健。",
      },
      {
        type: "code",
        title: "scikit-learn で",
        python: "from sklearn.inspection import permutation_importance\n\nresult = permutation_importance(\n    model, X_test, y_test, n_repeats=10, random_state=42\n)\nimportance = pd.DataFrame({\n    'feature': X_test.columns,\n    'importance': result.importances_mean,\n}).sort_values('importance', ascending=False)",
      },
      { type: "h3", text: "本質的に解釈可能なモデル" },
      {
        type: "p",
        text: "事後説明より、最初から解釈可能なモデルを使う選択肢:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**線形 / ロジスティック回帰**: 係数 = 特徴量の重み",
          "**決定木**: 分岐ルールが直接読める",
          "**EBM(Explainable Boosting Machine)**: 高精度 + 解釈性",
          "**ルールベース**: スコアカード方式",
        ],
      },
      { type: "h3", text: "Deep Learning の解釈" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Grad-CAM**: 画像分類で『どこに注目したか』のヒートマップ",
          "**Attention 可視化**: NLP の Transformer で関連語",
          "**Integrated Gradients**: 入力勾配を積分",
          "**Captum**(PyTorch): DL 解釈の総合ライブラリ",
        ],
      },
      { type: "h3", text: "実務での使い方" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**学習時**: SHAP で重要特徴量を確認 → 不要なものを削除",
          "**評価時**: 偽陽性 ・ 偽陰性ケースを SHAP で深掘り",
          "**本番運用**: 個別予測の説明をユーザーに表示",
          "**監査時**: バイアスや漏洩がないかチェック",
          "**改善時**: 期待と異なる重要度 → モデル or データの問題",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[因果推論 入門](/blog/causal-inference-introduction)",
          "[MLOps 基礎](/blog/mlops-basics)",
          "[E 資格 ロードマップ](/certs/e-shikaku/roadmap)",
        ],
      },
    ],
  },
  {
    slug: "reinforcement-learning-introduction",
    title: "強化学習 入門 ─ 報酬で学ぶエージェントの仕組み",
    description:
      "AlphaGo・ChatGPT の RLHF・自動運転 ─ 強化学習の基本概念(MDP・Q-learning・Policy Gradient)を、エージェントが迷路を解く例で直感的に。",
    publishedAt: "2026-04-30",
    category: "強化学習",
    tldr: [
      "強化学習 = 環境との相互作用で『報酬を最大化する行動』を学ぶ枠組み。",
      "状態 ・ 行動 ・ 報酬 ・ 方策 の 4 要素 + Bellman 方程式が中核。",
      "Q-learning(価値ベース)と Policy Gradient(方策ベース)の 2 大潮流。PPO・DQN など実用アルゴリズムは派生。",
    ],
    body: [
      {
        type: "p",
        text: "**強化学習(Reinforcement Learning, RL)** は、教師あり学習・教師なし学習に並ぶ第 3 のパラダイム。AlphaGo、ChatGPT の RLHF、自動運転、ロボティクス など、最先端 AI で使われています。",
      },
      { type: "h3", text: "強化学習の枠組み" },
      {
        type: "p",
        text: "エージェントが **状態 $s$** を観測 → **行動 $a$** を選択 → 環境が次の **状態 $s'$ と報酬 $r$** を返す ─ これを繰り返して **累積報酬を最大化する方策** を学ぶ。",
      },
      {
        type: "math",
        tex: "\\max_\\pi \\mathbb{E}\\left[\\sum_{t=0}^\\infty \\gamma^t r_t\\right]",
      },
      {
        type: "intuition",
        title: "💡 ポイント",
        body: "教師あり学習は『正解との差』を最小化、強化学習は『将来含む報酬』を最大化。報酬は遅延して得られることが多い(囲碁の勝ち負けは最後だけ)。",
      },
      { type: "h3", text: "MDP(マルコフ決定過程)" },
      {
        type: "p",
        text: "RL の数学的枠組み。$(S, A, P, R, \\gamma)$ の 5 要素で定式化:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "$S$: 状態集合",
          "$A$: 行動集合",
          "$P(s' \\mid s, a)$: 遷移確率",
          "$R(s, a)$: 報酬関数",
          "$\\gamma \\in [0, 1)$: 割引率(将来の重み)",
        ],
      },
      { type: "h3", text: "Q-learning(価値ベース)" },
      {
        type: "p",
        text: "状態行動価値関数 $Q(s, a)$ を学習し、最大の Q を選ぶ方策に従う。",
      },
      {
        type: "math",
        tex: "Q(s, a) \\leftarrow Q(s, a) + \\alpha \\left[r + \\gamma \\max_{a'} Q(s', a') - Q(s, a)\\right]",
      },
      {
        type: "code",
        title: "迷路を解く Q-learning(20 行)",
        python: "import numpy as np\n\nstates, actions = 16, 4  # 4x4 グリッド, 上下左右\nQ = np.zeros((states, actions))\nalpha, gamma, eps = 0.1, 0.95, 0.2\n\nfor episode in range(1000):\n    s = 0\n    while s != states - 1:  # ゴールまで\n        a = np.random.choice(actions) if np.random.rand() < eps else np.argmax(Q[s])\n        s_next, r = step(s, a)  # 環境関数(別途定義)\n        Q[s, a] += alpha * (r + gamma * Q[s_next].max() - Q[s, a])\n        s = s_next",
      },
      { type: "h3", text: "Policy Gradient(方策ベース)" },
      {
        type: "p",
        text: "方策 $\\pi_\\theta(a \\mid s)$ をニューラルネットでパラメータ化し、勾配上昇で報酬期待値を最大化。",
      },
      {
        type: "math",
        tex: "\\nabla_\\theta J(\\theta) = \\mathbb{E}\\left[\\nabla_\\theta \\log \\pi_\\theta(a \\mid s) \\cdot R\\right]",
      },
      { type: "h3", text: "実用アルゴリズム" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**DQN**: Q-learning + ニューラルネット + 経験再生(Atari で有名)",
          "**A2C / A3C**: Actor-Critic の並列版",
          "**PPO**: 安定性に優れた方策勾配。RLHF の標準",
          "**SAC**: 連続制御で強い、エントロピー正則化",
          "**MuZero**: モデルベース RL、AlphaZero の後継",
        ],
      },
      { type: "h3", text: "AI エンジニアでの使いどころ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ChatGPT の RLHF**: 人間フィードバックで LLM を最適化",
          "**推薦システム**: ユーザー反応を報酬として方策学習",
          "**広告入札**: マルチアームバンディットの応用",
          "**ロボティクス**: シミュレーション → 実機転送",
          "**ゲーム AI**: AlphaGo・StarCraft II・Dota 2",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ 強化学習の章",
          "[ベイズ統計と頻度論](/blog/bayes-vs-frequentist)",
          "[線形代数を AI 視点で](/blog/linear-algebra-for-ai)",
          "[AI Engineer Roadmap](/roadmap)",
        ],
      },
    ],
  },
  {
    slug: "computer-vision-introduction",
    title: "コンピュータビジョン 入門 ─ CNN から ViT まで",
    description:
      "画像認識・物体検出・セグメンテーションの基礎。CNN・ResNet・YOLO・Vision Transformer の主要アーキテクチャを実装視点で整理します。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "CV のタスクは『分類 ・ 検出 ・ セグメンテーション ・ 生成』の 4 種が基本。",
      "アーキテクチャは LeNet → AlexNet → VGG → ResNet → ViT と進化。",
      "今は ViT(画像版 Transformer)と CNN のハイブリッドが標準。",
    ],
    body: [
      {
        type: "p",
        text: "**コンピュータビジョン(CV)** は画像 ・ 動画から情報を抽出する分野。スマホのカメラ ・ 自動運転 ・ 医用画像 ・ 顔認証など応用範囲は広大です。",
      },
      { type: "h3", text: "4 つの基本タスク" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**画像分類**(Classification): 1 枚 → 1 ラベル(犬/猫)",
          "**物体検出**(Detection): 1 枚 → 複数のバウンディングボックス + ラベル",
          "**セグメンテーション**(Segmentation): ピクセル単位の分類",
          "**画像生成**(Generation): GAN ・ Diffusion で新しい画像を作る",
        ],
      },
      { type: "h3", text: "歴史 ─ アーキテクチャの進化" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**LeNet(1998)**: 手書き数字認識、CNN の元祖",
          "**AlexNet(2012)**: ImageNet で衝撃的勝利、DL ブーム到来",
          "**VGG(2014)**: 3×3 畳み込みの繰り返し、シンプルで強い",
          "**ResNet(2015)**: 残差接続で 100 層超え、現在も主流",
          "**ViT(2020)**: Transformer で画像を処理、スケール則が CNN を超える",
          "**SAM / DINO(2023〜)**: 大規模事前学習による汎用ビジョンモデル",
        ],
      },
      { type: "h3", text: "ResNet の本質 ─ 残差接続" },
      {
        type: "p",
        text: "層を深くするほど勾配消失で学習困難になる問題を、**スキップ接続** $y = f(x) + x$ で解決。100 層・200 層が現実的に。",
      },
      {
        type: "code",
        title: "ResNet ブロック",
        python: "import torch.nn as nn\n\nclass ResBlock(nn.Module):\n    def __init__(self, ch):\n        super().__init__()\n        self.conv1 = nn.Conv2d(ch, ch, 3, padding=1)\n        self.conv2 = nn.Conv2d(ch, ch, 3, padding=1)\n        self.bn1 = nn.BatchNorm2d(ch)\n        self.bn2 = nn.BatchNorm2d(ch)\n\n    def forward(self, x):\n        identity = x\n        out = nn.functional.relu(self.bn1(self.conv1(x)))\n        out = self.bn2(self.conv2(out))\n        return nn.functional.relu(out + identity)  # スキップ接続",
      },
      { type: "h3", text: "Vision Transformer(ViT)" },
      {
        type: "p",
        text: "画像を **16×16 のパッチ** に分割 → トークン列として Transformer に入れる。スケールしやすく、十分なデータがあれば CNN を上回る。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ViT-Base**: 86M parameters",
          "**ViT-Huge**: 632M parameters",
          "**事前学習**: JFT-300M(Google 内部、3 億画像)",
        ],
      },
      { type: "h3", text: "物体検出 ─ YOLO" },
      {
        type: "p",
        text: "**YOLO(You Only Look Once)** は画像を 1 回で処理してバウンディングボックスを出力。リアルタイム物体検出の代表。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "YOLOv1(2016) → YOLOv8(2023)まで進化",
          "アンカーフリー化で簡略化",
          "**ultralytics/yolov8** が現在の業界標準",
        ],
      },
      { type: "h3", text: "セグメンテーション ─ U-Net / SAM" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**U-Net**: 医用画像で標準のエンコーダ・デコーダ構造",
          "**Mask R-CNN**: 検出 + セグメンテーションの両刀",
          "**SAM(Segment Anything)**: 2023 Meta、ゼロショットでセグメント",
        ],
      },
      { type: "h3", text: "実装の最短路 ─ 転移学習" },
      {
        type: "code",
        title: "PyTorch で 5 行転移学習",
        python: "from torchvision import models\nimport torch.nn as nn\n\nmodel = models.resnet50(weights='IMAGENET1K_V2')\nmodel.fc = nn.Linear(model.fc.in_features, 10)  # 自分のクラス数に\n# あとは fine-tune するだけ",
      },
      {
        type: "practical",
        title: "🛠 実務 Tips",
        body: "ゼロから学習せずに、ImageNet 事前学習済みモデルを fine-tune する方が圧倒的に早く高精度に。データ 1000 枚でも実用レベル。",
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ CNN ・ ViT の章",
          "[Transformer の数学](/blog/transformer-math) ─ ViT の前提",
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[線形代数を AI 視点で](/blog/linear-algebra-for-ai)",
        ],
      },
    ],
  },
  {
    slug: "audio-ai-introduction",
    title: "音声 AI 入門 ─ Whisper・TTS・音楽生成の現在地",
    description:
      "音声認識(ASR)・音声合成(TTS)・音楽生成。Whisper・XTTS・MusicGen など、音声 AI の主要モデルと使い方を整理します。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "音声 AI = ASR(認識)・TTS(合成)・楽曲生成 の 3 大領域。",
      "OpenAI Whisper が ASR のオープンスタンダード。日本語含む多言語対応。",
      "TTS は XTTS / ElevenLabs、楽曲生成は MusicGen / Suno が代表。",
    ],
    body: [
      {
        type: "p",
        text: "**音声 AI** は LLM の次のフロンティア。Whisper(音声認識)・ChatGPT Voice(音声会話)・Suno(楽曲生成)など、急速に実用化が進んでいます。",
      },
      { type: "h3", text: "音声 AI の 3 領域" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ASR**(Automatic Speech Recognition): 音声 → 文字",
          "**TTS**(Text-to-Speech): 文字 → 音声",
          "**音楽生成**(Music Generation): プロンプト → 楽曲",
        ],
      },
      { type: "h3", text: "ASR ─ Whisper の革命" },
      {
        type: "p",
        text: "**OpenAI Whisper**(2022)は 68 万時間の多言語データで学習。日本語も精度が極めて高く、現在の業界標準。",
      },
      {
        type: "code",
        title: "Whisper で音声書き起こし(5 行)",
        python: "from openai import OpenAI\nclient = OpenAI()\n\nwith open('meeting.mp3', 'rb') as f:\n    result = client.audio.transcriptions.create(model='whisper-1', file=f)\n    print(result.text)",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**whisper-1**(OpenAI API): 商用最強、月数 USD",
          "**whisper-large-v3**(OSS): ローカル動作、無料",
          "**faster-whisper**: GPU 最適化版、4 倍速",
        ],
      },
      { type: "h3", text: "TTS ─ 自然な音声合成" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**OpenAI TTS**: 6 種類のボイス、自然で実用",
          "**ElevenLabs**: 声のクローニング(数秒の音声から)",
          "**XTTS-v2**(OSS): 多言語 ・ ゼロショット声変換",
          "**Bark**(OSS): 効果音や非言語表現も生成",
        ],
      },
      {
        type: "code",
        title: "OpenAI TTS",
        python: "from openai import OpenAI\nclient = OpenAI()\n\nresp = client.audio.speech.create(\n    model='tts-1', voice='alloy',\n    input='こんにちは、統計ロードマップへようこそ。'\n)\nresp.stream_to_file('out.mp3')",
      },
      { type: "h3", text: "音楽生成" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Suno**: 歌詞 + ジャンル指定で完全な楽曲生成",
          "**MusicGen**(Meta): プロンプトから楽曲、OSS",
          "**Udio**: 高品質楽曲生成、商用利用可",
          "**Stable Audio**: SDXL 系列の音声版",
        ],
      },
      { type: "h3", text: "技術的背景 ─ 音声を扱う 3 表現" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**波形(waveform)**: 時間 × 振幅、生データ",
          "**スペクトログラム**: 時間 × 周波数、画像として扱える",
          "**離散トークン**(EnCodec ・ SoundStream): 音声を離散符号化、LLM 風に扱える",
        ],
      },
      {
        type: "intuition",
        title: "💡 トークン化の革新",
        body: "EnCodec で音声を 50ms あたり数十トークンに圧縮 → 言語モデルと同じ Transformer で生成可能に。これが Suno・MusicGen の基礎。",
      },
      { type: "h3", text: "実務での応用シーン" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**会議の議事録自動化**: Whisper + GPT で要約",
          "**カスタマーサポート**: 音声入力 → LLM 応答 → TTS",
          "**動画字幕生成**: 多言語字幕の自動化",
          "**アクセシビリティ**: スクリーンリーダー高度化",
          "**コンテンツ制作**: 音楽 ・ ナレーションの内製化",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[LLM 入門](/blog/llm-introduction)",
          "[Transformer の数学](/blog/transformer-math)",
          "[Python 環境構築](/blog/python-setup-for-stats)",
          "[E 資格 ロードマップ](/certs/e-shikaku/roadmap)",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "音声 AI は API レベルでは既にアプリ実装可能なレベル。OSS モデルもどんどん高品質に。**今のうちに使い方を体得しておくと差がつきます**。",
      },
    ],
  },
  {
    slug: "diffusion-models-introduction",
    title: "拡散モデル 入門 ─ Stable Diffusion はなぜ動くのか",
    description:
      "DALL-E・Midjourney・Stable Diffusion の基盤『拡散モデル(Diffusion Model)』の仕組みを、ノイズの順拡散と逆拡散プロセスで解説します。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "拡散モデル = 画像にノイズを加える順過程 → ノイズを除去する逆過程を NN で学習。",
      "GAN より学習が安定し、品質も超えた。Stable Diffusion・DALL-E 3 の基盤。",
      "条件付け(テキスト → 画像)は CLIP + Cross-Attention で実現。",
    ],
    body: [
      {
        type: "p",
        text: "**拡散モデル(Diffusion Model)** は 2022 年以降の生成 AI の主役。Stable Diffusion・DALL-E・Midjourney・Sora まで、画像 ・ 動画生成のほぼ全てが拡散モデルベースです。",
      },
      { type: "h3", text: "順拡散と逆拡散" },
      { type: "h4", text: "順過程(Forward Process)" },
      {
        type: "p",
        text: "元の画像 $x_0$ に **少しずつガウスノイズを加えていく** プロセス。$T$ 回繰り返すと完全なノイズ $x_T$ になる。",
      },
      {
        type: "math",
        tex: "q(x_t \\mid x_{t-1}) = \\mathcal{N}(x_t; \\sqrt{1-\\beta_t} x_{t-1}, \\beta_t I)",
      },
      { type: "h4", text: "逆過程(Reverse Process)" },
      {
        type: "p",
        text: "ノイズ $x_T$ から **元の画像 $x_0$ を復元** するプロセス。これを NN で学習する。",
      },
      {
        type: "math",
        tex: "p_\\theta(x_{t-1} \\mid x_t) = \\mathcal{N}(x_{t-1}; \\mu_\\theta(x_t, t), \\Sigma_\\theta(x_t, t))",
      },
      {
        type: "intuition",
        title: "💡 なぜノイズ除去で生成?",
        body: "ノイズを足す過程は確定的(数式で計算可)。逆向きを学習する → 純ノイズから画像を作れる、というのがアイデア。",
      },
      { type: "h3", text: "学習目標 ─ ノイズ予測" },
      {
        type: "p",
        text: "実装上は **加えたノイズ $\\epsilon$ を予測する** タスクに置き換える(DDPM 論文の貢献)。",
      },
      {
        type: "math",
        tex: "L = \\mathbb{E}_{x_0, \\epsilon, t} \\left[\\|\\epsilon - \\epsilon_\\theta(x_t, t)\\|^2\\right]",
      },
      { type: "h3", text: "U-Net + 時刻埋め込み" },
      {
        type: "p",
        text: "ノイズ予測には **U-Net**(エンコーダ・デコーダ構造)を使用。さらに `t` を sinusoidal embedding で埋め込んで条件付け。",
      },
      { type: "h3", text: "テキスト → 画像 の条件付け" },
      {
        type: "p",
        text: "CLIP テキストエンコーダで文字をベクトル化 → U-Net の各層に **Cross-Attention** で注入。これで『テキストに従う画像生成』が可能に。",
      },
      {
        type: "code",
        title: "Diffusers ライブラリで生成",
        python: "from diffusers import StableDiffusionPipeline\nimport torch\n\npipe = StableDiffusionPipeline.from_pretrained(\n    'stabilityai/stable-diffusion-2-1',\n    torch_dtype=torch.float16,\n).to('cuda')\n\nimage = pipe(\n    prompt='A serene Japanese tea garden at sunset, oil painting style',\n    num_inference_steps=30,\n    guidance_scale=7.5,\n).images[0]\nimage.save('output.png')",
      },
      { type: "h3", text: "推論時の高速化テクニック" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**DDIM**: 元の DDPM(1000 steps)を 50 steps 程度に高速化",
          "**Classifier-Free Guidance**: 無条件と条件付き予測を線形結合、品質向上",
          "**LCM(Latent Consistency Model)**: 4 steps で生成可能",
          "**Distillation**: 教師モデルの軌跡を小モデルに蒸留",
        ],
      },
      { type: "h3", text: "代表的なモデル" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Stable Diffusion**: OSS、自分で動かせる、Civitai でカスタムモデル流通",
          "**DALL-E 3**: OpenAI、ChatGPT 統合",
          "**Midjourney**: 商用、芸術性で最強",
          "**SDXL**: SD の高解像度版",
          "**Sora**(動画): OpenAI、未公開だが衝撃的品質",
        ],
      },
      { type: "h3", text: "応用と注意点" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**コンテンツ制作**: ゲーム ・ 漫画 ・ 動画素材",
          "**プロトタイピング**: UI ・ プロダクトデザイン",
          "**広告**: バナー量産",
          "**注意**: 著作権 ・ 学習データの問題、ディープフェイク懸念",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[LLM 入門](/blog/llm-introduction)",
          "[Transformer の数学](/blog/transformer-math)",
          "[E 資格 教科書](/certs/e-shikaku/textbook)",
          "[ベイズ統計と頻度論](/blog/bayes-vs-frequentist)",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "拡散モデルは『**ノイズに対するスコア関数を学習**』というシンプルな枠組みで、GAN・VAE を圧倒する品質を実現。次は動画 ・ 3D ・ 音声生成へ展開中です。",
      },
    ],
  },
  {
    slug: "ai-agents-introduction",
    title: "AI エージェント 入門 ─ ReAct・Tool Use・Multi-Agent",
    description:
      "ChatGPT に外部 API・コード実行・Web 検索を組み合わせる『AI エージェント』。ReAct パターン・ツール呼び出し・マルチエージェント協調を実装視点で解説します。",
    publishedAt: "2026-04-30",
    category: "LLM",
    tldr: [
      "AI エージェント = LLM が外部ツールを自律的に呼んでタスクを完遂する仕組み。",
      "ReAct = Reason + Act の交互ループ。最も基本的なパターン。",
      "Tool Use(Function Calling)・Code Interpreter・Multi-Agent が現在の主要トピック。",
    ],
    body: [
      {
        type: "p",
        text: "LLM 単体では『答えを返す』だけ。**AI エージェント** は LLM に **計算・検索・コード実行** などのツールを与え、複雑なタスクを自律的に解決させる枠組みです。",
      },
      { type: "h3", text: "なぜエージェントが必要か" },
      {
        type: "p",
        text: "LLM は次の問題が解けません:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**最新情報**: 学習データ以降のニュース",
          "**正確な計算**: 大きい数の四則演算で間違える",
          "**実行**: コードを動かしてその結果を反映",
          "**外部システム連携**: DB ・ API ・ メール送信",
        ],
      },
      {
        type: "p",
        text: "→ ツールを呼べばすべて解決。",
      },
      { type: "h3", text: "ReAct パターン" },
      {
        type: "p",
        text: "**Reason(推論) + Act(行動)** を交互に繰り返す。Yao et al. 2022 の論文が元祖。",
      },
      {
        type: "code",
        title: "ReAct の対話例",
        python: "User: 東京と大阪の人口の差は?\n\nAI: Thought: 東京と大阪の最新の人口を調べる必要がある。\n     Action: search('東京 人口 2024')\n     Observation: 東京都の人口は約 1404 万人。\n\n     Thought: 次に大阪。\n     Action: search('大阪 人口 2024')\n     Observation: 大阪府の人口は約 880 万人。\n\n     Thought: 計算する。\n     Action: calculator(1404 - 880)\n     Observation: 524\n\n     最終回答: 約 524 万人の差です。",
      },
      { type: "h3", text: "Tool Use(Function Calling)" },
      {
        type: "p",
        text: "OpenAI ・ Claude API はネイティブで関数呼び出しをサポート。スキーマを宣言するだけで LLM が自動で引数を埋めて呼ぶ。",
      },
      {
        type: "code",
        title: "OpenAI Function Calling",
        python: "tools = [{\n    'type': 'function',\n    'function': {\n        'name': 'get_weather',\n        'description': '指定地の天気を取得',\n        'parameters': {\n            'type': 'object',\n            'properties': {\n                'city': {'type': 'string'}\n            },\n            'required': ['city']\n        }\n    }\n}]\n\nresp = client.chat.completions.create(\n    model='gpt-4o',\n    messages=[{'role': 'user', 'content': '東京の天気は?'}],\n    tools=tools,\n)\n\nfor call in resp.choices[0].message.tool_calls:\n    if call.function.name == 'get_weather':\n        args = json.loads(call.function.arguments)\n        result = my_weather_api(args['city'])  # 実行\n        # 結果を LLM に戻して最終応答を得る",
      },
      { type: "h3", text: "代表的なフレームワーク" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**LangChain / LangGraph**: 最も普及、状態管理が強い",
          "**AutoGen**(Microsoft): Multi-Agent の代表",
          "**CrewAI**: 役割分担型 Multi-Agent",
          "**Claude Agent SDK / OpenAI Agents SDK**: 公式 SDK",
        ],
      },
      { type: "h3", text: "Multi-Agent ─ 役割分担" },
      {
        type: "p",
        text: "1 つのタスクを **複数の専門エージェント** で分担。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**プランナー**: 全体計画立案",
          "**リサーチャー**: 情報収集",
          "**コーダー**: 実装",
          "**レビュアー**: 品質チェック",
          "**マネージャー**: 統括 ・ 調整",
        ],
      },
      { type: "h3", text: "実用例" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**コーディング支援**: Claude Code ・ Cursor ・ Cline",
          "**カスタマーサポート**: 過去 FAQ + ナレッジ DB を参照",
          "**データ分析**: SQL 自動生成 + 実行 + 可視化",
          "**研究補助**: 論文検索 + 要約 + 比較",
          "**ワークフロー自動化**: メール送信 ・ Slack 投稿 ・ DB 更新",
        ],
      },
      { type: "h3", text: "実装上の注意点" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**エラーハンドリング**: ツール失敗時のリトライ ・ フォールバック",
          "**コスト管理**: 無限ループ防止、最大ステップ数",
          "**セキュリティ**: コード実行時のサンドボックス、Vercel Sandbox 等",
          "**評価**: 完了率 ・ 正答率 ・ コスト効率の測定",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[LLM 入門](/blog/llm-introduction)",
          "[プロンプトエンジニアリング基礎](/blog/prompt-engineering-basics)",
          "[RAG 入門](/blog/rag-introduction)",
          "[MLOps 基礎](/blog/mlops-basics)",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "AI エージェントは『LLM の能力を増幅する』アプローチ。2025 年は **エージェント元年** と呼ばれ、業務自動化の主役になりつつあります。",
      },
    ],
  },
  {
    slug: "llm-introduction",
    title: "LLM 入門 ─ ChatGPT は何を計算しているのか",
    description:
      "ChatGPT・Claude・Gemini などの大規模言語モデル(LLM)が内部で何をしているかを、Transformer の数式と pre-training/fine-tuning の流れで整理します。",
    publishedAt: "2026-04-30",
    category: "LLM",
    tldr: [
      "LLM は『次のトークンを予測する』ことだけを延々と学習したモデル。Transformer + 大量テキスト + 巨大計算資源の組み合わせ。",
      "学習は『事前学習(自己教師あり)→ ファインチューニング → RLHF』の 3 段。",
      "コンテキスト長 ・ 温度 ・ Top-p などの推論時パラメータが出力を大きく変える。",
    ],
    body: [
      {
        type: "p",
        text: "ChatGPT・Claude・Gemini が『答えを返してくれる』のはなぜか？ 内部で何が起きているのかを、AI エンジニア視点で要素分解します。",
      },
      { type: "h3", text: "LLM の本質は『次の単語予測』" },
      {
        type: "p",
        text: "LLM は **これまでの文脈から次のトークンを確率的に予測** することを延々と学習したモデル。これだけで会話・コード・要約・翻訳などができてしまう ─ 規模を上げると新しい能力が突然現れる(Emergent Ability)のが LLM の不思議。",
      },
      {
        type: "math",
        tex: "P(x_t \\mid x_1, x_2, \\dots, x_{t-1})",
      },
      {
        type: "intuition",
        title: "💡 Auto-regressive とは",
        body: "1 トークン予測 → 出力に追加 → また予測 → … を繰り返す。ChatGPT が文字を 1 つずつ出すのはこの仕組み。",
      },
      { type: "h3", text: "アーキテクチャ ─ Decoder-only Transformer" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Transformer** が基本(2017 年提案)",
          "GPT 系 ・ LLaMA ・ Claude などはほぼ **Decoder-only**",
          "BERT は Encoder-only(分類向き)",
          "T5 は Encoder + Decoder(翻訳など)",
        ],
      },
      {
        type: "p",
        text: "Self-Attention で長距離依存を処理 ─ 詳細は以下の記事:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "[Transformer の数学](/blog/transformer-math) ─ Self-Attention の式と PyTorch 実装",
          "[線形代数を AI 視点で](/blog/linear-algebra-for-ai) ─ 内積と行列積の理解",
        ],
      },
      { type: "h3", text: "学習の 3 段階" },
      { type: "h4", text: "Stage 1: 事前学習(Pre-training)" },
      {
        type: "p",
        text: "Web ・ 書籍 ・ コードなどの **大量テキスト** で次トークン予測を学習。GPT-4 級だと数兆トークン。データセンター規模の計算が数ヶ月かかる。",
      },
      { type: "h4", text: "Stage 2: 教師ありファインチューニング(SFT)" },
      {
        type: "p",
        text: "**人間が書いた高品質な指示 ・ 応答ペア** で追加学習。指示に従う動作を獲得。",
      },
      { type: "h4", text: "Stage 3: RLHF(人間フィードバック強化学習)" },
      {
        type: "p",
        text: "**好み比較データ** から報酬モデルを学習し、PPO で本体を最適化。Helpful ・ Harmless ・ Honest を促進。",
      },
      {
        type: "list",
        style: "number",
        items: [
          "応答候補 A・B を出して人間が好みを選ぶ",
          "好み比較から **報酬モデル** を学習",
          "報酬モデルを使って PPO で LLM を強化学習",
        ],
      },
      { type: "h3", text: "推論時の重要パラメータ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**温度(temperature)**: 高 = ランダム、低 = 決定論的",
          "**Top-p(nucleus sampling)**: 累積確率 p までの候補から選択",
          "**Top-k**: 上位 k 候補から選択",
          "**コンテキスト長**: 一度に扱える入力 + 出力の長さ(GPT-4 = 128K, Claude 4.7 = 1M)",
          "**max_tokens**: 出力の最大長",
        ],
      },
      {
        type: "code",
        title: "OpenAI API の例",
        python: "from openai import OpenAI\n\nclient = OpenAI()\nresp = client.chat.completions.create(\n    model='gpt-4o',\n    messages=[{'role': 'user', 'content': '統計検定 2 級の合格率は?'}],\n    temperature=0.7,\n    max_tokens=300,\n)\nprint(resp.choices[0].message.content)",
      },
      { type: "h3", text: "幻覚(Hallucination)とその対策" },
      {
        type: "p",
        text: "LLM は『もっともらしい嘘』を生成することがある。対策:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**RAG**(検索拡張生成): 信頼できるドキュメントを参照させる",
          "**ファクトチェック**: 別 LLM で検証 ・ ツール呼び出し",
          "**温度を下げる**: 創造性は下がるが安定",
          "**Chain-of-Thought**: 推論過程を出させる",
        ],
      },
      {
        type: "p",
        text: "RAG の詳細は [RAG 入門](/blog/rag-introduction) を参照。",
      },
      { type: "h3", text: "次のステップ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[プロンプトエンジニアリング基礎](/blog/prompt-engineering-basics)",
          "[Transformer の数学](/blog/transformer-math)",
          "[E 資格 ロードマップ](/certs/e-shikaku/roadmap)",
          "[AI Engineer Roadmap](/roadmap)",
        ],
      },
    ],
  },
  {
    slug: "prompt-engineering-basics",
    title: "プロンプトエンジニアリング基礎 ─ 出力を 10 倍良くする 7 つのコツ",
    description:
      "ChatGPT・Claude を使いこなすためのプロンプト設計の基礎。Few-shot・Chain-of-Thought・Role 指定など、現場で効くテクニックを 7 つ。",
    publishedAt: "2026-04-30",
    category: "LLM",
    tldr: [
      "プロンプトの良し悪しで出力品質が劇的に変わる ─ AI エンジニア必須スキル。",
      "明確な指示 + 文脈 + 例示 + 出力形式指定の 4 要素が基本。",
      "Chain-of-Thought・Few-shot・Self-consistency などの技を使い分ける。",
    ],
    body: [
      {
        type: "p",
        text: "LLM の力を引き出す **プロンプト設計** は、AI エンジニアにとって新しい必須スキルです。コードの書き方を覚えるように、プロンプトの書き方も体系化されています。本記事では基礎 7 テクニックを紹介。",
      },
      { type: "h3", text: "1. 明確な指示(Specificity)" },
      {
        type: "p",
        text: "❌ 『コードを書いて』 → ✅ 『Python で 1〜100 の素数を列挙する関数を書いて。型ヒント付き、docstring 必須。』",
      },
      {
        type: "intuition",
        title: "💡 良い指示の 4 要素",
        body: "(1) 何を / (2) どんな入力で / (3) どんな出力形式で / (4) 制約(性能・スタイル)。",
      },
      { type: "h3", text: "2. ロール指定(Role Prompting)" },
      {
        type: "code",
        title: "システムロールで人格を設定",
        python: "messages=[\n    {'role': 'system', 'content':\n     'あなたは統計検定 1 級保持者の数理統計学者です。式変形は厳密に、自然言語の説明は丁寧に。'},\n    {'role': 'user', 'content': '中心極限定理の数学的証明をお願いします'},\n]",
      },
      {
        type: "p",
        text: "システムロールで **専門性 ・ トーン ・ 制約** を先に固定すると、出力が安定します。",
      },
      { type: "h3", text: "3. Few-shot(例示)" },
      {
        type: "p",
        text: "やってほしいタスクの **入出力例を 2〜5 個** 見せる。LLM はその場でパターンを学習します。",
      },
      {
        type: "code",
        title: "例: 感情分類",
        python: "prompt = '''次のレビューを Positive / Negative に分類してください。\n\nレビュー: 最高の体験でした\n分類: Positive\n\nレビュー: 期待外れだった\n分類: Negative\n\nレビュー: まあまあかな\n分類:'''",
      },
      { type: "h3", text: "4. Chain-of-Thought(段階的推論)" },
      {
        type: "p",
        text: "数学・論理問題で『**ステップバイステップで考えてください**』と指示すると正答率が大きく上がります。",
      },
      {
        type: "code",
        title: "数学問題の改善",
        python: "❌ '36 個のリンゴを 4 人で平等に分けると?'\n→ 即答えだけ\n\n✅ '36 個のリンゴを 4 人で平等に分けます。\n   ステップごとに考えてから最終的な答えを述べてください。'\n→ 1) 全体は 36 個\n   2) 4 人で割る → 36 / 4 = 9\n   答え: 9 個ずつ",
      },
      { type: "h3", text: "5. 出力形式の指定" },
      {
        type: "p",
        text: "JSON ・ Markdown 表 ・ XML タグなど、**機械が読める形** を指定すると後段処理が楽。",
      },
      {
        type: "code",
        title: "JSON 出力例",
        python: "prompt = '''次の文章から人物名と年齢を抽出してください。\n出力は JSON のみ。説明文は不要。\n\n文章: 田中さん(34 歳)と山田さん(28 歳)が会議に参加した。\n\n出力スキーマ: {\"persons\": [{\"name\": str, \"age\": int}]}'''",
      },
      { type: "h3", text: "6. Self-Consistency(複数サンプル + 多数決)" },
      {
        type: "p",
        text: "重要な推論問題は temperature を上げて **複数回サンプリング → 多数決**。コストはかかるが精度が大きく上がる。",
      },
      { type: "h3", text: "7. プロンプトの構造化" },
      {
        type: "code",
        title: "セクション分けでロバストに",
        python: "prompt = '''# 役割\nあなたはデータサイエンティストです。\n\n# タスク\n以下のデータから 5 つの示唆を抽出する。\n\n# データ\n```csv\n{csv_content}\n```\n\n# 出力\n- Markdown の箇条書き 5 項目\n- 各項目は 1 文 50 字以内\n- 数値根拠を併記'''",
      },
      { type: "h3", text: "やってはいけない 3 つ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**曖昧な指示**: 『良い感じに書いて』は禁物",
          "**否定形だけ**: 『〜しないで』より『〜してください』が効く",
          "**長すぎる文脈**: 関係ない情報は削る(精度が落ちる)",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[LLM 入門](/blog/llm-introduction)",
          "[RAG 入門](/blog/rag-introduction)",
          "[Transformer の数学](/blog/transformer-math)",
        ],
      },
      {
        type: "p",
        text: "プロンプトエンジニアリングは **書いて試す** が一番。本記事のテクニックを ChatGPT / Claude で順番に試してみてください。",
      },
    ],
  },
  {
    slug: "rag-introduction",
    title: "RAG 入門 ─ LLM に外部知識を持たせる仕組み",
    description:
      "Retrieval Augmented Generation(RAG)の仕組みを、Embedding・ベクトル DB・検索・生成の 4 要素に分解。社内文書 Bot を作る最短ルートを示します。",
    publishedAt: "2026-04-30",
    category: "LLM",
    tldr: [
      "RAG = ユーザー質問に関連する文書を検索 → LLM のプロンプトに含めて回答生成。",
      "幻覚を抑え、最新 ・ 社内固有の情報も扱える(LLM の弱点を補う鉄板パターン)。",
      "実装は『チャンキング → Embedding → ベクトル DB → 検索 → プロンプト合成』の 5 ステップ。",
    ],
    body: [
      {
        type: "p",
        text: "**RAG(Retrieval Augmented Generation)** は LLM に外部知識を持たせる最も実用的な手法。社内文書 Q&A・カスタマーサポート・コードアシスタントの定番パターンです。",
      },
      { type: "h3", text: "なぜ必要か" },
      {
        type: "p",
        text: "LLM 単体の限界:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**学習時点の情報しか持たない** ─ 最新ニュース ・ 社内文書は知らない",
          "**幻覚(Hallucination)** ─ もっともらしい嘘を作る",
          "**根拠を示せない** ─ なぜそう答えたか不明",
          "**コンテキスト長の限界** ─ 全文書を毎回投げられない",
        ],
      },
      {
        type: "p",
        text: "→ RAG で **必要な部分だけ** を毎回取得して LLM に渡す。",
      },
      { type: "h3", text: "RAG の流れ(5 ステップ)" },
      {
        type: "list",
        style: "number",
        items: [
          "**チャンキング**: ドキュメントを 200〜1000 トークン程度の塊に分割",
          "**Embedding**: 各塊を密ベクトル(例: 1536 次元)に変換",
          "**ベクトル DB に保存**: Pinecone ・ Weaviate ・ pgvector など",
          "**検索**: ユーザー質問を Embedding 化 → 類似ベクトルを Top-k 取得",
          "**生成**: 取得した塊 + 質問を LLM に渡して回答生成",
        ],
      },
      { type: "h3", text: "Python での最小実装" },
      {
        type: "code",
        title: "OpenAI + ChromaDB",
        python: "import chromadb\nfrom openai import OpenAI\n\nclient = OpenAI()\ndb = chromadb.Client()\ncoll = db.create_collection('docs')\n\n# Step 1-3: ドキュメント追加\ndocs = [\n    '統計検定 2 級は CBT 形式で 90 分。',\n    '統計検定 2 級の合格率は約 40〜50%。',\n    '受験料は一般 7,000 円・学割 5,000 円。',\n]\nembs = [\n    client.embeddings.create(input=d, model='text-embedding-3-small').data[0].embedding\n    for d in docs\n]\ncoll.add(ids=[f'd{i}' for i in range(len(docs))], documents=docs, embeddings=embs)\n\n# Step 4: 検索\nquery = '統計検定 2 級は何分?'\nq_emb = client.embeddings.create(input=query, model='text-embedding-3-small').data[0].embedding\nresults = coll.query(query_embeddings=[q_emb], n_results=2)\ncontext = '\\n'.join(results['documents'][0])\n\n# Step 5: 生成\nresp = client.chat.completions.create(\n    model='gpt-4o-mini',\n    messages=[\n        {'role': 'system', 'content': '次の文書のみを根拠に答えてください。'},\n        {'role': 'user', 'content': f'文書:\\n{context}\\n\\n質問: {query}'},\n    ],\n)\nprint(resp.choices[0].message.content)",
      },
      { type: "h3", text: "重要な設計判断" },
      { type: "h4", text: "チャンキング戦略" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**固定長**: シンプル、文の途中で切れることも",
          "**段落単位**: 自然だが長さがバラつく",
          "**Sliding window**: オーバーラップで文脈をつなぐ",
          "**LangChain RecursiveCharacterTextSplitter**: 再帰的に区切る",
        ],
      },
      { type: "h4", text: "Embedding モデルの選択" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**OpenAI text-embedding-3-small**: 安価 ・ 多言語",
          "**OpenAI text-embedding-3-large**: 高精度",
          "**Voyage / Cohere**: 専門タスクに強い",
          "**SentenceTransformers**: ローカルで動かせるオープンソース",
        ],
      },
      { type: "h4", text: "ベクトル DB の選択" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Pinecone / Weaviate**: マネージド、スケール大",
          "**ChromaDB / Faiss**: ローカル / プロトタイプ向き",
          "**pgvector**: PostgreSQL の拡張、既存 DB と統合",
          "**Qdrant**: 自前ホスト + 高性能",
        ],
      },
      { type: "h3", text: "高度な RAG パターン" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Hybrid Search**: BM25(キーワード) + ベクトル検索の組合せ",
          "**Re-ranking**: 一次検索の結果をクロスエンコーダで再順位付け",
          "**HyDE**: 仮想回答を生成してから検索 → 精度向上",
          "**Multi-hop**: 複数回検索して推論を組み立てる",
        ],
      },
      { type: "h3", text: "評価指標" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Recall@k**: 関連文書が Top-k に入っているか",
          "**Faithfulness**: 出力が文書に忠実か",
          "**Answer Relevance**: 質問への回答度合い",
          "**Context Precision**: 取得した文書の関連度",
        ],
      },
      { type: "h3", text: "次のステップ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[LLM 入門](/blog/llm-introduction)",
          "[プロンプトエンジニアリング基礎](/blog/prompt-engineering-basics)",
          "[ベイズ最適化](/blog/bayesian-optimization)",
          "[線形代数を AI 視点で](/blog/linear-algebra-for-ai)",
        ],
      },
    ],
  },
  {
    slug: "mlops-basics",
    title: "MLOps 基礎 ─ ML モデルを本番で運用する",
    description:
      "実験室の精度から本番運用へ。データバージョニング・モデル監視・CI/CD・特徴量ストアなど、AI エンジニアが押さえるべき MLOps の基礎を 6 領域で解説。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "MLOps = DevOps × ML。再現性 ・ 監視 ・ 自動化が 3 本柱。",
      "データ ・ コード ・ モデル の 3 つすべてをバージョン管理する。",
      "本番では精度よりも『安定して回り続けるか』が重要。",
    ],
    body: [
      {
        type: "p",
        text: "Jupyter で 90% 出した精度も、本番環境で動かなければ価値ゼロ。**MLOps** は ML モデルをプロダクションで安定運用するためのプラクティス群です。",
      },
      { type: "h3", text: "MLOps の 6 領域" },
      {
        type: "list",
        style: "number",
        items: [
          "**データバージョニング**(DVC ・ LakeFS)",
          "**実験管理**(MLflow ・ Weights & Biases)",
          "**モデルレジストリ**(MLflow ・ SageMaker)",
          "**CI/CD パイプライン**(GitHub Actions ・ Vertex AI)",
          "**サービング**(FastAPI ・ TorchServe ・ Triton)",
          "**監視 ・ 再学習**(Evidently ・ Arize)",
        ],
      },
      { type: "h3", text: "1. データバージョニング" },
      {
        type: "p",
        text: "コードを Git で管理するように、データも管理する必要があります。データが変わるとモデル結果も変わるため。",
      },
      {
        type: "code",
        title: "DVC の例",
        python: "# データを DVC で追跡\ndvc add data/raw/train.csv\ngit add data/raw/train.csv.dvc .gitignore\ngit commit -m 'Track training data v1'\n\n# データを更新したら\ndvc add data/raw/train.csv  # 自動で hash 更新\ngit commit -am 'Update training data v2'",
      },
      { type: "h3", text: "2. 実験管理" },
      {
        type: "code",
        title: "MLflow で実験を追跡",
        python: "import mlflow\n\nwith mlflow.start_run():\n    mlflow.log_param('lr', 0.01)\n    mlflow.log_param('batch_size', 32)\n\n    # 学習...\n\n    mlflow.log_metric('accuracy', acc)\n    mlflow.log_metric('loss', loss)\n    mlflow.sklearn.log_model(model, 'model')",
      },
      {
        type: "p",
        text: "全実験のハイパラ ・ 評価指標 ・ モデルファイルが Web UI で一覧できる ─ 数百回の試行でも比較可能。",
      },
      { type: "h3", text: "3. モデルレジストリ" },
      {
        type: "p",
        text: "学習済みモデルを **バージョン付き** で保管。本番に出す前に **Staging → Production** のステージング:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "v1: ベースライン",
          "v2: A/B テスト中(canary)",
          "v3: 本番運用中",
          "ロールバック: v3 で問題が出たら v2 に即戻し",
        ],
      },
      { type: "h3", text: "4. CI/CD" },
      {
        type: "p",
        text: "コード push → 自動テスト → 学習 → 評価 → デプロイ までの自動化。",
      },
      {
        type: "code",
        title: "GitHub Actions の例",
        python: "# .github/workflows/ml.yml\nname: ML Pipeline\non: [push]\njobs:\n  train:\n    steps:\n      - uses: actions/checkout@v4\n      - run: pip install -r requirements.txt\n      - run: python train.py\n      - run: python evaluate.py --threshold 0.85\n      - run: python deploy.py  # 評価合格時のみ",
      },
      { type: "h3", text: "5. サービング" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**FastAPI**: シンプル ・ 軽量",
          "**TorchServe**: PyTorch 専用、バッチ処理 ・ A/B 内蔵",
          "**Triton**: GPU 推論最適化、複数フレームワーク対応",
          "**Vertex AI / SageMaker**: マネージドで運用負担最小",
        ],
      },
      {
        type: "code",
        title: "FastAPI で 5 行サービング",
        python: "from fastapi import FastAPI\nimport joblib\n\napp = FastAPI()\nmodel = joblib.load('model.pkl')\n\n@app.post('/predict')\ndef predict(features: list[float]):\n    return {'prediction': float(model.predict([features])[0])}",
      },
      { type: "h3", text: "6. 監視 ・ 再学習" },
      {
        type: "p",
        text: "本番に出して終わりではなく、**継続的に監視** が必要:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Data Drift**: 入力データ分布が変わっていないか",
          "**Prediction Drift**: 予測分布が変わっていないか",
          "**Performance**: 精度が落ちていないか(ground truth が遅延入手の場合も)",
          "**レイテンシ ・ エラー率**: 普通の Web サービス監視",
          "**Drift 検出 → 再学習トリガー**",
        ],
      },
      {
        type: "practical",
        title: "🛠 実務で出る課題",
        body: "コロナでユーザー行動が激変 → モデル精度が落ちた、なんて事例が無数にあります。Drift 監視は必須。",
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[Pandas Tips](/blog/pandas-tips-for-ml)",
          "[Python 環境構築](/blog/python-setup-for-stats)",
          "[E 資格 ロードマップ](/certs/e-shikaku/roadmap)",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "MLOps は『コードを書いて終わり』ではなく『継続して動かす』ことが本質。AI エンジニアの実務時間の **6〜8 割は MLOps 領域** とも言われます。早めに体系を掴んでおくと差がつきます。",
      },
    ],
  },
  {
    slug: "kaggle-getting-started",
    title: "Kaggle 始め方 ─ 最初の銅メダルまでの 30 日",
    description:
      "世界最大の機械学習コンペサイト Kaggle で実戦経験を積む方法。アカウント作成からテーブルコンペで銅メダルを取るまでの王道 30 日プランを提示。",
    publishedAt: "2026-04-30",
    category: "実装",
    tldr: [
      "Kaggle = 世界中のデータサイエンティストが競う場。学習 ・ ポートフォリオ ・ 転職に強い。",
      "30 日プラン: Tutorial → Notebooks 読込 → 自分で submit → ベースライン強化 → アンサンブル。",
      "テーブルコンペで LightGBM ベースライン → Optuna 調整 → blending で銅メダル圏。",
    ],
    body: [
      {
        type: "p",
        text: "**Kaggle** は ML 実戦経験を積む最強の場。世界中の DS と同じ問題に取り組み、リアルタイムで順位がつきます。本記事では **30 日で初メダル** を取る現実的なプランを提示。",
      },
      { type: "h3", text: "なぜ Kaggle が良いか" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**実データ** で手を動かせる(教科書の iris ・ MNIST から脱却)",
          "**世界の上位の Notebook** が公開されており、学習教材として最高",
          "**Discord コミュニティ ・ 日本人勢のブログ** が豊富",
          "**メダル ・ ランクが履歴書** に書ける(Expert ・ Master ・ Grandmaster)",
        ],
      },
      { type: "h3", text: "30 日プラン" },
      { type: "h4", text: "Day 1〜3: アカウント作成 + Tutorial" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[kaggle.com](https://kaggle.com) でアカウント作成",
          "**Titanic コンペ**(初心者用)で Submit までの流れを体験",
          "**Kaggle Learn**(無料コース)で Pandas ・ ML 入門",
        ],
      },
      { type: "h4", text: "Day 4〜10: 公開 Notebook を読む" },
      {
        type: "p",
        text: "現在開催中のテーブルコンペを 1 つ選び、**Most Voted** の Notebook を 5〜10 個読む。コードをコピペして自分の環境で動かす。",
      },
      { type: "h4", text: "Day 11〜17: ベースラインを作る" },
      {
        type: "code",
        title: "テーブルコンペの定石コード",
        python: "import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import KFold\nimport lightgbm as lgb\n\ntrain = pd.read_csv('train.csv')\ntest = pd.read_csv('test.csv')\nX, y = train.drop('target', axis=1), train['target']\n\noof = np.zeros(len(X))\nsub = np.zeros(len(test))\nkf = KFold(n_splits=5, shuffle=True, random_state=42)\n\nfor fold, (tr_idx, val_idx) in enumerate(kf.split(X)):\n    X_tr, X_val = X.iloc[tr_idx], X.iloc[val_idx]\n    y_tr, y_val = y.iloc[tr_idx], y.iloc[val_idx]\n    model = lgb.LGBMRegressor(n_estimators=2000, learning_rate=0.05)\n    model.fit(X_tr, y_tr, eval_set=[(X_val, y_val)], callbacks=[lgb.early_stopping(100)])\n    oof[val_idx] = model.predict(X_val)\n    sub += model.predict(test) / 5\n\nprint('CV:', np.sqrt(((y - oof) ** 2).mean()))\npd.DataFrame({'id': test['id'], 'target': sub}).to_csv('submission.csv', index=False)",
      },
      { type: "h4", text: "Day 18〜23: 特徴量エンジニアリング" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**カテゴリ変数**: Target Encoding",
          "**集計特徴量**: groupby + agg で cross-feature",
          "**日付**: weekday ・ 月初/月末 ・ 祝日",
          "**外部データ**: 公開可能な追加データを統合",
        ],
      },
      {
        type: "p",
        text: "詳しくは [Pandas Tips](/blog/pandas-tips-for-ml) も参照。",
      },
      { type: "h4", text: "Day 24〜27: ハイパラ調整" },
      {
        type: "p",
        text: "[ベイズ最適化](/blog/bayesian-optimization) で Optuna を使い、num_leaves ・ learning_rate ・ min_child_samples を探索。CV スコアが 0.5〜2% は伸びる。",
      },
      { type: "h4", text: "Day 28〜30: アンサンブル + Submit 連発" },
      {
        type: "p",
        text: "**Stacking** や **Blending** で複数モデルの予測を平均化。LightGBM + XGBoost + CatBoost の単純平均でも 1% 上がる。",
      },
      {
        type: "code",
        title: "シンプル Blending",
        python: "blend = (lgb_pred + xgb_pred + cat_pred) / 3\n# 加重平均にしたい場合\nblend = 0.4 * lgb_pred + 0.4 * cat_pred + 0.2 * xgb_pred",
      },
      { type: "h3", text: "メダル獲得のコツ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Public LB に過剰適合しない**: CV を信じる",
          "**最終 Submit は 2 つ**: 安全な選択 + チャレンジ選択",
          "**Discussion を読む**: 他参加者のヒントが宝の山",
          "**Discord でチームを組む**: 銀以上を狙うなら",
        ],
      },
      { type: "h3", text: "おすすめのコンペタイプ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Tabular Playground Series**: 月次の練習コンペ。短期 ・ メダルあり",
          "**Getting Started**: Titanic ・ House Prices(常設)",
          "**Featured(賞金あり)**: 本気の戦い、上位 1% が銅",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[Pandas Tips](/blog/pandas-tips-for-ml)",
          "[ベイズ最適化](/blog/bayesian-optimization)",
          "[AI Engineer Roadmap](/roadmap)",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "Kaggle は **理論を実戦に変える最強の道場**。30 日真剣にやれば、教科書を 6 ヶ月読むより身につきます。最初の銅メダルが転機です。",
      },
    ],
  },
  {
    slug: "causal-inference-introduction",
    title: "因果推論 入門 ─ 相関と因果はどう違うか",
    description:
      "「アイスが売れる日は溺れる人が増える ─ アイスが原因？」 ─ 統計の頂点とも言える因果推論を、AI エンジニア視点で実装まで。",
    publishedAt: "2026-04-30",
    category: "学習法",
    tldr: [
      "相関は誰でも計算できるが、因果は『介入効果』を分離して初めて主張できる。",
      "ランダム化比較試験(RCT)が最強だが、現実には不可能なことも多い。",
      "観察データから因果を推論する手法: 傾向スコア ・ 操作変数 ・ 差分の差分(DID)・ 回帰不連続 ・ DAG。",
    ],
    body: [
      {
        type: "p",
        text: "「**アイスクリームの売上が高い日に水死事故が多い**」 ─ これだけでは『アイスが原因で水死する』とは言えません。第三の要因(暑い日)が両方を引き起こしている可能性が高い。これが **相関と因果の違い** で、ML の予測モデルでは扱えない領域です。",
      },
      { type: "h3", text: "相関 ≠ 因果 を前提にする" },
      {
        type: "p",
        text: "ML モデルが学ぶのは **相関構造**。だが、ビジネス意思決定で本当に欲しいのは **介入効果**:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "『広告を表示すると CV は上がるか?』 ← 介入の効果",
          "『価格を 10% 下げると売上はどうなる?』 ← 介入の効果",
          "『この治療を受けると生存率は上がる?』 ← 介入の効果",
        ],
      },
      {
        type: "intuition",
        title: "💡 反事実の世界",
        body: "因果効果 = 『介入した世界』と『しなかった世界』の差。同じ人に両方は起こらないので推論で埋めるしかない。",
      },
      { type: "h3", text: "ゴールドスタンダード ─ RCT" },
      {
        type: "p",
        text: "**ランダム化比較試験(Randomized Controlled Trial)** で介入をランダムに割り当てると、交絡要因が均等化されて効果が分離できる。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**A/B テスト**: Web の標準",
          "**臨床試験**: 新薬承認の必須条件",
          "**フィールド実験**: 経済学のノーベル賞(Banerjee, Duflo)",
        ],
      },
      {
        type: "p",
        text: "ただし RCT が **倫理的 ・ 経済的 ・ 物理的に不可能** な場合も多い(タバコの害、過去のキャンペーン分析など)。",
      },
      { type: "h3", text: "観察データから因果を出す 5 手法" },
      { type: "h4", text: "1. 傾向スコア(Propensity Score Matching)" },
      {
        type: "p",
        text: "介入を受ける『傾向』をロジスティック回帰で推定 → 似た傾向を持つペアでマッチング → 効果を計算。",
      },
      {
        type: "code",
        title: "傾向スコアマッチング(scikit-learn + 自前)",
        python: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.neighbors import NearestNeighbors\n\n# X: 共変量, T: 処置 0/1, Y: アウトカム\nps = LogisticRegression().fit(X, T).predict_proba(X)[:, 1]\n\n# 処置群の各サンプルに最近傍の対照群を割り当て\ntreated = X[T == 1]\nuntreated = X[T == 0]\nnn = NearestNeighbors(n_neighbors=1).fit(ps[T == 0].reshape(-1, 1))\n_, idx = nn.kneighbors(ps[T == 1].reshape(-1, 1))\n\natt = (Y[T == 1].values - Y[T == 0].values[idx.flatten()]).mean()\nprint('ATT:', att)",
      },
      { type: "h4", text: "2. 差分の差分(Difference-in-Differences)" },
      {
        type: "p",
        text: "**処置の前後** + **処置群と対照群** の 2 軸で差を取る。並行トレンド仮定が成り立てば因果効果が出せる。",
      },
      { type: "h4", text: "3. 操作変数法(Instrumental Variable)" },
      {
        type: "p",
        text: "**処置に影響するが結果には直接影響しない** 変数(IV)を使う。古典例: 兵役くじ → 教育年数の効果。",
      },
      { type: "h4", text: "4. 回帰不連続(RDD)" },
      {
        type: "p",
        text: "**閾値で処置が切り替わる**(例: 試験スコア 80 点で奨学金)場面で、閾値前後を比較。",
      },
      { type: "h4", text: "5. 因果ダイアグラム(DAG)" },
      {
        type: "p",
        text: "**変数間の因果関係をグラフで明示** → 識別可能性を判定。Judea Pearl の do 計算が理論的基盤。",
      },
      { type: "h3", text: "Python ライブラリ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**DoWhy**(Microsoft): DAG ベースで識別 → 推定 → 反証",
          "**EconML**(Microsoft): 機械学習を使った因果推論(Double ML, Causal Forest)",
          "**CausalImpact**(Google): 時系列の介入効果分析",
          "**linearmodels**: IV 推定 ・ パネルデータ",
        ],
      },
      { type: "h3", text: "AI エンジニアの活用シーン" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**A/B テストの結果分析**: 単純比較ではなく傾向スコア調整",
          "**マーケティング施策の効果**: 過去キャンペーンの ROI 分析",
          "**プロダクト機能の効果検証**: ロールアウト前後の比較",
          "**価格弾力性の推定**: 操作変数法で価格効果を分離",
          "**バイアス除去**: 採用 ・ 与信モデルの差別検出",
        ],
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[統計検定 2 級 教科書](/textbook/grade-2) ─ 回帰の基礎",
          "[統計検定 準 1 級 教科書](/textbook/grade-pre1) ─ 多変量解析",
          "[p 値の誤解 5 選](/blog/p-value-misunderstandings)",
          "[ベイズ統計と頻度論](/blog/bayes-vs-frequentist)",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "因果推論は『**統計の頂点**』 ─ ML エンジニアが上位職を目指すなら必修領域。意思決定の質が桁違いに変わります。",
      },
    ],
  },
  {
    slug: "sklearn-introduction",
    title: "scikit-learn 入門 ─ 30 分で覚える ML 7 ステップ",
    description:
      "Python で機械学習を始めるなら scikit-learn が最短ルート。前処理 → 学習 → 評価 → ハイパラ調整までの 7 ステップを最小コードで一気に体験します。",
    publishedAt: "2026-04-29",
    category: "実装",
    tldr: [
      "scikit-learn は『データ → fit → predict』が共通インターフェース。1 つのモデルが書ければ全部書ける。",
      "前処理 → 分割 → 学習 → 評価 → 交差検証 → グリッドサーチ → 永続化 の 7 ステップで一通り。",
      "教師あり / 教師なし / パイプライン / 特徴量重要度 まで全部このライブラリで完結。",
    ],
    body: [
      {
        type: "p",
        text: "**scikit-learn** は Python の機械学習ライブラリのデファクトスタンダード。一貫した API で 100 種類以上のアルゴリズムが使え、入門から実務まで活躍します。本記事では 7 ステップで全体像を掴みます。",
      },
      { type: "h3", text: "Step 1 ─ データ読み込み" },
      {
        type: "code",
        title: "iris データセットで遊ぶ",
        python: "from sklearn.datasets import load_iris\nimport pandas as pd\n\ndata = load_iris(as_frame=True)\nX, y = data.data, data.target\nprint(X.head())\nprint(y.value_counts())",
      },
      { type: "h3", text: "Step 2 ─ 訓練 / テスト分割" },
      {
        type: "code",
        title: "8:2 で分割",
        python: "from sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42, stratify=y\n)",
      },
      { type: "h3", text: "Step 3 ─ 前処理(スケーリング)" },
      {
        type: "code",
        title: "標準化",
        python: "from sklearn.preprocessing import StandardScaler\n\nscaler = StandardScaler()\nX_train_scaled = scaler.fit_transform(X_train)\nX_test_scaled = scaler.transform(X_test)  # fit せず transform のみ!",
      },
      {
        type: "intuition",
        title: "💡 fit/transform/fit_transform",
        body: "fit = 統計量を学習。transform = それで変換。テストデータには fit_transform を使わない(リーク防止)。",
      },
      { type: "h3", text: "Step 4 ─ モデル学習" },
      {
        type: "code",
        title: "ロジスティック回帰",
        python: "from sklearn.linear_model import LogisticRegression\n\nmodel = LogisticRegression(max_iter=1000)\nmodel.fit(X_train_scaled, y_train)",
      },
      { type: "h3", text: "Step 5 ─ 評価" },
      {
        type: "code",
        title: "精度・混同行列・分類レポート",
        python: "from sklearn.metrics import accuracy_score, confusion_matrix, classification_report\n\ny_pred = model.predict(X_test_scaled)\nprint('Accuracy:', accuracy_score(y_test, y_pred))\nprint(confusion_matrix(y_test, y_pred))\nprint(classification_report(y_test, y_pred, target_names=data.target_names))",
      },
      { type: "h3", text: "Step 6 ─ 交差検証" },
      {
        type: "code",
        title: "5-fold CV",
        python: "from sklearn.model_selection import cross_val_score\n\nscores = cross_val_score(model, X_train_scaled, y_train, cv=5, scoring='accuracy')\nprint(f'CV mean: {scores.mean():.3f} ± {scores.std():.3f}')",
      },
      { type: "h3", text: "Step 7 ─ ハイパラ最適化(GridSearch)" },
      {
        type: "code",
        title: "C パラメータの探索",
        python: "from sklearn.model_selection import GridSearchCV\n\nparams = {'C': [0.01, 0.1, 1, 10, 100]}\ngrid = GridSearchCV(LogisticRegression(max_iter=1000), params, cv=5)\ngrid.fit(X_train_scaled, y_train)\nprint('Best C:', grid.best_params_, 'CV:', grid.best_score_)",
      },
      { type: "h3", text: "おまけ ─ Pipeline でまとめる" },
      {
        type: "code",
        title: "前処理+学習を 1 つに",
        python: "from sklearn.pipeline import Pipeline\n\npipe = Pipeline([\n    ('scaler', StandardScaler()),\n    ('clf', LogisticRegression(max_iter=1000)),\n])\npipe.fit(X_train, y_train)\npipe.score(X_test, y_test)",
      },
      {
        type: "practical",
        title: "🛠 実務での重要性",
        body: "Pipeline を使うと『前処理を訓練データだけで fit してテストにも適用』が自動化。データリークを防ぎ、再現性も高まります。",
      },
      { type: "h3", text: "次のステップ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[統計検定 2 級 教科書](/textbook/grade-2) ─ 線形回帰・ロジスティック回帰の理論",
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ DL への発展",
          "[Python 環境構築](/blog/python-setup-for-stats) ─ 環境がまだの方",
          "[AIエンジニア統計チートシート](/blog/ai-stats-cheatsheet) ─ 必要な統計知識",
        ],
      },
    ],
  },
  {
    slug: "pandas-tips-for-ml",
    title: "Pandas 実務 Tips 10 選 ─ AIエンジニアの時短ワザ",
    description:
      "データ前処理で何度も書く操作を Pandas でスマートに。groupby・apply・merge・欠損値処理など、ML エンジニアが現場でよく使うテクニックを 10 個。",
    publishedAt: "2026-04-29",
    category: "Python",
    tldr: [
      "groupby + agg / apply / transform の使い分けができれば、前処理の 8 割は片付く。",
      "欠損値・カテゴリ・日付・テキストの 4 大データ型ごとに定石がある。",
      "メモリ削減 + 速度アップで 100 倍速くなる場面も。",
    ],
    body: [
      {
        type: "p",
        text: "Pandas は AI エンジニアが最も時間を使うライブラリ。よく使う操作を 10 個まとめました。コピペで使える形にしています。",
      },
      { type: "h3", text: "1. groupby + agg(複数集計を一発で)" },
      {
        type: "code",
        title: "複数列に複数集計",
        python: "df.groupby('category').agg(\n    avg_price=('price', 'mean'),\n    max_price=('price', 'max'),\n    n_items=('id', 'count'),\n)",
      },
      { type: "h3", text: "2. transform(集計結果を元の行数で返す)" },
      {
        type: "code",
        title: "グループ平均との偏差を作る",
        python: "df['price_z'] = (df['price'] - df.groupby('cat')['price'].transform('mean')) / df.groupby('cat')['price'].transform('std')",
      },
      { type: "h3", text: "3. 欠損値の確認と処理" },
      {
        type: "code",
        title: "欠損率と埋め方",
        python: "df.isna().mean().sort_values(ascending=False)\n\n# 数値: 中央値で埋める\ndf['age'] = df['age'].fillna(df['age'].median())\n\n# カテゴリ: 最頻値\ndf['city'] = df['city'].fillna(df['city'].mode()[0])\n\n# 完全に欠けてる列を削除\ndf = df.dropna(axis=1, how='all')",
      },
      { type: "h3", text: "4. カテゴリ変数を数値化" },
      {
        type: "code",
        title: "One-hot encoding と target encoding",
        python: "# One-hot\ndf = pd.get_dummies(df, columns=['city', 'gender'], drop_first=True)\n\n# Target encoding(リーク注意)\nmean_target = df.groupby('city')['target'].mean()\ndf['city_te'] = df['city'].map(mean_target)",
      },
      { type: "h3", text: "5. 日付列の処理" },
      {
        type: "code",
        title: "datetime と特徴量化",
        python: "df['date'] = pd.to_datetime(df['date'])\ndf['year'] = df['date'].dt.year\ndf['month'] = df['date'].dt.month\ndf['weekday'] = df['date'].dt.dayofweek\ndf['is_weekend'] = df['weekday'].isin([5, 6])",
      },
      { type: "h3", text: "6. merge / join 使い分け" },
      {
        type: "code",
        title: "外部結合とアシマトリック",
        python: "# 内部結合(共通キーのみ)\nmerged = pd.merge(orders, users, on='user_id', how='inner')\n\n# 左結合(orders を残す)\nmerged = pd.merge(orders, users, on='user_id', how='left')\n\n# 結合状況を確認\nmerged = pd.merge(orders, users, on='user_id', how='left', indicator=True)\nprint(merged['_merge'].value_counts())",
      },
      { type: "h3", text: "7. メモリ削減" },
      {
        type: "code",
        title: "型のダウンキャスト",
        python: "# 整数列を必要最小サイズに\ndf['age'] = pd.to_numeric(df['age'], downcast='integer')\n\n# float64 を float32 に\ndf['price'] = df['price'].astype('float32')\n\n# カテゴリ列を category 型に(文字列より圧倒的に省メモリ)\ndf['city'] = df['city'].astype('category')",
      },
      { type: "h3", text: "8. apply の代わりに vectorize" },
      {
        type: "code",
        title: "速度差は 100 倍",
        python: "# 遅い: apply\ndf['len'] = df['text'].apply(len)\n\n# 速い: ベクトル化(.str アクセサ)\ndf['len'] = df['text'].str.len()\n\n# 数値演算も同じく\ndf['z'] = df['x'] * 2 + df['y']  # apply より圧倒的速い",
      },
      { type: "h3", text: "9. ピボット(縦↔横変換)" },
      {
        type: "code",
        title: "long → wide",
        python: "wide = df.pivot_table(\n    index='user_id', columns='category', values='amount', aggfunc='sum', fill_value=0\n)",
      },
      { type: "h3", text: "10. クエリ式で読みやすく" },
      {
        type: "code",
        title: "query()",
        python: "# 通常\nresult = df[(df['age'] >= 30) & (df['city'] == 'Tokyo')]\n\n# query 式(可読性UP)\nresult = df.query('age >= 30 and city == \"Tokyo\"')",
      },
      {
        type: "practical",
        title: "🛠 polars もチェック",
        body: "1GB を超えるデータでは polars(Rust 実装の Pandas 互換)が 5〜30 倍速い。Pandas 知識はそのまま使えます。",
      },
      { type: "h3", text: "学習リソース" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[Python 環境構築](/blog/python-setup-for-stats)",
          "[AIエンジニア統計チートシート](/blog/ai-stats-cheatsheet)",
        ],
      },
    ],
  },
  {
    slug: "linear-algebra-for-ai",
    title: "AI のための線形代数 ─ 5 つの概念だけで Transformer まで届く",
    description:
      "ベクトル・内積・行列積・固有値・特異値分解 ─ 機械学習・DL に必要な線形代数を 5 つに絞り、Python 実装と直感解説で。",
    publishedAt: "2026-04-29",
    category: "数学",
    tldr: [
      "AI に必要な線形代数は『ベクトル/行列の積・転置・固有値分解・SVD・勾配』の 5 概念。",
      "Transformer の attention は本質的に『行列積 + softmax』。",
      "PCA・最小二乗法・推薦システム は SVD で説明できる。",
    ],
    body: [
      {
        type: "p",
        text: "「AI には線形代数が必要」と言われますが、**実際に必要な範囲は驚くほど狭い**。本記事では 5 つの中核概念だけで、Transformer まで届く道筋を示します。",
      },
      { type: "h3", text: "1. ベクトルと内積 ─ 類似度の言葉" },
      {
        type: "math",
        tex: "\\mathbf{a} \\cdot \\mathbf{b} = \\sum_i a_i b_i = \\|\\mathbf{a}\\| \\|\\mathbf{b}\\| \\cos\\theta",
      },
      {
        type: "p",
        text: "内積は **2 ベクトルがどれくらい同じ方向を向いているか**。コサイン類似度はここから来ます。",
      },
      {
        type: "code",
        title: "コサイン類似度",
        python: "import numpy as np\n\ndef cosine(a, b):\n    return np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))\n\nprint(cosine([1, 0], [1, 1]))  # 0.707",
      },
      {
        type: "practical",
        title: "🛠 実務での出番",
        body: "Word2Vec / BERT の単語類似度、推薦システム、検索リランキングはすべて内積。",
      },
      { type: "h3", text: "2. 行列積 ─ 線形変換" },
      {
        type: "math",
        tex: "(AB)_{ij} = \\sum_k A_{ik} B_{kj}",
      },
      {
        type: "p",
        text: "ニューラルネットの **1 層 = 行列積 + 活性化関数**。線形回帰の予測 $\\hat{y} = X\\beta$ も行列積。",
      },
      {
        type: "code",
        title: "簡易 NN の forward pass",
        python: "X = np.random.randn(32, 100)        # 32 サンプル, 100 次元\nW1 = np.random.randn(100, 64) * 0.1\nb1 = np.zeros(64)\n\nh = X @ W1 + b1                    # 行列積で全結合\nh = np.maximum(h, 0)                # ReLU",
      },
      { type: "h3", text: "3. 転置 ─ 軸を入れ替える" },
      {
        type: "p",
        text: "$A^\\top_{ij} = A_{ji}$。**Transformer の attention** で必須:",
      },
      {
        type: "math",
        tex: "\\mathrm{Attention}(Q, K, V) = \\mathrm{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right) V",
      },
      {
        type: "p",
        text: "Q が問い合わせ ・ K がキー、内積 $QK^\\top$ で『どのトークンに注目するか』が決まります。",
      },
      { type: "h3", text: "4. 固有値分解 ─ 主成分分析(PCA)の根" },
      {
        type: "math",
        tex: "A\\mathbf{v} = \\lambda \\mathbf{v}",
      },
      {
        type: "p",
        text: "$\\mathbf{v}$ が固有ベクトル ・ $\\lambda$ が固有値。**共分散行列の固有ベクトル = データの主軸**。これが PCA。",
      },
      {
        type: "code",
        title: "PCA を 3 行で",
        python: "from sklearn.decomposition import PCA\n\npca = PCA(n_components=2)\nX_2d = pca.fit_transform(X)\nprint('説明分散比:', pca.explained_variance_ratio_)",
      },
      { type: "h3", text: "5. SVD(特異値分解) ─ 万能ツール" },
      {
        type: "math",
        tex: "A = U \\Sigma V^\\top",
      },
      {
        type: "p",
        text: "**任意の行列を 3 つに分解** できる魔法。応用例:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**画像圧縮**: 上位 k 個の特異値だけ残す",
          "**推薦システム**: 評価行列の低ランク近似",
          "**LSI(潜在意味解析)**: 単語-文書行列の SVD",
          "**最小二乗法**: 数値的に安定した解法",
        ],
      },
      { type: "h3", text: "勾配 ─ 学習の方向" },
      {
        type: "math",
        tex: "\\nabla_\\theta L = \\left(\\frac{\\partial L}{\\partial \\theta_1}, \\dots, \\frac{\\partial L}{\\partial \\theta_n}\\right)",
      },
      {
        type: "p",
        text: "勾配は **損失関数を最も急に増やす方向**。学習はその逆向き(勾配降下)に進みます。",
      },
      { type: "h3", text: "学習順" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[Phase 1 数学基礎](/math)(本サイト)",
          "[ベイズ統計と頻度論](/blog/bayes-vs-frequentist) ─ 行列の分布表現",
          "[scikit-learn 入門](/blog/sklearn-introduction) ─ 実装で確認",
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ Transformer の数式まで",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "5 概念で Transformer まで届く ─ つまり **狭く深く** やれば AI に必要な線形代数は十分です。完璧主義に走らずに、実装と数式を行き来して血肉化しましょう。",
      },
    ],
  },
  {
    slug: "transformer-math",
    title: "Transformer の数学 ─ Attention は何を計算しているのか",
    description:
      "Transformer の核 Self-Attention を、行列積と softmax だけで読み解く。Q・K・V の意味から multi-head までを段階的に説明します。",
    publishedAt: "2026-04-29",
    category: "実装",
    tldr: [
      "Self-Attention = QK^⊤ で類似度 → softmax で重み → V を加重平均",
      "multi-head = 複数視点で並列に attention を実行 → 結合",
      "PyTorch で 30 行未満で実装できる。E 資格にも頻出。",
    ],
    body: [
      {
        type: "p",
        text: "Transformer は今や LLM ・ Vision ・ 音声で標準アーキテクチャ。中核の **Self-Attention** を数式と実装で読み解きます。",
      },
      { type: "h3", text: "全体像 ─ 1 つの式に集約" },
      {
        type: "math",
        tex: "\\mathrm{Attention}(Q, K, V) = \\mathrm{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right) V",
      },
      {
        type: "p",
        text: "Q(query)・K(key)・V(value)は同じ入力 X から $W_Q, W_K, W_V$ を掛けて作る。",
      },
      { type: "h3", text: "ステップ 1 ─ Q ・ K ・ V を作る" },
      {
        type: "math",
        tex: "Q = XW_Q, \\quad K = XW_K, \\quad V = XW_V",
      },
      {
        type: "intuition",
        title: "💡 Q ・ K ・ V の意味",
        body: "Q = 『質問』、K = 『鍵』、V = 『答え』。各トークンが質問を持ち、他のトークンの鍵と照合して、関連する答えを取り出す。",
      },
      { type: "h3", text: "ステップ 2 ─ 類似度行列 QK^⊤" },
      {
        type: "p",
        text: "$QK^\\top$ は **トークン同士の類似度行列**(n × n)。要素 $(i, j)$ は『$i$ 番目のトークンが $j$ 番目をどれだけ気にすべきか』。",
      },
      {
        type: "math",
        tex: "S = \\frac{QK^\\top}{\\sqrt{d_k}}",
      },
      {
        type: "p",
        text: "$\\sqrt{d_k}$ で割るのは、次元が大きいと内積が大きくなりすぎて softmax が飽和するのを防ぐため。",
      },
      { type: "h3", text: "ステップ 3 ─ softmax で重みに" },
      {
        type: "math",
        tex: "A = \\mathrm{softmax}(S)",
      },
      {
        type: "p",
        text: "各行が 1 に正規化された **attention 重み**。$A_{ij} = $ トークン $i$ がトークン $j$ に注目する割合。",
      },
      { type: "h3", text: "ステップ 4 ─ V の加重平均" },
      {
        type: "math",
        tex: "Z = AV",
      },
      {
        type: "p",
        text: "重み × value で **文脈に応じたトークン表現** が得られる。これが attention の出力。",
      },
      { type: "h3", text: "PyTorch で実装" },
      {
        type: "code",
        title: "Self-Attention の最小実装",
        python: "import torch\nimport torch.nn as nn\nimport torch.nn.functional as F\n\nclass SelfAttention(nn.Module):\n    def __init__(self, d_model, d_k):\n        super().__init__()\n        self.W_q = nn.Linear(d_model, d_k)\n        self.W_k = nn.Linear(d_model, d_k)\n        self.W_v = nn.Linear(d_model, d_k)\n        self.scale = d_k ** 0.5\n\n    def forward(self, x):\n        Q, K, V = self.W_q(x), self.W_k(x), self.W_v(x)\n        S = (Q @ K.transpose(-2, -1)) / self.scale\n        A = F.softmax(S, dim=-1)\n        return A @ V\n\n# テスト\nattn = SelfAttention(d_model=64, d_k=64)\nx = torch.randn(2, 10, 64)  # batch=2, seq=10, dim=64\nz = attn(x)\nprint(z.shape)  # torch.Size([2, 10, 64])",
      },
      { type: "h3", text: "Multi-Head Attention" },
      {
        type: "p",
        text: "1 つの attention だけだと観点が単一。**h 個の attention を並列実行 → 結合** することで、複数視点を同時に獲得します。",
      },
      {
        type: "math",
        tex: "\\mathrm{MultiHead}(Q, K, V) = [\\mathrm{head}_1; \\dots; \\mathrm{head}_h]W_O",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "各 head は独立した $W_Q, W_K, W_V$ を持つ",
          "head ごとに $d_k = d_{model} / h$",
          "GPT-3 や BERT は 12〜96 head",
        ],
      },
      { type: "h3", text: "なぜ Transformer が強いか" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**並列計算**: RNN と違い時系列を一気に処理",
          "**長距離依存**: どの位置のトークンとも 1 step で関係付け",
          "**柔軟性**: 言語 ・ 画像 ・ 音声で同じアーキテクチャ",
        ],
      },
      { type: "h3", text: "次のステップ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[線形代数を AI 視点で](/blog/linear-algebra-for-ai)",
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ Transformer 関連の問題",
          "[scikit-learn 入門](/blog/sklearn-introduction)",
          "[AIエンジニア・ロードマップ](/roadmap)",
        ],
      },
    ],
  },
  {
    slug: "bayesian-optimization",
    title: "ベイズ最適化でハイパーパラメータ探索 ─ Optuna 入門",
    description:
      "GridSearch より遥かに効率的なハイパラ探索手法『ベイズ最適化』を、Optuna で実装。少ない試行で最良パラメータを見つける考え方を解説します。",
    publishedAt: "2026-04-29",
    category: "実装",
    tldr: [
      "GridSearch は次元が増えると爆発する。Random Search より効率的なのがベイズ最適化。",
      "ベイズ最適化 = 過去の試行から事後分布を更新 → 期待改善を最大化する次の点を選ぶ。",
      "Optuna なら 10 行で導入可能。実務でほぼデファクト。",
    ],
    body: [
      {
        type: "p",
        text: "機械学習モデルのハイパラ調整は時間との勝負。**ベイズ最適化(Bayesian Optimization)** は『過去の試行から学んで賢く次を選ぶ』アプローチで、GridSearch より圧倒的に少ない試行で最適解に近づけます。",
      },
      { type: "h3", text: "問題設定 ─ なぜ GridSearch ではダメか" },
      {
        type: "p",
        text: "ハイパラが 5 個 ・ 各 10 候補だと **GridSearch は 10^5 = 10 万回試行**。LightGBM なら 1 試行 30 秒として 35 日…現実的でない。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**GridSearch**: 全組み合わせを試す。次元の呪いに直面",
          "**Random Search**: ランダムにサンプリング。GridSearch より効率的だが、過去の結果を活かさない",
          "**ベイズ最適化**: **過去の結果から賢く次の試行点を決める** ← これ",
        ],
      },
      { type: "h3", text: "ベイズ最適化の仕組み" },
      {
        type: "list",
        style: "number",
        items: [
          "**サロゲートモデル**(代理関数)を構築 ─ 試行結果から目的関数を推定。通常はガウス過程(GP)",
          "**獲得関数**(EI: Expected Improvement など)で次の試行点を決める",
          "新しい試行 → サロゲートを更新 → 繰り返し",
        ],
      },
      {
        type: "intuition",
        title: "💡 直感的に",
        body: "「今までで最高は 0.85。次にどこを試せば 0.85 を超える可能性が最も高い？」を毎回計算して、賢く探索範囲を絞り込んでいきます。",
      },
      { type: "h3", text: "Optuna で実装(10 行)" },
      {
        type: "code",
        title: "LightGBM の最適化",
        python: "import optuna\nimport lightgbm as lgb\nfrom sklearn.model_selection import cross_val_score\n\ndef objective(trial):\n    params = {\n        'num_leaves': trial.suggest_int('num_leaves', 16, 256),\n        'learning_rate': trial.suggest_float('learning_rate', 0.01, 0.3, log=True),\n        'min_child_samples': trial.suggest_int('min_child_samples', 5, 100),\n        'reg_alpha': trial.suggest_float('reg_alpha', 1e-8, 10, log=True),\n    }\n    model = lgb.LGBMClassifier(**params, n_estimators=200)\n    score = cross_val_score(model, X_train, y_train, cv=5, scoring='roc_auc').mean()\n    return score\n\nstudy = optuna.create_study(direction='maximize')\nstudy.optimize(objective, n_trials=100)\n\nprint('Best:', study.best_value)\nprint('Params:', study.best_params)",
      },
      { type: "h3", text: "重要な機能" },
      { type: "h4", text: "Pruning(早期打ち切り)" },
      {
        type: "code",
        title: "勝ち目のない試行を途中で止める",
        python: "study = optuna.create_study(\n    direction='maximize',\n    pruner=optuna.pruners.MedianPruner(),\n)",
      },
      {
        type: "p",
        text: "中央値より悪い試行を早期打ち切り。実質 2〜3 倍速くなります。",
      },
      { type: "h4", text: "可視化" },
      {
        type: "code",
        title: "結果の分析",
        python: "import optuna.visualization as vis\n\nvis.plot_optimization_history(study)\nvis.plot_param_importances(study)\nvis.plot_parallel_coordinate(study)",
      },
      { type: "h3", text: "実務での使い方" },
      {
        type: "list",
        style: "bullet",
        items: [
          "GBDT 系(LightGBM ・ XGBoost ・ CatBoost)のハイパラ調整",
          "DNN の学習率・バッチサイズ・正則化",
          "scikit-learn の任意のモデル",
          "強化学習の報酬重み",
        ],
      },
      {
        type: "practical",
        title: "🛠 ベイズ最適化が効く場面",
        body: "1 試行が高コスト(数分〜数時間)で、ハイパラが 5〜30 次元の場合。1 試行が一瞬で済む場合は GridSearch でも OK。",
      },
      { type: "h3", text: "理論的背景" },
      {
        type: "p",
        text: "ベイズ最適化はベイズ統計の応用です。**ガウス過程** で関数の事後分布を表現し、**獲得関数** で次の試行点を決定します。詳しくは:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "[ベイズ統計と頻度論](/blog/bayes-vs-frequentist)",
          "[統計検定 準 1 級 教科書](/textbook/grade-pre1) ─ ベイズの定理",
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ ガウス過程の応用",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "Optuna 10 行で実務レベルのハイパラ最適化が可能。理論はベイズ統計の集大成、実装は scikit-learn のラッパーレベル ─ AI エンジニアにとって投資対効果が極めて高いツールです。",
      },
    ],
  },
  {
    slug: "ai-stats-cheatsheet",
    title: "AIエンジニアに必要な統計知識 完全チートシート",
    description:
      "機械学習を仕事で扱うエンジニアが『最低限おさえるべき統計』を 1 ページに圧縮。実装と直結する 12 トピックを優先度順に整理しました。",
    publishedAt: "2026-04-29",
    category: "ロードマップ",
    tldr: [
      "ML エンジニア視点で必須の統計は『記述統計 → 確率分布 → 推定検定 → 回帰 → ベイズ』の 5 群、12 トピックに集約できる。",
      "理論を完璧にする前に、まず『実装で出てくる場面』とセットで覚えるのが最短ルート。",
      "統計検定 2 級レベルで Phase 3 まで到達。準 1 級まで取れば多変量・時系列・ベイズの応用も揃う。",
    ],
    body: [
      {
        type: "p",
        text: "「機械学習を扱うのに、統計はどこまで必要？」 ─ 学習開始時に最も多い質問です。本記事では **AI エンジニア / ML エンジニアが現場で使う統計** を 12 トピックに圧縮し、それぞれ『何に使うか』『どのフェーズで学ぶか』を整理しました。",
      },
      { type: "h3", text: "結論 ─ 5 群 12 トピック" },
      {
        type: "list",
        style: "number",
        items: [
          "**記述統計**: 平均 / 分散 / 標準偏差 / 共分散 / 相関",
          "**確率分布**: 正規分布 / 二項分布 / ポアソン",
          "**推定 ・ 検定**: 信頼区間 / 仮説検定 / p 値 / t 検定 / カイ二乗",
          "**回帰**: 単回帰 / 重回帰 / ロジスティック回帰 / 残差分析",
          "**ベイズ**: ベイズの定理 / 事後分布 / MAP 推定",
        ],
      },
      { type: "h3", text: "1. 記述統計 ─ 評価指標を読み解く言葉" },
      {
        type: "p",
        text: "ML モデルの評価で必ず登場するのが **平均** と **分散**。RMSE は予測誤差の標準偏差そのもの。MAE は外れ値に強い指標。**相関係数** は特徴量選択や多重共線性の検出に直結します。",
      },
      {
        type: "intuition",
        title: "💡 実装で出る場面",
        body: "scikit-learn の `mean_squared_error`, `mean_absolute_error`, pandas の `df.corr()` ─ これらの裏で動いているのが記述統計の式です。",
      },
      { type: "h3", text: "2. 確率分布 ─ モデルの仮定を理解する" },
      {
        type: "p",
        text: "**正規分布**: 線形回帰の誤差項の仮定。ニューラルネットの重み初期化(He / Xavier)。**二項分布**: 二値分類の真値。**ポアソン**: イベント発生回数(クリック数 ・ アクセス数)。",
      },
      {
        type: "p",
        text: "ここを抑えていないと、線形回帰の **正規性の検定** や、ロジスティック回帰の **対数尤度** がブラックボックスになります。",
      },
      { type: "h3", text: "3. 推定 ・ 検定 ─ A/B テストの土台" },
      {
        type: "p",
        text: "**信頼区間**: モデル予測の不確実性を表現。**p 値 ・ 仮説検定**: 機能改善が偶然でないかを判定する道具。**t 検定 / カイ二乗**: グループ間比較の標準ツール。",
      },
      {
        type: "practical",
        title: "🛠 実務シナリオ",
        body: "新しい推薦アルゴリズムを A/B テストで評価 → 統計的に有意な差があるか p 値で判定 → 効果サイズと信頼区間で判断 ─ この流れが日常です。",
      },
      { type: "h3", text: "4. 回帰 ─ ML の入り口" },
      {
        type: "p",
        text: "**線形回帰** は最もシンプルな ML モデル。残差 ・ 決定係数 ・ 多重共線性の理解が、後の高度なモデル(GBDT ・ NN)の解釈にも効きます。**ロジスティック回帰** は分類問題のベースライン。",
      },
      { type: "h3", text: "5. ベイズ ─ 不確実性を扱う" },
      {
        type: "p",
        text: "ベイズの定理は **事前知識** + **データ** = **事後分布** という更新の枠組み。実務では:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Bayesian A/B テスト(早期判定)",
          "ナイーブベイズ分類器",
          "ベイズ最適化(ハイパーパラメータ探索)",
          "深層学習の MC dropout(不確実性推定)",
        ],
      },
      { type: "h3", text: "学習順 ─ 本サイトでの対応" },
      {
        type: "list",
        style: "bullet",
        items: [
          "1〜2 群: [統計検定 4 級](/textbook/grade-4) → [3 級](/textbook/grade-3)(本サイトの Phase 2)",
          "3〜4 群: [統計検定 2 級](/textbook/grade-2)(Phase 3)",
          "5 群 ・ 多変量 ・ 時系列: [準 1 級](/textbook/grade-pre1)(Phase 3 後半)",
          "ML 実装: [E 資格 教科書](/certs/e-shikaku/textbook)(Phase 4)",
        ],
      },
      { type: "h3", text: "やらなくていいこと" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**統計検定 1 級** の証明問題 ─ 研究者向け。AI エンジニアには過剰",
          "**測度論的確率論** ─ 必要になったら学ぶでOK",
          "**抽象的な確率過程理論** ─ 強化学習で部分的に出るが、応用範囲が決まれば後追いで十分",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "AI エンジニアにとっての統計は **準 1 級レベル** で実用上ほぼ十分。完璧主義に走らず、Phase 1〜3 で 80% を取り、後は実装で補強するのが最短ルートです。",
      },
      {
        type: "p",
        text: "迷ったら [3 問の級診断](/diagnose) で現在地を確認 → [Phase 1 数学基礎](/math) または [Phase 2 統計学](/textbook/grade-3) からスタート。",
      },
    ],
  },
  {
    slug: "p-value-misunderstandings",
    title: "p 値の誤解 5 選 ─ 仮説検定でやりがちな勘違いを正す",
    description:
      "「p < 0.05 = 効果あり」と思っていませんか？統計検定や A/B テストで頻発する p 値の 5 つの誤解と、正しい解釈を整理します。",
    publishedAt: "2026-04-29",
    category: "学習法",
    tldr: [
      "p 値は『帰無仮説のもとで観測値以上の極端な結果が出る確率』であって、『仮説が正しい確率』ではない。",
      "p 値が小さい = 効果が大きい、ではない。効果サイズと信頼区間と一緒に見るのが鉄則。",
      "5% は慣習にすぎない。文脈に応じて 1% / 0.1% を使い分ける。",
    ],
    body: [
      {
        type: "p",
        text: "p 値は統計検定 2 級・実務 A/B テスト・科学論文ですべてに登場する基本概念です。しかし正しく理解されているかというと… **多くの実務家が日常的に誤用** しています。本記事では 5 つの代表的な誤解を、正しい解釈とセットで整理します。",
      },
      { type: "h3", text: "誤解 1 ─ 「p 値 = 仮説が正しい確率」" },
      {
        type: "p",
        text: "❌ 『p = 0.03 だから帰無仮説が正しい確率は 3% だ』 ─ 違います。",
      },
      {
        type: "p",
        text: "✅ p 値は **帰無仮説 $H_0$ が正しいと仮定したとき、観測値以上に極端な結果が出る確率**。条件付き確率 $P(\\mathrm{data} \\mid H_0)$ であって $P(H_0 \\mid \\mathrm{data})$ ではありません。",
      },
      {
        type: "intuition",
        title: "💡 違いの直感",
        body: "「雨が降ったとき濡れている確率」と「濡れているとき雨が降っていた確率」は別物。前者が p 値、後者がベイズの事後確率。",
      },
      { type: "h3", text: "誤解 2 ─ 「p < 0.05 ならば効果が大きい」" },
      {
        type: "p",
        text: "❌ p < 0.05 と p < 0.001 を見て、後者の方が効果が大きいと判断する ─ 違います。",
      },
      {
        type: "p",
        text: "✅ p 値は **効果の大きさ** を表すものではなく、**統計的に有意かどうか** を判定する道具。サンプルサイズが大きければ、ごく小さい効果でも p < 0.001 になります。**効果サイズ(Cohen's d, 相関係数, オッズ比)を必ず確認**しましょう。",
      },
      {
        type: "practical",
        title: "🛠 A/B テストでの罠",
        body: "100 万ユーザーで CTR が 0.001% 改善 → p < 0.001 でも、ビジネスインパクトはほぼゼロ。逆に小規模実験で大きな効果でも p > 0.05 のまま埋もれることも。",
      },
      { type: "h3", text: "誤解 3 ─ 「p ≥ 0.05 なら効果はない」" },
      {
        type: "p",
        text: "❌ p = 0.06 だから無効、と判断 ─ 違います。",
      },
      {
        type: "p",
        text: "✅ p ≥ 0.05 は **効果なし** ではなく、**有意とは言えない**(まだ判断できない)。サンプルが足りないだけかもしれません。**信頼区間** を確認すると、ゼロを跨ぐ範囲が広いのか / 狭いのかが分かります。",
      },
      { type: "h3", text: "誤解 4 ─ 「5% は厳格な閾値」" },
      {
        type: "p",
        text: "❌ p = 0.0499 と p = 0.0501 で結論が真逆 ─ 違います。",
      },
      {
        type: "p",
        text: "✅ 5% は Fisher が便宜上設定した慣習。実務では:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**医薬品 ・ 安全性**: α = 0.01 や 0.001 を使う",
          "**仮説生成段階の探索的解析**: α = 0.10 でゆるく",
          "**多重検定**: Bonferroni 補正で α/k に下げる",
          "**事前登録の臨床試験**: α と検出力をプロトコルで先に固定",
        ],
      },
      { type: "h3", text: "誤解 5 ─ 「p ハッキングは大丈夫」" },
      {
        type: "p",
        text: "❌ データを見ながら検定方法を変えたり、サンプルサイズを増やしたりする ─ 違います、最も危険な誤用です。",
      },
      {
        type: "p",
        text: "✅ 検定方法 ・ サンプルサイズ ・ 有意水準は **データを見る前に決める**。これを破ると、本来 5% であるはずの第 1 種の誤り率が 30% 以上に膨らむことが知られています(p ハッキング問題)。",
      },
      { type: "h3", text: "正しい使い方の 5 原則" },
      {
        type: "list",
        style: "number",
        items: [
          "**事前にプロトコルを書く**(検定方法・α・サンプルサイズ)",
          "**効果サイズと信頼区間を必ず併記**する",
          "**多重検定の補正**(Bonferroni / FDR)を入れる",
          "**事前登録**(プレレジスト)で結果報告バイアスを防ぐ",
          "**ベイズアプローチも検討**(事後確率の方が直感的な場合あり)",
        ],
      },
      { type: "h3", text: "本サイトでの学習" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[統計検定 2 級 教科書](/textbook/grade-2) ─ 仮説検定の基礎",
          "[図解で学ぶ統計](/figures) ─ p 値の面積イメージ図",
          "[統計計算ツール](/tools) ─ p 値計算機 ・ A/B テスト計算機",
          "[2 級 演習問題](/quiz/grade-2) ─ 30 問以上の検定問題",
        ],
      },
      {
        type: "p",
        text: "p 値を正しく扱えるようになると、論文 ・ A/B テスト ・ ニュース記事の **読み方が変わります**。AI エンジニアにとって必須リテラシーです。",
      },
    ],
  },
  {
    slug: "bayes-vs-frequentist",
    title: "ベイズ統計と頻度論 ─ AIエンジニアはどちらを学ぶべき？",
    description:
      "頻度論とベイズの違いを実装視点で整理。それぞれが活きる場面と、本サイトでの学習順を提示します。",
    publishedAt: "2026-04-29",
    category: "学習法",
    tldr: [
      "頻度論 = 確率は『繰り返し試行の長期割合』、ベイズ = 確率は『信念の度合い』。",
      "AI エンジニアはまず頻度論(2 級)、次にベイズ(準 1 級)の順がスムーズ。",
      "実装で出るのは: 頻度論 → A/B テスト・線形回帰、ベイズ → ナイーブベイズ・ベイズ最適化・MCMC。",
    ],
    body: [
      {
        type: "p",
        text: "「頻度論」「ベイズ統計」 ─ どちらも統計の枠組みですが、確率の解釈そのものが違います。AI エンジニア視点でどう使い分けるか、実装と紐付けて整理します。",
      },
      { type: "h3", text: "結論 ─ 一文で違いを表すと" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**頻度論**: 確率 = 同じ試行を無限回繰り返したときの **長期割合**",
          "**ベイズ**: 確率 = ある事象に対する **信念(degree of belief)** の度合い",
        ],
      },
      {
        type: "intuition",
        title: "💡 「明日雨が降る確率 30%」の解釈",
        body: "頻度論: 同じ条件の日が 100 日あれば 30 日は雨。 ベイズ: 私の知識のもとで雨を予想する確信度が 30%。",
      },
      { type: "h3", text: "違いを実装で見る" },
      { type: "h4", text: "頻度論的な分析" },
      {
        type: "code",
        title: "scikit-learn 線形回帰(頻度論)",
        python: "from sklearn.linear_model import LinearRegression\nfrom scipy import stats\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# 係数の信頼区間 → 『同じ条件で再サンプリングした場合 95% で覆う区間』\nse = ...  # 標準誤差を計算\nci_low = model.coef_ - 1.96 * se\nci_high = model.coef_ + 1.96 * se",
      },
      { type: "h4", text: "ベイズ的な分析" },
      {
        type: "code",
        title: "PyMC ベイズ線形回帰",
        python: "import pymc as pm\n\nwith pm.Model() as model:\n    # 事前分布(信念)\n    alpha = pm.Normal('alpha', mu=0, sigma=10)\n    beta = pm.Normal('beta', mu=0, sigma=10)\n    sigma = pm.HalfNormal('sigma', sigma=1)\n\n    # 尤度\n    y_obs = pm.Normal('y', mu=alpha + beta * X, sigma=sigma, observed=y)\n\n    # MCMC で事後分布をサンプリング\n    trace = pm.sample(2000)\n\n# 事後分布の 95% 信用区間 → 『パラメータの取り得る値の範囲についての信念』\nimport arviz as az\naz.summary(trace, hdi_prob=0.95)",
      },
      { type: "h3", text: "AI エンジニア視点での使い分け" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**A/B テスト**: 頻度論(p 値 ・ 信頼区間)が標準。ベイズ A/B も増えてきた",
          "**ハイパーパラメータ探索**: ベイズ最適化(`optuna`, `scikit-optimize`)",
          "**スパムフィルタ**: ナイーブベイズ分類器",
          "**画像分類**: 頻度論的(CNN + クロスエントロピー)が中心",
          "**LLM ・ 生成モデル**: 確率モデル(MCMC ・ VAE ・ Diffusion)はベイズ寄り",
          "**不確実性推定**: ベイズ NN ・ MC dropout は深層学習でも重要",
        ],
      },
      { type: "h3", text: "学習順の推奨" },
      {
        type: "p",
        text: "**頻度論を先 → ベイズを後**。理由: 頻度論の方が教材が圧倒的に多く、統計検定 2 級までで体系化されている。ベイズは準 1 級以降で本格導入されるが、それまでに『分布 ・ 尤度 ・ 期待値』の感覚が必要。",
      },
      {
        type: "list",
        style: "number",
        items: [
          "[統計検定 3 級 教科書](/textbook/grade-3) ─ 確率変数 ・ 正規分布 ・ 信頼区間",
          "[統計検定 2 級 教科書](/textbook/grade-2) ─ 検定 ・ 回帰(頻度論の総仕上げ)",
          "[統計検定 準 1 級 教科書](/textbook/grade-pre1) ─ ベイズの定理 ・ 事後分布 ・ 共役分布",
          "[統計検定 1 級](/textbook/grade-1) ─ MCMC ・ EM アルゴリズム",
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ ベイズ NN ・ 不確実性",
        ],
      },
      { type: "h3", text: "よくある質問" },
      { type: "h4", text: "Q. ベイズだけでよくない？" },
      {
        type: "p",
        text: "A. 業界標準が頻度論なので、論文 ・ レポート ・ 同僚とのコミュニケーションで頻度論を使えないと困ります。両方できるのが理想。",
      },
      { type: "h4", text: "Q. 事前分布の選び方が分からない" },
      {
        type: "p",
        text: "A. 最初は **無情報事前分布**(一様 ・ 弱情報正規分布)で OK。慣れてきたら共役事前分布(ベータ-二項、ガンマ-ポアソン)を使い分けると計算が楽になります。準 1 級教科書で扱います。",
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "頻度論とベイズは対立軸ではなく、**使い分ける道具**。AI エンジニアとしては、頻度論 7 割 + ベイズ 3 割で回せれば実務上十分。準 1 級まで取れば両方の感覚が身につきます。",
      },
    ],
  },
  {
    slug: "g-test-vs-e-shikaku",
    title: "G 検定 vs E 資格 ─ AI 検定はどちらを先に取るべき？",
    description:
      "JDLA の 2 大検定『G 検定』『E 資格』の違いを、目的・難易度・コスト・実務インパクトで徹底比較。AI エンジニア志望の最適な選択を提案します。",
    publishedAt: "2026-04-29",
    category: "級選び",
    tldr: [
      "G 検定 = AI を『使う』広範な知識(誰でも受験可、年 6 回)。E 資格 = AI を『実装する』エンジニア向け深い知識(認定講座必須、年 2 回)。",
      "AI エンジニア志望なら『G 検定 → E 資格』の順が王道。実装も統計も両方ある人は E 資格直行も可。",
      "費用は G 検定 13,200 円・E 資格 33,000 円 + 認定講座 5〜30 万円。",
    ],
    body: [
      {
        type: "p",
        text: "JDLA(日本ディープラーニング協会)が主催する **G 検定** と **E 資格**。AI エンジニアを目指すなら避けて通れない 2 大検定ですが、**目的も難易度も対象者も全く違います**。本記事では選び方を整理します。",
      },
      { type: "h3", text: "結論 ─ 5 秒で分かる比較表" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**G 検定**: 広く浅く ・ 誰でも受験 ・ 自宅 PC ・ 約 13,200 円 ・ 4 ヶ月対策で合格可",
          "**E 資格**: 狭く深く ・ 事前認定講座必須 ・ 試験会場 ・ 約 33,000 円 + 講座 5〜30 万円 ・ 6〜12 ヶ月対策",
        ],
      },
      { type: "h3", text: "1. 対象者 ─ 想定されるキャリア像" },
      {
        type: "p",
        text: "**G 検定** は『**AI を事業に活かす立場**』の人向け。経営企画 ・ プロダクトマネージャー ・ コンサル ・ AI ベンダーの営業担当などが想定対象。",
      },
      {
        type: "p",
        text: "**E 資格** は『**AI モデルを設計 ・ 実装する立場**』の人向け。MLエンジニア ・ データサイエンティスト ・ AI 研究者が想定対象。",
      },
      {
        type: "intuition",
        title: "💡 まとめると",
        body: "AI を『話す』のが G 検定、AI を『書く』のが E 資格。",
      },
      { type: "h3", text: "2. 出題範囲 ・ 難易度" },
      { type: "h4", text: "G 検定の範囲" },
      {
        type: "list",
        style: "bullet",
        items: [
          "AI ・ 機械学習 ・ DL の歴史と概念",
          "ニューラルネットの基本(構造 ・ 学習)",
          "代表的な手法(CNN ・ RNN ・ Transformer ・ GAN)",
          "評価指標 ・ 過学習対策",
          "AI 倫理 ・ 法律(著作権 ・ プライバシー ・ ガイドライン)",
          "産業応用事例",
        ],
      },
      {
        type: "p",
        text: "**約 200 問を 120 分で解く**。広範囲だが浅め。書籍 1〜2 冊 + 過去問で対応可能。",
      },
      { type: "h4", text: "E 資格の範囲" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**応用数学**: 線形代数 ・ 微分積分 ・ 確率統計",
          "機械学習(教師あり ・ 教師なし ・ 強化学習)",
          "DL の理論(誤差逆伝播 ・ 最適化 ・ 正則化)",
          "CNN ・ RNN ・ Transformer の **数式レベルでの理解**",
          "GAN ・ Diffusion ・ 強化学習",
          "DL フレームワーク(PyTorch ・ TF)の API レベル知識",
        ],
      },
      {
        type: "p",
        text: "**約 100 問を 120 分**。**数式 ・ コード片の穴埋めが多い** のが特徴。理論だけでなく実装の手触りまで問われます。",
      },
      { type: "h3", text: "3. コスト" },
      { type: "h4", text: "G 検定" },
      {
        type: "list",
        style: "bullet",
        items: [
          "受験料: 一般 13,200 円 ・ 学割 5,500 円",
          "教材費: 公式テキスト + 黒本(問題集) で 5,000〜10,000 円",
          "**合計目安: 2〜3 万円**",
        ],
      },
      { type: "h4", text: "E 資格" },
      {
        type: "list",
        style: "bullet",
        items: [
          "受験料: 一般 33,000 円 ・ 学割 22,000 円",
          "**認定講座**(必須): 50,000〜300,000 円。受講せずに受験不可",
          "教材費: 深層学習 ・ 応用数学テキストで 10,000 円程度",
          "**合計目安: 8〜35 万円**",
        ],
      },
      {
        type: "p",
        text: "E 資格の認定講座は会社が負担してくれるケースが多いので、所属企業に確認するのが先決。",
      },
      { type: "h3", text: "4. 推奨学習順" },
      { type: "h4", text: "AI エンジニア志望(王道ルート)" },
      {
        type: "list",
        style: "number",
        items: [
          "**[統計検定 2 級](/textbook/grade-2)** ─ 統計の土台(2〜3 ヶ月)",
          "**G 検定** ─ AI 全体像のカバー(2〜3 ヶ月)",
          "**[統計検定 準 1 級](/textbook/grade-pre1)** ─ 多変量 ・ ベイズ ・ 時系列(任意 ・ 3〜6 ヶ月)",
          "**E 資格** ─ 実装まで(認定講座 + 試験対策で 6 ヶ月〜)",
        ],
      },
      { type: "h4", text: "実装経験あり(時短ルート)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "G 検定はスキップして **E 資格に直行**",
          "ただし応用数学(線形代数 ・ 微積分)は再学習が必要",
        ],
      },
      { type: "h4", text: "AI ベンダー営業 ・ 企画職" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**G 検定** だけで十分。E 資格は不要",
          "+ [DS 検定リテラシー](/certs/ds-literacy) でビジネス力を補強",
        ],
      },
      { type: "h3", text: "5. 取得のメリット ・ 注意点" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**G 検定**: 履歴書に書ける汎用資格 ・ 転職の最低ラインに ・ 名刺に CDL バッジ",
          "**E 資格**: AI エンジニアとしての **強い差別化** ・ 内部研修としての効果も",
          "⚠ どちらも **2 年で更新推奨**(技術が早く陳腐化するため)",
        ],
      },
      { type: "h3", text: "本サイトでの対策" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[G 検定 教科書](/certs/g-test/textbook) ─ AI 概念の体系整理",
          "[G 検定 演習問題](/certs/g-test/quiz) ─ 模擬問題",
          "[E 資格 教科書](/certs/e-shikaku/textbook) ─ DL 実装の数学",
          "[E 資格 演習問題](/certs/e-shikaku/quiz) ─ 数式 ・ コード問題",
          "[受験情報まとめ](/exam-info) ─ 日程 ・ 申込先 ・ 認定講座一覧",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "AI エンジニア志望なら **G 検定 → E 資格** の順がもっとも安全。E 資格は認定講座コストが大きいので、**会社負担が使えるか先に確認** するのが現実解です。",
      },
      {
        type: "p",
        text: "学習計画を逆算したい方は [学習プラン計算](/plan) で目標日までの必要時間を試算してみてください。",
      },
    ],
  },
  {
    slug: "central-limit-theorem-python",
    title: "中心極限定理を Python で動かす ─ 一様分布が正規になる瞬間",
    description:
      "統計学で最も重要な定理『中心極限定理(CLT)』を Python のシミュレーションで体感。一様分布や指数分布の標本平均が、本当に正規分布に収束する様子をヒストグラムで確認します。",
    publishedAt: "2026-04-29",
    category: "Python",
    tldr: [
      "中心極限定理: もとの分布が何でも、標本平均は正規分布に近づく(n → 大)。",
      "n が大きいほど平均がきれいに正規型に。n=30 でほぼ正規と扱えるのが慣習。",
      "Python(NumPy + matplotlib)で 50 行未満のコードで完全に再現できる。",
    ],
    body: [
      {
        type: "p",
        text: "**中心極限定理(CLT, Central Limit Theorem)** は、統計学で最も重要な定理と言っても過言ではありません。この定理があるおかげで、信頼区間や仮説検定が可能になります。本記事では Python で **一様分布から始まって標本平均が正規分布に収束する** 様子を実際に動かしてみます。",
      },
      { type: "h3", text: "中心極限定理とは" },
      {
        type: "p",
        text: "母集団が **どんな分布(平均 μ・分散 $\\sigma^2$ が有限)** であっても、そこから無作為抽出した **標本平均 $\\bar{X}$ の分布** は、$n$ が大きくなるにつれて正規分布 $N(\\mu, \\sigma^2/n)$ に近づく。",
      },
      {
        type: "math",
        tex: "\\bar{X} \\xrightarrow{d} N\\left(\\mu, \\frac{\\sigma^2}{n}\\right)",
      },
      {
        type: "intuition",
        title: "💡 ここが凄い",
        body: "もとの分布の形(一様・指数・二項・カイ二乗 …)を問わず、平均は正規分布に集まります。これが推定 ・ 検定 ・ 信頼区間の理論的根拠。",
      },
      { type: "h3", text: "セットアップ" },
      {
        type: "code",
        title: "必要なライブラリ",
        python: "import numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy import stats",
      },
      { type: "h3", text: "実験 1 ─ 一様分布から始める" },
      {
        type: "p",
        text: "まずは形が **真四角** な一様分布から。ここから標本平均をたくさん作って、ヒストグラムを描きます。",
      },
      {
        type: "code",
        title: "n を変えながら標本平均の分布を可視化",
        python: "np.random.seed(42)\n\nsample_sizes = [1, 2, 5, 30]\nnum_simulations = 5000\n\nfig, axes = plt.subplots(1, 4, figsize=(16, 4))\n\nfor ax, n in zip(axes, sample_sizes):\n    # 一様分布 U(0, 1) から n 個サンプリング → 平均 を 5000 回\n    means = np.array([\n        np.random.uniform(0, 1, n).mean()\n        for _ in range(num_simulations)\n    ])\n\n    ax.hist(means, bins=40, density=True, alpha=0.7, color='steelblue')\n\n    # 理論上の正規分布(平均 0.5, 分散 1/(12n))を重ねる\n    x = np.linspace(0, 1, 200)\n    sigma = np.sqrt(1 / (12 * n))\n    ax.plot(x, stats.norm.pdf(x, loc=0.5, scale=sigma), 'r-', lw=2,\n            label=f'N(0.5, 1/(12·{n}))')\n\n    ax.set_title(f'n = {n}')\n    ax.legend()\n\nplt.tight_layout()\nplt.show()",
      },
      {
        type: "p",
        text: "実行すると、$n=1$ では一様分布のまま真四角、$n=2$ で三角形、$n=5$ で釣り鐘型、$n=30$ で完全に正規分布と一致 ─ 教科書通りの絵が描けます。",
      },
      { type: "h3", text: "実験 2 ─ 偏った分布(指数分布)から" },
      {
        type: "p",
        text: "次は **左右対称ではない** 指数分布。これでも標本平均は正規型になるか？",
      },
      {
        type: "code",
        title: "指数分布版",
        python: "lambda_param = 1.0  # 平均 = 1, 分散 = 1\n\nfig, axes = plt.subplots(1, 4, figsize=(16, 4))\n\nfor ax, n in zip(axes, sample_sizes):\n    means = np.array([\n        np.random.exponential(scale=1/lambda_param, size=n).mean()\n        for _ in range(num_simulations)\n    ])\n\n    ax.hist(means, bins=40, density=True, alpha=0.7, color='coral')\n\n    # 理論曲線: 平均 1, 分散 1/n\n    x = np.linspace(0, 3, 200)\n    sigma = np.sqrt(1 / n)\n    ax.plot(x, stats.norm.pdf(x, loc=1, scale=sigma), 'b-', lw=2)\n\n    ax.set_title(f'n = {n}')\n\nplt.tight_layout()\nplt.show()",
      },
      {
        type: "p",
        text: "$n=1$ では指数分布の右肩下がりがそのまま、$n=30$ ではきれいな正規分布に変身。",
      },
      { type: "h3", text: "実験 3 ─ Q-Q プロットで正規性を検証" },
      {
        type: "p",
        text: "ヒストグラムだけでなく、**Q-Q プロット** で正規分布との一致を厳密にチェック:",
      },
      {
        type: "code",
        title: "Q-Q プロット",
        python: "fig, axes = plt.subplots(1, 4, figsize=(16, 4))\n\nfor ax, n in zip(axes, sample_sizes):\n    means = np.array([\n        np.random.exponential(1, n).mean()\n        for _ in range(num_simulations)\n    ])\n    stats.probplot(means, dist='norm', plot=ax)\n    ax.set_title(f'n = {n}')\n\nplt.tight_layout()\nplt.show()",
      },
      {
        type: "p",
        text: "$n$ が大きくなるほど点が直線に乗ります = 正規分布に近づいている証拠。",
      },
      { type: "h3", text: "実用例 ─ A/B テストへの応用" },
      {
        type: "p",
        text: "中心極限定理のおかげで、**サンプルサイズが 30 以上なら、もとの分布を気にせずに正規分布で信頼区間を計算できます**。これが A/B テストや品質管理の理論的根拠。",
      },
      {
        type: "practical",
        title: "🛠 実務での感覚",
        body: "10 万ユーザーの平均 CTR は、もとの分布がどんなに歪んでいても、平均値は正規分布で扱える ─ なので t 検定が使える。",
      },
      { type: "h3", text: "n はどのくらい必要？" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**もとの分布が左右対称**: $n \\geq 10$ で十分",
          "**やや歪んでいる**: $n \\geq 30$(教科書での慣習)",
          "**大きく歪んでいる(指数 ・ ポアソン)**: $n \\geq 50$ 〜 $100$",
          "**極端な歪み(コーシー)**: そもそも CLT が適用できない(分散が無限)",
        ],
      },
      { type: "h3", text: "本サイトでの学習" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[統計検定 3 級 教科書](/textbook/grade-3) ─ 中心極限定理の数式",
          "[図解で学ぶ統計](/figures) ─ CLT 収束の SVG 図",
          "[動かして学ぶ統計](/explore) ─ ブラウザ上で対話的に CLT を体験",
          "[Python 環境構築 完全ガイド](/blog/python-setup-for-stats) ─ 実行環境のセットアップ",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "CLT は『**正規分布が至る所に出てくる理由**』を説明する魔法の定理。50 行のコードで体感できるので、まず動かしてから式を眺めると理解が桁違いになります。",
      },
      {
        type: "p",
        text: "次は信頼区間や検定の実装に進みましょう ─ それらはすべて CLT の応用です。",
      },
    ],
  },
  {
    slug: "python-setup-for-stats",
    title: "AIエンジニア入門 ─ Python 環境構築 完全ガイド(2026 年版)",
    description:
      "統計・機械学習を学ぶための Python 環境を、Windows / macOS で迷わず構築。uv ・ Jupyter ・ VS Code ・主要ライブラリを 30 分で揃えます。",
    publishedAt: "2026-04-29",
    category: "Python",
    tldr: [
      "2026 年現在のおすすめは uv(astral 製) ─ pip + venv より圧倒的に速い。",
      "最低限必要なライブラリは numpy ・ pandas ・ matplotlib ・ scipy ・ scikit-learn ・ jupyter の 6 つ。",
      "VS Code + Jupyter 拡張で、ノートブックも .py スクリプトも同じエディタで完結。",
    ],
    body: [
      {
        type: "p",
        text: "AIエンジニアになるためのロードマップ Phase 1〜2 で必要になる Python 環境を、ゼロから 30 分で構築する手順をまとめました。**3 年前のチュートリアルとは前提が変わっています** ─ Anaconda ・ pipenv ・ poetry はもう第一選択ではありません。",
      },
      { type: "h3", text: "結論 ─ 2026 年のおすすめスタック" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Python 本体**: 3.12 系(3.13 / 3.14 もOK だがライブラリ対応待ち)",
          "**パッケージ管理**: **uv**(Rust 製で爆速、pip + venv の置き換え)",
          "**エディタ**: VS Code + Python 拡張 + Jupyter 拡張",
          "**ノートブック**: Jupyter Lab(VS Code 内蔵で十分)",
          "**主要ライブラリ**: numpy / pandas / matplotlib / scipy / scikit-learn / jupyter",
        ],
      },
      {
        type: "intuition",
        title: "💡 なぜ Anaconda ではないのか",
        body: "Anaconda は便利ですが、**インストール容量が約 5GB**・**起動時間が遅い**・**商用利用に制限**があります。素の Python + uv の方がシンプルで速く、トラブルも少ないです。",
      },
      { type: "h3", text: "Step 1 ─ Python のインストール" },
      { type: "h4", text: "Windows" },
      {
        type: "list",
        style: "number",
        items: [
          "[python.org の Downloads](https://www.python.org/downloads/) から **Python 3.12** の Windows installer をダウンロード",
          "実行 → ⚠️ **『Add python.exe to PATH』にチェック必須**",
          "『Install Now』をクリック",
          "ターミナル(PowerShell)で `python --version` を実行 → `Python 3.12.x` が出れば成功",
        ],
      },
      { type: "h4", text: "macOS" },
      {
        type: "list",
        style: "number",
        items: "Homebrew が入っている前提。なければ [brew.sh](https://brew.sh/) からインストール ・ `brew install python@3.12` ・ `python3 --version` で確認".split(" ・ "),
      },
      { type: "h3", text: "Step 2 ─ uv のインストール" },
      {
        type: "p",
        text: "uv は **astral 社製の高速パッケージマネージャ** ─ pip より 10〜100 倍速いです。",
      },
      {
        type: "code",
        title: "uv のインストール",
        python: "# Windows (PowerShell)\npowershell -c \"irm https://astral.sh/uv/install.ps1 | iex\"\n\n# macOS / Linux\ncurl -LsSf https://astral.sh/uv/install.sh | sh\n\n# 確認\nuv --version",
      },
      { type: "h3", text: "Step 3 ─ プロジェクトを作る" },
      {
        type: "code",
        title: "新規プロジェクトの作成",
        python: "# プロジェクトフォルダを作成\nmkdir my-stats-study\ncd my-stats-study\n\n# uv でプロジェクト初期化(.venv 自動作成)\nuv init --python 3.12\n\n# 統計・ML 主要ライブラリを一括追加\nuv add numpy pandas matplotlib scipy scikit-learn jupyter\n\n# 仮想環境を有効化\n# Windows:\n.venv\\Scripts\\activate\n# macOS / Linux:\nsource .venv/bin/activate",
      },
      { type: "h3", text: "Step 4 ─ VS Code セットアップ" },
      {
        type: "list",
        style: "number",
        items: [
          "[code.visualstudio.com](https://code.visualstudio.com/) からダウンロード ・ インストール",
          "拡張機能タブ(Ctrl/Cmd + Shift + X)で以下を検索 ・ インストール: **Python**(Microsoft 公式) ・ **Jupyter**(Microsoft 公式) ・ **Pylance**(Microsoft 公式)",
          "プロジェクトフォルダを VS Code で開く(`code .`)",
          "コマンドパレット(F1)→ **Python: Select Interpreter** → `.venv` を選択",
        ],
      },
      { type: "h3", text: "Step 5 ─ Jupyter Notebook で動作確認" },
      {
        type: "code",
        title: "正規分布のサンプル",
        python: "import numpy as np\nimport matplotlib.pyplot as plt\nfrom scipy import stats\n\n# 標準正規分布から 1000 サンプル抽出\nsamples = np.random.normal(loc=0, scale=1, size=1000)\n\n# ヒストグラム + 理論曲線\nfig, ax = plt.subplots(figsize=(8, 4))\nax.hist(samples, bins=30, density=True, alpha=0.6, label='samples')\nx = np.linspace(-4, 4, 200)\nax.plot(x, stats.norm.pdf(x), 'r-', label='theoretical N(0,1)')\nax.legend()\nax.set_title('Standard Normal Distribution')\nplt.show()",
      },
      {
        type: "p",
        text: "VS Code で `.ipynb` ファイルを作成 → 上のコードを貼って Shift+Enter で実行 → ヒストグラムが表示されれば環境構築完了です。",
      },
      { type: "h3", text: "推奨追加ライブラリ(Phase 3〜4 で導入)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**seaborn** ─ matplotlib のラッパー、統計グラフを楽に",
          "**statsmodels** ─ 古典的な統計モデル(回帰 ・ 時系列 ・ 検定)",
          "**pymc** ─ ベイズ統計の MCMC",
          "**torch**(PyTorch)─ ディープラーニング",
          "**transformers** ─ LLM ・ Hugging Face モデル",
          "**polars** ─ pandas より速い DataFrame ライブラリ(Rust 製)",
        ],
      },
      {
        type: "code",
        title: "追加でインストール",
        python: "uv add seaborn statsmodels pymc torch transformers polars",
      },
      { type: "h3", text: "よくあるトラブル" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**`python` コマンドが見つからない**(Windows) → PATH 設定の取りこぼし。インストーラを再実行して 『Add to PATH』にチェック。",
          "**numpy のインポートが遅い** → 仮想環境が有効か確認。`which python` / `where python` が `.venv` 内を指していること。",
          "**Jupyter で日本語が文字化け** → `matplotlib` で `plt.rcParams['font.family'] = 'Yu Gothic'` (Windows) や `'Hiragino Sans'`(macOS)を指定。",
          "**uv install が遅い・止まる** → 企業ネットワーク内の場合はプロキシ設定。`UV_INDEX_URL` 環境変数で社内 PyPI ミラーを指定。",
        ],
      },
      { type: "h3", text: "次のステップ" },
      {
        type: "p",
        text: "環境が整ったら、本サイトの教科書 ・ 図解にある Python コードをそのままノートブックに貼って動かしてみてください。理論 → コード → 結果 のループが回り始めると、学習スピードが一気に上がります。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**[/math/textbook](/math/textbook)** ─ 数学基礎の Python コード例",
          "**[/textbook/grade-3](/textbook/grade-3)** ─ 統計の式を Python で計算",
          "**[/explore](/explore)** ─ ブラウザ上で動かして学ぶ統計",
          "**[/figures](/figures)** ─ 図解で学ぶ統計(SVG 29 種)",
          "**[/roadmap](/roadmap)** ─ AIエンジニア・ロードマップ全体像",
        ],
      },
    ],
  },
  {
    slug: "ai-engineer-roadmap",
    title: "AIエンジニアになるためのロードマップ ─ 統計・数学・Python の最短ルート",
    description:
      "「AIエンジニアになりたいけど何から学べば?」という方向けに、数学・統計・機械学習・AI 検定までの 5 フェーズを、所要時間と到達点まで具体化した完全ロードマップ。",
    publishedAt: "2026-04-29",
    category: "ロードマップ",
    tldr: [
      "数学基礎(1〜2 ヶ月) → 統計学(3〜10 ヶ月) → 機械学習(3〜6 ヶ月) → AI 検定(1〜3 ヶ月) の 5 フェーズが王道。",
      "最短 350 時間、標準 700〜900 時間。週 5 日 × 1 時間で 1〜1.5 年で実装力まで届く。",
      "統計検定 2 級を先に取るとそのあとの G 検定 / E 資格 / DS 検定の理解が劇的に楽になる。",
    ],
    body: [
      {
        type: "p",
        text: "「AIエンジニアになりたい。でも何から学べばいいか分からない」 ─ 統計学・線形代数・微分・Python・機械学習・ディープラーニング・各種検定。情報が多すぎて、結局途中で挫折してしまう人を多く見てきました。本記事では、**数学基礎から AI 系検定までを 5 フェーズに整理した最短ロードマップ** を提案します。",
      },
      { type: "h3", text: "結論 ─ 5 フェーズで考える" },
      {
        type: "list",
        style: "number",
        items: [
          "**📐 数学基礎**(1〜2 ヶ月)─ 微分・線形代数・確率の必要部分だけ",
          "**📊 統計学(基礎)**(2〜4 ヶ月)─ 記述統計・確率分布まで",
          "**🔬 統計学(応用)**(3〜6 ヶ月)─ 推定・検定・回帰・多変量",
          "**🤖 機械学習・DL**(3〜6 ヶ月)─ scikit-learn / PyTorch で実装",
          "**🎓 AI 系検定**(1〜3 ヶ月)─ G 検定 / E 資格 / DS 検定で仕上げ",
        ],
      },
      {
        type: "p",
        text: "順番が大事です。**数学を飛ばすと統計の式が読めず**、**統計を飛ばすと機械学習モデルの中身が分からず**、**機械学習を飛ばすと AI 検定の問題が解けません**。寄り道に見えても、結局これが最短です。",
      },
      { type: "h3", text: "各フェーズの中身" },
      { type: "h4", text: "Phase 1 ─ 数学基礎" },
      {
        type: "p",
        text: "AI に必要な数学は意外と狭い範囲です。**微分(関数の傾き) ・ 線形代数(行列とベクトル) ・ 確率(事象の重み)** の 3 本柱。教科書を最初から最後まで読む必要はありません。後のフェーズで詰まる部分の補強として使うのが正解。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Σ 記号** ─ 統計の式はほぼ Σ で書かれている",
          "**指数・対数** ─ 確率や正規分布の式に多用",
          "**微分** ─ 損失関数の勾配 = ニューラルネットの学習",
          "**行列の積** ─ ベクトル → 線形変換 → 多層パーセプトロン",
          "**勾配・偏微分** ─ 勾配降下法の理解の根",
        ],
      },
      { type: "h4", text: "Phase 2 ─ 統計学(基礎)" },
      {
        type: "p",
        text: "**データを眺める言葉** を獲得するフェーズ。平均・分散・標準偏差から始まり、**確率変数 → 確率分布** へ。統計検定 4 級〜3 級の範囲がほぼここです。",
      },
      {
        type: "p",
        text: "ポイントは **正規分布の感覚を身につけること**。68% / 95% / 99.7% ルールを言葉で言えるようになると、後の検定 ・ 信頼区間 ・ 機械学習の評価指標がスッと頭に入ります。",
      },
      { type: "h4", text: "Phase 3 ─ 統計学(応用)" },
      {
        type: "p",
        text: "**推定 ・ 検定 ・ 回帰 ・ 多変量 ・ ベイズ** の 5 大トピック。統計検定 2 級〜準 1 級の範囲。AIエンジニアにとって最も重要なフェーズです。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**信頼区間** ─ 機械学習モデルの予測区間に直結",
          "**仮説検定** ─ A/B テスト・モデル比較の理論的支柱",
          "**回帰分析** ─ 線形回帰・ロジスティック回帰は ML の入口",
          "**主成分分析(PCA)** ─ 教師なし学習の基本",
          "**ベイズ統計** ─ ベイズ推論・MCMC は応用 ML の前提",
        ],
      },
      { type: "h4", text: "Phase 4 ─ 機械学習・ディープラーニング" },
      {
        type: "p",
        text: "ここで初めて **Python のフレームワーク** に踏み込みます。scikit-learn で教師あり・教師なし学習を一通り、PyTorch で MLP / CNN / Transformer を学ぶのが標準コース。",
      },
      {
        type: "p",
        text: "重要なのは「動かす → 評価する → 改善する」のループ。**Kaggle のチュートリアルコンペ** や **画像分類のミニプロジェクト** を 1 つやり切ると、フェーズ 3 の知識が血肉になります。",
      },
      { type: "h4", text: "Phase 5 ─ AI 系検定で仕上げ" },
      {
        type: "p",
        text: "**G 検定 ・ E 資格 ・ DS 検定** の 3 つが代表。学んだ知識の総点検として、また転職 / 昇進時のスキル証明として有効です。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**G 検定(JDLA)** ─ AI を使う立場の幅広いリテラシー。年 6 回・自宅受験可",
          "**E 資格(JDLA)** ─ エンジニア向け実装重視。事前認定講座が必要",
          "**DS 検定(DS 協会)** ─ DS 力 / DE 力 / ビジネス力の 3 軸。年 2 回",
          "**統計検定 2 級** ─ 統計の土台の証明として最強",
        ],
      },
      { type: "h3", text: "学習時間の目安" },
      {
        type: "p",
        text: "全フェーズ合計で **最短 350 時間 / 標準 700〜900 時間**。週 5 日 × 1 時間ペースなら 1〜1.5 年で実装力まで到達できます。社会人で平日 30 分・週末 2 時間なら 2 年弱が現実ライン。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Phase 1 数学基礎: **30〜60 時間 / 1〜2 ヶ月**",
          "Phase 2 統計学(基礎): **60〜120 時間 / 2〜4 ヶ月**",
          "Phase 3 統計学(応用): **120〜250 時間 / 3〜6 ヶ月**",
          "Phase 4 ML/DL: **120〜300 時間 / 3〜6 ヶ月**",
          "Phase 5 検定: **40〜200 時間 / 1〜3 ヶ月**",
        ],
      },
      { type: "h3", text: "よくある間違い" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**数学基礎を飛ばす** ─ 統計の式が読めないので Phase 2 で止まる",
          "**いきなり Python から** ─ ライブラリは使えるが中身が説明できない",
          "**統計検定 1 級を目標にする** ─ 範囲が広すぎて挫折する。AIエンジニア目線では準 1 級まででOK",
          "**手を動かさない** ─ 教科書だけだと定着しない。Python / R で再現することが大事",
          "**完璧主義** ─ 7 割理解で先に進み、必要に応じて戻る方が早い",
        ],
      },
      { type: "h3", text: "本サイトの使い方" },
      {
        type: "p",
        text: "本サイト『統計ロードマップ』は、上記 5 フェーズを **無料 ・ 完全静的サイト** で学べるように設計されています。会員登録不要、データはお使いのブラウザに保存されるだけです。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**[/roadmap](/roadmap)** ─ 5 フェーズの全体像",
          "**[/math](/math)** ─ Phase 1 数学基礎",
          "**[/textbook/grade-3](/textbook/grade-3)** ─ Phase 2 統計学(基礎)",
          "**[/textbook/grade-2](/textbook/grade-2)** ─ Phase 3 統計学(応用)",
          "**[/certs/e-shikaku](/certs/e-shikaku)** ─ Phase 4 ML/DL の対策",
          "**[/exam-info](/exam-info)** ─ Phase 5 各検定の受験情報",
          "**[/practice](/practice)** ─ 全範囲ランダム練習",
          "**[/mock](/mock)** ─ 本番形式の模試",
          "**[/review](/review)** ─ 苦手問題の自動復習",
        ],
      },
      { type: "h3", text: "まとめ" },
      {
        type: "p",
        text: "AIエンジニアへの道は **5 フェーズの積み上げ**。寄り道に見える数学が結局最短ルートです。本サイトでは各フェーズに **教科書 ・ 図解 ・ 演習 ・ Python/R コード** を揃えているので、外部教材を渡り歩く必要がありません。",
      },
      {
        type: "p",
        text: "まずは [3 問の級診断](/diagnose) で現在地を確認するか、迷わず [Phase 1 数学基礎](/math) から始めてみてください。**毎日 30 分のストリーク** が積み上がれば、1 年後にはまったく違う景色が見えるはずです。",
      },
    ],
  },
  {
    slug: "which-grade-to-start",
    title: "統計検定 何級から始めるべき? ─ 級選びの実践ガイド",
    description:
      "「統計検定を受けてみたいけど、何級から始めればいい?」という方向けに、5 つの級それぞれの対象者・難易度・受験の意味を整理しました。",
    publishedAt: "2026-04-25",
    category: "級選び",
    tldr: [
      "統計を初めて学ぶ → 4 級から、高校数学の素養あり → 3 級から、実務でデータを扱う → 2 級からが標準ルート。",
      "級飛ばしは可能だが、下位級の範囲(分散・正規分布など)が抜けていると 2 級以降で詰まる。",
      "迷ったら本サイトの 3 問の級診断がおすすめ。",
    ],
    body: [
      {
        type: "p",
        text: "「統計検定を受けてみたい。でも 4級から?2級から?準1級は難しすぎる?」 ─ 受験を考え始めたばかりの方からよくいただく質問です。本記事では、5 つの級の **位置付け・対象者・受験の意味** を整理し、あなたに合った級選びの考え方を提案します。",
      },
      { type: "h3", text: "結論 ─ 3 つのケースで答える" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**統計を初めて学ぶ高校生・社会人** → **4級 → 3級** が王道。基礎をしっかり。",
          "**大学で統計を少し触れた / 仕事でデータを扱う** → いきなり **2級** から狙うのが一般的。",
          "**データサイエンス / 機械学習を本格的に** → **2級 → 準1級** で実用範囲をフルカバー。",
        ],
      },
      { type: "h3", text: "級ごとの位置付け" },
      {
        type: "p",
        text: "**4級** は中高生向けの入門。データの代表値・確率・場合の数などを扱います。社会人の最初の一歩としても使えますが、仕事に直接活きるのは 3級以降です。",
      },
      {
        type: "p",
        text: "**3級** は大学基礎レベル。標準偏差・相関係数・正規分布・信頼区間の基礎まで。「ニュースで見る統計データを正しく読める」レベルになります。",
      },
      {
        type: "p",
        text: "**2級** は実務で最もよく使われる検定。t 検定・カイ二乗検定・回帰分析まで一通り扱えるようになります。データ分析の仕事をするなら **最低 2級** が現実的な目標。受験者数も最も多く、対策本も豊富です。",
      },
      {
        type: "p",
        text: "**準1級** はデータサイエンス系の発展領域。多変量解析・ベイズ・時系列まで。「統計学実践ワークブック」を軸に学ぶのが王道で、データサイエンティストを目指すなら高い投資対効果があります。",
      },
      {
        type: "p",
        text: "**1級** は数理統計学そのもの。十分統計量・最尤推定・漸近理論など、理論を式で導出する力を問われます。研究者・上級データサイエンティスト向け。",
      },
      { type: "h3", text: "「何級から?」3 つの判断軸" },
      {
        type: "list",
        style: "number",
        items: [
          "**現在の数学スキル**: 高校数学Ⅰまでなら 4級 / 3級。微積を使えるなら 2級も射程。",
          "**学習目的**: 仕事でデータを扱う → 2級。研究・大学院 → 準1級以上。",
          "**学習に投資できる時間**: 1〜2 か月なら 4級 / 3級、半年あれば 2級、1 年あれば準1級も。",
        ],
      },
      {
        type: "p",
        text: "迷う方は、**[3 問の級診断](/diagnose)** をお試しください。経験・数学への慣れ・学習目的をもとに、最適な級をご提案します。",
      },
      { type: "h3", text: "級飛ばしはあり?なし?" },
      {
        type: "p",
        text: "結論は「**目的次第**」。資格コレクションが目的なら順に取るのも手ですが、「2級だけ持っていたい」「準1級が目標」なら飛ばしても問題ありません。ただし、3級レベルの基礎(分散・正規分布・信頼区間)が抜けていると、2級の検定論で詰まりがち。**学ぶ範囲は飛ばさず、受験のみ飛ばす** のが賢い選択です。",
      },
      {
        type: "p",
        text: "本サイトでは [**学習ロードマップ**](/roadmap) で、4 級から 1 級までの推奨ルートと所要時間目安を 1 枚にまとめています。級選びの参考にしてください。",
      },
    ],
  },
  {
    slug: "grade-2-study-tips",
    title: "統計検定2級 効率的な勉強法 ─ 200時間で合格を目指すロードマップ",
    description:
      "統計検定2級は、社会人が独学で取得できる中で最も実用的な資格の 1 つ。200 時間で合格を目指す現実的な学習プランをまとめました。",
    publishedAt: "2026-04-25",
    category: "勉強法",
    tldr: [
      "200 時間 = テキスト 60h + 演習 80h + 過去問 40h + 復習 20h、を週 5 日 × 1 時間ペースで約 10 か月。",
      "最優先は 信頼区間・t 検定・カイ二乗検定。次点で単回帰、確実に取りたい計算問題で標準誤差・自由度。",
      "p 値 = 「H_0 が真の確率」ではなく「H_0 を仮定したときに今のデータが出る確率」。ここを必ず固める。",
    ],
    body: [
      {
        type: "p",
        text: "統計検定2級は、データ分析の実務でもっとも頻繁に使われる手法 ─ 推定・検定・回帰分析 ─ をひととおり扱う、実用性の高い資格です。本記事では「**忙しい社会人が 200 時間で合格** を目指す」ための具体的な学習プランを提案します。",
      },
      { type: "h3", text: "200 時間の学習配分" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Phase 1(60 時間)**: テキスト 1 周(『統計学基礎』など)で全体像をつかむ",
          "**Phase 2(80 時間)**: 例題・章末問題を手を動かして解く。ここがいちばん時間がかかる",
          "**Phase 3(40 時間)**: 過去問演習。直近 3 〜 5 回ぶんを時間を計って解く",
          "**Phase 4(20 時間)**: 弱点復習・苦手分野の再演習・模擬試験",
        ],
      },
      {
        type: "p",
        text: "週 5 日 × 1 時間で 200 時間 = 約 10 か月。週末 2 時間プラスで 6 か月、ガッツリ平日 2 時間ペースなら 3 〜 4 か月で到達可能です。",
      },
      { type: "h3", text: "出題分野ごとの重点ポイント" },
      {
        type: "p",
        text: "2 級の出題範囲は広く、「全部完璧」は現実的ではありません。配点と頻出度から、優先的に潰すべき分野を絞ります。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**最優先**: 推定(信頼区間)・仮説検定の枠組み・[t 検定](/glossary#level-2)・[カイ二乗検定](/glossary#level-2) ─ 配点が大きい",
          "**次点**: [単回帰分析](/glossary#level-2)・$R^2$・回帰係数の検定 ─ 必出",
          "**確実に取りたい**: [標準誤差](/glossary#level-2)・[自由度](/glossary#level-2)・[正規分布](/glossary#level-3)の標準化 ─ 計算問題で稼ぐ",
          "**深追いしない**: F 検定の応用、複雑な分散分析 ─ 出題は限定的",
        ],
      },
      { type: "h3", text: "つまずきやすいポイントと対処法" },
      {
        type: "def",
        title: "つまずき 1 ─ p 値の意味を取り違える",
        body: "**$p$ 値は『$H_0$ が正しい確率』ではない**。$H_0$ を仮定したときに「現在のデータと同じくらい極端なデータが出る確率」。この区別ができないと、検定の解釈で必ずミスする。",
      },
      {
        type: "def",
        title: "つまずき 2 ─ 信頼区間の解釈",
        body: "「95% 信頼区間に $\\mu$ が入る確率は 95%」という説明は厳密にはやや不正確。「同じ手続きを繰り返すと、得られる区間の 95% が真の $\\mu$ を含む」が正しい解釈。試験ではここまで踏み込まないが、実務で混乱しないために。",
      },
      {
        type: "def",
        title: "つまずき 3 ─ 自由度の数え方",
        body: "「不偏分散の自由度は $n-1$」「単回帰の残差の自由度は $n-2$」「重回帰なら $n - k - 1$」「$2 \\times 2$ 分割表の独立性検定は $1$」 ─ 状況ごとに違うので一覧表を作って覚える。",
      },
      { type: "h3", text: "推奨教材" },
      {
        type: "p",
        text: "本サイトの [**2級 教科書**](/textbook/grade-2) と [**演習問題**](/quiz/grade-2) で全範囲をひととおり押さえたあと、次の書籍で深掘りするのがおすすめです。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**統計学基礎**(東京図書)─ 公式テキスト。出題範囲を網羅",
          "**統計検定2級 公式問題集**(実務教育出版)─ 過去問演習の定番",
          "**統計学入門(東京大学出版会、通称「赤本」)** ─ 理論を深く学びたい方向け",
        ],
      },
      {
        type: "p",
        text: "詳細な書籍の特徴は [2級 公式集ページ末尾の参考書セクション](/formulas/grade-2) で確認してください。",
      },
      { type: "h3", text: "受験当日のコツ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**CBT 方式**: 通年で受験可能。会場で PC を使って解く形式",
          "**時間配分**: 90 分で 30 〜 35 問。1 問あたり 2.5 〜 3 分が目安",
          "**電卓持ち込み**: 必須。関数電卓があれば $\\sqrt{}$・$\\log$ の計算が楽",
          "**確率表**: 標準正規分布表・t 表・カイ二乗表は会場で配布されるので暗記不要",
        ],
      },
      {
        type: "p",
        text: "計算量が多いのが 2 級の特徴。本サイトの[演習問題](/quiz/grade-2)で時間を計って解く練習を、ぜひ繰り返してみてください。",
      },
    ],
  },
  {
    slug: "confusing-statistical-terms",
    title: "紛らわしい統計用語 9 ペアを徹底比較 ─ 試験で間違えないために",
    description:
      "「独立」と「排反」、「信頼区間」と「信用区間」、「相関」と「因果」… 統計学には似ていて紛らわしい用語が多くあります。試験で頻出の 9 ペアを並べて比較します。",
    publishedAt: "2026-04-25",
    category: "用語整理",
    tldr: [
      "「独立 vs 排反」 「信頼区間 vs 信用区間」 「相関 vs 因果」など、試験で混同しやすい 9 ペアを並べて整理。",
      "覚え方は「定義 + 式 + 使う場面」の 3 点セット。本記事では各ペアでこの 3 つを揃えて解説。",
      "本サイトの用語集と組み合わせて復習すると効果的。",
    ],
    body: [
      {
        type: "p",
        text: "統計学にはひっかかりやすい「**似ているけど違う**」用語のペアが多くあります。試験では選択肢の中にわざと混ぜてくることも。本記事では、特に間違えやすい 6 ペアを並べて比較します。",
      },
      { type: "h3", text: "ペア 1 ─ 独立 vs 排反" },
      {
        type: "p",
        text: "**独立**: 2 つの事象が互いに影響を与えない。$P(A \\cap B) = P(A)P(B)$。\n\n**排反**: 2 つの事象が同時に起こり得ない。$P(A \\cap B) = 0$。\n\n両者は **正反対の概念**。排反な事象はむしろ強く影響し合う(片方が起これば他方は起こらない)ので、「排反 ⇒ 独立」は **誤り** です。むしろ「排反 ⇒ 独立でない」が成立(両事象が確率 0 でない限り)。",
      },
      { type: "h3", text: "ペア 2 ─ 標本分散 vs 不偏分散" },
      {
        type: "p",
        text: "**標本分散** $s^2 = \\dfrac{1}{n}\\sum (X_i - \\bar{X})^2$ ─ 分母は $n$。\n\n**不偏分散** $\\hat{s}^2 = \\dfrac{1}{n-1}\\sum (X_i - \\bar{X})^2$ ─ 分母は $n-1$。\n\n母分散 $\\sigma^2$ を **推定** したいなら不偏分散($n-1$)を使います。標本のばらつきを **記述** するだけなら標本分散($n$)。Excel の VAR.S・Python の np.var(ddof=1) は不偏分散、np.var(デフォルト) は標本分散、と実装も別物。",
      },
      { type: "h3", text: "ペア 3 ─ 信頼区間 vs 信用区間" },
      {
        type: "p",
        text: "**信頼区間**(confidence interval): 頻度主義の概念。「同じ手続きを繰り返すと得られる区間の 95% が真の母数を含む」。\n\n**信用区間**(credible interval): ベイズ主義の概念。「真の母数がこの区間に入る確率が 95%」。\n\n直感に近いのは信用区間ですが、2 級で扱うのは信頼区間です。準1級・1級でベイズに踏み込むと信用区間が登場します。詳しくは [準1級 教科書 2.2](/textbook/grade-pre1#ch2-sec2)で。",
      },
      { type: "h3", text: "ペア 4 ─ 第1種の誤り vs 第2種の誤り" },
      {
        type: "p",
        text: "**第1種の誤り**: $H_0$ が真なのに棄却してしまう誤り。確率は **有意水準 $\\alpha$**(慣例 $0.05$)。\n\n**第2種の誤り**: $H_0$ が偽なのに棄却できない誤り。確率は **$\\beta$**。検出力は $1 - \\beta$。\n\n両者はトレードオフ。$\\alpha$ を厳しくする(0.01 に下げる)と第1種は減るが第2種が増える。実務では「重大な見落としを避けたい」「慎重に判定したい」で使い分け。",
      },
      { type: "h3", text: "ペア 5 ─ 相関 vs 因果" },
      {
        type: "p",
        text: "**相関**: 2 変数が連動する傾向の強さ。$r$(相関係数)で測る。\n\n**因果**: 一方が他方の **原因** になっている関係。\n\n「**相関があっても因果があるとは限らない**」は統計学の最も重要な戒めの 1 つ。たとえば「アイスの売上と水難事故」は強く相関しますが、片方が他方の原因ではなく、共通の原因(気温)があるだけ ─ これを **擬似相関** と呼びます。データを見るとき必ず「なぜそういう関係なのか」を考えるクセを。",
      },
      { type: "h3", text: "ペア 6 ─ 期待値 vs 平均値" },
      {
        type: "p",
        text: "**期待値** $E[X]$: 確率変数 $X$ の理論的な平均。$\\sum x_i P(X = x_i)$。\n\n**平均値** $\\bar{x}$: データの算術平均。$\\frac{1}{n}\\sum x_i$。\n\n期待値はモデル(確率分布)の量、平均値はデータから計算する量。ただし大数の法則より、$n \\to \\infty$ で $\\bar{x} \\to E[X]$ に収束するので、実務上は混同して使われることも多いです。",
      },
      { type: "h3", text: "ペア 7 ─ 標準誤差 vs 標準偏差" },
      {
        type: "p",
        text: "**標準偏差** $s$: 1 つのデータ自体のばらつき。$\\sqrt{\\frac{1}{n}\\sum (x_i - \\bar{x})^2}$。\n\n**標準誤差** $\\mathrm{SE}$: ある **推定量** のばらつき。標本平均なら $\\sigma/\\sqrt{n}$。\n\n標準偏差は「個々のデータが散らばる幅」、標準誤差は「(同じ実験を繰り返したときの)推定量自体が揺れる幅」。$n$ を増やしても標準偏差は変わらないが、標準誤差は $\\sqrt{n}$ で縮む、というのがいちばん大きな違いです。",
      },
      { type: "h3", text: "ペア 8 ─ バイアス vs 誤差" },
      {
        type: "p",
        text: "**バイアス**(系統誤差): 推定量の期待値が真値からズレている量。$E[\\hat{\\theta}] - \\theta$。**何度繰り返しても同じ方向にズレる** タイプの誤り。\n\n**誤差**(ランダム誤差・偶然誤差): 推定量の標本ごとの揺れ。$\\hat{\\theta} - E[\\hat{\\theta}]$。\n\n推定量の悪さは「**MSE = バイアス² + 分散**」で測れます。バイアスが残るより分散が大きいほうが「やり直せばいつかは当たる」ぶんマシ、というのが現代統計学の暗黙の価値観。",
      },
      { type: "h3", text: "ペア 9 ─ 相関 vs 共分散" },
      {
        type: "p",
        text: "**共分散** $s_{xy} = \\frac{1}{n}\\sum (x_i - \\bar{x})(y_i - \\bar{y})$: 2 変数の連動の方向を示す。**単位の影響を受ける**。\n\n**相関係数** $r = s_{xy} / (s_x s_y)$: 共分散を標準偏差で割って **単位を消した量**。$-1 \\leq r \\leq 1$ で強さを比較できる。\n\n「共分散の符号が連動の向き、相関係数の大きさが連動の強さ」と覚えるとスッキリ整理できます。",
      },
      { type: "h3", text: "学習のコツ" },
      {
        type: "p",
        text: "紛らわしい用語は、**「定義」「式」「使う場面」を 3 点セットで覚える** のがおすすめです。本サイトの [**用語集**](/glossary)では、各用語に短い定義と関連する教科書節へのリンクを付けているので、復習のチェックリストとしてご利用ください。",
      },
    ],
  },
];

blogPosts.push(
  {
    slug: "grade-3-50-hours",
    title: "統計検定3級は何時間で合格できる? ─ 50時間プランと最短ルート",
    description:
      "統計検定3級は社会人や高校生でも独学で取れる入門資格。実際にどれくらい時間がかかるのか、効率的な配分とつまずきポイントを整理します。",
    publishedAt: "2026-04-26",
    category: "勉強法",
    tldr: [
      "目安は 50 時間。テキスト 15h + 演習 20h + 過去問 10h + 復習 5h で約 8〜10 週間。",
      "つまずきポイント TOP3: 標準偏差と分散の混同、二項分布の式の意味、正規分布の標準化 z = (X-μ)/σ。",
      "本サイトの 3 級教科書 + 演習で本書の内容はカバーできる。",
    ],
    body: [
      {
        type: "p",
        text: "統計検定3級は「大学基礎レベル」とされていますが、実際は高校数学Ⅰの素養があれば社会人でも独学可能。本記事では **50 時間で合格を目指す現実的なプラン** と、3 級特有のつまずきポイントを整理します。",
      },
      { type: "h3", text: "50 時間の配分" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Phase 1(15 時間)**: 公式テキスト 1 周、概念理解中心",
          "**Phase 2(20 時間)**: 例題と章末問題を手で解く、計算に慣れる",
          "**Phase 3(10 時間)**: 過去問 2〜3 回ぶんを時間を計って解く",
          "**Phase 4(5 時間)**: 弱点分野の復習、本サイトの[演習問題](/quiz/grade-3) で総仕上げ",
        ],
      },
      {
        type: "p",
        text: "週末 2 時間 + 平日 1 日 30 分なら、約 8 〜 10 週間で到達できます。",
      },
      { type: "h3", text: "3 級特有のつまずきポイント" },
      {
        type: "def",
        title: "つまずき 1 ─ 標準偏差と分散の混同",
        body: "**分散** は偏差の 2 乗の平均、**標準偏差** はそれの平方根。試験では「これは分散か?標準偏差か?」を問う引っかけが多い。**単位** に注目すると見分けやすい(身長の分散は cm²、標準偏差は cm)。",
      },
      {
        type: "def",
        title: "つまずき 2 ─ 二項分布の式の暗記",
        body: "$P(X = k) = {}_n C_k\\, p^k (1-p)^{n-k}$ ─ なぜこの形か?「ちょうど $k$ 回成功する並び方が ${}_n C_k$ 通り、それぞれが確率 $p^k(1-p)^{n-k}$」と式の意味を理解すれば暗記不要。",
      },
      {
        type: "def",
        title: "つまずき 3 ─ 正規分布の標準化",
        body: "$Z = (X - \\mu)/\\sigma$ という式そのものより、**「どんな正規分布も標準正規 $N(0,1)$ という共通の物差しに翻訳できる」** という発想が要。標準正規分布表が読めれば 3 級の正規分布問題はだいたい解ける。",
      },
      { type: "h3", text: "推奨教材" },
      {
        type: "list",
        style: "bullet",
        items: [
          "本サイトの [3級 教科書](/textbook/grade-3) ─ 全 9 節の本文で全範囲を網羅",
          "[3級 公式集](/formulas/grade-3) ─ 重要 18 公式を試験前に確認",
          "[3級 演習問題](/quiz/grade-3) ─ 1 問 1 答モードで実戦練習",
          "公式テキスト「データの分析」(東京図書) ─ 過去問入りの定番",
        ],
      },
      { type: "h3", text: "受験のタイミング" },
      {
        type: "p",
        text: "3 級は CBT 方式で通年受験可能。学習を始めて 2 か月後あたりに会場予約を入れると、締切効果でラストスパートが効きます。試験料は 5,000 円(団体・優待で割引あり)。落ちても再受験は容易なので、迷ったらまず予約 → 学習 → 受験のリズムで。",
      },
    ],
  },
  {
    slug: "z-score-vs-deviation-score",
    title: "z スコアと偏差値の違いを完全整理 ─ 標準化の 3 つの形",
    description:
      "「z スコア」「標準化」「偏差値」 ─ 似ているけど違う 3 つの概念。式・意味・使い分けを 1 ページで整理します。",
    publishedAt: "2026-04-26",
    category: "用語整理",
    tldr: [
      "標準化(操作)で z スコア(値)を計算し、偏差値はそれを T = 50 + 10z に翻訳しただけ。",
      "z = 0 → 平均、z = +1 → 上位 約 16%、z = +2 → 上位 約 2.3%(正規分布の経験則)。",
      "標準化したデータは平均 0・標準偏差 1 になり、異なる単位・テストを公平に比較できる。",
    ],
    body: [
      {
        type: "p",
        text: "「z スコア」「標準化得点」「偏差値」 ─ どれも『データを共通の物差しに変換する』ための量。同じ仲間ですが、**スケール** が違うので混同しやすい。本記事で 1 度きれいに整理しましょう。",
      },
      { type: "h3", text: "原点に戻る ─ なぜ標準化が必要か" },
      {
        type: "p",
        text: "「数学のテスト 70 点」と「英語のテスト 70 点」、どちらが優秀か? 平均と標準偏差が違えば答えは変わります。各データを **「平均からどれくらいズレているか」を標準偏差を単位に表現する** ─ これが標準化です。",
      },
      { type: "h3", text: "z スコア(z-score)" },
      {
        type: "def",
        title: "定義",
        body: "$\\;z = \\dfrac{x - \\bar{x}}{s}\\;$\n\nもとのデータから平均を引き、標準偏差で割る。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**意味**: 平均から **何標準偏差ぶん** ズレているか。",
          "**範囲**: 理論上は無制限。実際のデータでは $-3$ 〜 $+3$ の範囲に収まることが多い(正規分布の経験則)。",
          "**z = 0**: 平均ちょうど。",
          "**z = +1**: 平均より 1 標準偏差上(正規分布なら上位 約 16%)。",
          "**z = -2**: 平均より 2 標準偏差下(正規分布なら下位 約 2.3%)。",
        ],
      },
      { type: "h3", text: "標準化" },
      {
        type: "p",
        text: "「標準化」は z スコアを計算する **操作** の名前。「データを z スコアに変換する」 = 「データを標準化する」。**操作の名前 vs 結果の名前** という関係です。",
      },
      { type: "h3", text: "偏差値(T-score)" },
      {
        type: "def",
        title: "定義",
        body: "$\\;T = 50 + 10\\, z = 50 + 10 \\cdot \\dfrac{x - \\bar{x}}{s}\\;$\n\n受験勉強で見る「偏差値 65」「偏差値 40」のあれ。",
      },
      {
        type: "p",
        text: "z スコアを **「平均 50・標準偏差 10」** の物差しに翻訳しただけ。負の数を避けて直感的にしたい、という日本独自の慣習が背景にあります(英語圏の T-score とは少し意味が違うので注意)。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**偏差値 50**: 平均ちょうど(z = 0)。",
          "**偏差値 60**: 平均 + 1 σ(z = 1)、上位 約 16%。",
          "**偏差値 70**: 平均 + 2 σ(z = 2)、上位 約 2.3%。",
          "**偏差値 30**: 平均 - 2 σ(z = -2)、下位 約 2.3%。",
        ],
      },
      { type: "h3", text: "3 つの関係" },
      {
        type: "p",
        text: "**標準化(操作)**で **z スコア(値)**を計算し、**偏差値(値)**は z スコアを線形変換して直感的にしたもの。3 者は同じ「相対位置」を別のスケールで表現しているだけです。",
      },
      {
        type: "ex",
        title: "数値例",
        body: "テストの平均 60 点、標準偏差 15 点。あなたの点数 75 点。\n\n**z スコア** = $(75-60)/15 = 1.0$\n**偏差値** = $50 + 10 \\times 1.0 = 60$\n\n両方とも「平均から 1 標準偏差ぶん上」を表しています。",
      },
      { type: "h3", text: "標準化したデータの性質" },
      {
        type: "p",
        text: "データ全体を z スコアに変換すると:",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**平均は必ず 0** になる($\\bar{z} = 0$)",
          "**標準偏差は必ず 1** になる($s_z = 1$)",
          "**もとの分布の形は保たれる**(正規分布なら標準化後も正規分布)",
        ],
      },
      { type: "h3", text: "応用 ─ どこで使うか" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**異なるデータの比較**(数学と英語、身長と体重など、単位が違うものを公平に比較)",
          "**機械学習の前処理**(変数のスケールを揃えると勾配降下法が安定)",
          "**正規分布の確率計算**(z 値に変換すれば標準正規分布表が使える)",
          "**外れ値検出**($|z| > 3$ なら外れ値と判断する経験則)",
        ],
      },
      {
        type: "p",
        text: "より深い解説は 3 級教科書の [1.3 標準化 ─ 比較できる形に直す](/textbook/grade-3#ch1-sec3) をご覧ください。",
      },
    ],
  },
  {
    slug: "do-data-scientists-need-toukei-kentei",
    title: "データサイエンティストに統計検定は必要か? ─ 実務での使われ方",
    description:
      "データサイエンスの仕事で、統計検定の知識はどこまで使うのか? 現場の視点で級ごとの実用性を整理しました。",
    publishedAt: "2026-04-26",
    category: "キャリア",
    tldr: [
      "資格よりも「資格を取る過程で身につく知識」が重要。2 級レベル(検定・回帰)は実務基礎、準1級(多変量・ベイズ)は応用範囲を完全カバー。",
      "実務でよく使う 5 技法: A/B テスト・回帰分析・ロジスティック回帰・主成分分析・ベイズ推論。",
      "未経験から DS を目指すなら、2 級 → Python 実践 → 準 1 級 の順が王道ルート。",
    ],
    body: [
      {
        type: "p",
        text: "「データサイエンティストになるなら統計検定を取るべき?」 ─ 受験を検討中の方からよく出る問い。本記事では、データ分析の実務で **どの級の知識がどこまで使われるか** を率直に整理します。",
      },
      { type: "h3", text: "結論 ─ 2 級は実用、準1級は強い武器" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**2 級**: 仕事で使う統計の基礎(検定・回帰)が網羅される。実用性◎。",
          "**準1級**: 多変量解析・ベイズ・時系列まで。データサイエンス実務の主要範囲を完全カバー。",
          "**1 級**: 数理統計学の理論。実務というより研究・上級職向け。",
          "**3 級以下**: 実務では物足りないが、初心者の足がかりとしては有用。",
        ],
      },
      { type: "h3", text: "実務でよく使う統計の技法ベスト 5" },
      {
        type: "list",
        style: "number",
        items: [
          "**[A/B テスト](/glossary#level-2)** の検定 ─ 2 級の母平均/母比率の検定そのもの。",
          "**[回帰分析](/glossary#level-2)** ─ 売上予測・要因分析でほぼ毎週登場。2 級の中核トピック。",
          "**[ロジスティック回帰](/glossary#level-準1)** ─ 二値の予測(離脱/コンバージョンなど)。準1級。",
          "**[主成分分析](/glossary#level-準1)** ─ 多次元データの可視化・前処理。準1級。",
          "**ベイズ推論** ─ Bayesian A/B テスト、確率的予測。準1級〜1級。",
        ],
      },
      {
        type: "p",
        text: "見ていただくと分かるとおり、**2 級と準1級が実用範囲の大半をカバー** しています。1 級レベルの数理は、頻繁には使わないが「分かっているからこそ妥当な手法を選べる」という地力になります。",
      },
      { type: "h3", text: "資格取得 vs 業務経験 ─ 採用での評価" },
      {
        type: "p",
        text: "正直に言うと、**業務経験 > 資格** という現実があります。「統計検定2級保有」自体が採用の決め手になることは多くありません。ただし、",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**未経験から DS を目指す方**: 学習の体系性を示す手段として有効",
          "**コミュニケーション**: 共通の語彙をもつことでチーム内議論がスムーズ",
          "**学び直しの動機**: 資格を目標にすることで体系的に学べる",
        ],
      },
      {
        type: "p",
        text: "といった副次的な価値は十分にあります。「資格があるから採用される」のではなく、「**資格を取る過程で身についた知識** が業務で活きる」と捉えるのが現実的です。",
      },
      { type: "h3", text: "Python・R との関係" },
      {
        type: "p",
        text: "現代のデータサイエンス実務は Python(pandas, scikit-learn, statsmodels)や R に支えられています。ライブラリが計算は全部やってくれるので、「**式を手で展開する力** より **手法の意味と適用条件を理解する力** 」が圧倒的に重要。統計検定の学習は、まさにこの「意味と条件」を養うのに向いています。",
      },
      { type: "h3", text: "おすすめのルート" },
      {
        type: "p",
        text: "未経験からデータサイエンス職を目指すなら:",
      },
      {
        type: "list",
        style: "number",
        items: [
          "**Step 1(2〜3 か月)**: [統計検定 2 級](/textbook/grade-2) で基礎固め(検定・回帰の意味を式レベルで理解)",
          "**Step 2(並行)**: Python の pandas + scikit-learn でデータを実際に動かす",
          "**Step 3(6〜12 か月)**: [統計検定 準 1 級](/textbook/grade-pre1) で応用力を一気に",
          "**Step 4**: Kaggle・データ分析の実プロジェクトで経験を積む",
        ],
      },
      {
        type: "p",
        text: "「資格取得」を目的化せず、「実用知識を体系的に身につける手段」として使うのが、統計検定の最も賢い使い方です。本サイトの [学習ロードマップ](/roadmap) で具体的な学習計画もご確認いただけます。",
      },
    ],
  },
);

blogPosts.push(
  {
    slug: "how-to-use-past-exams",
    title: "統計検定 過去問の効果的な使い方 ─ 「いつ・どう解く」を完全整理",
    description:
      "統計検定の過去問は、合否を分ける最重要教材。本記事では「いつから始めるか」「解き方の手順」「復習の仕方」「入手方法」を整理し、過去問を最大活用する流れを提案します。",
    publishedAt: "2026-04-27",
    category: "勉強法",
    tldr: [
      "過去問は試験 1 〜 1.5 か月前から。早すぎると傾向把握できず、遅すぎると手応えを感じられない。",
      "「時間を計って解く → 採点 → 間違えた問題のみ教科書で復習 → 数日後にもう一度解く」が基本サイクル。",
      "公式問題集が王道。3〜5 回ぶんを 2 周回せば、合格レベルの実戦感覚が身につく。",
    ],
    body: [
      {
        type: "p",
        text: "教科書を一通り読んだら、次のフェーズは過去問演習。実は「過去問をいつ・どう解くか」で合否が大きく分かれます。本記事では、独学者が過去問の効果を最大化するための具体的な進め方を整理します。",
      },
      { type: "h3", text: "いつから始めるか" },
      {
        type: "p",
        text: "過去問を始めるベストタイミングは **試験 1 〜 1.5 か月前** です。早すぎると教科書の理解が追いつかず、解説を読んでも「なぜそうなるのか」が分からない。遅すぎると、間違えた問題を復習する時間が足りない。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**教科書 1 周終了後** が過去問スタートの目安",
          "**初回 1 〜 2 回ぶんは時間を気にせず解く**(出題傾向の把握が目的)",
          "**3 回目以降は本番と同じ時間で解く**(時間配分の練習)",
        ],
      },
      { type: "h3", text: "解き方の 4 ステップ" },
      {
        type: "list",
        style: "number",
        items: [
          "**時間を計って解く**(本番と同じ時間 / 設問数)",
          "**自己採点**(正答数を記録、苦手分野を可視化)",
          "**間違えた問題のみ教科書で復習**(全部解説を読まない、効率を意識)",
          "**数日後、間違えた問題だけもう一度解く**(復習の定着確認)",
        ],
      },
      {
        type: "p",
        text: "正解した問題の解説まで読み込む必要はありません。**間違えた問題に集中**するのが時間効率の鍵。「なぜ間違えたか」を一言メモしておくと、本番直前の総まとめに役立ちます。",
      },
      { type: "h3", text: "復習の仕方 ─ 間違えパターン分析" },
      {
        type: "p",
        text: "間違えた問題は、原因を 4 つに分類して対処します。",
      },
      {
        type: "def",
        title: "間違えパターン分類",
        body: "**① 知識不足**: そもそも公式や定義を知らなかった → 教科書の該当節を再読\n\n**② ケアレスミス**: 計算ミス・読み間違い → 解き直しで OK、メモして直前確認\n\n**③ 時間切れ**: 内容は分かるが時間が足りない → 解く順番の戦略を変える\n\n**④ 出題形式に慣れていない**: 知っているが応用できない → 同じ形式の問題を繰り返し解く",
      },
      { type: "h3", text: "公式問題集の入手方法" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**公式問題集**(実務教育出版): 各級ごと刊行、Amazon で購入。**過去問の入手はこれ一択** が現実的",
          "**統計検定公式サイト**: 過去問の一部や出題範囲表が公開されている",
          "**過去問の通読は避ける**: 「読むだけ」では身につかない。必ず手で解く",
        ],
      },
      { type: "h3", text: "本サイトとの組み合わせ" },
      {
        type: "p",
        text: "本サイトの [演習問題](/quiz/grade-2) は、公式過去問よりやさしめの **オリジナル類題**。過去問に挑む前のウォームアップ、または過去問で詰まったあとの復習として使うのが効果的です。1 問 1 答モードで解説を読みながら進められるので、間違えた問題の理解を深めるのに向いています。",
      },
      { type: "h3", text: "本番直前 1 週間の使い方" },
      {
        type: "list",
        style: "number",
        items: [
          "**新しい問題には手を出さない**(自信を失う原因に)",
          "**間違えた問題のメモをすべて見返す**(自分の弱点総点検)",
          "**公式集を 1 周**([本サイトの級別公式集](/formulas/grade-2) も活用)",
          "**当日の持ち物・受験票を確認**(電卓の電池も!)",
        ],
      },
      {
        type: "p",
        text: "過去問は「自分の合格可能性を測るバロメーター」でもあります。直近 3 回ぶんの平均点が合格基準点(7 割)を超えていれば、自信を持って受験当日を迎えられます。",
      },
    ],
  },
  {
    slug: "workbook-guide",
    title: "準1級ワークブック 完全攻略ガイド ─ 1 周目・2 周目・3 周目の使い分け",
    description:
      "統計検定 準 1 級の事実上の必読書「統計学実践ワークブック」。分厚いこの本を効率的に攻略する 3 周方式と、章ごとの重点ポイントを整理します。",
    publishedAt: "2026-04-27",
    category: "勉強法",
    tldr: [
      "ワークブックは 32 章 + 付録の構成。1 章ごとに「概念 → 例題 → 練習」のサイクルがある。",
      "1 周目は通読(理解度 60%)、2 周目は演習中心(80%)、3 周目は弱点補強(90%)の三段階で。",
      "単独では理解しづらい章があるので、本サイトの [準1級教科書](/textbook/grade-pre1) を補助教材として活用。",
    ],
    body: [
      {
        type: "p",
        text: "「統計学実践ワークブック」(学術図書出版社)は、統計検定 準 1 級対策の **事実上の標準教材**。約 350 ページのボリュームに 32 章が詰まっており、合格者の多くが「これ一冊を回した」と語ります。本記事では、その効率的な攻略法を提案します。",
      },
      { type: "h3", text: "ワークブックの構成" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**32 章 + 付録**: 確率分布論、推定・検定、回帰、多変量、ベイズ、時系列、機械学習入門までを網羅",
          "**1 章 = 概念 + 例題 + 練習** の構成、約 10 ページ",
          "**前半(1〜15 章)** は理論寄り、**後半(16〜32 章)** は応用・手法寄り",
        ],
      },
      { type: "h3", text: "3 周方式 ─ 「広く → 深く → 仕上げ」" },
      {
        type: "def",
        title: "1 周目 ─ 通読(目標 1.5 か月)",
        body: "**目的**: 全体像の把握と、各章の難易度感の体得。\n\n**やり方**: 例題はすべて目を通すが、練習問題は無理に解かない。「分からない章はマーク → 飛ばす」で先に進む。\n\n**ゴール**: 「全部のキーワードを聞いたことがある」状態。",
      },
      {
        type: "def",
        title: "2 周目 ─ 演習中心(目標 2 か月)",
        body: "**目的**: 例題と練習問題を手で解けるようになる。\n\n**やり方**: 全章の例題を手で解く。練習問題も少なくとも半分は解く。1 周目でマークした難所は、本サイトの教科書や別の参考書も参照して理解を深める。\n\n**ゴール**: 「式の意味と使い場面を自分の言葉で説明できる」状態。",
      },
      {
        type: "def",
        title: "3 周目 ─ 弱点補強と過去問(目標 1 か月)",
        body: "**目的**: 過去問演習で見えた弱点章を集中復習。\n\n**やり方**: 公式過去問を解いて間違えた問題に対応する章を、もう一度演習。直前期は本サイトの[準1級教科書](/textbook/grade-pre1)で要点を再確認。\n\n**ゴール**: 過去問で 7 割安定。",
      },
      { type: "h3", text: "つまずきやすい章 TOP 5" },
      {
        type: "list",
        style: "number",
        items: [
          "**多変量正規分布 / 行列式の理解** ─ 線形代数の前提があやふやだとここで詰まる。本サイト[準1級 1.2 節](/textbook/grade-pre1#ch1-sec2)で復習を。",
          "**ベイズ推論と共役分布** ─ 頻度主義の発想からの切り替えが必要。[準1級 2.1〜2.2 節](/textbook/grade-pre1#ch2-sec1)が補助になる。",
          "**主成分分析 / 因子分析** ─ 固有値分解の幾何的イメージが大事。",
          "**時系列(ARIMA / 状態空間)** ─ 用語が一気に増える。[準1級 4.1 節](/textbook/grade-pre1#ch4-sec1)で整理。",
          "**機械学習入門の章(後半)** ─ 統計検定的にはあまり深く問われない。出ても基礎レベル。",
        ],
      },
      { type: "h3", text: "本サイトとの組み合わせ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "ワークブックの該当章で詰まったら、本サイト[準1級 教科書](/textbook/grade-pre1)で同じ概念を別の言葉で読む",
          "**用語の即時確認**は[用語集](/glossary)で",
          "**演習問題**で「自分は本当に分かっているか」を別角度から確認",
        ],
      },
      { type: "h3", text: "ワークブックを補完する参考書" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**現代数理統計学の基礎**(共立出版) ─ ワークブックの数理面が物足りない人向け",
          "**多変量解析法入門**(松井秀俊・小泉和之 / サイエンス社) ─ 多変量章の補完",
          "**過去問**(実務教育出版) ─ 必須。3〜5 回ぶんを 2 周",
        ],
      },
      {
        type: "p",
        text: "ワークブックは「分厚くて挫折しがち」と言われますが、3 周方式で各周の目的を明確にすれば、確実に攻略できます。最大の敵は「1 周目で完璧を目指すこと」 ─ 6 割の理解で先に進む勇気が、結果的には合格への近道です。",
      },
    ],
  },
  {
    slug: "excel-vs-python",
    title: "Excel と Python、データ分析でどっちを学ぶべき? ─ 5 つの軸で比較",
    description:
      "データ分析を始めたい人がぶつかる最初の問い。「まず Excel を極めるべきか、Python に飛び込むべきか?」 ─ 5 つの軸で比較し、現実的な学習ルートを提案します。",
    publishedAt: "2026-04-27",
    category: "キャリア",
    tldr: [
      "結論: 両方使う。順番は「Excel → Python」がスムーズ。Excel で「データ分析の感覚」を養ってから Python に進む。",
      "Excel の強み: 操作が直感的・社内で共有しやすい。弱み: 大規模データ・自動化が苦手。",
      "Python の強み: スケーラブル・自動化可能・機械学習までシームレス。弱み: 学習コストが高め。",
    ],
    body: [
      {
        type: "p",
        text: "「データ分析を仕事にしたい」「副業で分析を受けたい」と思った人が最初にぶつかる問いが、これ。**Excel を極めるべきか、Python に飛び込むべきか**。本記事では、5 つの軸で比較し、現実的な学習ルートを提案します。",
      },
      { type: "h3", text: "5 つの軸で比較" },
      {
        type: "ex",
        title: "比較表",
        body: "| 軸 | Excel | Python |\n|---|---|---|\n| **学習の入りやすさ** | ◎ 直感的 | △ 学習コスト高 |\n| **小規模データ(数千行)** | ◎ 速い | ○ 環境構築必要 |\n| **大規模データ(数十万行〜)** | × 重い・落ちる | ◎ 余裕で扱える |\n| **自動化・再現性** | △ マクロは可だが脆い | ◎ スクリプトで完璧 |\n| **可視化** | ○ きれいだが操作多い | ◎ matplotlib / seaborn / plotly |\n| **機械学習** | × ほぼ不可 | ◎ scikit-learn / TensorFlow |\n| **共有・引き継ぎ** | ◎ 誰でも開ける | △ 環境差異の問題 |",
      },
      { type: "h3", text: "Excel の強み ─ 「みんなが見られる」道具" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**起動が一瞬**: ファイルをダブルクリックで開ける",
          "**結果を共有しやすい**: 上司・取引先も同じファイルを開ける",
          "**ピボット・グラフが GUI**: マウス操作で集計・可視化",
          "**学習の足がかり**: 「データ分析の感覚」を養うには最適",
        ],
      },
      { type: "h3", text: "Python の強み ─ 「大量・自動・拡張」の道具" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**スケーラブル**: 数百万行のデータでも余裕(pandas)",
          "**自動化**: 同じ処理をスクリプト化、cron で定期実行も",
          "**再現性**: コードがあれば誰でも同じ結果を再現できる",
          "**機械学習に直結**: scikit-learn・PyTorch・TensorFlow",
          "**Web スクレイピング**: BeautifulSoup・Selenium で外部データ取得",
        ],
      },
      { type: "h3", text: "現実的な学習ルート" },
      {
        type: "p",
        text: "結論は「**両方使えるようになる**」。順番は **Excel → Python** がおすすめ。",
      },
      {
        type: "list",
        style: "number",
        items: [
          "**Step 1**: Excel の関数 + ピボットテーブル + グラフを使えるように。本サイト[DS基礎 教科書](/certs/ds-basic/textbook)で体系的に学べます。",
          "**Step 2**: Excel で「データ分析の感覚」を養う(統計の基礎・代表値・相関・回帰)",
          "**Step 3**: Python pandas に移行(Excel ファイルの読み込み・集計の自動化から)",
          "**Step 4**: scikit-learn で機械学習へ展開",
        ],
      },
      { type: "h3", text: "統計検定との関係" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**統計検定 4 級〜2 級**: ツールに依存せず、概念と計算を学ぶ",
          "**統計検定 DS 基礎**: Excel に特化。Excel メインの方はこちら",
          "**統計検定 準1 級・1 級**: 数理の理解が中心、ツールは問わない",
        ],
      },
      { type: "h3", text: "実務での組み合わせ例" },
      {
        type: "p",
        text: "現場では「**Excel で軽い集計・打ち合わせ用、Python で本格分析・レポート自動化**」という使い分けがよくあります。会議資料は Excel + ピボット、データ整形やモデル構築は Python、最終アウトプットを Excel に戻す ─ こうしたハイブリッドが、もっとも生産性が高い構成です。",
      },
      {
        type: "p",
        text: "「どっちか」ではなく「**どちらも、適材適所で**」 ─ それが現代のデータ分析職の標準スタイルです。",
      },
    ],
  },
);

blogPosts.push(
  {
    slug: "exam-day-guide",
    title: "統計検定 当日の持ち物・心構えガイド ─ 直前1週間の使い方も",
    description:
      "本番前の準備で合否は変わります。統計検定の受験当日に持っていくもの、避けるべきこと、直前1週間の過ごし方を、独学受験者の視点で具体的にまとめました。",
    publishedAt: "2026-04-28",
    category: "勉強法",
    tldr: [
      "持ち物: 受験票・身分証・関数電卓(必須)・筆記具・時計の 5 点が基本。CBT 会場の場合は会場のPC環境を事前確認。",
      "直前1週間は新しい問題に手を出さず、間違えた問題と公式の総点検に集中。",
      "前日は最低 7 時間睡眠。当日は早めに着いて自分のペースを取り戻す時間を確保。",
    ],
    body: [
      {
        type: "p",
        text: "教科書を読み、過去問も解いた。あとは本番を待つだけ ─ そう思いがちですが、**当日と直前 1 週間の過ごし方** で合否が分かれることがあります。本記事では、独学受験者がつまずきやすいポイントを、当日・前日・直前 1 週間の 3 つに分けて整理します。",
      },
      { type: "h3", text: "当日の持ち物リスト" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**受験票 / 受験案内メール**(CBT は予約番号がわかるもの)",
          "**身分証明書**(運転免許証・マイナンバーカード・パスポートなど顔写真付き)",
          "**関数電卓**(電池切れ注意、予備電池があれば安心)",
          "**筆記具**(シャープペンシルか鉛筆 2 本以上、消しゴム)",
          "**腕時計**(教室に時計がない・スマホは使えない場合の保険)",
          "**飲み物・軽食**(休憩中の補給用)",
          "**温度調整できる上着**(教室の冷暖房対策)",
        ],
      },
      {
        type: "p",
        text: "**統計数値表** は CBT・ペーパーともに会場で配布されるので **暗記不要**。電卓は試験規則で「**プログラム機能なし**」とされていることが多いので、複雑な関数電卓は避け、シンプルなものを推奨。",
      },
      { type: "h3", text: "CBT 会場の事前確認(2-4 級と DS 基礎)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**会場の場所と所要時間**: 当日迷わないよう、Google マップで事前にルート確認",
          "**席の確保**: CBT は予約制。直前は枠が埋まりやすいので早めに",
          "**会場のルール**: 持ち込み可否(電卓・スマホ・水筒など)を予約時に確認",
        ],
      },
      { type: "h3", text: "直前 1 週間の過ごし方" },
      {
        type: "def",
        title: "やるべきこと",
        body: "**1. 公式集の総点検**: 本サイトの[各級公式集](/formulas/grade-2)を一通り目を通す。「あれ、これなんだっけ?」を潰す。\n\n**2. 過去問の弱点ノート見返し**: 過去に間違えた問題のメモを再確認。「なぜ間違えたか」「正しい解法」を頭に入れ直す。\n\n**3. 計算量の多い問題の練習**: 2 級以降は計算量が勝負。手書きで時間を計って解く。\n\n**4. 睡眠と食事**: 本番 3 日前から、毎日 7 時間以上の睡眠を確保。",
      },
      {
        type: "def",
        title: "避けるべきこと",
        body: "**1. 新しい教材に手を出す**: 「あ、この本も読んでおきたい」は誘惑。本番までは「いま手元のもの」だけに絞る。\n\n**2. 徹夜での詰め込み**: 統計学の理解は積み重ねで、一夜漬けは効きにくい。\n\n**3. 直前の弱点強化に時間をかけすぎる**: 「苦手だから集中する」より「**得点源になる得意分野で確実に取る**」のが本番の戦略。",
      },
      { type: "h3", text: "本番当日の朝" },
      {
        type: "list",
        style: "number",
        items: [
          "**起床時刻**: 試験開始の 3 時間前。脳が動き始めるまで 2 時間ほどかかる",
          "**朝食**: 軽めに(満腹は眠気を招く)。バナナ・ヨーグルトなどで素早くエネルギー補給",
          "**カフェイン**: コーヒーや緑茶を 1 杯。試験開始 30〜60 分前が効きやすい",
          "**会場到着**: 試験開始 30 分前を目安に。早めに着いて受験票確認・トイレ・深呼吸の時間を確保",
        ],
      },
      { type: "h3", text: "試験中の戦略" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**全問にざっと目を通す**: 開始直後 1〜2 分で全体を眺め、「易しい問題」「時間がかかる問題」をざっくり把握",
          "**易しい問題から解く**: 後半の難問に時間を奪われて前半を取りこぼすのが最悪パターン",
          "**1 問あたりの時間配分**: CBT 90 分・30 問なら 1 問 3 分が目安。3 分超えたら **マークだけして次へ**",
          "**マークシート(ペーパー試験の場合)**: 解いた問題は必ずその場でマーク。最後にまとめてマークすると順番がズレる事故が起きる",
          "**最後 5 分**: 全問マークされているか・解答用紙の名前・受験番号を確認",
        ],
      },
      { type: "h3", text: "試験後 ─ 結果待ちの 1 週間" },
      {
        type: "p",
        text: "CBT は **多くの場合即日結果が出ます**。ペーパー試験は 1 か月以上かかることも。結果を待つ間にやるべきことは「**自己採点しない**」こと。「あの問題ミスったかも...」と気にしても結果は変わらないので、忘れて次の準備(次の級・次の試験)に移るのが精神衛生上ベスト。",
      },
      {
        type: "p",
        text: "本番は **「努力の証明」** ではなく **「いまの実力を素直に出す場」**。リラックスして、これまでの学習を信じて挑んでください。",
      },
    ],
  },
  {
    slug: "self-study-traps",
    title: "統計の独学が続かない 5 つの罠と対策 ─ 挫折せずに合格までたどり着くために",
    description:
      "統計学の独学はモチベーション維持が難しい。どこでつまずきやすいか・どう乗り越えるかを 5 つの典型パターンで整理し、合格までたどり着くための具体的な対策をまとめます。",
    publishedAt: "2026-04-28",
    category: "勉強法",
    tldr: [
      "5 つの罠: 「完璧主義」「教材の山積み」「数式アレルギー」「進捗の見えなさ」「孤独」",
      "対策の核は「6 割の理解で先に進む」「目に見える進捗(チェックリスト)」「アウトプット(誰かに説明)」。",
      "本サイトの教科書 → 公式集 → 演習の循環で、自分の進捗を可視化しやすくしている。",
    ],
    body: [
      {
        type: "p",
        text: "「統計検定の勉強を始めたけど、3 週間で挫折した」 ─ これは本当によく聞く話です。本記事では、独学者が陥りがちな **5 つの罠** とその対策を、現実的なアドバイスとしてまとめます。",
      },
      { type: "h3", text: "罠 1 ─ 完璧主義(全部わかってから次に進みたい)" },
      {
        type: "p",
        text: "「この章の例題が完璧に解けないと先に進めない」と思ってしまうと、教科書の前半で時間切れになります。統計学は **後の章を学んでから前の章が分かる** ことが多い分野(中心極限定理を学んでから「なぜ標本サイズが大事か」が腑に落ちる、など)。",
      },
      {
        type: "def",
        title: "対策",
        body: "**「6 割の理解で先に進む」をルール化**。1 周目はざっくり、2 周目で深く、3 周目で完璧 ─ という階段方式。最初から 100% を目指さない。",
      },
      { type: "h3", text: "罠 2 ─ 教材の山積み" },
      {
        type: "p",
        text: "「これも良さそう、あれも評判いい」と教材を増やしてしまい、結局どれも完了しない。書店やネットには無数の統計本があり、選び始めると終わりません。",
      },
      {
        type: "def",
        title: "対策",
        body: "**メイン教材を 1 冊に絞る**。本サイトの[公式集ページ末尾](/formulas/grade-2)に各級の推奨書籍をまとめているので、そこから 1 冊選んで完走することが先決。「もっと深く」の欲求はその後で対処。",
      },
      { type: "h3", text: "罠 3 ─ 数式アレルギー" },
      {
        type: "p",
        text: "「Σ や ∫ が出てくるとフリーズする」 ─ これは最大の障壁。でも、統計検定の数式は **見た目より単純** なものが多いです。",
      },
      {
        type: "def",
        title: "対策",
        body: "**「読む」と「書く」を分ける**。最初は式を **眺める** だけでよい。「Σ が出てきたら『全部足す』と読み替える」「$\\dfrac{1}{n}$ は『平均化』の合図」など、**式の意味を一言で言える** ようになれば 8 割は理解できている。本サイトの[数学基礎](/math/textbook)で Σ・指数・対数の感覚を養うのが近道。",
      },
      { type: "h3", text: "罠 4 ─ 進捗が見えない" },
      {
        type: "p",
        text: "「どれくらい進んだのか・何が残っているのか分からない」と、モチベーションが続きません。",
      },
      {
        type: "def",
        title: "対策",
        body: "**進捗を可視化する**。チェックリスト・カレンダーアプリ・進捗管理ノートなど、形式は何でも OK。本サイトの演習問題は **localStorage で前回スコアを記録** するので、再訪時に「前回 12/15 問正解 ─ 3 日前」が見える設計。これも進捗実感の道具として使えます。",
      },
      { type: "h3", text: "罠 5 ─ 孤独(相談相手がいない)" },
      {
        type: "p",
        text: "独学最大の敵は孤独。「これで合っているのか?」を確認できる相手がいないと、不安が積もります。",
      },
      {
        type: "def",
        title: "対策",
        body: "**「説明する」相手を作る**。SNS で勉強記録(#統計検定 など)・X でアウトプット・身近な人に教える ─ 何でも OK。**説明しようとすると、自分の理解の穴が見える**。これだけで効果があります。\n\n本サイトの[演習問題](/quiz/grade-2)で X シェア機能を提供しているのも、勉強仲間の輪を広げる小さな入口として。",
      },
      { type: "h3", text: "コアな考え方 ─ 「最低限を守る」" },
      {
        type: "p",
        text: "独学を続けるコツは「気合い」よりも「**仕組み**」。具体的には:",
      },
      {
        type: "list",
        style: "number",
        items: [
          "**毎日同じ時間に学習**(週末 2 時間より、平日 30 分 × 5 日のほうが効く)",
          "**最初は 6 割で OK** と自分に許可する",
          "**1 か月ごとの達成感**(章を 1 つ終わらせる、過去問 1 回ぶん解く、など)",
          "**結果が出なくても継続**(統計は 3 か月後にじわじわ理解が追いついてくる)",
        ],
      },
      {
        type: "p",
        text: "統計学は **積み重ねの学問**。短距離走ではなく、マラソン。気持ちよく走り続けられるペースを見つけることが、合格への一番の近道です。",
      },
    ],
  },
  {
    slug: "compare-data-certs",
    title: "統計検定 vs G検定 vs データサイエンティスト検定 ─ 3 つのデータ系資格を徹底比較",
    description:
      "データ職を目指すなら定番の 3 つの資格 ─ 統計検定・G検定・データサイエンティスト検定。位置付け・難易度・実用性をフラットに比較し、目的別に向いている資格を整理します。",
    publishedAt: "2026-04-28",
    category: "キャリア",
    tldr: [
      "**統計検定** = 統計学の理論力(2 級が実務基準)。**G検定** = AI/ML の網羅知識(検定式)。**DS検定** = データ実務全般(リテラシー)。",
      "順番のおすすめは「目的による」が、独学者には統計検定 2 級 → DS検定リテラシー → G検定 が王道。",
      "1 つだけ取るなら、データ職を目指す方は **統計検定 2 級** が長期的にもっとも役立つ。",
    ],
    body: [
      {
        type: "p",
        text: "データ職を志す人がぶつかる問い ─「資格を取るなら、どれを選ぶ?」。代表的な 3 つ ─ 統計検定 2 級・G検定・データサイエンティスト検定 ─ をフラットに比較し、目的別に向いている資格を整理します。",
      },
      { type: "h3", text: "3 つの資格の位置付け" },
      {
        type: "ex",
        title: "比較概要",
        body: "| 観点 | 統計検定 2 級 | G検定 | DS検定(リテラシー) |\n|---|---|---|---|\n| **主催** | 日本統計学会 | 日本ディープラーニング協会(JDLA) | データサイエンティスト協会 |\n| **主眼** | 統計理論・推定検定回帰 | AI / ML の概念・歴史・倫理 | データ実務リテラシー全般 |\n| **対象範囲** | 数式・計算 | 用語・概念知識 | 実務・ビジネス・統計・ML 横断 |\n| **試験形式** | CBT 選択式・計算問題 | 自宅 PC 受験・選択式・大量問題 | CBT 選択式 |\n| **数学の必要性** | 必須(高校数学+α) | ほぼ不要 | 標準的 |\n| **理論の深さ** | 深い | 浅く広く | 中程度 |\n| **実務直結度** | 中(基礎理論) | 中(AI 概念理解) | 高(リテラシー) |",
      },
      { type: "h3", text: "統計検定 2 級 ─ データ分析の理論的基盤" },
      {
        type: "p",
        text: "**強み**: 推定・検定・回帰など、データ分析の **実務でいちばんよく使う技法** の理論を体系的に学べる。長期的に最も陳腐化しにくい知識。\n\n**弱み**: 計算問題が中心で、ビジネス応用や AI/ML には直接触れない。受験勉強に時間がかかる(目安 200 時間)。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**向いている人**: データ分析・研究職・統計を本気で身につけたい人",
          "**カバーする内容**: 確率分布・推定・仮説検定・単回帰",
          "**学習時間目安**: 100 〜 200 時間",
        ],
      },
      { type: "h3", text: "G検定 ─ AI / ML の網羅的知識" },
      {
        type: "p",
        text: "**強み**: AI / 機械学習の用語・歴史・主要手法・倫理問題まで、**広く浅く** 押さえられる。検定試験としても比較的取りやすく、AI ブームの追い風で履歴書映えする。\n\n**弱み**: 「**深く理解した**」とは言えない設計(短時間で大量の問題)。実装力は別途必要。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**向いている人**: AI/ML 業界へのキャリアチェンジを考える人、AI プロジェクトに関わる非技術職",
          "**カバーする内容**: 機械学習基礎・ディープラーニング・倫理・法律",
          "**学習時間目安**: 30 〜 60 時間",
        ],
      },
      { type: "h3", text: "データサイエンティスト検定(リテラシー) ─ データ実務の全方位" },
      {
        type: "p",
        text: "**強み**: 統計・機械学習・ビジネス理解・データエンジニアリングまで、**データ実務に必要な領域を一通り** カバー。実務直結度が高い。\n\n**弱み**: 各領域の **深さは浅め**。専門性のアピールにはならない(リテラシーレベル)。",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**向いている人**: データ職への転職・社内のデータ人材育成・他職種からの足掛かり",
          "**カバーする内容**: データサイエンス力・データエンジニアリング力・ビジネス力の 3 軸",
          "**学習時間目安**: 50 〜 100 時間",
        ],
      },
      { type: "h3", text: "目的別おすすめ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**研究・学術志向** → 統計検定 2 級 → 準 1 級 → 1 級",
          "**AI 業界に転職したい** → G検定 → DS検定(必要に応じて)",
          "**社内データ人材として育ちたい** → DS検定 → 統計検定 2 級",
          "**データ分析を本気でやりたい** → 統計検定 2 級 → DS検定 → G検定 の順で全部",
        ],
      },
      { type: "h3", text: "1 つだけなら統計検定 2 級" },
      {
        type: "p",
        text: "「最初に 1 つだけ」なら、私のおすすめは **統計検定 2 級** です。理由は 3 つ:",
      },
      {
        type: "list",
        style: "number",
        items: [
          "**陳腐化しない知識**: 統計の理論は 100 年以上変わらない基礎",
          "**応用範囲が広い**: ML・データ分析・社会調査・実験設計 ─ どこでも使う",
          "**他資格の足腰になる**: 統計検定の知識があれば、G検定・DS検定の統計パートが楽になる",
        ],
      },
      { type: "h3", text: "資格より大事なこと" },
      {
        type: "p",
        text: "最後に大事な前置き: **資格そのものより、勉強の過程で身につく実力** が本質です。資格はゴールではなく「学習のきっかけ」「自分への締切設定」と考えると、無理なく続けられます。本サイトでは [統計検定の各級教科書](/textbook/grade-2) と [演習問題](/quiz/grade-2) で、資格に向けた段階的な学習をサポートしています。",
      },
    ],
  },
);

blogPosts.push({
  slug: "grade-2-last-month-prep",
  title: "統計検定 2級 直前 1 ヶ月の対策プラン ─ 6 月試験で受かるためにやること",
  description:
    "統計検定 2 級の本番まで 1 ヶ月。残された時間で合格率を最大化するための優先順位・分野別の押さえどころ・直前 1 週間の過ごし方を、合格者目線でまとめました。",
  publishedAt: "2026-04-27",
  category: "勉強法",
  tldr: [
    "直前 1 ヶ月は新規範囲の追加より、過去問演習 + 苦手分野の補強に時間を集中させる。",
    "推定・検定・回帰の 3 分野が 70% 以上の配点。ここを取れれば合格圏。",
    "直前 1 週間は新しい問題に手を出さず、計算ミスのパターン分析と暗記項目の総点検に絞る。",
  ],
  body: [
    {
      type: "p",
      text: "統計検定 2 級は、6 月試験を目指す方にとって 4 月後半からの 1 ヶ月が **合否を分ける本番期** です。本記事では、限られた時間で合格率を最大化するための **優先順位の付け方・分野別の押さえどころ・直前 1 週間の過ごし方** を、合格者目線でまとめました。",
    },
    { type: "h3", text: "直前 1 ヶ月の 3 つの鉄則" },
    {
      type: "list",
      style: "number",
      items: [
        "**新規範囲を増やすな** ─ ここから新しい単元に手を出すと中途半端で終わる。既習範囲の精度を上げる。",
        "**過去問は最低 5 年分** ─ 出題傾向の体感、時間配分の練習、自分の弱点把握の 3 点で必須。",
        "**毎日触れる** ─ 1 日 30 分でもいいので継続。3 日空けると感覚が鈍る。",
      ],
    },
    { type: "h3", text: "配点を直視する ─ どこに時間を使うか" },
    {
      type: "p",
      text: "統計検定 2 級の出題は概ね以下の比率です(年度差あり)。配点の高い分野に時間を使うのが合理的です。",
    },
    {
      type: "list",
      style: "bullet",
      items: [
        "**推定・検定**(約 40%): t 検定・カイ二乗検定・分散分析・区間推定。最頻出。",
        "**回帰分析**(約 20%): 単回帰・重回帰・係数の検定・決定係数 R²・残差分析。",
        "**確率分布**(約 20%): 正規分布・二項分布・ポアソン分布・期待値・分散の計算。",
        "**記述統計**(約 10%): 代表値・分散・相関係数・標準化。基礎の取りこぼしに注意。",
        "**実験計画・標本抽出**(約 10%): やや細かい知識問題。優先度低。",
      ],
    },
    {
      type: "p",
      text: "**推定・検定 + 回帰 = 60% を取れれば合格圏(60〜70点が合格ライン)**。逆に言えば、ここを落とすと厳しい。残り 1 ヶ月はこの 2 分野の精度に時間を最も投資すべきです。",
    },
    { type: "h3", text: "週ごとの推奨スケジュール" },
    { type: "h4", text: "第 1 週 ─ 弱点の洗い出し" },
    {
      type: "list",
      style: "bullet",
      items: [
        "過去問 1 〜 2 年分を本番形式で解く(時間も計る)",
        "間違えた問題のパターンを分類:**知識不足 / 計算ミス / 読解ミス**",
        "知識不足 → 該当章を教科書で復習。計算・読解 → 解き方をパターン化",
      ],
    },
    { type: "h4", text: "第 2 週 ─ 弱点分野の集中対策" },
    {
      type: "list",
      style: "bullet",
      items: [
        "第 1 週で見つかった弱点分野(例:仮説検定の手順、回帰係数の検定)を [統計検定 2級 教科書](/textbook/grade-2) で再学習",
        "[2級 公式集](/formulas/grade-2) で重要公式を暗記カード化",
        "[2級 演習問題](/quiz/grade-2) で類題を解く",
      ],
    },
    { type: "h4", text: "第 3 週 ─ 過去問演習を高速回転" },
    {
      type: "list",
      style: "bullet",
      items: [
        "過去問 3 〜 5 年分を解く(時間配分の練習)",
        "1 問 3 分が目安。10 分悩む問題は飛ばす癖をつける",
        "**間違えた問題は 3 日後にもう一度** 解いて定着確認",
      ],
    },
    { type: "h4", text: "第 4 週(本番直前) ─ 仕上げと総点検" },
    {
      type: "list",
      style: "bullet",
      items: [
        "新しい問題集には手を出さない。**間違えた問題の再演習** に絞る",
        "[公式チートシート](/cheatsheet) を 1 枚に出力して、移動中など隙間時間で眺める",
        "計算機の操作・正規分布表の見方を確実に",
      ],
    },
    { type: "h3", text: "分野別・直前期に必ず押さえるべき項目" },
    { type: "h4", text: "推定・検定" },
    {
      type: "list",
      style: "bullet",
      items: [
        "**両側検定 vs 片側検定** の使い分け(p 値の出し方が変わる)",
        "**自由度の計算**(t 分布:n-1、カイ二乗:k-1 など)",
        "**第一種・第二種の誤り** の意味(α・β・検出力)",
        "**信頼区間と検定の関係**(95% 信頼区間に 0 を含む = 有意でない)",
      ],
    },
    { type: "h4", text: "回帰分析" },
    {
      type: "list",
      style: "bullet",
      items: [
        "**最小二乗法の式**($\\hat\\beta = (X^T X)^{-1} X^T y$)を覚える必要はないが、解釈は分かるように",
        "**決定係数 R²** = 説明できる分散の割合",
        "**回帰係数の検定** = t 検定、係数 / 標準誤差",
        "**残差プロット** で等分散性・独立性・正規性を確認",
      ],
    },
    { type: "h4", text: "確率分布" },
    {
      type: "list",
      style: "bullet",
      items: [
        "**正規分布の標準化** $Z = (X - \\mu)/\\sigma$",
        "**二項分布の期待値**($np$)・分散($np(1-p)$)",
        "**ポアソン分布**:期待値 = 分散 = $\\lambda$",
        "**正規分布表の読み方**(両側・片側)",
      ],
    },
    { type: "h3", text: "計算ミスを減らす 5 つのコツ" },
    {
      type: "list",
      style: "number",
      items: [
        "**式を最初に書き出す** ─ いきなり数値を代入しない",
        "**単位・桁数を意識する** ─ 異常な値が出たら式を疑う",
        "**有効数字は 4 桁が目安** ─ 過度に丸めない",
        "**標準偏差と分散を取り違えない** ─ 答えに $\\sqrt{}$ が必要かチェック",
        "**分母 = 0 にならないか** ─ サンプル数や標準誤差で確認",
      ],
    },
    { type: "h3", text: "直前 1 週間の過ごし方" },
    {
      type: "p",
      text: "ラスト 1 週間は **新しい問題に手を出さず、これまでに間違えた問題の再演習に絞る** のが定石です。新しい問題で「解けない」体験をすると、本番直前に自信を失います。",
    },
    {
      type: "list",
      style: "bullet",
      items: [
        "**月〜水**:間違えた問題を分野別に再演習",
        "**木〜金**:[公式チートシート](/cheatsheet) で重要公式の暗記確認",
        "**土**:過去問 1 年分を本番と同じ時間で実施(時間配分の最終チェック)",
        "**日(本番前日)**:7 時間以上の睡眠。新しい勉強はしない",
      ],
    },
    {
      type: "p",
      text: "当日の持ち物・心構えについては別記事 [統計検定 当日の持ち物・心構えガイド](/blog/exam-day-guide) で詳しくまとめています。",
    },
    { type: "h3", text: "まとめ" },
    {
      type: "p",
      text: "統計検定 2 級の直前 1 ヶ月で大切なのは、**新規範囲を増やさず・配点の高い分野に集中・過去問で実戦感覚を養う** の 3 点です。残り 4 週間あれば、合格ラインに乗せることは十分可能。今日から計画的に進めて、6 月の試験で合格を勝ち取りましょう。",
    },
    {
      type: "p",
      text: "学習途中で迷ったら、[統計検定 2級 教科書](/textbook/grade-2) で該当章を復習し、[2級 演習問題](/quiz/grade-2) で類題を解いて補強できます。最後の追い込み、応援しています。",
    },
  ],
});

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
