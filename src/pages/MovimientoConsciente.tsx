import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './MovimientoConsciente.css'

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

function MovimientoConsciente() {
  return (
    <div className="movimiento-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
        </div>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="hero-content"
          >
            <motion.span className="section-tag" variants={fadeInUp}>
              Meditación en Movimiento
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Movimiento Consciente
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Una experiencia de yoga bailado donde el cuerpo se convierte 
              en templo, el movimiento en plegaria y la respiración en ancla.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Conocer Fechas
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
            <motion.div className="intro-image" variants={fadeInUp}>
              <div className="intro-image-frame">
                <div className="intro-image-placeholder">
                  <span className="intro-icon">🌊</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="intro-content" variants={fadeInUp}>
              <span className="section-tag">¿Qué es?</span>
              <h2>El Cuerpo en Danza con el Alma</h2>
              <div className="about-divider"></div>
              <p>
                Movimiento Consciente es una invitación a habitar tu cuerpo de 
                manera plena y amorosa. A través de una práctica que fusiona la 
                meditación con el movimiento intuitivo, creamos un espacio donde 
                puedes soltar el juicio y simplemente ser.
              </p>
              <p>
                No se trata de bailar "bien" o seguir coreografías. Se trata de 
                escuchar la sabiduría del cuerpo, de permitir que el movimiento 
                surja desde dentro, de convertirte en testigo y participante de 
                tu propia danza interior.
              </p>
              <p>
                Cada sesión es un viaje: comenzamos enraizando, conectando con 
                la respiración, y gradualmente permitimos que el cuerpo se 
                exprese libremente, liberando tensiones y accediendo a estados 
                meditativos profundos a través del movimiento.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Elementos */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">La Práctica</span>
            <h2 className="section-title">Elementos del Movimiento Consciente</h2>
            <p className="section-subtitle">
              Cada sesión integra diferentes dimensiones para una experiencia 
              completa de conexión cuerpo-mente-espíritu.
            </p>
          </motion.div>

          <motion.div 
            className="elements-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="element-card" variants={fadeInUp}>
              <div className="element-icon">🌬️</div>
              <h3>Respiración</h3>
              <p>
                La respiración consciente es el hilo conductor. Aprendemos a 
                respirar de manera profunda y rítmica, usando el aliento como 
                ancla y como combustible para el movimiento.
              </p>
            </motion.div>

            <motion.div className="element-card" variants={fadeInUp}>
              <div className="element-icon">🎵</div>
              <h3>Música</h3>
              <p>
                La música es cuidadosamente seleccionada para guiar el viaje: 
                desde ritmos suaves y meditativos hasta beats más orgánicos 
                que invitan al movimiento libre.
              </p>
            </motion.div>

            <motion.div className="element-card" variants={fadeInUp}>
              <div className="element-icon">💃</div>
              <h3>Movimiento Intuitivo</h3>
              <p>
                No hay pasos que seguir. El cuerpo se mueve como necesita 
                moverse: suave, intenso, lento, expansivo. Cada gesto es 
                una expresión auténtica del momento.
              </p>
            </motion.div>

            <motion.div className="element-card" variants={fadeInUp}>
              <div className="element-icon">🧘</div>
              <h3>Presencia</h3>
              <p>
                Cultivamos la atención plena en cada movimiento, observando 
                sensaciones, emociones y pensamientos sin juicio, simplemente 
                permitiendo que fluyan.
              </p>
            </motion.div>

            <motion.div className="element-card" variants={fadeInUp}>
              <div className="element-icon">🔥</div>
              <h3>Liberación</h3>
              <p>
                El movimiento consciente permite liberar tensiones almacenadas, 
                emociones reprimidas y patrones estancados, creando espacio 
                para la vitalidad y la alegría.
              </p>
            </motion.div>

            <motion.div className="element-card" variants={fadeInUp}>
              <div className="element-icon">🌿</div>
              <h3>Integración</h3>
              <p>
                Cerramos cada sesión con un tiempo de quietud, permitiendo 
                que el cuerpo integre la experiencia y que la calma post-movimiento 
                se asiente profundamente.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Beneficios</span>
            <h2 className="section-title">Lo que el Movimiento te Ofrece</h2>
          </motion.div>

          <motion.div 
            className="benefits-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="benefit-item" variants={fadeInUp}>
              <span className="benefit-icon">✦</span>
              <div className="benefit-content">
                <h3>Conexión Corporal Profunda</h3>
                <p>
                  Recuperas la relación con tu cuerpo, aprendiendo a escuchar 
                  sus mensajes y honrar sus necesidades.
                </p>
              </div>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <span className="benefit-icon">✦</span>
              <div className="benefit-content">
                <h3>Liberación de Estrés y Tensión</h3>
                <p>
                  El movimiento permite soltar lo que el cuerpo ha estado 
                  reteniendo, creando una sensación de ligereza y paz.
                </p>
              </div>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <span className="benefit-icon">✦</span>
              <div className="benefit-content">
                <h3>Estado Meditativo Accesible</h3>
                <p>
                  Para quienes les cuesta meditar en quietud, el movimiento 
                  consciente ofrece una puerta de entrada natural a la presencia.
                </p>
              </div>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <span className="benefit-icon">✦</span>
              <div className="benefit-content">
                <h3>Expresión Emocional Segura</h3>
                <p>
                  El cuerpo puede expresar lo que las palabras no alcanzan, 
                  permitiendo una catarsis suave y contenida.
                </p>
              </div>
            </motion.div>

            <motion.div className="benefit-item" variants={fadeInUp}>
              <span className="benefit-icon">✦</span>
              <div className="benefit-content">
                <h3>Alegría y Vitalidad</h3>
                <p>
                  Moverte libremente despierta la energía vital, la creatividad 
                  y una sensación de plenitud y alegría.
                </p>
              </div>
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
              Tu cuerpo te espera
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              Permíteme guiarte en esta danza interior
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              No necesitas experiencia previa ni saber "bailar". Solo necesitas 
              venir con el corazón abierto y la disposición de explorar. El 
              movimiento ya vive en ti; solo necesitas permitirle fluir.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Solicitar Información
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

export default MovimientoConsciente