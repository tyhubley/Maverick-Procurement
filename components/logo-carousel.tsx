"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Logo {
  src: string
  alt: string
}

interface LogoCarouselProps {
  logos?: Logo[]
  className?: string
}

// Sample logos array - you can replace this with actual logo imports
const defaultLogos: Logo[] = [
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
  { src: "/assets/Krones_Logo.webp", alt: "Krones Manufacturing" }, // Duplicate for seamless loop
  { src: "/assets/REV-2-Color-logo-with-Tag.png", alt: "REV Manufacturing" }, // Duplicate for seamless loop
]

export function LogoCarousel({ logos = defaultLogos, className = "" }: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Calculate how many logos to show at once based on screen size
  const [logosPerView, setLogosPerView] = useState(6)

  useEffect(() => {
    const updateLogosPerView = () => {
      if (window.innerWidth < 640) {
        setLogosPerView(2) // Mobile: 2 logos
      } else if (window.innerWidth < 1024) {
        setLogosPerView(4) // Tablet: 4 logos
      } else {
        setLogosPerView(6) // Desktop: 6 logos
      }
    }

    updateLogosPerView()
    window.addEventListener('resize', updateLogosPerView)
    return () => window.removeEventListener('resize', updateLogosPerView)
  }, [])

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4) // Only rotate through 4 positions
    }, 2000)

    return () => clearInterval(interval)
  }, [isPaused])

  const handleMouseEnter = () => setIsPaused(true)
  const handleMouseLeave = () => setIsPaused(false)

  // Create a seamless loop by duplicating logos
  const extendedLogos = [...logos, ...logos.slice(0, logosPerView)]

  return (
    <div 
      className={`overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="flex"
        animate={{
          x: `-${currentIndex * (100 / logosPerView)}%`
        }}
        transition={{
          duration: 0.8,
          ease: "easeInOut"
        }}
        style={{
          width: `${(extendedLogos.length / logosPerView) * 100}%`
        }}
      >
        {extendedLogos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
            className="flex-shrink-0 px-4"
            style={{
              width: `${100 / extendedLogos.length}%`
            }}
          >
            <div className="py-6 px-4 text-center bg-white flex items-center justify-center h-24 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-16 w-auto object-contain transition-all duration-300"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                  target.parentElement!.innerHTML = `<span class="text-gray-500 text-sm">${logo.alt}</span>`
                }}
              />
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Optional: Dots indicator for manual control */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}