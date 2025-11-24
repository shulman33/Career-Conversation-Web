"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ExternalLink, Github, BookOpen, X } from "lucide-react"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PortableText } from "@portabletext/react"

interface Project {
  _id: string
  title: string
  description: string
  longDescription?: any
  technologies: string[]
  featured: boolean
  demoUrl: string | null
  githubUrl: string | null
  images?: Array<{
    asset: {
      url: string
    }
    alt?: string
    caption?: string
  }>
}

interface ProjectsSectionProps {
  projects: Project[]
}

const accentColors = ["pink", "purple", "orange", "cyan", "yellow"] as const

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  // Show featured projects first
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Section Header */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink via-purple to-orange">
                Projects
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              A showcase of my recent work in software development, AI, and data engineering.
            </motion.p>
          </div>

          {/* Projects Grid */}
          {sortedProjects.length === 0 ? (
            <div className="max-w-2xl mx-auto p-6 bg-yellow-50 border-2 border-yellow-400 rounded-lg">
              <h3 className="text-xl font-bold text-yellow-900 mb-2">
                No Projects Found
              </h3>
              <p className="text-yellow-800 mb-4">
                No project content has been created in Sanity Studio yet.
              </p>
              <div className="bg-white p-4 rounded border border-yellow-300">
                <p className="text-sm text-gray-700 mb-2">
                  To add projects:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-1 text-sm">
                  <li>Visit <a href="/studio" className="text-blue-600 underline">/studio</a></li>
                  <li>Click "Projects" in the sidebar</li>
                  <li>Create a new project with title, description, and technologies</li>
                  <li>Mark it as "Featured" to display it here</li>
                  <li>Publish the document</li>
                </ol>
              </div>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {sortedProjects.map((project, index) => {
              const accentColor = accentColors[index % accentColors.length]

              return (
                <motion.div
                  key={project._id}
                  className="touch-feedback h-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                  }}
                >
                  <Card accent={accentColor} className="h-full flex flex-col">
                    {/* Project Image */}
                    {project.images && project.images.length > 0 && (
                      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={project.images[0].asset.url}
                          alt={project.images[0].alt || project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    )}

                    <CardHeader>
                      <CardTitle className="flex items-start justify-between gap-2">
                        <span className="flex-1">{project.title}</span>
                        {project.featured && (
                          <Badge variant="cyan" className="text-xs">
                            Featured
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    {(project.demoUrl || project.githubUrl || project.longDescription) && (
                      <CardFooter className="gap-3 flex-col sm:flex-row">
                        {project.longDescription && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="touch-target w-full sm:w-auto"
                            onClick={() => setExpandedProject(project._id)}
                          >
                            <BookOpen className="mr-2 h-4 w-4" />
                            Read More
                          </Button>
                        )}
                        {project.demoUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="touch-target w-full sm:w-auto"
                            asChild
                          >
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="touch-target w-full sm:w-auto"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                        )}
                      </CardFooter>
                    )}
                  </Card>
                </motion.div>
              )
            })}
          </div>
          )}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {expandedProject && (() => {
          const project = sortedProjects.find(p => p._id === expandedProject)
          if (!project || !project.longDescription) return null

          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setExpandedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-background rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-background border-b">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setExpandedProject(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="p-6 space-y-6">
                  {project.images && project.images.length > 0 && (
                    <div className="relative w-full h-64 rounded-lg overflow-hidden">
                      <Image
                        src={project.images[0].asset.url}
                        alt={project.images[0].alt || project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <PortableText value={project.longDescription} />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.demoUrl && (
                      <Button variant="cyan" asChild>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button variant="outline" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        })()}
      </AnimatePresence>
    </section>
  )
}
