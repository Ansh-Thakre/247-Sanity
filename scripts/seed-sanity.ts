import {readFileSync} from 'fs'
import {resolve} from 'path'
import {createClient} from 'next-sanity'
import {blogPosts} from '../src/data/blog-posts'
import {allGuides} from '../src/data/guides'
import {testimonials} from '../src/data/testimonials'
import {getDefaultAboutPage} from '../src/sanity/defaults'

function loadEnvLocal() {
  try {
    const envPath = resolve(process.cwd(), '.env.local')
    const content = readFileSync(envPath, 'utf8')
    for (const line of content.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      const value = trimmed.slice(eq + 1).trim()
      if (process.env[key] === undefined) process.env[key] = value
    }
  } catch {
    // .env.local is optional if vars are set in the shell
  }
}

loadEnvLocal()

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
  console.log('Seeded About page.')

  for (const [index, item] of testimonials.entries()) {
    const id = `testimonial-${item.name.toLowerCase().replace(/\s+/g, '-')}`
    await client.createOrReplace({
      _id: id,
      _type: 'testimonial',
      quote: item.quote,
      name: item.name,
      role: item.role,
      company: item.company,
      rating: item.rating,
      initials: item.initials,
      sortOrder: index + 1,
    })
  }
  console.log(`Seeded ${testimonials.length} testimonials.`)

  for (const [index, post] of blogPosts.entries()) {
    await client.createOrReplace({
      _id: `post-${post.slug}`,
      _type: 'post',
      title: post.title,
      slug: {current: post.slug, _type: 'slug'},
      excerpt: post.excerpt,
      category: post.category,
      publishedAt: new Date(post.date).toISOString(),
      readTime: post.readTime,
      author: post.author,
      showOnHomepage: index < 3,
      homepageOrder: index < 3 ? index + 1 : undefined,
      content: post.content.map((section) => ({
        _type: 'contentSection',
        _key: section.heading ?? section.paragraphs[0]?.slice(0, 24) ?? 'section',
        heading: section.heading,
        paragraphs: section.paragraphs,
      })),
    })
  }
  console.log(`Seeded ${blogPosts.length} blog posts (upload cover images in Studio).`)

  for (const guide of allGuides) {
    await client.createOrReplace({
      _id: `guide-${guide.slug}`,
      _type: 'guide',
      title: guide.title,
      slug: {current: guide.slug, _type: 'slug'},
      excerpt: guide.excerpt,
      category: guide.category,
      readTime: guide.readTime,
      difficulty: guide.difficulty,
      stepItems: guide.stepItems.map((step, index) => ({
        _type: 'guideStep',
        _key: `step-${index}`,
        title: step.title,
        description: step.description,
      })),
    })
  }
  console.log(`Seeded ${allGuides.length} guides (upload cover images in Studio).`)

  console.log('Done. Open Studio to review, add images, and publish.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
