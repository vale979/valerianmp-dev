import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { heroContent } from "@/content/hero"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
          <span className="text-primary font-medium">{heroContent.greeting}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">{heroContent.headline}</h1>
          <p className="text-lg md:text-xl text-gray-700">{heroContent.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={heroContent.buttons.primary.href}
              className="btn btn-primary px-6 py-3 rounded-lg flex items-center gap-2"
            >
              {heroContent.buttons.primary.text} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={heroContent.buttons.secondary.href}
              className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg"
            >
              {heroContent.buttons.secondary.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
