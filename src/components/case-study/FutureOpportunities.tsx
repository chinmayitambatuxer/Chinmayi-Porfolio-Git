import type { CaseStudyTheme } from "@/types/case-study";

type OpportunityItem = {
  title: string;
  description: string;
};

type FutureOpportunitiesProps = {
  items: OpportunityItem[];
  theme: CaseStudyTheme;
};

export function FutureOpportunities({ items, theme }: FutureOpportunitiesProps) {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2">
      {items.map((item, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <article
            key={item.title}
            className="group flex h-full flex-col rounded-2xl border border-dashed bg-white p-6 transition-colors duration-200 md:p-7"
            style={{ borderColor: `${theme.accentMuted}99` }}
          >
            <div className="flex items-center justify-between gap-3">
              <span
                className="text-sm font-semibold tabular-nums"
                style={{ color: theme.accent }}
              >
                {number}
              </span>
              <span
                className="rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: theme.accentSoft,
                  color: theme.accent,
                }}
              >
                Future
              </span>
            </div>

            <h3 className="mt-4 text-base font-semibold leading-snug text-ink md:text-lg">
              {item.title}
            </h3>
            <p className="cs-body-sm mt-2.5 flex-1">{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
