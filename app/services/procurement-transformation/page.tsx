import { ServicePage } from "@/components/service-page"

export default function ProcurementTransformationPage() {
  return (
    <ServicePage
      title="Procurement Transformation for SMBs"
      heroImage="/assets/pexels-thecoachspace-2977547.webp"
      heroLine="Build a world-class procurement function — without Fortune 500 bureaucracy."
      introBody="Most small and mid-sized businesses rely on ad-hoc purchasing. Maverick transforms that chaos into a strategic advantage — building scalable systems, smarter processes, and measurable performance frameworks that rival the best enterprise procurement teams."
      approachItems={[
        "Procurement Health Check: Audit spend, supplier base, and approval flows to reveal inefficiencies.",
        "Process & Policy Design: Implement sourcing cycles, thresholds, and category ownership.",
        "Technology Enablement: Automate supplier onboarding to invoice tracking with lightweight tools.",
        "Capability Uplift: Coach internal teams in data use, negotiation, and scorecards.",
      ]}
      advantagesTitle="What You Get"
      advantagesItems={["Clear procurement policies and spend visibility", "10–20% cost reduction within 6–12 months", "A resilient function ready for growth or private-equity evaluation"]}
      whyBody="Global organizations achieve significant savings through disciplined purchasing and controlling. We bring that rigor to SMBs — scaled to fit your size and speed."
      whatWeDo="Stand up processes, governance, tooling, and skills so your team consistently sources strategically and captures savings."
      ctaText="See How We Transform Procurement"
      ctaHref="/contact"
      email="maverickprocure.com"
    />
  )
}



