import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Acompanamiento.css'

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

function Acompanamiento() {
  return (
    <div className="acompanamiento-page">
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
              Servicio Premium
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Acompañamiento Holístico 2026
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Un viaje profundo de transformación donde integramos cuerpo, mente y espíritu 
              a través de un programa personalizado de coaching bioenergético.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agenda una Sesión
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
              <h2>Un Espacio Sagrado de Transformación</h2>
              <div className="about-divider"></div>
              <p>
                El Acompañamiento Holístico es un programa integral diseñado para quienes 
                buscan una transformación profunda y duradera. A través de sesiones personalizadas, 
                trabajamos en la reconexión con tu esencia más auténtica y en la liberación de 
                patrones que ya no te sirven.
              </p>
              <p>
                Este enfoque integra herramientas de coaching bioenergético, terapia somática, 
                diseño humano y sabiduría ancestral para crear un espacio donde puedas explorar 
                todas las dimensiones de tu ser: física, emocional, mental y espiritual.
              </p>
              <p>
                Cada sesión es un encuentro sagrado donde honramos tu proceso único y te 
                acompañamos con amor y presencia en tu camino hacia la plenitud.
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

      {/* Pilares del Programa */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Pilares</span>
            <h2 className="section-title">Los Cuatro Pilares del Acompañamiento</h2>
            <p className="section-subtitle">
              Cada dimensión de tu ser merece atención y sanación para experimentar 
              una transformación completa.
            </p>
          </motion.div>

          <motion.div 
            className="pillars-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="pillar-card card-soft" variants={fadeInUp}>
              <div className="pillar-number">01</div>
              <div className="pillar-icon">🧬</div>
              <h3>Cuerpo</h3>
              <p>
                Reconectamos con la sabiduría del cuerpo a través de técnicas somáticas, 
                respiración consciente y movimiento. Liberamos tensiones almacenadas y 
                restauramos el flujo natural de energía vital.
              </p>
            </motion.div>

            <motion.div className="pillar-card card-soft" variants={fadeInUp}>
              <div className="pillar-number">02</div>
              <div className="pillar-icon">🧠</div>
              <h3>Mente</h3>
              <p>
                Transformamos patrones de pensamiento limitantes y creencias heredadas. 
                Cultivamos una relación más consciente con nuestros pensamientos y emociones, 
                creando espacio para nuevas posibilidades.
              </p>
            </motion.div>

            <motion.div className="pillar-card card-soft" variants={fadeInUp}>
              <div className="pillar-number">03</div>
              <div className="pillar-icon">💖</div>
              <h3>Emociones</h3>
              <p>
                Honramos y procesamos emociones reprimidas en un espacio seguro. 
                Aprendemos a navegar el mundo emocional con mayor fluidez y 
                desarrollamos una relación más compasiva con nosotros mismos.
              </p>
            </motion.div>

            <motion.div className="pillar-card card-soft" variants={fadeInUp}>
              <div className="pillar-number">04</div>
              <div className="pillar-icon">🌟</div>
              <h3>Espíritu</h3>
              <p>
                Reconectamos con tu esencia espiritual y propósito de alma. 
                Exploramos preguntas profundas sobre el significado y cultivamos 
                una conexión más consciente con lo sagrado en lo cotidiano.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Metodología */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Metodología</span>
            <h2 className="section-title">¿Cómo Trabajamos?</h2>
            <p className="section-subtitle">
              Cada programa se adapta a tus necesidades únicas, pero seguimos 
              una estructura que garantiza profundidad y transformación.
            </p>
          </motion.div>

          <motion.div 
            className="methodology-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="method-card" variants={fadeInUp}>
              <div className="method-step">
                <span className="method-number">1</span>
                <h3>Sesión de Descubrimiento</h3>
                <p>
                  Una llamada inicial gratuita de 30 minutos para conocernos, 
                  entender tus necesidades y determinar si somos una buena 
                  combinación para este viaje juntas.
                </p>
              </div>
            </motion.div>

            <motion.div className="method-card" variants={fadeInUp}>
              <div className="method-step">
                <span className="method-number">2</span>
                <h3>Evaluación Integral</h3>
                <p>
                  En las primeras sesiones, realizamos una evaluación profunda 
                  de todas las áreas de tu vida para identificar patrones, 
                  bloqueos y oportunidades de transformación.
                </p>
              </div>
            </motion.div>

            <motion.div className="method-card" variants={fadeInUp}>
              <div className="method-step">
                <span className="method-number">3</span>
                <h3>Diseño del Programa</h3>
                <p>
                  Creamos un plan personalizado que integra las herramientas 
                  más adecuadas para tu proceso: bioenergía, trabajo somático, 
                  diseño humano, meditación y más.
                </p>
              </div>
            </motion.div>

            <motion.div className="method-card" variants={fadeInUp}>
              <div className="method-step">
                <span className="method-number">4</span>
                <h3>Sesiones Semanales</h3>
                <p>
                  Nos reunimos semanal o quincenalmente para trabajar en tu 
                  proceso. Cada sesión incluye trabajo experiencial, diálogo 
                  profundo y herramientas para integrar entre sesiones.
                </p>
              </div>
            </motion.div>

            <motion.div className="method-card" variants={fadeInUp}>
              <div className="method-step">
                <span className="method-number">5</span>
                <h3>Integración y Cierre</h3>
                <p>
                  A medida que avanzas, integramos los aprendizajes y 
                  desarrollamos prácticas sostenibles para mantener tu 
                  bienestar a largo plazo.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Herramientas</span>
            <h2 className="section-title">Herramientas que Integramos</h2>
            <p className="section-subtitle">
              Seleccionamos las técnicas más efectivas de diversas tradiciones 
              para crear un enfoque verdaderamente holístico.
            </p>
          </motion.div>

          <motion.div 
            className="tools-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🌿</span>
              <h3>Coaching Bioenergético</h3>
              <p>Trabajo con la energía vital del cuerpo para liberar bloqueos y restaurar el equilibrio.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🧘</span>
              <h3>Terapia Somática</h3>
              <p>Conexión con las sensaciones corporales para procesar experiencias y sanar trauma.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🌙</span>
              <h3>Respiración Consciente</h3>
              <p>Técnicas de breathwork para regular el sistema nervioso y acceder a estados profundos.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🔮</span>
              <h3>Diseño Humano</h3>
              <p>Autoconocimiento a través del mapa único de tu naturaleza energética.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🧠</span>
              <h3>Mindfulness y Meditación</h3>
              <p>Prácticas de presencia para cultivar paz interior y claridad mental.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🌊</span>
              <h3>Trabajo Emocional</h3>
              <p>Procesamiento y liberación de emociones reprimidas en un espacio seguro.</p>
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
              Tu transformación comienza aquí
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              ¿Lista para embarcarte en este viaje?
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              El Acompañamiento Holístico es un compromiso profundo contigo misma. 
              Si sientes el llamado a transformar tu vida y reconectar con tu esencia, 
              estoy aquí para guiarte en este camino sagrado.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agenda una Sesión
              </Link>
              <Link to="/sobre-mi" className="btn btn-outline btn-large">
                Conóceme Más
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Acompanamiento