import Image from "next/image";
import type { CaseStudyTheme } from "@/types/case-study";

type PersonaSplitProps = {
  title: string;
  label?: string;
  content: string;
  bullets?: string[];
  image: { src: string; alt: string; width?: number; height?: number };
  theme: CaseStudyTheme;
};

function parseBullet(item: string) {
  const match = item.match(/^([^:]+):\s*(.+)$/);
  return match
    ? { label: match[1].trim(), text: match[2].trim() }
    : { label: null, text: item };
}

export function PersonaSplit({
  title,
  label,
  content,
  bullets,
  image,
  theme,
}: PersonaSplitProps) {
  const traits = bullets?.map(parseBullet) ?? [];

  return (
    <>
      <h2 className="cs-chapter-title max-w-3xl">{title}</h2>

      <div
        className="mt-10 rounded-2xl border p-6 md:p-8"
        style={{
          backgroundColor: theme.accentSoft,
          borderColor: `${theme.accentMuted}80`,
        }}
      >
        <div className="flex items-start gap-5 md:gap-6">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width ?? 160}
            height={image.height ?? 160}
            className="h-24 w-24 shrink-0 rounded-2xl object-cover shadow-sm md:h-28 md:w-28"
          />

          <div className="min-w-0 flex-1">
            {label && (
              <p className="cs-meta-label" style={{ color: theme.accent }}>
                {label}
              </p>
            )}
            <p className="cs-body mt-2 text-[1.0625rem] leading-relaxed">
              {content}
            </p>
          </div>
        </div>

        {traits.length > 0 && (
          <div
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {traits.map((trait) => (
              <div
                key={trait.label ?? trait.text}
                className="rounded-xl border bg-white px-4 py-4 md:px-5 md:py-5"
                style={{ borderColor: `${theme.accentMuted}70` }}
              >
                {trait.label && (
                  <p
                    className="cs-meta-label"
                    style={{ color: theme.accent }}
                  >
                    {trait.label}
                  </p>
                )}
                <p className="cs-body-sm mt-2">{trait.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
