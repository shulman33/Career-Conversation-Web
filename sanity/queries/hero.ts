import { defineQuery } from 'next-sanity'

export const HERO_QUERY = defineQuery(`
  *[_type == "hero"][0] {
    _id,
    name,
    tagline,
    professionalPhoto {
      asset-> {
        _id,
        url
      },
      alt,
      hotspot,
      crop
    },
    chatbotCta
  }
`)
