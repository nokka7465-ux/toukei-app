import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "AWS Solutions Architect Associate(SAA-C03)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "AWS Certified Solutions Architect ─ Associate(SAA-C03)の受験対象・出題範囲・対策方針を完全解説。EC2 / S3 / RDS / VPC / IAM などの主要サービスを Well-Architected Framework に沿って組み合わせる設計力を測る AWS Associate 認定の代表格。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/aws-saa" },
  openGraph: {
    title: "AWS Solutions Architect Associate(SAA-C03)とは",
    description:
      "SAA-C03 の対象・出題範囲・対策・他 AWS 認定との位置付けをまとめた解説ページ。",
    type: "article",
  },
};

const FAQ_ITEMS = certFaq["aws-saa"] ?? [];
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((it) => ({
    "@type": "Question",
    name: it.q,
    acceptedAnswer: { "@type": "Answer", text: it.a },
  })),
};

export default function AwsSaaPage() {
  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "AWS Solutions Architect Associate", href: "/certs/aws-saa" },
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
        <span>AWS Solutions Architect Associate</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          AWS Certified Solutions Architect ─ Associate(SAA-C03)
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **AWS 認定の Associate レベル** で最も人気の高いアーキテクト系資格。**EC2 ・ S3 ・ RDS ・ Lambda ・ VPC ・ IAM** などの主要サービスを組み合わせて、**信頼性 ・ セキュリティ ・ 性能 ・ コスト ・ 運用** の観点で AWS Well-Architected Framework に沿った設計を選択する力を測ります。**AI Practitioner の次のステップ** または **AWS で本格的にシステムを設計する技術者** の標準資格です。
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          試験は **CBT(Pearson VUE)or オンライン監督受験 / 65 問 / 130 分 / 単一・複数選択 / 合格 720 点(1000 点満点)**。**シナリオ問題** が中心で、要件 → 最適サービス選択 → 設計判断を問う形式です。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          受験料は **150 USD**、有効期限は **3 年**。**世界で最も受験者数が多い AWS 認定の 1 つ** で、AWS で仕事をする技術者にとって標準的な資格です。
        </p>
      </section>

      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Domain 1: セキュア設計(30%)", body: "IAM / KMS / Security Group / NACL / WAF / Shield。" },
            { title: "Domain 2: 高可用性設計(26%)", body: "Multi-AZ / Auto Scaling / DR 戦略 / Route 53 Failover。" },
            { title: "Domain 3: 高性能設計(24%)", body: "ElastiCache / DAX / CloudFront / Aurora。" },
            { title: "Domain 4: コスト最適化(20%)", body: "Spot / Reserved / Savings Plans / S3 Lifecycle。" },
            { title: "Well-Architected Framework", body: "6 つの柱(運用 / セキュリティ / 信頼性 / 性能 / コスト / 持続可能性)。" },
            { title: "AI / ML サービス概要", body: "SageMaker / Bedrock / 各 AI サービスの守備範囲。" },
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
            <strong>AWS 基礎を押さえる</strong>: Cloud Practitioner / AI Practitioner 合格相当の知識があると本試験の準備が大幅に楽。本サイトの[AWS AI Practitioner 教科書](/certs/aws-ai-practitioner/textbook)で AI 系も合わせて学習。
          </li>
          <li>
            <strong>AWS 主要サービスを実機で触る</strong>: AWS 無料利用枠で EC2 / S3 / VPC / Lambda / RDS を実際に起動。本サイトの[SAA 教科書](/certs/aws-saa/textbook)で体系学習。
          </li>
          <li>
            <strong>シナリオ問題に慣れる</strong>: 『この要件で最もコスト効率の良い設計は?』のパターンを大量に解く。
          </li>
          <li>
            <strong>Well-Architected の 6 柱</strong>: 設計判断のベースとなるため必ず暗記。
          </li>
          <li>
            <strong>過去問 ・ 模擬試験</strong>: AWS 公式の Practice Exam + 本サイトの[演習問題](/certs/aws-saa/quiz)で出題傾向を体感。
          </li>
        </ol>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">SAA-C03 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは SAA-C03 対策の **教科書本編(全 10 章)** と **演習問題** を公開しています。Well-Architected ・ IAM ・ EC2 ・ S3 ・ DB ・ VPC ・ Auto Scaling ・ DR ・ メッセージング ・ コスト最適化まで、合格に必要な範囲を体系的に学べます。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link
            href="/certs/aws-saa/textbook"
            className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded font-bold hover:bg-[var(--accent-strong)]"
          >
            教科書を読む →
          </Link>
          <Link
            href="/certs/aws-saa/quiz"
            className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]"
          >
            問題を解く
          </Link>
        </div>
      </section>

      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Compare</div>
        <h2 className="text-xl font-bold mb-3">AWS 認定の階層比較</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr className="border-b-2 border-[var(--page-border-strong)]">
                <th className="py-2 pr-3">レベル</th>
                <th className="py-2 pr-3">代表認定</th>
                <th className="py-2 pr-3">学習時間目安</th>
              </tr>
            </thead>
            <tbody className="text-[var(--muted-strong)]">
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">Foundational</td>
                <td className="py-2 pr-3">Cloud Practitioner / AI Practitioner</td>
                <td className="py-2 pr-3">40 〜 80 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">Associate</td>
                <td className="py-2 pr-3">SAA(本資格)/ Developer / SysOps / ML Engineer</td>
                <td className="py-2 pr-3">120 〜 200 時間</td>
              </tr>
              <tr className="border-b border-[var(--page-border)]">
                <td className="py-2 pr-3 font-bold">Professional</td>
                <td className="py-2 pr-3">SAP / DevOps Pro</td>
                <td className="py-2 pr-3">200 〜 400 時間</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-bold">Specialty</td>
                <td className="py-2 pr-3">Security / Networking / ML / Database</td>
                <td className="py-2 pr-3">200 〜 400 時間</td>
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
        category="AWS"
        heading="AWS SAA 対策に強いスクール"
      />

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href="/certs/aws-ai-practitioner"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          ← AWS AI Practitioner について
        </Link>
        <Link
          href="/certs/azure-ai-900"
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
        >
          Azure AI Fundamentals について →
        </Link>
      </nav>
    </article>
  );
}
