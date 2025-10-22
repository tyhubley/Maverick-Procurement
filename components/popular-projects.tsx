"use client"

import { useEffect, useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import Link from "next/link"

type Project = {
  tag: string
  title: string
  description: string
  href: string
  image: string
}

const projects: Project[] = [
  {
    tag: "Strategy",
    title: "Mexico sourcing program",
    description:
      "Launched supplier network, achieved consistent -10% landed vs Asia and -30% vs US/EU, with on-the-ground management.",
    href: "/services/mexico-sourcing",
    image: "/placeholder.jpg",
  },
  {
    tag: "Partnership",
    title: "Procurement operating model redesign",
    description:
      "Assessed and rebuilt SMB procurement processes with category playbooks and compliance frameworks.",
    href: "/services/procurement-transformation",
    image: "/placeholder-user.jpg",
  },
]

export function PopularProjects() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!api) return
    const handler = () => setIndex(api.selectedScrollSnap())
    handler()
    api.on("select", handler)
    api.on("reInit", handler)
    return () => {
      api.off("select", handler)
      api.off("reInit", handler)
    }
  }, [api])

  return (
    <section className="py-20 bg-[#1f242b] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <Carousel setApi={setApi} opts={{ loop: true }}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-fuchsia-400">Popular Projects</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">Our most recent
                <br className="hidden md:block" /> Completed Projects</h2>
            </div>
            <div className="flex items-center gap-4">
              <CarouselPrevious className="static translate-x-0 translate-y-0 bg-red-600 hover:bg-red-700 text-white border-0" />
              <div className="text-white/90 text-sm w-10 text-center">{index + 1} / {projects.length}</div>
              <CarouselNext className="static translate-x-0 translate-y-0 bg-red-600 hover:bg-red-700 text-white border-0" />
            </div>
          </div>

          <div className="mt-10">
            <CarouselContent>
              {projects.map((p, i) => (
                <CarouselItem key={i}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
                    <div className="relative">
                      <img src={p.image} alt={p.title} className="w-full h-[420px] object-cover rounded-md" />
                    </div>
                    <div className="bg-white text-gray-900 rounded-md p-10 flex flex-col justify-center shadow-sm">
                      <div className="uppercase text-sm tracking-wider text-red-600 font-semibold">{p.tag}</div>
                      <h3 className="text-2xl md:text-3xl font-bold mt-2">{p.title}</h3>
                      <p className="mt-4 text-gray-600">{p.description}</p>
                      <div className="mt-8">
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-3 text-gray-900 font-medium group"
                        >
                          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 group-hover:border-gray-900 transition-colors" />
                          <span className="group-hover:text-red-600 transition-colors">View Project</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  )
}


