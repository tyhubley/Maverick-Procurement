import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/professional-business-woman-with-long-brown-hair-i.jpg"
          alt="Professional business consultant"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Red geometric shape */}
      <div className="absolute bottom-0 right-0 z-10">
        <div className="w-96 h-96 bg-red-500 transform rotate-45 translate-x-48 translate-y-48"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Small heading */}
          <p className="text-white/90 text-sm font-medium tracking-wider uppercase mb-6">MEET CONSULTING</p>

          {/* Main heading */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 text-balance">
            Financial Analysis
            <br />
            Developing Meeting.
          </h1>

          {/* CTA Button */}
          <Button
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-medium rounded-md transition-all duration-300"
          >
            Our Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
