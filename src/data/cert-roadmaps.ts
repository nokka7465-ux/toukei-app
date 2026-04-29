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
};

export const certSlugs = Object.keys(certRoadmaps);
