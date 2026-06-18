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
