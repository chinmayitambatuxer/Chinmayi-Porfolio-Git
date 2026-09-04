import { Reveal } from "@/components/motion/Reveal";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { site } from "@/data/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "Instagram", href: site.social.instagram },
] as const;

export function ContactSection() {
  return (
    <section
      id="contact"
      className="landing-scroll-target bg-[var(--lp-quote)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <Reveal>
          <SectionHeader
            variant="landing"
            index="04"
            label="Contact"
            title="Let's build something meaningful together."
            description="Open to new opportunities, collaborations, and interesting product challenges."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <Reveal delay={0.08} className="min-w-0">
            <a
              href={`mailto:${site.email}`}
              className="group flex h-full min-w-0 flex-col rounded-2xl border border-[var(--lp-border)] bg-white p-8 transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(25,29,33,0.12)]"
            >
              <p className="lp-meta-label">Email</p>
              <p className="mt-4 font-[family-name:var(--font-bricolage)] text-xl leading-snug font-bold break-all text-[var(--lp-ink)] transition-opacity group-hover:opacity-70 md:text-2xl">
                {site.email}
              </p>
              <p className="lp-body-sm mt-3">
                Best for project inquiries and collaborations
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.12}>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-[var(--lp-border)] bg-white p-8 transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(25,29,33,0.12)]"
            >
              <p className="lp-meta-label">Resume</p>
              <p className="lp-card-title mt-4 transition-opacity group-hover:opacity-70">
                Download PDF
              </p>
              <p className="lp-body-sm mt-3">
                Full experience, skills, and project highlights
              </p>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.16}>
          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-[var(--lp-border)] pt-10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[var(--lp-body)] transition-colors hover:text-[var(--lp-ink)]"
              >
                {link.label} ↗
              </a>
            ))}
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-sm font-medium text-[var(--lp-body)] transition-colors hover:text-[var(--lp-ink)]"
            >
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
