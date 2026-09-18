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
};

export function MobileHorizontalScroll({
  children,
  className = "",
  accent,
}: MobileHorizontalScrollProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scrollable, setScrollable] = useState(false);

  const updateProgress = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 2) {
      setScrollable(false);
      setProgress(0);
      return;
    }

    setScrollable(true);
    setProgress(Math.min(100, (el.scrollLeft / maxScroll) * 100));
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

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollerRef}
        onScroll={updateProgress}
        className="overflow-x-auto max-lg:-mx-6 max-lg:px-6 max-lg:pb-1 max-lg:overscroll-x-contain max-lg:scroll-smooth max-lg:[-webkit-overflow-scrolling:touch] max-lg:[scrollbar-width:none] max-lg:[&::-webkit-scrollbar]:hidden lg:pb-0"
      >
        {children}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-8 bg-gradient-to-l from-white via-white/85 to-transparent max-lg:block lg:hidden"
        aria-hidden
      />
      {scrollable && (
        <div
          className="mt-3 hidden px-0 max-lg:block lg:hidden"
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
