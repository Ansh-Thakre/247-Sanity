import {client} from './client'
import {
  BLOG_CARD_GRADIENT,
  blogPosts as fallbackBlogPosts,
  type BlogPost,
  type BlogPostPreview,
} from '@/data/blog-posts'
import {
  allGuides as fallbackGuides,
  GUIDE_CARD_GRADIENT,
  type GuidePreview,
} from '@/data/guides'
import {
  testimonials as fallbackTestimonials,
  type Testimonial,
} from '@/data/testimonials'
import {
  getDefaultAboutPage,
  type AboutPageContent,
} from './defaults'
import {resolveImageUrl} from './resolve-image'
import {
  ABOUT_PAGE_QUERY,
  BLOG_POST_BY_SLUG_QUERY,
  BLOG_POSTS_QUERY,
  BLOG_SLUGS_QUERY,
  GUIDES_QUERY,
  HOMEPAGE_BLOG_POSTS_QUERY,
  TESTIMONIALS_QUERY,
} from './queries'

export {getDefaultAboutPage, type AboutPageContent} from './defaults'

const fetchOptions = {next: {revalidate: 60}} as const

type SanityTestimonial = {
  quote?: string
  name?: string
  role?: string
  company?: string
  rating?: number
  initials?: string
}

type SanityBlogPost = {
  title?: string
  slug?: string
  excerpt?: string
  category?: string
  publishedAt?: string
  readTime?: string
  author?: string
  mainImage?: unknown
  content?: Array<{heading?: string; paragraphs?: string[]}>
}

type SanityGuide = {
  title?: string
  slug?: string
  excerpt?: string
  category?: string
  readTime?: string
  difficulty?: GuidePreview['difficulty']
  coverImage?: unknown
  stepItems?: Array<{title?: string; description?: string}>
}

function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function mapTestimonial(doc: SanityTestimonial): Testimonial | null {
  if (!doc.quote || !doc.name) return null

  return {
    quote: doc.quote,
    name: doc.name,
    role: doc.role ?? '',
    company: doc.company ?? '',
    rating: doc.rating ?? 5,
    initials: doc.initials?.trim() || initialsFromName(doc.name),
  }
}

function mapBlogPost(doc: SanityBlogPost, fallbackImage = ''): BlogPost | null {
  if (!doc.title || !doc.slug) return null

  const staticMatch = fallbackBlogPosts.find((p) => p.slug === doc.slug)
  const image = resolveImageUrl(
    doc.mainImage as Parameters<typeof resolveImageUrl>[0],
    staticMatch?.image ?? fallbackImage,
  )

  return {
    title: doc.title,
    excerpt: doc.excerpt ?? '',
    category: doc.category ?? 'General',
    date: doc.publishedAt?.split('T')[0] ?? '',
    slug: doc.slug,
    readTime: doc.readTime ?? '',
    gradient: BLOG_CARD_GRADIENT,
    image,
    author: doc.author ?? '247 Digital Pro Team',
    content: (doc.content ?? []).map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs ?? [],
    })),
  }
}

function mapGuide(doc: SanityGuide): GuidePreview | null {
  if (!doc.title || !doc.slug) return null

  const staticMatch = fallbackGuides.find((g) => g.slug === doc.slug)
  const image = resolveImageUrl(
    doc.coverImage as Parameters<typeof resolveImageUrl>[0],
    staticMatch?.image ?? '',
  )

  return {
    title: doc.title,
    excerpt: doc.excerpt ?? '',
    category: doc.category ?? 'General',
    slug: doc.slug,
    readTime: doc.readTime ?? '',
    difficulty: doc.difficulty ?? 'Beginner',
    gradient: GUIDE_CARD_GRADIENT,
    image,
    stepItems: (doc.stepItems ?? []).map((step) => ({
      title: step.title ?? '',
      description: step.description ?? '',
    })),
  }
}

