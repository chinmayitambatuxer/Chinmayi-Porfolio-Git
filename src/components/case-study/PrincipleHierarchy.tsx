import type { CaseStudyTheme } from "@/types/case-study";

type PrincipleItem = {
  title: string;
  description: string;
  bullets?: string[];
};

type PrincipleHierarchyProps = {
  items: PrincipleItem[];
  theme: CaseStudyTheme;
};

function parseLevelTitle(title: string, index: number) {
  const match = title.match(/^Level\s+(\d+)\s*[—–-]\s*(.+)$/i);
  return {
    number: match?.[1] ?? String(index + 1),
    label: match?.[2] ?? title,
  };
}

export function PrincipleHierarchy({ items, theme }: PrincipleHierarchyProps) {
  const total = items.length;

  return (
    <div className="mt-12">
      <div className="mb-8 flex items-center justify-between gap-4 border-b border-border pb-4">
        <p className="cs-meta-label" style={{ color: theme.accent }}>
          Primary decision
        </p>
        <p className="cs-meta-label">Supporting detail</p>
      </div>

      <ol className="relative list-none space-y-0 p-0">
        {items.map((item, index) => {
          const { number, label } = parseLevelTitle(item.title, index);
          const isFirst = index === 0;
          const isLast = index === total - 1;
          const indent = index * 1.75;

          return (
            <li
              key={item.title}
              className="relative"
              style={{ paddingLeft: `clamp(0px, ${indent}rem, ${(total - 1) * 1.75}rem)` }}
            >
              {!isLast && (
                <span
                  className="absolute left-[1.125rem] top-[3.25rem] hidden h-[calc(100%-1.5rem)] w-px sm:block"
                  style={{
                    backgroundColor: theme.accentMuted,
                    marginLeft: `${indent}rem`,
                  }}
                  aria-hidden
                />
              )}

              <article
                className={`relative rounded-2xl border p-5 transition-shadow duration-200 md:p-6 ${
                  isFirst ? "shadow-sm" : ""
                }`}
                style={{
                  backgroundColor: isFirst ? theme.accentSoft : "white",
                  borderColor: isFirst ? theme.accent : `${theme.accentMuted}90`,
                  borderLeftWidth: "4px",
                  borderLeftColor: theme.accent,
                }}
              >
                <div className="flex gap-4 md:gap-5">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums"
                    style={{
                      backgroundColor: isFirst ? theme.accent : theme.accentSoft,
                      color: isFirst ? "white" : theme.accent,
                    }}
                    aria-hidden
                  >
                    {number.padStart(2, "0")}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p
                      className="cs-meta-label"
                      style={{ color: theme.accent }}
                    >
                      Level {number}
                    </p>
                    <h3 className="mt-1 text-base font-semibold leading-snug text-ink md:text-lg">
                      {label}
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
                  </div>
                </div>
              </article>

              {!isLast && (
                <div
                  className="flex items-center gap-2 py-3 pl-5 sm:pl-6"
                  style={{ marginLeft: `${indent}rem` }}
                  aria-hidden
                >
                  <span
                    className="h-px flex-1 max-w-12"
                    style={{ backgroundColor: theme.accentMuted }}
                  />
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3.5 w-3.5 shrink-0"
                    fill="none"
                    style={{ color: theme.accentMuted }}
                  >
                    <path
                      d="M8 3v10M4.5 9.5 8 13l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
