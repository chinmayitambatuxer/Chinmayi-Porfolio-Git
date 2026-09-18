import Image from "next/image";
import type { CaseStudyTheme } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

type Props = { theme: CaseStudyTheme };

const DECISION_TREE_SRC = caseStudyImage(
  "tata-sierra-hmi",
  "concurrency-handling-flow.png",
);

/** Horizontal concurrency handling flow (case-study asset). */
export function SierraDecisionTree({ theme }: Props) {
  return (
    <figure
      className="w-full overflow-hidden rounded-2xl border bg-white p-3 shadow-sm sm:p-4"
      style={{ borderColor: `${theme.accentMuted}99` }}
    >
      <Image
        src={DECISION_TREE_SRC}
        alt="Concurrency handling flow: user action through shared resource and safety checks, apply priority, higher priority resolution or allow and continue, synchronize displays, and notify user if needed."
        width={1024}
        height={316}
        unoptimized
        priority
        className="h-auto w-full"
        sizes="(max-width: 1152px) 100vw, 72rem"
      />
      <figcaption className="sr-only">
        Left-to-right decision path for prioritizing actions and keeping displays synchronized.
      </figcaption>
    </figure>
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
      <div
        className="mb-4 flex items-center justify-between gap-3 text-[0.6875rem] font-bold uppercase tracking-wide"
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
      <p
        className="mt-5 rounded-xl border bg-white px-4 py-3 text-sm text-ink-muted"
        style={{ borderColor: `${theme.accentMuted}88` }}
      >
        <span className="font-semibold text-ink">Design principle: </span>
        Driver safety always takes precedence over passenger entertainment. Conflicts resolve automatically with minimal intervention.
      </p>
    </div>
  );
}
