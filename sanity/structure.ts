import type { StructureResolver } from 'sanity/structure'

/**
 * Studio structure configuration
 *
 * This defines the custom structure for the Sanity Studio sidebar.
 * - Singleton documents (hero, contact, siteSettings) appear as single items
 * - List documents (project, technology) allow multiple entries
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: Hero Section
      S.listItem()
        .title('Hero')
        .id('hero')
        .child(
          S.document()
            .schemaType('hero')
            .documentId('hero')
        ),

      // Singleton: Contact Information
      S.listItem()
        .title('Contact')
        .id('contact')
        .child(
          S.document()
            .schemaType('contact')
            .documentId('contact')
        ),

      // Singleton: Site Settings
      S.listItem()
        .title('Site Settings')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),

      S.divider(),

      // List: Projects
      S.documentTypeListItem('project')
        .title('Projects'),

      // List: Technologies
      S.documentTypeListItem('technology')
        .title('Technologies'),
    ])
