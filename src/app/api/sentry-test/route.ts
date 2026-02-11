import { NextResponse } from 'next/server'

export async function GET() {
  // This error will be captured by Sentry on the server side
  throw new Error('Test Server-Side Error from API Route - This should appear in Sentry!')

  // This code is unreachable, but kept for reference
  // eslint-disable-next-line no-unreachable
  return NextResponse.json({ message: 'This should not be reached' })
}
