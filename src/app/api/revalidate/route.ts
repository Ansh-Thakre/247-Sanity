import {revalidatePath} from 'next/cache'
import {type NextRequest, NextResponse} from 'next/server'
import {parseBody} from 'next-sanity/webhook'

type WebhookPayload = {
  _type?: string
  slug?: {current?: string}
}

export async function POST(req: NextRequest) {
  try {
    const {isValidSignature, body} = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    )

    if (!isValidSignature) {
      return new Response('Invalid signature', {status: 401})
    }

    const slug = body?.slug?.current

    switch (body?._type) {
      case 'aboutPage':
        revalidatePath('/about')
        break
      case 'testimonial':
        revalidatePath('/')
        revalidatePath('/testimonials')
        break
      case 'post':
        revalidatePath('/')
        revalidatePath('/resources/blog')
        if (slug) revalidatePath(`/resources/blog/${slug}`)
        break
      case 'guide':
        revalidatePath('/resources/guides')
        break
    }

    return NextResponse.json({revalidated: true, now: Date.now()})
  } catch (error) {
    return new Response((error as Error).message, {status: 500})
  }
}
