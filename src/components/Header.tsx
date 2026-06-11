import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleNavClick = (path: string) => {
    navigate(path)
    closeMenu()
  }

  // Cerrar menú con tecla Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      <div className="container header-container">
        <NavLink to="/" className="logo">
          <span className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <path d="M16 6 C16 6, 12 12, 12 16 C12 20, 16 26, 16 26 C16 26, 20 20, 20 16 C20 12, 16 6, 16 6Z" 
                    fill="currentColor" opacity="0.3"/>
              <circle cx="16" cy="16" r="3" fill="currentColor"/>
            </svg>
          </span>
          <span className="logo-text">
            <span className="logo-title">Sendero Holístico</span>
            <span className="logo-subtitle">Ivanna — Terapia Holística</span>
          </span>
        </NavLink>

        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {/* Botón de cierre para móvil/tablet */}
          <button 
            className="mobile-close-btn"
            onClick={closeMenu}
            aria-label="Cerrar menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <ul className="nav-list">
            <li>
              <NavLink to="/" onClick={() => handleNavClick('/')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item-dropdown">
              <span className="nav-link">Servicios</span>
              <ul className="dropdown-menu">
                <li><NavLink to="/movimiento-consciente" onClick={closeMenu} className="dropdown-link">Movimiento Consciente</NavLink></li>
                <li><NavLink to="/habitar-emociones" onClick={closeMenu} className="dropdown-link">Habitar Emociones</NavLink></li>
                <li><NavLink to="/bioemocion" onClick={closeMenu} className="dropdown-link">Consulta Bioemoción</NavLink></li>
                <li><NavLink to="/cosmos-corporeo" onClick={closeMenu} className="dropdown-link">Cosmos Corpóreo</NavLink></li>
                <li><NavLink to="/meditaciones" onClick={closeMenu} className="dropdown-link">Meditaciones Guiadas</NavLink></li>
                <li className="dropdown-divider"></li>
                <li><NavLink to="/bioenergia" onClick={closeMenu} className="dropdown-link">Bioenergía</NavLink></li>
                <li><NavLink to="/diseno-humano" onClick={closeMenu} className="dropdown-link">Diseño Humano</NavLink></li>
                <li><NavLink to="/terapia-somatica" onClick={closeMenu} className="dropdown-link">Terapia Somática</NavLink></li>
              </ul>
            </li>
            <li>
              <NavLink to="/sobre-mi" onClick={() => handleNavClick('/sobre-mi')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Sobre Mí
              </NavLink>
            </li>
            <li>
              <NavLink to="/recursos" onClick={() => handleNavClick('/recursos')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Recursos
              </NavLink>
            </li>
            <li>
              <NavLink to="/talleres" onClick={() => handleNavClick('/talleres')} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Talleres y Retiros
              </NavLink>
            </li>
            <li>
              <NavLink to="/reservas" onClick={() => handleNavClick('/reservas')} className="btn btn-cta-reservas nav-cta-reservas">
                Reservar sesión
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" onClick={() => handleNavClick('/contacto')} className="btn btn-primary nav-cta">
                Contacto
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header