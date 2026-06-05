import { Link } from 'react-router-dom'
import './Recursos.css'

function Recursos() {
  return (
    <div className="recursos-page">
      {/* Hero Section */}
      <section className="recursos-hero">
        <div className="container">
          <h1 className="section-title">Recursos para acompañarte</h1>
          <p className="section-subtitle">
            Meditaciones, prácticas y herramientas para cultivar presencia, 
            regulación emocional y bienestar integral.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="intro-content">
            <p className="intro-text">
              Este espacio es una biblioteca de acompañamiento emocional y crecimiento personal, 
              diseñada para ofrecerte herramientas prácticas que puedes integrar en tu día a día. 
              Cada recurso ha sido cuidadosamente seleccionado para apoyarte en tu camino de 
              autoconocimiento y bienestar.
            </p>
            <p className="intro-text">
              Te invito a explorar estas prácticas con curiosidad y compasión hacia ti mismo. 
              Encuentra aquellas que más resuenen contigo y permítete integrarlas a tu propio ritmo.
            </p>
          </div>
        </div>
      </section>

      {/* Meditaciones Guiadas */}
      <section className="section resource-section">
        <div className="container">
          <h2 className="section-title">Meditaciones Guiadas</h2>
          <p className="section-subtitle">
            Prácticas de meditación para diferentes momentos y necesidades
          </p>
          <div className="resources-grid">
            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
                  <circle cx="12" cy="12" r="4"/>
                </svg>
              </div>
              <div className="resource-badge">Relajación</div>
              <h3>Meditación de Relajación Profunda</h3>
              <p className="resource-description">
                Una práctica guiada para liberar tensiones físicas y mentales, 
                invitando al cuerpo y la mente a un estado de calma profunda.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div className="resource-badge">Ansiedad</div>
              <h3>Meditación para Calmar la Ansiedad</h3>
              <p className="resource-description">
                Herramientas de respiración y visualización para gestionar 
                momentos de ansiedad y recuperar la sensación de seguridad interior.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <div className="resource-badge">Enraizamiento</div>
              <h3>Meditación de Enraizamiento</h3>
              <p className="resource-description">
                Conecta con la tierra y con tu cuerpo físico para sentirte 
                más presente, estable y centrado en el momento actual.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
                </svg>
              </div>
              <div className="resource-badge">Mañanas</div>
              <h3>Meditación para Arrancar tu Día</h3>
              <p className="resource-description">
                Una práctica matutina para comenzar el día con intención, 
                claridad y una sensación de propósito renovado.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulación Emocional */}
      <section className="section resource-section alt-bg">
        <div className="container">
          <h2 className="section-title">Regulación Emocional</h2>
          <p className="section-subtitle">
            Herramientas prácticas para gestionar y comprender tus emociones
          </p>
          <div className="resources-grid">
            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Respiración Consciente</h3>
              <p className="resource-description">
                Técnicas de respiración para regular el sistema nervioso, 
                reducir el estrés y recuperar el equilibrio emocional.
              </p>
              <div className="resource-steps">
                <h4>Práctica básica:</h4>
                <ol>
                  <li>Siéntate cómodamente con la espalda recta</li>
                  <li>Coloca una mano en el pecho y otra en el abdomen</li>
                  <li>Inhala profundamente por la nariz, sintiendo cómo se expande el abdomen</li>
                  <li>Exhala suavemente por la boca</li>
                  <li>Repite durante 5-10 minutos</li>
                </ol>
              </div>
            </div>

            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3>Grounding (Técnica de Anclaje)</h3>
              <p className="resource-description">
                Ejercicios para conectarte con el presente y salir de estados 
                de ansiedad o disociación emocional.
              </p>
              <div className="resource-steps">
                <h4>Técnica 5-4-3-2-1:</h4>
                <ul>
                  <li><strong>5</strong> cosas que puedes VER</li>
                  <li><strong>4</strong> cosas que puedes TOCAR</li>
                  <li><strong>3</strong> cosas que puedes ESCUCHAR</li>
                  <li><strong>2</strong> cosas que puedes OLER</li>
                  <li><strong>1</strong> cosa que puedes SABOREAR</li>
                </ul>
              </div>
            </div>

            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3>Prácticas Somáticas</h3>
              <p className="resource-description">
                Movimientos y ejercicios corporales para liberar emociones 
                almacenadas y reconectar con la sabiduría del cuerpo.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="resource-card card">
              <div className="resource-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3>Autoescucha</h3>
              <p className="resource-description">
                Prácticas para desarrollar la capacidad de escucharte a ti mismo, 
                reconocer tus necesidades y validar tus emociones.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reflexiones */}
      <section className="section resource-section">
        <div className="container">
          <h2 className="section-title">Reflexiones</h2>
          <p className="section-subtitle">
            Pensamientos y exploraciones sobre el bienestar integral
          </p>
          <div className="reflections-grid">
            <div className="reflection-card card">
              <div className="reflection-category">Bienestar</div>
              <h3>El arte de cuidarse</h3>
              <p className="reflection-excerpt">
                El autocuidado no es un lujo, es una práctica fundamental de amor propio 
                que nos permite mostrar nuestra mejor versión al mundo...
              </p>
              <div className="resource-placeholder small">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="reflection-card card">
              <div className="reflection-category">Presencia</div>
              <h3>Vivir en el ahora</h3>
              <p className="reflection-excerpt">
                La presencia es el regalo más grande que podemos darnos. En el momento presente 
                encontramos la paz que buscamos en el pasado o el futuro...
              </p>
              <div className="resource-placeholder small">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="reflection-card card">
              <div className="reflection-category">Emociones</div>
              <h3>La sabiduría emocional</h3>
              <p className="reflection-excerpt">
                Cada emoción tiene un mensaje importante para nosotros. Aprender a escucharlas 
                sin juicio es el primer paso hacia la sanación...
              </p>
              <div className="resource-placeholder small">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="reflection-card card">
              <div className="reflection-category">Conexión cuerpo-mente</div>
              <h3>El diálogo interior</h3>
              <p className="reflection-excerpt">
                Nuestro cuerpo y mente están en constante conversación. Aprender a escuchar 
                este diálogo nos conecta con nuestra verdad más profunda...
              </p>
              <div className="resource-placeholder small">
                <span>Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos Gratuitos */}
      <section className="section resource-section alt-bg">
        <div className="container">
          <h2 className="section-title">Recursos Gratuitos</h2>
          <p className="section-subtitle">
            Materiales descargables para profundizar en tu práctica
          </p>
          <div className="free-resources-grid">
            <div className="free-resource-card card">
              <div className="free-resource-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3>PDFs Informativos</h3>
              <p className="resource-description">
                Guías ilustradas sobre técnicas de respiración, grounding y 
                regulación emocional para tener siempre a mano.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="free-resource-card card">
              <div className="free-resource-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </div>
              <h3>Journaling Guiado</h3>
              <p className="resource-description">
                Plantillas y prompts para explorar tus emociones, sueños y 
                procesos internos a través de la escritura consciente.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="free-resource-card card">
              <div className="free-resource-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
              </div>
              <h3>Guías Descargables</h3>
              <p className="resource-description">
                Manuales completos sobre meditación, mindfulness y prácticas 
                somáticas para profundizar en tu camino.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>

            <div className="free-resource-card card">
              <div className="free-resource-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3>Ejercicios Prácticos</h3>
              <p className="resource-description">
                Secuencias de ejercicios para trabajar la regulación emocional, 
                el enraizamiento y la conexión cuerpo-mente.
              </p>
              <div className="resource-placeholder">
                <span>Próximamente</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content card">
            <h2>¿Buscas un acompañamiento más profundo?</h2>
            <p>
              Estos recursos son un complemento valioso, pero el trabajo terapéutico 
              personalizado ofrece un espacio único para tu proceso de sanación y crecimiento. 
              Si sientes el llamado a profundizar, estoy aquí para acompañarte.
            </p>
            <Link to="/contacto" className="btn btn-primary btn-large">
              Agendar Sesión Personalizada
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Recursos