import type { CaseStudyTheme } from "@/types/case-study";

type TwoColumnCardsProps = {
  columns: { heading: string; items: string[] }[];
  theme: CaseStudyTheme;
};

export function TwoColumnCards({ columns, theme }: TwoColumnCardsProps) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {columns.map((col) => (
        <article
          key={col.heading}
          className="rounded-2xl border p-6 md:p-7"
          style={{
            backgroundColor: theme.accentSoft,
            borderColor: theme.accentMuted,
          }}
        >
          <h3
            className="text-xs font-semibold uppercase tracking-wide"
            style={{ color: theme.accent }}
          >
            {col.heading}
          </h3>
          <ul className="mt-5 space-y-3">
            {col.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink-muted">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
