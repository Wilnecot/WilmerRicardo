import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'Ingeniería Agroforestal',
      institution: 'Universidad Nacional Abierta y a Distancia (UNAD)',
      year: '2025',
      type: 'Pregrado',
      icon: GraduationCap,
    },
    {
      degree: 'Tecnología en Análisis y Desarrollo de Software',
      institution: 'SENA',
      year: 'En curso',
      type: 'Tecnología',
      icon: GraduationCap,
    },
    {
      degree: 'Tecnología en Control Ambiental',
      institution: 'SENA',
      year: '2014',
      type: 'Tecnología',
      icon: GraduationCap,
    },
    {
      degree: 'Técnico en Gestión en Sistemas de Manejo Ambiental',
      institution: 'SENA',
      year: '2012',
      type: 'Técnico',
      icon: Award,
    },
  ]

  const certifications = [
    {
      name: 'Diplomado en SIG para el Ordenamiento Ambiental del Territorio',
      icon: Award,
    },
    {
      name: 'Fundamentos de Programación en Python',
      icon: BookOpen,
    },
    {
      name: 'Complejidad Algorítmica con Python',
      icon: BookOpen,
    },
  ]

  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-graphite mb-4 font-montserrat">
          Formación Académica
        </h2>
        <div className="w-24 h-1 bg-olive mx-auto mb-12"></div>

        {/* Education */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-olive"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-olive/10 rounded-lg">
                  <edu.icon className="text-olive" size={32} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-graphite font-montserrat">
                      {edu.degree}
                    </h3>
                    <span className="px-3 py-1 bg-honey/20 text-honey text-sm rounded-full font-semibold">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-olive font-semibold mb-1">{edu.institution}</p>
                  <p className="text-gray-600 text-sm">{edu.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <Award className="text-honey" size={32} />
            <h3 className="text-2xl font-semibold text-graphite font-montserrat">
              Certificaciones & Cursos
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-gradient-to-br from-olive/5 to-honey/5 rounded-lg hover:shadow-md transition-shadow duration-300 border border-olive/10"
              >
                <cert.icon className="text-olive flex-shrink-0 mt-1" size={20} />
                <p className="text-gray-700 font-medium">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-olive to-honey rounded-xl shadow-lg">
            <p className="text-white text-lg font-semibold">
              Formación continua en tecnología, medio ambiente y desarrollo sostenible
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
