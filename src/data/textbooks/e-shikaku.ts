import type { Textbook } from "@/types/content";

export const eShikakuTextbook: Textbook = {
  levelSlug: "e-shikaku",
  title: "E資格 教科書",
  intro:
    "E 資格(JDLA Engineer)は、ディープラーニングを **実装できる** エンジニアであることを認定する検定です。G 検定が概念中心だったのに対し、E 資格では数学的基礎(線形代数・微分・確率)・順伝播 / 逆伝播の手計算・最適化アルゴリズム・CNN/RNN/Transformer といったアーキテクチャの理解と実装が問われます。本サイトでは試験範囲(2024 年シラバス準拠)を 6 章に圧縮し、最低限の数式と図解、Python/PyTorch の代表コードで通読できる形にまとめました。",
  chapters: [
    {
      id: "ch1",
      number: 1,
      title: "数学的基礎",
      overview:
        "E 資格で前提となる線形代数・微分・確率・情報理論の道具立てを整理します。",
      sections: [
        {
          id: "ch1-sec1",
          number: "1.1",
          title: "線形代数(ベクトル・行列・テンソル)",
          blocks: [
            {
              type: "p",
              text: "ニューラルネットの順伝播は、本質的には **行列とベクトルの掛け算 + 非線形変換** の繰り返しです。E 資格では特に、テンソル(3 次元以上の配列)としてのデータ表現、固有値分解・特異値分解(SVD)が頻出します。",
            },
            { type: "h3", text: "ベクトル・行列・テンソル" },
            {
              type: "def",
              title: "用語 ─ テンソル",
              body: "**0 階**: スカラー(数 1 つ)/ **1 階**: ベクトル / **2 階**: 行列 / **3 階以上**: テンソル。\n\nDL ではバッチ画像を $(N, C, H, W)$ の 4 階テンソルで扱う(N=バッチサイズ、C=チャンネル数、H=高さ、W=幅)。",
            },
            { type: "h3", text: "重要な行列演算" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**転置 $A^\\top$**: 行と列を入れ替える",
                "**内積 $\\mathbf{a}^\\top \\mathbf{b}$**: スカラーが返る、両者の類似度",
                "**行列積 $AB$**: $A$ の列数 = $B$ の行数",
                "**逆行列 $A^{-1}$**: $AA^{-1} = I$、正方行列でランクが満ちている場合のみ",
                "**トレース $\\mathrm{tr}(A) = \\sum_i A_{ii}$**: 対角和、固有値の和に等しい",
              ],
            },
            { type: "h3", text: "固有値分解と SVD" },
            {
              type: "def",
              title: "定理 ─ 固有値分解(対称行列)",
              body: "実対称行列 $A$ は $\\;A = V \\Lambda V^\\top\\;$ と分解できる。$V$ は固有ベクトルを並べた直交行列、$\\Lambda$ は固有値を対角に並べた行列。**PCA は共分散行列のこの分解** に他ならない。",
            },
            {
              type: "def",
              title: "定理 ─ 特異値分解 (SVD)",
              body: "任意の $m \\times n$ 行列 $A$ は $\\;A = U \\Sigma V^\\top\\;$ と分解できる。$U, V$ は直交行列、$\\Sigma$ は非負特異値を対角に並べた長方形行列。データ圧縮・推薦システム・PCA の高次元安定実装などに使う。",
            },
            {
              type: "intuition",
              title: "DL の重み行列も『変換装置』",
              body: "全結合層の重み $W$ は、ある層のベクトル空間から次の層のベクトル空間への線形変換です。SVD で見ると『回転 → 伸縮 → 回転』に分解できます。これが分かると、層を多重に積むことが『変換の合成』であり、活性化関数を挟まないと結局は 1 つの線形変換に潰れる ─ という理解につながります。",
            },
            {
              type: "code",
              title: "NumPy での主要演算",
              python: `import numpy as np

# 内積・行列積
a = np.array([1, 2, 3]); b = np.array([4, 5, 6])
print(a @ b)              # 32(内積)

W = np.random.randn(3, 4)
x = np.random.randn(4)
print(W @ x)              # 行列ベクトル積

# 固有値分解(対称行列)
A = np.array([[2, 1], [1, 2]])
vals, vecs = np.linalg.eig(A)

# 特異値分解 (SVD)
U, S, Vt = np.linalg.svd(W)`,
              caption: "PyTorch では同じ操作が torch.matmul / torch.linalg.eig / torch.linalg.svd で書ける。",
            },
          ],
        },
        {
          id: "ch1-sec2",
          number: "1.2",
          title: "微分と勾配",
          blocks: [
            {
              type: "p",
              text: "DL の学習は **勾配を使った最小化** です。本節では、E 資格で必要な多変数微分・連鎖律・ヤコビアン / ヘッセ行列を整理します。",
            },
            { type: "h3", text: "偏微分と勾配ベクトル" },
            {
              type: "def",
              title: "定義 ─ 勾配ベクトル",
              body: "多変数関数 $f(\\mathbf{x}) = f(x_1, \\ldots, x_n)$ の勾配は\n\n$\\;\\nabla f = \\left( \\dfrac{\\partial f}{\\partial x_1}, \\ldots, \\dfrac{\\partial f}{\\partial x_n} \\right)^\\top\\;$\n\n各成分を偏微分で並べたベクトル。**$f$ が最も急激に増える方向**を指す。",
            },
            { type: "h3", text: "連鎖律(チェーンルール)" },
            {
              type: "def",
              title: "定理 ─ 連鎖律(多変数版)",
              body: "$z = f(\\mathbf{y}),\\ \\mathbf{y} = g(\\mathbf{x})$ のとき、\n\n$\\;\\dfrac{\\partial z}{\\partial x_i} = \\sum_j \\dfrac{\\partial z}{\\partial y_j} \\dfrac{\\partial y_j}{\\partial x_i}\\;$\n\n行列形式: $\\;\\dfrac{\\partial z}{\\partial \\mathbf{x}} = J_g^\\top \\dfrac{\\partial z}{\\partial \\mathbf{y}}\\;$($J_g$ は $g$ のヤコビ行列)。",
            },
            {
              type: "intuition",
              title: "誤差逆伝播法は『連鎖律の機械適用』",
              body: "ニューラルネットを $L = f_n \\circ f_{n-1} \\circ \\cdots \\circ f_1$ という合成関数として書くと、入力に対する勾配は連鎖律で逐次的に計算できます。これが **逆伝播(backpropagation)** の数学的正体。フレームワーク(PyTorch, TensorFlow)はこの計算を **自動微分(autograd)** で機械的に実行してくれます。",
            },
            { type: "h3", text: "ヘッセ行列と 2 階情報" },
            {
              type: "def",
              title: "定義 ─ ヘッセ行列",
              body: "$H_{ij} = \\dfrac{\\partial^2 f}{\\partial x_i \\partial x_j}$ を並べた $n \\times n$ 対称行列。極小点では半正定値、極大点では半負定値。Newton 法はこれを使う 2 次最適化。",
            },
          ],
        },
        {
          id: "ch1-sec3",
          number: "1.3",
          title: "確率・情報理論",
          blocks: [
            {
              type: "p",
              text: "DL の損失関数は確率と情報理論の言葉で書かれます。エントロピー・KL ダイバージェンス・交差エントロピーは特に重要です。",
            },
            { type: "h3", text: "エントロピー" },
            {
              type: "def",
              title: "定義 ─ エントロピー",
              body: "離散分布 $P(x)$ について\n\n$\\;H(P) = -\\sum_x P(x) \\log P(x)\\;$\n\nを **エントロピー**(平均情報量)という。一様分布で最大、確定的な分布で 0。",
            },
            { type: "h3", text: "KL ダイバージェンスと交差エントロピー" },
            {
              type: "def",
              title: "定義 ─ KL ダイバージェンス",
              body: "$\\;D_{KL}(P \\| Q) = \\sum_x P(x) \\log \\dfrac{P(x)}{Q(x)}\\;$\n\n2 つの分布の『**ズレ**』を測る量。$\\geq 0$、等号成立は $P = Q$ のとき。非対称($D_{KL}(P\\|Q) \\neq D_{KL}(Q\\|P)$ 一般に)。",
            },
            {
              type: "def",
              title: "定義 ─ 交差エントロピー",
              body: "$\\;H(P, Q) = -\\sum_x P(x) \\log Q(x) = H(P) + D_{KL}(P\\|Q)\\;$\n\n分類問題の損失関数として標準。$P$ が真のラベル分布(one-hot)、$Q$ がモデルの出力確率。",
            },
            {
              type: "intuition",
              title: "なぜ交差エントロピーが分類で使われるのか",
              body: "「真の分布(正解ラベル)を表すのにモデル $Q$ で符号化したときの平均ビット長」が交差エントロピーです。これを最小化する = $Q$ が真の分布に近づく。**最尤推定 = 交差エントロピー最小化** とも等価で、数学的にも美しい統一になっています。",
            },
            {
              type: "code",
              title: "PyTorch で交差エントロピー損失",
              python: `import torch
import torch.nn.functional as F

# モデル出力 (logits) と正解ラベル
logits = torch.randn(8, 10)        # batch=8, クラス数=10
labels = torch.randint(0, 10, (8,))

# softmax + log + NLL を一発で
loss = F.cross_entropy(logits, labels)

# logits が確率(softmax 済み)なら nll_loss を使う
log_probs = F.log_softmax(logits, dim=-1)
loss2 = F.nll_loss(log_probs, labels)`,
              caption: "F.cross_entropy は内部で log_softmax + nll_loss を計算する。数値的に安定。",
            },
          ],
        },
      ],
    },
    {
      id: "ch2",
      number: 2,
      title: "機械学習の基礎",
      overview:
        "E 資格でも前提となる機械学習の枠組みと主要アルゴリズムを整理します。",
      sections: [
        {
          id: "ch2-sec1",
          number: "2.1",
          title: "学習の枠組みと評価",
          blocks: [
            {
              type: "p",
              text: "機械学習を 1 文で言うと『**データから関数を学習する**』こと。本節ではその基本枠組みと、過学習・汎化・バイアスバリアンスといったコア概念を整理します。",
            },
            { type: "h3", text: "教師あり / なし / 強化学習" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**教師あり**: ラベル付きデータから入力 → 出力の関数を学ぶ。回帰・分類",
                "**教師なし**: ラベルなしデータから構造を発見。クラスタリング・次元削減・密度推定",
                "**強化学習**: 報酬を最大化する行動方策を試行錯誤で学ぶ",
              ],
            },
            { type: "h3", text: "汎化誤差とバイアス・バリアンス分解" },
            {
              type: "def",
              title: "定理 ─ 期待 2 乗誤差の分解",
              body: "$\\;E[(\\hat f(x) - y)^2] = (\\text{Bias}[\\hat f(x)])^2 + \\mathrm{Var}[\\hat f(x)] + \\sigma^2\\;$\n\n$\\sigma^2$ はデータ自体のノイズ(取り除けない誤差)。",
            },
            {
              type: "figure",
              kind: "bias-variance",
              caption: "モデル複雑度に対するバイアス²・バリアンス・合計誤差のトレードオフ",
            },
            { type: "h3", text: "正則化" },
            {
              type: "def",
              title: "定義 ─ L1・L2 正則化",
              body: "損失に **重みの大きさへの罰則** を加えて過学習を抑える:\n\n- **L2(リッジ)**: $\\sum_j \\beta_j^2$ → 重みを小さく丸める。微分可能。\n- **L1(ラッソ)**: $\\sum_j |\\beta_j|$ → スパースな解(多くの重みが 0)。特徴選択に使える。",
            },
            {
              type: "intuition",
              title: "L1 がスパース解を生む幾何学的理由",
              body: "L2 の制約領域は球(等高線が滑らか)、L1 はダイヤモンド(角がある)。最適解は損失等高線と制約領域の接点 ─ ダイヤの『角』に当たりやすいので、いくつかの座標が完全にゼロになる。これが L1 のスパース性の幾何学的説明です。",
            },
            { type: "h3", text: "交差検証(CV)" },
            {
              type: "p",
              text: "データを K 分割し、各部分をテスト用に回しながら平均性能を評価する。**K=5 か 10** が典型的。少データでの汎化性能評価の標準。",
            },
            {
              type: "code",
              title: "scikit-learn での K-Fold CV",
              python: `from sklearn.model_selection import cross_val_score
from sklearn.linear_model import LogisticRegression

scores = cross_val_score(
    LogisticRegression(max_iter=1000),
    X, y, cv=5, scoring="accuracy"
)
print(f"{scores.mean():.3f} ± {scores.std():.3f}")`,
            },
          ],
        },
        {
          id: "ch2-sec2",
          number: "2.2",
          title: "古典的な機械学習アルゴリズム",
          blocks: [
            {
              type: "p",
              text: "DL 以前の機械学習で確立した **古典的な手法** も E 資格では出題されます。本節で網羅的に押さえましょう。",
            },
            { type: "h3", text: "回帰" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**線形回帰**: 損失 = 残差の 2 乗和、解は閉じた形(正規方程式)",
                "**リッジ回帰**: L2 正則化付き。多重共線性に強い",
                "**ラッソ回帰**: L1 正則化付き。特徴選択を自動で行う",
                "**Elastic Net**: L1 + L2 の組合せ",
              ],
            },
            { type: "h3", text: "分類" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ロジスティック回帰**: 線形 + ロジット。確率出力で二値・多クラス対応",
                "**SVM**: マージン最大化。カーネルトリックで非線形に拡張可",
                "**決定木**: 再帰的にデータを分割。解釈しやすいが過学習しやすい",
                "**ランダムフォレスト**: 多数決アンサンブル。バリアンスを下げる",
                "**勾配ブースティング**(XGBoost / LightGBM): 弱学習器を逐次的に追加。実務でも DL に並ぶ強力さ",
                "**k-近傍法 (k-NN)**: 最も近い k 個の近傍で投票。シンプル・高次元で性能低下",
                "**ナイーブベイズ**: 特徴間の条件付き独立を仮定。テキスト分類で高速",
              ],
            },
            { type: "h3", text: "教師なし" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**k-means**: WCSS 最小化。クラスタ数を事前に指定",
                "**階層的クラスタリング**: デンドログラムで樹形図",
                "**PCA**: 共分散行列の固有値分解で次元削減",
                "**t-SNE / UMAP**: 高次元の可視化に特化した非線形次元削減",
              ],
            },
            {
              type: "practical",
              title: "実務での選び方",
              body: "**構造化データ + 中規模(数千〜数十万行)**: XGBoost / LightGBM / CatBoost が実務的に最も強い。**画像 / 音声 / テキスト**: DL が圧倒。**少データ(数百行以下)**: シンプルなロジスティック回帰や決定木。これが現代の機械学習エンジニアの初手判断です。E 資格では DL 中心ですが、古典的手法との使い分けが分かっていることが評価されます。",
            },
          ],
        },
      ],
    },
    {
      id: "ch3",
      number: 3,
      title: "ディープラーニングの理論",
      overview:
        "ニューラルネットの順伝播・逆伝播・最適化を、E 資格レベルで丁寧に押さえます。",
      sections: [
        {
          id: "ch3-sec1",
          number: "3.1",
          title: "ニューラルネットと順伝播",
          blocks: [
            {
              type: "p",
              text: "ニューラルネットの基本単位は **パーセプトロン**(線形変換 + 活性化関数)。これを多層に積み重ねたものが多層パーセプトロン(MLP)、さらに発展させたのがディープラーニングです。",
            },
            { type: "h3", text: "順伝播の数式" },
            {
              type: "def",
              title: "数式 ─ 1 層の順伝播",
              body: "入力 $\\mathbf{x}$、重み $W$、バイアス $\\mathbf{b}$、活性化関数 $\\sigma$ について:\n\n$\\;\\mathbf{z} = W \\mathbf{x} + \\mathbf{b}\\;$(線形変換、$\\mathbf{z}$ を **logit / pre-activation** という)\n$\\;\\mathbf{a} = \\sigma(\\mathbf{z})\\;$(活性化、要素ごとに適用)",
            },
            {
              type: "p",
              text: "$L$ 層のネットワークでは、これを順次適用: $\\mathbf{x} \\to \\mathbf{a}^{(1)} \\to \\mathbf{a}^{(2)} \\to \\cdots \\to \\mathbf{a}^{(L)} = \\hat{\\mathbf{y}}$。",
            },
            { type: "h3", text: "活性化関数の種類と特徴" },
            {
              type: "figure",
              kind: "activation-functions",
              caption: "Sigmoid / Tanh / ReLU / Leaky ReLU の比較",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Sigmoid $\\sigma(z) = 1/(1+e^{-z})$**: 出力 (0,1)。確率に解釈可能。深い層で勾配消失",
                "**Tanh**: 出力 (-1,1)。Sigmoid より中心化されているがやはり勾配消失",
                "**ReLU $\\max(0, z)$**: 正の領域で勾配 1。深層 NN で標準。負側で死ぬ問題(dying ReLU)",
                "**Leaky ReLU**: 負側に小さな傾き。dying ReLU 緩和",
                "**Softmax**: 多クラス分類の出力層。$\\sigma(z)_i = e^{z_i} / \\sum_j e^{z_j}$",
                "**GELU / Swish**: Transformer 系で使われる滑らか活性化",
              ],
            },
            {
              type: "intuition",
              title: "なぜ非線形活性化が必要なのか",
              body: "もし活性化関数を入れずに線形変換だけを重ねたら、ネットワーク全体が **1 つの線形変換** に潰れてしまいます($W_2(W_1 x) = (W_2 W_1) x$ で、$W_2 W_1$ もただの行列)。これでは線形回帰と同じ表現力しかない。**非線形性こそが多層化のメリットを生む**。普遍近似定理は『十分な幅と非線形性があれば、任意の連続関数を近似できる』と保証しています。",
            },
            { type: "h3", text: "損失関数" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**MSE(平均 2 乗誤差)**: 回帰の標準。$\\frac{1}{n} \\sum (y_i - \\hat y_i)^2$",
                "**交差エントロピー**: 分類の標準。Softmax と組合せる",
                "**Huber 損失**: MSE と MAE のハイブリッド。外れ値に頑健",
                "**Hinge 損失**: SVM や一部の DL モデル",
              ],
            },
          ],
        },
        {
          id: "ch3-sec2",
          number: "3.2",
          title: "誤差逆伝播法",
          blocks: [
            {
              type: "p",
              text: "誤差逆伝播法(backpropagation)は、損失関数の **重みに対する勾配** を効率的に計算するアルゴリズムです。連鎖律を機械的に適用するだけ ─ ですが、それゆえに任意のネットワーク構造で動きます。",
            },
            { type: "h3", text: "逆伝播のアルゴリズム" },
            {
              type: "list",
              style: "number",
              items: [
                "**順伝播**: 入力から出力まで計算し、各層の中間変数(pre-activation $\\mathbf{z}^{(l)}$、activation $\\mathbf{a}^{(l)}$)を保存する",
                "**出力層の誤差**: $\\delta^{(L)} = \\nabla_{\\mathbf{a}^{(L)}} L \\odot \\sigma'(\\mathbf{z}^{(L)})$",
                "**逆伝播**: $\\delta^{(l)} = (W^{(l+1)\\top} \\delta^{(l+1)}) \\odot \\sigma'(\\mathbf{z}^{(l)})$ を逆順に伝える",
                "**重みの勾配**: $\\dfrac{\\partial L}{\\partial W^{(l)}} = \\delta^{(l)} (\\mathbf{a}^{(l-1)})^\\top$",
              ],
            },
            { type: "h3", text: "勾配消失・勾配爆発" },
            {
              type: "p",
              text: "**勾配消失**: 深い層で勾配が指数的に小さくなる(Sigmoid/Tanh の微分が 1 未満)。**勾配爆発**: 逆に大きくなる。対策として ReLU・バッチ正規化・残差接続(ResNet)・勾配クリッピングが標準的。",
            },
            {
              type: "intuition",
              title: "残差接続(skip connection)の威力",
              body: "ResNet が革命的だった理由は **勾配が直接前の層に戻る経路を確保した** ことです。$\\mathbf{a}^{(l)} = \\mathbf{a}^{(l-1)} + F(\\mathbf{a}^{(l-1)})$ という単純な足し算により、たとえ $F$ の勾配が小さくても、足し算経路を通って勾配が損失なく伝わります。100 層以上の深いネットワークが学習可能になった鍵です。",
            },
            {
              type: "code",
              title: "PyTorch の自動微分",
              python: `import torch
import torch.nn as nn

# 簡単な MLP
model = nn.Sequential(
    nn.Linear(784, 256), nn.ReLU(),
    nn.Linear(256, 10)
)
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

# 1 ステップの学習
x, y = torch.randn(64, 784), torch.randint(0, 10, (64,))
optimizer.zero_grad()
logits = model(x)
loss = loss_fn(logits, y)
loss.backward()                # 逆伝播 — 全勾配を自動計算
optimizer.step()`,
              caption: "loss.backward() が連鎖律をトポロジカル順序で実行 → 各パラメータの .grad に勾配を格納。",
            },
          ],
        },
        {
          id: "ch3-sec3",
          number: "3.3",
          title: "最適化アルゴリズム",
          blocks: [
            {
              type: "p",
              text: "勾配が分かったら **どう動かすか** が最適化アルゴリズムの仕事。E 資格では SGD・Momentum・AdaGrad・RMSProp・Adam の特徴と更新式を押さえます。",
            },
            { type: "h3", text: "確率的勾配降下法 (SGD)" },
            {
              type: "def",
              title: "更新式 ─ SGD",
              body: "$\\;\\theta_{t+1} = \\theta_t - \\eta \\, g_t\\;$\n\n$\\eta$ は学習率、$g_t$ はミニバッチでの勾配。シンプルだが学習率の調整が難しい。",
            },
            { type: "h3", text: "Momentum と Nesterov" },
            {
              type: "def",
              title: "更新式 ─ Momentum",
              body: "$\\;v_{t+1} = \\beta v_t + g_t,\\quad \\theta_{t+1} = \\theta_t - \\eta v_{t+1}\\;$\n\n$\\beta \\approx 0.9$。**過去の勾配の指数加重平均** = 慣性。鞍点・狭い谷で振動を抑え、収束を加速。",
            },
            { type: "h3", text: "適応的学習率(AdaGrad / RMSProp / Adam)" },
            {
              type: "def",
              title: "更新式 ─ Adam",
              body: "$\\;m_t = \\beta_1 m_{t-1} + (1-\\beta_1) g_t\\;$(1 次モーメント)\n$\\;v_t = \\beta_2 v_{t-1} + (1-\\beta_2) g_t^2\\;$(2 次モーメント)\n$\\;\\hat m_t = m_t / (1 - \\beta_1^t),\\ \\hat v_t = v_t / (1 - \\beta_2^t)\\;$(バイアス補正)\n$\\;\\theta_{t+1} = \\theta_t - \\eta \\hat m_t / (\\sqrt{\\hat v_t} + \\varepsilon)\\;$\n\nMomentum の慣性 + RMSProp の適応的学習率を組合せた、現在もっとも標準的な最適化手法。",
            },
            {
              type: "figure",
              kind: "gradient-descent-paths",
              caption: "SGD(振動)・Momentum・Adam の収束経路の比較(楕円形の損失関数面)",
            },
            {
              type: "intuition",
              title: "Adam が事実上のデフォルトになった理由",
              body: "**学習率を要素ごとに自動調整** する(過去の勾配の 2 乗平均で割る)ので、特徴量のスケールが揃っていなくても安定して動く。**ハイパーパラメータが少ない**(基本 $\\eta = 0.001, \\beta_1=0.9, \\beta_2=0.999$ で動く)。一方で、汎化性能ではただの SGD + Momentum のほうが良いという報告もあり、最終的なモデルチューニングで切り替えることもある(SGD with warm restart など)。",
            },
            { type: "h3", text: "学習率スケジューリング" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Step decay**: エポックごとに学習率を 1/10 などに下げる",
                "**Cosine annealing**: コサイン関数で滑らかに下げる。Transformer 学習でデファクト",
                "**Warmup**: 学習初期に学習率を徐々に上げる。大規模学習で安定化",
                "**Adam の派生(AdamW)**: 重み減衰の扱いを修正したバージョン",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch4",
      number: 4,
      title: "主要なネットワーク構造",
      overview:
        "CNN・RNN/LSTM・Transformer という、現代の DL を支える 3 大アーキテクチャを整理します。",
      sections: [
        {
          id: "ch4-sec1",
          number: "4.1",
          title: "畳み込みニューラルネット (CNN)",
          blocks: [
            {
              type: "p",
              text: "**CNN(Convolutional Neural Network)** は画像処理で革命を起こしたアーキテクチャです。画像の **局所性** と **平行移動不変性** を活かす設計が特徴。",
            },
            {
              type: "figure",
              kind: "cnn-architecture",
              caption: "典型的な CNN: 入力 → 畳み込み + プーリングを繰り返し → 全結合 → Softmax",
            },
            { type: "h3", text: "畳み込み層" },
            {
              type: "def",
              title: "操作 ─ 畳み込み",
              body: "入力テンソル $X$ にカーネル $K$(小さなフィルタ、例: 3×3)をスライドさせ、各位置で要素積の和を取って出力テンソル $Y$ を作る:\n\n$\\;Y[i, j] = \\sum_{u, v} K[u, v] \\cdot X[i+u, j+v]\\;$\n\n複数のチャンネルがある場合は、チャンネル方向にも和を取る。**重み共有**(同じ K をすべての位置で使う)が CNN のキー特徴。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**ストライド**: スライドの間隔。ストライド=2 で出力サイズ半分",
                "**パディング**: 入力周囲をゼロで埋める。`same` で入出力サイズを保つ",
                "**カーネルサイズ**: 3×3 が最も一般的(VGG 以降)。1×1 はチャンネル次元の変換",
              ],
            },
            { type: "h3", text: "プーリング層" },
            {
              type: "p",
              text: "領域ごとに最大値(Max pooling)または平均(Average pooling)を取る操作。**ダウンサンプリング** + **位置のずれへの頑健性** を獲得する。Max pooling が一般的。",
            },
            { type: "h3", text: "代表的アーキテクチャ" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**LeNet (1998)**: 手書き数字認識の元祖。2 conv + 2 FC",
                "**AlexNet (2012)**: ImageNet 革命。ReLU + Dropout を採用",
                "**VGG (2014)**: 小さい 3×3 カーネルを多層に積む。シンプルで強力",
                "**ResNet (2015)**: 残差接続で 152 層まで深化。ImageNet 優勝",
                "**EfficientNet**: 幅・深さ・解像度のバランスを自動探索",
                "**Vision Transformer (ViT)**: CNN に代わって Transformer を画像に適用",
              ],
            },
            {
              type: "practical",
              title: "実務での画像分類ワークフロー",
              body: "**Step 1**: 既存の事前学習モデル(ResNet50・EfficientNet・ViT)を取得。**Step 2**: 最終層のみ自分のクラス数に置き換え(転移学習)。**Step 3**: 自分のデータセットで fine-tune。スクラッチから学習することは現代ではほぼなく、`torchvision.models` や `timm` の事前学習を活用するのが常識です。",
            },
          ],
        },
        {
          id: "ch4-sec2",
          number: "4.2",
          title: "再帰型ニューラルネット (RNN・LSTM・GRU)",
          blocks: [
            {
              type: "p",
              text: "系列データ(文章・音声・時系列)を扱うのが **RNN(Recurrent Neural Network)** とその発展形 LSTM・GRU。Transformer の登場後も基礎として重要です。",
            },
            { type: "h3", text: "基本 RNN" },
            {
              type: "def",
              title: "更新式 ─ 基本 RNN",
              body: "時刻 $t$ での隠れ状態 $\\mathbf{h}_t$ は、現時点の入力 $\\mathbf{x}_t$ と前時刻の隠れ状態 $\\mathbf{h}_{t-1}$ から計算:\n\n$\\;\\mathbf{h}_t = \\tanh(W_h \\mathbf{h}_{t-1} + W_x \\mathbf{x}_t + \\mathbf{b})\\;$\n\n出力: $\\mathbf{y}_t = W_y \\mathbf{h}_t$。",
            },
            {
              type: "p",
              text: "課題: **長期依存性が学習できない**。系列が長くなると勾配が消失または爆発する(BPTT、Backpropagation Through Time)。",
            },
            { type: "h3", text: "LSTM(Long Short-Term Memory)" },
            {
              type: "def",
              title: "構成 ─ LSTM のゲート",
              body: "**忘却ゲート $\\mathbf{f}_t$**: 過去の情報をどれだけ捨てるか\n**入力ゲート $\\mathbf{i}_t$**: 新しい情報をどれだけ取り込むか\n**出力ゲート $\\mathbf{o}_t$**: セル状態を出力にどれだけ反映するか\n**セル状態 $\\mathbf{c}_t$**: 長期記憶を保持する内部変数",
            },
            {
              type: "intuition",
              title: "ゲート機構の発想",
              body: "RNN の問題は『**過去をすべて重みつきで足し続ける**』こと。それを LSTM は『**選択的に記憶・忘却する**』ように変えた。シグモイドゲート(0〜1 の値)が『どれだけ通すか』を学習可能なパラメータとして決定 ─ これにより 100 ステップ以上の長期依存も学習できるようになりました。",
            },
            { type: "h3", text: "GRU(Gated Recurrent Unit)" },
            {
              type: "p",
              text: "LSTM のゲートを 3 つから 2 つ(**更新ゲート + リセットゲート**)に簡略化したモデル。LSTM とほぼ同等の性能をより少ないパラメータで実現。",
            },
            { type: "h3", text: "Encoder-Decoder と Attention" },
            {
              type: "p",
              text: "機械翻訳のような **系列 → 系列** 変換では、Encoder で入力系列を 1 つの固定長ベクトルに圧縮し、Decoder が出力系列を生成する Encoder-Decoder 構造が標準でした。しかし長い系列で性能が落ちる問題があり、**Attention 機構**(Decoder が Encoder の各時刻に重み付きでアクセス)で大きく改善 ─ これが Transformer への布石になります。",
            },
          ],
        },
        {
          id: "ch4-sec3",
          number: "4.3",
          title: "Transformer と大規模言語モデル",
          blocks: [
            {
              type: "p",
              text: "**Transformer**(2017、論文「Attention Is All You Need」)は、RNN の再帰構造を捨て、**Attention 機構のみ** で系列処理を行う革命的アーキテクチャ。BERT・GPT などの大規模言語モデル(LLM)の基盤です。",
            },
            { type: "h3", text: "Self-Attention" },
            {
              type: "def",
              title: "計算 ─ Scaled Dot-Product Attention",
              body: "入力 $X$ から **クエリ Q・キー K・値 V** を線形変換で作る。各クエリが各キーとの類似度に応じて、対応する値を重み付き集約:\n\n$\\;\\mathrm{Attention}(Q, K, V) = \\mathrm{softmax}\\!\\left(\\dfrac{Q K^\\top}{\\sqrt{d_k}}\\right) V\\;$\n\n$\\sqrt{d_k}$ で割るのは、内積のスケール調整で勾配を安定化させるため。",
            },
            { type: "h3", text: "Multi-Head Attention" },
            {
              type: "p",
              text: "Self-Attention を **複数並列に実行**(各 head が異なるパターンを学習)し、結果を結合する。8 head が標準。これにより『**意味的関係**』『**構文的関係**』『**位置的関係**』など、異なるタイプの依存を同時に捉えられる。",
            },
            { type: "h3", text: "位置エンコーディング" },
            {
              type: "p",
              text: "Transformer は系列順序の情報を持たないので、**位置エンコーディング**(sin/cos の周期関数または学習可能なベクトル)を入力に加える。これで「単語の順序」が認識できるようになる。",
            },
            {
              type: "intuition",
              title: "なぜ Transformer が RNN より速いのか",
              body: "RNN は時系列を **順番に** 処理する必要があり、並列化できません。Transformer は時刻間の依存を **行列演算** で表現するので、すべての時刻を **並列** に処理できる ─ これが GPU との相性を爆発的に高めました。GPT-4 級のモデルが学習できるのは、この並列性のおかげです。",
            },
            { type: "h3", text: "BERT と GPT" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**BERT(2018, Google)**: Encoder のみ。マスクされた単語を予測する事前学習(MLM)→ ファインチューニングで分類・抽出に使う",
                "**GPT(2018-, OpenAI)**: Decoder のみ。次の単語を予測する自己回帰モデル → 文章生成・対話に",
                "**T5 / BART**: Encoder-Decoder。翻訳・要約に強い",
              ],
            },
            {
              type: "practical",
              title: "実務での LLM 活用",
              body: "現在(2024〜)では、**LLM をスクラッチから学習することはほぼなく**、(1)既存モデル(GPT-4 / Claude / Llama 3 など)を API 経由で使う、(2)オープンソースモデル(Llama・Mistral など)を **ファインチューニング** または **RAG**(Retrieval-Augmented Generation)で業務に組み込む、というのが標準ワークフロー。LangChain・LlamaIndex などのフレームワークを使うのが速い。",
            },
            {
              type: "code",
              title: "Hugging Face Transformers で BERT を使う",
              python: `from transformers import AutoTokenizer, AutoModel
import torch

# 事前学習済みモデルをロード
tokenizer = AutoTokenizer.from_pretrained("bert-base-japanese")
model = AutoModel.from_pretrained("bert-base-japanese")

# 文を埋め込みベクトルに
inputs = tokenizer("統計検定の勉強をしています。", return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)
embeddings = outputs.last_hidden_state    # (1, seq_len, 768)`,
              caption: "Hugging Face は事前学習モデルのデファクト hub。同じ API でほぼ全モデルが使える。",
            },
          ],
        },
      ],
    },
    {
      id: "ch5",
      number: 5,
      title: "応用領域",
      overview:
        "強化学習・生成モデル・自然言語処理という DL の応用 3 大分野を整理します。",
      sections: [
        {
          id: "ch5-sec1",
          number: "5.1",
          title: "強化学習",
          blocks: [
            {
              type: "p",
              text: "**強化学習**(Reinforcement Learning, RL)は、エージェントが環境と相互作用し、報酬を最大化する行動方策を学ぶ枠組み。AlphaGo / AlphaFold / ChatGPT の RLHF など、近年の大型成果の背後にあります。",
            },
            { type: "h3", text: "MDP(マルコフ決定過程)" },
            {
              type: "def",
              title: "用語 ─ MDP の構成要素",
              body: "**状態 $s$**, **行動 $a$**, **報酬 $r(s, a)$**, **状態遷移確率 $p(s'|s, a)$**, **方策 $\\pi(a|s)$**, **割引率 $\\gamma$**。\n\n価値関数: $V^\\pi(s) = E_\\pi[\\sum_t \\gamma^t r_t | s_0 = s]$。最適価値関数を求めるのが RL の目標。",
            },
            { type: "h3", text: "Q 学習" },
            {
              type: "def",
              title: "更新式 ─ Q 学習",
              body: "$Q(s, a)$ を『状態 $s$ で行動 $a$ を取った後の累積報酬期待値』として、TD ターゲットで更新:\n\n$\\;Q(s, a) \\leftarrow Q(s, a) + \\alpha [r + \\gamma \\max_{a'} Q(s', a') - Q(s, a)]\\;$\n\nオフポリシー(現在の方策と異なる方策で学習可能)。$\\epsilon$-greedy で探索 + 活用のバランス。",
            },
            { type: "h3", text: "DQN(Deep Q-Network)" },
            {
              type: "p",
              text: "Q 関数をニューラルネットで近似する。**経験再生(Replay Buffer)** + **ターゲットネットワーク** が学習安定化のキー。Atari ゲームで人間レベル以上の性能を達成(2013, DeepMind)。",
            },
            { type: "h3", text: "方策勾配法(Policy Gradient)" },
            {
              type: "p",
              text: "方策 $\\pi_\\theta(a|s)$ を直接ニューラルネットで表現し、報酬期待値を最大化する勾配降下を行う。**REINFORCE → A2C → PPO** と発展してきた。連続行動空間でも扱える点が Q 学習との大きな差。",
            },
            {
              type: "intuition",
              title: "ChatGPT は『RL で人間好みに最適化された』",
              body: "GPT-3.5/4 の最終ステップは **RLHF(Reinforcement Learning from Human Feedback)** ─ 人間が「どの応答が好ましいか」をランク付けしたデータから報酬モデルを学習し、それを最大化するように LLM を微調整します。これによって素の予測モデルが『有用で安全な対話エージェント』に変身しました。",
            },
          ],
        },
        {
          id: "ch5-sec2",
          number: "5.2",
          title: "生成モデル(VAE・GAN・拡散モデル)",
          blocks: [
            {
              type: "p",
              text: "**生成モデル**(Generative Model)は、データの確率分布を学習し、そこから新しいサンプルを生成する。画像生成・音声合成・分子設計などに応用。",
            },
            { type: "h3", text: "VAE(Variational Autoencoder)" },
            {
              type: "def",
              title: "原理 ─ VAE",
              body: "Encoder が入力を **潜在変数 $\\mathbf{z}$ の分布**($q_\\phi(\\mathbf{z}|\\mathbf{x})$、通常ガウス分布)にマップ。Decoder が $\\mathbf{z}$ から元データを再構成。損失は **再構成誤差 + KL ダイバージェンス**(事前分布 $p(\\mathbf{z}) = N(0, I)$ への近さ)。",
            },
            { type: "h3", text: "GAN(Generative Adversarial Network)" },
            {
              type: "def",
              title: "原理 ─ GAN",
              body: "**Generator G** が偽データを作り、**Discriminator D** が本物 / 偽物を判別。両者を競争(ミニマックスゲーム)させる:\n\n$\\;\\min_G \\max_D V(D, G) = E_{x\\sim p_{data}}[\\log D(x)] + E_{z}[\\log(1 - D(G(z)))]\\;$\n\n均衡点で G が真の分布を学習。",
            },
            {
              type: "intuition",
              title: "GAN の『偽札犯と警察』のたとえ",
              body: "Generator(偽札犯)はもっと精巧な偽札を作ろうとし、Discriminator(警察)はもっと精度よく見分けようとする。両者がレベルアップを繰り返すうち、最終的に偽札が本物と見分けがつかないレベルになる ─ これが GAN の学習の本質。学習が不安定で、モード崩壊や勾配消失が起きやすいのが課題。",
            },
            { type: "h3", text: "拡散モデル(Diffusion Model)" },
            {
              type: "p",
              text: "**現代の画像生成 AI(Stable Diffusion・DALL-E 3・Midjourney)の中核。** 学習: ノイズを徐々に加えて完全なノイズにする過程の逆を学習。生成: ガウス乱数から徐々にノイズを除去して画像を生成。GAN より学習が安定で、生成品質も高い。",
            },
            {
              type: "list",
              style: "bullet",
              items: [
                "**DDPM (2020)**: 拡散モデルの基礎論文",
                "**Stable Diffusion (2022)**: 潜在空間で拡散することで高速化",
                "**ControlNet**: 条件付き生成(姿勢・線画など)",
              ],
            },
          ],
        },
        {
          id: "ch5-sec3",
          number: "5.3",
          title: "自然言語処理(NLP)",
          blocks: [
            {
              type: "p",
              text: "Transformer の登場で NLP は大きく変わりました。E 資格では基礎技術と現代手法の両方が問われます。",
            },
            { type: "h3", text: "前処理" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**形態素解析**: 日本語特有。MeCab・Sudachi が標準",
                "**トークン化**: 単語分割。サブワード(BPE・WordPiece・SentencePiece)が現代の標準",
                "**正規化**: 全角半角変換・大文字小文字統一など",
              ],
            },
            { type: "h3", text: "単語埋め込み(Word Embedding)" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Word2Vec (2013)**: 単語をベクトルに。CBOW・Skip-gram",
                "**GloVe**: 共起行列の分解",
                "**fastText**: サブワードを考慮した Word2Vec の拡張",
                "**Contextual Embedding(ELMo / BERT)**: 同じ単語でも文脈で意味が変わる",
              ],
            },
            {
              type: "intuition",
              title: "『king − man + woman ≈ queen』が示すもの",
              body: "Word2Vec の有名な現象 ─ ベクトル演算で意味的関係が再現できる。これは **単語の意味が、その単語が現れる文脈(共起する他の単語の分布)で決まる** という分布意味論を、機械学習で実装したことを示します。現代の LLM(GPT 系)も本質的にはこの考えの巨大な拡張です。",
            },
            { type: "h3", text: "代表的な NLP タスク" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**分類**(感情分析・スパム判定): BERT で文を埋め込み → 線形層",
                "**固有表現認識(NER)**: 人名・地名・組織を抽出",
                "**機械翻訳**: Transformer の Encoder-Decoder で(現代では LLM ベース)",
                "**質問応答**: 文書と質問から答えを抽出 / 生成",
                "**要約**: 抽出型 / 生成型",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "ch6",
      number: 6,
      title: "実装と社会実装",
      overview:
        "DL を現実のシステムに組み込むための実装技術・倫理・規制を整理します。",
      sections: [
        {
          id: "ch6-sec1",
          number: "6.1",
          title: "開発フレームワークとモデル軽量化",
          blocks: [
            {
              type: "p",
              text: "DL モデルの実装には **TensorFlow** と **PyTorch** が二大勢力。研究では PyTorch、本番デプロイでは TensorFlow が伝統的に強い構図でしたが、近年は PyTorch が両領域を席巻しています。",
            },
            { type: "h3", text: "主要フレームワーク" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**PyTorch**: Facebook(Meta)発。動的計算グラフ・直感的 API。研究・実務とも主流",
                "**TensorFlow / Keras**: Google 発。静的計算グラフ → 2.x で eager mode が標準に。本番デプロイで強い",
                "**JAX**: Google 発の関数型自動微分ライブラリ。GPU/TPU 並列に強み",
                "**Hugging Face Transformers**: 事前学習モデルの hub。ほぼ全 LLM の標準入口",
              ],
            },
            { type: "h3", text: "モデル軽量化技術" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**プルーニング(Pruning)**: 重要度の低い重みをゼロにし、モデルを疎にする",
                "**量子化(Quantization)**: 32 ビット浮動小数を 8 ビット整数に変換。サイズ 1/4・速度 2〜4 倍。実務でデファクト",
                "**蒸留(Knowledge Distillation)**: 大きい『教師モデル』の出力を学習目標として、小さい『生徒モデル』を学習。BERT → DistilBERT が代表例",
                "**Mixed Precision Training**: 学習時に float16 / float32 を混在 → 学習速度 2 倍",
              ],
            },
            {
              type: "practical",
              title: "実務での DL モデルデプロイ",
              body: "学習は GPU(NVIDIA H100/A100)、推論は **モバイル / エッジデバイス** という分離が一般的。デプロイは **ONNX 形式** に変換 → ONNX Runtime / TensorRT / Core ML / TensorFlow Lite で各種環境に。**量子化 + 蒸留** で 100 倍小さく・速くすることは現実的です。",
            },
            { type: "h3", text: "分散学習" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**データ並列**: 複数 GPU でバッチを分割。標準的",
                "**モデル並列**: モデル自体を分割。LLM のような巨大モデルで必須",
                "**Pipeline 並列**: モデルを層単位で分散",
                "**ZeRO (DeepSpeed)**: 最適化状態・勾配・パラメータを分散して大規模化",
              ],
            },
          ],
        },
        {
          id: "ch6-sec2",
          number: "6.2",
          title: "学習を成功させるテクニック",
          blocks: [
            {
              type: "p",
              text: "DL の学習は『**何を試すか**』のセンスが結果を大きく左右します。E 資格でも頻出のテクニックをまとめます。",
            },
            { type: "h3", text: "正則化技術" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Dropout**: 学習時にニューロンを確率 $p$(典型的に 0.5)で無効化。アンサンブル効果",
                "**バッチ正規化(BatchNorm)**: 層の出力をバッチごとに平均 0・分散 1 に正規化 → 線形変換。学習安定化と高速化",
                "**Layer Normalization**: BatchNorm のバッチ依存性を消したもの。Transformer で標準",
                "**Weight Decay**: 重み減衰 = L2 正則化。AdamW では正しく扱われる",
                "**Early Stopping**: 検証誤差が悪化し始めたら学習を止める",
                "**データ拡張(Data Augmentation)**: 画像なら回転・反転・色変換。MixUp・CutMix などモダン手法も",
              ],
            },
            { type: "h3", text: "重みの初期化" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**Xavier(Glorot)初期化**: tanh / sigmoid 用。$\\mathrm{Var} = 2 / (n_{in} + n_{out})$",
                "**He 初期化**: ReLU 用。$\\mathrm{Var} = 2 / n_{in}$",
                "**事前学習モデルからの転移**: 多くの場合これがベスト",
              ],
            },
            { type: "h3", text: "ハイパーパラメータ調整" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**グリッドサーチ**: 全組合せを試す。次元呪い",
                "**ランダムサーチ**: グリッドより効率的(Bergstra & Bengio 2012)",
                "**ベイズ最適化**: 過去の試行から次を賢く選ぶ。Optuna が標準",
                "**Population Based Training (PBT)**: 進化的アルゴリズム",
              ],
            },
            {
              type: "code",
              title: "PyTorch 学習ループの典型",
              python: `import torch
from torch.utils.data import DataLoader

model.to("cuda")
loader = DataLoader(dataset, batch_size=64, shuffle=True)
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-4)
scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(optimizer, T_max=epochs)

for epoch in range(epochs):
    model.train()
    for x, y in loader:
        x, y = x.to("cuda"), y.to("cuda")
        optimizer.zero_grad()
        with torch.cuda.amp.autocast():     # Mixed Precision
            logits = model(x)
            loss = loss_fn(logits, y)
        loss.backward()
        torch.nn.utils.clip_grad_norm_(     # 勾配クリッピング
            model.parameters(), max_norm=1.0
        )
        optimizer.step()
    scheduler.step()`,
              caption: "AMP・勾配クリッピング・スケジューラを組合せた現代的な学習ループ。",
            },
          ],
        },
        {
          id: "ch6-sec3",
          number: "6.3",
          title: "倫理・公平性・社会実装",
          blocks: [
            {
              type: "p",
              text: "E 資格でも『AI を社会に実装する責任』は問われます。技術的実装と並んで、**公平性・透明性・プライバシー・規制対応** がエンジニアの必須教養になっています。",
            },
            { type: "h3", text: "AI 倫理の主要論点" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**公平性(Fairness)**: モデルが特定属性(性別・人種・年齢)に対して差別的でないか。**Demographic Parity**(各属性間で予測陽性率が等しい)・**Equal Opportunity**(各属性間で真陽性率が等しい)など複数の定義あり、両立は一般に不可能",
                "**説明可能性 (XAI)**: SHAP・LIME・Integrated Gradients・Grad-CAM など。医療・与信で必須",
                "**プライバシー**: 差分プライバシー(DP)・連合学習(Federated Learning)・準同型暗号",
                "**敵対的攻撃**: 微小な摂動で誤分類を誘発(adversarial example)。実務では**対敵的訓練**(adversarial training)で対策",
                "**ハルシネーション**: LLM が事実でない内容を自信を持って出力する問題。RAG や Reasoning で軽減",
              ],
            },
            { type: "h3", text: "規制と国際的潮流" },
            {
              type: "list",
              style: "bullet",
              items: [
                "**EU AI Act (2024)**: リスクベース規制。社会信用スコア等は禁止、医療・採用などの『高リスク AI』に厳しい義務",
                "**米国 NIST AI Risk Management Framework**: 自主的フレームワーク",
                "**日本 AI 事業者ガイドライン (2024)**: 経産省・総務省が公表",
                "**OECD AI 原則 (2019)**: 国際的な合意ベース",
              ],
            },
            { type: "h3", text: "MLOps(機械学習の運用)" },
            {
              type: "p",
              text: "本番に乗ったあとの運用が AI プロジェクトの正念場。**モデルドリフト**(時間経過で精度が劣化)・**データドリフト**・**フィードバックループ**(自身の予測が将来データに影響する)を監視し、定期再学習する仕組みが必要。MLflow・Kubeflow・Weights & Biases が代表的ツール。",
            },
            {
              type: "practical",
              title: "実務での AI プロジェクト成功要因",
              body: "**ドメイン知識** > データの質 > モデル選択 = ハイパーパラメータ ─ という順で重要。最先端モデルを使うより、『**業務上意味のある問題設定をする**』『**データの偏りに気づく**』『**現場の人と対話する**』ほうがプロジェクト成功率を高めます。E 資格はモデルの実装力を測りますが、実務ではむしろこの『プロジェクト管理力』が決定要因です。",
            },
            {
              type: "p",
              text: "ここまで E 資格の主要範囲を一通り扱いました。**数学的基礎・機械学習の基礎・DL の理論・主要アーキテクチャ・応用領域・実装と社会実装** ─ DL を実装するエンジニアに必要な道具立てが揃ったはずです。本サイトで概念地図を掴んだあとは、**Coursera Deep Learning Specialization**(Andrew Ng)・**徹底攻略 ディープラーニング E資格 エンジニア問題集**(通称黒本)などで実戦的な問題演習を進めると合格に近づきます。",
            },
          ],
        },
      ],
    },
  ],
};
