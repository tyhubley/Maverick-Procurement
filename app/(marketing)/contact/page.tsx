"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)
    setSubmitting(true)
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      phone: (() => {
        const v = String(formData.get("phone") ?? "").trim()
        return v || undefined
      })(),
      company: (() => {
        const v = String(formData.get("company") ?? "").trim()
        return v || undefined
      })(),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const data = (await res.json().catch(() => ({}))) as { error?: string }

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.")
        return
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">

      {/* Page banner */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0">
          <div className="w-64 h-64 bg-red-500/10 rotate-45 absolute -right-24 -top-24" />
          <div className="w-80 h-80 bg-red-500/10 rotate-45 absolute right-10 top-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get in touch!</h1>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Supply Chain Service and Mexico Sourcing — Contact us using the form or details below.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact details */}
          <div className="lg:col-span-1">
            <div className="p-8 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
              <p className="mt-2 text-gray-600">
                We typically respond within 1 business day.
              </p>
              <div className="mt-6 space-y-4 text-gray-700">
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Address</p>
                  <p className="mt-1">Milwaukee, WI</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Telephone</p>
                  <p className="mt-1">+1.815.791.1727</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-500">Website</p>
                  <a href="https://www.maverickprocure.com/" target="_blank" rel="noreferrer" className="mt-1 text-red-600 hover:text-red-700">maverickprocure.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="p-8 rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Send us a message</h2>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <Input name="name" placeholder="Your name" required className="mt-2" disabled={submitting} />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" name="email" placeholder="you@example.com" required className="mt-2" disabled={submitting} />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea name="message" placeholder="How can we help?" rows={6} required className="mt-2" disabled={submitting} />
                  </div>
                  {error ? (
                    <div className="md:col-span-2">
                      <p className="text-sm text-red-600" role="alert">
                        {error}
                      </p>
                    </div>
                  ) : null}
                  <div className="md:col-span-2">
                    <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white" disabled={submitting}>
                      {submitting ? "Sending…" : "Submit"}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="mt-6 rounded-md bg-green-50 p-4 border border-green-200">
                  <p className="font-medium text-green-900">Thank you. We will be in touch shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-500">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
          </div>
          <div className="flex justify-center">
            <div className="max-w-4xl bg-white rounded-lg p-8 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Left side - Circular photo with pointing finger */}
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-red-500 relative">
                    <img 
                      src="/5 (1).png" 
                      alt="Mindy Rapp" 
                      className="w-full h-full object-cover"
                    />
                    {/* Pointing finger with dashed lines */}
                    <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">→</span>
                      </div>
                      {/* Dashed lines */}
                      <div className="absolute right-6 top-1/2 w-16 h-0.5 bg-red-500 opacity-60" style={{
                        backgroundImage: 'repeating-linear-gradient(to right, #ef4444 0, #ef4444 4px, transparent 4px, transparent 8px)'
                      }}></div>
                    </div>
                  </div>
                </div>

                {/* Right side - Testimonial content */}
                <div className="flex-1">
                  {/* 5 stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-red-500 text-xl">★</span>
                    ))}
                  </div>

                  {/* Testimonial title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted Partnership & Results</h3>

                  {/* Testimonial quote */}
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "What impressed me most about working with Jim and Maverick Procurement was how quickly he became a trusted partner. He took the time to understand our challenges in sourcing, then brought forward creative solutions that delivered savings and long-term value. Jim's 'Maverick' mindset — challenging the status quo and driving results — was exactly what we needed. I would gladly recommend him to any company looking to turn procurement into a competitive advantage."
                  </blockquote>

                  {/* Separator line */}
                  <div className="w-full h-px bg-gray-300 mb-4"></div>

                  {/* Attribution with large quote mark */}
                  <div className="flex items-center gap-4">
                    <div className="text-6xl text-red-500 font-bold">"</div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Mindy Rapp</div>
                      <div className="text-gray-600">Chief Operating Officer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-gray-500">Our Coverage</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Mexico Sourcing Focus</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Our primary focus is Mexico sourcing and cross-border supply chain optimization, serving clients across North America with specialized expertise.
            </p>
          </div>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282516.5!2d-100.0!3d25.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDAwJzAwLjAiTiAxMDDCsDAwJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mexico Sourcing Coverage Map"
            />
          </div>
        </div>
      </section>
    </div>
  )
}


