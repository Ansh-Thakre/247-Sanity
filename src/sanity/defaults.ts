import {siteConfig} from '@/config/site'

export type AboutPageContent = {
  heroOverline: string
  heroTitleBefore: string
  heroSubtitle: string
  whoWeAreDescription: string
  whoWeAreTagline: string
  whoWeAreServicesLine: string
  mission: string
  vision: string
  values: string
  brandPersonality: string
  coreValues: Array<{title: string; description: string; icon: string}>
  valuesSectionOverline: string
  valuesSectionTitle: string
}

const defaultAboutVision =
  'A world where every small business owner has access to enterprise-grade marketing strategy and execution, delivered with transparency and accountability.'

const defaultAboutValues =
  'Reliability. Transparency. ROI-focus. We are a strategic partner, not just a service provider — every engagement is built around qualified leads, conversions, and revenue outcomes.'

const defaultBrandPersonality =
  'We\'re not a vendor — we\'re an invested partner. Tone is collaborative, not transactional. We use "we" and "together" often.'

const defaultCoreValues = [
  {
    title: 'Reliability',
    description:
      'A strategic partner you can count on — consistent delivery, clear accountability, and systems built to last.',
    icon: 'shield',
  },
  {
    title: 'Transparency',
    description:
      'Open communication at every stage — you always know what we are doing, why, and how it ties to your goals.',
    icon: 'target',
  },
  {
    title: 'ROI-Focus',
    description:
      'Every engagement centers on qualified leads, conversions, and revenue outcomes — not vanity metrics.',
    icon: 'barChart3',
  },
]

export function getDefaultAboutPage(): AboutPageContent {
  return {
    heroOverline: 'About Us',
    heroTitleBefore: 'The team behind',
    heroSubtitle: siteConfig.description,
    whoWeAreDescription: siteConfig.description,
    whoWeAreTagline: siteConfig.tagline,
    whoWeAreServicesLine:
      'Brand Strategy • SEO • Meta Ads • Google Ads • AEO • GEO',
    mission: siteConfig.mission,
    vision: defaultAboutVision,
    values: defaultAboutValues,
    brandPersonality: defaultBrandPersonality,
    coreValues: defaultCoreValues,
    valuesSectionOverline: 'Brand Foundation',
    valuesSectionTitle: 'What We Stand For',
  }
}
