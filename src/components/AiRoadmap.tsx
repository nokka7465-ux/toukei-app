import Link from "next/link";

type Step = {
  num: number;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  links: Array<{ href: string; label: string }>;
};

const STEPS: Step[] = [
  {
    num: 1,
    emoji: "📐",
    title: "数学基礎",
    subtitle: "Mathematical Foundations",
    description:
      "微分・線形代数・確率を、AIで使う部分だけ抜粋。式が読めるようになることが最初のゴール。",
    duration: "目安: 1〜2 ヶ月",
    links: [
      { href: "/math", label: "数学基礎 概要" },
      { href: "/math/textbook", label: "数学基礎 教科書" },
      { href: "/math/quiz", label: "数学基礎 演習" },
    ],
  },
  {
    num: 2,
    emoji: "📊",
    title: "統計学",
    subtitle: "Statistics",
    description:
      "記述統計 → 確率分布 → 推定 → 検定 → 回帰。AI モデルが何をしているのかを統計の言葉で理解する。",
    duration: "目安: 2〜4 ヶ月",
    links: [
      { href: "/textbook/grade-4", label: "4 級 教科書" },
      { href: "/textbook/grade-3", label: "3 級 教科書" },
      { href: "/textbook/grade-2", label: "2 級 教科書(本命)" },
      { href: "/quiz/grade-2", label: "2 級 演習問題" },
    ],
  },
  {
    num: 3,
    emoji: "🤖",
    title: "機械学習・DL",
    subtitle: "Machine Learning & Deep Learning",
    description:
      "回帰・分類・主成分分析・ニューラルネット・CNN・損失関数・最適化。Python で動かしながら理論と実装を結ぶ。",
    duration: "目安: 2〜3 ヶ月",
    links: [
      { href: "/textbook/grade-pre1", label: "準 1 級 教科書(多変量・ベイズ)" },
      { href: "/certs/e-shikaku/textbook", label: "E 資格 教科書" },
      { href: "/figures", label: "図解で学ぶ統計" },
      { href: "/explore", label: "動かして学ぶ統計" },
    ],
  },
  {
    num: 4,
    emoji: "🎓",
    title: "AI 系検定",
    subtitle: "AI Certifications",
    description:
      "知識を形にする最終仕上げ。G 検定で広く、E 資格で深く、DS 検定で実務観点を補強。",
    duration: "目安: 1〜3 ヶ月",
    links: [
      { href: "/certs/g-test", label: "G 検定 対策" },
      { href: "/certs/e-shikaku", label: "E 資格 対策" },
      { href: "/certs/ds-literacy", label: "DS 検定 対策" },
      { href: "/exam-info", label: "受験情報まとめ" },
    ],
  },
];

export function AiRoadmap() {
  return (
    <section id="roadmap" className="mb-14 scroll-mt-20">
      <header className="mb-7 text-center">
        <div className="chapter-eyebrow mb-2">AI Engineer Roadmap</div>
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          AIエンジニアになるための 4 ステップ
        </h2>
        <p className="text-sm text-[var(--muted-strong)] leading-relaxed max-w-2xl mx-auto">
          数学 → 統計 → 機械学習 → AI 検定。各ステップは前のステップで身につけた言語に積み上げる構造です。寄り道せず、最短距離で実装力までたどり着けるよう設計しています。
        </p>
      </header>

      <ol className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {STEPS.map((s) => (
          <li
            key={s.num}
            className="paper rounded-xl p-6 md:p-7 relative overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -right-4 -top-2 text-[120px] leading-none opacity-[0.06] pointer-events-none select-none"
            >
              {s.emoji}
            </div>
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="chip">STEP {s.num}</span>
              <span className="chip-soft">{s.subtitle}</span>
              <span className="text-xs text-[var(--muted)] ui-sans ml-auto">
                {s.duration}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1 flex items-center gap-2">
              <span aria-hidden="true">{s.emoji}</span>
              <span>{s.title}</span>
            </h3>
            <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans mb-3">
              {s.subtitle}
            </div>
            <p className="text-sm text-[var(--muted-strong)] leading-relaxed mb-4">
              {s.description}
            </p>
            <div className="flex flex-wrap gap-2 ui-sans text-xs">
              {s.links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 rounded-md ${
                    i === 0
                      ? "bg-[var(--accent)] text-[var(--accent-fg)] font-bold hover:bg-[var(--accent-strong)]"
                      : "border border-[var(--page-border-strong)] hover:bg-[var(--background)]"
                  }`}
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 paper rounded-lg p-5 text-sm text-center ui-sans">
        <span className="text-[var(--muted)]">迷ったら </span>
        <Link
          href="/diagnose"
          className="text-[var(--link)] hover:underline font-bold"
        >
          3 問の級診断
        </Link>
        <span className="text-[var(--muted)]"> で適切なスタート位置が出ます。学習中の進捗は </span>
        <Link
          href="/practice"
          className="text-[var(--link)] hover:underline font-bold"
        >
          ランダム練習
        </Link>
        <span className="text-[var(--muted)]"> や </span>
        <Link
          href="/mock"
          className="text-[var(--link)] hover:underline font-bold"
        >
          模試
        </Link>
        <span className="text-[var(--muted)]"> でこまめに確認しましょう。</span>
      </div>
    </section>
  );
}
