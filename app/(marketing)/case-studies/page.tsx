import Link from "next/link"
import { CaseStudiesGrid } from "@/components/case-studies-grid"

export default function CaseStudiesListingPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-red-600 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Case Studies</h1>
            <p className="mx-auto max-w-3xl text-xl text-red-100">
              Real results from our procurement and sourcing engagements across manufacturing, healthcare, and technology sectors.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto mb-8 max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              Explore our portfolio of successful procurement transformations, cost reduction initiatives, and supply chain optimizations. Each case study
              demonstrates our proven approach to delivering measurable results and sustainable value.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Our Success Stories</h2>
            <p className="text-lg text-gray-600">Proven results across industries and procurement challenges</p>
          </div>

          <CaseStudiesGrid />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Cumulative Impact</h2>
            <p className="text-lg text-gray-600">Our case studies demonstrate consistent, measurable results</p>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-4">
            <div className="group rounded-lg p-6 transition-all duration-300 hover:bg-gray-50">
              <div className="mb-2 text-4xl font-extrabold text-red-600 transition-transform group-hover:scale-110">$55M+</div>
              <p className="text-gray-600">Total Savings Delivered</p>
            </div>
            <div className="group rounded-lg p-6 transition-all duration-300 hover:bg-gray-50">
              <div className="mb-2 text-4xl font-extrabold text-red-600 transition-transform group-hover:scale-110">50+</div>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="group rounded-lg p-6 transition-all duration-300 hover:bg-gray-50">
              <div className="mb-2 text-4xl font-extrabold text-red-600 transition-transform group-hover:scale-110">18%</div>
              <p className="text-gray-600">Average Cost Reduction</p>
            </div>
            <div className="group rounded-lg p-6 transition-all duration-300 hover:bg-gray-50">
              <div className="mb-2 text-4xl font-extrabold text-red-600 transition-transform group-hover:scale-110">6:1</div>
              <p className="text-gray-600">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">Ready to Create Your Success Story?</h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-red-100">
            Let&apos;s discuss how we can help you achieve similar results. Our proven methodologies and deep industry expertise can transform your
            procurement function into a competitive advantage.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-semibold text-red-600 transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Start Your Project
            </Link>
            <Link
              href="/services/mexico-sourcing"
              className="inline-block rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white hover:text-red-600"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
