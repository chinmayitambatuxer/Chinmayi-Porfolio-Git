import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("in-vehicle-experience", file);
const asset = (file: string) =>
  `/images/assets/${encodeURIComponent(file)}`;

// Landscape infotainment frames render at ~16:10.
const PAD = { width: 1024, height: 636 };

export const inVehicleExperience: CaseStudy = {
  slug: "in-vehicle-experience",
  client: "Automotive · EV concept",
  title: "In-Vehicle Experience",
  headline: "Making low-battery moments less stressful for EV drivers",
  summary:
    "A UX concept for a contextual Power Saving Mode that helps drivers understand remaining range, conserve energy, and find charging support — without adding unnecessary distraction while driving.",
  tags: ["HMI Design", "EV", "Infotainment", "Safety-first UX"],
  heroImage: img("hero-ev-charging.png"),
  theme: {
    accent: "#2A7B6F",
    accentSoft: "#EDF7F5",
    accentMuted: "#5BA898",
  },
  domain: "Automotive HMI / EV",
  role: "UX / Product Designer",
  team: "Solo design — concept project",
  timeline: "2 MONTHS",
  platform: "In-vehicle infotainment touchscreen",
  overview:
    "As an EV's battery drops, the driver has to make increasingly important decisions: conserve energy, keep going, or find a charger. This concept explores how the infotainment system can make the driver aware of a low-battery situation and let them activate a Power Saving Mode with minimal effort while the car is moving.",
  contribution: [
    "Requirement mapping and systems analysis",
    "Competitive benchmarking across 5 EV brands",
    "Persona and scenario development",
    "Ideation and interaction directions",
    "Wireframing the end-to-end flow",
    "Final UI, visual hierarchy, and safety rationale",
  ],
  metrics: [
    { value: "5", label: "EV brands benchmarked" },
    { value: "6", label: "Design stages" },
    { value: "2", label: "Alert tiers" },
  ],
  goal: "Help an EV driver understand a low-battery situation and activate Power Saving Mode with minimal cognitive and physical effort — while the car is moving.",
  challenge:
    "A low battery affects speed, range, climate, and safety systems all at once. The interface had to explain the situation and offer one clear action without pulling the driver's attention off the road.",
  outcome:
    "A contextual, tiered experience — early and critical alerts, one-tap Power Saving Mode, live range visibility, and charging-station support — that turns a stressful low-battery moment into a guided sequence.",
  outcomeMetrics: [
    {
      value: "5",
      label: "Brands benchmarked",
      description: "Hyundai, Ford, MG, Chevrolet, and BMW efficiency modes",
    },
    {
      value: "6",
      label: "Design stages",
      description: "From requirement gathering through final UI",
    },
    {
      value: "2",
      label: "Alert tiers",
      description: "Early warning at ~30%, critical warning at ~20%",
    },
  ],
  sections: [
    // 01 — The Challenge
    {
      type: "phase",
      id: "phase-challenge",
      navLabel: "Challenge",
      phase: "Phase 1 — The Challenge",
      title: "When the battery gets low, every decision matters",
      description:
        "Electric vehicles change the relationship between driving and energy. As the battery drops, the driver has to decide — conserve, continue, or charge — often while already running late and moving at speed.",
    },
    {
      type: "narrative",
      id: "challenge-questions",
      title: "Design an interaction, not another warning",
      content:
        "The task was to design an infotainment interaction that helps a driver understand a low-battery situation and engage a Power Saving Mode while the vehicle is being driven. The experience needed to answer three questions quickly — without long flows, complex controls, or sustained attention.",
      layout: "highlights",
      bullets: [
        "What is happening to my battery?",
        "What can I do right now to extend my remaining range?",
        "Can I still reach my destination?",
      ],
    },
    {
      type: "quote",
      id: "challenge-statement",
      content:
        "Design an in-vehicle interaction that makes a driver aware of a low-battery situation and enables them to activate a Power Saving Mode with minimal cognitive and physical effort while driving.",
    },
    // 02 — The Problem
    {
      type: "phase",
      id: "phase-problem",
      navLabel: "Problem",
      phase: "Phase 2 — Understanding the Problem",
      title: "Low battery is not simply a percentage",
      description:
        "A battery number on its own doesn't tell a driver what the situation means. Before sketching a screen, I mapped what a low state of charge actually changes across the vehicle.",
    },
    {
      type: "narrative",
      id: "requirements",
      title: "What low battery actually changes",
      content:
        "A low state of charge ripples across the whole driving experience — not just the range figure. These impacts shaped which information belonged in persistent UI versus interruptive alerts.",
      bullets: [
        "Reduced available power and performance",
        "Reduced driving range as charge falls",
        "Reduced acceleration and top speed (RPM throttling)",
        "Limited air-conditioning and heating",
        "Restricted use of some vehicle functions",
        "Diminished safety margins — brakes, airbags, stability control",
      ],
    },
    {
      type: "quote",
      id: "problem-insight",
      content:
        "The driver needs an actionable interpretation of battery status — not just a battery number.",
    },
    {
      type: "narrative",
      id: "opportunity",
      title: "From \u201cshow low battery\u201d to \u201chelp the driver decide\u201d",
      content:
        "Instead of presenting yet another warning to interpret, the system can connect the dots into a single chain of reasoning: battery state \u2192 consequence \u2192 recommended action \u2192 remaining range \u2192 next step. That reframing turned a status display into decision support.",
    },
    {
      type: "process",
      id: "approach",
      title: "Six stages from requirement to road-ready flow",
      steps: [
        "Requirement Gathering",
        "Competitive Analysis",
        "Persona Development",
        "Ideation",
        "Wireframing",
        "Final UI Design",
      ],
      footnote:
        "A concept project, so the final stage is a validation plan rather than a shipped, tested product.",
    },
    // 03 — Research
    {
      type: "phase",
      id: "phase-research",
      navLabel: "Research",
      phase: "Phase 3 — Research & Benchmarking",
      title: "Learning from five EV brands",
      description:
        "A competitive review looked at how existing EVs communicate low-battery and efficiency modes — naming, thresholds, and how many times they alert the driver.",
    },
    {
      type: "table",
      id: "competitive",
      title: "Competitive Analysis",
      subtitle:
        "Conducted competitive analysis to understand how EV brands use their low-battery mode and its functions — naming, thresholds, alert behaviour, and which vehicle systems are affected.",
      layout: "benchmark",
      headers: [],
      rows: [],
      benchmark: {
        brands: ["Hyundai", "Ford", "MG", "Chevrolet", "BMW"],
        rows: [
          {
            label: "Mode Name",
            values: [
              "ECO+ mode",
              "ECO mode",
              "ECO mode",
              "LOW mode",
              "ECO Pro mode",
            ],
          },
          {
            label: "Icon",
            values: [
              {
                image: img("benchmark-icon-hyundai.png"),
                alt: "Hyundai ECO+ mode control",
              },
              {
                image: img("benchmark-icon-ford.png"),
                alt: "Ford ECO mode button",
              },
              {
                image: img("benchmark-icon-mg.png"),
                alt: "MG ECO mode selector",
              },
              "-",
              {
                image: img("benchmark-icon-bmw.png"),
                alt: "BMW ECO Pro mode button",
              },
            ],
          },
          {
            label: "Upfront low-battery mode button",
            values: [true, true, true, false, true],
          },
          {
            label: "Acceleration is reduced",
            values: [true, true, true, true, true],
          },
          {
            label: "Top speed is limited",
            values: [true, true, true, true, true],
          },
          {
            label: "Air conditioning & heating systems are adjusted",
            values: [true, true, true, true, true],
          },
          {
            label: "Extends range",
            values: [true, false, true, true, true],
          },
          {
            label: "Driver is prompted to drive more efficiently",
            values: [true, true, true, true, true],
          },
          {
            label: "Display alert",
            values: [true, true, true, true, true],
          },
          {
            label: "Audible alert",
            values: [true, true, true, true, true],
          },
          {
            label: "No. of alert",
            values: ["1", "2", "1", "1", "2"],
          },
          {
            label: "Alert percentage",
            values: [
              "20% or less",
              "20% or less",
              "20% or less",
              "25% or less",
              "10% or less",
            ],
          },
        ],
      },
    },
    {
      type: "findings",
      id: "research-insights",
      title: "What the research suggested",
      subtitle:
        "Across the reviewed examples, efficiency modes shared the same ingredients — and the same gap.",
      items: [
        {
          title: "A recognisable mode",
          finding:
            "Every brand exposes a named efficiency mode (ECO, ECO+, LOW), but drivers still have to know when and why to use it.",
          implication:
            "Surface the mode contextually, at the moment it becomes relevant, instead of hiding it in settings.",
        },
        {
          title: "A visible system state",
          finding:
            "Modes reduce energy use, but the active state is often communicated weakly once enabled.",
          implication:
            "Make \u201cPower Saving Mode is on\u201d unmistakable and persistent on the dashboard.",
        },
        {
          title: "A single low-battery notification",
          finding:
            "Most brands alert once at a fixed threshold, leaving little recovery time before the situation is critical.",
          implication:
            "Escalate in tiers rather than firing one late, high-stress warning.",
        },
        {
          title: "Little connection to range",
          finding:
            "Alerts rarely explain the consequence — how far the car can still travel — so drivers can't judge urgency.",
          implication:
            "Tie the recommendation to estimated remaining range so the driver understands why it matters.",
        },
      ],
    },
    // 04 — The User
    {
      type: "phase",
      id: "phase-user",
      navLabel: "The User",
      phase: "Phase 4 — Defining the User",
      title: "A driver who is already under pressure",
      description:
        "A realistic commute scenario grounded every decision in the pressure of a real morning — not an idealised, unhurried driver.",
    },
    {
      type: "split",
      id: "persona",
      layout: "profile",
      title: "Meet Raj — when a routine commute turns urgent",
      label: "Persona",
      content:
        "Raj is a 28-year-old IT engineer in Pune with a predictable ~40 km commute. One morning he forgets to charge and leaves with under 40% battery — already running late. He isn't thinking about EV technology; he's thinking about whether he'll make it.",
      bullets: [
        "Goals: preserve remaining battery, reach the office on time, know how far the car can travel",
        "Secondary: an early warning before critical, and charging stations along the route",
        "Pain points: no time to charge, and long flows while driving feel unsafe and frustrating",
      ],
      image: {
        src: img("persona-raj.png"),
        alt: "Persona portrait for EV driver Raj",
        width: 298,
        height: 298,
      },
    },
    {
      type: "quote",
      id: "persona-implication",
      content:
        "The more urgent the driving situation becomes, the simpler the interaction needs to become.",
    },
    // 05 — Reframing
    {
      type: "phase",
      id: "phase-reframe",
      navLabel: "Reframing",
      phase: "Phase 5 — Reframing the Problem",
      title: "From activating a feature to supporting a decision",
      description:
        "The brief could be read as \u201cbuild a way to turn on low-battery mode.\u201d The persona pushed it somewhere more useful.",
    },
    {
      type: "quote",
      id: "reframe",
      content:
        "How might we help a driver conserve energy and maintain confidence about reaching their destination — without increasing distraction?",
    },
    {
      type: "principles",
      id: "principles",
      title: "Three principles that guided the design",
      layout: "cards",
      items: [
        {
          title: "Explain the situation",
          description:
            "Don't rely on a battery percentage alone. Communicate that the battery is low or draining quickly, in human terms.",
        },
        {
          title: "Recommend an action",
          description:
            "Surface Power Saving Mode when it is relevant, instead of making the driver search for it while driving.",
        },
        {
          title: "Preserve confidence",
          description:
            "Show estimated remaining range and provide a path to nearby charging stations, so the driver never hits a dead end.",
        },
      ],
    },
    // 06 — Ideation
    {
      type: "phase",
      id: "phase-ideation",
      navLabel: "Ideation",
      phase: "Phase 6 — Ideation",
      title: "Designing for the driver's next decision",
      description:
        "Several interaction directions were explored, each trading off speed of access against how much the driver has to understand.",
    },
    {
      type: "cards",
      id: "directions",
      title: "Four interaction directions",
      subtitle:
        "Each direction was weighed for how well it fits a moving-vehicle context.",
      cards: [
        {
          title: "Upfront control",
          description:
            "Direct access to the efficiency mode. Fast — but relies on the driver knowing when and why to use it.",
          tag: "Direction A",
        },
        {
          title: "Contextual pop-up",
          description:
            "A recommendation with a clear activation action. Discoverable and contextual — but can disrupt if overused.",
          tag: "Direction B",
        },
        {
          title: "Range-led recommendation",
          description:
            "Pair the battery warning with estimated remaining range. Connects state to a real consequence — needs careful hierarchy.",
          tag: "Direction C",
        },
        {
          title: "Charging support",
          description:
            "A direct route to nearby charging stations. A recovery path when conserving energy isn't enough — must stay secondary to driving.",
          tag: "Direction D",
        },
      ],
    },
    {
      type: "decision",
      id: "selected-direction",
      number: "01",
      title: "Combine contextual alerts, one-step activation, range visibility, and charging support",
      context:
        "No single direction was enough on its own: upfront control assumes knowledge, a pop-up alone can nag, and charging support only helps once the driver is already worried.",
      rationale:
        "The final concept blends all four — progressively communicating urgency instead of presenting one large warning, and always keeping the recommended action a single tap away.",
    },
    // 07 — Alert Strategy & IA
    {
      type: "phase",
      id: "phase-alerts",
      navLabel: "Alert Strategy",
      phase: "Phase 7 — Alert Strategy & Architecture",
      title: "Escalate information, not interaction",
      description:
        "The concept explores multiple battery states so the driver gets an appropriate level of information as the situation becomes more critical — while the interaction stays short.",
    },
    {
      type: "narrative",
      id: "alert-strategy",
      title: "Graduated urgency, one action",
      content:
        "Rather than a single late alarm, the system steps up its tone as charge falls — but every state keeps the same one-tap action so the driver is never asked to do more as the situation gets harder.",
      bullets: [
        "Early warning (~30%): introduce the Power Saving recommendation while there is still time to act",
        "Critical warning (~20%): communicate that the battery is draining quickly and reinforce the action",
        "Confirmation: once activated, confirm the new state clearly",
        "Critical state: surface estimated remaining range and guide the driver toward charging",
      ],
    },
    {
      type: "principles",
      id: "information-architecture",
      title: "A five-level information hierarchy",
      subtitle:
        "The driver's primary decision stays at the top; supporting detail is revealed progressively.",
      layout: "hierarchy",
      items: [
        {
          title: "Level 1 — Immediate status",
          description: "Battery is low / draining quickly.",
        },
        {
          title: "Level 2 — Consequence",
          description: "Approximately how much range remains.",
        },
        {
          title: "Level 3 — Recommended action",
          description: "Turn on Power Saving Mode.",
        },
        {
          title: "Level 4 — Recovery option",
          description: "Find nearby charging stations.",
        },
        {
          title: "Level 5 — System impact",
          description:
            "Understand which vehicle functions are being limited or adjusted.",
        },
      ],
    },
    // 08 — Wireframing
    {
      type: "phase",
      id: "phase-wireframes",
      navLabel: "Wireframing",
      phase: "Phase 8 — Wireframing",
      title: "Testing the sequence before the visuals",
      description:
        "Low-fidelity frames were used to test the flow — normal driving \u2192 low battery \u2192 recommendation \u2192 activation \u2192 confirmation \u2192 power-saving dashboard — before investing in visual design.",
    },
    {
      type: "narrative",
      id: "wireframe-decision",
      title: "One primary action per state",
      content:
        "The key wireframing decision was to design around a single primary action in each state. Instead of sending the driver into nested settings, the relevant action is brought into the current driving context. A persistent set of information stayed on screen throughout: battery percentage, estimated range, navigation, power-saving state, and charging access.",
    },
    {
      type: "gallery",
      id: "wireframe-flow",
      title: "The wireframe flow",
      subtitle:
        "The full low-battery sequence in greyscale, before any visual styling.",
      columns: 3,
      images: [
        {
          src: asset("Pad 6.png"),
          alt: "Wireframe of the low-battery dashboard",
          caption: "Low-battery dashboard — 30%, 40 km range",
          width: PAD.width,
          height: PAD.height,
        },
        {
          src: asset("Pad 7.png"),
          alt: "Wireframe of the first power-saving alert",
          caption: "First alert — recommend Power Saving Mode",
          width: PAD.width,
          height: PAD.height,
        },
        {
          src: asset("Pad 8.png"),
          alt: "Wireframe of the critical battery alert",
          caption: "Critical alert — battery draining fast",
          width: PAD.width,
          height: PAD.height,
        },
        {
          src: asset("Pad 9.png"),
          alt: "Wireframe of the mode confirmation",
          caption: "Confirmation — mode turned on",
          width: PAD.width,
          height: PAD.height,
        },
        {
          src: asset("Pad 10.png"),
          alt: "Wireframe of the power-saving dashboard",
          caption: "Power-saving dashboard — range + charging",
          width: PAD.width,
          height: PAD.height,
        },
      ],
    },
    // 09 — Final UI
    {
      type: "phase",
      id: "phase-ui",
      navLabel: "Final UI",
      phase: "Phase 9 — Final UI",
      title: "A low-distraction visual hierarchy",
      description:
        "The final UI builds on the existing EV infotainment environment rather than introducing a separate experience — keeping the driver's most important decision visually dominant.",
    },
    {
      type: "narrative",
      id: "ui-hierarchy",
      title: "What the driver sees first",
      content:
        "The visual hierarchy keeps the battery state, remaining range, and recommended action primary; navigation, weather, media, and climate stay secondary; supporting system detail is tertiary.",
      bullets: [
        "Primary: battery state, remaining range, recommended action",
        "Secondary: navigation, weather, media, climate controls",
        "Tertiary: supporting system information",
      ],
    },
    {
      type: "flow",
      id: "final-ui",
      title: "From awareness to assistance — step by step",
      subtitle:
        "The five states a driver moves through, and the reasoning behind each one.",
      steps: [
        {
          step: "01",
          title: "Awareness",
          content:
            "The low-battery state appears inside the normal driving context rather than on a separate screen, so the driver picks it up at a glance without leaving navigation or media.",
          bullets: [
            "Battery percentage and estimated range shown together",
            "No interruption yet — awareness before escalation",
          ],
          src: asset("Pad 1.png"),
          alt: "EV infotainment dashboard showing a low battery state",
          width: PAD.width,
          height: PAD.height,
        },
        {
          step: "02",
          title: "First recommendation",
          content:
            "At around 30% the system offers Power Saving Mode with a one-tap toggle. Surfacing it early gives the driver time to act before the situation turns critical.",
          bullets: [
            "The action sits where the driver is already looking",
            "No trip into vehicle settings required",
          ],
          src: asset("Pad 2.png"),
          alt: "First power-saving recommendation at around 30 percent",
          width: PAD.width,
          height: PAD.height,
        },
        {
          step: "03",
          title: "Critical warning",
          content:
            "At around 20% the tone escalates to red and states that the battery is draining quickly — but the interaction itself does not get harder. The action stays exactly the same single tap.",
          bullets: [
            "Urgency escalates through colour and wording, not more steps",
            "Escalate information, not interaction",
          ],
          src: asset("Pad 3.png"),
          alt: "Critical battery warning in red",
          width: PAD.width,
          height: PAD.height,
        },
        {
          step: "04",
          title: "Confirmation",
          content:
            "Once activated, the system confirms the new state so there is no ambiguity about whether the mode is on — closing the loop without an extra confirmation dialog.",
          bullets: [
            "Removes doubt that the action succeeded",
            "No additional tap to dismiss a modal",
          ],
          src: asset("Pad 5.png"),
          alt: "Confirmation that power saving mode is on",
          width: PAD.width,
          height: PAD.height,
        },
        {
          step: "05",
          title: "Assistance",
          content:
            "The dashboard now shifts from warning to helping: Power Saving Mode is visibly on, remaining range is front and centre, and charging stations are one tap away.",
          bullets: [
            "Remaining battery and distance the car can travel",
            "Locate charge points without leaving the drive context",
          ],
          src: asset("Pad 4.png"),
          alt: "Power-saving dashboard with charging station access",
          width: PAD.width,
          height: PAD.height,
        },
      ],
    },
    {
      type: "decision",
      id: "decision-recommendation",
      number: "02",
      title: "Make the recommended action more prominent than the supporting information",
      context:
        "In a moving vehicle, competing calls to action force the driver to choose under stress.",
      rationale:
        "The activation toggle is the visual focus of each alert, while range and status stay quietly in view — so the safe action is always the obvious one.",
    },
    // 10 — Safety
    {
      type: "phase",
      id: "phase-safety",
      navLabel: "Safety",
      phase: "Phase 10 — Safety Considerations",
      title: "Safety was a design constraint, not a checklist",
      description:
        "Because the interaction happens while driving, the design worked to minimise interaction steps, reading time, text density, decision complexity, and the need for precise touch.",
    },
    {
      type: "principles",
      id: "safety-principles",
      title: "Six safety-first rules",
      layout: "cards",
      items: [
        {
          title: "Prioritise glanceability",
          description:
            "The most important information should be understood in a single glance.",
        },
        {
          title: "One primary action",
          description:
            "Avoid presenting several competing calls to action in any state.",
        },
        {
          title: "Progressive disclosure",
          description:
            "Expose detailed information only when it is actually required.",
        },
        {
          title: "Auditory reinforcement",
          description:
            "Use audible alerts to supplement visual notifications when appropriate.",
        },
        {
          title: "Avoid unnecessary confirmation",
          description:
            "Don't add steps when the system can safely communicate state directly.",
        },
        {
          title: "Keep navigation available",
          description:
            "Charging support stays reachable without forcing the driver through unrelated settings.",
        },
      ],
    },
    {
      type: "quote",
      id: "safety-note",
      content:
        "A real vehicle implementation would need validation against automotive HMI, driver-distraction, functional-safety, and human-factors requirements.",
    },
    // 11 — Outcome & Validation
    {
      type: "phase",
      id: "phase-outcome",
      navLabel: "Outcome",
      phase: "Phase 11 — Outcome & Next Steps",
      title: "From warning to assistance",
      description:
        "The concept turns a potentially stressful low-battery situation into a guided sequence — and sets up what to validate next.",
    },
    {
      type: "narrative",
      id: "outcome-model",
      title: "The core interaction model",
      content:
        "Instead of \u201clow battery \u2192 driver figures it out,\u201d the experience becomes a short, legible progression the driver can follow at a glance.",
      layout: "highlights",
      bullets: [
        "Detect — recognise that battery conditions need attention",
        "Explain — communicate the state in human-readable terms",
        "Recommend — present the single most useful action",
        "Confirm — show that the system has changed state",
        "Assist — help the driver manage the remaining journey",
      ],
    },
    {
      type: "table",
      id: "validation-plan",
      title: "What I'd validate next",
      subtitle:
        "As a concept, the next phase is validation rather than assuming the design is complete.",
      headers: ["Focus", "Question", "What to test"],
      rows: [
        [
          "Usability",
          "Can drivers do the core tasks quickly and confidently?",
          "Recognise the low-battery state; understand estimated range; identify and activate the recommended action; confirm the mode is on and find a charging station",
        ],
        [
          "Driver distraction",
          "What is the real cost of attention?",
          "Glance duration; total interaction time; number of touch interactions; missed or incorrect actions; comprehension of the warnings",
        ],
        [
          "System behaviour",
          "Does this match real vehicle logic?",
          "Battery thresholds and range estimation; functions affected by Power Saving Mode; alert escalation and audible alerts; charging-station routing",
        ],
      ],
    },
  ],
  reflection: {
    title: "Right information, right moment, least effort",
    items: [
      {
        number: "01",
        title: "Not more information — the right information",
        content:
          "In a moving vehicle, good UX isn't about giving the driver more. It's about giving them the right information at the right moment with the least possible effort.",
      },
      {
        number: "02",
        title: "Feature-first to driver-first",
        content:
          "The biggest shift was moving from \u201chow do we turn on battery saver?\u201d to \u201cwhat does the driver need to know and do when energy becomes uncertain?\u201d That reframe shaped everything downstream.",
      },
      {
        number: "03",
        title: "Urgency demands simplicity",
        content:
          "The more critical the moment, the simpler the interaction had to become — a single, obvious action the driver could take without looking away for long.",
      },
    ],
  },
};
