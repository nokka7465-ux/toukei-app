import type { ProgressData } from "./progress";
import { getStreak, summarizeTrack, summarizeReading } from "./progress";
import { tracks } from "./all-questions";
import { getAllSectionIds, textbooks } from "./all-textbooks";

export type Achievement = {
  id: string;
  icon: string;
  title: string;
  description: string;
  unlocked: boolean;
  progress?: { current: number; target: number };
};

export function evaluateAchievements(data: ProgressData): Achievement[] {
  const allQuestionIds = tracks.flatMap((t) => t.questions.map((q) => q.id));
  const overall = summarizeTrack(allQuestionIds, data);
  const streak = getStreak(data);
  const reading = summarizeReading(getAllSectionIds(), data);
  const mockHistory = data.mockHistory ?? [];
  const mockPasses = mockHistory.filter((m) => m.passed);

  // Tracks fully cleared (every question correct at least once).
  const fullyClearedTracks = tracks.filter((t) => {
    const s = summarizeTrack(
      t.questions.map((q) => q.id),
      data,
    );
    return s.total > 0 && s.correct === s.total;
  });

  // Textbooks fully read.
  const fullyReadTextbooks = textbooks.filter((tb) => {
    const r = summarizeReading(tb.sectionIds, data);
    return r.total > 0 && r.read === r.total;
  });

  return [
    achievement(
      "first-answer",
      "🌱",
      "はじめの一歩",
      "演習問題を 1 問解いた",
      overall.attempted >= 1,
      overall.attempted,
      1,
    ),
    achievement(
      "ten-correct",
      "✏️",
      "10 問突破",
      "10 問正解した",
      overall.correct >= 10,
      overall.correct,
      10,
    ),
    achievement(
      "fifty-correct",
      "📘",
      "半世紀",
      "50 問正解した",
      overall.correct >= 50,
      overall.correct,
      50,
    ),
    achievement(
      "hundred-correct",
      "💯",
      "百問正解",
      "100 問正解した",
      overall.correct >= 100,
      overall.correct,
      100,
    ),
    achievement(
      "all-correct",
      "👑",
      "全問正解",
      `全 ${overall.total} 問を一度ずつでも正解する`,
      overall.total > 0 && overall.correct === overall.total,
      overall.correct,
      overall.total || 1,
    ),
    achievement(
      "track-cleared",
      "🏁",
      "級コンプリート",
      "1 つの級・検定をすべて正解",
      fullyClearedTracks.length >= 1,
      fullyClearedTracks.length,
      1,
    ),
    achievement(
      "three-tracks",
      "🎖",
      "三冠王",
      "3 つの級・検定をコンプリート",
      fullyClearedTracks.length >= 3,
      fullyClearedTracks.length,
      3,
    ),
    achievement(
      "streak-3",
      "🔥",
      "3 日連続",
      "3 日連続で学習した",
      streak.best >= 3,
      streak.best,
      3,
    ),
    achievement(
      "streak-7",
      "🌟",
      "1 週間継続",
      "7 日連続で学習した",
      streak.best >= 7,
      streak.best,
      7,
    ),
    achievement(
      "streak-30",
      "🏆",
      "1 ヶ月継続",
      "30 日連続で学習した",
      streak.best >= 30,
      streak.best,
      30,
    ),
    achievement(
      "mock-pass",
      "🎓",
      "初合格",
      "模試に 1 回合格した",
      mockPasses.length >= 1,
      mockPasses.length,
      1,
    ),
    achievement(
      "mock-pass-3",
      "🥇",
      "模試マスター",
      "模試に 3 回合格した",
      mockPasses.length >= 3,
      mockPasses.length,
      3,
    ),
    achievement(
      "reader-1",
      "📖",
      "読み始めた",
      "教科書を 5 セクション読んだ",
      reading.read >= 5,
      reading.read,
      5,
    ),
    achievement(
      "reader-50",
      "📚",
      "本好き",
      "教科書を 50 セクション読んだ",
      reading.read >= 50,
      reading.read,
      50,
    ),
    achievement(
      "textbook-clear",
      "🎒",
      "1 冊読破",
      "1 つの級の教科書を全セクション読んだ",
      fullyReadTextbooks.length >= 1,
      fullyReadTextbooks.length,
      1,
    ),
  ];
}

function achievement(
  id: string,
  icon: string,
  title: string,
  description: string,
  unlocked: boolean,
  current: number,
  target: number,
): Achievement {
  return {
    id,
    icon,
    title,
    description,
    unlocked,
    progress: unlocked ? undefined : { current: Math.min(current, target), target },
  };
}
