/** Map a URL path to a phase number from the AIエンジニア・ロードマップ. */

export type PhaseInfo = {
  num: 1 | 2 | 3 | 4 | 5;
  emoji: string;
  short: string;
};

const PHASES: Record<1 | 2 | 3 | 4 | 5, PhaseInfo> = {
  1: { num: 1, emoji: "📐", short: "数学基礎" },
  2: { num: 2, emoji: "📊", short: "統計基礎" },
  3: { num: 3, emoji: "🔬", short: "統計応用" },
  4: { num: 4, emoji: "🤖", short: "ML/DL" },
  5: { num: 5, emoji: "🎓", short: "AI 検定" },
};

export function urlToPhase(url: string): PhaseInfo | null {
  // Math foundations
  if (url.startsWith("/math")) return PHASES[1];

  // Textbook / quiz / formulas / mock by level
  const levelMatch = url.match(
    /^\/(?:textbook|quiz|formulas|mock)\/(intro|grade-4|grade-3|grade-2|grade-pre1|grade-1)/,
  );
  if (levelMatch) {
    const level = levelMatch[1];
    if (level === "intro" || level === "grade-4" || level === "grade-3") {
      return PHASES[2];
    }
    if (level === "grade-2" || level === "grade-pre1" || level === "grade-1") {
      return PHASES[3];
    }
  }

  // ML / DL — E shikaku is the implementation-heavy track
  if (url.startsWith("/certs/e-shikaku")) return PHASES[4];

  // Other certifications — wrap-up
  if (url.startsWith("/certs/")) return PHASES[5];

  // Tools / explore / figures: support all phases — leave unmarked
  return null;
}
