import type { CaseStudyTheme } from "@/types/case-study";
import { MobileHorizontalScroll } from "./MobileHorizontalScroll";

type AirportJourneyMapProps = {
  theme: CaseStudyTheme;
};

const stages = [
  "Check-in",
  "Boarding (1st flight)",
  "Layover",
  "Boarding (2nd flight)",
  "Check-out",
];

const rows: { label: string; cells: string[][] }[] = [
  {
    label: "Actions",
    cells: [
      [
        "Arrive at airport and locate the correct terminal",
        "Check in and print boarding pass",
        "Drop luggage and receive luggage tag",
        "Clear security checks and scans",
      ],
      [
        "Use signs or maps to find the gate",
        "Locate charging stations, restrooms, and amenities",
        "Watch for gate changes and delay updates",
        "Prepare documents and walk to the aircraft",
      ],
      [
        "Get connection details for the next flight",
        "Check arrival and delay updates",
        "Look for amenities during the waiting period",
      ],
      [
        "Arrive at the boarding gate early",
        "Keep documents and boarding pass ready",
        "Stay updated with flight status",
        "Board the aircraft",
      ],
      [
        "Arrive at the destination airport",
        "Collect luggage",
        "Find the airport exit",
        "Leave the airport",
      ],
    ],
  },
  {
    label: "Thoughts & feelings",
    cells: [
      ["Rushed", "Uncertain about the terminal", "Anxious about documents"],
      ["Overwhelmed by signage", "Worried about missing updates", "Stressed about time"],
      ["Relieved but tired", "Uncertain how long the wait will be"],
      ["Anxious about making the connection", "Focused on not missing the gate"],
      ["Tired", "Relieved the journey is ending"],
    ],
  },
  {
    label: "Pain points",
    cells: [
      ["Hard to find the right terminal", "Long queues with little guidance"],
      ["Getting lost in a large terminal", "Gate changes are easy to miss"],
      ["No clear sense of how much time remains", "Hard to find food or charging"],
      ["Connection stress after a delay", "Documents feel scattered"],
      ["Baggage claim confusion", "Exit navigation is unclear"],
    ],
  },
  {
    label: "Opportunities",
    cells: [
      ["Contextual terminal orientation", "Step-by-step boarding checklist"],
      ["Live gate and delay alerts", "In-airport navigation to amenities"],
      ["Layover timeline with next gate", "Amenity discovery in context"],
      ["Persistent flight status on home", "Document and boarding reminders"],
      ["Arrival guidance and next steps", "Connection to ground transport"],
    ],
  },
];

export function AirportJourneyMap({ theme }: AirportJourneyMapProps) {
  return (
    <MobileHorizontalScroll accent={theme.accent}>
      <div className="min-w-[880px]">
        <div
          className="grid grid-cols-5 gap-2"
          style={{ gridTemplateColumns: "repeat(5, minmax(160px, 1fr))" }}
        >
          {stages.map((stage) => (
            <div
              key={stage}
              className="rounded-t-lg px-3 py-3 text-center text-xs font-bold uppercase tracking-wide text-ink"
              style={{ backgroundColor: theme.accentSoft }}
            >
              {stage}
            </div>
          ))}
        </div>

        {rows.map((row) => (
          <div key={row.label} className="mt-2">
            <p
              className="mb-2 text-[0.6875rem] font-bold uppercase tracking-wider"
              style={{ color: theme.accent }}
            >
              {row.label}
            </p>
            <div
              className="grid grid-cols-5 gap-2"
              style={{ gridTemplateColumns: "repeat(5, minmax(160px, 1fr))" }}
            >
              {row.cells.map((items, index) => (
                <div
                  key={`${row.label}-${index}`}
                  className="rounded-lg border border-[#E0D6CC] bg-[#F7F2EC] p-3"
                >
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="text-[0.8125rem] leading-snug text-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MobileHorizontalScroll>
  );
}
