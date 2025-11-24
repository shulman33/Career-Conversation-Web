import { type QueryParams } from 'next-sanity'
import { client } from '../client'

/**
 * Sanity fetch helper with Next.js caching support
 *
 * Supports both tag-based and time-based revalidation:
 * - Tag-based: Use `tags` array for on-demand revalidation via webhook
 * - Time-based: Use `revalidate` number for automatic time-based revalidation
 *
 * @example
 * // Tag-based revalidation (recommended for webhook integration)
 * const posts = await sanityFetch({
 *   query: POSTS_QUERY,
 *   tags: ['post', 'author']
 * })
 *
 * @example
 * // Time-based revalidation
 * const posts = await sanityFetch({
 *   query: POSTS_QUERY,
 *   revalidate: 3600 // revalidate every hour
 * })
 */
export async function sanityFetch<const QueryString extends string>({
  query,
  params = {},
  revalidate = 60, // default revalidation time in seconds
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) {
  return client.fetch(query, params, {
    cache: 'force-cache', // Use Next.js force-cache for optimal caching
    next: {
      revalidate: tags.length ? false : revalidate, // If tags are provided, use tag-based revalidation
      tags, // For tag-based on-demand revalidation via webhook
    },
  })
}
