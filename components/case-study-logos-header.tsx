"use client"

import { useState } from "react"

const MAVERICK_LOGO = "/Asset 19@2x.png"

type CaseStudyLogosHeaderProps = {
  clientLogoSrc: string
  clientName: string
}

export function CaseStudyLogosHeader({ clientLogoSrc, clientName }: CaseStudyLogosHeaderProps) {
  const [clientFailed, setClientFailed] = useState(false)

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 bg-white">
      <div className="flex min-h-[80px] min-w-0 flex-1 items-center justify-start">
        {!clientFailed ? (
          <img
            src={clientLogoSrc}
            alt={`${clientName} logo`}
            className="max-h-[80px] w-auto max-w-full object-contain object-left"
            onError={() => setClientFailed(true)}
          />
        ) : (
          <div className="flex h-20 min-w-[120px] items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 px-4 text-center text-sm text-gray-500">
            {clientName}
          </div>
        )}
      </div>
      <div className="flex shrink-0 items-center justify-end">
        <img
          src={MAVERICK_LOGO}
          alt="Maverick Sourcing & Procurement"
          className="h-auto max-h-[80px] w-auto max-w-[min(100%,280px)] object-contain object-right"
        />
      </div>
    </div>
  )
}
