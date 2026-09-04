import Image from "next/image";
import type { CaseStudySection, CaseStudyTheme } from "@/types/case-study";
import { Reveal } from "@/components/motion/Reveal";
import { ConnectedCockpitDiagram } from "./ConnectedCockpitDiagram";
import { FindingCards } from "./FindingCards";
import { HighlightGrid } from "./HighlightGrid";
import { InsightCards } from "./InsightCards";
import { PerspectiveCards } from "./PerspectiveCards";
import { TagCloud } from "./TagCloud";
import { TwoColumnCards } from "./TwoColumnCards";
import { EmpathyMapDiagram } from "./EmpathyMapDiagram";
import { ImageTakeaways } from "./ImageTakeaways";
import { PrincipleManifest } from "./PrincipleManifest";
import { PrincipleCards } from "./PrincipleCards";
import { StakeholderCards } from "./StakeholderCards";
import { ThemedDataTable } from "./ThemedDataTable";

type SectionRendererProps = {
  section: CaseStudySection;
  theme: CaseStudyTheme;
  index: number;
  phaseIndex?: number;
};

function Prose({ children }: { children: React.ReactNode }) {
  if (typeof children === "string" && children.includes("\n\n")) {
    return (
      <div className="cs-body mt-6 max-w-[var(--cs-text)] space-y-4">
        {children.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  }

  return <div className="cs-body mt-6 max-w-[var(--cs-text)]">{children}</div>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 max-w-[var(--cs-text)] space-y-3">
      {items.map((item) => (
        <li key={item} className="cs-body-sm flex gap-3">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function SectionRenderer({
  section,
  theme,
  index,
  phaseIndex,
}: SectionRendererProps) {
  const delay = (index % 4) * 0.04;
  const accent = theme.accent;

  switch (section.type) {
    case "phase":
      return (
        <div
          id={section.id}
          className="scroll-mt-32 border-t border-border pt-20 first:border-t-0 first:pt-8 md:pt-24"
        >
          <Reveal delay={delay}>
            <p className="cs-timeline-index">
              {phaseIndex} /{" "}
              <span className="text-ink-muted">
                {section.phase.replace(/^\d+\s*—\s*/, "")}
              </span>
            </p>
            {section.title && (
              <h2 className="cs-chapter-title mt-6 max-w-3xl text-balance">
                {section.title}
              </h2>
            )}
            {section.description && (
              <p className="cs-body mt-4 max-w-[var(--cs-text)]">
                {section.description}
              </p>
            )}
          </Reveal>
        </div>
      );

    case "narrative":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title max-w-3xl text-balance">
              {section.title}
            </h2>
            {section.label && (
              <h3 className="mt-8 text-lg font-semibold text-ink md:text-xl">
                {section.label}
              </h3>
            )}
            <Prose>{section.content}</Prose>
            {section.layout === "tags" && section.bullets ? (
              <TagCloud
                items={section.bullets}
                accent={accent}
                accentSoft={theme.accentSoft}
                accentMuted={theme.accentMuted}
              />
            ) : section.layout === "highlights" && section.bullets ? (
              <HighlightGrid items={section.bullets} theme={theme} />
            ) : (
              section.bullets && <Bullets items={section.bullets} />
            )}
            {section.challenge && (
              <div className="mt-10 max-w-[var(--cs-text)]">
                <p className="cs-body-sm text-ink">{section.challenge.intro}</p>
                <blockquote
                  className="mt-4 border-l-4 py-1 pl-6"
                  style={{ borderColor: theme.accentMuted }}
                >
                  <p className="text-lg font-medium leading-relaxed text-ink md:text-xl">
                    &ldquo;{section.challenge.quote}&rdquo;
                  </p>
                </blockquote>
              </div>
            )}
          </Reveal>
        </section>
      );

    case "quote":
      return (
        <section id={section.id} className="scroll-mt-28 py-10 md:py-14">
          <Reveal delay={delay}>
            <div
              className="rounded-2xl border px-8 py-10 md:px-12"
              style={{
                backgroundColor: theme.accentSoft,
                borderColor: theme.accentMuted,
              }}
            >
              <blockquote className="text-center text-xl font-medium leading-relaxed text-ink md:text-2xl">
                &ldquo;{section.content}&rdquo;
              </blockquote>
            </div>
          </Reveal>
        </section>
      );

    case "image": {
      const imageWidth = section.width ?? 1400;
      const imageHeight = section.height ?? 900;
      const imageSizes =
        section.layout === "full"
          ? "(max-width: 72rem) 100vw, 72rem"
          : "(max-width: 900px) 100vw, 900px";

      const artifactEl =
        section.artifact === "empathy-map" ? (
          <EmpathyMapDiagram theme={theme} />
        ) : null;

      const imageEl = section.src ? (
        <Image
          src={section.src}
          alt={section.alt ?? ""}
          width={imageWidth}
          height={imageHeight}
          className="block h-auto w-full"
          sizes={imageSizes}
        />
      ) : null;

      const figureContent = artifactEl ?? imageEl;

      return (
        <section id={section.id} className="scroll-mt-28 py-8 md:py-12">
          <Reveal delay={delay}>
            {section.title && (
              <h2 className="cs-chapter-title mb-8 max-w-3xl">{section.title}</h2>
            )}
            {figureContent && (
              <figure>
                {figureContent}
                {(section.caption || section.bullets) && (
                  <figcaption className="mt-4">
                    {section.caption && (
                      <p className="cs-body-sm">{section.caption}</p>
                    )}
                    {section.bullets && section.bullets.length > 0 && (
                      <ul
                        className={`cs-body-sm space-y-2 ${section.caption ? "mt-4" : ""}`}
                      >
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </figcaption>
                )}
              </figure>
            )}
            {section.takeaways && (
              <ImageTakeaways
                keyTakeaway={section.takeaways.keyTakeaway}
                opportunity={section.takeaways.opportunity}
                ratings={section.takeaways.ratings}
                accent={accent}
              />
            )}
          </Reveal>
        </section>
      );
    }

    case "gallery":
      return (
        <section id={section.id} className="scroll-mt-28 py-10 md:py-14">
          <Reveal delay={delay}>
            {section.title && (
              <h2 className="cs-chapter-title mb-3 max-w-3xl">{section.title}</h2>
            )}
            {section.subtitle && (
              <p className="cs-body-sm mb-8 max-w-2xl">{section.subtitle}</p>
            )}
            <div
              className={`grid gap-8 ${section.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}
            >
              {section.images.map((image) => (
                <figure key={image.src} className="flex h-full flex-col">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width ?? 800}
                    height={image.height ?? 600}
                    className="block h-auto w-full"
                  />
                  {(image.caption || image.bullets) && (
                    <figcaption className="mt-4 flex-1">
                      {image.caption && (
                        <p className="text-sm font-semibold text-ink">
                          {image.caption}
                        </p>
                      )}
                      {image.bullets && image.bullets.length > 0 && (
                        <ul
                          className={`space-y-2 ${image.caption ? "mt-3" : ""}`}
                        >
                          {image.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="cs-body-sm flex gap-3 text-ink-muted"
                            >
                              <span
                                className="mt-2.5 h-1 w-1 shrink-0 rounded-full"
                                style={{ backgroundColor: accent }}
                                aria-hidden
                              />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </Reveal>
        </section>
      );

    case "split":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 ${section.reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div>
                <h2 className="cs-chapter-title">{section.title}</h2>
                {section.label && (
                  <p className="cs-meta-label mt-6" style={{ color: accent }}>
                    {section.label}
                  </p>
                )}
                <Prose>{section.content}</Prose>
                {section.bullets && <Bullets items={section.bullets} />}
              </div>
              {section.artifact === "connected-cockpit" ? (
                <ConnectedCockpitDiagram theme={theme} />
              ) : (
                section.image && (
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={700}
                    height={500}
                    className="block h-auto w-full"
                  />
                )
              )}
            </div>
          </Reveal>
        </section>
      );

    case "research":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            {section.subtitle && (
              <p className="cs-body-sm mt-4 max-w-2xl">{section.subtitle}</p>
            )}
            <div className="mt-12 space-y-12">
              {section.insights.map((insight) => (
                <article key={insight.number} className="max-w-3xl">
                  <p className="cs-meta-label" style={{ color: accent }}>
                    Insight {insight.number}
                  </p>
                  <p className="mt-4 text-lg font-semibold leading-snug text-ink">
                    {insight.insight}
                  </p>
                  <p className="cs-body-sm mt-4">
                    <span className="font-medium text-ink">Evidence: </span>
                    {insight.evidence.join(" · ")}
                  </p>
                  <p className="cs-body-sm mt-2">
                    <span className="font-medium text-ink">Implication: </span>
                    {insight.implication}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
      );

    case "decision":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <p className="cs-meta-label" style={{ color: accent }}>
              Decision {section.number}
            </p>
            <h2 className="cs-chapter-title mt-4 max-w-3xl">{section.title}</h2>
            <Prose>{section.context}</Prose>
            <p className="cs-body mt-8 max-w-[var(--cs-text)] font-medium text-ink">
              {section.rationale}
            </p>
            {section.image && (
              <div className="mt-10">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={1200}
                  height={700}
                  className="block h-auto w-full"
                />
              </div>
            )}
          </Reveal>
        </section>
      );

    case "findings":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            {section.subtitle && (
              <p className="cs-body-sm mt-4 max-w-2xl">{section.subtitle}</p>
            )}
            <FindingCards items={section.items} theme={theme} />
          </Reveal>
        </section>
      );

    case "process":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title">{section.title}</h2>
            <ol className="mt-8 flex flex-wrap gap-2">
              {section.steps.map((step, i) => (
                <li
                  key={step}
                  className="rounded-full border border-border px-4 py-2 text-sm text-ink-muted"
                >
                  <span className="mr-2 font-semibold text-ink">{i + 1}.</span>
                  {step}
                </li>
              ))}
            </ol>
            {section.image && (
              <div className="mt-10">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={1200}
                  height={700}
                  className="block h-auto w-full"
                />
              </div>
            )}
            {section.footnote && (
              <p className="cs-body-sm mt-6 max-w-2xl">{section.footnote}</p>
            )}
          </Reveal>
        </section>
      );

    case "table":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            {section.subtitle && (
              <p className="cs-body-sm mt-4 max-w-2xl">{section.subtitle}</p>
            )}
            {section.layout === "insights" ? (
              <InsightCards rows={section.rows} theme={theme} />
            ) : section.layout === "cards" ? (
              <StakeholderCards
                rows={section.rows as [string, string, string][]}
                theme={theme}
              />
            ) : section.layout === "styled" ? (
              <ThemedDataTable
                headers={section.headers}
                rows={section.rows}
                theme={theme}
              />
            ) : (
              <div className="mt-10 overflow-x-auto">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      {section.headers.map((h) => (
                        <th
                          key={h}
                          className="pb-3 pr-4 font-semibold text-ink"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.rows.map((row, ri) => (
                      <tr key={ri} className="border-b border-border/60">
                        {row.map((cell, ci) => (
                          <td key={ci} className="py-4 pr-4 text-ink-muted">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Reveal>
        </section>
      );

    case "principles":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            {section.subtitle && (
              <p className="cs-body-sm mt-4 max-w-2xl">{section.subtitle}</p>
            )}
            {section.layout === "cards" ? (
              <PrincipleCards items={section.items} theme={theme} />
            ) : section.layout === "manifest" ? (
              <PrincipleManifest items={section.items} theme={theme} />
            ) : (
              <div className="mt-12 space-y-10">
                {section.items.map((item, i) => (
                  <article key={item.title} className="max-w-3xl">
                    <p className="cs-meta-label">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="cs-body-sm mt-3">{item.description}</p>
                    {item.bullets && <Bullets items={item.bullets} />}
                  </article>
                ))}
              </div>
            )}
            {section.image && (
              <div className="mt-12">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  width={1200}
                  height={700}
                  className="block h-auto w-full"
                />
              </div>
            )}
          </Reveal>
        </section>
      );

    case "two-column":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            <TwoColumnCards columns={section.columns} theme={theme} />
          </Reveal>
        </section>
      );

    case "cards":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            {section.subtitle && (
              <p className="cs-body-sm mt-4 max-w-2xl">{section.subtitle}</p>
            )}
            <PerspectiveCards cards={section.cards} theme={theme} />
          </Reveal>
        </section>
      );

    case "persona":
    case "comparison":
    case "validation":
    case "stats":
    case "visual-break":
    case "reflection":
      return (
        <LegacySection section={section} theme={theme} delay={delay} />
      );

    default:
      return null;
  }
}

function LegacySection({
  section,
  theme,
  delay,
}: {
  section: CaseStudySection;
  theme: CaseStudyTheme;
  delay: number;
}) {
  if (section.type === "persona") {
    return (
      <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
        <Reveal delay={delay}>
          <h2 className="cs-chapter-title">{section.title}</h2>
          <div className="mt-10 max-w-3xl rounded-2xl bg-[#f8f8f8] p-8 md:p-10">
            <h3 className="text-xl font-bold text-ink">{section.name}</h3>
            <p className="cs-body-sm mt-1">{section.role}</p>
            <p className="cs-body mt-6">{section.description}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                { l: "Goals", t: section.goals },
                { l: "Pain points", t: section.painPoints },
                { l: "Motivations", t: section.motivations },
              ].map((f) => (
                <div key={f.l}>
                  <p className="cs-meta-label">{f.l}</p>
                  <p className="cs-body-sm mt-2">{f.t}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    );
  }

  if (section.type === "visual-break") {
    return (
      <section id={section.id} className="scroll-mt-28 py-10 md:py-14">
        <Reveal delay={delay}>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={section.src}
              alt={section.alt}
              width={1400}
              height={788}
              className="block h-auto w-full"
              sizes="(max-width: 72rem) 100vw, 72rem"
            />
            {section.title && (
              <div
                className="absolute inset-x-0 bottom-0 px-6 py-8 md:px-10 md:py-10"
                style={{
                  background:
                    "linear-gradient(transparent, rgba(17,17,17,0.75))",
                }}
              >
                <p className="text-lg font-semibold text-white md:text-xl">
                  {section.title}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </section>
    );
  }

  return null;
}
