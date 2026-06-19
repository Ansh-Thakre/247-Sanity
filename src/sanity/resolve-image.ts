import type {SanityImageSource} from '@sanity/image-url'
import {buildImageUrl, urlFor} from './image'

type SanityImage = {
  url?: string | null
  alt?: string | null
} | null

type ResolveImageOptions = {
  width?: number
  height?: number
  fit?: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'
}

export function resolveImageUrl(
  image: SanityImage | SanityImageSource | string | null | undefined,
  fallback = '',
  options?: ResolveImageOptions,
): string {
  if (!image) return fallback
  if (typeof image === 'string') return image
  if ('url' in image && image.url) return image.url
  try {
    return buildImageUrl(image as SanityImageSource, options)
  } catch {
    try {
      return urlFor(image as SanityImageSource).url()
    } catch {
      return fallback
    }
  }
}

/** Card thumbnails — bounded width, no forced crop in CDN. */
export function resolveCardImageUrl(
  image: SanityImage | SanityImageSource | string | null | undefined,
  fallback = '',
): string {
  return resolveImageUrl(image, fallback, {width: 900, fit: 'max'})
}

/** Detail / hero — larger max width, preserve full image aspect. */
export function resolveDetailImageUrl(
  image: SanityImage | SanityImageSource | string | null | undefined,
  fallback = '',
): string {
  return resolveImageUrl(image, fallback, {width: 1600, fit: 'max'})
}
