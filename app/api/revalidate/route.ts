import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'
import { parseBody } from 'next-sanity/webhook'

type WebhookPayload = {
  _type: string
  _id?: string
  slug?: {
    current?: string
  }
}

export async function POST(req: NextRequest) {
  try {
    // Check for required environment variable
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response(
        JSON.stringify({
          message: 'Missing environment variable SANITY_REVALIDATE_SECRET',
        }),
        { status: 500 }
      )
    }

    // Parse and validate webhook payload
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true // Wait 3 seconds for Content Lake eventual consistency
    )

    // Validate signature
    if (!isValidSignature) {
      const message = 'Invalid signature'
      console.error(message, { body })
      return new Response(
        JSON.stringify({ message, isValidSignature, body }),
        { status: 401 }
      )
    }

    // Validate payload structure
    if (!body?._type) {
      const message = 'Bad Request: Missing _type in payload'
      console.error(message, { body })
      return new Response(JSON.stringify({ message, body }), { status: 400 })
    }

    // Revalidate all pages with this document type tag
    revalidateTag(body._type, 'max')

    const message = `Revalidated tag: ${body._type}`
    console.log(message, {
      _type: body._type,
      _id: body._id,
      slug: body.slug?.current,
    })

    return NextResponse.json({
      message,
      revalidated: true,
      now: Date.now(),
      body,
    })
  } catch (err: unknown) {
    const error = err as Error
    console.error('Webhook error:', error)
    return new Response(
      JSON.stringify({
        message: error.message,
        error: error.toString(),
      }),
      { status: 500 }
    )
  }
}
