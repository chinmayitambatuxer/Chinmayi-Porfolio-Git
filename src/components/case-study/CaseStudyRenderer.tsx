import type { CSSProperties } from "react";
import type { CaseStudy } from "@/types/case-study";
import { getCaseStudy, getCaseStudySlugs } from "@/data/case-studies";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { CaseStudyHero } from "./CaseStudyHero";
import {
  GoalChallengeOutcome,
  OutcomeMetrics,
} from "./GoalChallengeOutcome";
import { TimelineNav } from "./TimelineSidebar";
import { SectionRenderer } from "./SectionRenderer";
import { ReflectionBlock } from "./ReflectionBlock";
import { NextProject } from "./NextProject";

type CaseStudyRendererProps = {
  study: CaseStudy;
};

export function CaseStudyRenderer({ study }: CaseStudyRendererProps) {
  const slugs = getCaseStudySlugs();
  const currentIndex = slugs.indexOf(study.slug);
  const nextSlug = slugs[(currentIndex + 1) % slugs.length];
  const nextStudy = getCaseStudy(nextSlug)!;

  return (
    <article
      className="case-study"
      style={
        {
          "--accent": study.theme.accent,
          "--accent-soft": study.theme.accentSoft,
        } as CSSProperties
      }
    >
      <ScrollProgress accent={study.theme.accent} />
      <CaseStudyHero study={study} />
      <GoalChallengeOutcome study={study} />
      <OutcomeMetrics study={study} />
      <TimelineNav sections={study.sections} accent={study.theme.accent} />

      <div className="mx-auto max-w-[var(--cs-page)] px-6 pb-24 pt-8 md:px-10">
        {study.sections.map((section, index) => {
          const phaseIndex =
            section.type === "phase"
              ? study.sections
                  .slice(0, index + 1)
                  .filter((s) => s.type === "phase").length
              : undefined;

          return (
            <SectionRenderer
              key={section.id}
              section={section}
              theme={study.theme}
              index={index}
              phaseIndex={phaseIndex}
            />
          );
        })}
        <ReflectionBlock study={study} />
        <NextProject current={study} next={nextStudy} />
      </div>
    </article>
  );
}
