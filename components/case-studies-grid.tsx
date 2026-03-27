"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ArrowRight, Calendar, Building2, TrendingUp, Award, Clock } from "lucide-react"
import {
  caseStudies,
  CASE_STUDIES_INITIAL_VISIBLE,
  type CaseStudy,
} from "@/lib/case-studies-data"

function StudyCard({ study }: { study: CaseStudy }) {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group block bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
    >
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden bg-gray-50 px-8 py-6 transition-colors duration-300 group-hover:bg-gray-100/90">
        {!logoFailed ? (
          <img
            src={study.logo}
            alt={`${study.client} logo`}
            className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
            onError={() => setLogoFailed(true)}
          />
        ) : (
          <span className="text-center text-sm font-semibold text-gray-500">{study.client}</span>
        )}

        <div className="absolute top-4 left-4">
          <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">{study.category}</span>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white/95 p-3 shadow-md backdrop-blur-sm">
            <ArrowRight className="h-6 w-6 text-red-600" aria-hidden />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start gap-2 mb-3">
          <Building2 className="w-5 h-5 shrink-0 text-red-600 mt-0.5" aria-hidden />
          <div className="min-w-0">
            <p className="text-lg font-bold text-gray-900 leading-tight">{study.client}</p>
            <p className="text-sm font-semibold text-gray-700 mt-1">
              Industry · <span className="text-gray-600 font-medium">{study.category}</span>
            </p>
          </div>
        </div>

        <div className="mb-4 rounded-lg bg-green-50 border border-green-100 px-4 py-3">
          <div className="flex items-start gap-2">
            <TrendingUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden />
            <span className="text-sm font-bold text-green-800 leading-snug">{study.savings}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500 mb-3">
          <Calendar className="w-4 h-4 shrink-0" aria-hidden />
          <span>{study.date}</span>
          <span className="text-gray-300" aria-hidden>
            •
          </span>
          <Clock className="w-4 h-4 shrink-0" aria-hidden />
          <span>{study.duration}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{study.title}</h3>

        <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>

        <div className="flex items-center justify-end pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4 text-yellow-500" aria-hidden />
            <span className="text-sm text-gray-600">Success</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function CaseStudiesGrid() {
  const [visibleCount, setVisibleCount] = useState(CASE_STUDIES_INITIAL_VISIBLE)
  const visible = useMemo(() => caseStudies.slice(0, visibleCount), [visibleCount])
  const canShowMore = visibleCount < caseStudies.length

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((study) => (
          <StudyCard key={study.id} study={study} />
        ))}
      </div>

      {canShowMore ? (
        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => setVisibleCount((n) => Math.max(n, caseStudies.length))}
            aria-expanded={visibleCount >= caseStudies.length}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
          >
            <span>Show More Case Studies</span>
            <ArrowRight className="w-4 h-4" aria-hidden />
          </button>
        </div>
      ) : null}
    </>
  )
}
