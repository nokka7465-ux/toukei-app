import type { Metadata } from "next";
import { pythonDataTextbook } from "@/data/textbooks/python-data";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Python データ分析試験 教科書 ─ NumPy / pandas / scikit-learn を完全解説",
  description:
    "Python 3 エンジニア認定 データ分析試験対策の無料教科書。Python 文法・NumPy・pandas・Matplotlib・scikit-learn・統計と機械学習の基礎を、コード例付きで全 10 章で体系的に解説。",
  alternates: { canonical: "/certs/python-data/textbook" },
  openGraph: {
    title: "Python データ分析試験 教科書",
    description:
      "NumPy・pandas・Matplotlib・scikit-learn を、コード例付きで体系的に学べる無料教科書。",
    type: "article",
  },
};

export default function PythonDataTextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "ホーム", href: "/" },
          { name: "関連検定", href: "/textbook" },
          { name: "Python データ分析", href: "/certs/python-data" },
          { name: "教科書", href: "/certs/python-data/textbook" },
        ]}
      />
      <CourseJsonLd
        name="Python 3 エンジニア認定 データ分析試験 対策教科書"
        description="Python 文法・NumPy・pandas・Matplotlib・scikit-learn・統計と機械学習の基礎を全 10 章で体系的に解説。"
        url="/certs/python-data/textbook"
        about={[
          "Python",
          "NumPy",
          "pandas",
          "Matplotlib",
          "scikit-learn",
          "データ分析",
        ]}
      />
      <TextbookView
        book={pythonDataTextbook}
        breadcrumb={[
          { label: "ホーム", href: "/" },
          { label: "関連検定" },
          { label: "Python データ分析", href: "/certs/python-data" },
          { label: "教科書" },
        ]}
        bottomLinks={[
          { label: "← Python データ分析の概要に戻る", href: "/certs/python-data" },
          {
            label: "Python データ分析の問題を解く →",
            href: "/certs/python-data/quiz",
            primary: true,
          },
        ]}
      />
    </>
  );
}
