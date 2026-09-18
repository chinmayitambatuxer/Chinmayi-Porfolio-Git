import type { ReactNode } from "react";
import Image from "next/image";
import type { CaseStudyTheme } from "@/types/case-study";

type WorkSpacePersonaCardProps = {
  label?: string;
  quote?: string;
  image: { src: string; alt: string; width?: number; height?: number };
  theme: CaseStudyTheme;
};

const INK = "#282D46";
const BODY = "#424B5A";
const QUOTE_INK = "#143D61";

const description =
  "Soham is a corporate employee working from home. He has two kids at home and is frustrated by their interruption while he is working. He is not able to work efficiently and passionately at home as he used to in the office.";

const defaultQuote =
  "Offices are closed but I am not able to focus on my work at home. Need a calm place to work efficiently.";

const goals = [
  "To get a working place with all facilities required by booking.",
  "Get to know and compare prices in one platform.",
];

const painPoints = [
  "Frustrated with work from home model",
  "Disturbance due to kids & household chores",
  "Internet issues at home due to electricity problems",
];

const motivations = [
  "Available facilities like air conditioner, coffee machine, peaceful & calm environment, Wi‑Fi & electricity.",
  "Reviews, ratings & images of places needed.",
];

const personality = [
  "Workaholic",
  "Punctual",
  "Techsavvy",
  "Passionate",
  "Organised",
  "Polite",
];

const technology = [
  { label: "Mobile", value: 80 },
  { label: "Laptop", value: 70 },
  { label: "Softwares", value: 85 },
  { label: "Mobile Apps", value: 90 },
  { label: "Website", value: 60 },
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h3 className="text-lg font-semibold tracking-tight md:text-xl" style={{ color: INK }}>
      {children}
    </h3>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.9375rem] leading-relaxed md:text-base" style={{ color: BODY }}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function AboutIcon({ children, accentSoft }: { children: ReactNode; accentSoft: string }) {
  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#F1592A]"
      style={{ backgroundColor: accentSoft }}
      aria-hidden
    >
      {children}
    </span>
  );
}

function TechBar({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent: string;
}) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
      <div>
        <p className="text-sm font-medium" style={{ color: INK }}>{label}</p>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#ECECEC]">
          <div className="h-full rounded-sm" style={{ width: `${value}%`, backgroundColor: accent }} />
        </div>
      </div>
      <p className="text-sm font-medium tabular-nums text-[#B5B5B5]">{value}%</p>
    </div>
  );
}

export function WorkSpacePersonaCard({ label, quote, image, theme }: WorkSpacePersonaCardProps) {
  const accent = theme.accent;
  const accentSoft = theme.accentSoft;
  const quoteText = quote ?? defaultQuote;

  return (
    <div className="w-full">
      <p className="text-2xl font-medium tracking-tight md:text-[1.75rem]" style={{ color: accent }}>
        {label ?? "Persona Creation"}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:gap-5 xl:mt-10">
        {/* Column 1 — identity */}
        <div className="rounded-[10px] p-6 md:p-7 lg:col-span-4" style={{ backgroundColor: "#F9F9F9" }}>
          <div className="flex flex-col items-center text-center">
            <div className="relative h-36 w-36 overflow-hidden rounded-full ring-4 ring-white shadow-md md:h-40 md:w-40">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width ?? 400}
                height={image.height ?? 400}
                priority
                unoptimized
                className="h-full w-full object-cover object-[50%_15%]"
                sizes="160px"
              />
            </div>
            <p className="mt-5 text-2xl font-semibold" style={{ color: accent }}>Soham</p>
            <p className="mt-0.5 text-base text-[#B4B4B4]">Corporate Employee</p>
          </div>

          <div className="mt-8">
            <SectionHeading>Description</SectionHeading>
            <p className="mt-3 text-[0.9375rem] leading-relaxed md:text-lg" style={{ color: BODY }}>
              {description}
            </p>
          </div>

          <div className="mt-8">
            <SectionHeading>About</SectionHeading>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-3 text-base" style={{ color: BODY }}>
                <AboutIcon accentSoft={accentSoft}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M4 20h16M6 16V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8M8 12h8" strokeLinecap="round" />
                  </svg>
                </AboutIcon>
                29
              </li>
              <li className="flex items-center gap-3 text-base" style={{ color: BODY }}>
                <AboutIcon accentSoft={accentSoft}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M12 21s7-5.2 7-11a7 7 0 1 0-14 0c0 5.8 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </AboutIcon>
                Pune
              </li>
              <li className="flex items-center gap-3 text-base" style={{ color: BODY }}>
                <AboutIcon accentSoft={accentSoft}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path d="M12 3 4 7v5c0 4.2 3.2 8.1 8 9 4.8-.9 8-4.8 8-9V7l-8-4Z" />
                  </svg>
                </AboutIcon>
                IT Engineer
              </li>
            </ul>
          </div>
        </div>

        {/* Column 2 — quote + goals */}
        <div className="space-y-8 lg:col-span-5 lg:pt-2">
          <div className="relative">
            <span
              className="absolute -top-2 left-4 text-5xl font-serif leading-none"
              style={{ color: accent }}
              aria-hidden
            >
              &ldquo;
            </span>
            <blockquote
              className="rounded-[20px] rounded-br-[30px] px-6 pb-6 pt-10 md:px-8"
              style={{ backgroundColor: accentSoft }}
            >
              <p className="text-[0.9375rem] font-medium leading-relaxed md:text-lg" style={{ color: QUOTE_INK }}>
                {quoteText}
              </p>
            </blockquote>
          </div>

          <div>
            <SectionHeading>Goals</SectionHeading>
            <BulletList items={goals} />
          </div>

          <div>
            <SectionHeading>Pain points</SectionHeading>
            <BulletList items={painPoints} />
          </div>

          <div>
            <SectionHeading>Motivations</SectionHeading>
            <BulletList items={motivations} />
          </div>
        </div>

        {/* Column 3 — personality + technology */}
        <div className="space-y-10 lg:col-span-3">
          <div>
            <SectionHeading>Personality</SectionHeading>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {personality.map((trait) => (
                <span
                  key={trait}
                  className="inline-flex min-h-[3rem] items-center justify-center rounded-[10px] border px-2 text-center text-sm font-medium leading-snug"
                  style={{ borderColor: "#B4B4B4", color: "#656565" }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading>Technology</SectionHeading>
            <div className="mt-5 space-y-5">
              {technology.map((row) => (
                <TechBar key={row.label} label={row.label} value={row.value} accent={accent} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function isWorkSpacePersonaSection(
  section: { type: string; id?: string; artifact?: string; image?: unknown; quote?: string },
): boolean {
  if (section.type !== "split" || !section.image) return false;
  if (section.artifact === "work-space-persona") return true;
  return section.id === "persona" && Boolean(section.quote);
}

export { isWorkSpacePersonaSection };
