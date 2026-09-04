"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { CaseStudySection } from "@/types/case-study";

type TimelineItem = {
  id: string;
  index: number;
  label: string;
};

function getTimelineItems(sections: CaseStudySection[]): TimelineItem[] {
  let chapter = 0;
  const items: TimelineItem[] = [];

  for (const section of sections) {
    if (section.type === "phase") {
      chapter += 1;
      items.push({
        id: section.id,
        index: chapter,
        label: section.phase.replace(/^\d+\s*—\s*/, ""),
      });
    }
  }

  return items;
}

type TimelineNavProps = {
  sections: CaseStudySection[];
  accent: string;
};

export function TimelineNav({ sections, accent }: TimelineNavProps) {
  const items = useMemo(() => getTimelineItems(sections), [sections]);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const observers: IntersectionObserver[] = [];

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(item.id);
        },
        { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav
      className="sticky top-0 z-30 border-b border-border bg-white/95 py-3 backdrop-blur-md md:py-4"
      aria-label="Case study timeline"
    >
      <div className="mx-auto flex max-w-[var(--cs-page)] items-center gap-4 px-6 md:gap-6 md:px-10">
        <p className="cs-meta-label hidden shrink-0 sm:block">Timeline</p>
        <ul className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-0.5 scrollbar-none md:gap-3">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition-colors md:px-4 md:py-2 ${
                    isActive
                      ? "border-transparent bg-[var(--accent-soft)] font-semibold text-ink"
                      : "border-border text-ink-muted hover:border-ink/20 hover:text-ink"
                  }`}
                  style={isActive ? { color: accent } : undefined}
                >
                  <span
                    className="tabular-nums"
                    style={{ color: isActive ? accent : undefined }}
                  >
                    {item.index} /
                  </span>
                  <span className="whitespace-nowrap">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <Link
          href="/#work"
          className="cs-meta-label hidden shrink-0 hover:text-ink lg:inline-block"
        >
          ← All projects
        </Link>
      </div>
    </nav>
  );
}

export { getTimelineItems };
