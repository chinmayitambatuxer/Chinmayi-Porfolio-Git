import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/types/case-study";
import { getCaseStudyCardMeta } from "@/lib/case-study-card-meta";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { label, color } = getCaseStudyCardMeta(study);

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-[var(--lp-surface)]">
        <Image
          src={study.heroImage}
          alt={study.title}
          fill
          className="object-cover object-[center_55%] transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transform-none"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="pt-6">
        <p className="lp-category" style={{ color }}>
          {label}
        </p>
        <h2 className="lp-card-title mt-3 transition-opacity group-hover:opacity-80">
          {study.title}
        </h2>
        <p className="lp-body mt-3 line-clamp-3">
          {study.headline || study.summary}
        </p>

        {study.metrics && study.metrics.length > 0 && (
          <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
            {study.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs font-semibold tracking-wide text-[var(--lp-muted)] uppercase">
                  {metric.label}
                </dt>
                <dd
                  className="mt-1 text-lg font-bold tabular-nums"
                  style={{ color }}
                >
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {study.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {study.tags.slice(0, 3).map((tag) => (
              <li key={tag} className="pill">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Link>
  );
}
