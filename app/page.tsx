import { HeroSection } from "@/components/sections/HeroSection"
import { ChatbotSection } from "@/components/sections/ChatbotSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { WindowNavigation } from "@/components/WindowNavigation"
import { GridBackground } from "@/components/decorative/GridBackground"
import { categoryLabels, proficiencyColors } from "@/lib/mockData"
import { sanityFetch } from "@/sanity/lib/fetch"
import { HERO_QUERY } from "@/sanity/queries/hero"
import { FEATURED_PROJECTS_QUERY } from "@/sanity/queries/projects"
import { TECHNOLOGIES_QUERY } from "@/sanity/queries/technologies"
import { CONTACT_QUERY } from "@/sanity/queries/contact"

export default async function Home() {
  // Fetch all content from Sanity with tag-based revalidation
  const [hero, projects, technologies, contact] = await Promise.all([
    sanityFetch({
      query: HERO_QUERY,
      tags: ['hero'],
    }),
    sanityFetch({
      query: FEATURED_PROJECTS_QUERY,
      tags: ['project'],
    }),
    sanityFetch({
      query: TECHNOLOGIES_QUERY,
      tags: ['technology'],
    }),
    sanityFetch({
      query: CONTACT_QUERY,
      tags: ['contact'],
    }),
  ])

  // Transform Sanity data to match component expectations
  const transformedProjects = (projects || []).map((project) => ({
    _id: project._id,
    title: project.title || 'Untitled Project',
    description: project.description || '',
    technologies: (project.technologies || [])
      .map((tech) => tech?.name)
      .filter((name): name is string => name != null),
    featured: true, // Featured projects query only returns featured projects
    demoUrl: project.demoUrl,
    githubUrl: project.githubUrl,
  }))

  const transformedTechnologies = (technologies || [])
    .filter((tech) => tech.name) // Filter out any technologies without a name
    .map((tech) => ({
      name: tech.name!,
      category: tech.category || 'tools',
      proficiencyLevel: tech.proficiencyLevel || 'intermediate',
    }))

  return (
    <div className="relative min-h-screen">
      {/* Grid background */}
      <GridBackground />

      {/* Navigation */}
      <WindowNavigation />

      {/* Main content */}
      <main className="relative">
        {/* Hero Section */}
        {hero && hero.name && hero.tagline && hero.chatbotCta && (
          <HeroSection
            name={hero.name}
            tagline={hero.tagline}
            chatbotCta={hero.chatbotCta}
          />
        )}

        {/* Chatbot Section */}
        <ChatbotSection />

        {/* Projects Section */}
        <ProjectsSection projects={transformedProjects} />

        {/* Tech Stack Section */}
        <TechStackSection
          technologies={transformedTechnologies}
          categoryLabels={categoryLabels}
          proficiencyColors={proficiencyColors}
        />

        {/* Contact Section */}
        {contact && contact.email && <ContactSection contact={contact as any} />}
      </main>
    </div>
  )
}
