export type SiteStat = {
  value: string;
  label: string;
};

export type SiteExperience = {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
};

export type SiteEducation = {
  degree: string;
  institution: string;
  period: string;
  detail?: string;
};

export type SiteCertification = {
  name: string;
  issuer: string;
};

export const site = {
  name: "Chinmayi Negi",
  title: "Product Designer",
  subtitle: "UX & UI Designer",
  tagline:
    "Blending solution-oriented thinking with UX innovation, I turn challenges into intuitive, impactful experiences.",
  location: "Pune, India",
  email: "chinmayitambat24@gmail.com",
  phone: "+91 8698974736",
  resumeUrl: "/Resume_Chinmayi_Negi.pdf",
  profileImage: "/images/profile.jpg",
  social: {
    linkedin: "https://www.linkedin.com/in/chinmayinegi",
    behance: "https://www.behance.net/chinmayinegi",
    instagram: "https://www.instagram.com/chinmayinegi",
  },
  summary:
    "I'm a passionate, detail-oriented Product Designer with over 5 years of experience in UX design. I specialize in creating intuitive, user-centered digital experiences through design thinking — with a focus on accessibility, inclusiveness, and usability across automotive, healthcare, and e-commerce.",
  stats: [
    { value: "5+", label: "Years designing" },
    { value: "3", label: "Domains mastered" },
    { value: "10+", label: "Products shipped" },
  ] satisfies SiteStat[],
  awards: ["Star Award for Outstanding Performance — Tata Elxsi"],
  skills: [
    "HMI Design",
    "User-Centered Design",
    "UX Research",
    "UX Ideation",
    "Accessibility & Usability",
    "Interaction Design",
    "Design Systems",
    "Visual Design",
    "Wireframing",
    "Prototyping",
  ],
  tools: [
    "Figma",
    "Sketch",
    "Miro",
    "Photoshop",
    "Illustrator",
    "InVision",
    "Adobe XD",
    "Framer",
  ],
  experience: [
    {
      company: "Tata Elxsi",
      role: "Sr. UX Designer",
      period: "Sep 2023 — Present",
      description:
        "Designing next-generation in-vehicle HMI experiences for Tata Motors — from passenger displays to EV cockpit systems, working cross-functionally with engineering and supplier teams.",
      highlights: [
        "HMI for passenger & EV cockpit",
        "Tata Sierra experience design",
        "UX documentation & design guidelines",
      ],
    },
    {
      company: "Capgemini India",
      role: "Sr. UX Analyst",
      period: "Sep 2021 — Sep 2023",
      description:
        "Led end-to-end UX across enterprise clients — from customer journeys and wireframes to prototypes and handoff, including RFPs, POCs, and team leadership.",
      highlights: [
        "Client demo portal & enterprise portals",
        "Full UX lifecycle from research to delivery",
        "Star Award for outstanding performance",
      ],
    },
    {
      company: "Mindbowser Inc & SkillEdg",
      role: "Graphic & UI Designer (Intern)",
      period: "May 2021 — Aug 2021",
      description:
        "Foundation in UX research and visual design — conducting user interviews, building personas, and delivering wireframes through to polished UI prototypes.",
      highlights: [
        "SDOH health form portal",
        "Medical document management UI",
        "User research & prototyping",
      ],
    },
  ] satisfies SiteExperience[],
  education: [
    {
      degree: "B.F.A — Applied Arts",
      institution: "D.Y. Patil College of Applied Arts",
      period: "2017 — 2021",
      detail: "74%",
    },
    {
      degree: "HSC — Science",
      institution: "Maharashtra State Board",
      period: "2017",
    },
    {
      degree: "SSC",
      institution: "Maharashtra State Board",
      period: "2015",
    },
  ] satisfies SiteEducation[],
  certifications: [
    {
      name: "Google UX Design Certificate",
      issuer: "Coursera · Google",
    },
    {
      name: "CUXD — Certified UX Designer",
      issuer: "YOUXer Institute",
    },
    {
      name: "UI/UX Design for AR/VR",
      issuer: "Udemy",
    },
    {
      name: "Agile with Atlassian Jira",
      issuer: "Coursera · Atlassian",
    },
  ] satisfies SiteCertification[],
};

export const landingAccent = "#191d21";
