import {defineQuery} from 'next-sanity'

export const ABOUT_PAGE_QUERY = defineQuery(`*[_id == "aboutPage"][0]{
  heroOverline,
  heroTitleBefore,
  heroSubtitle,
  whoWeAreDescription,
  whoWeAreTagline,
  whoWeAreServicesLine,
  mission,
  vision,
  values,
  brandPersonality,
  coreValues,
  valuesSectionOverline,
  valuesSectionTitle
}`)

export const TESTIMONIALS_QUERY = defineQuery(`*[_type == "testimonial"] | order(coalesce(sortOrder, 999) asc, _createdAt asc) {
  quote,
  name,
  role,
  company,
  rating,
  initials
}`)

export const BLOG_POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  author,
  mainImage,
  showOnHomepage,
  homepageOrder,
  content[]{
    heading,
    paragraphs
  }
}`)

export const HOMEPAGE_BLOG_POSTS_QUERY = defineQuery(`*[_type == "post" && showOnHomepage == true && defined(slug.current)] | order(coalesce(homepageOrder, 999) asc, publishedAt desc)[0...3] {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  author,
  mainImage,
  showOnHomepage,
  homepageOrder,
  content[]{
    heading,
    paragraphs
  }
}`)

export const BLOG_POST_BY_SLUG_QUERY = defineQuery(`*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  excerpt,
  category,
  publishedAt,
  readTime,
  author,
  mainImage,
  showOnHomepage,
  homepageOrder,
  content[]{
    heading,
    paragraphs
  }
}`)

export const BLOG_SLUGS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`)

export const GUIDES_QUERY = defineQuery(`*[_type == "guide"] | order(_createdAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  category,
  readTime,
  difficulty,
  coverImage,
  stepItems[]{
    title,
    description
  }
}`)
