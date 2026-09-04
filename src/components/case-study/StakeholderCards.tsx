import type { ComponentType } from "react";
import type { CaseStudyTheme } from "@/types/case-study";

type StakeholderRow = [string, string, string];

type StakeholderCardsProps = {
  rows: StakeholderRow[];
  theme: CaseStudyTheme;
};

type IconProps = {
  color: string;
};

function DriverIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" stroke={color} strokeWidth="1.5" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PassengerUserIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M6 20c.8-3.2 3-5 6-5s5.2 1.8 6 5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 9c1.5.5 2.5 1.8 3 3.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProductIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M4 7h16v10H4V7Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 7V5h8v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 12h6M9 15h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EngineeringIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="m14 6 4 4-7 7H7v-4l7-7Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M13 7l4 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function QAIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke={color} strokeWidth="1.5" />
      <path
        d="M8 12.5 10.5 15 16 9"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 3 14.2 9H21l-5.6 4.1 2.1 6.4L12 16.8 6.5 19.5l2.1-6.4L3 9h6.8L12 3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DefaultStakeholderIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M5 20c1.5-3 4-4.5 7-4.5s5.5 1.5 7 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const iconByStakeholder: Record<string, ComponentType<IconProps>> = {
  Driver: DriverIcon,
  Passenger: PassengerUserIcon,
  "Product Team": ProductIcon,
  Engineering: EngineeringIcon,
  QA: QAIcon,
  Brand: BrandIcon,
};

export function StakeholderCards({ rows, theme }: StakeholderCardsProps) {
  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map(([stakeholder, primaryGoal, uxConsideration], index) => {
        const Icon = iconByStakeholder[stakeholder] ?? DefaultStakeholderIcon;
        const number = String(index + 1).padStart(2, "0");

        return (
          <article
            key={stakeholder}
            className="flex h-full flex-col rounded-2xl border p-5 transition-shadow duration-200 hover:shadow-md md:p-6"
            style={{
              backgroundColor: theme.accentSoft,
              borderColor: theme.accentMuted,
            }}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm"
                  style={{ borderColor: theme.accentMuted }}
                >
                  <Icon color={theme.accent} />
                </div>
                <h3 className="text-base font-semibold leading-snug text-ink">
                  {stakeholder}
                </h3>
              </div>
              <span className="cs-meta-label shrink-0">{number}</span>
            </div>

            <div
              className="mt-5 space-y-4 border-t pt-5"
              style={{ borderColor: `${theme.accentMuted}80` }}
            >
              <div>
                <p className="cs-meta-label" style={{ color: theme.accent }}>
                  Primary goal
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">
                  {primaryGoal}
                </p>
              </div>
              <div>
                <p className="cs-meta-label" style={{ color: theme.accent }}>
                  UX consideration
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                  {uxConsideration}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
