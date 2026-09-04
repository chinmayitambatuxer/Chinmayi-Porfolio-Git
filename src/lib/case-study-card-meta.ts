import type { CaseStudy } from "@/types/case-study";

type CardMeta = {
  label: string;
  color: string;
};

const domainMeta: Record<string, CardMeta> = {
  "Automotive HMI": { label: "HMI Dashboard", color: "#7b7027" },
  Healthcare: { label: "Healthcare", color: "#366b74" },
  "Travel & Hospitality": { label: "Mobile Application", color: "#366b74" },
  Enterprise: { label: "Enterprise UX", color: "#a54711" },
};

export function getCaseStudyCardMeta(study: CaseStudy): CardMeta {
  return domainMeta[study.domain] ?? { label: study.domain, color: "#191d21" };
}
