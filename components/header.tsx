"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { Facebook, Twitter, Linkedin, Instagram, Phone, MapPin, ChevronDown } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar with contact info and social links */}
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Milwaukee, WI</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1.815.791.1727</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Facebook className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
            <Twitter className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
            <Linkedin className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
            <Instagram className="w-4 h-4 hover:text-red-500 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-3" aria-label="Maverick Home">
                <img
                  src="/Asset 19@2x.png"
                  alt="Maverick Sourcing & Procurement"
                  className="h-10 w-auto"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    if (target.src.indexOf('placeholder-logo.png') === -1) {
                      target.src = '/placeholder-logo.png'
                    }
                  }}
                />
              </Link>
            </div>

            {/* Navigation menu */}
            <nav className="hidden md:flex items-center gap-8 uppercase tracking-wide text-sm">
              <Link href="/" className="text-gray-900 hover:text-red-500 font-semibold transition-colors">
                Home
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-red-500 font-semibold transition-colors">
                About Us
              </Link>
              <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger
                  className="text-gray-700 hover:text-red-500 font-semibold transition-colors inline-flex items-center gap-1 uppercase"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span>SOLUTIONS</span>
                  <ChevronDown className="w-4 h-4 opacity-60" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-80 bg-white border-0 shadow-xl rounded-lg p-4"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="space-y-2">
                    <DropdownMenuItem asChild>
                      <Link href="/services/mexico-sourcing" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-bold text-base">
                        Cross-Border Sourcing (Mexico Advantage)
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services/procurement-transformation" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-bold text-base">
                        Procurement Transformation for SMBs
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services/cost-reduction" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-bold text-base">
                        Cost Reduction & Value Creation
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services/interim-leadership" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-bold text-base">
                        Interim Procurement Leadership
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services/supply-chain-advisory" className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-bold text-base">
                        Supply Chain Advisory
                      </Link>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/industries" className="text-gray-700 hover:text-red-500 font-semibold transition-colors">
                Industries
              </Link>
              <Link href="/resources" className="text-gray-700 hover:text-red-500 font-semibold transition-colors">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-500 font-semibold transition-colors">
                Contact Us
              </Link>
            </nav>

            {/* CTA Button */}
            <Button className="bg-red-500 hover:bg-red-600 text-white px-7 py-3 rounded-md font-semibold uppercase tracking-wide">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
