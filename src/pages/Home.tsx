import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Home.css'

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 1, ease: easeOutSmooth }
  }
}

function Home() {
  return (
    <div className="home">
      {/* Hero Section - Enfoque en espacio seguro y autoescucha */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
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
            <motion.h2 className="hero-headline" variants={fadeInUp}>
              Siente, Recuerda, Habita y Transforma
            </motion.h2>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Bienvenido tu ser a este espacio de serenidad, autodescubrimiento y autoescucha. 
              Aquí puedes detenerte a sentir y recordar tu camino de vuelta al bienestar 
              y a la salud integral.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Reserva tu Espacio
              </Link>
              <Link to="#servicios" className="btn btn-outline btn-large">
                Explorar Servicios
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-frame">
                <div className="hero-image-placeholder">
                  <span className="hero-icon">🧘‍♀️</span>
                </div>
              </div>
              <div className="hero-image-accent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Da el primer paso - Sección temprana de reservas */}
      <section className="section primer-paso-section">
        <div className="container">
          <motion.div
            className="primer-paso-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 className="primer-paso-titulo" variants={fadeInUp}>
              Da el primer paso
            </motion.h3>
            <motion.p className="primer-paso-texto" variants={fadeInUp}>
              Si algo en ti siente que es momento de pausar, escucharte y recibir acompañamiento, puedes comenzar solicitando una reserva.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary">
                Reservar sesión
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Servicios organizados por categorías emocionales */}
      <section className="section services-section" id="servicios">
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

          {/* Categoría 1: Talleres y Programas */}
          <motion.div 
            className="category-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <span className="category-tag">Talleres y Programas</span>
            <motion.div className="services-grid" variants={staggerContainer}>
              <motion.div variants={scaleIn}>
                <Link to="/movimiento-consciente" className="service-card card-soft">
                  <div className="service-card-inner">
                    <div className="service-number">01</div>
                    <div className="service-icon-wrapper">
                      <span className="service-icon">🌊</span>
                    </div>
                    <h3>Movimiento Consciente</h3>
                    <p>
                      Meditación en movimiento y respiración consciente. 
                      Una experiencia corporal para habitar tu cuerpo con presencia.
                    </p>
                    <span className="service-link">Explorar experiencia →</span>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Link to="/habitar-emociones" className="service-card card-soft">
                  <div className="service-card-inner">
                    <div className="service-number">02</div>
                    <div className="service-icon-wrapper">
                      <span className="service-icon">💖</span>
                    </div>
                    <h3>Habitar Emociones</h3>
                    <p>
                      Experiencia somática para sentir, comprender y regular 
                      tus emociones. Tu cuerpo como guía interior.
                    </p>
                    <span className="service-link">Conocer el programa →</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Categoría 2: Consultas y Sesiones */}
          <motion.div 
            className="category-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <span className="category-tag">Consultas y Sesiones</span>
            <motion.div className="services-grid services-grid-2" variants={staggerContainer}>
              <motion.div variants={scaleIn}>
                <Link to="/bioemocion" className="service-card card-soft">
                  <div className="service-card-inner">
                    <div className="service-number">03</div>
                    <div className="service-icon-wrapper">
                      <span className="service-icon">✨</span>
                    </div>
                    <h3>Consulta Terapéutica Holística</h3>
                    <p>
                      Acompañamiento terapéutico individual de sanación psicoemocional 
                      con enfoque integrativo de Bioemoción, Somática y Terapia Jungiana.
                    </p>
                    <span className="service-link">Agendar sesión →</span>
                  </div>
                </Link>
              </motion.div>

              <motion.div variants={scaleIn}>
                <Link to="/cosmos-corporeo" className="service-card card-soft">
                  <div className="service-card-inner">
                    <div className="service-number">04</div>
                    <div className="service-icon-wrapper">
                      <span className="service-icon">🌟</span>
                    </div>
                    <h3>Cosmos Corpóreo</h3>
                    <p>
                      Carta natal chamánica y diseño humano para descubrir 
                      tu propósito, talentos y mapa energético único.
                    </p>
                    <span className="service-link">Explorar consulta →</span>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Categoría 3: Meditaciones y Regulación */}
          <motion.div 
            className="category-section category-section-alt"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <span className="category-tag">Meditaciones y Regulación Emocional</span>
            <motion.div className="meditaciones-preview" variants={staggerContainer}>
              <motion.div className="meditaciones-intro" variants={fadeInUp}>
                <div className="meditaciones-icon">🌙</div>
                <h3>Meditaciones Guiadas</h3>
                <p>
                  Prácticas de relajación, enraizamiento y regulación 
                  para tu bienestar diario. Un espacio de calma al que puedes 
                  volver cuando lo necesites.
                </p>
                <Link to="/meditaciones" className="btn btn-secondary">
                  Escuchar meditaciones
                </Link>
              </motion.div>
              <motion.div className="meditaciones-tags" variants={fadeInUp}>
                <span className="meditation-tag">Respiración</span>
                <span className="meditation-tag">Ansiedad</span>
                <span className="meditation-tag">Enraizamiento</span>
                <span className="meditation-tag">Descanso</span>
                <span className="meditation-tag">Regulación</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filosofía - Espacio de autoescucha */}
      <section className="section philosophy-section">
        <div className="container">
          <motion.div 
            className="philosophy-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="section-tag" variants={fadeInUp}>Mi Propósito</motion.span>
            <motion.h2 className="philosophy-title" variants={fadeInUp}>
              Un Espacio Seguro para Sentir
            </motion.h2>
            <motion.div className="philosophy-divider" variants={fadeInUp}></motion.div>
            <motion.p className="philosophy-text" variants={fadeInUp}>
              Creo en la sabiduría innata del cuerpo y en tu capacidad para 
              escucharte. Mi rol no es decirte qué hacer, sino acompañarte con 
              presencia y herramientas que honran tu proceso único.
            </motion.p>
            <motion.p className="philosophy-text" variants={fadeInUp}>
              Aquí puedes detenerte. Respirar. Sentir. No hay prisa, no hay 
              juicios. Solo un espacio contenido donde puedes explorar, liberar 
              y reconectar con tu esencia más auténtica.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/sobre-mi" className="btn btn-secondary">
                Conocer Mi Historia
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Mí Preview */}
      <section className="section about-preview-section">
        <div className="container">
          <div className="about-preview-grid">
            <motion.div 
              className="about-preview-image"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <div className="about-image-frame">
                <div className="about-image-placeholder">
                  <span className="about-icon">👩‍🦰</span>
                </div>
                <div className="about-image-accent"></div>
              </div>
            </motion.div>

            <motion.div 
              className="about-preview-content"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <span className="section-tag">Sobre Mí</span>
              <h2 className="about-title">
                Hola, soy <span className="highlight">Ivanna</span>
              </h2>
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
              <p>
                A través de la bioemoción, el trabajo somático, el movimiento y 
                el diseño humano/astrología chamánica, te ofrezco un acompañamiento 
                que honra la conexión entre cuerpo, mente y espíritu.
              </p>
              <p>
                Creo en tu capacidad innata de sanación. Solo necesitas un espacio 
                seguro donde recordar cómo hacerlo.
              </p>
              <Link to="/sobre-mi" className="btn btn-secondary">
                Leer Mi Historia
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="section testimonials-section section-alt">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Experiencias</span>
            <h2 className="section-title">Historias de Reconexión</h2>
            <p className="section-subtitle">
              Las experiencias de personas que han transitado su propio sendero 
              de autoescucha acompañadas por Ivanna.
            </p>
          </motion.div>

          <motion.div 
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={scaleIn}>
              <div className="testimonial-card card-soft">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Las sesiones con Ivanna transformaron mi vida. Aprendí a escuchar 
                  mi cuerpo y a liberar emociones que llevaba años guardando. Su 
                  enfoque holístico me dio herramientas para sanar en todos los niveles.
                </p>
                <div className="testimonial-author">
                  <span className="author-name">María G.</span>
                  <span className="author-detail">Consulta Terapéutica Holística</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn}>
              <div className="testimonial-card card-soft">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  El movimiento consciente me enseñó a habitar mi cuerpo de una 
                  manera que nunca imaginé. Cada sesión es una danza meditativa 
                  que me deja renovada y conectada conmigo misma.
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Sofía R.</span>
                  <span className="author-detail">Movimiento Consciente</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={scaleIn}>
              <div className="testimonial-card card-soft">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">
                  Cosmos Corpóreo reveló aspectos de mí que siempre supe pero 
                  nunca había podido poner en palabras. Fue como recibir un mapa 
                  de mi propia alma.
                </p>
                <div className="testimonial-author">
                  <span className="author-name">Carlos M.</span>
                  <span className="author-detail">Cosmos Corpóreo</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="testimonials-cta"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link to="/testimonios" className="btn btn-outline">
              Leer Más Experiencias
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Enfoque en acompañamiento */}
      <section className="section cta-section">
        <div className="cta-background">
          <div className="cta-blob cta-blob-1"></div>
          <div className="cta-blob cta-blob-2"></div>
        </div>
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
              Permíteme acompañarte
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              Cada paso en tu proceso es válido. No necesitas tener todas las 
              respuestas. Solo necesitas dar el primer paso hacia ti misma. 
              Estoy aquí para sostenerte en este viaje.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Ver Servicios y Reservar
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home