import type { CaseStudyTheme } from "@/types/case-study";

type SierraJourneyMapProps = {
  theme: CaseStudyTheme;
};

type Emotion =
  | "Happy"
  | "Slightly Happy"
  | "Neutral"
  | "Bored / Sleepy"
  | "Concerned";

const stages = [
  "Vehicle Entry",
  "Boot-up",
  "Media Selection",
  "Long Journey",
  "Incoming Call",
  "Navigation Prompt",
  "Destination Reached",
] as const;

const driverEmotions: Emotion[] = [
  "Happy",
  "Slightly Happy",
  "Slightly Happy",
  "Neutral",
  "Neutral",
  "Slightly Happy",
  "Happy",
];

const passengerEmotions: Emotion[] = [
  "Happy",
  "Slightly Happy",
  "Neutral",
  "Bored / Sleepy",
  "Concerned",
  "Neutral",
  "Happy",
];

const opportunities = [
  {
    title: "Premium startup",
    description: "Delight users with a beautiful, engaging welcome experience.",
  },
  {
    title: "Fast system readiness",
    description: "Get systems ready quickly to build trust and reduce wait time.",
  },
  {
    title: "Independent passenger controls",
    description: "Give the passenger full control without interrupting the driver.",
  },
  {
    title: "Relax Mode",
    description:
      "Reduce fatigue and enhance comfort with immersive relaxation features.",
  },
  {
    title: "Audio concurrency",
    description:
      "Handle calls smartly without disrupting the ongoing media experience.",
  },
  {
    title: "Intelligent audio ducking",
    description: "Lower media intelligently during navigation for better clarity.",
  },
  {
    title: "Seamless session recovery",
    description: "Resume media and settings smoothly where users left off.",
  },
];

/** Higher = more positive for the trend chart (0–4). */
const emotionScore: Record<Emotion, number> = {
  Happy: 4,
  "Slightly Happy": 3,
  Neutral: 2,
  "Bored / Sleepy": 1,
  Concerned: 0,
};

function emotionTone(emotion: Emotion, theme: CaseStudyTheme) {
  switch (emotion) {
    case "Happy":
      return { bg: theme.accentSoft, color: theme.accent };
    case "Slightly Happy":
      return { bg: "#E4EDF6", color: theme.accentMuted };
    case "Neutral":
      return { bg: "#E8EEF4", color: "#5C6B7A" };
    case "Bored / Sleepy":
      return { bg: "#DCE6F0", color: "#4A6080" };
    case "Concerned":
      return { bg: "#D4DEEA", color: "#3D5570" };
  }
}

function emotionEmoji(emotion: Emotion) {
  switch (emotion) {
    case "Happy":
      return "😊";
    case "Slightly Happy":
      return "🙂";
    case "Neutral":
      return "😐";
    case "Bored / Sleepy":
      return "😴";
    case "Concerned":
      return "😟";
  }
}

function EmotionPill({
  emotion,
  theme,
}: {
  emotion: Emotion;
  theme: CaseStudyTheme;
}) {
  const tone = emotionTone(emotion, theme);
  return (
    <span
      className="inline-flex flex-col items-center gap-1 rounded-xl px-2 py-1.5"
      style={{ backgroundColor: tone.bg, color: tone.color }}
      aria-label={emotion}
    >
      <span aria-hidden className="text-base leading-none">
        {emotionEmoji(emotion)}
      </span>
      <span className="text-center text-[0.625rem] font-semibold leading-tight tracking-wide">
        {emotion}
      </span>
    </span>
  );
}

function EmotionTrendChart({ theme }: { theme: CaseStudyTheme }) {
  const w = 700;
  const h = 120;
  const padX = 18;
  const padY = 16;
  const n = stages.length;
  const step = (w - padX * 2) / (n - 1);

  const toPoint = (scores: number[]) =>
    scores
      .map((score, i) => {
        const x = padX + i * step;
        const y = padY + ((4 - score) / 4) * (h - padY * 2);
        return `${x},${y}`;
      })
      .join(" ");

  const driverPoints = toPoint(driverEmotions.map((e) => emotionScore[e]));
  const passengerPoints = toPoint(passengerEmotions.map((e) => emotionScore[e]));

  return (
    <div className="space-y-3">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="h-auto w-full"
        role="img"
        aria-label="Emotional journey trend for driver and passenger"
      >
        {/* Grid lines */}
        {[0, 1, 2, 3, 4].map((level) => {
          const y = padY + ((4 - level) / 4) * (h - padY * 2);
          return (
            <line
              key={level}
              x1={padX}
              y1={y}
              x2={w - padX}
              y2={y}
              stroke={theme.accentMuted}
              strokeOpacity={0.35}
              strokeWidth={1}
            />
          );
        })}
        <polyline
          points={driverPoints}
          fill="none"
          stroke={theme.accent}
          strokeWidth={2.5}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <polyline
          points={passengerPoints}
          fill="none"
          stroke={theme.accentMuted}
          strokeWidth={2.5}
          strokeDasharray="5 4"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {driverEmotions.map((emotion, i) => {
          const x = padX + i * step;
          const y =
            padY + ((4 - emotionScore[emotion]) / 4) * (h - padY * 2);
          return (
            <circle
              key={`d-${stages[i]}`}
              cx={x}
              cy={y}
              r={3.5}
              fill={theme.accent}
            />
          );
        })}
        {passengerEmotions.map((emotion, i) => {
          const x = padX + i * step;
          const y =
            padY + ((4 - emotionScore[emotion]) / 4) * (h - padY * 2);
          return (
            <circle
              key={`p-${stages[i]}`}
              cx={x}
              cy={y}
              r={3.5}
              fill={theme.accentMuted}
              stroke={theme.accentSoft}
              strokeWidth={1}
            />
          );
        })}
      </svg>
      <div className="flex flex-wrap gap-4 text-[0.6875rem] text-ink-muted">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block h-0.5 w-5 rounded-full"
            style={{ backgroundColor: theme.accent }}
          />
          Driver emotion
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block h-0.5 w-5 rounded-full border-t-2 border-dashed"
            style={{ borderColor: theme.accentMuted }}
          />
          Passenger emotion
        </span>
      </div>
    </div>
  );
}

