import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './FloatingReserveButton.css'

function FloatingReserveButton() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Hide button when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <Link 
      to="/reservas" 
      className={`floating-reserve-button ${isVisible ? 'visible' : 'hidden'}`}
      aria-label="Reservar sesión"
    >
      <span className="floating-reserve-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M16 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M3 10H21" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M9 14L11 16L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <span className="floating-reserve-text">
        <span className="reserve-text-desktop">Reservar sesión</span>
        <span className="reserve-text-mobile">Reservar</span>
      </span>
    </Link>
  )
}

export default FloatingReserveButton