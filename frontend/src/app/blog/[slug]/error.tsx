"use client"

import { useEffect } from "react"
import Link from "next/link"
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react"

export default function BlogPostError({
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
    <div className="py-12">
      <div className="container-custom">
        <Link href="/blog" className="flex items-center gap-2 text-primary hover:underline mb-8 animate-fade-in">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all posts</span>
        </Link>

        <div className="bg-white rounded-xl shadow-md p-12 text-center animate-zoom-in">
          <div className="bg-red-50 p-4 rounded-full mx-auto w-fit mb-6">
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Error Loading Blog Post</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We encountered an error while trying to load this blog post. Please try again later.
          </p>
          <button
            onClick={reset}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors mx-auto"
          >
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
        </div>
      </div>
    </div>
  )
}
