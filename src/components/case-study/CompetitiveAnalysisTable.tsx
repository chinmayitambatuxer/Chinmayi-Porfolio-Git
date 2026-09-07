import Image from "next/image";
import { caseStudyImage } from "@/lib/assets";

const img = (file: string) => caseStudyImage("tata-sierra-hmi", file);

type UniqueItem = {
  icon: IconName;
  text: string;
};

type BrandMark = "mercedes" | "porsche" | "jeep" | "li";

type Competitor = {
  name: string;
  brand: BrandMark;
  image: string;
  imageAlt: string;
  featuresLeft: string[];
  featuresRight: string[];
  unique: UniqueItem[];
  ratings: {
    simplicity: number;
    usability: number;
    intuitiveness: number;
  };
};

type IconName =
  | "ai"
  | "camera"
  | "user"
  | "grid"
  | "cockpit"
  | "phone"
  | "hdmi"
  | "screen"
  | "bed"
  | "apps"
  | "seatbelt";

const competitors: Competitor[] = [
  {
    name: "Mercedes EQS",
    brand: "mercedes",
    image: img("competitor-eqs.png"),
    imageAlt: "Mercedes-Benz EQS",
    featuresLeft: [
      "Navigation",
      "Phone",
      "Radio",
      "Media",
      "Apps",
      "Comfort",
      "Settings",
      "Information",
    ],
    featuresRight: [
      "Search",
      "EQ",
      "Share Content",
      "Shortcuts",
      "Climate Control",
      "Air Quality",
      "Voice Control",
      "Connect Headphones",
      "Car Loudspeakers",
    ],
    unique: [
      {
        icon: "ai",
        text: "Uses AI to display personalized suggestions and adapt completely to the user’s needs.",
      },
      {
        icon: "camera",
        text: "Camera-based blocking logic so that the driver does not get distracted.",
      },
      { icon: "user", text: "Profiles" },
      { icon: "grid", text: "Widget Shortcuts" },
    ],
    ratings: { simplicity: 3, usability: 4, intuitiveness: 4 },
  },
  {
    name: "Porsche Taycan",
    brand: "porsche",
    image: img("competitor-taycan.png"),
    imageAlt: "Porsche Taycan",
    featuresLeft: [
      "Navigation",
      "Phone",
      "Cockpit",
      "Media",
      "Devices",
      "Sports Chrono",
      "Weather",
      "Instructions",
      "Information",
    ],
    featuresRight: [
      "Search",
      "Widgets",
      "Custom Layout",
      "Share Content",
      "Settings",
    ],
    unique: [
      { icon: "cockpit", text: "Cockpit option to view the IC" },
      { icon: "phone", text: "Customization of My Screen" },
      {
        icon: "seatbelt",
        text: "Only work while driving when somebody is in the passenger seat with their seat belts on.",
      },
    ],
    ratings: { simplicity: 4, usability: 4, intuitiveness: 3 },
  },
  {
    name: "Jeep Grand Wagoneer",
    brand: "jeep",
    image: img("competitor-wagoneer.png"),
    imageAlt: "Jeep Grand Wagoneer",
    featuresLeft: [
      "Audio",
      "Video",
      "HDMI",
      "U Connect",
      "Navigation",
      "Devices",
      "Cameras",
      "Notifications",
      "Control Rear Screens",
    ],
    featuresRight: [
      "Search",
      "Apps",
      "Climate",
      "USB",
      "Share Content",
      "Controls",
      "Settings",
    ],
    unique: [
      {
        icon: "hdmi",
        text: "Can play content through HDMI, USB and Other sources.",
      },
      { icon: "user", text: "UConnect — Rear seat Entertainment control." },
      { icon: "screen", text: "FireStick and Fire TV." },
      { icon: "camera", text: "View Vehicle Camera Apps." },
    ],
    ratings: { simplicity: 5, usability: 4, intuitiveness: 4 },
  },
  {
    name: "Li Xiang L9",
    brand: "li",
    image: img("competitor-l9.png"),
    imageAlt: "Li Xiang L9",
    featuresLeft: [
      "Devices",
      "Nap Mode",
      "Pre-Installed Apps",
      "iQIYI",
      "Bilibili",
      "iff",
      "Quanmin",
    ],
    featuresRight: ["Quanmin", "Ximalaya", "QQ Music", "Migu Videos"],
    unique: [
      { icon: "screen", text: "Entertainment heavy screen." },
      { icon: "ai", text: "Personalized content suggestion." },
      { icon: "bed", text: "Nap mode." },
      { icon: "apps", text: "Preinstalled Apps." },
    ],
    ratings: { simplicity: 1, usability: 2, intuitiveness: 1 },
  },
];

