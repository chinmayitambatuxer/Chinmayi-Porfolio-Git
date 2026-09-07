import type { ComponentType } from "react";
import type { CaseStudyTheme } from "@/types/case-study";

type EmpathyMapDiagramProps = {
  theme: CaseStudyTheme;
};

type QuadrantKey = "thinks" | "feels" | "says" | "does";

type PersonaData = {
  label: string;
  goal: string;
  quadrants: Record<QuadrantKey, string[]>;
};

const personas: Record<"driver" | "passenger", PersonaData> = {
  driver: {
    label: "Driver",
    goal: "Drive safely and reach the destination without unnecessary distraction.",
    quadrants: {
      thinks: [
        "I shouldn't have to manage entertainment.",
        "Navigation should never be interrupted.",
        "Calls must take priority.",
      ],
      feels: [
        "Distracted when interacting with complex interfaces.",
        "Frustrated when passengers ask for media changes.",
      ],
      says: ["Just let me drive."],
      does: ["Uses navigation.", "Receives calls.", "Occasionally changes music."],
    },
  },
  passenger: {
    label: "Passenger",
    goal: "Stay entertained and comfortable without distracting the driver.",
    quadrants: {
      thinks: ["I want my own entertainment."],
      feels: [
        "Bored during long journeys.",
        "Hesitant to interrupt the driver.",
      ],
      says: ["Can I change the song?"],
      does: [
        "Watches videos.",
        "Listens to music.",
        "Explores cabin features.",
      ],
    },
  },
};

const quadrantLabels: Record<QuadrantKey, string> = {
  thinks: "Thinks",
  feels: "Feels",
  says: "Says",
  does: "Does",
};

function ThoughtIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M8 10a4 4 0 1 1 8 0c0 2-1 3-2 4H10c-1 0-2-1-2-3Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10 18h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M12 20s-6.5-4.2-6.5-9.2C5.5 7.5 8 5.5 12 8.5c4-3 6.5-1 6.5 2.3C18.5 15.8 12 20 12 20Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SpeechIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M6 7.5A4.5 4.5 0 0 1 10.5 3h3A4.5 4.5 0 0 1 18 7.5V12a4.5 4.5 0 0 1-4.5 4.5H11l-3.5 3v-3H10.5A4.5 4.5 0 0 1 6 12V7.5Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M8 11V6.5a1.5 1.5 0 0 1 3 0V11M11 11V5.5a1.5 1.5 0 0 1 3 0V11M14 11V6.5a1.5 1.5 0 0 1 3 0V12a5.5 5.5 0 0 1-5.5 5.5H10A5.5 5.5 0 0 1 4.5 12V11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TargetIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SteeringIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2" stroke={color} strokeWidth="1.5" />
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PersonIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M6 20c1.2-3 3.2-4.5 6-4.5s4.8 1.5 6 4.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const quadrantIcons: Record<QuadrantKey, ComponentType<{ color: string }>> = {
  thinks: ThoughtIcon,
  feels: HeartIcon,
  says: SpeechIcon,
  does: HandIcon,
};

function DriverAvatar({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16 md:h-20 md:w-20" fill="none" aria-hidden>
      <circle cx="40" cy="14" r="7" stroke={color} strokeWidth="1.5" />
      <path
        d="M25 38c0-7.5 6.7-12 15-12s15 4.5 15 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="40" cy="56" r="11" stroke={color} strokeWidth="1.5" />
      <circle cx="40" cy="56" r="3" stroke={color} strokeWidth="1.5" />
      <path
        d="M29 56h8M51 56h-8M40 67v-8"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PassengerAvatar({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16 md:h-20 md:w-20" fill="none" aria-hidden>
      <circle cx="40" cy="14" r="7" stroke={color} strokeWidth="1.5" />
      <path
        d="M30 16a10 10 0 0 1 20 0"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="27"
        y="13"
        width="5"
        height="8.5"
        rx="2.5"
        stroke={color}
        strokeWidth="1.5"
      />
      <rect
        x="48"
        y="13"
        width="5"
        height="8.5"
        rx="2.5"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M25 38c0-7.5 6.7-12 15-12s15 4.5 15 12"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="26"
        y="45"
        width="28"
        height="21"
        rx="4"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M37.5 51.5 44 55.5l-6.5 4z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Quadrant({
  type,
  items,
  theme,
}: {
  type: QuadrantKey;
  items: string[];
  theme: CaseStudyTheme;
}) {
  const Icon = quadrantIcons[type];

  return (
    <div
      className="rounded-xl border bg-white p-4"
      style={{ borderColor: `${theme.accentMuted}90` }}
    >
      <div className="flex items-center gap-2">
        <Icon color={theme.accent} />
        <p className="text-xs font-semibold uppercase tracking-wide text-ink">
          {quadrantLabels[type]}
        </p>
      </div>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-sm leading-relaxed text-ink-muted">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PersonaMap({
  type,
  data,
  theme,
}: {
  type: "driver" | "passenger";
  data: PersonaData;
  theme: CaseStudyTheme;
}) {
  const HeaderIcon = type === "driver" ? SteeringIcon : PersonIcon;
  const Avatar = type === "driver" ? DriverAvatar : PassengerAvatar;

  return (
    <article
      className="rounded-2xl border p-5 md:p-6"
      style={{
        backgroundColor: theme.accentSoft,
        borderColor: theme.accentMuted,
      }}
    >
      <div
        className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white"
        style={{ backgroundColor: theme.accent }}
      >
        <HeaderIcon color="#fff" />
        {data.label}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <Quadrant type="thinks" items={data.quadrants.thinks} theme={theme} />
        <Quadrant type="feels" items={data.quadrants.feels} theme={theme} />
      </div>

      <div className="my-4 flex justify-center">
        <div
          className="flex h-24 w-24 items-center justify-center rounded-full border-2 bg-white shadow-sm md:h-28 md:w-28"
          style={{ borderColor: theme.accentMuted }}
        >
          <Avatar color={theme.accent} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Quadrant type="says" items={data.quadrants.says} theme={theme} />
        <Quadrant type="does" items={data.quadrants.does} theme={theme} />
      </div>

      <div
        className="mt-4 rounded-xl border bg-white p-4"
        style={{ borderColor: `${theme.accentMuted}90` }}
      >
        <div className="flex items-center gap-2">
          <TargetIcon color={theme.accent} />
          <p className="text-xs font-semibold uppercase tracking-wide text-ink">
            Goal
          </p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">{data.goal}</p>
      </div>
    </article>
  );
}

export function EmpathyMapDiagram({ theme }: EmpathyMapDiagramProps) {
  return (
    <div
      className="grid gap-6 lg:grid-cols-2 lg:gap-8"
      role="img"
      aria-label="Empathy map comparing driver and passenger research insights across thinks, feels, says, does, and goals"
    >
      <PersonaMap type="driver" data={personas.driver} theme={theme} />
      <PersonaMap type="passenger" data={personas.passenger} theme={theme} />
    </div>
  );
}
