import type { ReactNode } from "react";
import type { CaseStudyTheme } from "@/types/case-study";

type SierraDependencyMapProps = {
  theme: CaseStudyTheme;
};

function PersonIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.25" stroke={color} strokeWidth="1.6" />
      <path
        d="M5.5 19c1.2-3.5 4-5 6.5-5s5.3 1.5 6.5 5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SpeakerIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M4 10h4l5-4v12l-5-4H4z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M16 10c1.5 1.2 1.5 4.8 0 6M19 8c2.8 2 2.8 8 0 10"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ScalesIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M12 4v14M8 18h8M7 8h10"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7 8l-3 5h6l-3-5ZM17 8l-3 5h6l-3-5Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.6" />
      <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill={color} stroke="none" />
    </svg>
  );
}

function FlowArrow({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center py-2" aria-hidden>
      <span
        className="h-6 w-px"
        style={{ backgroundColor: `${color}99` }}
      />
      <span
        className="h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent"
        style={{ borderTopColor: color }}
      />
    </div>
  );
}

function FlowNode({
  title,
  description,
  theme,
  icon,
  emphasize,
}: {
  title: string;
  description: string;
  theme: CaseStudyTheme;
  icon: ReactNode;
  emphasize?: boolean;
}) {
  return (
    <div
      className="mx-auto flex w-full max-w-sm items-start gap-3 rounded-xl border px-4 py-3.5"
      style={{
        backgroundColor: emphasize ? theme.accentSoft : "#FFFFFF",
        borderColor: emphasize ? theme.accentMuted : `${theme.accentMuted}88`,
      }}
    >
      <span
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: theme.accentSoft, color: theme.accent }}
      >
        {icon}
      </span>
      <div className="min-w-0">
        <p className="cs-meta-label" style={{ color: theme.accent }}>
          {title}
        </p>
        <p className="mt-1 text-sm leading-snug text-ink-muted">{description}</p>
      </div>
    </div>
  );
}

function DecisionDiamond({ theme }: { theme: CaseStudyTheme }) {
  return (
    <div className="relative mx-auto flex h-[148px] w-[148px] items-center justify-center sm:h-[168px] sm:w-[168px]">
      <div
        className="absolute inset-[18%] rotate-45 rounded-lg border"
        style={{
          backgroundColor: theme.accentSoft,
          borderColor: theme.accent,
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-[7.5rem] px-2 text-center">
        <p
          className="text-[0.625rem] font-bold uppercase leading-snug tracking-wider"
          style={{ color: theme.accent }}
        >
          Driver media playing?
        </p>
      </div>
    </div>
  );
}

function PathBadge({
  label,
  theme,
  variant,
}: {
  label: string;
  theme: CaseStudyTheme;
  variant: "yes" | "no";
}) {
  const isYes = variant === "yes";
  return (
    <span
      className="inline-flex items-center rounded-md px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wider"
      style={{
        backgroundColor: isYes ? theme.accent : theme.accentSoft,
        color: isYes ? "#FFFFFF" : theme.accent,
        border: isYes ? "none" : `1px solid ${theme.accentMuted}`,
      }}
    >
      {label}
    </span>
  );
}

export function SierraDependencyMap({ theme }: SierraDependencyMapProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{
        borderColor: `${theme.accentMuted}88`,
        backgroundColor: theme.accentSoft,
      }}
      role="img"
      aria-label="System dependency map: passenger play request flows through the audio engine, then branches on whether driver media is playing into a priority check or direct playback, with a dashed dependency between outcomes"
    >
      <div className="border-b px-5 py-4 md:px-8" style={{ borderColor: `${theme.accentMuted}55` }}>
        <p className="cs-meta-label" style={{ color: theme.accent }}>
          Decision flow
        </p>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted">
          How a passenger Play request is evaluated against driver media and
          system context before playback starts.
        </p>
      </div>

      <div className="px-4 py-8 md:px-8 md:py-10">
        {/* Linear trunk */}
        <div className="mx-auto flex max-w-xl flex-col items-center">
          <FlowNode
            title="Passenger action"
            description="Passenger presses Play."
            theme={theme}
            icon={<PersonIcon color={theme.accent} />}
            emphasize
          />
          <FlowArrow color={theme.accent} />
          <FlowNode
            title="Audio engine"
            description="Receives Play command."
            theme={theme}
            icon={<SpeakerIcon color={theme.accent} />}
          />
          <FlowArrow color={theme.accent} />
          <DecisionDiamond theme={theme} />
        </div>

        {/* Branch connectors */}
        <div className="relative mx-auto mt-2 max-w-3xl">
          {/* Desktop fork line */}
          <div className="relative mb-3 hidden h-8 md:block" aria-hidden>
            <div
              className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2"
              style={{ backgroundColor: `${theme.accent}99` }}
            />
            <div
              className="absolute left-[25%] right-[25%] top-4 h-px"
              style={{ backgroundColor: `${theme.accent}99` }}
            />
            <div
              className="absolute left-[25%] top-4 h-4 w-px"
              style={{ backgroundColor: `${theme.accent}99` }}
            />
            <div
              className="absolute right-[25%] top-4 h-4 w-px"
              style={{ backgroundColor: `${theme.accent}99` }}
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-10">
            {/* YES path */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex flex-col items-center gap-2 md:hidden">
                <FlowArrow color={theme.accent} />
              </div>
              <PathBadge label="Yes" theme={theme} variant="yes" />
              <div className="mt-3 w-full">
                <FlowNode
                  title="Priority check"
                  description="Evaluate system and context priorities."
                  theme={theme}
                  icon={<ScalesIcon color={theme.accent} />}
                  emphasize
                />
              </div>
            </div>

            {/* NO path */}
            <div className="flex flex-col items-center">
              <div className="mb-3 flex flex-col items-center gap-2 md:hidden">
                <FlowArrow color={theme.accentMuted} />
              </div>
              <PathBadge label="No" theme={theme} variant="no" />
              <div className="mt-3 w-full">
                <FlowNode
                  title="Play media"
                  description="Start playback for passenger."
                  theme={theme}
                  icon={<PlayIcon color={theme.accent} />}
                />
              </div>
            </div>
          </div>

          {/* Dashed feedback / dependency between branch outcomes */}
          <div className="relative mt-5 hidden items-center md:flex" aria-hidden>
            <div
              className="mx-auto h-px w-[70%] border-t-2 border-dashed"
              style={{ borderColor: theme.accentMuted }}
            />
          </div>
          <div
            className="mt-5 flex items-center justify-center gap-2 md:mt-3"
            aria-hidden
          >
            <span
              className="hidden h-px w-8 border-t-2 border-dashed sm:block"
              style={{ borderColor: theme.accentMuted }}
            />
            <p
              className="rounded-full px-3 py-1 text-center text-[0.625rem] font-semibold uppercase tracking-wider"
              style={{
                backgroundColor: theme.accentSoft,
                color: theme.accent,
              }}
            >
              Feedback / dependency
            </p>
            <span
              className="hidden h-px w-8 border-t-2 border-dashed sm:block"
              style={{ borderColor: theme.accentMuted }}
            />
          </div>
          <p className="mx-auto mt-2 max-w-md text-center text-xs leading-relaxed text-ink-muted">
            Outcomes stay linked — priority evaluation and passenger playback
            inform each other as system context changes.
          </p>
        </div>
      </div>
    </div>
  );
}
