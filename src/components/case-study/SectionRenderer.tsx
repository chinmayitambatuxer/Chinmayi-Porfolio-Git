import Image from "next/image";
import type { CaseStudySection, CaseStudyTheme } from "@/types/case-study";
import { Reveal } from "@/components/motion/Reveal";
import { ConnectedCockpitDiagram } from "./ConnectedCockpitDiagram";
import { SystemsThinkingDiagram } from "./SystemsThinkingDiagram";
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
import { PrincipleHierarchy } from "./PrincipleHierarchy";
import { FutureOpportunities } from "./FutureOpportunities";
import { ProductLayersFlow } from "./ProductLayersFlow";
import { ProcessSteps } from "./ProcessSteps";
import { PersonaSplit } from "./PersonaSplit";
import { isWorkSpacePersonaSection, WorkSpacePersonaCard } from "./WorkSpacePersonaCard";
import { WorkSpaceTaskFlow } from "./WorkSpaceTaskFlow";
import { PhoneFlowGallery } from "./PhoneFlowGallery";
import { PhoneFrame, PhoneShowcase } from "./PhoneShowcase";
import { AirportBrainstormGrid } from "./AirportBrainstormGrid";
import { AirportJourneyMap } from "./AirportJourneyMap";
import { SierraJourneyMap } from "./SierraJourneyMap";
import { SierraDependencyMap } from "./SierraDependencyMap";
import { SierraDesignProcess } from "./SierraDesignProcess";
import { SierraSystemArchitecture } from "./SierraSystemArchitecture";
import { SierraMatrices } from "./SierraMatrices";
import {
  SierraDecisionTree,
  SierraAudioPriority,
} from "./SierraDecisionTree";
import {
  SierraInteractionFlows,
  SierraCompetitiveResearch,
} from "./SierraInteractionFlows";
import { AirportPersonaCard } from "./AirportPersonaCard";
import { SdohPersonaCard } from "./SdohPersonaCard";
import { StakeholderCards } from "./StakeholderCards";
import { ThemedDataTable } from "./ThemedDataTable";
import { CompetitiveAnalysisTable } from "./CompetitiveAnalysisTable";
import { EvBenchmarkTable } from "./EvBenchmarkTable";

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

