import type { CaseStudy } from "@/types/case-study";
import { Reveal } from "@/components/motion/Reveal";

type ReflectionBlockProps = {
  study: CaseStudy;
};

function ReflectionIcon({ index, color }: { index: number; color: string }) {
  const icons = [
    // Systems / structure
    <svg key="0" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect x="3" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" stroke={color} strokeWidth="1.5" />
      <path d="M14 17h7M17.5 14v7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    // Trust / invisible complexity
    <svg key="1" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 3 4 7v5c0 4.2 3.2 8.1 8 9 4.8-.9 8-4.8 8-9V7l-8-4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
    // Ecosystem / connected displays
    <svg key="2" viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect x="2" y="6" width="9" height="12" rx="1.5" stroke={color} strokeWidth="1.5" />
      <rect x="13" y="6" width="9" height="12" rx="1.5" stroke={color} strokeWidth="1.5" />
      <path d="M11 12h2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>,
  ];

  return icons[index % icons.length];
}

export function ReflectionBlock({ study }: ReflectionBlockProps) {
  if (!study.reflection) return null;

  const accent = study.theme.accent;
  const accentSoft = study.theme.accentSoft;
  const accentMuted = study.theme.accentMuted;
  const count = study.reflection.items.length;

  return (
    <section
      id="reflection"
      className="scroll-mt-28 border-t border-border pt-20 md:pt-24"
    >
      <Reveal>
        <h2 className="cs-section-title max-w-2xl">{study.reflection.title}</h2>
      </Reveal>

      <div
        className={`mt-10 grid gap-5 sm:gap-6 ${
          count >= 3
            ? "md:grid-cols-2 lg:grid-cols-3"
            : count === 2
              ? "md:grid-cols-2"
              : "max-w-xl"
        }`}
      >
        {study.reflection.items.map((item, index) => (
          <Reveal key={item.number} delay={0.08 + index * 0.07} className="h-full">
            <article
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 shadow-sm md:p-7"
              style={{ borderColor: `${accentMuted}66` }}
            >
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none text-[5.5rem] font-bold leading-none tracking-tighter opacity-[0.07]"
                style={{ color: accent }}
                aria-hidden
              >
                {item.number}
              </span>

              <div
                className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border"
                style={{
                  backgroundColor: accentSoft,
                  borderColor: `${accentMuted}88`,
                }}
              >
                <ReflectionIcon index={index} color={accent} />
              </div>

              <p className="cs-meta-label" style={{ color: accent }}>
                Lesson {item.number}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-ink md:text-xl">
                {item.title}
              </h3>
              <p className="cs-body-sm mt-3 flex-1 text-ink-muted">{item.content}</p>

              <div
                className="mt-6 h-1 w-10 rounded-full"
                style={{ backgroundColor: accent }}
                aria-hidden
              />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
