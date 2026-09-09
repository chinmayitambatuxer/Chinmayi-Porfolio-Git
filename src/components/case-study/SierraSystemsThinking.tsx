import type { CaseStudyTheme } from "@/types/case-study";

type SierraSystemsThinkingProps = {
  theme: CaseStudyTheme;
};

type NodeDef = {
  id: number;
  title: string;
  detail: string;
};

const nodes: NodeDef[] = [
  { id: 1, title: "Driver", detail: "Intent, attention, context" },
  { id: 2, title: "Infotainment Display", detail: "UI output & feedback" },
  { id: 3, title: "Audio Engine", detail: "Processing, mixing, zone management" },
  { id: 4, title: "Passenger Display", detail: "Independent experience" },
  { id: 5, title: "Vehicle State", detail: "Speed, gear, driving mode, sensors" },
  { id: 6, title: "Android Platform", detail: "System services, permissions, APIs" },
  { id: 7, title: "Media Sources", detail: "Local, USB, Online Streaming" },
  { id: 8, title: "Bluetooth Devices", detail: "Phones, earbuds, wearables" },
  { id: 9, title: "Calls", detail: "Incoming, ongoing, priority handling" },
];

const SIZE = 640;
const CX = SIZE / 2;
const CY = SIZE / 2 + 12;
const RING_R = 225;
const NODE_R = 58;
const HUB_R = 78;

/** Angle for node i (0-based), starting at top, clockwise. */
function nodeAngle(i: number) {
  return -Math.PI / 2 + (i * 2 * Math.PI) / nodes.length;
}

function polar(r: number, angle: number) {
  return {
    x: CX + r * Math.cos(angle),
    y: CY + r * Math.sin(angle),
  };
}

function NodeGlyph({
  id,
  x,
  y,
  color,
}: {
  id: number;
  x: number;
  y: number;
  color: string;
}) {
  // Minimal line icons — monochrome stroke matching theme
  const common = {
    fill: "none" as const,
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case 1: // Driver / steering
      return (
        <g transform={`translate(${x - 10} ${y - 28})`}>
          <circle cx="10" cy="7" r="3.5" {...common} />
          <path d="M3 18c1.5-4 12.5-4 14 0" {...common} />
          <circle cx="10" cy="22" r="7" {...common} />
          <path d="M10 15v14M3 22h14" {...common} />
        </g>
      );
    case 2: // Infotainment screen
      return (
        <g transform={`translate(${x - 12} ${y - 28})`}>
          <rect x="1" y="4" width="22" height="16" rx="2" {...common} />
          <path d="M8 24h8M12 20v4" {...common} />
          <path d="M5 10h6M5 14h10" {...common} />
        </g>
      );
    case 3: // Audio / speaker
      return (
        <g transform={`translate(${x - 11} ${y - 28})`}>
          <path d="M4 10h4l5-4v16l-5-4H4z" {...common} />
          <path d="M16 10c2 1.5 2 6.5 0 8M19 8c3.5 2.5 3.5 9.5 0 12" {...common} />
        </g>
      );
    case 4: // Passenger display / play
      return (
        <g transform={`translate(${x - 12} ${y - 28})`}>
          <rect x="1" y="4" width="22" height="16" rx="2" {...common} />
          <path d="M10 10l6 4-6 4z" {...common} />
        </g>
      );
    case 5: // Vehicle
      return (
        <g transform={`translate(${x - 14} ${y - 26})`}>
          <path
            d="M4 16h20l-2-6H6zM6 16v4M22 16v4M8 20h2M18 20h2"
            {...common}
          />
          <circle cx="9" cy="20" r="2" {...common} />
          <circle cx="19" cy="20" r="2" {...common} />
        </g>
      );
    case 6: // Android / platform
      return (
        <g transform={`translate(${x - 10} ${y - 28})`}>
          <path d="M4 12h12v10H4z" {...common} />
          <path d="M7 12V9a3 3 0 0 1 6 0v3M6 8l-2-3M14 8l2-3" {...common} />
          <circle cx="7.5" cy="15" r="1" fill={color} stroke="none" />
          <circle cx="12.5" cy="15" r="1" fill={color} stroke="none" />
        </g>
      );
    case 7: // Media note
      return (
        <g transform={`translate(${x - 8} ${y - 28})`}>
          <path d="M6 22a3 3 0 1 0 0-0.01M14 20a3 3 0 1 0 0-0.01" {...common} />
          <path d="M9 22V8l8-2v14" {...common} />
        </g>
      );
    case 8: // Bluetooth
      return (
        <g transform={`translate(${x - 8} ${y - 28})`}>
          <path d="M8 4v20l8-6-8-6 8-6-8-6" {...common} />
        </g>
      );
    case 9: // Calls
      return (
        <g transform={`translate(${x - 10} ${y - 28})`}>
          <path
            d="M6 6c2-2 4-2 5 0l1.5 2.5c.5 1 0 2-1 2.5l-1 0.5c1.5 3 3.5 5 6.5 6.5l0.5-1c.5-1 1.5-1.5 2.5-1l2.5 1.5c2 1 2 3 0 5-2 2-6 1-10-2S4 10 6 6z"
            {...common}
          />
        </g>
      );
    default:
      return null;
  }
}

