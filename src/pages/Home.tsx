import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'
import aboutHero from '../assets/images/about/about-hero.jpg'
import aboutEmbrace from '../assets/images/about/about-embrace.jpg'
import movimientoHero from '../assets/images/movimiento-consciente/movimiento-hero.jpg'
import habitarHero from '../assets/images/habitar-emociones/habitar-emociones-hero.jpg'
import aboutPath from '../assets/images/about/about-path.jpg'
import cosmosHero from '../assets/images/cosmos-corporeo/cosmos-hero.jpg'
import meditationGarden from '../assets/images/meditaciones/meditation-garden.jpg'
import retreatSunset from '../assets/images/talleres/retreat-sunset.jpg'

// Custom easing function - slower, more breathing
const easeOutSmooth = [0.25, 0.1, 0.25, 1] as const

// Animation variants - slower, more contemplative
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: easeOutSmooth }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
    }
  }
}

function Home() {
  return (
    <div className="home">
      {/* Hero Section - Full width with background image */}
      <section className="hero">
        <div className="hero-background">
          <div 
            className="hero-image"
            style={{ backgroundImage: `url(${aboutHero})` }}
            role="img"
            aria-label="Ivanna en conexión con la naturaleza"
          ></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.blockquote className="hero-quote" variants={fadeInUp}>
              "Vete despacio que a donde tienes que llegar es a ti mismo"
              <cite>— Rumi</cite>
            </motion.blockquote>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Siente, Recuerda, Habita y Transforma
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Bienvenido a un espacio de serenidad, autodescubrimiento y autoescucha. 
              Un lugar donde puedes detenerte, respirar y recordar tu camino de vuelta 
              al bienestar y a la salud integral.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Reservar sesión
              </Link>
              <Link to="/sobre-mi" className="btn btn-outline btn-large">
                Conocer mi enfoque
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Un Espacio de Autoescucha - Block 1 */}
      <section className="section autoescucha-section">
        <div className="container container-wide">
          <motion.div 
            className="autoescucha-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="autoescucha-content" variants={fadeInUp}>
              <span className="section-tag">Bienvenido</span>
              <h2>Un espacio de autoescucha</h2>
              <div className="about-divider"></div>
              <p className="autoescucha-text">
                Un acompañamiento cercano, sensible y humano con presencia, 
                pausa y calma. Aquí puedes detenerte, sentir y recordar tu 
                propia sabiduría interior.
              </p>
            </motion.div>
            <motion.div className="autoescucha-image" variants={fadeInUp}>
              <div className="image-frame">
                <img 
                  src={aboutPath} 
                  alt="Sendero rodeado de naturaleza simbolizando el camino de autoescucha"
                  className="image-real"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="section servicios-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Te Acompaño</span>
            <h2 className="section-title">Caminos de Reconexión</h2>
            <p className="section-subtitle">
              Cada experiencia está diseñada para acompañarte en tu proceso 
              de autoescucha, regulación emocional y reconexión contigo misma.
            </p>
          </motion.div>

          <motion.div 
            className="servicios-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Movimiento Consciente */}
            <motion.div className="servicio-card" variants={fadeInUp}>
              <Link to="/movimiento-consciente" className="servicio-link">
                <div className="servicio-image-frame">
                  <img 
                    src={movimientoHero} 
                    alt="Movimiento Consciente - práctica grupal"
                    className="servicio-image"
                    loading="lazy"
                  />
                </div>
                <div className="servicio-content">
                  <span className="servicio-tag">Talleres y Programas</span>
                  <h3>Movimiento Consciente</h3>
                  <p>
                    Meditación en movimiento y respiración consciente. 
                    Una experiencia corporal para habitar tu cuerpo con presencia.
                  </p>
                  <span className="servicio-cta">Explorar experiencia →</span>
                </div>
              </Link>
            </motion.div>

            {/* Habitar Emociones */}
            <motion.div className="servicio-card" variants={fadeInUp}>
              <Link to="/habitar-emociones" className="servicio-link">
                <div className="servicio-image-frame">
                  <img 
                    src={habitarHero} 
                    alt="Habitar Emociones - experiencia somática"
                    className="servicio-image"
                    loading="lazy"
                  />
                </div>
                <div className="servicio-content">
                  <span className="servicio-tag">Experiencia Somática</span>
                  <h3>Habitar Emociones</h3>
                  <p>
                    Experiencia somática para sentir, comprender y regular 
                    tus emociones. Tu cuerpo como guía interior.
                  </p>
                  <span className="servicio-cta">Conocer el programa →</span>
                </div>
              </Link>
            </motion.div>

            {/* Consulta Terapéutica */}
            <motion.div className="servicio-card" variants={fadeInUp}>
              <Link to="/bioemocion" className="servicio-link">
                <div className="servicio-image-frame">
                  <img 
                    src={aboutPath} 
                    alt="Consulta Terapéutica Holística"
                    className="servicio-image"
                    loading="lazy"
                  />
                </div>
                <div className="servicio-content">
                  <span className="servicio-tag">Consultas y Sesiones</span>
                  <h3>Consulta Terapéutica Holística</h3>
                  <p>
                    Acompañamiento terapéutico individual de sanación psicoemocional 
                    con enfoque integrativo.
                  </p>
                  <span className="servicio-cta">Agendar sesión →</span>
                </div>
              </Link>
            </motion.div>

            {/* Cosmos Corpóreo */}
            <motion.div className="servicio-card" variants={fadeInUp}>
              <Link to="/cosmos-corporeo" className="servicio-link">
                <div className="servicio-image-frame">
                  <img 
                    src={cosmosHero} 
                    alt="Cosmos Corpóreo - carta natal chamánica"
                    className="servicio-image"
                    loading="lazy"
                  />
                </div>
                <div className="servicio-content">
                  <span className="servicio-tag">Astrología Somática</span>
                  <h3>Cosmos Corpóreo</h3>
                  <p>
                    Carta natal chamánica y diseño humano para descubrir 
                    tu propósito, talentos y mapa energético único.
                  </p>
                  <span className="servicio-cta">Explorar consulta →</span>
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Ivanna */}
      <section className="section sobre-mi-section">
        <div className="container container-wide">
          <motion.div 
            className="sobre-mi-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="sobre-mi-image" variants={fadeInUp}>
              <div className="image-frame">
                <img 
                  src={aboutEmbrace} 
                  alt="Ivanna - terapeuta holística"
                  className="image-real"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div className="sobre-mi-content" variants={fadeInUp}>
              <span className="section-tag">Sobre Mí</span>
              <h2>Hola, soy <span className="highlight">Ivanna</span></h2>
              <div className="about-divider"></div>
              <p>
                Soy terapeuta holística y mi misión es acompañarte en tu proceso 
                de transformación profunda y reconexión contigo misma.
              </p>
              <p>
                En mí encontrarás un acompañamiento cercano, sensible y humano 
                con presencia, pausa y calma. Mi enfoque integra al cuerpo, la 
                psicoemoción y la espiritualidad.
              </p>
              <Link to="/sobre-mi" className="btn btn-secondary">
                Conoce mi historia
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sección Contemplativa */}
      <section className="section contemplativa-section">
        <div className="container">
          <motion.div 
            className="contemplativa-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.blockquote className="contemplativa-quote" variants={fadeInUp}>
              "Todo proceso comienza cuando aprendemos a escucharnos."
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Recursos */}
      <section className="section recursos-section">
        <div className="container container-wide">
          <motion.div 
            className="recursos-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="recursos-image" variants={fadeInUp}>
              <div className="image-frame">
                <img 
                  src={meditationGarden} 
                  alt="Jardín de meditación y contemplación"
                  className="image-real"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div className="recursos-content" variants={fadeInUp}>
              <span className="section-tag">MEDITACIÓN · PRESENCIA · AUTOREGULACIÓN</span>
              <h2>Recursos para acompañarte</h2>
              <div className="about-divider"></div>
              <p>
                Aquí encontrarás meditaciones guiadas, ejercicios de regulación 
                emocional y prácticas sencillas para cultivar la calma y la 
                presencia en tu día a día.
              </p>
              <div className="recursos-list">
                <span>Próximamente:</span>
                <ul>
                  <li>Meditaciones guiadas</li>
                  <li>Ejercicios de respiración</li>
                  <li>Journaling</li>
                  <li>Regulación emocional</li>
                  <li>Recursos descargables</li>
                </ul>
              </div>
              <Link to="/recursos" className="btn btn-secondary">
                Explorar recursos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Talleres y Retiros */}
      <section className="section talleres-section">
        <div className="container">
          <motion.div 
            className="talleres-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="talleres-image-frame">
              <img 
                src={retreatSunset} 
                alt="Paisaje natural al atardecer para experiencias y retiros"
                className="talleres-image"
                loading="lazy"
              />
              <div className="talleres-overlay"></div>
            </div>
            <div className="talleres-text">
              <motion.span className="section-tag" variants={fadeInUp}>
                COMUNIDAD · NATURALEZA · PRESENCIA
              </motion.span>
              <motion.h2 variants={fadeInUp}>Experiencias y retiros</motion.h2>
              <motion.p variants={fadeInUp}>
                Espacios para detenerte, respirar y compartir con otros 
                un camino de transformación, presencia y conexión con la naturaleza.
              </motion.p>
              <motion.p className="talleres-subtext" variants={fadeInUp}>
                Próximamente nuevos encuentros, talleres y retiros.
              </motion.p>
              <motion.div className="talleres-buttons" variants={fadeInUp}>
                <Link to="/talleres" className="btn btn-primary btn-large">
                  Conocer experiencias
                </Link>
                <Link to="/contacto" className="btn btn-outline btn-large">
                  Escribir por WhatsApp
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="cta-tagline" variants={fadeInUp}>
              No estás sola en este camino
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              ¿Te gustaría comenzar este camino?
            </motion.h2>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Reservar sesión
              </Link>
              <Link to="/contacto" className="btn btn-outline btn-large">
                Escribir por WhatsApp
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home