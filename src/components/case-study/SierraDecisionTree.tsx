import type { CaseStudyTheme } from "@/types/case-study";

type Props = { theme: CaseStudyTheme };

function Node({
  title,
  body,
  theme,
  shape = "card",
}: {
  title: string;
  body: string;
  theme: CaseStudyTheme;
  shape?: "card" | "decision" | "end";
}) {
  if (shape === "decision") {
    return (
      <div className="mx-auto flex max-w-xs flex-col items-center">
        <div
          className="flex aspect-square w-44 rotate-45 items-center justify-center rounded-xl border bg-white p-3 shadow-sm"
          style={{ borderColor: theme.accentMuted }}
        >
          <div className="-rotate-45 text-center">
            <p className="text-[0.6875rem] font-bold uppercase tracking-wide" style={{ color: theme.accent }}>
              {title}
            </p>
            <p className="mt-1 text-[0.6875rem] leading-snug text-ink-muted">{body}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="mx-auto max-w-md rounded-2xl border bg-white p-4 text-center"
      style={{
        borderColor: shape === "end" ? theme.accent : `${theme.accentMuted}88`,
        backgroundColor: shape === "end" ? theme.accentSoft : "white",
      }}
    >
      <p className="text-sm font-bold text-ink">{title}</p>
      <p className="mt-1 text-[0.75rem] text-ink-muted">{body}</p>
    </div>
  );
}

function Arrow({ theme, label }: { theme: CaseStudyTheme; label?: string }) {
  return (
    <div className="flex flex-col items-center py-2" aria-hidden>
      {label && (
        <span className="mb-1 text-[0.625rem] font-bold uppercase" style={{ color: theme.accent }}>
          {label}
        </span>
      )}
      <span className="h-5 w-px" style={{ backgroundColor: theme.accentMuted }} />
      <span
        className="h-0 w-0 border-x-[5px] border-t-[6px] border-x-transparent"
        style={{ borderTopColor: theme.accent }}
      />
    </div>
  );
}

export function SierraDecisionTree({ theme }: Props) {
  return (
    <div
      className="rounded-2xl border p-5 md:p-8"
      style={{ borderColor: theme.accentMuted, backgroundColor: "#FFFBF8" }}
    >
      <Node
        theme={theme}
        title="User action"
        body="Driver or passenger initiates an action."
      />
      <Arrow theme={theme} />
      <Node
        theme={theme}
        shape="decision"
        title="Shared resource?"
        body="Does this involve a shared system resource?"
      />
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div>
          <Arrow theme={theme} label="No" />
          <Node
            theme={theme}
            shape="end"
            title="Allow action"
            body="No concurrency handling required."
          />
        </div>
        <div>
          <Arrow theme={theme} label="Yes" />
          <Node
            theme={theme}
            shape="decision"
            title="Safety event active?"
            body="Call, navigation, or alert in progress?"
          />
          <Arrow theme={theme} label="If yes" />
          <Node
            theme={theme}
            title="Apply priority"
            body="Give control to the highest-priority event."
          />
          <Arrow theme={theme} />
          <Node
            theme={theme}
            shape="decision"
            title="Higher priority active?"
            body="Is another action already higher priority?"
          />
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <Arrow theme={theme} label="Yes" />
              <Node
                theme={theme}
                title="Resolve automatically"
                body="Pause, duck, or defer based on priority rules."
              />
            </div>
            <div>
              <Arrow theme={theme} label="No" />
              <Node
                theme={theme}
                title="Allow & continue"
                body="Current action takes the shared resource."
              />
            </div>
          </div>
          <Arrow theme={theme} />
          <Node
            theme={theme}
            title="Synchronize displays"
            body="Update both displays with the new system state."
          />
          <Arrow theme={theme} />
          <Node
            theme={theme}
            shape="end"
            title="Notify user (only if needed)"
            body="Feedback only when necessary and relevant."
          />
        </div>
      </div>
    </div>
  );
}

const priorities = [
  { rank: "1", title: "Emergency alerts", body: "Critical safety warnings override all other audio." },
  { rank: "2", title: "Driver phone call", body: "Incoming or active driver calls take priority." },
  { rank: "3", title: "Driver navigation", body: "Navigation prompts and alerts for the driver." },
  { rank: "4", title: "Driver media", body: "Media playback controlled by the driver." },
  { rank: "5", title: "Passenger call", body: "Routed to phone / Bluetooth headphones." },
  { rank: "6", title: "Passenger media", body: "Media playback controlled by the passenger." },
  { rank: "7", title: "Relax Mode", body: "Ambient experiential audio when stationary." },
  { rank: "8", title: "Ambient sounds", body: "Background ambient sounds and UI tones." },
];

export function SierraAudioPriority({ theme }: Props) {
  return (
    <div
      className="rounded-2xl border p-5 md:p-8"
      style={{ borderColor: theme.accentMuted, backgroundColor: theme.accentSoft }}
    >
      <div className="mb-4 flex items-center justify-between gap-3 text-[0.6875rem] font-bold uppercase tracking-wide"
        style={{ color: theme.accent }}
      >
        <span>Highest priority</span>
        <span className="h-px flex-1" style={{ backgroundColor: theme.accentMuted }} />
        <span>Lowest priority</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {priorities.map((item) => (
          <div
            key={item.rank}
            className="rounded-xl border bg-white p-4"
            style={{ borderColor: `${theme.accentMuted}88` }}
          >
            <p className="text-[0.6875rem] font-bold" style={{ color: theme.accent }}>
              {item.rank}
            </p>
            <p className="mt-1 text-sm font-bold text-ink">{item.title}</p>
            <p className="mt-2 text-[0.75rem] leading-snug text-ink-muted">{item.body}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 rounded-xl border bg-white px-4 py-3 text-sm text-ink-muted"
        style={{ borderColor: `${theme.accentMuted}88` }}
      >
        <span className="font-semibold text-ink">Design principle: </span>
        Driver safety always takes precedence over passenger entertainment. Conflicts resolve automatically with minimal intervention.
      </p>
    </div>
  );
}
