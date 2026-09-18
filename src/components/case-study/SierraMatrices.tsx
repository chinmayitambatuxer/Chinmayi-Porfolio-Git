import type { CaseStudyTheme } from "@/types/case-study";

type SierraMatricesProps = {
  theme: CaseStudyTheme;
  variant: "vehicle-state" | "ownership" | "audio-ownership";
};

type Cell = { label: string; tone: "ok" | "no" | "warn" | "partial" | "shared" | "priority" };

const tones = {
  ok: { bg: "#E8F3EC", color: "#2F6B4F" },
  no: { bg: "#F8EDEA", color: "#A0453A" },
  warn: { bg: "#DBE8F5", color: "#1E3A5F" },
  partial: { bg: "#E4EAF0", color: "#4D6278" },
  shared: { bg: "#DBE8F5", color: "#1E3A5F" },
  priority: { bg: "#F8EDEA", color: "#A0453A" },
} as const;

function Status({ cell }: { cell: Cell }) {
  const tone = tones[cell.tone];
  return (
    <span
      className="inline-flex rounded-full px-2.5 py-1 text-[0.6875rem] font-semibold leading-snug"
      style={{ backgroundColor: tone.bg, color: tone.color }}
    >
      {cell.label}
    </span>
  );
}

const vehicleState = {
  headers: ["Feature", "Park", "Drive", "Reverse", "Ignition off"],
  rows: [
    {
      feature: "Video playback",
      cells: [
        { label: "Available", tone: "ok" as const },
        { label: "Driver no / Passenger yes", tone: "warn" as const },
        { label: "Not available", tone: "no" as const },
        { label: "Not available", tone: "no" as const },
      ],
    },
    {
      feature: "Relax Mode",
      cells: [
        { label: "Available", tone: "ok" as const },
        { label: "Not available", tone: "no" as const },
        { label: "Not available", tone: "no" as const },
        { label: "Not available", tone: "no" as const },
      ],
    },
    {
      feature: "JBL Modes",
      cells: [
        { label: "Available", tone: "ok" as const },
        { label: "Available", tone: "ok" as const },
        { label: "Available", tone: "ok" as const },
        { label: "Not available", tone: "no" as const },
      ],
    },
    {
      feature: "Dolby Atmos demo",
      cells: [
        { label: "Available", tone: "ok" as const },
        { label: "Available", tone: "ok" as const },
        { label: "Available", tone: "ok" as const },
        { label: "Not available", tone: "no" as const },
      ],
    },
    {
      feature: "Passenger display",
      cells: [
        { label: "Available", tone: "ok" as const },
        { label: "Available", tone: "ok" as const },
        { label: "Available", tone: "ok" as const },
        { label: "Minimal mode", tone: "partial" as const },
      ],
    },
    {
      feature: "OTA installation",
      cells: [
        { label: "Available", tone: "ok" as const },
        { label: "Deferred when safe", tone: "warn" as const },
        { label: "Not available", tone: "no" as const },
        { label: "Available", tone: "ok" as const },
      ],
    },
  ],
};

const ownership = {
  headers: ["Feature", "Driver", "Passenger", "Notes"],
  rows: [
    {
      feature: "Music control",
      driver: { label: "Full control", tone: "ok" as const },
      passenger: { label: "Full control", tone: "ok" as const },
      notes: "Both can play, pause, skip, and browse.",
    },
    {
      feature: "Video playback",
      driver: { label: "Not while driving", tone: "no" as const },
      passenger: { label: "Full access", tone: "ok" as const },
      notes: "Driver video restricted in Drive.",
    },
    {
      feature: "Navigation",
      driver: { label: "Full access", tone: "ok" as const },
      passenger: { label: "View only", tone: "partial" as const },
      notes: "Passenger can view route and ETA only.",
    },
    {
      feature: "Relax Mode",
      driver: { label: "Initiate when parked", tone: "warn" as const },
      passenger: { label: "Participate", tone: "ok" as const },
      notes: "Driver starts it; passenger controls experiences.",
    },
    {
      feature: "JBL Modes",
      driver: { label: "Shared cabin", tone: "shared" as const },
      passenger: { label: "Shared cabin", tone: "shared" as const },
      notes: "Mode change applies to all speakers.",
    },
    {
      feature: "Bluetooth headphones",
      driver: { label: "Restricted", tone: "no" as const },
      passenger: { label: "Independent", tone: "ok" as const },
      notes: "Passenger can continue privately during calls.",
    },
    {
      feature: "Calls",
      driver: { label: "Highest priority", tone: "priority" as const },
      passenger: { label: "Secondary", tone: "warn" as const },
      notes: "Driver calls override media first.",
    },
  ],
};

