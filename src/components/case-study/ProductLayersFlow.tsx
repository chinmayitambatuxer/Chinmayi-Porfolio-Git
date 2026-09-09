import type { CaseStudyTheme } from "@/types/case-study";

type LayerItem = {
  title: string;
  description: string;
  bullets?: string[];
};

type ProductLayersFlowProps = {
  items: LayerItem[];
  theme: CaseStudyTheme;
};

function CaptureIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M8 4h8a2 2 0 0 1 2 2v14l-6-3-6 3V6a2 2 0 0 1 2-2Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10h5M9.5 13.5h3.5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function OrganiseIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <rect
        x="3"
        y="4"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="4"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth="1.5"
      />
      <rect
        x="3"
        y="13"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="13"
        width="7"
        height="7"
        rx="1.5"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CommunicateIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H10l-4 3.5V16H6.5A2.5 2.5 0 0 1 4 13.5v-7Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M8 9h8M8 12h5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = [CaptureIcon, OrganiseIcon, CommunicateIcon];

export function ProductLayersFlow({ items, theme }: ProductLayersFlowProps) {
  return (
    <div className="mt-10">
      {/* Flow track */}
      <div className="mb-5 hidden md:grid md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={`track-${item.title}`}
            className="relative flex items-center justify-center"
          >
            {index < items.length - 1 && (
              <span
                className="absolute left-1/2 top-1/2 h-px w-full"
                style={{ backgroundColor: `${theme.accentMuted}90` }}
                aria-hidden
              />
            )}
            <div
              className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold text-white"
              style={{ backgroundColor: theme.accent }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      <div
        className="grid gap-4 md:grid-cols-3 md:gap-5"
      >
        {items.map((item, index) => {
          const Icon = icons[index] ?? CaptureIcon;
          const isLast = index === items.length - 1;

          return (
            <article
              key={item.title}
              className="relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white p-6 md:p-7"
              style={{
                borderColor: `${theme.accentMuted}70`,
                boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-1"
                style={{
                  background: `linear-gradient(90deg, ${theme.accent}, ${theme.accentMuted})`,
                  opacity: 0.85 - index * 0.15,
                }}
                aria-hidden
              />

              <div className="flex items-start justify-between gap-4">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: theme.accentSoft }}
                >
                  <Icon color={theme.accent} />
                </div>
                <p
                  className="text-sm font-bold tabular-nums md:hidden"
                  style={{ color: theme.accent }}
                >
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="cs-body-sm mt-3 flex-1 leading-relaxed">
                {item.description}
              </p>

              {!isLast && (
                <p
                  className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] md:hidden"
                  style={{ color: theme.accentMuted }}
                >
                  Next →
                </p>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
