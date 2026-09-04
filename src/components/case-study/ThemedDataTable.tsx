import type { CaseStudyTheme } from "@/types/case-study";

type ThemedDataTableProps = {
  headers: string[];
  rows: string[][];
  theme: CaseStudyTheme;
};

export function ThemedDataTable({
  headers,
  rows,
  theme,
}: ThemedDataTableProps) {
  return (
    <div
      className="mt-10 overflow-hidden rounded-2xl border"
      style={{
        backgroundColor: theme.accentSoft,
        borderColor: theme.accentMuted,
      }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead>
            <tr
              style={{
                backgroundColor: `${theme.accentMuted}40`,
                borderBottom: `1px solid ${theme.accentMuted}`,
              }}
            >
              {headers.map((header) => (
                <th
                  key={header}
                  className="px-5 py-4 pr-6 text-xs font-semibold uppercase tracking-wide text-ink"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="transition-colors hover:bg-white/50"
                style={{
                  borderBottom:
                    rowIndex < rows.length - 1
                      ? `1px solid ${theme.accentMuted}60`
                      : undefined,
                }}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-5 py-4 pr-6 align-top ${
                      cellIndex === 0
                        ? "font-semibold text-ink"
                        : "text-ink-muted"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
