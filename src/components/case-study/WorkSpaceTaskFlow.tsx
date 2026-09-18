import type { CaseStudyTheme } from "@/types/case-study";

type Props = { theme: CaseStudyTheme };

const INK = "#282D46";
const BODY = "#424B5A";
const START = "#143D61";
const START_BG = "#EEF4FF";
const DECISION = "#2F9E5E";
const DECISION_BG = "#EFF9F1";
const NO = "#D95745";

type NodeKind = "start" | "screen" | "decision" | "exit" | "end" | "option";

type FlowNode = {
  id: string;
  kind: NodeKind;
  title: string;
  subtitle?: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

/** Layout aligned to PORTFOLIO file node 1:3805 — scales to container width. */
const VIEW_W = 960;
const VIEW_H = 300;

const mainNodes: FlowNode[] = [
  { id: "start", kind: "start", title: "Home screen", subtitle: "Soham opens the app", x: 8, y: 208, w: 104, h: 58 },
  { id: "select", kind: "screen", title: "Select a workspace", subtitle: "Picks a nearby space", x: 124, y: 208, w: 104, h: 58 },
  { id: "desc", kind: "screen", title: "Space description", subtitle: "Reviews amenities & price", x: 240, y: 208, w: 104, h: 58 },
  { id: "avail", kind: "screen", title: "Check availability", subtitle: "Dates & location", x: 356, y: 208, w: 104, h: 58 },
  { id: "decision", kind: "decision", title: "Space available?", x: 484, y: 214, w: 72, h: 46 },
  { id: "details", kind: "screen", title: "Enter details", subtitle: "Booking information", x: 588, y: 208, w: 104, h: 58 },
  { id: "checkout", kind: "screen", title: "Book / checkout", subtitle: "Confirm payment", x: 704, y: 208, w: 104, h: 58 },
  { id: "end", kind: "end", title: "Confirmation", subtitle: "Booking confirmed", x: 820, y: 208, w: 104, h: 58 },
];

const exitNode: FlowNode = {
  id: "exit",
  kind: "exit",
  title: "Back to search",
  subtitle: "Space not available",
  x: 468,
  y: 52,
  w: 104,
  h: 52,
};

const optionNodes: FlowNode[] = [
  { id: "chat", kind: "option", title: "Chat", x: 218, y: 128, w: 72, h: 32 },
  { id: "location", kind: "option", title: "Location", x: 300, y: 128, w: 72, h: 32 },
  { id: "check", kind: "option", title: "Check availability", x: 382, y: 128, w: 96, h: 32 },
];

function centerX(n: FlowNode) {
  return n.x + n.w / 2;
}

function centerY(n: FlowNode) {
  return n.y + n.h / 2;
}

function line(x1: number, y1: number, x2: number, y2: number, dashed = false) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={INK}
      strokeWidth={1.5}
      strokeDasharray={dashed ? "4 3" : undefined}
      markerEnd="url(#ws-flow-arrow)"
    />
  );
}

function NodeBox({
  node,
  accent,
}: {
  node: FlowNode;
  accent: string;
}) {
  const { kind, title, subtitle, x, y, w, h } = node;

  if (kind === "decision") {
    const cx = centerX(node);
    const cy = centerY(node);
    const size = 46;
    return (
      <g transform={`translate(${cx - size / 2}, ${cy - size / 2})`}>
        <rect
          x={0}
          y={0}
          width={size}
          height={size}
          rx={4}
          fill="#ffffff"
          stroke={DECISION}
          strokeWidth={2}
          transform={`rotate(45 ${size / 2} ${size / 2})`}
        />
        <text
          x={size / 2}
          y={size / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={DECISION}
          fontSize={9}
          fontWeight={600}
          transform={`rotate(-45 ${size / 2} ${size / 2})`}
        >
          <tspan x={size / 2} dy={-4}>Space</tspan>
          <tspan x={size / 2} dy={11}>available?</tspan>
        </text>
      </g>
    );
  }

  let stroke = accent;
  let fill = "#ffffff";
  let titleFill = accent;
  let subFill = BODY;

  if (kind === "start") {
    stroke = START;
    fill = START_BG;
    titleFill = START;
  } else if (kind === "end") {
    stroke = accent;
    fill = accent;
    titleFill = "#ffffff";
    subFill = "rgba(255,255,255,0.92)";
  } else if (kind === "exit") {
    stroke = DECISION;
    fill = DECISION_BG;
    titleFill = DECISION;
  } else if (kind === "option") {
    stroke = accent;
    fill = "#ffffff";
    titleFill = INK;
    subFill = BODY;
  }

  const titleSize = kind === "option" ? 9 : 9.5;
  const subSize = 8.5;
  const titleY = subtitle ? y + 20 : y + h / 2 + 3;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={kind === "option" ? 8 : 12}
        fill={fill}
        stroke={stroke}
        strokeWidth={kind === "option" ? 1.25 : 1.5}
      />
      <text
        x={x + w / 2}
        y={titleY}
        textAnchor="middle"
        fill={titleFill}
        fontSize={titleSize}
        fontWeight={600}
        style={{ textTransform: "uppercase", letterSpacing: "0.02em" }}
      >
        {title}
      </text>
      {subtitle && (
        <text
          x={x + w / 2}
          y={y + 38}
          textAnchor="middle"
          fill={subFill}
          fontSize={subSize}
          fontWeight={400}
        >
          {subtitle}
        </text>
      )}
    </g>
  );
}

