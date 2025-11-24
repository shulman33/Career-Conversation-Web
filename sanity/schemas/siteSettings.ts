import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'The title of your website (used in browser tab and SEO)',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Brief description of your website for SEO',
      validation: (rule) => rule.required().max(160),
      rows: 3,
    }),
    defineField({
      name: 'siteKeywords',
      title: 'SEO Keywords',
      type: 'array',
      description: 'Keywords for SEO (e.g., "software engineer", "full stack developer")',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Default image for social media sharing (1200x630px recommended)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for screen readers',
        },
      ],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Site favicon (square image, 512x512px recommended)',
      options: {
        hotspot: false,
      },
    }),
    defineField({
      name: 'gradioEmbedUrl',
      title: 'Gradio Embed URL',
      type: 'url',
      description: 'URL for the Career Conversation chatbot Gradio embed',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'Google Analytics tracking ID (e.g., "G-XXXXXXXXXX")',
    }),
  ],
})
