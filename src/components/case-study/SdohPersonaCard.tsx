import Image from "next/image";
import { caseStudyImage } from "@/lib/assets";
import type { CaseStudyTheme } from "@/types/case-study";

const personaPhoto = caseStudyImage(
  "sdoh-health-platform",
  "persona-jennifer.png",
);

type SdohPersonaCardProps = {
  theme: CaseStudyTheme;
};

const goals = [
  "Easy, low-friction tool for gathering patient and social-health context",
  "Reminders for scheduled form-filling appointments",
  "At-a-glance metrics for completed, incomplete, and upcoming work",
];

const motivations = [
  "Keep patient details and documents in one place",
  "Work reliably across hospital, clinic, and home",
];

const frustrations = [
  "Forgotten appointments under heavy patient load",
  "Paper forms that get misplaced",
  "Outdated computer systems",
  "Too many patients to maintain in a 24-hour cycle",
];

const contexts = ["Mobile", "Desktop / Laptop", "iPad / Tablet"];
const hobbies = ["Running", "Boating", "Fishing"];

function SectionCard({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 md:p-6">
      <h3 className="text-sm font-bold tracking-tight text-ink">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="cs-body-sm flex gap-3">
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SdohPersonaCard({ theme }: SdohPersonaCardProps) {
  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border"
      style={{
        backgroundColor: theme.accentSoft,
        borderColor: `${theme.accentMuted}70`,
      }}
    >
      {/* Identity band */}
      <div className="grid lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)]">
        <div
          className="relative min-h-[320px] overflow-hidden lg:min-h-full"
          style={{ backgroundColor: "#C9E4E0" }}
        >
          <Image
            src={personaPhoto}
            alt="Portrait of Jennifer, nurse at a hospital"
            width={810}
            height={896}
            priority
            unoptimized
            className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
            sizes="(max-width: 1024px) 100vw, 280px"
          />
          <div
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-5 pb-5 pt-16 lg:hidden"
          >
            <p className="text-xl font-bold text-white">Jennifer</p>
            <p className="mt-0.5 text-sm text-white/85">
              35 · Nurse · New York City
            </p>
          </div>
        </div>

        <div className="bg-white px-6 py-7 md:px-8 md:py-8 lg:px-10 lg:py-9">
          <p className="cs-meta-label" style={{ color: theme.accent }}>
            Persona
          </p>

          <div className="mt-3 hidden lg:block">
            <h3 className="text-[1.75rem] font-bold tracking-tight text-ink">
              Jennifer
            </h3>
            <p className="mt-1 text-base text-ink-muted">
              35 · Nurse at a hospital · New York City
            </p>
          </div>

          <p className="cs-body mt-5 max-w-2xl text-[1.0625rem] leading-relaxed">
            Jennifer screens patients for health-related social needs and
            connects community and clinical services. She gathers information
            face-to-face or on audio calls — and needs to manage that work across
            hospital, clinic, and home without adding administrative burden.
          </p>

          <blockquote
            className="mt-6 rounded-2xl border-l-4 px-5 py-4"
            style={{
              borderColor: theme.accent,
              backgroundColor: theme.accentSoft,
            }}
          >
            <p className="text-[0.98rem] leading-relaxed text-ink">
              “If we could understand patients’ lifestyle and surroundings, we
              could reduce the chronic cases that keep ending in emergency
              calls.”
            </p>
          </blockquote>
        </div>
      </div>

      {/* Trait grid */}
      <div className="grid gap-3 border-t p-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4 md:p-5"
        style={{ borderColor: `${theme.accentMuted}55` }}
      >
        <SectionCard title="Goals" items={goals} accent={theme.accent} />
        <SectionCard
          title="Motivations"
          items={motivations}
          accent={theme.accent}
        />
        <SectionCard
          title="Frustrations"
          items={frustrations}
          accent={theme.accent}
        />
      </div>

      {/* Context footer */}
      <div
        className="flex flex-col gap-5 border-t px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-6"
        style={{
          borderColor: `${theme.accentMuted}55`,
          backgroundColor: "#E7F4F2",
        }}
      >
        <div>
          <p className="cs-meta-label" style={{ color: theme.accent }}>
            Works across
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {contexts.map((item) => (
              <span
                key={item}
                className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-ink shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="sm:text-right">
          <p className="cs-meta-label" style={{ color: theme.accent }}>
            Outside work
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2 sm:justify-end">
            {hobbies.map((item) => (
              <span
                key={item}
                className="rounded-full border px-3.5 py-1.5 text-sm font-medium text-ink"
                style={{
                  borderColor: `${theme.accentMuted}90`,
                  backgroundColor: theme.accentSoft,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
