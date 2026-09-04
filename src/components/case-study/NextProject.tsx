import Link from "next/link";
import type { CaseStudy } from "@/types/case-study";
import { Reveal } from "@/components/motion/Reveal";

type NextProjectProps = {
  current: CaseStudy;
  next: CaseStudy;
};

export function NextProject({ current, next }: NextProjectProps) {
  return (
    <section className="mt-20 border-t border-border pt-16 md:pt-20">
      <Reveal>
        <p className="cs-meta-label">Check out similar work</p>
        <Link
          href={`/case-studies/${next.slug}`}
          className="group mt-4 inline-block"
        >
          <h2
            className="cs-section-title transition-opacity group-hover:opacity-70"
            style={{ color: current.theme.accent }}
          >
            {next.title} →
          </h2>
          <p className="cs-body-sm mt-3 max-w-xl">{next.headline}</p>
        </Link>
        <Link
          href="/#work"
          className="cs-meta-label mt-10 inline-block hover:text-ink"
        >
          Check out all work →
        </Link>
      </Reveal>
    </section>
  );
}
