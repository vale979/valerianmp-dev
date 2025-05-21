import { Database, Server, Code, Cloud, BarChart, Cpu } from "lucide-react"
import { skillsContent } from "@/content/skills"

export default function Skills() {
  // Function to get the appropriate icon component
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="h-6 w-6 text-primary" />
      case "Database":
        return <Database className="h-6 w-6 text-primary" />
      case "Server":
        return <Server className="h-6 w-6 text-primary" />
      case "Cloud":
        return <Cloud className="h-6 w-6 text-primary" />
      case "BarChart":
        return <BarChart className="h-6 w-6 text-primary" />
      case "Cpu":
        return <Cpu className="h-6 w-6 text-primary" />
      default:
        return null
    }
  }

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="section-title">{skillsContent.title}</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">{skillsContent.description}</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsContent.categories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-xl p-6 shadow-sm h-full">
              <div className="flex items-center gap-3 mb-4">
                {getIconComponent(category.icon)}
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              {category.skills.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={`${category.id}-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                      className="px-4 py-2 bg-white border border-gray-200 text-gray-800 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">No skills listed</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
