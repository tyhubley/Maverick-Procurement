"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function InteractiveServiceGrid() {
  const [activeService, setActiveService] = useState('mexico-sourcing')

  const serviceData = {
    'mexico-sourcing': [
      { href: '/services/mexico-sourcing', title: 'Supplier Discovery & Qualification', description: 'On-the-ground scouting and audits across Mexico to verify capability and compliance.' },
      { href: '/services/mexico-sourcing', title: 'Cost Benchmarking & Negotiations', description: 'Compare cost structures across Mexico, US, and Asia to identify immediate savings opportunities.' },
      { href: '/services/mexico-sourcing', title: 'On-the-ground Relationship Management', description: 'Bilingual experts manage supplier relationships and ensure smooth communication.' },
      { href: '/services/mexico-sourcing', title: 'Logistics and Trade Compliance', description: 'Handle customs documentation, duties, and freight optimization for smooth cross-border flow.' }
    ],
    'procurement-transformation': [
      { href: '/services/procurement-transformation', title: 'Procurement Health Check', description: 'Audit your spend, supplier base, and approval flows to reveal hidden inefficiencies.' },
      { href: '/services/procurement-transformation', title: 'Process & Policy Design', description: 'Implement structured sourcing cycles, approval thresholds, and category ownership.' },
      { href: '/services/procurement-transformation', title: 'Technology Enablement', description: 'Automate supplier onboarding to invoice tracking using integrated tools.' },
      { href: '/services/procurement-transformation', title: 'Capability Uplift', description: 'Coach your team to use data, negotiation frameworks, and supplier scorecards effectively.' }
    ],
    'cost-reduction': [
      { href: '/services/cost-reduction', title: 'Total Cost of Ownership (TCO) Modeling', description: 'Analyze full lifecycle costs to reveal savings others miss.' },
      { href: '/services/cost-reduction', title: 'Supplier Consolidation & Optimization', description: 'Rationalize vendor bases while preserving competition and flexibility.' },
      { href: '/services/cost-reduction', title: 'Contract Negotiation & Renegotiation', description: 'Benchmark against global indices and enforce KPI-based performance clauses.' },
      { href: '/services/cost-reduction', title: 'Continuous Improvement', description: 'Apply Lean and Six Sigma sourcing methods to sustain savings post-implementation.' }
    ],
    'interim-leadership': [
      { href: '/services/interim-leadership', title: 'Rapid Diagnostics', description: 'Assess spend exposure, supplier dependencies, and quick-win opportunities within the first week.' },
      { href: '/services/interim-leadership', title: 'Fractional Leadership', description: 'Part-time or project-based CPOs deliver high-impact oversight without long-term overhead.' },
      { href: '/services/interim-leadership', title: 'Team Coaching & Development', description: 'Mentor existing staff to build internal procurement capabilities and succession planning.' },
      { href: '/services/interim-leadership', title: 'Strategic Planning & Execution', description: 'Develop and implement procurement roadmaps aligned with business objectives and market conditions.' }
    ],
    'supply-chain-advisory': [
      { href: '/services/supply-chain-advisory', title: 'Supply Chain Risk Assessment', description: 'Identify vulnerabilities across your supplier network and develop mitigation strategies.' },
      { href: '/services/supply-chain-advisory', title: 'Network Optimization', description: 'Redesign distribution networks to balance cost, service, and resilience requirements.' },
      { href: '/services/supply-chain-advisory', title: 'Demand Planning & Forecasting', description: 'Improve accuracy and reduce bullwhip effects through advanced analytics and collaboration.' },
      { href: '/services/supply-chain-advisory', title: 'Sustainability & ESG Integration', description: 'Embed environmental and social criteria into sourcing decisions and supplier relationships.' }
    ]
  }

  useEffect(() => {
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement
      const serviceLink = target.closest('[data-service]') as HTMLElement
      if (serviceLink) {
        const service = serviceLink.getAttribute('data-service')
        if (service) {
          setActiveService(service)
        }
      }
    }

    const serviceLinks = document.querySelectorAll('[data-service]')
    serviceLinks.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnter)
    })

    return () => {
      serviceLinks.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnter)
      })
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {serviceData[activeService as keyof typeof serviceData]?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="group block p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300 h-full"
        >
          <div className="text-red-600 text-3xl mb-4">•</div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </Link>
      ))}
    </div>
  )
}
