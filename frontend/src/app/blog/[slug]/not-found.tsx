import Link from "next/link"
import { ArrowLeft, Search } from "lucide-react"

export default function BlogPostNotFound() {
  return (
    <div className="py-20">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto animate-zoom-in">
          <div className="bg-gray-100 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <Search className="h-10 w-10 text-gray-500" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The blog post you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all blog posts</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
