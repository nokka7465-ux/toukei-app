/** Roadmap data for each certification page (`/certs/[slug]/roadmap`). */

export type CertRoadmap = {
  slug: string;
  title: string;
  organizer: string;
  hours: string;
  months: string;
  prerequisites: string;
  passCriteria: string;
  steps: Array<{
    week: string;
    title: string;
    description: string;
    links: Array<{ href: string; label: string }>;
  }>;
  textbookHref: string;
  quizHref: string;
  examInfoAnchor?: string;
};

export const certRoadmaps: Record<string, CertRoadmap> = {
  "g-test": {
    slug: "g-test",
    title: "G 検定 学習ロードマップ",
    organizer: "JDLA(日本ディープラーニング協会)",
    hours: "60〜120 時間",
    months: "2〜4 ヶ月",
    prerequisites: "なし(高校レベルの数学があれば理解が早い)",
    passCriteria: "正答率 約 70% 以上(年により変動)",
    steps: [
      {
        week: "Week 1〜2",
        title: "AI ・ ML の歴史と概念",
        description:
          "機械学習・ディープラーニングの全体像と歴史的背景を掴む。専門用語の意味だけでなく『なぜそう発展したか』の流れを抑える。",
        links: [
          { href: "/certs/g-test/textbook", label: "G 検定 教科書(章 1-2)" },
          { href: "/glossary", label: "用語集" },
        ],
      },
      {
        week: "Week 3〜5",
        title: "ニューラルネットの基礎と代表手法",
        description:
          "順伝播・誤差逆伝播・代表的なアーキテクチャ(CNN・RNN・Transformer)を概念レベルで理解。",
        links: [
          { href: "/certs/g-test/textbook", label: "G 検定 教科書(章 3-5)" },
          { href: "/figures", label: "図解で学ぶ統計" },
          { href: "/blog/transformer-math", label: "Transformer の数学" },
        ],
      },
      {
        week: "Week 6〜8",
        title: "応用領域と AI 倫理",
        description:
          "画像 ・ 自然言語 ・ 強化学習の応用例。AI 倫理・著作権・ガイドラインなど周辺知識。",
        links: [
          { href: "/certs/g-test/textbook", label: "G 検定 教科書(章 6-8)" },
          { href: "/blog/ai-engineer-roadmap", label: "AIエンジニア・ロードマップ" },
        ],
      },
      {
        week: "Week 9〜10",
        title: "演習 + 模擬試験",
        description:
          "演習問題で範囲を一周。間違えた問題は復習リストへ。模擬試験で時間配分を確認。",
        links: [
          { href: "/certs/g-test/quiz", label: "G 検定 演習問題" },
          { href: "/practice", label: "ランダム練習" },
          { href: "/review", label: "苦手問題の復習" },
        ],
      },
    ],
    textbookHref: "/certs/g-test/textbook",
    quizHref: "/certs/g-test/quiz",
    examInfoAnchor: "/exam-info#g-test",
  },
  "e-shikaku": {
    slug: "e-shikaku",
    title: "E 資格 学習ロードマップ",
    organizer: "JDLA(日本ディープラーニング協会)",
    hours: "200〜400 時間 + 認定講座 50〜100 時間",
    months: "6〜12 ヶ月",
    prerequisites: "Python 基礎 ・ 線形代数 ・ 微分積分 ・ 確率統計(統計検定 2 級レベル)",
    passCriteria: "正答率 約 60〜70%(配点は範囲別)",
    steps: [
      {
        week: "Month 1〜2",
        title: "応用数学 ・ Phase 1〜2 復習",
        description:
          "線形代数・微分積分・確率統計の必要部分を完璧に。式が読めない状態だと先に進めない。",
        links: [
          { href: "/math/textbook", label: "Phase 1 数学基礎" },
          { href: "/blog/linear-algebra-for-ai", label: "AI のための線形代数" },
          { href: "/textbook/grade-2", label: "統計検定 2 級 教科書" },
        ],
      },
      {
        week: "Month 3〜4",
        title: "認定講座を受講(必須)",
        description:
          "JDLA 認定講座の受講が受験の前提条件。ここで実装まで含めた基礎が固まる。",
        links: [
          { href: "/exam-info", label: "認定講座一覧 ・ 受験情報" },
        ],
      },
      {
        week: "Month 5〜7",
        title: "DL の理論と実装",
        description:
          "順伝播 ・ 誤差逆伝播 ・ 最適化 ・ 正則化 ・ CNN ・ RNN ・ Transformer を数式とコードの両面で。",
        links: [
          { href: "/certs/e-shikaku/textbook", label: "E 資格 教科書" },
          { href: "/blog/transformer-math", label: "Transformer の数学" },
          { href: "/blog/sklearn-introduction", label: "scikit-learn 入門" },
          { href: "/blog/bayesian-optimization", label: "ベイズ最適化" },
        ],
      },
      {
        week: "Month 8〜9",
        title: "応用 ・ 強化学習 ・ 生成モデル",
        description:
          "GAN ・ VAE ・ Diffusion ・ 強化学習(DQN ・ PPO)。最新トピックも一通り。",
        links: [
          { href: "/certs/e-shikaku/textbook", label: "E 資格 教科書(後半)" },
          { href: "/figures", label: "図解で学ぶ統計" },
        ],
      },
      {
        week: "Month 10〜12",
        title: "演習 + 模擬試験 + 過去問",
        description:
          "全範囲を演習で一周。数式 ・ コード片の穴埋めに慣れる。模擬で時間感覚を作る。",
        links: [
          { href: "/certs/e-shikaku/quiz", label: "E 資格 演習問題" },
          { href: "/practice", label: "ランダム練習" },
          { href: "/review", label: "苦手問題の復習" },
        ],
      },
    ],
    textbookHref: "/certs/e-shikaku/textbook",
    quizHref: "/certs/e-shikaku/quiz",
  },
  "ds-literacy": {
    slug: "ds-literacy",
    title: "DS 検定 リテラシー 学習ロードマップ",
    organizer: "データサイエンティスト協会",
    hours: "40〜80 時間",
    months: "1〜3 ヶ月",
    prerequisites: "基礎的な数学 + Excel / SQL 操作経験があると楽",
    passCriteria: "DS 力 / DE 力 / ビジネス力 の 3 軸で評価",
    steps: [
      {
        week: "Week 1〜2",
        title: "DS 力(統計 ・ ML)",
        description:
          "記述統計 ・ 確率分布 ・ 仮説検定 ・ 回帰 ・ 機械学習の基本。統計検定 3〜2 級と重なる範囲。",
        links: [
          { href: "/textbook/grade-3", label: "統計検定 3 級 教科書" },
          { href: "/blog/ai-stats-cheatsheet", label: "AIエンジニア統計チートシート" },
        ],
      },
      {
        week: "Week 3〜4",
        title: "DE 力(データ加工 ・ SQL)",
        description:
          "SQL の基本 ・ データクレンジング ・ ETL の概念。実務で頻出のパターン。",
        links: [
          { href: "/blog/pandas-tips-for-ml", label: "Pandas 実務 Tips" },
          { href: "/certs/ds-literacy/textbook", label: "DS 検定 教科書" },
        ],
      },
      {
        week: "Week 5〜6",
        title: "ビジネス力(プロジェクト ・ 倫理)",
        description:
          "課題設定 ・ KPI 設計 ・ AI 倫理 ・ プライバシー。データ駆動意思決定のフレームワーク。",
        links: [
          { href: "/certs/ds-literacy/textbook", label: "DS 検定 教科書(ビジネス章)" },
        ],
      },
      {
        week: "Week 7〜8",
        title: "演習 + 模擬",
        description:
          "3 軸の演習をバランスよく。模試で時間配分を確認。",
        links: [
          { href: "/certs/ds-literacy/quiz", label: "DS 検定 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/ds-literacy/textbook",
    quizHref: "/certs/ds-literacy/quiz",
  },
  "ds-basic": {
    slug: "ds-basic",
    title: "統計検定 DS 基礎 学習ロードマップ",
    organizer: "日本統計学会",
    hours: "30〜60 時間",
    months: "1〜2 ヶ月",
    prerequisites: "Excel の基本操作 ・ 中学数学",
    passCriteria: "Excel での実データ分析の正答率",
    steps: [
      {
        week: "Week 1",
        title: "記述統計と Excel 操作",
        description:
          "平均 ・ 分散 ・ 標準偏差を Excel の関数で計算できるように。グラフ描画も。",
        links: [
          { href: "/certs/ds-basic/textbook", label: "DS 基礎 教科書(章 1-2)" },
          { href: "/textbook/grade-4", label: "統計検定 4 級 教科書" },
        ],
      },
      {
        week: "Week 2〜3",
        title: "推定 ・ 検定 ・ 回帰の基本",
        description:
          "信頼区間 ・ t 検定 ・ 単回帰を Excel の分析ツールで実行 ・ 解釈できるように。",
        links: [
          { href: "/certs/ds-basic/textbook", label: "DS 基礎 教科書(章 3-4)" },
          { href: "/blog/p-value-misunderstandings", label: "p 値の誤解 5 選" },
        ],
      },
      {
        week: "Week 4",
        title: "演習 + 模擬",
        description:
          "実データ問題を解く ・ 採点 ・ 振り返り。Excel の操作スピードを上げる。",
        links: [
          { href: "/certs/ds-basic/quiz", label: "DS 基礎 演習問題" },
          { href: "/tools", label: "統計計算ツール集" },
        ],
      },
    ],
    textbookHref: "/certs/ds-basic/textbook",
    quizHref: "/certs/ds-basic/quiz",
  },
  survey: {
    slug: "survey",
    title: "統計調査士 学習ロードマップ",
    organizer: "日本統計学会",
    hours: "40〜80 時間",
    months: "2〜3 ヶ月",
    prerequisites: "統計検定 4〜3 級レベル",
    passCriteria: "標本設計 ・ 公的統計の知識",
    steps: [
      {
        week: "Week 1〜3",
        title: "標本設計と無作為抽出",
        description:
          "単純無作為 ・ 層化抽出 ・ クラスター抽出 ・ 二段抽出の使い分け。",
        links: [
          { href: "/certs/survey/textbook", label: "統計調査士 教科書(章 1-3)" },
        ],
      },
      {
        week: "Week 4〜6",
        title: "公的統計の体系",
        description:
          "国勢調査 ・ 経済統計 ・ 人口動態など、日本の公的統計の構造を理解。",
        links: [
          { href: "/certs/survey/textbook", label: "統計調査士 教科書(章 4-6)" },
        ],
      },
      {
        week: "Week 7〜8",
        title: "演習 + 模擬",
        description: "演習問題 ・ 過去問で出題傾向を掴む。",
        links: [
          { href: "/certs/survey/quiz", label: "統計調査士 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/survey/textbook",
    quizHref: "/certs/survey/quiz",
  },
  "survey-specialist": {
    slug: "survey-specialist",
    title: "専門統計調査士 学習ロードマップ",
    organizer: "日本統計学会",
    hours: "100〜200 時間",
    months: "4〜6 ヶ月",
    prerequisites: "統計調査士 + 統計検定 2 級",
    passCriteria: "応用標本設計 ・ 公的統計の高度利用",
    steps: [
      {
        week: "Month 1",
        title: "標本誤差と分散推定の理論",
        description:
          "標本平均の分散 ・ ジャックナイフ ・ ブートストラップ ・ Taylor 展開法。",
        links: [
          { href: "/certs/survey-specialist/textbook", label: "専門統計調査士 教科書(章 1-2)" },
          { href: "/textbook/grade-2", label: "統計検定 2 級 教科書" },
        ],
      },
      {
        week: "Month 2",
        title: "欠測値と多重代入法",
        description:
          "MCAR / MAR / MNAR の区別 ・ 単一代入の限界 ・ 多重代入と Rubin's rules。",
        links: [
          { href: "/certs/survey-specialist/textbook", label: "専門統計調査士 教科書(章 3-4)" },
        ],
      },
      {
        week: "Month 3",
        title: "ウェイト調整と非標本誤差",
        description:
          "事後層化 ・ レイキング ・ キャリブレーション ・ 無回答バイアス対策。",
        links: [
          { href: "/certs/survey-specialist/textbook", label: "専門統計調査士 教科書(章 5-6)" },
        ],
      },
      {
        week: "Month 4〜5",
        title: "公的統計の高度利用",
        description:
          "オーダーメード集計 ・ 匿名データ ・ 政府統計の二次利用。",
        links: [
          { href: "/certs/survey-specialist/textbook", label: "専門統計調査士 教科書(章 7-8)" },
        ],
      },
      {
        week: "Month 6",
        title: "演習 + 模擬 + 過去問",
        description: "出題範囲を一周して時間配分を確認。",
        links: [
          { href: "/certs/survey-specialist/quiz", label: "専門統計調査士 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/survey-specialist/textbook",
    quizHref: "/certs/survey-specialist/quiz",
  },
  "qc-kentei": {
    slug: "qc-kentei",
    title: "QC 検定(2-3 級) 学習ロードマップ",
    organizer: "日本規格協会",
    hours: "40〜100 時間",
    months: "2〜4 ヶ月",
    prerequisites: "中学数学(2 級は確率統計の基礎)",
    passCriteria: "総合得点 70% 以上、各分野で足切りあり",
    steps: [
      {
        week: "Week 1〜3",
        title: "QC 7 つ道具",
        description:
          "パレート図 ・ 特性要因図 ・ ヒストグラム ・ 散布図 ・ 管理図 ・ 層別 ・ チェックシート。",
        links: [
          { href: "/certs/qc-kentei/textbook", label: "QC 検定 教科書(章 1-2)" },
          { href: "/figures", label: "図解で学ぶ統計" },
        ],
      },
      {
        week: "Week 4〜6",
        title: "管理図と工程能力",
        description:
          "Shewhart 管理図 ・ X-bar R 管理図 ・ p 管理図 ・ 工程能力指数 Cp ・ Cpk。",
        links: [
          { href: "/certs/qc-kentei/textbook", label: "QC 検定 教科書(章 3-4)" },
        ],
      },
      {
        week: "Week 7〜9",
        title: "抜取検査と仮説検定",
        description:
          "OC 曲線 ・ AQL ・ LTPD ・ 1 標本 / 2 標本検定 ・ 分散分析の基礎。",
        links: [
          { href: "/certs/qc-kentei/textbook", label: "QC 検定 教科書(章 5-6)" },
          { href: "/blog/p-value-misunderstandings", label: "p 値の誤解 5 選" },
        ],
      },
      {
        week: "Week 10〜12",
        title: "演習 + 過去問",
        description: "計算問題と論述問題のバランスで対策。",
        links: [
          { href: "/certs/qc-kentei/quiz", label: "QC 検定 演習問題" },
          { href: "/tools", label: "統計計算ツール集" },
        ],
      },
    ],
    textbookHref: "/certs/qc-kentei/textbook",
    quizHref: "/certs/qc-kentei/quiz",
  },
  "genai-passport": {
    slug: "genai-passport",
    title: "生成AIパスポート 学習ロードマップ",
    organizer: "GUGA(生成AI活用普及協会)",
    hours: "30〜50 時間",
    months: "1〜2 ヶ月",
    prerequisites: "なし(ChatGPT などを触ったことがあれば理解が早い)",
    passCriteria: "正答率 約 70% 以上(60 問 / 60 分)",
    steps: [
      {
        week: "Week 1",
        title: "AI / ML / DL の基礎用語",
        description:
          "AI ⊃ ML ⊃ DL ⊃ 生成 AI の入れ子構造、3 つの学習スタイル、Transformer の概要を押さえる。",
        links: [
          { href: "/certs/genai-passport/textbook", label: "生成AIパスポート 教科書(章 1-2)" },
          { href: "/about-ai", label: "AIとは" },
          { href: "/glossary", label: "用語集" },
        ],
      },
      {
        week: "Week 2",
        title: "LLM ・ 拡散モデルの仕組み",
        description:
          "トークン・Attention・事前学習 → SFT → RLHF の 3 段階、拡散モデルの順方向 / 逆方向プロセスを概念で理解。",
        links: [
          { href: "/certs/genai-passport/textbook", label: "生成AIパスポート 教科書(章 4-5)" },
          { href: "/blog/transformer-math", label: "Transformer の数学" },
        ],
      },
      {
        week: "Week 3",
        title: "主要サービス + プロンプト",
        description:
          "ChatGPT / Claude / Gemini / Copilot を実際に触る。役割指定・Few-shot・CoT・RAG を演習。",
        links: [
          { href: "/certs/genai-passport/textbook", label: "生成AIパスポート 教科書(章 6-7)" },
        ],
      },
      {
        week: "Week 4",
        title: "リスク + 法律 + 倫理",
        description:
          "ハルシネーション・バイアス・情報漏洩、著作権 30 条の 4・EU AI Act・社内ガイドラインを整理。",
        links: [
          { href: "/certs/genai-passport/textbook", label: "生成AIパスポート 教科書(章 8-9)" },
        ],
      },
      {
        week: "Week 5",
        title: "演習 + 模擬試験",
        description:
          "演習問題で全範囲を一周。1 問 1 分のペース感覚を作り、苦手分野は教科書に戻って復習。",
        links: [
          { href: "/certs/genai-passport/quiz", label: "生成AIパスポート 演習問題" },
          { href: "/practice", label: "ランダム練習" },
          { href: "/review", label: "苦手問題の復習" },
        ],
      },
    ],
    textbookHref: "/certs/genai-passport/textbook",
    quizHref: "/certs/genai-passport/quiz",
  },
  "ds-expert": {
    slug: "ds-expert",
    title: "統計検定 DS エキスパート 学習ロードマップ",
    organizer: "日本統計学会",
    hours: "300〜500 時間",
    months: "6〜10 ヶ月",
    prerequisites: "統計検定 2 級・準 1 級 + Python(pandas/scikit-learn)操作経験",
    passCriteria: "おおむね 100 点満点中 60 点(参考)",
    steps: [
      {
        week: "Month 1",
        title: "統計理論の補強",
        description:
          "統計検定 2 級・準 1 級の取りこぼし範囲を補強。GLM ・ 多変量解析 ・ ブートストラップ ・ 多重検定の基礎まで。",
        links: [
          { href: "/certs/ds-expert/textbook", label: "DS エキスパート 教科書(章 1-3)" },
          { href: "/textbook/grade-2", label: "統計検定 2 級 教科書" },
          { href: "/textbook/grade-pre1", label: "統計検定 準 1 級 教科書" },
        ],
      },
      {
        week: "Month 2-3",
        title: "機械学習(scikit-learn)",
        description:
          "教師あり / 教師なし ・ 評価指標 ・ ハイパーパラメータ ・ Tree 系 ・ NN 概要。Jupyter で実機演習。",
        links: [
          { href: "/certs/ds-expert/textbook", label: "DS エキスパート 教科書(章 4-5)" },
          { href: "/blog/sklearn-introduction", label: "scikit-learn 入門" },
        ],
      },
      {
        week: "Month 4",
        title: "ベイズ + 時系列",
        description:
          "MCMC ・ 階層モデル ・ ARIMA ・ 状態空間。Stan / PyMC / statsmodels を一度は触る。",
        links: [
          { href: "/certs/ds-expert/textbook", label: "DS エキスパート 教科書(章 6-7)" },
        ],
      },
      {
        week: "Month 5",
        title: "因果推論",
        description:
          "DAG ・ 潜在結果 ・ DID ・ 傾向スコア ・ IV ・ RDD。設計の判断ができるレベルまで。",
        links: [
          { href: "/certs/ds-expert/textbook", label: "DS エキスパート 教科書(章 8)" },
          { href: "/causal-inference", label: "因果推論ハブ" },
        ],
      },
      {
        week: "Month 6",
        title: "DE + MLOps + 演習",
        description:
          "SQL 中級 ・ ETL/ELT ・ 特徴量ストア ・ ドリフト検出。仕上げに演習問題を一周。",
        links: [
          { href: "/certs/ds-expert/textbook", label: "DS エキスパート 教科書(章 9-10)" },
          { href: "/certs/ds-expert/quiz", label: "DS エキスパート 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/ds-expert/textbook",
    quizHref: "/certs/ds-expert/quiz",
  },
  "python-data": {
    slug: "python-data",
    title: "Python データ分析試験 学習ロードマップ",
    organizer: "PythonED(Python エンジニア育成推進協会)",
    hours: "60〜100 時間",
    months: "1〜2 ヶ月",
    prerequisites: "Python 文法の基本 ・ 中学〜高校レベルの数学",
    passCriteria: "正答率 70%(40 問中 28 問以上)",
    steps: [
      {
        week: "Week 1",
        title: "Python 文法 + 環境",
        description:
          "内包表記・lambda・可変デフォルト引数の罠・venv/pip/Jupyter を確認。",
        links: [
          { href: "/certs/python-data/textbook", label: "Python データ分析 教科書(章 1-2)" },
          { href: "/programming", label: "プログラミング入門" },
        ],
      },
      {
        week: "Week 2-3",
        title: "NumPy + pandas + Matplotlib",
        description:
          "ndarray の shape / axis / ブロードキャスト、loc/iloc、merge、subplot を Jupyter で動かしながら学習。",
        links: [
          { href: "/certs/python-data/textbook", label: "Python データ分析 教科書(章 3-5)" },
          { href: "/blog/pandas-tips-for-ml", label: "Pandas 実務 Tips" },
        ],
      },
      {
        week: "Week 4",
        title: "scikit-learn 基礎",
        description:
          "fit / predict / transform、Pipeline、GridSearchCV を実装パターンとして覚える。",
        links: [
          { href: "/certs/python-data/textbook", label: "Python データ分析 教科書(章 6)" },
          { href: "/blog/sklearn-introduction", label: "scikit-learn 入門" },
        ],
      },
      {
        week: "Week 5",
        title: "ML モデル + 評価",
        description:
          "回帰 / 分類 / クラスタリングの主要モデル、評価指標(分類 / 回帰)、CV を整理。",
        links: [
          { href: "/certs/python-data/textbook", label: "Python データ分析 教科書(章 7-8)" },
        ],
      },
      {
        week: "Week 6",
        title: "数学 + 応用 + 演習",
        description:
          "数学の基礎(内積・偏微分・正規分布)+ scikit-image / NLP の入口 + 演習。",
        links: [
          { href: "/certs/python-data/textbook", label: "Python データ分析 教科書(章 9-10)" },
          { href: "/certs/python-data/quiz", label: "Python データ分析 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/python-data/textbook",
    quizHref: "/certs/python-data/quiz",
  },
  "ai-implementation": {
    slug: "ai-implementation",
    title: "AI 実装検定 学習ロードマップ",
    organizer: "一般社団法人 エッジ AI 協会",
    hours: "100〜150 時間(A 級)",
    months: "2〜3 ヶ月",
    prerequisites: "Python 文法 ・ 高校〜大学初級の数学",
    passCriteria: "おおむね正答率 70%(A 級)",
    steps: [
      {
        week: "Week 1-2",
        title: "Python ・ NumPy ・ scikit-learn",
        description:
          "ブロードキャスト ・ shape ・ Estimator API。本サイトの[Python データ分析 教科書](/certs/python-data/textbook)で基礎固め。",
        links: [
          { href: "/certs/ai-implementation/textbook", label: "AI 実装検定 教科書(章 2-3)" },
          { href: "/certs/python-data/textbook", label: "Python データ分析 教科書" },
        ],
      },
      {
        week: "Week 3-4",
        title: "ML 評価 + ハイパーパラメータ",
        description:
          "F1 / ROC / PR-AUC / Optuna。Pipeline + GridSearchCV を実装パターンとして覚える。",
        links: [
          { href: "/certs/ai-implementation/textbook", label: "AI 実装検定 教科書(章 4)" },
        ],
      },
      {
        week: "Week 5-7",
        title: "ニューラルネット + PyTorch",
        description:
          "順伝播 / 逆伝播 / 活性化 / Adam / Batch Norm / 学習ループ 5 行をスラスラ書けるレベルに。",
        links: [
          { href: "/certs/ai-implementation/textbook", label: "AI 実装検定 教科書(章 5-6)" },
        ],
      },
      {
        week: "Week 8",
        title: "Keras + 主要モデル",
        description:
          "Sequential / Functional API、CNN / RNN / Transformer の構造と代表モデル。",
        links: [
          { href: "/certs/ai-implementation/textbook", label: "AI 実装検定 教科書(章 7-8)" },
        ],
      },
      {
        week: "Week 9",
        title: "エッジ AI + MLOps",
        description:
          "量子化 / 蒸留 / ONNX / TFLite / 特徴量ストア / ドリフト検出。",
        links: [
          { href: "/certs/ai-implementation/textbook", label: "AI 実装検定 教科書(章 9)" },
        ],
      },
      {
        week: "Week 10",
        title: "演習 + 模擬試験",
        description:
          "演習問題で範囲を一周。コード片の関数名を見て即座に判断できる感覚を作る。",
        links: [
          { href: "/certs/ai-implementation/quiz", label: "AI 実装検定 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/ai-implementation/textbook",
    quizHref: "/certs/ai-implementation/quiz",
  },
  "image-processing": {
    slug: "image-processing",
    title: "画像処理エンジニア検定 エキスパート 学習ロードマップ",
    organizer: "公益財団法人 CG-ARTS 協会",
    hours: "100〜150 時間",
    months: "3〜4 ヶ月",
    prerequisites: "高校〜大学初級の数学(行列 ・ 三角関数 ・ フーリエ)",
    passCriteria: "おおむね 70 点以上(参考)",
    steps: [
      {
        week: "Month 1 前半",
        title: "画像処理基礎 + 空間フィルタ",
        description:
          "標本化 / 量子化 / 色空間 / ガウシアン・メディアン・Sobel・Canny。",
        links: [
          { href: "/certs/image-processing/textbook", label: "画像処理 教科書(章 2-3)" },
        ],
      },
      {
        week: "Month 1 後半",
        title: "周波数解析 + 画像復元",
        description:
          "フーリエ変換 / DCT(JPEG) / ウェーブレット / Wiener フィルタ。",
        links: [
          { href: "/certs/image-processing/textbook", label: "画像処理 教科書(章 4-5)" },
        ],
      },
      {
        week: "Month 2 前半",
        title: "領域処理 + 特徴抽出",
        description:
          "モルフォロジ / ラベリング / SIFT / HOG / Bag-of-Features / SVM。",
        links: [
          { href: "/certs/image-processing/textbook", label: "画像処理 教科書(章 6-7)" },
        ],
      },
      {
        week: "Month 2 後半",
        title: "深層学習による画像認識",
        description:
          "CNN / ResNet / U-Net / YOLO / Vision Transformer / mAP / IoU。",
        links: [
          { href: "/certs/image-processing/textbook", label: "画像処理 教科書(章 8)" },
        ],
      },
      {
        week: "Month 3 前半",
        title: "3 次元視覚 + 動画",
        description:
          "ピンホール / ステレオ / SfM / オプティカルフロー / NeRF。",
        links: [
          { href: "/certs/image-processing/textbook", label: "画像処理 教科書(章 9)" },
        ],
      },
      {
        week: "Month 3 後半",
        title: "演習 + 過去問",
        description:
          "公式過去問と本サイトの演習問題で出題傾向を体感。",
        links: [
          { href: "/certs/image-processing/quiz", label: "画像処理 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/image-processing/textbook",
    quizHref: "/certs/image-processing/quiz",
  },
  "applied-info": {
    slug: "applied-info",
    title: "応用情報技術者試験 学習ロードマップ",
    organizer: "情報処理推進機構(IPA)",
    hours: "200〜500 時間",
    months: "4〜8 ヶ月",
    prerequisites: "基本情報技術者(FE)合格相当の知識があれば短期化",
    passCriteria: "午前 ・ 午後ともに 60 点以上(100 点満点)",
    steps: [
      {
        week: "Month 1",
        title: "アルゴリズム + データベース",
        description:
          "計算量 ・ ソート ・ 動的計画法 ・ グラフ ・ 正規化 ・ SQL ・ ACID。",
        links: [
          { href: "/certs/applied-info/textbook", label: "応用情報 教科書(章 2-3)" },
        ],
      },
      {
        week: "Month 2",
        title: "確率統計 + AI + ネットワーク",
        description:
          "条件付確率 ・ 正規分布 ・ 評価指標 ・ OSI ・ TCP/IP ・ 暗号化。",
        links: [
          { href: "/certs/applied-info/textbook", label: "応用情報 教科書(章 4-5)" },
          { href: "/certs/g-test/textbook", label: "G 検定 教科書(AI 用語補強)" },
        ],
      },
      {
        week: "Month 3",
        title: "システム設計 + ソフトウェア工学",
        description:
          "RAID ・ 仮想化 ・ クラウド ・ テスト ・ アジャイル ・ SOLID。",
        links: [
          { href: "/certs/applied-info/textbook", label: "応用情報 教科書(章 6-7)" },
        ],
      },
      {
        week: "Month 4",
        title: "PM + 経営戦略",
        description:
          "WBS ・ EVM ・ クリティカルパス ・ ITIL ・ SWOT ・ 5 forces ・ DX 3 段階。",
        links: [
          { href: "/certs/applied-info/textbook", label: "応用情報 教科書(章 8-9)" },
        ],
      },
      {
        week: "Month 5+",
        title: "午前 ・ 午後の過去問演習",
        description:
          "午前は直近 5 〜 10 年の過去問を 2 周。午後は『得意 4 問』を固定して反復演習。",
        links: [
          { href: "/certs/applied-info/quiz", label: "応用情報 演習問題" },
          { href: "/practice", label: "ランダム練習" },
          { href: "/review", label: "苦手問題の復習" },
        ],
      },
    ],
    textbookHref: "/certs/applied-info/textbook",
    quizHref: "/certs/applied-info/quiz",
  },
  "aws-ai-practitioner": {
    slug: "aws-ai-practitioner",
    title: "AWS AI Practitioner 学習ロードマップ",
    organizer: "Amazon Web Services(AWS)",
    hours: "40〜100 時間",
    months: "1〜2 ヶ月",
    prerequisites: "AWS 基礎(IAM/S3/EC2)+ AI/ML の概要を一通り",
    passCriteria: "1000 点満点中 700 点(参考)",
    steps: [
      {
        week: "Week 1",
        title: "AI / ML / 生成 AI の基礎",
        description:
          "AI ⊃ ML ⊃ DL ⊃ Gen AI / 教師あり-なし-強化 / 評価指標。本サイトの[G 検定](/certs/g-test)・[生成 AI パスポート](/certs/genai-passport)で土台。",
        links: [
          { href: "/certs/aws-ai-practitioner/textbook", label: "AWS AI Practitioner 教科書(章 2)" },
          { href: "/certs/g-test/textbook", label: "G 検定 教科書" },
        ],
      },
      {
        week: "Week 2",
        title: "AWS の AI / ML サービス全体像",
        description:
          "Rekognition / Comprehend / Transcribe / Polly / Translate / Textract / Forecast / Personalize / Kendra の守備範囲を整理。",
        links: [
          { href: "/certs/aws-ai-practitioner/textbook", label: "AWS AI Practitioner 教科書(章 3)" },
        ],
      },
      {
        week: "Week 3",
        title: "Bedrock + 基盤モデル + プロンプト",
        description:
          "Claude / Titan / Llama を Bedrock で実機で触る。Knowledge Bases / Agents / Guardrails の役割を整理。",
        links: [
          { href: "/certs/aws-ai-practitioner/textbook", label: "AWS AI Practitioner 教科書(章 4-5)" },
          { href: "/certs/genai-passport/textbook", label: "生成 AI パスポート 教科書" },
        ],
      },
      {
        week: "Week 4",
        title: "SageMaker + 責任ある AI",
        description:
          "Studio / Canvas / Autopilot / Pipelines / Model Monitor / Clarify。IAM / KMS / VPC エンドポイントの位置付け。",
        links: [
          { href: "/certs/aws-ai-practitioner/textbook", label: "AWS AI Practitioner 教科書(章 6-7)" },
        ],
      },
      {
        week: "Week 5",
        title: "コスト + ユースケース + 演習",
        description:
          "Spot / Inferentia / Bedrock 課金 / Amazon Q ファミリ。ユースケース → サービス選択を即答できるレベルに。",
        links: [
          { href: "/certs/aws-ai-practitioner/textbook", label: "AWS AI Practitioner 教科書(章 8-10)" },
          { href: "/certs/aws-ai-practitioner/quiz", label: "AWS AI Practitioner 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/aws-ai-practitioner/textbook",
    quizHref: "/certs/aws-ai-practitioner/quiz",
  },
  "basic-info": {
    slug: "basic-info",
    title: "基本情報技術者試験 学習ロードマップ",
    organizer: "情報処理推進機構(IPA)",
    hours: "150〜250 時間",
    months: "3〜5 ヶ月",
    prerequisites: "IT パスポート相当の基礎、または IT 実務 1 年程度",
    passCriteria: "科目 A ・ B ともに 600 / 1000 点以上",
    steps: [
      {
        week: "Week 1-3",
        title: "コンピュータ基礎 + 数値表現",
        description:
          "2 進数 ・ 浮動小数 ・ 論理演算 ・ プロセッサ ・ メモリ階層 ・ RAID。",
        links: [
          { href: "/certs/basic-info/textbook", label: "基本情報 教科書(章 2)" },
        ],
      },
      {
        week: "Week 4-6",
        title: "アルゴリズム + データ構造",
        description:
          "Python 風疑似言語のトレース ・ スタック ・ キュー ・ 木 ・ ソート ・ 探索。",
        links: [
          { href: "/certs/basic-info/textbook", label: "基本情報 教科書(章 3)" },
          { href: "/certs/python-data/textbook", label: "Python データ分析 教科書(基礎)" },
        ],
      },
      {
        week: "Week 7-8",
        title: "情報セキュリティ(科目 B 必須)",
        description:
          "暗号 ・ 認証 ・ 攻撃と対策 ・ ISMS ・ CIA トライアド。",
        links: [
          { href: "/certs/basic-info/textbook", label: "基本情報 教科書(章 4)" },
        ],
      },
      {
        week: "Week 9-10",
        title: "ネットワーク + DB",
        description:
          "OSI ・ TCP-IP ・ DNS ・ NAT ・ 正規化 ・ JOIN ・ ACID。",
        links: [
          { href: "/certs/basic-info/textbook", label: "基本情報 教科書(章 5-6)" },
        ],
      },
      {
        week: "Week 11",
        title: "ソフトウェア + PM + 経営",
        description:
          "テスト ・ アジャイル ・ WBS ・ ITIL ・ SWOT ・ AI 用語 ・ DX 3 段階。",
        links: [
          { href: "/certs/basic-info/textbook", label: "基本情報 教科書(章 7-9)" },
        ],
      },
      {
        week: "Week 12",
        title: "過去問演習 + 模擬試験",
        description:
          "科目 A は 5 〜 10 年分の過去問を 2 周。科目 B はトレース表を書く練習を反復。",
        links: [
          { href: "/certs/basic-info/quiz", label: "基本情報 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/basic-info/textbook",
    quizHref: "/certs/basic-info/quiz",
  },
  "azure-ai-900": {
    slug: "azure-ai-900",
    title: "Microsoft Azure AI Fundamentals(AI-900)学習ロードマップ",
    organizer: "Microsoft",
    hours: "40〜80 時間",
    months: "1〜2 ヶ月",
    prerequisites: "AI / ML の概要 ・ Azure 基礎(AZ-900 相当)があれば短期化",
    passCriteria: "1000 点満点中 700 点(参考)",
    steps: [
      {
        week: "Week 1",
        title: "AI / ML / 生成 AI の基礎",
        description:
          "AI ⊃ ML ⊃ DL ⊃ Gen AI / 教師あり-なし-強化 / 責任ある AI 6 原則。本サイトの[G 検定](/certs/g-test)・[生成 AI パスポート](/certs/genai-passport)で土台。",
        links: [
          { href: "/certs/azure-ai-900/textbook", label: "Azure AI-900 教科書(章 2)" },
          { href: "/certs/g-test/textbook", label: "G 検定 教科書" },
        ],
      },
      {
        week: "Week 2",
        title: "Azure Machine Learning",
        description:
          "Azure ML Studio / Designer / Automated ML / Pipelines / Endpoints。",
        links: [
          { href: "/certs/azure-ai-900/textbook", label: "Azure AI-900 教科書(章 3)" },
        ],
      },
      {
        week: "Week 3",
        title: "AI Vision + AI Language",
        description:
          "AI Vision / Custom Vision / Face / Document Intelligence / AI Language / Translator / Speech。",
        links: [
          { href: "/certs/azure-ai-900/textbook", label: "Azure AI-900 教科書(章 4-5)" },
        ],
      },
      {
        week: "Week 4",
        title: "Azure OpenAI + Azure AI Search",
        description:
          "Azure OpenAI Service / AI Foundry / Prompt Flow / Azure AI Search の RAG パターン。",
        links: [
          { href: "/certs/azure-ai-900/textbook", label: "Azure AI-900 教科書(章 6-7)" },
          { href: "/certs/genai-passport/textbook", label: "生成 AI パスポート 教科書" },
        ],
      },
      {
        week: "Week 5",
        title: "Microsoft Copilot + 演習",
        description:
          "Microsoft 365 Copilot / Copilot Studio / GitHub Copilot。ユースケース → サービス選択を即答できるレベルに。",
        links: [
          { href: "/certs/azure-ai-900/textbook", label: "Azure AI-900 教科書(章 8-10)" },
          { href: "/certs/azure-ai-900/quiz", label: "Azure AI-900 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/azure-ai-900/textbook",
    quizHref: "/certs/azure-ai-900/quiz",
  },
  "gcp-gen-ai-leader": {
    slug: "gcp-gen-ai-leader",
    title: "GCP Generative AI Leader 学習ロードマップ",
    organizer: "Google Cloud",
    hours: "40〜80 時間",
    months: "1〜2 ヶ月",
    prerequisites: "AI / ML の概要 ・ Google Cloud 基礎(Cloud Digital Leader 相当)",
    passCriteria: "Google Cloud 公開なし(参考: 70%)",
    steps: [
      {
        week: "Week 1",
        title: "生成 AI / LLM の基礎",
        description:
          "AI ⊃ ML ⊃ DL ⊃ Gen AI / Transformer / プロンプト / RAG / ハルシネーション。",
        links: [
          { href: "/certs/gcp-gen-ai-leader/textbook", label: "GCP Gen AI Leader 教科書(章 2)" },
          { href: "/certs/g-test/textbook", label: "G 検定 教科書" },
          { href: "/certs/genai-passport/textbook", label: "生成 AI パスポート 教科書" },
        ],
      },
      {
        week: "Week 2",
        title: "Vertex AI + Gemini ファミリ",
        description:
          "Vertex AI Studio / Workbench / Model Garden / Agent Builder / Gemini / Imagen / Veo。",
        links: [
          { href: "/certs/gcp-gen-ai-leader/textbook", label: "GCP Gen AI Leader 教科書(章 3)" },
        ],
      },
      {
        week: "Week 3",
        title: "Workspace + Code Assist + RAG",
        description:
          "Gemini for Workspace / Code Assist / Vertex AI Search の RAG パターン。",
        links: [
          { href: "/certs/gcp-gen-ai-leader/textbook", label: "GCP Gen AI Leader 教科書(章 4-6)" },
        ],
      },
      {
        week: "Week 4",
        title: "責任ある AI + コスト",
        description:
          "Google の 7 つの AI 原則 / Grounding / SynthID / モデル選択 / Context Caching。",
        links: [
          { href: "/certs/gcp-gen-ai-leader/textbook", label: "GCP Gen AI Leader 教科書(章 7-8)" },
        ],
      },
      {
        week: "Week 5",
        title: "業務変革 + 演習",
        description:
          "業界別ユースケース ・ 組織導入 ・ ROI 測定。仕上げに演習問題で出題傾向を体感。",
        links: [
          { href: "/certs/gcp-gen-ai-leader/textbook", label: "GCP Gen AI Leader 教科書(章 9-10)" },
          { href: "/certs/gcp-gen-ai-leader/quiz", label: "GCP Gen AI Leader 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/gcp-gen-ai-leader/textbook",
    quizHref: "/certs/gcp-gen-ai-leader/quiz",
  },
  "db-specialist": {
    slug: "db-specialist",
    title: "データベーススペシャリスト 学習ロードマップ",
    organizer: "情報処理推進機構(IPA)",
    hours: "300〜500 時間",
    months: "6〜10 ヶ月",
    prerequisites: "応用情報技術者合格相当 + DB 実務経験 1 年程度",
    passCriteria: "午前 I・II・午後 I・II すべて 60 点以上",
    steps: [
      {
        week: "Month 1-2",
        title: "リレーショナルモデル + 関係代数",
        description:
          "関係代数 8 演算 / 関係論理 / FD / 候補キー。",
        links: [
          { href: "/certs/db-specialist/textbook", label: "DB スペシャリスト 教科書(章 2)" },
        ],
      },
      {
        week: "Month 3",
        title: "ER 図 + 正規化",
        description:
          "概念 → 論理 → 物理の 3 層 / 1NF 〜 BCNF の実例導出。",
        links: [
          { href: "/certs/db-specialist/textbook", label: "DB スペシャリスト 教科書(章 3)" },
        ],
      },
      {
        week: "Month 4",
        title: "SQL 上級 + ACID",
        description:
          "ウィンドウ関数 / 再帰 CTE / トリガー / 分離レベル / MVCC / WAL。",
        links: [
          { href: "/certs/db-specialist/textbook", label: "DB スペシャリスト 教科書(章 4-5)" },
        ],
      },
      {
        week: "Month 5",
        title: "索引 + チューニング + セキュリティ",
        description:
          "B-tree / EXPLAIN / 結合方式 / パーティション / RLS / TDE。",
        links: [
          { href: "/certs/db-specialist/textbook", label: "DB スペシャリスト 教科書(章 6-7)" },
        ],
      },
      {
        week: "Month 6",
        title: "NoSQL + DWH + データ基盤",
        description:
          "CAP / KVS / ドキュメント / グラフ / Spark / Snowflake / dbt / データメッシュ。",
        links: [
          { href: "/certs/db-specialist/textbook", label: "DB スペシャリスト 教科書(章 8-9)" },
        ],
      },
      {
        week: "Month 7+",
        title: "午後 I ・ 午後 II 過去問演習",
        description:
          "5 〜 10 年分の過去問を 2 周。午後 II は 120 分で論述 + ER 図作成の型を反復で身につける。",
        links: [
          { href: "/certs/db-specialist/quiz", label: "DB スペシャリスト 演習問題" },
          { href: "/practice", label: "ランダム練習" },
          { href: "/review", label: "苦手問題の復習" },
        ],
      },
    ],
    textbookHref: "/certs/db-specialist/textbook",
    quizHref: "/certs/db-specialist/quiz",
  },
  "dx-kentei": {
    slug: "dx-kentei",
    title: "DX 検定 学習ロードマップ",
    organizer: "一般社団法人 日本イノベーション融合学会",
    hours: "40〜80 時間",
    months: "1〜2 ヶ月",
    prerequisites: "ビジネス基礎 + IT 全般の入門知識",
    passCriteria: "800 点以上で DX エキスパート / 700 点で DX プロフェッショナル / 600 点で DX スタンダード",
    steps: [
      {
        week: "Week 1",
        title: "DX 概念 + 経産省ガイドライン",
        description:
          "経産省 DX 定義 / 3 段階 / 2025 年の崖 / DX 推進指標 / DX 認定制度。",
        links: [
          { href: "/certs/dx-kentei/textbook", label: "DX 検定 教科書(章 2)" },
        ],
      },
      {
        week: "Week 2",
        title: "AI / クラウド / 最新トレンド",
        description:
          "ChatGPT 系 / RAG / プロンプト / IaaS-PaaS-SaaS / 3 大クラウド / コンテナ。",
        links: [
          { href: "/certs/dx-kentei/textbook", label: "DX 検定 教科書(章 3-4)" },
          { href: "/certs/genai-passport/textbook", label: "生成 AI パスポート 教科書" },
        ],
      },
      {
        week: "Week 3",
        title: "IoT ・ 5G ・ ブロックチェーン",
        description:
          "センサー / LPWA / デジタルツイン / 5G の 3 特性 / NFT / Web3 / CBDC。",
        links: [
          { href: "/certs/dx-kentei/textbook", label: "DX 検定 教科書(章 5)" },
        ],
      },
      {
        week: "Week 4",
        title: "RPA + アジャイル + セキュリティ + BI",
        description:
          "RPA / スクラム / DevOps / IaC / ゼロトラスト / SASE / KPI / OKR。",
        links: [
          { href: "/certs/dx-kentei/textbook", label: "DX 検定 教科書(章 6-8)" },
        ],
      },
      {
        week: "Week 5",
        title: "DX 人材 + 業界事例 + 過去問",
        description:
          "リスキリング / マナビ DX / 両利き経営 / 業界別 DX 事例 / 演習問題で 1 問 30 秒のスピード感を作る。",
        links: [
          { href: "/certs/dx-kentei/textbook", label: "DX 検定 教科書(章 9-10)" },
          { href: "/certs/dx-kentei/quiz", label: "DX 検定 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/dx-kentei/textbook",
    quizHref: "/certs/dx-kentei/quiz",
  },
  "aws-saa": {
    slug: "aws-saa",
    title: "AWS SAA-C03 学習ロードマップ",
    organizer: "Amazon Web Services(AWS)",
    hours: "100〜200 時間",
    months: "2〜4 ヶ月",
    prerequisites: "Cloud Practitioner / AI Practitioner 合格相当 + AWS 実機操作経験",
    passCriteria: "1000 点満点中 720 点",
    steps: [
      {
        week: "Week 1-2",
        title: "Well-Architected + IAM + EC2",
        description:
          "6 つの柱 / IAM ロール / KMS / EC2 購入オプション 5 種 / インスタンスタイプ。",
        links: [
          { href: "/certs/aws-saa/textbook", label: "AWS SAA 教科書(章 2-3)" },
          { href: "/certs/aws-ai-practitioner/textbook", label: "AWS AI Practitioner 教科書(基礎)" },
        ],
      },
      {
        week: "Week 3-4",
        title: "ストレージ + DB",
        description:
          "S3 ストレージクラス 8 種 / EBS タイプ / RDS Multi-AZ / DynamoDB / Aurora / ElastiCache。",
        links: [
          { href: "/certs/aws-saa/textbook", label: "AWS SAA 教科書(章 4-5)" },
        ],
      },
      {
        week: "Week 5",
        title: "ネットワーク + Route 53 + CloudFront",
        description:
          "VPC / SG / NACL / NAT / VPC Endpoint / Route 53 ルーティング 7 種 / CloudFront。",
        links: [
          { href: "/certs/aws-saa/textbook", label: "AWS SAA 教科書(章 6)" },
        ],
      },
      {
        week: "Week 6",
        title: "ELB + Auto Scaling + DR",
        description:
          "ALB / NLB / GWLB / Target Tracking / DR 戦略 4 種(Backup/Pilot Light/Warm Standby/Active-Active)。",
        links: [
          { href: "/certs/aws-saa/textbook", label: "AWS SAA 教科書(章 7)" },
        ],
      },
      {
        week: "Week 7",
        title: "メッセージング + 監視 + 移行",
        description:
          "SQS Standard/FIFO / SNS / EventBridge / Step Functions / CloudWatch / CloudTrail / DMS。",
        links: [
          { href: "/certs/aws-saa/textbook", label: "AWS SAA 教科書(章 8-9)" },
        ],
      },
      {
        week: "Week 8",
        title: "コスト最適化 + 過去問",
        description:
          "Savings Plans / Spot / S3 Lifecycle / Trusted Advisor。仕上げに公式 Practice Exam + 本サイト演習。",
        links: [
          { href: "/certs/aws-saa/textbook", label: "AWS SAA 教科書(章 10)" },
          { href: "/certs/aws-saa/quiz", label: "AWS SAA 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/aws-saa/textbook",
    quizHref: "/certs/aws-saa/quiz",
  },
  "it-passport": {
    slug: "it-passport",
    title: "ITパスポート試験 学習ロードマップ",
    organizer: "情報処理推進機構(IPA)",
    hours: "100〜200 時間",
    months: "2〜4 ヶ月",
    prerequisites: "なし(社会人 ・ 学生の入門レベル)",
    passCriteria: "総合 600 / 1000 点 + 各分野評価点 300 点以上",
    steps: [
      {
        week: "Week 1-2",
        title: "コンピュータ基礎 + ネットワーク",
        description:
          "ハードウェア / ソフトウェア / OS / 数値表現 / TCP/IP / DNS / HTTPS。",
        links: [
          { href: "/certs/it-passport/textbook", label: "ITパスポート 教科書(章 2-3)" },
        ],
      },
      {
        week: "Week 3",
        title: "情報セキュリティ",
        description:
          "CIA / 暗号 / 認証 / 攻撃と対策。",
        links: [
          { href: "/certs/it-passport/textbook", label: "ITパスポート 教科書(章 4)" },
        ],
      },
      {
        week: "Week 4",
        title: "マネジメント系",
        description:
          "PMBOK / WBS / ITIL / SLA / システム監査。",
        links: [
          { href: "/certs/it-passport/textbook", label: "ITパスポート 教科書(章 5)" },
        ],
      },
      {
        week: "Week 5-6",
        title: "経営戦略 + 業務 + 法務",
        description:
          "SWOT / PEST / 4P / BS-PL-CF / 著作権 / 個人情報。",
        links: [
          { href: "/certs/it-passport/textbook", label: "ITパスポート 教科書(章 6-7)" },
        ],
      },
      {
        week: "Week 7",
        title: "開発 + AI / DX",
        description:
          "ウォーターフォール / アジャイル / AI / 生成 AI / DX 3 段階 / RPA。",
        links: [
          { href: "/certs/it-passport/textbook", label: "ITパスポート 教科書(章 8-9)" },
          { href: "/certs/genai-passport/textbook", label: "生成 AI パスポート 教科書(補強)" },
        ],
      },
      {
        week: "Week 8",
        title: "過去問演習",
        description:
          "5 〜 10 年分の過去問を 2 周。3 分野バランスよく弱点補強。",
        links: [
          { href: "/certs/it-passport/quiz", label: "ITパスポート 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/it-passport/textbook",
    quizHref: "/certs/it-passport/quiz",
  },
  "power-bi": {
    slug: "power-bi",
    title: "Microsoft PL-300 学習ロードマップ",
    organizer: "Microsoft",
    hours: "60〜120 時間",
    months: "1〜2 ヶ月",
    prerequisites: "Excel / SQL の基本 + データ分析の経験があると短期化",
    passCriteria: "1000 点満点中 700 点",
    steps: [
      {
        week: "Week 1",
        title: "Power BI Desktop インストール + 基本操作",
        description:
          "無料インストール + サンプルデータでレポート作成。アーキテクチャ理解。",
        links: [
          { href: "/certs/power-bi/textbook", label: "Power BI 教科書(章 2)" },
        ],
      },
      {
        week: "Week 2-3",
        title: "Power Query + データ準備",
        description:
          "接続モード / プロファイリング / クレンジング / M 言語の基本。",
        links: [
          { href: "/certs/power-bi/textbook", label: "Power BI 教科書(章 3-4)" },
        ],
      },
      {
        week: "Week 4-5",
        title: "DAX + データモデリング",
        description:
          "スタースキーマ / リレーション / 計算列 vs メジャー / CALCULATE / Time Intelligence。",
        links: [
          { href: "/certs/power-bi/textbook", label: "Power BI 教科書(章 5-6)" },
        ],
      },
      {
        week: "Week 6",
        title: "ビジュアル + レポート設計",
        description:
          "標準 ・ AI ビジュアル / Q&A / Key Influencers / ブックマーク / ドリル。",
        links: [
          { href: "/certs/power-bi/textbook", label: "Power BI 教科書(章 7)" },
        ],
      },
      {
        week: "Week 7",
        title: "Power BI Service + RLS + Fabric + Copilot",
        description:
          "ワークスペース / アプリ / 更新 / Gateway / RLS / Fabric Direct Lake / Copilot。",
        links: [
          { href: "/certs/power-bi/textbook", label: "Power BI 教科書(章 8-9)" },
        ],
      },
      {
        week: "Week 8",
        title: "模擬試験 + 過去問",
        description:
          "Microsoft Learn の練習問題 + 本サイト演習問題で出題傾向を体感。",
        links: [
          { href: "/certs/power-bi/quiz", label: "Power BI 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/power-bi/textbook",
    quizHref: "/certs/power-bi/quiz",
  },
  "tableau-specialist": {
    slug: "tableau-specialist",
    title: "Tableau Desktop Specialist 学習ロードマップ",
    organizer: "Salesforce(Tableau)",
    hours: "40〜80 時間",
    months: "1〜2 ヶ月",
    prerequisites: "Excel / SQL の基本",
    passCriteria: "約 75%(参考)",
    steps: [
      {
        week: "Week 1",
        title: "Tableau Desktop インストール + 基本操作",
        description:
          "Public 版 or 14 日トライアル。サンプル Superstore で操作。",
        links: [
          { href: "/certs/tableau-specialist/textbook", label: "Tableau 教科書(章 2)" },
        ],
      },
      {
        week: "Week 2",
        title: "データ接続 + Relationships",
        description:
          "Live vs Extract / Joins / Unions / Pivot。",
        links: [
          { href: "/certs/tableau-specialist/textbook", label: "Tableau 教科書(章 3)" },
        ],
      },
      {
        week: "Week 3",
        title: "Show Me + Marks + ダッシュボード",
        description:
          "主要チャート / Dual Axis / Filter Action / Story。",
        links: [
          { href: "/certs/tableau-specialist/textbook", label: "Tableau 教科書(章 4-5)" },
        ],
      },
      {
        week: "Week 4",
        title: "計算 + LOD + パラメータ",
        description:
          "FIXED/INCLUDE/EXCLUDE / Time Intelligence / Quick Table Calc。",
        links: [
          { href: "/certs/tableau-specialist/textbook", label: "Tableau 教科書(章 6-7)" },
        ],
      },
      {
        week: "Week 5",
        title: "フィルター + Analytics + 共有",
        description:
          "フィルタ実行順序 / Set / Forecast / Cluster / Tableau Public。",
        links: [
          { href: "/certs/tableau-specialist/textbook", label: "Tableau 教科書(章 8-10)" },
        ],
      },
      {
        week: "Week 6",
        title: "模擬試験 + 過去問",
        description:
          "Tableau eLearning + 本サイト演習で出題傾向を体感。",
        links: [
          { href: "/certs/tableau-specialist/quiz", label: "Tableau 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/tableau-specialist/textbook",
    quizHref: "/certs/tableau-specialist/quiz",
  },
  "azure-ai-102": {
    slug: "azure-ai-102",
    title: "Microsoft AI-102 学習ロードマップ",
    organizer: "Microsoft",
    hours: "120〜200 時間",
    months: "2〜4 ヶ月",
    prerequisites: "AI-900 合格相当 + Python or C# + REST API + JSON + Git",
    passCriteria: "1000 点満点中 700 点",
    steps: [
      {
        week: "Week 1-2",
        title: "AI-900 範囲復習 + リソース管理",
        description:
          "Cognitive Services リソース / Subscription Key vs Entra ID / Container Deploy。",
        links: [
          { href: "/certs/azure-ai-102/textbook", label: "AI-102 教科書(章 2)" },
          { href: "/certs/azure-ai-900/textbook", label: "AI-900 教科書(復習)" },
        ],
      },
      {
        week: "Week 3-4",
        title: "Azure OpenAI + Foundry",
        description:
          "GPT-4o デプロイ / SDK / PTU / Function Calling / Prompt Flow / Fine-tuning。",
        links: [
          { href: "/certs/azure-ai-102/textbook", label: "AI-102 教科書(章 3, 7)" },
        ],
      },
      {
        week: "Week 5",
        title: "RAG + AI Search",
        description:
          "ハイブリッド検索 / Semantic Ranker / RAG パイプライン 9 段 / AI Enrichment。",
        links: [
          { href: "/certs/azure-ai-102/textbook", label: "AI-102 教科書(章 4)" },
        ],
      },
      {
        week: "Week 6",
        title: "Vision + Document Intelligence",
        description:
          "AI Vision / Custom Vision / Face / Document Intelligence の実装。",
        links: [
          { href: "/certs/azure-ai-102/textbook", label: "AI-102 教科書(章 5)" },
        ],
      },
      {
        week: "Week 7",
        title: "Language + Speech + CLU",
        description:
          "AI Language / Translator / Speech / CLU / Orchestration Workflow。",
        links: [
          { href: "/certs/azure-ai-102/textbook", label: "AI-102 教科書(章 6)" },
        ],
      },
      {
        week: "Week 8",
        title: "Agent + Content Safety + デプロイ",
        description:
          "AI Agent Service / Content Safety / Prompt Shields / App Service / Functions。",
        links: [
          { href: "/certs/azure-ai-102/textbook", label: "AI-102 教科書(章 7-9)" },
        ],
      },
      {
        week: "Week 9-10",
        title: "模擬試験 + 過去問",
        description:
          "Microsoft Learn の練習問題 + 本サイト演習問題で出題傾向を体感。",
        links: [
          { href: "/certs/azure-ai-102/quiz", label: "AI-102 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/azure-ai-102/textbook",
    quizHref: "/certs/azure-ai-102/quiz",
  },
  "aws-ml-engineer": {
    slug: "aws-ml-engineer",
    title: "AWS Machine Learning Engineer Associate(MLA-C01)学習ロードマップ",
    organizer: "Amazon Web Services(AWS)",
    hours: "150〜250 時間",
    months: "3〜5 ヶ月",
    prerequisites: "AI Practitioner 合格相当 + SageMaker / Python / SQL / 統計の基礎",
    passCriteria: "1000 点満点中 720 点",
    steps: [
      {
        week: "Week 1-2",
        title: "AI Practitioner 復習 + AWS 基礎",
        description:
          "IAM / S3 / VPC / KMS / VPC Endpoint。",
        links: [
          { href: "/certs/aws-ml-engineer/textbook", label: "MLA-C01 教科書(章 2)" },
          { href: "/certs/aws-ai-practitioner/textbook", label: "AI Practitioner 教科書(復習)" },
        ],
      },
      {
        week: "Week 3-4",
        title: "SageMaker 全体像",
        description:
          "Studio / Canvas / Autopilot / Pipelines / Endpoints / Model Registry。",
        links: [
          { href: "/certs/aws-ml-engineer/textbook", label: "MLA-C01 教科書(章 3)" },
        ],
      },
      {
        week: "Week 5",
        title: "データ準備 + 特徴量",
        description:
          "S3 / Glue / Data Wrangler / Feature Store / 不均衡対策。",
        links: [
          { href: "/certs/aws-ml-engineer/textbook", label: "MLA-C01 教科書(章 4)" },
        ],
      },
      {
        week: "Week 6",
        title: "学習 + HPO",
        description:
          "Built-in / BYOC / Bayesian HPO / MLflow / Spot Training。",
        links: [
          { href: "/certs/aws-ml-engineer/textbook", label: "MLA-C01 教科書(章 4)" },
        ],
      },
      {
        week: "Week 7",
        title: "推論デプロイ 5 種",
        description:
          "Real-time / Serverless / Async / Batch / Edge / Multi-Model Endpoint。",
        links: [
          { href: "/certs/aws-ml-engineer/textbook", label: "MLA-C01 教科書(章 5)" },
        ],
      },
      {
        week: "Week 8",
        title: "MLOps Pipelines + Model Registry",
        description:
          "ProcessingStep / TrainingStep / ConditionStep / Model Registry / Step Functions。",
        links: [
          { href: "/certs/aws-ml-engineer/textbook", label: "MLA-C01 教科書(章 6)" },
        ],
      },
      {
        week: "Week 9",
        title: "モニタリング + Clarify + Bedrock",
        description:
          "Model Monitor 4 種 / SHAP / Bedrock / JumpStart / Amazon Q ファミリ。",
        links: [
          { href: "/certs/aws-ml-engineer/textbook", label: "MLA-C01 教科書(章 7-9)" },
        ],
      },
      {
        week: "Week 10",
        title: "模擬試験 + 過去問",
        description:
          "AWS 公式 Practice Exam + 本サイト演習問題。",
        links: [
          { href: "/certs/aws-ml-engineer/quiz", label: "MLA-C01 演習問題" },
          { href: "/practice", label: "ランダム練習" },
        ],
      },
    ],
    textbookHref: "/certs/aws-ml-engineer/textbook",
    quizHref: "/certs/aws-ml-engineer/quiz",
  },
  "snowflake-snowpro": {
    slug: "snowflake-snowpro",
    title: "Snowflake SnowPro Core(COF-C02)学習ロードマップ",
    organizer: "Snowflake",
    hours: "60〜100 時間",
    months: "1〜2 ヶ月",
    prerequisites: "SQL の基礎 + データベースの基本概念",
    passCriteria: "1000 点満点中 750 点",
    steps: [
      {
        week: "Week 1",
        title: "アーキテクチャ + Virtual Warehouse",
        description:
          "3 層構造 / マルチクラウド / Auto-suspend / Auto-resume。",
        links: [
          { href: "/certs/snowflake-snowpro/textbook", label: "SnowPro Core 教科書(章 2)" },
        ],
      },
      {
        week: "Week 2",
        title: "オブジェクト階層 + ロード",
        description:
          "テーブル種別 / Stream / Task / COPY / Snowpipe / Stage。",
        links: [
          { href: "/certs/snowflake-snowpro/textbook", label: "SnowPro Core 教科書(章 3-4)" },
        ],
      },
      {
        week: "Week 3",
        title: "SQL + VARIANT",
        description:
          "QUALIFY / FLATTEN / Snowpark / Cortex AI 基礎。",
        links: [
          { href: "/certs/snowflake-snowpro/textbook", label: "SnowPro Core 教科書(章 5)" },
        ],
      },
      {
        week: "Week 4",
        title: "パフォーマンス",
        description:
          "Micro-partition / 3 種キャッシュ / Search Optimization / クラスタリング。",
        links: [
          { href: "/certs/snowflake-snowpro/textbook", label: "SnowPro Core 教科書(章 6)" },
        ],
      },
      {
        week: "Week 5",
        title: "Time Travel + Cloning + Sharing",
        description:
          "Time Travel(1〜90 日)・ Fail-safe(7 日)・ Zero-Copy Cloning ・ Secure Data Sharing。",
        links: [
          { href: "/certs/snowflake-snowpro/textbook", label: "SnowPro Core 教科書(章 7)" },
        ],
      },
      {
        week: "Week 6",
        title: "セキュリティ + 模擬試験",
        description:
          "RBAC / システム定義ロール / Network Policy / RLS。仕上げに演習問題。",
        links: [
          { href: "/certs/snowflake-snowpro/textbook", label: "SnowPro Core 教科書(章 8-10)" },
          { href: "/certs/snowflake-snowpro/quiz", label: "SnowPro Core 演習問題" },
        ],
      },
    ],
    textbookHref: "/certs/snowflake-snowpro/textbook",
    quizHref: "/certs/snowflake-snowpro/quiz",
  },
};

export const certSlugs = Object.keys(certRoadmaps);
