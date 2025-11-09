import { Leaf, Globe, Code, BarChart3, Plane, Users, Clock, MessageSquare, Award, Target } from 'lucide-react'

const About = () => {
  const softSkills = [
    { icon: Users, text: 'Trabajo en equipo' },
    { icon: Target, text: 'Adaptabilidad' },
    { icon: Clock, text: 'Gestión del tiempo' },
    { icon: MessageSquare, text: 'Comunicación' },
    { icon: Award, text: 'Ética profesional' },
    { icon: Leaf, text: 'Liderazgo técnico' },
  ]

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-graphite mb-4 font-montserrat">
          Perfil Profesional
        </h2>
        <div className="w-24 h-1 bg-olive mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-olive/10 rounded-lg">
                <Leaf className="text-olive" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-graphite mb-2 font-montserrat">
                  Experiencia Ambiental
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Más de 10 años especializándome en monitoreo ambiental, gestión de datos técnicos 
                  y elaboración de informes sobre calidad del aire, ruido y vibraciones.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-honey/10 rounded-lg">
                <Code className="text-honey" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-graphite mb-2 font-montserrat">
                  Desarrollo Tecnológico
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Programación en Python, desarrollo web (HTML, CSS), y creación de soluciones 
                  digitales orientadas a la sostenibilidad y eficiencia operativa.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-graphite/10 rounded-lg">
                <Globe className="text-graphite" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-graphite mb-2 font-montserrat">
                  Sistemas de Información Geográfica
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dominio de ArcGIS Pro y QGIS para análisis territorial, fotogrametría 
                  y operación de drones aplicados al ordenamiento ambiental.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-graphite mb-6 font-montserrat">
              Competencias Blandas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300"
                >
                  <skill.icon className="text-olive" size={24} />
                  <span className="text-graphite font-medium">{skill.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-olive/10 via-honey/10 to-olive/10 animate-gradient bg-[length:200%_200%]"></div>
              <div className="relative p-6 backdrop-blur-sm border-l-4 border-olive rounded-lg">
                <p className="text-gray-700 leading-relaxed italic font-medium">
                  "Perfil analítico, comprometido y adaptable a la innovación tecnológica, 
                  con enfoque en el desarrollo sostenible y la excelencia técnica."
                </p>
              </div>
            </div>
            
            {/* Años de experiencia destacado */}
            <div className="mt-6 p-6 bg-white rounded-xl shadow-lg border-t-4 border-honey">
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-olive font-montserrat">10+</div>
                  <div className="text-sm text-gray-600 mt-1">Años de Experiencia</div>
                </div>
                <div className="h-16 w-px bg-gray-300"></div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-honey font-montserrat">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Compromiso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
