import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Talleres.css'
import retreatSunset from '../assets/images/talleres/retreat-sunset.jpg'

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

function Talleres() {
  return (
    <div className="talleres-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background">
          <div 
            className="hero-image"
            style={{ backgroundImage: `url(${retreatSunset})` }}
            role="img"
            aria-label="Paisaje natural al atardecer para experiencias y retiros"
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
              COMUNIDAD · NATURALEZA · PRESENCIA
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Talleres y Retiros
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Espacios para detenerte, respirar y compartir con otros 
              un camino de transformación, presencia y conexión con la naturaleza.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
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

      {/* Próximas Experiencias */}
      <section className="section proximas-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Próximamente</span>
            <h2 className="section-title">Próximas experiencias</h2>
            <p className="section-subtitle">
              Muy pronto encontrarás aquí fechas, detalles e información 
              para participar en talleres, círculos y retiros.
            </p>
          </motion.div>

          <motion.div 
            className="proximas-card card-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="proximas-badge">Próximamente</div>
            <h3>Nuevas fechas por anunciar</h3>
            <p>
              Estamos preparando nuevas experiencias grupales para 2024. 
              Suscríbete a nuestro boletín o síguenos en redes sociales 
              para ser la primera en enterarte.
            </p>
            <Link to="/contacto" className="btn btn-secondary">
              Avisarme cuando haya fechas
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Talleres */}
      <section className="section talleres-lista-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Experiencias Grupales</span>
            <h2 className="section-title">Talleres</h2>
            <p className="section-subtitle">
              Encuentros para explorar el cuerpo, las emociones, la respiración 
              y la presencia a través de prácticas somáticas, movimiento consciente 
              y autoescucha.
            </p>
          </motion.div>

          <motion.div 
            className="talleres-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="taller-card card-soft" variants={fadeInUp}>
              <div className="taller-icon">🌊</div>
              <h3>Movimiento Consciente</h3>
              <p>
                Meditación en movimiento y respiración consciente. 
                Una experiencia corporal para habitar tu cuerpo con presencia.
              </p>
              <Link to="/movimiento-consciente" className="btn btn-outline">
                Solicitar información
              </Link>
            </motion.div>

            <motion.div className="taller-card card-soft" variants={fadeInUp}>
              <div className="taller-icon">💖</div>
              <h3>Habitar Emociones</h3>
              <p>
                Experiencia somática para sentir, comprender y regular 
                tus emociones. Tu cuerpo como guía interior.
              </p>
              <Link to="/habitar-emociones" className="btn btn-outline">
                Solicitar información
              </Link>
            </motion.div>

            <motion.div className="taller-card card-soft" variants={fadeInUp}>
              <div className="taller-icon">🌬️</div>
              <h3>Regulación Emocional</h3>
              <p>
                Herramientas prácticas para gestionar el estrés, la ansiedad 
                y las emociones intensas desde el cuerpo y la respiración.
              </p>
              <Link to="/reservas" className="btn btn-outline">
                Solicitar información
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Retiros */}
      <section className="section retiros-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Inmersión Profunda</span>
            <h2 className="section-title">Retiros</h2>
            <p className="section-subtitle">
              Espacios de pausa profunda para reconectar contigo, 
              con la naturaleza y con el silencio interior.
            </p>
          </motion.div>

          <motion.div 
            className="retiro-card card-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="retiro-badge">Próximamente</div>
            <div className="retiro-content">
              <h3>Retiros en silencio</h3>
              <p>
                Experiencias de inmersión profunda donde el silencio se convierte 
                en el espacio para escuchar lo que siempre ha estado ahí. 
                Conexión con la naturaleza, prácticas somáticas y meditación.
              </p>
              <Link to="/reservas" className="btn btn-secondary">
                Quiero recibir información
              </Link>
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
              Únete a la comunidad
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              ¿Te gustaría participar en una próxima experiencia?
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              Puedes solicitar información o escribir directamente por WhatsApp 
              para conocer las próximas fechas y ser parte de estos espacios 
              de transformación y conexión.
            </motion.p>
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

export default Talleres