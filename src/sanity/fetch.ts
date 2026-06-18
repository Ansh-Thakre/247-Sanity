import {client} from './client'
import {
  getDefaultAboutPage,
  type AboutPageContent,
} from './defaults'
import {ABOUT_PAGE_QUERY} from './queries'

export {getDefaultAboutPage, type AboutPageContent} from './defaults'

const fetchOptions = {next: {revalidate: 60}} as const

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
