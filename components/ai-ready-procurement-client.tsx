"use client"

import Link from "next/link"
import { ServicePage } from "@/components/service-page"

const pillars = [
  {
    n: "01",
    title: "Supplier Consolidation Score",
    body: "Most mid-market manufacturers carry 20–40% more suppliers than their spend justifies. That fragmentation creates pricing inconsistency, compliance exposure, and a supplier network no AI sourcing tool can operate reliably within. We score your entire supplier base, identify consolidation opportunities, and build a leaner, higher-performing network that automation can actually leverage.",
  },
  {
    n: "02",
    title: "Cost Leakage Analysis",
    body: "Off-contract spend, pricing variances across facilities, and vendor agreements that have not been renegotiated in years are invisible in a manual process — and locked in permanently once AI takes over. We surface every dollar of leakage before automation has a chance to make it structural.",
  },
  {
    n: "03",
    title: "Data Cleanliness (ERP / PO / Pricing)",
    body: "We audit your ERP records, purchase order history, and pricing data to identify gaps, duplicates, and inconsistencies that will undermine any AI or automation initiative. The result is a clean, structured foundation that both technology platforms and due diligence teams can actually rely on.",
  },
  {
    n: "04",
    title: "Automation Opportunity Mapping",
    body: "Not every procurement function is ready to automate — and deploying automation in the wrong place at the wrong time creates more problems than it solves. We map your sourcing, quoting, and forecasting workflows to identify exactly where automation delivers ROI today and where it needs more groundwork first.",
  },
  {
    n: "05",
    title: "Sourcing Stabilization",
    body: "Volatile material costs and extended lead times are not technology problems. They are supplier strategy and contract discipline problems. We build the sourcing structure, supplier redundancy, and contract framework that gives automation a stable environment to operate in.",
  },
]

