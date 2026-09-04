import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { site } from "@/data/site";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="landing-scroll-target bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <Reveal>
          <SectionHeader
            variant="landing"
            index="03"
            label="Experience"
            title="Where I've been building."
            description="Three companies. Multiple domains. One consistent focus — designing experiences that actually work for real people."
          />
        </Reveal>

        <div className="mt-14 space-y-0 divide-y divide-[var(--lp-border)]">
          {site.experience.map((role, index) => (
            <Reveal key={role.company} delay={index * 0.08}>
              <article className="grid gap-4 py-10 md:grid-cols-[180px_1fr] md:gap-10">
                <p className="lp-meta-label tabular-nums">{role.period}</p>
                <div>
                  <h3 className="lp-card-title">{role.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--lp-ink)]">
                    {role.company}
                  </p>
                  <p className="lp-body-sm mt-4">{role.description}</p>
                  <ul className="mt-5 space-y-2">
                    {role.highlights.map((highlight) => (
                      <li key={highlight} className="lp-body-sm flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lp-ink)]/25" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 border-t border-[var(--lp-border)] pt-16">
            <h3 className="lp-meta-label">Education</h3>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {site.education.map((edu) => (
                <div
                  key={`${edu.degree}-${edu.institution}`}
                  className="rounded-2xl border border-[var(--lp-border)] bg-[var(--lp-surface)] p-6"
                >
                  <p className="lp-meta-label">{edu.period}</p>
                  <h4 className="mt-2 font-[family-name:var(--font-bricolage)] text-lg font-semibold text-[var(--lp-ink)]">
                    {edu.degree}
                  </h4>
                  <p className="lp-body-sm mt-1">{edu.institution}</p>
                  {edu.detail && (
                    <p className="mt-2 text-sm font-medium text-[var(--lp-ink)]">
                      {edu.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
