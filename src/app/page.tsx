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

      <section className="mb-10 p-6 border border-blue-200 dark:border-blue-900/50 bg-blue-50/60 dark:bg-blue-950/30 rounded-lg">
        <h2 className="text-xl font-bold mb-2">
          <span className="mr-2">🎯</span>初めての方へ
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
          統計をこれから学び始める方は、まず <strong>4級</strong>{" "}
          からスタートするのがおすすめです。4級では「平均・中央値・範囲」などのデータの基本から「確率・場合の数」の入門まで、中高生レベルの内容を扱います。各問題には
          <span className="mx-1 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 tracking-wider">
            ★☆☆ 基礎
          </span>
          <span className="mx-1 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 tracking-wider">
            ★★☆ 標準
          </span>
          <span className="mx-1 inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 tracking-wider">
            ★★★ 応用
          </span>
          の難易度バッジが付いているので、★☆☆ から順に取り組むと無理なく力がつきます。
        </p>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/quiz/grade-4"
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-bold hover:bg-blue-700"
          >
            4級の問題を解いてみる →
          </Link>
          <Link
            href="/formulas/grade-4"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded text-sm hover:bg-blue-100 dark:hover:bg-blue-950/50"
          >
            4級の公式集を見る
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold mb-3">級別コンテンツ</h2>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed">
          受験したい級、または自分のレベルに合った級を選んでください。4級が最も基礎的で、1級が最上位です。
        </p>
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
                <h3 className="text-xl font-bold mb-1">{level.title}</h3>
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
      </section>
    </div>
  );
}
