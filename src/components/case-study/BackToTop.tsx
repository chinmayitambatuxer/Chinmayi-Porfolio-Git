"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type BackToTopProps = {
  accent: string;
  accentSoft: string;
};

function UpArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 4.5v11M10 4.5 5.5 9M10 4.5 14.5 9"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BackToTop({ accent, accentSoft }: BackToTopProps) {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed z-40 flex items-center justify-center rounded-full border shadow-[0_10px_28px_-10px_rgba(0,0,0,0.22)] transition-[opacity,transform] duration-200 hover:scale-[1.03] focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transform-none motion-reduce:transition-none bottom-6 right-6 h-11 w-11 max-md:bottom-[max(1rem,env(safe-area-inset-bottom))] max-md:right-4 max-md:h-10 max-md:w-10 max-md:shadow-[0_8px_20px_-8px_rgba(0,0,0,0.25)] md:bottom-6 md:right-6 md:h-11 md:w-11 ${
        visible
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      style={{
        backgroundColor: accentSoft,
        borderColor: `${accent}55`,
        color: accent,
        outlineColor: accent,
      }}
    >
      <UpArrowIcon />
    </button>
  );
}
