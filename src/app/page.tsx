import { HeroBackground } from "@/components/hero/hero-background";
import { HeroContent } from "@/components/hero/hero-content";
import { AboutSection } from "@/components/about/about-section";
import { EducationSection } from "@/components/education/education-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ContactSection } from "@/components/contact/contact-section";

export default function Home() {
  return (
    <div className="bg-[#020202]">
      {/* 01. HERO_SYNAPSE */}
      <section id="hero" className="relative w-full h-screen overflow-hidden">
        <HeroBackground />
        <HeroContent />
      </section>

      {/* 02. COGNITIVE_CORE */}
      <div id="about">
        <AboutSection />
      </div>

      {/* 03. EVOLUTION_MATRIX (Experience) */}
      <div id="experience">
        <ExperienceTimeline />
      </div>

      {/* 04. SYNAPSE_HUB (Skills) */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* 05. INTELLIGENCE_VAULT (Projects) */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* 06. FOUNDATIONAL_CORE (Education) */}
      <div id="education">
        <EducationSection />
      </div>

      {/* 07. UNIVERSAL_UPLINK (Contact) */}
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}