const ratingLabels = ["Simplicity", "Usability", "Intuitiveness"] as const;

function BrandLogo({ brand }: { brand: BrandMark }) {
  const common = {
    width: 28,
    height: 28,
    "aria-hidden": true,
  };

  if (brand === "mercedes") {
    return (
      <svg {...common} viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#1e3a5f" strokeWidth="1.6" />
        <path
          d="M16 4.5 16 16 6.2 23.2M16 16l9.8 7.2"
          stroke="#1e3a5f"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (brand === "porsche") {
    return (
      <svg {...common} viewBox="0 0 32 32" fill="none">
        <path
          d="M16 3.5c6 0 10.5 3.2 10.5 8.8 0 6.4-5.4 11.4-10.5 16.2C10.9 23.7 5.5 18.7 5.5 12.3 5.5 6.7 10 3.5 16 3.5Z"
          stroke="#1e3a5f"
          strokeWidth="1.6"
        />
        <path
          d="M11 18c1.4-3.2 2.2-6.4 5-8.2 2.8 1.8 3.6 5 5 8.2"
          stroke="#1e3a5f"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="16" cy="12.5" r="1.3" fill="#1e3a5f" />
      </svg>
    );
  }

  if (brand === "jeep") {
    return (
      <span className="font-[family-name:var(--font-bricolage)] text-[13px] font-extrabold tracking-[0.18em] text-[#1e3a5f]">
        JEEP
      </span>
    );
  }

  return (
    <svg {...common} viewBox="0 0 32 32" fill="none">
      <rect
        x="7"
        y="6"
        width="5.5"
        height="20"
        rx="1"
        fill="#1e3a5f"
      />
      <rect
        x="19.5"
        y="6"
        width="5.5"
        height="20"
        rx="1"
        fill="#1e3a5f"
      />
    </svg>
  );
}

function VehicleCell({ car }: { car: Competitor }) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <BrandLogo brand={car.brand} />
      <p className="font-[family-name:var(--font-bricolage)] text-sm font-bold leading-tight text-[#1e3a5f]">
        {car.name}
      </p>
      <Image
        src={car.image}
        alt={car.imageAlt}
        width={640}
        height={360}
        className="mt-0.5 h-auto w-full max-w-[220px]"
        sizes="(max-width: 1024px) 70vw, 220px"
      />
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 list-disc space-y-1 pl-4 text-[13px] leading-snug text-[#2f3a45]">
      {items.map((item, index) => (
        <li key={`${item}-${index}`}>{item}</li>
      ))}
    </ul>
  );
}

function StarScore({ score }: { score: number }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="inline-flex gap-px" aria-hidden>
        {Array.from({ length: 5 }, (_, i) => (
          <span
            key={i}
            className="text-[13px] leading-none"
            style={{ color: i < score ? "#E2A818" : "#D5DBE3" }}
          >
            ★
          </span>
        ))}
      </span>
      <span className="text-[11px] font-medium text-[#5b6570]">{score}/5</span>
    </div>
  );
}

function UniqueIcon({ name }: { name: IconName }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#3A6FA8",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "ai":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M12 4v3M12 17v3M4 12h3M17 12h3" />
        </svg>
      );
    case "camera":
      return (
        <svg {...common}>
          <path d="M4 8h3l1.5-2h7L17 8h3v11H4V8z" />
          <circle cx="12" cy="13.5" r="3" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5 19c1.2-3.4 3.6-5 7-5s5.8 1.6 7 5" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="7" height="7" rx="1" />
          <rect x="13" y="4" width="7" height="7" rx="1" />
          <rect x="4" y="13" width="7" height="7" rx="1" />
          <rect x="13" y="13" width="7" height="7" rx="1" />
        </svg>
      );
    case "cockpit":
      return (
        <svg {...common}>
          <path d="M4 16c2-6 6-9 8-9s6 3 8 9" />
          <circle cx="12" cy="16" r="1.4" />
          <path d="M7 16h2.5M14.5 16H17" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <rect x="8" y="3" width="8" height="18" rx="1.8" />
          <path d="M11 18.5h2" />
        </svg>
      );
    case "hdmi":
      return (
        <svg {...common}>
          <rect x="3" y="9" width="18" height="7" rx="1.5" />
          <path d="M7 9V8h10v1M8 16v1h8v-1" />
        </svg>
      );
    case "screen":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="12" rx="1.5" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case "bed":
      return (
        <svg {...common}>
          <path d="M3 18V10h8a5 5 0 0 1 10 0v8" />
          <path d="M3 14h18M3 18h18" />
        </svg>
      );
    case "apps":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <path d="M14 17h6M17 14v6" />
        </svg>
      );
    case "seatbelt":
      return (
        <svg {...common}>
          <circle cx="12" cy="6.5" r="2.4" />
          <path d="M8 20.5 12 9.5l4 11" />
          <path d="M6.5 16.5h11" />
        </svg>
      );
  }
}

