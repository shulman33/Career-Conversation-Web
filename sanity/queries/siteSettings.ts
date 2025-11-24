import { defineQuery } from 'next-sanity'

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    _id,
    siteTitle,
    siteDescription,
    siteKeywords,
    ogImage {
      asset-> {
        _id,
        url
      },
      alt
    },
    favicon {
      asset-> {
        _id,
        url
      }
    },
    gradioEmbedUrl,
    googleAnalyticsId
  }
`)
