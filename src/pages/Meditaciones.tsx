import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Meditaciones.css'

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

function Meditaciones() {
  const meditaciones = [
    {
      icon: '🌅',
      title: 'Arrancar tu Día',
      description: 'Meditaciones matutinas para comenzar el día con intención, claridad y presencia.',
      duration: '5-15 min'
    },
    {
      icon: '🌿',
      title: 'Enraizamiento',
      description: 'Prácticas para conectar con la tierra, establecer seguridad y encontrar estabilidad.',
      duration: '10-20 min'
    },
    {
      icon: '🌊',
      title: 'Relajación',
      description: 'Meditaciones suaves para soltar tensión y encontrar calma profunda.',
      duration: '15-30 min'
    },
    {
      icon: '🌬️',
      title: 'Ansiedad',
      description: 'Prácticas específicas para regular el sistema nervioso y calmar la ansiedad.',
      duration: '5-20 min'
    },
    {
      icon: '💤',
      title: 'Descanso Profundo',
      description: 'Meditaciones para preparar el cuerpo y la mente para un sueño reparador.',
      duration: '20-40 min'
    },
    {
      icon: '💖',
      title: 'Autocompasión',
      description: 'Prácticas de bondad amorosa para cultivar una relación más amable contigo misma.',
      duration: '10-20 min'
    }
  ]

  return (
    <div className="meditaciones-page">
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
              Prácticas Guiadas
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Meditaciones Guiadas
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Prácticas de relajación, enraizamiento y regulación 
              para tu bienestar diario. Encuentra momentos de calma en medio del caos.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Solicitar Acceso
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introducción */}
      <section className="section">
        <div className="container">
          <motion.div 
            className="intro-text-centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="section-tag" variants={fadeInUp}>El Regalo de la Presencia</motion.span>
            <motion.h2 className="intro-title" variants={fadeInUp}>
              Un Espacio de Calma para Ti
            </motion.h2>
            <motion.div className="intro-divider" variants={fadeInUp}></motion.div>
            <motion.p className="intro-text" variants={fadeInUp}>
              En el ajetreo de la vida diaria, es fácil perder la conexión con 
              nuestro centro. Estas meditaciones guiadas son una invitación a 
              detenerte, respirar y recordar que la calma siempre está disponible 
              dentro de ti.
            </motion.p>
            <motion.p className="intro-text" variants={fadeInUp}>
              Cada práctica está diseñada para acompañarte en diferentes momentos 
              del día y estados del ánimo. No necesitas experiencia previa; solo 
              venir con la disposición de estar presente, aunque sea por unos minutos.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categorías de Meditaciones */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Prácticas</span>
            <h2 className="section-title">Encuentra tu Meditación</h2>
            <p className="section-subtitle">
              Cada categoría está diseñada para acompañarte en diferentes 
              momentos y necesidades.
            </p>
          </motion.div>

          <motion.div 
            className="meditaciones-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {meditaciones.map((meditacion, index) => (
              <motion.div key={index} className="meditacion-card card-soft" variants={fadeInUp}>
                <div className="meditacion-icon">{meditacion.icon}</div>
                <div className="meditacion-duration">{meditacion.duration}</div>
                <h3>{meditacion.title}</h3>
                <p>{meditacion.description}</p>
                <button className="btn btn-ghost btn-small">
                  <span>Escuchar</span>
                  <span className="play-icon">▶</span>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cómo practicar */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Sugerencias</span>
            <h2 className="section-title">Cómo Aprovechar tus Meditaciones</h2>
          </motion.div>

          <motion.div 
            className="tips-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="tip-item" variants={fadeInUp}>
              <span className="tip-icon">🌿</span>
              <h3>Encuentra un Espacio Tranquilo</h3>
              <p>
                Busca un lugar donde no te interrumpan. Puede ser tu habitación, 
                un rincón del jardín, o incluso tu auto estacionado.
              </p>
            </motion.div>

            <motion.div className="tip-item" variants={fadeInUp}>
              <span className="tip-icon">📱</span>
              <h3>Silencia las Distracciones</h3>
              <p>
                Pon tu teléfono en modo silencio. Estos minutos son para ti, 
                para desconectar del mundo y reconectar contigo.
              </p>
            </motion.div>

            <motion.div className="tip-item" variants={fadeInUp}>
              <span className="tip-icon">🧘</span>
              <h3>Adopta una Postura Cómoda</h3>
              <p>
                Siéntate o recuéstate de manera que tu cuerpo pueda estar 
                relajado pero alerta. No hay una posición "correcta".
              </p>
            </motion.div>

            <motion.div className="tip-item" variants={fadeInUp}>
              <span className="tip-icon">🌬️</span>
              <h3>Permite que la Respiración Fluja</h3>
              <p>
                No forces tu respiración. Deja que sea natural, suave, 
                permitiendo que cada exhalación te invite a soltar.
              </p>
            </motion.div>

            <motion.div className="tip-item" variants={fadeInUp}>
              <span className="tip-icon">💭</span>
              <h3>Suelta las Expectativas</h3>
              <p>
                No hay una manera "perfecta" de meditar. Si tu mente divaga, 
                es normal. Simplemente regresa, una y otra vez.
              </p>
            </motion.div>

            <motion.div className="tip-item" variants={fadeInUp}>
              <span className="tip-icon">⏰</span>
              <h3>Sé Constante</h3>
              <p>
                La magia está en la práctica regular. Aunque sean solo 5 minutos 
                al día, la constancia transforma.
              </p>
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
              La calma te espera
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              Comienza tu Práctica Hoy
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              No necesitas esperar el momento perfecto. Este momento es perfecto. 
              Elige una meditación, presiona play y permíteme guiarte hacia un 
              espacio de calma y presencia.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Solicitar Acceso
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

export default Meditaciones