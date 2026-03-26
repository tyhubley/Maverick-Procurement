import type { Metadata } from "next"
import { AiReadyProcurementClient } from "@/components/ai-ready-procurement-client"

export const metadata: Metadata = {
  title: "AI-Ready Procurement | MaverickProcure.com",
  description:
    "AI readiness for manufacturing procurement — supplier consolidation, data cleanliness, and a clear path before automation.",
}

export default function AiReadyProcurementPage() {
  return <AiReadyProcurementClient />
}
