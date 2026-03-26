import Link from "next/link"
import { ArrowRight, Calendar, User, Building2, TrendingUp, Target, Award, Clock } from "lucide-react"

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Cost Reduction Initiative",
      category: "Procurement Transformation",
      client: "Global Manufacturing Corp",
      description: "Delivered 23% cost savings through strategic supplier consolidation and Mexico sourcing implementation.",
      image: "/assets/warehouse-management-in-mexico-1160x665.webp",
      duration: "6 months",
      savings: "$12M",
      date: "2024"
    },
    {
      id: 2,
      title: "Cross-Border Supply Chain Optimization",
      category: "Mexico Sourcing",
      client: "Industrial Solutions Inc",
      description: "Established complete Mexico sourcing program reducing landed costs by 18% while improving delivery times.",
      image: "/assets/mexico-exports-replacing-china-mts.webp",
      duration: "4 months",
      savings: "$8.5M",
      date: "2024"
    },
    {
      id: 3,
      title: "Procurement Process Transformation",
      category: "Interim Leadership",
      client: "Tech Manufacturing Ltd",
      description: "Implemented structured procurement processes and technology systems, achieving 15% efficiency gains.",
      image: "/assets/pexels-thecoachspace-2977547.webp",
      duration: "8 months",
      savings: "$6.2M",
      date: "2023"
    },
    {
      id: 4,
      title: "Strategic Supplier Development",
      category: "Supply Chain Advisory",
      client: "Consumer Goods Company",
      description: "Built resilient supplier network across North America, reducing supply risk by 40% and costs by 12%.",
      image: "/assets/681e46586bf2af54149d80f7_iStock-1355814632 - 1538 x 1025.webp",
      duration: "10 months",
      savings: "$9.8M",
      date: "2023"
    },
    {
      id: 5,
      title: "Total Cost of Ownership Optimization",
      category: "Cost Reduction Programs",
      client: "Automotive Parts Manufacturer",
      description: "Comprehensive TCO analysis revealed hidden costs, delivering 20% total spend reduction across categories.",
      image: "/assets/30783373D.webp",
      duration: "5 months",
      savings: "$15.3M",
      date: "2023"
    },
    {
      id: 6,
      title: "Emergency Procurement Stabilization",
      category: "Interim Leadership",
      client: "Healthcare Systems Group",
      description: "Rapid response to supply chain crisis, securing critical supplies and implementing risk mitigation strategies.",
      image: "/assets/istockphoto-1773073538-612x612.webp",
      duration: "3 months",
      savings: "$4.1M",
      date: "2023"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Real results from our procurement and sourcing engagements across manufacturing, healthcare, and technology sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Explore our portfolio of successful procurement transformations, cost reduction initiatives, and supply chain optimizations. 
              Each case study demonstrates our proven approach to delivering measurable results and sustainable value.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
            <p className="text-lg text-gray-600">Proven results across industries and procurement challenges</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="group bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {study.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <ArrowRight className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{study.date}</span>
                    <span>•</span>
                    <Clock className="w-4 h-4" />
                    <span>{study.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {study.title}
                  </h3>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Building2 className="w-4 h-4" />
                    <span>{study.client}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.description}
                  </p>

                  {/* Results */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-600">{study.savings}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">Success</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              <span>Show More Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cumulative Impact</h2>
            <p className="text-lg text-gray-600">Our case studies demonstrate consistent, measurable results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group p-6 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-red-600 mb-2 group-hover:scale-110 transition-transform">$55M+</div>
              <p className="text-gray-600">Total Savings Delivered</p>
            </div>
            <div className="group p-6 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-red-600 mb-2 group-hover:scale-110 transition-transform">50+</div>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div className="group p-6 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-red-600 mb-2 group-hover:scale-110 transition-transform">18%</div>
              <p className="text-gray-600">Average Cost Reduction</p>
            </div>
            <div className="group p-6 rounded-lg hover:bg-gray-50 transition-all duration-300">
              <div className="text-4xl font-extrabold text-red-600 mb-2 group-hover:scale-110 transition-transform">6:1</div>
              <p className="text-gray-600">Average ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-red-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help you achieve similar results. Our proven methodologies and deep industry expertise 
            can transform your procurement function into a competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services" 
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}