import type { CaseStudy } from "@/types/case-study";

type CardMeta = {
  label: string;
  color: string;
  accentSoft: string;
  accentMuted: string;
};

const domainLabels: Record<string, string> = {
  "Automotive HMI": "HMI Dashboard",
  "Automotive HMI / EV": "Automotive HMI / EV",
  Healthcare: "Healthcare",
  "Healthcare / Clinical workflow": "Healthcare / Clinical workflow",
  "Travel & Hospitality": "Mobile Application",
  "Travel / Airport Experience": "Travel / Airport Experience",
  Enterprise: "Enterprise UX",
  Productivity: "Mobile Application",
};

export function getCaseStudyCardMeta(study: CaseStudy): CardMeta {
  const { accent, accentSoft, accentMuted } = study.theme;

  return {
    label: domainLabels[study.domain] ?? study.domain,
    color: accent,
    accentSoft,
    accentMuted,
  };
}
