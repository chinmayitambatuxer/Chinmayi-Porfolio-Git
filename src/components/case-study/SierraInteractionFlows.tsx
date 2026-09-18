import Image from "next/image";
import type { CaseStudyTheme } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("tata-sierra-hmi", file);

type Props = { theme: CaseStudyTheme };

type StepKind = "start" | "process" | "decision" | "interrupt" | "end";

type FlowStep = {
  label: string;
  kind: StepKind;
};

type Flow = {
  title: string;
  principle: string;
  steps: FlowStep[];
};

const flows: Flow[] = [
  {
    title: "Audio concurrency",
    principle:
      "Latest valid interaction owns the shared speakers until a higher priority interrupts.",
    steps: [
      { label: "Passenger or driver starts media", kind: "start" },
      { label: "Audio engine assigns active source", kind: "process" },
      { label: "Higher-priority event arrives", kind: "interrupt" },
      { label: "Current media pauses or ducks", kind: "process" },
      { label: "Displays sync the new state", kind: "end" },
    ],
  },
  {
    title: "Relax Mode transitions",
    principle:
      "Immersive cabin experiences only while stationary — and exit safely when motion begins.",
    steps: [
      { label: "Vehicle is parked", kind: "start" },
      { label: "Driver initiates Relax Mode", kind: "process" },
      { label: "Ambient themes sync across displays", kind: "process" },
      { label: "Vehicle begins moving", kind: "interrupt" },
      { label: "Driver experience exits with clear feedback", kind: "end" },
    ],
  },
  {
    title: "Passenger media control",
    principle:
      "Passengers get independence without forcing the driver to manage conflicts.",
    steps: [
      { label: "Passenger opens media on PID", kind: "start" },
      { label: "Playback starts on shared speakers", kind: "process" },
      { label: "Driver call or navigation interrupts", kind: "interrupt" },
      { label: "Passenger is guided to headphones", kind: "process" },
      { label: "Media resumes when safe", kind: "end" },
    ],
  },
  {
    title: "FOTA update journey",
    principle: "Over-the-air installs never compete with driving attention.",
    steps: [
      { label: "Update available", kind: "start" },
      { label: "System checks vehicle state", kind: "decision" },
      { label: "Install offered when parked", kind: "process" },
      { label: "Deferred automatically while driving", kind: "interrupt" },
      { label: "Completion confirmed after restart", kind: "end" },
    ],
  },
  {
    title: "Boot-up sequence",
    principle: "Critical systems come up first; entertainment waits for readiness.",
    steps: [
      { label: "Ignition on", kind: "start" },
      { label: "Safety-critical UI loads", kind: "process" },
      { label: "Cluster and CID initialize", kind: "process" },
      { label: "Passenger display follows", kind: "process" },
      { label: "Media and apps become available", kind: "end" },
    ],
  },
  {
    title: "Play action priority checks",
    principle:
      "Every play request is evaluated against shared resources and safety context.",
    steps: [
      { label: "Passenger presses Play", kind: "start" },
      { label: "Audio engine receives command", kind: "process" },
      { label: "Check if driver media is playing", kind: "decision" },
      { label: "Apply priority rules if needed", kind: "interrupt" },
      { label: "Start playback or prompt headphones", kind: "end" },
    ],
  },
];

const kindMeta: Record<StepKind, string> = {
  start: "Start",
  process: "Action",
  decision: "Decision",
  interrupt: "Interrupt",
  end: "End",
};

function ArrowHorizontal({ color }: { color: string }) {
  return (
    <div className="flex shrink-0 items-center px-1" aria-hidden>
      <span className="h-px w-4" style={{ backgroundColor: `${color}aa` }} />
      <span
        className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent"
        style={{ borderLeftColor: color }}
      />
    </div>
  );
}

function ArrowVertical({ color }: { color: string }) {
  return (
    <div className="flex flex-col items-center py-1" aria-hidden>
      <span className="h-3 w-px" style={{ backgroundColor: `${color}aa` }} />
      <span
        className="h-0 w-0 border-x-[5px] border-t-[7px] border-x-transparent"
        style={{ borderTopColor: color }}
      />
    </div>
  );
}

function StepLabel({
  index,
  kind,
  accent,
}: {
  index: number;
  kind: StepKind;
  accent: string;
}) {
  return (
    <p
      className="mb-2 text-center text-[0.625rem] font-bold uppercase tracking-wider"
      style={{ color: accent }}
    >
      {String(index + 1).padStart(2, "0")} · {kindMeta[kind]}
    </p>
  );
}

