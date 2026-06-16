import { motion } from 'framer-motion'
import './Reservas.css'

// ============================================
// CONFIGURACIÓN - Google Form URL
// ============================================
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfC1prVykYc7dC1ZpkAihn-BV2C89j2JYiy5MymPSIvn3mPbA/viewform"

// ============================================
// DATOS DE SERVICIOS
// ============================================
  const servicios = [
    {
      id: 'consulta-terapeutica',
      nombre: 'Consulta Terapéutica',
      descripcion: 'Acompañamiento terapéutico individual de sanación psicoemocional con enfoque integrativo de Bioemoción Energética, Somática Cuerpo & Trauma, y Terapia Sistémica & Jungiana.',
      duracion: '75 minutos',
      modalidad: 'Online o presencial',
      icono: '✨',
      botonTexto: 'Solicitar cita',
      numero: '01'
    },
    {
      id: 'cosmos-corporeo',
      nombre: 'Cosmos Corpóreo',
      descripcion: 'Consulta 1:1 para conocer tu Carta Natal Chamánica y Diseño Humano, descubriendo tu propósito, talentos, desafíos y mapa energético único.',
      duracion: '90 minutos',
      modalidad: 'Online o presencial',
      icono: '🌟',
      botonTexto: 'Solicitar cita',
      numero: '02'
    },
    {
      id: 'habitar-emociones',
      nombre: 'Habitar Emociones',
      descripcion: 'Programa de experiencia somática para aprender a sentir, escuchar y canalizar las emociones. El cuerpo como brújula interior.',
      duracion: '60 minutos',
      modalidad: 'Online o presencial',
      icono: '💖',
      botonTexto: 'Solicitar información',
      numero: '03'
    },
  {
    id: 'movimiento-consciente',
    nombre: 'Movimiento Consciente',
    descripcion: 'Meditación en movimiento y respiración consciente. Una experiencia tipo yoga bailado para reconectar con el cuerpo, la presencia y la energía vital.',
    duracion: 'Por definir',
    modalidad: 'Presencial / Taller',
    icono: '🌊',
    botonTexto: 'Solicitar información',
    numero: '04'
  },
  {
    id: 'meditaciones-guiadas',
    nombre: 'Meditaciones Guiadas',
    descripcion: 'Meditaciones y ejercicios de regulación emocional para relajación, ansiedad, enraizamiento y comenzar el día con presencia.',
    duracion: 'Variable',
    modalidad: 'Online',
    icono: '🌙',
    botonTexto: 'Solicitar acceso',
    numero: '05'
  }
]

