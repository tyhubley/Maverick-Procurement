"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page banner */}
      <section className="relative py-20 bg-gray-100">
        <div className="absolute inset-0">
          <div className="w-64 h-64 bg-red-500/10 rotate-45 absolute -right-24 -top-24" />
          <div className="w-80 h-80 bg-red-500/10 rotate-45 absolute right-10 top-10" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get in touch</h1>
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
                  <a href="https://www.altalink-group.com/" target="_blank" rel="noreferrer" className="mt-1 text-red-600 hover:text-red-700">altalink-group.com</a>
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
                    <Input name="name" placeholder="Your name" required className="mt-2" />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <Input type="email" name="email" placeholder="you@example.com" required className="mt-2" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <Textarea name="message" placeholder="How can we help?" rows={6} required className="mt-2" />
                  </div>
                  <div className="md:col-span-2">
                    <Button type="submit" className="bg-red-500 hover:bg-red-600 text-white">Submit</Button>
                  </div>
                </form>
              ) : (
                <div className="mt-6 rounded-md bg-green-50 p-4 border border-green-200">
                  <p className="font-medium text-green-900">Thanks for submitting!</p>
                  <p className="mt-1 text-green-800">We'll be in touch shortly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