function mergeAboutContent(
  data: Partial<AboutPageContent> | null,
): AboutPageContent {
  if (!data) return getDefaultAboutPage()

  const defaults = getDefaultAboutPage()
  return {
    heroOverline: data.heroOverline ?? defaults.heroOverline,
    heroTitleBefore: data.heroTitleBefore ?? defaults.heroTitleBefore,
    heroSubtitle: data.heroSubtitle ?? defaults.heroSubtitle,
    whoWeAreDescription: data.whoWeAreDescription ?? defaults.whoWeAreDescription,
    whoWeAreTagline: data.whoWeAreTagline ?? defaults.whoWeAreTagline,
    whoWeAreServicesLine: data.whoWeAreServicesLine ?? defaults.whoWeAreServicesLine,
    mission: data.mission ?? defaults.mission,
    vision: data.vision ?? defaults.vision,
    values: data.values ?? defaults.values,
    brandPersonality: data.brandPersonality ?? defaults.brandPersonality,
    coreValues: Array.isArray(data.coreValues)
      ? data.coreValues
      : defaults.coreValues,
    valuesSectionOverline: data.valuesSectionOverline ?? defaults.valuesSectionOverline,
    valuesSectionTitle: data.valuesSectionTitle ?? defaults.valuesSectionTitle,
  }
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  const data = (await client.fetch(ABOUT_PAGE_QUERY, {}, fetchOptions)) as
    | Partial<AboutPageContent>
    | null

  return mergeAboutContent(data)
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const data = (await client.fetch(
    TESTIMONIALS_QUERY,
    {},
    fetchOptions,
  )) as SanityTestimonial[] | null

  const mapped = (data ?? [])
    .map(mapTestimonial)
    .filter((item): item is Testimonial => item !== null)

  return mapped.length > 0 ? mapped : fallbackTestimonials
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const data = (await client.fetch(
    BLOG_POSTS_QUERY,
    {},
    fetchOptions,
  )) as SanityBlogPost[] | null

  if (!data || data.length === 0) {
    return fallbackBlogPosts
  }

  return data
    .map((doc) => mapBlogPost(doc))
    .filter((item): item is BlogPost => item !== null)
}

/** Posts flagged "Show on homepage" in Studio (max 3). */
export async function getHomepageBlogPosts(): Promise<BlogPostPreview[]> {
  const data = (await client.fetch(
    HOMEPAGE_BLOG_POSTS_QUERY,
    {},
    fetchOptions,
  )) as SanityBlogPost[] | null

  const mapped = (data ?? [])
    .map((doc) => mapBlogPost(doc))
    .filter((item): item is BlogPost => item !== null)

  if (mapped.length > 0) return mapped

  return fallbackBlogPosts.slice(0, 3)
}

export async function getLatestBlogPosts(limit = 3): Promise<BlogPostPreview[]> {
  return getHomepageBlogPosts()
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const data = (await client.fetch(
    BLOG_SLUGS_QUERY,
    {},
    fetchOptions,
  )) as Array<{slug?: string}> | null

  const cmsSlugs = (data ?? [])
    .map((item) => item.slug)
    .filter((slug): slug is string => Boolean(slug))

  if (cmsSlugs.length > 0) return cmsSlugs

  return fallbackBlogPosts.map((post) => post.slug)
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const data = (await client.fetch(
    BLOG_POST_BY_SLUG_QUERY,
    {slug},
    fetchOptions,
  )) as SanityBlogPost | null

  const mapped = data ? mapBlogPost(data) : null
  if (mapped) return mapped

  return fallbackBlogPosts.find((post) => post.slug === slug)
}

export async function getGuides(): Promise<GuidePreview[]> {
  const data = (await client.fetch(
    GUIDES_QUERY,
    {},
    fetchOptions,
  )) as SanityGuide[] | null

  const mapped = (data ?? [])
    .map(mapGuide)
    .filter((item): item is GuidePreview => item !== null)

  return mapped.length > 0 ? mapped : fallbackGuides
}
