import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("airport-travel-experience", file);

export const airportTravelExperience: CaseStudy = {
  slug: "airport-travel-experience",
  client: "EaseAirport",
  title: "EaseAirport",
  headline: "Reducing airport uncertainty, one decision at a time",
  summary:
    "A mobile journey companion that helps travellers know what is happening, where to go, and what to do next — through guided boarding, live flight updates, navigation, and amenity discovery.",
  tags: ["Mobile App", "Travel UX", "Wayfinding", "Journey Design"],
  heroImage: img("layover.png"),
  heroLayout: "phone",
  theme: {
    accent: "#4A6FA5",
    accentSoft: "#EEF3FA",
    accentMuted: "#7A9BC4",
  },
  domain: "Travel / Airport Experience",
  role: "UX Designer",
  team: "Solo design — concept project",
  timeline: "2022",
  platform: "Mobile application",
  overview:
    "Airports are designed to move people efficiently — but when a gate changes, a flight is delayed, or a terminal becomes unfamiliar, the journey quickly becomes a series of questions. EaseAirport brings orientation, awareness, and progress into one contextual mobile experience.",
  contribution: [
    "Problem framing and traveller pain-point mapping",
    "Persona and end-to-end journey mapping",
    "Feature prioritisation (must-have vs future)",
    "Information architecture and wireframe flows",
    "High-fidelity UI for boarding, disruption, and amenities",
  ],
  metrics: [
    { value: "3", label: "Core pillars" },
    { value: "5", label: "Journey stages" },
    { value: "Mobile", label: "Platform" },
  ],
  goal:
    "Reduce traveller uncertainty inside the airport by connecting live flight status, guided boarding, navigation, and amenity discovery in one contextual experience.",
  challenge:
    "The underlying problem is not navigation alone — it is uncertainty. When a traveller does not know what happens next, where to go, or how much time they have, even a familiar airport journey becomes stressful.",
  outcome:
    "A journey companion organised around the traveller's path — not isolated features — designed to answer three questions: what is happening, where to go, and what to do next.",
  outcomeMetrics: [
    {
      value: "3",
      label: "Core pillars",
      description: "Know what is happening · where to go · what to do next",
    },
    {
      value: "5",
      label: "Journey stages",
      description: "Check-in through arrival and check-out",
    },
    {
      value: "5",
      label: "Primary areas",
      description: "Home · Boarding · Navigate · Amenities · Profile",
    },
  ],
  sections: [
    // 01 — The Story
    {
      type: "phase",
      id: "phase-story",
      navLabel: "Story",
      phase: "01 — The Story",
      title: "When the airport stops feeling predictable",
      description:
        "Airports are built around movement — check in, drop baggage, clear security, find the gate, board. For a traveller, the experience is rarely that linear.",
    },
    {
      type: "narrative",
      id: "story-hook",
      title: "A terminal full of information, a traveller full of questions",
      content:
        "A terminal can be huge. A gate can change. A flight can be delayed by hours. A passenger may suddenly have time to kill but no idea where to find a restroom, food, a charging point, or even the next boarding gate.\n\nThe original concept behind EaseAirport started with a simple question:",
    },
    {
      type: "quote",
      id: "hmw",
      content:
        "How might we make the airport experience easier to understand and easier to navigate, especially when a traveller's plan changes?",
    },
    {
      type: "narrative",
      id: "three-pillars",
      label: "The response",
      title: "Three things every traveller needs in the moment",
      content:
        "The proposed solution brings together three critical parts of the airport journey — not as separate features, but as one continuous experience:",
      layout: "highlights",
      bullets: [
        "Know what is happening — live flight, gate, and delay updates",
        "Know where to go — airport maps and contextual navigation",
        "Know what to do next — a guided boarding process and access to useful amenities",
      ],
    },
    // 02 — Problem
    {
      type: "phase",
      id: "phase-problem",
      navLabel: "Problem",
      phase: "02 — The Problem",
      title: "The real problem is uncertainty",
      description:
        "Travellers can experience multiple problems simultaneously inside an airport. The design opportunity is to turn scattered information into an actionable next step.",
    },
    {
      type: "cards",
      id: "brainstorming",
      title: "Brainstorming on the problems faced inside the airport",
      subtitle:
        "Early exploration mapped four recurring friction points from the traveller's perspective.",
      cards: [
        {
          title: "Travellers getting lost",
          description:
            "Some people have strong spatial awareness, others not so much — but most have been lost at least once inside a large or unfamiliar terminal.",
          tag: "Navigation",
        },
        {
          title: "Confusion in airport terminals",
          description:
            "A flight may show one terminal at booking, but the carrier can reassign it later — leaving passengers at the wrong gate with minutes to spare.",
          tag: "Information",
        },
        {
          title: "Flights can be delayed",
          description:
            "Delays create waiting time without guidance. Finding restrooms, food, or a place to charge becomes harder when the traveller does not know how long they have.",
          tag: "Disruption",
        },
        {
          title: "Forgetting or losing documents",
          description:
            "Important travel documents need to stay accessible through check-in and boarding — losing track of them creates severity at critical moments.",
          tag: "Documents",
        },
      ],
    },
    {
      type: "quote",
      id: "problem-framing",
      content:
        "Create a single, contextual experience that tells travellers what is happening, what they need to do next, and where they need to go.",
    },
    // 03 — Persona
    {
      type: "phase",
      id: "phase-persona",
      navLabel: "Persona",
      phase: "03 — The Traveller",
      title: "Shreyas Singh — when a routine trip turns uncertain",
      description:
        "A business analyst travelling Pune → Mumbai → Delhi. Mumbai is a layover. Then the first flight is delayed — and a predictable journey becomes an uncertain waiting period.",
    },
    {
      type: "split",
      id: "persona",
      layout: "profile",
      title: "Meet Shreyas Singh",
      label: "Persona",
      content:
        "Shreyas is a 28-year-old business analyst who values efficiency and is comfortable with technology. He is not looking for dozens of features — he needs confidence in the next step when his plan changes mid-journey.",
      bullets: [
        "Goals: real-time flight and gate information, airport navigation, quick amenity access, clear boarding progress",
        "Traits: well-organised, detail-oriented, tech-savvy, values efficiency and convenience",
        "Pain points: navigation anxiety in large airports, information overload, disruption uncertainty, amenity discovery at the wrong moment",
      ],
      image: {
        src: img("persona-shreyas.png"),
        alt: "Persona portrait for Shreyas Singh, business analyst and frequent traveller",
        width: 160,
        height: 160,
      },
    },
    {
      type: "image",
      id: "persona-detail",
      title: "Interests, traits, and needs",
      caption:
        "Persona artifact from the Figma exploration — goals, traits, and pain points that shaped feature priorities.",
      src: img("persona-traits.png"),
      alt: "EaseAirport persona detail showing Shreyas Singh's interests, traits, goals, and pain points",
      layout: "contained",
      width: 1200,
      height: 500,
    },
    // 04 — Journey
    {
      type: "phase",
      id: "phase-journey",
      navLabel: "Journey",
      phase: "04 — User Journey",
      title: "Mapping the airport from check-in to arrival",
      description:
        "The journey was mapped across five stages — each revealing where uncertainty peaks and where the product can intervene.",
    },
    {
      type: "image",
      id: "journey-map",
      title: "User journey mapping",
      caption:
        "Check-in → Boarding (1st flight) → Layover → Boarding (2nd flight) → Check-out. Each stage surfaces what the traveller is doing, what makes it difficult, and where the product opportunity lies.",
      src: img("journey-stages.png"),
      alt: "EaseAirport user journey map showing five airport travel stages",
      layout: "full",
      width: 1543,
      height: 800,
    },
    {
      type: "findings",
      id: "journey-insights",
      title: "Four recurring needs across the journey",
      subtitle:
        "The journey mapping exercise surfaced needs that became the foundation for the feature architecture.",
      items: [
        {
          title: "Orientation",
          finding:
            "Travellers need to understand where they are and where they need to go — especially across terminals and floors.",
          implication:
            "Navigation should connect digital instructions to physical airport landmarks, not just show a map.",
        },
        {
          title: "Progress",
          finding:
            "Travellers need to know what step they are on and what comes next in the boarding sequence.",
          implication:
            "Break the airport process into a progressive checklist rather than asking travellers to remember the full hierarchy.",
        },
        {
          title: "Awareness",
          finding:
            "Flight information is distributed across screens and announcements — gate changes are easy to miss.",
          implication:
            "Surface important changes before the traveller has to search for them.",
        },
        {
          title: "Assistance",
          finding:
            "Delays create unexpected time — but travellers struggle to find restrooms, food, or charging when they need them most.",
          implication:
            "Amenity discovery belongs inside the journey context, not as a separate directory.",
        },
      ],
    },
    // 05 — Opportunities
    {
      type: "phase",
      id: "phase-opportunities",
      navLabel: "Opportunities",
      phase: "05 — Pain Points to Opportunities",
      title: "Turning traveller problems into product direction",
      description:
        "The brainstorming exercise translated pain points into opportunities — establishing a principle that the app should turn information into an actionable next step.",
    },
    {
      type: "table",
      id: "pain-opportunities",
      title: "From traveller problem to UX opportunity",
      layout: "styled",
      headers: ["Traveller problem", "UX opportunity"],
      rows: [
        ["\"Where do I go?\"", "Contextual airport navigation"],
        ["\"What do I do next?\"", "Step-by-step boarding process"],
        ["\"Did my flight change?\"", "Live flight and gate updates"],
        ["\"Where can I find something?\"", "Amenity discovery and directions"],
        ["\"I have a long delay. What now?\"", "Recommendations and future accommodation support"],
        ["\"Where are my documents?\"", "Future document repository / DigiLocker integration"],
        ["\"I don't understand this airport.\"", "Floor-wise, gate-wise, and airport-wise layouts"],
      ],
    },
    // 06 — Prioritisation
    {
      type: "phase",
      id: "phase-prioritisation",
      navLabel: "Prioritise",
      phase: "06 — Feature Prioritisation",
      title: "Must-have capabilities vs future opportunities",
      description:
        "The feature list was divided to focus the MVP on the moments of highest uncertainty — boarding, navigation, and flight status.",
    },
    {
      type: "two-column",
      id: "feature-prioritisation",
      title: "What ships first, what comes later",
      subtitle:
        "Concept-level prioritisation from the Figma exploration — not formal business sign-off.",
      columns: [
        {
          heading: "Must have",
          items: [
            "Guided boarding process — Check-in → Baggage → Security → Boarding Gate → Departure",
            "Airport navigation — floor maps, directional navigation, gate navigation, amenity locations",
            "Flight status — delay updates, gate changes, arrival/departure status, alerts",
          ],
        },
        {
          heading: "Good to have",
          items: [
            "Accommodation suggestions for long delays",
            "Language and culture assistance for international travellers",
            "Document storage — potential DigiLocker integration",
            "Contextual notifications for gate changes and delays",
            "Future: ticket booking and luggage support",
          ],
        },
      ],
    },
    // 07 — Information Architecture
    {
      type: "phase",
      id: "phase-ia",
      navLabel: "Architecture",
      phase: "07 — Information Architecture",
      title: "Organised around the journey, not isolated features",
      description:
        "The experience is structured around five primary areas — each answering a different question the traveller asks at a different moment.",
    },
    {
      type: "principles",
      id: "information-architecture",
      title: "Home · Boarding · Navigate · Amenities · Profile",
      layout: "cards",
      items: [
        {
          title: "Home",
          description:
            "The personalised starting point — current flight details, timing, terminal, gate, layover information, and journey updates.",
        },
        {
          title: "Boarding",
          description:
            "The action-oriented checklist — current step, completed steps, upcoming steps, and boarding information.",
        },
        {
          title: "Navigate",
          description:
            "The spatial layer — airport layout, floor maps, directional navigation, gate navigation, and amenity locations.",
        },
        {
          title: "Amenities",
          description:
            "The discovery layer — search and locate food, restrooms, charging stations, and other facilities with directions.",
        },
        {
          title: "Profile",
          description:
            "The personal layer — traveller information and a potential home for future document and preference management.",
        },
      ],
    },
    // 08 — Process & Wireframes
    {
      type: "phase",
      id: "phase-process",
      navLabel: "Process",
      phase: "08 — UX Process",
      title: "From discovery to interface",
      description:
        "The process moved from understanding airport pain points through journey mapping, prioritisation, structure, and design.",
    },
    {
      type: "process",
      id: "ux-process",
      title: "Discover → Define → Map → Prioritise → Structure → Design → Validate",
      steps: [
        "Discover — understand airport pain points and the traveller's context",
        "Define — frame the core problem around uncertainty and navigation",
        "Map — visualise the airport journey and identify friction points",
        "Prioritise — separate must-have capabilities from future opportunities",
        "Structure — define information architecture and user flow",
        "Design — translate the flow into wireframes and high-fidelity UI",
        "Validate — test proposed scenarios (see validation plan below)",
      ],
    },
    {
      type: "gallery",
      id: "wireframe-flow",
      title: "Wireframe flow — from login to layover",
      subtitle:
        "The wireframe flow established the functional journey before investing in visual design.",
      columns: 3,
      device: "phone",
      images: [
        {
          src: img("wireframe-splash.png"),
          alt: "EaseAirport splash screen wireframe",
          caption: "Open app",
        },
        {
          src: img("wireframe-login.png"),
          alt: "EaseAirport login wireframe",
          caption: "Log in",
        },
        {
          src: img("wireframe-home.png"),
          alt: "EaseAirport personalised home wireframe",
          caption: "Personalised home",
        },
        {
          src: img("wireframe-boarding.png"),
          alt: "EaseAirport boarding process wireframe",
          caption: "Boarding checklist",
        },
      ],
    },
    // 09 — UX Decisions
    {
      type: "phase",
      id: "phase-decisions",
      navLabel: "Decisions",
      phase: "09 — Key UX Decisions",
      title: "Three interactions that define the product",
      description:
        "Each decision connects a traveller problem to a specific interface pattern — boarding progress, disruption awareness, and in-context amenity discovery.",
    },
    {
      type: "decision",
      id: "decision-boarding",
      number: "01",
      title: "Turn the airport process into a progressive checklist",
      context:
        "Travellers have to mentally track several airport steps — check-in, baggage, security, gate, departure. Remembering the full hierarchy adds cognitive load when time is limited.",
      rationale:
        "Instead of asking the traveller to figure out the airport, the boarding screen breaks the journey into manageable steps: Check-in → Baggage Submission → Security Check → Boarding Gate → Departure. Each stage gives a clear sense of progress and a single next action.",
      image: {
        src: img("boarding-process.png"),
        alt: "EaseAirport boarding process screen showing progressive checklist with baggage submission step active",
        device: "phone",
      },
    },
    {
      type: "decision",
      id: "decision-disruption",
      number: "02",
      title: "Design for the moment the journey stops going to plan",
      context:
        "A delay is when the product becomes most valuable. Simply stating \"flight delayed\" does not help — the traveller needs to know what to do with the unexpected time.",
      rationale:
        "The disruption UI communicates delay state, updated timing, arrival updates, and gate information. A future opportunity: connect delay duration to contextual assistance — nearby food, restrooms, charging, lounge access, and a recalculated route to gate.",
      image: {
        src: img("flight-delay.png"),
        alt: "EaseAirport flight delay notification screen with updated arrival details",
        device: "phone",
      },
    },
    {
      type: "decision",
      id: "decision-amenities",
      number: "03",
      title: "Keep amenity discovery inside the journey",
      context:
        "During a layover or delay, travellers need practical facilities — but leaving the flight experience to search for them breaks context and adds friction.",
      rationale:
        "The amenities screen supports search, facility listing, terminal and location detail, and one-tap directions. Discovery happens in context — tied to where the traveller actually is in the airport.",
      image: {
        src: img("amenities.png"),
        alt: "EaseAirport amenities listing with food stall, restroom, and charging station options",
        device: "phone",
      },
    },
    // 10 — High-fidelity UI
    {
      type: "phase",
      id: "phase-ui",
      navLabel: "UI Design",
      phase: "10 — High-Fidelity Design",
      title: "Screens grouped by traveller problem",
      description:
        "The final UI is organised by what the traveller needs — not by feature list — with each group tied to a specific moment of uncertainty.",
    },
    {
      type: "gallery",
      id: "ui-understand",
      title: "Help me understand my journey",
      subtitle: "Home and boarding — personalised flight context with a clear next step.",
      columns: 2,
      device: "phone",
      images: [
        {
          src: img("home.png"),
          alt: "EaseAirport home screen with flight details for Shreyas",
          caption: "Personalised home — flight, terminal, gate",
        },
        {
          src: img("boarding-process.png"),
          alt: "EaseAirport boarding checklist high-fidelity screen",
          caption: "Boarding progress checklist",
        },
      ],
    },
    {
      type: "gallery",
      id: "ui-disruption",
      title: "Tell me when something changes",
      subtitle: "Flight status and notifications during disruption.",
      columns: 2,
      device: "phone",
      images: [
        {
          src: img("flight-delay.png"),
          alt: "EaseAirport delay notification UI",
          caption: "Delay alert with updated timing",
        },
        {
          src: img("layover.png"),
          alt: "EaseAirport layover flight details on home screen",
          caption: "Layover flight details and connection context",
        },
      ],
    },
    {
      type: "image",
      id: "ui-amenities",
      title: "Help me use my waiting time",
      caption:
        "Amenity discovery during layover and delay — search, list, and navigate to nearby facilities without leaving the journey context.",
      bullets: [
        "Search by facility type or name",
        "Terminal and location for each listing",
        "One-tap directions from the delay context",
      ],
      src: img("amenities.png"),
      alt: "EaseAirport amenities screen with search and directions",
      layout: "phone",
      width: 383,
      height: 820,
    },
    {
      type: "narrative",
      id: "layover-scenario",
      title: "Designing for the layover",
      content:
        "The layover is where EaseAirport becomes more than a navigation tool. Shreyas moves from first flight → waiting → next flight. During this period the app becomes a personal airport companion.\n\nImmediate needs: where is my next gate, how much time do I have, where can I sit, eat, or charge my phone, and where is the restroom. Future needs — accommodation, language assistance, cultural information, document access — point toward a broader travel continuity platform.",
    },
    // 11 — Principles
    {
      type: "principles",
      id: "ux-principles",
      title: "Six principles that guided the design",
      layout: "cards",
      items: [
        {
          title: "Reduce uncertainty",
          description:
            "Surface important changes before the traveller has to search for them.",
        },
        {
          title: "One next action at a time",
          description:
            "The traveller should understand what needs attention now — not the entire airport process at once.",
        },
        {
          title: "Context over complexity",
          description:
            "Show information relevant to the current airport, flight, terminal, and stage.",
        },
        {
          title: "Design for disruption",
          description:
            "The experience should become more useful when the journey goes wrong, not less.",
        },
        {
          title: "Spatial clarity",
          description:
            "Navigation should connect digital instructions with physical airport landmarks.",
        },
        {
          title: "Keep critical information persistent",
          description:
            "Flight, gate, and boarding status should remain easy to access from any screen.",
        },
      ],
    },
    // 12 — Validation
    {
      type: "phase",
      id: "phase-validation",
      navLabel: "Validation",
      phase: "11 — What I Would Validate Next",
      title: "Proposed usability testing — not measured results",
      description:
        "The source material does not include usability-test metrics or post-launch analytics. These are proposed validation scenarios and success signals for a next phase.",
    },
    {
      type: "narrative",
      id: "validation-scenarios",
      title: "Representative test scenarios",
      content:
        "A strong next step would be testing whether the concept actually reduces confusion during high-stress airport moments.",
      layout: "highlights",
      bullets: [
        "Find the correct terminal",
        "Complete the boarding checklist",
        "Find a gate without assistance",
        "Respond to a gate change",
        "Find a restroom during a layover",
        "Find a charging station",
        "Understand what to do after a two-hour delay",
      ],
    },
    {
      type: "two-column",
      id: "validation-measures",
      title: "Proposed success signals",
      subtitle:
        "Potential measures for a usability study — framed as design hypotheses, not reported outcomes.",
      columns: [
        {
          heading: "Behavioural measures",
          items: [
            "Task completion rate",
            "Time to locate a destination",
            "Error rate during navigation",
            "Time to identify a flight-status change",
            "Number of interactions to find an amenity",
          ],
        },
        {
          heading: "Qualitative signals",
          items: [
            "Can users identify their next step quickly?",
            "Do users notice important flight changes?",
            "Does the boarding progress indicator feel clear?",
            "Does the experience feel more reassuring during a delay?",
            "User confidence before and after completing a task",
          ],
        },
      ],
    },
    // 13 — Edge Cases & Future
    {
      type: "phase",
      id: "phase-future",
      navLabel: "Future",
      phase: "12 — Accessibility & Future Vision",
      title: "Beyond the MVP",
      description:
        "A production-ready version should account for diverse travellers and evolve from airport companion to travel continuity platform.",
    },
    {
      type: "narrative",
      id: "edge-cases",
      title: "Accessibility and edge cases to consider",
      content:
        "For a production-ready version, the experience should account for older travellers, international passengers with language barriers, mobility limitations, low connectivity, low battery, very large multi-terminal airports, and last-minute gate changes after the traveller has started walking.",
      bullets: [
        "Navigation should offer accessible route information — not only the shortest route (e.g. fastest: 8 min vs accessible: 12 min)",
        "Different airport signage conventions and stress states (tired, rushing)",
        "Users who are unfamiliar with airport apps or travelling internationally",
      ],
    },
    {
      type: "principles",
      id: "future-vision",
      title: "Three stages of product growth",
      layout: "list",
      items: [
        {
          title: "Stage 1 — Airport Companion (now)",
          description:
            "Boarding process, flight status, gate updates, airport navigation, and amenities.",
        },
        {
          title: "Stage 2 — Disruption Companion (next)",
          description:
            "Smart delay recommendations, accommodation, dynamic route changes, personalised suggestions, and luggage assistance.",
        },
        {
          title: "Stage 3 — Travel Companion (future)",
          description:
            "Ticket booking, digital document repository, language translation, destination culture information, and end-to-end travel planning.",
        },
      ],
    },
    {
      type: "quote",
      id: "final-takeaway",
      content:
        "Airports are information-rich but decision-heavy environments. EaseAirport is designed to reduce that uncertainty by helping travellers know what is happening, where to go, and what to do next.",
    },
  ],
  reflection: {
    title: "Don't make travellers figure out the airport",
    items: [
      {
        number: "01",
        title: "Good travel UX manages uncertainty",
        content:
          "An airport contains a huge amount of information, but travellers do not need all of it at once. They need the right information at the right moment, in the right context, with a clear next action.",
      },
      {
        number: "02",
        title: "The boarding checklist changes the interaction",
        content:
          "Turning the airport process into a progressive checklist reduces cognitive load — from \"I need to figure out the airport\" to \"I only need to complete the next step.\"",
      },
      {
        number: "03",
        title: "Disruption is the real test",
        content:
          "The product becomes most useful when the journey stops going according to plan. Designing for delay — not just ideal-path navigation — is what separates a map from a companion.",
      },
    ],
  },
};
