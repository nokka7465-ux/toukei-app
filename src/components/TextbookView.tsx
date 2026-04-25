import Link from "next/link";
import type { Textbook } from "@/types/content";
import { TextbookBody } from "./TextbookBody";

type Crumb = { label: string; href?: string };
type BottomLink = { label: string; href: string; primary?: boolean };

export function TextbookView({
  book,
  breadcrumb,
  eyebrow = "Textbook",
  bottomLinks = [],
}: {
  book: Textbook;
  breadcrumb: Crumb[];
  eyebrow?: string;
  bottomLinks?: BottomLink[];
}) {
  const flatSections = book.chapters.flatMap((ch) => ch.sections);
  const indexOf: Record<string, number> = {};
  flatSections.forEach((sec, i) => {
    indexOf[sec.id] = i;
  });

  return (
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        {breadcrumb.map((c, i) => (
          <span key={`${c.label}-${i}`}>
            {i > 0 && <span className="mx-2">›</span>}
            {c.href ? (
              <Link href={c.href} className="hover:underline">
                {c.label}
              </Link>
            ) : (
              <span>{c.label}</span>
            )}
          </span>
        ))}
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">{eyebrow}</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">{book.title}</h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          {book.intro}
        </p>
      </header>

      <section className="mb-10 paper rounded-lg p-6">
        <h2 className="text-sm chapter-eyebrow mb-3">目次</h2>
        <ol className="space-y-3 ui-sans">
          {book.chapters.map((ch) => (
            <li key={ch.id}>
              <div className="font-bold text-[var(--foreground)]">
                第 {ch.number} 章 · {ch.title}
              </div>
              {ch.overview && (
                <div className="text-xs text-[var(--muted)] mt-1">
                  {ch.overview}
                </div>
              )}
              <ul className="mt-2 ml-4 space-y-1 text-sm">
                {ch.sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="text-[var(--link)] hover:underline"
                    >
                      {sec.number} {sec.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <div className="space-y-16">
        {book.chapters.map((ch) => (
          <section key={ch.id}>
            <header className="mb-6">
              <div className="chapter-eyebrow mb-1">Chapter {ch.number}</div>
              <h2 className="text-2xl font-bold tracking-wide">
                第 {ch.number} 章 · {ch.title}
              </h2>
              <hr className="rule-double mt-3" />
            </header>
            <div className="space-y-12">
              {ch.sections.map((sec) => {
                const idx = indexOf[sec.id];
                const prev = flatSections[idx - 1];
                const next = flatSections[idx + 1];
                return (
                  <section
                    key={sec.id}
                    id={sec.id}
                    className="paper rounded-lg p-8 scroll-mt-20"
                  >
                    <header className="mb-4">
                      <div className="chapter-eyebrow mb-1">§{sec.number}</div>
                      <h3 className="text-xl font-bold">{sec.title}</h3>
                    </header>
                    <TextbookBody blocks={sec.blocks} />
                    {(prev || next) && (
                      <nav className="mt-8 pt-4 border-t border-[var(--page-border)] flex justify-between gap-3 text-xs ui-sans">
                        {prev ? (
                          <a
                            href={`#${prev.id}`}
                            className="text-[var(--link)] hover:underline max-w-[45%]"
                          >
                            ← {prev.number} {prev.title}
                          </a>
                        ) : (
                          <span />
                        )}
                        {next && (
                          <a
                            href={`#${next.id}`}
                            className="text-[var(--link)] hover:underline text-right max-w-[45%]"
                          >
                            {next.number} {next.title} →
                          </a>
                        )}
                      </nav>
                    )}
                  </section>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {bottomLinks.length > 0 && (
        <nav className="mt-14 pt-6 border-t border-[var(--page-border)] flex flex-wrap gap-3 ui-sans text-sm">
          {bottomLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.primary
                  ? "px-4 py-2 bg-[var(--accent)] text-[var(--accent-fg)] rounded hover:bg-[var(--accent-strong)]"
                  : "px-4 py-2 border border-[var(--page-border-strong)] rounded hover:bg-[var(--page)]"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </article>
  );
}
