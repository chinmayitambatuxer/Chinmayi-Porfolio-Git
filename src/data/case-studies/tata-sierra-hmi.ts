import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("tata-sierra-hmi", file);

export const tataSierraHmi: CaseStudy = {
  slug: "tata-sierra-hmi",
  client: "Tata Motors",
  title: "Tata Sierra HMI",
  headline:
    "Designing a seamless multi-display experience for the next-generation cockpit",
  summary:
    "Creating a connected infotainment and passenger display ecosystem that balances entertainment, safety, and real-time audio concurrency inside a next-generation vehicle cockpit.",
  tags: [
    "HMI Design",
    "Multi-Display UX",
    "Automotive",
    "Systems Design",
  ],
  heroImage: img("shared-cockpit.png"),
  theme: {
    accent: "#C45C26",
    accentSoft: "#FFF4ED",
    accentMuted: "#E8A87C",
  },
  domain: "Automotive HMI",
  role: "Lead UX Designer (Passenger Display & Infotainment Experience)",
  team: "Product, engineering, QA, and brand stakeholders",
  timeline: "1 year",
  platform: "Android Automotive — dual display cockpit",
  overview:
    "Tata Sierra introduced a premium dual-display cockpit where the central infotainment and dedicated passenger display had to behave as one intelligent system — sharing audio, safety constraints, and real-time state while serving two occupants with different priorities.",
  contribution: [
    "Passenger Display experience",
    "Multi-display interaction model",
    "Audio concurrency behavior",
    "JBL listening modes & Relax Mode",
    "FOTA journey and boot-up strategy",
    "Quick Access Drawer (QAD)",
    "Settings and Audio improvements",
    "UX specifications for engineering handoff",
  ],
  metrics: [
    { value: "2", label: "Connected displays" },
    { value: "1 yr", label: "Project duration" },
    { value: "E2E", label: "UX ownership" },
  ],
  goal: "Create a premium connected cockpit where driver and passenger interact independently while the system intelligently manages shared audio, safety constraints, and display synchronization.",
  challenge:
    "Two active users, one audio pipeline, strict safety regulations, and zero tolerance for confusing popups — designing how two displays behave as one intelligent system, not two independent screens.",
  outcome:
    "A production-ready dual-display experience with defined audio concurrency rules, Relax Mode, JBL listening modes, FOTA journeys, and comprehensive UX specifications — reducing driver distraction while delivering passenger independence.",
  sections: [
    {
      type: "phase",
      id: "phase-1",
      navLabel: "Research",
      phase: "Phase 1 — Research & Discovery",
      title: "Understanding a shared cockpit ecosystem",
      description:
        "Before designing screens, I mapped how two displays, one audio pipeline, and multiple vehicle states had to coexist.",
    },
    {
      type: "narrative",
      id: "challenge",
      label: "The challenge",
      title: "The Challenge",
      content:
        "Design multi-display audio concurrency inside a shared vehicle ecosystem — two active users, conflicting priorities, one audio pipeline.",
      layout: "highlights",
      bullets: [
        "Driver prioritizes safety, navigation, and calls",
        "Passenger wants independent entertainment and comfort",
        "Audio ownership must stay predictable when both act at once",
        "Conflicts should resolve automatically — not through popups",
      ],
    },
    {
      type: "two-column",
      id: "goals",
      title: "Business & User Goals",
      columns: [
        {
          heading: "Business Goals",
          items: [
            "Create a premium connected cockpit experience",
            "Differentiate Sierra through passenger-focused features",
            "Reduce driver distraction",
            "Deliver production-ready UX within a tight timeline",
            "Ensure seamless integration with Android-based vehicle software",
          ],
        },
        {
          heading: "User Goals",
          items: [
            "Enjoy entertainment independently",
            "Control media without asking the driver",
            "Experience premium audio features",
            "Relax during long journeys",
            "Receive clear, predictable system feedback",
          ],
        },
      ],
    },
    {
      type: "image",
      id: "process",
      title: "Design Thinking Process",
      src: img("design-thinking-process.png"),
      alt: "Design thinking process for Tata Sierra HMI",
      width: 3286,
      height: 880,
      layout: "full",
    },
    {
      type: "narrative",
      id: "research-approach",
      title: "Research Approach",
      content: "Discovery methods across the project:",
      layout: "tags",
      bullets: [
        "User interviews",
        "Stakeholder workshops",
        "Competitive benchmarking",
        "HMI analysis",
        "Engineering reviews",
        "Requirements review",
        "Design iterations",
      ],
    },
    {
      type: "split",
      id: "competitive",
      title: "Competitive Research",
      content:
        "Benchmarked how premium brands handle passenger displays, media ownership, audio, wellness, and OTA experiences.",
      image: {
        src: img("competitive-research.png"),
        alt: "Competitive research reference board",
      },
    },
    {
      type: "image",
      id: "competitive-analysis",
      title: "Competitive Analysis",
      src: img("competitive-analysis-table.png"),
      alt: "Competitive analysis table for premium automotive HMIs",
      width: 1024,
      height: 561,
      layout: "full",
      takeaways: {
        keyTakeaway:
          "Jeep Grand Wagoneer leads in simplicity, while Mercedes EQS excels in intelligent personalization. There is a clear opportunity to combine personalization, safety, and entertainment control in a balanced way.",
        opportunity:
          "Create a system that offers intelligent personalization and passenger entertainment control while maintaining driver focus and simplicity.",
      },
    },
    {
      type: "table",
      id: "insights",
      title: "Key Research Insights",
      layout: "insights",
      headers: ["Insight", "UX Opportunity"],
      rows: [
        ["Drivers prioritize safety", "Reduce cognitive load and interruptions"],
        ["Passengers want independent entertainment", "Provide dedicated passenger controls"],
        ["Audio ownership creates confusion", "Design clear concurrency rules"],
        ["Long journeys increase fatigue", "Create Relax Mode experiences"],
        ["Premium buyers expect immersion", "Elevate cabin experience through JBL & Dolby"],
        ["Users dislike excessive popups", "Prefer intelligent automatic resolution where possible"],
      ],
    },
    {
      type: "quote",
      id: "quote-defining",
      content:
        "The hardest part of this project was not designing a passenger screen — it was designing how the entire cockpit should behave when two people interact with one shared audio ecosystem at the same time.",
    },
    {
      type: "phase",
      id: "phase-2",
      navLabel: "Define",
      phase: "Phase 2 — Define",
    },
    {
      type: "narrative",
      id: "define",
      title: "Defining the Problem Space",
      label: "Understanding the Ecosystem",
      content:
        "Unlike traditional infotainment systems, Tata Sierra introduces a dual-display cockpit where both the driver and passenger can actively interact with the vehicle's digital ecosystem.\n\nRather than functioning as two independent screens, both displays operate as a connected system that shares hardware resources, vehicle states, and a common audio pipeline.",
      challenge: {
        intro: "This introduced an entirely new UX challenge:",
        quote:
          "How do two users interact independently while sharing a single system without creating confusion or compromising safety?",
      },
    },
    {
      type: "split",
      id: "cockpit-ecosystem",
      title: "The Connected Cockpit Ecosystem",
      label: "Key Observation",
      content:
        "Although users perceived two separate displays, the system behaved as one connected experience.\n\nEvery interaction on one display had the potential to influence the other.",
      artifact: "connected-cockpit",
    },
    {
      type: "table",
      id: "stakeholders",
      title: "Understanding the Stakeholders",
      subtitle: "Multiple stakeholders whose needs often conflicted.",
      layout: "styled",
      headers: ["Stakeholder", "Primary Goal", "UX Consideration"],
      rows: [
        ["Driver", "Safety and focus", "Lowest possible distraction"],
        ["Passenger", "Entertainment and comfort", "Independent interaction"],
        ["Product Team", "Premium experience", "Competitive differentiation"],
        ["Engineering", "Technical feasibility", "Stable implementation"],
        ["QA", "Predictable behaviour", "Edge case coverage"],
        ["Brand", "Luxury perception", "Premium animations and interactions"],
      ],
    },
    {
      type: "cards",
      id: "problem-statements",
      title: "Problem Statement",
      cards: [
        {
          title: "Business perspective",
          description:
            "Tata Motors needed a premium digital cockpit that differentiated Sierra — the passenger display unlocked richer entertainment and harder interaction challenges.",
          tag: "Business",
        },
        {
          title: "User perspective",
          description:
            "Drivers wanted focus. Passengers wanted freedom. Both expected one system to just work — with a single shared audio output.",
          tag: "User",
        },
        {
          title: "Technical perspective",
          description:
            "Safety rules, vehicle states, shared audio hardware, Android limits, latency, and real-time sync shaped every design decision.",
          tag: "Technical",
        },
      ],
    },
    {
      type: "principles",
      id: "objectives",
      title: "Design Objectives",
      subtitle: "Six guiding objectives established for the project.",
      layout: "cards",
      items: [
        {
          title: "Driver First",
          description:
            "Every interaction prioritizes driver safety over entertainment — navigation prompts, phone calls, media interruptions, and Relax Mode restrictions.",
        },
        {
          title: "Passenger Independence",
          description: "Passengers enjoy entertainment without depending on the driver.",
          bullets: [
            "Media browsing",
            "Video playback",
            "Relax Mode",
            "JBL Modes & Dolby Atmos",
            "Audio settings",
          ],
        },
        {
          title: "Intelligent Conflict Resolution",
          description:
            "The system resolves conflicts automatically instead of asking users through popups.",
          bullets: [
            "Media ownership transfer",
            "Audio interruptions",
            "Source switching",
            "Call prioritization",
          ],
        },
        {
          title: "System Transparency",
          description:
            "Whenever the system changes behaviour automatically, users understand why — e.g., 'Relax Mode exited because the vehicle is in motion.'",
        },
        {
          title: "Consistency",
          description: "Both displays always reflect the current system state.",
          bullets: ["Current media", "Active source", "Playback state", "Audio ownership"],
        },
        {
          title: "Premium Experience",
          description:
            "Every interaction reinforces the Sierra's premium identity through motion, transitions, and emotional experiences like Relax Mode.",
        },
      ],
    },
    {
      type: "principles",
      id: "principles",
      title: "Design Principles",
      layout: "manifest",
      items: [
        {
          title: "Safety before Convenience",
          description: "Entertainment should never compromise driver awareness.",
        },
        {
          title: "One System, Two Displays",
          description: "Users experience one connected ecosystem, not two screens.",
        },
        {
          title: "Minimize Cognitive Load",
          description:
            "The system makes intelligent decisions instead of forcing manual conflict resolution.",
        },
        {
          title: "Predictability Builds Trust",
          description: "Users always understand why the system behaves the way it does.",
        },
        {
          title: "Invisible Complexity",
          description: "Complex concurrency logic hides behind simple interactions.",
        },
        {
          title: "Emotion Matters",
          description:
            "Relax Mode and startup animations create emotional engagement beyond functionality.",
        },
      ],
    },
    {
      type: "table",
      id: "opportunities",
      title: "Opportunity Areas",
      layout: "styled",
      headers: ["Opportunity", "Why it mattered", "Final Feature"],
      rows: [
        ["Independent passenger entertainment", "Reduce dependency on the driver", "Passenger Display"],
        ["Shared audio management", "Prevent conflicting media", "Audio Concurrency"],
        ["Premium cabin experience", "Differentiate Sierra", "JBL Listening Modes"],
        ["Emotional well-being", "Reduce travel fatigue", "Relax Mode"],
        ["Delight during startup", "Improve first impression", "Boot-up Strategy & Startup Animation"],
        ["Build trust during updates", "Reduce uncertainty", "FOTA Experience"],
      ],
    },
    {
      type: "narrative",
      id: "success-criteria",
      title: "Success Criteria",
      content: "Success was measured by behaviour — not feature count alone.",
      layout: "highlights",
      bullets: [
        "Independent passenger use without added driver distraction",
        "Shared audio resolved with minimal manual intervention",
        "Predictable conflicts handled without confirmation dialogs",
        "Synchronized state across both displays",
        "Clear communication when safety rules change behaviour",
        "Premium, intuitive experience aligned with Sierra",
      ],
    },
    {
      type: "phase",
      id: "phase-3",
      navLabel: "Synthesis",
      phase: "Phase 3 — Research Synthesis",
      title: "From interviews to systems mapping",
      description:
        "Synthesizing research into empathy maps, journey maps, and dependency models before defining system behaviour.",
    },
    {
      type: "two-column",
      id: "methodology",
      title: "Research Methodology",
      columns: [
        {
          heading: "Primary Research",
          items: [
            "Interviews with drivers and passengers",
            "Long-distance travel observation",
            "Stakeholder workshops",
            "Engineering capability reviews",
          ],
        },
        {
          heading: "Secondary Research",
          items: [
            "Premium automotive HMI analysis",
            "Android Automotive patterns",
            "Tata Motors HMI guidelines",
            "Driver distraction research",
          ],
        },
      ],
    },
    {
      type: "table",
      id: "participants",
      title: "Research Participants",
      subtitle: "Three user groups consistently emerged during research.",
      layout: "styled",
      headers: ["User Group", "Age", "Driving Pattern", "Primary Needs"],
      rows: [
        ["Daily Commuters", "28–45", "City + Highway", "Navigation, calls, media"],
        ["Long-distance Travelers", "30–55", "Weekend trips", "Comfort, entertainment"],
        ["Family Users", "35–50", "Multi-passenger travel", "Shared media, children's entertainment"],
      ],
    },
    {
      type: "findings",
      id: "findings",
      title: "Key Research Findings",
      subtitle: "Synthesized from interviews and observations.",
      items: [
        {
          title: "Drivers avoid frequent interactions",
          finding: "Drivers expected the system to automate routine decisions.",
          implication: "Minimize dialogs; prioritize intelligent automation.",
        },
        {
          title: "Passengers seek independence",
          finding: "Passengers wanted entertainment without asking the driver.",
          implication: "Build a dedicated passenger experience.",
        },
        {
          title: "Audio ownership was unclear",
          finding: "Simultaneous controls confused who owned the output.",
          implication: "Define predictable concurrency rules with clear feedback.",
        },
        {
          title: "Excessive popups cause frustration",
          finding: "Repeated confirmations broke trust during testing.",
          implication: "Resolve expected conflicts automatically.",
        },
        {
          title: "Long drives create fatigue",
          finding: "Passengers cycled media without finding engaging comfort.",
          implication: "Introduce immersive experiences like Relax Mode.",
        },
      ],
    },
    {
      type: "image",
      id: "empathy-map",
      title: "Empathy Map",
      artifact: "empathy-map",
    },
    {
      type: "image",
      id: "journey-map",
      title: "Experience Journey Map",
      src: img("experience-journey-map.png"),
      alt: "Experience journey map for in-vehicle entertainment",
      layout: "contained",
    },
    {
      type: "split",
      id: "systems-thinking",
      title: "Systems Thinking",
      content:
        "The project was about designing relationships — every interaction rippled across displays, audio, and vehicle state.",
      image: {
        src: img("systems-thinking.png"),
        alt: "Systems thinking diagram showing component relationships",
      },
    },
    {
      type: "image",
      id: "dependency-map",
      title: "System Dependency Map",
      src: img("system-dependency-map.png"),
      alt: "System dependency map across cockpit components",
      layout: "contained",
    },
    {
      type: "phase",
      id: "phase-4",
      navLabel: "Systems",
      phase: "Phase 4 — System Architecture",
      title: "From insights to behaviour matrices",
      description:
        "Defining how the cockpit behaves across vehicle states, users, and shared audio resources.",
    },
    {
      type: "quote",
      id: "quote-systems",
      content:
        "Designing two displays wasn't the challenge. Designing how two displays behave as one intelligent system was.",
    },
    {
      type: "image",
      id: "architecture",
      title: "System Architecture",
      caption:
        "Every action on one display could influence the other — shared resources tied both experiences together.",
      src: img("system-architecture.png"),
      alt: "Tata Sierra HMI system architecture diagram",
    },
    {
      type: "image",
      id: "vehicle-state",
      title: "Vehicle State Matrix",
      caption: "Features respond to vehicle status — not static app states.",
      src: img("vehicle-state-matrix.png"),
      alt: "Vehicle state matrix for feature availability",
    },
    {
      type: "image",
      id: "ownership",
      title: "Ownership Matrix",
      caption: "Predictable feature ownership across users and scenarios.",
      src: img("ownership-matrix.png"),
      alt: "Display ownership matrix",
    },
    {
      type: "image",
      id: "audio-ownership",
      title: "Audio Ownership Matrix",
      caption:
        "Audio source resolved automatically by timing and safety priority — not popups.",
      src: img("audio-ownership-matrix.png"),
      alt: "Audio ownership matrix",
    },
    {
      type: "table",
      id: "scenarios",
      title: "UX Behaviour Scenarios",
      subtitle: "Features always explained why they were unavailable — never silently disabled.",
      layout: "styled",
      headers: ["Scenario", "UX Behaviour"],
      rows: [
        ["Vehicle begins moving during Relax Mode", "Exit driver experience and inform user"],
        ["Driver receives call", "Passenger media pauses"],
        ["Video requested while driving", "Restrict driver playback"],
        ["Reverse gear engaged", "Safety-critical UI takes precedence"],
        ["OTA installation while driving", "Deferred until safe conditions"],
      ],
    },
    {
      type: "image",
      id: "audio-diagram",
      title: "Audio Concurrency Diagram",
      src: img("audio-concurrency-diagram.png"),
      alt: "Audio concurrency behaviour diagram",
      layout: "contained",
    },
    {
      type: "split",
      id: "decision-tree",
      title: "Concurrency Decision Tree",
      content:
        "Defines how the system handles concurrent interaction across users, resources, and safety events — without asking users to resolve conflicts manually.",
      image: {
        src: img("concurrency-decision-tree.png"),
        alt: "Concurrency decision tree",
      },
      reverse: true,
    },
    {
      type: "gallery",
      id: "flows",
      navLabel: "Flows",
      title: "Interaction Flows",
      subtitle: "End-to-end flows documenting decision points across both displays.",
      columns: 2,
      images: [
        {
          src: img("flow-audio-concurrency.png"),
          alt: "Audio concurrency flow",
          caption: "Audio concurrency",
        },
        {
          src: img("flow-relax-mode.png"),
          alt: "Relax Mode flow",
          caption: "Relax Mode transitions",
        },
        {
          src: img("flow-passenger-media.png"),
          alt: "Passenger media control flow",
          caption: "Passenger media control",
        },
        {
          src: img("flow-fota.png"),
          alt: "FOTA update flow",
          caption: "FOTA update journey",
        },
        {
          src: img("flow-boot-up.png"),
          alt: "Boot-up sequence flow",
          caption: "Boot-up sequence",
        },
        {
          src: img("audio-concurrency-flow.png"),
          alt: "Passenger play action flow",
          caption: "Play action priority checks",
        },
      ],
    },
    {
      type: "phase",
      id: "phase-5",
      navLabel: "Design",
      phase: "Phase 5 — Design",
      title: "Production-ready UI screens",
      description:
        "Final cockpit screens spanning call handling, headphone routing, and the Sierra slab display.",
    },
    {
      type: "gallery",
      id: "ui-call-handling",
      title: "UI Screens — Call Handling",
      subtitle:
        "Call flows that prioritize driver safety while keeping both displays synchronized and predictable.",
      columns: 2,
      images: [
        {
          src: img("incoming-call-screen.png"),
          alt: "Incoming call screen with Accept on Phone action on infotainment display",
          width: 1024,
          height: 384,
          caption: "Incoming call — Accept on Phone action",
          bullets: [
            "Prioritizes driver safety with uninterrupted driver communication.",
            "Adapts contextually based on the active system state.",
            'Reduces cognitive load through a clear "Accept on Phone" action.',
            "Ensures a seamless multi-display experience with predictable system behavior.",
          ],
        },
        {
          src: img("usb-audio-notification.png"),
          alt: "Passenger display showing media paused with connect headphones prompt during driver call",
          width: 1596,
          height: 672,
          caption: "Call in progress — Connect Headphones prompt",
          bullets: [
            "Prioritizes driver calls to ensure safe and uninterrupted communication.",
            "Pauses passenger media and suggests connecting headphones.",
            "Communicates system status through a clear contextual message.",
            "Maintains a seamless, safety-first multi-display experience.",
          ],
        },
      ],
    },
    {
      type: "gallery",
      id: "ui-headphone",
      title: "UI Screens — Headphone Experience",
      subtitle:
        "Quick audio switching between car speakers and Bluetooth headphones. Dedicated JBL sound modes for private listening without interrupting the driver.",
      columns: 2,
      images: [
        {
          src: img("final-displays-home.png"),
          alt: "Dual-display home experience",
          caption: "Dual-display home experience",
        },
        {
          src: img("ui-headphone-routing.png"),
          alt: "Headphone audio routing UI",
          caption: "Smart audio routing to headphones",
        },
      ],
    },
    {
      type: "gallery",
      id: "ui-other",
      title: "Other UI Screens",
      columns: 3,
      images: [
        { src: img("ui-screen-1.png"), alt: "Sierra HMI screen 1", caption: "Media controls" },
        { src: img("ui-screen-2.png"), alt: "Sierra HMI screen 2", caption: "Audio settings" },
        { src: img("ui-screen-3.png"), alt: "Sierra HMI screen 3", caption: "Passenger display" },
        { src: img("ui-screen-4.png"), alt: "Sierra HMI screen 4", caption: "Relax Mode" },
        { src: img("ui-screen-5.png"), alt: "Sierra HMI screen 5", caption: "JBL listening modes" },
        { src: img("ui-screen-6.png"), alt: "Sierra HMI screen 6", caption: "System settings" },
      ],
    },
    {
      type: "image",
      id: "sierra-slab",
      title: "Sierra Slab Display",
      caption:
        "Seamless luxury digital slab — Passenger Display (12\"), Central Infotainment Display (12\"), Instrument Cluster (10\").",
      src: img("sierra-slab-display.png"),
      alt: "Sierra slab display with three connected screens",
      layout: "contained",
    },
    {
      type: "visual-break",
      id: "break-slab",
      src: img("sierra-slab-interior.png"),
      alt: "Tata Sierra cockpit interior with digital slab display",
      title: "One cockpit, three displays, shared resources",
    },
  ],
  reflection: {
    title: "What this project taught me",
    items: [
      {
        number: "01",
        title: "Systems over screens",
        content:
          "The most valuable artifacts weren't UI mockups — they were behaviour matrices, decision trees, and concurrency rules that gave engineering and QA a shared language for edge cases.",
      },
      {
        number: "02",
        title: "Invisible complexity builds trust",
        content:
          "Users don't want to manage audio ownership. They want the system to resolve conflicts predictably and explain safety-driven changes only when necessary.",
      },
      {
        number: "03",
        title: "Two displays, one ecosystem",
        content:
          "The challenge was never designing a passenger screen — it was designing how two active displays behave as one intelligent system under shared constraints.",
      },
    ],
  },
};
