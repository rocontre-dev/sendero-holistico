/**
 * Configuración centralizada para el sistema de reservas
 * 
 * Esta configuración permite cambiar fácilmente entre Google Forms y WhatsApp
 * modificando únicamente la constante RESERVATION_MODE.
 */

// ============================================
// MODO DE RESERVA
// ============================================
// Cambiar a "whatsapp" cuando se decida usar WhatsApp como método principal
export const RESERVATION_MODE: "form" | "whatsapp" = "form"

// ============================================
// CONFIGURACIÓN - Google Forms
// ============================================
export const RESERVATION_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfC1prVykYc7dC1ZpkAihn-BV2C89j2JYiy5MymPSIvn3mPbA/viewform"

// ============================================
// CONFIGURACIÓN - WhatsApp
// ============================================
export const WHATSAPP_NUMBER = "34600346556" // Número de WhatsApp (sin espacios ni símbolos)

export const WHATSAPP_DEFAULT_MESSAGE = 
  "Hola Ivanna. Visité Sendero Holístico y me gustaría recibir información sobre tus servicios."

export const WHATSAPP_SERVICE_MESSAGES: Record<string, string> = {
  "Consulta Terapéutica": "Hola Ivanna. Me interesa reservar una Consulta Terapéutica.",
  "Cosmos Corpóreo": "Hola Ivanna. Me interesa reservar una sesión de Cosmos Corpóreo (Carta Natal Chamánica / Diseño Humano).",
  "Habitar Emociones": "Hola Ivanna. Me interesa obtener más información sobre el programa Habitar Emociones.",
  "Movimiento Consciente": "Hola Ivanna. Me interesa obtener información sobre las fechas de Movimiento Consciente.",
  "Meditaciones Guiadas": "Hola Ivanna. Me interesa obtener acceso a las Meditaciones Guiadas.",
}

/**
 * Obtiene el mensaje de WhatsApp para un servicio específico
 * @param serviceName - Nombre del servicio (opcional)
 * @returns Mensaje codificado para URL
 */
export function getWhatsAppMessage(serviceName?: string): string {
  if (!serviceName) {
    return encodeURIComponent(WHATSAPP_DEFAULT_MESSAGE)
  }
  
  // Buscar mensaje específico o usar el predeterminado
  const message = WHATSAPP_SERVICE_MESSAGES[serviceName] || 
    `Hola Ivanna. Me interesa reservar una sesión de ${serviceName}.`
  
  return encodeURIComponent(message)
}

/**
 * Obtiene la URL de reserva según el modo configurado
 * 
 * @param serviceName - Nombre del servicio (opcional, para personalizar mensaje de WhatsApp)
 * @returns URL de reserva (Google Forms o WhatsApp)
 * 
 * @example
 * // Obtener URL genérica
 * getReservationUrl()
 * 
 * @example
 * // Obtener URL para servicio específico
 * getReservationUrl("Consulta Terapéutica")
 */
export function getReservationUrl(serviceName?: string): string {
  if (RESERVATION_MODE === "whatsapp") {
    const message = getWhatsAppMessage(serviceName)
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }
  
  // Por defecto, retorna Google Forms
  return RESERVATION_FORM_URL
}

/**
 * Verifica si el modo actual es WhatsApp
 */
export function isWhatsAppMode(): boolean {
  return RESERVATION_MODE === "whatsapp"
}

/**
 * Verifica si el modo actual es Google Forms
 */
export function isFormMode(): boolean {
  return RESERVATION_MODE === "form"
}