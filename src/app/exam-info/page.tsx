import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "受験情報まとめ ─ 統計検定 / DS基礎 / G検定 / 統計調査士 / DS検定",
  description:
    "統計検定 4 級〜1 級、DS基礎、G検定、統計調査士、データサイエンティスト検定の受験時期・受験料・試験形式・合格率(参考値)・申込先をまとめた一覧ページ。学習計画の参考に。",
  openGraph: {
    title: "受験情報まとめ",
    description:
      "統計検定・関連検定の受験時期・受験料・合格率(参考値)を一覧でまとめました。",
    type: "website",
  },
};

type Exam = {
  id: string;
  title: string;
  organizer: string;
  format: string;
  schedule: string;
  duration: string;
  fee: string;
  passCriteria: string;
  passRate: string;
  takers: string;
  officialUrl: string;
  studyHref?: string;
  studyLabel?: string;
  highlight?: string;
};

const TOUKEI_EXAMS: Exam[] = [
  {
    id: "grade-4",
    title: "統計検定 4 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式(全国の試験会場でパソコン受験)",
    schedule: "通年(会場ごとに随時実施)",
    duration: "60 分 / 30 問程度(四肢択一)",
    fee: "一般 5,000 円 / 学割 3,500 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 60〜70%(回により変動)",
    takers: "年間およそ 2,000〜3,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade4/",
    studyHref: "/textbook/grade-4",
    studyLabel: "4 級の教科書を見る",
    highlight: "中学レベルの数学までで挑戦可能。統計の入口。",
  },
  {
    id: "grade-3",
    title: "統計検定 3 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "60 分 / 30 問程度(四肢択一)",
    fee: "一般 6,000 円 / 学割 4,000 円(参考)",
    passCriteria: "100 点満点中 65 点以上で合格(参考)",
    passRate: "おおむね 60〜70%",
    takers: "年間およそ 5,000〜7,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade3/",
    studyHref: "/textbook/grade-3",
    studyLabel: "3 級の教科書を見る",
    highlight: "高校データの活用レベル。データサイエンス入門にも。",
  },
  {
    id: "grade-2",
    title: "統計検定 2 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "90 分 / 35 問程度(五肢択一)",
    fee: "一般 7,000 円 / 学割 5,000 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 40〜50%",
    takers: "年間およそ 10,000 名以上(最も人気の級)",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade2/",
    studyHref: "/textbook/grade-2",
    studyLabel: "2 級の教科書を見る",
    highlight: "実務で使える統計の標準。データサイエンティストの登竜門。",
  },
  {
    id: "grade-pre1",
    title: "統計検定 準 1 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "90 分 / 25 問程度(選択 + 部分記述)",
    fee: "一般 8,000 円 / 学割 6,000 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 20〜25%(難関)",
    takers: "年間およそ 2,000〜3,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade-semi1/",
    studyHref: "/textbook/grade-pre1",
    studyLabel: "準 1 級の教科書を見る",
    highlight: "多変量・ベイズ・時系列など実務統計の総合力を問う。",
  },
  {
    id: "grade-1",
    title: "統計検定 1 級",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "PBT(紙ベース)方式・年 1 回",
    schedule: "毎年 11 月(年 1 回)",
    duration: "統計数理 90 分 + 統計応用 90 分(両方合格で 1 級認定)",
    fee: "1 科目 6,000 円 / 2 科目同時 10,000 円(参考)",
    passCriteria: "記述式・部分点あり。両科目で合格水準到達が必要(参考)",
    passRate: "おおむね 20〜25%(科目別)",
    takers: "年間およそ 1,500〜2,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/grade1/",
    studyHref: "/textbook/grade-1",
    studyLabel: "1 級の教科書を見る",
    highlight: "数理統計学の最高峰。研究者・専門職向け。",
  },
];

