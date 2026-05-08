import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "画像処理エンジニア検定 エキスパートとは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "画像処理エンジニア検定 エキスパート(CG-ARTS 主催)の受験対象・出題範囲・対策方針を完全解説。古典的画像処理(フィルタ・周波数・幾何変換)から深層学習ベースの CV(CNN・U-Net・YOLO)まで、画像 AI の専門性を測る検定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/image-processing" },
  openGraph: {
    title: "画像処理エンジニア検定 エキスパートとは",
    description:
      "画像処理エンジニア検定 エキスパートの対象・出題範囲・対策をまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["image-processing"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function ImageProcessingPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "画像処理エンジニア検定", href: "/certs/image-processing" },
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
        <span>画像処理エンジニア検定</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          画像処理エンジニア検定 エキスパート(CG-ARTS)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **公益財団法人 CG-ARTS 協会** が主催する、画像処理 ・ コンピュータビジョンの **理論と実装の両面** を測る検定。**ベーシック(基本)** の上位に位置し、フィルタ ・ 周波数解析 ・ パターン認識 ・ 機械学習 ・ 深層学習(CNN ・ Transformer)・ 3 次元視覚など、現代の画像処理に必要な広範な知識を扱います。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな検定?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          画像処理エンジニア / コンピュータビジョンエンジニアの **専門性証明** として位置付けられる検定。**自動運転 ・ 医用画像 ・ 産業検査 ・ AR/VR ・ 監視カメラ** など、画像 AI が事業の中核となる企業で評価が高い試験です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          試験は **マークシート方式 / 80 分 / 計算 ・ 記述含む選択式 / 合格 70 点(参考) / 合格率 30 〜 40%**。古典手法と DL ベース手法の両方が出題されるのが特徴で、両軸での理解が必要です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "画像処理基礎", body: "標本化 / 量子化 / 色空間 / ヒストグラム平坦化。" },
            { title: "空間フィルタ", body: "ガウシアン / メディアン / Sobel / Canny エッジ。" },
            { title: "周波数解析", body: "フーリエ変換 / DCT / ウェーブレット。" },
            { title: "幾何変換 ・ 復元", body: "アフィン / ホモグラフィ / バイキュービック / Wiener。" },
            { title: "特徴抽出 ・ 認識", body: "SIFT / HOG / BoF / SVM / AdaBoost。" },
            { title: "DL ベース CV", body: "CNN / ResNet / U-Net / YOLO / Transformer / Vision Transformer。" },
            { title: "3 次元視覚", body: "ステレオ / SfM / オプティカルフロー / NeRF。" },
            { title: "応用領域", body: "自動運転・医用画像・産業検査・AR/VR・生成 AI。" },
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
            <strong>公式テキストを 1 周</strong>: 『ディジタル画像処理』(CG-ARTS 編著)が事実上のリファレンス。
          </li>
          <li>
            <strong>古典手法を手で 1 度動かす</strong>: 3×3 や 5×5 程度の畳み込みは試験中に手計算する場面がある。本サイトの[画像処理 教科書](/certs/image-processing/textbook)で体系学習。
          </li>
          <li>
            <strong>DL ベース手法も押さえる</strong>: ResNet ・ U-Net ・ YOLO などの代表モデルは構造を概念図で説明できるレベルまで。
          </li>
          <li>
            <strong>3 次元視覚 + 動画</strong>: ステレオ ・ オプティカルフロー ・ SfM の基礎を整理。
          </li>
          <li>
            <strong>過去問演習</strong>: CG-ARTS の過去問と本サイトの[演習問題](/certs/image-processing/quiz)で出題傾向を体感。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">画像処理エンジニア検定の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは画像処理エンジニア検定エキスパート対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。古典的画像処理から DL ベース CV、3 次元視覚まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/image-processing/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/image-processing/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">G 検定 / 画像処理エンジニア / E 資格の比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3"></th>
                <th className="py-2 pr-3">G 検定</th>
                <th className="py-2 pr-3">画像処理(エキ)</th>
                <th className="py-2 pr-3">E 資格</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">主眼</td>
                <td className="py-2 pr-3">AI 全般 ・ 倫理</td>
                <td className="py-2 pr-3">画像処理 ・ CV 専門</td>
                <td className="py-2 pr-3">DL 全般 ・ 数学+実装</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">古典手法</td>
                <td className="py-2 pr-3">浅い</td>
                <td className="py-2 pr-3">深い(フィルタ ・ 周波数)</td>
                <td className="py-2 pr-3">中</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">DL 比重</td>
                <td className="py-2 pr-3">中</td>
                <td className="py-2 pr-3">中(増加傾向)</td>
                <td className="py-2 pr-3">非常に高い</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">向く人</td>
                <td className="py-2 pr-3">AI 概観 ・ 企画</td>
                <td className="py-2 pr-3">画像 AI 開発者</td>
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
        category="画像処理"
        heading="画像処理 ・ コンピュータビジョン 関連スクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/g-test"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← G 検定について
        </Link>
        <Link
          href="/certs/ai-implementation"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          AI 実装検定について →
        </Link>
      </nav>
    </article>
  );
}
