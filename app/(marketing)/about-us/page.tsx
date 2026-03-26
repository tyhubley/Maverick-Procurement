import Link from "next/link"
import { Award, Globe, Users, Target, CheckCircle, ArrowRight, Search, Handshake, Settings, MapPin } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Banner */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-red-100">The Maverick Mindset</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Maverick Mindset</h2>
                  <p className="text-lg text-gray-600 mt-2">15 Years experience</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                At Maverick Procurement, we believe procurement should be more than paperwork and price checks — it's a strategic advantage.
                We exist to help businesses source smarter, save stronger, and operate without borders.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Our team blends deep procurement expertise with on-the-ground sourcing experience across Mexico, the U.S., and Asia, helping clients unlock measurable savings while building long-term supply resilience.
                We're not consultants who just advise — we execute, negotiate, and deliver results that hit your bottom line.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <img 
                src="/assets/IMG_1007-1200x800 (1).webp" 
                alt="Maverick Procurement Team" 
                className="w-full h-[500px] object-cover rounded-lg shadow-lg" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Maverick was founded by procurement professionals who saw the gap between traditional consulting and real-world execution.
              Too often, businesses were handed PowerPoint strategies without the tactical support to make them real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">We Built Maverick to Change That</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Combining corporate procurement best practices with hands-on supplier development, giving small and mid-sized businesses the same global reach and cost leverage as Fortune 500 companies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                From cross-border sourcing in Mexico to transforming procurement teams across North America, our mission is simple:
                turn procurement into a profit center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clarity Over Complexity</h3>
              <p className="text-gray-600">
                We cut through noise and deliver transparent insights that drive confident decisions.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership First</h3>
              <p className="text-gray-600">
                We operate as an extension of your team — not outsiders with a slide deck.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Execution Excellence</h3>
              <p className="text-gray-600">
                Strategy means nothing without results. We measure success in real savings, improved performance, and stronger supplier relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach, Local Touch</h3>
              <p className="text-gray-600">
                With bilingual experts across Mexico and the U.S., we bridge cultures and compliance with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our team is made up of procurement strategists, sourcing specialists, and supply chain operators with experience leading initiatives for global manufacturers, CPG brands, and industrial companies.
              We're data-driven negotiators, pragmatic problem solvers, and relentless cost hunters — unified by one goal: helping you buy better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Procurement Strategists</h3>
              <p className="text-gray-600">
                Deep expertise in category management, supplier development, and cost optimization strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sourcing Specialists</h3>
              <p className="text-gray-600">
                On-the-ground experience across Mexico, the U.S., and Asia with proven supplier networks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Supply Chain Operators</h3>
              <p className="text-gray-600">
                Hands-on experience managing complex supply chains and implementing operational improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Redefine Procurement Together</h2>
          <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto">
            Whether you need to build a world-class procurement function, tap into Mexico's supplier base, or find hidden savings in your current spend, Maverick is the partner that makes it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-lg"
            >
              Get in Touch
            </Link>
            <a
              href="/maverick_sell_sheet_evergreen.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-red-100 underline underline-offset-4 hover:text-white"
            >
              Download Maverick Sell Sheet
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}