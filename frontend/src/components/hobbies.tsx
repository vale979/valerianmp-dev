import Image from "next/image"
import { Mountain, Tent, Timer } from "lucide-react"
import { hobbiesContent } from "@/content/hobbies"

export default function Hobbies() {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Timer":
        return <Timer className="h-6 w-6 text-primary" />
      case "Mountain":
        return <Mountain className="h-6 w-6 text-primary" />
      case "Tent":
        return <Tent className="h-6 w-6 text-primary" />
      default:
        return null
    }
  }

  return (
    <section id="hobbies" className="py-20 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">{hobbiesContent.title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{hobbiesContent.description}</p>

        <div className="space-y-16">
          {hobbiesContent.items.map((hobby, index) => (
            <div
              key={hobby.id}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-full md:w-1/2 relative">
                <div
                  className={`absolute inset-0 bg-primary/10 rounded-xl transform ${index % 2 === 0 ? "rotate-3" : "-rotate-3"
                    }`}
                ></div>
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={hobby.image || "/placeholder.svg"}
                    alt={hobby.title}
                    width={600}
                    height={400}
                    className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">{getIconComponent(hobby.icon)}</div>
                  <h3 className="text-2xl font-bold">{hobby.title}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
