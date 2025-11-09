import { useEffect, useState } from 'react'
import { Leaf } from 'lucide-react'

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-olive/10 via-white to-honey/10 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-olive to-honey rounded-full animate-ping opacity-20"></div>
          <div className="relative w-32 h-32 bg-gradient-to-br from-olive via-honey to-olive rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <Leaf size={64} className="text-white animate-bounce" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-graphite font-montserrat mb-2">
          Wilmer Ricardo Urda
        </h2>
        <p className="text-olive font-medium">Cargando portafolio...</p>
        <div className="mt-6 w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-olive via-honey to-olive animate-shimmer bg-[length:200%_100%]"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
