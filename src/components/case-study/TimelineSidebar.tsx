"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { CaseStudySection } from "@/types/case-study";
import { phasePillLabel } from "@/lib/phase-label";

type TimelineItem = {
  id: string;
  index: number;
  pillLabel: string;
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
        pillLabel: phasePillLabel(section.phase),
      });
    }
  }

  return items;
}

function getPhaseScrollTop(id: string) {
  const el = document.getElementById(id);
  if (!el) return null;
  return el.getBoundingClientRect().top + window.scrollY;
}

type TimelineNavProps = {
  sections: CaseStudySection[];
  accent: string;
};

export function TimelineNav({ sections, accent }: TimelineNavProps) {
  const items = useMemo(() => getTimelineItems(sections), [sections]);
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const listRef = useRef<HTMLUListElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const resolveActiveId = useCallback(() => {
    if (items.length === 0) return "";

    const navHeight = navRef.current?.offsetHeight ?? 72;
    const scrollLine = window.scrollY + navHeight + 48;

    let current = items[0].id;

    for (const item of items) {
      const top = getPhaseScrollTop(item.id);
      if (top !== null && top <= scrollLine) {
        current = item.id;
      }
    }

    const docBottom = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (docBottom >= documentHeight - 48) {
      current = items[items.length - 1].id;
    }

    return current;
  }, [items]);

  useEffect(() => {
    const sync = () => {
      const next = resolveActiveId();
      if (next) setActiveId(next);
    };

    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      window.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [resolveActiveId]);

  useEffect(() => {
    const list = listRef.current;
    if (!list || !activeId) return;

    const link = list.querySelector<HTMLAnchorElement>(`a[href="#${activeId}"]`);
    if (!link) return;

    const targetLeft =
      link.offsetLeft - list.clientWidth / 2 + link.offsetWidth / 2;

    list.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeId]);

  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const navHeight = navRef.current?.offsetHeight ?? 72;
    const top =
      target.getBoundingClientRect().top + window.scrollY - navHeight - 12;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
    setActiveId(id);
  };

  if (items.length === 0) return null;

  const activeItem =
    items.find((item) => item.id === activeId) ?? items[0];

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-30 border-b border-border bg-white/95 py-3 backdrop-blur-md max-md:shadow-[0_4px_20px_-12px_rgba(0,0,0,0.12)] md:py-4"
      aria-label="Case study timeline"
    >
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:gap-6 md:px-10">
        <div className="flex items-center gap-3 md:gap-4">
          <p className="cs-meta-label hidden shrink-0 sm:block">Timeline</p>
          <div className="relative min-w-0 flex-1">
            <ul
              ref={listRef}
              className="flex gap-2 overflow-x-auto overscroll-x-contain scroll-smooth pb-0.5 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] md:gap-3 [&::-webkit-scrollbar]:hidden"
            >
              {items.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id} className="shrink-0">
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => scrollToSection(event, item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition-colors active:scale-[0.98] md:px-4 md:py-2 ${
                        isActive
                          ? "border-transparent bg-[var(--accent-soft)] font-semibold text-ink shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
                          : "border-border text-ink-muted hover:border-ink/20 hover:text-ink"
                      }`}
                      style={isActive ? { color: accent } : undefined}
                    >
                      {item.pillLabel}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-7 bg-gradient-to-l from-white/95 to-transparent md:hidden"
              aria-hidden
            />
          </div>
          <Link
            href="/#work"
            className="cs-meta-label hidden shrink-0 hover:text-ink lg:inline-block"
          >
            ← All projects
          </Link>
        </div>
        <p className="cs-meta-label mt-2 hidden text-ink-muted md:block">
          <span style={{ color: accent }} className="font-semibold">
            {activeItem.pillLabel}
          </span>
          <span className="text-ink-light"> — current phase</span>
        </p>
      </div>
    </nav>
  );
}

export { getTimelineItems };
