import { HeroContent } from "@/components/hero/hero-content";
import { AboutSection } from "@/components/about/about-section";
import { EducationSection } from "@/components/education/education-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ContactSection } from "@/components/contact/contact-section";

export default function Home() {
  return (
    <div className="bg-transparent relative">
      {/* 01. HERO_SYNAPSE */}
      <HeroContent />

      {/* 02. COGNITIVE_CORE */}
      <AboutSection />

      {/* 03. EVOLUTION_MATRIX (Experience) */}
      <ExperienceTimeline />

      {/* 04. SYNAPSE_HUB (Skills) */}
      <SkillsSection />

      {/* 05. INTELLIGENCE_VAULT (Projects) */}
      <ProjectsSection />

      {/* 06. FOUNDATIONAL_CORE (Education) */}
      <EducationSection />

      {/* 07. UNIVERSAL_UPLINK (Contact) */}
      <ContactSection />
    </div>
  );
}
