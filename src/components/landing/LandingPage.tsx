"use client";

import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { landingAccent } from "@/data/site";
import { AboutSection } from "./AboutSection";
import { ContactSection } from "./ContactSection";
import { ExperienceSection } from "./ExperienceSection";
import { LandingHero } from "./LandingHero";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { WorkSection } from "./WorkSection";

export function LandingPage() {
  return (
    <div className="landing-page">
      <ScrollProgress accent={landingAccent} />
      <SiteHeader />
      <main>
        <LandingHero />
        <WorkSection />
        <AboutSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
