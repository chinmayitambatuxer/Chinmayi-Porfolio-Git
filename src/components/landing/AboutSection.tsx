import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="landing-scroll-target bg-[var(--lp-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <Reveal>
          <SectionHeader
            variant="landing"
            index="02"
            label="About"
            title="Designing with empathy, delivering with precision."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal delay={0.08}>
            <div className="space-y-5 lp-body max-w-2xl">
              <p>{site.summary}</p>
              <p>
                I&apos;ve designed across automotive, healthcare, and enterprise
                platforms — from in-vehicle cockpit HMI systems to clinical tools —
                always with accessibility, inclusivity, and usability at the
                forefront.
              </p>
              <p>
                Currently at{" "}
                <strong className="font-semibold text-[var(--lp-ink)]">
                  Tata Elxsi
                </strong>
                , I work cross-functionally with engineering and product teams to
                ship experiences that people feel.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="-rotate-3 overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-24px_rgba(25,29,33,0.2)] ring-1 ring-black/5">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={site.profileImage}
                    alt={site.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 80vw, 360px"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <div className="lp-quote-block p-8 md:p-10">
            <p className="lp-meta-label">Recognition</p>
            <ul className="mt-4 space-y-3">
              {site.awards.map((award) => (
                <li
                  key={award}
                  className="font-[family-name:var(--font-bricolage)] text-xl font-semibold text-[var(--lp-ink)] md:text-2xl"
                >
                  {award}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14">
            <h3 className="lp-meta-label">Skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.skills.map((skill) => (
                <li key={skill} className="pill">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-10">
            <h3 className="lp-meta-label">Tools</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.tools.map((tool) => (
                <li key={tool} className="pill">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14">
            <h3 className="lp-meta-label">Certifications</h3>
            <ul className="mt-6 divide-y divide-[var(--lp-border)] border-y border-[var(--lp-border)]">
              {site.certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="text-sm font-semibold text-[var(--lp-ink)]">
                    {cert.name}
                  </span>
                  <span className="lp-body-sm">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
