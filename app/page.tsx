"use client"

import { HeroSection } from "@/components/hero-section"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { Award, Globe } from "lucide-react"
import { InteractiveServiceGrid } from "@/components/interactive-service-grid"
import { LogoCarousel } from "@/components/logo-carousel"
import { useState, useEffect } from "react"

// HomepageServiceLink component
function HomepageServiceLink({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`group relative block p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg ${
        active 
          ? 'border-red-500 bg-red-50' 
          : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`font-semibold ${active ? 'text-red-600' : 'text-gray-700 group-hover:text-red-600'}`}>
          {children}
        </span>
        <div className={`w-2 h-2 rounded-full transition-colors ${
          active ? 'bg-red-500' : 'bg-gray-300 group-hover:bg-red-500'
        }`} />
      </div>
    </Link>
  )
}

// InteractiveServiceLink component
function InteractiveServiceLink({ href, service, children }: { href: string; service: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      data-service={service}
      className="block py-3 px-4 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 transition-all duration-300 font-medium"
    >
      {children}
    </Link>
  )
}

export default function HomePage() {
  const logos = [
    { src: "/assets/Krones_Logo.webp", alt: "Krones Manufacturing" },
    { src: "/assets/REV-2-Color-logo-with-Tag.png", alt: "REV Manufacturing" },
    { src: "/assets/MTI-Logo-400-x-150.webp", alt: "MTI Manufacturing" },
    { src: "/assets/fecon.png?v=2", alt: "Fecon Logo" },
    { src: "/assets/Catalyst-Logo.webp?v=2", alt: "Catalyst Logo" },
    { src: "/assets/Logo_Schwing_Group.svg.png?v=2", alt: "Schwing Group" },
    { src: "/Konecranes-Logo.wine.png", alt: "Konecranes" },
    { src: "/logos/latitude_corp_logo.jpeg", alt: "Latitude Corp" },
    { src: "/1abc1b9d-ca36-48e3-8285-a70084bcfe79.png", alt: "Partner Logo" },
    { src: "/646f53cfa64f42e6c9164509_sastrify_logo.webp", alt: "Sastrify" },
  ]

  const testimonials = [
    {
      quote: "What impressed me most about working with Jim and Maverick Procurement was how quickly he became a trusted partner. He took the time to understand our challenges in sourcing, then brought forward creative solutions that delivered savings and long-term value. Jim's 'Maverick' mindset — challenging the status quo and driving results — was exactly what we needed. I would gladly recommend him to any company looking to turn procurement into a competitive advantage.",
      author: "Mindy Rapp",
      role: "Chief Operating Officer",
      image: "/5 (1).png",
    },
    {
      quote: "If you need support on a sourcing project, education, realignment, AltaLink offers a variety of strategic initiatives and alignment within your organization. They have the ability to drive change in sourcing and purchasing downstream as well as communicate to the C-Suite. They adapt to your company culture (act as an employee), represent your company as if they were a full-time employee, and willing to visit vendors to drive positive change (including the hard negotiations).",
      author: "Dennis Marcotte",
      role: "Director, Global Supply Chain",
      image: "/5 (1).png", // Using same placeholder image
    }
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Feel Valued & Rewarded section (clone-like) */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left copy */}
          <ScrollReveal>
            <div>
              <p className="text-sm uppercase tracking-widest"><span className="text-red-600">Feel</span> <span className="text-fuchsia-600">Valued</span> & <span className="text-indigo-600">Rewarded</span></p>
              <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Let's uncover your hidden savings.
              </h2>
              <p className="mt-4 text-lg font-semibold text-gray-900">Proven. Bottom Line. Impact.</p>
              <p className="mt-4 text-gray-600 max-w-2xl">
                15+ years driving multimillion-dollar savings in manufacturing supply chains.
              </p>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Average 12–25% savings achieved in the first 90 days.
              </p>
              <p className="mt-2 text-gray-600 max-w-2xl">
                From cost centers to profit engines.
              </p>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Delivering measurable savings — fast.
              </p>
              <p className="mt-2 text-gray-600 max-w-2xl">
                We make procurement a growth lever, not just a function.
              </p>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="font-semibold text-gray-900">Jim Boldrey</div>
                  <div className="text-sm text-gray-600">CEO & Founder</div>
                </div>
                <div className="h-10 w-40 border-b border-gray-300" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right image with overlay stats card */}
          <ScrollReveal delay={200}>
            <div className="relative group">
              <img 
                src="/assets/istockphoto-1413761479-612x612.jpg" 
                alt="Consulting" 
                className="w-full h-[420px] object-cover rounded-md transition-transform duration-700 group-hover:scale-105" 
              />

              {/* Decorative slashes with animation */}
              <div className="hidden md:block absolute -right-8 bottom-6 w-40 h-1 bg-red-600 rotate-45 animate-pulse" />
              <div className="hidden md:block absolute right-4 bottom-2 w-40 h-1 bg-purple-500 rotate-45 animate-pulse" style={{animationDelay: '0.5s'}} />
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* KPIs / Results */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 rounded-full opacity-30 animate-bounce" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <ScrollReveal>
            <div className="group p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors">$<AnimatedCounter to={52} suffix="M" /></p>
              <p className="text-gray-600 mt-1">Savings delivered</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="group p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors">-10% / -30%</p>
              <p className="text-gray-600 mt-1">Landed vs Asia / US+EU</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="group p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors"><AnimatedCounter to={6} suffix=":1" /></p>
              <p className="text-gray-600 mt-1">ROI</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <div className="group p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300">
              <p className="text-4xl font-extrabold text-gray-900 group-hover:text-red-600 transition-colors"><AnimatedCounter to={4} suffix="x" /></p>
              <p className="text-gray-600 mt-1">Faster implementation</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we do / Services (homepage) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left services card */}
            <div className="bg-white rounded-xl shadow-sm border p-8 relative">
              <p className="text-sm uppercase tracking-widest text-blue-600 mb-2">What we do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Excellent service and support for you</h2>
              <div className="space-y-4">
                <InteractiveServiceLink href="/services/mexico-sourcing" service="mexico-sourcing">Cross-Border Sourcing</InteractiveServiceLink>
                <InteractiveServiceLink href="/services/procurement-transformation" service="procurement-transformation">Procurement Transformation</InteractiveServiceLink>
                <InteractiveServiceLink href="/services/cost-reduction" service="cost-reduction">Cost Reduction Programs</InteractiveServiceLink>
                <InteractiveServiceLink href="/services/interim-leadership" service="interim-leadership">Interim Leadership</InteractiveServiceLink>
                <InteractiveServiceLink href="/services/supply-chain-advisory" service="supply-chain-advisory">Supply Chain Advisory</InteractiveServiceLink>
              </div>
            </div>

            {/* Right side - Interactive Service features */}
            <div className="lg:col-span-1">
              <InteractiveServiceGrid />
            </div>
          </div>
        </div>
      </section>

      {/* Partners / Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-center text-gray-500 uppercase tracking-widest">Trusted by teams at</h3>
          <div className="mt-6">
            <LogoCarousel logos={logos} />
          </div>
        </div>
      </section>


      {/* Maverick Sourcing & Procurement (Our Process clone) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm uppercase tracking-widest text-red-600">Our Process</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900">Maverick Sourcing & Procurement</h2>
          <div className="mt-3 h-1 w-12 bg-red-600 rounded-full" />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 01 */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-sm">
                <img src="/assets/baad75259be04b6bb4c88daebe500b308865c92b-1600x1067.webp" alt="Step 01" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-7 text-5xl md:text-6xl font-extrabold text-white/90">01</div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Optimize Operational Efficiency</h3>
              <p className="mt-3 text-gray-600 max-w-sm mx-auto">
                Streamline workflows and eliminate bottlenecks with tailored process improvements designed to accelerate your business. From plant floors to executive dashboards, we drive measurable gains in efficiency.
              </p>
              <div className="h-px bg-gray-200 w-4/5 mx-auto mt-8" />
            </div>

            {/* Step 02 */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-sm">
                <img src="/assets/22-528581_What-does-a-supply-chain-manager-do_1000x568-1.webp" alt="Step 02" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-7 text-5xl md:text-6xl font-extrabold text-white/90">02</div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Strengthen Sourcing & Supply Chain</h3>
              <p className="mt-3 text-gray-600 max-w-sm mx-auto">
                Enhance supplier performance, reduce costs, and build resilient sourcing strategies with our experienced professionals. We embed with your team to ensure sourcing is not just efficient, but strategically aligned.
              </p>
              <div className="h-px bg-gray-200 w-4/5 mx-auto mt-8" />
            </div>

            {/* Step 03 */}
            <div className="text-center">
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-sm">
                <img src="/assets/man-business-shaking-hands-office-600nw-2475095349 (1).webp" alt="Step 03" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-7 text-5xl md:text-6xl font-extrabold text-white/90">03</div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">Deliver Sustainable Bottom-Line Impact</h3>
              <p className="mt-3 text-gray-600 max-w-sm mx-auto">
                Transform logistics and operations into profit centers with proven frameworks for execution. Our focus is direct financial impact — improved margins, reduced waste, and long-term value creation.
              </p>
              <div className="h-px bg-gray-200 w-4/5 mx-auto mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Be at the forefront / Features */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white relative z-10">
            {/* Decorative shapes */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white transform rotate-45"></div>
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-300 transform rotate-45"></div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Be at the forefront of the new innovation
            </h1>
            
            {/* First feature block */}
            <div className="mb-8">
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-white mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Maverick Procurement Solutions</h3>
                  <p className="text-red-100 text-lg leading-relaxed">
                    Driving measurable savings through data-driven sourcing and supplier development. We connect businesses to reliable partners, streamline procurement, and unlock growth across borders.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Second feature block */}
            <div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-white mt-2"></div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">24/7 Procurement Support</h3>
                  <p className="text-red-100 text-lg leading-relaxed">
                    Our global team ensures your supply chain never stops. From cost benchmarking to logistics management, we provide real-time assistance and end-to-end procurement visibility — whenever and wherever you need it.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Logo */}
          <div className="relative flex justify-center items-center">
            <img
              src="/assets/Hype-Innovation-Holistic-approach-to-innovation-consulting.jpg"
              alt="Maverick Procurement Innovation"
              className="w-auto h-[500px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* Testimonial section */}
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
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
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
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>

                  {/* Separator line */}
                  <div className="w-full h-px bg-gray-300 mb-4"></div>

                  {/* Attribution with large quote mark */}
                  <div className="flex items-center gap-4">
                    <div className="text-6xl text-red-500 font-bold">"</div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].author}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner (moved above footer) */}
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
            </div>
          </div>

          {/* Right stats */}
          <div className="flex flex-col gap-10 lg:pl-16">
            <div className="flex items-center gap-6">
              <div className="grid place-items-center w-16 h-16 rounded-md bg-white/10 border border-white/20 text-white text-3xl">+</div>
              <div>
                <div className="text-5xl font-extrabold">500+</div>
                <div className="text-white/90">Business advices given over 15 years</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

function ServiceTile({ href, title, description, icon, delay = 0 }: { href: string; title: string; description: string; icon: 'bag' | 'settings' | 'chart' | 'users' | 'globe'; delay?: number }) {
  const iconEl = icon === 'bag' ? (
    <span className="w-10 h-10 rounded-md border border-red-200 text-red-600 grid place-items-center">📋</span>
  ) : icon === 'settings' ? (
    <span className="w-10 h-10 rounded-md border border-red-200 text-red-600 grid place-items-center">⚙</span>
  ) : icon === 'chart' ? (
    <span className="w-10 h-10 rounded-md border border-red-200 text-red-600 grid place-items-center">📊</span>
  ) : icon === 'users' ? (
    <span className="w-10 h-10 rounded-md border border-red-200 text-red-600 grid place-items-center">👤</span>
  ) : (
    <span className="w-10 h-10 rounded-md border border-red-200 text-red-600 grid place-items-center">🌍</span>
  )

  return (
    <ScrollReveal delay={delay}>
      <Link
        href={href}
        className="group block bg-white border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <div className="flex items-center gap-4">
          {iconEl}
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">{title}</h3>
        </div>
        <p className="text-gray-600 mt-3">{description}</p>
      </Link>
    </ScrollReveal>
  )
}


export function ServiceFeature({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="group block p-6 bg-white rounded-lg border hover:shadow-lg transition-all duration-300 h-full">
      <div className="text-red-600 text-3xl mb-4">•</div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </Link>
  )
}

function LogoBox({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="py-6 px-4 text-center bg-white flex items-center justify-center h-24">
      <img 
        src={src} 
        alt={alt} 
        className="max-h-16 w-auto object-contain"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement
          target.style.display = 'none'
          target.parentElement!.innerHTML = `<span class="text-gray-500 text-sm">${alt}</span>`
        }}
      />
    </div>
  )
}

function ProcessCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <div className="text-red-600 font-bold">{step}</div>
      <h3 className="text-xl font-semibold text-gray-900 mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="border rounded-lg p-6 bg-gray-50">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  )
}

function TeamCard({ role, summary }: { role: string; summary: string }) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <div className="w-16 h-16 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-semibold">{role.substring(0,1)}</div>
      <h4 className="text-lg font-semibold text-gray-900 mt-3">{role}</h4>
      <p className="text-gray-600 mt-1">{summary}</p>
    </div>
  )
}


function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <p className="text-gray-800 text-lg">“{quote}”</p>
      <div className="mt-4">
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-gray-600 text-sm">{role}</div>
      </div>
    </div>
  )
}

function BlogCard({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="border rounded-lg p-6 bg-white">
      <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 mt-2">{summary}</p>
      <span className="text-red-600 font-medium inline-block mt-4">Read More →</span>
    </div>
  )
}


