import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './About.css'
import aboutHero from '../assets/images/about/about-hero.jpg'
import aboutEmbrace from '../assets/images/about/about-embrace.jpg'
import aboutPath from '../assets/images/home/home-contemplation.jpg'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 6, 
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
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
          <blockquote className="hero-quote">
            "Quien olvida enferma, quien recuerda sana"
            <cite>— Don Miguel Ruiz</cite>
          </blockquote>
          <h1 className="section-title">Sobre Mí</h1>
          <p className="section-subtitle">
            Conoce mi historia, mi enfoque y la intención con la que te acompaño
          </p>
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
                con presencia, pausa y calma.
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
              <div className="journey-year">2016</div>
              <div className="journey-content card">
                <h3>El Inicio de Mi Búsqueda</h3>
                <p>
                  Dos años después de graduarme de Derecho, recibí un diagnóstico 
                  médico que marcó un antes y un después en mi vida. Aquella experiencia 
                  abrió un camino profundo de transformación. Comencé a explorar las 
                  constelaciones familiares, la terapia transpersonal, sistémica y gestalt. 
                  Al mismo tiempo, me fui adentrando en el chamanismo, la meditación y el yoga, 
                  conectando con un legado ancestral presente en las mujeres de mi linaje.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">Desde mucho antes</div>
              <div className="journey-content card">
                <h3>El Lenguaje del Cuerpo</h3>
                <p>
                  Aunque mi camino terapéutico comenzó años después, mi conexión con el cuerpo y su capacidad de autorregulación empezó mucho antes. Bailo desde los cinco años y el flamenco, junto con otros ritmos y estilos, ha sido una gran herramienta de autorregulación y equilibrio emocional.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2017</div>
              <div className="journey-content card">
                <h3>Mi Encuentro con la Espiritualidad</h3>
                <p>
                  En mi búsqueda de respuestas estudié distintas filosofías y tradiciones. 
                  Con el tiempo comprendí que, más allá de sus diferencias, todas apuntan 
                  hacia una misma fuerza que nos sostiene y nos conecta: el amor.
                  Y comprendí que, desde una mirada integral, la salud física y mental también están profundamente conectadas con lo espiritual.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2020</div>
              <div className="journey-content card">
                <h3>La Formación y el Acompañamiento</h3>
                <p>
                  Comencé mi formación en Bioemoción y Movimiento Terapia. Entre 2021 y 2022 
                  empecé a facilitar talleres de Movimiento Consciente y Danzaterapia enfocados a distintos grupos, incluyendo diversidad funcional, personas con trastornos de ansiedad, adultos mayores y mujeres. Estas experiencias confirmaron en mí el enorme impacto 
                  que tiene el cuerpo y su energía en nuestra salud y bienestar.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2022</div>
              <div className="journey-content card">
                <h3>Bioenergía y Chamanismo</h3>
                <p>
                  Continué profundizando en los estudios de bioenergía y chamanismo en México, integrando una mirada más amplia y profunda sobre los procesos humanos, entendiendo que estamos más conectados con los ciclos de la naturaleza y que desde allí los procesos de sanación pueden sostenerse en el tiempo.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2024</div>
              <div className="journey-content card">
                <h3>Cuerpo y Trauma</h3>
                <p>
                  Comencé mi formación como terapeuta somática especializada en cuerpo y trauma, con la guía del profesor Peter Levine (EmbodyLab) y la inspiración de Gabor Maté y Somatic Experiencing.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">2025</div>
              <div className="journey-content card">
                <h3>Astrología Chamánica y Diseño Humano</h3>
                <p>
                  Inicié mis estudios de Astrología Chamánica y Bases de Diseño Humano, 
                  herramientas que utilizo como apoyo terapéutico y como guías para comprender 
                  nuestros talentos, desafíos y propósito.
                </p>
              </div>
            </motion.div>

            <motion.div className="journey-item" variants={fadeInUp}>
              <div className="journey-year">Hoy</div>
              <div className="journey-content card">
                <h3>Continúo Acompañando</h3>
                <p>
                  Hoy continúo mi formación en Terapia Narrativa Jungiana para la integración 
                  de la sombra y sigo acompañando procesos de sanación, liberación y autodescubrimiento. 
                  Creo profundamente en la capacidad autorreguladora y sanadora que existe en cada uno 
                  de nosotros. Las crisis y los desafíos forman parte del camino y muchas veces 
                  esconden oportunidades para volver al equilibrio. Desde mi propia experiencia, 
                  hoy acompaño a otras personas a recordar el camino de regreso a la paz mental, 
                  la salud y el bienestar.
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
              viaje.
            </motion.p>
              <motion.div className="cta-buttons" variants={fadeInUp}>
                <Link to="/contacto" className="btn btn-secondary btn-large">
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