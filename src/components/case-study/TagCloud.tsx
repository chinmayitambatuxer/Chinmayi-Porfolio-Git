type TagCloudProps = {
  items: string[];
  accent: string;
  accentSoft: string;
  accentMuted: string;
};

export function TagCloud({
  items,
  accent,
  accentSoft,
  accentMuted,
}: TagCloudProps) {
  return (
    <ul className="mt-6 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border px-4 py-2 text-sm text-ink-muted"
          style={{ backgroundColor: accentSoft, borderColor: accentMuted }}
        >
          <span className="font-medium" style={{ color: accent }}>
            ·
          </span>{" "}
          {item}
        </li>
      ))}
    </ul>
  );
}
