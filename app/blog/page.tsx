import Link from "next/link"
import { Calendar, User, Eye, ArrowRight, Search, Tag } from "lucide-react"

export default function BlogPage() {
  const blogPost = {
    id: 1,
    title: "There's No \"BS\" in Procurement: Less Is More for Your Bottom Line",
    excerpt: "Most companies overcomplicate procurement, and it's costing them. I've spent 20 years in procurement, and I can tell you: most businesses have no clue what they're doing. Here's the truth: procurement should be simple, focused, and laser-aligned with ROI.",
    content: "Most companies overcomplicate procurement, and it's costing them.\n\nI've spent 20 years in procurement, and I can tell you: most businesses have no clue what they're doing. I've seen executives throw together clunky \"matrix\" structures because they didn't have the backbone (or the know-how) to build a real procurement function. That trickles down, creating confusion, finger-pointing, and missed savings, while the C-Suite shrugs it off as a \"middle management problem.\"\n\nHere's the truth: procurement should be simple, focused, and laser-aligned with ROI. Done right, procurement isn't a cost center—it's a profit center.\n\n## The Problem With Traditional Procurement\n\nToo many companies waste time on low-value tasks and office politics. Some want procurement for appearances. Others need it but don't know where to start.\n\nBoth paths lead to the same outcome: complexity, disruption, and diluted margins.\n\nAccording to Gartner and Supply Chain Digital, supply disruptions, from natural disasters to transport issues, are the #1 threat to procurement's future success, cited by 42% of procurement leaders as a top concern (Gartner, 2024). Companies can't afford to let bureaucracy make them slower and more vulnerable.\n\n## Procurement as a Precision Tool\n\nProcurement doesn't have to be a sprawling in-house department. It can be lean, strategic, and results-driven.\n\nA focused external partner:\n\n- Minimizes disruption to operations\n- Targets cost inputs with precision\n- Delivers proven ROI (often 300%+ returns)\n- Safeguards continuity while you pursue strategic objectives\n\nIn short: let your business do what it does best, while procurement amplifies your margins behind the scenes.\n\n## Leaders Know This (But Rarely Admit It)\n\nLet's be blunt: fear runs corporate procurement.\n\nLeaders extend vendor contracts because they're afraid suppliers will backslide the second procurement leaves.\n\nThey avoid supplier negotiations because they don't have the stamina for the back-and-forth.\n\nThey tolerate bad procurement functions because challenging the status quo feels risky.\n\nFear is fight-or-flight, and most companies pick flight.\n\nCompanies without procurement want it, and those with procurement often wish it was less invasive. The sweet spot is a model that protects your business without becoming a nuisance.\n\n## Stop Reinventing the Wheel\n\nThe best procurement doesn't force businesses to rebuild communication structures or overhaul operations. Instead, it blends in. Vendors and customers shouldn't notice a thing—except smoother execution and stronger margins.\n\nBut communication is a frequent failure point: 98% of procurement professionals say they need better alignment with their biggest customers (SCMR, 2023). No wonder so many procurement functions turn into roadblocks instead of revenue drivers.\n\n## What Businesses Really Want\n\nBusinesses don't want \"strategic alignment workshops\" or more red tape. They want one thing: better margins without distraction.\n\nProcurement has the potential to deliver exactly that:\n\n- 79% of teams now handle more diverse objectives than they did three years ago (Supply & Demand Chain Executive, 2024).\n- 78% of leaders are confident procurement can manage external risk, a 37% increase over last year, showing its growing role as a strategic partner (SAP/Economist Impact, 2025).\n- At the same time, 86% of procurement professionals report rising workloads, while over half say they have fewer resources to manage them (Solutions Review, 2023).\n\nMost procurement teams are overworked, under-resourced, and still trying to carry the weight of inflation, supply chain shocks, and corporate politics. That's not strategic—that's survival mode.\n\n## Less Is More for Your Bottom Line\n\nProcurement should never be about endless meetings, complex hierarchies, or internal politics. It should be about clear financial impact.\n\nIf you're forcing in-house procurement when you don't need it, you're wasting time, burning cash, and distracting your team. If you want results, you need procurement that works smarter, leaner, and outside the noise.\n\nThat's exactly what we do at Maverick Procurement. We cut through the BS, strip procurement down to its essentials, and deliver measurable savings without disruption. We've been on all sides of the table—corporate, vendor, advisor—and we know how the game is really played.\n\nIf you're ready to boost profits without the politics, it's time to stop overcomplicating procurement and start winning with it. Let's talk.",
    author: "Jim Boldrey",
    date: "December 15, 2024",
    category: "Procurement Strategy",
    views: 1247,
    image: "/assets/mexico-exports-replacing-china-mts.webp",
    tags: ["Procurement Strategy", "Cost Reduction", "ROI", "Business Strategy"]
  }

  const recentPosts = [
    {
      id: 1,
      title: "There's No \"BS\" in Procurement: Less Is More for Your Bottom Line",
      date: "December 15, 2024",
      author: "Jim Boldrey",
      category: "Procurement Strategy"
    }
  ]

  const categories = [
    "Sourcing Strategy",
    "Procurement Transformation", 
    "Cost Reduction",
    "Supply Chain Management",
    "Mexico Manufacturing"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Banner */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Insights, strategies, and expert perspectives on procurement, sourcing, and supply chain optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Blog Content */}
            <div className="lg:col-span-2">
              {/* Single Blog Post */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                {/* Featured Image */}
                <div className="relative">
                  <img
                    src={blogPost.image}
                    alt={blogPost.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blogPost.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blogPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{blogPost.views} Views</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {blogPost.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {blogPost.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-red-100 hover:text-red-700 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <Link
                    href="/blog/procurement-less-is-more"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>

              {/* Pagination */}
              <div className="flex justify-center items-center gap-4">
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  Previous
                </button>
                <span className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold">1</span>
                <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Search</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Recent Posts */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <Link
                          href="/blog/procurement-less-is-more"
                          className="block hover:text-red-600 transition-colors"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="block text-gray-600 hover:text-red-600 transition-colors py-1"
                      >
                        {category}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-red-600 text-white rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-4">Newsletter</h3>
                  <p className="text-red-100 mb-4">
                    Join our subscribers list to get the latest insights and procurement strategies.
                  </p>
                  <form className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-white text-red-600 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
