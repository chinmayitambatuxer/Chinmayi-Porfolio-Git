import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("sdoh-health-platform", file);

export const sdohHealthPlatform: CaseStudy = {
  slug: "sdoh-health-platform",
  client: "Healthcare",
  title: "SDOH Health",
  headline: "Capture the human context. Organise the complexity. Make it useful.",
  summary:
    "A web platform exploring how UX can help practitioners capture Social Determinants of Health, manage patient workflows, and communicate social context to clinical teams — without adding administrative burden.",
  tags: ["0 to 1 Design", "Healthcare", "Dashboard", "Web App"],
  heroImage: img("hero.png"),
  heroWidth: 1920,
  heroHeight: 1184,
  theme: {
    accent: "#3D9A8F",
    accentSoft: "#EDF8F6",
    accentMuted: "#6BB5AA",
  },
  domain: "Healthcare / Clinical workflow",
  role: "UX & UI Designer",
  team: "Design intern — Mindbowser Inc",
  timeline: "4 Months",
  platform: "Web application",
  overview:
    "SDOH Health is a web application where nurses collect Social Determinants of Health through a structured survey. The collected information supports assessment, treatment planning, and reports that can be shared with doctors — framed around a practitioner workflow, not a form alone.",
  contribution: [
    "Problem framing and practitioner persona",
    "Information architecture across three roles",
    "Wireframe workflow exploration",
    "High-fidelity UI for dashboard, patient, and SDOH capture",
    "Prototyping and design documentation",
  ],
  metrics: [
    { value: "3", label: "Product layers", description: "Capture · Organise · Communicate" },
    { value: "3", label: "User roles", description: "Practitioner · Admin · Super Admin" },
    { value: "Web", label: "Platform", description: "Desktop-first clinical workflow" },
  ],
  goal:
    "Design a simple practitioner workflow that makes collecting and managing Social Determinants of Health information less fragmented and less time-consuming.",
  challenge:
    "A busy practitioner must collect complex patient information, keep track of what is complete, and access that information later — while paper forms get misplaced, legacy systems create friction, and high patient volume increases the risk of missed appointments.",
  outcome:
    "An end-to-end platform concept organised around Jennifer's day: workload visibility on the dashboard, structured patient records, guided SDOH capture with progress states, and reporting that connects social context to clinical communication.",
  outcomeMetrics: [
    {
      value: "3",
      label: "Product layers",
      description: "Capture social context · Organise patient records · Communicate through reports",
    },
    {
      value: "3",
      label: "User roles",
      description: "Practitioner · Admin · Super Admin",
    },
    {
      value: "6",
      label: "Process stages",
      description: "Research → Persona → IA → Wireframes → Prototype → Hi-fi",
    },
  ],
  sections: [
    // 01 — The Story
    {
      type: "phase",
      id: "phase-story",
      navLabel: "Story",
      phase: "01 — The Story",
      title: "Why social context matters in clinical care",
      description:
        "A patient's health does not exist in isolation. Income, education, employment, food security, housing, and living conditions can all influence the circumstances around health.",
    },
    {
      type: "narrative",
      id: "story-hook",
      title: "Health is shaped by more than the chart",
      content:
        "Social Determinants of Health — income and social protection, education, unemployment, working conditions, food insecurity, housing, basic amenities, and environment — can influence health equity in profound ways.\n\nThis project explored how a digital product could help healthcare practitioners capture that social context without adding unnecessary administrative burden.",
    },
    {
      type: "quote",
      id: "core-question",
      content:
        "How might we make complex social-health information easier for practitioners to capture, manage and communicate?",
    },
    // 02 — The Problem
    {
      type: "phase",
      id: "phase-problem",
      navLabel: "Problem",
      phase: "02 — The Practitioner Problem",
      title: "This is a workflow problem, not a form problem",
      description:
        "Capturing social context is difficult when the person responsible for collecting it is already managing a high-volume healthcare workflow.",
    },
    {
      type: "narrative",
      id: "workflow-problem",
      title: "From paper chaos to digital continuity",
      content:
        "For practitioners like Jennifer, the friction is operational as well as informational. Paper forms can be misplaced. Legacy computer systems create friction. High patient volume increases the risk of missed appointments. Patient information and documents need to remain organised across hospital, clinic, and home contexts.\n\nThe deeper UX question became:",
      layout: "highlights",
      bullets: [
        "How can a busy practitioner collect complex patient information?",
        "How can they keep track of what is complete?",
        "How can they easily access that information later?",
      ],
    },
    {
      type: "narrative",
      id: "design-opportunity",
      label: "The design opportunity",
      title: "This became the design opportunity behind SDOH Health",
      content:
        "There is a static survey form filled by nurses for patients. Based on patient answers, valuation and treatment information is allotted in reports that can be shared with doctors. The concept connects social-health capture to assessment, treatment planning, and clinical communication.",
    },
    // 03 — Jennifer
    {
      type: "phase",
      id: "phase-persona",
      navLabel: "Persona",
      phase: "03 — Meet Jennifer",
      title: "Designing around a nurse's real day",
      description:
        "Jennifer is the narrative anchor for every design decision — her workflow, not a feature list, defines what the product needs to do.",
    },
    {
      type: "image",
      id: "persona",
      title: "User Persona",
      caption:
        "Jennifer is the narrative anchor for every design decision — her workflow, not a feature list, defines what the product needs to do.",
      artifact: "sdoh-persona",
      layout: "full",
    },
    {
      type: "quote",
      id: "form-insight",
      content:
        "The form is not the product. The workflow around the form is the product.",
    },
    {
      type: "narrative",
      id: "jennifer-journey",
      title: "What Jennifer needs to accomplish",
      content:
        "Jennifer needs to find the right patient, understand what needs to be completed, capture SDOH information, save or resume progress, review the information, and communicate it to the appropriate people.",
      layout: "highlights",
      bullets: [
        "Find the right patient",
        "Understand what needs to be completed",
        "Capture SDOH information",
        "Save or resume progress",
        "Review the collected information",
        "Communicate through reports",
      ],
    },
    // 04 — Design Challenge
    {
      type: "phase",
      id: "phase-challenge",
      navLabel: "Challenge",
      phase: "04 — Design Challenge",
      title: "A simple workflow for complex information",
      description:
        "The design challenge centres on reducing fragmentation — making social-health capture feel like part of Jennifer's day, not an interruption to it.",
    },
    {
      type: "principles",
      id: "ux-principles",
      title: "Six principles that guided the design",
      layout: "cards",
      items: [
        {
          title: "Make capture straightforward",
          description: "Reduce unnecessary effort during data collection.",
        },
        {
          title: "Make progress visible",
          description: "Help practitioners understand what is complete and what remains.",
        },
        {
          title: "Keep information organised",
          description: "Patient information should be easy to find and review.",
        },
        {
          title: "Design around the workflow",
          description: "Navigation should help practitioners complete work, not simply browse screens.",
        },
        {
          title: "Support different contexts",
          description: "Consider mobile, desktop/laptop, and iPad/tablet use across working environments.",
        },
        {
          title: "Connect capture to communication",
          description: "Collected information should have value beyond storage.",
        },
      ],
    },
    // 05 — UX Process
    {
      type: "phase",
      id: "phase-process",
      navLabel: "Process",
      phase: "05 — UX Process",
      title: "Understand → Represent → Structure → Explore → Connect → Refine",
      description:
        "The project followed a design-sprint-oriented progression — from understanding the problem through persona, structure, wireframes, prototyping, and high-fidelity UI.",
    },
    {
      type: "image",
      id: "design-process",
      title: "Design process overview",
      caption:
        "From user research and persona through information architecture, wireframes, prototyping, and high-fidelity design — each stage builds on the last.",
      artifact: "sdoh-design-process",
      alt: "SDOH Health design process — User Research, Persona, Information Architecture, Wireframes, Prototyping",
      layout: "contained",
    },
    {
      type: "process",
      id: "ux-process",
      title: "Six stages of progression",
      steps: [
        "Understand — explore the problem and practitioner context",
        "Represent — turn target user needs into a clear persona",
        "Structure — define information architecture and product hierarchy",
        "Explore — use wireframes to work through the workflow",
        "Connect — prototype the core interactions",
        "Refine — translate structure into high-fidelity UI",
      ],
      footnote:
        "The source establishes these process stages but does not document detailed research methodology or participant counts.",
    },
    // 06 — Needs → Opportunities
    {
      type: "phase",
      id: "phase-needs",
      navLabel: "Opportunities",
      phase: "06 — Needs → Opportunities",
      title: "From Jennifer's needs to product logic",
      description:
        "Each need maps to a workflow problem, a UX opportunity, and a feature direction — creating a clear thread from persona to interface.",
    },
    {
      type: "table",
      id: "needs-opportunities",
      title: "Need → Workflow problem → UX opportunity",
      subtitle: "Jennifer's stated needs translated into design directions.",
      layout: "styled",
      headers: ["Jennifer's need", "UX opportunity"],
      rows: [
        ["Manage patient information", "Centralised patient record"],
        ["Avoid misplaced forms", "Digital form workflow"],
        ["Manage many patients", "Dashboard / overview"],
        ["Avoid forgotten appointments", "Appointment reminders"],
        ["Track completed work", "Completion status"],
        ["Identify unfinished work", "Incomplete-form states"],
        ["Communicate to doctors", "Reporting / sharing"],
        ["Work in multiple contexts", "Responsive experience"],
      ],
    },
    // 07 — Information Architecture
    {
      type: "phase",
      id: "phase-ia",
      navLabel: "Architecture",
      phase: "07 — Information Architecture",
      title: "Practitioner · Admin · Super Admin",
      description:
        "Three roles structure the product — with the practitioner workflow immediately accessible and administrative responsibilities kept separate.",
    },
    {
      type: "principles",
      id: "information-architecture",
      title: "Three roles, one primary workflow",
      layout: "cards",
      items: [
        {
          title: "Practitioner",
          description:
            "The primary workflow owner — manages patient information, SDOH collection, appointments, and day-to-day clinical tasks. Jennifer's journey lives here.",
        },
        {
          title: "Admin",
          description:
            "Supports operational management — practitioner information, profile settings, and platform configuration within a clinic or organisation.",
        },
        {
          title: "Super Admin",
          description:
            "Supports higher-level administration — company management, default admin settings, and cross-organisation platform oversight.",
        },
      ],
    },
    {
      type: "gallery",
      id: "ia-role-screens",
      title: "Role surfaces from the final design",
      subtitle:
        "Each role gets a distinct dashboard — practitioner workload, clinic admin oversight, and company-level super admin control.",
      columns: 3,
      images: [
        {
          src: img("dashboard-practitioner.png"),
          alt: "Practitioner dashboard for Jennifer",
          caption: "Practitioner",
          width: 1070,
          height: 600,
        },
        {
          src: img("admin-dashboard.png"),
          alt: "Admin dashboard with surveys and practitioners",
          caption: "Admin",
          width: 1024,
          height: 576,
        },
        {
          src: img("super-admin-dashboard.png"),
          alt: "Super Admin dashboard",
          caption: "Super Admin",
          width: 1130,
          height: 636,
        },
      ],
    },
    // 08 — Core Journey
    {
      type: "phase",
      id: "phase-journey",
      navLabel: "Journey",
      phase: "08 — Core Practitioner Journey",
      title: "Sign in → Workload → Patient → Assessment → Review → Report",
      description:
        "The practitioner flow answers four questions Jennifer asks throughout her day — who, what, what do I have, and what needs attention.",
    },
    {
      type: "narrative",
      id: "practitioner-flow",
      title: "Four questions the workflow must answer",
      content:
        "A strong practitioner journey gives Jennifer orientation without opening every patient record.",
      layout: "highlights",
      bullets: [
        "Who do I need to see? — Patient and appointment visibility",
        "What do I need to complete? — Form and task status",
        "What information do I already have? — Patient history and previous records",
        "What needs attention? — Incomplete forms and upcoming appointments",
      ],
    },
    {
      type: "narrative",
      id: "dashboard-memory",
      title: "The dashboard as external memory",
      content:
        "For a practitioner managing many patients, the dashboard can act as an external memory for the workflow — surfacing upcoming appointments, incomplete work, completed forms, and active patient records without requiring Jennifer to reconstruct her day from memory.",
    },
    // 09 — Capture → Organise → Communicate
    {
      type: "phase",
      id: "phase-story-layers",
      navLabel: "Product Story",
      phase: "09 — Capture → Organise → Communicate",
      title: "Three layers beyond the form",
      description:
        "The product story moves from collecting social-health context to structuring it for reuse to sharing it with clinical teams.",
    },
    {
      type: "principles",
      id: "product-layers",
      title: "Capture · Organise · Communicate",
      subtitle:
        "Three product layers that turn a survey into a usable clinical workflow.",
      layout: "layers",
      items: [
        {
          title: "Capture",
          description:
            "Collect the patient's social-health context through a structured SDOH survey — income, employment, food security, housing, and living conditions.",
        },
        {
          title: "Organise",
          description:
            "Store and structure the information in patient records so it remains findable, reviewable, and connected to appointments and form status.",
        },
        {
          title: "Communicate",
          description:
            "Turn captured information into reports and snapshots that can be shared with doctors — connecting social context to treatment decisions.",
        },
      ],
    },
    // 10 — Wireframes
    {
      type: "phase",
      id: "phase-wireframes",
      navLabel: "Wireframes",
      phase: "10 — Wireframes",
      title: "Structure before visual refinement",
      description:
        "Wireframes tested whether Jennifer could find patients, start assessments, track incomplete work, and move information toward reporting — before investing in visual polish.",
    },
    {
      type: "gallery",
      id: "wireframes",
      title: "High-fidelity wireframe exploration",
      subtitle:
        "The wireframing phase asked: Can Jennifer find the right patient? Does she know where to start? Can she identify incomplete work and return to unfinished assessments?",
      columns: 2,
      images: [
        {
          src: img("wf-login.png"),
          alt: "Login wireframe for SDOH Patient Pathway Tool",
          caption: "Sign in",
          width: 1022,
          height: 574,
        },
        {
          src: img("wf-create-profile.png"),
          alt: "Create profile wireframe",
          caption: "Create profile",
          width: 1022,
          height: 574,
        },
        {
          src: img("wf-upload-documents.png"),
          alt: "Upload documents wireframe",
          caption: "Upload documents",
          width: 1022,
          height: 574,
        },
        {
          src: img("wf-dashboard.png"),
          alt: "Practitioner dashboard wireframe",
          caption: "Dashboard",
          width: 1022,
          height: 574,
        },
        {
          src: img("wf-patients.png"),
          alt: "Patients list wireframe",
          caption: "Patients list",
          width: 1022,
          height: 574,
        },
        {
          src: img("wf-add-patient-wireframe.png"),
          alt: "Add new patient wireframe",
          caption: "Add new patient",
          width: 1022,
          height: 934,
        },
        {
          src: img("wf-patient-snapshot.png"),
          alt: "Patient snapshot wireframe with triggers and actions",
          caption: "Patient snapshot",
          width: 1022,
          height: 1084,
        },
        {
          src: img("wf-sdoh-form.png"),
          alt: "SDOH My World assessment form wireframe",
          caption: "SDOH form",
          width: 1026,
          height: 686,
        },
        {
          src: img("wf-appointments-list.png"),
          alt: "Appointments list wireframe",
          caption: "Appointments list",
          width: 1022,
          height: 572,
        },
        {
          src: img("wf-appointments-calendar.png"),
          alt: "Appointments calendar wireframe",
          caption: "Appointments calendar",
          width: 1022,
          height: 574,
        },
        {
          src: img("wf-reminders.png"),
          alt: "Reminders settings for incomplete surveys",
          caption: "Reminders",
          width: 1022,
          height: 586,
        },
        {
          src: img("wf-profile.png"),
          alt: "Profile settings wireframe",
          caption: "Profile",
          width: 1022,
          height: 624,
        },
      ],
    },
    // 11 — Key UX Decisions
    {
      type: "phase",
      id: "phase-decisions",
      navLabel: "Decisions",
      phase: "11 — Key UX Decisions",
      title: "Five decisions that shape the workflow",
      description:
        "Each decision connects a practitioner friction to a specific design response — framed as expected value, not measured outcomes.",
    },
    {
      type: "decision",
      id: "decision-patient-record",
      number: "01",
      title: "Centralise patient information",
      context:
        "Patient information can become fragmented across paper forms, legacy systems, and incomplete records — making it hard for Jennifer to find and review what she needs before a visit.",
      rationale:
        "A structured digital patient experience — directory, intake, and snapshot — keeps patient context in one place. Jennifer can search patients, add new records, and review triggers and actions without switching systems.",
      images: [
        {
          src: img("patients-list.png"),
          alt: "Patients list with search and practitioner assignment",
          caption: "Patient directory — find and open the right record",
          width: 1070,
          height: 602,
        },
        {
          src: img("patient-snapshot.png"),
          alt: "Patient snapshot with triggers and actions",
          caption: "Patient snapshot — triggers and next actions in one place",
          width: 1070,
          height: 926,
        },
        {
          src: img("wf-add-patient.png"),
          alt: "Add new patient wireframe intake form",
          caption: "Add patient — structured intake before the visit",
          width: 1024,
          height: 899,
        },
      ],
    },
    {
      type: "decision",
      id: "decision-completion",
      number: "02",
      title: "Surface completion status",
      context:
        "A busy practitioner may not remember which forms are complete across a 24-patient day — creating invisible anxiety about unfinished work.",
      rationale:
        "The dashboard and patient views make completed and incomplete work visible at a glance. Form progress becomes part of the workload overview, not something Jennifer has to reconstruct from memory.",
      images: [
        {
          src: img("dashboard-practitioner.png"),
          alt: "Practitioner dashboard with completed and incomplete survey counts",
          caption: "Dashboard — completed vs incomplete work at a glance",
          width: 1070,
          height: 600,
        },
        {
          src: img("patients-list.png"),
          alt: "Patients list showing snapshot counts per patient",
          caption: "Patients list — snapshot completion visible per record",
          width: 1070,
          height: 602,
        },
      ],
    },
    {
      type: "decision",
      id: "decision-appointments",
      number: "03",
      title: "Make appointments visible",
      context:
        "High patient volume creates a risk of forgotten appointments — especially when Jennifer moves between hospital, clinic, and home contexts.",
      rationale:
        "Upcoming appointments surface on the dashboard and in a dedicated scheduling view. Jennifer can see her week at a glance and receive reminders for scheduled form-filling sessions.",
      images: [
        {
          src: img("schedule-appointments.png"),
          alt: "Weekly appointment calendar",
          caption: "Calendar view — the week at a glance",
          width: 1024,
          height: 575,
        },
        {
          src: img("schedule-list.png"),
          alt: "Appointments list view",
          caption: "List view — scan by patient and type",
          width: 1024,
          height: 575,
        },
        {
          src: img("reminders-settings.png"),
          alt: "Reminders settings for incomplete surveys",
          caption: "Reminders — stay ahead of scheduled form sessions",
          width: 1024,
          height: 589,
        },
      ],
    },
    {
      type: "decision",
      id: "decision-sdoh-form",
      number: "04",
      title: "Structure the SDOH questionnaire",
      context:
        "SDOH covers a broad range of social circumstances — income, employment, food security, housing — that can feel overwhelming in a single unstructured conversation.",
      rationale:
        "The digital form organises questions into a manageable workflow with clear sections and progress. Jennifer can move through the survey efficiently and return to incomplete sections later.",
      images: [
        {
          src: img("sdoh-form.png"),
          alt: "My World SDOH questionnaire",
          caption: "My World — structured sections with progress",
          width: 1068,
          height: 770,
        },
      ],
      pointers: {
        title: "Patient details captured as",
        items: [
          "Basic information",
          "Vitals",
          "Surrounding information",
          "Health reaction information",
        ],
      },
    },
    {
      type: "decision",
      id: "decision-reporting",
      number: "05",
      title: "Connect forms to reporting",
      context:
        "Captured SDOH data has limited value if it cannot be communicated effectively to doctors and clinical teams.",
      rationale:
        "Patient snapshots and shareable reports connect survey responses to assessment and treatment information — making social context actionable beyond the initial form-filling session.",
      images: [
        {
          src: img("report-share.png"),
          alt: "Patient snapshot for clinical review",
          caption: "Patient snapshot — review before sharing",
          width: 1069,
          height: 979,
        },
        {
          src: img("share-snapshot.png"),
          alt: "Share snapshot modal for clinical teams",
          caption: "Share — send the snapshot to the clinical team",
          width: 1068,
          height: 602,
        },
      ],
    },
    // 12 — High-Fidelity UI
    {
      type: "phase",
      id: "phase-ui",
      navLabel: "UI Design",
      phase: "12 — High-Fidelity Design",
      title: "Screens grouped by what Jennifer is trying to do",
      description:
        "The final UI is organised by user task — not by feature list — with each group tied to a specific moment in the practitioner workflow.",
    },
    {
      type: "gallery",
      id: "ui-entry",
      title: "Help me get started",
      subtitle:
        "Sign-in and document onboarding from the final practitioner flow — establishing access before the clinical day begins.",
      columns: 2,
      images: [
        {
          src: img("login.png"),
          alt: "SDOH Patient Pathway Tool login screen",
          caption: "Sign in",
          width: 1054,
          height: 594,
        },
        {
          src: img("upload-documents.png"),
          alt: "Upload license documents onboarding screen",
          caption: "Upload credentials",
          width: 1068,
          height: 602,
        },
      ],
    },
    {
      type: "split",
      id: "ui-workload",
      title: "Help me manage my workload",
      content:
        "The overview brings appointment and form-progress signals together so Jennifer can identify outstanding work without opening every patient record.",
      bullets: [
        "Personalised greeting with daily context",
        "Completed survey count at a glance",
        "Upcoming appointments and incomplete form queue",
        "Persistent navigation: Dashboard, Patients, Schedule, Settings",
      ],
      image: {
        src: img("dashboard-practitioner.png"),
        alt: "SDOH Health practitioner dashboard — workload overview",
        width: 1070,
        height: 600,
      },
      reverse: true,
    },
    {
      type: "gallery",
      id: "ui-patient",
      title: "Help me manage a patient",
      subtitle:
        "From patient directory through snapshot review and scheduling — keeping patient context findable and actionable.",
      columns: 2,
      images: [
        {
          src: img("patients-list.png"),
          alt: "Patients list with search and filters",
          caption: "Find the right patient quickly",
          width: 1070,
          height: 602,
        },
        {
          src: img("patient-snapshot.png"),
          alt: "Patient snapshot with SDOH triggers and clinical actions",
          caption: "Review triggers and next actions",
          width: 1070,
          height: 926,
        },
        {
          src: img("schedule-appointments.png"),
          alt: "Weekly appointment calendar",
          caption: "Calendar view",
          width: 1024,
          height: 575,
        },
        {
          src: img("schedule-list.png"),
          alt: "Appointments list view",
          caption: "List view",
          width: 1024,
          height: 575,
        },
      ],
    },
    {
      type: "split",
      id: "ui-capture",
      title: "Help me capture social-health information",
      content:
        "The SDOH workflow turns a broad set of social-health questions into a more manageable practitioner task — with clear structure, progress, and the ability to save and resume.",
      bullets: [
        "Organised sections across social determinants",
        "Progress visible throughout the survey",
        "Designed for in-person and phone-based collection",
        "Sensitive topics handled with clear language and appropriate tone",
      ],
      image: {
        src: img("sdoh-form.png"),
        alt: "SDOH form — My World structured questionnaire",
        width: 1068,
        height: 770,
      },
    },
    {
      type: "gallery",
      id: "ui-communicate",
      title: "Help me communicate",
      subtitle:
        "Snapshots and share flows turn captured SDOH data into something clinicians can act on.",
      columns: 2,
      images: [
        {
          src: img("report-share.png"),
          alt: "Patient snapshot for clinical review",
          caption: "Patient snapshot",
          width: 1069,
          height: 979,
        },
        {
          src: img("share-snapshot.png"),
          alt: "Share snapshot with clinical teams",
          caption: "Share with the clinical team",
          width: 1068,
          height: 602,
        },
      ],
    },
    {
      type: "gallery",
      id: "ui-admin",
      title: "Admin — clinic operations",
      subtitle:
        "Admin surfaces from the Figma final designs — practitioner management, profile, security, and support.",
      columns: 2,
      images: [
        {
          src: img("admin-dashboard.png"),
          alt: "Admin dashboard with surveys and practitioners",
          caption: "Admin dashboard",
          width: 1024,
          height: 576,
        },
        {
          src: img("practitioner-info.png"),
          alt: "Practitioner information management",
          caption: "Practitioner information",
          width: 1136,
          height: 862,
        },
        {
          src: img("add-practitioner.png"),
          alt: "Add new practitioner with permissions",
          caption: "Add practitioner",
          width: 1134,
          height: 640,
        },
        {
          src: img("profile-settings.png"),
          alt: "Profile settings and credentials",
          caption: "Profile settings",
          width: 1130,
          height: 764,
        },
        {
          src: img("change-password.png"),
          alt: "Change password settings",
          caption: "Account security",
          width: 1130,
          height: 636,
        },
        {
          src: img("support-queries.png"),
          alt: "Support and queries inbox",
          caption: "Queries / support",
          width: 1130,
          height: 638,
        },
      ],
    },
    {
      type: "gallery",
      id: "ui-super-admin",
      title: "Super Admin — organisation control",
      subtitle:
        "Company-level administration kept separate from Jennifer's clinical day.",
      columns: 2,
      images: [
        {
          src: img("super-admin-dashboard.png"),
          alt: "Super Admin dashboard",
          caption: "Super Admin dashboard",
          width: 1130,
          height: 636,
        },
        {
          src: img("companies-admin.png"),
          alt: "Companies list administration",
          caption: "Companies",
          width: 1130,
          height: 634,
        },
        {
          src: img("add-company.png"),
          alt: "Add new company and default admin invite",
          caption: "Add company",
          width: 1130,
          height: 638,
        },
        {
          src: img("edit-admin.png"),
          alt: "Edit default admin settings",
          caption: "Edit default admin",
          width: 1130,
          height: 650,
        },
      ],
    },
    // 13 — Responsive
    {
      type: "phase",
      id: "phase-responsive",
      navLabel: "Responsive",
      phase: "13 — Responsive Experience",
      title: "Same workflow, different context",
      description:
        "Jennifer may move between hospital, clinic, and home — using mobile, desktop, and tablet across her day.",
    },
    {
      type: "narrative",
      id: "responsive-principle",
      title: "Preserving hierarchy across screen sizes",
      content:
        "The responsive experience should preserve core navigation, patient context, form progress, information hierarchy, and primary actions — while adapting density and interaction patterns to the available screen.\n\nThe source considers mobile, desktop/laptop, and iPad/tablet use. This represents a design direction to validate, not a claim of full responsive implementation across every screen.",
      bullets: [
        "Core navigation remains consistent",
        "Patient context persists across contexts",
        "Form progress visible on any device",
        "Primary actions stay within easy reach",
      ],
    },
    // 14 — Accessibility
    {
      type: "phase",
      id: "phase-accessibility",
      navLabel: "Accessibility",
      phase: "14 — Accessibility & Sensitive Information",
      title: "Design considerations for healthcare context",
      description:
        "Because SDOH information can concern personal circumstances, privacy and appropriate access should be treated as first-class UX considerations.",
    },
    {
      type: "narrative",
      id: "accessibility-considerations",
      title: "Proposed design considerations — not compliance claims",
      content:
        "A production-ready healthcare product should account for readability, form clarity, keyboard and screen-reader access, focus states, error handling, colour-independent status indicators, save/resume behaviour, privacy states, and responsive layouts.",
      layout: "highlights",
      bullets: [
        "Readable typography and clear form labels",
        "Keyboard accessibility and screen-reader compatibility",
        "Strong focus states and clear error messages",
        "Colour-independent status indicators",
        "Save/resume for interrupted form sessions",
        "Clear privacy and access boundaries for sensitive SDOH data",
      ],
    },
    // 15 — Validation
    {
      type: "phase",
      id: "phase-validation",
      navLabel: "Validation",
      phase: "15 — What I Would Validate Next",
      title: "Proposed usability testing — not measured results",
      description:
        "The source material does not include usability-test metrics or clinical outcomes. These are proposed validation scenarios for a next phase.",
    },
    {
      type: "narrative",
      id: "validation-scenarios",
      title: "Representative test scenarios",
      content:
        "A strong next step would be testing whether the workflow actually reduces fragmentation for practitioners managing high patient volume.",
      layout: "highlights",
      bullets: [
        "Find a patient in the directory",
        "Start an SDOH assessment",
        "Complete part of the form",
        "Save and resume an incomplete form",
        "Identify incomplete forms from the dashboard",
        "Find upcoming appointments",
        "Review patient information and social context",
        "Understand what information is shared in a report",
      ],
    },
    {
      type: "two-column",
      id: "validation-measures",
      title: "Usability Testing & Validation Measures",
      subtitle:
        "Potential measures for a usability study — framed as design hypotheses, not reported outcomes.",
      columns: [
        {
          heading: "Behavioural measures",
          items: [
            "Task completion rate",
            "Time to locate a patient",
            "Time to start an assessment",
            "Form completion errors",
            "Time to resume an incomplete form",
            "Time to identify upcoming appointments",
            "Number of interactions for key tasks",
          ],
        },
        {
          heading: "Qualitative signals",
          items: [
            "Can Jennifer find the right patient quickly?",
            "Does she understand where to begin an assessment?",
            "Does form progress feel clear and manageable?",
            "Can she identify unfinished work without anxiety?",
            "Does the dashboard reduce cognitive load?",
            "User confidence and perceived ease of use",
          ],
        },
      ],
    },
    // 16 — Future
    {
      type: "phase",
      id: "phase-future",
      navLabel: "Future",
      phase: "16 — Future Opportunities",
      title: "Beyond the initial workflow",
      description:
        "These are future directions to explore — not features confirmed as implemented in the current design.",
    },
    {
      type: "principles",
      id: "future-opportunities",
      title: "Where the concept could evolve",
      subtitle:
        "Exploratory directions for a next phase — not features confirmed in the current design.",
      layout: "future",
      items: [
        {
          title: "Longitudinal patient context",
          description: "Make previous SDOH assessments easier to review over time.",
        },
        {
          title: "Referral support",
          description: "Connect identified needs with relevant community services.",
        },
        {
          title: "Better reporting",
          description: "Create concise summaries for clinical teams.",
        },
        {
          title: "Follow-up support",
          description: "Remind practitioners about incomplete assessments or scheduled interactions.",
        },
      ],
    },
    // 17 — Reflection & Takeaway
    {
      type: "phase",
      id: "phase-reflection",
      navLabel: "Reflection",
      phase: "17 — Reflection",
      title: "Making information manageable enough to be useful",
      description:
        "The most important lesson: the difficult part is not collecting more information — it is making information manageable enough to be useful.",
    },
    {
      type: "quote",
      id: "final-takeaway",
      content:
        "SDOH Health is not simply a digital replacement for a paper questionnaire. It is an exploration of how UX can make complex social-health information easier for practitioners to capture, organise and communicate.",
    },
  ],
  reflection: {
    title: "Capture the human context. Organise the complexity. Make it useful.",
    items: [
      {
        number: "01",
        title: "The workflow is the product",
        content:
          "The form is only one part of the experience. Patient management, appointments, form status, review, and reporting are what make SDOH capture useful in a real clinical day.",
      },
      {
        number: "02",
        title: "Progress visibility reduces cognitive load",
        content:
          "Surfacing completed forms, incomplete work, and upcoming appointments on the dashboard acts as external memory — more valuable than notification badges alone.",
      },
      {
        number: "03",
        title: "Context must reach clinicians",
        content:
          "SDOH data only creates value when it reaches doctors in an actionable form. Connecting capture to communication closes the loop between social context and treatment decisions.",
      },
    ],
  },
};
