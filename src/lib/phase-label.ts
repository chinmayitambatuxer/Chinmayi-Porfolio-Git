/** Strip a leading "1 — " style prefix from phase copy. */
export function stripLeadingChapterNumber(phase: string): string {
  return phase.replace(/^(?:Phase\s+)?\d+\s*—\s*/i, "").trim();
}

export type PhaseLabelOptions = {
  /** When false, use "3: Define" instead of "Phase 3: Define". */
  includePhaseWord?: boolean;
};

function formatPhaseLabel(
  chapter: number,
  title: string,
  includePhaseWord: boolean,
): string {
  const label = title.trim();
  return includePhaseWord ? `Phase ${chapter}: ${label}` : `${chapter}: ${label}`;
}

/** Title for in-page phase headers and timeline pills, e.g. "Phase 3: Research Synthesis". */
export function phaseHeading(phase: string, options?: PhaseLabelOptions): string {
  return phasePillLabel(phase, options);
}

/** Timeline pills and headings — "Phase N: …" (or "N: …" when includePhaseWord is false). */
export function phasePillLabel(phase: string, options?: PhaseLabelOptions): string {
  const includePhaseWord = options?.includePhaseWord ?? true;
  const withPhaseWord = phase.match(/^Phase\s+(\d+)\s*—\s*(.+)$/i);
  if (withPhaseWord) {
    return formatPhaseLabel(
      Number(withPhaseWord[1]),
      withPhaseWord[2],
      includePhaseWord,
    );
  }

  const numberedOnly = phase.match(/^(\d+)\s*—\s*(.+)$/);
  if (numberedOnly) {
    return formatPhaseLabel(
      Number(numberedOnly[1]),
      numberedOnly[2],
      includePhaseWord,
    );
  }

  return phase.replace(/\s*—\s*/g, ": ").trim();
}

/** Short name after phase number, e.g. "Define". */
export function phaseShortLabel(phase: string): string {
  const withPhaseWord = phase.match(/^Phase\s+\d+\s*—\s*(.+)$/i);
  if (withPhaseWord) return withPhaseWord[1].trim();

  const numberedOnly = phase.match(/^\d+\s*—\s*(.+)$/);
  if (numberedOnly) return numberedOnly[1].trim();

  return stripLeadingChapterNumber(phase);
}
