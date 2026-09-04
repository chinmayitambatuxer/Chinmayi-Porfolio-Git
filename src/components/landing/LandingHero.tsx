"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { FadeIn } from "@/components/motion/FadeIn";

export function LandingHero() {
  return (
    <section
      id="intro"
      className="landing-scroll-target px-4 pt-28 pb-10 md:px-6 md:pt-36 md:pb-14"
    >
      <div className="lp-hero-shell mx-auto max-w-[var(--cs-page)] px-6 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
        <div className="flex w-full flex-col gap-12 md:flex-row md:items-center md:justify-between md:gap-16 lg:gap-20">
          <div className="min-w-0 flex-1">
            <FadeIn>
              <p className="lp-meta-label">
                {site.location} · {site.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="lp-display mt-6 max-w-3xl text-balance">
                {site.name}
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="mt-4 font-[family-name:var(--font-bricolage)] text-2xl font-semibold text-[var(--lp-ink)] md:text-3xl">
                Product designer crafting experiences people rely on.
              </p>
            </FadeIn>

            <FadeIn delay={0.14}>
              <p className="lp-body mt-6 max-w-xl">{site.tagline}</p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#work" className="btn-primary">
                  View my work
                </a>
                <a href="#contact" className="btn-secondary">
                  Get in touch
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn
            delay={0.12}
            className="relative ml-auto w-full max-w-xs shrink-0 lg:max-w-sm"
          >
            <div className="overflow-hidden rounded-3xl bg-white/60 shadow-[0_20px_60px_-20px_rgba(25,29,33,0.18)] ring-1 ring-black/5">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={site.profileImage}
                  alt={site.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 400px"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