const RELATED_EXAMS: Exam[] = [
  {
    id: "ds-basic",
    title: "統計検定 データサイエンス基礎(DS基礎)",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式(Excel を用いた実技形式)",
    schedule: "通年",
    duration: "90 分 / 大問 5 題程度",
    fee: "一般 7,000 円 / 学割 5,000 円(参考)",
    passCriteria: "100 点満点中 60 点以上で合格(参考)",
    passRate: "おおむね 50〜60%",
    takers: "年間およそ 1,000〜2,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/ds-base/",
    studyHref: "/certs/ds-basic",
    studyLabel: "DS基礎の教科書を見る",
    highlight: "Excel での実データ分析力を問う実技試験。",
  },
  {
    id: "survey",
    title: "統計調査士",
    organizer: "日本統計学会 / 統計質保証推進協会",
    format: "CBT 方式",
    schedule: "通年",
    duration: "60 分 / 30 問程度",
    fee: "一般 7,000 円 / 学割 5,000 円(参考)",
    passCriteria: "100 点満点中 70 点以上で合格(参考)",
    passRate: "おおむね 50〜60%",
    takers: "年間およそ 500〜1,000 名",
    officialUrl: "https://www.toukei-kentei.jp/exam/toukei-chosashi/",
    studyHref: "/certs/survey",
    studyLabel: "統計調査士の教科書を見る",
    highlight: "公的統計・統計法・標本調査法など調査実務の知識。",
  },
  {
    id: "g-test",
    title: "G 検定(JDLA Deep Learning for GENERAL)",
    organizer: "日本ディープラーニング協会(JDLA)",
    format: "オンライン(自宅 PC からオープンブック受験)",
    schedule: "年 5〜6 回(主に 1 月・3 月・5 月・7 月・9 月・11 月)",
    duration: "120 分 / 約 200 問(多肢選択)",
    fee: "一般 13,200 円 / 学生 5,500 円(税込・参考)",
    passCriteria: "公式に明示なし。各回ごとに合否判定(参考)",
    passRate: "おおむね 60〜70%",
    takers: "1 回あたり 5,000〜10,000 名規模(累計 10 万人超)",
    officialUrl: "https://www.jdla.org/certificate/general/",
    studyHref: "/certs/g-test",
    studyLabel: "G 検定の教科書を見る",
    highlight: "AI / ディープラーニングのビジネス活用知識。最大規模の AI 検定。",
  },
  {
    id: "ds-literacy",
    title: "データサイエンティスト検定 リテラシーレベル(DS 検定)",
    organizer: "データサイエンティスト協会",
    format: "CBT 方式",
    schedule: "年 2〜3 回(春・夏・冬)",
    duration: "100 分 / 90 問程度(多肢選択)",
    fee: "一般 11,000 円 / 学割 5,500 円(税込・参考)",
    passCriteria: "公式に明示なし(おおむね 8 割が目安・参考)",
    passRate: "おおむね 50%前後",
    takers: "年間およそ 5,000 名以上",
    officialUrl: "https://www.datascientist.or.jp/dskentei/",
    studyHref: "/certs/ds-literacy",
    studyLabel: "DS 検定の教科書を見る",
    highlight: "データサイエンス力 / データエンジニアリング力 / ビジネス力の 3 軸。",
  },
];

function ExamCard({ exam }: { exam: Exam }) {
  return (
    <article
      id={exam.id}
      className="paper rounded-lg p-6 scroll-mt-20"
    >
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-xl font-bold mb-1 tracking-wide">{exam.title}</h3>
        {exam.highlight && (
          <p className="text-sm text-[var(--muted-strong)] leading-relaxed">
            {exam.highlight}
          </p>
        )}
      </header>

      <dl className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-4 gap-y-3 text-sm ui-sans">
        <dt className="text-[var(--muted)] font-bold">主催</dt>
        <dd>{exam.organizer}</dd>

        <dt className="text-[var(--muted)] font-bold">受験形式</dt>
        <dd>{exam.format}</dd>

        <dt className="text-[var(--muted)] font-bold">実施時期</dt>
        <dd>{exam.schedule}</dd>

        <dt className="text-[var(--muted)] font-bold">試験時間 / 問題数</dt>
        <dd>{exam.duration}</dd>

        <dt className="text-[var(--muted)] font-bold">受験料</dt>
        <dd>{exam.fee}</dd>

        <dt className="text-[var(--muted)] font-bold">合格基準</dt>
        <dd>{exam.passCriteria}</dd>

        <dt className="text-[var(--muted)] font-bold">合格率(参考)</dt>
        <dd>{exam.passRate}</dd>

        <dt className="text-[var(--muted)] font-bold">受験者数(参考)</dt>
        <dd>{exam.takers}</dd>
      </dl>

      <div className="mt-5 pt-4 border-t border-[var(--page-border)] flex flex-wrap gap-3 text-sm ui-sans">
        <a
          href={exam.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--link)] hover:underline"
        >
          公式サイト(申込・最新情報) ↗
        </a>
        {exam.studyHref && exam.studyLabel && (
          <Link
            href={exam.studyHref}
            className="text-[var(--link)] hover:underline"
          >
            {exam.studyLabel} →
          </Link>
        )}
      </div>
    </article>
  );
}

