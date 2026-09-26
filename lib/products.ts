import type { Product } from "@/types/product";

/**
 * CATÁLOGO DE PRODUCTOS
 * ----------------------
 * Los primeros 9 productos usan las fotos reales que ya nos pasaste
 * (guardadas en public/images/products/). Precios, descripciones y
 * stock son valores de referencia: ajustalos a gusto, es lo único que
 * vas a necesitar tocar para mantener el catálogo al día.
 *
 * Para sumar un producto nuevo sin fotos todavía, dejá "images: []" y
 * la tienda va a mostrar automáticamente el placeholder de marca.
 */

export const products: Product[] = [
  {
    id: 1,
    slug: "mate-imperial-liso",
    name: "Mate Imperial Liso",
    category: "Imperiales",
    price: 22900,
    oldPrice: null,
    description:
      "Mate imperial de cuero liso, con virola cincelada en alpaca y base de apoyo. Un clásico sobrio para el uso de todos los días, con el peso y la calidez del cuero curtido.",
    features: [
      "Cuero curtido liso",
      "Virola cincelada en alpaca",
      "Base de apoyo antivuelco",
      "Interior calabaza curado",
    ],
    images: ["/images/products/mate-imperial-liso.jpeg"],
    stock: 10,
    featured: true,
    badge: "Destacado",
  },
  {
    id: 2,
    slug: "mate-imperial-algarrobo",
    name: "Mate Imperial Algarrobo",
    category: "Imperiales",
    price: 18900,
    oldPrice: null,
    description:
      "Cuerpo tallado en madera de algarrobo con virola de alpaca grabada en guarda geométrica. Cada pieza muestra la veta natural de la madera, así que no hay dos iguales.",
    features: [
      "Madera de algarrobo maciza",
      "Virola de alpaca grabada",
      "Pieza única por veta natural",
      "Terminación al aceite",
    ],
    images: ["/images/products/mate-imperial-algarrobo.jpeg"],
    stock: 7,
    featured: true,
    badge: "Nuevo",
  },
  {
    id: 3,
    slug: "mate-torpedo-premium-base",
    name: "Mate Torpedo Premium con Base",
    category: "Torpedos",
    price: 32000,
    oldPrice: null,
    description:
      "Torpedo de cuero grabado a mano con motivos florales, virola y base de alpaca dorada a juego. Una pieza de gala pensada para lucirse en la mesa.",
    features: [
      "Cuero grabado a mano",
      "Virola y base de alpaca dorada",
      "Diseño floral artesanal",
      "Incluye base de apoyo",
    ],
    images: ["/images/products/mate-torpedo-premium-base.jpeg"],
    stock: 5,
    featured: true,
    badge: "Premium",
  },
  {
    id: 4,
    slug: "mate-imperial-cincelado",
    name: "Mate Imperial Cincelado",
    category: "Imperiales",
    price: 24000,
    oldPrice: null,
    description:
      "Imperial íntegramente bañado y cincelado a mano, con guarda de hojas en la virola. Brillo y detalle para quienes buscan la versión más lujosa del clásico imperial.",
    features: [
      "Baño metálico cincelado a mano",
      "Guarda de hojas en la virola",
      "Base de apoyo incluida",
      "Estuche disponible a pedido",
    ],
    images: ["/images/products/mate-imperial-cincelado.jpeg"],
    stock: 4,
    featured: false,
    badge: "Premium",
  },
  {
    id: 5,
    slug: "mate-criollo",
    name: "Mate Criollo",
    category: "Calabaza",
    price: 14900,
    oldPrice: null,
    description:
      "El mate de calabaza más tradicional, curado y con virola simple de cuero. Liviano, noble y con el sabor que le da el tiempo. Ideal para arrancar o para el mate de todos los días.",
    features: [
      "Calabaza curada a mano",
      "Virola de cuero",
      "Tamaño mediano (500cc aprox.)",
      "Curado previo incluido",
    ],
    images: ["/images/products/mate-criollo.jpeg"],
    stock: 22,
    featured: true,
    badge: "Más vendido",
  },
  {
    id: 6,
    slug: "mate-torpedo-cincelado",
    name: "Mate Torpedo Cincelado",
    category: "Torpedos",
    price: 28900,
    oldPrice: null,
    description:
      "Silueta torpedo bañada y cincelada a mano, con base de apoyo a juego. Una pieza brillante y de peso noble para quienes quieren un mate que se note.",
    features: [
      "Baño metálico cincelado a mano",
      "Base de apoyo a juego",
      "Forma torpedo ergonómica",
      "Interior curado",
    ],
    images: ["/images/products/mate-torpedo-cincelado.jpeg"],
    stock: 6,
    featured: false,
    badge: "Premium",
  },
  {
    id: 7,
    slug: "bombilla-pico-loro-inox",
    name: "Bombilla Pico de Loro Acero Inox",
    category: "Bombillas",
    price: 4500,
    oldPrice: null,
    description:
      "Bombilla de acero inoxidable con boquilla pico de loro, más cómoda para sesiones largas de mate. Filtro perforado fácil de limpiar y de larga vida útil.",
    features: [
      "Acero inoxidable",
      "Boquilla pico de loro",
      "Filtro perforado desmontable",
      "Apta para todo tipo de mate",
    ],
    images: ["/images/products/bombilla-pico-loro-inox.jpeg"],
    stock: 45,
    featured: true,
    badge: null,
  },
  {
    id: 8,
    slug: "yerba-baldo-500g",
    name: "Yerba Mate Baldo 500g",
    category: "Yerbas",
    price: 7500,
    oldPrice: null,
    description:
      "Yerba mate Baldo, procedente de reservas naturales, en paquete de 500g. La compañera de siempre para cebar como corresponde.",
    features: [
      "Paquete de 500g",
      "Procedencia: reservas naturales",
      "Ideal para consumo diario",
      "Sabor tradicional",
    ],
    images: ["/images/products/yerba-baldo-500g.jpeg"],
    stock: 60,
    featured: false,
    badge: null,
  },
  {
    id: 9,
    slug: "termo-1l-media-manija-negro",
    name: "Termo 1L Media Manija — Negro",
    category: "Termos",
    price: 18900,
    oldPrice: null,
    description:
      "Termo de acero inoxidable de 1 litro con media manija y pico cebador, en color negro, para mantener el agua a temperatura toda la tarde. El compañero ideal de cualquier mate.",
    features: [
      "Acero inoxidable",
      "Capacidad: 1 litro",
      "Media manija ergonómica",
      "Pico cebador con traba",
    ],
    images: ["/images/products/termo-1l-media-manija.jpeg"],
    stock: 18,
    featured: true,
    badge: "Nuevo",
  },
  {
    id: 14,
    slug: "termo-1l-media-manija-gris",
    name: "Termo 1L Media Manija — Gris",
    category: "Termos",
    price: 18900,
    oldPrice: null,
    description:
      "Termo de acero inoxidable de 1 litro con media manija y pico cebador, en color gris, para mantener el agua a temperatura toda la tarde. El compañero ideal de cualquier mate.",
    features: [
      "Acero inoxidable",
      "Capacidad: 1 litro",
      "Media manija ergonómica",
      "Pico cebador con traba",
    ],
    images: ["/images/products/termo-1l-media-manija-gris.png"],
    stock: 18,
    featured: false,
    badge: "Nuevo",
  },
  {
    id: 10,
    slug: "combo-iniciacion",
    name: "Combo Iniciación Terramates",
    category: "Combos",
    price: 24900,
    oldPrice: 30600,
    description:
      "Mate criollo + bombilla pico de loro + yerba Baldo 500g de regalo. Todo lo que necesitás para arrancar bien, en un solo pack.",
    features: [
      "Mate criollo de calabaza",
      "Bombilla pico de loro acero inox",
      "Yerba Baldo 500g de regalo",
      "Instructivo de curado incluido",
    ],
    images: [],
    stock: 25,
    featured: true,
    badge: "Más vendido",
  },
  {
    id: 11,
    slug: "combo-premium-regalo",
    name: "Combo Premium para Regalar",
    category: "Combos",
    price: 55000,
    oldPrice: 64000,
    description:
      "Mate torpedo premium con base + bombilla pico de loro + termo 1L, presentados listos para regalar. El combo más elegido para sorprender.",
    features: [
      "Mate torpedo premium con base",
      "Bombilla pico de loro acero inox",
      "Termo 1L media manija",
      "Presentación de regalo",
    ],
    images: [],
    stock: 8,
    featured: true,
    badge: "Premium",
  },
  {
    id: 12,
    slug: "yerba-canarias-tradicional-500g",
    name: "Yerba Mate Canarias Tradicional 500g",
    category: "Yerbas",
    price: 7500,
    oldPrice: null,
    description:
      "Yerba mate Canarias, sabor tradicional, en paquete de 500g. Un clásico de siempre para cebar en cualquier momento del día.",
    features: [
      "Paquete de 500g",
      "Sabor tradicional",
      "Industria brasileña",
      "Ideal para consumo diario",
    ],
    images: ["/images/products/yerba-canarias-tradicional-500g.png"],
    stock: 50,
    featured: false,
    badge: null,
  },
  {
    id: 13,
    slug: "matera-ecocuero",
    name: "Matera Ecocuero",
    category: "Accesorios",
    price: 11900,
    oldPrice: null,
    description:
      "Matera de ecocuero con costura a mano y asas reforzadas, pensada para llevar el mate, el termo y la yerba juntos y prolijos a donde vayas.",
    features: [
      "Ecocuero resistente",
      "Costura reforzada a mano",
      "Asas dobles",
      "Espacio para mate, termo y yerba",
    ],
    images: ["/images/products/matera-ecocuero.png"],
    stock: 20,
    featured: true,
    badge: "Nuevo",
  },
];

export function getAllProducts() {
  return products;
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export const categories: { name: Product["category"]; label: string; description: string }[] = [
  { name: "Imperiales", label: "Imperiales", description: "La forma clásica, sin vueltas" },
  { name: "Torpedos", label: "Torpedos", description: "Silueta estilizada y cómoda" },
  { name: "Calabaza", label: "Calabaza", description: "Lo tradicional, curado a mano" },
  { name: "Madera", label: "Madera", description: "Piezas únicas, veta natural" },
  { name: "Alpaca", label: "Alpaca", description: "Metal noble, brillo duradero" },
  { name: "Bombillas", label: "Bombillas", description: "El complemento que no falta" },
  { name: "Yerbas", label: "Yerbas", description: "Para cebar como corresponde" },
  { name: "Termos", label: "Termos", description: "Agua a temperatura toda la tarde" },
  { name: "Accesorios", label: "Accesorios", description: "Yerberas, posamates y más" },
  { name: "Combos", label: "Combos", description: "Todo listo para regalar o arrancar" },
];
