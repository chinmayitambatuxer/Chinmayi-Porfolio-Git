import type { ComponentType } from "react";
import type { CaseStudyTheme } from "@/types/case-study";

type PrincipleItem = {
  title: string;
  description: string;
  bullets?: string[];
};

type PrincipleCardsProps = {
  items: PrincipleItem[];
  theme: CaseStudyTheme;
};

type IconProps = {
  color: string;
};

function DriverFirstIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 3 4 7v5c0 4.2 3.2 8.1 8 9 4.8-.9 8-4.8 8-9V7l-8-4Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12.5 11 14l3.5-4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PassengerIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="8"
        height="14"
        rx="1.5"
        stroke={color}
        strokeWidth="1.5"
      />
      <rect
        x="13"
        y="5"
        width="8"
        height="14"
        rx="1.5"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M7 10h.01M17 10h.01M7 14h4M17 14h-4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConflictIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="5" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="5" cy="19" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="19" cy="19" r="2" stroke={color} strokeWidth="1.5" />
      <path
        d="M12 7v4M10.5 11 6 17M13.5 11 18 17"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TransparencyIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M12 5C7 8 4 11.5 4 15c0 3.3 3.6 6 8 6s8-2.7 8-6c0-3.5-3-7-8-10Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="14" r="2.5" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}

function ConsistencyIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M7 7h10M7 12h10M7 17h10"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 7h.01M4 12h.01M4 17h.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 5v14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PremiumIcon({ color }: IconProps) {
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

function CaptureStraightforwardIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect
        x="5"
        y="4"
        width="14"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth="1.75"
      />
      <path
        d="M9 8h6M9 12h5M9 16h3"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M15 15l2 2 3-3.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProgressVisibleIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect
        x="4"
        y="6"
        width="16"
        height="4"
        rx="2"
        stroke={color}
        strokeWidth="1.75"
      />
      <rect
        x="4"
        y="14"
        width="16"
        height="4"
        rx="2"
        stroke={color}
        strokeWidth="1.75"
        opacity="0.35"
      />
      <path
        d="M7 8h7"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M7 16h4"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function OrganisedInfoIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect
        x="3"
        y="5"
        width="8"
        height="6"
        rx="1"
        stroke={color}
        strokeWidth="1.75"
      />
      <rect
        x="3"
        y="15"
        width="8"
        height="4"
        rx="1"
        stroke={color}
        strokeWidth="1.75"
      />
      <rect
        x="13"
        y="5"
        width="8"
        height="14"
        rx="1"
        stroke={color}
        strokeWidth="1.75"
      />
    </svg>
  );
}

function WorkflowPathIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="6" cy="6" r="2.5" stroke={color} strokeWidth="1.75" />
      <circle cx="18" cy="12" r="2.5" stroke={color} strokeWidth="1.75" />
      <circle cx="8" cy="18" r="2.5" stroke={color} strokeWidth="1.75" />
      <path
        d="M8 8h5a3 3 0 0 1 3 3v1M10 15.5 6.5 17"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MultiContextIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect
        x="4"
        y="3"
        width="7"
        height="12"
        rx="1.5"
        stroke={color}
        strokeWidth="1.75"
      />
      <rect
        x="13"
        y="6"
        width="8"
        height="14"
        rx="1.5"
        stroke={color}
        strokeWidth="1.75"
      />
      <path
        d="M7.5 13h.01"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ConnectCommunicateIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M5 8h8v6H9l-2 2v-2H5V8Z"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M13 10h6v5h-3l-1.5 1.5V15h-1.5"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <path
        d="M11 11h2"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DefaultIcon({ color }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.75" />
      <path
        d="M12 8v4l3 2"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const iconByTitle: Record<string, ComponentType<IconProps>> = {
  "Driver First": DriverFirstIcon,
  "Passenger Independence": PassengerIcon,
  "Intelligent Conflict Resolution": ConflictIcon,
  "System Transparency": TransparencyIcon,
  Consistency: ConsistencyIcon,
  "Premium Experience": PremiumIcon,
  "Make capture straightforward": CaptureStraightforwardIcon,
  "Make progress visible": ProgressVisibleIcon,
  "Keep information organised": OrganisedInfoIcon,
  "Design around the workflow": WorkflowPathIcon,
  "Support different contexts": MultiContextIcon,
  "Connect capture to communication": ConnectCommunicateIcon,
};

export function PrincipleCards({ items, theme }: PrincipleCardsProps) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const Icon = iconByTitle[item.title] ?? DefaultIcon;
        const number = String(index + 1).padStart(2, "0");

        return (
          <article
            key={item.title}
            className="flex h-full flex-col rounded-2xl border p-6 transition-shadow duration-200 hover:shadow-md md:p-7"
            style={{
              backgroundColor: theme.accentSoft,
              borderColor: theme.accentMuted,
            }}
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm"
                style={{ borderColor: theme.accentMuted }}
              >
                <Icon color={theme.accent} />
              </div>
              <span className="cs-meta-label shrink-0">{number}</span>
            </div>

            <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">
              {item.title}
            </h3>
            <p className="cs-body-sm mt-3 flex-1">{item.description}</p>

            {item.bullets && item.bullets.length > 0 && (
              <ul
                className="mt-5 space-y-2 border-t pt-5"
                style={{ borderColor: `${theme.accentMuted}80` }}
              >
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm text-ink-muted">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full"
                      style={{ backgroundColor: theme.accent }}
                      aria-hidden
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  );
}
