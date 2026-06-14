import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-icon">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M16 6 C16 6, 12 12, 12 16 C12 20, 16 26, 16 26 C16 26, 20 20, 20 16 C20 12, 16 6, 16 6Z" 
                        fill="currentColor" opacity="0.3"/>
                  <circle cx="16" cy="16" r="3" fill="currentColor"/>
                </svg>
              </span>
              <span className="footer-logo-text">Sendero Holístico</span>
            </div>
            <p className="footer-description">
              Un espacio sagrado para tu transformación interior. 
              Te acompaño en el camino hacia la sanación, el autoconocimiento 
              y la reconexión con tu esencia más auténtica.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="18" cy="6" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Servicios Principales</h4>
            <ul className="footer-list">
              <li><Link to="/movimiento-consciente">Movimiento Consciente</Link></li>
              <li><Link to="/habitar-emociones">Habitar Emociones</Link></li>
              <li><Link to="/bioemocion">Consulta Terapéutica</Link></li>
              <li><Link to="/cosmos-corporeo">Cosmos Corpóreo</Link></li>
              <li><Link to="/meditaciones">Meditaciones Guiadas</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Otras Terapias</h4>
            <ul className="footer-list">
              <li><Link to="/bioenergia">Bioenergía</Link></li>
              <li><Link to="/diseno-humano">Diseño Humano</Link></li>
              <li><Link to="/terapia-somatica">Terapia Somática</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Recursos</h4>
            <ul className="footer-list">
              <li><Link to="/recursos">Técnicas de Respiración</Link></li>
              <li><Link to="/recursos#ansiedad">Manejo de Ansiedad</Link></li>
              <li><Link to="/recursos#mindfulness">Mindfulness</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Comunidad</h4>
            <ul className="footer-list">
              <li><Link to="/sobre-mi">Sobre Mí</Link></li>
              <li><Link to="/testimonios">Testimonios</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {currentYear} Sendero Holístico — Ivanna. Todos los derechos reservados.
            </p>
            <p className="footer-credit">
              Hecho con <span className="heart">♥</span> y presencia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer