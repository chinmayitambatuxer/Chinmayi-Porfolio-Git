import Image from "next/image";
import type {
  BenchmarkData,
  BenchmarkImageValue,
  BenchmarkValue,
  CaseStudyTheme,
} from "@/types/case-study";

function isBenchmarkImage(
  value: BenchmarkValue,
): value is BenchmarkImageValue {
  return (
    typeof value === "object" &&
    value !== null &&
    "image" in value &&
    "alt" in value
  );
}

type EvBenchmarkTableProps = {
  data: BenchmarkData;
  theme: CaseStudyTheme;
};

function CheckIcon({ color }: { color: string }) {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full"
      style={{ backgroundColor: color }}
      aria-label="Yes"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path
          d="M4 8.2 6.8 11 12 5.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span
      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#e05252]"
      aria-label="No"
    >
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden>
        <path
          d="M5.5 5.5l5 5M10.5 5.5l-5 5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function BenchmarkCell({
  value,
  theme,
}: {
  value: BenchmarkValue;
  theme: CaseStudyTheme;
}) {
  if (value === true) {
    return <CheckIcon color={theme.accent} />;
  }

  if (value === false) {
    return <CrossIcon />;
  }

  if (value === null) {
    return <span className="text-ink-light" aria-hidden>{" "}</span>;
  }

  if (value === "-") {
    return <span className="text-sm text-ink-muted">—</span>;
  }

  if (isBenchmarkImage(value)) {
    return (
      <Image
        src={value.image}
        alt={value.alt}
        width={88}
        height={50}
        className="mx-auto h-[50px] w-auto max-w-[88px] object-contain"
        unoptimized
      />
    );
  }

  return <span className="text-sm leading-snug text-ink">{value}</span>;
}

export function EvBenchmarkTable({ data, theme }: EvBenchmarkTableProps) {
  const { brands, rows } = data;

  return (
    <div className="mt-10">
      <div className="overflow-hidden rounded-2xl border border-[#e0e0e0] bg-white">
        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[960px] border-collapse text-left">
            <caption className="sr-only">
              Competitive benchmark of low-battery and efficiency modes across{" "}
              {brands.join(", ")}
            </caption>
            <thead>
              <tr className="border-b border-[#e0e0e0]">
                <th
                  scope="col"
                  className="w-[min(280px,32%)] px-6 py-5 text-left text-lg font-semibold text-ink"
                >
                  Pointers
                </th>
                {brands.map((brand) => (
                  <th
                    key={brand}
                    scope="col"
                    className="border-l border-[#e0e0e0] px-4 py-5 text-center text-lg font-semibold text-ink"
                  >
                    {brand}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row.label}
                  className="bg-white"
                  style={{
                    borderBottom:
                      rowIndex < rows.length - 1
                        ? "1px solid #e0e0e0"
                        : undefined,
                  }}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-left text-base font-medium leading-snug text-ink"
                  >
                    {row.label}
                  </th>
                  {row.values.map((value, cellIndex) => (
                    <td
                      key={`${row.label}-${cellIndex}`}
                      className="border-l border-[#e0e0e0] px-4 py-4 text-center align-middle"
                    >
                      <div className="flex min-h-7 items-center justify-center">
                        <BenchmarkCell value={value} theme={theme} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="divide-y divide-[#e0e0e0] lg:hidden">
          {brands.map((brand, brandIndex) => (
            <li key={brand} className="p-5">
              <p
                className="text-lg font-semibold text-ink"
                style={{ color: theme.accent }}
              >
                {brand}
              </p>
              <dl className="mt-4 space-y-3">
                {rows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start justify-between gap-4 border-b border-[#e0e0e0]/60 pb-3 last:border-0 last:pb-0"
                  >
                    <dt className="max-w-[55%] text-sm font-medium text-ink">
                      {row.label}
                    </dt>
                    <dd className="m-0 text-right">
                      <BenchmarkCell
                        value={row.values[brandIndex]}
                        theme={theme}
                      />
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
