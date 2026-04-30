import type { Metadata } from "next";
import Link from "next/link";
import type { TextbookBlock } from "@/types/content";
import { TextbookBody } from "@/components/TextbookBody";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "時系列分析入門 ─ ARIMA・Prophet・状態空間モデル",
  description:
    "時系列データの分析手法を 6 章でコンパクトに学ぶミニ教科書。トレンド・季節分解、自己相関、AR/MA/ARIMA、Prophet、状態空間モデル、評価まで。Python 実行可能なコード付き。",
  alternates: { canonical: "/time-series" },
  openGraph: {
    title: "時系列分析入門ミニ教科書",
    description: "ARIMA・Prophet・状態空間モデルを 6 章で。",
    type: "article",
  },
};

const CHAPTERS: { id: string; number: string; title: string; blocks: TextbookBlock[] }[] = [
  {
    id: "ch1",
    number: "1",
    title: "時系列データの特徴",
    blocks: [
      {
        type: "p",
        text: "時系列データとは **時刻順に並んだ観測値の列**。売上・株価・気温・サーバ負荷など、ビジネスの中核データの多くが時系列。普通の回帰と違い、**順序・自己相関・季節性** を扱う必要があります。",
      },
      { type: "h3", text: "時系列の 4 成分" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**トレンド(Trend)**: 長期的な増減傾向",
          "**季節成分(Seasonality)**: 周期的なパターン(年・月・週・日内)",
          "**周期成分(Cycle)**: 季節と違い周期長が一定でない波(景気循環など)",
          "**残差(Residual / Irregular)**: トレンド・季節を除いた不規則な変動",
        ],
      },
      { type: "math", tex: "y_t = \\text{Trend}_t + \\text{Season}_t + \\text{Cycle}_t + \\text{Residual}_t" },
      {
        type: "figure",
        kind: "time-series-decomposition",
        caption: "原系列 = トレンド + 季節 + 残差 に分解",
      },
      { type: "h3", text: "定常性(Stationarity)" },
      {
        type: "def",
        title: "弱定常",
        body: "**期待値・分散・自己共分散** が時間に依存しない時系列を **(弱)定常** と呼ぶ。\n\n多くの時系列モデルは **定常性を前提** とする。トレンドや季節があると非定常 → **差分** や **季節差分** を取って定常化する。",
      },
      {
        type: "intuition",
        title: "💡 なぜ定常性が必要か",
        body: "ランダムウォーク(株価のような非定常)を、定常を前提とした AR モデルでそのまま当てると **見せかけの相関** が出て予測がデタラメになる。**まず差分を取って定常化** してからモデル化するのが時系列分析の鉄則。",
      },
      {
        type: "code",
        title: "ADF 検定で定常性を確認",
        runnable: true,
        python:
          "import numpy as np\nfrom statsmodels.tsa.stattools import adfuller\n\nrng = np.random.default_rng(0)\n# 非定常: ランダムウォーク\nrw = np.cumsum(rng.normal(0, 1, 200))\n# 定常: ホワイトノイズ\nwn = rng.normal(0, 1, 200)\n\nfor name, x in [('random walk', rw), ('white noise', wn)]:\n    stat, p, *_ = adfuller(x)\n    verdict = '定常' if p < 0.05 else '非定常'\n    print(f'{name:>15}  ADF={stat:7.3f}  p={p:.4f}  → {verdict}')",
      },
    ],
  },
  {
    id: "ch2",
    number: "2",
    title: "自己相関と ACF / PACF",
    blocks: [
      {
        type: "p",
        text: "時系列の最大の特徴は **過去の値と現在の値が相関している** こと。これを定量化するのが **自己相関関数(ACF)** と **偏自己相関関数(PACF)**。",
      },
      { type: "h3", text: "自己相関関数(ACF)" },
      { type: "math", tex: "\\rho(k) = \\frac{\\mathrm{Cov}(y_t, y_{t-k})}{\\mathrm{Var}(y_t)}" },
      {
        type: "p",
        text: "ラグ $k$ だけ離れた観測値同士の相関。AR(1) モデルなら指数減衰、MA(q) モデルなら $q$ ラグ目で **ストン** と消える。",
      },
      {
        type: "figure",
        kind: "acf-plot",
        caption: "ACF: AR(1) は指数減衰、MA(q) は q 次でストン",
      },
      { type: "h3", text: "偏自己相関関数(PACF)" },
      {
        type: "p",
        text: "中間のラグの影響を取り除いた『純粋な』ラグ $k$ の相関。**AR(p) のオーダー判定** に使う(PACF が p ラグ目で消える)。",
      },
      { type: "h3", text: "ACF / PACF の組み合わせでモデル選択" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**AR(p)**: ACF 緩やか減衰 / PACF が p ラグ目で消える",
          "**MA(q)**: ACF が q ラグ目で消える / PACF 緩やか減衰",
          "**ARMA(p,q)**: 両方とも緩やか減衰",
        ],
      },
      {
        type: "practical",
        title: "🛠 実務での読み方",
        body: "PACF が 1 ラグ目だけ突き出ていれば AR(1)、2 ラグ目まで突き出ていれば AR(2)、と直感的にオーダーが推定できる。実務では `auto_arima`(pmdarima)で AIC 最小のモデルを自動選択することも多い。",
      },
    ],
  },
  {
    id: "ch3",
    number: "3",
    title: "AR / MA / ARIMA モデル",
    blocks: [
      {
        type: "p",
        text: "**ARIMA(p, d, q)** は時系列分析の古典的かつ強力な汎用モデル。AR(自己回帰)・I(差分)・MA(移動平均)の 3 要素で構成。",
      },
      { type: "h3", text: "AR(p) ─ 自己回帰モデル" },
      { type: "math", tex: "y_t = c + \\phi_1 y_{t-1} + \\phi_2 y_{t-2} + \\dots + \\phi_p y_{t-p} + \\varepsilon_t" },
      {
        type: "p",
        text: "**過去 $p$ 期の自分自身** から現在を線形回帰。$\\phi$ を1未満にすると定常。",
      },
      { type: "h3", text: "MA(q) ─ 移動平均モデル" },
      { type: "math", tex: "y_t = \\mu + \\varepsilon_t + \\theta_1 \\varepsilon_{t-1} + \\dots + \\theta_q \\varepsilon_{t-q}" },
      {
        type: "p",
        text: "**過去 $q$ 期の誤差(ショック)** が現在に影響する構造。AR と双対的な関係(無限和で相互に表現可能)。",
      },
      { type: "h3", text: "ARIMA(p, d, q)" },
      {
        type: "def",
        title: "差分を加えた汎用モデル",
        body: "**I(d)**: $d$ 階差分を取って定常化。\n\n例: ARIMA(1, 1, 1) は『1 階差分後に AR(1) + MA(1) を当てる』モデル。\n\n**SARIMA(p,d,q)(P,D,Q,s)**: 季節差分・季節 AR・季節 MA を加えた季節版。$s$ は周期(月次なら 12)。",
      },
      {
        type: "code",
        title: "ARIMA を当てはめる",
        runnable: true,
        python:
          "import numpy as np\nfrom statsmodels.tsa.arima.model import ARIMA\n\nrng = np.random.default_rng(0)\n# AR(1) シミュレーション: y_t = 0.7 y_{t-1} + e\nn = 200\ny = np.zeros(n)\nfor t in range(1, n):\n    y[t] = 0.7 * y[t-1] + rng.normal(0, 1)\n\nmodel = ARIMA(y, order=(1, 0, 0)).fit()\nprint(model.summary().tables[1])  # 係数表だけ\nprint(f'\\n推定 AR(1) 係数: {model.params[1]:.3f}(真値 0.7)')",
      },
      {
        type: "intuition",
        title: "💡 ARIMA の限界",
        body: "ARIMA は線形・1 変量・短期予測に強い。**長期予測** は単に平均値に収束する弱点があり、**非線形パターン**(指数増加・閾値効果)も苦手。これらは Prophet や状態空間モデル、最近では Transformer ベースの時系列モデル(Temporal Fusion Transformer 等)が補う。",
      },
    ],
  },
  {
    id: "ch4",
    number: "4",
    title: "Prophet ─ ビジネス向け汎用ツール",
    blocks: [
      {
        type: "p",
        text: "**Prophet** は Meta が公開したオープンソース時系列予測ライブラリ。**ARIMA より使いやすく、季節性・休日効果を自動で扱う** ためビジネス分析で広く採用。",
      },
      { type: "h3", text: "モデル構造" },
      { type: "math", tex: "y(t) = g(t) + s(t) + h(t) + \\varepsilon_t" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**g(t)**: トレンド(線形 or ロジスティック)",
          "**s(t)**: 季節性(年・週・日次)",
          "**h(t)**: 休日効果(クリスマス・ブラックフライデーなど)",
          "**ε**: 残差",
        ],
      },
      { type: "h3", text: "Prophet の強み" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**欠損値・外れ値に頑健**(ベイズ的に推定)",
          "**変化点(changepoint)** を自動検出 → トレンドの折れ目を表現",
          "**ハイパーパラメータ調整が少ない**(初心者でも使える)",
          "**休日リスト**(`holidays` パラメータ)で日本の祝日も簡単に扱える",
          "**信頼区間** を自動で出力",
        ],
      },
      {
        type: "code",
        title: "Prophet で 30 日予測(疑似コード)",
        python:
          "# pip install prophet\nfrom prophet import Prophet\nimport pandas as pd\n\n# df: ds(日付), y(値) の 2 列\ndf = pd.read_csv('sales.csv')\n\nm = Prophet(\n    yearly_seasonality=True,\n    weekly_seasonality=True,\n    holidays=pd.DataFrame({\n        'holiday': 'cyber-monday',\n        'ds': pd.to_datetime(['2024-12-02', '2025-12-01']),\n    }),\n)\nm.fit(df)\n\nfuture = m.make_future_dataframe(periods=30)\nforecast = m.predict(future)\nprint(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())",
      },
      {
        type: "practical",
        title: "🛠 実務での使い分け",
        body: "**Prophet が向く**: 日次〜月次のビジネス時系列、季節性が明確、休日効果が大きい(EC・小売・観光)。\n\n**ARIMA が向く**: 短期高精度予測、定常 / 弱季節性データ、統計的解釈が必要。\n\n**深層学習(LSTM・Transformer)が向く**: 多変量・大規模・長期依存・非線形パターン。",
      },
    ],
  },
  {
    id: "ch5",
    number: "5",
    title: "状態空間モデルとカルマンフィルタ",
    blocks: [
      {
        type: "p",
        text: "**状態空間モデル(State Space Model)** は、観測値の背後に **隠れた状態** を仮定する柔軟なフレームワーク。ARIMA・指数平滑法・Prophet などの背景にある統一理論でもあります。",
      },
      { type: "h3", text: "基本構造" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**状態方程式**: $x_t = F x_{t-1} + w_t$(状態の遷移)",
          "**観測方程式**: $y_t = H x_t + v_t$(状態から観測値へ)",
          "$w_t, v_t$ は独立な正規ノイズ",
        ],
      },
      { type: "h3", text: "カルマンフィルタ" },
      {
        type: "def",
        title: "逐次的に状態を推定するアルゴリズム",
        body: "**予測ステップ**: 時刻 $t-1$ までの情報で時刻 $t$ の状態を予測\n\n**更新ステップ**: 時刻 $t$ の観測値で予測を補正\n\nこれを繰り返すことで、**雑音だらけの観測値から真の状態を抽出** できる。GPS のノイズ補正・ロボット制御・経済時系列・宇宙工学で広く使用。",
      },
      { type: "h3", text: "局所水準モデル(最も簡単な状態空間モデル)" },
      {
        type: "p",
        text: "**$\\mu_t = \\mu_{t-1} + w_t$**(レベルがランダムウォーク)、**$y_t = \\mu_t + v_t$**(観測誤差付きで観測)。\n\n指数平滑法と等価で、**ノイズの多いデータから滑らかなトレンド** を抽出できる。",
      },
      { type: "h3", text: "拡張・派生" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**局所線形トレンドモデル**: レベル + スロープ。長期予測に強い",
          "**基本構造時系列モデル(BSM)**: レベル + スロープ + 季節 + 周期",
          "**動的線形モデル(DLM)**: 係数が時間変化する回帰",
          "**粒子フィルタ**: 非線形・非ガウスに対応",
        ],
      },
      {
        type: "practical",
        title: "🛠 Python ライブラリ",
        body: "**`statsmodels.tsa.statespace`**: SARIMAX・UnobservedComponents・DynamicFactor 等。**`pykalman`**: シンプルなカルマンフィルタ。**`tensorflow_probability.sts`**: ベイズ推定で状態空間モデル。",
      },
    ],
  },
  {
    id: "ch6",
    number: "6",
    title: "予測精度の評価とバックテスト",
    blocks: [
      {
        type: "p",
        text: "時系列予測の評価は **普通の機械学習と違う** ─ **時間順を保った検証** が必須。",
      },
      { type: "h3", text: "評価指標" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**MAE(平均絶対誤差)**: 解釈しやすい。外れ値に頑健",
          "**RMSE**: 大きな誤差を強調。最適化向き",
          "**MAPE(平均絶対パーセント誤差)**: $\\frac{1}{n}\\sum|y_t - \\hat{y}_t| / |y_t|$。**売上予測など『%』で語る業界の標準**。0 付近の値があると不安定",
          "**SMAPE**: 対称版 MAPE。0 付近にも頑健",
          "**MASE**: ナイーブ予測(前期同値)との相対誤差。スケール非依存で比較しやすい",
        ],
      },
      { type: "h3", text: "ローリング(時系列)交差検証" },
      {
        type: "def",
        title: "Time Series Cross-Validation",
        body: "**過去データで学習 → 未来データで検証** を時間軸に沿って繰り返す。\n\n例: 1〜100 で学習 → 101〜110 で評価 / 1〜110 で学習 → 111〜120 で評価 / ...\n\n**未来データを学習に使わない** のがポイント。普通の k-fold CV は時系列では使えない。",
      },
      {
        type: "code",
        title: "TimeSeriesSplit でローリング CV",
        runnable: true,
        python:
          "import numpy as np\nfrom sklearn.model_selection import TimeSeriesSplit\n\nX = np.arange(20)\ntscv = TimeSeriesSplit(n_splits=4)\nfor i, (tr, te) in enumerate(tscv.split(X)):\n    print(f'fold {i}: train={X[tr].tolist()}  test={X[te].tolist()}')",
      },
      { type: "h3", text: "予測区間と確率的予測" },
      {
        type: "p",
        text: "「来月の売上予測 100」より、**「来月の売上予測 100、80% 区間 [85, 115]」** の方が実務には有用。在庫量や人員配置の意思決定が **不確実性を考慮できる** ため。Prophet・ベイズ法・分位点回帰で出力可能。",
      },
      { type: "h3", text: "次に学ぶこと" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[**準1級 教科書 第 4 章 時系列**](/textbook/grade-pre1) ─ 統計検定の標準理論",
          "[**ブログ: 時系列予測 入門**](/blog/time-series-forecasting-introduction)",
          "[**プログラミング入門**](/programming) ─ Pandas で時系列を扱う",
          "深層学習: LSTM / Temporal Fusion Transformer / N-BEATS",
        ],
      },
    ],
  },
];

export default function TimeSeriesPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "時系列分析", href: "/time-series" },
        ]}
      />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>時系列分析入門ミニ教科書</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Time Series</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          時系列分析入門ミニ教科書
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose">
          売上・株価・気温・サーバ負荷 ── ビジネスデータの多くが時系列です。本ミニ教科書は{" "}
          <strong>定常性 → ACF/PACF → ARIMA → Prophet → 状態空間 → 評価</strong>{" "}
          の順に 6 章で全体像を掴める構成。Python 実行可能なコード付き。
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
    </article>
  );
}
