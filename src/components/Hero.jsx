import { Github, Linkedin, Mail, ChevronDown, Sparkles, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 px-6 min-h-screen flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-olive/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-honey/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-olive/5 to-honey/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          {/* Animated Avatar */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-olive to-honey rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-olive via-honey to-olive flex items-center justify-center text-white text-6xl font-bold shadow-2xl transform group-hover:scale-110 transition-transform duration-500 animate-gradient bg-[length:200%_200%]">
              W
            </div>
            <div className="absolute -top-2 -right-2 bg-honey text-white p-2 rounded-full shadow-lg animate-bounce">
              <Sparkles size={20} />
            </div>
          </div>
          
          {/* Animated Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-graphite mb-4 font-montserrat animate-fade-in-up text-center">
            <span className="bg-gradient-to-r from-olive via-honey to-olive bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              Wilmer Ricardo Urda
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-olive mb-6 font-montserrat animate-fade-in-up animation-delay-200 text-center px-4">
            Ingeniero Agroforestal & Desarrollador de Software
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed animate-fade-in-up animation-delay-400 text-center px-4">
            Especialista en <span className="font-semibold text-olive">monitoreo ambiental</span>, 
            <span className="font-semibold text-honey"> análisis de datos</span> y 
            <span className="font-semibold text-graphite"> desarrollo de soluciones tecnológicas</span> con 
            más de 10 años de experiencia integrando ingeniería ambiental y tecnología.
          </p>

          {/* Animated Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 animate-fade-in-up animation-delay-600">
            <div className="text-center">
              <div className="text-4xl font-bold text-olive font-montserrat">10+</div>
              <div className="text-sm text-gray-600">Años Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-honey font-montserrat">50+</div>
              <div className="text-sm text-gray-600">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-graphite font-montserrat">15+</div>
              <div className="text-sm text-gray-600">Tecnologías</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 animate-fade-in-up animation-delay-800 px-4">
            <a
              href="/WilmerRicardo/CV_WILMER.pdf"
              download="CV_Wilmer_Ricardo_Urda.pdf"
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-honey to-honey/90 text-white rounded-lg hover:from-honey/90 hover:to-honey transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
              aria-label="Descargar CV en PDF"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              <span className="font-semibold">Descargar CV</span>
            </a>
            <a
              href="mailto:wilnecot-20@hotmail.com"
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-olive to-olive/90 text-white rounded-lg hover:from-olive/90 hover:to-olive transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
              aria-label="Enviar correo electrónico"
            >
              <Mail size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">Contactar</span>
            </a>
            <a
              href="https://github.com/wilnecot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-graphite to-graphite/90 text-white rounded-lg hover:from-graphite/90 hover:to-graphite transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
              aria-label="Ver perfil de GitHub"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/wilnecot"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-olive/80 to-graphite text-white rounded-lg hover:from-olive hover:to-graphite/90 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 text-sm sm:text-base"
              aria-label="Ver perfil de LinkedIn"
            >
              <Linkedin size={20} className="group-hover:rotate-12 transition-transform" />
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <a href="#about" className="animate-bounce">
            <ChevronDown size={32} className="text-olive" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
