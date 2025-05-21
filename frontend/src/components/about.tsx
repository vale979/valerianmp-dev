import Image from "next/image"
import { Briefcase, GraduationCap } from "lucide-react"
import { aboutContent } from "@/content/about"

export default function About() {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Briefcase":
        return <Briefcase className="h-8 w-8 text-primary mb-2" />
      case "GraduationCap":
        return <GraduationCap className="h-8 w-8 text-primary mb-2" />
      default:
        return null
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">{aboutContent.title}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="prose max-w-none space-y-6">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={`about-paragraph-${paragraph.substring(0, 20)}`} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {aboutContent.stats.map((stat) => (
                  <div
                    key={`stat-${stat.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="flex flex-col items-center p-4 bg-gray-50 rounded-lg"
                  >
                    {getIconComponent(stat.icon)}
                    <h3 className="font-bold text-lg">{stat.title}</h3>
                    <p className="text-center">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-xl transform rotate-3"></div>
              <div className="absolute -inset-4 bg-accent/10 rounded-xl transform -rotate-3"></div>
              <div className="relative">
                <Image
                  src={aboutContent.image.src || "/placeholder.svg"}
                  alt={aboutContent.image.alt}
                  width={400}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
