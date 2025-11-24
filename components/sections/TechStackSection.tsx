"use client"

import { motion } from "motion/react"
import { BrowserWindow } from "@/components/ui/BrowserWindow"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Cloud, Cpu, Wrench, Palette } from "lucide-react"

interface Technology {
  name: string
  category: string
  proficiencyLevel: string
}

interface TechStackSectionProps {
  technologies: Technology[]
  categoryLabels: Record<string, string>
  proficiencyColors: Record<string, string>
}

const categoryIcons: Record<string, React.ReactNode> = {
  frontend: <Palette className="h-5 w-5" />,
  backend: <Code2 className="h-5 w-5" />,
  database: <Database className="h-5 w-5" />,
  "ai-ml": <Cpu className="h-5 w-5" />,
  devops: <Cloud className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />,
}

const categoryColors = {
  frontend: "cyan",
  backend: "purple",
  database: "pink",
  "ai-ml": "orange",
  devops: "yellow",
  tools: "cyan",
} as const

export function TechStackSection({
  technologies,
  categoryLabels,
  proficiencyColors,
}: TechStackSectionProps) {
  // Group technologies by category
  const groupedTech = technologies.reduce(
    (acc, tech) => {
      if (!acc[tech.category]) {
        acc[tech.category] = []
      }
      acc[tech.category].push(tech)
      return acc
    },
    {} as Record<string, Technology[]>
  )

  const categories = Object.keys(groupedTech)

  return (
    <section
      id="tech-stack"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 bg-muted/30"
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
              Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-purple to-pink">
                Stack
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Technologies and tools I use to build robust, scalable solutions.
            </motion.p>
          </div>

          {/* Technology Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category, categoryIndex) => {
              const color = categoryColors[category as keyof typeof categoryColors] || "cyan"
              const techs = groupedTech[category]

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <BrowserWindow
                    accentColor={color}
                    title={`${categoryLabels[category] || category}.tech`}
                    className="h-full"
                  >
                    <div className="p-6 space-y-4 bg-background min-h-[200px]">
                      <div className="flex items-center gap-2 text-foreground/80">
                        {categoryIcons[category]}
                        <h3 className="font-semibold text-lg">
                          {categoryLabels[category] || category}
                        </h3>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => {
                          const badgeVariant = proficiencyColors[tech.proficiencyLevel] as
                            | "cyan"
                            | "purple"
                            | "pink"
                            | "yellow"
                            | undefined

                          return (
                            <Badge
                              key={tech.name}
                              variant={badgeVariant || "default"}
                              className="text-sm"
                            >
                              {tech.name}
                            </Badge>
                          )
                        })}
                      </div>
                    </div>
                  </BrowserWindow>
                </motion.div>
              )
            })}
          </div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground"
          >
            <span className="font-semibold">Proficiency:</span>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Badge variant="cyan" className="text-xs">
                  Expert
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="purple" className="text-xs">
                  Advanced
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="pink" className="text-xs">
                  Intermediate
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="yellow" className="text-xs">
                  Beginner
                </Badge>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
