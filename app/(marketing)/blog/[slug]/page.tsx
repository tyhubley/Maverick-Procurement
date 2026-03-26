import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, User, Eye, ArrowLeft, Share2, Tag } from "lucide-react"
import { blogPosts, getPostBySlug, type BlogPost } from "@/lib/blog-posts"

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)
  if (!post) {
    return { title: "Blog" }
  }
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    ...(post.focusKeyword ? { keywords: [post.focusKeyword] } : {}),
  }
}

function renderContent(content: string) {
  return content.split("\n").map((line, index) => {
    if (line.startsWith("## ")) {
      return (
        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          {line.replace("## ", "")}
        </h2>
      )
    }
    if (line.startsWith("### ")) {
      return (
        <h3 key={index} className="text-xl font-bold text-gray-900 mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      )
    }
    if (line.startsWith("- ")) {
      return (
        <li key={index} className="text-gray-700 mb-2 ml-4 list-disc">
          {line.replace("- ", "")}
        </li>
      )
    }
    if (/^\d+\.\s/.test(line)) {
      return (
        <p key={index} className="text-gray-900 font-semibold mt-6 mb-2">
          {line}
        </p>
      )
    }
    if (line.trim() === "") {
      return <br key={index} />
    }
    return (
      <p key={index} className="text-gray-700 leading-relaxed mb-4">
        {line}
      </p>
    )
  })
}

function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-red-100 hover:text-white transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg text-red-100 max-w-4xl mx-auto">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4 shrink-0" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 shrink-0" />
                <span>{post.views} Views</span>
              </div>
            </div>
            <button type="button" className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          <article className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed">{renderContent(post.content)}</div>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-red-100 hover:text-red-700 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                <User className="w-8 h-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">About {post.author}</h3>
                <p className="text-gray-600">
                  {post.authorBio ??
                    "CEO & Founder of Maverick Procurement with 20+ years of experience in procurement transformation, cost reduction, and supply chain optimization. Jim has helped companies across manufacturing, healthcare, and technology sectors achieve measurable savings and operational excellence."}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-red-600 text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Procurement?</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Stop overcomplicating procurement and start winning with it. Let&apos;s discuss how we can help you achieve
              similar results without the politics and complexity.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()
  return <BlogPostView post={post} />
}
