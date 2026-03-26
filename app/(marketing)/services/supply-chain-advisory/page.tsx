import { ServicePage } from "@/components/service-page"

export default function SupplyChainAdvisoryPage() {
  return (
    <ServicePage
      title="Supply Chain Advisory"
      heroImage="/assets/681e46586bf2af54149d80f7_iStock-1355814632 - 1538 x 1025.webp"
      heroLine="From procurement excellence to full-supply-chain mastery."
      introBody="For clients ready to extend efficiency beyond procurement, we align sourcing, planning, and logistics into one high-performance ecosystem."
      approachItems={[
        "Risk Management: Map single-source exposures and build dual-sourcing strategies.",
        "S&OP Alignment: Integrate demand forecasting with purchasing and inventory planning.",
        "Logistics Optimization: Evaluate freight, packaging, and warehousing costs for savings and reliability.",
        "Nearshoring Strategy: Blend U.S., Mexico, and India networks for flexibility.",
      ]}
      advantagesTitle="What You Get"
      advantagesItems={["End-to-end visibility from supplier to delivery", "Improved working capital and reduced volatility", "Supply-chain agility to respond to global market shifts"]}
      whyBody="Procurement doesn’t exist in isolation. We bridge the gap between sourcing and execution — delivering resilience and efficiency."
      whatWeDo="Design and implement end-to-end improvements that balance cost, risk, and service."
      ctaText="Talk Supply Chain Strategy"
      ctaHref="/contact"
      email="maverickprocure.com"
    />
  )
}



