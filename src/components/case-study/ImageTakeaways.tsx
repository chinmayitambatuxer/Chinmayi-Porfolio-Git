type RatingItem = {
  score: number;
  label: string;
};

type ImageTakeawaysProps = {
  keyTakeaway: string;
  opportunity: string;
  ratings?: RatingItem[];
  accent: string;
};

const defaultRatings: RatingItem[] = [
  { score: 5, label: "Excellent (5)" },
  { score: 4, label: "Very Good (4)" },
  { score: 3, label: "Good (3)" },
  { score: 2, label: "Fair (2)" },
  { score: 1, label: "Poor (1)" },
];

function StarRating({ score, accent }: { score: number; accent: string }) {
  return (
    <span className="inline-flex gap-0.5" aria-hidden>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className="text-sm leading-none"
          style={{ color: i < score ? accent : "#d4d4d4" }}
        >
          ★
        </span>
      ))}
    </span>
  );
}

export function ImageTakeaways({
  keyTakeaway,
  opportunity,
  ratings = defaultRatings,
  accent,
}: ImageTakeawaysProps) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-[#f8f8f8] p-6 md:p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-0">
        <div className="flex-1 lg:pr-8">
          <p className="cs-meta-label" style={{ color: accent }}>
            Key takeaway
          </p>
          <p className="cs-body-sm mt-3 text-ink">{keyTakeaway}</p>
        </div>

        <div
          className="hidden w-px shrink-0 bg-border lg:block"
          aria-hidden
        />

        <div className="shrink-0 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
            {ratings.map((rating) => (
              <div key={rating.score} className="flex items-center gap-2">
                <StarRating score={rating.score} accent={accent} />
                <span className="text-xs text-ink-muted whitespace-nowrap">
                  {rating.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="hidden w-px shrink-0 bg-border lg:block"
          aria-hidden
        />

        <div className="flex-1 lg:pl-8">
          <p className="cs-meta-label" style={{ color: accent }}>
            Opportunity
          </p>
          <p className="cs-body-sm mt-3 text-ink">{opportunity}</p>
        </div>
      </div>
    </div>
  );
}
