import { Wind, Database, Code2, Map, Camera, FileText, Palette, Lightbulb } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Monitoreo Ambiental',
      icon: Wind,
      color: 'olive',
      skills: [
        'Calidad del aire (PM10, PM2.5, CO, NO2, O3, SO2)',
        'Medición de ruido y vibraciones',
        'Análisis de datos técnicos',
        'Aseguramiento metrológico',
        'Elaboración de informes',
        'Gestión de proyectos ambientales'
      ],
    },
    {
      title: 'Sistemas de Información Geográfica',
      icon: Map,
      color: 'honey',
      skills: [
        'ArcGIS Pro',
        'QGIS',
        'Análisis espacial',
        'Ordenamiento territorial',
        'Cartografía digital',
        'Fotointerpretación'
      ],
    },
    {
      title: 'Programación & Desarrollo',
      icon: Code2,
      color: 'graphite',
      skills: [
        'Python',
        'HTML5 & CSS3',
        'JavaScript/TypeScript',
        'React JS',
        'SQL',
        'Git & GitHub'
      ],
    },
    {
      title: 'Fotogrametría & Drones',
      icon: Camera,
      color: 'olive',
      skills: [
        'Operación de drones',
        'Procesamiento fotogramétrico',
        'Modelos digitales de elevación',
        'Ortofotografía',
        'Análisis de imágenes',
        'Planificación de vuelos'
      ],
    },
  ]

  const technologies = [
    'HTML5', 'CSS3', 'Python', 'SQL', 'QGIS', 'ArcGIS Pro',
    'Figma', 'Canva', 'Lightroom', 'Lucidchart', 'Genially',
    'TypeScript', 'React JS', 'Java', 'Git'
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-graphite mb-4 font-montserrat">
          Habilidades & Tecnologías
        </h2>
        <div className="w-24 h-1 bg-olive mx-auto mb-12"></div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-olive overflow-hidden"
            >
              {/* Decorative gradient background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-olive/5 to-honey/5 rounded-full blur-3xl -z-0 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-olive/10 to-honey/10 rounded-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md">
                    <category.icon className="text-olive" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-graphite font-montserrat group-hover:text-olive transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills as elegant badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="group/badge relative px-4 py-2.5 bg-gradient-to-r from-gray-50 to-white text-gray-700 rounded-lg border border-gray-200 hover:border-olive hover:shadow-md transition-all duration-300 cursor-default font-medium text-sm"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-olive/5 to-honey/5 rounded-lg opacity-0 group-hover/badge:opacity-100 transition-opacity duration-300"></div>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="text-honey" size={32} />
            <h3 className="text-2xl font-semibold text-graphite font-montserrat">
              Tecnologías & Herramientas
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-olive/10 to-honey/10 text-graphite rounded-full border border-olive/20 hover:border-olive/40 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
