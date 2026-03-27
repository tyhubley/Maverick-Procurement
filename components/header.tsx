"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import { Linkedin, Phone, MapPin, ChevronDown, Menu } from "lucide-react"

const solutionLinks = [
  { href: "/services/mexico-sourcing", label: "Cross-Border Sourcing (Mexico Advantage)" },
  { href: "/services/procurement-transformation", label: "Procurement Transformation for SMBs" },
  { href: "/services/cost-reduction", label: "Cost Reduction & Value Creation" },
  { href: "/services/interim-leadership", label: "Interim Procurement Leadership" },
  { href: "/services/supply-chain-advisory", label: "Supply Chain Advisory" },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-red-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-2 text-sm">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>Milwaukee, WI</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+1.815.791.1727</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/jim-boldrey/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 hover:text-red-200 cursor-pointer transition-colors" />
            </a>
          </div>
        </div>
      </div>

      <div className={`bg-white transition-all duration-300 ${isScrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}
          >
            <div className="flex items-center min-w-0">
              <Link href="/" className="flex items-center gap-3" aria-label="Maverick Home">
                <img
                  src="/Asset 19@2x.png"
                  alt="Maverick Sourcing & Procurement"
                  className="h-10 w-auto"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement
                    if (target.src.indexOf("placeholder-logo.png") === -1) {
                      target.src = "/placeholder-logo.png"
                    }
                  }}
                />
              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-6 xl:gap-8 uppercase tracking-wide text-sm flex-nowrap">
              <Link href="/" className="text-gray-900 hover:text-red-500 font-semibold transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link href="/about-us" className="text-gray-700 hover:text-red-500 font-semibold transition-colors whitespace-nowrap">
                About Us
              </Link>
              <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger
                  className="text-gray-700 hover:text-red-500 font-semibold transition-colors inline-flex items-center gap-1 uppercase whitespace-nowrap"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4 opacity-60" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-80 bg-white border-0 shadow-xl rounded-lg p-4"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="space-y-2">
                    {solutionLinks.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors font-bold text-base"
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/ai-ready-procurement"
                className="text-gray-700 hover:text-red-500 font-semibold transition-colors whitespace-nowrap"
              >
                AI-Ready
              </Link>
              <Link href="/industries" className="text-gray-700 hover:text-red-500 font-semibold transition-colors whitespace-nowrap">
                Industries
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-red-500 font-semibold transition-colors whitespace-nowrap">
                Blog
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-red-500 font-semibold transition-colors whitespace-nowrap">
                Case Studies
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-red-500 font-semibold transition-colors whitespace-nowrap">
                Contact Us
              </Link>
            </nav>

            <div className="flex items-center gap-2 shrink-0">
              <Link href="/contact">
                <Button className="bg-red-500 hover:bg-red-600 text-white px-5 sm:px-7 py-3 rounded-md font-semibold uppercase tracking-wide text-xs sm:text-sm">
                  Get in Touch
                </Button>
              </Link>

              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="md:hidden border-gray-300"
                    aria-label="Open menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[min(100vw-2rem,22rem)] flex flex-col">
                  <SheetHeader className="text-left border-b pb-4">
                    <SheetTitle className="text-lg">Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-1 py-4 overflow-y-auto">
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 text-base font-semibold text-gray-900 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      Home
                    </Link>
                    <Link
                      href="/about-us"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 text-base font-semibold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      About Us
                    </Link>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 px-2 pt-4 pb-1">Solutions</p>
                    {solutionLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-2.5 px-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md pl-4"
                      >
                        {item.label}
                      </Link>
                    ))}
                    <Link
                      href="/ai-ready-procurement"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 text-base font-semibold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      AI-Ready Procurement
                    </Link>
                    <Link
                      href="/industries"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 text-base font-semibold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      Industries
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 text-base font-semibold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      Blog
                    </Link>
                    <Link
                      href="/case-studies"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 text-base font-semibold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      Case Studies
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 px-2 text-base font-semibold text-gray-800 hover:text-red-600 hover:bg-red-50 rounded-md"
                    >
                      Contact Us
                    </Link>
                  </nav>
                  <div className="mt-auto pt-4 border-t">
                    <Link href="/contact" onClick={() => setMobileOpen(false)} className="block">
                      <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold uppercase tracking-wide">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