export function AiReadyProcurementClient() {
  return (
    <ServicePage
      title="AI-Ready Procurement"
      heroSubtitle="Is Your Supply Chain Built for What's Coming?"
      breadcrumbItems={[{ label: "Solutions" }, { label: "AI-Ready Procurement" }]}
      email="maverickprocure.com"
      contactHeadline="Need a smarter sourcing strategy?"
      contactBody="Connect with our experts — we will assess your AI readiness and show you exactly where the savings are hiding."
      contactDownloadHref="/maverick_sell_sheet_evergreen.pdf"
      contactDownloadLabel="Download AI Readiness Overview"
      ctaAdviceSubtext="Business advices given over 20+ years"
      stackSidebarBelowOnMobile
      customMain={
        <>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <img src="/assets/kipo-logo.svg" alt="KIPO AI" className="h-8 w-auto shrink-0 md:h-9" />
                <div className="hidden h-12 w-px shrink-0 bg-gray-200 sm:block" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-red-600">Technology Partner</p>
                  <p className="mt-1 max-w-xl text-gray-700">
                    We&apos;ve partnered with KIPO AI, an AI-native sourcing and procurement platform, to turn the clean
                    foundation we build into speed, visibility, and savings.
                  </p>
                </div>
              </div>
              <a
                href="https://www.kipo.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
              >
                Visit KIPO AI
              </a>
            </div>
          </div>

          <div className="rounded-xl border-l-4 border-l-red-600 bg-red-50/90 py-5 pl-4 pr-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
              <span className="inline-flex w-fit shrink-0 items-center rounded-full bg-red-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">
                INDUSTRY SHIFT
              </span>
              <p className="text-sm leading-relaxed text-gray-800 md:text-base">
                Private equity is buying manufacturers and demanding AI-ready operations on day one. Is your supply chain
                positioned or exposed?
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border bg-white">
            <div className="grid grid-cols-2 divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              <div className="p-6 text-center md:px-4">
                <div className="text-2xl font-extrabold text-gray-900 md:text-3xl">8–15%</div>
                <p className="mt-2 text-sm text-gray-600">Hard cost savings unlocked per engagement</p>
              </div>
              <div className="p-6 text-center md:px-4">
                <div className="text-2xl font-extrabold text-gray-900 md:text-3xl">30–60 Days</div>
                <p className="mt-2 text-sm text-gray-600">From initial audit to full readiness roadmap</p>
              </div>
              <div className="p-6 text-center md:px-4">
                <div className="text-2xl font-extrabold text-gray-900 md:text-3xl">5 pts</div>
                <p className="mt-2 text-sm text-gray-600">
                  Higher EBITDA margins at AI-ready manufacturers
                  <span className="mt-1 block text-xs text-gray-500">(McKinsey, 2025)</span>
                </p>
              </div>
              <div className="p-6 text-center md:px-4">
                <div className="text-2xl font-extrabold text-gray-900 md:text-3xl">20+</div>
                <p className="mt-2 text-sm text-gray-600">Years in manufacturing supply chains</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">What&apos;s driving this</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
              The Pressure on Manufacturers Has Never Been Higher.
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Private equity is accelerating its push into manufacturing — and AI readiness is now a core part of every deal
              thesis. Buyers are asking harder questions than ever before: Is the data clean? Is the supplier base defensible? Can
              this operation absorb automation and improve margins, or will it require two years of remediation before any
              technology investment pays off?
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At the same time, manufacturers who are not being acquired are facing a different kind of pressure. AI-enabled
              competitors are beginning to operate with structural cost advantages — faster sourcing, tighter supplier contracts,
              and procurement processes that run with less labor and less error. According to BCG, companies that embed AI into
              disciplined procurement processes outperform peers on cost, speed, and resilience. The gap between leaders and
              laggards is widening, and it is widening fast.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The manufacturers who close that gap are not the ones who buy the best AI platform. They are the ones who build the
              right foundation first. Clean data. Consolidated suppliers. Documented processes. A procurement operation that is
              structured to absorb technology and deliver on its promise.
              <br />
              <br />
              That is the work Maverick does.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold text-gray-900">Our Approach</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                  <li>Supplier base consolidation audit</li>
                  <li>Cost leakage identification and recovery</li>
                  <li>ERP, PO, and pricing data cleanliness review</li>
                  <li>Automation opportunity mapping</li>
                  <li>Sourcing stabilization and contract discipline</li>
                </ul>
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-xl font-semibold text-gray-900">What You Get</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                  <li>Full AI readiness scorecard</li>
                  <li>8–15% hard cost savings identified</li>
                  <li>30–60 day implementation roadmap</li>
                  <li>Supply chain positioned for PE evaluation or technology investment</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              Why most manufacturers are not ready
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
              AI Does Not Fix a Broken Foundation. It Exposes One.
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Most manufacturers have spent years building procurement operations that work well enough for a manual process.
              Supplier relationships managed through familiarity. Pricing that varies by location or buyer. ERP systems layered
              with years of acquisitions and workarounds. Institutional knowledge that lives in people rather than systems.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              That foundation is manageable when humans are running it. It becomes a liability the moment automation enters the
              picture. AI does not smooth over fragmented data — it amplifies every inconsistency at machine speed. And according
              to Gartner, 60% of AI projects are abandoned not because the technology fails, but because the data foundation cannot
              support it.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Getting ready for AI is not about the technology. It is about the five things that have to be true before the
              technology can work.
            </p>
            <ul className="mt-8 space-y-8">
              {pillars.map((p) => (
                <li key={p.n} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-100 text-sm font-bold text-red-600">
                    {p.n}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{p.title}</h3>
                    <p className="mt-2 text-gray-700 leading-relaxed">{p.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">Is this for you?</p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">One Problem. Four Different Situations.</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              The foundation work is the same regardless of why you need it. But the urgency looks different depending on where you
              are.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold text-gray-900">Manufacturers Preparing for a PE Exit</h3>
                <p className="mt-2 text-gray-700">
                  Your supply chain is either a value driver or a valuation haircut — there is no neutral. Buyers today are
                  underwriting AI potential alongside current earnings. Clean data, a consolidated supplier base, and documented
                  processes command premiums. Fragmented operations with tribal knowledge and inconsistent pricing get discounted
                  before you even get to negotiations.
                </p>
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold text-gray-900">Companies Operating Under PE Ownership</h3>
                <p className="mt-2 text-gray-700">
                  You have been handed a modernization mandate. The expectation is faster margins, tighter operations, and a supply
                  chain that can support automation within a defined window. The ERP is a mess and nobody is sure where to start. We
                  have been in this exact situation with manufacturing clients across industries. We know how to move fast without
                  breaking what is working.
                </p>
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold text-gray-900">Operations Leaders Inheriting Old Systems</h3>
                <p className="mt-2 text-gray-700">
                  You did not build this supplier base. You inherited it — along with the pricing inconsistencies, the
                  undocumented processes, and the tribal knowledge that walks out the door when a key person leaves. You know it
                  needs to change. You need an outside partner who can bring structure, objectivity, and a proven process to fix it.
                </p>
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold text-gray-900">CFOs and COOs Evaluating AI Investment</h3>
                <p className="mt-2 text-gray-700">
                  Before you commit capital to an AI platform, you need an honest answer to one question: can your data actually
                  support it? We give you that answer — along with a clear picture of what needs to happen first, what it will cost,
                  and what the return looks like when the foundation is right.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-[#1f242b] p-8 text-white md:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('/placeholder.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative">
              <h3 className="text-2xl font-extrabold md:text-3xl">The Foundation Has to Come Before the Technology.</h3>
              <p className="mt-3 text-lg font-semibold text-red-500">Let&apos;s Build Yours.</p>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90">
                We have spent 20+ years doing the procurement work that makes AI possible in manufacturing operations. Supplier
                consolidations. Cost leakage recovery. Data cleanup. Process documentation. Sourcing stabilization. We know what
                good looks like — and we know how to get you there on a timeline that works for your business.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full px-8 py-4 font-semibold text-white"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #e11d48 0%, #3b82f6 100%)",
                  }}
                >
                  Schedule a Free Assessment
                </Link>
                <a
                  href="/maverick_sell_sheet_evergreen.pdf"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10"
                >
                  Download the Sell Sheet
                </a>
              </div>
            </div>
          </div>
        </>
      }
    />
  )
}
