import type { ReactNode } from "react";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  variant?: "default" | "landing";
  children?: ReactNode;
};

export function SectionHeader({
  index,
  label,
  title,
  description,
  dark = false,
  variant = "default",
  children,
}: SectionHeaderProps) {
  const isLanding = variant === "landing";

  return (
    <div className={dark ? "text-white" : isLanding ? "text-[var(--lp-ink)]" : "text-ink"}>
      <p
        className={
          isLanding
            ? `lp-meta-label ${dark ? "text-white/60" : ""}`
            : `cs-meta-label ${dark ? "text-white/60" : ""}`
        }
      >
        {index} / {label}
      </p>
      <h2
        className={`mt-4 max-w-3xl text-balance ${
          isLanding
            ? `lp-section-title ${dark ? "text-white" : ""}`
            : `cs-section-title ${dark ? "text-white" : ""}`
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl ${
            isLanding
              ? `lp-body ${dark ? "text-white/70" : ""}`
              : `cs-body ${dark ? "text-white/70" : ""}`
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
