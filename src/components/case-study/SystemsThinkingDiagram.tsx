import type { CaseStudyTheme } from "@/types/case-study";

type SystemsThinkingDiagramProps = {
  theme: CaseStudyTheme;
};

type NodeDef = {
  id: number;
  title: string;
  line1: string;
  line2?: string;
};

const nodes: NodeDef[] = [
  { id: 1, title: "Driver", line1: "Intent, attention,", line2: "context." },
  {
    id: 2,
    title: "Infotainment",
    line1: "UI output &",
    line2: "feedback.",
  },
  {
    id: 3,
    title: "Audio Engine",
    line1: "Processing, mixing,",
    line2: "zone management.",
  },
  {
    id: 4,
    title: "Passenger Display",
    line1: "Independent",
    line2: "entertainment.",
  },
  {
    id: 5,
    title: "Vehicle State",
    line1: "Speed, gear, mode,",
    line2: "sensors.",
  },
  {
    id: 6,
    title: "Android Platform",
    line1: "Services,",
    line2: "permissions, APIs.",
  },
  {
    id: 7,
    title: "Media Sources",
    line1: "Local, USB,",
    line2: "online streaming.",
  },
  {
    id: 8,
    title: "Bluetooth",
    line1: "Phones, earbuds,",
    line2: "wearables.",
  },
  {
    id: 9,
    title: "Calls",
    line1: "Incoming, ongoing,",
    line2: "priority handling.",
  },
];

function badgeColor(id: number, theme: CaseStudyTheme) {
  const palette = [theme.accent, "#9A5A38", theme.accentMuted, "#C47A4A"];
  return palette[(id - 1) % palette.length];
}

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function NodeIcon({ id, color }: { id: number; color: string }) {
  const common = {
    fill: "none",
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case 1:
      return (
        <g>
          <circle cx="0" cy="-4" r="3" {...common} />
          <path d="M-5 6c1.2-4 8.8-4 10 0" {...common} />
          <path d="M-7 2h14" {...common} />
        </g>
      );
    case 2:
      return (
        <g>
          <rect x="-8" y="-6" width="16" height="11" rx="1.5" {...common} />
          <path d="M-3 8h6" {...common} />
        </g>
      );
    case 3:
      return (
        <g>
          <path d="M-6 -3h3v6h-3z" {...common} />
          <path d="M-3 -3 4 -7v14l-7-4" {...common} />
          <path
            d="M6 -3c1.5 1.5 1.5 4.5 0 6M8.5 -5c2.5 2.5 2.5 7.5 0 10"
            {...common}
          />
        </g>
      );
    case 4:
      return (
        <g>
          <rect x="-8" y="-6" width="16" height="11" rx="1.5" {...common} />
          <path d="M-2 -2 4 0 -2 2z" fill={color} stroke="none" />
        </g>
      );
    case 5:
      return (
        <g>
          <path d="M-8 2h16M-6 2l2-5h8l2 5" {...common} />
          <circle cx="-4.5" cy="4" r="2" {...common} />
          <circle cx="4.5" cy="4" r="2" {...common} />
        </g>
      );
    case 6:
      return (
        <g>
          <rect x="-5" y="-2" width="10" height="8" rx="2" {...common} />
          <path d="M-3 -5 0 -2 3 -5M-2 9v2M2 9v2" {...common} />
          <circle cx="-2" cy="2" r="0.9" fill={color} stroke="none" />
          <circle cx="2" cy="2" r="0.9" fill={color} stroke="none" />
        </g>
      );
    case 7:
      return (
        <g>
          <path d="M0 -7v10" {...common} />
          <circle cx="-3" cy="4" r="3" {...common} />
          <path d="M0 -7h6v4H0" {...common} />
        </g>
      );
    case 8:
      return (
        <g>
          <path d="M0 -7 5 0 0 7 -5 0Z" {...common} />
          <path d="M0 -7v14M-5 0h10" {...common} />
        </g>
      );
    case 9:
      return (
        <g>
          <path
            d="M-4 -3c1.5-2 3.5-2 4.5 0l1 1.8c.3.8-.2 1.2-.8 1.6l-.8.4c1.2 2 2.8 3.2 4.8 4l.4-.8c.4-.7 1-.1 1.6-.6l1.6.8c1.6.8 1.6 2.4 0 4-3.2 1.6-8 .8-11.2-3.2S-7.2 -1 -4 -3Z"
            {...common}
          />
        </g>
      );
    default:
      return null;
  }
}

