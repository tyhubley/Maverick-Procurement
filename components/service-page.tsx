"use client"
import type { ReactNode } from "react"
import { Fragment } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { usePathname } from "next/navigation"

type FAQ = { q: string; a: string }

const defaultContactHeadline = "Need a smarter sourcing strategy?"
const defaultContactBody =
  "Connect with our procurement experts — we'll help you identify cost savings, streamline suppliers, and strengthen your supply chain."

export function ServicePage({
  title,
  heroImage = "/placeholder.jpg",
  sidebarHeading = "Procurement Services",
  sidebarItems = [
    { label: "AI-Ready Procurement", href: "/ai-ready-procurement" },
    { label: "Cross-Border Sourcing", href: "/services/mexico-sourcing" },
    { label: "Procurement Transformation", href: "/services/procurement-transformation" },
    { label: "Cost Reduction Programs", href: "/services/cost-reduction" },
    { label: "Interim Leadership", href: "/services/interim-leadership" },
    { label: "Supply Chain Advisory", href: "/services/supply-chain-advisory" },
  ],
  phone = "+1.815.791.1727",
  email,
  website,
  breadcrumbItems,
  heroSubtitle,
  contactHeadline = defaultContactHeadline,
  contactBody = defaultContactBody,
  contactDownloadHref,
  contactDownloadLabel,
  customMain,
  hideMarketingFooter = false,
  stackSidebarBelowOnMobile = false,
  heroLine,
  introTitle,
  introBody,
  approachTitle = "Our Approach",
  approachItems = [],
  advantagesTitle,
  advantagesItems = [],
  whatWeDo,
  whyTitle,
  whyBody,
  faqs = [],
  popular = [],
  ctaText,
  ctaHref,
  testimonial = {
    quote:
      "What impressed me most about working with Jim and Maverick Procurement was how quickly he became a trusted partner. He took the time to understand our challenges in sourcing, then brought forward creative solutions that delivered savings and long-term value. Jim's 'Maverick' mindset — challenging the status quo and driving results — was exactly what we needed. I would gladly recommend him to any company looking to turn procurement into a competitive advantage.",
    author: "Mindy Rapp",
    role: "Chief Operating Officer",
    image: "/5 (1).png",
  },
}: {
  title: string
  heroImage?: string
  sidebarHeading?: string
  sidebarItems?: { label: string; href: string }[]
  phone?: string
  email?: string
  website?: string
  breadcrumbItems?: { label: string; href?: string }[]
  heroSubtitle?: string
  contactHeadline?: string
  contactBody?: string
  contactDownloadHref?: string
  contactDownloadLabel?: string
  customMain?: ReactNode
  hideMarketingFooter?: boolean
  stackSidebarBelowOnMobile?: boolean
  heroLine?: string
  introTitle?: string
  introBody?: string
  approachTitle?: string
  approachItems?: string[]
  advantagesTitle?: string
  advantagesItems?: string[]
  whatWeDo?: string
  whyTitle?: string
  whyBody?: string
  faqs?: FAQ[]
  popular?: { title: string; body: string }[]
  ctaText?: string
  ctaHref?: string
  testimonial?: { quote: string; author: string; role: string; image: string }
}) {
  const pathname = usePathname()
  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="relative py-16 md:py-20 bg-gray-100">
        <div className="absolute inset-0">
          <div className="w-64 h-64 bg-red-500/10 rotate-45 absolute -right-24 -top-24" />
          <div className="w-80 h-80 bg-red-500/10 rotate-45 absolute right-10 top-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          {breadcrumbItems && breadcrumbItems.length > 0 ? (
            <>
              <div className="text-sm text-gray-600">
                <Link href="/" className="hover:text-red-600">
                  Home
                </Link>
                {breadcrumbItems.map((item, i) => (
                  <Fragment key={`${item.label}-${i}`}>
                    <span className="mx-2">/</span>
                    {item.href ? (
                      <Link href={item.href} className="hover:text-red-600">
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </Fragment>
                ))}
              </div>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
              {heroSubtitle ? (
                <p className="mt-2 text-2xl md:text-3xl font-bold text-red-600">{heroSubtitle}</p>
              ) : null}
              <div className="mt-4 h-1 w-16 bg-red-600 rounded" />
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
              <div className="mt-3 text-sm text-gray-600">
                <Link href="/" className="hover:text-red-600">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span>{title}</span>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sidebar (clone-style) */}
          <aside
            className={`lg:col-span-1 space-y-8 ${stackSidebarBelowOnMobile ? "order-2 lg:order-1" : ""}`}
          >
            <div className="rounded-2xl border bg-gray-50 p-8">
              <h2 className="text-3xl font-extrabold text-gray-900">{sidebarHeading}</h2>
              <div className="mt-3 h-1 w-16 bg-red-600 rounded" />
              <ul className="mt-8">
                {sidebarItems.map((item) => {
                  const active = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`flex items-center justify-between py-4 text-lg font-semibold ${
                          active ? 'text-red-600' : 'text-gray-900'
                        }`}
                      >
                        <span>{item.label}</span>
                        {active && <span className="text-red-600 text-2xl font-bold">+</span>}
                      </Link>
                      <div className="h-px bg-gray-200" />
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-8 bg-[#1f242b] text-white">
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{ backgroundImage: "url('/placeholder.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="relative">
                <h4 className="text-3xl font-extrabold">{contactHeadline}</h4>
                <p className="mt-4 text-white/90 text-lg leading-7">{contactBody}</p>
                {phone && (
                  <div className="mt-8 text-3xl md:text-4xl font-extrabold tracking-tight">{phone}</div>
                )}
                {email && (
                  <div className="mt-4 text-xl underline underline-offset-4">{email}</div>
                )}
                {!email && website && (
                  <a href={website} target="_blank" rel="noreferrer" className="mt-4 block text-xl underline underline-offset-4">
                    {website.replace('https://', '').replace('http://', '')}
                  </a>
                )}
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #e11d48 0%, #3b82f6 100%)',
                  }}
                >
                  Contact Us
                </Link>
                {contactDownloadHref && contactDownloadLabel ? (
                  <a
                    href={contactDownloadHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full py-4 text-lg font-semibold text-white"
                  >
                    {contactDownloadLabel}
                  </a>
                ) : null}
              </div>
            </div>

          </aside>

          {/* Main */}
          <div
            className={`lg:col-span-2 space-y-10 ${stackSidebarBelowOnMobile ? "order-1 lg:order-2" : ""}`}
          >
            {customMain ? (
              <div className="space-y-10">{customMain}</div>
            ) : (
              <>
                <ScrollReveal>
                  <img src={heroImage} alt={title} className="w-full h-72 object-cover rounded-md" />
                </ScrollReveal>

                <ScrollReveal>
                  <div>
                    {heroLine && (
                      <p className="text-red-600 text-sm uppercase tracking-widest">{heroLine}</p>
                    )}
                    {introTitle && (
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{introTitle}</h2>
                    )}
                    {introBody && <p className="mt-4 text-gray-700">{introBody}</p>}
                  </div>
                </ScrollReveal>

                {(approachItems.length > 0 || advantagesItems.length > 0) && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {approachItems.length > 0 && (
                      <ScrollReveal>
                        <div className="border rounded-xl p-6">
                          <h3 className="text-xl font-semibold text-gray-900">{approachTitle}</h3>
                          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                            {approachItems.map((s) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      </ScrollReveal>
                    )}
                    {advantagesItems.length > 0 && (
                      <ScrollReveal delay={100}>
                        <div className="border rounded-xl p-6">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {advantagesTitle || "What You Get"}
                          </h3>
                          <ul className="mt-4 space-y-2 text-gray-700 list-disc pl-5">
                            {advantagesItems.map((s) => (
                              <li key={s}>{s}</li>
                            ))}
                          </ul>
                        </div>
                      </ScrollReveal>
                    )}
                  </div>
                )}

                {whatWeDo ? (
                  <ScrollReveal>
                    <div className="border rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900">What we do?</h3>
                      <p className="mt-4 text-gray-700">{whatWeDo}</p>
                    </div>
                  </ScrollReveal>
                ) : null}

                {(whyTitle || whyBody) && (
                  <ScrollReveal>
                    <div className="border rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900">{whyTitle || "Why It Matters"}</h3>
                      <p className="mt-4 text-gray-700">{whyBody}</p>
                    </div>
                  </ScrollReveal>
                )}

                {ctaText && ctaHref && (
                  <ScrollReveal>
                    <div>
                      <Link href={ctaHref} className="text-red-600 font-semibold">
                        {ctaText} →
                      </Link>
                    </div>
                  </ScrollReveal>
                )}

                {faqs.length > 0 && (
                  <ScrollReveal>
                    <div className="border rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900">Common Questions for this project</h3>
                      <div className="mt-6 space-y-6">
                        {faqs.map((f) => (
                          <div key={f.q}>
                            <h4 className="text-lg font-semibold text-gray-900">{f.q}</h4>
                            <p className="mt-2 text-gray-700">{f.a}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                )}

                <ScrollReveal>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {popular.map((p) => (
                      <div key={p.title} className="border rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-gray-900">{p.title}</h4>
                        <p className="mt-2 text-gray-700">{p.body}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </>
            )}
          </div>
        </div>
      </section>

      {!hideMarketingFooter ? (
        <>
      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        {/* Background image on the right with red overlay */}
        <div className="absolute inset-0 bg-red-600" />
        <img
          src="/professional-business-woman-with-long-brown-hair-i.jpg"
          alt="Consultant"
          className="absolute inset-y-0 right-0 w-[140%] max-w-none lg:w-1/2 h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          {/* Left copy */}
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Ready to Transform How You Source and Save?
            </h3>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-red-700 hover:bg-gray-100 px-8 py-4 font-semibold"
              >
                Contact Us
              </Link>
              <div className="mt-4">
                <a
                  href="/maverick_sell_sheet_evergreen.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline underline-offset-4 hover:text-white/90"
                >
                  Download Maverick Sell Sheet
                </a>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="flex flex-col gap-10 lg:pl-16">
            <div className="flex items-center gap-6">
              <div className="grid place-items-center w-16 h-16 rounded-md bg-white/10 border border-white/20 text-white text-3xl">+</div>
              <div>
                <div className="text-5xl font-extrabold">500+</div>
                <div className="text-white/90">Business advices given over 15 years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left side - Circular photo with pointing finger */}
            <div className="relative flex-shrink-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-red-500 relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-full h-full object-cover"
                />
                {/* Pointing finger with dashed lines */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  {/* Dashed lines */}
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
                    <div className="w-16 h-0.5 bg-red-500 opacity-60"></div>
                    <div className="w-12 h-0.5 bg-red-500 opacity-40 mt-1"></div>
                    <div className="w-8 h-0.5 bg-red-500 opacity-20 mt-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Testimonial content */}
            <div className="flex-1 max-w-2xl">
              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                <div className="text-red-500 text-xl">★★★★★</div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Awesome Business opportunities</h3>
              
              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">{testimonial.quote}</p>
              
              {/* Separator line */}
              <div className="w-16 h-0.5 bg-gray-300 mb-6"></div>
              
              {/* Attribution with quote icon */}
              <div className="flex items-start gap-4">
                <div className="text-6xl text-gray-300 font-serif leading-none">"</div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
      ) : null}
    </div>
  )
}