export function SierraJourneyMap({ theme }: SierraJourneyMapProps) {
  const colMin = "minmax(160px, 1fr)";
  const labelCol = "minmax(128px, 150px)";
  const gridStyle = {
    gridTemplateColumns: `${labelCol} repeat(7, ${colMin})`,
  };

  return (
    <div className="overflow-x-auto">
      <div
        className="min-w-[1240px] rounded-2xl border"
        style={{ borderColor: theme.accentMuted }}
      >
        {/* Journey stages */}
        <div
          className="grid rounded-t-2xl border-b"
          style={{
            ...gridStyle,
            borderColor: theme.accentMuted,
            backgroundColor: theme.accent,
          }}
        >
          <div className="flex items-center rounded-tl-2xl px-3 py-3 text-[0.625rem] font-bold uppercase tracking-wider text-white/90">
            Journey stage
          </div>
          {stages.map((stage, i) => (
            <div
              key={stage}
              className={`flex min-w-0 items-center justify-center border-l border-white/25 px-1.5 py-3 text-center text-[0.625rem] font-bold uppercase leading-snug tracking-wide text-white ${
                i === stages.length - 1 ? "rounded-tr-2xl pr-3" : ""
              }`}
            >
              <span className="max-w-full text-balance">{stage}</span>
            </div>
          ))}
        </div>

        {/* Driver emotion */}
        <div
          className="grid border-b bg-white"
          style={{ ...gridStyle, borderColor: `${theme.accentMuted}55` }}
        >
          <div
            className="flex items-center px-3 py-4 text-[0.625rem] font-bold uppercase tracking-wider"
            style={{ backgroundColor: theme.accentSoft, color: theme.accent }}
          >
            Driver emotion
          </div>
          {driverEmotions.map((emotion, i) => (
            <div
              key={`driver-${stages[i]}`}
              className={`flex items-center justify-center border-l border-dashed border-[#D5DDE6] px-2 py-4 ${
                i === stages.length - 1 ? "pr-3" : ""
              }`}
            >
              <EmotionPill emotion={emotion} theme={theme} />
            </div>
          ))}
        </div>

        {/* Passenger emotion */}
        <div
          className="grid border-b bg-white"
          style={{ ...gridStyle, borderColor: `${theme.accentMuted}55` }}
        >
          <div
            className="flex items-center px-3 py-4 text-[0.625rem] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: theme.accentSoft,
              color: theme.accent,
            }}
          >
            Passenger emotion
          </div>
          {passengerEmotions.map((emotion, i) => (
            <div
              key={`passenger-${stages[i]}`}
              className={`flex items-center justify-center border-l border-dashed border-[#D5DDE6] px-2 py-4 ${
                i === stages.length - 1 ? "pr-3" : ""
              }`}
            >
              <EmotionPill emotion={emotion} theme={theme} />
            </div>
          ))}
        </div>

        {/* Opportunity */}
        <div
          className="grid border-b bg-white items-stretch"
          style={{ ...gridStyle, borderColor: `${theme.accentMuted}55` }}
        >
          <div
            className="flex items-center px-3 py-4 text-[0.625rem] font-bold uppercase tracking-wider"
            style={{ backgroundColor: "#E4EDF6", color: theme.accent }}
          >
            Opportunity
          </div>
          {opportunities.map((item, i) => (
            <div
              key={item.title}
              className={`box-border flex min-w-0 border-l border-dashed border-[#D5DDE6] px-2 py-3 ${
                i === stages.length - 1 ? "pr-3" : ""
              }`}
            >
              <div
                className="box-border flex h-full w-full min-w-0 flex-col rounded-lg border p-2"
                style={{
                  backgroundColor: theme.accentSoft,
                  borderColor: `${theme.accentMuted}66`,
                }}
              >
                <p className="text-[0.6875rem] font-semibold leading-snug text-ink">
                  {item.title}
                </p>
                <p className="mt-1 flex-1 text-[0.625rem] leading-snug text-ink-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Emotional journey trend */}
        <div className="grid rounded-b-2xl bg-white" style={gridStyle}>
          <div
            className="flex items-center rounded-bl-2xl px-3 py-4 text-[0.625rem] font-bold uppercase tracking-wider"
            style={{ backgroundColor: "#E4EDF6", color: theme.accent }}
          >
            Emotional journey (trend)
          </div>
          <div className="col-span-7 rounded-br-2xl px-3 py-4 pr-3">
            <EmotionTrendChart theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