const audioOwnership = {
  headers: ["Scenario", "Audio output", "UX behaviour"],
  rows: [
    {
      scenario: "Driver starts music",
      output: "Car speakers (driver source)",
      behaviour: "Driver owns playback with full media control.",
    },
    {
      scenario: "Passenger starts music later",
      output: "Car speakers (passenger source)",
      behaviour: "Latest interaction becomes the active source.",
    },
    {
      scenario: "Driver receives call",
      output: "Driver call (highest priority)",
      behaviour: "Passenger music pauses; headphones suggested.",
    },
    {
      scenario: "Passenger call during driver call",
      output: "Driver call remains priority",
      behaviour: "Passenger prompted to take call on phone/headphones.",
    },
    {
      scenario: "Navigation prompt",
      output: "Car speakers (navigation)",
      behaviour: "Media ducks temporarily, then restores.",
    },
    {
      scenario: "Relax Mode",
      output: "Shared speakers (all zones)",
      behaviour: "Available only while stationary.",
    },
  ],
};

export function SierraMatrices({ theme, variant }: SierraMatricesProps) {
  if (variant === "vehicle-state") {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-[880px] w-full border-collapse overflow-hidden rounded-2xl border text-left"
          style={{ borderColor: theme.accentMuted }}
        >
          <thead>
            <tr style={{ backgroundColor: theme.accent }}>
              {vehicleState.headers.map((h) => (
                <th key={h} className="px-3 py-3 text-[0.6875rem] font-bold uppercase tracking-wide text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicleState.rows.map((row) => (
              <tr key={row.feature} className="border-t bg-white" style={{ borderColor: `${theme.accentMuted}55` }}>
                <td className="px-3 py-3 text-sm font-semibold text-ink">{row.feature}</td>
                {row.cells.map((cell, i) => (
                  <td key={`${row.feature}-${i}`} className="px-3 py-3">
                    <Status cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (variant === "ownership") {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-[920px] w-full border-collapse overflow-hidden rounded-2xl border text-left"
          style={{ borderColor: theme.accentMuted }}
        >
          <thead>
            <tr style={{ backgroundColor: theme.accent }}>
              {ownership.headers.map((h) => (
                <th key={h} className="px-3 py-3 text-[0.6875rem] font-bold uppercase tracking-wide text-white">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ownership.rows.map((row) => (
              <tr key={row.feature} className="border-t bg-white" style={{ borderColor: `${theme.accentMuted}55` }}>
                <td className="px-3 py-3 text-sm font-semibold text-ink">{row.feature}</td>
                <td className="px-3 py-3"><Status cell={row.driver} /></td>
                <td className="px-3 py-3"><Status cell={row.passenger} /></td>
                <td className="px-3 py-3 text-[0.75rem] text-ink-muted">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-[880px] w-full border-collapse overflow-hidden rounded-2xl border text-left"
        style={{ borderColor: theme.accentMuted }}
      >
        <thead>
          <tr style={{ backgroundColor: theme.accent }}>
            {audioOwnership.headers.map((h) => (
              <th key={h} className="px-3 py-3 text-[0.6875rem] font-bold uppercase tracking-wide text-white">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {audioOwnership.rows.map((row) => (
            <tr key={row.scenario} className="border-t bg-white" style={{ borderColor: `${theme.accentMuted}55` }}>
              <td className="px-3 py-3 text-sm font-semibold text-ink">{row.scenario}</td>
              <td className="px-3 py-3 text-[0.8125rem] text-ink-muted">{row.output}</td>
              <td className="px-3 py-3 text-[0.8125rem] text-ink-muted">{row.behaviour}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        className="mt-4 rounded-xl border px-4 py-3 text-sm font-medium"
        style={{ borderColor: theme.accentMuted, backgroundColor: theme.accentSoft, color: theme.accent }}
      >
        Key principle: Audio focus always respects context, priority, and user intention.
      </p>
    </div>
  );
}
