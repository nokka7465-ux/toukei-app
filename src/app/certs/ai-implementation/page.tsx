import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "AI 実装検定とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "AI 実装検定(エッジ AI 協会主催)の受験対象・出題範囲・対策方針を完全解説。S/A/B の 3 段階で AI 実装力を測る検定。Python/PyTorch/TensorFlow を中心に、G 検定と E 資格の中間に位置。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/ai-implementation" },
  openGraph: {
    title: "AI 実装検定とは",
    description:
      "AI 実装検定の対象・出題範囲・対策・他検定との違いをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["ai-implementation"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AiImplementationPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AI 実装検定", href: "/certs/ai-implementation" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>関連検定</span>
        <span className="mx-2">›</span>
        <span>AI 実装検定</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AI 実装検定(エッジ AI 協会)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **一般社団法人 エッジ AI 協会** が主催する、AI を **実装する力** を測る検定。**S 級(専門家) / A 級(中級) / B 級(入門)** の 3 段階があり、Python / NumPy / PyTorch / TensorFlow による主要モデルのコード理解が中心。**G 検定(概念)と E 資格(高度数学+実装)の中間** に位置する実務寄りの試験です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          技術的なポジショニングは「**G 検定 → AI 実装検定 B 級 → AI 実装検定 A 級 → E 資格**」の順に難化します。**AI のコードを書く現場** に近い設問が中心で、PyTorch / Keras の基本パターン、CNN / RNN / Transformer の実装目線、エッジ推論や量子化など実務寄りの範囲をカバーします。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          試験は **オンライン IBT** で受験可、A 級は 60 問 / 60 分。E 資格と違って **認定講座の修了は不要** で、独学で受けられるのも特徴です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Python + NumPy", body: "ブロードキャスト、shape、ndarray の挙動。" },
            { title: "機械学習基礎", body: "教師あり / なし / 強化学習、scikit-learn API、評価指標。" },
            { title: "ニューラルネット", body: "順伝播 / 逆伝播、活性化関数、Adam、Batch Norm。" },
            { title: "PyTorch / Keras", body: "Tensor / Module / DataLoader / 学習ループ。" },
            { title: "CNN / RNN / Transformer", body: "代表アーキテクチャと実装パターン。" },
            { title: "エッジ AI ・ MLOps", body: "量子化 / 蒸留 / ONNX / 特徴量ストア / ドリフト検出。" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Strategy</div>
        <h2 className="text-xl font-bold mb-3">対策の方針</h2>
        <ol className="list-decimal list-outside ml-6 space-y-2 text-[var(--muted-strong)] leading-relaxed">
          <li>
            <strong>Python + NumPy + scikit-learn の基礎</strong>: 本サイトの[Python データ分析 教科書](/certs/python-data/textbook)で基礎を固めると本試験対策にも繋がる。
          </li>
          <li>
            <strong>NN の概念を 1 周</strong>: 順伝播 / 逆伝播 / 活性化 / 損失 / Adam / Batch Norm。本サイトの[AI 実装検定 教科書](/certs/ai-implementation/textbook)で体系学習。
          </li>
          <li>
            <strong>PyTorch / Keras を写経</strong>: 公式チュートリアルのコードを **タイプして動かす**。学習ループ 5 行をスラスラ書けるレベルに。
          </li>
          <li>
            <strong>CNN / Transformer の実装目線</strong>: ResNet / U-Net / Attention の構造を概念図で説明できるレベルまで。
          </li>
          <li>
            <strong>エッジ + MLOps</strong>: 量子化・蒸留・ONNX・ドリフト検出の用語を整理。試験で頻出。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">AI 実装検定の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは AI 実装検定対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Python / NumPy から PyTorch / Keras 実装、CNN / Transformer、エッジ AI / MLOps まで、A 級合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/ai-implementation/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/ai-implementation/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">G 検定 / AI 実装検定 / E 資格の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">G 検定</th>
                <th className="py-2 pr-3">AI 実装検定 A 級</th>
                <th className="py-2 pr-3">E 資格</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">概念 ・ 倫理</td>
                <td className="py-2 pr-3">実装 ・ コード読解</td>
                <td className="py-2 pr-3">数学 + 実装</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">数学</td>
                <td className="py-2 pr-3">最小限</td>
                <td className="py-2 pr-3">高校 + 行列基礎</td>
                <td className="py-2 pr-3">線形代数 ・ 微積 ・ 確率</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">認定講座</td>
                <td className="py-2 pr-3">不要</td>
                <td className="py-2 pr-3">不要</td>
                <td className="py-2 pr-3">必須(20〜40 万円)</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">学習時間目安</td>
                <td className="py-2 pr-3">60 〜 120 時間</td>
                <td className="py-2 pr-3">100 〜 150 時間</td>
                <td className="py-2 pr-3">200 〜 400 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">企画・DX 推進</td>
                <td className="py-2 pr-3">AI エンジニア中堅</td>
                <td className="py-2 pr-3">ML エンジニア</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.q}
              className="border-b border-[var(--page-border)] pb-3 last:border-b-0"
            >
              <dt className="font-bold mb-1.5">Q. {item.q}</dt>
              <dd className="text-sm text-[var(--muted-strong)] leading-relaxed">
                A. {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <SchoolPicks
        category="AI 実装"
        heading="AI 実装検定対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← G 検定について
        </Link>
        <Link
          href="/certs/e-shikaku"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          E 資格について →
        </Link>
      </nav>
    </article>
  );
}
