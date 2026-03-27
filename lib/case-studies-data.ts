export type CaseStudy = {
  id: number
  slug: string
  title: string
  category: string
  client: string
  description: string
  image: string
  duration: string
  savings: string
  date: string
  logo: string
  challenge: string
  approach: string[]
  results: string[]
  impact: string
  /** Headline savings line for detail page callout */
  keySavingsStat: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "catalyst-exhibits",
    title: "Procurement leadership & category reset",
    category: "Manufacturing",
    client: "Catalyst Exhibits",
    description:
      "Challenge: Procurement lacked formal leadership, structured processes, and supplier communication discipline, so incumbent suppliers dictated pricing, terms, and commercial conditions across direct and indirect spend. Maverick approach: Targeted the top 80% of spend for renegotiation and re-sourcing; reset key categories including plastics, carpet, freight, aluminum, and cleaning supplies; and implemented a structured supplier communication and engagement framework. Results: ~$1M annual savings (~12%), multiple suppliers replaced or re-quoted, and plastics achieved 60%+ savings. Maverick impact: Shifted Catalyst from a supplier-controlled environment to a procurement-led operating model with leadership, structured engagement, and negotiation discipline that unlocked cost efficiency and long-term commercial control.",
    image: "/assets/mexico-exports-replacing-china-mts.webp",
    duration: "Multi-phase",
    savings: "$1M/yr · ~12% · plastics 60%+",
    date: "2024",
    logo: "/images/case-studies/catalyst_logo.png",
    challenge:
      "Procurement lacked formal leadership, structured processes, and supplier communication discipline, resulting in incumbent suppliers dictating pricing, terms, and commercial conditions across both direct and indirect spend.",
    approach: [
      "Targeted the top 80% of spend for renegotiation and re-sourcing",
      "Reset key categories including plastics, carpet, freight, aluminum, and cleaning supplies",
      "Implemented a structured supplier communication and engagement framework",
    ],
    results: [
      "$1M annual savings (~12%)",
      "Multiple suppliers replaced or re-quoted",
      "Plastics category achieved 60%+ savings",
    ],
    impact:
      "Shifted Catalyst from a supplier-controlled environment to a procurement-led operating model, establishing leadership, structured supplier engagement, and negotiation discipline that rapidly unlocked significant cost efficiency and long-term commercial control.",
    keySavingsStat: "$1M annual savings (~12%)",
  },
  {
    id: 2,
    slug: "konecranes",
    title: "Mexico sourcing, EU standards & global competitiveness",
    category: "Manufacturing / Industrial",
    client: "Konecranes",
    description:
      "Challenge: Heavy dependence on European manufacturing drove high landed costs and three-month lead times, constraining production flexibility, slowing response to customer demand, and weakening North American competitiveness. Maverick approach: Qualified Mexican fabricators meeting EU welding requirements; bridged Swedish engineering standards with North American supplier capabilities; and completed SSAB S690 steel material equivalent qualification. Results: $3M+ annual savings with 15% landed cost reduction, three-month lead-time reduction, and major assemblies transitioned from Europe to Mexico. Maverick impact: Bridged supply chains, engineering requirements, and cultural differences across regions to unlock sustainable global competitiveness and improved execution.",
    image: "/assets/warehouse-management-in-mexico-1160x665.webp",
    duration: "Multi-phase",
    savings: "$3M+/yr · 15% landed · −3 mo lead time",
    date: "2024",
    logo: "/images/case-studies/konecranes_logo.png",
    challenge:
      "A heavy dependence on European manufacturing created high landed costs and three-month lead times, constraining production flexibility, slowing response to customer demand, and weakening North American market competitiveness.",
    approach: [
      "Qualified Mexican fabricators meeting EU welding requirements",
      "Bridged Swedish engineering standards with North American supplier capabilities",
      "Completed SSAB S690 steel material equivalent qualification",
    ],
    results: [
      "$3M+ annual savings (15% landed cost reduction)",
      "3-month lead-time reduction",
      "Major assemblies transitioned from Europe to Mexico",
    ],
    impact:
      "Bridged supply chains, engineering requirements, and cultural differences across regions to unlock sustainable global competitiveness and improved execution.",
    keySavingsStat: "$3M+ annual savings (15% landed cost reduction)",
  },
  {
    id: 3,
    slug: "mti-motion",
    title: "Capacity, sourcing clarity & negotiation strength",
    category: "Aerospace / Manufacturing",
    client: "MTI Motion",
    description:
      "Challenge: Rapid growth in aerospace programs exposed supplier capacity constraints, misaligned procurement processes, and limited negotiation leverage. Maverick approach: Qualified alternate India casting suppliers to expand capacity and reduce cost; mapped procurement roles across purchasing and strategic sourcing; and delivered negotiation training to strengthen supplier engagement. Results: $800K annual savings (~40%), multiple supplier transitions through structured change management, and improved procurement clarity and execution. Maverick impact: Delivered immediate savings while strengthening procurement capabilities, governance, and execution for sustained performance.",
    image: "/assets/pexels-thecoachspace-2977547.webp",
    duration: "Multi-phase",
    savings: "$800K/yr · ~40%",
    date: "2024",
    logo: "/images/case-studies/mti_logo.png",
    challenge:
      "Rapid growth in aerospace programs exposed supplier capacity constraints, misaligned procurement processes, and limited negotiation leverage.",
    approach: [
      "Qualified alternate India casting suppliers to expand capacity and reduce cost",
      "Mapped procurement roles across purchasing and strategic sourcing",
      "Delivered negotiation training to strengthen supplier engagement",
    ],
    results: [
      "$800K annual savings (~40%)",
      "Multiple supplier transitions executed through structured change management",
      "Improved procurement clarity and execution",
    ],
    impact:
      "Delivered immediate cost savings while strengthening procurement capabilities, governance, and execution to support sustained performance.",
    keySavingsStat: "$800K annual savings (~40%)",
  },
  {
    id: 4,
    slug: "latitude-corp",
    title: "Scale-ready supply chain, DOA & sourcing KPIs",
    category: "Manufacturing",
    client: "Latitude Corp",
    description:
      "Challenge: Rapid growth outpaced procurement structure and governance, driving higher material costs and inconsistent, undisciplined sourcing and purchasing. Maverick approach: Redesigned the supply chain organization to support 30%+ growth; delivered cost reductions across cardboard, fasteners, paint, and outsourced labor; and implemented Delegation of Authority controls and sourcing KPIs. Results: $2.4M annual savings (~8% of total spend), supplier transitions across paint, chemicals, and make/buy decisions, and a stronger operational foundation for scaling. Maverick impact: Delivered margin improvement while professionalizing a scalable supply chain for aggressive growth objectives.",
    image: "/assets/30783373D.webp",
    duration: "Multi-phase",
    savings: "$2.4M/yr · ~8% of spend",
    date: "2024",
    logo: "/images/case-studies/latitude_logo.png",
    challenge:
      "Rapid growth outpaced procurement structure and governance, driving higher material costs and inconsistent, undisciplined sourcing and purchasing processes.",
    approach: [
      "Redesigned the supply chain organization to support 30%+ growth",
      "Delivered cost reductions across cardboard, fasteners, paint, and outsourced labor",
      "Implemented Delegation of Authority controls and sourcing KPIs",
    ],
    results: [
      "$2.4M annual savings (~8% of total spend)",
      "Supplier transitions across paint, chemicals, and make/buy decisions",
      "Stronger operational foundation for scaling",
    ],
    impact:
      "Delivered margin improvement while establishing a professionalized, scalable supply chain capable of supporting aggressive growth objectives.",
    keySavingsStat: "$2.4M annual savings (~8% of total spend)",
  },
]

/** First N cards visible before “Show more” (no button when count ≤ this). */
export const CASE_STUDIES_INITIAL_VISIBLE = 6

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((s) => s.slug === slug)
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((s) => s.slug)
}
