import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'CONHINTEC S.A.S',
      position: 'Analista Técnico',
      period: '2025 - Actualidad',
      location: 'Colombia',
      responsibilities: [
        'Gestión integral de proyectos de monitoreo ambiental',
        'Procesamiento y análisis de datos técnicos ambientales',
        'Elaboración de informes técnicos especializados',
        'Aseguramiento metrológico de equipos de medición',
        'Análisis de calidad del aire, ruido y vibraciones',
        'Coordinación de equipos técnicos en campo',
      ],
      color: 'olive',
    },
    {
      company: 'CONHINTEC S.A.S',
      position: 'Auxiliar Técnico',
      period: '2015 - 2025',
      location: 'Colombia',
      responsibilities: [
        'Soporte en mediciones ambientales en campo',
        'Logística operativa de proyectos',
        'Gestión de información técnica',
        'Mantenimiento de equipos de medición',
        'Apoyo en elaboración de informes',
      ],
      color: 'honey',
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-graphite mb-4 font-montserrat">
          Experiencia Profesional
        </h2>
        <div className="w-24 h-1 bg-olive mx-auto mb-12"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-olive to-honey"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-olive rounded-full z-10"></div>

                {/* Content */}
                <div className="md:w-1/2">
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-olive">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-graphite font-montserrat mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-xl text-olive font-semibold mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <Briefcase className="text-honey" size={32} />
                    </div>

                    <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={18} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={18} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-olive rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for timeline */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-olive/10 to-honey/10 rounded-xl border-l-4 border-olive">
          <p className="text-lg text-graphite text-center">
            <span className="font-bold">10+ años</span> de experiencia combinando 
            <span className="text-olive font-semibold"> ciencias ambientales</span> con 
            <span className="text-honey font-semibold"> tecnología</span> para crear soluciones innovadoras
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience
