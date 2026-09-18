import type { ComponentType } from "react";
import Image from "next/image";
import type { CaseStudyTheme } from "@/types/case-study";

type ProcessStepsProps = {
  subtitle?: string;
  steps: string[];
  footnote?: string;
  image?: { src: string; alt: string };
  theme: CaseStudyTheme;
};

type IconProps = { color: string };

function parseStep(step: string): { label: string; description?: string } {
  const dash = step.includes(" — ") ? " — " : step.includes(" - ") ? " - " : null;
  if (!dash) {
    return { label: step };
  }
  const [label, description] = step.split(dash, 2);
  return { label: label.trim(), description: description.trim() };
}

function svgProps(color: string) {
  return {
    viewBox: "0 0 24 24",
    className: "h-6 w-6",
    fill: "none",
    "aria-hidden": true as const,
    stroke: color,
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

function DiscoverIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

function DefineIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </svg>
  );
}

function MapIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M4 6l6-2 6 2 4-1v13l-6 2-6-2-6 2V5z" />
      <path d="M10 4v13M14 6v13" />
    </svg>
  );
}

function PrioritiseIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M4 6h16M4 12h10M4 18h6" />
      <path d="M18 10v8M15 13l3 3 3-3" />
    </svg>
  );
}

function StructureIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="4" y="4" width="7" height="7" rx="1" />
      <rect x="13" y="4" width="7" height="4" rx="1" />
      <rect x="13" y="11" width="7" height="9" rx="1" />
      <path d="M7.5 11v9" />
    </svg>
  );
}

function DesignIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M4 20h16M6 16l8-8 4 4-8 8H6z" />
      <path d="M13 5l2 2" />
    </svg>
  );
}

function ValidateIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M12 3 4 7v5c0 4.2 3.2 8.1 8 9 4.8-.9 8-4.8 8-9V7l-8-4Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function UnderstandIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M6 20c1.5-3.5 4-5 6-5s4.5 1.5 6 5" />
      <path d="M12 11v2" />
    </svg>
  );
}

function RepresentIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <circle cx="12" cy="10" r="2.5" />
      <path d="M8 16h8" />
    </svg>
  );
}

function ExploreIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h6M7 13h10M7 17h4" />
    </svg>
  );
}

function ConnectIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.2 11 15.5 7.2M8.2 13l7.3 3.8" />
    </svg>
  );
}

function RefineIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <circle cx="12" cy="12" r="5" />
      <path d="M9.5 12 11 13.5 14.5 10" />
    </svg>
  );
}

function ResearchIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M8 6h8M8 10h5M8 14h8M8 18h3" />
      <path d="M5 4v16" />
    </svg>
  );
}

function AnalysisIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M4 18V6M4 18h16" />
      <path d="M8 16V10M12 16V7M16 16v-5" />
    </svg>
  );
}

function InsightsIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M12 3a7 7 0 0 1 4 12.7V19H8v-3.3A7 7 0 0 1 12 3Z" />
      <path d="M10 22h4" />
    </svg>
  );
}

function PersonaIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c1.8-4 4.2-6 7-6s5.2 2 7 6" />
    </svg>
  );
}

function FlowIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="3" y="5" width="6" height="4" rx="1" />
      <rect x="15" y="5" width="6" height="4" rx="1" />
      <rect x="9" y="15" width="6" height="4" rx="1" />
      <path d="M9 7H15M12 9v6" />
    </svg>
  );
}

function HomeScreenIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5Z" />
    </svg>
  );
}

function WorkspaceSelectIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
      <path d="M12 11v4M10 13h4" />
    </svg>
  );
}

function SpaceDescriptionIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </svg>
  );
}

function AvailabilityLocationIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="3" y="5" width="10" height="10" rx="1.5" />
      <path d="M5 3v2M10 3v2M3 8h10" />
      <path d="M6 11l1.5 1.5L10 10" />
      <path d="M18 9v6a2 2 0 0 1-4 0V9a2 2 0 0 1 4 0Z" />
      <circle cx="16" cy="9" r="0.9" fill={color} stroke="none" />
    </svg>
  );
}

function EnterDetailsIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M8 8h8M8 12h5" />
      <path d="M8 16h3" />
      <path d="M14 16h2" />
    </svg>
  );
}

function CheckoutIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <path d="M2 10h20" />
      <path d="M6 15h2" />
      <path d="M12 15h6" />
    </svg>
  );
}

function ConfirmationIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

function DefaultProcessIcon({ color }: IconProps) {
  return (
    <svg {...svgProps(color)}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2" />
    </svg>
  );
}

function iconForLabel(label: string): ComponentType<IconProps> {
  const normalized = label.toLowerCase();
  const first = normalized.split(/\s+/)[0]?.replace(/[^a-z]/g, "") ?? "";

  if (normalized.includes("home screen") || first === "home") {
    return HomeScreenIcon;
  }
  if (normalized.includes("workspace") && normalized.includes("select")) {
    return WorkspaceSelectIcon;
  }
  if (normalized.includes("space description")) {
    return SpaceDescriptionIcon;
  }
  if (
    normalized.includes("availability") ||
    (normalized.includes("check") && normalized.includes("location"))
  ) {
    return AvailabilityLocationIcon;
  }
  if (normalized.includes("enter details")) {
    return EnterDetailsIcon;
  }
  if (normalized.includes("checkout") || normalized.includes("book /")) {
    return CheckoutIcon;
  }
  if (normalized.includes("confirmation")) {
    return ConfirmationIcon;
  }

  const byFirst: Record<string, ComponentType<IconProps>> = {
    home: HomeScreenIcon,
    discover: DiscoverIcon,
    define: DefineIcon,
    map: MapIcon,
    prioritise: PrioritiseIcon,
    prioritize: PrioritiseIcon,
    structure: StructureIcon,
    design: DesignIcon,
    validate: ValidateIcon,
    understand: UnderstandIcon,
    represent: RepresentIcon,
    explore: ExploreIcon,
    connect: ConnectIcon,
    refine: RefineIcon,
    requirement: ResearchIcon,
    competitive: AnalysisIcon,
    research: InsightsIcon,
    persona: PersonaIcon,
    task: FlowIcon,
    wireframes: ExploreIcon,
    wireframing: ExploreIcon,
    prototype: DesignIcon,
    ideation: InsightsIcon,
    final: DesignIcon,
  };

  if (byFirst[first]) {
    return byFirst[first];
  }

  if (normalized.includes("gathering")) return ResearchIcon;
  if (normalized.includes("analysis")) return AnalysisIcon;
  if (normalized.includes("insights")) return InsightsIcon;
  if (normalized.includes("persona")) return PersonaIcon;
  if (normalized.includes("wireframe")) return ExploreIcon;
  if (normalized.includes("prototype")) return DesignIcon;
  if (normalized.includes("ui")) return DesignIcon;

  return DefaultProcessIcon;
}

export function ProcessSteps({
  subtitle,
  steps,
  footnote,
  image,
  theme,
}: ProcessStepsProps) {
  const parsed = steps.map(parseStep);

  return (
    <div className="mt-8">
      {subtitle && (
        <p className="cs-body-sm mt-3 max-w-2xl text-ink-muted">{subtitle}</p>
      )}

      <ol className="mt-10 lg:hidden">
        {parsed.map((step, index) => {
          const Icon = iconForLabel(step.label);
          const isLast = index === parsed.length - 1;

          return (
            <li key={step.label} className="grid grid-cols-[auto_1fr] gap-x-4">
              <div className="flex flex-col items-center">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border bg-white shadow-sm"
                  style={{ borderColor: theme.accentMuted }}
                >
                  <Icon color={theme.accent} />
                </div>
                {!isLast && (
                  <div
                    className="my-2 w-px flex-1 min-h-8"
                    style={{ backgroundColor: `${theme.accentMuted}99` }}
                    aria-hidden
                  />
                )}
              </div>
              <div className={isLast ? "pb-0" : "pb-8"}>
                <p className="pt-2.5 font-semibold leading-snug text-ink">
                  {step.label}
                </p>
                {step.description && (
                  <p className="cs-body-sm mt-1.5 leading-snug">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-10 hidden lg:block overflow-x-auto pb-2">
        <ol className="flex min-w-full items-start justify-between gap-2">
          {parsed.map((step, index) => {
            const Icon = iconForLabel(step.label);
            const isLast = index === parsed.length - 1;

            return (
              <li
                key={step.label}
                className="relative flex min-w-0 flex-1 flex-col items-center px-1 text-center"
              >
                {!isLast && (
                  <div
                    className="absolute left-[calc(50%+1.75rem)] top-6 h-px w-[calc(100%-3.5rem)]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(90deg, ${theme.accentMuted} 0, ${theme.accentMuted} 5px, transparent 5px, transparent 9px)`,
                    }}
                    aria-hidden
                  />
                )}
                <div
                  className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-xl border bg-white shadow-sm"
                  style={{ borderColor: theme.accentMuted }}
                >
                  <Icon color={theme.accent} />
                </div>
                <p className="mt-3 text-sm font-semibold leading-snug text-ink">
                  {step.label}
                </p>
                {step.description && (
                  <p className="cs-body-sm mt-1.5 max-w-[11rem] leading-snug text-ink-muted">
                    {step.description}
                  </p>
                )}
              </li>
            );
          })}
        </ol>
      </div>

      {image && (
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-[#F4F7F8]">
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={700}
            unoptimized
            className="block h-auto w-full"
            sizes="(max-width: 1200px) 100vw, 900px"
          />
        </div>
      )}

      {footnote && (
        <p className="cs-body-sm mt-6 max-w-2xl text-ink-muted">{footnote}</p>
      )}
    </div>
  );
}
