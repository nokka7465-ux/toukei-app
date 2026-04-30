import type { Metadata } from "next";
import Link from "next/link";
import type { TextbookBlock } from "@/types/content";
import { TextbookBody } from "@/components/TextbookBody";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "プログラミング入門 ─ Python・NumPy・Pandas・SQL の最短ルート",
  description:
    "AI エンジニア・データサイエンティストに必要な Python(基礎/NumPy/Pandas)と SQL を 4 章でコンパクトに学べる無料ミニ教科書。ブラウザ内 Python 実行(Pyodide)で即座に動かせます。",
  alternates: { canonical: "/programming" },
  openGraph: {
    title: "プログラミング入門 ─ Python・NumPy・Pandas・SQL",
    description: "ブラウザ内 Python 実行で即座に動かせる、データ職向け実装ミニ教科書。",
    type: "article",
  },
};

const CHAPTERS: { id: string; number: string; title: string; blocks: TextbookBlock[] }[] = [
  {
    id: "ch1",
    number: "1",
    title: "Python 基礎 ─ データ型・関数・制御構造",
    blocks: [
      {
        type: "p",
        text: "Python は **読みやすさ** と **ライブラリの豊富さ** が武器の汎用言語。AI / データ分析の事実上の標準語です。本章はゼロからの基礎を最短で押さえます。下のコードはすべて **このページで実行できます**(▶ 実行ボタン)。",
      },
      { type: "h3", text: "1-1. 変数とデータ型" },
      {
        type: "code",
        title: "基本のデータ型",
        runnable: true,
        python:
          "# 数値\nx = 10\ny = 3.14\n\n# 文字列\nname = 'Alice'\n\n# リスト・辞書\nscores = [85, 92, 78, 90]\nperson = {'name': name, 'age': 30}\n\nprint(f'平均点: {sum(scores) / len(scores):.1f}')\nprint(f'最高点: {max(scores)}')\nprint(f'人物: {person}')",
      },
      { type: "h3", text: "1-2. 関数と制御構造" },
      {
        type: "code",
        title: "関数定義 + for / if",
        runnable: true,
        python:
          "def grade(score):\n    if score >= 80:\n        return 'A'\n    elif score >= 60:\n        return 'B'\n    else:\n        return 'C'\n\nscores = [85, 55, 72, 91, 48]\nfor s in scores:\n    print(f'{s} 点 → {grade(s)}')",
      },
      {
        type: "intuition",
        title: "💡 リスト内包表記",
        body: "for ループより簡潔に書ける Python の代表的な記法。`[grade(s) for s in scores]` で 1 行。慣れると読み書きが圧倒的に速くなる。",
      },
      {
        type: "code",
        title: "リスト内包表記",
        runnable: true,
        python:
          "scores = [85, 55, 72, 91, 48]\ngrades = [('A' if s >= 80 else 'B' if s >= 60 else 'C') for s in scores]\nprint(grades)\n\n# 80 点以上だけ抽出\nhigh = [s for s in scores if s >= 80]\nprint(f'高得点: {high}')",
      },
    ],
  },
  {
    id: "ch2",
    number: "2",
    title: "NumPy ─ ベクトル演算で 100 倍速くする",
    blocks: [
      {
        type: "p",
        text: "**NumPy** は数値計算の核。ピュア Python の for ループで書くと遅い処理を、**ベクトル演算**(配列まるごとの計算)で C レベルの速度に。統計・機械学習・画像処理の基盤です。",
      },
      { type: "h3", text: "2-1. 配列の作成と演算" },
      {
        type: "code",
        title: "ベクトル演算の威力",
        runnable: true,
        python:
          "import numpy as np\n\n# 1〜100 の配列\nx = np.arange(1, 101)\n\n# ベクトル演算: ループ不要\ny = x ** 2 + 3 * x + 1\n\nprint(f'要素数: {x.size}')\nprint(f'先頭 5 つ: {y[:5]}')\nprint(f'平均: {y.mean():.1f}')\nprint(f'標準偏差: {y.std():.1f}')",
      },
      { type: "h3", text: "2-2. 統計関数" },
      {
        type: "code",
        title: "正規分布から 1000 サンプル",
        runnable: true,
        python:
          "import numpy as np\n\nnp.random.seed(0)\nsamples = np.random.normal(loc=50, scale=10, size=1000)\n\nprint(f'平均: {samples.mean():.2f}')\nprint(f'標準偏差: {samples.std():.2f}')\nprint(f'25 / 50 / 75 パーセンタイル: {np.percentile(samples, [25, 50, 75])}')\nprint(f'±1σ 内に含まれる割合: {((samples > 40) & (samples < 60)).mean():.3f}')",
      },
      {
        type: "practical",
        title: "🛠 ブロードキャスト",
        body: "形が違う配列同士の演算を自動で揃えてくれる NumPy の魔法。`X - X.mean(axis=0)` で各列の平均を全行から引く ── ML の前処理(センタリング)が 1 行に。",
      },
    ],
  },
  {
    id: "ch3",
    number: "3",
    title: "Pandas ─ 表データ処理のデファクト",
    blocks: [
      {
        type: "p",
        text: "**Pandas** は Excel の DataFrame をプログラマブルにしたもの。SQL の JOIN / GROUP BY 相当の操作も流暢に書けます。データ分析の 80% は Pandas でこなせます。",
      },
      { type: "h3", text: "3-1. DataFrame の作成" },
      {
        type: "code",
        title: "DataFrame の基本操作",
        runnable: true,
        python:
          "import pandas as pd\n\ndf = pd.DataFrame({\n    'name': ['Alice', 'Bob', 'Carol', 'Dave', 'Eve'],\n    'dept': ['営業', '開発', '営業', '開発', '営業'],\n    'salary': [500, 700, 550, 800, 480],\n    'years': [3, 5, 4, 8, 2],\n})\n\nprint(df)\nprint('\\n--- 統計サマリ ---')\nprint(df.describe())",
      },
      { type: "h3", text: "3-2. フィルタ・ソート・集計" },
      {
        type: "code",
        title: "GROUP BY 相当の集計",
        runnable: true,
        python:
          "import pandas as pd\n\ndf = pd.DataFrame({\n    'dept': ['営業', '開発', '営業', '開発', '営業', '開発'],\n    'salary': [500, 700, 550, 800, 480, 750],\n    'years': [3, 5, 4, 8, 2, 6],\n})\n\n# 部署別の平均年収\nprint(df.groupby('dept').agg(\n    avg_salary=('salary', 'mean'),\n    avg_years=('years', 'mean'),\n    n=('salary', 'count'),\n))\n\n# 年収 600 以上で勤続 5 年以上\nprint('\\n--- 高年収・ベテラン ---')\nprint(df.query('salary >= 600 and years >= 5'))",
      },
      {
        type: "intuition",
        title: "💡 SQL ↔ Pandas 対応表",
        body: "SELECT → df[cols] / WHERE → df.query() / GROUP BY → df.groupby() / JOIN → df.merge() / ORDER BY → df.sort_values()。SQL 経験者なら 1 日で身につく。",
      },
    ],
  },
  {
    id: "ch4",
    number: "4",
    title: "SQL ─ データを問い合わせる共通言語",
    blocks: [
      {
        type: "p",
        text: "**SQL**(Structured Query Language)はリレーショナルデータベースに対する問い合わせ言語。データサイエンティストの必修スキルで、求人で最も問われるテーマでもあります。",
      },
      { type: "h3", text: "4-1. SELECT・WHERE・ORDER BY" },
      {
        type: "code",
        title: "基本のクエリ",
        python:
          "-- ※ これは SQL です(参考表示)。下のセクションで Python から SQLite を呼び出して動かせます\n\n-- 全件取得\nSELECT * FROM employees;\n\n-- フィルタ + 並び替え\nSELECT name, salary\nFROM employees\nWHERE dept = '開発'\nORDER BY salary DESC\nLIMIT 10;",
      },
      { type: "h3", text: "4-2. GROUP BY と集約関数" },
      {
        type: "code",
        title: "部署別の集計",
        python:
          "SELECT\n    dept,\n    COUNT(*) AS n,\n    AVG(salary) AS avg_salary,\n    MAX(salary) AS max_salary\nFROM employees\nGROUP BY dept\nHAVING COUNT(*) >= 3\nORDER BY avg_salary DESC;",
      },
      { type: "h3", text: "4-3. JOIN" },
      {
        type: "code",
        title: "INNER JOIN",
        python:
          "SELECT\n    e.name,\n    d.dept_name,\n    e.salary\nFROM employees e\nINNER JOIN departments d ON e.dept_id = d.id\nWHERE d.location = 'Tokyo';",
      },
      { type: "h3", text: "4-4. ウィンドウ関数 ─ DS 必須" },
      {
        type: "code",
        title: "部署内ランク",
        python:
          "-- 部署ごとの年収ランク TOP 3\nSELECT name, dept, salary,\n       RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rk\nFROM employees\nQUALIFY rk <= 3;",
      },
      { type: "h3", text: "4-5. Python(SQLite)で SQL を動かす" },
      {
        type: "p",
        text: "Python 標準の `sqlite3` モジュールでブラウザ内 SQLite を起動。実際に SELECT を打って結果を確認できます。",
      },
      {
        type: "code",
        title: "Python から SQL を実行",
        runnable: true,
        python:
          "import sqlite3\n\nconn = sqlite3.connect(':memory:')\ncur = conn.cursor()\n\ncur.executescript('''\nCREATE TABLE employees (\n    id INTEGER PRIMARY KEY,\n    name TEXT,\n    dept TEXT,\n    salary INTEGER\n);\nINSERT INTO employees (name, dept, salary) VALUES\n    ('Alice', '営業', 500),\n    ('Bob', '開発', 700),\n    ('Carol', '営業', 550),\n    ('Dave', '開発', 800),\n    ('Eve', '営業', 480),\n    ('Frank', '開発', 750);\n''')\n\n# 部署別の平均年収\nfor row in cur.execute('''\n    SELECT dept, COUNT(*) AS n, AVG(salary) AS avg_salary\n    FROM employees\n    GROUP BY dept\n    ORDER BY avg_salary DESC\n'''):\n    print(row)\n\n# ウィンドウ関数: 部署内ランク\nprint('\\n--- 部署内ランク ---')\nfor row in cur.execute('''\n    SELECT name, dept, salary,\n           RANK() OVER (PARTITION BY dept ORDER BY salary DESC) AS rk\n    FROM employees\n    ORDER BY dept, rk\n'''):\n    print(row)",
      },
      {
        type: "practical",
        title: "🛠 学習の最短ルート",
        body: "SELECT → WHERE → JOIN → GROUP BY → ウィンドウ関数 の順。最初の 4 つで日常分析の 80%、ウィンドウ関数まで使えると DS 上級。練習は LeetCode/SQLZoo/StrataScratch がおすすめ。",
      },
      { type: "h3", text: "次に進む" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[SQL 中級 ─ ML エンジニアが書く 7 つの定石](/blog/sql-intermediate-for-data)",
          "[Pandas 実務 Tips 10 選](/blog/pandas-tips-for-ml)",
          "[Python 環境構築 完全ガイド](/blog/python-setup-for-stats)",
          "[scikit-learn 入門](/blog/sklearn-introduction) ─ 機械学習へ",
        ],
      },
    ],
  },
];

