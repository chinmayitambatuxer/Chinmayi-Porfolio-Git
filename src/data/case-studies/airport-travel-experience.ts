import type { CaseStudy } from "@/types/case-study";
import { asset } from "@/lib/assets";

const img = (file: string) => asset(file);

export const airportTravelExperience: CaseStudy = {
  slug: "airport-travel-experience",
  client: "Travel",
  title: "Airport Travel Experience",
  headline: "Turning layover anxiety into confident navigation",
  summary:
    "An airport guide application that reduces passenger anxiety during layovers — with navigation, live flight updates, and personalised recommendations for a smoother journey.",
  tags: ["Mobile App", "Travel UX", "Wayfinding", "Passenger Experience"],
  heroImage: "/images/case-studies/airport-travel-experience/hero.png",
  theme: {
    accent: "#4A6FA5",
    accentSoft: "#EEF3FA",
    accentMuted: "#7A9BC4",
  },
  domain: "Travel & Hospitality",
  role: "UX Designer",
  team: "Solo design — academic / concept project",
  timeline: "2022",
  platform: "Mobile application",
  overview:
    "A mobile airport companion for passengers facing long layovers — combining floor-level navigation, live flight updates, amenity discovery, and personalised recommendations to reduce anxiety in complex terminals.",
  contribution: [
    "Problem framing and passenger pain-point research",
    "Concept definition and feature prioritisation",
    "Mobile UI flows and wireframes",
    "Iterative screen design across core journeys",
  ],
  metrics: [
    { value: "4", label: "Core pain points" },
    { value: "Mobile", label: "First platform" },
  ],
  goal: "Reduce passenger anxiety during long layovers by providing real-time navigation, flight updates, and personalised airport guidance in one mobile experience.",
  challenge:
    "Airports are complex, time-pressured environments where gate changes, delays, and spatial disorientation compound stress — especially for travellers with tight connections.",
  outcome:
    "A mobile-first airport companion with floor-level navigation, live flight tracking, amenity discovery, and personalised recommendations — addressing four core passenger pain points identified through research.",
  sections: [
    {
      type: "phase",
      id: "phase-discovery",
      navLabel: "Discovery",
      phase: "01 — Discovery",
      title: "When the airport becomes the destination",
      description:
        "Long layovers turn terminals into temporary homes — with gate anxiety, spatial confusion, and document stress at every turn.",
    },
    {
      type: "narrative",
      id: "problem",
      label: "The problem",
      title: "When the airport becomes the destination",
      content:
        "Long layovers transform airports from transit points into temporary homes. Passengers face gate changes without warning, terminal confusion, delayed flights with nowhere to go, and the ever-present fear of lost documents. The experience isn't just inconvenient — it's emotionally overwhelming, especially for infrequent travellers and international passengers navigating unfamiliar layouts.",
    },
    {
      type: "cards",
      id: "pain-points",
      title: "Four friction points inside every terminal",
      subtitle: "Brainstorming session outputs mapped to passenger journey stages.",
      cards: [
        {
          title: "Getting lost",
          description:
            "Spatial awareness varies wildly. Even experienced travellers get disoriented in large, multi-level terminals with inconsistent signage.",
          tag: "Navigation",
        },
        {
          title: "Terminal confusion",
          description:
            "Flights assigned to one terminal at booking often move to another. Passengers arrive at the wrong gate with minutes to spare.",
          tag: "Information",
        },
        {
          title: "Delay dead time",
          description:
            "Flight delays leave passengers stranded without knowing where restrooms, food, or quiet spaces are relative to their gate.",
          tag: "Amenities",
        },
        {
          title: "Document anxiety",
          description:
            "Boarding passes, passports, and visas scattered across bags and apps create check-in stress at critical moments.",
          tag: "Documents",
        },
      ],
    },
    {
      type: "two-column",
      id: "concept",
      title: "One app, five experience pillars",
      columns: [
        {
          heading: "Core features",
          items: [
            "Airport floor maps with turn-by-turn navigation",
            "Real-time flight and gate change notifications",
            "Amenity locator — food, restrooms, lounges, charging",
            "Personalised recommendations based on traveller profile",
            "Digital boarding pass and mobile check-in support",
          ],
        },
        {
          heading: "Future roadmap",
          items: [
            "Integrated ticket booking",
            "Lounge access management",
            "Accessibility routing for mobility needs",
            "Multi-airport trip planning",
            "Companion sharing for group travel",
          ],
        },
      ],
    },
    {
      type: "phase",
      id: "phase-concept",
      navLabel: "Concept",
      phase: "02 — Concept & decisions",
      title: "From pain points to experience pillars",
      description:
        "Brainstorming outputs and research insights shaped a map-first mobile companion for stressed passengers.",
    },
    {
      type: "findings",
      id: "decisions",
      title: "Key design decisions",
      subtitle: "How research insights translated into interaction patterns.",
      items: [
        {
          title: "Map-first, not list-first",
          finding:
            "Passengers under time pressure think spatially — 'where is my gate?' not 'what's on page 3?'",
          implication:
            "Home screen leads with an interactive airport map centred on the user's current location.",
        },
        {
          title: "Proactive gate changes",
          finding:
            "Terminal reassignment is the single highest-anxiety event in a layover.",
          implication:
            "Push notifications with updated walking directions, not just text alerts.",
        },
        {
          title: "Delay = discovery opportunity",
          finding:
            "Passengers with 2+ hour delays actively seek amenities but don't know what's nearby.",
          implication:
            "Delay mode surfaces time-appropriate recommendations based on remaining layover duration.",
        },
        {
          title: "Documents in one thumb-reach",
          finding:
            "Boarding pass hunting at the gate creates bottlenecks and stress.",
          implication:
            "Persistent document wallet accessible from every screen via bottom navigation.",
        },
      ],
    },
    {
      type: "phase",
      id: "phase-design",
      navLabel: "Design",
      phase: "03 — Wireframes & iteration",
      title: "Exploring navigation under time pressure",
      description:
        "Mobile wireframes iterated on map density, alert patterns, and the path from arrival to boarding.",
    },
    {
      type: "gallery",
      id: "wireframes",
      title: "Mobile wireframes — from arrival to boarding",
      subtitle: "Iterating on navigation density, alert patterns, and onboarding flow.",
      columns: 3,
      images: [
        { src: img("WF Mobile Device Frame.png"), alt: "Airport app home screen wireframe", caption: "Home & map" },
        { src: img("WF Mobile Device Frame-1.png"), alt: "Flight status wireframe", caption: "Flight status" },
        { src: img("WF Mobile Device Frame-2.png"), alt: "Gate navigation wireframe", caption: "Gate navigation" },
        { src: img("WF Mobile Device Frame-3.png"), alt: "Amenity search wireframe", caption: "Amenity search" },
        { src: img("WF Mobile Device Frame-4.png"), alt: "Delay notification wireframe", caption: "Delay alerts" },
        { src: img("WF Mobile Device Frame-5.png"), alt: "Boarding pass wireframe", caption: "Boarding pass" },
        { src: img("WF Mobile Device Frame-6.png"), alt: "Profile setup wireframe", caption: "Profile setup" },
        { src: img("WF Mobile Device Frame-7.png"), alt: "Recommendations wireframe", caption: "Recommendations" },
        { src: img("WF Mobile Device Frame-8.png"), alt: "Terminal map wireframe", caption: "Terminal map" },
      ],
    },
    {
      type: "gallery",
      id: "iterations",
      title: "Refining the passenger journey",
      subtitle: "Later iterations exploring check-in flow, settings, and trip summary.",
      columns: 3,
      images: [
        { src: img("WF Mobile Device Frame-9.png"), alt: "Check-in flow wireframe", caption: "Mobile check-in" },
        { src: img("WF Mobile Device Frame-10.png"), alt: "Trip summary wireframe", caption: "Trip summary" },
        { src: img("WF Mobile Device Frame-11.png"), alt: "Settings wireframe", caption: "Settings" },
      ],
    },
  ],
  reflection: {
    title: "Designing for stress, not leisure",
    items: [
      {
        number: "01",
        title: "Anxiety is the real user",
        content:
          "Airport UX exists in a different emotional context than lifestyle apps — users are tired, rushed, and afraid of missing something critical.",
      },
      {
        number: "02",
        title: "Proactive beats comprehensive",
        content:
          "Spatial navigation and timely notifications mattered more than exhaustive information architecture in concept exploration.",
      },
      {
        number: "03",
        title: "What I'd explore next",
        content:
          "Deeper validation with real layover scenarios and accessibility testing for passengers with mobility or language barriers.",
      },
    ],
  },
};
