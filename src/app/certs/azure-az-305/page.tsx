import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Azure Solutions Architect Expert(AZ-305)とは ─ 受験対象・出題範囲・対策まとめ",
  description:
    "Azure Solutions Architect Expert(AZ-305)の受験対象・出題範囲・対策方針を完全解説。Identity ・ Governance ・ コンピュート ・ ストレージ ・ DB ・ ネットワーク ・ セキュリティ ・ Business Continuity ・ Migration ・ コスト最適化 ・ Well-Architected ・ Cloud Adoption Framework を統合設計で問う Microsoft の Expert 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/azure-az-305" },
  openGraph: { title: "Azure Solutions Architect Expert(AZ-305)とは", description: "AZ-305 の対象・出題範囲・対策をまとめた解説ページ。", type: "article" },
};

const FAQ_ITEMS = certFaq["azure-az-305"] ?? [];
const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })) };

export default function AzureAz305Page() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Azure AZ-305", href: "/certs/azure-az-305" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><span>Azure AZ-305</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">Microsoft Certified: Azure Solutions Architect Expert(AZ-305)</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Azure 上のソリューション設計を担う Architect** の Expert 認定。**Identity(Entra ID / Conditional Access / PIM)・ ガバナンス(Policy / Management Group)・ コンピュート / ストレージ / DB / ネットワーク / セキュリティ / Business Continuity / 移行 / コスト / 監視** の **統合設計** が問われます。**AZ-104(Administrator)合格 + Azure 実務経験 1-2 年以上**が前提の Expert レベル試験です。
        </p>
      </header>
      <StudyFlow textbookHref="/certs/azure-az-305/textbook" quizHref="/certs/azure-az-305/quiz" examLabel="AZ-305 本番" />
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose mb-3">
          **CBT(Pearson VUE)or オンライン監督受験 / 40〜60 問 / 120 分前後 / 単一・複数選択 + D&D + **ケーススタディ多用** / 合格 700 / 1000 点 / 受験料 165 USD / 有効期限 1 年(無料更新試験あり)**。**AZ-305 はケーススタディが重く**、顧客状況 → サービス選定 → トレードオフ判断が中心。
        </p>
        <p className="text-[var(--muted-strong)] leading-loose">
          **AWS SAA-Pro / GCP Professional Cloud Architect と並ぶ Expert 級** で、Azure Architect / Senior SA としての価値が大きい認定です。
        </p>
      </section>
      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲(公式試験ガイド)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Identity / Governance / Monitor(25-30%)", body: "Entra ID / Conditional Access / PIM / Policy / Management Group / Cost Management / Monitor / App Insights / Sentinel。" },
            { title: "データストレージ設計(20-25%)", body: "Storage Account / Blob / Files / NetApp / SQL DB / Managed Instance / Cosmos DB / PostgreSQL / Redis / AI Search。" },
            { title: "Business Continuity(15-20%)", body: "RPO / RTO / Backup / ASR / Availability Zone / Region Pair / Multi-Region / Failover。" },
            { title: "インフラ設計(25-30%)", body: "VM / VMSS / AKS / Container Apps / App Service / Functions / Logic Apps / Batch。" },
            { title: "Network", body: "VNet / Peering / VPN / ExpressRoute / Hub-Spoke / vWAN / Application Gateway / Front Door / Bastion / Private Endpoint / Firewall。" },
            { title: "Security + Compliance", body: "Defender for Cloud / Sentinel / Key Vault / Encryption / WAF / DDoS / Trust Portal / ISMAP / FISC。" },
            { title: "Migration", body: "Azure Migrate / 7 R's / SQL DMS / Database Migration Service / Azure Stack / Arc。" },
            { title: "Well-Architected + CAF", body: "WAF 5 柱 / Cloud Adoption Framework(Strategy → Plan → Ready → Adopt → Govern)。" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Strategy</div>
        <h2 className="text-xl font-bold mb-3">対策の方針</h2>
        <ol className="list-decimal list-outside ml-6 space-y-2 text-[var(--muted-strong)] leading-relaxed">
          <li><strong>AZ-104(Administrator)を取得</strong>: Azure リソース操作 ・ 基礎を固める。</li>
          <li><strong>本サイトの[AZ-305 教科書](/certs/azure-az-305/textbook)</strong> で 8 章を体系的に学習。</li>
          <li><strong>Azure Architecture Center</strong>(公式リファレンス)の Pattern を読む。</li>
          <li><strong>Microsoft Learn AZ-305 ラーニングパス</strong>: 公式の手厚いハンズオン。</li>
          <li><strong>Cloud Adoption Framework + Well-Architected Framework</strong>を読み込む。</li>
          <li><strong>本サイトの演習問題</strong>: 主要トピックを網羅した 60 問で習熟度確認。</li>
        </ol>
      </section>
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">AZ-305 の学習を始める</h2>
        <p className="text-[var(--muted-strong)] text-sm leading-relaxed mb-4">
          本サイトでは AZ-305 対策の **教科書本編(全 8 章)** と **演習問題** を公開しています。
        </p>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link href="/certs/azure-az-305/textbook" className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]">教科書を読む →</Link>
          <Link href="/certs/azure-az-305/quiz" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]">問題を解く</Link>
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-6 md:p-7">
        <div className="chapter-eyebrow mb-2">FAQ</div>
        <h2 className="text-xl font-bold mb-4">よくある質問</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((item) => (
            <div key={item.q} className="border-b border-[var(--page-border)] pb-3 last:border-b-0">
              <dt className="font-bold mb-1.5">Q. {item.q}</dt>
              <dd className="text-sm text-[var(--muted-strong)] leading-relaxed">A. {item.a}</dd>
            </div>
          ))}
        </dl>
      </section>
      <SchoolPicks category="Azure" heading="Azure AZ-305 対策に強いスクール" />
      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/azure-ai-900" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← Azure AI-900 について</Link>
        <Link href="/certs/aws-saa" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">AWS SAA について →</Link>
      </nav>
    </article>
  );
}
