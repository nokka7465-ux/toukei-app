/** Map a blog category to a thumbnail theme (gradient + emoji). */

export type BlogTheme = {
  grad: string;
  emoji: string;
};

const THEMES: Record<string, BlogTheme> = {
  ロードマップ: { grad: "from-blue-500 to-indigo-600", emoji: "🗺" },
  Python: { grad: "from-yellow-400 to-blue-600", emoji: "🐍" },
  級選び: { grad: "from-emerald-500 to-sky-600", emoji: "🎯" },
  学習法: { grad: "from-amber-500 to-rose-600", emoji: "📝" },
  実装: { grad: "from-cyan-500 to-blue-700", emoji: "⚙️" },
  数学: { grad: "from-emerald-400 to-teal-600", emoji: "📐" },
  LLM: { grad: "from-fuchsia-500 to-purple-700", emoji: "💬" },
};

const FALLBACK: BlogTheme = {
  grad: "from-slate-500 to-slate-700",
  emoji: "📰",
};

export function blogTheme(category: string): BlogTheme {
  return THEMES[category] ?? FALLBACK;
}
