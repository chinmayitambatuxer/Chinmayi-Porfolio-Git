import type { CaseStudy } from "@/types/case-study";
import { caseStudyImage } from "@/lib/assets";
import { tataSierraHmi } from "./tata-sierra-hmi";
import { inVehicleExperience } from "./in-vehicle-experience";
import { sdohHealthPlatform } from "./sdoh-health-platform";
import { airportTravelExperience } from "./airport-travel-experience";
import { workSpace } from "./work-space";

export const caseStudies: CaseStudy[] = [
  tataSierraHmi,
  inVehicleExperience,
  sdohHealthPlatform,
  airportTravelExperience,
  workSpace,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((cs) => cs.slug);
}

export { caseStudyImage };