// ============================================
// ANIMACIONES
// ============================================
const easeOutSmooth = [0.25, 0.1, 0.25, 1] as const

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOutSmooth }
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOutSmooth }
  }
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
function Reservas() {
  return (
    <div className="reservas-page">
      {/* Hero Section */}
      <section className="reservas-hero">
        <div className="hero-background">
          <div className="hero-blob hero-blob-1"></div>
          <div className="hero-blob hero-blob-2"></div>
          <div className="hero-blob hero-blob-3"></div>
        </div>

        <div className="container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-tag" variants={fadeInUp}>
              Tu próximo paso
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Reserva tu espacio
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Tal vez no necesitas tener todas las respuestas ahora. Solo necesitas abrir un espacio para escucharte y permitirte recibir acompañamiento.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Beneficios de confianza */}
      <section className="section beneficios-section">
        <div className="container">
          <motion.div
            className="beneficios-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="beneficio-item" variants={scaleIn}>
              <span className="beneficio-icon">💌</span>
              <h4>Respuesta Personalizada</h4>
              <p>Recibirás una respuesta adaptada a tu situación única y momento actual.</p>
            </motion.div>
            <motion.div className="beneficio-item" variants={scaleIn}>
              <span className="beneficio-icon">🌐</span>
              <h4>Online o Presencial</h4>
              <p>Elige la modalidad que mejor se adapte a tus necesidades y ubicación.</p>
            </motion.div>
            <motion.div className="beneficio-item" variants={scaleIn}>
              <span className="beneficio-icon">🤝</span>
              <h4>Acompañamiento Humano</h4>
              <p>Un espacio cercano, sensible y contenido desde la calidez humana.</p>
            </motion.div>
            <motion.div className="beneficio-item" variants={scaleIn}>
              <span className="beneficio-icon">🛡️</span>
              <h4>Espacio Seguro</h4>
              <p>Un entorno de autoescucha, sin juicios, donde puedes ser tú misma.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ¿Cómo funciona? - Nota informativa */}
      <section className="section como-funciona-section">
        <div className="container">
          <motion.div
            className="como-funciona-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 className="como-funciona-titulo" variants={fadeInUp}>
              ¿Cómo funciona?
            </motion.h3>
            <motion.p className="como-funciona-texto" variants={fadeInUp}>
              Completa el formulario de solicitud y me pondré en contacto contigo para confirmar disponibilidad y acompañarte en el siguiente paso de tu proceso.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Lista de Servicios */}
      <section className="section servicios-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="section-tag" variants={fadeInUp}>
              Experiencias Disponibles
            </motion.span>
            <motion.h2 className="section-title" variants={fadeInUp}>
              Caminos de Sanación
            </motion.h2>
            <motion.p className="section-subtitle" variants={fadeInUp}>
              Cada experiencia está diseñada para acompañarte en tu proceso
              de autoescucha, regulación emocional y reconexión contigo misma.
            </motion.p>
          </motion.div>

          <motion.div
            className="servicios-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {servicios.map((servicio) => (
              <motion.div
                key={servicio.id}
                className="servicio-card"
                variants={scaleIn}
                whileHover={{ y: -8 }}
              >
                <div className="servicio-card-inner">
                  <div className="servicio-header">
                    <span className="servicio-numero">{servicio.numero}</span>
                    <span className="servicio-icon">{servicio.icono}</span>
                  </div>

                  <h3 className="servicio-nombre">{servicio.nombre}</h3>

                  <p className="servicio-descripcion">{servicio.descripcion}</p>

                  <div className="servicio-detalles">
                    <div className="servicio-detalle-item">
                      <span className="detalle-icon">⏱</span>
                      <span className="detalle-texto">{servicio.duracion}</span>
                    </div>
                    <div className="servicio-detalle-item">
                      <span className="detalle-icon">📍</span>
                      <span className="detalle-texto">{servicio.modalidad}</span>
                    </div>
                  </div>

                  <a
                    href={GOOGLE_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="servicio-boton btn btn-primary btn-block"
                  >
                    {servicio.botonTexto}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Sección Informativa */}
      <section className="section info-section section-alt">
        <div className="container">
          <motion.div
            className="info-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="section-tag" variants={fadeInUp}>
              Proceso de Reserva
            </motion.span>
            <motion.h2 className="info-title" variants={fadeInUp}>
              ¿Cómo reservar?
            </motion.h2>
            <motion.div className="info-divider" variants={fadeInUp}></motion.div>

            <motion.div className="info-steps" variants={staggerContainer}>
              <motion.div className="info-step" variants={fadeInUp}>
                <span className="step-number">1</span>
                <div className="step-content">
                  <h4>Elige tu experiencia</h4>
                  <p>
                    Revisa las diferentes opciones y selecciona aquella que
                    resuene con lo que estás viviendo en este momento.
                  </p>
                </div>
              </motion.div>

              <motion.div className="info-step" variants={fadeInUp}>
                <span className="step-number">2</span>
                <div className="step-content">
                  <h4>Completa el formulario</h4>
                  <p>
                    Haz clic en "Solicitar cita" o "Solicitar información" y
                    completa el formulario con tus datos y preferencias.
                  </p>
                </div>
              </motion.div>

              <motion.div className="info-step" variants={fadeInUp}>
                <span className="step-number">3</span>
                <div className="step-content">
                  <h4>Confirmación</h4>
                  <p>
                    Me pondré en contacto contigo para confirmar los detalles
                    y coordinar la fecha y hora de tu sesión.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
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
              Este es tu momento
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              Permíteme acompañarte en tu proceso
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              No necesitas tener todas las respuestas. Solo necesitas dar el
              primer paso hacia ti misma. Estoy aquí para sostenerte en este
              viaje de reconexión y sanación.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Solicitar Cita Ahora
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Reservas