export function SierraSystemsThinking({ theme }: SierraSystemsThinkingProps) {
  const accent = theme.accent;
  const muted = theme.accentMuted;
  const soft = theme.accentSoft;

  const positions = nodes.map((_, i) => polar(RING_R, nodeAngle(i)));

  return (
    <div
      className="overflow-hidden rounded-2xl border"
      style={{ backgroundColor: soft, borderColor: muted }}
      role="img"
      aria-label="Systems thinking diagram: a connected cockpit ecosystem where every user interaction influences driver, displays, audio, vehicle state, platform, media, Bluetooth, and calls"
    >
      <div className="border-b px-5 py-4 text-center md:px-8" style={{ borderColor: `${muted}66` }}>
        <p
          className="text-sm font-semibold tracking-wide md:text-base"
          style={{ color: accent }}
        >
          A Connected Ecosystem
        </p>
        <p className="mt-1 text-xs text-ink-muted md:text-sm">
          Every component influences and is influenced.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[640px] px-2 py-4 md:px-4">
        <svg
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          className="h-auto w-full"
          aria-hidden
        >
          {/* Outer ring flow arrows */}
          {positions.map((from, i) => {
            const to = positions[(i + 1) % positions.length];
            const midAngle = nodeAngle(i) + Math.PI / nodes.length;
            const bend = polar(RING_R + 8, midAngle);
            return (
              <path
                key={`ring-${i}`}
                d={`M ${from.x} ${from.y} Q ${bend.x} ${bend.y} ${to.x} ${to.y}`}
                fill="none"
                stroke={muted}
                strokeWidth={1.5}
                markerEnd="url(#sierra-arrow)"
                opacity={0.85}
              />
            );
          })}

          {/* Spokes hub ↔ nodes (dashed bidirectional) */}
          {positions.map((p, i) => {
            const angle = nodeAngle(i);
            const inner = polar(HUB_R + 6, angle);
            const outer = polar(RING_R - NODE_R - 2, angle);
            return (
              <line
                key={`spoke-${i}`}
                x1={inner.x}
                y1={inner.y}
                x2={outer.x}
                y2={outer.y}
                stroke={accent}
                strokeWidth={1.4}
                strokeDasharray="4 4"
                opacity={0.7}
              />
            );
          })}

          <defs>
            <marker
              id="sierra-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" fill={muted} />
            </marker>
          </defs>

          {/* Hub */}
          <circle
            cx={CX}
            cy={CY}
            r={HUB_R}
            fill="#fff"
            stroke={accent}
            strokeWidth={2}
          />
          <circle
            cx={CX}
            cy={CY - 28}
            r={10}
            fill="none"
            stroke={accent}
            strokeWidth={1.6}
          />
          <path
            d={`M ${CX - 14} ${CY - 10} C ${CX - 14} ${CY - 22}, ${CX + 14} ${CY - 22}, ${CX + 14} ${CY - 10}`}
            fill="none"
            stroke={accent}
            strokeWidth={1.6}
          />
          <text
            x={CX}
            y={CY + 8}
            textAnchor="middle"
            className="fill-ink"
            style={{ fontSize: 11, fontWeight: 700 }}
          >
            USER INTERACTION
          </text>
          <text
            x={CX}
            y={CY + 22}
            textAnchor="middle"
            style={{ fontSize: 9, fill: accent, fontWeight: 600 }}
          >
            (Any Action)
          </text>
          <text
            x={CX}
            y={CY + 40}
            textAnchor="middle"
            className="fill-ink-muted"
            style={{ fontSize: 8 }}
          >
            Every action triggers a
          </text>
          <text
            x={CX}
            y={CY + 51}
            textAnchor="middle"
            className="fill-ink-muted"
            style={{ fontSize: 8 }}
          >
            chain reaction
          </text>

          {/* Peripheral nodes */}
          {nodes.map((node, i) => {
            const p = positions[i];
            return (
              <g key={node.id}>
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={NODE_R}
                  fill="#fff"
                  stroke={muted}
                  strokeWidth={1.5}
                />
                <circle
                  cx={p.x - 22}
                  cy={p.y - 38}
                  r={11}
                  fill={accent}
                />
                <text
                  x={p.x - 22}
                  y={p.y - 34}
                  textAnchor="middle"
                  fill="#fff"
                  style={{ fontSize: 10, fontWeight: 700 }}
                >
                  {node.id}
                </text>
                <NodeGlyph id={node.id} x={p.x} y={p.y} color={accent} />
                <text
                  x={p.x}
                  y={p.y + 12}
                  textAnchor="middle"
                  className="fill-ink"
                  style={{ fontSize: 8.5, fontWeight: 700 }}
                >
                  {node.title.toUpperCase()}
                </text>
                <text
                  x={p.x}
                  y={p.y + 24}
                  textAnchor="middle"
                  className="fill-ink-muted"
                  style={{ fontSize: 7.5 }}
                >
                  {node.detail.length > 28
                    ? `${node.detail.slice(0, 26)}…`
                    : node.detail}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