export function SystemsThinkingDiagram({ theme }: SystemsThinkingDiagramProps) {
  const size = 640;
  const cx = size / 2;
  const cy = size / 2 + 6;
  const ringR = 228;
  const nodeR = 56;
  const hubR = 90;
  const n = nodes.length;

  const positions = nodes.map((node, i) => {
    const angle = (360 / n) * i;
    return { ...node, angle, ...polar(cx, cy, ringR, angle) };
  });

  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{
        backgroundColor: theme.accentSoft,
        borderColor: theme.accentMuted,
      }}
    >
      <div
        className="border-b px-5 py-4"
        style={{ borderColor: `${theme.accentMuted}66` }}
      >
        <p className="font-[family-name:var(--font-bricolage)] text-lg font-semibold text-ink md:text-xl">
          A Connected Ecosystem
        </p>
        <p className="mt-1 text-sm text-ink-muted">
          Every component influences and is influenced.
        </p>
      </div>

      <div className="p-2 sm:p-3">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="mx-auto block h-auto w-full max-w-[640px]"
          role="img"
          aria-label="Systems thinking diagram: user interaction at the center connected to driver, displays, audio, vehicle state, Android platform, media, Bluetooth, and calls"
        >
          <defs>
            <marker
              id="sierra-systems-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={theme.accent} />
            </marker>
          </defs>

          <circle
            cx={cx}
            cy={cy}
            r={ringR}
            fill="none"
            stroke={theme.accentMuted}
            strokeOpacity={0.35}
            strokeWidth={1}
            strokeDasharray="4 6"
          />

          {positions.map((p) => {
            const inner = polar(cx, cy, hubR + 6, p.angle);
            const outer = polar(cx, cy, ringR - nodeR - 4, p.angle);
            return (
              <line
                key={`spoke-${p.id}`}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke={theme.accent}
                strokeOpacity={0.4}
                strokeWidth={1.4}
                strokeDasharray="4 4"
              />
            );
          })}

          {positions.map((p) => {
            const mid = p.angle + 360 / n / 2;
            const s = polar(cx, cy, ringR, mid - 14);
            const e = polar(cx, cy, ringR, mid + 14);
            return (
              <path
                key={`arc-${p.id}`}
                d={`M ${s.x} ${s.y} A ${ringR} ${ringR} 0 0 1 ${e.x} ${e.y}`}
                fill="none"
                stroke={theme.accent}
                strokeWidth={1.6}
                strokeLinecap="round"
                markerEnd="url(#sierra-systems-arrow)"
              />
            );
          })}

          <circle
            cx={cx}
            cy={cy}
            r={hubR}
            fill="#fff"
            stroke={theme.accent}
            strokeWidth={2}
          />
          <circle
            cx={cx}
            cy={cy}
            r={hubR - 8}
            fill={theme.accentSoft}
            stroke={theme.accentMuted}
            strokeWidth={1}
          />
          <g transform={`translate(${cx}, ${cy - 28})`} aria-hidden>
            <path
              d="M-10 4c-4-6 0-14 8-12 2-5 10-5 12 0 6-1 10 5 6 10-2 4-8 6-14 5-5 1-10-1-12-3z"
              fill="none"
              stroke={theme.accent}
              strokeWidth={1.8}
              strokeLinejoin="round"
            />
          </g>
          <text
            x={cx}
            y={cy + 8}
            textAnchor="middle"
            fill={theme.accent}
            style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.04em" }}
          >
            USER INTERACTION
          </text>
          <text
            x={cx}
            y={cy + 24}
            textAnchor="middle"
            fill="#6B5A4E"
            style={{ fontSize: 9 }}
          >
            (Any Action)
          </text>
          <text
            x={cx}
            y={cy + 42}
            textAnchor="middle"
            fill="#8A7568"
            style={{ fontSize: 8 }}
          >
            Every action triggers a
          </text>
          <text
            x={cx}
            y={cy + 54}
            textAnchor="middle"
            fill="#8A7568"
            style={{ fontSize: 8 }}
          >
            chain reaction across the system.
          </text>

          {positions.map((p) => {
            const color = badgeColor(p.id, theme);
            return (
              <g key={p.id} transform={`translate(${p.x}, ${p.y})`}>
                <circle
                  r={nodeR}
                  fill="#fff"
                  stroke={theme.accentMuted}
                  strokeWidth={1.5}
                />
                <circle
                  cy={-nodeR + 2}
                  r={11}
                  fill={color}
                  stroke="#fff"
                  strokeWidth={2}
                />
                <text
                  y={-nodeR + 6}
                  textAnchor="middle"
                  fill="#fff"
                  style={{ fontSize: 10, fontWeight: 700 }}
                >
                  {p.id}
                </text>
                <g transform="translate(0, -16)">
                  <NodeIcon id={p.id} color={color} />
                </g>
                <text
                  y={10}
                  textAnchor="middle"
                  fill="#2A221C"
                  style={{
                    fontSize: p.title.length > 12 ? 8 : 9,
                    fontWeight: 700,
                    letterSpacing: "0.02em",
                  }}
                >
                  {p.title.toUpperCase()}
                </text>
                <text
                  y={24}
                  textAnchor="middle"
                  fill="#8A7568"
                  style={{ fontSize: 7.5 }}
                >
                  {p.line1}
                </text>
                {p.line2 && (
                  <text
                    y={34}
                    textAnchor="middle"
                    fill="#8A7568"
                    style={{ fontSize: 7.5 }}
                  >
                    {p.line2}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