export default function ProgrammingPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "プログラミング", href: "/programming" },
        ]}
      />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>プログラミング入門ミニ教科書</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Programming</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          プログラミング入門ミニ教科書
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose">
          AI エンジニア・データサイエンティストに必要な{" "}
          <strong>Python(基礎・NumPy・Pandas)</strong> と <strong>SQL</strong>{" "}
          を 4 章でまとめた実装ミニ教科書。サンプルコードはすべて{" "}
          <strong>ブラウザ内で実行可能</strong>(Pyodide)で、書き換えても動きます。
        </p>
        <p className="text-xs text-[var(--muted)] ui-sans mt-4 leading-relaxed">
          ※ 初回は Pyodide(~10MB)を CDN から読み込みます。読込後は爆速で実行できます。SQL は標準ライブラリ sqlite3 経由で実行。
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
          <h2 className="text-xl font-bold">次のステップ</h2>
        </header>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm ui-sans">
          <li>
            <Link href="/textbook" className="text-[var(--link)] hover:underline">
              統計教科書 ─ 級別の本文
            </Link>
          </li>
          <li>
            <Link href="/blog" className="text-[var(--link)] hover:underline">
              ブログ ─ Python・SQL・ML 実装記事
            </Link>
          </li>
          <li>
            <Link href="/causal-inference" className="text-[var(--link)] hover:underline">
              因果推論ミニ教科書
            </Link>
          </li>
          <li>
            <Link href="/roadmap" className="text-[var(--link)] hover:underline">
              AIエンジニア・ロードマップ
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
