import type { CaseStudyTheme } from "@/types/case-study";

type SdohDesignProcessOverviewProps = {
  theme: CaseStudyTheme;
};

const processSteps = [
  "User Research",
  "User Persona",
  "Information Architecture",
  "High Fidelity Wireframes",
  "Prototyping",
];

export function SdohDesignProcessOverview({
  theme,
}: SdohDesignProcessOverviewProps) {
  return (
    <div
      className="rounded-2xl border border-border bg-white px-6 py-8 md:px-10 md:py-10"
      style={{ borderColor: `${theme.accentMuted}55` }}
    >
      <div className="space-y-8 md:space-y-10">
        <div>
          <p
            className="text-sm font-bold uppercase tracking-[0.12em]"
            style={{ color: theme.accent }}
          >
            Introduction
          </p>
          <p className="cs-body-sm mt-3 max-w-4xl text-ink-muted">
            In this process I went through the introductory paperwork on Social
            Determinants of Health to learn about the pain points of healthcare
            practitioners and the importance of SDOH as a part of the healthcare
            domain.
          </p>
          <p className="cs-body-sm mt-3 max-w-4xl text-ink-muted">
            I also learnt about the Company — Mindbowser Inc.
          </p>
        </div>

        <div>
          <p
            className="text-sm font-bold uppercase tracking-[0.12em]"
            style={{ color: theme.accent }}
          >
            Concept
          </p>
          <p className="cs-body-sm mt-3 max-w-4xl text-ink-muted">
            The SDOH2Health web application software platform is designed to
            allow healthcare practitioners to collect and report on Social
            Determinants of Health over time.
          </p>
        </div>

        <div>
          <p
            className="text-sm font-bold uppercase tracking-[0.12em]"
            style={{ color: theme.accent }}
          >
            Design process
          </p>

          <div className="mt-8 hidden lg:block">
            <div className="relative flex items-start justify-between gap-2">
              <div
                className="pointer-events-none absolute left-[10%] right-[10%] top-[2.75rem] border-t-2 border-dashed"
                style={{ borderColor: theme.accentMuted }}
                aria-hidden
              />
              {processSteps.map((label) => (
                <div
                  key={label}
                  className="relative z-[1] flex min-w-0 flex-1 flex-col items-center px-1 text-center"
                >
                  <div
                    className="flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border-2 border-dashed p-1"
                    style={{ borderColor: theme.accentMuted }}
                  >
                    <div
                      className="flex h-full w-full items-center justify-center rounded-full px-2"
                      style={{ backgroundColor: theme.accent }}
                    >
                      <span className="text-[0.625rem] font-semibold leading-tight text-white md:text-[0.6875rem]">
                        {label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ol className="mt-6 space-y-4 lg:hidden">
            {processSteps.map((label, index) => (
              <li key={label} className="flex items-center gap-4">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: theme.accent }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <span className="text-sm font-medium text-ink">{label}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
