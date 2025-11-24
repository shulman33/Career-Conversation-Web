import { HeroSection } from "@/components/sections/HeroSection"
import { ChatbotSection } from "@/components/sections/ChatbotSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { WindowNavigation } from "@/components/WindowNavigation"
import { GridBackground } from "@/components/decorative/GridBackground"
import {
  mockHero,
  mockProjects,
  mockTechnologies,
  mockContact,
  categoryLabels,
  proficiencyColors,
} from "@/lib/mockData"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Grid background */}
      <GridBackground />

      {/* Navigation */}
      <WindowNavigation />

      {/* Main content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection
          name={mockHero.name}
          tagline={mockHero.tagline}
          chatbotCta={mockHero.chatbotCta}
        />

        {/* Chatbot Section */}
        <ChatbotSection />

        {/* Projects Section */}
        <ProjectsSection projects={mockProjects} />

        {/* Tech Stack Section */}
        <TechStackSection
          technologies={mockTechnologies}
          categoryLabels={categoryLabels}
          proficiencyColors={proficiencyColors}
        />

        {/* Contact Section */}
        <ContactSection contact={mockContact} />
      </main>
    </div>
  )
}
