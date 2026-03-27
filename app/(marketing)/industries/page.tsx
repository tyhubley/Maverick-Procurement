import Link from "next/link"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Banner */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Empower</h1>
            <p className="text-xl text-red-100">At Maverick Procurement, we help businesses across multiple sectors unlock new levels of efficiency, cost savings, and supply chain performance.</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our experience spans industries where precision, compliance, and cost control directly impact profitability.
              Explore how we tailor procurement and sourcing excellence to your world.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Manufacturing</h2>
              <p className="text-xl text-red-700 mb-6 font-semibold">Build smarter. Source stronger. Deliver faster.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We partner with manufacturers to strengthen supplier networks, drive cost efficiencies, and reduce lead-time risk. From direct materials to MRO, our team optimizes every dollar of spend and ensures supply continuity—without slowing production.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Common pain points:</h4>
                  <p className="text-gray-600">volatile material costs, fragmented supplier base, long lead times.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our outcomes:</h4>
                  <p className="text-gray-600">stable supply chains, 8–15% cost savings, and faster time-to-market.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <img 
                  src="/assets/warehouse-management-in-mexico-1160x665.webp" 
                  alt="Manufacturing and Warehouse Management in Mexico" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumer Packaged Goods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <img 
                  src="/assets/GettyImages-1028962108 (1).webp" 
                  alt="Consumer Packaged Goods Manufacturing" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Consumer Packaged Goods (CPG)</h2>
              <p className="text-xl text-red-700 mb-6 font-semibold">Agility meets scale.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                In the fast-moving CPG space, we deliver procurement strategies that keep your brand competitive and margins healthy. Whether it's packaging, logistics, or co-manufacturing, Maverick aligns your sourcing with consumer demand and cost discipline.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pain points:</h4>
                  <p className="text-gray-600">fluctuating input costs, seasonal volume swings, limited supplier visibility.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcomes:</h4>
                  <p className="text-gray-600">sustainable savings, stronger supplier partnerships, and improved working capital.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Healthcare</h2>
              <p className="text-xl text-red-700 mb-6 font-semibold">Compliance, cost, and care—balanced.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For healthcare organizations, procurement excellence is mission-critical. We help hospitals, labs, and medical manufacturers streamline sourcing while maintaining the highest standards of quality and compliance.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pain points:</h4>
                  <p className="text-gray-600">supplier risk, regulatory complexity, budget pressure.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcomes:</h4>
                  <p className="text-gray-600">compliant sourcing frameworks, lower total cost of ownership, and supply resilience under pressure.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <img 
                  src="/assets/istockphoto-1773073538-612x612.webp" 
                  alt="Healthcare and Medical Services" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industrial & Distribution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <img 
                  src="/assets/industrial-distribution-bs.webp" 
                  alt="Industrial and Distribution Operations" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Industrial & Distribution</h2>
              <p className="text-xl text-red-700 mb-6 font-semibold">Move materials, not margins.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Industrial and distribution companies face constant pressure to deliver reliably at lower cost. Maverick brings structure and strategy to indirect and direct procurement, leveraging cross-border sourcing and digital transformation to reduce spend and improve OTIF rates.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pain points:</h4>
                  <p className="text-gray-600">high logistics costs, fragmented procurement processes, aging supplier contracts.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcomes:</h4>
                  <p className="text-gray-600">10–20% spend reduction, optimized supplier base, and smoother operations from dock to door.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology & Electronics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">Technology & Electronics</h2>
              <p className="text-xl text-red-700 mb-6 font-semibold">Strategic sourcing for fast-moving innovators.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We help tech and electronics firms secure reliable global supply, optimize contract manufacturing, and protect against component volatility. Our team combines data-driven insights with supplier development to keep your innovation pipeline moving.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pain points:</h4>
                  <p className="text-gray-600">supply chain instability, limited visibility, long component lead times.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcomes:</h4>
                  <p className="text-gray-600">strategic supplier diversification, predictable cost structures, and accelerated product launches.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <img 
                  src="/assets/jpg.webp" 
                  alt="Technology and Electronics Innovation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden">
        {/* Background image on the right with red overlay */}
        <div className="absolute inset-0 bg-red-600" />
        <img
          src="/professional-business-woman-with-long-brown-hair-i.jpg"
          alt="Consultant"
          className="absolute inset-y-0 right-0 w-[140%] max-w-none lg:w-1/2 h-full object-cover opacity-40"
        />
        <div className="relative max-w-7xl mx-auto px-4 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white">
          {/* Left copy */}
          <div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Ready to Transform How You Source and Save?
            </h3>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white text-red-700 hover:bg-gray-100 px-8 py-4 font-semibold"
              >
                Contact Us
              </Link>
              <div className="mt-4">
                <a
                  href="/maverick_sell_sheet_evergreen.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold underline underline-offset-4 hover:text-white/90"
                >
                  Download Maverick Sell Sheet
                </a>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="flex flex-col gap-10 lg:pl-16">
            <div className="flex items-center gap-6">
              <div className="grid place-items-center w-16 h-16 rounded-md bg-white/10 border border-white/20 text-white text-3xl">+</div>
              <div>
                <div className="text-5xl font-extrabold">500+</div>
                <div className="text-white/90">Business advices given over 20+ years</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}