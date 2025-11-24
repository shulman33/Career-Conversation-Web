import { defineQuery } from 'next-sanity'

export const CONTACT_QUERY = defineQuery(`
  *[_type == "contact"][0] {
    _id,
    email,
    phone,
    linkedinUrl,
    githubUrl,
    twitterUrl,
    resumeFile {
      asset-> {
        _id,
        url,
        originalFilename,
        size
      },
      title
    },
    location
  }
`)
