import type {SanityImageSource} from '@sanity/image-url'
import {urlFor} from './image'

type SanityImage = {
  url?: string | null
  alt?: string | null
} | null

export function resolveImageUrl(
  image: SanityImage | SanityImageSource | string | null | undefined,
  fallback = '',
): string {
  if (!image) return fallback
  if (typeof image === 'string') return image
  if ('url' in image && image.url) return image.url
  try {
    return urlFor(image as SanityImageSource).url()
  } catch {
    return fallback
  }
}
