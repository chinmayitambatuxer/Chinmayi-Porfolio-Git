import type { CaseStudyTheme } from "@/types/case-study";

type HighlightGridProps = {
  items: string[];
  theme: CaseStudyTheme;
};

export function HighlightGrid({ items, theme }: HighlightGridProps) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-xl border bg-white px-4 py-3.5 text-sm leading-relaxed text-ink-muted"
          style={{ borderColor: `${theme.accentMuted}90` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
