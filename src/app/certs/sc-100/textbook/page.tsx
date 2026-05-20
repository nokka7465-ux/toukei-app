import type { Metadata } from "next";
import { sc100Textbook } from "@/data/textbooks/sc-100";
import { TextbookView } from "@/components/TextbookView";
import { BreadcrumbJsonLd, CourseJsonLd } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "SC-100 教科書 ─ Microsoft Cybersecurity Architect Expert の完全解説",
  description:
    "Microsoft Cybersecurity Architect Expert(SC-100)対策の無料教科書。Zero Trust ・ Defender XDR ・ Sentinel ・ Entra ID ・ Purview ・ Compliance ・ AI Security ・ Resilience を全 6 章で体系的に解説。",
  alternates: { canonical: "/certs/sc-100/textbook" },
  openGraph: { title: "SC-100 教科書", description: "Microsoft Cybersecurity Architect Expert 認定の対策をまとめた無料教科書。", type: "article" },
};

export default function Sc100TextbookPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "ホーム", href: "/" }, { name: "関連検定", href: "/textbook" }, { name: "SC-100", href: "/certs/sc-100" }, { name: "教科書", href: "/certs/sc-100/textbook" }]} />
      <CourseJsonLd name="Microsoft Cybersecurity Architect Expert(SC-100)対策教科書" description="Zero Trust ・ Defender XDR ・ Sentinel ・ Entra ID ・ Purview ・ Compliance ・ AI Security ・ Resilience を全 6 章で体系的に解説。" url="/certs/sc-100/textbook" about={["Microsoft", "Cybersecurity", "Zero Trust", "Defender XDR", "Sentinel", "Compliance"]} />
      <TextbookView book={sc100Textbook} breadcrumb={[{ label: "ホーム", href: "/" }, { label: "関連検定" }, { label: "SC-100", href: "/certs/sc-100" }, { label: "教科書" }]} bottomLinks={[{ label: "← SC-100 の概要に戻る", href: "/certs/sc-100" }, { label: "SC-100 の問題を解く →", href: "/certs/sc-100/quiz", primary: true }]} />
    </>
  );
}
