import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("sdoh-health-platform", file);

export const sdohHealthPlatform: CaseStudy = {
  slug: "sdoh-health-platform",
  client: "Healthcare",
  title: "SDOH Health Platform",
  headline: "Seeing the whole patient — beyond the chart",
  summary:
    "A web platform helping nurses capture social determinants of health, manage surveys and appointments, and share insights with doctors for better chronic disease treatment.",
  tags: ["0 to 1 Design", "Healthcare", "Dashboard", "Web App"],
  heroImage: img("hero.png"),
  theme: {
    accent: "#3D9A8F",
    accentSoft: "#EDF8F6",
    accentMuted: "#6BB5AA",
  },
  domain: "Healthcare",
  role: "UX & UI Designer",
  team: "Design intern — Mindbowser Inc",
  timeline: "2021",
  platform: "Web application (desktop-first)",
  overview:
    "A nurse-led platform for capturing Social Determinants of Health through structured surveys, managing appointments, and generating treatment reports that give doctors context beyond clinical data.",
  contribution: [
    "User research and persona development",
    "Information architecture",
    "Dashboard and survey flows",
    "High-fidelity UI and prototyping",
  ],
  metrics: [
    { value: "5", label: "Process stages" },
    { value: "Nurses", label: "Primary users" },
  ],
  goal: "Give nurses a fast, reliable way to capture patients' social determinants of health and connect that data to treatment decisions.",
  challenge:
    "Nurses juggle face-to-face visits, phone calls, and paperwork across multiple locations. The tool had to reduce admin burden while improving data quality for chronic disease care.",
  outcome:
    "An end-to-end platform with a task-oriented dashboard, streamlined patient surveys, appointment scheduling, and shareable treatment reports — designed around a nurse persona with real workflow constraints.",
  sections: [
    {
      type: "phase",
      id: "phase-discovery",
      navLabel: "Discovery",
      phase: "01 — Discovery",
      title: "Why lifestyle data belongs in clinical workflows",
      description:
        "Social determinants shape chronic disease outcomes as profoundly as lab results — yet most clinical systems treat them as optional footnotes.",
    },
    {
      type: "narrative",
      id: "introduction",
      title: "Making SDOH a first-class clinical input",
      content:
        "Social Determinants of Health — income, housing, food security, education, employment — shape chronic disease outcomes as profoundly as lab results. This platform was built so nurses conduct structured surveys, valuations feed treatment reports, and doctors receive actionable context alongside medical history.",
    },
    {
      type: "two-column",
      id: "concept",
      title: "The product in one glance",
      columns: [
        {
          heading: "How it works",
          items: [
            "Nurse-led SDOH surveys conducted in-person or by phone",
            "Patient answers generate valuation scores and treatment recommendations",
            "Reports shared with attending doctors for integrated care decisions",
            "Dashboard tracks completed, incomplete, and upcoming surveys",
          ],
        },
        {
          heading: "Why it matters",
          items: [
            "Chronic diseases often stem from addressable social factors",
            "Emergency interventions are expensive and reactive",
            "Early SDOH capture enables preventive, equitable treatment",
            "Paper forms get lost; digital records persist across visits",
          ],
        },
      ],
    },
    {
      type: "process",
      id: "process",
      title: "A nurse-centered design process",
      steps: [
        "User Research",
        "User Persona",
        "Information Architecture",
        "High-Fidelity Wireframes",
        "Prototyping",
      ],
    },
    {
      type: "phase",
      id: "phase-research",
      navLabel: "Research",
      phase: "02 — Research & persona",
      title: "Designing around Jennifer's real day",
      description:
        "Interviews and workflow observation revealed how nurses move between patients, locations, and incomplete paperwork.",
    },
    {
      type: "split",
      id: "persona",
      title: "Jennifer — the nurse behind every screen",
      content:
        "Jennifer links community services to clinical care while managing dozens of patients across hospital, clinic, and home visits. She needs orientation in seconds — not another system that adds cognitive load between patients.",
      bullets: [
        "Goals: fast data capture, appointment reminders, at-a-glance survey metrics",
        "Pain points: misplaced paper forms, forgotten appointments, legacy systems",
        "Motivation: reduce emergency interventions by addressing root social causes",
      ],
      image: {
        src: img("persona-jennifer.png"),
        alt: "Healthcare nurse persona representing primary platform user",
      },
    },
    {
      type: "image",
      id: "mobile-exploration",
      title: "Early mobile wireframe exploration",
      caption:
        "Initial sign-in and onboarding flows explored before committing to a desktop-first clinical workflow.",
      src: img("mobile-wireframes.png"),
      alt: "Low-fidelity mobile wireframes for sign-in and welcome screens",
    },
    {
      type: "findings",
      id: "research",
      title: "What nurses actually need at 8 AM",
      subtitle: "Research insights from interviews and workflow observation.",
      items: [
        {
          title: "Start with today's tasks",
          finding:
            "Nurses open the app between patients and need immediate orientation — not a blank canvas.",
          implication:
            "Designed a welcoming dashboard with personalized greeting and daily task summary.",
        },
        {
          title: "Incomplete work is invisible anxiety",
          finding:
            "Nurses lost track of half-finished surveys across busy shifts.",
          implication:
            "Added a persistent incomplete-surveys queue with practitioner assignment.",
        },
        {
          title: "Scheduling is the backbone",
          finding:
            "Face-to-face and phone appointments follow different rhythms but share one calendar.",
          implication:
            "Built unified scheduling with patient type indicators and quick-reschedule actions.",
        },
        {
          title: "Doctors need context, not raw data",
          finding:
            "Treatment reports with SDOH valuations were more actionable than survey transcripts.",
          implication:
            "Designed exportable reports with scored valuations and recommended interventions.",
        },
      ],
    },
    {
      type: "phase",
      id: "phase-solution",
      navLabel: "Solution",
      phase: "03 — Solution design",
      title: "From insights to screens nurses can trust",
      description:
        "Research translated into practitioner dashboards, patient intake, SDOH snapshots, and scheduling flows.",
    },
    {
      type: "split",
      id: "dashboard",
      title: "A dashboard that answers 'what do I do next?'",
      content:
        "The practitioner home screen orients Jennifer within seconds: greeting, daily summary, completed survey count, upcoming appointments, and incomplete forms — all accessible from a persistent sidebar.",
      bullets: [
        "Personalized greeting with daily task summary",
        "Stats card for total completed surveys",
        "Upcoming appointments and incomplete survey queue",
        "Persistent nav: Dashboard, Patients, Schedule, Settings, Queries",
      ],
      image: {
        src: img("dashboard-practitioner.png"),
        alt: "SDOH platform practitioner dashboard with surveys and appointments",
      },
      reverse: true,
    },
    {
      type: "gallery",
      id: "patient-journey",
      title: "Core screens across the patient journey",
      subtitle: "From patient directory through intake to SDOH snapshot review.",
      columns: 2,
      images: [
        {
          src: img("patients-list.png"),
          alt: "Patients list with search and practitioner assignment",
          caption: "Patients directory",
        },
        {
          src: img("add-patient.png"),
          alt: "Add new patient multi-step intake form",
          caption: "Patient intake — Basic Info",
        },
        {
          src: img("patient-snapshot.png"),
          alt: "Patient snapshot with SDOH triggers and clinical actions",
          caption: "Patient snapshot — Triggers & actions",
        },
        {
          src: img("schedule-appointments.png"),
          alt: "Weekly appointment calendar for nurse scheduling",
          caption: "Appointment scheduling",
        },
      ],
    },
    {
      type: "gallery",
      id: "onboarding-settings",
      title: "Onboarding, profile, and platform administration",
      subtitle:
        "Supporting flows for profile setup, credential management, and multi-clinic administration.",
      columns: 2,
      images: [
        {
          src: img("create-profile.png"),
          alt: "Create profile onboarding screen",
          caption: "Create profile",
        },
        {
          src: img("profile-settings.png"),
          alt: "Nurse profile and license uploads",
          caption: "Profile & credentials",
        },
        {
          src: img("change-password.png"),
          alt: "Change password settings screen",
          caption: "Account security",
        },
        {
          src: img("companies-admin.png"),
          alt: "Companies administration list for platform admins",
          caption: "Admin — Companies",
        },
      ],
    },
  ],
  reflection: {
    title: "Designing for caregivers, not dashboards",
    items: [
      {
        number: "01",
        title: "Time returned to care",
        content:
          "The most important metric isn't engagement — it's whether the tool makes a nurse's 24-patient day more manageable.",
      },
      {
        number: "02",
        title: "Incomplete states matter",
        content:
          "Surfacing unfinished surveys and upcoming appointments reduced cognitive load more than notification badges alone.",
      },
      {
        number: "03",
        title: "Context for clinicians",
        content:
          "SDOH data only creates value when it reaches doctors in an actionable form tied to treatment decisions.",
      },
    ],
  },
};
