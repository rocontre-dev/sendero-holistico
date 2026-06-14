import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Bioemocion.css'
import bioemocionHero from '../assets/images/consulta-terapeutica/bioemocion-hero.png'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

function Bioemocion() {
  return (
    <div className="bioemocion-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background">
          <div 
            className="hero-image"
            style={{ backgroundImage: `url(${bioemocionHero})` }}
            role="img"
            aria-label="Bioemoción y consulta terapéutica"
          ></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-content"
          >
            <motion.span className="section-tag" variants={fadeInUp}>
              Consulta Terapéutica
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Consulta Terapéutica Holística
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Acompañamiento terapéutico individual de sanación psicoemocional 
              con enfoque integrativo de Bioemoción Energética, Somática Cuerpo & Trauma, 
              y Terapia Sistémica & Jungiana.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Agendar Sesión
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="intro-content" variants={fadeInUp}>
              <span className="section-tag">¿Qué es?</span>
              <h2>Un Espacio de Transformación Profunda</h2>
              <div className="about-divider"></div>
              <p>
                La Consulta Terapéutica es un espacio terapéutico individual 
                donde integramos el trabajo emocional, energético y corporal para 
                acompañarte en tu proceso de transformación personal.
              </p>
              <p>
                Cada sesión es un encuentro sagrado donde creamos un espacio seguro 
                y contenido para explorar lo que necesitas sanar, liberar o transformar. 
                Trabajamos desde la comprensión de que las emociones, la energía y el 
                cuerpo están intrínsecamente conectados.
              </p>
              <p>
                Mi enfoque es humano, cercano y espiritual. No soy una terapeuta distante; 
                estoy presente contigo, sosteniendo el espacio con amor y herramientas 
                que honran tu proceso único.
              </p>
            </motion.div>
            <motion.div className="intro-image" variants={fadeInUp}>
              <div className="intro-image-frame">
                <div className="intro-image-placeholder">
                  <span className="intro-icon">✨</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">El Enfoque</span>
            <h2 className="section-title">Tres Dimensiones, Un Proceso</h2>
          </motion.div>

          <motion.div 
            className="dimensions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="dimension-card" variants={fadeInUp}>
              <div className="dimension-icon">💖</div>
              <h3>Emocional</h3>
              <p>
                Exploramos tus patrones emocionales, creencias limitantes y 
                heridas del pasado. Creamos espacio para sentir, procesar y 
                liberar lo que ya no te sirve.
              </p>
            </motion.div>

            <motion.div className="dimension-card" variants={fadeInUp}>
              <div className="dimension-icon">⚡</div>
              <h3>Energética</h3>
              <p>
                Trabajamos con tu campo energético, identificando bloqueos 
                y restaurando el flujo natural. Usamos técnicas bioenergéticas 
                para liberar y reequilibrar.
              </p>
            </motion.div>

            <motion.div className="dimension-card" variants={fadeInUp}>
              <div className="dimension-icon">🧘</div>
              <h3>Corporal</h3>
              <p>
                El cuerpo guarda memoria. A través de la conciencia somática, 
                accedemos a lo que está almacenado y facilitamos la liberación 
                desde un lugar seguro y contenido.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">¿Es para ti?</span>
            <h2 className="section-title">Esta Consulta es Ideal Si...</h2>
          </motion.div>

          <motion.div 
            className="for-you-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Sientes que estás repitiendo patrones que quieres transformar</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Experimentas ansiedad, estrés o emociones abrumadoras</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Buscas un espacio seguro para explorar tu mundo interior</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Sientes desconexión de tu cuerpo o de tus emociones</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Estás en un proceso de transformación y buscas acompañamiento</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Quieres herramientas prácticas para tu bienestar diario</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              Tu transformación te espera
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              Permíteme acompañarte en este camino
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              No tienes que hacerlo sola. En un espacio seguro y compasivo, 
              podemos explorar juntas lo que necesitas sanar y transformar. 
              Cada paso cuenta, cada proceso es válido.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Agendar Sesión
              </Link>
              <Link to="/contacto" className="btn btn-outline btn-large">
                Preguntar Más
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Bioemocion