import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { getPaginatedBlogPosts } from "@/data/blog-posts"
import Pagination from "@/components/pagination"
import { Suspense } from "react"
import { BlogPostCardSkeleton } from "@/components/skeletons"

interface BlogPageProps {
  searchParams: {
    page?: string
  }
}

export const metadata = {
  title: "Blog | Data Engineer Portfolio",
  description:
    "Insights, tutorials, and best practices on data engineering, big data technologies, and analytics solutions.",
  openGraph: {
    title: "Data Engineering Blog",
    description:
      "Insights, tutorials, and best practices on data engineering, big data technologies, and analytics solutions.",
    images: [
      {
        url: "/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Data Engineering Blog",
      },
    ],
  },
}

function BlogPosts({ page = 1 }: { page: number }) {
  const { data: blogPosts, pagination } = getPaginatedBlogPosts(page)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:scale-[1.02] hover:shadow-lg animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="relative h-48">
              <div className="absolute top-0 right-0 bg-primary text-white text-sm px-3 py-1 rounded-bl-lg z-10">
                {post.category}
              </div>
              <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex items-center text-primary font-medium">
                <span>Read article</span>
                <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination component */}
      <Pagination totalPages={pagination.totalPages} currentPage={pagination.currentPage} />

      {/* Pagination info */}
      <div className="text-center text-gray-500 mt-4 animate-fade-in" style={{ animationDelay: "0.5s" }}>
        Showing {(pagination.currentPage - 1) * pagination.pageSize + 1} to{" "}
        {Math.min(pagination.currentPage * pagination.pageSize, pagination.total)} of {pagination.total} posts
      </div>
    </>
  )
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  // Get the current page from the URL query parameters
  const currentPage = searchParams.page ? Number.parseInt(searchParams.page) : 1

  return (
    <div className="py-12 md:py-20">
      <div className="container-custom">
        <div className="mb-12 animate-fade-in">
          <Link href="/" className="flex items-center gap-2 text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Data Engineering Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Insights, tutorials, and best practices on data engineering, big data technologies, and analytics.
          </p>
        </div>

        <Suspense
          fallback={
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <BlogPostCardSkeleton key={`skeleton-${i}`} />
                ))}
            </div>
          }
        >
          <BlogPosts page={currentPage} />
        </Suspense>
      </div>
    </div>
  )
}
