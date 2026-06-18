import {revalidatePath} from 'next/cache'
import {type NextRequest, NextResponse} from 'next/server'
import {parseBody} from 'next-sanity/webhook'

type WebhookPayload = {
  _type?: string
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

    if (body?._type === 'aboutPage') {
      revalidatePath('/about')
    }

    return NextResponse.json({revalidated: true, now: Date.now()})
  } catch (error) {
    return new Response((error as Error).message, {status: 500})
  }
}
