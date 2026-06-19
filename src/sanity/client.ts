import {createClient} from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-18'

/** Server-side fetches — CDN off so new publishes appear after revalidation. */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})
