import { defineField, defineType } from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Your full name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Professional tagline or headline (e.g., "Full Stack Developer & AI Enthusiast")',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'professionalPhoto',
      title: 'Professional Photo',
      type: 'image',
      description: 'Professional headshot or photo',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for screen readers',
          validation: (rule) => rule.required(),
        },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'chatbotCta',
      title: 'Chatbot Call-to-Action',
      type: 'string',
      description: 'Text for the chatbot button (e.g., "Chat with my AI career assistant")',
      validation: (rule) => rule.required().max(80),
    }),
  ],
})
