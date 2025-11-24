import { defineQuery } from 'next-sanity'

export const TECHNOLOGIES_QUERY = defineQuery(`
  *[_type == "technology"] | order(category asc, orderRank asc, name asc) {
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
    proficiencyLevel,
    description,
    orderRank
  }
`)

export const TECHNOLOGIES_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "technology" && category == $category] | order(orderRank asc, name asc) {
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
    proficiencyLevel,
    description
  }
`)
