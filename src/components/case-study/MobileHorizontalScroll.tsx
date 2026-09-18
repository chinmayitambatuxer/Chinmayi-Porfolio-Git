"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type MobileHorizontalScrollProps = {
  children: ReactNode;
  className?: string;
  accent?: string;
  /** Pull scroll area into page gutters on mobile (default true). */
  bleed?: boolean;
  /** Fade the right edge when more content is off-screen (contained layouts). */
  edgeFade?: boolean;
  /** Color the fade blends into (e.g. table card background). */
  edgeFadeColor?: string;
  /** Scroll-snap on mobile (default true; disable for tables). */
  snap?: boolean;
};

export function MobileHorizontalScroll({
  children,
  className = "",
  accent,
  bleed = true,
  edgeFade = false,
  edgeFadeColor = "#ffffff",
  snap = true,
}: MobileHorizontalScrollProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrollable, setScrollable] = useState(false);
  const [atEnd, setAtEnd] = useState(false);

  const updateProgress = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 2) {
      setScrollable(false);
      setProgress(0);
      setAtEnd(true);
      return;
    }

    setScrollable(true);
    const ratio = el.scrollLeft / maxScroll;
    setProgress(Math.min(100, ratio * 100));
    setAtEnd(el.scrollLeft >= maxScroll - 2);
  }, []);

  useEffect(() => {
    updateProgress();

    const el = scrollerRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(() => updateProgress());
    resizeObserver.observe(el);
    for (const child of el.children) {
      resizeObserver.observe(child);
    }

    window.addEventListener("resize", updateProgress);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const fillColor = accent ?? "#191d21";
  const showRightFade = edgeFade && scrollable && !atEnd;

  const snapClasses = snap
    ? "max-lg:snap-x max-lg:snap-mandatory max-lg:scroll-px-6"
    : "";

  return (
    <div
      className={`${bleed ? "max-lg:cs-mobile-scroll-bleed" : ""} ${className}`}
    >
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={updateProgress}
          className={`overflow-x-auto max-lg:pb-1 max-lg:overscroll-x-contain max-lg:scroll-smooth max-lg:[-webkit-overflow-scrolling:touch] max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden lg:pb-0 ${snapClasses}`}
        >
          {children}
        </div>
        {showRightFade && (
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 max-lg:block lg:hidden"
            style={{
              background: `linear-gradient(to left, ${edgeFadeColor} 20%, ${edgeFadeColor}99 45%, transparent)`,
            }}
            aria-hidden
          />
        )}
      </div>
      {scrollable && (
        <div
          className="mt-3 hidden max-lg:block lg:hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Horizontal scroll progress"
        >
          <div className="h-1 w-full overflow-hidden rounded-full bg-[var(--lp-border,#ebebeb)]">
            <div
              className="h-full rounded-full transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%`, backgroundColor: fillColor }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
