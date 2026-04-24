import { booksByLevel, amazonSearchUrl, isAffiliateEnabled } from "@/data/books";

type Variant = "compact" | "full";

export function RecommendedBooks({
  level,
  levelTitle,
  variant = "full",
}: {
  level: string;
  levelTitle: string;
  variant?: Variant;
}) {
  const books = booksByLevel[level] ?? [];
  if (books.length === 0) return null;

  const heading =
    variant === "compact"
      ? `この級のおすすめ参考書`
      : `${levelTitle} のおすすめ参考書`;

  return (
    <section className="mt-14 pt-6 border-t-2 border-[var(--page-border-strong)]">
      <div className="chapter-eyebrow mb-1">Recommended</div>
      <h2 className="text-xl font-bold mb-2">{heading}</h2>
      <p className="text-xs text-[var(--muted)] mb-5 ui-sans leading-relaxed">
        {isAffiliateEnabled
          ? "当サイトは Amazon.co.jp を宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazon アソシエイト・プログラムの参加者です。"
          : "以下は学習の参考となる書籍の紹介です。各リンクから Amazon の検索結果に遷移します。"}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {books.map((b) => (
          <a
            key={b.title}
            href={amazonSearchUrl(b.title)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="paper block p-5 rounded-lg hover:-translate-y-0.5 transition group"
          >
            {b.tag && (
              <div className="inline-block px-2 py-0.5 mb-2 text-[10px] font-bold tracking-wider rounded bg-[var(--accent)] text-[var(--accent-fg)] ui-sans">
                {b.tag}
              </div>
            )}
            <div className="font-bold text-sm mb-1 group-hover:text-[var(--accent)]">
              {b.title}
            </div>
            {b.publisher && (
              <div className="text-xs text-[var(--muted)] mb-2 ui-sans">
                {b.publisher}
              </div>
            )}
            {b.note && (
              <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
                {b.note}
              </p>
            )}
            <div className="mt-3 text-xs text-[var(--link)] ui-sans">
              Amazon で見る →
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
