import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './CosmosCorporeo.css'
import cosmosHero from '../assets/images/cosmos-corporeo/cosmos-hero.jpg'
import cosmosRitual from '../assets/images/cosmos-corporeo/cosmos-ritual.jpg'

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

function CosmosCorporeo() {
  return (
    <div className="cosmos-corporeo-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-background">
          <div 
            className="hero-image"
            style={{ backgroundImage: `url(${cosmosHero})` }}
            role="img"
            aria-label="Cosmos Corpóreo - Carta Natal Chamánica y Diseño Humano"
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
              Astrología Chamánica
            </motion.span>
            <motion.h1 className="hero-title" variants={fadeInUp}>
              Cosmos Corpóreo
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Consulta 1:1 para conocer tu Carta Natal Chamánica y Diseño Humano, 
              descubriendo tu propósito, talentos, desafíos y mapa energético único.
            </motion.p>
            <motion.div className="session-info" variants={fadeInUp}>
              <span className="info-badge">1 hora 45 min de sesión</span>
              <span className="info-badge">Online y Presencial</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Reservar Consulta
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
              <h2>El Universo Vive en Tu Cuerpo</h2>
              <div className="about-divider"></div>
              <p>
                Cosmos Corpóreo es una experiencia transformadora que integra el 
                Diseño Humano somático con la astrología chamánica para revelarte 
                quién eres realmente en los niveles más profundos de tu ser.
              </p>
              <p>
                No se trata solo de leer un mapa o una carta astral. Se trata de 
                encarnar la sabiduría de las estrellas, de sentir en tu propio cuerpo 
                la danza de los planetas y los centros energéticos. Es un diálogo 
                sagrado entre el macrocosmos y el microcosmos que habita en ti.
              </p>
              <p>
                A través de esta sesión, descubrirás tu diseño único, tus talentos 
                naturales, tu propósito de alma y las claves para vivir de manera 
                alineada con tu verdadera naturaleza energética.
              </p>
            </motion.div>
            <motion.div className="intro-image" variants={fadeInUp}>
              <div className="intro-image-frame">
                <img 
                  src={cosmosRitual} 
                  alt="Espacio ceremonial de autoconocimiento y exploración energética"
                  className="intro-image-real"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Componentes */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Integración</span>
            <h2 className="section-title">Dos Sabidurías, Un Camino</h2>
            <p className="section-subtitle">
              Cosmos Corpóreo fusiona dos sistemas ancestrales de autoconocimiento 
              para una comprensión completa de tu ser.
            </p>
          </motion.div>

          <motion.div 
            className="components-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="component-card card-soft" variants={fadeInUp}>
              <div className="component-icon">🔮</div>
              <h3>Diseño Humano Somático</h3>
              <p>
                Exploramos tu BodyGraph no solo como un mapa conceptual, sino como 
                una experiencia corporal vivida. Sentimos en el cuerpo cómo se 
                expresan tus centros definidos y abiertos, tus canales y puertas.
              </p>
              <ul className="component-list">
                <li>Tu Tipo energético y Estrategia de vida</li>
                <li>Autoridad Interna para tomar decisiones</li>
                <li>Perfil y rol en el mundo</li>
                <li>Centros energéticos y su expresión somática</li>
              </ul>
            </motion.div>

            <motion.div className="component-card card-soft" variants={fadeInUp}>
              <div className="component-icon">✨</div>
              <h3>Astrología Chamánica</h3>
              <p>
                Vamos más allá de la astrología convencional para conectar con la 
                sabiduría ancestral de las estrellas. Exploramos tu carta natal 
                como un mapa del alma y un lenguaje simbólico vivo.
              </p>
              <ul className="component-list">
                <li>Sol, Luna y Ascendente como tríada esencial</li>
                <li>Planetas personales y su expresión en tu vida</li>
                <li>Nodos lunares y tu camino de evolución</li>
                <li>Quirón y tu don sanador único</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué descubrirás? */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">Revelaciones</span>
            <h2 className="section-title">Lo que Revela Cosmos Corpóreo</h2>
            <p className="section-subtitle">
              Esta sesión es una puerta de entrada a un autoconocimiento 
              profundo y transformador.
            </p>
          </motion.div>

          <motion.div 
            className="discoveries-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="discovery-card" variants={fadeInUp}>
              <div className="discovery-number">01</div>
              <h3>Tu Naturaleza Energética</h3>
              <p>
                Comprendes cómo funcionas energéticamente: cómo tomas decisiones 
                correctas, cómo interactúas con el mundo y qué necesitas para 
                mantener tu bienestar.
              </p>
            </motion.div>

            <motion.div className="discovery-card" variants={fadeInUp}>
              <div className="discovery-number">02</div>
              <h3>Tus Talentos Únicos</h3>
              <p>
                Descubres los dones naturales con los que viniste al mundo y 
                cómo expresarlos de manera auténtica en tu vida diaria y profesional.
              </p>
            </motion.div>

            <motion.div className="discovery-card" variants={fadeInUp}>
              <div className="discovery-number">03</div>
              <h3>Tu Propósito de Alma</h3>
              <p>
                Accedes a las claves de tu Cruz de Encarnación y los Nodos Lunares 
                para comprender el propósito más profundo de tu existencia.
              </p>
            </motion.div>

            <motion.div className="discovery-card" variants={fadeInUp}>
              <div className="discovery-number">04</div>
              <h3>Tus Patrones de Condicionamiento</h3>
              <p>
                Identificas dónde te has alejado de tu naturaleza auténtica y 
                cómo volver a casa, honrando tus centros abiertos sin condicionarte.
              </p>
            </motion.div>

            <motion.div className="discovery-card" variants={fadeInUp}>
              <div className="discovery-number">05</div>
              <h3>Tu Don Sanador</h3>
              <p>
                Reconoces tu herida de Quirón no como una limitación, sino como 
                la puerta a tu mayor regalo para ti y para el mundo.
              </p>
            </motion.div>

            <motion.div className="discovery-card" variants={fadeInUp}>
              <div className="discovery-number">06</div>
              <h3>Herramientas Prácticas</h3>
              <p>
                Te llevas prácticas somáticas y reflexiones para integrar esta 
                sabiduría en tu vida cotidiana y vivir más alineada.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ¿Qué incluye? */}
      <section className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <span className="section-tag">La Sesión</span>
            <h2 className="section-title">¿Qué Incluye tu Lectura?</h2>
          </motion.div>

          <motion.div 
            className="includes-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="includes-item" variants={fadeInUp}>
              <span className="includes-icon">📊</span>
              <div className="includes-content">
                <h3>Análisis Completo del BodyGraph</h3>
                <p>
                  Exploramos juntos tu Diseño Humano completo, sintiendo en el 
                  cuerpo cada aspecto y cómo se expresa en tu vida.
                </p>
              </div>
            </motion.div>

            <motion.div className="includes-item" variants={fadeInUp}>
              <span className="includes-icon">🌙</span>
              <div className="includes-content">
                <h3>Lectura de Carta Astral</h3>
                <p>
                  Interpretamos tu carta natal desde una perspectiva chamánica, 
                  conectando con la sabiduría simbólica de los planetas.
                </p>
              </div>
            </motion.div>

            <motion.div className="includes-item" variants={fadeInUp}>
              <span className="includes-icon">🎯</span>
              <div className="includes-content">
                <h3>Guía de Propósito y Talentos</h3>
                <p>
                  Identificamos tus talentos únicos y cómo expresarlos en tu 
                  vida profesional y personal de manera alineada.
                </p>
              </div>
            </motion.div>

            <motion.div className="includes-item" variants={fadeInUp}>
              <span className="includes-icon">📝</span>
              <div className="includes-content">
                <h3>Grabación de la Sesión</h3>
                <p>
                  Recibes la grabación completa para que puedas volver a escuchar 
                  y seguir integrando la sabiduría revelada.
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
              El cosmos te habla
            </motion.span>
            <motion.h2 className="cta-title" variants={fadeInUp}>
              ¿Lista para descubrir quién eres realmente?
            </motion.h2>
            <motion.p className="cta-text" variants={fadeInUp}>
              Tu Diseño Humano y tu carta astral contienen las claves de tu 
              propósito único. Permíteme guiarte en este viaje de autodescubrimiento 
              que transformará la forma en que vives, decides y te relacionas.
            </motion.p>
            <motion.div className="cta-buttons" variants={fadeInUp}>
              <Link to="/reservas" className="btn btn-primary btn-large">
                Reservar Consulta
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

export default CosmosCorporeo