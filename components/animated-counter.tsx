"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedCounter({ to, duration = 1200, suffix = '' }: { to: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0)
  const ref = useRef<number | null>(null)

  useEffect(() => {
    const start = performance.now()
    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration)
      setValue(Math.floor(progress * to))
      if (progress < 1) {
        ref.current = requestAnimationFrame(tick)
      }
    }
    ref.current = requestAnimationFrame(tick)
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current)
    }
  }, [to, duration])

  return <span>{value}{suffix}</span>
}



