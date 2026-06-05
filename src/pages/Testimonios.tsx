import { Link } from 'react-router-dom'
import './Testimonios.css'

function Testimonios() {
  const testimonios = [
    {
      id: 1,
      nombre: "María G.",
      texto: "Las sesiones con Ivanna transformaron mi vida. Aprendí a escuchar mi cuerpo y a liberar emociones que llevaba años guardando. Su enfoque holístico me dio herramientas para sanar en todos los niveles.",
      servicio: "Bioenergía"
    },
    {
      id: 2,
      nombre: "Carlos R.",
      texto: "Llegué con ansiedad crónica y después de trabajar la bioenergía y el diseño humano, finalmente entiendo quién soy y cómo tomar decisiones alineadas con mi esencia.",
      servicio: "Diseño Humano"
    },
    {
      id: 3,
      nombre: "Ana L.",
      texto: "La terapia somática me ayudó a procesar un trauma que pensé nunca podría superar. Ivanna crea un espacio tan seguro y amoroso que pude sanar de maneras que no imaginaba posibles.",
      servicio: "Terapia Somática"
    },
    {
      id: 4,
      nombre: "Roberto M.",
      texto: "Después de años de terapia tradicional, el trabajo con Ivanna fue revolucionario. Por primera vez sentí que realmente estaba sanando, no solo hablando de mis problemas.",
      servicio: "Bioenergía"
    },
    {
      id: 5,
      nombre: "Elena S.",
      texto: "El Diseño Humano me dio claridad sobre mi propósito de vida. Entendí por qué ciertas cosas siempre fueron fáciles para mí y otras tan difíciles. Ahora vivo con mucha más fluidez.",
      servicio: "Diseño Humano"
    },
    {
      id: 6,
      nombre: "Miguel Á.",
      texto: "Ivanna tiene un don especial para crear un espacio donde te sientes completamente visto y aceptado. Su combinación de habilidades técnicas y presencia amorosa es única.",
      servicio: "Terapia Somática"
    },
    {
      id: 7,
      nombre: "Laura P.",
      texto: "Llegué escéptica pero completamente desesperada. El trabajo bioenergético liberó tensiones que ni sabía que tenía. Ahora duermo mejor, tengo más energía y me siento más viva que nunca.",
      servicio: "Bioenergía"
    },
    {
      id: 8,
      nombre: "David F.",
      texto: "Como hombre, nunca pensé que este tipo de trabajo sería para mí. Ivanna me ayudó a conectar con mis emociones de una manera que respetaba mi forma de ser. Ha sido transformador.",
      servicio: "Terapia Somática"
    }
  ]

  return (
    <div className="testimonios-page">
      {/* Hero Section */}
      <section className="testimonios-hero">
        <div className="container">
          <h1 className="section-title">Testimonios</h1>
          <p className="section-subtitle">
            Las experiencias de personas que han transitado su propio sendero
            de sanación acompañadas por Ivanna
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section">
        <div className="container">
          <div className="testimonios-grid">
            {testimonios.map((testimonio) => (
              <div key={testimonio.id} className="testimonio-card card">
                <div className="testimonio-content">
                  <p className="testimonio-texto">"{testimonio.texto}"</p>
                  <div className="testimonio-autor">
                    <span className="autor-nombre">— {testimonio.nombre}</span>
                    <span className="autor-servicio">{testimonio.servicio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content card">
            <h2>¿Listo para comenzar tu propio viaje de transformación?</h2>
            <p>
              Cada persona tiene su propia historia de sanación. Permíteme
              acompañarte en la creación de la tuya.
            </p>
            <Link to="/contacto" className="btn btn-primary btn-large">
              Agendar Sesión
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonios