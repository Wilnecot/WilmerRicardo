import { Mail, Linkedin, Github, MapPin, Send, Download } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'wilnecot-20@hotmail.com',
      link: 'mailto:wilnecot-20@hotmail.com',
      color: 'olive',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/wilnecot',
      link: 'https://linkedin.com/in/wilnecot',
      color: 'graphite',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/wilnecot',
      link: 'https://github.com/wilnecot',
      color: 'graphite',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-graphite mb-4 font-montserrat">
          Contacto
        </h2>
        <div className="w-24 h-1 bg-olive mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          ¿Tienes un proyecto en mente? ¿Buscas colaboración en temas ambientales o tecnológicos? 
          No dudes en contactarme.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-graphite mb-6 font-montserrat">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target={contact.link.startsWith('http') ? '_blank' : undefined}
                    rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`p-3 bg-${contact.color}/10 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <contact.icon className={`text-${contact.color}`} size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 font-medium">{contact.label}</p>
                      <p className="text-graphite font-semibold">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-olive to-honey rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4 font-montserrat">
                ¿Listo para colaborar?
              </h3>
              <p className="mb-6 leading-relaxed">
                Estoy disponible para proyectos de:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Monitoreo y análisis ambiental</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Desarrollo de software y aplicaciones web</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Análisis de datos y SIG</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-white rounded-full mt-2"></div>
                  <span>Consultoría técnica ambiental</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:wilnecot-20@hotmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-olive rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold shadow-lg"
                >
                  <Send size={20} />
                  <span>Enviar mensaje</span>
                </a>
                <a
                  href="/WilmerRicardo/CV_WILMER.pdf"
                  download="CV_Wilmer_Ricardo_Urda.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-honey text-white rounded-lg hover:bg-honey/90 transition-colors duration-300 font-semibold shadow-lg"
                >
                  <Download size={20} />
                  <span>Descargar CV</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-olive" size={24} />
                <h3 className="text-xl font-semibold text-graphite font-montserrat">
                  Ubicación
                </h3>
              </div>
              <p className="text-gray-700">
                Colombia
              </p>
              <p className="text-gray-600 mt-2">
                Disponible para trabajo remoto y presencial
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