export default function ExamInfoPage() {
  const allExams = [...TOUKEI_EXAMS, ...RELATED_EXAMS];

  return (
    <article>
      <nav
        aria-label="breadcrumb"
        className="text-xs text-[var(--muted)] ui-sans mb-6"
      >
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-2">›</span>
        <span>受験情報まとめ</span>
      </nav>

      <header className="mb-10 pb-6 border-b-2 border-[var(--page-border-strong)]">
        <div className="chapter-eyebrow mb-2">Exam Info</div>
        <h1 className="text-4xl font-bold mb-3 tracking-wider">
          受験情報まとめ
        </h1>
        <p className="text-[var(--muted-strong)] leading-loose max-w-3xl">
          統計検定(4 級〜1 級)と関連検定(DS基礎・統計調査士・G 検定・DS 検定)の{" "}
          <strong>受験時期・受験料・試験形式・合格率の目安</strong>{" "}
          をまとめました。学習目標を「合格」に置くと、勉強のモチベーションが大きく変わります。
        </p>
        <div className="mt-4 def-box text-sm leading-relaxed">
          <strong>注意:</strong>{" "}
          受験料・実施時期・問題数・合格基準などは{" "}
          <strong>変更されることがあります</strong>。本ページの数値は{" "}
          <strong>参考値</strong>{" "}
          であり、申込の前に必ず各検定の公式サイトで最新情報を確認してください。
        </div>
      </header>

      <section className="mb-10">
        <header className="mb-4">
          <div className="chapter-eyebrow mb-1">Quick Index</div>
          <h2 className="text-xl font-bold">目次</h2>
        </header>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm ui-sans">
          {allExams.map((e) => (
            <li key={e.id}>
              <a
                href={`#${e.id}`}
                className="text-[var(--link)] hover:underline"
              >
                {e.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">統計検定(本体)</div>
          <h2 className="text-2xl font-bold">統計検定 4 級 〜 1 級</h2>
          <p className="text-sm text-[var(--muted-strong)] mt-2 leading-relaxed">
            4〜準 1 級は CBT 方式で通年受験可能、1 級のみ年 1 回(11
            月)の紙試験です。
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5">
          {TOUKEI_EXAMS.map((e) => (
            <ExamCard key={e.id} exam={e} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">関連検定</div>
          <h2 className="text-2xl font-bold">DS基礎 / 統計調査士 / G 検定 / DS 検定</h2>
          <p className="text-sm text-[var(--muted-strong)] mt-2 leading-relaxed">
            統計検定の派生・関連分野の検定。データサイエンスや AI
            のキャリアにつながります。
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5">
          {RELATED_EXAMS.map((e) => (
            <ExamCard key={e.id} exam={e} />
          ))}
        </div>
      </section>

      <section className="mb-12">
        <header className="mb-5">
          <div className="chapter-eyebrow mb-1">学習開始</div>
          <h2 className="text-2xl font-bold">どの級から始めるか</h2>
        </header>
        <div className="paper rounded-lg p-6 space-y-4 text-sm leading-relaxed">
          <p>
            「自分はどの級を目指すべきか」迷ったら、まずは{" "}
            <Link href="/diagnose" className="text-[var(--link)] hover:underline">
              級診断(5 問の簡易チェック)
            </Link>{" "}
            か{" "}
            <Link href="/roadmap" className="text-[var(--link)] hover:underline">
              学習ロードマップ
            </Link>{" "}
            から始めるのがおすすめです。
          </p>
          <p>
            まったくの初心者の方は{" "}
            <Link href="/textbook/intro" className="text-[var(--link)] hover:underline">
              入門編(算数レベルから)
            </Link>{" "}
            、数学に不安があれば{" "}
            <Link href="/math" className="text-[var(--link)] hover:underline">
              数学基礎トラック
            </Link>{" "}
            から始めましょう。
          </p>
          <p>
            学習を進めるなら、級別教科書 →{" "}
            <Link href="/quiz" className="text-[var(--link)] hover:underline">
              演習問題(1 問 1 答 + 解説)
            </Link>{" "}
            →{" "}
            <Link href="/cheatsheet" className="text-[var(--link)] hover:underline">
              公式チートシート(印刷可)
            </Link>{" "}
            の順がスムーズです。
          </p>
        </div>
      </section>

      <section className="text-xs text-[var(--muted)] ui-sans leading-relaxed border-t border-[var(--page-border)] pt-6">
        <p>
          ※ 本ページの記載内容(受験料・実施時期・合格率・受験者数など)は、各検定の公式発表や過去の公表値をもとにした{" "}
          <strong>参考情報</strong>{" "}
          です。最新かつ正確な情報は、各検定の公式サイトをご確認ください。誤りを見つけた場合は{" "}
          <Link href="/contact" className="text-[var(--link)] hover:underline">
            お問い合わせ
          </Link>{" "}
          からご連絡いただけると幸いです。
        </p>
      </section>
    </article>
  );
}
