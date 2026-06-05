import { Link } from 'react-router-dom'
import './DisenoHumano.css'

function DisenoHumano() {
  return (
    <div className="diseno-humano-page">
      {/* Hero Section */}
      <section className="diseno-hero">
        <div className="container">
          <h1 className="section-title">Diseño Humano</h1>
          <p className="section-subtitle">
            Descubre tu mapa único de conciencia y toma decisiones alineadas
            con tu verdadera naturaleza
          </p>
        </div>
      </section>

      {/* What is Diseño Humano */}
      <section className="section">
        <div className="container">
          <div className="diseno-intro">
            <div className="intro-image">
              <div className="intro-image-placeholder">
                <span className="intro-icon">🔮</span>
              </div>
            </div>
            <div className="intro-content">
              <h2>¿Qué es el Diseño Humano?</h2>
              <p>
                El Diseño Humano es un sistema de autoconocimiento que combina
                elementos de la astrología, el I Ching, la Cábala y el sistema
                de chakras. Creado por Ra Uru Hu en 1987, este sistema te
                proporciona un mapa preciso de tu naturaleza única.
              </p>
              <p>
                Tu Carta de Diseño Humano (también llamada BodyGraph) revela
                cómo estás diseñado para tomar decisiones, procesar emociones,
                interactuar con el mundo y vivir de manera alineada con tu
                esencia más auténtica.
              </p>
              <p>
                A diferencia de otros sistemas de personalidad, el Diseño Humano
                no se trata de quién eres psicológicamente, sino de cómo
                funcionas energéticamente. Es una herramienta práctica para
                vivir con mayor facilidad y menos resistencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Components */}
      <section className="section components-section">
        <div className="container">
          <h2 className="section-title">Componentes Clave del Diseño Humano</h2>
          <div className="components-grid">
            <div className="component-card card">
              <div className="component-icon">🎭</div>
              <h3>Tipo</h3>
              <p>
                Tu Tipo (Generador, Manifestador, Proyectador, Reflector) es
                el aspecto más importante de tu diseño. Define tu estrategia
                para navegar la vida con facilidad y tu tema de firma cuando
                vives alineado.
              </p>
            </div>
            <div className="component-card card">
              <div className="component-icon">🧭</div>
              <h3>Estrategia</h3>
              <p>
                La Estrategia es la forma correcta de tomar decisiones según
                tu Tipo. Cuando sigues tu estrategia, experimentas menos
                resistencia y más flujo en tu vida diaria.
              </p>
            </div>
            <div className="component-card card">
              <div className="component-icon">❤️</div>
              <h3>Autoridad</h3>
              <p>
                Tu Autoridad Interna te indica dónde reside tu sabiduría para
                tomar decisiones correctas. Puede ser emocional, sacral,
                esplénica, egoica, lunar o del Self proyectado.
              </p>
            </div>
            <div className="component-card card">
              <div className="component-icon">🎯</div>
              <h3>Perfil</h3>
              <p>
                Tu Perfil (como 1/3, 4/6, 5/1, etc.) describe el "traje" que
                usas en el mundo: cómo aprendes, te relacionas y expresas
                tu singularidad en la vida.
              </p>
            </div>
            <div className="component-card card">
              <div className="component-icon">🔋</div>
              <h3>Centros</h3>
              <p>
                Los 9 Centros de tu BodyGraph muestran dónde procesas energía
                de manera consistente (definidos) y dónde eres más susceptible
                a condicionamientos (abiertos/indefinidos).
              </p>
            </div>
            <div className="component-card card">
              <div className="component-icon">🌟</div>
              <h3>Incarnación</h3>
              <p>
                Tu Cruz de Encarnación revela el propósito más profundo de
                tu vida: las lecciones que viniste a aprender y el regalo
                único que ofrecés al mundo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="section types-section">
        <div className="container">
          <h2 className="section-title">Los 5 Tipos Energéticos</h2>
          <div className="types-grid">
            <div className="type-card card">
              <div className="type-percentage">35%</div>
              <h3>Generadores</h3>
              <p className="type-description">
                Tienen un Centro Sacral definido. Su estrategia es "Responder"
                a la vida. Cuando responden correctamente, experimentan
                satisfacción en su trabajo y vida.
              </p>
            </div>
            <div className="type-card card">
              <div className="type-percentage">33%</div>
              <h3>Generadores Manifestantes</h3>
              <p className="type-description">
                Generadores con una definición que conecta directamente con
                la garganta. Responden y luego manifiestan. Tienen energía
                para iniciar después de responder.
              </p>
            </div>
            <div className="type-card card">
              <div className="type-percentage">20%</div>
              <h3>Proyectores</h3>
              <p className="type-description">
                No tienen el Centro Sacral definido. Su estrategia es
                "Esperar la Invitación" para compartir sus dones de guía
                y dirección con los demás.
              </p>
            </div>
            <div className="type-card card">
              <div className="type-percentage">9%</div>
              <h3>Manifestadores</h3>
              <p className="type-description">
                Tienen un Centro Sacral abierto pero pueden iniciar acción
                directamente. Su estrategia es "Informar" antes de actuar
                para minimizar resistencia.
              </p>
            </div>
            <div className="type-card card highlight-type">
              <div className="type-percentage">1%</div>
              <h3>Reflectores</h3>
              <p className="type-description">
                Tienen todos los centros abiertos. Son espejos de la salud
                de su entorno. Su estrategia es "Esperar un Ciclo Lunar"
                (28 días) para tomar decisiones importantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-dh-section">
        <div className="container">
          <h2 className="section-title">Beneficios de Conocer tu Diseño Humano</h2>
          <div className="benefits-dh-grid">
            <div className="benefit-dh-item">
              <div className="benefit-dh-icon">✓</div>
              <div className="benefit-dh-content">
                <h3>Autoconocimiento Profundo</h3>
                <p>
                  Comprendes quién eres realmente más allá de las expectativas
                  sociales y familiares.
                </p>
              </div>
            </div>
            <div className="benefit-dh-item">
              <div className="benefit-dh-icon">✓</div>
              <div className="benefit-dh-content">
                <h3>Toma de Decisiones</h3>
                <p>
                  Aprendes a tomar decisiones alineadas con tu naturaleza,
                  reduciendo el arrepentimiento.
                </p>
              </div>
            </div>
            <div className="benefit-dh-item">
              <div className="benefit-dh-icon">✓</div>
              <div className="benefit-dh-content">
                <h3>Relaciones Más Sanas</h3>
                <p>
                  Entiendes y respetas las diferencias energéticas con
                  parejas, familia y amigos.
                </p>
              </div>
            </div>
            <div className="benefit-dh-item">
              <div className="benefit-dh-icon">✓</div>
              <div className="benefit-dh-content">
                <h3>Carrera Alineada</h3>
                <p>
                  Descubres el tipo de trabajo que te satisface y cómo
                  operar desde tu diseño único.
                </p>
              </div>
            </div>
            <div className="benefit-dh-item">
              <div className="benefit-dh-icon">✓</div>
              <div className="benefit-dh-content">
                <h3>Menos Resistencia</h3>
                <p>
                  Vives con mayor fluidez al seguir tu estrategia y
                  autoridad en lugar de luchar contra tu naturaleza.
                </p>
              </div>
            </div>
            <div className="benefit-dh-item">
              <div className="benefit-dh-icon">✓</div>
              <div className="benefit-dh-content">
                <h3>Aceptación Radical</h3>
                <p>
                  Te aceptas completamente al entender que tu diseño es
                  perfecto tal como es.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Info */}
      <section className="section session-info-section">
        <div className="container">
          <h2 className="section-title">¿Qué Incluye una Lectura de Diseño Humano?</h2>
          <div className="session-info-grid">
            <div className="session-info-card card">
              <div className="session-icon">📊</div>
              <h3>Análisis de tu BodyGraph</h3>
              <p>
                Exploramos juntos tu carta completa, identificando centros
                definidos y abiertos, canales activas y puertas clave que
                definen tu naturaleza.
              </p>
            </div>
            <div className="session-info-card card">
              <div className="session-icon">🎯</div>
              <h3>Descubrimiento de tu Tipo</h3>
              <p>
                Identificamos tu Tipo energético y te explico en detalle
                tu estrategia para navegar la vida, con ejemplos prácticos
                de cómo aplicarla.
              </p>
            </div>
            <div className="session-info-card card">
              <div className="session-icon">🧠</div>
              <h3>Tu Autoridad Interna</h3>
              <p>
                Te guío para que reconozcas y confíes en tu Autoridad
                interna, aprendiendo a distinguirla de la voz de la mente.
              </p>
            </div>
            <div className="session-info-card card">
              <div className="session-icon">💫</div>
              <h3>Perfil y Propósito</h3>
              <p>
                Exploramos tu Perfil y tu Cruz de Encarnación para
                comprender mejor tu camino de vida y propósito único.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas Frecuentes</h2>
          <div className="faq-list">
            <div className="faq-item card">
              <h3>¿Necesito saber mi fecha de nacimiento exacta?</h3>
              <p>
                Sí, es fundamental tener la fecha, hora y lugar de nacimiento
                precisos para calcular tu carta correctamente. Incluso unos
                minutos de diferencia pueden cambiar aspectos importantes.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Cuánto dura una lectura?</h3>
              <p>
                Una lectura completa de Diseño Humano dura aproximadamente
                90 minutos. También ofrezco sesiones introductorias de 45
                minutos que cubren los aspectos básicos.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Puedo aprender Diseño Humano por mi cuenta?</h3>
              <p>
                Puedes comenzar a estudiar por tu cuenta, pero una lectura
                con un profesional experimentado te da una comprensión más
                profunda y personalizada de tu diseño único.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿El Diseño Humano cambia con el tiempo?</h3>
              <p>
                Tu diseño de nacimiento es fijo y no cambia. Sin embargo,
                hay ciclos y tránsitos que activan diferentes aspectos de
                tu diseño a lo largo del tiempo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content card">
            <h2>¿Listo para descubrir quién eres realmente?</h2>
            <p>
              El Diseño Humano es una herramienta poderosa de autoconocimiento
              que puede transformar la forma en que vives, decides y te
              relacionas con el mundo.
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agendar Lectura de Diseño Humano
              </Link>
              <Link to="/sobre-mi" className="btn btn-outline btn-large">
                Conocer Más Sobre Mí
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DisenoHumano