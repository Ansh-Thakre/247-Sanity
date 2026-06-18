import {createClient} from 'next-sanity'
import {getDefaultAboutPage} from '../src/sanity/defaults'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET')
}

if (!token) {
  throw new Error(
    'Missing SANITY_API_WRITE_TOKEN. Create one at https://www.sanity.io/manage/project/3maklbfn/api#tokens',
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-06-18',
  token,
  useCdn: false,
})

async function main() {
  const aboutPage = getDefaultAboutPage()

  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',
    ...aboutPage,
  })

  console.log('Seeded About page content. Open Studio to review and publish.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
