"use client";

const WEEKS = 13;
const DAYS = 7;
const DAY_MS = 24 * 60 * 60 * 1000;

const WEEKDAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"];

function dateKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/**
 * GitHub-style activity heatmap. Renders a 7×WEEKS grid showing which days the
 * user studied. Today is the bottom-right cell of the rightmost week.
 */
export function ActivityHeatmap({ activeDates }: { activeDates: string[] }) {
  const set = new Set(activeDates);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Build grid: each column is a week, oldest on the left.
  // The rightmost column ends at today; rows are days of week (Sun..Sat).
  const todayCol = WEEKS - 1;
  const todayRow = today.getDay();
  // Earliest cell = today minus (WEEKS-1)*7 days minus todayRow days.
  const earliest = new Date(today.getTime() - (todayCol * 7 + todayRow) * DAY_MS);

  type Cell = { date: Date; key: string; active: boolean; future: boolean };
  const cols: Cell[][] = [];
  for (let c = 0; c < WEEKS; c++) {
    const col: Cell[] = [];
    for (let r = 0; r < DAYS; r++) {
      const d = new Date(earliest.getTime() + (c * 7 + r) * DAY_MS);
      col.push({
        date: d,
        key: dateKey(d),
        active: set.has(dateKey(d)),
        future: d.getTime() > today.getTime(),
      });
    }
    cols.push(col);
  }

  // Month labels: show on the first column where a new month begins in row 0.
  const monthLabels = cols.map((col, i) => {
    const top = col[0].date;
    if (i === 0) return monthShort(top);
    const prevTop = cols[i - 1][0].date;
    return top.getMonth() !== prevTop.getMonth() ? monthShort(top) : "";
  });

  const activeCount = cols
    .flat()
    .filter((c) => c.active && !c.future).length;

  return (
    <div className="paper rounded p-3 border border-[var(--page-border)]">
      <div className="flex items-baseline justify-between mb-2">
        <div className="text-[10px] tracking-[0.15em] uppercase text-[var(--muted)] ui-sans">
          直近{WEEKS}週間のアクティビティ
        </div>
        <div className="text-[10px] text-[var(--muted)] ui-sans tabular-nums">
          {activeCount} 日学習
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col justify-between text-[9px] text-[var(--muted)] ui-sans pr-1 pt-3.5">
          {WEEKDAY_LABELS.map((w, i) => (
            // Show every other label to save space.
            <span key={w} className={i % 2 === 1 ? "" : "opacity-0"}>
              {w}
            </span>
          ))}
        </div>
        <div className="flex-1 overflow-x-auto">
          <div className="flex gap-[3px] min-w-max">
            {cols.map((col, ci) => (
              <div key={ci} className="flex flex-col gap-[3px]">
                <div className="text-[9px] text-[var(--muted)] ui-sans h-3 leading-3">
                  {monthLabels[ci]}
                </div>
                {col.map((cell) => (
                  <div
                    key={cell.key}
                    title={`${cell.key}${cell.active ? " · 学習" : ""}${cell.future ? " (未来)" : ""}`}
                    aria-label={`${cell.key}${cell.active ? " 学習日" : ""}`}
                    className={`w-3 h-3 rounded-[2px] ${
                      cell.future
                        ? "bg-transparent"
                        : cell.active
                          ? "bg-[var(--accent)]"
                          : "bg-[var(--page-border)]"
                    }`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function monthShort(d: Date): string {
  return `${d.getMonth() + 1}月`;
}
