import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Serenidad.css'

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

function Serenidad() {
  return (
    <div className="serenidad-page">
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
              Sanación Somática
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Serenidad
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Técnicas somáticas y de respiración para liberar tensión, 
              sanar trauma y encontrar paz interior profunda.
            </motion.p>
            <motion.div className="session-info" variants={fadeInUp}>
              <span className="info-badge">1 hora de sesión</span>
              <span className="info-badge">Online y Presencial</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agenda tu Sesión
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
                  <span className="intro-icon">🌙</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="intro-content" variants={fadeInUp}>
              <span className="section-tag">¿Qué es Serenidad?</span>
              <h2>El Camino hacia la Paz Interior</h2>
              <div className="about-divider"></div>
              <p>
                Serenidad es una experiencia terapéutica diseñada para ayudarte a liberar 
                la tensión acumulada en el cuerpo y encontrar un estado de calma profunda 
                y duradera. A través de técnicas somáticas suaves y prácticas de respiración 
                consciente, aprendemos a regular el sistema nervioso y a soltar lo que ya 
                no nos sirve.
              </p>
              <p>
                En este espacio seguro, honramos tu ritmo natural y te acompañamos con 
                delicadeza en el proceso de liberar patrones de estrés, ansiedad y trauma 
                almacenados en el cuerpo. Cada sesión es una invitación a regresar a casa, 
                a tu centro, a tu esencia serena.
              </p>
              <p>
                No se trata de luchar contra lo que sientes, sino de aprender a estar 
                contigo misma desde la compasión y la aceptación, permitiendo que la 
                sanación ocurra de manera natural y orgánica.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Beneficios</span>
            <h2 className="section-title">Lo que Serenidad puede ofrecerte</h2>
            <p className="section-subtitle">
              Una práctica regular de técnicas somáticas y de respiración 
              puede transformar profundamente tu relación con el estrés y la ansiedad.
            </p>
          </motion.div>

          <motion.div 
            className="benefits-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon">🌊</div>
              <h3>Liberación de Tensión</h3>
              <p>
                Liberas la tensión crónica almacenada en el cuerpo, 
                especialmente en áreas comunes como cuello, hombros y mandíbula.
              </p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon">🧘</div>
              <h3>Regulación del Sistema Nervioso</h3>
              <p>
                Aprendes a regular estados de hiperactivación (ansiedad) 
                e hipoactivación (depresión) para encontrar equilibrio.
              </p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon">💤</div>
              <h3>Mejora del Sueño</h3>
              <p>
                Desarrollas prácticas que te ayudan a conciliar el sueño 
                más fácilmente y disfrutar de un descanso más profundo.
              </p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon">🌿</div>
              <h3>Sanación del Trauma</h3>
              <p>
                Procesas experiencias traumáticas de manera segura y gradual, 
                permitiendo que el cuerpo libere lo que ha estado reteniendo.
              </p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon">🌬️</div>
              <h3>Respiración Consciente</h3>
              <p>
                Recuperas tu capacidad natural de respirar plenamente, 
                accediendo a un estado de calma que siempre está disponible.
              </p>
            </motion.div>

            <motion.div className="benefit-card" variants={fadeInUp}>
              <div className="benefit-icon">💖</div>
              <h3>Paz Interior</h3>
              <p>
                Cultivas una relación más serena contigo misma y con la vida, 
                encontrando espacios de quietud en medio del caos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Técnicas */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Prácticas</span>
            <h2 className="section-title">Técnicas que Integramos</h2>
            <p className="section-subtitle">
              Cada sesión es única y se adapta a tus necesidades, 
              pero estas son algunas de las herramientas que utilizamos.
            </p>
          </motion.div>

          <motion.div 
            className="techniques-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="technique-card card-soft" variants={fadeInUp}>
              <div className="technique-icon">🌬️</div>
              <h3>Breathwork Somático</h3>
              <p>
                Técnicas de respiración específicas para regular el sistema 
                nervioso, liberar tensión emocional y acceder a estados 
                profundos de relajación y presencia.
              </p>
            </motion.div>

            <motion.div className="technique-card card-soft" variants={fadeInUp}>
              <div className="technique-icon">🧘</div>
              <h3>Movimiento Consciente</h3>
              <p>
                Movimientos suaves y espontáneos que permiten al cuerpo 
                liberar tensiones almacenadas y reconectar con su sabiduría 
                natural de sanación.
              </p>
            </motion.div>

            <motion.div className="technique-card card-soft" variants={fadeInUp}>
              <div className="technique-icon">🌍</div>
              <h3>Grounding y Enraizamiento</h3>
              <p>
                Prácticas para conectar con la tierra y establecer una 
                sensación de seguridad, estabilidad y presencia en el cuerpo.
              </p>
            </motion.div>

            <motion.div className="technique-card card-soft" variants={fadeInUp}>
              <div className="technique-icon">🔄</div>
              <h3>Pendulación</h3>
              <p>
                Oscilación consciente entre sensaciones agradables y 
                desafiantes para construir tolerancia, resiliencia y 
                capacidad de regulación.
              </p>
            </motion.div>

            <motion.div className="technique-card card-soft" variants={fadeInUp}>
              <div className="technique-icon">💧</div>
              <h3>Titulación</h3>
              <p>
                Trabajar con pequeñas dosis de experiencia para evitar 
                la re-traumatización y permitir una integración gradual 
                y respetuosa.
              </p>
            </motion.div>

            <motion.div className="technique-card card-soft" variants={fadeInUp}>
              <div className="technique-icon">🧠</div>
              <h3>Mindfulness Somático</h3>
              <p>
                Atención plena dirigida a las sensaciones corporales 
                sin juicio ni interpretación, cultivando una relación 
                más amable con la experiencia interna.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">¿Es para ti?</span>
            <h2 className="section-title">Serenidad es ideal si...</h2>
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
              <p>Sientes ansiedad o estrés crónico que afecta tu vida diaria</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Experimentas tensión física constante en el cuerpo</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Tienes dificultad para relajarte o "desconectar"</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Has experimentado trauma y buscas formas suaves de sanar</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Sufres de insomnio o problemas de sueño</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Buscas herramientas prácticas para gestionar emociones intensas</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Te sientes desconectada de tu cuerpo</p>
            </motion.div>

            <motion.div className="for-you-item" variants={fadeInUp}>
              <span className="check-icon">✓</span>
              <p>Deseas cultivar una práctica regular de autocuidado</p>
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
              Tu paz interior te espera
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              Permíteme acompañarte hacia la serenidad
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              No tienes que cargar con todo esto sola. En un espacio seguro y 
              compasivo, podemos trabajar juntas para liberar lo que ya no te sirve 
              y reconectar con tu esencia serena.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agenda tu Sesión
              </Link>
              <Link to="/recursos" className="btn btn-outline btn-large">
                Explorar Recursos
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Serenidad