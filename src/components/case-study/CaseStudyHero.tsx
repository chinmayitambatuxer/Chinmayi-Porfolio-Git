"use client";

import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";
import { FadeIn } from "@/components/motion/FadeIn";

type CaseStudyHeroProps = {
  study: CaseStudy;
};

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  const meta = [
    { label: "Product", value: study.client },
    { label: "Industry", value: study.domain },
    { label: "Team size", value: study.team },
    { label: "Timeline", value: study.timeline },
  ];

  return (
    <header className="border-b border-border bg-white pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <FadeIn>
          <Link
            href="/#work"
            className="cs-meta-label inline-flex items-center gap-2 transition-colors hover:text-ink"
          >
            ← Back to work
          </Link>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="cs-hero-title mt-10 max-w-4xl text-balance">
            {study.headline}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="cs-body mt-8 max-w-3xl">{study.overview}</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-10 sm:grid-cols-4">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="cs-meta-label">{item.label}</dt>
                <dd className="mt-1.5 text-sm font-medium text-ink">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-16">
            <Image
              src={study.heroImage}
              alt={study.title}
              width={1400}
              height={788}
              priority
              className="block h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1152px"
            />
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
