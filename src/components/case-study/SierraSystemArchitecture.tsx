import type { CaseStudyTheme } from "@/types/case-study";

type SierraSystemArchitectureProps = {
  theme: CaseStudyTheme;
};

const displays = [
  {
    title: "Driver Display",
    subtitle: "Instrument Cluster",
    detail: "Speed, range, navigation prompts, safety-critical status",
  },
  {
    title: "Infotainment Display",
    subtitle: "Central Touchscreen",
    detail: "Navigation, media, phone, climate, vehicle settings",
  },
  {
    title: "Passenger Display",
    subtitle: "Entertainment & Controls",
    detail: "Independent media, video, games, apps, headphones",
  },
];

const services = [
  {
    title: "Audio Engine",
    subtitle: "Processing & management",
    items: ["Playback control", "Mixing & routing", "Volume & zones", "Concurrency rules"],
  },
  {
    title: "Bluetooth Manager",
    subtitle: "Connectivity",
    items: ["Pairing", "Device management", "Audio streaming", "Call handling"],
  },
  {
    title: "Vehicle APIs",
    subtitle: "Data & controls",
    items: ["Vehicle state", "Speed & gear", "Climate", "Safety signals"],
  },
  {
    title: "Media Services",
    subtitle: "Content & sources",
    items: ["Local / USB", "Streaming", "Radio & podcasts", "Video services"],
  },
];

const resources = [
  "Audio output",
  "Microphones",
  "Network",
  "Storage",
  "System memory",
  "Power management",
];

export function SierraSystemArchitecture({ theme }: SierraSystemArchitectureProps) {
  return (
    <div
      className="overflow-hidden rounded-2xl border p-5 md:p-8"
      style={{ borderColor: theme.accentMuted, backgroundColor: theme.accentSoft }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="rounded-full px-5 py-2 text-sm font-bold text-white"
          style={{ backgroundColor: theme.accent }}
        >
          Tata Sierra Cockpit
        </div>

        <div className="grid w-full gap-3 md:grid-cols-3">
          {displays.map((display) => (
            <div
              key={display.title}
              className="rounded-xl border bg-white p-4"
              style={{ borderColor: `${theme.accentMuted}88` }}
            >
              <p className="text-sm font-bold text-ink">{display.title}</p>
              <p className="mt-1 text-[0.6875rem] font-semibold" style={{ color: theme.accent }}>
                {display.subtitle}
              </p>
              <p className="mt-2 text-[0.75rem] leading-snug text-ink-muted">
                {display.detail}
              </p>
            </div>
          ))}
        </div>

        <div
          className="w-full rounded-xl border px-4 py-3 text-center"
          style={{
            borderColor: theme.accent,
            backgroundColor: "#FFF8F2",
          }}
        >
          <p className="text-sm font-bold text-ink">Android System Layer</p>
          <p className="mt-1 text-[0.75rem] text-ink-muted">Android Automotive OS</p>
        </div>

        <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border bg-white p-4"
              style={{ borderColor: `${theme.accentMuted}88` }}
            >
              <p className="text-sm font-bold text-ink">{service.title}</p>
              <p className="mt-1 text-[0.6875rem]" style={{ color: theme.accent }}>
                {service.subtitle}
              </p>
              <ul className="mt-3 space-y-1.5">
                {service.items.map((item) => (
                  <li key={item} className="text-[0.75rem] text-ink-muted">
                    · {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="w-full rounded-xl border bg-white p-4"
          style={{ borderColor: `${theme.accentMuted}88` }}
        >
          <p className="text-center text-sm font-bold text-ink">Shared Resources</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {resources.map((resource) => (
              <span
                key={resource}
                className="rounded-full px-3 py-1.5 text-[0.6875rem] font-semibold"
                style={{ backgroundColor: theme.accentSoft, color: theme.accent }}
              >
                {resource}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
