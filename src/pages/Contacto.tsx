import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Contacto.css'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ nombre: '', email: '', telefono: '', servicio: '', mensaje: '' })
    }, 3000)
  }

  return (
    <div className="contacto-page">
      {/* Hero Section */}
      <section className="contacto-hero">
        <div className="container">
          <h1 className="section-title">Contacto</h1>
          <p className="section-subtitle">
            Da el primer paso en tu camino de sanación. Estoy aquí para acompañarte.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="contacto-grid">
            {/* Contact Form */}
            <div className="contacto-form-section">
              <h2>Envíame un Mensaje</h2>
              <p>
                Completa el formulario y me pondré en contacto contigo lo antes posible
                para responder tus preguntas o agendar una sesión.
              </p>

              {submitted ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <p>¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contacto-form">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre completo *</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Correo electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">Teléfono (opcional)</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="Tu número de teléfono"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="servicio">Servicio de interés</label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="bioenergia">Bioenergía</option>
                      <option value="diseno-humano">Diseño Humano</option>
                      <option value="terapia-somatica">Terapia Somática</option>
                      <option value="varios">Varios servicios</option>
                      <option value="otro">Otro / No estoy seguro</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mensaje">Mensaje *</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Cuéntame qué te trae aquí, tus preguntas o qué tipo de apoyo estás buscando..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-large btn-block">
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="contacto-info-section">
              <h2>Información de Contacto</h2>
              <div className="info-cards">
                <div className="info-card card">
                  <div className="info-icon">📧</div>
                  <h3>Correo Electrónico</h3>
                  <p>hola@senderoholistico.com</p>
                  <p className="info-note">Respondo en un plazo de 24-48 horas</p>
                </div>

                <div className="info-card card">
                  <div className="info-icon">📱</div>
                  <h3>Teléfono / WhatsApp</h3>
                  <p>+34 600 346 556</p>
                  <p className="info-note">Lunes a Viernes, 9am - 6pm</p>
                </div>

                <div className="info-card card">
                  <div className="info-icon">📍</div>
                  <h3>Ubicación</h3>
                  <p>Consultorio Privado</p>
                  <p className="info-note">Ciudad de México (dirección exacta al agendar)</p>
                </div>

                <div className="info-card card">
                  <div className="info-icon">🕐</div>
                  <h3>Horarios</h3>
                  <p>Lunes a Sábado</p>
                  <p className="info-note">9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="additional-info card">
                <h3>¿Qué sucede después de enviar el formulario?</h3>
                <ol>
                  <li>Recibirás un correo de confirmación de que tu mensaje fue enviado.</li>
                  <li>Me pondré en contacto contigo en un plazo de 24-48 horas.</li>
                  <li>Coordinaremos una llamada breve de 15 minutos para conocernos y aclarar dudas.</li>
                  <li>Si decidimos trabajar juntas, agendaremos tu primera sesión.</li>
                </ol>
              </div>

              <div className="reservas-cta card">
                <h3>¿Lista para dar el primer paso?</h3>
                <p>
                  Puedes solicitar una reserva y compartir qué tipo de acompañamiento resuena contigo en este momento.
                </p>
                <Link to="/reservas" className="btn btn-primary">
                  Reservar sesión
                </Link>
              </div>
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
              <h3>¿Ofreces sesiones en línea?</h3>
              <p>
                Sí, ofrezco sesiones virtuales a través de Zoom para personas que
                no pueden asistir presencialmente o viven en otras ciudades.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Cuánto dura una sesión?</h3>
              <p>
                Las sesiones individuales duran entre 60 y 90 minutos, dependiendo
                del tipo de trabajo que realicemos.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Aceptas seguros médicos?</h3>
              <p>
                Actualmente no trabajo con seguros médicos, pero puedo proporcionar
                comprobantes de pago que algunas aseguradoras aceptan para reembolso.
              </p>
            </div>
            <div className="faq-item card">
              <h3>¿Tienes tarifas especiales?</h3>
              <p>
                Ofrezco paquetes de sesiones con descuento y tengo algunos espacios
                con tarifa reducida para personas con recursos limitados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto