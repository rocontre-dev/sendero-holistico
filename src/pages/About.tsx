import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.css'
import aboutHero from '../assets/images/about/about-hero.jpg'
import aboutEmbrace from '../assets/images/about/about-embrace.jpg'
import aboutPath from '../assets/images/about/about-path.jpg'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] as const }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3
    }
  }
}

function About() {
  return (
    <div className="about-page">
      {/* Hero Section - Contemplative with Background Image */}
      <section className="about-hero">
        <div className="hero-background">
          <div 
            className="hero-image"
            style={{ backgroundImage: `url(${aboutHero})` }}
            role="img"
            aria-label="Ivanna - terapeuta holística en conexión con la naturaleza"
          ></div>
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.blockquote className="hero-quote" variants={fadeInUp}>
              "Vete despacio que a donde tienes que llegar es a ti mismo"
              <cite>— Rumi</cite>
            </motion.blockquote>
            <motion.h1 className="section-title" variants={fadeInUp}>Sobre Mí</motion.h1>
            <motion.p className="section-subtitle" variants={fadeInUp}>
              Conoce mi historia, mi enfoque y la intención con la que te acompaño
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Human & Warm - Block 1 */}
      <section className="section about-intro-section">
        <div className="container container-wide">
          <div className="about-content-grid">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            >
              <h2>Hola, soy <span className="highlight">Ivanna</span></h2>
              <p>
                Soy terapeuta holística y mi misión es acompañarte en tu proceso 
                de transformación profunda y reconexión contigo misma.
              </p>
              <p>
                En mí encontrarás un acompañamiento cercano, sensible y humano 
                con presencia, pausa y calma. No soy una terapeuta distante; estoy 
                presente, humana, contigo en cada sesión.
              </p>
              <p>
                Mi enfoque integra al cuerpo, la psicoemoción y la espiritualidad. 
                A través de la bioemoción, el trabajo somático, el movimiento y el 
                diseño humano/astrología chamánica, te ofrezco un acompañamiento 
                que honra la conexión entre cuerpo, mente y espíritu.
              </p>
              <p>
                Creo en tu capacidad innata de sanación. Solo necesitas un espacio 
                seguro donde recordar cómo hacerlo.
              </p>
            </motion.div>
            <motion.div 
              className="about-image-large"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="about-image-frame-real">
                <img 
                  src={aboutEmbrace} 
                  alt="Ivanna en un momento de presencia y conexión personal"
                  className="about-image-real"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Block 2 - Visual Section with about-path.jpg */}
      <section className="section about-path-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="about-path-image-wrapper" variants={fadeInUp}>
              <div className="about-path-frame">
                <img 
                  src={aboutPath} 
                  alt="Sendero rodeado de naturaleza simbolizando el camino de transformación personal"
                  className="about-path-image"
                  loading="lazy"
                />
              </div>
            </motion.div>
            <motion.div className="about-path-content" variants={fadeInUp}>
              <span className="section-tag">Mi Filosofía</span>
              <h2>Cada proceso tiene su propio ritmo</h2>
              <div className="about-divider"></div>
              <p className="about-path-text">
                Creo profundamente en la capacidad de cada persona para recordar 
                su propia sabiduría interior. Mi labor consiste en acompañar ese 
                proceso con presencia, escucha y sensibilidad.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* My Journey - Storytelling Approach */}
      <section className="section journey-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Mi Camino</span>
            <h2 className="section-title">Cómo Llegué Hasta Aquí</h2>
            <p className="section-subtitle">
              Mi propia búsqueda interior me llevó a descubrir las herramientas 
              que hoy comparto contigo
            </p>
          </motion.div>

          <motion.div 
            className="journey-timeline"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2012</div>
              <div className="journey-content card">
                <h3>El Inicio de Mi Búsqueda</h3>
                <p>
                  Comencé mis estudios en psicología transpersonal y me adentré en 
                  el mundo de las terapias alternativas, buscando integrar mente, 
                  cuerpo y espíritu. Era mi propia sed de comprensión profunda.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2015</div>
              <div className="journey-content card">
                <h3>La Bioenergía como Puerta</h3>
                <p>
                  Me certifiqué en terapia bioenergética, aprendiendo a trabajar con 
                  el campo energético del cuerpo para liberar bloqueos emocionales 
                  profundos. Descubrí que el cuerpo guarda toda nuestra historia.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2017</div>
              <div className="journey-content card">
                <h3>El Llamado del Diseño Humano</h3>
                <p>
                  Descubrí el Diseño Humano y me formé como lectora certificada, 
                  una herramienta poderosa para el autoconocimiento y la toma de 
                  decisiones desde la autoridad interna.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2019</div>
              <div className="journey-content card">
                <h3>La Sabiduría del Cuerpo</h3>
                <p>
                  Completé mi formación en terapia somática, integrando el trabajo 
                  con el sistema nervioso y las sensaciones corporales. El cuerpo 
                  como mapa vivo de nuestra verdad.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2022</div>
              <div className="journey-content card">
                <h3>Nace Este Espacio</h3>
                <p>
                  Decidí crear Sendero Holístico para compartir mi visión integradora 
                  de la sanación y llegar a más personas en su camino de transformación 
                  y reconexión interior.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* My Approach - Intimate & Present */}
      <section className="section approach-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Mi Enfoque</span>
            <h2 className="section-title">Cómo Te Acompaño</h2>
            <p className="section-subtitle">
              Cada sesión es un encuentro sagrado donde creamos un espacio de 
              confianza y transformación
            </p>
          </motion.div>

          <motion.div 
            className="approach-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="approach-card card" variants={fadeInUp}>
              <div className="approach-icon">🌿</div>
              <h3>Visión Holística</h3>
              <p>
                Entiendo al ser humano como un todo integrado: cuerpo, mente, 
                emociones y espíritu. Cada sesión considera todas estas dimensiones 
                en diálogo constante.
              </p>
            </motion.div>

            <motion.div className="approach-card card" variants={fadeInUp}>
              <div className="approach-icon">💫</div>
              <h3>Presencia y Pausa</h3>
              <p>
                Creo en el poder de la pausa consciente. En mis sesiones hay espacio 
                para sentir, respirar y permitir que lo que necesita salir, salga 
                a su propio ritmo.
              </p>
            </motion.div>

            <motion.div className="approach-card card" variants={fadeInUp}>
              <div className="approach-icon">🤝</div>
              <h3>Espacio Seguro</h3>
              <p>
                Ofrezco un ambiente de confianza y aceptación donde puedes explorar 
                libremente tus emociones, pensamientos y experiencias sin juicios.
              </p>
            </motion.div>

            <motion.div className="approach-card card" variants={fadeInUp}>
              <div className="approach-icon">🔄</div>
              <h3>Transformación Consciente</h3>
              <p>
                Mi objetivo es facilitarte herramientas para que continúes tu proceso 
                de sanación más allá de nuestras sesiones, honrando tu sabiduría interior.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Credentials - Simplified & Integrated */}
      <section className="section credentials-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Formación</span>
            <h2 className="section-title">Herramientas que Integro</h2>
            <p className="section-subtitle">
              Cada certificación representa años de estudio y práctica profunda
            </p>
          </motion.div>

          <motion.div 
            className="credentials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="credential-item card" variants={fadeInUp}>
              <h3>Terapia Bioenergética</h3>
              <p>Instituto Internacional de Bioenergía - 500 horas</p>
            </motion.div>

            <motion.div className="credential-item card" variants={fadeInUp}>
              <h3>Diseño Humano</h3>
              <p>Human Design School - Lectora Certificada</p>
            </motion.div>

            <motion.div className="credential-item card" variants={fadeInUp}>
              <h3>Terapia Somática</h3>
              <p>Centro de Terapia Somática - 400 horas</p>
            </motion.div>

            <motion.div className="credential-item card" variants={fadeInUp}>
              <h3>Mindfulness y Meditación</h3>
              <p>Centro de Atención Plena - Instructora Certificada</p>
            </motion.div>

            <motion.div className="credential-item card" variants={fadeInUp}>
              <h3>Psicología Transpersonal</h3>
              <p>Instituto de Psicología Transpersonal - Maestría</p>
            </motion.div>

            <motion.div className="credential-item card" variants={fadeInUp}>
              <h3>Sanación Energética</h3>
              <p>Escuela de Medicina Energética - 300 horas</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Warm Invitation */}
      <section className="section cta-section">
        <div className="container">
          <motion.div 
            className="cta-content card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span className="cta-tagline" variants={fadeInUp}>
              Te invito a caminar juntas
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              ¿Te gustaría trabajar conmigo?
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              Estoy aquí para acompañarte en tu proceso de sanación y crecimiento. 
              No tienes que hacerlo sola. Agenda una sesión y comencemos este 
              viaje de reconexión juntas.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agendar Sesión
              </Link>
              <Link to="/testimonios" className="btn btn-outline btn-large">
                Ver Testimonios
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About