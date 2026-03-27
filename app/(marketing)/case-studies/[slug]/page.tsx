import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, TrendingUp } from "lucide-react"
import { CaseStudyLogosHeader } from "@/components/case-study-logos-header"
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/case-studies-data"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return { title: "Case Study" }
  return {
    title: `${study.client} | Case Study | Maverick Procurement`,
    description: study.challenge.slice(0, 160),
  }
}

export default function CaseStudyDetailPage({ params }: Props) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) notFound()

  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to Case Studies
          </Link>
          <nav className="mt-3 text-sm text-gray-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-red-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/case-studies" className="hover:text-red-600">
              Case Studies
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{study.client}</span>
          </nav>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <CaseStudyLogosHeader clientLogoSrc={study.logo} clientName={study.client} />
        </div>
      </section>

      <section className="bg-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-bold md:text-5xl">{study.client}</h1>
          <p className="mt-3 text-xl text-red-100">{study.category}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-12 px-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Challenge</h2>
            <p className="mt-4 leading-relaxed text-gray-700">{study.challenge}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Maverick Approach</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Results</h2>
            <div className="mt-4 rounded-lg border border-green-100 bg-green-50 px-5 py-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="mt-0.5 h-6 w-6 shrink-0 text-green-600" aria-hidden />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-green-800">Key savings</p>
                  <p className="mt-1 text-lg font-bold text-green-900">{study.keySavingsStat}</p>
                </div>
              </div>
            </div>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
              {study.results.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">Maverick Impact</h2>
            <p className="mt-4 leading-relaxed text-gray-700">{study.impact}</p>
          </div>

          <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-red-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-red-700"
            >
              Ready to see results like these?
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
