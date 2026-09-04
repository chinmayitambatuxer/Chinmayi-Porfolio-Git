import type { CaseStudyTheme } from "@/types/case-study";

type InsightCardsProps = {
  rows: string[][];
  theme: CaseStudyTheme;
};

export function InsightCards({ rows, theme }: InsightCardsProps) {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map(([insight, opportunity]) => (
        <article
          key={insight}
          className="rounded-2xl border bg-white p-5"
          style={{ borderColor: theme.accentMuted }}
        >
          <p className="text-sm font-semibold text-ink">{insight}</p>
          <p className="cs-body-sm mt-2">{opportunity}</p>
        </article>
      ))}
    </div>
  );
}
