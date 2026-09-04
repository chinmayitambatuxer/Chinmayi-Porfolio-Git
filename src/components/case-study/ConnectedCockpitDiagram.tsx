import type { CaseStudyTheme } from "@/types/case-study";

type ConnectedCockpitDiagramProps = {
  theme: CaseStudyTheme;
};

function DiagramNode({ children }: { children: string }) {
  return (
    <div className="rounded-lg border border-border bg-white px-3 py-2.5 text-center text-xs font-medium leading-snug text-ink shadow-sm sm:px-4 sm:text-sm">
      {children}
    </div>
  );
}

function ConnectorLine({
  d,
  color,
  className,
}: {
  d: string;
  color: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 280 32"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d={d}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ConnectedCockpitDiagram({ theme }: ConnectedCockpitDiagramProps) {
  const lineColor = theme.accentMuted;

  return (
    <div
      className="rounded-2xl border p-6 md:p-8"
      style={{
        backgroundColor: theme.accentSoft,
        borderColor: theme.accentMuted,
      }}
      role="img"
      aria-label="Connected cockpit ecosystem diagram showing Vehicle branching to Infotainment Display and Passenger Display, then Shared Audio Engine, Android Automotive Platform, and Vehicle Hardware and Services"
    >
      <div className="mx-auto flex max-w-[300px] flex-col items-center">
        <DiagramNode>Vehicle</DiagramNode>

        <ConnectorLine
          d="M140 0 V10 M50 10 H230 M50 10 V32 M230 10 V32"
          color={lineColor}
          className="h-8 w-full"
        />

        <div className="grid w-full grid-cols-2 gap-3">
          <DiagramNode>Infotainment Display</DiagramNode>
          <DiagramNode>Passenger Display</DiagramNode>
        </div>

        <ConnectorLine
          d="M70 0 V10 M210 0 V10 M70 10 H210 M140 10 V32"
          color={lineColor}
          className="h-8 w-full"
        />

        <div className="w-full space-y-0">
          <DiagramNode>Shared Audio Engine</DiagramNode>

          <div
            className="mx-auto h-5 w-px"
            style={{ backgroundColor: lineColor }}
            aria-hidden
          />

          <DiagramNode>Android Automotive Platform</DiagramNode>

          <div
            className="mx-auto h-5 w-px"
            style={{ backgroundColor: lineColor }}
            aria-hidden
          />

          <DiagramNode>Vehicle Hardware &amp; Services</DiagramNode>
        </div>
      </div>
    </div>
  );
}
