import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Phone, MapPin } from "lucide-react"

export function Header() {
  return (
    <header className="relative z-50">
      {/* Top bar with contact info and social links */}
      <div className="bg-gray-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>70342 Avenue of the Moon, California</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+1 2123456789</span>
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
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">CONSUA</span>
              </div>
            </div>

            {/* Navigation menu */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-900 hover:text-red-500 font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium transition-colors">
                Pages
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium transition-colors">
                Services
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium transition-colors">
                Blog
              </a>
              <a href="#" className="text-gray-700 hover:text-red-500 font-medium transition-colors">
                Shop
              </a>
              <Link href="/contact" className="text-gray-700 hover:text-red-500 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md font-medium">
              Get Consultant
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
