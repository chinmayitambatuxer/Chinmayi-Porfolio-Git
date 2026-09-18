import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/data/site";

export function AboutSection() {
  return (
    <section
      id="about"
      className="landing-scroll-target bg-[var(--lp-surface)] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <Reveal>
          <p className="lp-meta-label text-[var(--lp-ink)]">About</p>
        </Reveal>

        <div className="mt-4 grid gap-x-10 gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <Reveal delay={0.04} className="lg:col-start-1 lg:row-start-1">
            <h2 className="max-w-3xl text-balance lp-section-title text-[var(--lp-ink)]">
              Designing with empathy, delivering with precision.
            </h2>
          </Reveal>

          <Reveal
            delay={0.12}
            className="flex w-full justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-end lg:self-start"
          >
            <div className="pb-6 pr-0 sm:pb-7 lg:pr-0">
              <div className="relative w-[min(100vw-3rem,17.5rem)] shrink-0 sm:w-[19rem] lg:w-[20rem]">
                <div
                  className="pointer-events-none absolute left-6 top-6 z-0 h-full w-full rounded-[1.75rem] bg-[#e8e8e8] sm:left-7 sm:top-7"
                  aria-hidden
                />
                <div
                  className="relative z-10 overflow-hidden rounded-[1.75rem] bg-white shadow-[0_20px_48px_-24px_rgba(25,29,33,0.2)] ring-1 ring-black/[0.06]"
                >
                  <div className="relative aspect-[734/1024] w-full">
                    <Image
                      src={site.aboutPortraitImage}
                      alt={`${site.name} — product designer`}
                      fill
                      unoptimized
                      className="object-cover"
                      sizes="(max-width: 1024px) 85vw, 320px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-start-1 lg:row-start-2">
            <div className="space-y-5 lp-body max-w-2xl lg:max-w-none lg:pt-2">
              <p>{site.summary}</p>
              <p>
                I&apos;ve designed across automotive, healthcare, and enterprise
                platforms — from in-vehicle cockpit HMI systems to clinical tools —
                always with accessibility, inclusivity, and usability at the
                forefront.
              </p>
              <p>
                Currently working at{" "}
                <strong className="font-semibold text-[var(--lp-ink)]">
                  Tata Elxsi
                </strong>
                , I work cross-functionally with engineering and product teams to
                ship experiences that people feel.
              </p>
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
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {site.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center gap-2 rounded-full border border-[var(--lp-border)] bg-[var(--lp-surface)] px-3.5 py-2 text-[0.8125rem] shadow-[0_1px_2px_rgba(25,29,33,0.04)]"
                >
                  <Image
                    src={tool.logo}
                    alt=""
                    width={20}
                    height={20}
                    className="h-5 w-5 shrink-0 object-contain"
                    unoptimized
                    aria-hidden
                  />
                  <span className="font-medium text-[var(--lp-ink)]">
                    {tool.name}
                  </span>
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
