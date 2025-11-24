"use client"

import { motion } from "motion/react"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Download } from "lucide-react"
import { BrowserWindow } from "@/components/ui/BrowserWindow"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface ContactInfo {
  email: string
  phone?: string
  linkedinUrl?: string
  githubUrl?: string
  twitterUrl?: string
  location?: string
}

interface ContactSectionProps {
  contact: ContactInfo
}

export function ContactSection({ contact }: ContactSectionProps) {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: contact.linkedinUrl,
      icon: <Linkedin className="h-5 w-5" />,
      color: "cyan" as const,
    },
    {
      name: "GitHub",
      url: contact.githubUrl,
      icon: <Github className="h-5 w-5" />,
      color: "purple" as const,
    },
    {
      name: "Twitter",
      url: contact.twitterUrl,
      icon: <Twitter className="h-5 w-5" />,
      color: "pink" as const,
    },
  ].filter((link) => link.url)

  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-4xl mx-auto">
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
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple via-pink to-orange">
                Touch
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Let's connect! Feel free to reach out for collaborations, opportunities, or just to chat.
            </motion.p>
          </div>

          {/* Contact Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BrowserWindow accentColor="purple" title="contact-info.vcard">
              <div className="p-8 sm:p-12 bg-background space-y-8">
                {/* Contact Details */}
                <div className="space-y-6">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-4 text-foreground hover:text-cyan transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-cyan/10 text-cyan group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-lg font-medium">{contact.email}</p>
                    </div>
                  </a>

                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-4 text-foreground hover:text-purple transition-colors group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple/10 text-purple group-hover:scale-110 transition-transform">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-lg font-medium">{contact.phone}</p>
                      </div>
                    </a>
                  )}

                  {contact.location && (
                    <div className="flex items-center gap-4 text-foreground">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-pink/10 text-pink">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-lg font-medium">{contact.location}</p>
                      </div>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Social Links */}
                {socialLinks.length > 0 && (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold text-muted-foreground">
                      Connect on social
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link) => (
                        <Button
                          key={link.name}
                          variant={link.color}
                          size="lg"
                          asChild
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            {link.icon}
                            {link.name}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <Separator />

                {/* Resume Download */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-muted-foreground">
                    Download resume
                  </p>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume (PDF)
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Resume file will be added via Sanity CMS
                  </p>
                </div>
              </div>
            </BrowserWindow>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground">
              Built with Next.js, Sanity CMS, and Motion. Designed with Neo-Memphis aesthetics.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
