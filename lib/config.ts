/**
 * CONFIGURACIÓN GENERAL DE TERRAMATES
 * ------------------------------------
 * Este es el único archivo que necesitás editar para cambiar el número de
 * WhatsApp, las redes sociales, el costo de envío o los datos de contacto.
 * Ningún componente tiene estos valores hardcodeados.
 */

export const siteConfig = {
  name: "terramates",
  tagline: "Tu mejor compañía",
  description:
    "Mates, bombillas y accesorios seleccionados con identidad argentina. Calidad artesanal, envíos a todo el país.",
  url: "https://terramates.com.ar",

  // Número de WhatsApp en formato internacional, sin espacios ni símbolos.
  // Ejemplo: 54 9 11 2345-6789 -> "5491123456789"
  whatsappNumber: "5491121591225",

  email: "hola@terramates.com.ar",
  phoneDisplay: "+54 9 11 2159-1225",

  instagram: "https://instagram.com/terramates",
  tiktok: "https://tiktok.com/@terramates",

  shipping: {
    flatRate: 4500,
    freeShippingThreshold: 60000,
  },

  // Datos para transferencia bancaria, mostrados en el checkout cuando
  // el comprador elige "Transferencia bancaria" como medio de pago.
  bankTransfer: {
    holderName: "Enzo Rodriguez",
    cvu: "0000003100099178440956",
  },
};

/**
 * Genera el link de WhatsApp con un mensaje pre-armado.
 * Si se pasa un producto, arma el mensaje "Hola terramates! Estoy
 * interesado/a en el [nombre]." Si no, usa un mensaje genérico.
 */
export function buildWhatsAppLink(message?: string) {
  const defaultMessage = `Hola ${siteConfig.name}! Quería hacer una consulta.`;
  const text = encodeURIComponent(message ?? defaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function whatsAppMessageForProduct(productName: string) {
  return `Hola ${siteConfig.name}! Estoy interesado/a en el ${productName}.`;
}
