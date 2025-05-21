import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable Data Pipelines with Apache Airflow",
    excerpt:
      "Learn how to design and implement scalable, maintainable data pipelines using Apache Airflow for orchestration.",
    date: "May 15, 2023",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=400",
    url: "/blog/scalable-data-pipelines",
  },
  {
    id: 2,
    title: "Data Mesh Architecture: A Modern Approach to Data Management",
    excerpt: "Explore the data mesh paradigm and how it transforms data architecture by treating data as a product.",
    date: "April 3, 2023",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=400",
    url: "/blog/data-mesh-architecture",
  },
  {
    id: 3,
    title: "Real-time Analytics with Kafka and ksqlDB",
    excerpt:
      "Discover how to build real-time analytics solutions using Kafka streams and ksqlDB for continuous data processing.",
    date: "March 12, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=400",
    url: "/blog/real-time-analytics-kafka",
  },
]

export default function BlogPreview() {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Insights and tutorials on data engineering, big data technologies, and analytics.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={post.url}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
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
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}
