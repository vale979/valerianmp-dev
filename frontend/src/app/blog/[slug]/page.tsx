import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { getBlogPostBySlug } from "@/data/blog-posts"
import { formatDate } from "@/lib/date-utils"
import MarkdownContent from "@/components/markdown-content"
import Script from "next/script"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Format the date for structured data
  const isoDate = new Date(post.date).toISOString()

  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="blog-post-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: isoDate,
            dateModified: isoDate,
            author: {
              "@type": "Person",
              name: post.author.name,
              jobTitle: post.author.title,
            },
            publisher: {
              "@type": "Organization",
              name: "Data Engineer Portfolio",
              logo: {
                "@type": "ImageObject",
                url: "https://data-engineer-portfolio.com/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://data-engineer-portfolio.com/blog/${post.slug}`,
            },
            keywords: post.tags.join(", "),
          }),
        }}
      />

      <div className="py-12">
        <div className="container-custom">
          <Link href="/blog" className="flex items-center gap-2 text-primary hover:underline mb-8 animate-fade-in">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all posts</span>
          </Link>

          <div className="bg-white rounded-xl shadow-md overflow-hidden animate-zoom-in">
            <div className="relative h-[400px] w-full">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="inline-block bg-primary text-white text-sm px-3 py-1 rounded-md mb-4 animate-slide-in-left">
                  {post.category}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center gap-2">
                    <Image
                      src={post.author.avatar || "/placeholder.svg"}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{post.author.name}</div>
                      <div className="text-sm text-gray-200">{post.author.title}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex flex-wrap gap-2 mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                {post.tags.map((tag) => (
                  <div
                    key={`tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
                {post.content ? (
                  <MarkdownContent content={post.content} />
                ) : (
                  <p className="text-gray-500 italic">Content not available</p>
                )}
              </div>

              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div
                  className="mt-16 pt-8 border-t border-gray-200 animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {post.relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/blog/${relatedPost.slug}`}
                        className="bg-gray-50 rounded-xl overflow-hidden transition-all hover:scale-[1.02] hover:shadow-md animate-slide-in-right"
                      >
                        <div className="relative h-40">
                          <Image
                            src={relatedPost.coverImage || "/placeholder.svg"}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-bl-lg">
                            {relatedPost.category}
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold mb-2 line-clamp-2">{relatedPost.title}</h4>
                          <p className="text-sm text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
