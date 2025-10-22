import { ServicePage } from "@/components/service-page"

export default function MexicoSourcingPage() {
  return (
    <ServicePage
      title="Cross-Border Sourcing (Mexico Advantage)"
      heroImage="/assets/mexico-exports-replacing-china-mts.webp"
      heroLine="Global quality. Local cost advantage."
      introTitle="Maverick Procurement"
      introBody="Maverick Procurement connects you to Mexico’s fast-growing manufacturing ecosystem — delivering high-quality parts and components with lower landed costs and shorter lead times. Our cross-border team manages sourcing, vetting, and supplier relationships from start to finish, ensuring you get enterprise-grade results with zero operational friction."
      approachTitle="Our Approach"
      approachItems={[
        "Supplier Discovery & Qualification: Map suppliers across northern and central Mexico; verify certifications, capabilities, export experience.",
        "Cost Benchmarking: Compare cost structures across Mexico, U.S., and Asia to identify immediate savings.",
        "Supplier Development: Scale quality systems, reduce waste, improve OTD metrics.",
        "Trade Compliance & Logistics: Handle customs documentation, duties, and freight optimization.",
      ]}
      advantagesTitle="Strategic Advantages"
      advantagesItems={[
        "15–30% average cost savings vs. domestic sourcing",
        "35–50% lead-time reduction compared to Asia",
        "Localized communication and rapid response to market changes",
      ]}
      whyBody="Nearshoring to Mexico offers the best balance of cost, quality, and resilience in North America’s new supply-chain landscape. Maverick helps you capture that value safely, strategically, and fast."
      whatWeDo="Identify, qualify, and negotiate with suppliers; then manage relationships to secure sustainable savings and resilience."
      ctaText="Learn More About Mexico Sourcing"
      ctaHref="/contact"
      email="maverickprocure.com"
    />
  )
}



