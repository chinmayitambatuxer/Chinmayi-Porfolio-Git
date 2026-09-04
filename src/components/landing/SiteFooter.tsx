import { site } from "@/data/site";

const socialLinks = [
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Behance", href: site.social.behance },
  { label: "Instagram", href: site.social.instagram },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--lp-border)] bg-white">
      <div className="mx-auto flex max-w-[var(--cs-page)] flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-[family-name:var(--font-bricolage)] text-lg font-bold text-[var(--lp-ink)]">
            {site.name}
          </p>
          <p className="lp-body-sm mt-1">
            {site.title} · {site.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[var(--lp-body)] transition-colors hover:text-[var(--lp-ink)]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-[var(--lp-muted)]">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
