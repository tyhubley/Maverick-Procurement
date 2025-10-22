import Link from "next/link"
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-red-600 text-white mt-20">
      {/* Upper */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Brand + blurb + hours */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/Asset 19@2x.png"
              alt="Maverick"
              className="h-10 w-auto"
            />
          </div>
          <p className="mt-5 text-white/70">
            Excellence decisively with measurable impact. We embed with your team to deliver rapid savings and sustained value.
          </p>

          <div className="mt-8">
            <div className="text-sm font-semibold tracking-wide">OPEN HOURS</div>
            <div className="mt-4 space-y-3 text-white/80">
              <div className="flex items-center justify-between">
                <span>Monday – Friday:</span>
                <span>7AM – 4PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Solutions */}
        <div>
          <h4 className="text-xl font-bold">Our Solutions</h4>
          <ul className="mt-5 space-y-3 text-white/80">
            <li><Link href="/services/mexico-sourcing" className="hover:text-white">Cross-Border Sourcing</Link></li>
            <li><Link href="/services/procurement-transformation" className="hover:text-white">Procurement Transformation</Link></li>
            <li><Link href="/services/cost-reduction" className="hover:text-white">Cost Reduction Programs</Link></li>
            <li><Link href="/services/interim-leadership" className="hover:text-white">Interim Leadership</Link></li>
            <li><Link href="/services/supply-chain-advisory" className="hover:text-white">Supply Chain Advisory</Link></li>
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="grid place-items-center w-10 h-10 rounded bg-white/10 hover:bg-white/20"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Twitter" className="grid place-items-center w-10 h-10 rounded bg-white/10 hover:bg-white/20"><Twitter className="w-4 h-4" /></a>
            <a href="#" aria-label="YouTube" className="grid place-items-center w-10 h-10 rounded bg-white/10 hover:bg-white/20"><Youtube className="w-4 h-4" /></a>
            <a href="#" aria-label="LinkedIn" className="grid place-items-center w-10 h-10 rounded bg-white/10 hover:bg-white/20"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Lower */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70 text-sm">
          <div>© {new Date().getFullYear()} All Rights Reserved by Maverick</div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white">Terms</Link>
            <Link href="#" className="hover:text-white">Policy</Link>
            <Link href="/contact" className="hover:text-white">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


