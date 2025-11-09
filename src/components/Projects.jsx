import { Github, ExternalLink, Code, Database, Globe, BarChart } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'SynapTime',
      subtitle: 'Autogestión del empleado',
      description: 'Aplicación web desarrollada en TypeScript para la gestión eficiente de ausencias, licencias y permisos laborales. Interfaz intuitiva y moderna con dashboard interactivo.',
      technologies: ['TypeScript', 'React', 'CSS3', 'Vite'],
      icon: Code,
      gradient: 'from-olive to-olive/80',
      github: 'https://github.com/Wilnecot/SynapTime--autogesti-n-del-empleado',
      featured: true,
    },
    {
      title: 'Análisis PM10-PM2.5',
      subtitle: 'Machine Learning Ambiental',
      description: 'Modelos predictivos desarrollados en Python aplicados al monitoreo de calidad del aire. Análisis de material particulado con algoritmos de ML y visualización de datos.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Jupyter'],
      icon: BarChart,
      gradient: 'from-honey to-honey/80',
      github: 'https://github.com/Wilnecot/analisis-pm10-pm25---Machine-Learnig',
      featured: true,
    },
    {
      title: 'Web Estática SGA',
      subtitle: 'Sistema de Gestión Ambiental',
      description: 'Desarrollo de interfaz web estática en HTML y CSS para la gestión y visualización de información del Sistema de Gestión Ambiental con diseño responsive.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      icon: Globe,
      gradient: 'from-graphite to-graphite/80',
      github: 'https://wilnecot.github.io/Web-est-tica-del-SGA/',
      featured: false,
    },
    {
      title: 'API & Frontend',
      subtitle: 'Java & React JS',
      description: 'Desarrollo de servicios web RESTful con autenticación JWT y componentes modulares en React. Arquitectura escalable y moderna con documentación completa.',
      technologies: ['Java', 'React JS', 'Spring Boot', 'REST API', 'JWT'],
      icon: Database,
      gradient: 'from-olive/90 to-honey',
      github: 'https://github.com/Wilnecot/GA7-220501096-AA5-EV01-Construcci-n-de-API',
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-graphite mb-4 font-montserrat">
          Proyectos Destacados
        </h2>
        <div className="w-24 h-1 bg-olive mx-auto mb-4"></div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Soluciones tecnológicas que integran desarrollo de software, análisis de datos y gestión ambiental
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 hover:border-olive ${
                project.featured ? 'border-honey/30 ring-2 ring-honey/20' : 'border-gray-100'
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-honey to-honey/90 text-white text-xs font-bold rounded-full shadow-lg">
                  DESTACADO
                </div>
              )}
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-olive/5 to-honey/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 bg-gradient-to-br from-olive/10 to-honey/10 rounded-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
                    <project.icon className="text-olive" size={32} />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 hover:bg-graphite/10 rounded-lg transition-all duration-300 group/btn"
                  >
                    <Github className="text-graphite group-hover/btn:scale-110 transition-transform" size={24} />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-graphite mb-1 font-montserrat group-hover:text-olive transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-honey font-semibold mb-3 text-lg">{project.subtitle}</p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gradient-to-r from-olive/10 to-honey/10 text-olive text-sm rounded-full font-medium border border-olive/20 hover:border-olive/40 hover:scale-105 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-olive to-olive/90 text-white rounded-lg hover:from-olive/90 hover:to-olive transition-all duration-300 font-semibold shadow-md hover:shadow-lg group/link"
                >
                  <span>Ver en GitHub</span>
                  <ExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/wilnecot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-graphite text-white rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github size={24} />
            <span className="font-semibold">Ver todos los proyectos en GitHub</span>
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
