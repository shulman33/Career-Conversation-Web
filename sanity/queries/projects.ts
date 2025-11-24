import { defineQuery } from 'next-sanity'

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    technologies[]-> {
      _id,
      name,
      category,
      iconIdentifier
    },
    featured,
    demoUrl,
    githubUrl,
    images[] {
      asset-> {
        _id,
        url
      },
      alt,
      caption,
      hotspot,
      crop
    },
    orderRank
  }
`)

export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && featured == true] | order(orderRank asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    longDescription,
    technologies[]-> {
      _id,
      name,
      category,
      iconIdentifier
    },
    demoUrl,
    githubUrl,
    images[] {
      asset-> {
        _id,
        url
      },
      alt,
      caption,
      hotspot,
      crop
    }
  }
`)

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    longDescription,
    technologies[]-> {
      _id,
      name,
      category,
      icon {
        asset-> {
          _id,
          url
        },
        alt
      },
      iconIdentifier,
      proficiencyLevel
    },
    featured,
    demoUrl,
    githubUrl,
    images[] {
      asset-> {
        _id,
        url
      },
      alt,
      caption,
      hotspot,
      crop
    }
  }
`)
