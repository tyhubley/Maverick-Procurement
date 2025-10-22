import Link from "next/link"
import { Download, FileText, Calculator, TrendingUp, BookOpen, Users, BarChart3, Target } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Banner */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Guides, templates, tools, and insights to educate and support procurement and sourcing excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Access our comprehensive library of procurement resources designed to help you optimize your sourcing strategies, 
              reduce costs, and build resilient supply chains. From beginner guides to advanced frameworks, we provide the 
              tools you need to excel in procurement and sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <p className="text-lg text-gray-600">Explore our curated collection of procurement resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Guides */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guides</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step guides covering procurement best practices, sourcing strategies, and implementation frameworks.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Procurement Transformation Guide</li>
                <li>• Mexico Sourcing Playbook</li>
                <li>• Cost Reduction Strategies</li>
                <li>• Supplier Management Best Practices</li>
              </ul>
            </div>

            {/* Templates */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Templates</h3>
              <p className="text-gray-600 mb-6">
                Ready-to-use templates for RFPs, supplier scorecards, cost analysis, and procurement documentation.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• RFP Templates</li>
                <li>• Supplier Scorecards</li>
                <li>• Cost Analysis Sheets</li>
                <li>• Contract Templates</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tools</h3>
              <p className="text-gray-600 mb-6">
                Interactive calculators and assessment tools to evaluate costs, risks, and procurement performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• TCO Calculator</li>
                <li>• Supplier Risk Assessment</li>
                <li>• Cost Savings Tracker</li>
                <li>• Procurement Health Check</li>
              </ul>
            </div>

            {/* Insights */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Insights</h3>
              <p className="text-gray-600 mb-6">
                Market intelligence, industry reports, and expert insights on procurement trends and best practices.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Market Intelligence Reports</li>
                <li>• Industry Benchmarking</li>
                <li>• Trend Analysis</li>
                <li>• Expert Commentary</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Resources</h2>
            <p className="text-lg text-gray-600">Our most popular and impactful resources</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mexico Sourcing Playbook</h3>
                  <p className="text-sm text-gray-600">Comprehensive Guide</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete guide to sourcing from Mexico, including supplier identification, cost analysis, and logistics optimization.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">45 pages • PDF</span>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">TCO Calculator</h3>
                  <p className="text-sm text-gray-600">Interactive Tool</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Calculate total cost of ownership for your sourcing decisions with our comprehensive TCO analysis tool.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Excel Template</span>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">RFP Template Library</h3>
                  <p className="text-sm text-gray-600">Templates</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Professional RFP templates for various categories including direct materials, services, and technology.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">12 Templates</span>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>

            {/* Resource Card 4 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Procurement Benchmarking Report</h3>
                  <p className="text-sm text-gray-600">Industry Report</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive benchmarking data comparing procurement performance across industries and company sizes.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">2024 Report</span>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>

            {/* Resource Card 5 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Supplier Scorecard Template</h3>
                  <p className="text-sm text-gray-600">Assessment Tool</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Standardized scorecard template for evaluating supplier performance across quality, delivery, and cost metrics.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Excel Template</span>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>

            {/* Resource Card 6 */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Procurement Team Training Guide</h3>
                  <p className="text-sm text-gray-600">Training Material</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Complete training curriculum for building procurement capabilities and developing team skills.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Training Module</span>
                <button className="flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated with Latest Resources</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Get access to new guides, templates, and insights as we release them. Join our community of procurement professionals.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Need Custom Resources?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Looking for specific procurement resources tailored to your industry or challenges? Our team can create custom guides, 
            templates, and tools to meet your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all hover:shadow-lg"
            >
              Request Custom Resources
            </Link>
            <Link 
              href="/services" 
              className="inline-block border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all"
            >
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
