import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './HabitarEmociones.css'
import habitarHero from '../assets/images/habitar-emociones/habitar-emociones-hero.jpg'

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

function HabitarEmociones() {
  return (
    <div className="habitar-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background">
          <div 
            className="hero-image"
            style={{ backgroundImage: `url(${habitarHero})` }}
            role="img"
            aria-label="Grupo en contemplación junto al lago durante una experiencia de Habitar Emociones"
          ></div>
          <div className="hero-overlay"></div>
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
              EXPERIENCIA SOMÁTICA · AUTOESCUCHA · PRESENCIA
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Habitar Emociones
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Un espacio para aprender a sentir, escuchar y canalizar las emociones. 
              El cuerpo como brújula interior para regresar a la calma, la presencia 
              y la conexión contigo.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Conocer más
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introducción - Editorial Section */}
      <section className="section intro-section">
        <div className="container container-wide">
          <motion.div 
            className="intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="intro-content" variants={fadeInUp}>
              <span className="intro-eyebrow">CUERPO · EMOCIÓN · CONSCIENCIA</span>
              <h2>Aprender a sentir es aprender a vivir plenamente.</h2>
              <div className="about-divider"></div>
              <p className="intro-description">
                A través del trabajo somático y la presencia consciente, cultivamos 
                una relación más amable con nuestras emociones. Aprendemos a reconocer 
                sus mensajes y a permitir que el cuerpo se convierta en una brújula interior.
              </p>
              <div className="intro-cta">
                <Link to="/reservas" className="btn btn-primary">
                  Explorar experiencia
                </Link>
              </div>
            </motion.div>
            <motion.div className="intro-image" variants={fadeInUp}>
              <div className="intro-image-frame">
                <img 
                  src={habitarHero} 
                  alt="Espacio de presencia y conexión con la naturaleza durante una práctica emocional"
                  className="intro-image-real"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pilares */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">El Camino</span>
            <h2 className="section-title">Tres Pasos para Habitar tus Emociones</h2>
          </motion.div>

          <motion.div 
            className="steps-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="step-card card-soft" variants={fadeInUp}>
              <div className="step-number">01</div>
              <div className="step-icon">❤️</div>
              <h3>Sentir</h3>
              <p>
                Ubicamos las emociones y las sensaciones corporales con presencia y escucha.
              </p>
            </motion.div>

            <motion.div className="step-card card-soft" variants={fadeInUp}>
              <div className="step-number">02</div>
              <div className="step-icon">🧭</div>
              <h3>Comprender</h3>
              <p>
                Exploramos el mensaje que cada emoción trae consigo.
              </p>
            </motion.div>

            <motion.div className="step-card card-soft" variants={fadeInUp}>
              <div className="step-number">03</div>
              <div className="step-icon">🌊</div>
              <h3>Regular</h3>
              <p>
                Cultivamos recursos para acompañar lo que sentimos y volver a la calma.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Herramientas */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Herramientas</span>
            <h2 className="section-title">Lo que Integraremos</h2>
          </motion.div>

          <motion.div 
            className="tools-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🌬️</span>
              <h3>Respiración Reguladora</h3>
              <p>Técnicas de breathwork para calmar, energizar o equilibrar según lo que necesites.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🌍</span>
              <h3>Grounding y Enraizamiento</h3>
              <p>Prácticas para establecer seguridad y presencia cuando las emociones abruman.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🤲</span>
              <h3>Toque Consciente</h3>
              <p>El poder del auto-toque para contener, calmar y reconfortar el sistema nervioso.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🗣️</span>
              <h3>Voz y Sonido</h3>
              <p>Usar la voz para liberar, expresar y mover la energía emocional estancada.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">📝</span>
              <h3>Escritura Somática</h3>
              <p>Diálogo con el cuerpo y las emociones a través de la escritura consciente.</p>
            </motion.div>

            <motion.div className="tool-item" variants={fadeInUp}>
              <span className="tool-icon">🧘</span>
              <h3>Meditación Corporal</h3>
              <p>Prácticas de escaneo corporal y presencia para desarrollar la conciencia somática.</p>
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
              Un espacio seguro para sentir
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              Permíteme acompañarte en este viaje interior
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              No tienes que hacerlo sol@. En un espacio contenido y compasivo, 
              podemos explorar juntas tu mundo emocional, desarrollando las 
              herramientas para habitarlo con mayor seguridad y sabiduría.
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

export default HabitarEmociones