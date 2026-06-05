import { Link } from 'react-router-dom'
import './Bioenergia.css'

function Bioenergia() {
  return (
    <div className="bioenergia-page">
      {/* Hero Section */}
      <section className="bioenergia-hero">
        <div className="container">
          <h1 className="section-title">Bioenergía</h1>
          <p className="section-subtitle">
            Trabaja con la energía vital del cuerpo para liberar bloqueos emocionales
            y restaurar el equilibrio natural
          </p>
        </div>
      </section>

      {/* What is Bioenergía */}
      <section className="section">
        <div className="container">
          <div className="bioenergia-intro">
            <div className="intro-content">
              <h2>¿Qué es la Bioenergía?</h2>
              <p>
                La terapia bioenergética es un enfoque cuerpo-mente que trabaja con
                la energía vital que fluye a través de nuestro ser. Se basa en el
                entendimiento de que nuestras emociones, pensamientos y experiencias
                se almacenan en el cuerpo y afectan nuestro campo energético.
              </p>
              <p>
                Cuando experimentamos estrés, trauma o emociones intensas, podemos
                desarrollar "bloqueos energéticos" que limitan el flujo natural de
                energía. Estos bloqueos se manifiestan como tensión muscular crónica,
                patrones respiratorios restrictivos y limitaciones en nuestra capacidad
                de sentir y expresarnos plenamente.
              </p>
              <p>
                A través de la bioenergía, aprendemos a identificar y liberar estos
                bloqueos, permitiendo que la energía vital fluya libremente y
                restaurando el equilibrio natural del cuerpo y la mente.
              </p>
            </div>
            <div className="intro-image">
              <div className="intro-image-placeholder">
                <span className="intro-icon">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Beneficios de la Bioenergía</h2>
          <div className="benefits-grid">
            <div className="benefit-card card">
              <div className="benefit-icon">🌊</div>
              <h3>Liberación Emocional</h3>
              <p>
                Permite liberar emociones reprimidas y patrones emocionales
                que ya no te sirven, creando espacio para experiencias más
                plenas y auténticas.
              </p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">💪</div>
              <h3>Mayor Vitalidad</h3>
              <p>
                Al desbloquear el flujo energético, experimentas un aumento
                natural en tus niveles de energía, vitalidad y entusiasmo
                por la vida.
              </p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🧘</div>
              <h3>Reducción del Estrés</h3>
              <p>
                Las técnicas bioenergéticas ayudan a regular el sistema
                nervioso, reduciendo la tensión y promoviendo un estado
                de calma y relajación profunda.
              </p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🔗</div>
              <h3>Conexión Cuerpo-Mente</h3>
              <p>
                Desarrollas una mayor conciencia de las sensaciones corporales
                y su relación con tus estados emocionales y mentales.
              </p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🎭</div>
              <h3>Expresión Auténtica</h3>
              <p>
                Al liberar las armaduras musculares que limitan tu expresión,
                puedes comunicarte y expresarte de manera más auténtica y libre.
              </p>
            </div>
            <div className="benefit-card card">
              <div className="benefit-icon">🌱</div>
              <h3>Sanación del Trauma</h3>
              <p>
                La bioenergía es particularmente efectiva para trabajar con
                traumas almacenados en el cuerpo, facilitando procesos de
                sanación profunda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section expectations-section">
        <div className="container">
          <h2 className="section-title">¿Qué Esperar en una Sesión?</h2>
          <div className="expectations-grid">
            <div className="expectation-card card">
              <div className="expectation-number">1</div>
              <h3>Evaluación Energética</h3>
              <p>
                Comenzamos con una conversación para entender tus necesidades
                y objetivos. Luego, evalúo tu campo energético y patrones
                corporales para identificar áreas de bloqueo.
              </p>
            </div>
            <div className="expectation-card card">
              <div className="expectation-number">2</div>
              <h3>Ejercicios de Grounding</h3>
              <p>
                Te guío a través de ejercicios de enraizamiento que te ayudan
                a conectar con la tierra y establecer una base sólida para
                el trabajo energético.
              </p>
            </div>
            <div className="expectation-card card">
              <div className="expectation-number">3</div>
              <h3>Trabajo Corporal</h3>
              <p>
                Utilizamos posturas, movimientos y técnicas de respiración
                específicas para liberar tensiones y desbloquear el flujo
                energético en áreas específicas.
              </p>
            </div>
            <div className="expectation-card card">
              <div className="expectation-number">4</div>
              <h3>Integración</h3>
              <p>
                Cerramos la sesión con un tiempo de integración donde
                procesamos la experiencia y te proporciono herramientas
                para continuar el trabajo en casa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className="section techniques-section">
        <div className="container">
          <h2 className="section-title">Técnicas Utilizadas</h2>
          <div className="techniques-grid">
            <div className="technique-item">
              <h3>Ejercicios de Respiración</h3>
              <p>
                Técnicas respiratorias específicas para aumentar la circulación
                energética y liberar tensiones emocionales.
              </p>
            </div>
            <div className="technique-item">
              <h3>Posturas Bioenergéticas</h3>
              <p>
                Posiciones corporales diseñadas para estirar y liberar armaduras
                musculares crónicas.
              </p>
            </div>
            <div className="technique-item">
              <h3>Trabajo de Voz</h3>
              <p>
                Ejercicios vocales para liberar la expresión emocional y desbloquear
                la garganta y el pecho.
              </p>
            </div>
            <div className="technique-item">
              <h3>Grounding y Enraizamiento</h3>
              <p>
                Prácticas para conectar con la tierra y establecer una sensación
                de seguridad y presencia.
              </p>
            </div>
            <div className="technique-item">
              <h3>Conciencia Corporal</h3>
              <p>
                Desarrollo de la capacidad de sentir y percibir las sensaciones
                corporales sutiles.
              </p>
            </div>
            <div className="technique-item">
              <h3>Expresión de Movimiento</h3>
              <p>
                Movimientos espontáneos que permiten la liberación natural de
                energía estancada.
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
              <h3>¿Cuántas sesiones necesito?</h3>
              <p>
                El número de sesiones varía según cada persona y sus objetivos.
                Algunas personas experimentan cambios significativos en 3-5 sesiones,
                mientras que otras prefieren un trabajo más profundo a lo largo de
                varios meses.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Es necesario tener experiencia previa?</h3>
              <p>
                No se requiere experiencia previa. Te guiaré paso a paso a través
                de todos los ejercicios y técnicas, adaptándome a tu nivel de
                comodidad y capacidad.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Duele el trabajo bioenergético?</h3>
              <p>
                Algunos ejercicios pueden generar incomodidad temporal al trabajar
                con áreas de tensión, pero siempre trabajamos dentro de tus límites
                y de manera respetuosa con tu proceso.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Qué debo llevar a la sesión?</h3>
              <p>
                Ropa cómoda que permita el movimiento, una botella de agua y una
                toalla pequeña. También es útil traer una esterilla de yoga si
                tienes una.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content card">
            <h2>¿Listo para liberar tu energía vital?</h2>
            <p>
              La bioenergía puede ser una herramienta transformadora en tu camino
              de sanación. Permíteme acompañarte en este viaje de reconexión con
              tu poder interior.
            </p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-primary btn-large">
                Agendar Sesión de Bioenergía
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

export default Bioenergia