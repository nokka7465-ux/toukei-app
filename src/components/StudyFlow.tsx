import { Fragment } from "react";
import Link from "next/link";

/**
 * Reusable "study flow" illustration for cert overview pages.
 * 教科書 → 演習 → 試験本番 の 3 ステップを視覚化。
 * Inline SVG + Tailwind, themeable via CSS vars.
 */
export function StudyFlow({
  textbookHref,
  quizHref,
  examLabel = "本番試験",
}: {
  textbookHref: string;
  quizHref: string;
  examLabel?: string;
}) {
  const steps: Array<{
    emoji: string;
    title: string;
    sub: string;
    href?: string;
    accent: string;
  }> = [
    {
      emoji: "📖",
      title: "教科書",
      sub: "全 10 章で体系理解",
      href: textbookHref,
      accent: "bg-sky-500",
    },
    {
      emoji: "✍️",
      title: "演習",
      sub: "選択式で解答力定着",
      href: quizHref,
      accent: "bg-emerald-500",
    },
    {
      emoji: "🎯",
      title: examLabel,
      sub: "公式の試験に挑戦",
      accent: "bg-amber-500",
    },
  ];

  return (
    <div
      role="img"
      aria-label="学習フロー: 教科書 → 演習 → 試験本番"
      className="paper rounded-xl p-5 md:p-6 my-8"
    >
      <div className="chapter-eyebrow mb-4">Study Flow</div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 md:gap-0">
        {steps.map((s, i) => {
          const card = (
            <div
              className={`rounded-xl px-4 py-5 flex flex-col items-center justify-center text-center transition border-2 border-[var(--page-border-strong)] bg-[var(--background)] ${
                s.href
                  ? "hover:-translate-y-0.5 hover:border-[var(--accent)] cursor-pointer"
                  : ""
              }`}
            >
              <div
                aria-hidden="true"
                className={`w-12 h-12 rounded-full ${s.accent} text-white flex items-center justify-center text-2xl mb-3 shadow`}
              >
                {s.emoji}
              </div>
              <div className="text-base font-bold tracking-wider mb-1 text-[var(--foreground)]">
                STEP {i + 1}: {s.title}
              </div>
              <div className="text-xs ui-sans text-[var(--muted-strong)] leading-snug">
                {s.sub}
              </div>
            </div>
          );

          return (
            <Fragment key={s.title}>
              {s.href ? (
                <Link
                  href={s.href}
                  className="block"
                  aria-label={`${s.title}: ${s.sub}`}
                >
                  {card}
                </Link>
              ) : (
                <div>{card}</div>
              )}

              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="flex items-center justify-center md:px-2"
                >
                  {/* Horizontal arrow on desktop, vertical on mobile */}
                  <svg
                    className="hidden md:block text-[var(--accent)]"
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                    fill="none"
                  >
                    <path
                      d="M2 16 L32 16"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M24 7 L34 16 L24 25"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  <svg
                    className="md:hidden text-[var(--accent)]"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M16 2 L16 24"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 18 L16 28 L25 18"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
