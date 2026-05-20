import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { SchoolPicks } from "@/components/SchoolPicks";
import { StudyFlow } from "@/components/StudyFlow";
import { certFaq } from "@/data/cert-faq";

export const metadata: Metadata = {
  title: "Databricks Certified ML Engineer Professional とは ─ 受験対象・出題範囲・対策まとめ",
  description: "Databricks Certified ML Engineer Professional の受験対象・出題範囲・対策方針を完全解説。MLflow ・ Feature Store ・ AutoML ・ Hyperopt ・ Model Serving ・ Inference Tables ・ Lakehouse Monitoring ・ Mosaic AI(Vector Search + Foundation Model API + Agent Framework)・ DBRX ・ Genie ・ Asset Bundle ・ Unity Catalog Model Registry を実装で問う Databricks の Professional 認定。無料の対策教科書・演習問題付き。",
  alternates: { canonical: "/certs/databricks-ml-engineer" },
  openGraph: { title: "Databricks Certified ML Engineer Professional とは", description: "Databricks ML Engineer の対象・出題範囲・対策をまとめた解説ページ。", type: "article" },
};

const FAQ_ITEMS = certFaq["databricks-ml-engineer"] ?? [];
const FAQ_SCHEMA = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((it) => ({ "@type": "Question", name: it.q, acceptedAnswer: { "@type": "Answer", text: it.a } })) };

export default function DatabricksMlPage() {
  return (
    <article>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "Databricks ML Engineer", href: "/certs/databricks-ml-engineer" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <nav aria-label="breadcrumb" className="text-xs text-[var(--muted)] ui-sans mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">›</span><span>関連検定</span>
        <span className="mx-2">›</span><span>Databricks ML Engineer</span>
      </nav>
      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Related Certification</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">Databricks Certified ML Engineer Professional</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          **Databricks 上で ML を実装 ・ デプロイ ・ 監視する ML Engineer の Professional 認定**。**MLflow / Feature Store / AutoML / Hyperopt / Model Serving / Inference Tables / Lakehouse Monitoring / Mosaic AI(Vector Search + Foundation Model API + Agent Framework)/ DBRX / Genie / Asset Bundle / Unity Catalog Model Registry** の総合実装力を問う、**ML Associate 取得 + 実務 6 ヶ月-1 年**経験者向け試験です。
        </p>
      </header>
      <StudyFlow textbookHref="/certs/databricks-ml-engineer/textbook" quizHref="/certs/databricks-ml-engineer/quiz" examLabel="Databricks ML Engineer 本番" />
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Overview</div>
        <h2 className="text-xl font-bold mb-3">どんな試験?</h2>
        <p className="text-[var(--muted-strong)] leading-loose">
          **60 問 / 120 分 / 70-75% 合格 / 200 USD / 有効期限 2 年**。**前提**: ML Associate + Databricks 実務 6 ヶ月-1 年。**MLOps + Mosaic AI(GenAI)が大きなウェイト**。
        </p>
      </section>
      <section className="mb-10">
        <div className="chapter-eyebrow mb-2">Topics</div>
        <h2 className="text-xl font-bold mb-4">主な出題範囲</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "Experimentation", body: "MLflow Tracking + Autolog / Projects / Models / Registry ・ Databricks AutoML ・ Feature Store + FeatureLookup + Point-in-Time Join。" },
            { title: "Hyperopt + Distributed", body: "Hyperopt + SparkTrials(TPE)・ TorchDistributor / DeepSpeed / Horovod / PySpark ML / Ray on Databricks。" },
            { title: "Model Lifecycle", body: "Unity Catalog Model Registry(3 階層 + Aliases)・ Lineage ・ Tags ・ Cross-Workspace 共有。" },
            { title: "Model Serving + Monitoring", body: "Model Serving(CPU/GPU/Scale-to-Zero/A-B Routing)・ Inference Tables ・ Mosaic AI Gateway ・ Lakehouse Monitoring(Time Series / Snapshot / Inference Profile)。" },
            { title: "Mosaic AI Vector + FM API", body: "Vector Search(Delta Sync Index)・ Foundation Model API(Pay-per-token / PT / External Model)・ DBRX 132B MoE。" },
            { title: "Agent Framework + AI Functions", body: "Agent Framework(LangChain Deploy)・ Agent Evaluation(LLM Judge)・ SQL AI Functions ・ Genie(NL2SQL)。" },
            { title: "MLOps", body: "Databricks Asset Bundle(DAB)YAML IaC ・ MLOps Stacks(Dev/Staging/Prod + CI/CD)・ Cluster Policy ・ Tag。" },
            { title: "Cost + Security", body: "Spot / Photon / Serverless / Auto-Stop / Pool ・ Unity Catalog RBAC ・ Private Link ・ Network Security。" },
          ].map((t) => (
            <div key={t.title} className="paper rounded-lg p-5">
              <div className="font-bold mb-1">{t.title}</div>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed">{t.body}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-10 paper rounded-lg p-7">
        <div className="chapter-eyebrow mb-2">Study Now</div>
        <h2 className="text-xl font-bold mb-3">Databricks ML Engineer の学習を始める</h2>
        <div className="flex flex-wrap gap-2 ui-sans text-sm">
          <Link href="/certs/databricks-ml-engineer/textbook" className="px-4 py-2 bg-[var(--highlight)] text-[var(--link)] border border-[var(--page-border-strong)] rounded font-bold hover:bg-[var(--accent)] hover:text-[var(--accent-fg)]">教科書を読む →</Link>
          <Link href="/certs/databricks-ml-engineer/quiz" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--background)]">問題を解く</Link>
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
      <SchoolPicks category="Databricks" heading="Databricks ML Engineer 対策に強いスクール" />
      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link href="/certs/databricks-data-engineer" className="px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]">← Databricks DE Associate について</Link>
      </nav>
    </article>
  );
}
