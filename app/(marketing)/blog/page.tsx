import Link from "next/link"
import { Calendar, User, Eye, ArrowRight, Search } from "lucide-react"
import { getBlogPostsForIndex } from "@/lib/blog-posts"

export default function BlogPage() {
  const blogPosts = getBlogPostsForIndex()

  const categories = [
    "Sourcing Strategy",
    "Procurement Transformation",
    "Cost Reduction",
    "Supply Chain Management",
    "Mexico Manufacturing",
  ]

  return (
    <div className="min-h-screen bg-white">
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {blogPosts.map((blogPost) => (
                <Link
                  key={blogPost.slug}
                  href={`/blog/${blogPost.slug}`}
                  className="group block bg-white rounded-lg shadow-lg overflow-hidden mb-8 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:ring-1 hover:ring-red-200"
                >
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

                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span>{blogPost.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4 shrink-0" />
                        <span>{blogPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4 shrink-0" />
                        <span>{blogPost.views} Views</span>
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{blogPost.title}</h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">{blogPost.excerpt}</p>

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

                    <span className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold group-hover:bg-red-700 transition-colors">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              ))}

              <div className="flex justify-center items-center gap-4">
                <button type="button" className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  Previous
                </button>
                <span className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold">1</span>
                <button type="button" className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  Next
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
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

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.slug} className="border-b border-gray-200 pb-4 last:border-b-0">
                        <Link href={`/blog/${post.slug}`} className="block hover:text-red-600 transition-colors">
                          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{post.title}</h4>
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
