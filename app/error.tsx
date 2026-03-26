"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Something went wrong</h1>
      <p className="mt-2 text-gray-600 max-w-md">
        This page hit an error while loading. You can try again or return home.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700"
        >
          Try again
        </button>
        <Link href="/" className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-50">
          Home
        </Link>
      </div>
    </div>
  )
}
