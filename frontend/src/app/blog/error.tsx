"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, Home, RefreshCw } from "lucide-react"

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="bg-white rounded-xl shadow-md p-12 text-center animate-zoom-in">
          <div className="bg-red-50 p-4 rounded-full mx-auto w-fit mb-6">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Error Loading Blog</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We encountered an error while trying to load the blog. Please try again later.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={reset}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Home className="h-4 w-4" />
              Go home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
