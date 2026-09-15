# terramates — tienda online

Tienda e-commerce para terramates, construida con **Next.js 14 (App Router) +
TypeScript + Tailwind CSS**. Sin librerías innecesarias: el carrito es un
Context propio con persistencia en `localStorage`, no hay dependencias de
estado externas.

## 🚀 Cómo correrlo en tu computadora

Necesitás [Node.js](https://nodejs.org) 18 o superior instalado.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000) en el navegador. Los
cambios que hagas en el código se reflejan al instante.

Para generar la versión de producción:

```bash
npm run build
npm run start
```

## ✏️ Lo que vas a editar más seguido

| Qué querés cambiar | Dónde |
|---|---|
| Número de WhatsApp, redes sociales, email, costo de envío | `lib/config.ts` |
| Productos (nombre, precio, fotos, stock, categoría, descuento) | `lib/products.ts` |
| Fotos de producto | Guardá el archivo en `public/images/products/` y poné la ruta en el array `images` del producto |
| Logo | `public/images/logo.png` |
| Colores de marca | `tailwind.config.ts` (paleta `cuero`, `calabaza`, `espresso`, `hueso`) |
| Textos de "Nosotros" | `app/nosotros/page.tsx` |

### Agregar un producto nuevo

Editá `lib/products.ts` y sumá un objeto al array `products`, siguiendo la
misma estructura que los que ya están. Si todavía no tenés la foto, dejá
`images: []` — la tienda va a mostrar automáticamente un placeholder de
marca prolijo (nunca una foto inventada). Apenas agregues la ruta de la
imagen real, la reemplaza sola en toda la tienda (home, tienda, producto,
carrito, checkout).

## 🗂️ Estructura del proyecto

```
app/
  layout.tsx          → layout raíz: fuentes, SEO global, header/footer
  page.tsx             → home
  tienda/               → catálogo con buscador y filtros
  producto/[slug]/      → ficha de producto (SEO dinámico)
  carrito/               → carrito completo
  checkout/              → checkout (simulado, ver más abajo)
  nosotros/, contacto/
  sitemap.ts, robots.ts → SEO técnico

components/            → UI reutilizable (Header, ProductCard, WhatsAppButton, etc.)
context/CartContext.tsx → estado del carrito + persistencia en localStorage
lib/
  config.ts             → WhatsApp, redes, envío — TODO EDITABLE ACÁ
  products.ts            → catálogo de productos
  analytics.ts            → capa preparada para GA4 / Meta Pixel / TikTok Pixel
  format.ts               → formato de moneda ARS
types/product.ts        → tipos TypeScript del catálogo
public/images/           → logo y fotos de producto
```

## 💳 Pagos: qué está listo y qué falta

El checkout pide todos los datos (contacto + dirección + medio de pago) y
muestra el resumen del pedido, pero **la confirmación del pago es
simulada**: no hay credenciales de Mercado Pago ni de ninguna pasarela
todavía. Al confirmar, se genera un número de pedido y se te ofrece
confirmarlo por WhatsApp.

Para conectar Mercado Pago real más adelante:
1. Creá una app en <https://www.mercadopago.com.ar/developers>.
2. Agregá su SDK y armá una API route en `app/api/mercadopago/` que cree la
   preferencia de pago.
3. Reemplazá el `handleSubmit` de `app/checkout/page.tsx` para redirigir al
   checkout de Mercado Pago en lugar de simular la confirmación.

La arquitectura ya deja el lugar preparado: el objeto de medio de pago
(`payment`) y el resumen del pedido ya están armados en ese archivo.

## 📊 Analytics

`lib/analytics.ts` ya dispara los eventos `view_item`, `add_to_cart`,
`begin_checkout` y `purchase` en los momentos correctos. Para que hagan
algo, sumá los scripts de Google Analytics, Meta Pixel y TikTok Pixel en
`app/layout.tsx` (por ejemplo con `next/script`) — no hay que tocar el
resto del código.

## 🛠️ Panel de administración

No incluido en esta primera entrega (para no sobrecargar el proyecto), pero
la arquitectura está lista para sumarlo: `lib/products.ts` expone funciones
puras (`getAllProducts`, `getProductBySlug`, etc.) que hoy leen de un array
en memoria y mañana pueden leer de una base de datos o CMS sin tocar
ningún componente de la tienda.

## 📱 Mobile-first

El diseño se pensó primero para celular (tráfico de Instagram/TikTok):
grillas de 2 columnas en mobile, botones grandes, carrito en drawer lateral
y WhatsApp flotante siempre visible.
