import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Circulos.css'

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

function Circulos() {
  return (
    <div className="circulos-page">
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
              Espacios Sagrados
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Círculos Ceremoniales
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Espacios sagrados de encuentro comunitario para celebrar 
              ciclos, honrar ancestros y conectar en unidad.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contacto" className="btn btn-primary btn-large">
                Únete al Próximo Círculo
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
                  <span className="intro-icon">🔵</span>
                </div>
              </div>
            </motion.div>
            <motion.div className="intro-content" variants={fadeInUp}>
              <span className="section-tag">El Poder del Círculo</span>
              <h2>Donde lo Sagrado se Encuentra</h2>
              <div className="about-divider"></div>
              <p>
                Desde tiempos inmemoriales, los círculos ceremoniales han sido el 
                corazón de las comunidades. En círculo nos reunimos para celebrar, 
                sanar, honrar y conectar con algo más grande que nosotros mismas.
              </p>
              <p>
                En Sendero Holístico, creamos espacios seguros y sagrados donde 
                puedes experimentar el poder transformador del círculo. Cada 
                ceremonia es una invitación a soltar lo individual y fundirte 
                con la energía colectiva del grupo.
              </p>
              <p>
                No necesitas experiencia previa. Solo venir con el corazón abierto 
                y la disposición de ser testigo y participante de lo sagrado.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tipos de Círculos */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Ceremonias</span>
            <h2 className="section-title">Nuestros Círculos</h2>
            <p className="section-subtitle">
              Cada círculo tiene su propia energía y propósito. 
              Encuentra el que resuena contigo.
            </p>
          </motion.div>

          <motion.div 
            className="circles-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="circle-card card-soft" variants={fadeInUp}>
              <div className="circle-icon">☀️</div>
              <h3>Apertura de Ciclo Solar</h3>
              <p className="circle-description">
                Ceremonias para marcar los solsticios, equinoccios y momentos 
                clave del ciclo solar. Honramos los ritmos de la naturaleza y 
                nos alineamos con las energías de cada estación.
              </p>
              <ul className="circle-features">
                <li>Activaciones de intención</li>
                <li>Ofrendas elementales</li>
                <li>Meditaciones guiadas</li>
                <li>Compartir en círculo</li>
              </ul>
            </motion.div>

            <motion.div className="circle-card card-soft" variants={fadeInUp}>
              <div className="circle-icon">🌿</div>
              <h3>Círculo de Ancestros</h3>
              <p className="circle-description">
                Un espacio para honrar a quienes vinieron antes que nosotras, 
                sanar linajes y recibir la sabiduría de nuestras raíces. 
                Conectamos con la fuerza de nuestras antepasadas.
              </p>
              <ul className="circle-features">
                <li>Altar ancestral</li>
                <li>Sanación de linaje</li>
                <li>Invocaciones y ofrendas</li>
                <li>Círculo de palabra</li>
              </ul>
            </motion.div>

            <motion.div className="circle-card card-soft" variants={fadeInUp}>
              <div className="circle-icon">💕</div>
              <h3>Unión y Bendición</h3>
              <p className="circle-description">
                Ceremonias para celebrar uniones sagradas: bodas, compromisos, 
                nuevas etapas en pareja. Creamos un espacio mágico donde el 
                amor es testificado y bendecido por la comunidad.
              </p>
              <ul className="circle-features">
                <li>Rituales de unión</li>
                <li>Bendiciones comunitarias</li>
                <li>Ceremonias personalizadas</li>
                <li>Celebración sagrada</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué experimentarás? */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Experiencia</span>
            <h2 className="section-title">¿Qué Vivirás en un Círculo?</h2>
            <p className="section-subtitle">
              Cada círculo es único, pero todos comparten elementos 
              que crean un espacio sagrado de transformación.
            </p>
          </motion.div>

          <motion.div 
            className="experience-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="experience-item" variants={fadeInUp}>
              <div className="experience-icon">🔥</div>
              <h3>Apertura Sagrada</h3>
              <p>
                Creamos el espacio ceremonial con invocaciones, 
                purificación y establecimiento de intención colectiva.
              </p>
            </motion.div>

            <motion.div className="experience-item" variants={fadeInUp}>
              <div className="experience-icon">🥁</div>
              <h3>Trabajo Energético</h3>
              <p>
                Tambores, cantos, movimiento y meditaciones que nos 
                conectan con estados expandidos de conciencia.
              </p>
            </motion.div>

            <motion.div className="experience-item" variants={fadeInUp}>
              <div className="experience-icon">💬</div>
              <h3>Círculo de Palabra</h3>
              <p>
                Compartimos desde el corazón en un espacio de escucha 
                profunda, sin juicios ni interrupciones.
              </p>
            </motion.div>

            <motion.div className="experience-item" variants={fadeInUp}>
              <div className="experience-icon">🎁</div>
              <h3>Ofrendas y Rituales</h3>
              <p>
                Creamos ofrendas personales y colectivas para honrar 
                lo que celebramos, sanamos o liberamos.
              </p>
            </motion.div>

            <motion.div className="experience-item" variants={fadeInUp}>
              <div className="experience-icon">🤝</div>
              <h3>Comunidad</h3>
              <p>
                Nos reconocemos como hermanas en el camino, creando 
                lazos auténticos más allá de la ceremonia.
              </p>
            </motion.div>

            <motion.div className="experience-item" variants={fadeInUp}>
              <div className="experience-icon">🌙</div>
              <h3>Cierre e Integración</h3>
              <p>
                Cerramos el círculo con gratitud y herramientas para 
                integrar la experiencia en la vida cotidiana.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonio específico */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Testimonio</span>
            <motion.div className="testimonial-featured card-soft" variants={fadeInUp}>
              <div className="testimonial-quote-large">"</div>
              <p className="testimonial-text-large">
                Los círculos ceremoniales me conectaron con una comunidad hermosa 
                y me permitieron sanar heridas que ni sabía que tenía. Es un espacio 
                mágico y seguro donde el alma puede respirar. Cada ceremonia es una 
                experiencia transformadora que me recuerda que no estoy sola en este camino.
              </p>
              <div className="testimonial-author">
                <span className="author-name">Laura M.</span>
                <span className="author-detail">Participante de Círculos Ceremoniales</span>
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
              El círculo te espera
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              Únete a Nuestra Comunidad Sagrada
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              No hay nada como la experiencia de estar en círculo con otras almas 
              que caminan el mismo sendero. Te invitamos a ser parte de este espacio 
              de celebración, sanación y conexión.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/contacto" className="btn btn-primary btn-large">
                Únete al Próximo Círculo
              </Link>
              <Link to="/testimonios" className="btn btn-outline btn-large">
                Ver Más Testimonios
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Circulos