function UniqueList({ items }: { items: UniqueItem[] }) {
  return (
    <ul className="m-0 space-y-2.5 p-0">
      {items.map((item) => (
        <li key={item.text} className="flex gap-2.5">
          <span className="mt-0.5 shrink-0">
            <UniqueIcon name={item.icon} />
          </span>
          <span className="text-[13px] leading-snug text-[#2f3a45]">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CompetitiveAnalysisTable() {
  return (
    <div className="mt-10">
      <div className="overflow-hidden rounded-2xl border border-[#d5dde6] bg-[#eef3f8]">
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1080px] border-collapse text-left">
            <caption className="sr-only">
              Competitive analysis of premium automotive HMIs: Mercedes EQS,
              Porsche Taycan, Jeep Grand Wagoneer, and Li Xiang L9
            </caption>
            <thead>
              <tr className="bg-[#1e3a5f] text-white">
                <th
                  scope="col"
                  rowSpan={2}
                  className="w-[240px] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                >
                  Vehicle
                </th>
                <th
                  scope="col"
                  rowSpan={2}
                  className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                >
                  Features in PID
                </th>
                <th
                  scope="col"
                  rowSpan={2}
                  className="px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em]"
                >
                  Anything unique
                </th>
                <th
                  scope="colgroup"
                  colSpan={3}
                  className="border-l border-white/15 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.12em]"
                >
                  Ratings
                </th>
              </tr>
              <tr className="bg-[#1e3a5f] text-white">
                {ratingLabels.map((label) => (
                  <th
                    key={label}
                    scope="col"
                    className="w-[92px] border-l border-white/15 px-2 py-2 text-center text-[10px] font-medium uppercase tracking-[0.1em] text-white/90"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.map((car) => (
                <tr
                  key={car.name}
                  className="border-t border-[#d5dde6] align-middle"
                >
                  <th scope="row" className="bg-white/50 px-4 py-5">
                    <VehicleCell car={car} />
                  </th>
                  <td className="px-4 py-5">
                    <div className="grid grid-cols-2 gap-x-6">
                      <FeatureList items={car.featuresLeft} />
                      <FeatureList items={car.featuresRight} />
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <UniqueList items={car.unique} />
                  </td>
                  <td className="border-l border-[#d5dde6] px-2 py-5">
                    <StarScore score={car.ratings.simplicity} />
                  </td>
                  <td className="border-l border-[#d5dde6] px-2 py-5">
                    <StarScore score={car.ratings.usability} />
                  </td>
                  <td className="border-l border-[#d5dde6] px-2 py-5">
                    <StarScore score={car.ratings.intuitiveness} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="divide-y divide-[#d5dde6] lg:hidden">
          {competitors.map((car) => (
            <li key={car.name} className="p-5">
              <VehicleCell car={car} />
              <p className="cs-meta-label mt-5">Features in PID</p>
              <div className="mt-3 grid grid-cols-2 gap-x-4">
                <FeatureList items={car.featuresLeft} />
                <FeatureList items={car.featuresRight} />
              </div>
              <p className="cs-meta-label mt-6">Anything unique</p>
              <div className="mt-3">
                <UniqueList items={car.unique} />
              </div>
              <dl className="mt-6 grid grid-cols-3 gap-2 text-center">
                {(
                  [
                    ["Simplicity", car.ratings.simplicity],
                    ["Usability", car.ratings.usability],
                    ["Intuitiveness", car.ratings.intuitiveness],
                  ] as const
                ).map(([label, score]) => (
                  <div key={label}>
                    <dt className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-[#5b6570]">
                      {label}
                    </dt>
                    <dd className="m-0">
                      <StarScore score={score} />
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
