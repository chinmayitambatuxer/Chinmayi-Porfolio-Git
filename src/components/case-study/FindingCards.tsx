import type { CaseStudyTheme } from "@/types/case-study";

type FindingItem = {
  title: string;
  finding: string;
  implication: string;
};

type FindingCardsProps = {
  items: FindingItem[];
  theme: CaseStudyTheme;
};

export function FindingCards({ items, theme }: FindingCardsProps) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className="rounded-2xl border p-5 md:p-6"
          style={{
            backgroundColor: theme.accentSoft,
            borderColor: theme.accentMuted,
          }}
        >
          <p className="cs-meta-label" style={{ color: theme.accent }}>
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-base font-semibold text-ink md:text-lg">
            {item.title}
          </h3>
          <p className="cs-body-sm mt-3">{item.finding}</p>
          <p
            className="mt-4 border-t pt-4 text-sm font-medium text-ink"
            style={{ borderColor: `${theme.accentMuted}80` }}
          >
            → {item.implication}
          </p>
        </article>
      ))}
    </div>
  );
}
