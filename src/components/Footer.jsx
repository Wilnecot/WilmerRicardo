import { Heart, Leaf } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-graphite text-white py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-lg">
            <span>Hecho con</span>
            <Heart className="text-honey fill-honey" size={20} />
            <span>y</span>
            <Leaf className="text-olive" size={20} />
            <span>por Wilmer Ricardo Urda</span>
          </div>
          
          <div className="text-gray-400 text-sm">
            © {currentYear} Wilmer Ricardo Urda. Todos los derechos reservados.
          </div>

          <div className="text-gray-400 text-sm text-center">
            Ingeniero Agroforestal | Desarrollador de Software | Especialista en SIG
          </div>

          <div className="pt-4 border-t border-gray-700 w-full text-center">
            <p className="text-gray-400 text-sm italic">
              "Integrando tecnología y medio ambiente para un futuro sostenible"
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
