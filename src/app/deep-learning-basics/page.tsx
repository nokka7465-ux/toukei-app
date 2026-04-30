import type { Metadata } from "next";
import Link from "next/link";
import type { TextbookBlock } from "@/types/content";
import { TextbookBody } from "@/components/TextbookBody";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ディープラーニング基礎 ─ NN・最適化・CNN・RNN・正則化",
  description:
    "ディープラーニングの基礎を 5 章でコンパクトに学べる無料ミニ教科書。ニューラルネット・誤差逆伝播・最適化アルゴリズム・CNN・RNN・正則化を Python 実行可能なコード付きで。",
  alternates: { canonical: "/deep-learning-basics" },
  openGraph: {
    title: "ディープラーニング基礎ミニ教科書",
    description: "NN・最適化・CNN・RNN・正則化を 5 章で。",
    type: "article",
  },
};

const CHAPTERS: { id: string; number: string; title: string; blocks: TextbookBlock[] }[] = [
  {
    id: "ch1",
    number: "1",
    title: "ニューラルネットの仕組み",
    blocks: [
      {
        type: "p",
        text: "**ニューラルネットワーク(NN)** は、生物の脳神経系を模した計算モデル。**入力 → 線形変換 + 非線形活性化 → 出力** という基本ユニットを多層に重ねたものが **ディープラーニング**。",
      },
      { type: "h3", text: "1 つのニューロン" },
      { type: "math", tex: "y = f\\left(\\sum_i w_i x_i + b\\right)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "$x_i$: 入力",
          "$w_i$: 重み(学習対象)",
          "$b$: バイアス(学習対象)",
          "$f$: 活性化関数(ReLU・Sigmoid・Tanh など)",
        ],
      },
      { type: "h3", text: "多層パーセプトロン(MLP)" },
      {
        type: "p",
        text: "ニューロンを **層状に並べ**、層と層を全結合(fully connected)で繋いだもの。**入力層 → 隠れ層 × N → 出力層** の構造。",
      },
      {
        type: "figure",
        kind: "neural-net-forward",
        caption: "順伝播 ─ 入力 → 線形変換 + 活性化 を繰り返して出力へ",
      },
      {
        type: "intuition",
        title: "💡 なぜ多層が強力か",
        body: "1 層だけでは線形分類器と同じ能力しかない(パーセプトロンの限界)。**非線形活性化を挟んで多層化する** ことで、論理回路のような **表現力指数増加** が起きる。XOR 問題のような『線形では解けない問題』が解けるようになる。",
      },
      { type: "h3", text: "活性化関数" },
      {
        type: "figure",
        kind: "activation-functions",
        caption: "代表的な活性化関数の比較",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**ReLU**($\\max(0, x)$): 深層でも勾配が流れる定番",
          "**Sigmoid**: 出力 0〜1。分類の最終層に",
          "**Tanh**: 出力 -1〜1。中央性能良好",
          "**Softmax**: 多クラス分類の最終層(出力が確率分布に)",
          "**GELU / Swish**: Transformer の主流",
        ],
      },
      {
        type: "code",
        title: "純 NumPy で 1 層 NN の順伝播",
        runnable: true,
        python:
          "import numpy as np\n\ndef relu(x): return np.maximum(0, x)\ndef softmax(x):\n    e = np.exp(x - x.max())\n    return e / e.sum()\n\nrng = np.random.default_rng(0)\nx = rng.normal(0, 1, 4)        # 4 次元入力\nW1 = rng.normal(0, 0.3, (4, 8))  # 4→8\nb1 = np.zeros(8)\nW2 = rng.normal(0, 0.3, (8, 3))  # 8→3 クラス\nb2 = np.zeros(3)\n\nh = relu(x @ W1 + b1)\ny = softmax(h @ W2 + b2)\nprint('入力:', x.round(3))\nprint('予測確率:', y.round(3), '合計:', y.sum().round(3))",
      },
    ],
  },
  {
    id: "ch2",
    number: "2",
    title: "誤差逆伝播法と最適化",
    blocks: [
      {
        type: "p",
        text: "学習 = **損失を減らすようにパラメータ(重み・バイアス)を更新する** こと。これを支えるのが **誤差逆伝播法(backpropagation)** と **勾配降下法**。",
      },
      { type: "h3", text: "学習の流れ" },
      {
        type: "list",
        style: "number",
        items: [
          "**順伝播**: 入力 → 各層を通って予測を出力",
          "**損失計算**: 予測と正解の差(MSE・交差エントロピー等)",
          "**逆伝播**: 連鎖律で各重みに対する勾配 $\\nabla L$ を計算",
          "**更新**: $w \\leftarrow w - \\eta \\nabla L$ で重みを更新",
        ],
      },
      { type: "h3", text: "損失関数" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**回帰**: MSE(平均二乗誤差)・MAE(平均絶対誤差)・Huber 損失",
          "**2 値分類**: Binary Cross-Entropy",
          "**多クラス分類**: Categorical Cross-Entropy",
          "**ランキング**: Triplet Loss・Contrastive Loss",
        ],
      },
      { type: "h3", text: "最適化アルゴリズム" },
      {
        type: "figure",
        kind: "gradient-descent-paths",
        caption: "最適化アルゴリズムごとの収束経路",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**SGD**: 確率的勾配降下法。シンプル、収束遅い",
          "**Momentum**: 慣性で振動を抑制",
          "**Adagrad / RMSprop**: 学習率を勾配の大きさで自動調整",
          "**Adam**: Momentum + RMSprop。**現代の標準**",
          "**AdamW**: Adam に正しい weight decay。Transformer 学習で標準",
        ],
      },
      { type: "h3", text: "学習率と Warmup" },
      {
        type: "p",
        text: "学習率(learning rate)は **最も重要なハイパーパラメータ**。大きすぎると発散、小さすぎると収束しない。**Cosine Annealing**(滑らかに減少)+ **Warmup**(最初は小さく → 徐々に上げる)が現代の標準。",
      },
      {
        type: "intuition",
        title: "💡 学習率の見つけ方",
        body: "**Learning Rate Range Test**(LR Finder): 学習率を徐々に大きくして損失をプロット。損失が最も急速に下がる手前が最適値。fast.ai 流の経験則。",
      },
    ],
  },
  {
    id: "ch3",
    number: "3",
    title: "CNN ─ 画像処理の標準",
    blocks: [
      {
        type: "p",
        text: "**CNN(Convolutional Neural Network)** は画像処理に特化した NN。**畳み込み層 + プーリング層 + 全結合層** の組み合わせで、画像から階層的に特徴を抽出する。",
      },
      { type: "h3", text: "畳み込み層(Convolution)" },
      {
        type: "def",
        title: "局所特徴を抽出するフィルタ",
        body: "**カーネル(フィルタ)** を画像にスライドさせて、**局所領域の重み付き和** を計算。\n\n**主要パラメータ**:\n- **カーネルサイズ**: 3×3 が標準\n- **ストライド**: スライド幅。2 以上で出力サイズが小さくなる\n- **パディング**: 端に 0 を詰めてサイズ調整\n- **チャネル数**: 出力の特徴マップ数",
      },
      { type: "h3", text: "プーリング層(Pooling)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**Max Pooling**: 領域内の最大値を取る。位置不変性を獲得",
          "**Average Pooling**: 領域内の平均",
          "**Global Average Pooling(GAP)**: 各チャネル全体の平均。最終層の全結合代わりに使うと過学習を抑制",
        ],
      },
      {
        type: "figure",
        kind: "cnn-architecture",
        caption: "CNN: Conv → Pool → Conv → Pool → FC → Softmax",
      },
      { type: "h3", text: "代表的アーキテクチャの変遷" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**LeNet(1998)**: 手書き数字認識の元祖",
          "**AlexNet(2012)**: ImageNet 革命。GPU 使用 + ReLU + Dropout",
          "**VGG(2014)**: 3×3 conv を深く積む",
          "**ResNet(2015)**: スキップ接続で 100 層超を実現",
          "**EfficientNet(2019)**: 幅・深さ・解像度を均衡良くスケール",
          "**Vision Transformer(2020)**: CNN を捨て Transformer のみで画像を",
        ],
      },
      {
        type: "intuition",
        title: "💡 ResNet の革命 ─ スキップ接続",
        body: "層を深くすると勾配消失で逆に悪化していたのを、**ショートカット接続**(入力をそのまま足す)で解決。**100 層 → 1000 層** が現実的になり、画像認識精度が飛躍的に向上。最新の Transformer や Diffusion でも標準で使われる発想。",
      },
      {
        type: "code",
        title: "PyTorch で簡単な CNN(参考)",
        python:
          "import torch.nn as nn\n\nclass SimpleCNN(nn.Module):\n    def __init__(self, num_classes=10):\n        super().__init__()\n        self.features = nn.Sequential(\n            nn.Conv2d(3, 32, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),\n            nn.Conv2d(32, 64, 3, padding=1), nn.ReLU(), nn.MaxPool2d(2),\n            nn.AdaptiveAvgPool2d(1),\n        )\n        self.classifier = nn.Linear(64, num_classes)\n\n    def forward(self, x):\n        x = self.features(x).flatten(1)\n        return self.classifier(x)",
      },
    ],
  },
  {
    id: "ch4",
    number: "4",
    title: "RNN・LSTM・Transformer ─ 系列データ",
    blocks: [
      {
        type: "p",
        text: "テキスト・音声・時系列など **順序のあるデータ** を扱うアーキテクチャ。RNN → LSTM → Transformer と進化してきた。",
      },
      { type: "h3", text: "RNN(Recurrent Neural Network)" },
      {
        type: "def",
        title: "再帰構造で系列を扱う",
        body: "**前のステップの出力を次の入力に渡す** 構造で、可変長の系列に対応。\n\n$h_t = f(W_h h_{t-1} + W_x x_t + b)$\n\n**問題**: 長期依存で **勾配消失/爆発**。長い文章の文脈を保持できない。",
      },
      { type: "h3", text: "LSTM / GRU ─ ゲート機構" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**LSTM(Long Short-Term Memory)**: 入力ゲート・忘却ゲート・出力ゲートで情報を選択的に保持",
          "**GRU(Gated Recurrent Unit)**: LSTM を簡略化、計算が軽い",
          "**用途**: 機械翻訳・音声認識・時系列予測",
        ],
      },
      { type: "h3", text: "Transformer ─ 現代の主役" },
      {
        type: "p",
        text: "2017 年論文「**Attention is All You Need**」で発表。RNN を完全に捨て、**Self-Attention のみで系列を処理**。",
      },
      { type: "math", tex: "\\mathrm{Attention}(Q, K, V) = \\mathrm{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right) V" },
      {
        type: "figure",
        kind: "attention-heatmap",
        caption: "Self-Attention: トークン間の注目度行列",
      },
      {
        type: "figure",
        kind: "multi-head-attention",
        caption: "Multi-Head Attention: 複数視点で並列に attention",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "**並列計算可能** → 大規模学習に向く",
          "**長距離依存** を直接捉える",
          "**LLM(GPT・BERT・Claude)** の基盤",
          "**派生**: ViT(画像)・Whisper(音声)・AlphaFold2(タンパク質)",
        ],
      },
      {
        type: "intuition",
        title: "💡 Attention の直感",
        body: "Self-Attention は『**入力の各トークンが他のどのトークンに注目すべきか**』を学習する仕組み。文章の中の代名詞が指す先・関連語の関係性を、固定的な構造ではなく **データから動的に学ぶ** のがポイント。",
      },
    ],
  },
  {
    id: "ch5",
    number: "5",
    title: "正則化と過学習対策",
    blocks: [
      {
        type: "p",
        text: "ディープラーニングは **過学習(overfitting)しやすい** ─ 表現力が高すぎて訓練データを丸暗記してしまう。**正則化** でこれを抑制。",
      },
      { type: "h3", text: "1. Weight Decay(L2 正則化)" },
      {
        type: "p",
        text: "損失関数に **重みの二乗和ペナルティ** を追加して、重みが大きくなりすぎないようにする。$L = L_{\\text{data}} + \\lambda \\|w\\|^2$。AdamW では正しい重み減衰として組み込まれている。",
      },
      { type: "h3", text: "2. Dropout" },
      {
        type: "def",
        title: "ニューロンをランダムに無効化",
        body: "学習時に **確率 p で各ニューロンの出力を 0 に** する。\n\n**効果**:\n- 共適応(co-adaptation)を防ぐ\n- 暗黙のアンサンブル効果\n\n**標準値**: p = 0.5(全結合層)・p = 0.1〜0.2(畳み込み層)\n\n**推論時**: dropout を解除し、出力を p 倍にスケーリング(または学習時に 1/(1-p) 倍する Inverted Dropout)",
      },
      {
        type: "figure",
        kind: "dropout",
        caption: "Dropout: 学習時にランダムにニューロンを脱落",
      },
      { type: "h3", text: "3. Batch Normalization" },
      {
        type: "def",
        title: "各層の入力を標準化",
        body: "ミニバッチごとに **平均 0・分散 1** に標準化し、学習可能なスケール $\\gamma$・シフト $\\beta$ を加える。\n\n**効果**:\n- 学習が高速・安定\n- 大きな学習率を使える\n- 軽い正則化効果\n\n**現代の代替**: **Layer Normalization**(Transformer 標準)・**Group Norm**(小バッチ向け)",
      },
      {
        type: "figure",
        kind: "batch-norm",
        caption: "BatchNorm: 標準化 + 学習可能なスケール・シフト",
      },
      { type: "h3", text: "4. データ拡張(Data Augmentation)" },
      {
        type: "list",
        style: "bullet",
        items: [
          "**画像**: 回転・反転・クロップ・色調変更・Cutout・Mixup",
          "**テキスト**: 同義語置換・Back Translation",
          "**音声**: SpecAugment・ピッチシフト",
          "**新発想**: GAN や Diffusion で合成データを生成",
        ],
      },
      { type: "h3", text: "5. Early Stopping" },
      {
        type: "p",
        text: "**検証損失が改善しなくなった時点で学習を停止**。Keras なら EarlyStopping コールバック、PyTorch Lightning でも標準機能。",
      },
      {
        type: "figure",
        kind: "learning-curve",
        caption: "学習曲線: 検証誤差の最小点で早期終了",
      },
      { type: "h3", text: "6. 転移学習・ファインチューニング" },
      {
        type: "p",
        text: "事前学習済みモデル(ImageNet の ResNet、大規模テキストの BERT)を使い、**自分のタスクに合わせて少し再学習** する。**少データでも高精度** を実現する強力な手法。Hugging Face Hub が事前学習モデルの共有プラットフォーム。",
      },
      {
        type: "practical",
        title: "🛠 実務での組み合わせ",
        body: "**画像分類の標準パターン**: ImageNet 学習済み EfficientNet(or ResNet) + AdamW + Cosine LR + データ拡張(RandAugment) + Mixup + Early Stopping。これだけで **多くのデータセットで 90% 超** が出せる。\n\n**LLM ファインチューニング**: LoRA(Low-Rank Adaptation)で省メモリに重みを少しだけ更新する手法が標準。",
      },
      { type: "h3", text: "次のステップ" },
      {
        type: "list",
        style: "bullet",
        items: [
          "[**E 資格 教科書**](/certs/e-shikaku/textbook) ─ より体系的な深層学習",
          "[**G 検定 教科書**](/certs/g-test/textbook) ─ 概念ベースで網羅",
          "[**プログラミング入門**](/programming) ─ PyTorch / scikit-learn で実装",
          "[**時系列分析**](/time-series) ─ 系列データの伝統的アプローチ",
          "[**ブログ: Transformer の数学**](/blog/transformer-math)",
        ],
      },
    ],
  },
];

export default function DLBasicsPage() {
  return (
    <article className="max-w-3xl mx-auto">
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "ディープラーニング基礎", href: "/deep-learning-basics" },
        ]}
      />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>ディープラーニング基礎ミニ教科書</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Deep Learning</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          ディープラーニング基礎ミニ教科書
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose">
          ディープラーニングの全体像を{" "}
          <strong>NN → 最適化 → CNN → RNN/Transformer → 正則化</strong>{" "}
          の 5 章で体系的に学べるミニ教科書。E 資格・G 検定対策にも、PyTorch を学ぶ前の概念整理にも。
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