function Legend({ accent }: { accent: string }) {
  return (
    <div
      className="mt-4 flex flex-col gap-2 rounded-xl border bg-white px-4 py-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between"
      style={{ borderColor: `${accent}33` }}
    >
      <p className="text-xs font-bold uppercase tracking-wide" style={{ color: INK }}>Legend</p>
      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-[0.6875rem]" style={{ color: BODY }}>
        <li><span style={{ color: START }}>●</span> Start</li>
        <li><span style={{ color: accent }}>●</span> App screen</li>
        <li><span style={{ color: DECISION }}>◆</span> Decision</li>
        <li><span style={{ color: DECISION }}>■</span> Exit path</li>
        <li>
          <span className="font-bold" style={{ color: DECISION }}>Yes</span>
          {" / "}
          <span className="font-bold" style={{ color: NO }}>No</span>
        </li>
      </ul>
    </div>
  );
}

export function WorkSpaceTaskFlow({ theme }: Props) {
  const { accent, accentSoft, accentMuted } = theme;
  const [start, select, desc, avail, decision, details, checkout, end] = mainNodes;

  return (
    <div
      className="w-full rounded-2xl border p-3 md:p-5"
      style={{ backgroundColor: accentSoft, borderColor: `${accentMuted}99` }}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-auto w-full"
        role="img"
        aria-label="Task flow diagram for booking a workspace"
      >
        <defs>
          <marker
            id="ws-flow-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill={INK} />
          </marker>
        </defs>

        {/* Optional paths from space description */}
        {line(centerX(desc), desc.y, centerX(optionNodes[0]), optionNodes[0].y + optionNodes[0].h, true)}
        {line(centerX(desc), desc.y, centerX(optionNodes[1]), optionNodes[1].y + optionNodes[1].h, true)}
        {line(centerX(desc), desc.y, centerX(optionNodes[2]), optionNodes[2].y + optionNodes[2].h, true)}
        {line(centerX(optionNodes[0]), optionNodes[0].y + optionNodes[0].h, centerX(avail), avail.y, true)}
        {line(centerX(optionNodes[1]), optionNodes[1].y + optionNodes[1].h, centerX(avail), avail.y, true)}
        {line(centerX(optionNodes[2]), optionNodes[2].y + optionNodes[2].h, centerX(avail), avail.y, true)}

        {/* Main spine */}
        {line(start.x + start.w, centerY(start), select.x, centerY(select))}
        {line(select.x + select.w, centerY(select), desc.x, centerY(desc))}
        {line(desc.x + desc.w, centerY(desc), avail.x, centerY(avail))}
        {line(avail.x + avail.w, centerY(avail), decision.x, centerY(decision))}
        {line(decision.x + decision.w, centerY(decision), details.x, centerY(details))}
        {line(details.x + details.w, centerY(details), checkout.x, centerY(checkout))}
        {line(checkout.x + checkout.w, centerY(checkout), end.x, centerY(end))}

        {/* No branch */}
        {line(centerX(exitNode), exitNode.y + exitNode.h, centerX(decision), decision.y)}
        <text
          x={centerX(exitNode)}
          y={(exitNode.y + exitNode.h + decision.y) / 2 + 3}
          textAnchor="middle"
          fill={NO}
          fontSize={8}
          fontWeight={800}
          style={{ textTransform: "uppercase" }}
        >
          No
        </text>

        {/* Yes label on spine */}
        <text
          x={(decision.x + decision.w + details.x) / 2}
          y={centerY(decision) - 10}
          textAnchor="middle"
          fill={DECISION}
          fontSize={8}
          fontWeight={800}
          style={{ textTransform: "uppercase" }}
        >
          Yes
        </text>

        {optionNodes.map((n) => (
          <NodeBox key={n.id} node={n} accent={accent} />
        ))}
        <NodeBox node={exitNode} accent={accent} />
        {mainNodes.map((n) => (
          <NodeBox key={n.id} node={n} accent={accent} />
        ))}
      </svg>

      <Legend accent={accent} />
    </div>
  );
}
