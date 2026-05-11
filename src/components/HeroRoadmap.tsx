import { Fragment } from "react";

/**
 * Hero illustration: 4-step learning roadmap.
 * Inline SVG so it's crisp, accessible, themeable via currentColor, and lazy-free.
 */
export function HeroRoadmap() {
  const steps = [
    { emoji: "📐", title: "数学基礎", sub: "微分 / 線形代数 / 確率" },
    { emoji: "📊", title: "統計学", sub: "記述 / 推定 / 検定" },
    { emoji: "🤖", title: "機械学習", sub: "回帰 / 分類 / DL" },
    { emoji: "🎓", title: "AI 検定", sub: "G検定 / E資格 / DS検定" },
  ];

  return (
    <div
      aria-label="AIエンジニアになるための 4 ステップ学習ロードマップ"
      className="mt-8 max-w-4xl mx-auto"
      role="img"
    >
      {/* Desktop: 4 boxes connected horizontally */}
      <div className="hidden md:flex items-stretch gap-0 justify-between">
        {steps.map((s, i) => (
          <Fragment key={s.title}>
            <div className="paper rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center transition hover:-translate-y-0.5 flex-1">
              <span className="text-3xl mb-1.5" aria-hidden="true">
                {s.emoji}
              </span>
              <div className="text-sm font-bold tracking-wider text-[var(--foreground)]">
                {s.title}
              </div>
              <div className="text-[10px] ui-sans text-[var(--muted)] mt-1 leading-snug">
                {s.sub}
              </div>
            </div>
            {i < steps.length - 1 && (
              <div
                aria-hidden="true"
                className="flex items-center justify-center px-1 shrink-0"
              >
                <svg
                  width="36"
                  height="24"
                  viewBox="0 0 36 24"
                  fill="none"
                  className="text-[var(--accent)]"
                >
                  <path
                    d="M2 12 L28 12"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M22 5 L30 12 L22 19"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: 2x2 grid with numbered badges */}
      <div className="md:hidden grid grid-cols-2 gap-3">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="paper rounded-xl px-3 py-4 flex flex-col items-center justify-center text-center relative"
          >
            <span className="text-2xl mb-1" aria-hidden="true">
              {s.emoji}
            </span>
            <div className="text-xs font-bold tracking-wider text-[var(--foreground)]">
              {s.title}
            </div>
            <div className="text-[10px] ui-sans text-[var(--muted)] mt-0.5 leading-snug">
              {s.sub}
            </div>
            {/* Step number badge */}
            <span
              aria-hidden="true"
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-[10px] font-bold flex items-center justify-center shadow"
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
