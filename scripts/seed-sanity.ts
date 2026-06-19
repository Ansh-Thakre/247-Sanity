import {createReadStream, existsSync, readFileSync} from 'fs'
import {basename, join, resolve} from 'path'
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

async function uploadLocalImage(relativePath: string) {
  const filePath = join(process.cwd(), 'public', relativePath.replace(/^\//, ''))
  if (!existsSync(filePath)) {
    console.warn(`  Skipping missing image: ${filePath}`)
    return undefined
  }

  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename: basename(filePath),
  })

  return {
    _type: 'image' as const,
    asset: {
      _type: 'reference' as const,
      _ref: asset._id,
    },
  }
}

async function uploadRemoteImage(url: string, filename: string) {
  const response = await fetch(url)
  if (!response.ok) {
    console.warn(`  Skipping remote image (${response.status}): ${url}`)
    return undefined
  }

  const buffer = Buffer.from(await response.arrayBuffer())
  const asset = await client.assets.upload('image', buffer, {filename})

  return {
    _type: 'image' as const,
    asset: {
      _type: 'reference' as const,
      _ref: asset._id,
    },
  }
}

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
    console.log(`Uploading image for: ${post.title}`)
    const mainImage = post.image.startsWith('http')
      ? await uploadRemoteImage(post.image, `${post.slug}.jpg`)
      : await uploadLocalImage(post.image)

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
      ...(mainImage ? {mainImage} : {}),
      content: post.content.map((section, sectionIndex) => ({
        _type: 'contentSection',
        _key: `section-${sectionIndex}`,
        heading: section.heading,
        paragraphs: section.paragraphs,
      })),
    })
  }
  console.log(`Seeded ${blogPosts.length} blog posts with images.`)

  for (const guide of allGuides) {
    console.log(`Uploading image for guide: ${guide.title}`)
    const coverImage = guide.image.startsWith('http')
      ? await uploadRemoteImage(guide.image, `${guide.slug}.jpg`)
      : await uploadLocalImage(guide.image)

    await client.createOrReplace({
      _id: `guide-${guide.slug}`,
      _type: 'guide',
      title: guide.title,
      slug: {current: guide.slug, _type: 'slug'},
      excerpt: guide.excerpt,
      category: guide.category,
      readTime: guide.readTime,
      difficulty: guide.difficulty,
      ...(coverImage ? {coverImage} : {}),
      stepItems: guide.stepItems.map((step, stepIndex) => ({
        _type: 'guideStep',
        _key: `step-${stepIndex}`,
        title: step.title,
        description: step.description,
      })),
    })
  }
  console.log(`Seeded ${allGuides.length} guides with images.`)

  console.log('Done. Open Studio → Publish any drafts.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
