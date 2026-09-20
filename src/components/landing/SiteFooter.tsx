import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--lp-border)] bg-white">
      <div className="mx-auto max-w-[var(--cs-page)] px-6 py-12 md:px-10">
        <p className="font-[family-name:var(--font-bricolage)] text-lg font-bold text-[var(--lp-ink)]">
          {site.name}
        </p>
        <p className="lp-body-sm mt-1">
          {site.title} · {site.location}
        </p>
      </div>
    </footer>
  );
}
