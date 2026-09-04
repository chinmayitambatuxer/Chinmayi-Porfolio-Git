"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";

const navLinks = [
  { href: "#intro", label: "Home" },
  { href: "#work", label: "Case Studies" },
  { href: "#about", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

const SCROLL_DELTA = 8;
const TOP_REVEAL_OFFSET = 72;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setScrolled(currentY > 24);

      if (menuOpen || currentY <= TOP_REVEAL_OFFSET) {
        setVisible(true);
      } else if (delta > SCROLL_DELTA) {
        setVisible(false);
      } else if (delta < -SCROLL_DELTA) {
        setVisible(true);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`pointer-events-none fixed top-0 left-0 right-0 z-50 px-4 pt-4 transition-transform duration-300 ease-out motion-reduce:transition-none md:px-6 ${
        visible ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
      }`}
    >
      <div
        className={`lp-nav-pill pointer-events-auto mx-auto max-w-[var(--cs-page)] border border-white/80 transition-all duration-300 ${
          scrolled ? "bg-white/90" : "bg-white/70"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-8">
          <Link
            href="/#intro"
            className="font-[family-name:var(--font-bricolage)] text-sm font-bold tracking-[0.12em] text-[var(--lp-ink)] uppercase transition-opacity hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          >
            {site.name.split(" ")[0]}
          </Link>

          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--lp-body)] transition-colors hover:text-[var(--lp-ink)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-4 py-2 text-sm"
            >
              Resume
            </a>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--lp-border)] bg-white lg:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Menu</span>
            <div className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-[var(--lp-ink)] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 bg-[var(--lp-ink)] transition-opacity ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-[var(--lp-ink)] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-[var(--lp-border)] px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-[var(--lp-body)] transition-colors hover:bg-[var(--lp-surface)] hover:text-[var(--lp-ink)]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-2 text-center"
                onClick={() => setMenuOpen(false)}
              >
                Download resume
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
