import { Resend } from "resend"
import { NextResponse } from "next/server"
import { unstable_noStore as noStore } from "next/cache"

const TO = "jim.boldrey@maverickprocure.com"
const SUBJECT = "New Contact Form Submission - Maverick Website"

export const dynamic = "force-dynamic"
export const runtime = "nodejs"

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

/** Reads `process.env.RESEND_API_KEY`; ignores empty values and common placeholders. */
function getResendApiKey(): string | undefined {
  const raw = process.env.RESEND_API_KEY?.trim()
  if (!raw) return undefined
  const lower = raw.toLowerCase()
  if (lower === "your_key_here" || lower === "re_your_key_here") return undefined
  return raw
}

function buildEmailBodies(
  nameStr: string,
  emailStr: string,
  messageStr: string,
  phoneStr: string,
  companyStr: string,
) {
  const textLines = [
    "New contact form submission — Maverick Website",
    "",
    `Name:    ${nameStr}`,
    `Email:   ${emailStr}`,
    phoneStr ? `Phone:   ${phoneStr}` : "Phone:   (not provided)",
    companyStr ? `Company: ${companyStr}` : "Company: (not provided)",
    "",
    "Message:",
    messageStr,
  ]

  const html = `
<!DOCTYPE html>
<html>
  <body style="font-family: system-ui, sans-serif; line-height: 1.5; color: #111;">
    <h2 style="margin: 0 0 16px; font-size: 18px;">New contact form submission</h2>
    <table style="border-collapse: collapse; margin-bottom: 20px;">
      <tr><td style="padding: 4px 16px 4px 0; color: #666;"><strong>Name</strong></td><td>${escapeHtml(nameStr)}</td></tr>
      <tr><td style="padding: 4px 16px 4px 0; color: #666;"><strong>Email</strong></td><td><a href="mailto:${escapeHtml(emailStr)}">${escapeHtml(emailStr)}</a></td></tr>
      <tr><td style="padding: 4px 16px 4px 0; color: #666;"><strong>Phone</strong></td><td>${phoneStr ? escapeHtml(phoneStr) : "<em>Not provided</em>"}</td></tr>
      <tr><td style="padding: 4px 16px 4px 0; color: #666;"><strong>Company</strong></td><td>${companyStr ? escapeHtml(companyStr) : "<em>Not provided</em>"}</td></tr>
    </table>
    <p style="margin: 0 0 8px; color: #666;"><strong>Message</strong></p>
    <div style="white-space: pre-wrap; padding: 12px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">${escapeHtml(messageStr)}</div>
  </body>
</html>`.trim()

  return { text: textLines.join("\n"), html }
}

export async function POST(request: Request) {
  noStore()

  const apiKey = getResendApiKey()
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set or is invalid")
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 })
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 })
  }

  const { name, email, message, phone, company } = body as Record<string, unknown>

  const nameStr = typeof name === "string" ? name.trim() : ""
  const emailStr = typeof email === "string" ? email.trim() : ""
  const messageStr = typeof message === "string" ? message.trim() : ""
  const phoneStr = typeof phone === "string" ? phone.trim() : ""
  const companyStr = typeof company === "string" ? company.trim() : ""

  if (!nameStr || !emailStr || !messageStr) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  const { text, html } = buildEmailBodies(nameStr, emailStr, messageStr, phoneStr, companyStr)
  const from =
    process.env.RESEND_FROM_EMAIL?.trim() || "Maverick Website <onboarding@resend.dev>"

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from,
      to: [TO],
      subject: SUBJECT,
      text,
      html,
      replyTo: emailStr,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 502 })
    }

    return NextResponse.json({ ok: true, id: data?.id })
  } catch (e) {
    console.error("Contact API error:", e)
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 })
  }
}
