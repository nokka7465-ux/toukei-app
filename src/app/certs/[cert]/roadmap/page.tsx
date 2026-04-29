import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { certRoadmaps, certSlugs } from "@/data/cert-roadmaps";
import { BreadcrumbJsonLd } from "@/components/StructuredData";

export function generateStaticParams() {
  return certSlugs.map((cert) => ({ cert }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cert: string }>;
}): Promise<Metadata> {
  const { cert } = await params;
  const data = certRoadmaps[cert];
  if (!data) return {};
  return {
    title: data.title,
    description: `${data.title} ─ 主催: ${data.organizer} ・ 目安: ${data.hours} / ${data.months} ・ 前提: ${data.prerequisites}`,
    alternates: { canonical: `/certs/${cert}/roadmap` },
    openGraph: {
      title: data.title,
      description: `${data.organizer} の検定対策ロードマップ。${data.steps.length} ステップで合格まで。`,
      type: "article",
    },
  };
}

export default async function CertRoadmapPage({
  params,
}: {
  params: Promise<{ cert: string }>;
}) {
  const { cert } = await params;
  const data = certRoadmaps[cert];
  if (!data) notFound();

  return (
    <article>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/certs/ds-basic" },
          { name: data.title, href: `/certs/${cert}/roadmap` },
        ]}
      />
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <Link href={`/certs/${cert}`} className="hover:underline">
          {data.title.replace("学習ロードマップ", "").trim()}
        </Link>
        <span className="mx-2">›</span>
        <span>学習ロードマップ</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <span className="chip-soft mb-3">Cert Roadmap</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-3 tracking-wider">
          {data.title}
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 text-center text-sm">
          <div className="paper rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              主催
            </div>
            <div className="text-xs font-bold mt-1 leading-tight">
              {data.organizer}
            </div>
          </div>
          <div className="paper rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              所要時間
            </div>
            <div className="text-xs font-bold mt-1">{data.hours}</div>
          </div>
          <div className="paper rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              期間目安
            </div>
            <div className="text-xs font-bold mt-1">{data.months}</div>
          </div>
          <div className="paper rounded-lg p-3">
            <div className="text-[10px] uppercase tracking-[0.15em] text-[var(--muted)] ui-sans">
              合格基準
            </div>
            <div className="text-xs font-bold mt-1">{data.passCriteria}</div>
          </div>
        </div>
        <p className="mt-5 text-sm text-[var(--muted-strong)] leading-relaxed">
          <strong>前提知識</strong>: {data.prerequisites}
        </p>
      </header>

      <ol className="space-y-5">
        {data.steps.map((step, i) => (
          <li
            key={i}
            className="paper rounded-xl overflow-hidden"
          >
            <div className="h-1 w-full bg-[var(--accent)]" aria-hidden="true" />
            <div className="p-6">
              <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                <span className="chip">STEP {i + 1}</span>
                <span className="chip-soft">{step.week}</span>
              </div>
              <h2 className="text-xl font-bold mb-2">{step.title}</h2>
              <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="flex flex-wrap gap-2 ui-sans text-xs">
                {step.links.map((l, j) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`px-3 py-1.5 rounded-md ${
                      j === 0
                        ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold hover:bg-[var(--accent-strong)]"
                        : "border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                    }`}
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <nav className="mt-12 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
        <Link
          href={data.textbookHref}
          className="px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded-lg font-bold hover:bg-[var(--accent-strong)]"
        >
          教科書を読む →
        </Link>
        <Link
          href={data.quizHref}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
        >
          演習問題を解く
        </Link>
        <Link
          href={data.examInfoAnchor ?? "/exam-info"}
          className="px-4 py-2 border border-[var(--page-border-strong)] rounded-lg hover:bg-[var(--page)]"
        >
          受験情報を確認
        </Link>
      </nav>
    </article>
  );
}
