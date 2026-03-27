import { NextResponse } from "next/server"

export async function GET() {
  const key = process.env.RESEND_API_KEY
  return NextResponse.json({
    hasKey: !!key,
    keyPrefix: key ? key.substring(0, 6) : "none",
    keyLength: key ? key.length : 0,
  })
}
