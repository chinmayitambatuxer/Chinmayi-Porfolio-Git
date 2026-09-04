import type { ComponentType } from "react";
import type { CaseStudy } from "@/types/case-study";
import { Reveal } from "@/components/motion/Reveal";

type GoalChallengeOutcomeProps = {
  study: CaseStudy;
};

type IconProps = {
  color: string;
};

function GoalIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChallengeIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 3 4 7v5c0 4.2 3.2 8.1 8 9 4.8-.9 8-4.8 8-9V7l-8-4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 8v5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill={color} />
    </svg>
  );
}

function OutcomeIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 3 14.5 9H21l-5.5 4 2 6L12 16l-5.5 3 2-6L3 9h6.5L12 3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const blockIcons: Record<string, ComponentType<IconProps>> = {
  goal: GoalIcon,
  challenge: ChallengeIcon,
  outcome: OutcomeIcon,
};

const blocks: {
  id: string;
  label: string;
  content: (study: CaseStudy) => string;
}[] = [
  { id: "goal", label: "Goal", content: (study) => study.goal },
  { id: "challenge", label: "Challenge", content: (study) => study.challenge },
  { id: "outcome", label: "Outcome", content: (study) => study.outcome },
];

export function GoalChallengeOutcome({ study }: GoalChallengeOutcomeProps) {
  return (
    <section className="border-b border-border bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <div className="grid gap-5 md:grid-cols-3">
          {blocks.map((block, i) => {
            const Icon = blockIcons[block.id];

            return (
              <Reveal key={block.id} delay={i * 0.05}>
                <article
                  id={block.id}
                  className="h-full rounded-2xl border px-6 py-7"
                  style={{
                    backgroundColor: study.theme.accentSoft,
                    borderColor: study.theme.accentMuted,
                    borderTopWidth: "4px",
                    borderTopColor: study.theme.accent,
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm"
                      style={{ borderColor: study.theme.accentMuted }}
                    >
                      <Icon color={study.theme.accent} />
                    </div>
                    <h2 className="cs-meta-label shrink-0 pt-1">{block.label}</h2>
                  </div>
                  <p className="cs-body-sm mt-5 text-ink">{block.content(study)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function OutcomeMetrics({ study }: { study: CaseStudy }) {
  const metrics = study.outcomeMetrics ?? study.metrics;
  if (!metrics?.length) return null;

  return (
    <section className="border-b border-border bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[var(--cs-page)] px-6 md:px-10">
        <div className="grid gap-12 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.06}>
              <div>
                <p
                  className="cs-metric-value"
                  style={{ color: study.theme.accent }}
                >
                  {m.value}
                </p>
                <p className="mt-3 text-sm font-medium text-ink">{m.label}</p>
                {m.description && (
                  <p className="cs-body-sm mt-2">{m.description}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
