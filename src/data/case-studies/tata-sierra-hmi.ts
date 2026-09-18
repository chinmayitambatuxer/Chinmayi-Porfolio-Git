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
    accent: "#1E3A5F",
    accentSoft: "#EEF3F8",
    accentMuted: "#5B7C9D",
  },
  domain: "Automotive HMI",
  role: "Lead UX Designer (Passenger Display & Infotainment Experience)",
  team: "Product, engineering, QA, and brand stakeholders",
  timeline: "1 year",
  platform: "Android Automotive — dual-display cockpit",
  overview:
    "Tata Sierra introduced a premium dual-display cockpit where the central infotainment and dedicated passenger display had to behave as one intelligent system — sharing audio, safety constraints, and real-time state while serving two occupants with different priorities.",
  contribution: [
    "Passenger Display experience",
    "Multi-display interaction model",
    "Audio concurrency behaviour",
    "JBL listening modes & Relax Mode",
    "FOTA journey and boot-up strategy",
    "Quick Access Drawer (QAD)",
    "Settings and Audio improvements",
    "UX specifications for engineering handoff",
  ],
  metrics: [
    { value: "3", label: "Connected displays" },
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
      artifact: "sierra-design-process",
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
      artifact: "sierra-competitive-research",
    },
    {
      type: "table",
      id: "competitive-analysis",
      title: "Competitive Analysis",
      layout: "competitive",
      headers: ["Vehicle", "Features in PID", "Anything unique", "Ratings"],
      rows: [],
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
          description:
            "Tata Motors needed a premium digital cockpit that differentiated Sierra — the passenger display unlocked richer entertainment and harder interaction challenges.",
          tag: "Business Perspective",
        },
        {
          description:
            "Drivers wanted focus. Passengers wanted freedom. Both expected one system to just work — with a single shared audio output.",
          tag: "User Perspective",
        },
        {
          description:
            "Safety rules, vehicle states, shared audio hardware, Android limits, latency, and real-time sync shaped every design decision.",
          tag: "Technical Perspective",
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
        ["Long-distance Travellers", "30–55", "Weekend trips", "Comfort, entertainment"],
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
          finding: "Simultaneous controls made it unclear who owned the output.",
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
      caption:
        "Seven stages from vehicle entry to destination — tracking driver and passenger emotion, design opportunities, and the emotional trend across the shared cockpit journey.",
      artifact: "sierra-journey",
      layout: "full",
    },
    {
      type: "split",
      id: "systems-thinking",
      title: "Systems Thinking",
      content:
        "The project was about designing relationships — every interaction rippled across displays, audio, and vehicle state.",
      artifact: "systems-thinking",
    },
    {
      type: "image",
      id: "dependency-map",
      title: "System Dependency Map",
      artifact: "sierra-dependency",
      layout: "contained",
    },
    {
      type: "phase",
      id: "phase-4",
      navLabel: "Systems",
      phase: "Phase 4 — System Architecture",
      title: "From insights to behaviour matrices",
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
      artifact: "sierra-architecture",
      layout: "full",
    },
    {
      type: "image",
      id: "vehicle-state",
      title: "Vehicle State Matrix",
      caption: "Features respond to vehicle status — not static app states.",
      artifact: "sierra-vehicle-state",
      layout: "full",
    },
    {
      type: "image",
      id: "ownership",
      title: "Ownership Matrix",
      caption: "Predictable feature ownership across users and scenarios.",
      artifact: "sierra-ownership",
      layout: "full",
    },
    {
      type: "image",
      id: "audio-ownership",
      title: "Audio Ownership Matrix",
      caption:
        "Audio source resolved automatically by timing and safety priority — not popups.",
      artifact: "sierra-audio-ownership",
      layout: "full",
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
      artifact: "sierra-audio-priority",
      layout: "contained",
    },
    {
      type: "split",
      id: "decision-tree",
      title: "Concurrency Decision Tree",
      content:
        "Defines how the system handles concurrent interaction across users, resources, and safety events — without asking users to resolve conflicts manually.",
      artifact: "sierra-decision-tree",
    },
    {
      type: "image",
      id: "flows",
      navLabel: "Flows",
      title: "Interaction Flows",
      caption: "End-to-end flows documenting decision points across both displays.",
      artifact: "sierra-flows",
      layout: "full",
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
            "Ensures a seamless multi-display experience with predictable system behaviour.",
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
      type: "image",
      id: "ui-dual-display-home",
      title: "Slab display luxury experience",
      src: img("final-displays-home.png"),
      alt: "Dual-display home experience",
      width: 3382,
      height: 468,
      layout: "full",
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
          src: img("ui-headphone-routing.png"),
          alt: "Headphone audio routing UI",
          caption: "Audio modes for headset & earphones",
        },
      ],
    },
    {
      type: "gallery",
      id: "ui-other",
      title: "Other UI Screens",
      columns: 3,
      images: [
        {
          src: img("ui-screen-1.png"),
          alt: "Sierra HMI screen 1",
          caption: "Passenger display home screen",
        },
        { src: img("ui-screen-2.png"), alt: "Sierra HMI screen 2", caption: "Audio modes" },
        {
          src: img("ui-screen-3.png"),
          alt: "Sierra HMI screen 3",
          caption: "Center infotainment home screen",
        },
        { src: img("ui-screen-4.png"), alt: "Sierra HMI screen 4", caption: "App drawer" },
        { src: img("ui-screen-5.png"), alt: "Sierra HMI screen 5", caption: "Quick access drawer" },
        { src: img("ui-screen-6.png"), alt: "Sierra HMI screen 6", caption: "Phone app" },
      ],
    },
    {
      type: "image",
      id: "sierra-slab",
      title: "Most selling relax mode experience",
      caption:
        "The Tata Sierra's Relax Mode is a specialized cabin-relaxation feature that orchestrates ambient lighting, climate control, and the infotainment screens to create a peaceful, meditative environment.",
      bullets: [
        "Audio & Visual Themes: It features a 3-audio and visual experience with three distinct theme options: water, fire, and space.",
        "Integration: The graphics blend across the passenger and infotainment displays, accompanied by relaxing ambient sounds.",
        "Operation: Because of the multi-screen setup, the relax graphics can run on the co-passenger or passenger display while the driver’s screen and central systems continue handling functions like navigation or reverse camera feeds.",
        "Usage: It is designed to offer a calming experience during pauses in your journey, such as when you are parked or charging the vehicle.",
      ],
      src: img("sierra-slab-display.png"),
      alt: "Sierra slab display with three connected screens",
      width: 1670,
      height: 1252,
      layout: "split",
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