function StepCard({ step, theme }: { step: FlowStep; theme: CaseStudyTheme }) {
  const isEnd = step.kind === "end";
  const isInterrupt = step.kind === "interrupt";
  const isDecision = step.kind === "decision";
  const isStart = step.kind === "start";

  const bg = isEnd
    ? theme.accent
    : isInterrupt
      ? "#E4EDF6"
      : isStart || isDecision
        ? theme.accentSoft
        : "#FFFFFF";
  const border = isEnd
    ? theme.accent
    : isInterrupt
      ? "#9EB4CC"
      : `${theme.accentMuted}99`;
  const text = isEnd ? "#FFFFFF" : "#1A1A1A";

  if (isDecision) {
    return (
      <div className="flex h-[6.25rem] w-full items-center justify-center">
        <div
          className="flex h-[5.25rem] w-[5.25rem] rotate-45 items-center justify-center rounded-xl border shadow-sm"
          style={{ borderColor: border, backgroundColor: bg }}
        >
          <p
            className="-rotate-45 px-1.5 text-center text-[0.6875rem] font-semibold leading-snug"
            style={{ color: text }}
          >
            {step.label}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-[6.25rem] w-full flex-col justify-center rounded-2xl border px-3.5 py-3 shadow-sm"
      style={{ backgroundColor: bg, borderColor: border }}
    >
      <p
        className="text-center text-[0.8125rem] font-semibold leading-snug lg:text-left"
        style={{ color: text }}
      >
        {step.label}
      </p>
      {isInterrupt && (
        <p
          className="mt-1.5 text-center text-[0.625rem] font-bold uppercase tracking-wide lg:text-left"
          style={{ color: theme.accent }}
        >
          Priority event
        </p>
      )}
    </div>
  );
}

function TaskFlow({ flow, theme }: { flow: Flow; theme: CaseStudyTheme }) {
  return (
    <article
      className="overflow-hidden rounded-2xl border"
      style={{
        borderColor: `${theme.accentMuted}99`,
        backgroundColor: theme.accentSoft,
      }}
    >
      <div
        className="border-b px-5 py-4"
        style={{ borderColor: `${theme.accentMuted}66` }}
      >
        <p className="cs-meta-label" style={{ color: theme.accent }}>
          Task flow
        </p>
        <h3 className="mt-1 text-lg font-bold text-ink">{flow.title}</h3>
      </div>

      {/* Mobile: vertical task flow */}
      <ol className="flex list-none flex-col items-center px-5 py-6 lg:hidden">
        {flow.steps.map((step, i) => (
          <li
            key={`${flow.title}-m-${step.label}`}
            className="flex w-full max-w-sm flex-col items-center"
          >
            <StepLabel index={i} kind={step.kind} accent={theme.accent} />
            <div className="w-full">
              <StepCard step={step} theme={theme} />
            </div>
            {i < flow.steps.length - 1 && (
              <ArrowVertical color={theme.accent} />
            )}
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal task flow */}
      <div className="hidden overflow-x-auto px-5 py-6 lg:block">
        <ol className="flex min-w-[58rem] list-none items-stretch justify-between">
          {flow.steps.map((step, i) => (
            <li
              key={`${flow.title}-d-${step.label}`}
              className="flex items-stretch"
            >
              <div className="flex w-[10.75rem] flex-col">
                <StepLabel index={i} kind={step.kind} accent={theme.accent} />
                <StepCard step={step} theme={theme} />
              </div>
              {i < flow.steps.length - 1 && (
                <div className="flex items-center pt-5">
                  <ArrowHorizontal color={theme.accent} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      <p
        className="mx-5 mb-5 rounded-xl px-4 py-3 text-[0.8125rem] font-medium leading-snug"
        style={{ backgroundColor: theme.accentSoft, color: theme.accent }}
      >
        {flow.principle}
      </p>
    </article>
  );
}

export function SierraInteractionFlows({ theme }: Props) {
  return (
    <div className="space-y-6">
      {flows.map((flow) => (
        <TaskFlow key={flow.title} flow={flow} theme={theme} />
      ))}
    </div>
  );
}

const researchFocus = [
  {
    brand: "Mercedes EQS",
    image: img("competitor-eqs.png"),
    focus:
      "AI personalization, camera-based driver distraction blocking, widget shortcuts",
  },
  {
    brand: "Porsche Taycan",
    image: img("competitor-taycan.png"),
    focus: "Cockpit mirroring, passenger seatbelt gating, customizable My Screen",
  },
  {
    brand: "Jeep Grand Wagoneer",
    image: img("competitor-wagoneer.png"),
    focus: "Simplicity-first passenger entertainment and clear ownership",
  },
  {
    brand: "Li Xiang L9",
    image: img("competitor-l9.png"),
    focus: "Multi-screen cabin entertainment density and family-oriented media",
  },
];

export function SierraCompetitiveResearch({ theme }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {researchFocus.map((item) => (
        <div
          key={item.brand}
          className="overflow-hidden rounded-2xl border bg-white"
          style={{ borderColor: `${theme.accentMuted}88` }}
        >
          <div
            className="relative aspect-[16/9] overflow-hidden"
            style={{ backgroundColor: theme.accentSoft }}
          >
            <Image
              src={item.image}
              alt={item.brand}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, 280px"
            />
          </div>
          <div className="p-4">
            <p className="text-sm font-bold text-ink">{item.brand}</p>
            <p className="mt-1 text-[0.8125rem] leading-snug text-ink-muted">
              {item.focus}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
