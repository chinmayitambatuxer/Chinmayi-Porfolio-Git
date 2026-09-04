import type { CaseStudyTheme } from "@/types/case-study";

type PrincipleItem = {
  title: string;
  description: string;
  bullets?: string[];
};

type PrincipleManifestProps = {
  items: PrincipleItem[];
  theme: CaseStudyTheme;
};

export function PrincipleManifest({ items, theme }: PrincipleManifestProps) {
  const count = String(items.length).padStart(2, "0");

  return (
    <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_minmax(220px,280px)] lg:gap-16">
      <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
        {items.map((item, index) => {
          const number = String(index + 1).padStart(2, "0");

          return (
            <article
              key={item.title}
              className="relative border-l-[3px] py-1 pl-5 md:pl-6"
              style={{ borderColor: theme.accent }}
            >
              <p className="cs-meta-label" style={{ color: theme.accent }}>
                {number}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-snug text-ink md:text-lg">
                {item.title}
              </h3>
              <p className="cs-body-sm mt-2.5">{item.description}</p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2.5 text-sm text-ink-muted"
                    >
                      <span
                        className="mt-2 h-1 w-1 shrink-0 rounded-full"
                        style={{ backgroundColor: theme.accent }}
                        aria-hidden
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>

      <aside className="hidden lg:block">
        <div
          className="sticky top-28 rounded-2xl px-7 py-9"
          style={{
            backgroundColor: theme.accentSoft,
            borderTop: `4px solid ${theme.accent}`,
          }}
        >
          <p
            className="text-[4.5rem] font-bold leading-none tracking-tight"
            style={{ color: theme.accentMuted }}
            aria-hidden
          >
            {count}
          </p>
          <p className="mt-5 text-lg font-semibold text-ink">
            Guiding principles
          </p>
          <p className="cs-body-sm mt-3">
            Every interaction throughout the project was shaped by these
            principles — from audio concurrency to Relax Mode.
          </p>
          <div
            className="mt-8 h-px w-full"
            style={{ backgroundColor: `${theme.accentMuted}80` }}
            aria-hidden
          />
          <p
            className="cs-meta-label mt-6"
            style={{ color: theme.accent }}
          >
            Phase 2 — Define
          </p>
        </div>
      </aside>
    </div>
  );
}
