import type { CaseStudyTheme } from "@/types/case-study";

type SierraDesignProcessProps = {
  theme: CaseStudyTheme;
};

const steps = [
  {
    number: "01",
    title: "Empathise",
    subtitle: "Understanding the users",
    items: ["Research methodologies", "Affinity mapping"],
  },
  {
    number: "02",
    title: "Define",
    subtitle: "Identifying needs and challenges",
    items: ["User persona", "Customer journey map"],
  },
  {
    number: "03",
    title: "Ideate",
    subtitle: "Generating innovative ideas",
    items: ["Ideation methodologies"],
  },
  {
    number: "04",
    title: "Prototype",
    subtitle: "Building solutions",
    items: ["User flow", "Mid-fi prototypes"],
  },
  {
    number: "05",
    title: "Test",
    subtitle: "Validating solutions",
    items: ["Task scenarios", "Analysis and insights", "Persist or pivot"],
  },
];

export function SierraDesignProcess({ theme }: SierraDesignProcessProps) {
  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[920px] items-stretch gap-3">
        {steps.map((step, i) => (
          <div key={step.number} className="flex flex-1 items-stretch gap-3">
            <div
              className="flex w-full flex-col rounded-2xl border p-4"
              style={{
                backgroundColor: theme.accent,
                borderColor: theme.accentMuted,
              }}
            >
              <p className="text-[0.6875rem] font-bold tracking-wider text-white/70">
                {step.number}
              </p>
              <h3 className="mt-2 text-base font-bold text-white">{step.title}</h3>
              <p className="mt-1 text-[0.75rem] text-white/75">{step.subtitle}</p>
              <ul className="mt-4 space-y-2">
                {step.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[0.75rem] text-white/90"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center" aria-hidden>
                <span
                  className="h-px w-3"
                  style={{ backgroundColor: theme.accentMuted }}
                />
                <span
                  className="h-0 w-0 border-y-[5px] border-l-[6px] border-y-transparent"
                  style={{ borderLeftColor: theme.accentMuted }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
