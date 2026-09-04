import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("in-vehicle-experience", file);
const asset = (file: string) =>
  `/images/assets/${encodeURIComponent(file)}`;

export const inVehicleExperience: CaseStudy = {
  slug: "in-vehicle-experience",
  client: "Automotive",
  title: "In-Vehicle Experience",
  headline: "When the battery runs low, every second of attention matters",
  summary:
    "Designing a safe, glanceable interaction flow for EV low-power mode on in-vehicle infotainment — keeping drivers informed without compromising focus on the road.",
  tags: ["HMI Design", "EV", "Infotainment", "Safety-first UX"],
  heroImage: img("hero.png"),
  theme: {
    accent: "#2A7B6F",
    accentSoft: "#EDF7F5",
    accentMuted: "#5BA898",
  },
  domain: "Automotive HMI",
  role: "UX Designer",
  team: "Solo design — academic / concept project",
  timeline: "2022",
  platform: "In-vehicle infotainment touchscreen",
  overview:
    "A concept interaction for EV low-battery mode on in-vehicle infotainment: alerting drivers at the right moment, communicating range trade-offs, and enabling battery saver without pulling attention off the road.",
  contribution: [
    "Requirement mapping and systems analysis",
    "Competitive benchmarking across 5 EV brands",
    "Persona development and ideation",
    "End-to-end UI flow design",
  ],
  metrics: [
    { value: "5", label: "Brands benchmarked" },
    { value: "6", label: "Design stages" },
  ],
  goal: "Help EV drivers safely extend remaining range when battery is critically low — without adding cognitive load during active driving.",
  challenge:
    "Low-power mode affects speed, climate, safety systems, and range simultaneously. The interface had to communicate trade-offs clearly while respecting glanceability and hands-on-wheel constraints.",
  outcome:
    "A tiered alert system with upfront mode access, range estimates, charging-station routing, and progressive urgency — validated against five competitive benchmarks and a safety-first interaction model.",
  outcomeMetrics: [
    {
      value: "5",
      label: "Brands benchmarked",
      description: "Hyundai, Ford, MG, Chevrolet, and BMW low-power patterns",
    },
    {
      value: "6",
      label: "Design stages",
      description: "From requirements through final UI",
    },
    {
      value: "2",
      label: "Alert thresholds",
      description: "Graduated urgency at 30% and 10% charge",
    },
  ],
  sections: [
    {
      type: "phase",
      id: "phase-context",
      navLabel: "Context",
      phase: "01 — Context",
      title: "The moment drivers can't afford distraction",
      description:
        "Electric vehicles introduce a new anxiety: range depletion mid-journey. Unlike smartphones, an EV's low-power state doesn't just dim the screen — it throttles acceleration, limits HVAC, and can compromise safety-critical systems.",
    },
    {
      type: "narrative",
      id: "context",
      title: "Awareness, consent, and action — in seconds",
      content:
        "The design challenge wasn't building another settings screen; it was choreographing awareness, consent, and action within the narrow window of attention a driver can spare while the vehicle is moving.",
    },
    {
      type: "narrative",
      id: "requirements",
      title: "What low battery actually changes",
      content:
        "Before sketching a single screen, I mapped every system affected when power reserves drop. Reduced power output, shortened range, diminished safety margins, limited HVAC, restricted lighting, and increased accident risk all shaped which information belonged in persistent UI versus interruptive alerts.",
      bullets: [
        "Reduced power output and top speed (RPM throttling)",
        "Shortened driving range with compounding risk to battery health",
        "Diminished safety margins — brakes, airbags, stability control",
        "Limited HVAC — climate comfort traded for conservation",
        "Restricted lighting and auxiliary systems",
      ],
    },
    {
      type: "process",
      id: "approach",
      title: "From requirements to road-ready flows",
      steps: [
        "Requirement Gathering",
        "Competitive Analysis",
        "Persona Development",
        "Ideation",
        "Wireframing",
        "Final UI Design",
      ],
    },
    {
      type: "phase",
      id: "phase-research",
      navLabel: "Research",
      phase: "02 — Research & benchmarking",
      title: "Learning from five EV brands",
      description:
        "Competitive analysis and persona scenarios revealed how alert timing, mode access, and range visibility shape driver trust.",
    },
    {
      type: "table",
      id: "competitive",
      title: "How five EV brands handle the same moment",
      subtitle:
        "Competitive analysis across Hyundai, Ford, MG, Chevrolet, and BMW revealed patterns — and gaps — in alert timing, mode naming, and upfront access.",
      headers: ["Capability", "Hyundai", "Ford", "MG", "Chevrolet", "BMW"],
      rows: [
        ["Mode name", "ECO+", "ECO", "ECO", "LOW", "ECO Pro"],
        ["Upfront mode button", "Yes", "Yes", "Yes", "No", "Yes"],
        ["Reduced acceleration", "Yes", "Yes", "Yes", "Yes", "Yes"],
        ["Limited top speed", "Yes", "Yes", "Yes", "Yes", "Yes"],
        ["HVAC adjustment", "Yes", "Yes", "Yes", "Yes", "Yes"],
        ["Alert threshold", "≤20%", "≤20%", "≤20%", "≤25%", "≤10%"],
        ["Number of alerts", "1", "2", "1", "1", "2"],
      ],
    },
    {
      type: "split",
      id: "persona",
      title: "Meet Raj — when routine becomes urgent",
      content:
        "Raj is a working professional who forgets to charge before a 40 km commute. His story grounded every design decision in real pressure: reach the office on time, know exactly how far the car can travel, and find charging stations without detouring.",
      bullets: [
        "Pain points: no time to charge, long flows while driving feel dangerous",
        "Needs: early alerts, transparent range estimates, route-integrated charging",
        "Motivation: act before full depletion without losing focus on the road",
      ],
      image: {
        src: img("persona-raj.png"),
        alt: "Persona portrait for EV driver Raj",
      },
    },
    {
      type: "phase",
      id: "phase-design",
      navLabel: "Design",
      phase: "03 — Design decisions",
      title: "Tiered alerts and glanceable controls",
      description:
        "Every screen was filtered through one question: can a driver understand and act in under three seconds at speed?",
    },
    {
      type: "decision",
      id: "decision-alerts",
      number: "01",
      title: "We used tiered alerts instead of a single critical warning",
      context:
        "A single alarm at low battery forces a binary decision under stress. Tiered alerts give drivers time to plan without surprise.",
      rationale:
        "First alert at 30% prompts consideration; critical alert at 10% demands action — matching patterns from Hyundai and Ford while improving range visibility.",
    },
    {
      type: "findings",
      id: "insights",
      title: "Research insights that shaped the solution",
      subtitle: "Synthesized from competitive analysis and persona scenarios.",
      items: [
        {
          title: "Two alerts beat one",
          finding:
            "Brands with dual-threshold alerting (30% and 10%) gave drivers more recovery time without alert fatigue.",
          implication:
            "Designed a graduated alert system with escalating visual and audible urgency.",
        },
        {
          title: "Upfront access wins",
          finding:
            "Chevrolet's lack of a persistent mode button forced drivers into nested menus during stress.",
          implication:
            "Placed battery saver toggle on the primary dashboard with one-tap activation.",
        },
        {
          title: "Show the trade-off",
          finding:
            "Drivers hesitated to enable economy mode without understanding what they'd lose.",
          implication:
            "Added a clear 'limited facilities' summary before confirmation.",
        },
        {
          title: "Route context matters",
          finding:
            "Range anxiety decreases when charging options appear on the navigation path.",
          implication:
            "Integrated nearby charging stations along the active route to destination.",
        },
      ],
    },
    {
      type: "narrative",
      id: "ideation",
      title: "Seven principles for glanceable power management",
      content:
        "Every ideation note was filtered through a single question: can a driver understand and act on this in under three seconds at 60 km/h?",
      bullets: [
        "Simplest path to enable low battery mode — upfront button or single-popup toggle",
        "Show estimated range remaining in economy mode before activation",
        "Surface charging stations along the route to destination",
        "List which vehicle facilities are limited when mode is active",
        "Two alerts: first at 30%, critical at 10%",
        "At critical levels, estimate time until vehicle stops",
        "Increase audible alert intensity as battery depletes",
      ],
    },
    {
      type: "phase",
      id: "phase-ui",
      navLabel: "UI",
      phase: "04 — Final UI",
      title: "From dashboard to confirmation",
      description:
        "Key screens map the driver's path from low-battery awareness through economy mode activation and charging discovery.",
    },
    {
      type: "gallery",
      id: "ui-flow",
      title: "From dashboard to confirmation — the full journey",
      subtitle:
        "Five key screens mapping the driver's path from awareness to action.",
      columns: 3,
      images: [
        {
          src: asset("Pad 1.png"),
          alt: "EV infotainment dashboard showing low battery state",
          caption: "Low battery dashboard",
        },
        {
          src: asset("Pad 2.png"),
          alt: "First battery saver alert at 30%",
          caption: "First alert — 30%",
        },
        {
          src: asset("Pad 3.png"),
          alt: "Critical battery alert at low charge",
          caption: "Critical alert — 10%",
        },
        {
          src: asset("Pad 4.png"),
          alt: "Battery saver mode confirmation screen",
          caption: "Mode confirmation",
        },
        {
          src: asset("Pad 5.png"),
          alt: "Economy mode active dashboard",
          caption: "Economy mode active",
        },
        {
          src: asset("Pad 6.png"),
          alt: "Charging station route integration",
          caption: "Charging along route",
        },
      ],
    },
    {
      type: "gallery",
      id: "iterations",
      title: "Iteration across display states",
      subtitle: "Exploring layout density, alert prominence, and information hierarchy.",
      columns: 2,
      images: [
        {
          src: asset("Pad 7.png"),
          alt: "Dashboard iteration variant",
          caption: "Layout exploration",
        },
        {
          src: asset("Pad 8.png"),
          alt: "Alert modal iteration",
          caption: "Alert hierarchy",
        },
        {
          src: asset("Pad 9.png"),
          alt: "Range estimate display",
          caption: "Range visualization",
        },
        {
          src: asset("Pad 10.png"),
          alt: "Final dashboard state",
          caption: "Final dashboard",
        },
      ],
    },
  ],
  reflection: {
    title: "Safety is the real constraint",
    items: [
      {
        number: "01",
        title: "Milliseconds matter",
        content:
          "Automotive UX isn't about feature richness — it's about respecting the attention a driver can spare while the vehicle is in motion.",
      },
      {
        number: "02",
        title: "Benchmarking builds confidence",
        content:
          "Competitive analysis across five EV brands provided a safety net against reinventing established low-power patterns.",
      },
      {
        number: "03",
        title: "Show the trade-off",
        content:
          "Surfacing what changes when battery saver activates — range, climate, performance — increased clarity in review sessions.",
      },
    ],
  },
};
