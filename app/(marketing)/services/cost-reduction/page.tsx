import { ServicePage } from "@/components/service-page"

export default function CostReductionPage() {
  return (
    <ServicePage
      title="Cost Reduction & Value Creation Programs"
      heroImage="/assets/istockphoto-1947499362-612x612.webp"
      heroLine="Savings today. Value forever."
      introBody="We go beyond one-time savings to deliver sustainable value through smarter sourcing, supplier partnerships, and cost-engineering. Maverick’s programs uncover hidden potential across materials, logistics, and supplier agreements — protecting your margin year after year."
      approachItems={[
        "Total Cost of Ownership (TCO) Modeling: Analyze lifecycle cost to reveal savings others miss.",
        "Supplier Consolidation & Optimization: Rationalize vendor bases while preserving competition.",
        "Contract Negotiation & Renegotiation: Benchmark against indices and enforce KPI clauses.",
        "Continuous Improvement: Apply Lean and Six Sigma sourcing methods to sustain savings.",
      ]}
      advantagesTitle="What You Get"
      advantagesItems={["Transparent, defendable cost savings you can report", "Reduced procurement complexity and supplier risk", "Long-term relationships built on shared performance goals"]}
      whyBody="Protecting margin requires a balance of savings, avoidance, and collaboration. We provide the edge — converting procurement from cost control to profit creation."
      whatWeDo="Integrate category strategy, supplier collaboration, and benchmarking to deliver measurable savings and durable value."
      ctaText="Explore Cost Savings Programs"
      ctaHref="/contact"
      email="maverickprocure.com"
    />
  )
}



