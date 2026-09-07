import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("work-space", file);

// Mobile screens render portrait (~9:19).
const PHONE = { width: 360, height: 760 };

export const workSpace: CaseStudy = {
  slug: "work-space",
  client: "Concept · Co-working booking app",
  title: "Work Space",
  headline: "Book a space for efficient working",
  summary:
    "A mobile app concept for booking a nearby, COVID-safe place to work — helping people frustrated by working from home find a calm, well-equipped workspace and book it by the hour.",
  tags: ["Mobile Application", "UX Research", "Booking Flow"],
  heroImage: img("hero.png"),
  theme: {
    accent: "#3B5BA5",
    accentSoft: "#EEF2FB",
    accentMuted: "#8AA0D0",
  },
  domain: "Productivity",
  role: "UX Designer",
  team: "Solo — concept project",
  timeline: "2021",
  platform: "Mobile app (iOS & Android)",
  overview:
    "Work Space is an app where people can register and book a working space near them. With so many struggling to work from home during COVID-19, the idea was to make a genuinely good, safe place to work easy to find — book a room based on your needs and work without disturbance.",
  contribution: [
    "User requirement gathering",
    "Competitive analysis",
    "User survey and research synthesis",
    "Persona development",
    "Task flow definition",
    "Wireframes and final UI",
  ],
  metrics: [
    { value: "~20", label: "Survey participants" },
    { value: "25\u201340", label: "Primary users" },
    { value: "E2E", label: "UX ownership" },
  ],
  goal: "Give people troubled by working from home an easy way to find, compare, and book a nearby, COVID-safe workspace that has the facilities they need.",
  challenge:
    "Working from home broke people's focus — kids, chores, and unreliable power and internet. Existing tools only handled group meeting rooms, hid nearby options, and buried price and availability until the very end.",
  outcome:
    "A mobile app concept to discover nearby workspaces, compare them on price, ratings, and facilities, check live location and availability, and book and pay for exactly the time needed — with COVID-safety front and centre.",
  outcomeMetrics: [
    {
      value: "~20",
      label: "Survey participants",
      description: "Recruited through a Google Form survey",
    },
    {
      value: "25\u201340",
      label: "Primary user age",
      description: "Working professionals disrupted by WFH",
    },
    {
      value: "1",
      label: "Indirect competitor studied",
      description: "WORKA — a meeting/conference booking app",
    },
  ],
  sections: [
    // 01 — Context
    {
      type: "phase",
      id: "phase-context",
      navLabel: "Context",
      phase: "01 — Context",
      title: "When home stopped working as an office",
      description:
        "Offices closed overnight, and homes became workplaces they were never meant to be — full of interruptions, and short on the calm and connectivity that focused work needs.",
    },
    {
      type: "narrative",
      id: "about",
      title: "About Work Space",
      content:
        "Work Space is an organisation where you can register or book a place to work. During the shift to working from home, many people struggled to stay productive. The aim was simple: make a genuinely good workspace available and easy to book, so people can work near home without disturbance.\n\nUsers open the app to find places to work that follow proper COVID-19 precautions. They can choose a space by how near it is, its cost, and whether it has the Wi-Fi and room they need — then book it, pay online, and work for exactly the time they require.",
    },
    {
      type: "quote",
      id: "highlight",
      content:
        "During COVID-19, people wanted to keep following safety precautions while still working in a good, focused environment.",
    },
    {
      type: "process",
      id: "process",
      title: "The design process",
      steps: [
        "Requirement Gathering",
        "Competitive Analysis",
        "Research Insights",
        "Persona Creation",
        "Task Flow",
        "Wireframes",
        "Prototype",
      ],
      footnote:
        "Structured as a double-diamond: Discover, Define, Ideate, and Design.",
    },
    // 02 — Discover
    {
      type: "phase",
      id: "phase-discover",
      navLabel: "Discover",
      phase: "02 — Discover",
      title: "Understanding what people actually needed",
      description:
        "Requirement gathering and a competitive review defined what a good workspace-booking experience had to get right.",
    },
    {
      type: "narrative",
      id: "requirements",
      title: "What people wanted from a workspace",
      content:
        "Before designing screens, I gathered the things people said they needed from a place to work near home during the pandemic.",
      bullets: [
        "Good workplaces nearby, with proper COVID-19 precautions",
        "All-time Wi-Fi connectivity and reliable power",
        "The ability to check availability before travelling",
        "A price comparison across the places available",
        "Ratings and photographs of each place",
        "Small comforts — like a coffee machine on site",
      ],
    },
    {
      type: "two-column",
      id: "competitive",
      title: "Competitive analysis — WORKA",
      subtitle:
        "WORKA is an indirect competitor: an app to book places for meetings and conferences. It got some things right, and left clear gaps.",
      columns: [
        {
          heading: "What worked",
          items: [
            "Location and directions to the workplace",
            "Most important facilities listed",
            "Availability confirmed after viewing place details",
            "Good filter options",
            "Clear information on COVID safety measures",
          ],
        },
        {
          heading: "Where it fell short",
          items: [
            "Only for group meetings and conferences",
            "Places hidden until you share your location",
            "No nearby options surfaced",
            "Must enter all booking details before seeing a place",
            "Sometimes shows \u201cunavailable\u201d only after all that effort",
            "Lowest price not shown on the details page",
          ],
        },
      ],
    },
    {
      type: "narrative",
      id: "competitive-takeaway",
      title: "The gap to design into",
      content:
        "WORKA made people do the work before showing value — enter everything, then find out a place is unavailable, with the cheapest option hidden. Work Space could win by putting nearby options, price, ratings, and availability up front, for individuals rather than groups.",
    },
    // 03 — Define
    {
      type: "phase",
      id: "phase-define",
      navLabel: "Define",
      phase: "03 — Define",
      title: "From survey signals to a real person",
      description:
        "A short survey of around 20 people, then a persona to keep every decision grounded in a real situation.",
    },
    {
      type: "table",
      id: "survey",
      title: "What the survey told us",
      subtitle: "Around 20 people responded through a Google Form survey.",
      layout: "styled",
      headers: ["Survey signal", "What it told us"],
      rows: [
        ["60% rated their WFH experience only average", "Home wasn't working as a workplace"],
        ["Ages 25\u201340 were the primary users", "Design for busy working professionals"],
        ["53% of respondents were women struggling with WFH", "Home distractions aren't shared evenly"],
        ["54.5% were disrupted by kids and chores", "The core problem is focus, not tools"],
      ],
    },
    {
      type: "narrative",
      id: "research-insights",
      title: "Common requirements from users",
      content: "Across responses, the same needs came up again and again.",
      layout: "highlights",
      bullets: [
        "A calm and peaceful environment",
        "A work-friendly space with good infrastructure",
        "High-speed Wi-Fi with reliable electricity",
        "A comfortable place to sit and work",
        "The basic essentials needed for a working day",
      ],
    },
    {
      type: "split",
      id: "persona",
      title: "Meet Soham — frustrated by working from home",
      label: "Persona",
      content:
        "Soham is a 29-year-old IT engineer in Pune. He's a corporate employee working from home with two young kids, and he's constantly interrupted. He can't focus the way he used to at the office — and he needs a calm place to work efficiently.",
      bullets: [
        "Goals: book a workspace with all the facilities he needs, and compare prices in one place",
        "Pain points: frustrated by WFH, disturbed by kids and chores, and hit by internet and power issues at home",
        "Motivations: AC, coffee, a peaceful space, reliable Wi-Fi and power — plus reviews, ratings, and photos he can trust",
      ],
      image: {
        src: img("persona-soham.png"),
        alt: "Persona portrait for Soham, a corporate employee",
        width: 600,
        height: 600,
      },
    },
    {
      type: "quote",
      id: "persona-quote",
      content:
        "Offices are closed but I am not able to focus on my work at home. I need a calm place to work efficiently.",
      attribution: "Soham, 29 — Corporate employee",
    },
    // 04 — Ideate
    {
      type: "phase",
      id: "phase-ideate",
      navLabel: "Ideate",
      phase: "04 — Ideate",
      title: "Mapping the booking journey",
      description:
        "A task flow tested the path a user takes from opening the app to a confirmed booking — before any screens were designed.",
    },
    {
      type: "narrative",
      id: "taskflow",
      title: "Scenario — booking a nearby space for five days",
      content:
        "Soham wants to book a nearby workplace for five days of work. From the home screen he picks a workspace, reads its description, and either chats, checks its location, or checks availability. If it's free, he enters his details and proceeds to checkout for a confirmed booking; if it isn't, he heads back to search.",
    },
    {
      type: "process",
      id: "taskflow-steps",
      title: "The happy path",
      steps: [
        "Home screen",
        "Select a workspace",
        "Space description",
        "Check availability & location",
        "Enter details",
        "Book / checkout",
        "Confirmation",
      ],
    },
    {
      type: "image",
      id: "taskflow-diagram",
      title: "Task flow",
      caption:
        "The full task flow, including the branch where a space isn't available and the user returns to search.",
      src: img("task-flow.png"),
      alt: "Task flow diagram for booking a workspace",
      width: 1400,
      height: 760,
      layout: "contained",
    },
    // 05 — Design
    {
      type: "phase",
      id: "phase-design",
      navLabel: "Design",
      phase: "05 — Design",
      title: "From wireframes to final UI",
      description:
        "Low-fidelity wireframes established the structure of each screen before the final visual design brought it to life.",
    },
    {
      type: "gallery",
      id: "wireframes",
      title: "Wireframes",
      subtitle: "The core screens, sketched before styling.",
      columns: 3,
      images: [
        { src: img("wf-signin.png"), alt: "Sign in wireframe", caption: "Sign in", width: PHONE.width, height: PHONE.height },
        { src: img("wf-onboarding.png"), alt: "Onboarding wireframe", caption: "Onboarding", width: PHONE.width, height: PHONE.height },
        { src: img("wf-home.png"), alt: "Home screen wireframe", caption: "Home", width: PHONE.width, height: PHONE.height },
        { src: img("wf-space.png"), alt: "Space description wireframe", caption: "Space description", width: PHONE.width, height: PHONE.height },
        { src: img("wf-location.png"), alt: "Check location wireframe", caption: "Check location", width: PHONE.width, height: PHONE.height },
        { src: img("wf-availability.png"), alt: "Check availability wireframe", caption: "Check availability", width: PHONE.width, height: PHONE.height },
        { src: img("wf-booking.png"), alt: "Confirm booking wireframe", caption: "Confirm booking", width: PHONE.width, height: PHONE.height },
      ],
    },
    {
      type: "gallery",
      id: "final-ui",
      title: "Final design",
      subtitle: "Key screens from the final UI, from first launch to a confirmed booking.",
      columns: 3,
      images: [
        { src: img("ui-splash.png"), alt: "Splash screen", caption: "Splash", width: PHONE.width, height: PHONE.height },
        { src: img("ui-onboarding.png"), alt: "Onboarding screen", caption: "Onboarding", width: PHONE.width, height: PHONE.height },
        { src: img("ui-home.png"), alt: "Home screen", caption: "Home", width: PHONE.width, height: PHONE.height },
        { src: img("ui-location.png"), alt: "Select location screen", caption: "Select location", width: PHONE.width, height: PHONE.height },
        { src: img("ui-space.png"), alt: "Space description screen", caption: "Space description", width: PHONE.width, height: PHONE.height },
        { src: img("ui-availability.png"), alt: "Check availability screen", caption: "Check availability", width: PHONE.width, height: PHONE.height },
        { src: img("ui-booking.png"), alt: "Confirm booking screen", caption: "Confirm booking", width: PHONE.width, height: PHONE.height },
        { src: img("ui-bookings.png"), alt: "My bookings screen", caption: "My bookings", width: PHONE.width, height: PHONE.height },
        { src: img("ui-chat.png"), alt: "Chat screen", caption: "Chat", width: PHONE.width, height: PHONE.height },
      ],
    },
  ],
  reflection: {
    title: "What this project taught me",
    items: [
      {
        number: "01",
        title: "Show value before asking for effort",
        content:
          "The clearest lesson from the competitor was to surface nearby options, price, and availability up front — instead of making people fill in everything before they learn a place is unavailable.",
      },
      {
        number: "02",
        title: "Research kept the problem honest",
        content:
          "The survey reframed the brief: the real problem wasn't a lack of tools, it was a lack of focus at home — most disruption came from kids, chores, and unreliable power and internet.",
      },
      {
        number: "03",
        title: "Comparison belongs in one place",
        content:
          "People wanted to weigh price, ratings, facilities, and distance together. Bringing those into a single view was the difference between a booking tool and a genuinely useful one.",
      },
    ],
  },
};
