import { HeroBackground } from "@/components/hero/hero-background";
import { HeroContent } from "@/components/hero/hero-content";
import { AboutSection } from "@/components/about/about-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { SkillsVisualization } from "@/components/skills/skills-visualization";
import { ContactSection } from "@/components/contact/contact-section";

export default function Home() {
  return (
    <div className="snap-container">
      <section id="hero" className="snap-section relative w-full h-screen overflow-hidden">
        <HeroBackground />
        <HeroContent />
      </section>

      <div id="about" className="snap-section">
        <AboutSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="experience" className="snap-section">
        <ExperienceTimeline />
      </div>

      <div id="skills" className="snap-section">
        <SkillsVisualization />
      </div>

      <div id="contact" className="snap-section">
        <ContactSection />
      </div>
    </div>
  );
}
