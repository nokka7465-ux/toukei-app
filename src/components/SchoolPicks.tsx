import {
  pickSchoolsForCategory,
  isSchoolAffiliateEnabled,
  type School,
} from "@/data/schools";

type Props = {
  category?: string;
  variant?: "compact" | "full";
  heading?: string;
};

export function SchoolPicks({
  category,
  variant = "full",
  heading,
}: Props) {
  if (!isSchoolAffiliateEnabled) return null;

  const schools = pickSchoolsForCategory(category, variant === "compact" ? 2 : 3);
  if (schools.length === 0) return null;

  const title = heading ?? "本気で AI エンジニアを目指すなら ─ 関連スクール";

  return (
    <section className="mt-14 pt-6 border-t-2 border-[var(--page-border-strong)]">
      <div className="chapter-eyebrow mb-1">Sponsored / Recommended</div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-xs text-[var(--muted)] mb-5 ui-sans leading-relaxed">
        以下は当サイトと提携しているスクールの紹介です。リンク経由でのお申込で運営費を支援できます（読者の皆様の追加負担はありません）。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schools.map((s) => (
          <SchoolCard key={s.id} school={s} />
        ))}
      </div>
    </section>
  );
}

function SchoolCard({ school }: { school: School }) {
  return (
    <a
      href={school.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="paper block p-5 rounded-lg hover:-translate-y-0.5 transition group h-full"
    >
      {school.badge && (
        <div className="inline-block px-2 py-0.5 mb-2 text-[10px] font-bold tracking-wider rounded bg-[var(--accent)] text-[var(--accent-fg)] ui-sans">
          {school.badge}
        </div>
      )}
      <div className="font-bold text-sm mb-2 group-hover:text-[var(--accent)] leading-snug">
        {school.name}
      </div>
      <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
        {school.description}
      </p>
      <div className="mt-3 text-xs text-[var(--link)] ui-sans">
        無料で詳細をチェック →
      </div>
    </a>
  );
}
