export type CaseStudyTheme = {
  accent: string;
  accentSoft: string;
  accentMuted: string;
};

export type Metric = {
  value: string;
  label: string;
  description?: string;
};

export type ReflectionItem = {
  number: string;
  title: string;
  content: string;
};

export type CaseStudySection =
  | {
      type: "phase";
      id: string;
      navLabel?: string;
      phase: string;
      title?: string;
      description?: string;
    }
  | {
      type: "narrative";
      id: string;
      navLabel?: string;
      label?: string;
      title: string;
      content: string;
      bullets?: string[];
      layout?: "default" | "tags" | "highlights";
      challenge?: {
        intro: string;
        quote: string;
      };
    }
  | {
      type: "quote";
      id: string;
      navLabel?: string;
      content: string;
      attribution?: string;
    }
  | {
      type: "image";
      id: string;
      navLabel?: string;
      title?: string;
      caption?: string;
      bullets?: string[];
      takeaways?: {
        keyTakeaway: string;
        opportunity: string;
        ratings?: { score: number; label: string }[];
      };
      src?: string;
      alt?: string;
      width?: number;
      height?: number;
      layout?: "full" | "contained" | "breakout";
      artifact?: "empathy-map";
    }
  | {
      type: "gallery";
      id: string;
      navLabel?: string;
      title?: string;
      subtitle?: string;
      images: {
        src: string;
        alt: string;
        caption?: string;
        bullets?: string[];
        width?: number;
        height?: number;
      }[];
      columns?: 2 | 3;
    }
  | {
      type: "split";
      id: string;
      navLabel?: string;
      title: string;
      label?: string;
      content: string;
      bullets?: string[];
      image?: { src: string; alt: string };
      artifact?: "connected-cockpit";
      reverse?: boolean;
    }
  | {
      type: "table";
      id: string;
      navLabel?: string;
      title: string;
      subtitle?: string;
      layout?: "default" | "cards" | "styled" | "insights";
      headers: string[];
      rows: string[][];
    }
  | {
      type: "cards";
      id: string;
      navLabel?: string;
      title: string;
      subtitle?: string;
      cards: { title: string; description: string; tag?: string }[];
    }
  | {
      type: "findings";
      id: string;
      navLabel?: string;
      title: string;
      subtitle?: string;
      items: { title: string; finding: string; implication: string }[];
    }
  | {
      type: "research";
      id: string;
      navLabel?: string;
      title: string;
      subtitle?: string;
      insights: {
        number: string;
        insight: string;
        evidence: string[];
        implication: string;
      }[];
    }
  | {
      type: "decision";
      id: string;
      navLabel?: string;
      number: string;
      title: string;
      context: string;
      rationale: string;
      options?: { label: string; description: string }[];
      image?: { src: string; alt: string };
    }
  | {
      type: "comparison";
      id: string;
      navLabel?: string;
      title: string;
      before: { src: string; alt: string; label: string };
      after: { src: string; alt: string; label: string };
      annotation?: string;
    }
  | {
      type: "process";
      id: string;
      navLabel?: string;
      title: string;
      steps: string[];
      footnote?: string;
      image?: { src: string; alt: string };
    }
  | {
      type: "two-column";
      id: string;
      navLabel?: string;
      title: string;
      subtitle?: string;
      columns: { heading: string; items: string[] }[];
    }
  | {
      type: "principles";
      id: string;
      navLabel?: string;
      title: string;
      subtitle?: string;
      layout?: "list" | "cards" | "manifest";
      items: { title: string; description: string; bullets?: string[] }[];
      image?: { src: string; alt: string };
    }
  | {
      type: "persona";
      id: string;
      navLabel?: string;
      title: string;
      name: string;
      role: string;
      description: string;
      goals: string;
      painPoints: string;
      motivations: string;
      image?: { src: string; alt: string };
    }
  | {
      type: "stats";
      id: string;
      navLabel?: string;
      title?: string;
      subtitle?: string;
      metrics: Metric[];
    }
  | {
      type: "validation";
      id: string;
      navLabel?: string;
      title: string;
      tested: string;
      method: string;
      learned: string;
      changed: string;
    }
  | {
      type: "visual-break";
      id: string;
      title?: string;
      src: string;
      alt: string;
      dark?: boolean;
    }
  | {
      type: "reflection";
      id: string;
      navLabel?: string;
      title: string;
      content: string;
      bullets?: string[];
    };

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  headline: string;
  summary: string;
  tags: string[];
  heroImage: string;
  theme: CaseStudyTheme;
  domain: string;
  role: string;
  team: string;
  timeline: string;
  platform?: string;
  overview: string;
  contribution: string[];
  goal: string;
  challenge: string;
  outcome: string;
  metrics?: Metric[];
  outcomeMetrics?: Metric[];
  sections: CaseStudySection[];
  reflection?: {
    title: string;
    items: ReflectionItem[];
  };
};
