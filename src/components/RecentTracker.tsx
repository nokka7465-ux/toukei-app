"use client";

import { useEffect } from "react";
import { recordVisit, type RecentEntry } from "@/lib/recently-viewed";

/** マウント時に履歴を記録するだけのトラッカー(画面には何も描画しない) */
export function RecentTracker(props: Omit<RecentEntry, "ts">) {
  const { id, title, href, kind, context } = props;
  useEffect(() => {
    recordVisit({ id, title, href, kind, context });
  }, [id, title, href, kind, context]);
  return null;
}
