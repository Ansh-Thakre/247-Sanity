import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url'
import {client} from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

type ImageFit = 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min'

export function buildImageUrl(
  source: SanityImageSource,
  options?: {width?: number; height?: number; fit?: ImageFit},
): string {
  let img = urlFor(source).auto('format').quality(85)
  if (options?.width) img = img.width(options.width)
  if (options?.height) img = img.height(options.height)
  if (options?.fit) img = img.fit(options.fit)
  return img.url()
}
