import { CaseStudyCard } from "@/components/home/CaseStudyCard";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { caseStudies } from "@/data/case-studies";

export function WorkSection() {
  return (
    <section
      id="work"
      className="landing-scroll-target bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <Reveal>
          <SectionHeader
            variant="landing"
            index="01"
            label="Case studies"
            title="Five years of designing experiences people rely on."
            description="Case studies across automotive HMI, healthcare, travel, and enterprise — with editorial depth on research, decisions, and outcomes."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={(index % 2) * 0.08}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
