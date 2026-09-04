import type { CaseStudyTheme } from "@/types/case-study";

type PerspectiveCard = {
  title: string;
  description: string;
  tag?: string;
};

type PerspectiveCardsProps = {
  cards: PerspectiveCard[];
  theme: CaseStudyTheme;
};

export function PerspectiveCards({ cards, theme }: PerspectiveCardsProps) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-3">
      {cards.map((card) => (
        <article
          key={card.title}
          className="flex h-full flex-col rounded-2xl border p-6"
          style={{
            backgroundColor: theme.accentSoft,
            borderColor: theme.accentMuted,
          }}
        >
          {card.tag && (
            <p className="cs-meta-label" style={{ color: theme.accent }}>
              {card.tag}
            </p>
          )}
          <h3 className={`font-semibold text-ink ${card.tag ? "mt-3" : ""}`}>
            {card.title}
          </h3>
          <p className="cs-body-sm mt-3 flex-1">{card.description}</p>
        </article>
      ))}
    </div>
  );
}
