import type { CaseStudy } from "@/types/case-study";
import { Reveal } from "@/components/motion/Reveal";

type ReflectionBlockProps = {
  study: CaseStudy;
};

export function ReflectionBlock({ study }: ReflectionBlockProps) {
  if (!study.reflection) return null;

  return (
    <section
      id="reflection"
      className="scroll-mt-28 border-t border-border pt-20 md:pt-24"
    >
      <Reveal>
        <h2 className="cs-section-title">{study.reflection.title}</h2>
        <div className="mt-12 space-y-10">
          {study.reflection.items.map((item) => (
            <article key={item.number} className="max-w-3xl">
              <p className="cs-meta-label">{item.number}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
              <p className="cs-body-sm mt-3">{item.content}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
