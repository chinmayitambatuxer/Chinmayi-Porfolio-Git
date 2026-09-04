export function asset(file: string): string {
  return `/images/assets/${encodeURIComponent(file)}`;
}

export function caseStudyImage(slug: string, file: string): string {
  return `/images/case-studies/${slug}/${encodeURIComponent(file)}`;
}
