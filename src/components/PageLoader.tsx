import { useEffect, useState } from 'react'
import './PageLoader.css'

interface PageLoaderProps {
  onAnimationComplete?: () => void
}

const PageLoader = ({ onAnimationComplete }: PageLoaderProps) => {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // El fade out comienza a los 3.3s (últimos 700ms)
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 3300)

    // La animación completa termina a los 4s
    const completeTimer = setTimeout(() => {
      onAnimationComplete?.()
    }, 4000)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
    }
  }, [onAnimationComplete])

  return (
    <div className={`page-loader ${isExiting ? 'is-exiting' : ''}`}>
      {/* Símbolo central - Hoja orgánica */}
      <div className="loader-symbol">
        <div className="leaf leaf-main"></div>
        <div className="leaf leaf-secondary"></div>
        <div className="leaf-glow"></div>
      </div>

      {/* Sendero curvo SVG */}
      <div className="loader-path">
        <svg viewBox="0 0 200 60" preserveAspectRatio="none">
          <path
            className="path-line"
            d="M 20 50 Q 60 10, 100 30 T 180 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Partículas flotantes */}
      <div className="particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Texto */}
      <div className="loader-text">
        <h1 className="loader-title">Sendero Holístico</h1>
        <p className="loader-subtitle">Conecta · Sana · Florece</p>
      </div>
    </div>
  )
}

export default PageLoader