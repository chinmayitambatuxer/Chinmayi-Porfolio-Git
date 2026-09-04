import type { CaseStudy } from "@/types/case-study";

export const clientDemoPortal: CaseStudy = {
  slug: "client-demo-portal",
  client: "Capgemini",
  title: "Client Demo Presentation Portal",
  headline: "One portal to showcase every capability",
  summary:
    "An internal presentation platform built at Capgemini to streamline client demos — replacing fragmented decks with a cohesive, role-based portal for showcasing solutions.",
  tags: ["Enterprise UX", "Presentation Portal", "B2B", "Web App"],
  heroImage: "/images/case-studies/client-demo-portal/hero.svg",
  theme: {
    accent: "#6B4C9A",
    accentSoft: "#F3EFFA",
    accentMuted: "#9B7EC4",
  },
  domain: "Enterprise",
  role: "Sr. UX Analyst",
  team: "Cross-functional with sales, delivery, and marketing",
  timeline: "2021 — 2023",
  platform: "Internal web portal",
  overview:
    "An internal presentation platform at Capgemini to streamline client demos — replacing fragmented decks with a cohesive, role-based portal for showcasing solutions across verticals.",
  contribution: [
    "End-to-end UX for portal structure and navigation",
    "Role-based access and admin flows",
    "Modular demo section architecture",
    "Stakeholder workshops and iterative validation",
  ],
  metrics: [
    { value: "Multi", label: "Client verticals" },
    { value: "E2E", label: "UX ownership" },
  ],
  goal: "Create a unified client demo portal that lets Capgemini teams present capabilities consistently, personalize by client context, and reduce prep time before sales engagements.",
  challenge:
    "Demo materials lived across PowerPoint decks, local files, and individual team folders. Each client meeting required manual assembly — inconsistent branding, outdated assets, and no role-based views for different stakeholders.",
  outcome:
    "A structured presentation portal with company profiles, role-based access, admin controls, and modular demo sections — enabling faster, more polished client engagements across verticals.",
  sections: [
    {
      type: "phase",
      id: "phase-context",
      navLabel: "Context",
      phase: "01 — Context",
      title: "When every demo starts from scratch",
      description:
        "Client presentations are the front door to engagements — yet teams were rebuilding demo flows for every meeting.",
    },
    {
      type: "narrative",
      id: "context",
      title: "From bespoke decks to a repeatable system",
      content:
        "At Capgemini, client presentations are the front door to multi-million-dollar engagements. Yet teams were rebuilding demo flows for every meeting — hunting for screenshots, updating company logos, and stitching together capabilities that already existed in the organization's knowledge base. The portal was conceived to turn demo preparation from a bespoke craft into a repeatable system.",
    },
    {
      type: "two-column",
      id: "stakeholders",
      title: "Three users, one platform",
      columns: [
        {
          heading: "Sales & delivery teams",
          items: [
            "Quick access to approved demo content by vertical",
            "Client-specific profile creation before meetings",
            "Consistent branding across all presentations",
            "Reduced prep time from hours to minutes",
          ],
        },
        {
          heading: "Administrators",
          items: [
            "Manage default content and company templates",
            "Control user roles and access permissions",
            "Update demo modules without redeploying decks",
            "Audit which capabilities are shown to which clients",
          ],
        },
        {
          heading: "Clients (viewers)",
          items: [
            "Polished, navigable presentation experience",
            "Contextual company branding and messaging",
            "Clear capability sections organized by need",
            "Professional first impression at every touchpoint",
          ],
        },
      ],
    },
    {
      type: "process",
      id: "process",
      title: "From fragmented decks to modular system",
      steps: [
        "Stakeholder Interviews",
        "Content Audit",
        "Information Architecture",
        "Wireframing",
        "Visual Design",
        "Usability Testing",
      ],
    },
    {
      type: "phase",
      id: "phase-research",
      navLabel: "Research",
      phase: "02 — Research & insights",
      title: "What sales teams actually need before a meeting",
      description:
        "Interviews with delivery leads revealed profile-first workflows, admin self-service, and modular content as non-negotiables.",
    },
    {
      type: "findings",
      id: "insights",
      title: "What we learned from sales teams",
      subtitle: "Interviews with delivery leads and pre-sales engineers.",
      items: [
        {
          title: "Profile-first, not content-first",
          finding:
            "Teams always started demos by establishing client context — industry, size, pain points — before showing capabilities.",
          implication:
            "Designed a profile creation flow as the entry point, not an afterthought.",
        },
        {
          title: "Admin burden kills adoption",
          finding:
            "If updating demo content required IT tickets, teams would revert to local PowerPoints.",
          implication:
            "Built self-service admin tools for editing default content and managing roles.",
        },
        {
          title: "Modularity over monolith",
          finding:
            "Different clients needed different capability subsets — no two demos were identical.",
          implication:
            "Structured content as composable modules that teams assemble per engagement.",
        },
        {
          title: "First impression is the product",
          finding:
            "The welcome screen set client expectations before a single feature was shown.",
          implication:
            "Invested heavily in onboarding and welcome experience design.",
        },
      ],
    },
    {
      type: "phase",
      id: "phase-solution",
      navLabel: "Solution",
      phase: "03 — Portal architecture",
      title: "A modular presentation system",
      description:
        "The portal establishes client context first, then assembles capability modules teams can tailor per engagement.",
    },
    {
      type: "narrative",
      id: "welcome",
      title: "The welcome experience sets the tone",
      content:
        "Before any capability is shown, the portal establishes context — personalized greeting, company branding, and a clear navigation path. This wasn't decoration; it was the difference between a generic pitch and a tailored engagement.",
    },
    {
      type: "cards",
      id: "modules",
      title: "Composable demo modules",
      subtitle: "Core building blocks teams assemble per client engagement.",
      cards: [
        {
          title: "Client profile & branding",
          description:
            "Company logo, industry context, and stakeholder details configured before the first slide.",
          tag: "Onboarding",
        },
        {
          title: "Capability sections",
          description:
            "Vertical-specific modules — cloud, data, AI, industry solutions — toggled per engagement.",
          tag: "Content",
        },
        {
          title: "Admin controls",
          description:
            "Self-service editing of default content, role permissions, and audit trails for compliance.",
          tag: "Governance",
        },
        {
          title: "Presentation shell",
          description:
            "Consistent navigation, progress indicators, and branded frames across every demo.",
          tag: "Experience",
        },
      ],
    },
    {
      type: "table",
      id: "ia",
      title: "Information architecture at a glance",
      headers: ["Area", "Primary user", "Key actions"],
      rows: [
        ["Welcome & profile", "Sales / delivery", "Create client context, select vertical"],
        ["Demo modules", "Sales / delivery", "Assemble capabilities, preview flow"],
        ["Admin console", "Administrator", "Edit defaults, manage roles, publish updates"],
        ["Client view", "External stakeholder", "Navigate presentation, view capabilities"],
      ],
    },
  ],
  reflection: {
    title: "Enterprise UX is systems UX",
    items: [
      {
        number: "01",
        title: "Workflow over widgets",
        content:
          "The portal succeeded by eliminating hours of manual demo prep — not because any single screen was visually striking.",
      },
      {
        number: "02",
        title: "Access shapes adoption",
        content:
          "Role-based views and admin self-service determined long-term usefulness as much as the presentation UI.",
      },
      {
        number: "03",
        title: "Modularity scales",
        content:
          "Composable content blocks let teams assemble client-specific demos without redesigning the system each time.",
      },
    ],
  },
};
