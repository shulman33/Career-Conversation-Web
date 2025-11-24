import { HeroSection } from "@/components/sections/HeroSection"
import { ChatbotSection } from "@/components/sections/ChatbotSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { WindowNavigation } from "@/components/WindowNavigation"
import { GridBackground } from "@/components/decorative/GridBackground"
import { FloatingChatButton } from "@/components/FloatingChatButton"
import { categoryLabels, proficiencyColors } from "@/lib/mockData"
import { sanityFetch } from "@/sanity/lib/fetch"
import { HERO_QUERY } from "@/sanity/queries/hero"
import { FEATURED_PROJECTS_QUERY } from "@/sanity/queries/projects"
import { TECHNOLOGIES_QUERY } from "@/sanity/queries/technologies"
import { CONTACT_QUERY } from "@/sanity/queries/contact"
import { SITE_SETTINGS_QUERY } from "@/sanity/queries/siteSettings"

export default async function Home() {
  // Fetch all content from Sanity with tag-based revalidation
  const [hero, projects, technologies, contact, siteSettings] = await Promise.all([
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
    sanityFetch({
      query: SITE_SETTINGS_QUERY,
      tags: ['siteSettings'],
    }),
  ])

  // Debug logging to help diagnose content issues
  console.log('=== Sanity Data Fetch Results ===')
  console.log('Hero data:', JSON.stringify(hero, null, 2))
  console.log('Projects count:', projects?.length || 0)
  console.log('Technologies count:', technologies?.length || 0)
  console.log('Contact data:', JSON.stringify(contact, null, 2))
  console.log('Site Settings data:', JSON.stringify(siteSettings, null, 2))
  console.log('================================')

  // Transform Sanity data to match component expectations
  const transformedProjects = (projects || []).map((project: any) => ({
    _id: project._id,
    title: project.title || 'Untitled Project',
    description: project.description || '',
    longDescription: project.longDescription,
    technologies: (project.technologies || [])
      .map((tech: any) => tech?.name)
      .filter((name: any): name is string => name != null),
    featured: true, // Featured projects query only returns featured projects
    demoUrl: project.demoUrl,
    githubUrl: project.githubUrl,
    images: (project.images || [])
      .filter((img: any) => img?.asset?.url)
      .map((img: any) => ({
        asset: {
          url: img.asset.url,
        },
        alt: img.alt,
        caption: img.caption,
      })),
  }))

  const transformedTechnologies = (technologies || [])
    .filter((tech: any) => tech.name) // Filter out any technologies without a name
    .map((tech: any) => ({
      name: tech.name!,
      category: tech.category || 'tools',
      proficiencyLevel: tech.proficiencyLevel || 'intermediate',
      icon: tech.icon?.asset?.url ? {
        asset: {
          url: tech.icon.asset.url,
        },
        alt: tech.icon.alt,
      } : null,
      iconIdentifier: tech.iconIdentifier,
      description: tech.description,
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
        {hero && hero.name && hero.tagline && hero.chatbotCta ? (
          <HeroSection
            name={hero.name}
            tagline={hero.tagline}
            chatbotCta={hero.chatbotCta}
            professionalPhoto={hero.professionalPhoto?.asset?.url ? {
              asset: {
                _id: hero.professionalPhoto.asset._id,
                url: hero.professionalPhoto.asset.url,
              },
              alt: hero.professionalPhoto.alt || undefined,
              hotspot: hero.professionalPhoto.hotspot || undefined,
              crop: hero.professionalPhoto.crop || undefined,
            } : undefined}
          />
        ) : (
          <section className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <div className="p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
                <h2 className="text-2xl font-bold text-yellow-900 mb-2">
                  Hero Section Not Configured
                </h2>
                <p className="text-yellow-800 mb-4">
                  The hero section requires content to be created in Sanity Studio.
                </p>
                <div className="text-left bg-white p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-gray-900 mb-2">Missing fields:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {!hero && <li>Hero document not found</li>}
                    {hero && !hero.name && <li>Name</li>}
                    {hero && !hero.tagline && <li>Tagline</li>}
                    {hero && !hero.chatbotCta && <li>Chatbot CTA</li>}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    → Visit <a href="/studio" className="text-blue-600 underline">/studio</a> to create the Hero content
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Chatbot Section */}
        <ChatbotSection gradioEmbedUrl={siteSettings?.gradioEmbedUrl} />

        {/* Projects Section */}
        <ProjectsSection projects={transformedProjects} />

        {/* Tech Stack Section */}
        <TechStackSection
          technologies={transformedTechnologies}
          categoryLabels={categoryLabels}
          proficiencyColors={proficiencyColors}
        />

        {/* Contact Section */}
        {contact && contact.email ? (
          <ContactSection contact={contact as any} />
        ) : (
          <section id="contact" className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <div className="p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
                <h2 className="text-2xl font-bold text-yellow-900 mb-2">
                  Contact Section Not Configured
                </h2>
                <p className="text-yellow-800 mb-4">
                  The contact section requires content to be created in Sanity Studio.
                </p>
                <div className="text-left bg-white p-4 rounded border border-yellow-300">
                  <p className="font-semibold text-gray-900 mb-2">Missing fields:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {!contact && <li>Contact document not found</li>}
                    {contact && !contact.email && <li>Email (required)</li>}
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    → Visit <a href="/studio" className="text-blue-600 underline">/studio</a> to create the Contact content
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Floating chat button (mobile only) */}
      <FloatingChatButton />
    </div>
  )
}