/** Bold "Label:" when a bullet starts with a short title before ": ". */
function LabeledBulletText({ text }: { text: string }) {
  const match = text.match(/^([^:]{1,60}):\s+(.+)$/);
  if (!match) return text;

  return (
    <>
      <strong className="font-semibold text-ink">{match[1]}:</strong>{" "}
      {match[2]}
    </>
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
      const isPhone = section.layout === "phone";
      const isSplit = section.layout === "split";
      const imageWidth = isPhone ? 390 : (section.width ?? 1400);
      const imageHeight = isPhone ? 844 : (section.height ?? 900);
      const imageSizes = isPhone
        ? "280px"
        : section.layout === "full"
          ? "(max-width: 72rem) 100vw, 72rem"
          : "(max-width: 900px) 100vw, 900px";

      const artifactEl =
        section.artifact === "empathy-map" ? (
          <EmpathyMapDiagram theme={theme} />
        ) : section.artifact === "airport-persona" ? (
          <AirportPersonaCard theme={theme} />
        ) : section.artifact === "airport-journey" ? (
          <AirportJourneyMap theme={theme} />
        ) : section.artifact === "sierra-journey" ? (
          <SierraJourneyMap theme={theme} />
        ) : section.artifact === "sierra-dependency" ? (
          <SierraDependencyMap theme={theme} />
        ) : section.artifact === "sierra-design-process" ? (
          <SierraDesignProcess theme={theme} />
        ) : section.artifact === "sierra-architecture" ? (
          <SierraSystemArchitecture theme={theme} />
        ) : section.artifact === "sierra-vehicle-state" ? (
          <SierraMatrices theme={theme} variant="vehicle-state" />
        ) : section.artifact === "sierra-ownership" ? (
          <SierraMatrices theme={theme} variant="ownership" />
        ) : section.artifact === "sierra-audio-ownership" ? (
          <SierraMatrices theme={theme} variant="audio-ownership" />
        ) : section.artifact === "sierra-audio-priority" ? (
          <SierraAudioPriority theme={theme} />
        ) : section.artifact === "sierra-flows" ? (
          <SierraInteractionFlows theme={theme} />
        ) : section.artifact === "sdoh-persona" ? (
          <SdohPersonaCard theme={theme} />
        ) : section.artifact === "work-space-task-flow" ? (
          <WorkSpaceTaskFlow theme={theme} />
        ) : null;

      const imageEl = section.src ? (
        <Image
          src={section.src}
          alt={section.alt ?? ""}
          width={imageWidth}
          height={imageHeight}
          unoptimized={section.layout === "full"}
          className={
            isPhone
              ? "mx-auto block h-auto w-full max-w-[260px] md:max-w-[280px]"
              : "block h-auto w-full"
          }
          sizes={imageSizes}
        />
      ) : null;

      const figureContent = artifactEl ?? imageEl;

      const captionBlock =
        (section.caption || section.bullets) && (
          <>
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
                    <span>
                      <LabeledBulletText text={bullet} />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </>
        );

      return (
        <section id={section.id} className="scroll-mt-28 py-8 md:py-12">
          <Reveal delay={delay}>
            {isPhone && section.src ? (
              <PhoneShowcase
                title={section.title}
                caption={section.caption}
                bullets={section.bullets}
                src={section.src}
                alt={section.alt ?? ""}
                width={imageWidth}
                height={imageHeight}
                accent={accent}
              />
            ) : isSplit && section.src && !artifactEl ? (
              <>
                {section.title && (
                  <h2 className="cs-chapter-title mb-8 max-w-3xl md:mb-10">
                    {section.title}
                  </h2>
                )}
                {section.subtitle && (
                  <p className="cs-body-sm mb-8 max-w-2xl">{section.subtitle}</p>
                )}
                <div
                  className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,38%)] lg:items-center lg:gap-x-12 lg:gap-y-8"
                >
                  {captionBlock && (
                    <div className="min-w-0 max-w-2xl lg:max-w-none lg:pr-4">
                      {captionBlock}
                    </div>
                  )}
                  <figure className="flex w-full justify-center lg:justify-end">
                    <div
                      className="relative aspect-[5/3] w-full max-w-md overflow-hidden rounded-2xl border border-border bg-[#F4F7F8] shadow-[0_8px_28px_-12px_rgba(15,23,42,0.12)] lg:max-w-none lg:w-full"
                    >
                      <Image
                        src={section.src}
                        alt={section.alt ?? ""}
                        fill
                        unoptimized
                        className="object-cover object-[center_38%]"
                        sizes="(max-width: 1024px) 100vw, 380px"
                      />
                    </div>
                  </figure>
                </div>
              </>
            ) : (
              <>
                {section.title && (
                  <h2
                    className={`cs-chapter-title max-w-3xl ${section.subtitle ? "" : "mb-8"}`}
                  >
                    {section.title}
                  </h2>
                )}
                {section.subtitle && (
                  <p className="cs-body-sm mb-8 mt-4 max-w-2xl">{section.subtitle}</p>
                )}
                {figureContent && (
                  <figure>
                    {figureContent}
                    {captionBlock && (
                      <figcaption className="mt-4">{captionBlock}</figcaption>
                    )}
                  </figure>
                )}
              </>
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

    case "gallery": {
      // Equalize media height in 2-col grids when screenshots are close in
      // aspect ratio (e.g. HMI pairs). Skip phone/3-col and large mismatches
      // so taller document-style shots are not cropped into short neighbors.
      const nonWideImages = section.images.filter((img) => !img.wide);
      const sizedRatios = nonWideImages
        .filter((img) => img.width && img.height)
        .map((img) => img.width! / img.height!);
      const minRatio =
        sizedRatios.length > 0 ? Math.min(...sizedRatios) : undefined;
      const maxRatio =
        sizedRatios.length > 0 ? Math.max(...sizedRatios) : undefined;
      const sharedAspectRatio =
        section.device !== "phone" &&
        section.columns !== 3 &&
        sizedRatios.length >= 2 &&
        sizedRatios.length === nonWideImages.length &&
        minRatio !== undefined &&
        maxRatio !== undefined &&
        maxRatio / minRatio <= 1.25
          ? minRatio
          : undefined;

      const isPhoneStrip =
        section.device === "phone" && section.galleryLayout === "strip";
      const isPhoneFlow =
        section.device === "phone" &&
        section.galleryLayout === "flow" &&
        section.flowRows &&
        section.flowRows.length > 0;

      if (isPhoneFlow) {
        return (
          <section id={section.id} className="scroll-mt-28 py-10 md:py-14">
            <Reveal delay={delay}>
              {section.title && (
                <h2 className="cs-chapter-title mb-3 max-w-3xl">
                  {section.title}
                </h2>
              )}
              {section.subtitle && (
                <p className="cs-body-sm mb-8 max-w-2xl">{section.subtitle}</p>
              )}
              <PhoneFlowGallery rows={section.flowRows!} />
            </Reveal>
          </section>
        );
      }

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
              className={
                isPhoneStrip
                  ? "flex gap-6 overflow-x-auto pb-2 md:gap-8"
                  : section.device === "phone"
                    ? "flex flex-wrap justify-center gap-8 md:gap-10"
                    : `grid items-stretch gap-8 ${section.columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`
              }
            >
              {section.images.map((image) => {
                const useEqualHeight = Boolean(
                  sharedAspectRatio && !image.wide,
                );

                return (
                  <figure
                    key={image.src}
                    className={`flex h-full flex-col ${
                      isPhoneStrip
                        ? "w-[220px] shrink-0 sm:w-[240px] md:w-[260px]"
                        : section.device === "phone"
                        ? "w-full max-w-[260px] md:max-w-[280px]"
                        : image.wide
                          ? `mx-auto w-full max-w-3xl ${
                              section.columns === 3
                                ? "md:col-span-3"
                                : "md:col-span-2"
                            }`
                          : ""
                    }`}
                  >
                    {section.device === "phone" ? (
                      <PhoneFrame
                        src={image.src}
                        alt={image.alt}
                        width={image.width ?? 390}
                        height={image.height ?? 844}
                      />
                    ) : (
                      <div
                        className={`overflow-hidden rounded-2xl border border-border bg-[#F4F7F8] shadow-[0_1px_2px_rgba(15,23,42,0.04)] ${
                          useEqualHeight ? "h-full w-full" : ""
                        }`}
                        style={
                          useEqualHeight
                            ? { aspectRatio: String(sharedAspectRatio) }
                            : undefined
                        }
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width ?? 800}
                          height={image.height ?? 600}
                          unoptimized
                          className={
                            useEqualHeight
                              ? "block h-full w-full object-cover"
                              : "block h-auto w-full"
                          }
                          sizes="(max-width: 900px) 100vw, 560px"
                        />
                      </div>
                    )}
                    {(image.caption || image.bullets) && (
                      <figcaption className="mt-4">
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
                );
              })}
            </div>
          </Reveal>
        </section>
      );
    }

    case "flow":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            {section.title && (
              <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            )}
            {section.subtitle && (
              <p className="cs-body-sm mt-4 max-w-2xl">{section.subtitle}</p>
            )}
          </Reveal>

          <div className="mt-12 space-y-16 md:mt-16 md:space-y-24">
            {section.steps.map((step, stepIndex) => {
              const imageFirst = stepIndex % 2 === 0;

              return (
                <Reveal key={step.src} delay={delay}>
                  <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
                    <div
                      className={`lg:col-span-7 ${
                        imageFirst ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <Image
                        src={step.src}
                        alt={step.alt}
                        width={step.width ?? 1024}
                        height={step.height ?? 636}
                        className="block h-auto w-full"
                        sizes="(max-width: 1024px) 100vw, 580px"
                      />
                    </div>
                    <div
                      className={`lg:col-span-5 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <p className="cs-meta-label" style={{ color: accent }}>
                        Step {step.step}
                      </p>
                      <h3 className="mt-3 text-xl font-bold text-ink md:text-2xl">
                        {step.title}
                      </h3>
                      <p className="cs-body-sm mt-4">{step.content}</p>
                      {step.bullets && step.bullets.length > 0 && (
                        <ul className="mt-5 space-y-3">
                          {step.bullets.map((bullet) => (
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
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>
      );

    case "split":
      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            {isWorkSpacePersonaSection(section) ? (
              <WorkSpacePersonaCard
                label={section.label}
                quote={section.quote}
                image={section.image!}
                theme={theme}
              />
            ) : section.artifact === "sierra-decision-tree" ? (
              <div>
                <div className="max-w-xl">
                  <h2 className="cs-chapter-title">{section.title}</h2>
                  {section.label && (
                    <p className="cs-meta-label mt-6" style={{ color: accent }}>
                      {section.label}
                    </p>
                  )}
                  <Prose>{section.content}</Prose>
                  {section.bullets && <Bullets items={section.bullets} />}
                </div>
                <div className="mt-10 w-full">
                  <SierraDecisionTree theme={theme} />
                </div>
              </div>
            ) : section.layout === "profile" && section.image ? (
              <PersonaSplit
                title={section.title}
                label={section.label}
                content={section.content}
                bullets={section.bullets}
                image={section.image}
                theme={theme}
              />
            ) : (
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
                ) : section.artifact === "systems-thinking" ? (
                  <SystemsThinkingDiagram theme={theme} />
                ) : section.artifact === "sierra-competitive-research" ? (
                  <SierraCompetitiveResearch theme={theme} />
                ) : (
                  section.image && (
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      width={section.image.width ?? 700}
                      height={section.image.height ?? 500}
                      className="block h-auto w-full"
                    />
                  )
                )}
              </div>
            )}
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

    case "decision": {
      const imageFirst = Number(section.number) % 2 === 1;
      const isPhone = section.image?.device === "phone";
      const decisionImages =
        section.images && section.images.length > 0
          ? section.images
          : section.image
            ? [
                {
                  src: section.image.src,
                  alt: section.image.alt,
                  width: section.image.width,
                  height: section.image.height,
                },
              ]
            : [];

      const decisionCopy = (
        <>
          <p className="cs-meta-label" style={{ color: accent }}>
            Decision {section.number}
          </p>
          <h2 className="cs-chapter-title mt-4 max-w-3xl">{section.title}</h2>
          <Prose>{section.context}</Prose>
          <p className="cs-body mt-8 max-w-[var(--cs-text)] font-medium text-ink">
            {section.rationale}
          </p>
        </>
      );

      if (decisionImages.length === 0) {
        return (
          <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
            <Reveal delay={delay}>{decisionCopy}</Reveal>
          </section>
        );
      }

      const renderDecisionImage = (
        image: (typeof decisionImages)[number],
        sizes: string,
      ) => (
        <figure key={image.src} className="space-y-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-[#F4F7F8]">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width ?? 1200}
              height={image.height ?? 700}
              unoptimized
              className="block h-auto w-full"
              sizes={sizes}
            />
          </div>
          {image.caption && (
            <figcaption className="cs-body-sm text-ink-muted">
              {image.caption}
            </figcaption>
          )}
        </figure>
      );

      const renderDecisionPointers = () => {
        if (!section.pointers) {
          return null;
        }

        const { title, items } = section.pointers;

        return (
          <div className="flex h-full flex-col justify-center md:px-2" key="decision-pointers">
            <p className="text-sm font-semibold text-ink">{title}</p>
            <ol className="mt-5 space-y-3">
              {items.map((item, index) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-snug text-ink-muted"
                >
                  <span
                    className="shrink-0 font-semibold tabular-nums text-ink"
                    style={{ color: accent }}
                  >
                    {index + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        );
      };

      const useStackedGallery =
        !isPhone &&
        (decisionImages.length > 1 ||
          (decisionImages.length === 1 && section.pointers));

      // Multi-screen decisions: copy on top, gallery below — avoids an empty text column
      if (useStackedGallery) {
        const hasLead =
          decisionImages.length % 2 === 1 &&
          decisionImages.length >= 3 &&
          !section.pointers;
        const lead = hasLead ? decisionImages[0] : null;
        const gridImages = hasLead ? decisionImages.slice(1) : decisionImages;

        return (
          <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
            <Reveal delay={delay}>
              <div className="max-w-3xl">{decisionCopy}</div>
              <div className="mt-10 space-y-6">
                {lead &&
                  renderDecisionImage(lead, "(max-width: 1024px) 100vw, 900px")}
                <div className="grid gap-6 md:grid-cols-2">
                  {gridImages.map((image) =>
                    renderDecisionImage(
                      image,
                      "(max-width: 768px) 100vw, 50vw",
                    ),
                  )}
                  {renderDecisionPointers()}
                </div>
              </div>
            </Reveal>
          </section>
        );
      }

      const media = isPhone ? (
        <PhoneFrame
          src={decisionImages[0].src}
          alt={decisionImages[0].alt}
          width={390}
          height={844}
        />
      ) : (
        <div className="space-y-4">
          {decisionImages.map((image) =>
            renderDecisionImage(image, "(max-width: 1024px) 100vw, 580px"),
          )}
        </div>
      );

      return (
        <section id={section.id} className="scroll-mt-28 py-12 md:py-16">
          <Reveal delay={delay}>
            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
              <div
                className={`${isPhone ? "flex justify-center lg:col-span-5" : "lg:col-span-7"} ${
                  imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {media}
              </div>
              <div
                className={`${isPhone ? "lg:col-span-7" : "lg:col-span-5"} ${
                  imageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {decisionCopy}
              </div>
            </div>
          </Reveal>
        </section>
      );
    }

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
            <h2 className="cs-chapter-title max-w-3xl">{section.title}</h2>
            <ProcessSteps
              subtitle={section.subtitle}
              steps={section.steps}
              footnote={section.footnote}
              image={section.image}
              theme={theme}
            />
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
            ) : section.layout === "competitive" ? (
              <CompetitiveAnalysisTable />
            ) : section.layout === "benchmark" && section.benchmark ? (
              <EvBenchmarkTable data={section.benchmark} theme={theme} />
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
            ) : section.layout === "hierarchy" ? (
              <PrincipleHierarchy items={section.items} theme={theme} />
            ) : section.layout === "future" ? (
              <FutureOpportunities items={section.items} theme={theme} />
            ) : section.layout === "layers" ? (
              <ProductLayersFlow items={section.items} theme={theme} />
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
            {section.layout === "brainstorm" ? (
              <AirportBrainstormGrid
                items={section.cards.map((card) => ({
                  title: card.title ?? "",
                  description: card.description,
                  image: card.image ?? "",
                }))}
              />
            ) : (
              <PerspectiveCards cards={section.cards} theme={theme} />
            )}
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
