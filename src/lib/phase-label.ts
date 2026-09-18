/** Strip a leading "1 — " style prefix from phase copy. */
export function stripLeadingChapterNumber(phase: string): string {
  return phase.replace(/^\d+\s*—\s*/, "").trim();
}

/** Title for in-page phase headers, e.g. "Phase 3 Research Synthesis". */
export function phaseHeading(phase: string): string {
  return phasePillLabel(phase);
}

/** Timeline pills and headings: "Phase 2 Define" (no em dash). */
export function phasePillLabel(phase: string): string {
  return stripLeadingChapterNumber(phase).replace(/\s*—\s*/g, " ").trim();
}

/** Short name after phase number, e.g. "Define". */
export function phaseShortLabel(phase: string): string {
  const withoutChapter = stripLeadingChapterNumber(phase);
  return withoutChapter.replace(/^Phase\s+\d+\s*—\s*/i, "").trim();
}
