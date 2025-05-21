"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PaginationProps {
  totalPages: number
  currentPage: number
  baseUrl?: string
}

export default function Pagination({ totalPages, currentPage, baseUrl }: PaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Create a new URLSearchParams object to manipulate
  const createPageUrl = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", pageNumber.toString())
    return `${baseUrl || pathname}?${params.toString()}`
  }

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = []
    const maxPagesToShow = 5

    if (totalPages <= maxPagesToShow) {
      // Show all pages if there are fewer than maxPagesToShow
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always include first page
      pages.push(1)

      // Calculate start and end of page range
      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      // Adjust if at the beginning
      if (currentPage <= 2) {
        end = 4
      }

      // Adjust if at the end
      if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      // Add ellipsis after first page if needed
      if (start > 2) {
        pages.push(-1) // -1 represents ellipsis
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pages.push(-2) // -2 represents ellipsis
      }

      // Always include last page
      pages.push(totalPages)
    }

    return pages
  }

  if (totalPages <= 1) return null

  return (
    <nav className="flex justify-center mt-12" aria-label="Pagination">
      <ul className="flex items-center gap-1">
        {/* Previous page button */}
        <li>
          <Link
            href={currentPage > 1 ? createPageUrl(currentPage - 1) : "#"}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-md",
              currentPage > 1 ? "hover:bg-gray-100" : "opacity-50 cursor-not-allowed",
            )}
            aria-disabled={currentPage <= 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
        </li>

        {/* Page numbers */}
        {getPageNumbers().map((pageNumber, index) => (
          <li key={index}>
            {pageNumber < 0 ? (
              <span className="flex items-center justify-center w-10 h-10">...</span>
            ) : (
              <Link
                href={createPageUrl(pageNumber)}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-md",
                  pageNumber === currentPage ? "bg-primary text-white font-medium" : "hover:bg-gray-100",
                )}
                aria-current={pageNumber === currentPage ? "page" : undefined}
              >
                {pageNumber}
              </Link>
            )}
          </li>
        ))}

        {/* Next page button */}
        <li>
          <Link
            href={currentPage < totalPages ? createPageUrl(currentPage + 1) : "#"}
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-md",
              currentPage < totalPages ? "hover:bg-gray-100" : "opacity-50 cursor-not-allowed",
            )}
            aria-disabled={currentPage >= totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
