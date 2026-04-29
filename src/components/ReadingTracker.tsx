"use client";

import { useEffect } from "react";
import { markSectionRead } from "@/lib/progress";

/**
 * Watches every <section id="…"> in the given list and records it as
 * "read" once it has been more than half visible in the viewport for a
 * brief moment. Renders nothing.
 */
export function ReadingTracker({ sectionIds }: { sectionIds: string[] }) {
  useEffect(() => {
    if (sectionIds.length === 0) return;
    if (typeof IntersectionObserver === "undefined") return;

    const dwellMs = 1500;
    const timers = new Map<string, ReturnType<typeof setTimeout>>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!id) continue;
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            if (timers.has(id)) continue;
            const t = setTimeout(() => {
              markSectionRead(id);
              observer.unobserve(entry.target);
              timers.delete(id);
            }, dwellMs);
            timers.set(id, t);
          } else {
            const t = timers.get(id);
            if (t) {
              clearTimeout(t);
              timers.delete(id);
            }
          }
        }
      },
      { threshold: [0.5] },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      observer.disconnect();
      for (const t of timers.values()) clearTimeout(t);
      timers.clear();
    };
  }, [sectionIds]);

  return null;
}
