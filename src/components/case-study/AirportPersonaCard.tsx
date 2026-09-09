import Image from "next/image";
import { caseStudyImage } from "@/lib/assets";
import type { CaseStudyTheme } from "@/types/case-study";

const personaPhoto = caseStudyImage(
  "airport-travel-experience",
  "persona-shreyas.png",
);

type AirportPersonaCardProps = {
  theme: CaseStudyTheme;
};

const traits = [
  "I am well-organised and detail-oriented because I want a smooth, seamless travel experience.",
  "I value efficiency and convenience because time is precious to me.",
  "I am tech-savvy and comfortable using digital tools to enhance my travel experience.",
  "I seek opportunities for adventure and unique experiences while travelling.",
];

const goals = [
  "Real-time flight and gate information",
  "Airport navigation across terminals",
  "Quick access to amenities when needed",
  "Clear boarding progress at every stage",
];

const painPoints = [
  "Navigation anxiety in large airports",
  "Information overload from scattered sources",
  "Uncertainty when flights are delayed or gates change",
  "Finding amenities at the wrong moment during a layover",
];

export function AirportPersonaCard({ theme }: AirportPersonaCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E0D6CC] bg-[#F7F2EC]">
      <div className="grid gap-0 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div
          className="flex flex-col items-center justify-center px-6 py-10 text-center lg:py-12"
          style={{ backgroundColor: "#EDE5DB" }}
        >
          <Image
            src={personaPhoto}
            alt="Portrait of Shreyas Singh"
            width={112}
            height={112}
            quality={95}
            unoptimized
            className="h-28 w-28 rounded-full border-4 border-white object-cover shadow-sm"
          />
          <p className="mt-5 text-xl font-bold text-ink">Shreyas Singh</p>
          <p className="mt-1 text-sm text-ink-muted">28 · Business Analyst</p>
          <p className="mt-3 text-xs font-medium uppercase tracking-wide text-ink-muted">
            Pune → Mumbai → Delhi
          </p>
        </div>

        <div className="border-t border-[#E0D6CC] bg-white p-6 md:p-8 lg:border-t-0 lg:border-l">
          <p className="cs-meta-label" style={{ color: theme.accent }}>
            Persona
          </p>
          <p className="cs-body mt-3 text-[1.0625rem] leading-relaxed">
            Shreyas is a 28-year-old business analyst who values efficiency and is
            comfortable with technology. He is not looking for dozens of features —
            he needs confidence in the next step when his plan changes mid-journey.
          </p>
        </div>
      </div>

      <div className="grid gap-4 border-t border-[#E0D6CC] bg-[#F7F2EC] p-4 md:grid-cols-3 md:p-6">
        <div className="rounded-xl bg-white p-5">
          <h3 className="text-sm font-bold text-ink">Interests &amp; traits</h3>
          <ul className="mt-3 space-y-2.5">
            {traits.map((item) => (
              <li key={item} className="cs-body-sm flex gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-white p-5">
          <h3 className="text-sm font-bold text-ink">Goals</h3>
          <ul className="mt-3 space-y-2.5">
            {goals.map((item) => (
              <li key={item} className="cs-body-sm flex gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl bg-white p-5">
          <h3 className="text-sm font-bold text-ink">Pain points</h3>
          <ul className="mt-3 space-y-2.5">
            {painPoints.map((item) => (
              <li key={item} className="cs-body-sm flex gap-2.5">
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
