import { Link } from 'react-router-dom'
import './TerapiaSomatica.css'

function TerapiaSomatica() {
  return (
    <div className="terapia-somatica-page">
      {/* Hero Section */}
      <section className="terapia-hero">
        <div className="container">
          <h1 className="section-title">Terapia Somática</h1>
          <p className="section-subtitle">
            Integra cuerpo y mente a través del trabajo con las sensaciones
            corporales y el sistema nervioso
          </p>
        </div>
      </section>

      {/* What is Terapia Somática */}
      <section className="section">
        <div className="container">
          <div className="terapia-intro">
            <div className="intro-image">
              <div className="intro-image-placeholder">
                <span className="intro-icon">🌱</span>
              </div>
            </div>
            <div className="intro-content">
              <h2>¿Qué es la Terapia Somática?</h2>
              <p>
                La terapia somática es un enfoque terapéutico que reconoce que
                el cuerpo y la mente están intrínsecamente conectados. Trabaja
                directamente con las sensaciones corporales, los patrones de
                movimiento y el sistema nervioso para facilitar la sanación.
              </p>
              <p>
                A diferencia de las terapias tradicionales que se centran
                principalmente en el diálogo verbal, la terapia somática
                utiliza la conciencia corporal como puerta de entrada para
                acceder y procesar experiencias almacenadas en el cuerpo.
              </p>
              <p>
                Este enfoque es particularmente efectivo para trabajar con
                trauma, estrés crónico, ansiedad y patrones de comportamiento
                que parecen estar "atrapados" en el cuerpo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section principles-section">
        <div className="container">
          <h2 className="section-title">Principios Fundamentales</h2>
          <div className="principles-grid">
            <div className="principle-card card">
              <div className="principle-icon">🧠</div>
              <h3>El Cuerpo Guarda Memoria</h3>
              <p>
                Las experiencias, especialmente las traumáticas, se almacenan
                en el cuerpo como patrones de tensión, sensaciones y respuestas
                automáticas del sistema nervioso.
              </p>
            </div>
            <div className="principle-card card">
              <div className="principle-icon">⚖️</div>
              <h3>Regulación del Sistema Nervioso</h3>
              <p>
                El equilibrio del sistema nervioso autónomo es esencial para
                la salud. Aprendemos a regular estados de hiperactivación
                (ansiedad) e hipoactivación (depresión).
              </p>
            </div>
            <div className="principle-card card">
              <div className="principle-icon">🔄</div>
              <h3>Integración Mente-Cuerpo</h3>
              <p>
                La sanación verdadera ocurre cuando integramos las experiencias
                a nivel cognitivo, emocional y somático, creando coherencia
                en todo el sistema.
              </p>
            </div>
            <div className="principle-card card">
              <div className="principle-icon">🌊</div>
              <h3>Respeto por el Ritmo Natural</h3>
              <p>
                Cada persona tiene su propio ritmo de sanación. La terapia
                somática honra este proceso natural sin forzar ni apresurar
                la liberación de experiencias difíciles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-ts-section">
        <div className="container">
          <h2 className="section-title">Beneficios de la Terapia Somática</h2>
          <div className="benefits-ts-grid">
            <div className="benefit-ts-item">
              <div className="benefit-ts-icon">✓</div>
              <div className="benefit-ts-content">
                <h3>Sanación del Trauma</h3>
                <p>
                  Procesa experiencias traumáticas almacenadas en el cuerpo
                  de manera segura y gradual.
                </p>
              </div>
            </div>
            <div className="benefit-ts-item">
              <div className="benefit-ts-icon">✓</div>
              <div className="benefit-ts-content">
                <h3>Regulación Emocional</h3>
                <p>
                  Desarrollas la capacidad de gestionar emociones intensas
                  sin sentirte abrumado.
                </p>
              </div>
            </div>
            <div className="benefit-ts-item">
              <div className="benefit-ts-icon">✓</div>
              <div className="benefit-ts-content">
                <h3>Reducción del Estrés</h3>
                <p>
                  Liberas tensión crónica y aprendes a mantener un estado
                  de calma más consistente.
                </p>
              </div>
            </div>
            <div className="benefit-ts-item">
              <div className="benefit-ts-icon">✓</div>
              <div className="benefit-ts-content">
                <h3>Mayor Presencia</h3>
                <p>
                  Te conectas más profundamente con el momento presente
                  y con tu experiencia corporal.
                </p>
              </div>
            </div>
            <div className="benefit-ts-item">
              <div className="benefit-ts-icon">✓</div>
              <div className="benefit-ts-content">
                <h3>Mejora de Relaciones</h3>
                <p>
                  Desarrollas mayor capacidad de conexión auténtica al
                  estar más presente y regulado.
                </p>
              </div>
            </div>
            <div className="benefit-ts-item">
              <div className="benefit-ts-icon">✓</div>
              <div className="benefit-ts-content">
                <h3>Autoconocimiento Profundo</h3>
                <p>
                  Accedes a sabiduría corporal que va más allá del
                  entendimiento intelectual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section expectations-ts-section">
        <div className="container">
          <h2 className="section-title">¿Qué Esperar en una Sesión?</h2>
          <div className="expectations-ts-grid">
            <div className="expectation-ts-card card">
              <div className="expectation-ts-number">1</div>
              <h3>Check-in Somático</h3>
              <p>
                Comenzamos conectando con tu experiencia corporal actual,
                notando sensaciones, tensiones y estados del sistema nervioso.
              </p>
            </div>
            <div className="expectation-ts-card card">
              <div className="expectation-ts-number">2</div>
              <h3>Exploración Guiada</h3>
              <p>
                Te guío a través de ejercicios suaves de conciencia corporal
                para identificar patrones y áreas de retención.
              </p>
            </div>
            <div className="expectation-ts-card card">
              <div className="expectation-ts-number">3</div>
              <h3>Procesamiento</h3>
              <p>
                Trabajamos con las sensaciones que surgen, permitiendo que
                el cuerpo libere y reorganice la experiencia de manera natural.
              </p>
            </div>
            <div className="expectation-ts-card card">
              <div className="expectation-ts-number">4</div>
              <h3>Integración</h3>
              <p>
                Cerramos integrando la experiencia y estableciendo prácticas
                de autocuidado para entre sesiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="section techniques-ts-section">
        <div className="container">
          <h2 className="section-title">Técnicas y Enfoques</h2>
          <div className="techniques-ts-grid">
            <div className="technique-ts-item">
              <h3>Pendulación</h3>
              <p>
                Oscilación consciente entre sensaciones agradables y
                desafiante para construir tolerancia y resiliencia.
              </p>
            </div>
            <div className="technique-ts-item">
              <h3>Titulación</h3>
              <p>
                Trabajar con pequeñas dosis de experiencia para evitar
                la re-traumatización y permitir una integración gradual.
              </p>
            </div>
            <div className="technique-ts-item">
              <h3>Grounding</h3>
              <p>
                Técnicas de enraizamiento para establecer seguridad
                y presencia en el cuerpo.
              </p>
            </div>
            <div className="technique-ts-item">
              <h3>Mindfulness Somático</h3>
              <p>
                Atención plena dirigida a las sensaciones corporales
                sin juicio ni interpretación.
              </p>
            </div>
            <div className="technique-ts-item">
              <h3>Movimiento Consciente</h3>
              <p>
                Movimientos suaves y espontáneos que permiten la
                liberación natural de tensión.
              </p>
            </div>
            <div className="technique-ts-item">
              <h3>Respiración Somática</h3>
              <p>
                Uso consciente de la respiración para regular el
                sistema nervioso y facilitar la liberación.
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
              <h3>¿Es necesario hablar de experiencias difíciles?</h3>
              <p>
                No necesariamente. La terapia somática trabaja principalmente
                con sensaciones corporales. Puedes procesar experiencias sin
                tener que relatarlas verbalmente en detalle.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Es seguro para personas con trauma?</h3>
              <p>
                Sí, cuando se practica con un terapeuta capacitado. La terapia
                somática está diseñada específicamente para trabajar con trauma
                de manera segura y respetuosa.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Necesito experiencia en yoga o meditación?</h3>
              <p>
                No. Aunque algunas técnicas pueden parecerse al yoga o la
                meditación, no se requiere experiencia previa. Todo se adapta
                a tu nivel de comodidad.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Cuántas sesiones se necesitan?</h3>
              <p>
                Varía según cada persona y sus objetivos. Algunas personas
                experimentan alivio significativo en pocas sesiones, mientras
                que otras prefieren un trabajo más profundo a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content card">
            <h2>¿Listo para reconectar con tu cuerpo?</h2>
            <p>
              La terapia somática puede ser un camino profundo de sanación
              y reconexión con tu sabiduría corporal. Permíteme acompañarte
              en este viaje de integración.
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agendar Sesión de Terapia Somática
              </Link>
              <Link to="/recursos" className="btn btn-outline btn-large">
                Explorar Recursos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TerapiaSomatica