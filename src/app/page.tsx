import Link from "next/link";
import { levels } from "@/data/levels";

const availableLevels = new Set<string>([
  "grade-4",
  "grade-3",
  "grade-2",
  "grade-pre1",
  "grade-1",
]);

export default function Home() {
  return (
    <div>
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-3">統計検定 学習サイト</h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          統計検定4級〜1級の学習用サイト。公式集と選択式の過去問(オリジナル類題)を級別に収録しています。
          各級の「公式集」で重要公式を確認し、「問題を解く」で選択式の演習にチャレンジできます。
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {levels.map((level) => {
          const enabled = availableLevels.has(level.slug);
          return (
            <div
              key={level.slug}
              className={`p-6 border rounded-lg transition ${
                enabled
                  ? "border-gray-200 dark:border-gray-800 hover:shadow-md"
                  : "border-gray-200 dark:border-gray-800 opacity-60"
              }`}
            >
              <h2 className="text-xl font-bold mb-1">{level.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {level.description}
              </p>
              {enabled ? (
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/formulas/${level.slug}`}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
                  >
                    公式集
                  </Link>
                  <Link
                    href={`/quiz/${level.slug}`}
                    className="px-3 py-1.5 border border-blue-600 text-blue-600 rounded text-sm hover:bg-blue-50 dark:hover:bg-blue-950/40"
                  >
                    問題を解く
                  </Link>
                </div>
              ) : (
                <div className="text-sm text-gray-500">準備中</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
